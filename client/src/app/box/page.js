"use client";
import {
  changeHeight,
  changeShape,
  changeWidth,
changeBackgroundColor
} from "@/redux/reducerSlices/boxSlice";
import { Input, Button } from "@nextui-org/react";
import React from "react";

import { useDispatch, useSelector } from "react-redux";

const Box = () => {
  const dispatch = useDispatch();
  const { backgroundColor, height, width,borderRadius } = useSelector((state) => state.box);
  return (
    <div>
      <div
        style={{
          backgroundColor: backgroundColor,
          height: height,
          width: width,
          borderRadius:borderRadius
                   
        }}
      ></div>
      <Button onClick={() => dispatch(changeWidth())}>Width</Button>
      <Button onClick={() => dispatch(changeHeight())}>Height </Button>
      <Button onClick={() => dispatch(changeShape())}>Change to Circle</Button>
      <Input onChange={(e)=>dispatch(changeBackgroundColor(e.target.value))} placeholder="Change Color"></Input>
    </div>
  );
};

export default Box;
