import classNames from 'classnames/bind';
import { Card } from '../../components/Card';
import lunchApp from '../../assets/images/lunchApp.png';
import todoApp from '../../assets/images/todoApp.png';
import homeService from '../../assets/images/homeService.png';
import carRent from '../../assets/images/carRent.png';
import weatherApp from '../../assets/images/weatherApp.png';
import gvazdikuSodyba from '../../assets/images/gvazdikuSodyba.png';
import lunasshop from '../../assets/images/lunasshop.png';
import styles from './Projects.module.css';

const cx = classNames.bind(styles);

export function Projects() {
  return (
    <div>
      <h2 className={cx('projects-heading')}>Projects I&apos;m proud of</h2>
      <Card
        title="Forest House Rent"
        description="Forest House Rent is a modern web application designed to showcase and promote a countryside retreat located in the forest near Vilnius. The platform provides visitors with a seamless way to explore the property, discover its amenities, and make booking inquiries, all built with a mobile-first approach for all screen sizes."
        technologiesHeading="Technologies used include:"
        technologies="HTML, Tailwind CSS, Vite ( REACT / TS )"
        img={gvazdikuSodyba}
        projectLink="https://gvazdikusodyba.lt"
      />
      <Card
        title="Lunas's shop"
        description="Luna’s Shop is a clothing e-shop web app I built for a Tesonet hackathon. The project was created to test and demonstrate AI chat capabilities inside an e-commerce environment. Users can browse clothing items and interact with an integrated AI assistant that helps with navigation, product details, and general questions."
        technologiesHeading="Technologies used include:"
        technologies="HTML, Tailwind CSS, Vite ( REACT / TS )"
        img={lunasshop}
        projectLink="https://lunasshop.online/"
        isReverse
      />
      {/* <Card
        title="Weather-App"
        description="A Weather App is a full-stack web application providing real-time weather data using the OpenWeatherMap API, with a React frontend and a Node.js backend for logging user interactions."
        technologiesHeading="Technologies used include:"
        technologies="HTML, SASS, Vite ( REACT / JS ), Node.js, Express, MongoDB"
        img={weatherApp}
        projectLink="https://weather-app-frontend-rouge-three.vercel.app"
        githubtLink="https://github.com/valsin132/weather-app-frontend"
      /> */}
      <Card
        title="Car-Rent-App"
        description="A car rental platform is a full-stack web application offering users an easy way to find and book cars. The app includes user and admin panels. User Panel: browse cars, select rental dates, and confirm bookings. Admin Panel: manage car listings, add new vehicles, and oversee reservations. The intuitive design ensures a smooth user experience, from registration to booking confirmation."
        technologiesHeading="Technologies used include:"
        technologies="HTML, CSS, REACT, Node.js, Express, MongoDB"
        img={carRent}
        projectLink="https://car-rent-app-iota.vercel.app"
        githubtLink="https://github.com/valsin132/CarRentApp-main"
      />
      <Card
        title="Lunch-App"
        description="Project is setup using Vite (React / TypeScript), PostCSS, Jest, React Testing Library."
        technologiesHeading="Technologies used include:"
        technologies="HTML, PostCSS, Vite ( REACT / TypeScript )"
        img={lunchApp}
        projectLink="https://lunch-app-beta.vercel.app"
        githubtLink="https://github.com/valsin132/Lunch-app"
        isReverse
      />
      <Card
        title="Find Home Service & Repair"
        description="Find Home Service/Repair Near You: is a full-stack web application to explore and book the best home services and repairs in your area. Frontend: built with Vite, React, TypeScript, Sass, and HTML for a fast, dynamic, and responsive user experience. Backend: powered by Express, Node.js, and MongoDB for efficient data handling, secure APIs, and seamless user interactions. The platform allows users to browse services, book appointments, and manage bookings with ease."
        technologiesHeading="Technologies used include:"
        technologies="HTML, SASS, Vite ( REACT / TypeScript ), Node.js, Express, MongoDB"
        img={homeService}
        projectLink="https://home-service-app-frontend-one.vercel.app"
        githubtLink="https://github.com/valsin132/home-service-app"
      />
      <Card
        title="To-Do-App"
        description="This project is set up using Vite with React and features a dark/light mode toggle implemented via React Context. Tasks are managed and persisted in local storage using a context-based approach, allowing for state management and updates across the application. This setup provides a responsive and dynamic user interface."
        technologiesHeading="Technologies used include:"
        technologies="HTML, CSS, Vite ( REACT )"
        img={todoApp}
        projectLink="https://to-do-app-one-wheat.vercel.app"
        githubtLink="https://github.com/valsin132/to-do-app"
        isReverse
      />
    </div>
  );
}
