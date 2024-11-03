import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

const SparklineComponent = () => {
  const data = [5, 10, 5, 20, 8, 15]; // Example data

  return (
    <div>
      <Sparklines data={data}>
        <SparklinesLine color="cyan" />
      </Sparklines>
    </div>
  );
};

export default SparklineComponent;
