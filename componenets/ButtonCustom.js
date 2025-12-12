import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";


export const ButtonCustom = ({text, onPress, secondary}) => {
    return (
     <TouchableOpacity style ={[
        styles.button, secondary ? styles.buttonSecondary : styles.buttonPrimary
     ]} onPress={onPress}>
        <Text style = {[]} >{text}</Text>
     </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  button: {
    borderRadius : 4,
    borderWidth : 1,
    marginTop : 25,
    padding:20,
    width:'100%'

  },
  buttonPrimary: {
    backgroundColor : 'purple',
    borderColor:'purple',


  },
  buttonSecondary: {
    borderColor : 'lightgray'
  },
  buttonTextPrimary: {
    color:'white',
  
  },
  buttonTextSecondary: {
    color : 'purple'
  },
  shadow: {
    boxShadow:'0 3px 5px rgba(0,0,0.05)'
  },
});