import { Image, Text } from "react-native";
import { styles } from "./header.style.js";
import images from "../../constants/images.js";

export default function Header(props) {
  return (
    <>
      <Image style={styles.logo} source={images.logo} />
      <Text style={styles.description}>{props.title}</Text>
    </>
  );
}