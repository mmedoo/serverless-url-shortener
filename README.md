[![Nodejs](https://img.shields.io/badge/Node.js-22.4.0-white?logo=nodedotjs&labelColor=white&color=green&link=https%3A%2F%2Fnodejs.org%2Fen)](https://nodejs.org/en)
[![sequelize](https://img.shields.io/badge/Sequelize-6.37.3-white?logo=sequelize&labelColor=white&color=blue&link=https%3A%2F%2Fsequelize.org%2F)](https://sequelize.org/)
[![sqlite](https://img.shields.io/badge/SQLite-white?logo=sqlite&labelColor=black&color=white&link=https%3A%2F%2Fwww.sqlite.org%2F)](https://www.sqlite.org/)
[![ejs](https://img.shields.io/badge/EJS-3.1.10-white?logo=ejs&labelColor=white&color=a91e50&link=https%3A%2F%2Fejs.co%2F)](https://ejs.co/)
[![express](https://img.shields.io/badge/Express.js-4.19.2-white?logo=express&labelColor=black&color=eee&link=https%3A%2F%2Fexpressjs.com%2F)](https://expressjs.com)




# URL Shortener 🔗

A simple and efficient URL shortener application that allows users to shorten long URLs.





## Table of Contents

- [🌟 Introduction](#intro)
- [🌳 Environment](#env)
- [🚀 Run Locally](#run)
  - [Prerequisite](#prerequisites)
  - [Steps](#steps)
- [🛠️ Usage](#use)
- [📬 API Endpoints](#api)
- [⚙️ Configuration (optional)](#conf)
  - [How to configure](#here-is-how-to-create-env-file-to-change-these-settings)
	- [Linux](#linux)
	- [Windows](#windows)





<h2 id="intro">🌟 Introduction</h2>

This URL shortener is a web application that allows users to convert long URLs into short links.




<h2 id="env">🌳 Environment</h2>

<!-- - **Framework**: Node.js &nbsp;&nbsp; [![Nodejs](https://img.shields.io/badge/Node.js-22.4.0-white?logo=nodedotjs&labelColor=white&color=green&link=https%3A%2F%2Fnodejs.org%2Fen)](https://nodejs.org/en) -->
<!-- - **Server**: Express.js &nbsp;&nbsp;[![express](https://img.shields.io/badge/Express.js-4.19.2-white?logo=express&labelColor=black&color=eee&link=https%3A%2F%2Fexpressjs.com%2F)](https://expressjs.com) -->
<!-- - **Database**: Sqlite3 -->
<!-- - **View Engine**: [EJS](https://www.npmjs.com/package/ejs). -->
<!-- - **ORM**: [Sequelize.js](https://www.npmjs.com/package/sequelize) -->


|-|Name|Link|
|-|:---------:|----:|
|**Language** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|   Node.js   | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [![Nodejs](https://img.shields.io/badge/Node.js-22.4.0-white?logo=nodedotjs&labelColor=white&color=green&link=https%3A%2F%2Fnodejs.org%2Fen)](https://nodejs.org/en)  |
|**Server** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|   Exress.js   | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [![express](https://img.shields.io/badge/Express.js-4.19.2-white?logo=express&labelColor=black&color=eee&link=https%3A%2F%2Fexpressjs.com%2F)](https://expressjs.com)  |
|**Database** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|   SQLite   | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [![sqlite](https://img.shields.io/badge/SQLite-5.1.7-white?logo=sqlite&labelColor=black&color=white&link=https%3A%2F%2Fwww.sqlite.org%2F)](https://www.npmjs.com/package/sqlite3)  |
|**ORM** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|   Sequelize   | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [![sequelize](https://img.shields.io/badge/Sequelize-6.37.3-white?logo=sequelize&labelColor=white&color=blue&link=https%3A%2F%2Fsequelize.org%2F)](https://sequelize.org/)  |
|**View Engine** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|   EJS   | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [![ejs](https://img.shields.io/badge/EJS-3.1.10-white?logo=ejs&labelColor=white&color=a91e50&link=https%3A%2F%2Fejs.co%2F)](https://ejs.co/)  |






<h2 id="run">🚀 Run Locally</h2>

### Prerequisites

- Node.js &nbsp;&nbsp;&nbsp;[![Node.js](https://img.shields.io/badge/Node.js-white?logo=nodedotjs&labelColor=white&color=green&link=https%3A%2F%2Fnodejs.org%2Fen)](https://nodejs.org/)

**Note**: No need to install SQLite on your local environment, SQLite npm package will do the job.



### Steps 

1. Open the terminal and clone the repository:
```bash
git clone https://github.com/mmedoo/url-shortener.git
```


2. Go to the app directory
```bash
cd url-shortener
```


3. Install dependencies
```bash
npm install
```


4. Run the server
```bash
npm start
```





<h2 id="use">🛠️ Usage</h2>

Once the server runs, terminal should log:
```bash
Server is listening on http://localhost:1234
```

1. Open your browser and go to [`http://localhost:1234`](http://localhost:1234).
2. Enter the long URL you want to shorten.
3. Click the "Shorten" button to get the short URL.
4. Click on displayed URL to copy.
5. Paste it in your browser.

**Congrats 🌟, you're redirected to your super long URL.**




<h2 id="api">📬 API Endpoints</h2>

### **GET** `/c/?url={desired_url}`
- Creates a new key, if doesn't exist, for `{desired_url}`.
- Responds with the key.

### **GET** `/{key}`
- Requests the URL corresponding to `{key}`.
- Responds with a redirectng page to corresponding URL.





<h2 id="conf">
	⚙️ Configuration
	<span style="font-weight:300">(optional)</span>
</h2>


The application can be configured using environment variables. Here are the available options:

- `PORT`: The port on which the application will run (default: 1234).
- `FORCE_DROP`: Boolean value to determine wether the `links` database table is forcably dropped everytime the app initializes connection with the database (this determines if the data will be saved after closing the app) (default: false).

### Here is how to create .env file to change these settings:

### Linux

1. **Create the .env File**: Open the terminal in app folder and run command:
```bash
touch .env
```

2. **Open the .env File for Editing**:
You can use any text editor of your choice, here is a way through the terminal:
```bash
nano .env
```

3. **Add environment variables and set them as you like**:
```md
PORT=1234
FORCE_DROP=false
```


### Windows

1. **Create the .env File**:
Open the terminal in app folder and run command:
```bash
echo.>.env
```

2. **Open the .env File for Editing**:
You can use any text editor of your choice to open and edit the .env file. Run this command to use notepad:
```bash
notepad .env
```

3. **Add environment variables and set them as you like**:
```md
PORT=1234
FORCE_DROP=false
```

