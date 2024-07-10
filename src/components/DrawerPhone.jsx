import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import TotalPrice from "./TotalPrice";
import { useDispatch, useSelector } from "react-redux";
import { setUserIdSelected } from "../slices/pageTagSlice";

const DrawerPhone = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const selectedPerson = useSelector((state) => state.page.userIdSelected);

  const persons = [
    { id: 1, name: "Adult Passenger 1" },
    { id: 2, name: "Adult Passenger 2" },
    { id: 3, name: "Adult Passenger 3" },
  ];

  const handlePersonClick = (personId) => {
    dispatch(setUserIdSelected(personId));
  };

  return (
    <Drawer open={open} onClose={onClose}>
      <Box sx={{ width: 250 }}>
        <List>
          <ListItem sx={{ padding: "0 1rem" }}>
            <ListItemText primary="Riga - St Petersburg" />
            <FlightIcon
              fontSize="small"
              sx={{
                transform: "rotate(90deg)",
              }}
            />
          </ListItem>

          <ListItem sx={{ padding: "0 1rem", marginTop: "2rem" }}>
            <ListItemText primary="Flight Timing 3h 40min" />
          </ListItem>

          {persons.map((person) => (
            <ListItem
              key={person.id}
              onClick={() => handlePersonClick(person.id)}
              sx={{
                padding: "0 1rem",
              }}
            >
              <ListItemButton
                sx={{
                  bgcolor: selectedPerson === person.id ? "#ebeafb" : "",
                  border: "0.5px solid #5d4bda",
                }}
                selected={selectedPerson === person.id}
              >
                <ListItemText primary={person.name} />
              </ListItemButton>
            </ListItem>
          ))}

          <ListItem sx={{ padding: "0 1rem", marginTop: "2rem" }}>
            <TotalPrice />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerPhone;
