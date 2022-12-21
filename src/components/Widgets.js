import React from "react";
import "../styles/Widgets.css";
import InfoIcon from "@mui/icons-material/Info"
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"
function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="Widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
     <div className="widgets">
        <div className="widgets__header">
            <h2>Linkedin News</h2>
            <InfoIcon />
         </div>

         {newsArticle("Jangan Lupa Berdoa Saat Ingin Makan", "Top news - 1000 readers")}
         {newsArticle("Bagaimana Cara Mendapatkan Jodoh", "Top news - 69 readers")}
    </div>
    );  
}

export default Widgets;