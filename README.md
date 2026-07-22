# html-portfolio-dasun

# Dockerized Static portfolio Website

A simple static HTML, CSS, and JavaScript website containerized using Docker and Nginx.

## 📌 Project Overview

This project demonstrates how to containerize a static website using Docker.

The website is served using the lightweight Nginx web server inside a Docker container.

---

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript
- Docker
- Nginx (Alpine)

---

## 📂 Project Structure

```
.
├── index.html
├── style.css
├── script.js
├── Dockerfile
├── .dockerignore
└── README.md
```

---

## Dockerfile

```dockerfile
FROM nginx:alpine

COPY . /usr/share/nginx/html

EXPOSE 80
```

---

## Build Docker Image

```bash
docker build -t static-website:v1 .
```

---

## Run Docker Container

```bash
docker run -d -p 8080:80 --name website-container static-website:v1
```

---

## Verify Running Containers

```bash
docker ps
```

---

## Open the Website

```
http://localhost:8080
```

---

## Stop the Container

```bash
docker stop website-container
```

---

## Remove the Container

```bash
docker rm website-container
```

---

## Remove the Docker Image

```bash
docker rmi static-website:v1
```

---

## Screenshots

### Home Page

![Home](screenshots/home-page.png)

### Button Click

![Button](screenshots/button-click.png)

### Docker Container Running

![Docker](screenshots/docker-ps.png)

---

## Learning Outcomes

- Dockerfile basics
- Docker image creation
- Docker containers
- Port mapping
- Nginx web server
- Container lifecycle management
- Docker CLI commands

---

## Author

Dasun
