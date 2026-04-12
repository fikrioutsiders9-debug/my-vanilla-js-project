def cek_project(budget, deadline):
    if budget >= 2000000 and deadline >= 5:
        return "Sikat!! Worth it banget bro"
    else:
        return "Jangan bro! Cari yang lebih worth"
    
print(cek_project(5000000,10))

keranjang = [
    {"nama": "Monitor", "harga": 3000000},
    {"nama": "Cooler", "harga": 1500000}
]    

import math

def hitung_checkout(daftar_belanja):
    total = 0
    for item in daftar_belanja:
        print(f"Menambahkan: {item['nama']},harga: {item['harga']}")
        total += item['harga']
  
        if total >= 5000000:
            diskon = (math.floor(total * 0.1))
            total_akhir = (math.floor(total - diskon))
            print(f"Total: {total}, Diskon: {diskon}, Total harga: {total_akhir}")
        else:
            print(f"Total: {total}. Diskon: -, Total harga: {total}")
    
    return

print(hitung_checkout(keranjang))