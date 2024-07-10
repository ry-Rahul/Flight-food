import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const TotalPrice = () => {

  const addedData = useSelector((state) => state.person);
 const seletedUser = useSelector((state) => state.page.userIdSelected);
  const data = addedData[seletedUser]
  const [total , setTotal] = useState(0)

  useEffect(() => {
    let sum = 0;
    data.forEach((item) => {
      sum += item.price;
      if(item.drinks!==undefined)
        sum += item.drinks.price;
    });
    setTotal(sum);
  }
  , [data]);

  return (
    <div>
      Total : ₹{total.toFixed(2)}
    </div>
  )
}

export default TotalPrice
