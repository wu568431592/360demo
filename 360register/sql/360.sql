SET NAMES UTF8;
DROP DATABASE IF EXISTS 360database;
CREATE DATABASE 360database CHARSET=UTF8;
USE 360database;

CREATE TABLE users(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  userName VARCHAR(11),
  userPwd VARCHAR(20)
);
INSERT INTO users 
VALUES(NULL,'13934653698', '123456');
INSERT INTO users 
VALUES(NULL,'13111111111', '123456');
INSERT INTO users 
VALUES(NULL,'14222222222', '123456');

SELECT * FROM users;

CREATE TABLE indexdata(
	data VARCHAR(20)
);

INSERT INTO indexdata VALUES('360手机青春版'); 
INSERT INTO indexdata VALUES('360游戏');
INSERT INTO indexdata VALUES('360影视');
INSERT INTO indexdata VALUES('360安全卫士');
INSERT INTO indexdata VALUES('360安全浏览器');
INSERT INTO indexdata VALUES('360极速浏览器');
INSERT INTO indexdata VALUES('360游戏');
INSERT INTO indexdata VALUES('360财富');
INSERT INTO indexdata VALUES('诛仙');
INSERT INTO indexdata VALUES('张小凡');
INSERT INTO indexdata VALUES('陆雪琪');
INSERT INTO indexdata VALUES('碧瑶');
INSERT INTO indexdata VALUES('小环');
INSERT INTO indexdata VALUES('小白');
INSERT INTO indexdata VALUES('安全合作');
INSERT INTO indexdata VALUES('南海问题');
INSERT INTO indexdata VALUES('中国产航空母舰');
INSERT INTO indexdata VALUES('李亮遭**');
INSERT INTO indexdata VALUES('俄罗斯总统访华');
INSERT INTO indexdata VALUES('诛仙青云志');
INSERT INTO indexdata VALUES('李易峰');
INSERT INTO indexdata VALUES('赵丽颖');
INSERT INTO indexdata VALUES('蓝牙音箱');
INSERT INTO indexdata VALUES('四旋翼飞行器');
INSERT INTO indexdata VALUES('歼20飞机量产');
INSERT INTO indexdata VALUES('中国新首富武文超向平困山区捐款200亿');
INSERT INTO indexdata VALUES('中国菲律宾县水果滞销');
INSERT INTO indexdata VALUES('中国自主研发核动力天空母舰成功试飞');
INSERT INTO indexdata VALUES('新电脑蠕虫爆发');

SELECT * FROM indexdata;

CREATE TABLE products(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	pname VARCHAR(20),
	pprice decimal(7,2),
	pmaxcount INT,
	ptype VARCHAR(20)
);

INSERT INTO products VALUES(1,'360手机奇酷旗舰版移动联通双4G辰光银',1999.00,2,'旗舰版双4G');
INSERT INTO products VALUES(2,'360手机奇酷青春版(移动联通双4G) 智铂银 双卡双待',799.00,100,'青春版双4G');
INSERT INTO products VALUES(3,'360手机奇酷青春版（全网通3G内存版）流光金',1299.00,5,'青春版全网通3G');
INSERT INTO products VALUES(4,'360手机奇酷旗舰全网通辰光银',2499.00,100,'旗舰全网通辰光银');
INSERT INTO products VALUES(5,'360手机奇酷旗舰极客版',2999.00,5,'旗舰极客版');

SELECT * FROM products;

CREATE TABLE imgs(
	imgid INT PRIMARY KEY AUTO_INCREMENT,
	imgtype VARCHAR(20),
	imgsrc VARCHAR(100)
);

INSERT INTO imgs VALUES(1,'little','images/index/phone1/t01019c32e0b5d38133.jpg');
INSERT INTO imgs VALUES(2,'little','images/index/phone1/t01110f4864079c09a9.jpg');
INSERT INTO imgs VALUES(3,'little','images/index/phone1/t016230f8061e81ac99.jpg');
INSERT INTO imgs VALUES(4,'little','images/index/phone1/t01626725923848d928.jpg');
INSERT INTO imgs VALUES(5,'big','images/index/phone1/1.webp');
INSERT INTO imgs VALUES(6,'big','images/index/phone1/2.webp');
INSERT INTO imgs VALUES(7,'big','images/index/phone1/3.webp');
INSERT INTO imgs VALUES(8,'big','images/index/phone1/4.webp');
INSERT INTO imgs VALUES(9,'big','images/index/phone1/5.webp');
INSERT INTO imgs VALUES(10,'big','images/index/phone1/6.webp');

INSERT INTO imgs VALUES(11,'little','images/index/phone2/t01a02aeb1244d5d2c9.jpg');
INSERT INTO imgs VALUES(12,'little','images/index/phone2/t01be53f720fbd721a1.jpg');
INSERT INTO imgs VALUES(13,'little','images/index/phone2/t01c0ae70bd8f74d8b3.jpg');
INSERT INTO imgs VALUES(14,'little','images/index/phone2/t010d9a985f2021227e.jpg');
INSERT INTO imgs VALUES(15,'little','images/index/phone2/t014eb319e87cf6f300.jpg');
INSERT INTO imgs VALUES(16,'big','images/index/phone2/t019d98055ef7b61023.webp');
INSERT INTO imgs VALUES(17,'big','images/index/phone2/t01ae029d0ccbbd93d9.webp');
INSERT INTO imgs VALUES(18,'big','images/index/phone2/t01b5c6f27f4746a9c4.webp');
INSERT INTO imgs VALUES(19,'big','images/index/phone2/t01c7fbf1138fc920c8.webp');
INSERT INTO imgs VALUES(20,'big','images/index/phone2/t01ddd6ebfe8c6604a8.webp');
INSERT INTO imgs VALUES(21,'big','images/index/phone2/t013d72003ea55764a5.webp');


INSERT INTO imgs VALUES(22,'little','images/index/phone3/t01498affddea149619.jpg');
INSERT INTO imgs VALUES(23,'little','images/index/phone3/t01979bbac3c2adcf59.jpg');
INSERT INTO imgs VALUES(24,'little','images/index/phone3/t01c528514e37fb8284.jpg');
INSERT INTO imgs VALUES(25,'little','images/index/phone3/t01dd115a8649708c51.jpg');
INSERT INTO imgs VALUES(26,'little','images/index/phone3/t0159ec649638c88a99.jpg');
INSERT INTO imgs VALUES(27,'big','images/index/phone3/t019d98055ef7b61023.webp');
INSERT INTO imgs VALUES(28,'big','images/index/phone3/t01ae029d0ccbbd93d9.webp');
INSERT INTO imgs VALUES(29,'big','images/index/phone3/t01c7fbf1138fc920c8.webp');
INSERT INTO imgs VALUES(30,'big','images/index/phone3/t01ddd6ebfe8c6604a8.webp');
INSERT INTO imgs VALUES(31,'big','images/index/phone3/t01ec08038a883cbd87.webp');
INSERT INTO imgs VALUES(32,'big','images/index/phone3/t013d72003ea55764a5.webp');


INSERT INTO imgs VALUES(33,'little','images/index/phone4/t01019c32e0b5d38133.jpg');
INSERT INTO imgs VALUES(34,'little','images/index/phone4/t01110f4864079c09a9.jpg');
INSERT INTO imgs VALUES(35,'little','images/index/phone4/t01626725923848d928.jpg');
INSERT INTO imgs VALUES(36,'little','images/index/phone4/t016230f8061e81ac99.jpg');
INSERT INTO imgs VALUES(37,'big','images/index/phone4/t0167628c7953dc1867.webp');
INSERT INTO imgs VALUES(38,'big','images/index/phone4/t01d0b6b44873ba81f3.webp');
INSERT INTO imgs VALUES(39,'big','images/index/phone4/t01e320c298f7ed16a3.webp');
INSERT INTO imgs VALUES(40,'big','images/index/phone4/t012c6b0d52de0fd825.webp');
INSERT INTO imgs VALUES(41,'big','images/index/phone4/t0117b03692f69ea22c.webp');
INSERT INTO imgs VALUES(42,'big','images/index/phone4/t0166e75366a83f6042.webp');


INSERT INTO imgs VALUES(43,'little','images/index/phone5/t0194a00305c89d3f62.jpg');
INSERT INTO imgs VALUES(44,'little','images/index/phone5/t01bb2cd3ece2eb202b.jpg');
INSERT INTO imgs VALUES(45,'little','images/index/phone5/t01fbdb34b262b2b1ac.jpg');
INSERT INTO imgs VALUES(46,'little','images/index/phone5/t01ad26c91653c29579.jpg');
INSERT INTO imgs VALUES(47,'little','images/index/phone5/t01bf5150f4c03de7f2.jpg');
INSERT INTO imgs VALUES(48,'big','images/index/phone5/t01d9e8bf90829a8e03.webp');
INSERT INTO imgs VALUES(49,'big','images/index/phone5/t01aa0ed4c6aaa65da9.webp');
INSERT INTO imgs VALUES(50,'big','images/index/phone5/t01ba3aff30e2647724.webp');
INSERT INTO imgs VALUES(51,'big','images/index/phone5/t01d48a5ddb75f212b5.webp');
INSERT INTO imgs VALUES(52,'big','images/index/phone5/t01e1c30c4abc54782e.webp');
INSERT INTO imgs VALUES(53,'big','images/index/phone5/t01f5b035f1eb95445c.webp');
INSERT INTO imgs VALUES(54,'big','images/index/phone5/t0127c6ed121513db2c.webp');
INSERT INTO imgs VALUES(55,'big','images/index/phone5/t0128abbfe28da2d8b4.webp');
INSERT INTO imgs VALUES(56,'big','images/index/phone5/t0145d8c3b6c520caa4.webp');
INSERT INTO imgs VALUES(57,'big','images/index/phone5/t0190ca8fb39c114c28.webp');
INSERT INTO imgs VALUES(58,'big','images/index/phone5/t01722a7d6d23eb941b.webp');

SELECT * FROM imgs;

CREATE TABLE products_img(
	id INT PRIMARY KEY AUTO_INCREMENT,
	pid INT,
	imgid INT
);

INSERT INTO products_img VALUES(null,1,1);
INSERT INTO products_img VALUES(null,1,2);
INSERT INTO products_img VALUES(null,1,3);
INSERT INTO products_img VALUES(null,1,4);
INSERT INTO products_img VALUES(null,1,5);
INSERT INTO products_img VALUES(null,1,6);
INSERT INTO products_img VALUES(null,1,7);
INSERT INTO products_img VALUES(null,1,8);
INSERT INTO products_img VALUES(null,1,9);
INSERT INTO products_img VALUES(null,1,10);

INSERT INTO products_img VALUES(null,2,11);
INSERT INTO products_img VALUES(null,2,12);
INSERT INTO products_img VALUES(null,2,13);
INSERT INTO products_img VALUES(null,2,14);
INSERT INTO products_img VALUES(null,2,15);
INSERT INTO products_img VALUES(null,2,16);
INSERT INTO products_img VALUES(null,2,17);
INSERT INTO products_img VALUES(null,2,18);
INSERT INTO products_img VALUES(null,2,19);
INSERT INTO products_img VALUES(null,2,20);
INSERT INTO products_img VALUES(null,2,21);

INSERT INTO products_img VALUES(null,3,22);
INSERT INTO products_img VALUES(null,3,23);
INSERT INTO products_img VALUES(null,3,24);
INSERT INTO products_img VALUES(null,3,25);
INSERT INTO products_img VALUES(null,3,26);
INSERT INTO products_img VALUES(null,3,27);
INSERT INTO products_img VALUES(null,3,28);
INSERT INTO products_img VALUES(null,3,29);
INSERT INTO products_img VALUES(null,3,30);
INSERT INTO products_img VALUES(null,3,31);
INSERT INTO products_img VALUES(null,3,32);

INSERT INTO products_img VALUES(null,4,33);
INSERT INTO products_img VALUES(null,4,34);
INSERT INTO products_img VALUES(null,4,35);
INSERT INTO products_img VALUES(null,4,36);
INSERT INTO products_img VALUES(null,4,37);
INSERT INTO products_img VALUES(null,4,38);
INSERT INTO products_img VALUES(null,4,39);
INSERT INTO products_img VALUES(null,4,40);
INSERT INTO products_img VALUES(null,4,41);
INSERT INTO products_img VALUES(null,4,42);

INSERT INTO products_img VALUES(null,5,43);
INSERT INTO products_img VALUES(null,5,44);
INSERT INTO products_img VALUES(null,5,45);
INSERT INTO products_img VALUES(null,5,46);
INSERT INTO products_img VALUES(null,5,47);
INSERT INTO products_img VALUES(null,5,48);
INSERT INTO products_img VALUES(null,5,49);
INSERT INTO products_img VALUES(null,5,50);
INSERT INTO products_img VALUES(null,5,51);
INSERT INTO products_img VALUES(null,5,52);
INSERT INTO products_img VALUES(null,5,53);
INSERT INTO products_img VALUES(null,5,54);
INSERT INTO products_img VALUES(null,5,55);
INSERT INTO products_img VALUES(null,5,56);
INSERT INTO products_img VALUES(null,5,57);
INSERT INTO products_img VALUES(null,5,58);

SELECT * FROM products_img;

CREATE TABLE cart(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	pid INT,
	pcount INT,
	uname VARCHAR(11)
);

INSERT INTO cart VALUES(null,1,1,13111111111);
INSERT INTO cart VALUES(null,2,1,13111111111);
INSERT INTO cart VALUES(null,4,5,13111111111);
INSERT INTO cart VALUES(null,5,2,13111111111);

SELECT * FROM cart;