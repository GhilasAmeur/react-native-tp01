import { View, Text, Button, StyleSheet } from "react-native"

export const HeaderTittle = ({text}) => {
    return (
     <Text style ={styles.headerTittle}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    headerTittle : {
        color: 'purple',
        fontSize: 20,
        fontWeight  : 'bold'
      }

})