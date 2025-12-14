import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";


export const ButtonCustom = ({text, onPress, secondary}) => {
    return (
     <TouchableOpacity style ={[
        styles.button, secondary ? styles.buttonSecondary : styles.buttonPrimary
     ]} onPress={onPress}>
        <Text style = {[styles.buttonTextPrimary, secondary ? styles.buttonTextSecondary : styles.buttonPrimary]} >{text}</Text>
     </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    borderWidth: 1,
    marginTop: 25,
    padding: 12,
    width: "100%",
  },
  buttonPrimary: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple",
    borderColor: "purple",
  },
  buttonSecondary: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "lightgray",
  },
  buttonTextPrimary: {
    color: "white",
    fontWeight: "bold",
  },
  buttonTextSecondary: {
    color: "purple",
  },
  shadow: {
    boxShadow: "0 3px 5px rgba(0,0,0.05)",
  },
});