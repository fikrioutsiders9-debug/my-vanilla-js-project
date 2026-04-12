nama = "Fikri Sultan"
#formatted string = gabungin teks & variable tanpa +
print(f"halo {nama}, Python 3.14 lo udah ON!") 
harga_kursi = 1400000
harga_meja = 1800000
total_harga = harga_kursi + harga_meja
is_delivery = True
print(harga_kursi)
print(harga_meja)
print(is_delivery)
print(f"Total modal set up baru gua: Rp {total_harga}")
"""
Macam" Variable:
1. String = Teks (pake kutip)
2. Integer = Angka bulat
3. Boolean = True / False

Dasar  (Operator) 
+ - * / 
Exponentation (Perpangkat) **
Floor Division (Pembulatan pembagian kebawah) //  hasil tanpa koma
Modulo (Sisa pembagian) %

Module math
math.sqrt(x) = Akar
math.ceil(x) = Pembulatan keatas
math.floor(x) = Pembulatan kebawah
"""
lebar_meja = 160
jumlah_area = 3
# Pembulatan kebawah biar tanpa koma (floor division)
lebar_per_area = lebar_meja // jumlah_area

# Sisa bagi (Modulo)
sisa_area = lebar_meja % jumlah_area

print("Lebar tiap area (Monitor, laptop, kopi): ",lebar_per_area,"cm")
print("Sisa lebar meja yang ga kepake: ",sisa_area,"cm")
print(5**2)

import math #Wajib import biar kebaca
print(math.sqrt(64))
print(math.ceil(3.1))
print(math.floor(3.9))

# Program Filter Angka Ganjil/Genap
# 1. Tanya angka (dan pastiin jadi Angka Bulat pake INT) Input = masukan teks / string
angka = int(input("Coba masukin angka favorit lo, Bro: "))

# 2. Cek Logikanya: "Apakah angka ini kelipatan 5?"
if angka % 5 == 0:
    print(f"Mantap! {angka} itu adalah kelipatan 5.")
else:
    print(f"Gokil! {angka} itu bukan kelipatan 5")

budget_gua = (int(input("Budget gue: ")))
harga_pc = 15000000
if budget_gua > harga_pc :
    print("Sikat bro! Budget lu cukup")
    sisa = budget_gua - harga_pc
    print("Sisa budget gue: ", sisa)
# Nested if (Pilihan berlapis / if in if)
    if sisa >= 5000000 : 
     print("bisa buat beli monitor tambahan ")
# Pilihan sejajar bisa ditambah banyak sebelum pilihan terakhir / else
elif budget_gua == harga_pc :
    ("Waduh pas bgt nih bro")
else :
    print("Sabar bro, tunggu income naik!")
    kurang = budget_gua - harga_pc
    print("Kurangnya: ", kurang)

is_it_friend_pro = True
is_learning_python = True
is_tired = False 

if is_it_friend_pro and is_learning_python and not is_tired :
    print("Sukses bro! mimpi jadi nyata")
else :
    print("Ngopi dulu bro!")

weekend = True
project_done = True
if weekend or project_done and not is_tired :
    print("Gas mabar")
else : print("Istirahat atau belajar bro")

skill_python = True
skill_js = True
is_stuck = False
jam_terbang = 100
# and, and not, or 
if skill_js or skill_python:
    # Nested if
    if jam_terbang >= 100 and not is_stuck: 
        print("Senior dev")
    elif jam_terbang >= 50:
        print("Junior dev")
    else:
        print("Tambah jam terbang dulu bro!")
else: 
    print("Belajar skill dulu bro!")

# List
my_skills = ["Python","Javascript","HTML","CSS"]
needed_skill = ["Python","react"]
# Append (Menambahkan)
new_skill = input("Lagi belajar apa?")
my_skills.append(new_skill)
print("Mantap, skill lo sekarang: ",my_skills)
for skill in needed_skill:
# if-in
    if skill in my_skills:
        print(f"Gass! Skill {skill} lo cocok sama project ini.")
    else:
        print(f"Belajar skill {skill} dulu di FIkridev biar nambah skill!")

# For - in (FOR LOOP) = pegang list satu satu dengan variable sementara
for skill in needed_skill:
    print(skill)
    if skill in my_skills:
        print(f"Skill {skill} aman, sikat projectnya bro")
    else:
        print(f"Belajar skill {skill} dulu bro!")

# While Loop = True jalan terus, False berhenti
keranjang = []
lagi_belanja = True

while lagi_belanja:
    barang = input("Masukin barang ke keranjang!")

    if barang == " ":
        lagi_belanja = False
    else:
        keranjang.append(barang)
        print(f"{barang} masuk ke keranjang")
        
print(f"Daftar belanja: {keranjang}")

# 'harga' di sini cuma nama wadah
def cek_budget(harga):
    if harga > 1000000:
        return "Deal!"
    else:
        return "Tawar lagi!"

# Cara Panggil (Passing Data):
hasil = cek_budget(500000) # Kita lempar 500rb ke wadah 'harga'
print(hasil) # Output: Tawar lagi!

