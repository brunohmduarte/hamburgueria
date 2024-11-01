import { Text, TextInput, View } from "react-native";
import Button from "../../components/form/button.jsx";
import { styles } from "./customer-address.style.js";

export default function CustomerAddress() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Text style={styles.logo}>LOGO</Text>
        <Text style={styles.description}>Informe o seu endereço para entrega</Text>
      </View>

      <View>
        <TextInput style={styles.input} placeholder="CEP" />
        <TextInput style={styles.input} placeholder="Endereço" />
        <TextInput style={styles.input} placeholder="Número" />
        <TextInput style={styles.input} placeholder="Bairro" />
        <TextInput style={styles.input} placeholder="Cidade" />
        <TextInput style={styles.input} placeholder="Estado" />
        <Button label="Registrar"/>
      </View>

      <View></View>
    </View>
  )
}