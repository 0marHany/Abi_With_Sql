## 1- CREATE DATABASE SHOP
## 2- ***********  To Create User tabel  ******* 
    CREATE TABLE users(
    id INT AUTO_INCREMENT,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(75),
    password VARCHAR(255),
    location VARCHAR(100),
    dept VARCHAR(75),
    is_admin TINYINT(1),
    registerd_date DATETIME,
    PRIMARY KEY(id)
)
## 3- to show tables in DB  =>  SHOW TABLES
## 4- to Drop Table  =>  DROP TABEL  ''
## 5- to Drop DARTABASE  =>  DROP DATABASE  ''
## 6- to get all data from user table => SELECT * FROM users
## 7 - to insert new record ====>  INSERT into users(first_name,last_name,email,password,location,dept,is_admin,registerd_date) VALUES ('ahmed','mostafa','ahmed@gmail.com','123456','cairo','dev',1,now())

## 8- insert more users ===> INSERT INTO users (first_name, last_name, email, password, location, dept,  is_admin, registerd_date) values ('Fred', 'Smith', 'fred@gmail.com', '123456', 'New York', 'design', 0, now()), ('Sara', 'Watson', 'sara@gmail.com', '123456', 'New York', 'design', 0, now()),('Will', 'Jackson', 'will@yahoo.com', '123456', 'Rhode Island', 'development', 1, now()),('Paula', 'Johnson', 'paula@yahoo.com', '123456', 'Massachusetts', 'sales', 0, now()),('Tom', 'Spears', 'tom@yahoo.com', '123456', 'Massachusetts', 'sales', 0, now());

## 9- SELECT With WHERE CONDITION =====> SELECT * from users WHERE location='cairo'
## 10 - SELECT WITH WHERE CONDTION && AND OPERATOR ====> SELECT * FROM users WHERE location ='Massachusetts' AND dept = 'sales'
## 11 - greater than   ===> SELECT * FROM users WHERE is_admin > 0
## 12- to delete  user ===> DELETE FROM users WHERE id = 1
## 13- to update user  ===> UPDATE users set email ='ahmedMostafa@gmail.com' WHERE id=1 
## 14- to alter tabel  ===> ALTER TABLE users ADD age VARCHAR(3)
## 15- to alter COLUMN ===> ALTER TABLE users MODIFY COLUMN age INT(3)
## 16- ORDER BY Name   ===> SELECT * from users ORDER by last_name ASC
## 17- ORDER BY Name   ===> SELECT * from users ORDER by first_name DESC
## 18- to concat column===> SELECT CONCAT(first_name, ' ', last_name) AS Name ,dept from users
## 19- if have repetd location for more users i wanna get only one location from repeted location using DISTINCIT ===> SELECT DISTINCT location From users
## 20- Select between ===> SELECT * FROM users where age BETWEEN 20 AND 30
## 21- Select like (for search )=> SELECT * from users WHERE dept LIKE'd%' ===> start with d
## 22- Select like (for search )=> SELECT * from users WHERE dept LIKE'%d' ===> end with d
## 23- Select like (for search )=> SELECT * from users WHERE dept LIKE'%d%' ===> contain  d char
## 24- Select like (for search )=> SELECT * from users WHERE dept NOT LIKE'%d%' ===> Not contain  d char
## 25- select in specific depratemnt SELECT * from users where dept IN('design','sales')
## 26- ************** To Create New Index for locatio ===> CREATE INDEX LIndex on users(location) **************
## 27 to DROP index ===> DROP INDEX LIndex on users
## *** posts Tabel Relation *** ## 

CREATE TABLE posts(
    id INT AUTO_INCREMENT ,
    user_id INT,
    title VARCHAR(100),
    body TEXT,
    publish_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id), FOREIGN key(user_id) REFERENCES users(id) 
)

## **** ADD list of posts =====>  INSERT INTO posts(user_id, title, body) VALUES (1, 'Post One', 'This is post one'),(3, 'Post Two', 'This is post two'),(1, 'Post Three', 'This is post three'),(2, 'Post Four', 'This is post four'),(5, 'Post Five', 'This is post five'),(4, 'Post Six', 'This is post six'),(2, 'Post Seven', 'This is post seven'),(1, 'Post Eight', 'This is post eight'),(3, 'Post Nine', 'This is post none'),(4, 'Post Ten', 'This is post ten');


## *** to select from two tables ***** data from users and data from posts related using (JOIN)
## 1 - 
SELECT users.first_name,
users.last_name,
posts.title,
posts.publish_date
FROM users 
INNER JOIN posts 
ON users.id = posts.user_id


## ********* CREATE COMMENTS Tabel *******##
CREATE TABLE comments(
id INT AUTO_INCREMENT,
    post_id INT,
    user_id INT,
    body TEXT,
    publish_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY(user_id) REFERENCES users(id)
)

## to add data to comment tabel ====> INSERT INTO comments(post_id, user_id, body) VALUES (1, 3, 'This is comment one'),(2, 1, 'This is comment two'),(5, 3, 'This is comment three'),(2, 4, 'This is comment four'),(1, 2, 'This is comment five'),(3, 1, 'This is comment six'),(3, 2, 'This is comment six'),(5, 4, 'This is comment seven'),(2, 3, 'This is comment seven');

## ************ left join *****************
SELECT 
comments.body,
posts.title 
from comments 
LEFT JOIN posts ON posts.id = comments.post_id 

## ** get from multiple tabel comments posts users 
SELECT
users.first_name,
users.last_name,
posts.title,
comments.body
FROM comments
INNER JOIN posts on posts.id = comments.post_id
INNER JOIN users on users.id = comments.user_id


## to get count of comments ====> SELECT COUNT(id) from comments
## to get max age ====> SELECT MAX(age) from users
## to get MIN age ====> SELECT MIN(age) from users
## to get SUM age ====> SELECT SUM(age) from users
## upper case and lower case  ===> SELECT UCASE(first_name) , LCASE(last_name) from users
## how many users in the same location ===> SELECT location ,COUNT(location) FROM users GROUP BY(location)





