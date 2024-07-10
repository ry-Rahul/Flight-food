import { Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserIdSelected } from "../slices/pageTagSlice";

const PersonList = () => {
  const selectedPerson = useSelector((state) => state.page.userIdSelected);
  const dispatch = useDispatch();
  const persons = [
    { id: 1, name: "Adult Passenger 1" },
    { id: 2, name: "Adult Passenger 2" },
    { id: 3, name: "Adult Passenger 3" },
  ];

  const handlePersonClick = (personId) => {
    dispatch(setUserIdSelected(personId));
  };

  return (
    <Stack direction={"column"}>
      {persons.map((person) => {
        const isSelected = person.id === selectedPerson;
        return (
          <Typography
            key={person.id}
            onClick={() => handlePersonClick(person.id)}
            component="div" // Change component to div
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "1rem",
              border: "0.5px solid #5d4bda",
              borderRight: "none",
              borderLeft: "none",
              cursor: "pointer",
              bgcolor: isSelected ? "#ebeafb" : "",
            }}
          >
            <Stack direction={"row"} spacing={2}>
              <Typography
                component="span" // Change component to span
                sx={{
                  fontSize: {
                    xs: "0.8rem",
                    sm: "0.8rem",
                    lg: "1rem",
                  },
                }}
              >
                {person.name}
              </Typography>
              <Typography
                component="span" // Change component to span
                sx={{
                  fontSize: {
                    xs: "0.8rem",
                    sm: "0.8rem",
                    lg: "1rem",
                  },
                }}
              >
                {isSelected ? "Selected meal" : "Not Selected"}
              </Typography>
            </Stack>
          </Typography>
        );
      })}
    </Stack>
  );
};

export default PersonList;
