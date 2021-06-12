import React from "react";
import Section from "./Section";

function Home() {
  return (
    <div>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
        backgroundImg="model-s.jpg"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
        backgroundImg="model-y.jpg"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
        backgroundImg="model-3.jpg"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
        backgroundImg="model-x.jpg"
      />
    </div>
  );
}

export default Home;
