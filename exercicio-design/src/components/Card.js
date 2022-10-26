import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { getDataByID } from "../utils/data";
import { styles } from "../utils/styles";

export default function Card({ id, onPress}) {
  const { text, image } = getDataByID(id);
  return (
  <TouchableOpacity style={styles.card} onPress={onPress(id)}>
    <Image style={styles.cardImage} resizeMode='contain' source={image} />
    <Text style={styles.cardText}>{text}</Text>
  </TouchableOpacity>
  );
}