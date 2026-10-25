# Bevan Philip
# ID: 1001527799

# Wild Atlas — CSE 6332

An original image gallery featuring 12 wildlife images, descriptions, habitat filters, and an accessible full-size image viewer.

## Run locally without Docker
Run `python -m http.server 8081` and visit http://localhost:8081/.

## Run course container
1. Install and open Docker Desktop.
2. Clone the repository:
   `git clone https://github.com/ToddRosenkrantz/cse6332_project_1-5.git`
3. Copy the contents of this folder into `<course-container>/data/www/`.
4. In PowerShell, `cd` into the course-container folder containing `docker-compose.yaml`.
5. Run `docker compose up -d`.
6. Open http://localhost:8080/.
7. Stop the container with `docker compose stop`; restart with `docker compose start`.