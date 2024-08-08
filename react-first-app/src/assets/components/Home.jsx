import React from "react";
import FirstMovie from "./FirstMovie";
import Trending from "./Trending";

const Home = () => {
    return(
    <div className="home-page">
     <FirstMovie />
     <Trending />
    </div>
        
    );
};

export default Home;