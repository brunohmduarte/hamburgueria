import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Button from "../../components/form/button.jsx";
import Header from "../../components/header/header.jsx";
import { styles } from "./customer-address.style.js";

export default function CustomerAddress() {

  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  function authenticate() {
    console.log(cep, street, number, neighborhood, city, state);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Header title="Informe o seu endereço para entrega" />
      </View>

      <View>
        <TextInput 
          style={styles.input} 
          placeholder="CEP" 
          value={cep}
          onChangeText={(data) => setCep(data)} />

        <TextInput 
          style={styles.input} 
          placeholder="Endereço" 
          value={street}
          onChangeText={(data) => setStreet(data)} />

        <TextInput 
          style={styles.input} 
          placeholder="Número" 
          value={number}
          onChangeText={(data) => setNumber(data)} />

        <TextInput 
          style={styles.input} 
          placeholder="Bairro" 
          value={neighborhood}
          onChangeText={(data) => setNeighborhood(data)} />

        <TextInput 
          style={styles.input} 
          placeholder="Cidade" 
          value={city}
          onChangeText={(data) => setCity(data)} />

        <TextInput 
          style={styles.input} 
          placeholder="Estado" 
          value={state}
          onChangeText={(data) => setState(data)} />

        <Button label="Registrar" onPres={authenticate} />
      </View>

      <View></View>
    </View>
  )
}