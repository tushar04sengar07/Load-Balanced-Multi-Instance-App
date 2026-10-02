# Load-Balanced Multi-Instance App

## Overview
A Node.js application deployed across multiple AWS EC2 instances behind an Application Load Balancer to demonstrate horizontal scaling.

## Architecture
Client -> AWS Application Load Balancer -> 2x AWS EC2 Instances (Docker containers)

## Tech Stack
Node.js, Express, Docker, AWS EC2, AWS ALB, Jest, GitHub Actions.

## How to Run Locally
1. `npm install`
2. `npm test`
3. `docker build -t my-app .`
4. `docker run -p 3000:3000 my-app`
5. Visit `http://localhost:3000`

## CI/CD
GitHub Actions runs tests on every push. Branch protection rules block merging if tests fail.