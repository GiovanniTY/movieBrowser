import React from "react";
import FirstMovie from "./FirstMovie";
import Trending from "./Trending";
import MovieTitle from "./MovieTitle";
import BottomNavbar from "./NavBar";
import MovieDetails from "./MovieDetails";


const Home = () => {
    return(
        
    <div className="home-page">
     <MovieTitle />
     <FirstMovie />
     <Trending />
     <BottomNavbar />
     
    </div>
        
    );
};

export default Home;