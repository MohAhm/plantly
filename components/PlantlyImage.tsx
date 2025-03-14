import React from "react";
import { Image, useWindowDimensions } from "react-native";

type Props = {
  size?: number;
};

export const PlantlyImage = ({ size }: Props) => {
  const { width } = useWindowDimensions();

  const imageSize = size ?? Math.min(width / 1.5, 400);

  return (
    <Image
      source={require("@/assets/plantly.png")}
      style={{ width: imageSize, height: imageSize }}
    />
  );
};
