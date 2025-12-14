import { View, Text, Button, StyleSheet } from "react-native"

export const HeaderTittle = ({text, style}) => {
    return (
     <Text style ={[styles.headerTittle, style]}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    headerTittle : {
        color: 'purple',
        fontSize: 20,
        fontWeight  : 'bold'
      }

})