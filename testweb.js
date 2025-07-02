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

    fetch("https://script.google.com/macros/s/AKfycbySHpHLFl04A_mU0-h0UKl16ah6MoJQHuNXb2ayLZQGTyWByHK6Al0vDE27MYea3AP4eg/exec", {
        method: "POST",
     headers: {
            "Content-Type": "application/json"
        }
        body: JSON.stringify({
            nama: namaTerpilih,
            namaKomponen: namaKomponen,
            blok: blok,
            diambil: diambil,
            ditambahkan: ditambahkan
        }),
      
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

