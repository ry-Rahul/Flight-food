import React, { useState } from "react";
import { Grid, Box, Typography, Stack, Pagination, Drawer, Button } from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import { useDispatch, useSelector } from "react-redux";
import PersonSelector from "../components/PersonSelector";
import MealSection from "../components/MealSection";
import { changePage } from "../slices/pageTagSlice";
import TagList from "../components/TagList";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerPhone from "../components/DrawerPhone"; // Import the DrawerPhone component

function Home() {
  const dispatch = useDispatch();
  const totalPages = useSelector((state) => state.page.totalPages);
  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false); 

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Grid
      container
      bgcolor="#eeeeee"
      height={"100%"}
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        padding: {
          xs: "0",
          sm: "1rem 2rem",
        },
      }}
    >
      <Grid
        item
        xs={12}
        md={7}
        bgcolor="#ffffff"
        sx={{
          padding: {
            xs: "1rem 1rem",
            sm: "1rem 2rem",
          },
        }}
      >
        <TagList />
        <hr
          style={{
            margin: "1.4rem 0",
            width: "100%",
            borderColor: "#eeeeee",
          }}
        />

        <Grid
          container
          sx={{
            height: { xs: "calc(100vh - 200px)", sm: "calc(100vh - 250px)" },
            padding: {
              xs: "0",
              sm: "1rem",
            },
          }}
        >
          <MealSection />
        </Grid>
        <hr />

        {/* Pagination Start form here __________________________________ */}
        <Grid
          container
          sx={{
            display: { xs: "flex" },
            justifyContent: { xs: "space-between", sm: "flex-end" },
            alignItems: { xs: "center" },
          }}
        >
          <Box
            sx={{
              display: {
                xs: "block",
                sm: "none",
              },
            }}
          >
            <Button onClick={toggleDrawer(true)}>
              <MenuIcon />
            </Button>
            <DrawerPhone open={drawerOpen} onClose={toggleDrawer(false)}>

            </DrawerPhone>
          </Box>

          <Pagination
            count={totalPages}
            sx={{ marginTop: "0rem", color: "#ebeafb" }}
            onChange={(e, page) => dispatch(changePage(page))}
          />
        </Grid>
      </Grid>
      {/* Right Part Grid StartS here */}
      <Grid
        item
        xs={5}
        md={5}
        bgcolor="primary.white"
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
          padding: "0 2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: {
              xs: "0.5rem",
              sm: "1rem",
            
            }
          }}
          
        >
          <FlightIcon
            fontSize="small"
            color="white"
            sx={{
              transform: "rotate(90deg)",
            }}
          />
          <Typography variant="">Select meal</Typography>
        </Box>

        <Stack
          spacing={2}
          sx={{
            marginTop: "2rem",

          }}
        >
          <PersonSelector />
          
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Home;
