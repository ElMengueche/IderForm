-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-02-2024 a las 00:33:09
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ider_reservas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `name` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `identification` int(10) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phone` int(10) NOT NULL,
  `sport` varchar(30) NOT NULL,
  `scenary` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `time` varchar(10) NOT NULL,
  `terms` varchar(30) NOT NULL,
  `status` varchar(20) DEFAULT 'Pendiente'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`name`, `lastname`, `identification`, `email`, `phone`, `sport`, `scenary`, `date`, `time`, `terms`, `status`) VALUES
('Oscar', 'Castro', 1234567890, 'test1@gmail.com', 2147483647, 'LevantamientoPesas', 'ColiseoNorton', '2024-02-29', '', 'on', 'Pendiente'),
('prueba  dos Oscar', 'test', 2147483647, 'test2@test.com', 2147483647, 'LevantamientoPesas', 'ColiseoNorton', '2024-02-26', '', 'on', 'Pendiente');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
