import React from "react";
import "./teamMembers.css";
import member1 from "../../assets/images/member1.jpg";
import member2 from "../../assets/images/member2.jpg";
import member3 from "../../assets/images/member3.jpg";
import member4 from "../../assets/images/member4.jpg";
import member5 from "../../assets/images/member5.png";

const TeamMembers: React.FC = () => {
  return (
    <div id="team" className="team-container">
      <h1>TEAM</h1>
      <div className="team-members">
        <div className="each-member">
          <div className="member-frame">
            <img src={member1} alt="" />
          </div>
          <p>
            <a href="https://twitter.com/Crypto_Ac3">Ac3 - Project lead</a>
          </p>
        </div>
        <div className="each-member">
          <div className="member-frame">
            <img src={member2} alt="" />
          </div>
          <p>
            <a href="https://twitter.com/jiveturkey1497">Jive - Lead Artist</a>
          </p>
        </div>
        <div className="each-member">
          <div className="member-frame">
            <img src={member4} alt="" />
          </div>
          <p>
            <a href="https://twitter.com/AnonLeagueSA">
              Cryptz - Background artist
            </a>
          </p>
        </div>
        <div className="each-member">
          <div className="member-frame">
            <img src={member3} alt="" />
          </div>
          <p>Caakes - Web UI Designer</p>
        </div>
        <div className="each-member">
          <div className="member-frame">
            <img src={member5} alt="" />
          </div>
          <p>Lomon Crypto - Developer</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
