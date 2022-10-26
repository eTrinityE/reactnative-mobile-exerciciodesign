import { View, Text, Alert } from 'react-native'
import React from 'react'
import Card from '../components/Card'

const DetailScreen = (route) => {
    const { id } = route.params;
    const aviso = (_id) => Alert.alert('fim');
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Card id={id} onPress={()=>Alert.alert('Fim')} />
    </View>
  )
}

export default DetailScreen