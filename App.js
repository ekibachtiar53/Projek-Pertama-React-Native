import React from "react";
import {View, ScrollView } from "react-native";
import BestAgents from "./src/pages/BestAgents";
import BottomBar from "./src/pages/BottomBar";
import Categories from "./src/pages/Categories";
import Cities from "./src/pages/Cities";
import Estate from "./src/pages/Estate";
import StaffPicks from "./src/pages/StaffPicks";

const App = () => {
  return (
    <View>
      <ScrollView>
        <Estate/>
        <Categories/>
        <StaffPicks/>
        <BestAgents/>
        <Cities/>
        <BottomBar/>
      </ScrollView>
    </View>
  )
};

export default App;
