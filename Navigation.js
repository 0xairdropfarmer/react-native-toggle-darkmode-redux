import React from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { NavigationContainer ,  DefaultTheme,
    DarkTheme } from '@react-navigation/native'
    import {
        Provider as PaperProvider,
        DefaultTheme as PaperDefaultTheme,
        DarkTheme as PaperDarkTheme,
     } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/Home';
import SettingScreen from './screens/Setting';
import { useDispatch,useSelector } from "react-redux";

const Stack = createStackNavigator()
function HomeStack() {
   return (
       <Stack.Navigator>
           <Stack.Screen
               name="Home"
               component={HomeScreen}
           />
       </Stack.Navigator>
   );
}
function SettingStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Setting" component={SettingScreen}  />
           
        </Stack.Navigator>
    );
 }

 export default () => {
    const themeReducer = useSelector(({ themeReducer }) => themeReducer);
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer theme={themeReducer.theme ? DarkTheme : DefaultTheme}>
              <PaperProvider theme={themeReducer.theme ? PaperDarkTheme : PaperDefaultTheme}>
            <Tab.Navigator screenOptions={({ route }) => ({
                
               tabBarIcon: ({ focused, color, size }) => {
                   let iconName;
 
                   if (route.name === 'Home') {
                       iconName = focused ? 'home' : 'home-outline';
                   } else if (route.name === 'Settings') {
                       iconName = focused ? 'settings' : 'settings-box';
                   }
                   return (
                       <MaterialCommunityIcons
                           name={iconName}
                           size={size}
                           color={color}
                       />
                   );
               },
           })}
               tabBarOptions={{
                   activeTintColor: 'tomato',
                   inactiveTintColor: 'gray',
               }}>
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Settings" component={SettingStack} />
            </Tab.Navigator>
            </PaperProvider>
        </NavigationContainer>
    );
 }
 