import React, { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { changePage, changeTags } from "../slices/pageTagSlice";

const TagList = () => {

  const dispatch = useDispatch();
  const tags = useSelector((state) => state.meals.labels);

  const [allOptions, setAllOptions] = useState([
    "All",
    ...tags.map((item) => item.label),
  ]);

  const label = useSelector((state) => state.page.tags);


  const setTagHandler = (item) => () => {
    dispatch(changeTags(item));
    dispatch(changePage(1));
  };



  
  return (
    <Stack
      spacing={{ xs: 1, sm: 1 }}
      direction="row"
      useFlexGap
      flexWrap="wrap"
    >
      {tags &&
        allOptions.map((item) => {
          return (
            <Typography
              key={item}
              onClick={setTagHandler(item)}
              sx={{
                padding:{xs:"0.1rem 1rem",sm:"0.3rem 1.5rem"},
                borderRadius: "1rem",
                border: "1px solid #ccc",
                cursor: "pointer",
                bgcolor: label === item ? "#ebeafb" : "",
                borderColor: label === item ? "#5d4bda" : "",
                fontSize: {
                  xs: "0.7rem",
                  sm: "1rem",
                   
                },
              }}
            >
              {item}
            </Typography>
          );
        })}
    </Stack>
  );
};

export default TagList;
