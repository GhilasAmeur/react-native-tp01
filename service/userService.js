import { useSQLiteContext } from "expo-sqlite"

export const userService = () =>{
const db = useSQLiteContext();

const addUser = async (nom, email, password) =>{

     const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

     const emailExist = await db.getFirstAsync("SELECT * FROM users WHERE email = ?", [email])

     const isPasswordValid = (text) => passwordRegex.test(text)
     
     const isEmailValid = (text) =>{
        return emailRegex.test(text)
     }

    if(nom.trim() === "" || email.trim() === ""   || password.trim() === ""){
        alert("Tous les champs sont obligatoire.")
        return
    }
    if(!isPasswordValid(password)){
            alert("Mot de passe invalide, 8 caractères, 1 majuscule, 1 minuscule");
              return
    }

     if (!isEmailValid(email)) {
       alert("Email invalide");
       return
     }

     if(emailExist){
        alert("Email existe déjà.")
     }

     
        await db.runAsync("INSERT INTO users (nom, email, password) VALUES (?,?,?)", 
            [nom, email,password])
            alert("Utilisateur ajouté avec succès.")

}

const loginUser = async (email, password) =>{

    const user = await db.getFirstAsync("SELECT * FROM users WHERE email = ?", [email])

        if(!user){
            alert("Email n'existe pas.")
            return
        }

    if(user.password !== password){
        alert("Mot de passe incorrect.")
        return
    }
    return user;
}

const checkEmail = async (email) =>{
console.log("Email:", `"${email}"`, "length:", email.length);

    if(email.trim() === ""){
        alert("Veuillez saisir un email valide.")
        return
    }
    const user = await db.getFirstAsync("SELECT * FROM users WHERE email = ?", [email])
    if(!user){
    alert("Email n'existe pas.")
    return
}
    return user

}
const checkPassword = (text) =>{

 const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
 return passwordRegex.test(text)
}

const passwordUpdate = async (email, password) => {
    const user = await checkEmail(email)
    if(!user){
        return 
    }
    if(!checkPassword(password)){
        alert("Mot de passe invalide.")
        return
    }
    await db.runAsync("UPDATE users SET password = ? WHERE email = ?", [password, email])
    alert("Mot de passe mis à jour avec succès.")
    return true
}

return { addUser, loginUser, checkEmail, passwordUpdate };
}