import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const options = ["Pomodoro", "Short Breack", "Long Breack"]
export const Header = ({setCurrentTime, currentTime, setTime}) => {
 
    const handlePress= (index)=>{
        const newTime = index === 0 ? 25 : index === 1 ? 5: 15;
        setCurrentTime(index);
        setTime(newTime * 60);
    }
    return (
    <View style={{flexDirection:"row"}}>
       {options.map((element, index)=> (
       <TouchableOpacity
        onPress={()=> handlePress(index)}
        key={index} 
        style={[
            styles.itemStyle,
            currentTime != index && {borderColor: "transparent"}
        ]}
        >
            <Text style={{fontWeight:"bold"}}>{element}</Text>
       </TouchableOpacity>
       ))}
    </View>
  )
}

const styles = StyleSheet.create({
    itemStyle: {
        width: "33%",
        borderWidth: 3,
        padding: 5,
        borderRadius:10,
        borderColor: "white",
        marginVertical: 20,
        alignItems:'center'
    }
})