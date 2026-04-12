                  function cekProject(budget, deadline) {
    if (budget >= 2000000 && deadline >= 5) {
        return "Sikat!! Project bagus nih";
    }
    else {
        return "Skip! Cari yang lebih bagus";
    }
}

console.log(cekProject(5000000,10));

const keranjang = [
    {nama: "Monitor", harga: 3000000},
    {nama: "Cooler", harga: 1500000}
]

function hitungCheckout(daftarBelanja) {
    let total = 0;
    daftarBelanja.forEach(item=>{
        console.log(`Menambahkan:${item.nama}, harga: ${item.harga}`)
        total += Number(item.harga);
    })

    if (total >= 5000000) {
        let diskon = total * 0.1;
        let totalAkhir = total - diskon;
        return `Total: ${total}, Diskon: ${diskon}, Total akhir: ${totalAkhir}`
    }
    else {
        return `Total: ${total}, Diskon: -, Total akhir: ${total}`
    }
}

console.log(hitungCheckout(keranjang))