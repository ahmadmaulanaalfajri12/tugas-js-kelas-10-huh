// let day=3;
// switch(day){
//     case 1:
//         console.log("Hari Senin");
//         break;
//     case 2:
//         console.log("Hari Selasa");
//         break;
//     case 3:
//         console.log("Hari Rabu");
//         case 4:
//             console.log("hari kamis");
//             break;
//             case 4:
//                 console.log("hari jumat");
//                 case 5:
//                     break;
//                     console.log("hari sabtu");
//                     case 4:
//                         break;
//                         console.log("hari minggu");
//                         break;
//                         default:
//                             console.log("hari tidak valid");
// }
// let umur=17;
// let nama="ahmad";
// let asal="bandung";
// let perkenalan=`halo nama saya ${nama}, umur saya ${umur} tahun, saya berasal dari ${asal}`;
// console.log(perkenalan);
// let angka = [10, 20, 30, 40];

// let hapusTerakhir = angka.pop(); 

// console.log(angka);          // Output: [10, 20, 30]
// console.log(hapusTerakhir); // Output: 40

// // belajar ternary operator
// let umur = 2;
// let status= umur >= 20? "sudah menikah" : "belum menikah";
// console.log(status);

// }
// // Memanggil function dan menyimpan hasilnya di variabel
// let hasil = luasPersegiPanjang(10, 7);

// // Menampilkan hasil ke console
// console.log("Luas persegi panjang adalah:", hasil);

// Function ekspresi pakai let
// let hitungLuasPersegi = function(sisi) {
//   let hasil = sisi * sisi;
//   console.log(`Sisi: ${sisi}`);
//   console.log(`Luas persegi adalah: ${hasil}`);
//   return hasil;
// };

// // Memanggil function
// hitungLuasPersegi(10);

// Arrow Function pakai let
// let hitungLuasPersegi = (sisi) => {
//   let hasil = sisi * sisi;
//   console.log(`Sisi: ${sisi}`);
//   console.log(`Luas persegi adalah: ${hasil}`);
//   return hasil;
// };

// Memanggil function
// hitungLuasPersegi(6);

// function sapa() {
//   console.log("Halo, rek kembali lgi ama eug")
// }

// sapa(); // memanggil function

// let skor = 85;
// let nilai= skor <= 50 ?"f"
// :skor <70 ?"d"
// : skor <80 ?"c"
// : skor <90 ?"b"
// : "a";
// console.log(`nilai anda adalah ${nilai}`);
// function kelas () {
//     console.log('eug berada di kelas X sija dan wali kelas eug adalah bapa mirza')
// }

// kelas();
// function nama () {
//     alert('eug adalah ahmad maulana siswa terganteng di smk')
// }
// nama();
    
// function school (sekolah) {
//     return sekolah;
// }
// document.write(`eug berada di ${school('SMK TI BAZMA')} <br>`);

// function sapanama(nama) {
//     console.log(`halo ` + nama +`,selamat belajar yareuuu`)
// }
// sapanama(`si ganteng ahmed`)
// sapanama(`tire X`)

// // function tambah (a,b) {
// //     return a + b;
// // }

// // let hasil = tambah (5,10);
// // document.write(`hasil penjumlahan adalah `+ hasil);

// // function luasPersegiPanjang(p, l) {
// //     return p * l;
// // }
// // document.write(`<br> luas persegi panjang adalah 10*7=` + luasPersegiPanjang(10,7));

function nama(){
    document.write("halo,nama saya adalah ahmad maulana");
}
nama();
function umur(age){
    document.write(" umur saya adalah " + age + " tahun");
}
umur(15);
 function sekolah(school){
    document.write("saya bersekolah di " + school);
    }
sekolah("SMK TI BAZMA");
    function hobi(hobby){
        document.write(" hobi saya adalah " + hobby);
    }
    hobi("membaca novel dan mengaji");
    function alamat(address){
        document.write("saya tinggal di " + address);
    }
    alamat("perumahan bsd pinggir rumah rafi ahmad");
    function cita(cita){
        document.write(" cita-cita saya adalah " + cita);
    }
    cita("jadi orang sukses dan menjadi persiden di tahun 2035");
    function pacar(love){
        document.write(" pacar saya adalah " + love);
    }
    pacar("tidak punya pacar karena masih fokus belajar");

    