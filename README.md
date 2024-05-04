# NewsReader

## About
This application aims to build a front end application using the [NewsAPI](https://newsapi.org/) to display an intuitive UI to users who can view different types of news articles and details about them.

## Contributors
- [David Kwon](https://github.com/dkwon1223)

## Technologies Used
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Preview
To Run Locally 
- Fork and clone this repository
- Run `npm install` then `npm run dev` in the project root directory

## IMPORTANT NOTE: 
In order to be able to fetch data from the NewsAPI locally, you must use your own API key. 
- Sign up [here](https://newsapi.org/register)
- Create a `.env` file in the root directory of the project
- Within the `.env` file, create a variable called `VITE_API_KEY` and set its value to the API key you received through your account
  - For example: `VITE_API_KEY=yourkeyhere` 

## Screenshots
![Screenshot from 2024-05-03 22-59-04](https://github.com/dkwon1223/news-reader/assets/112133897/40fa1892-2c75-483a-8b0a-d9a27c47cbbd)

## Future Directions
- Finish implementing search feature functionality
- Web scraping for the full article body content in detailed view

