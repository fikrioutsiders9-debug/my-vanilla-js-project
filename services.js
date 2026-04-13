//ARRAY gabungan OBJECT= []/array =rak isinya object {} = label/key dan isi/value
const services= JSON.parse(localStorage.getItem('dataServices')) || [ //json.parse= rakit ulang dari string/key/label jadi data/array/object
    {nama:"Web Development",harga:"500000", Deskripsi:"Make it from scratch to finished"}, // || = atau, jadi klo ga ada data di local storage dia pake array bawaan
    {nama:"UI/UX Design",harga:"600000", Deskripsi:"Make a cool web appearance"},
    {nama:"Maintenance",harga:"700000", Deskripsi:"Fix errors and update content"},
    {nama:"Interactive Calculator",harga:"10000000", Deskripsi:"Create a calculator specifically for business needs"},
    {nama:"Custom Form & Validation",harga:"800000", Deskripsi:"Create a smart contact/order form"},
    {nama:"Landing Page",harga:"1000000", Deskripsi:"One page website that can display a list of products/services"},
    {nama:"Personal Dashboard / Tracker",harga:"1200000", Deskripsi:"Create a personal recording tool (e.g. daily expenses, asset / inventory tracker)"},
]
console.log(services[0].nama); //index buat pilih object di array

let currentData = [...services]; //SPREAD OPERATOR


//ADD NEW SERVICE
const btnAddServices=document.getElementById('btnNewServices');
const inputNewServices=document.getElementById('newServices');
const inputNewDescription=document.getElementById('descriptionServices');
const inputNewPrice=document.getElementById('priceServices');

function simpanDataServices() {
    localStorage.setItem('dataServices', JSON.stringify(services)); //json buat ubah array ke string/label/key
    currentData=[...services];
}

let editIndex=null;
function editJasa(index) {
    editIndex=index;
    document.getElementById('newServices').value= services[index].nama; //hubungin input ke data array
    document.getElementById('descriptionServices').value=services[index].Deskripsi;
    document.getElementById('priceServices').value=services[index].harga;
    btnAddServices.innerText="Edit Service";
    cancelEditBtn.style.display="inline-block";
    document.getElementById('services').scrollIntoView({
                //biar scroll ke atas buat edit
        });
}


function renderServices(data = services) {
    const cardContainer = document.getElementById('card-services');

    // Kosongin dulu biar browser "siap" nerima data baru
    cardContainer.innerHTML = '';
    
    // 1. Ubah tiap item jadi string HTML pake .map() = looping sesuai banyak item/object di array
    const htmlCards = data.map((item, index) => {
        const formatHarga = formatRupiah(item.harga);
        return `
            <div class="card card-reveal" style="animation-delay: ${index * 0.1}s">
                <h3>${item.nama}</h3>
                <p>${item.Deskripsi}</p>
                <p><strong>Price: ${formatHarga}</strong></p>
                <div>
                    <button class="btn-edit" data-index="${index}">Edit</button>
                    <button class="btn-hapus" data-index="${index}">Delete</button>
                </div> 
            </div>`;
    }).join(''); // 2. join('') buat gabungin semua array string jadi satu teks panjang

    // 3. Tempel SEKALIGUS (Lebih kenceng!)
    cardContainer.innerHTML = htmlCards || `<p style="color:white">No services found.</p>`;   // || = OR
    
    updateSummary(data);
}
function resetSearch(){
    document.getElementById('inputSearch').value=''; 
    renderServices();
}

//FUNCTION VALIDATION
function validator(NewServices,NewDesc,NewPrice){
    if (NewServices.length < 5 || NewDesc.length < 10 || NewPrice.length < 5){
    alert('Nama jasa dan deskripsi harus lengkap bro !');
    return false; //BERHENTI
}
    return true; //LANJUT
}
//TOMBOL ADD
btnAddServices.addEventListener('click',()=>{
    cancelEditBtn.style.display="none";
    btnAddServices.innerText="Add Service";
    const NewServices=inputNewServices.value.trim();
    const NewDesc=inputNewDescription.value.trim();
    const NewPrice=inputNewPrice.value.trim();
//VALIDASI HARUS ISI JASA,DESK,HARGA. ! artinya logika kebalikan. artinya jika tidak/false. if jalan klo hasilnya true
if (!validator(NewServices,NewDesc,NewPrice)){ 
    return;
}

if(editIndex !==null){ //PENENTU TOMBOL JADI EDIT/ADD
    //Mode edit
    services[editIndex]={nama:NewServices,Deskripsi:NewDesc,harga:Number(NewPrice)}; //fokus edit services menurut index bukan add
    editIndex=null;
}
else{   
    //mode add
    services.push ({
    nama:NewServices,
    Deskripsi:NewDesc,
    harga:Number(NewPrice) //SIMPAN SEBAGAI ANGKA
})
}
    simpanDataServices();
    renderServices();
    inputNewServices.value = "";
    inputNewDescription.value ="";
    inputNewPrice.value="";
});

// SORT HARGA
let statusSort = "default"
const btnDefault= document.getElementById('sortDefault');
const btnLow= document.getElementById('sortLow');
const btnHigh= document.getElementById('sortHigh');

// Tombol sekarang cuma tugasnya ganti STATUS dan panggil filter pusat
btnDefault.addEventListener('click', () => { statusSort = 'default'; applyAllFilters(); });
btnLow.addEventListener('click', () => { statusSort = 'low'; applyAllFilters(); });
btnHigh.addEventListener('click', () => { statusSort = 'high'; applyAllFilters(); });

function applyAllFilters() {
    const keyword=document.getElementById('inputSearch').value.toLowerCase(); //tolowercase= huruf gede ke kecil biar bisa dibaca
    const budgetLimit = document.getElementById('inputBudget').value;

    currentData =services.filter(item=>{  //BIKIN ARRAY BARU YG DIFILTER .ITEM NAMA YG DIFILTER
        const matchSearch = item.nama.toLowerCase().includes(keyword); //INCLUDES=SI PEKERJA, COCOKIN DATA NAMA YG DIINPUT DAN ARRAY ASLI/SERVICES
        // Apakah harganya masuk budget? (Konversi IDR ke USD dulu)
        const hargaUSD = Number(item.harga) / kursUSDSekarang;        
        // Kalau budget kosong, anggap aja lolos filter. Kalau diisi, baru dicek.
        const matchBudget = budgetLimit === "" || hargaUSD <= Number(budgetLimit);
        return matchSearch && matchBudget; // Dua-duanya harus TRUE
    });

    // Sort (Gunakan statusSort di sini)
    if (statusSort === 'low') {
        currentData.sort((a, b) => a.harga - b.harga);
    } else if (statusSort === 'high') {
        currentData.sort((a, b) => b.harga - a.harga);
    }
    // Kalau 'default', biarin aja sesuai urutan asli array services

renderServices(currentData); //RENDER DATA ARRAY TAPI VERSI FILTER
}

document.getElementById('inputSearch').addEventListener('input',applyAllFilters);
document.getElementById('inputBudget').addEventListener('input', applyAllFilters);

//CANCEL EDIT
const cancelEditBtn=document.getElementById('btnCancelEdit');
cancelEditBtn.addEventListener('click',cancelEdit);
function cancelEdit() {
    cancelEditBtn.style.display="none";
    btnAddServices.innerText="Add Service";
    editIndex=null;
    inputNewServices.value = "";
    inputNewDescription.value ="";
    inputNewPrice.value="";
}


//EVENT DELEGATION = KUMPULAN EVENT LISTENER DALAM 1 CONTAINER
const containerServices= document.getElementById('card-services');
containerServices.addEventListener('click',(e)=>{
    //AMBIL INDEX DARI ATRIBUT DATA YG KITA PASANG DI HTML
    const index= e.target.getAttribute('data-index');
    //CEK IDENTITAS :LU TOMBOL DELETE?
    if(e.target.classList.contains('btn-hapus')){
        hapusJasa(parseInt(index));//PARSEINT MASTIIN TEKS STRING JADI ANGKA
    }
    //LU TOMBOL EDIT?
    else if (e.target.classList.contains('btn-edit')){
        editJasa(parseInt(index));
    }
    else if (e.target.classList.contains('btn-input')) {
    resetSearch();
    }
});

//DROPDOWN SORT
const btnSort=document.getElementById('btnSort');
const sortMenu=document.getElementById('sortMenu');

btnSort.addEventListener('click',()=>{
    sortMenu.classList.toggle('hidden');
});
sortMenu.addEventListener('click',(e)=>{   //TIAP BUTTON DIPENCET, HIDDEN
    if(e.target.tagName==='BUTTON'){
        sortMenu.classList.add('hidden');
    }
})

let kursUSDSekarang = 17000;

//async = function yg ada await 
async function getKursData () {
    //Try: coba dulu klo error diskip / catch dibawah
    try {
        //1. Tembak API , await: tunggu si kurir(fetch)
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        //2. Ubah respon mentah jadi format JSON (biar bia dibaca js)
        const data = await response.json();
        //3. Ambil data spesifik (misal harga USD ke IDR)
        kursUSDSekarang = data.rates.IDR;
        // PANGGIL INI BIAR FILTER BUDGET LANGSUNG UPDATE PAKE KURS BARU
        applyAllFilters();
        //4. Update ke HTML
        updateSummary();
    } catch (error) {
        //5. Kalau internet mati atau API down, handle biar ga crash
        console.error("Waduh, gagal ambil data:", error);
        document.getElementById('api-status').innerText = "Market Data Offline";
    }
}

getKursData();

//LIVE SUMMARY(TOTAL HARGA)
function updateSummary(data=services){
    //reduce=looping, acc= wadah hasil, curr= barang yg dipegang
    const totalHarga = data.reduce((acc,curr) => acc + Number(curr.harga), 0);
    document.getElementById('total-count').innerText = data.length; //length=jumlah item
    document.getElementById('total-price').innerText = formatRupiah(totalHarga);

    const totalDalamUSD = totalHarga / kursUSDSekarang;
    const elementUSD = document.getElementById('total-usd');
    if(elementUSD) {
        elementUSD.innerText = formatUSD(totalDalamUSD);
    }
}

function hapusJasa(index){
    if(confirm('Sure to delete this service?')){
    const allCards= document.querySelectorAll('.card'); //kumpulin kartu jasa/services
    const targetCard =allCards[index]; // target kartu yg mau dihapus, index dpt dari hapusJasa(index)
    targetCard.classList.add('card-delete');//tambahin css animasi
    setTimeout(() =>{
    services.splice(index, 1); //hapus data array pake urutan index, 1= jumlah yg mau dihapus
    simpanDataServices();
    renderServices();
    },400);
    }
}

    //Reset data
function hapusData() {
    if (confirm('Yakin mau ngehapus data?')) { // TAMBAHIN KURUNG INI
        localStorage.removeItem('dataServices');
        location.reload();
    }
}

//FORMAT HARGA
function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID',{  //OTOMATIS TAMBAHIN RP, TITIK, KOMA
        style:'currency',      //RETURN NERUSIN DARI ARRAY KE FUNCTION, DAN KE FOR EACH
        currency:'IDR',
        minimumFractionDigits:0
    }).format(angka);
}
function formatUSD(angka){
    return new Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'USD',
        minimumFractionDigits:0
    }).format(angka);
}

// Ganti panggil renderServices() biasa jadi:
getKursData(); // Ini nanti bakal manggil applyAllFilters yang di dalemnya udah ada renderServices