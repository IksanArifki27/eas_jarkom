-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 18, 2021 at 08:01 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tugas_eas`
--

-- --------------------------------------------------------

--
-- Table structure for table `category_jurusan`
--

CREATE TABLE `category_jurusan` (
  `id_jurusan` int(11) NOT NULL,
  `nama` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category_jurusan`
--

INSERT INTO `category_jurusan` (`id_jurusan`, `nama`) VALUES
(1, 'Teknik informatika'),
(2, 'Hukum');

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswa`
--

CREATE TABLE `mahasiswa` (
  `id_mhs` int(11) NOT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `nbi` varchar(100) DEFAULT NULL,
  `id_jurusan` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mahasiswa`
--

INSERT INTO `mahasiswa` (`id_mhs`, `nama`, `nbi`, `id_jurusan`) VALUES
(4, 'Rendi Dwi', '1462000020', 1),
(5, 'afif zakaria', '1462000045', 2);

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswaa`
--

CREATE TABLE `mahasiswaa` (
  `id_mhs` int(11) NOT NULL,
  `nama` varchar(200) DEFAULT NULL,
  `nbi` varchar(11) DEFAULT NULL,
  `jurusan` varchar(100) NOT NULL,
  `kode_matkul` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mahasiswaa`
--

INSERT INTO `mahasiswaa` (`id_mhs`, `nama`, `nbi`, `jurusan`, `kode_matkul`) VALUES
(1, 'Iksan arifki', '1462000028', 'MultiMedia', 'L801'),
(2, 'ferro ade', '1462000045', 'REKAYASA PERANGKAT LUNAK (RPL)', 'Q302'),
(3, 'yosafat Fiken', '1462000082', 'Teknik Mesin', NULL),
(4, 'asfsdf', 'afsadf', 'safsdf', NULL),
(5, 'afds', 'fsdaf', 'dfasdf', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category_jurusan`
--
ALTER TABLE `category_jurusan`
  ADD PRIMARY KEY (`id_jurusan`);

--
-- Indexes for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD PRIMARY KEY (`id_mhs`),
  ADD KEY `fk_mahasiswa_category_jurusan` (`id_jurusan`);

--
-- Indexes for table `mahasiswaa`
--
ALTER TABLE `mahasiswaa`
  ADD PRIMARY KEY (`id_mhs`),
  ADD KEY `kode_matkul` (`kode_matkul`),
  ADD KEY `nama` (`nama`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category_jurusan`
--
ALTER TABLE `category_jurusan`
  MODIFY `id_jurusan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  MODIFY `id_mhs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `mahasiswaa`
--
ALTER TABLE `mahasiswaa`
  MODIFY `id_mhs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD CONSTRAINT `fk_mahasiswa_category_jurusan` FOREIGN KEY (`id_jurusan`) REFERENCES `category_jurusan` (`id_jurusan`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
