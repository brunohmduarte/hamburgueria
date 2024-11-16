import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Button from "../../components/form/button.jsx";
import { styles } from "./signup.style.js";
import Header from "../../components/header/header.jsx";

export default function Signup() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Header title="Crie sua conta" style={styles.logo} />
      </View>

      <View style={styles.containerBody}>
        <TextInput style={styles.input} placeholder="Nome" />
        <TextInput style={styles.input} placeholder="E-mail" />
        <TextInput style={styles.input} placeholder="Whatsapp" />
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Senha" />
        <Button label="Continuar"/>
      </View>

      <View style={styles.footer}>
        <Text>Eu já sou cliente? </Text>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}