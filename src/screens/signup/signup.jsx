import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./signup.style.js";
import Button from "../../components/form/button.jsx";
import Header from "../../components/header/header.jsx";

export default function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [password, setPassword] = useState("");

  function keep() {
    console.log(name, email, whatsapp, password);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Header title="Crie sua conta" style={styles.logo} />
      </View>

      <View style={styles.containerBody}>
        <TextInput 
          style={styles.input} 
          placeholder="Nome" 
          value={name} 
          onChangeText={(data) => setName(data)} />

        <TextInput 
          style={styles.input} 
          placeholder="E-mail" 
          value={email} 
          onChangeText={(data) => setEmail(data)} />

        <TextInput 
          style={styles.input} 
          placeholder="Whatsapp" 
          value={whatsapp} 
          onChangeText={(data) => setWhatsapp(data)} />

        <TextInput 
          style={styles.input} 
          secureTextEntry={true} 
          placeholder="Senha" 
          value={password} 
          onChangeText={(data) => setPassword(data)} />
          
        <Button label="Continuar" onPress={keep} />
      </View>
    </View>
  );
}