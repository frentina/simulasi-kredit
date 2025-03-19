document.getElementById("kreditForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let pinjamanAwal = parseFloat(document.getElementById("pinjamanAwal").value);
  let bungaLama = parseFloat(document.getElementById("bungaLama").value) / 100;
  let bungaBaru = parseFloat(document.getElementById("bungaBaru").value) / 100;
  let tenor = parseInt(document.getElementById("tenor").value);

  // Hitung cicilan lama
  let cicilanLama = (pinjamanAwal * bungaLama) / 12 + pinjamanAwal / tenor;

  // Hitung cicilan baru
  let pinjamanBaru = pinjamanAwal; // Misal baki awal tetap
  let cicilanBaru = (pinjamanBaru * bungaBaru) / 12 + pinjamanBaru / tenor;

  // Hitung fresh money (jika ada tambahan dana)
  let freshMoney = pinjamanBaru - pinjamanAwal;

  document.getElementById("hasil").innerHTML = `
        <p><strong>Cicilan Lama:</strong> Rp${cicilanLama.toFixed(2)}</p>
        <p><strong>Cicilan Baru:</strong> Rp${cicilanBaru.toFixed(2)}</p>
        <p><strong>Fresh Money:</strong> Rp${freshMoney.toFixed(2)}</p>
    `;
});
