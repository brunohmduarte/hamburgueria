import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style.js";

export default function Button(props) {
  // function Signin() {
  //   Alert.alert('Fazer o login!');
  // }

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.btn}>
      <Text style={styles.label}>{props.label}</Text>
    </TouchableOpacity>
  );
}
