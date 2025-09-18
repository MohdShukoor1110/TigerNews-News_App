# TigerNews - A React News Application

TigerNews is a web application built with React that fetches and displays top headlines from various categories using the News API. The app provides a clean, responsive interface for browsing news and includes a top loading bar to indicate when new content is being loaded.


## Features

- Dynamic News Categories: Browse top headlines across different categories, including Business, Entertainment, General, Health, Science, Sports, and Technology.
- Infinite Scrolling: The app loads more articles as you scroll down the page, providing a seamless browsing experience.
- Top Loading Bar: A sleek loading bar at the top of the page indicates the progress of data fetching, improving user experience.
- Responsive Design: Built with Bootstrap, the app ensures a consistent and appealing layout across various devices.
- React Router: Utilizes React Router for smooth navigation between different news categories without a full page reload.
- Dynamic Content: Each news article card displays the title, description, image, source, author, and publication date.
- External Links: A "Read More" button on each article card takes the user to the full news story on the source website.


## Technologies Used

- React: The core library for building the user interface.
- React Hooks: Manages component state (useState) and side effects (useEffect).
- React Router: Handles application-level routing.
- React Top Loading Bar: A component for a simple top loading bar.
- React Infinite Scroll Component: Enables the infinite scrolling feature.
- Bootstrap: Used for styling and creating a responsive layout.
- News API: The external API used to fetch news data.


## Installation

1. **Install the required dependencies:**
   ```bash
   npm install
   ```

2. **Create a `.env.local` file in the root of your project and add your News API key:**
   ```env
   REACT_APP_NEWS_API=<YOUR_API_KEY>
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

4. **Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the app.**