import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import "./Homepage.css"
import DashboardPage from "../DashboardPage/DashboardPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import GamesPage from "../GamesPage/GamesPage";


function HomePage() {
    
    
    return(
        <div className="homeContainer"id="homePage">
            <ProfilePage />
        </div>
    )
} export default HomePage;