import React from "react";
import "./roadMap.css";
import map from "../../assets/images/Group 100.png";
const RoadMap: React.FC = () => {
  return (
    <div className="road-map">
      <h1>ROAD MAP</h1>
      <div className="map">
        <img src={map} alt="" />
        <div className="road-map-p">
          <div className="road-map-1st-p">
            <p>
              Los Angeles: September 2021: Crypto Pimp is brought to life.
              Community building and marketing starts
            </p>
            <p>
              Vegas: NFT Sale starts: 25,000 NFT sale starts. Marketing and
              expansion efforts out in full force. Giveaways live
            </p>
            <p>
              Houston: Giveaways at each major milestone, available to active
              Twitter/Discord users
            </p>
            <ul>
              <li>2,500 NFTs sold: 2.5 ETH given away</li>
              <li>5,000 NFTs sold: 7.5 ETH given away</li>
              <li>
                10,000 NFTs sold: 50 NFTs airdropped to random Crypto Pimp
                holders
              </li>
              <li>
                20,000 NFTs sold: Exclusive piece given away to special active
                user *must own a crypto pimp*
              </li>
              <li>
                25,000 NFTs sold *SOLDOUT*: 1 Special honorary pimp awarded to a
                random cryptopimp holder. Each Crypto Pimp held in an ETH wallet
                is another chance to win. Must verify ownership of wallet
              </li>
            </ul>
          </div>
          <div className="road-map-2nd-p">
            <p>
              Chicago: Continue giveaways and community building. Work with
              crypto dapps such as Rarity Tools and other sites to get rarity
              information and ranking out
            </p>
            <p>
              Miami: 2022: Expand the Pimpverse. Exclusive membership for Crypto
              Pimp holders. More info to be shared later
            </p>
            <p>
              New York: Chapter 1 completed. Chapter 2 just beginning. Crack a
              bottle open, and wait.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
