import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Calendar from '../component/Calendar';
import  Todolist  from '../component/Todolist';
import {MaterialCommunityIcons} from '@expo/vector-icons';


const TabIcon = ({ name, size, color }) => {
    return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            {/* 투두 리스트 */}
            <Tab.Screen name="todolist" component={Todolist}
                        options={{
                            headerShown: false,
                            tabBarIcon: props => TabIcon({ ...props, name: 'calendar-check'}),
                        }}/>
            {/* 캘린더 */}            
            <Tab.Screen name="calendar" component={Calendar}
                        options={{
                            headerShown: false,
                            tabBarIcon: props => TabIcon({ ...props, name: 'calendar'}),
                        }}/>
        </Tab.Navigator>
    );
};

export default TabNavigation;