import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

export default function Splash({navigation}) {
  useEffect(()=> {
    setTimeout(()=> {
        navigation.navigate('Parent')
    },2000)
  },[])
  return (
    <View>
      <Text>Splash</Text>
    </View>
  )
}

const styles = StyleSheet.create({})