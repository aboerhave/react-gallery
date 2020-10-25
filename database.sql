-- used to create bas table

CREATE TABLE "cool_pictures" (
"id" serial primary key,
"path" varchar(250) not null,
"description" varchar(200),
"likes" integer default '0');

INSERT INTO "cool_pictures" 
("path", "description")
VALUES ('images/Lake.jpg', 'Lake Alexander from my family''s boat'),
('images/Wild_Thing.jpg', 'Wild Thing roller coaster at Valleyfair, MN'),
('images/Steel_Vengeance.jpg', 'Steel Vengeance and Maverick roller coasters at Cedar Point, OH');