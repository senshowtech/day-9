exports.getDate = (get_start_date, get_end_date) => {
  let startdate = new Date(get_start_date);
  let enddate = new Date(get_end_date);
  let jarak = enddate - startdate;
  let milisecond = 1000;
  let detik = 3600;
  let jam = 24;
  let hari = Math.floor(jarak / (milisecond * detik * jam));
  let minggu = Math.floor(hari / 7);
  let bulan = Math.floor(hari / 30);
  if (hari <= 6) {
    return `${hari} hari`;
  } else if (hari > 30) {
    return `${bulan} bulan`;
  } else if (hari >= 6) {
    return `${minggu} minggu`;
  }
};

exports.dateMonth = (get_start_date, get_end_date) => {
  let nama_bulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  hari_start = get_start_date.getDate();
  hari_end = get_end_date.getDate();
  bulan_start = nama_bulan[get_start_date.getMonth()];
  bulan_end = nama_bulan[get_end_date.getMonth()];
  tahun_start = get_start_date.getFullYear();
  tahun_end = get_end_date.getFullYear();
  let akhir = `${hari_start} ${bulan_start} ${tahun_start} - ${hari_end} ${bulan_end} ${tahun_end}`;
  return akhir;
};
