import React from "react";
import TabNavigation from "./component/Tabnavi";
import { NavigationContainer } from "@react-navigation/native";


export default function App() {
    return (
            <NavigationContainer>
                {/* 탭 네비게이션 */}
                <TabNavigation/>
            </NavigationContainer>
    );
};