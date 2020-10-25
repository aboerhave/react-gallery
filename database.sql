-- used to create initial database table in database: react_gallery

CREATE TABLE "cool_pictures" (
"id" serial primary key,
"path" varchar not null,
"description" varchar(75),
"likes" integer default '0');

INSERT INTO "cool_pictures" 
("path", "description")
VALUES ('images/Lake.jpg', 'Lake Alexander from my family''s boat'),
('images/Wild_Thing.jpg', 'Wild Thing roller coaster at Valleyfair, MN'),
('images/Steel_Vengeance.jpg', 'Steel Vengeance and Maverick roller coasters at Cedar Point, OH'),
('images/Adam_Mac.jpg', 'Mac McAnally and I at the Minnesota State Fair'),
('images/American_Eagle.jpg', 'American Eagle roller coaster, Six Flags Great America, IL'),
('images/Brothers_Estes.jpg', 'My brother and I at Estes Park, Co'),
('images/Cedar_Point_Walkway.jpg', 'Walkway at Cedar Point, OH'),
('images/Chicago.jpg', 'Chicago River in Chicago, IL'),
('images/DMB.jpg', 'Dave Matthews Band at Alpine Valley, July 2019'),
('images/Family.jpg', 'My family'),
('images/JD.jpg', 'JD. DJ for Radio Margaritaville, and I'),
('images/Jimmy.jpg', 'Jimmy Buffett at Alpine Valley, July 2019'),
('images/Lake_Sunset.jpg', 'Sunset over Lake Alexander'),
('images/Mystic_Timbers.jpg', 'Mystic Timbers at King''s Island, OH'),
('images/Rod_Gab.jpg', 'Rodrigo y Gabriela, Minneapolis, 2019'),
('images/Sara_Bareilles.jpg', 'Sara Bareilles at Xcel Energy Center, 2019'),
('images/Steel_Vengeance_Hill.jpg', 'First hill of Steel Vengeance, Cedar Point, OH'),
('images/Steel_Vengeance_Train.jpg', 'Steel Vengeance train, Cedar Point, OH'),
('images/TSO.jpg', 'Trans-Siberian Orchestra, Xcel Energy Center, 2019'),
('images/TTB.jpg', 'Tedeschi Trucks Band, Chicago, 2019');