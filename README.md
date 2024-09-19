# protected-routes
Simple authorization system allows register and login in React SPA. After the data will processed in backend Node.js, Express. Data saved in mySQL database. Also use tokens(JWTs))
I am uploading this project for a junior developer, I hope it will make your studies easier.
There are two folders "BACKEND" and "FRONTEND".
Every folder have to be run in dedicated place(server/ports).

Steps to run the project:
1. Download, grab from archiv to folder and open folder in your code editor. 
Your current folder have get two folder: "frontend" and "backend"
2. Open terminal using command "cd" open "frontend" after run commmand "npm install" *to intastall package* after run command "npm run dev" to run react aplication.
3. I save data i use database mySQL running locally using XAMPP https://www.apachefriends.org/
i create tables like this<br/>
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);<br/>
Make this database available. You are free to use any database or services.

4. Open NEW terminal than in NEW terminal using command "cd" open "backend" after run commmand "npm install" *to intastall package* after run command "node server.js".
You  have to see in console what you are run on some PORT and connected to database.

Finaly you can open in your brouser "frontend" aplication to use it. Some errors are consoled for debubing. You can see new users in database.
