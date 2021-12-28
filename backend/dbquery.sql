CREATE TABLE Stat (
  id INT AUTO_INCREMENT PRIMARY KEY,
  infected INT,
  deceased INT,
  recovered INT,
  quarantined INT,
  tested INT,
  last_updated DATETIME
);