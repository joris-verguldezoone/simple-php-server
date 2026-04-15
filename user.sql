-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : lun. 06 nov. 2023 à 15:19
-- Version du serveur : 8.0.34-0ubuntu0.20.04.1
-- Version de PHP : 8.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `user`
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
(1, 'admiN1337$', 'admiN1337$', 'admiN1337$', 'admiN1337$'),
(2, 'jordan', 'sissilian', 'jordan', 'jordan'),
(3, 'alain', 'alain', 'coco', '1Azerty='),
(4, 'zszzzz', 'zszzzz', 'zszzzz', '$2y$10$0sGgRVUGNrZjIT9FQRE15usp4EmZN9nWIYCgeFs0tttWAUP6Y8Obq'),
(5, 'toto', 'toto', 'toto', '$2y$10$px6gGCjZHZKvsxTl9l7fpu5Bm9nqPkmdDCrzdR38gTRK6l.0E5mD.'),
(8, 'titi', 'titi', 'titi', '$2y$10$aqBXNUq3CLdZXXGBxZIT9eoLLA7bEhnBI0crzvk7620AlAuXKF7qC'),
(9, 'qeslkjSDmlkj', 'qeslkjSDmlkj', 'qeslkjSDmlkj', '$2y$10$qWAXP4reveC5QlzEVL8/b.ZffpSqn8YbwLPL9udZFLakg8s9KH1oq');

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
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
