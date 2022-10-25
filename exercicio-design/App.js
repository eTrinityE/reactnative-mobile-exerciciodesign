import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import sacola from './assets/img/icone-sacola.png';
import { useFonts, Lato_900Black } from '@expo-google-fonts/lato';
import Card from './src/components/Card';
import { styles } from './src/utils/styles';

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
        {topo()}
        {/* titulo  */}
        {titulo()}
    <ScrollView>
        {/* lista de imagens */}
        <View style={styles.listaContainer}>
          {linha(1)}
          {linha(2)}
          {linha(3)}
        </View>
    </ScrollView>
        <StatusBar />
      </View>
  );
}


function linha(nroLinha) {
  let id = nroLinha
  return <View style={styles.listaLinhaContainer}>
    <Card id={(nroLinha*2)-1} />
    <Card id={nroLinha*2} />
  </View>;
}

function titulo() {
  return <View style={styles.tituloContainer}>
    <Text style={styles.tituloTexto}>Categorias</Text>
  </View>;
}

function topo() {
  return <View style={styles.topoContainer}>
    <Text style={styles.topoTexto}>Lighteria</Text>
    <View style={styles.topoImagemContainer}>
      <Image style={styles.topoImagem} source={sacola} />
    </View>
  </View>;
}

