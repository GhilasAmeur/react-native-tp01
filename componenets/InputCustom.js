import { StyleSheet, TextInput } from "react-native"

export const InputCustom = ({value, onChangeText, placeholder,type}) =>{
    return(
        <TextInput value={value} 
        onChange={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={styles.placeholder}
        keyboardType={type === 'email' ? 'email-address' : 'default'}
        secureTextEntry={type === 'password' ? true : false}
        style={styles.input}
        />
    )
}
 
const styles = StyleSheet.create({
    input :{
        borderColor: 'gray',
        borderRadius:4,
        borderWidth:1,
        height:20,
        marginTop:20,
        paddingHorizontal:16,
        width:'100%'
    },
    placeholder :{
        color:'gray'
    }
})