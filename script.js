function hitungPinjamanAwal() {
  let P = parseFloat(document.getElementById("pinjamanAwal").value);
  let tenorTahun = parseFloat(document.getElementById("tenorAwal").value);
  let bungaTahunan = parseFloat(document.getElementById("bungaAwal").value) / 100;
  let sisaTahun = parseFloat(document.getElementById("sisaTenor").value);

  let r = bungaTahunan / 12;
  let n = tenorTahun * 12;
  let t = sisaTahun * 12;

  let A = (P * r) / (1 - Math.pow(1 + r, -n));
  let bakiDebet = P * Math.pow(1 + r, t) - (A / r) * (Math.pow(1 + r, t) - 1);

  document.getElementById("hasilAwal").innerHTML = `
        <b>Sisa Baki Debet:</b> Rp ${bakiDebet.toLocaleString()} <br>
        <b>Cicilan Per Bulan:</b> Rp ${A.toLocaleString()} <br>
        <b>Sisa Tenor:</b> ${sisaTahun} tahun
    `;

  // Simpan nilai global untuk simulasi baru
  window.globalData = { bakiDebet, A };
}

function hitungSimulasiBaru() {
  let pinjamanBaru = parseFloat(document.getElementById("pinjamanBaru").value);
  let bungaBaru = 9.25 / 100;
  let A = window.globalData.A;
  let bakiDebet = window.globalData.bakiDebet;

  let r = bungaBaru / 12;
  let nBaru = Math.log(A / (A - pinjamanBaru * r)) / Math.log(1 + r);
  let tenorBaruTahun = Math.ceil(nBaru / 12);

  let freshMoney = pinjamanBaru - bakiDebet;

  document.getElementById("hasilBaru").innerHTML = `
        <b>Bunga Baru:</b> <b>9.25%</b> <br>
        <b>Tenor Baru yang Sesuai:</b> ${tenorBaruTahun} tahun <br>
        <b>Cicilan Per Bulan (tetap):</b> Rp ${A.toLocaleString()} <br>
        <b>Fresh Money yang Diterima:</b> Rp ${freshMoney.toLocaleString()}
    `;
}
