# Instagram Clone Backend

This is the backend implementation of an Instagram clone application built using Node.js, Express, and MySQL.

## Table of Contents

- [Instagram Clone Backend](#instagram-clone-backend)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Setup](#setup)
  - [API Endpoints](#api-endpoints)
  - [Database Schema](#database-schema)

## Introduction

This project aims to replicate the core functionalities of Instagram's backend, allowing users to post images, like/dislike posts, and view a feed of posts with pagination support.

## Features

- User authentication (login, signup)
- Post management (create, get posts, like/dislike)
- Image management for posts (uploading and retrieving images)
- Pagination for the feed
- Database storage using MySQL

## Setup

1. Clone the repository:

2. Install dependencies:

3. Configure the MySQL connection in `db.js` file.

4. Start the server:

- npm start

## API Endpoints

- `/api/login`: User login endpoint
- `/api/signup`: User registration endpoint
- `/api/posts`: Get paginated list of posts
- `/api/posts/create`: Create a new post
- `/api/posts/:postId/like`: Like a post
- `/api/posts/:postId/dislike`: Dislike a post
- `/api/posts/:postId/likes`: Get list of users who liked a post
- `/api/posts/:postId/images`: Get images associated with a post

## Database Schema

- `users`: Table for storing user details
- `posts`: Table for storing posts with captions and timestamps
- `images`: Table for storing multiple images associated with a post
- `likes`: Table for storing post likes with user and post associations
