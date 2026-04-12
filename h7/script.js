// 1. VARIABLE (Gunakan const untuk elemen yang tetap)
let nama = ""; 
let ischanged = false;

// Ambil data di awal biar bisa dipake di mana aja
const namaTersimpan = localStorage.getItem('namaUser');
if (namaTersimpan) {
    nama = namaTersimpan;
}

// 2. FUNCTION button hero 
function togle() {
    const overlay = document.querySelector('.hero .overlay');
    const judul = document.querySelector('.hero h1');
    const button = document.querySelector('.btn-main');
    const servicesView = document.getElementById('services');

    if (ischanged == false) {
        document.querySelector('.customAlert').classList.add('alertShow');
        overlay.style.opacity = "1";
        judul.style.opacity = "0";
        setTimeout(() => {
            judul.style.opacity = "1";
            judul.style.transform = "translateY(-8px)";
            // Pindah innerText ke dalam timeout biar ganti pas teks lagi transparan
            judul.innerText = "lu berhasil " + nama + "!";
        }, 300);
        button.innerText = "Done " + nama + "!";
        ischanged=true;
    } else {
        document.querySelector('.customAlert').classList.remove('alertShow');
        overlay.style.opacity = "0";
        judul.style.opacity = "0";
        setTimeout(() => {
            judul.style.opacity = "1";
            judul.style.transform = "translateY(0px)";
            judul.innerText = "Welcome " + nama + "!";
        }, 300);
        button.innerText = "Start " + nama + "!";
        servicesView.scrollIntoView({
                //biar scroll ke services pas pencet start
        });
        ischanged = false;
    }
}

    //HAMBURGER dan SIDEBAR
    const menuNav=document.getElementById('menuNav');
    const sidebar=document.getElementById('mySidebar');
    const overlaySidebar=document.getElementById('overlaySidebar');
    const menuItems=document.querySelectorAll('.menu-item');

    function closeSidebar(){
        menuNav.classList.toggle('active');
        sidebar.classList.toggle('active');
        overlaySidebar.classList.toggle('active'); 
    }
    menuNav.addEventListener('click',closeSidebar);
    overlaySidebar.addEventListener('click',closeSidebar);
    menuItems.forEach(item=>{
    // Cek: Jika ID yang diklik BUKAN darkToggle, baru jalankan closeSidebar
        item.addEventListener('click',()=>{      
            if(item.id !='darkToggle') {
                closeSidebar();
            }
        });
    });

    //Input nama
function updateNama() {
    const isiInput = document.getElementById('inputNama').value;
    if (isiInput == "") {
        alert("Nama ga boleh kosong bro!");
    } else {
        nama = isiInput;
        localStorage.setItem('namaUser', nama);
        alert('Nama lo udah disimpen ' + nama);
        // Langsung reload biar logika DOMContentLoaded di bawah yang kerja nampilin nama
        location.reload(); 
    }
}

    //Reset data
function hapusData() {
    if (confirm('Yakin mau ngehapus data?')) { // TAMBAHIN KURUNG INI
        localStorage.removeItem('namaUser');
        localStorage.removeItem('theme');
        localStorage.removeItem('dataServices');
        location.reload();
    }
}

// 3. EVENT LISTENER
document.addEventListener('DOMContentLoaded', function () {
    const h1Hero = document.querySelector('.hero h1');
    const inputGroup = document.querySelector('.input-group');
   

    // Cek Nama
    if (namaTersimpan) {
        h1Hero.innerText = 'Welcome ' + namaTersimpan + '!';
        inputGroup.style.display = 'none';
    }

//DOUBLE DISABLED BUTTON
const inputNama=document.getElementById('inputNama');
const btnSimpan= document.getElementById('btnSimpan');
const btnStart=document.getElementById('btnStart');

inputNama.addEventListener('input',() =>{ //input=cek setiap 1 huruf yg keinput
    if(inputNama.value.trim().length>=3){  //trim= spasi diawal dan akhir tidak dihitung, length= menghitung jumlah huruf
        btnSimpan.disabled=false;
    }
    else{
        btnSimpan.disabled=true;
    }
});

if (namaTersimpan) {
    btnStart.disabled=false;
}

});



