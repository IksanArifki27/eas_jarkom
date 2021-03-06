const path = require("path");
const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const port = process.env.PORT || 8000;
const app = express();

//koneksi ke sql
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tugas_eas",
});

//connect to database
conn.connect((err) => {
  if (err) throw err;
  console.log("Database sudah konek ...");
});

app.set("views", path.join(__dirname, "views"));
// tempalte engine
app.set("view engine", "hbs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/assets", express.static(__dirname + "/public"));

// mahasiswa
//route halaman depon
app.get("/eas_jarkom", (req, res) => {
  let sql = "SELECT * FROM mahasiswa";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.render("mhs_view", {
      results: results,
    });
  });
});

//untuk tambah data
app.post("/save", (req, res) => {
  let data = {
    nama: req.body.nama,
    nbi: req.body.nbi,
    id_jurusan: req.body.id_jurusan,
  };
  let sql = "INSERT INTO mahasiswa SET ?";
  let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.redirect("/eas_jarkom");
  });
});

//untuk update data
app.post("/update", (req, res) => {
  let sql =
    "UPDATE mahasiswa set nama_dos ='" +
    req.body.nama_dos +
    "',nbi='" +
    req.body.nbi +
    "', id_jurusan ='" +
    req.body.id_jurusan +
    "' WHERE id_mhs =" +
    req.body.id;
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.redirect("/eas_jarkom");
  });
});

//untuk hapus data
app.post("/delete", (req, res) => {
  let sql = "DELETE FROM mahasiswa WHERE id_mhs=" + req.body.id_mhs + "";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.redirect("/eas_jarkom");
  });
});

// untuk dosen==================================
app.get("/jurusan", (req, res) => {
  let sql = "SELECT * FROM category_jurusan";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.render("cat_jurusan", {
      results: results,
    });
  });
});

//untuk tambah data
app.post("/simpan", (req, res) => {
  let data = {
    nama: req.body.nama,
  };
  let sql = "INSERT INTO category_jurusan SET ?";
  let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.redirect("/jurusan");
  });
});

//untuk update data
app.post("/perbarui", (req, res) => {
  let sql =
    "UPDATE category_jurusan set nama ='" +
    req.body.nama +
    "' WHERE id_jurusan =" +
    req.body.id;
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.redirect("/jurusan");
  });
});

//untuk hapus data
app.post("/hapus", (req, res) => {
  let sql = "DELETE FROM dosen WHERE id_jurusan =" + req.body.id_dos + "";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.redirect("/jurusan");
  });
});
//server jagan dihapus 
app.listen(port, () => {
  console.log("Server berjalan di port 8000");
});
