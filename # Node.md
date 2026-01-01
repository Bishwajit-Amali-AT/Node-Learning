# Node.js Beginner's Guide

## Table of Contents

1. [Introduction to Node.js](#1-introduction-to-nodejs)
2. [Runtime Environment Fundamentals](#2-runtime-environment-fundamentals)
3. [Why Node.js?](#3-why-nodejs)
4. [Node.js Ecosystem Overview](#4-nodejs-ecosystem-overview)
5. [Installation and Setup](#5-installation-and-setup)
6. [Node Package Manager (npm)](#6-node-package-manager-npm)
7. [Creating Your First Node.js Project](#7-creating-your-first-nodejs-project)
8. [Understanding JavaScript in Node.js](#8-understanding-javascript-in-nodejs)
9. [Modules in Node.js](#9-modules-in-nodejs)
10. [The require() Function](#10-the-require-function)
11. [APIs in Node.js](#11-apis-in-nodejs)
12. [Servers and HTTP](#12-servers-and-http)
13. [Requests and Responses](#13-requests-and-responses)
14. [External Packages and Dependencies](#14-external-packages-and-dependencies)
15. [Development Tools](#15-development-tools)
16. [Server Configuration](#16-server-configuration)
17. [Serving Static Content](#17-serving-static-content)
18. [Form Handling](#18-form-handling)
19. [Global Constants](#19-global-constants)
20. [Express Js](#20-express-js)

---

## 1. Introduction to Node.js

### What is Node.js?

Node.js is an open-source, cross-platform JavaScript runtime environment that allows you to run JavaScript code outside of a web browser. It was created by Ryan Dahl in 2009 and has become one of the most popular technologies for building server-side applications.

**Key Characteristics:**
- **JavaScript Runtime**: Executes JavaScript code on the server
- **Event-Driven**: Uses an event-driven, non-blocking I/O model
- **Single-Threaded**: Runs on a single thread but handles concurrency efficiently
- **Cross-Platform**: Works on Windows, macOS, Linux, and more

### Node.js Architecture

Node.js consists of:
- **V8 Engine**: Google's JavaScript engine that compiles JavaScript to machine code
- **libuv**: Cross-platform library for asynchronous I/O operations
- **Core Modules**: Built-in modules for file system, HTTP, cryptography, etc.
- **npm**: Package manager for installing third-party libraries

---

## 2. Runtime Environment Fundamentals

### What is a Runtime Environment?

A runtime environment is a software layer that provides the necessary infrastructure for a programming language to execute. It includes:
- **Memory Management**: Handles allocation and deallocation of memory
- **Execution Engine**: Interprets or compiles code to machine instructions
- **Standard Library**: Built-in functions and modules
- **I/O Operations**: Interfaces with operating system for file and network operations

### Why Do We Need a Runtime Environment?

Different programming languages require different runtime environments because:
- **Language Interpretation**: Each language has its own syntax and semantics
- **Platform Abstraction**: Provides consistent APIs across different operating systems
- **Resource Management**: Handles memory, threads, and system resources
- **Standardization**: Ensures consistent behavior across environments

### Node.js as a Runtime Environment

Node.js specifically provides a runtime for JavaScript, enabling it to:
- Run JavaScript outside browsers
- Access system resources (file system, network)
- Handle asynchronous operations efficiently
- Provide server-side capabilities

---

## 3. Why Node.js?

### When We Already Have Languages Like PHP, Java, Python

Node.js offers unique advantages that make it preferable for certain use cases:

**Performance Benefits:**
- **Non-blocking I/O**: Handles thousands of concurrent connections efficiently
- **Single-threaded with event loop**: Better resource utilization than multi-threaded servers
- **V8 Engine**: Fast JavaScript execution

**Developer Experience:**
- **Unified Language**: Use JavaScript for both frontend and backend
- **Large Ecosystem**: Over 1 million packages available via npm
- **Rapid Development**: Quick setup and prototyping

**Specific Use Cases:**
- **Real-time Applications**: Chat apps, gaming, live updates
- **API Services**: Microservices, RESTful APIs
- **Streaming Applications**: Video/audio streaming, file processing
- **IoT Applications**: Device communication, data processing

**Comparison with Other Languages:**

| Aspect | Node.js | PHP | Java | Python |
|--------|---------|-----|------|--------|
| Concurrency | Event-driven | Multi-threaded | Multi-threaded | Multi-threaded |
| Performance | High for I/O | Moderate | High | Moderate |
| Learning Curve | Low (if JS known) | Low | Moderate | Low |
| Ecosystem | JavaScript | Large | Enterprise | Scientific |

---

## 4. Node.js Ecosystem Overview

### Is Node.js Fullstack or Frontend?

Node.js enables **fullstack JavaScript development**:

**Frontend Development:**
- Build tools (Webpack, Babel, Vite)
- Testing frameworks (Jest, Mocha)
- UI libraries and frameworks

**Backend Development:**
- Web servers and APIs
- Database connectivity
- Authentication and security
- Real-time communication

**Fullstack Capabilities:**
- Same language across entire application
- Code sharing between client and server
- Unified development workflow
- Consistent tooling and ecosystem

### Latest Version Information

As of 2024, Node.js follows a release schedule:
- **Current LTS (Long Term Support)**: Node.js 20.x (recommended for production)
- **Latest Features**: Node.js 21.x (cutting-edge features)
- **Maintenance**: Older versions receive security updates

**Version Types:**
- **LTS Versions**: Stable, recommended for production (18+ months support)
- **Current Versions**: Latest features, shorter support cycle
- **Nightly Builds**: Experimental features for testing

---

## 5. Installation and Setup

### Prerequisites

Before installing Node.js, ensure your system meets these requirements:

**System Requirements:**
- **Operating System**: Windows 10+, macOS 10.15+, Linux distributions
- **RAM**: Minimum 512MB (2GB recommended)
- **Disk Space**: 200MB free space
- **Permissions**: Administrator/root access for installation

**Development Tools:**
- Text editor or IDE (VS Code, Sublime Text, etc.)
- Command line interface (Terminal, Command Prompt, PowerShell)
- Git (optional but recommended)

### Downloading and Installing Node.js

#### Windows Installation

1. **Download Installer:**
   - Visit [nodejs.org](https://nodejs.org)
   - Download the LTS version (.msi installer)

2. **Run Installer:**
   - Double-click the downloaded .msi file
   - Follow the installation wizard
   - Accept default settings (recommended)

3. **Verify Installation:**
   ```bash
   node --version
   npm --version
   ```

#### macOS Installation

1. **Using Official Installer:**
   - Download .pkg file from nodejs.org
   - Run the installer package
   - Follow installation prompts

2. **Using Homebrew (Recommended):**
   ```bash
   # Install Homebrew if not already installed
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

   # Install Node.js
   brew install node
   ```

3. **Verify Installation:**
   ```bash
   node --version
   npm --version
   ```

### Post-Installation Setup

**Environment Variables (Windows):**
- Node.js installer usually sets up PATH automatically
- If not, add `C:\Program Files\nodejs\` to PATH

**Environment Variables (macOS/Linux):**
- Usually configured automatically
- If issues, check `/usr/local/bin` is in PATH

---

## 6. Node Package Manager (npm)

### What is npm?

npm (Node Package Manager) is the default package manager for Node.js that allows you to:

**Core Functions:**
- **Install Packages**: Download and install third-party libraries
- **Manage Dependencies**: Track project dependencies
- **Run Scripts**: Execute predefined commands
- **Publish Packages**: Share your own packages

### npm vs. Other Package Managers

| Feature | npm | Yarn | pnpm |
|---------|-----|------|------|
| Installation | Built-in | Separate install | Separate install |
| Speed | Good | Fast | Fastest |
| Disk Usage | Higher | Moderate | Lowest |
| Lock File | package-lock.json | yarn.lock | pnpm-lock.yaml |

### Basic npm Commands

```bash
# Check npm version
npm --version

# Initialize a new project
npm init

# Install a package (saves to dependencies)
npm install package-name

# Install for development only
npm install --save-dev package-name

# Install globally
npm install -g package-name

# List installed packages
npm list

# Update packages
npm update

# Remove package
npm uninstall package-name
```

### package.json File

The `package.json` file contains:
- Project metadata (name, version, description)
- Dependencies and devDependencies
- Scripts for automation
- Project configuration

---

## 7. Creating Your First Node.js Project

### Project Structure

A typical Node.js project structure:

```
my-first-project/
├── node_modules/     # Installed dependencies
├── package.json      # Project configuration
├── package-lock.json # Dependency lock file
├── index.js         # Main application file
└── README.md        # Documentation
```

### Step-by-Step Project Creation

1. **Create Project Directory:**
   ```bash
   mkdir my-first-node-app
   cd my-first-node-app
   ```

2. **Initialize npm Project:**
   ```bash
   npm init -y
   ```
   The `-y` flag accepts all default settings.

3. **Create Main File:**
   Create `index.js` with basic code:
   ```javascript
   console.log("Hello, Node.js!");
   ```

4. **Run the Application:**
   ```bash
   node index.js
   ```

### Understanding Execution

**Where Node.js Code Runs:**
- **Server-side**: Node.js code executes on the server, not in browsers
- **Local Machine**: During development, runs on your computer
- **Production Servers**: Deployed to cloud servers (AWS, Heroku, etc.)
- **System Level**: Has access to file system, network, databases

---

## 8. Understanding JavaScript in Node.js

### Node.js and JavaScript Relationship

Node.js brings JavaScript from browsers to servers by providing:

**Browser JavaScript Limitations Solved:**
- **No DOM Access**: Server doesn't have HTML documents
- **File System Access**: Can read/write files
- **Network Operations**: Create servers, make HTTP requests
- **OS Integration**: Access system resources

**Shared JavaScript Features:**
- Same syntax and language constructs
- Same data types and operators
- Same control flow statements
- Same functions and closures

### Key Differences from Browser JavaScript

| Feature | Browser JavaScript | Node.js JavaScript |
|---------|-------------------|-------------------|
| Entry Point | HTML script tags | Main file (index.js) |
| Global Object | `window` | `global` |
| Modules | ES6 modules, script tags | CommonJS, ES6 modules |
| APIs | DOM, Web APIs | File system, HTTP, OS |
| Execution | Event loop + rendering | Event loop only |

### Node.js-Specific Globals

- **`global`**: Global object (like `window` in browsers)
- **`process`**: Information about current Node.js process
- **`__dirname`**: Directory of current module
- **`__filename`**: Filename of current module
- **`require()`**: Function to import modules
- **`module`**: Current module object

---

## 9. Modules in Node.js

### What are Modules?

Modules are reusable pieces of code that can be imported and used in other files. They help organize code into manageable, maintainable units.

**Benefits of Modules:**
- **Code Organization**: Break large applications into smaller files
- **Reusability**: Use same code across different projects
- **Maintainability**: Easier to debug and update
- **Encapsulation**: Hide implementation details

**Creating a Module and Using Them**
To create a module in Node.js, we use module.exports, and to use that module in another file, we use require().

Example of creating a module (math.js file):

math.js  
module.exports.add = function (a, b) {  
  return a + b;  
};  

module.exports.subtract = function (a, b) {  
  return a - b;  
};  

The above file exports two functions. This module can now be imported and used in another file.

Example of using the module (app.js file):

app.js  
const math = require('./math');  

console.log(math.add(10, 5));  
console.log(math.subtract(10, 5));  

Here, require('./math') imports the module and allows access to all exported functions.

### Types of Modules

#### 1. Core Modules (Built-in)
Pre-installed modules that come with Node.js:

**Common Core Modules:**
- **`fs`**: File system operations
- **`http`**: HTTP server and client
- **`path`**: File path operations
- **`os`**: Operating system information
- **`crypto`**: Cryptographic functions
- **`events`**: Event handling
- **`util`**: Utility functions

#### 2. Local/Custom Modules
Modules you create within your project:

```javascript
// math.js (custom module)
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = { add, subtract };
```

#### 3. Third-party Modules
Modules installed via npm:

```bash
npm install express
```

### Module Loading Process

1. **Resolution**: Node.js finds the module file
2. **Compilation**: Converts code to executable format
3. **Execution**: Runs the module code
4. **Caching**: Stores in memory for future use
5. **Return**: Exports made available to requiring code

### How to Identify Available Modules

**Core Modules:**
- Check [Node.js Documentation](https://nodejs.org/api/)
- Use `node -p "Object.keys(require('module').builtinModules)"`

**Installed Packages:**
```bash
npm list
npm list --depth=0  # Top-level only
```

**Global Packages:**
```bash
npm list -g
```

---

## 10. The require() Function

### What is require()?

The `require()` function is Node.js's way of importing modules. It's similar to `import` statements in ES6 but uses CommonJS syntax.

**Basic Syntax:**
```javascript
const moduleName = require('module-name');
```

### How require() Works

**Module Resolution Algorithm:**
1. **Core Module**: Check if it's a built-in module
2. **File/Directory**: Look for file with matching name
3. **node_modules**: Search in node_modules directory
4. **Parent Directories**: Move up directory tree

### Different Ways to Use require()

```javascript
// 1. Core module
const fs = require('fs');

// 2. Local file (with extension)
const myModule = require('./myModule.js');

// 3. Local file (without extension)
const myModule = require('./myModule');

// 4. Directory (looks for index.js)
const myModule = require('./myFolder');

// 5. npm package
const express = require('express');
```

### require() vs. import

| Aspect | require() | import |
|--------|-----------|--------|
| Syntax | CommonJS | ES6 Modules |
| Loading | Synchronous | Asynchronous (can be) |
| Usage | Runtime | Compile time |
| Compatibility | All Node.js versions | Node.js 12+ |

### Module Caching

Node.js caches modules to improve performance:
- First `require()` loads and caches the module
- Subsequent `require()` returns cached version
- Changes to module files require server restart

---

## 11. APIs in Node.js

### What is an API?

API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other.

**Types of APIs:**
- **Web APIs**: HTTP-based interfaces
- **REST APIs**: Representational State Transfer
- **GraphQL APIs**: Query language for APIs
- **SOAP APIs**: XML-based protocol
- **WebSocket APIs**: Real-time communication

### Why Do We Need APIs?

**Benefits:**
- **Modularity**: Break applications into smaller services
- **Scalability**: Scale different parts independently
- **Flexibility**: Use different technologies for different components
- **Integration**: Connect with third-party services
- **Security**: Controlled access to resources

### Which API Type Does Node.js Use?

Node.js primarily uses **Web APIs** and **REST APIs**, but can implement any type:

**Most Common in Node.js:**
- **REST APIs**: Stateless, resource-based
- **GraphQL APIs**: Flexible query language
- **WebSocket APIs**: Real-time bidirectional communication

### API Architecture in Node.js

**Typical API Structure:**
```
Client Request → HTTP Server → Routing → Business Logic → Database → Response
```

**Components:**
- **HTTP Server**: Handles incoming requests (using `http` module)
- **Routing**: Directs requests to appropriate handlers
- **Middleware**: Processes requests before handlers
- **Controllers**: Contain business logic
- **Models**: Handle data operations

---

## 12. Servers and HTTP

### What are Servers in Node.js?

A server in Node.js is a program that listens for incoming network requests and sends responses back to clients.

**Types of Servers:**
- **HTTP Server**: Handles web requests
- **HTTPS Server**: Secure HTTP with SSL/TLS
- **TCP Server**: Low-level network communication
- **UDP Server**: Connectionless communication

### Why Do We Need Servers?

**Server Functions:**
- **Host Applications**: Make applications accessible over network
- **Handle Requests**: Process incoming client requests
- **Serve Content**: Deliver web pages, APIs, files
- **Manage Sessions**: Track user interactions
- **Security**: Control access and authentication

### Creating a Basic HTTP Server

```javascript
const http = require('http');

// Create server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
});

// Start server
server.listen(3000, () => {
    console.log('Server running on port 3000');
});
```

### Server Components

**Request Object (`req`):**
- Contains information about the incoming request
- URL, headers, method, body, etc.

**Response Object (`res`):**
- Used to send response back to client
- Status codes, headers, body content

**Server Methods:**
- `listen(port, callback)`: Start listening for connections
- `close(callback)`: Stop accepting new connections
- `setTimeout(milliseconds)`: Set request timeout

---

## 13. Requests and Responses

### Understanding HTTP Requests

**Request Components:**
- **Method**: GET, POST, PUT, DELETE, etc.
- **URL**: Resource location
- **Headers**: Metadata about the request
- **Body**: Data sent with the request (for POST/PUT)

**Common HTTP Methods:**
- **GET**: Retrieve data
- **POST**: Create new resources
- **PUT**: Update existing resources
- **DELETE**: Remove resources
- **PATCH**: Partial updates

### Understanding HTTP Responses

**Response Components:**
- **Status Code**: Indicates request outcome
- **Headers**: Metadata about the response
- **Body**: Actual response content

**Common Status Codes:**
- **200 OK**: Successful request
- **201 Created**: Resource created
- **400 Bad Request**: Invalid request
- **401 Unauthorized**: Authentication required
- **404 Not Found**: Resource not found
- **500 Internal Server Error**: Server error

### Handling Requests and Responses

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    // Log request details
    console.log(`${req.method} ${req.url}`);

    // Handle different routes
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Home Page</h1>');
    } else if (req.url === '/api' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'API response' }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

server.listen(3000);
```

### Why Requests and Responses Matter

**Request-Response Cycle:**
1. **Client sends request** to server
2. **Server processes request** and prepares response
3. **Server sends response** back to client
4. **Client receives and processes** the response

**Importance:**
- **Communication**: Standard way for client-server interaction
- **State Management**: Track application state
- **Error Handling**: Communicate errors to clients
- **Data Exchange**: Transfer data between systems

---

## 14. External Packages and Dependencies

### Installing External Packages

**Using npm:**
```bash
# Install and save to dependencies
npm install package-name

# Install specific version
npm install package-name@1.2.3

# Install multiple packages
npm install package1 package2 package3

# Install development dependencies
npm install --save-dev jest
```

### Using External Packages

```javascript
// After installing express
const express = require('express');
const app = express();

// Use the package
app.get('/', (req, res) => {
    res.send('Hello with Express!');
});

app.listen(3000);
```

### Popular Node.js Packages

**Web Frameworks:**
- **Express.js**: Minimalist web framework
- **Koa.js**: Modern web framework
- **Fastify**: High-performance web framework

**Utility Libraries:**
- **Lodash**: Utility functions
- **Moment.js**: Date/time manipulation
- **Axios**: HTTP client

**Database:**
- **Mongoose**: MongoDB ODM
- **Sequelize**: SQL ORM
- **Redis**: In-memory database client

### Managing Dependencies

**package.json Dependencies:**
```json
{
  "dependencies": {
    "express": "^4.18.0"
  },
  "devDependencies": {
    "jest": "^29.0.0"
  }
}
```

**Lock Files:**
- `package-lock.json`: Ensures exact versions
- Prevents "works on my machine" issues
- Speeds up installations

---

## 15. Development Tools

### What is Nodemon?

Nodemon is a development tool that automatically restarts your Node.js application when file changes are detected.

**Benefits:**
- **Automatic Restart**: No manual server restarts during development
- **Time Saving**: Faster development cycle
- **File Watching**: Monitors all project files
- **Customizable**: Configurable watch patterns and delays

### Installing and Using Nodemon

```bash
# Install globally
npm install -g nodemon

# Install as dev dependency
npm install --save-dev nodemon

# Run with nodemon
nodemon index.js

# Or add to package.json scripts
{
  "scripts": {
    "dev": "nodemon index.js",
    "start": "node index.js"
  }
}
```

### Why Nodemon is Required

**Development Challenges Without Nodemon:**
- Manual server restart after every code change
- Time wasted switching between editor and terminal
- Risk of forgetting to restart after changes

**Nodemon Solutions:**
- Instant feedback during development
- Improved developer experience
- Faster iteration cycles

### Nodemon Configuration

**nodemon.json:**
```json
{
  "watch": ["src", "public"],
  "ext": "js,json",
  "ignore": ["node_modules"],
  "delay": 1000
}
```

---

## 16. Server Configuration

### Dynamic Port Configuration

**Why Dynamic Ports?**
- **Flexibility**: Run on different ports in different environments
- **Avoid Conflicts**: Prevent port conflicts in development
- **Environment Variables**: Different ports for dev/staging/production

### Implementing Dynamic Ports

```javascript
const http = require('http');

// Method 1: Environment variable with fallback
const PORT = process.env.PORT || 3000;

// Method 2: Command line arguments
const PORT = process.argv[2] || 3000;

// Method 3: Configuration file
const config = require('./config');
const PORT = config.port || 3000;

const server = http.createServer((req, res) => {
    res.end('Server running on port ' + PORT);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

### Running on Specific Ports

**Development:**
```bash
# Use default port
node index.js

# Specify port via environment
PORT=4000 node index.js

# Specify port via argument
node index.js 4000
```

**Production:**
- Use environment variables
- Configure reverse proxy (nginx)
- Use process managers (PM2)

### Port Selection Best Practices

**Well-known Ports:**
- **80**: HTTP (requires admin privileges)
- **443**: HTTPS (requires admin privileges)
- **3000**: Common development port
- **8080**: Alternative development port

**Guidelines:**
- Use ports above 1024 to avoid admin privileges
- Avoid common ports used by other services
- Document port usage in README
- Use environment variables for configuration

---

## 17. Serving Static Content

### What is Static Content?

Static content includes files that don't change dynamically:
- HTML pages
- CSS stylesheets
- JavaScript files
- Images
- Fonts
- PDFs and documents

### Sending HTML Pages

```javascript
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

server.listen(3000);
```

### Serving Different File Types

```javascript
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Get file extension
    const ext = path.extname(req.url);

    // Set content type based on extension
    let contentType = 'text/plain';
    switch (ext) {
        case '.html':
            contentType = 'text/html';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'application/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
        case '.jpeg':
            contentType = 'image/jpeg';
            break;
    }

    // Serve file
    const filePath = path.join(__dirname, 'public', req.url);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found');
            return;
        }
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
});

server.listen(3000);
```

### Static File Server Best Practices

**Security:**
- Validate file paths to prevent directory traversal
- Set appropriate file permissions
- Use absolute paths when possible

**Performance:**
- Implement caching headers
- Use compression for text files
- Consider CDN for static assets in production

**Organization:**
- Store static files in dedicated directory (`public/`, `static/`)
- Use consistent naming conventions
- Separate concerns (HTML, CSS, JS, images)

---

## 18. Form Handling

### How to Submit Data from Forms

**HTML Form Example:**
```html
<form action="/submit" method="POST">
    <input type="text" name="username" placeholder="Username">
    <input type="email" name="email" placeholder="Email">
    <button type="submit">Submit</button>
</form>
```

### Handling Form Data in Node.js

**Parsing URL-encoded Data:**
```javascript
const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/submit') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            // Parse form data
            const formData = querystring.parse(body);
            console.log('Form data:', formData);

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<h1>Thank you, ${formData.username}!</h1>`);
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <form action="/submit" method="POST">
                <input type="text" name="username" placeholder="Username">
                <input type="email" name="email" placeholder="Email">
                <button type="submit">Submit</button>
            </form>
        `);
    }
});

server.listen(3000);
```

### How Node.js Handles Form Data

**Form Data Processing Steps:**
1. **Receive Request**: Server gets HTTP POST request
2. **Accumulate Data**: Collect chunks of data as they arrive
3. **Parse Data**: Convert raw data to usable format
4. **Validate Data**: Check data integrity and format
5. **Process Data**: Perform business logic
6. **Send Response**: Return result to client

**Data Transmission Methods:**
- **application/x-www-form-urlencoded**: Traditional form encoding
- **multipart/form-data**: Used for file uploads
- **application/json**: Modern API-style submission

### Advanced Form Handling

**With Express.js (Recommended):**
```javascript
const express = require('express');
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form action="/submit" method="POST">
            <input type="text" name="username" placeholder="Username">
            <input type="email" name="email" placeholder="Email">
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post('/submit', (req, res) => {
    const { username, email } = req.body;
    res.send(`<h1>Thank you, ${username}!</h1>`);
});

app.listen(3000);
```

### Form Data Validation

**Basic Validation:**
```javascript
app.post('/submit', (req, res) => {
    const { username, email } = req.body;

    // Validation
    if (!username || !email) {
        return res.status(400).send('Username and email are required');
    }

    if (!email.includes('@')) {
        return res.status(400).send('Invalid email format');
    }

    // Process valid data
    res.send(`<h1>Thank you, ${username}!</h1>`);
});
```

### File Upload Handling

**With multer (for file uploads):**
```javascript
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
    console.log('File uploaded:', req.file);
    res.send('File uploaded successfully');
});
```

## 19. Global Constants
## Global Constants in Node.js

Node.js provides global constants and objects that are available in every file without importing them. These are helpful when working with file paths, environment variables, and runtime information.

Common global constants include __dirname, __filename, global, and process.

__dirname provides the absolute path of the current directory.  
__filename provides the absolute path of the current file.  
global represents the global object in Node.js.  
process provides information about the current Node.js process.

Example usage:

console.log(__dirname);  
console.log(__filename);  

---

## 20. Express Js
## Express.js

Express.js is a lightweight and flexible web application framework built on top of Node.js. Although Node.js can handle HTTP requests using its built-in modules, Express simplifies the process by providing an easier and cleaner way to build servers and APIs.

Express is commonly used to create backend applications and REST APIs because it reduces boilerplate code and improves development speed.

---

## Why Express.js is Needed

While Node.js provides the core functionality to create servers, using it directly requires writing a lot of low-level code. Express.js simplifies this by offering built-in features such as routing, middleware support, and easy request-response handling.

---

## Benefits of Express.js

Some key benefits of Express.js include simple routing, middleware support, faster development, REST API support, a large community, and easy integration with databases and third-party libraries.

---

## Installing Express.js

To use Express.js, first initialize a Node.js project and then install Express using npm.

Command to initialize project:  
npm init -y  

Command to install Express:  
npm install express  

After installation, Express can be imported into the application:

const express = require('express');  
const app = express();  

---

## Express.js Application Flow

An Express.js application follows a simple flow: create the app, add middleware, define routes, and start the server.

Example flow:
```javascript
const express = require('express');  
const app = express();  

app.use(express.json());  

app.get('/', (req, res) => {  
  res.send('Hello from Express');  
});  

app.listen(3000, () => {  
  console.log('Server running on port 3000');  
});  
```
Here, express() creates the app, app.use() adds middleware, app.get() defines a route, and app.listen() starts the server.

---

## Request Parameters and Responses in Express.js

Express allows dynamic values in URLs using route parameters. These values can be accessed using req.params.
```javascript
Example:

app.get('/user/:id', (req, res) => {  
  const userId = req.params.id;  
  res.send('User ID is ' + userId);  
});  

If the URL is /user/20, the response will be:  
User ID is 20
```
Express provides multiple ways to send responses. The most commonly used methods are res.send() and res.json().
```javascript
Example:

app.get('/data', (req, res) => {  
  res.json({  
    message: 'This is a JSON response'  
  });  
});  
```
---

## Starting a Server in Express.js

Starting a server in Express.js is done using the listen() method. The server listens for incoming HTTP requests on a specified port.
```javascript
Example:

const express = require('express');  
const app = express();  

app.get('/', (req, res) => {  
  res.send('Server is running');  
});  

app.listen(3000, () => {  
  console.log('Server started on port 3000');  
});  

Once started, the server can be accessed in a browser at:  
http://localhost:3000
```
##  `use` Method in Express.js

- **What it is:**  
  `app.use()` is used to mount middleware functions in Express. Middleware functions are functions that execute during the request-response cycle and can modify request/response objects, or end the request.

- **Usage:**  
  ```js
  import express from 'express';
  const app = express();

  // Middleware example
  app.use((req, res, next) => {
      console.log(`${req.method} ${req.url}`);
      next(); // Pass control to the next middleware
  });

  // Route
  app.get('/', (req, res) => {
      res.send('Hello World');
  });

  app.listen(3000, () => console.log('Server running on port 3000'));
  ```

- **Use Cases:**  
  - Logging requests  
  - Serving static files  
  - Parsing request bodies (`express.json()`)  
  - Authentication checks  

---

## ES Modules (ESM)

- **What it is:**  
  ES Modules (ESM) are the modern JavaScript module system using `import` and `export` instead of `require` and `module.exports`.

- **Why use them:**  
  - Cleaner syntax  
  - Native support in Node.js  
  - Better static analysis and tree-shaking  

- **How to use them:**  
  - In `package.json`, set:
    ```json
    {
      "type": "module"
    }
    ```
  - Import/export syntax:
    ```js
    // export.js
    export const greet = () => console.log('Hello');

    // main.js
    import { greet } from './export.js';
    greet();
    ```

---

## Rendering HTML Files in Express.js with ES Modules

```js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

---

## Submitting a Form in Express.js with ES Modules

- **HTML Form Example:**
```html
<form action="/submit" method="POST">
    <input type="text" name="username" placeholder="Enter name" />
    <button type="submit">Submit</button>
</form>
```

- **Express Route Handling:**
```js
import express from 'express';
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    const { username } = req.body;
    res.send(`Hello ${username}`);
});

app.listen(3000);
```

---

## Absolute Path vs Relative Path

- **Absolute Path:** Full path from the root of the filesystem  
  Example: `/Users/john/project/index.html`

- **Relative Path:** Path relative to the current file or directory  
  Example: `./index.html` or `../folder/file.js`

---

## `import path from 'path'` Module

- **Why we need it:**  
  The `path` module provides utilities to handle file and directory paths in a cross-platform way.

- **Example Usage:**
```js
import path from 'path';

const filePath = path.join(__dirname, 'folder', 'file.txt');
console.log(filePath); // Cross-platform safe path
```

---

## Express Response Methods

- **`res.send()`**  
  Sends a string, JSON, or buffer as the response.  
  ```js
  res.send('Hello World');
  ```

- **`res.sendFile()`**  
  Sends a file as a response. Must provide absolute path.  
  ```js
  res.sendFile(path.join(__dirname, 'index.html'));
  ```

- **Other Useful Methods:**  
  - `res.json()` → Sends JSON data  
  - `res.status()` → Sets HTTP status code  
  - `res.redirect()` → Redirects to another URL  
  - `res.end()` → Ends the response without sending data  

## Creating a 404 Page for Invalid Routes

A 404 page is shown when a user tries to access a URL that doesn't exist on your website. In Express.js, you can handle this by placing a special middleware at the end of all your routes.

### How 404 Handling Works

Express.js processes routes in the order they are defined. If no route matches the requested URL, it falls through to the 404 handler.

### Example: Creating a 404 Page

```javascript
const express = require('express');
const app = express();

// Your regular routes
app.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Us Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Us Page');
});

// 404 handler - this should be the LAST route
app.use((req, res) => {
    res.status(404).send(`
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <a href="/">Go back to Home</a>
    `);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
```

### Key Points:
- `app.use()` is middleware that runs for all HTTP methods
- Place the 404 handler **after** all your specific routes
- Use `res.status(404)` to set the HTTP status code
- You can send HTML, JSON, or redirect to a custom 404 page

### Advanced 404 with Custom Template

```javascript
app.use((req, res) => {
    res.status(404).render('404', {
        title: 'Page Not Found',
        message: 'The page you requested could not be found.',
        url: req.url
    });
});
```

---

## Middleware: What, Why, and How

### What is Middleware?

Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application's request-response cycle. They can:
- Execute any code
- Make changes to the request and response objects
- End the request-response cycle
- Call the next middleware function

### Why Use Middleware?

1. **Code Reusability**: Write once, use everywhere
2. **Separation of Concerns**: Break down functionality into smaller pieces
3. **Maintainability**: Easier to maintain and update code
4. **Security**: Add authentication, logging, CORS, etc.
5. **Performance**: Add caching, compression, etc.

### How to Use Middleware

```javascript
const express = require('express');
const app = express();

// Custom middleware function
const logger = (req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next(); // Call next() to pass control to next middleware
};

// Using middleware globally (for all routes)
app.use(logger);

// Using middleware for specific routes
app.get('/admin', logger, (req, res) => {
    res.send('Admin Panel');
});

// Middleware that modifies response
const addHeader = (req, res, next) => {
    res.setHeader('X-Custom-Header', 'My Custom Value');
    next();
};

app.use(addHeader);
```

### Important Rules:
- Always call `next()` unless you want to end the response
- Middleware runs in the order it's defined
- If you don't call `next()`, the request will hang

---

## Types of Middleware

### 1. Application-level Middleware
Runs on every request to the application.

```javascript
// Global middleware
app.use((req, res, next) => {
    console.log('This runs on every request');
    next();
});

// Route-specific middleware
app.get('/users', middlewareFunction, (req, res) => {
    res.send('Users page');
});
```

### 2. Router-level Middleware
Works the same as application-level but bound to an instance of `express.Router()`.

```javascript
const router = express.Router();

// Router middleware
router.use((req, res, next) => {
    console.log('Router middleware');
    next();
});

router.get('/profile', (req, res) => {
    res.send('Profile page');
});

app.use('/user', router);
```

### 3. Error-handling Middleware
Special middleware for handling errors. Must have 4 parameters.

```javascript
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
```

### 4. Built-in Middleware
Express.js comes with some built-in middleware (covered later in this guide).

### 5. Third-party Middleware
Middleware created by the community (like `body-parser`, `cors`, `helmet`, etc.).

```javascript
const cors = require('cors');
const helmet = require('helmet');

app.use(cors());      // Enable CORS
app.use(helmet());    // Security headers
```

---

## Route Middleware

Route middleware is middleware that runs only for specific routes. It's useful when you want certain functionality to apply only to particular endpoints.

### How to Create Route Middleware

```javascript
const express = require('express');
const app = express();

// Route-specific middleware
const requireAuth = (req, res, next) => {
    // Check if user is authenticated
    const isAuthenticated = checkUserAuthentication(req);

    if (!isAuthenticated) {
        return res.status(401).send('Authentication required');
    }

    next();
};

const validateUserData = (req, res, next) => {
    // Validate user input
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).send('Name and email are required');
    }

    next();
};

// Apply middleware to specific routes
app.get('/admin', requireAuth, (req, res) => {
    res.send('Admin Dashboard');
});

app.post('/users', validateUserData, (req, res) => {
    // Create user logic
    res.send('User created');
});

app.put('/users/:id', requireAuth, validateUserData, (req, res) => {
    // Update user logic
    res.send('User updated');
});
```

### Common Use Cases for Route Middleware:
- Authentication checks
- Authorization (role-based access)
- Input validation
- Logging specific routes
- Rate limiting
- Data sanitization

---

## Multiple Route Middleware in Single Route

You can apply multiple middleware functions to a single route. They execute in the order they are defined.

### Syntax

```javascript
app.get('/route', middleware1, middleware2, middleware3, (req, res) => {
    // Route handler
});
```

### Example: Multiple Middleware in One Route

```javascript
const express = require('express');
const app = express();

// Multiple middleware functions
const authenticate = (req, res, next) => {
    console.log('1. Authentication middleware');
    // Check if user is logged in
    next();
};

const authorize = (req, res, next) => {
    console.log('2. Authorization middleware');
    // Check if user has permission
    next();
};

const validate = (req, res, next) => {
    console.log('3. Validation middleware');
    // Validate input data
    next();
};

const logActivity = (req, res, next) => {
    console.log('4. Logging middleware');
    // Log user activity
    next();
};

// Apply multiple middleware to one route
app.post('/users',
    authenticate,    // Check authentication
    authorize,       // Check authorization
    validate,        // Validate data
    logActivity,     // Log the action
    (req, res) => {  // Final handler
        console.log('5. Route handler');
        res.send('User created successfully');
    }
);

// You can also group middleware in arrays
const userMiddleware = [authenticate, authorize, validate];

app.put('/users/:id', userMiddleware, (req, res) => {
    res.send('User updated');
});
```

### Execution Order:
1. `authenticate` runs first
2. `authorize` runs second
3. `validate` runs third
4. `logActivity` runs fourth
5. Route handler runs last

### Key Points:
- Middleware executes sequentially
- If any middleware doesn't call `next()`, execution stops
- You can reuse middleware across multiple routes
- Group related middleware in arrays for cleaner code

---

## Built-in Middleware in Express.js

Express.js comes with several built-in middleware functions that handle common web development tasks.

### 1. express.json()
Parses incoming JSON payloads. Required when your API receives JSON data.

```javascript
const express = require('express');
const app = express();

// Parse JSON bodies
app.use(express.json());

// Now you can access JSON data in req.body
app.post('/api/users', (req, res) => {
    console.log(req.body); // { name: 'John', age: 30 }
    res.send('User data received');
});
```

### 2. express.urlencoded()
Parses incoming URL-encoded form data. Required for HTML form submissions.

```javascript
const express = require('express');
const app = express();

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Now you can access form data in req.body
app.post('/submit-form', (req, res) => {
    console.log(req.body); // { username: 'john_doe', password: 'secret' }
    res.send('Form submitted');
});
```

### 3. express.static()
Serves static files (images, CSS, JavaScript) from a directory.

```javascript
const express = require('express');
const app = express();

// Serve static files from 'public' directory
app.use(express.static('public'));

// Now you can access files like:
// http://localhost:3000/style.css
// http://localhost:3000/images/logo.png
```

### 4. express.Router()
Creates modular route handlers.

```javascript
const express = require('express');
const router = express.Router();

// Define routes on the router
router.get('/users', (req, res) => {
    res.send('Users list');
});

router.post('/users', (req, res) => {
    res.send('Create user');
});

// Use the router
app.use('/api', router);
```

---

## Getting Request Body from Form Submissions

When users submit HTML forms, the data is sent to your server. To access this data in Express.js, you need to parse the request body.

### HTML Form Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>Registration Form</title>
</head>
<body>
    <form action="/register" method="POST">
        <input type="text" name="username" placeholder="Username" required>
        <input type="email" name="email" placeholder="Email" required>
        <input type="password" name="password" placeholder="Password" required>
        <button type="submit">Register</button>
    </form>
</body>
</html>
```

### Express.js Server to Handle Form Data

```javascript
const express = require('express');
const app = express();

// Required middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Handle form submission
app.post('/register', (req, res) => {
    // Access form data from req.body
    const { username, email, password } = req.body;

    console.log('Form Data Received:');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    // Process the data (save to database, etc.)
    // For now, just send a response
    res.send(`
        <h1>Registration Successful!</h1>
        <p>Welcome, ${username}!</p>
        <p>Your email: ${email}</p>
    `);
});

// Serve the HTML form
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/register.html');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
```

### Key Points:
- Use `express.urlencoded({ extended: true })` for form data
- Form data is available in `req.body`
- `req.body` is an object containing all form fields
- Field names become object keys
- Field values become object values

---

## URL Encoded Method in Express.js

The `express.urlencoded()` middleware parses incoming requests with URL-encoded payloads. This is commonly used when:
- Processing HTML form submissions
- Handling data sent with `application/x-www-form-urlencoded` content type

### How It Works

When you submit an HTML form with `method="POST"`, the browser sends data in URL-encoded format like:
```
username=john_doe&email=john%40example.com&password=secret123
```

The `express.urlencoded()` middleware converts this into a JavaScript object:
```javascript
{
    username: 'john_doe',
    email: 'john@example.com',
    password: 'secret123'
}
```

### Configuration Options

```javascript
app.use(express.urlencoded({
    extended: true,     // Use qs library for parsing (allows nested objects)
    limit: '10mb',      // Maximum request body size
    parameterLimit: 1000 // Maximum number of parameters
}));
```

### extended: true vs extended: false

- `extended: true`: Uses the `qs` library (allows complex objects and arrays)
- `extended: false`: Uses the `querystring` library (simple objects only)

### Example with extended: true

```javascript
// Form data: user[name]=John&user[age]=30&hobbies[]=reading&hobbies[]=coding
// With extended: true
req.body = {
    user: {
        name: 'John',
        age: '30'
    },
    hobbies: ['reading', 'coding']
}

// With extended: false
req.body = {
    'user[name]': 'John',
    'user[age]': '30',
    'hobbies[]': ['reading', 'coding']
}
```

---

## Template Engines

Template engines are tools that allow you to generate HTML dynamically by combining templates with data. Instead of writing static HTML, you write templates that can be filled with dynamic content.

### Why Use Template Engines?

1. **Dynamic Content**: Insert data from your server into HTML
2. **Code Reusability**: Reuse HTML components
3. **Separation of Concerns**: Keep HTML separate from JavaScript logic
4. **Maintainability**: Easier to maintain and update UI
5. **Conditional Rendering**: Show/hide content based on conditions
6. **Loops**: Display lists and repeated content

### Popular Template Engines for Express.js

- **EJS** (Embedded JavaScript) - Uses JavaScript syntax
- **Pug/Jade** - Uses indentation-based syntax
- **Handlebars** - Uses {{}} syntax
- **Mustache** - Logic-less templates

### Without Template Engine (Static HTML)

```javascript
app.get('/user', (req, res) => {
    const user = { name: 'John', age: 30 };
    const html = `
        <html>
        <head><title>User Profile</title></head>
        <body>
            <h1>Welcome ${user.name}</h1>
            <p>You are ${user.age} years old</p>
        </body>
        </html>
    `;
    res.send(html);
});
```

### With Template Engine (Dynamic)

```javascript
// Template file (user.ejs)
<h1>Welcome <%= user.name %></h1>
<p>You are <%= user.age %> years old</p>

// Server code
app.get('/user', (req, res) => {
    const user = { name: 'John', age: 30 };
    res.render('user', { user });
});
```

---

## Installing EJS Template Engine

EJS (Embedded JavaScript) is a popular template engine for Express.js. Here's how to install and set it up.

### Step 1: Install EJS

```bash
npm install ejs
```

### Step 2: Configure Express to use EJS

```javascript
const express = require('express');
const app = express();

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Optional: Set the views directory (default is './views')
app.set('views', './templates');
```

### Complete Setup Example

```javascript
const express = require('express');
const app = express();

// Install EJS first: npm install ejs

// Configure EJS
app.set('view engine', 'ejs');
app.set('views', './views'); // Optional, './views' is default

// Your routes
app.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' });
});

app.listen(3000, () => {
    console.log('Server running with EJS');
});
```

### Project Structure After Installation

```
your-project/
├── node_modules/
├── views/           # EJS templates go here
│   ├── home.ejs
│   └── about.ejs
├── app.js
└── package.json
```

---

## Using EJS Template Engine in Express.js

Once EJS is installed and configured, you can use it to render dynamic HTML pages.

### Basic Usage

```javascript
const express = require('express');
const app = express();

// Configure EJS
app.set('view engine', 'ejs');

// Route that renders an EJS template
app.get('/', (req, res) => {
    res.render('home', {
        title: 'My Website',
        message: 'Welcome to our site!'
    });
});

// Another route with data
app.get('/profile', (req, res) => {
    const user = {
        name: 'John Doe',
        age: 30,
        hobbies: ['reading', 'coding', 'gaming']
    };

    res.render('profile', {
        user: user,
        isLoggedIn: true
    });
});
```

### EJS Template Example (views/profile.ejs)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>User Profile</title>
</head>
<body>
    <h1><%= user.name %>'s Profile</h1>

    <% if (isLoggedIn) { %>
        <p>Welcome back, <%= user.name %>!</p>
    <% } else { %>
        <p>Please log in to view this profile.</p>
    <% } %>

    <h2>Age: <%= user.age %></h2>

    <h3>Hobbies:</h3>
    <ul>
        <% user.hobbies.forEach(hobby => { %>
            <li><%= hobby %></li>
        <% }); %>
    </ul>
</body>
</html>
```

---

## Required Folders for EJS

By default, EJS looks for template files in a folder called `views`. However, you can configure this to use any folder name.

### Default Folder Structure

```
your-project/
├── views/           # Default folder for EJS templates
│   ├── home.ejs
│   ├── about.ejs
│   ├── profile.ejs
│   └── layouts/
│       └── main.ejs
├── public/          # Static files (CSS, JS, images)
│   ├── css/
│   ├── js/
│   └── images/
├── app.js
└── package.json
```

### Custom Views Folder

```javascript
const express = require('express');
const app = express();

// Set custom views directory
app.set('views', './templates'); // Now EJS looks in './templates'

app.get('/', (req, res) => {
    res.render('home'); // Looks for ./templates/home.ejs
});
```

### Recommended Subfolders

```javascript
// Folder structure with subfolders
your-project/
├── views/
│   ├── pages/       # Main pages
│   │   ├── home.ejs
│   │   └── about.ejs
│   ├── partials/    # Reusable components
│   │   ├── header.ejs
│   │   └── footer.ejs
│   └── layouts/     # Layout templates
│       └── main.ejs
```

### Accessing Templates in Subfolders

```javascript
// For templates in subfolders, include the path
res.render('pages/home');      // views/pages/home.ejs
res.render('partials/header'); // views/partials/header.ejs
res.render('layouts/main');    // views/layouts/main.ejs
```

---

## Passing Data from Backend to Frontend with EJS

You can pass data from your Express.js backend to EJS templates using the `res.render()` method. The data is passed as a JavaScript object.

### Basic Data Passing

```javascript
app.get('/user', (req, res) => {
    const user = {
        name: 'John Doe',
        age: 30,
        email: 'john@example.com'
    };

    res.render('user', { user });
});
```

### Multiple Data Objects

```javascript
app.get('/dashboard', (req, res) => {
    const user = { name: 'John', role: 'admin' };
    const posts = [
        { title: 'Post 1', content: 'Content 1' },
        { title: 'Post 2', content: 'Content 2' }
    ];
    const settings = { theme: 'dark', notifications: true };

    res.render('dashboard', {
        user,
        posts,
        settings,
        pageTitle: 'Dashboard'
    });
});
```

### EJS Template (views/user.ejs)

```html
<!DOCTYPE html>
<html>
<head>
    <title><%= user.name %>'s Profile</title>
</head>
<body>
    <h1>Welcome, <%= user.name %></h1>
    <p>Age: <%= user.age %></p>
    <p>Email: <%= user.email %></p>
</body>
</html>
```
### Key Points:
- Data is passed as properties of an object
- Access data in templates using `<%= variable %>`
- Objects and arrays are passed by reference
- Complex data structures work perfectly

---

## Loops in EJS Template Engine

Loops in EJS allow you to iterate over arrays and display repeated content. EJS supports JavaScript's native loops and array methods.

### ForEach Loop (Most Common)

```javascript
// Backend data
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 }
];

app.get('/products', (req, res) => {
    res.render('products', { products });
});
```

```html
<!-- views/products.ejs -->
<h1>Our Products</h1>
<% products.forEach(product => { %>
    <div class="product">
        <h3><%= product.name %></h3>
        <p>Price: $<%= product.price %></p>
    </div>
<% }); %>
```

### For Loop

```javascript
app.get('/numbers', (req, res) => {
    res.render('numbers', { count: 5 });
});
```

```html
<!-- views/numbers.ejs -->
<h1>Numbers 1 to <%= count %></h1>
<% for (let i = 1; i <= count; i++) { %>
    <p>Number: <%= i %></p>
<% } %>
```

### While Loop

```javascript
app.get('/countdown', (req, res) => {
    res.render('countdown', { start: 10 });
});
```

```html
<!-- views/countdown.ejs -->
<h1>Countdown</h1>
<% let counter = start; %>
<% while (counter > 0) { %>
    <p><%= counter %></p>
    <% counter--; %>
<% } %>
```

### Advanced Example with Objects

```javascript
const users = [
    { id: 1, name: 'John', skills: ['JS', 'Python'] },
    { id: 2, name: 'Jane', skills: ['Java', 'C++'] },
    { id: 3, name: 'Bob', skills: ['PHP', 'Ruby'] }
];

app.get('/users', (req, res) => {
    res.render('users', { users });
});
```

```html
<!-- views/users.ejs -->
<h1>Users and Their Skills</h1>
<% users.forEach(user => { %>
    <div class="user">
        <h2><%= user.name %> (ID: <%= user.id %>)</h2>
        <h3>Skills:</h3>
        <ul>
            <% user.skills.forEach(skill => { %>
                <li><%= skill %></li>
            <% }); %>
        </ul>
    </div>
<% }); %>
```

### Loop with Index

```html
<% products.forEach((product, index) => { %>
    <div class="product">
        <h3><%= index + 1 %>. <%= product.name %></h3>
        <p>Price: $<%= product.price %></p>
    </div>
<% }); %>
```

---

## Conditional Statements in EJS

EJS supports conditional statements using JavaScript's if-else syntax.

### Basic If-Else

```javascript
app.get('/profile', (req, res) => {
    const user = {
        name: 'John',
        age: 25,
        isLoggedIn: true,
        role: 'admin'
    };

    res.render('profile', { user });
});
```

```html
<!-- views/profile.ejs -->
<h1><%= user.name %>'s Profile</h1>

<% if (user.isLoggedIn) { %>
    <p>Welcome back! You are logged in.</p>
<% } else { %>
    <p>Please log in to view your profile.</p>
<% } %>

<% if (user.age >= 18) { %>
    <p>You are an adult.</p>
<% } else { %>
    <p>You are a minor.</p>
<% } %>
```

### If-Else If-Else Chain

```javascript
app.get('/grade', (req, res) => {
    const student = {
        name: 'Alice',
        score: 85
    };

    res.render('grade', { student });
});
```

```html
<!-- views/grade.ejs -->
<h1><%= student.name %>'s Grade</h1>
<p>Score: <%= student.score %>/100</p>

<% if (student.score >= 90) { %>
    <p class="grade A">Grade: A - Excellent!</p>
<% } else if (student.score >= 80) { %>
    <p class="grade B">Grade: B - Good job!</p>
<% } else if (student.score >= 70) { %>
    <p class="grade C">Grade: C - Satisfactory</p>
<% } else if (student.score >= 60) { %>
    <p class="grade D">Grade: D - Needs improvement</p>
<% } else { %>
    <p class="grade F">Grade: F - Failed</p>
<% } %>
```

### Ternary Operator

```javascript
app.get('/status', (req, res) => {
    const account = {
        balance: 150,
        isActive: true
    };

    res.render('status', { account });
});
```

```html
<!-- views/status.ejs -->
<h1>Account Status</h1>

<p>Balance: $<%= account.balance %></p>
<p>Status: <%= account.isActive ? 'Active' : 'Inactive' %></p>

<p class="<%= account.balance > 100 ? 'positive' : 'negative' %>">
    Balance is <%= account.balance > 100 ? 'sufficient' : 'low' %>
</p>
```

### Logical Operators

```javascript
app.get('/access', (req, res) => {
    const user = {
        isLoggedIn: true,
        isAdmin: false,
        age: 25
    };

    res.render('access', { user });
});
```

```html
<!-- views/access.ejs -->
<% if (user.isLoggedIn && user.isAdmin) { %>
    <p>You have admin access.</p>
<% } else if (user.isLoggedIn && !user.isAdmin) { %>
    <p>You have user access.</p>
<% } else { %>
    <p>Please log in.</p>
<% } %>

<% if (user.age >= 18 || user.isAdmin) { %>
    <p>You can access adult content.</p>
<% } %>
```

---

## MVC Architecture

MVC (Model-View-Controller) is a software architectural pattern that separates an application into three main components:

### Model
- Represents the data and business logic
- Handles data storage and retrieval
- Contains data validation rules
- Communicates with the database

### View
- Represents the user interface
- Displays data to the user
- Receives user input
- Doesn't contain business logic

### Controller
- Acts as an intermediary between Model and View
- Handles user requests
- Processes input data
- Calls appropriate Model methods
- Selects appropriate View to display

### Why MVC?

1. **Separation of Concerns**: Each component has a specific responsibility
2. **Maintainability**: Easier to modify individual components
3. **Testability**: Components can be tested independently
4. **Reusability**: Components can be reused across the application
5. **Scalability**: Easier to add new features

### MVC Flow

```
User Request → Controller → Model → Database
                           ↓
                    Controller → View → User
```
---

## Connecting Model with View using Controller

The Controller acts as the bridge between Model and View. It receives requests, interacts with the Model to get/process data, and passes that data to the View for rendering.

### Data Flow Example

```javascript
// Controller method
static showUserProfile(req, res) {
    // 1. Get data from request (params, query, body)
    const userId = req.params.id;

    // 2. Interact with Model to get data
    const user = UserModel.getUserById(userId);
    const userPosts = PostModel.getPostsByUserId(userId);

    // 3. Process data if needed
    const userStats = {
        totalPosts: userPosts.length,
        joinDate: user.createdAt
    };

    // 4. Pass data to View
    res.render('user/profile', {
        user: user,
        posts: userPosts,
        stats: userStats,
        pageTitle: `${user.name}'s Profile`
    });
}
```

### Controller Responsibilities:

1. **Receive Request**: Extract data from `req.params`, `req.query`, `req.body`
2. **Validate Input**: Check if required data is present and valid
3. **Call Model Methods**: Get, create, update, or delete data
4. **Process Data**: Transform data if needed (calculations, formatting)
5. **Handle Errors**: Send appropriate error responses
6. **Render View**: Pass processed data to the appropriate template

### View Responsibilities:

1. **Display Data**: Use EJS syntax to display dynamic data
2. **Conditional Rendering**: Show/hide content based on data
3. **Loop Through Data**: Display lists and collections
4. **User Interface**: Provide forms, links, and interactive elements

### Model Responsibilities:

1. **Data Storage**: Handle database operations
2. **Data Retrieval**: Query and return data
3. **Data Validation**: Ensure data integrity
4. **Business Logic**: Implement business rules

---

## Dynamic Routes

Dynamic routes are routes that can match multiple URLs with different parameters. They use route parameters (often called "params") to capture values from the URL.

### Basic Dynamic Route

```javascript
// Route with parameter
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

// Multiple parameters
app.get('/users/:userId/posts/:postId', (req, res) => {
    const userId = req.params.userId;
    const postId = req.params.postId;
    res.send(`User ${userId}, Post ${postId}`);
});
```

### Route Parameter Types

```javascript
// Required parameter
app.get('/users/:id', (req, res) => {
    // Matches: /users/123, /users/abc
    // Doesn't match: /users/
});

// Optional parameter (using ?)
app.get('/users/:id?', (req, res) => {
    // Matches: /users/, /users/123, /users/abc
});

// Multiple segments
app.get('/api/v:version/users/:id', (req, res) => {
    // Matches: /api/v1/users/123, /api/v2/users/abc
});
```

### Common Dynamic Route Patterns

```javascript
// Product pages
app.get('/products/:category/:id', (req, res) => {
    const { category, id } = req.params;
    res.send(`Category: ${category}, Product ID: ${id}`);
});

// Blog posts
app.get('/blog/:year/:month/:slug', (req, res) => {
    const { year, month, slug } = req.params;
    res.send(`Blog post from ${year}/${month}: ${slug}`);
});

// API versioning
app.get('/api/v:version/users/:id', (req, res) => {
    const { version, id } = req.params;
    res.send(`API v${version} - User ${id}`);
});
```

### Route Parameter Validation

```javascript
// Validate parameter type
app.get('/users/:id(\\d+)', (req, res) => {
    // Only matches numeric IDs: /users/123
    // Doesn't match: /users/abc
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

// Multiple validation patterns
app.get('/posts/:year(\\d{4})/:month(\\d{2})', (req, res) => {
    // Matches: /posts/2023/12
    // Doesn't match: /posts/23/1
    const { year, month } = req.params;
    res.send(`Posts from ${year}-${month}`);
});
```

---

## Params in Express.js

Route parameters (params) are named URL segments that capture values from the URL. They are accessible through the `req.params` object.

### How Params Work

```javascript
// Route definition: /users/:id
app.get('/users/:id', (req, res) => {
    console.log(req.params); // { id: '123' }
    res.send(`User ID: ${req.params.id}`);
});

// URL: /users/123
// req.params.id = '123'
```

### Accessing Parameters

```javascript
app.get('/users/:userId/posts/:postId', (req, res) => {
    // For URL: /users/123/posts/456

    console.log(req.params.userId);  // '123'
    console.log(req.params.postId);  // '456'

    // All params as object
    console.log(req.params);  // { userId: '123', postId: '456' }
});
```

### Parameter Types

1. **String Parameters** (default)
2. **Numeric Parameters** (with regex validation)
3. **Optional Parameters**
4. **Multiple Parameters**

```javascript
// String parameter
app.get('/users/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`);
});

// Numeric parameter with validation
app.get('/products/:id(\\d+)', (req, res) => {
    const productId = parseInt(req.params.id);
    res.send(`Product ID: ${productId}`);
});

// Optional parameter
app.get('/search/:query?', (req, res) => {
    const query = req.params.query || 'no query';
    res.send(`Search: ${query}`);
});
```

### Common Use Cases

```javascript
// User profiles
app.get('/users/:username', (req, res) => {
    const username = req.params.username;
    // Find user by username
});

// Blog posts
app.get('/blog/:year/:month/:title', (req, res) => {
    const { year, month, title } = req.params;
    // Find blog post by date and title
});

// API resources
app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    // Return user data as JSON
});

// File serving
app.get('/files/:filename', (req, res) => {
    const filename = req.params.filename;
    // Serve file by name
});
```

---

## Passing ID in Routes using Params

Route parameters are commonly used to pass IDs for database operations like viewing, updating, or deleting specific records.

### Basic ID Parameter

```javascript
// Route to view a specific user
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Find user in database by ID
    const user = findUserById(userId);

    if (!user) {
        return res.status(404).send('User not found');
    }

    res.render('user/profile', { user });
});
```

### CRUD Operations with ID Params

```javascript
// Create - Usually doesn't need ID in route
app.post('/users', (req, res) => {
    const newUser = createUser(req.body);
    res.redirect(`/users/${newUser.id}`);
});

// Read - Get single user
app.get('/users/:id', (req, res) => {
    const user = getUserById(req.params.id);
    res.render('user/show', { user });
});

// Update - Update specific user
app.put('/users/:id', (req, res) => {
    const updatedUser = updateUserById(req.params.id, req.body);
    res.redirect(`/users/${req.params.id}`);
});

// Delete - Delete specific user
app.delete('/users/:id', (req, res) => {
    deleteUserById(req.params.id);
    res.redirect('/users');
});
```