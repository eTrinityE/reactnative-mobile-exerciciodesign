import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import l1 from './assets/img/01-tablelamps.png';
import l2 from './assets/img/02-ceilinglamps.png';
import l3 from './assets/img/03-sconces.png';
import l4 from './assets/img/04-floorlamps.png';
import l5 from './assets/img/05-lightdecor.png';
import l6 from './assets/img/06-garlands.png';
import l7 from './assets/img/bgimage.png';
import l8 from './assets/img/detalhes-table-lamp.png';
import sacola from './assets/img/icone-sacola.png';

export default function App() {
  return (
    <ScrollView>
    <StatusBar/>
      <View style={styles.container}>  
        <View style={styles.linhaLampadas}>
          <Text style={{alignItems:'center'}}>Lighteria</Text>
          <Image style={styles.sacolaRedonda} source={sacola}></Image>
        </View>
        <View>
          <Text>-------- Categorias --------</Text>
        </View>
        <View style={styles.linhaLampadas}>
          <View style={styles.fundoRedondo}>
            <Image style={{width: 150, height: 150}} source={l1}></Image>
            <Text style={{textAlign: 'center', fontWeight: 'bold', color: '#a9a9a9', fontSize: 17}}>Abajur</Text>
          </View>
          <View style={styles.fundoRedondo}>
            <Image style={{width: 150, height: 150}} source={l2}></Image>
            <Text style={{textAlign: 'center', fontWeight: 'bold', color: '#a9a9a9', fontSize: 17}}>Lampada de Teto</Text>
          </View>
        </View>
        <View style={styles.linhaLampadas}>
          <View style={styles.fundoRedondo}>
            <Image style={{width: 150, height: 150}} source={l3}></Image>
            <Text style={{textAlign: 'center', fontWeight: 'bold', color: '#a9a9a9', fontSize: 17}}>Arandela</Text>
          </View>
          <View style={styles.fundoRedondo}>
            <Image style={{width: 150, height: 150}} source={l4}></Image>
            <Text style={{textAlign: 'center', fontWeight: 'bold', color: '#a9a9a9', fontSize: 17}}>Luminaria de Chão</Text>
          </View>
        </View>
        <View style={styles.linhaLampadas}>
          <View style={styles.fundoRedondo}>
            <Image style={{width: 150, height: 150}} source={l5}></Image>
            <Text style={{textAlign: 'center', fontWeight: 'bold', color: '#a9a9a9', fontSize: 17}}>Lampada 5</Text>
          </View>
          <View style={styles.fundoRedondo}>
            <Image style={{width: 150, height: 150}} source={l6}></Image>
            <Text style={{textAlign: 'center', fontWeight: 'bold', color: '#a9a9a9', fontSize: 17}}>Lampada 6</Text>
          </View>
        </View>
        <View style={styles.linhaLampadas}>
          <View style={styles.fundoRedondo}>
            <Image style={{width: 150, height: 150}} source={l7}></Image>
            <Text style={{textAlign: 'center', fontWeight: 'bold', color: '#a9a9a9', fontSize: 17}}>Lampada 7</Text>
          </View>
          <View style={styles.fundoRedondo}>
            <Image style={{width: 150, height: 150}} source={l8}></Image>
            <Text style={{textAlign: 'center', fontWeight: 'bold', color: '#a9a9a9', fontSize: 17}}>Lampada 8</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linhaLampadas: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    
  },
  fundoRedondo: {
    backgroundColor: '#fff',
    borderRadius: 20
  },
  sacolaRedonda: {
    backgroundColor: '#fff',
    borderRadius: 90,
    height: 50,
    width: 50

  }

});
