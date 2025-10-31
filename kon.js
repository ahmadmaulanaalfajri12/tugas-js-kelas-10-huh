function nama(name) {
  return name;
}
function umur(age) {
  return age;
}
function sekolah(school) {
  return school;
}
function hobi(hobby) {
  return hobby;
}
function alamat(address) {
  return address;
}
function cita(mimpi) {
  return mimpi;
}
function pacar(love) {
  return love;
}

document.write(`
  <br> Halo, nama saya adalah ${nama("Ahmad Maulana")} 
  <br> Umur saya adalah ${umur(15)} tahun
  <br> Saya bersekolah di ${sekolah("SMK TI BAZMA")}
  <br> Hobi saya adalah ${hobi("membaca novel dan mengaji")}
  <br> Saya tinggal di ${alamat("Perumahan BSD pinggir rumah Rafi Ahmad")}
  <br> Cita-cita saya adalah ${cita(
    "jadi orang sukses dan menjadi presiden di tahun 2035"
  )}
  <br> Pacar saya adalah ${pacar(
    "tidak punya pacar karena masih fokus belajar"
  )}
`);
