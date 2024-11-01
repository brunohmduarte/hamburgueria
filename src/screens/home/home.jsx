import { Button, SafeAreaView, Text, TextInput, View } from "react-native";
import { styles } from "./home.style.js"

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>Menu</Text>
        <Text>Notifiy</Text>
        <Text>QR Code</Text>
      </View>

      <View style={styles.greetings}>
        <Text>Chegou a hora de matar a sua fome!</Text>
      </View>

      <View style={styles.search}>
        <Text>Encontre os melhores hamburguers de sua preferência e faça o seu pedido por aqui.</Text>
        <View style={styles.searchInputBox}>
          <TextInput style={styles.searchInput} placeholder="O que você está procurando?"/>
          <Button title="Buscar"/>
        </View>
      </View>

      <View style={styles.categories}>
        <View style={styles.category}>
          <Text>Icone</Text>
          <Text>Hamburguers</Text>
        </View>
        <View style={styles.category}>
          <Text>Icone</Text>
          <Text>Batata frita</Text>
        </View>
        <View style={styles.category}>
          <Text>Icone</Text>
          <Text>Bebidas</Text>
        </View>
        <View style={styles.category}>
          <Text>Icone</Text>
          <Text>Sobremesa</Text>
        </View>
      </View>

      <View style={styles.ads}>
        <Text>Carousel de banners de anúncios</Text>
      </View>


      <View style={styles.showcase}>
        <View>
          <Text>Título</Text>
          <Text>Veja mais</Text>
        </View>
        <View>
          <Text>Carousel de produtos mais vendidos</Text>
        </View>
      </View>

      <View style={styles.showcase}>
        <View>
          <Text>Título</Text>
          <Text>Veja mais</Text>
        </View>
        <View>
          <Text>Carousel de hamburgers</Text>
        </View>
      </View>

      <View style={styles.showcase}>
        <View>
          <Text>Título</Text>
          <Text>Veja mais</Text>
        </View>
        <View>
          <Text>Carousel de batata frita</Text>
        </View>
      </View>

      <View style={styles.showcase}>
        <View>
          <Text>Home</Text>
        </View>
        <View>
          <Text>Pesquisar</Text>
        </View>
        <View>
          <Text>Carrinho de compras</Text>
        </View>
        <View>
          <Text>Conta</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}