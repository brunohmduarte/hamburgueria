import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./home.style.js"
import icons from "../../constants/icons.js";
import { categories } from "../../constants/Data.js";
import MainCategory from "../../components/Categories/main-category.jsx";

export default function Home() {

  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={icons.menu} style={styles.icons} />
        <Image source={icons.shoppingBag} style={styles.icons} />
      </View>

      <View style={styles.greetings}>
        <Text style={styles.greetingsTitle}>Chegou a hora de matar a fome!</Text>
      </View>

      <View style={styles.search}>
        <Text style={styles.searchTitle}>Encontre os melhores hamburguers de sua preferência e faça o seu pedido por aqui.</Text>
        <View style={styles.searchInputBox}>
          <TextInput 
            style={styles.searchInput} 
            placeholder="O que você está procurando?"
            onChangeText={(data) => setSearch(data)}
            value={search} />
          <TouchableOpacity style={styles.searchBtn}>
            <Image source={icons.search} style={styles.icons} />
          </TouchableOpacity>
        </View>
      </View>

      <MainCategory data={categories} />

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