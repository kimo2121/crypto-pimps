import React from "react";
import "./FAQ.css";
import { ReactComponent as DropDownArrow } from "../../assets/icons/FAQ.svg";
import downArrow from "../../assets/images/FAQ.png";
const FAQ: React.FC = () => {
  return (
    <div className="faq-container">
      <h1>FAQ:</h1>
      <div className="inner-faq">
        <h2>
          Q: Are Crypto Pimps randomly generated?
          <img src={downArrow} alt="" />
        </h2>
        <p>
          A: Yes, outside of a handful of exclusive Pimps that are mintable, all
          Crypto Pimps are uniquely generated from a set of more than 150
          different traits, which account for over 10 BILLION different
          combinations
        </p>
        <h2>
          Q: Is there any benefit to holding a Crypto Pimp?
          <img src={downArrow} alt="" />
        </h2>
        <p>
          A: Absolutely. We don’t want to give out too much information yet, but
          we have big plans in the future to expand this ecosystem and bring
          more dope artwork and use cases to this project. All Crypto Pimp
          holders will receive special membership access and hear about our
          future plans before anyone else
        </p>
        <h2>
          Q: What are the costs of minting? Is minting multiple in one
          transaction possible? How do I mint?
          <img src={downArrow} alt="" />
        </h2>
        <p>
          A: The cost of 1 Crypto pimp will be 0.05 ETH, and the max number able
          to be minted in a single transaction will be 25 pimps. Please refer to
          the video above on how to mint/buy a Crypto Pimp
        </p>
        <h2>
          Q: Will there be any partnerships or future collaborations with
          artists or other projects?
          <img src={downArrow} alt="" />
        </h2>
        <p>
          A: Absolutely! We already have one partnership in place, and we plan
          on building as many useful partnerships and connections as we possibly
          can in the future. We want to onboard more artists and other projects
          for collaborations in the future. Stay tuned!
        </p>
        <h2>
          Q: When will Crypto Pimps be revealed?
          <img src={downArrow} alt="" />
        </h2>
        <p>
          A: The reveal date/time will be the 17th of September at 11:59pm UTC!
        </p>
      </div>
    </div>
  );
};

export default FAQ;
