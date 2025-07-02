// function pilihNama() {
//     const pilihan = ["Naya", "Syifa", "Rara", "Safa"];
//     let list = "Pilih nama:\n";
//     pilihan.forEach((nama, index) => {
//         list += `${index + 1}. ${nama}\n`;
//     });
//     let pilihanUser = prompt(list + "Masukkan nomor pilihan:");
//     if (pilihanUser) {
//         let index = parseInt(pilihanUser) - 1;
//         if (index >= 0 && index < pilihan.length) {
//             alert("Nama yang kamu pilih: " + pilihan[index]);
//         } else {
//             alert("Pilihan tidak valid.");
//         }
//     }
// }

// function inputDetail() {
//     let jumlah = prompt("Masukkan jumlah:");
//     let diambil = prompt("Masukkan jumlah diambil:");
//     let ditambahkan = prompt("Masukkan jumlah ditambahkan:");

//     if (jumlah && diambil && ditambahkan) {
//         alert(`Jumlah awal: ${jumlah}\nDiambil: ${diambil}\nDitambahkan: ${ditambahkan}\nJumlah akhir: ${parseInt(jumlah) - parseInt(diambil) + parseInt(ditambahkan)}`);
//     } else {
//         alert("Semua input harus diisi.");
//     }
// }


// document.getElementById('btnSimpanNama').addEventListener('click', function () {
//     const selectedName = document.getElementById('selectNama').value;
//     if (selectedName) {
//         document.getElementById('btnNama').textContent = selectedName;
//     }
// });

// document.getElementById('btnKirimDetail').addEventListener('click', function () {
//     const jumlah = document.getElementById('inputJumlah').value;
//     const status = document.getElementById('inputStatus').value;

//     if (jumlah) {
//         document.getElementById('hasilDetail').textContent = `Data berhasil dikirim: ${jumlah} ${status}`;
//         setTimeout(() => {
//             const modal = bootstrap.Modal.getInstance(document.getElementById('modalDetail'));
//             modal.hide();
           
//             document.getElementById('inputJumlah').value = '';
//             document.getElementById('inputStatus').value = 'Diambil';
//             document.getElementById('hasilDetail').textContent = '';
//         }, 1500);
//     } else {
//         alert("Silakan masukkan jumlah terlebih dahulu.");
//     }
// });


//percobaan kedua
// let currentKomponen = "";


// document.querySelectorAll(".btn-detail").forEach(button => {
//     button.addEventListener("click", function() {
//         const row = this.closest("tr");
//         currentKomponen = row.querySelector(".komponen-nama").innerText;
//     });
// });

// document.getElementById("btnHitungDetail").addEventListener("click", function() {
//     const blok = document.getElementById("inputJumlah").value;
//     const diambil = document.getElementById("inputDiambil").value;
//     const ditambahkan = document.getElementById("inputDitambahkan").value;
//     const namaTerpilih = document.getElementById("btnNama").innerText || "Belum Dipilih";
//     const namaKomponen = currentKomponen; 

//       if (!blok || !diambil || !ditambahkan || !namaKomponen) {
//         alert("Mohon lengkapi semua input sebelum mengirim.");
//         return;
//     }

//     fetch("https://script.google.com/macros/s/AKfycbwo6Shsj4DArn1741NMnSVV9jlo0zij13NGNRYmMvUD75DFyoGExX16THAZH6NEWVJyeA/exec", {
//         method: "POST",
//         body: JSON.stringify({
//             nama: namaTerpilih,
//             namaKomponen: namaKomponen,
//             blok: blok,
//             diambil: diambil,
//             ditambahkan: ditambahkan
//         }),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         alert("Data berhasil dikirim!");
//         console.log(data);
//         updateTableData(namaKomponen, diambil, ditambahkan);
//     })
//     .catch(error => {
//         alert("Gagal mengirim data: " + error);
//         console.error(error);
//     });
// });


// let currentKomponen = "";

// document.querySelectorAll(".btn-detail").forEach(button => {
//     button.addEventListener("click", function() {
//         const row = this.closest("tr");
//         currentKomponen = row.querySelector(".komponen-nama").innerText;
//     });
// });

// document.getElementById("btnSimpanNama").addEventListener("click", function() {
//     const namaTerpilih = document.getElementById("selectNama").value;
//     if (namaTerpilih) {
//         document.getElementById("btnNama").innerText = namaTerpilih;
//     }
// });


// function updateTableData(namaKomponen, diambil, ditambahkan) {
//     document.querySelectorAll("tr").forEach(row => {
//         const komponenCell = row.querySelector(".komponen-nama");
//         const qtyCell = row.querySelector(".komponen-qty");
//         if (komponenCell && komponenCell.innerText === namaKomponen) {
//             let qty = parseInt(qtyCell.innerText) || 0;
//             qty = qty - parseInt(diambil) + parseInt(ditambahkan);
//             qtyCell.innerText = qty;

//             const ketCell = row.querySelector(".komponen-ket");
//             if (qty < 10) {
//                 ketCell.innerText = "Harus Dibeli!";
//             } else {
//                 ketCell.innerText = "";
//             }
//         }
//     });
// }


//baru
let currentKomponen = "";

// Ambil nama yang dipilih
document.getElementById("btnSimpanNama").addEventListener("click", function () {
    const selected = document.getElementById("selectNama").value;
    if (selected) {
        document.getElementById("btnNama").innerText = selected;
    }
});

// Simpan nama komponen yang ditekan
document.querySelectorAll(".btn-detail").forEach(button => {
    button.addEventListener("click", function () {
        const row = this.closest("tr");
        currentKomponen = row.querySelector(".komponen-nama").innerText;
    });
});

// Kirim data ke Google Apps Script
document.getElementById("btnHitungDetail").addEventListener("click", function () {
    const blok = document.getElementById("inputJumlah").value;
    const diambil = document.getElementById("inputDiambil").value;
    const ditambahkan = document.getElementById("inputDitambahkan").value;
    const namaTerpilih = document.getElementById("btnNama").innerText || "Belum Dipilih";
    const namaKomponen = currentKomponen;

    fetch("https://script.google.com/macros/s/AKfycbwIDQoMQMp_Ij_o32Rw2a-8gHtIJdoyjraHUWz6jRBE9fcHA5z_ZJXRV4gyJnVGW4jLrg/exec", {
        method: "POST",
        body: JSON.stringify({
            nama: namaTerpilih,
            namaKomponen: namaKomponen,
            blok: blok,
            diambil: diambil,
            ditambahkan: ditambahkan
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.result === "success") {
                alert("Data berhasil dikirim!");
                updateTableData(namaKomponen, diambil, ditambahkan);
            } else {
                alert("Gagal mengirim: " + data.message);
            }
        })
        .catch(error => {
            console.error(error);
            alert("Gagal mengirim data: " + error);
        });
});

// Update tabel di website
function updateTableData(namaKomponen, diambil, ditambahkan) {
    document.querySelectorAll("tr").forEach(row => {
        const komponenCell = row.querySelector(".komponen-nama");
        const qtyCell = row.querySelector(".komponen-qty");
        if (komponenCell && komponenCell.innerText === namaKomponen) {
            let qty = parseInt(qtyCell.innerText) || 0;
            qty = qty - parseInt(diambil) + parseInt(ditambahkan);
            qtyCell.innerText = qty;

            const ketCell = row.querySelector(".komponen-ket");
            if (qty < 10) {
                ketCell.innerText = "Harus Dibeli!";
            } else {
                ketCell.innerText = "";
            }
        }
    });
}

