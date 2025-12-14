import { Text, StyleSheet, TouchableOpacity } from "react-native";
export const FooterTittle = ({ text, action, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.container]}>
      <Text style={[styles.di, style]} onPress={onPress}>{text}</Text>
      <Text style = {styles.cv} onPress={onPress}> {action}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    textAlign: "center",
    marginTop: 10,
  },
  di: {
    fontSize: 15,
    marginTop:12
    
  },
  cv: {
    color: "purple",
    marginTop: 12,
    fontWeight: "bold",
    fontSize: 15,
  },
});
