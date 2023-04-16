import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ResearchCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
        <>
        <div className="myCarousel">
          <h3>Stock Price Prediction: A Time Series Analysis</h3>
          <p>A research for predicting the Stock price of Bangladesh for a month by applying Machine Learning algorithms.</p>
          <a className="R-link" onClick={() => window.open("https://github.com/Mahatabe/Time_series_analysis_for_stock_prediction")}>GitHub</a>
          <br />
          <a className="R-link" onClick={() => window.open("https://ieeexplore.ieee.org/document/10056009")}>Publication</a>
        </div>
      </>
      <>
        <div className="myCarousel">
          <h3>Analysis of Protein Sequencing for Drug Discovery</h3>
          <p>This research was to find out drug target proteins by analyzing the protein sequencing by using here are Protein Sequence, protein length, and Gene.</p>
          <a className="R-link" onClick={() => window.open("https://github.com/Mahatabe/Analysis-of-Protein-Sequencing-for-drug-discovery")}>GitHub</a>
        </div>
      </>
      <>
        <div className="myCarousel">
          <h3>Apply Machine Learning Algorithms to Predict Product Ratings Scale by Observing The Smartphone Sensors Data</h3>
          <p>A Research to predict user-preferred rating scales with the help of smartphone sensor data by applying Machine learning algorithms.</p>
        </div>
      </>
      
    </Carousel>
  )
}

export default ResearchCarousel
