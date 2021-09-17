import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import downArrow from "../../assets/images/FAQ.png";
import "./FAQ.css";

const Accordion = withStyles({
  root: {
    textAlign: "left",
    color: "#66CCFF ",
    borderRadius: "5px",
    fontWeight: "bolder",
    backgroundColor: "transparent",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "transparent",
    borderRadius: "5px",
    color: "#FFCCFF",
    paddingRight: "60px",
    margin: "5vh 0 0 0",
    border: "3px solid #cc66cc",
    boxShadow: " 0px 0px 4px 2px #cc66cc",
    marginBottom: -1,
    minHeight: 89,
    "&$expanded": {
      minHeight: 89,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2.5),
  },
}))(MuiAccordionDetails);

const CustomizedAccordions: React.FC = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel: any) => (event: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div id="faq" className="faq-component">
      <h1>FAQ</h1>
      <div className="accordion-wrpper">
        <Accordion
          square
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              className={
                expanded === "panel1"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <img
                className={expanded === "panel1" ? "arrow active" : "arrow"}
                src={downArrow}
                alt=""
              />
              Q: Are Crypto Pimps randomly generated?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A: Yes, outside of a handful of exclusive Pimps that are mintable,
              all Crypto Pimps are uniquely generated from a set of more than
              150 different traits, which account for over 10 BILLION different
              combinations
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography
              className={
                expanded === "panel2"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <img
                className={expanded === "panel2" ? "arrow active" : "arrow"}
                src={downArrow}
                alt=""
              />
              Q: Is there any benefit to holding a Crypto Pimp?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A: Absolutely. We don’t want to give out too much information yet,
              but we have big plans in the future to expand this ecosystem and
              bring more dope artwork and use cases to this project. All Crypto
              Pimp holders will receive special membership access and hear about
              our future plans before anyone else
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography
              className={
                expanded === "panel3"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <img
                className={expanded === "panel3" ? "arrow active" : "arrow"}
                src={downArrow}
                alt=""
              />
              Q: What are the costs of minting? Is minting multiple in one
              transaction possible? How do I mint?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A: The cost of 1 Crypto pimp will be 0.05 ETH, and the max number
              able to be minted in a single transaction will be 25 pimps. Please
              refer to the video above on how to mint/buy a Crypto Pimp
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography
              className={
                expanded === "panel4"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <img
                className={expanded === "panel4" ? "arrow active" : "arrow"}
                src={downArrow}
                alt=""
              />
              Q: Will there be any partnerships or future collaborations with
              artists or other projects?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A: Absolutely! We already have one partnership in place, and we
              plan on building as many useful partnerships and connections as we
              possibly can in the future. We want to onboard more artists and
              other projects for collaborations in the future. Stay tuned!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography
              className={
                expanded === "panel5"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <img
                className={expanded === "panel5" ? "arrow active" : "arrow"}
                src={downArrow}
                alt=""
              />
              Q: When will Crypto Pimps be revealed?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A: The reveal date/time will be the 29th of September at 11:59pm
              UTC!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
export default CustomizedAccordions;
