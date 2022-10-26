import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useFonts, Lato_900Black } from '@expo-google-fonts/lato';
import Card from './src/components/Card';
import { styles } from './src/utils/styles';
import { getData } from './src/utils/data';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  let [fontsLoaded] = useFonts({
    Lato_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="details" component={DetailScreen} options={{title: "Detalhes do Item"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

function linha(nroLinha) {
  return <View style={styles.listaLinhaContainer}>
    <Card id={(nroLinha * 2) - 1} />
    <Card id={nroLinha * 2} />
  </View>;
}


