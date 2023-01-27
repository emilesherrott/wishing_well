DROP TABLE if exists wishes;
DROP TABLE if exists comments;
DROP TABLE if exists category_connections;
DROP TABLE if exists categories;
DROP TYPE wish_enum;
DROP TYPE category_enum;

CREATE TYPE wish_enum AS ENUM('Granted', 'Denied', 'Undecided');
CREATE TYPE category_enum AS ENUM('Love', 'Work', 'Wellbeing', 'Friendship', 'Power', 'Magic', 'Unknown')

CREATE TABLE wishes (
    wish_id INT GENERATED ALWAYS AS IDENTITY,
    wish_text VARCHAR(500) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    wish_status wish_enum DEFAULT 'Undecided',
    category_of_wish category_enum DEFAULT 'Unknown',
    votes_grant INT DEFAULT 0,
    votes_deny INT DEFAULT 0,
    reported INT DEFAULT 0
);

CREATE TABLE comments (
    comment_id INT GENERATED ALWAYS AS IDENTITY,
    comment_text varchar(500) NOT NULL,
    created_at DATE DEFAULT NOW(),
    wish_id INT NOT NULL,
    vote_agree INT DEFAULT 0,
    vote_disagree INT DEFAULT 0,
    reported INT DEFAULT 0,
    FOREIGN KEY (wish_id) REFERENCES wishes(wish_id)
);

CREATE TABLE category_connections (
    category_connect_id INT GENERATED ALWAYS AS IDENTITY, 
    wish_id int NOT NULL,
    category_id int NOT NULL
);

CREATE TABLE categories (
    category_id INT GENERATED ALWAYS AS IDENTITY,
    category_text category_enum DEFAULT 'Unknown'
)



