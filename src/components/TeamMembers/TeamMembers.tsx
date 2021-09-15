import React from "react";
import "./teamMembers.css";
import member1 from "../../assets/images/member1.jpg";
import member2 from "../../assets/images/member2.jpg";
import member3 from "../../assets/images/member3.jpg";
import member4 from "../../assets/images/member4.jpg";

const TeamMembers: React.FC = () => {
  return (
    <div className="team-container">
      <h1>TEAM</h1>
      <div className="team-members">
        <div className="each-member">
          <div className="member-frame">
            <img src={member1} alt="" />
          </div>
          <p>Ac3 - Project lead</p>
        </div>
        <div className="each-member">
          <div className="member-frame">
            <img src={member2} alt="" />
          </div>
          <p>Jive - Lead Artist</p>
        </div>
        <div className="each-member">
          <div className="member-frame">
            <img src={member3} alt="" />
          </div>
          <p>LemonCrypto - Smart contract dev</p>
        </div>
        <div className="each-member">
          <div className="member-frame">
            <img src={member4} alt="" />
          </div>
          <p>Mr. Cryptz - Background artist</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
