import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Button from "../../components/form/button.jsx";
import { styles } from "./signin.style.js";
import Header from "../../components/header/header.jsx";

export default function Signin() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Header title="Acesse sua conta" style={styles.logo} />
      </View>

      <View style={styles.containerBody}>
        <TextInput style={styles.input} placeholder="E-mail" />
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Senha" />
        <Button label="Entrar"/>
      </View>

      <View style={styles.footer}>
        <Text>Ainda não é cliente? </Text>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}