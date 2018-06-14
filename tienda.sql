-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 11, 2018 at 10:39 AM
-- Server version: 10.0.34-MariaDB-0ubuntu0.16.04.1
-- PHP Version: 7.0.30-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tienda`
--

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` float NOT NULL,
  `img` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`id`, `name`, `price`, `img`) VALUES
(1, 'Camisa Negra', 51, 'Camisa1.jpg'),
(2, 'Camisa Beige', 52, 'Camisa2.jpg'),
(3, 'Camisa Azul', 53, 'Camisa3.jpg'),
(4, 'Camisa Gris Manga Corta', 54, 'Camisa4.jpg'),
(5, 'Camisa Burdeos', 55, 'Camisa5.jpg'),
(6, 'Camisa Gris', 56, 'Camisa6.jpg'),
(7, 'Cinturon Marrón', 18, 'Cinturon1.jpg'),
(8, 'Cinturon Azul', 19, 'Cinturon2.jpg'),
(9, 'Cinturon Negro', 20, 'Cinturon3.jpg'),
(10, 'Zapatos Marrones', 85, 'Zapatos1.jpg'),
(11, 'Botas', 86, 'Zapatos2.jpg'),
(12, 'Zapatos Azules', 87, 'Zapatos3.jpg'),
(13, 'Camiseta Negra', 35, 'Camiseta1.jpg'),
(14, 'Camiseta Azul', 36, 'Camiseta2.jpg'),
(15, 'Camiseta Manga Larga', 37, 'Camiseta3.jpg'),
(16, 'Reloj 1', 180, 'Reloj1.jpg'),
(17, 'Reloj 2', 181, 'Reloj2.jpg'),
(18, 'reloj 3', 182, 'Reloj3.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
