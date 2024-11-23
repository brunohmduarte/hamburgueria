import { Image, View, Text, ScrollView } from "react-native";
import { styles } from "./main-category.style.js"

export default function MainCategory(props) {
  return (
    <View style={styles.categories}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
          props.data.map((category, index) => {
            return <View key={index} style={styles.category}>
              <Image source={category.icon} style={styles.icon} />
              <Text style={styles.label}>{category.label}</Text>
            </View>
          })
        }
      </ScrollView>
    </View>
  )
}