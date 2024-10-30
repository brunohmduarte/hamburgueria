import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Button from "../../components/form/button.jsx";
import { styles } from "./signin.style.js";

export default function Signin() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Text style={styles.logo}>LOGO</Text>
      </View>

      <View>
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