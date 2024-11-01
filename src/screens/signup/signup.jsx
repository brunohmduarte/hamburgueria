import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Button from "../../components/form/button.jsx";
import { styles } from "./signup.style.js";

export default function Signup() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Text style={styles.logo}>LOGO</Text>
      </View>

      <View>
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