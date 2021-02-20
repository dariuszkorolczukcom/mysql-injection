# mysql-injection

## Install MySQL and start the server:
    <link>https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04</link>
## Create DB user and table:
```mysql
CREATE DATABASE `database_injection`;
CREATE USER 'darou'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
GRANT ALL PRIVILEGES ON `database_injection`.* TO 'darou'@'localhost' WITH GRANT OPTION;
```
## Create table with dummy data:
```mysql
CREATE TABLE `database_injection`.`agents` 
(	
    `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    `name` CHAR(40),
    `net_worth` BIGINT(15)
);
```
```mysql
INSERT INTO `database_injection`.`agents` (name,net_worth)
VALUES ("Mark Zuckerberg",100000000000);
INSERT INTO `database_injection`.`agents` (name,net_worth)
VALUES ("Bill Gates",129000000000);
INSERT INTO `database_injection`.`agents` (name,net_worth)
VALUES ("Jeff Bezos",184600000000);
INSERT INTO `database_injection`.`agents` (name,net_worth)
VALUES ("Elom Musk",199900000000);
INSERT INTO `database_injection`.`agents` (name,net_worth)
VALUES ("Me (Dariusz)",17);
```

## Install npm dependencies

```sh
npm install
```

## Connect to mysql server

```sh
node index.js <id>
```
it results in
```mysql
SELECT name FROM agents WHERE id=<id>;
```

## Hack It!

### get all users
```sh
node index.js "1 OR 1=1"
```
it results in
```mysql
SELECT name FROM agents WHERE id=1 OR 1=1;
```

### get all user 