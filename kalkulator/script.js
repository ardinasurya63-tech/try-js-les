
// LATIHAN JAVASCRIPT DASAR - MINGGU 06
// KALKULATOR NILAI RAPOR

// 1. Pesan pertama ke Console
console.log("Halo, saya Andi!");
console.log("Ini latihan JavaScript pertamaku.");

// 2. Data siswa
const nama = "Andi Pratama";
const kelas = "X PPLG 1";
const kkm = 75;
let nilaiTugas = 85;
let nilaiUts = 78;
let nilaiUas = 89;
let kehadiran = 90;

console.log(`Nama: ${nama}, kelas ${kelas}`);
console.log(`Nilai tugas ${nilaiTugas}, UTS ${nilaiUts}, UAS ${nilaiUas}`);

// 3. Fungsi menghitung rata-rata
const hitungRataRata = (tugas, uts, uas) =>
    (tugas + uts + uas) / 3;

// Fungsi menentukan predikat
function predikat(nilai) {
    if (nilai >= 90) {
        return "A";
    } else if (nilai >= 80) {
        return "B";
    } else if (nilai >= 70) {
        return "C";
    } else {
        return "D";
    }
}

// Fungsi membuat rapor
function rapor(namaSiswa, tugas, uts, uas) {
    const rata = hitungRataRata(tugas, uts, uas);

    return `${namaSiswa}: rata-rata ${rata}, predikat ${predikat(rata)}`;
}

// 4. Hasil nilai Andi di Console
const rataRata = hitungRataRata(
    nilaiTugas,
    nilaiUts,
    nilaiUas
);

const lulus = rataRata >= kkm;
const dapatSertifikat = lulus && kehadiran >= 80;

console.log(`Rata-rata nilai: ${rataRata}`);
console.log(`Predikat: ${predikat(rataRata)}`);
console.log(`Lulus KKM: ${lulus}`);
console.log(`Dapat sertifikat: ${dapatSertifikat}`);

if (lulus) {
    console.log("Selamat, kamu lulus KKM!");
} else {
    console.log("Tetap semangat, ikuti remedial ya.");
}

// 5. Menguji fungsi predikat
console.log(`predikat(95) = ${predikat(95)}`);
console.log(`predikat(90) = ${predikat(90)}`);
console.log(`predikat(84) = ${predikat(84)}`);
console.log(`predikat(70) = ${predikat(70)}`);
console.log(`predikat(69) = ${predikat(69)}`);

// 6. Rapor beberapa siswa
console.log(rapor("Andi", 85, 78, 89));
console.log(rapor("Sinta", 92, 88, 96));
console.log(rapor("Budi", 70, 65, 72));


// ==================================
// 7. MENGHUBUNGKAN JAVASCRIPT DENGAN HTML
// ==================================

// Mengambil elemen HTML
const inputTugas = document.querySelector("#tugas");
const inputUTS = document.querySelector("#uts");
const inputUAS = document.querySelector("#uas");

const tombol = document.querySelector("#tombol");
const hasil = document.querySelector("#hasil");

// Menjalankan program ketika tombol diklik
tombol.addEventListener("click", () => {

    // Mengambil nilai dari input HTML
    const tugas = Number(inputTugas.value);
    const uts = Number(inputUTS.value);
    const uas = Number(inputUAS.value);

    // Memeriksa apakah semua input sudah diisi
    if (
        inputTugas.value === "" ||
        inputUTS.value === "" ||
        inputUAS.value === ""
    ) {
        hasil.textContent = "Semua nilai harus diisi!";
        return;
    }

    // Memeriksa batas nilai
    if (
        tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100
    ) {
        hasil.textContent = "Nilai harus antara 0 sampai 100!";
        return;
    }

    // Menghitung rata-rata
    const rata = hitungRataRata(tugas, uts, uas);

    // Menentukan predikat
    const hasilPredikat = predikat(rata);

    // Menentukan kelulusan
    const statusLulus = rata >= kkm;

    // Menentukan sertifikat
    const sertifikat = statusLulus && kehadiran >= 80;

    // Menampilkan hasil ke halaman HTML
    hasil.textContent =
        `Nama: ${nama}\n` +
        `Kelas: ${kelas}\n` +
        `Rata-rata nilai: ${rata.toFixed(1)}\n` +
        `Predikat: ${hasilPredikat}\n` +
        `Lulus KKM: ${statusLulus ? "Ya" : "Tidak"}\n` +
        `Dapat sertifikat: ${sertifikat ? "Ya" : "Tidak"}`;

});
