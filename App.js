import React from 'react';
import {NavigationContainer} from "@react-navigation/native"
 
import Tab from "./navigation/tabs"
import{Home, restaurant, OrderDelivery, } from './screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './navigation/tabs';

const App = () =>{
    const stack= createNativeStackNavigator();

    return(
     <NavigationContainer>
     <stack.Navigator
     screenOption={{
headerShow:false
     }}
     initialRouteName={"Home"}
     >
       
 <stack.Screen name="Home" component={Tabs}/>
<stack.Screen name="Restaurant" component={restaurant}/>
<stack.Screen name="OrderDelivery" component={OrderDelivery}/>

     </stack.Navigator>
       </NavigationContainer>
    )
} 
export default App; 
