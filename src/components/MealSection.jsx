import React, { useEffect, useState } from "react";
import {
  Stack,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setTotalPage } from "../slices/pageTagSlice";
import { addMeal, removeMeal } from "../slices/personSlice";

const MealSection = () => {
  const dispatch = useDispatch();

  // Get the meals, page, tag, selected person, and added data from Redux state
  const meals = useSelector((state) => state.meals.meals);
  const page = useSelector((state) => state.page.currentPage);
  const tag = useSelector((state) => state.page.tags);
  const selectedPerson = useSelector((state) => state.page.userIdSelected);
  const addedData = useSelector((state) => state.person);

  // State to keep track of selected drink for each meal
  const [selectedDrinks, setSelectedDrinks] = useState({});

  // Handle meal selection
  const handleMealSelect = (meal) => {
    const isMealSelected = addedData[selectedPerson]?.some(
      (selectedMeal) => selectedMeal.id === meal.id
    );

    if (isMealSelected) {
      dispatch(removeMeal({ personId: selectedPerson, mealId: meal.id }));
    } else {
      const selectedDrink = meal.drinks.find(
        (drink) => drink.id === selectedDrinks[meal.id]
      );
      dispatch(
        addMeal({
          meal: {
            ...meal,
            drinks: selectedDrink,
          },
          personId: selectedPerson,
        })
      );
    }
  };

  // Handle drink selection
  const handleDrinkSelect = (mealId, drinkId) => {
    setSelectedDrinks((prev) => ({
      ...prev,
      [mealId]: drinkId,
    }));
  };

  // Filter meals based on the selected tag
  const filteredMeals =
    tag === "All"
      ? meals
      : meals.filter((meal) => meal.labels.includes(tag.toLowerCase()));

  // Calculate the total number of pages
  const totalPage = Math.ceil(filteredMeals.length / 3);
  useEffect(() => {
    dispatch(setTotalPage(totalPage));
  }, [dispatch, totalPage]);

  return (
    <Stack
      direction="column"
      width={"100%"}
      sx={{
        gap: "1rem",
      }}
    >
      {filteredMeals.slice(page * 3 - 3, page * 3).map((meal) => {
        const isMealSelected = addedData[selectedPerson]?.some(
          (selectedMeal) => selectedMeal.id === meal.id
        );

        return (
          <Card
            key={meal.id}
            sx={{
              width: "100%",
              padding: "0.6rem",
            }}
            elevation={0}
          >
            <Stack
              spacing={2}
              direction={{ xs: "column", sm: "row" }}
              alignItems="center"
            >
              <CardMedia
                component="img"
                sx={{
                  width: {
                    xs: "150px",
                    sm: "150px",
                  },
                  height: {
                    xs: "120px",
                    sm: "150px",
                  },
                  objectFit: "cover",


                }}
                image={meal.img}
              />
              <CardContent
                sx={{
                  padding: "0rem 1rem",
                  flexGrow: 1,
                }}
              >
                <Typography color="text.secondary">{meal.title}</Typography>
                <Typography variant="body2">
                  <strong>Starter:</strong> {meal.starter}
                </Typography>
                <Typography variant="body2">
                  <strong>Desert:</strong> {meal.desert}
                </Typography>
                <Typography variant="h6">
                  <strong>Price:</strong> ₹{meal.price}
                </Typography>
              </CardContent>
              <Stack direction="row" spacing={2} alignItems="center">
                <FormControl fullWidth>
                  <InputLabel id={`drink-select-label-${meal.id}`}>
                    Drinks
                  </InputLabel>
                  <Select
                    labelId={`drink-select-label-${meal.id}`}
                    id={`drink-select-${meal.id}`}
                    label="Drinks"
                    value={selectedDrinks[meal.id] || ""}
                    onChange={(e) => handleDrinkSelect(meal.id, e.target.value)}
                    sx={{
                      height: "40px",
                      minWidth: "120px",
                    }}
                  >
                    {meal.drinks.map((drink) => (
                      <MenuItem key={drink.id} value={drink.id}>
                        {drink.title} - ₹{drink.price}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Button
                  onClick={() => handleMealSelect(meal)}
                  variant={isMealSelected ? "contained" : "outlined"}
                  sx={{
                    height: "40px",
                    minWidth: "100px",
                    borderColor: isMealSelected ? "#f44336" : "#3f51b5",
                    color: isMealSelected ? "#ffffff" : "#3f51b5",
                    backgroundColor: isMealSelected ? "#f44336" : "inherit",
                  }}
                >
                  {isMealSelected ? "Deselect" : "Select"}
                </Button>
              </Stack>
            </Stack>
          </Card>
        );
      })}
    </Stack>
  );
};

export default MealSection;
