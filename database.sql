-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : lun. 27 avr. 2026 à 15:44
-- Version du serveur : 8.0.42-0ubuntu0.20.04.1
-- Version de PHP : 8.2.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `simple-php-server`
--

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `firstname`, `lastname`, `password`) VALUES
(1, 'toto@tot.com', 'toto ', 'toto', '$2y$10$hrraVg4KBK80QZznz1lEkO1zqmaEKlHpgRLrfLvyVOqfQl0Zl/Xtu'),
(2, 'œdfmlkjdfmlkj', 'sljsdlkdsj', 'efmlkjdfmlkj', '$2y$10$poJr1f33xw5W6ghW2/h1y.4V4FAlIa5s46II72MtvqLrZ/bItCXzO'),
(3, '', 'ohlkh', '', '$2y$10$Potswe/5TfrOGVnJSwYi6uB0XQXDRbKGAEy5Y6hImZpL7T8lD9Ao.'),
(4, '', 'qsljghf', '', '$2y$10$PxzJlu5GNtZ4DN/w/wiX9uF9pG7i6VDop.krhKwdIlMFYex9Sz2q.'),
(5, '', 'Joris', '', '$2y$10$Wm5Vpja/RZQ5NJ1AoPN53eO5xQ80YyZDQQ3eTIubl3O64eAhsa6.y'),
(6, '', 'Joris', '', '$2y$10$aC3DbivhmB0TdxXq.l0bZO.nVlUBIEDZ8kAhMCVCbz1ks3vcdskDO'),
(7, '', 'toto', '', '$2y$10$jXNVnTQru.8wT1xOELttX.89YLpZF8/ik/zcYKeAnv.K8SLLtregi'),
(8, 'joris.linserer@gmail.com', 'Joris', 'linserer', 'joris');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
