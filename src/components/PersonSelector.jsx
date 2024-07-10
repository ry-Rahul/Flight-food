import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import PersonList from "./PersonList";
import { Stack } from "@mui/material";
import { useState } from "react";
import TotalPrice from "./TotalPrice";


export default function PersonSelector() {
  const [expanded, setExpanded] = useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          border: "1.5px solid #5c22df",
          margin: "1rem 0",
          borderRadius: "0.3rem",
          overflow: "hidden",
          backgroundColor: "#ffffff",
          
        }}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Stack direction="column" sx={{
          }}>
            <Typography>Riga - St Petersburg</Typography>
            <Typography
              sx={{
                fontSize: "0.8rem",
                color: "#979797",
              }}
            >
              Flight Timing 3h 40min
            </Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            padding: "0",
          }}
        >
          {/* PassangerList________________________________________________________ */}
          <PersonList  />
        </AccordionDetails>
      </Accordion>

          <TotalPrice />
          
    </div>
  );
}

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, 0)",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
