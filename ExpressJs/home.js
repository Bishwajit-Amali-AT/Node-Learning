export function home() {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Home Page</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
            }
            .navbar {
                background-color: #333;
                overflow: hidden;
            }
            .navbar a {
                float: left;
                display: block;
                color: #f2f2f2;
                text-align: center;
                padding: 14px 20px;
                text-decoration: none;
                font-weight: bold;
            }
            .navbar a:hover {
                background-color: #ddd;
                color: black;
            }
            .container {
                padding: 20px;
            }
        </style>
    </head>
    <body>
        <div class="navbar">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact Us</a>
            <a href="/login">Login</a>
        </div>
        <div class="container">
            <h1>Home Page</h1>
            <p>Welcome to our Node.js website.</p>
        </div>
    </body>
    </html>
    `;
}