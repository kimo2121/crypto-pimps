import React from "react";
import Mint from "../../components/Mint/Mint";
import RoadMap from "../../components/RoadMap/RoadMap";
import TeamMembers from "../../components/TeamMembers/TeamMembers";
import Timer from "../../components/Timer/Timer";
import "./home.css";
import buyBanner from "../../assets/images/Layer 8.png";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="second-background">
        <ButtonComponent className="wallet-btn" label="CONNECT WALLET" />
        <ButtonComponent className="claim-btn" label="Claim" />
        <h1>
          Whaddup Playa’s, welcome to the club. Grab a drink, get on the
          dancefloor and enjoy the show. We’re just getting started
        </h1>
      </div>
      <div id="about" className="about">
        <h4>About</h4>
        <p>
          Crypto Pimps is one of the largest NFT projects being launched on the
          Ethereum Blockchain. With 10,648,205,568 different pimp combinations
          possible, only 25,000 will ever exist. Each pimp will have traits
          ranging from skin type, headwear and eyewear, to accessories and dope
          backgrounds drawn by one of our artists. This is our first step in
          creating a much larger ecosystem, more dope artwork, and a deeper
          story/background on the pimp game.
        </p>
      </div>

      <div className="mint-component">
        <h1>CountDown</h1>
        <Timer mintStartAt={1632614400} />
        <h2>MINT</h2>
        <p>Max 25 Pimps per transaction</p>
      </div>
      <TeamMembers />
      <RoadMap />
      <div className="how-to-buy">
        <h1>HOW TO BUY</h1>
        <div className="background-buy"></div>
      </div>
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
