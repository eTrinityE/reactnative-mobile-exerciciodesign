import { FlatList, Image, ScrollView, StyleSheet, Text, StatusBar, View } from 'react-native';
import React from 'react'
import Card from '../components/Card';
import { styles } from '../utils/styles';
import sacola from '../../assets/img/icone-sacola.png';
import { getData } from '../utils/data';

export default function HomeScreen({ navigation }) {
    const navegacao = (id) => { navigation.navigate('details', {id : id}) }

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

  return (
    <View style={styles.container}>
      {topo()}
      {/* titulo  */}
      {titulo()}
      {/* lista de imagens */}
      <FlatList 
        data={getData()} 
        renderItem={({ item })=> <Card id={item.id} onPress={navegacao} />} 
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
      />
      <StatusBar />
    </View>
  );
}

