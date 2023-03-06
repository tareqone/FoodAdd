import React from"react";
import{COLORS,FONTS,icons,SIZES,Google_API_Key} from '../src/constants'
import{
    
    Text,
    View,
    Image,
    TouchableOpacity
}from"react-native";
import MapView ,{PROVIDER_GOOGLE,Marker} from "react-native-maps"
import MapViewDirections from "react-native-maps-directions";
import { createNavigationContainerRef } from "@react-navigation/native";
const OrderDelivery = ({route,navigation})=>{

    const [restaurant,setRestaurants]=React.useState(null)
    const [streetName,setStreetName]=React.useState("")
    const [fromLocation,setFromLocation]=React.useState(null)
    const [toLocation,setToLocation]=React.useState(null)
    const [region,setRegion]=React.useState(null)

     React.useEffect(() =>{
       let {restaurant,currentLocation}=route.params;
        
       let fromLoc=currentLocation.gps
       let toLoc=restaurant.location
       let street=currentLocation.streetName

      let mapRegain={
        latitude:(fromLoc.latitude + toLoc.latitude)/2,
        longitude:(fromLoc.longitude + toLoc.longitude)/2,
        latitudeDelta:Math.abs(fromLoc.latitude - toLoc.latitude)*2,
        longitudeDelta:Math.abs(fromLoc.longitude - toLoc.longitude)*2
      }
      
      setRestaurants(restaurant)
      setStreetName(street)
      setFromLocation(fromLoc)
      setToLocation( toLoc)
      setRegion(mapRegain)


     },[])


function renderMap(){
    const destinattionMarker = () =>(
        <Marker
        coordinate={toLocation}
        >
         <View
         style={{
            height:40,
            width:40,
            borderRadius:20,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:COLORS.white
         }}
         >
         <View
         style={{
            height:30,
            width:30,
            borderRadius:15,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:COLORS.primary
         }}
         >
            <Image 
           source={icons.pin}
           style={{
            width:25,
            height:25,
            tintColor:COLORS.white
           }}
             />
         </View>
         </View>
        </Marker>
    )

const carIcon=()=> (
    <Marker
    coordinate={fromLocation}
    anchor={{ x: 0.5, y: 0.5}}
    flat={true}
    //rotation
    >
        <Image 
        source={icons.car}
        style={{
            width:40,
            height:40,

        }}
        />

    </Marker>
)

    return(
        <View 
        style={{flex : 1}}>
            <MapView 
             provider={MapView.PROVIDER_GOOGLE}
              initialRegion={region}
            style={{flex: 1, }}
             >
                <MapViewDirections 
                  origin={fromLocation} 
                  destination={toLocation}  
                  apikey={Google_API_Key}  
                  strokeWidth={5}
                  strokeColor={COLORS.primary}
                  optimizeWaypoints={true}           
                />
             {destinattionMarker()}
             {carIcon()}
             </MapView>
 
        </View>
    )
}


    return(
        <View style={{flex:1}}>
           {renderMap()}
        </View>
    )
}

export default OrderDelivery;   