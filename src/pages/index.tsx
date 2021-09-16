import Hero from "../components/Home/Hero";

/* Sections */
import Introduction from "../components/Home/Sections/Introduction";
import Facilities from "../components/Home/Sections/Facilities";
import CheckRooms from "../components/Home/Sections/CheckRooms";
import Activities from "../components/Home/Sections/Activities";
import Contact from "../components/Home/Sections/Contact";

/* Import types */
import type { NextPage } from "next";

const Home: NextPage = () => (
  <div className="space-y-28">
    <Hero />

    <Introduction />
    <Facilities />
    <CheckRooms />
    <Activities />
    <Contact />
  </div>
);

export default Home;
