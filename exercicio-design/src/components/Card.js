import { Image, Text, View } from "react-native";
import { getDataByID } from "../utils/data";
import { styles } from "../utils/styles";

export default function Card({ id }) {
  const { text, image } = getDataByID(id);
  return (<View style={styles.card}>
    <Image style={styles.cardImage} resizeMode='contain' source={image} />
    <Text style={styles.cardText}>{text}</Text>
  </View>);
}