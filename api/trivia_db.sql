CREATE TABLE `score` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `correct_answers` int(11) NOT NULL,
  `score` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

ALTER TABLE `score`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `score`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;
