import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./signin.style.js";
import Button from "../../components/form/button.jsx";
import Header from "../../components/header/header.jsx";

export default function Signin(props) {
  // conceito de hooks
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function authenticate() {
    console.log(user, pass)
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Header title="Acesse sua conta" style={styles.logo} />
      </View>

      <View style={styles.containerBody}>
        <TextInput 
          style={styles.input} 
          placeholder="E-mail" 
          value={user} 
          onChangeText={(text) => setUser(text)} 
        />
        <TextInput 
          style={styles.input} 
          secureTextEntry={true} 
          placeholder="Senha" 
          onChangeText={(text) => setPass(text)} 
        />
        <Button label="Entrar" onPress={authenticate}/>
      </View>

      <View style={styles.footer}>
        <Text>Ainda não é cliente? </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('signup')}>
          <Text style={styles.footerLink}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}