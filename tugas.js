function ganjilGenap(angka) {
    if (angka % 2 === 0) {
        return "Genap";
    } else {
        return "Ganjil";
    }
}
console.log("==Bilangan Ganjil dan Genap=="); 
console.log(ganjilGenap(5)); // Ganjil
console.log(ganjilGenap(12)); // Genap
console.log(ganjilGenap(10)); // Genap