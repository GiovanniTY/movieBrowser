import React from "react";
import FirstMovie from "./FirstMovie";
import Trending from "./Trending";
import MovieTitle from "./MovieTitle";


const Home = () => {
    return(
        
    <div className="home-page">
     <MovieTitle />
     <FirstMovie />
     <Trending />
     
    </div>
        
    );
};

export default Home;