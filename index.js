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
  database: "tugas_crudfix",
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
    jurusan: req.body.jurusan,
  };
  let sql = "INSERT INTO mahasiswa SET ?";
  let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.redirect("/");
  });
});

//untuk update data
app.post("/update", (req, res) => {
  let sql =
    "UPDATE mahasiswa set nama ='" +
    req.body.nama +
    "',nbi='" +
    req.body.nbi +
    "', jurusan ='" +
    req.body.jurusan +
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

//server jagan dihapus 
app.listen(port, () => {
  console.log("Server berjalan di port 8000");
});
