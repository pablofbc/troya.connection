import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Pressable, TextInput, ScrollView } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { comunidadApi, conectarApi, editorApi } from "./services/user";
//import React from 'react';
import React, { useState } from 'react';

export default function App() {
  const [str, setStr] = useState("prueba");
  const comunidad = async () => {
    try {
      const a = await comunidadApi();
      const newStr = a[0].codVersion + ' | '+ a[0].codAssignment + ' | ' + a[0].versionName;
      //setStr(newStr);  // Actualiza el estado `str` con el nuevo valor
      //console.log('Datos:', newStr);
      //console.log('Data:', a[0]);
      const dataString = JSON.stringify(a, null, 2);  // Convierte los datos a cadena de texto con formato
      setStr(dataString); 
      console.log('Data:', dataString);
      Alert.alert(
        'Comunidad API', 
        dataString, 
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ]
      );
    } catch (error) {
      console.error('Error fetching data from comunidadApi:', error);
      Alert.alert('Comunidad API', 'Error fetching data from comunidadApi', [            
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ])
    }
  };

  const editor = async () => {
    try {
      const a = await editorApi("AACA6001019D6","COD_MPI");
      //console.log('Data:', a[0]);
      const dataString = JSON.stringify(a, null, 2);  // Convierte los datos a cadena de texto con formato
      setStr(dataString); 
      console.log('Data:', dataString);
      // const newStr = a[0];
      // setStr(newStr);  // Actualiza el estado `str` con el nuevo valor
      // console.log('Datos:', newStr);
      Alert.alert(
        'Editor API', 
        dataString, 
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ]
      );
    } catch (error) {
      console.error('Error fetching data from EditorApi:', error);
      Alert.alert('Editor API', 'Error fetching data from EditorApi', [            
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ])
    }
  }

  const vrm = async() =>{
    try {
      const a: any = await conectarApi("pfadmin","password");
      // console.log('Data:', a);
      // const newStr = a.config.url;
      // setStr(newStr);  // Actualiza el estado `str` con el nuevo valor
      // console.log('Datos:', newStr);
      const dataString = JSON.stringify(a, null, 2);  // Convierte los datos a cadena de texto con formato
      setStr(dataString); 
      console.log('Data:', dataString);
      Alert.alert(
        'VRM API', 
        dataString, 
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ]
      );
    } catch (error) {
      console.error('Error fetching data from vrmApi:', error);
      Alert.alert('VRM API', 'Error fetching data from vrmApi', [            
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ])
    }
  }

  const clearText = () => {
    setStr(''); // Establece `str` a una cadena vacía
  };

  return (    
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>      
      <Pressable style={styles.button} onPress={comunidad}>
      <Text style={styles.buttonText}>Comunidad API</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={editor}>
      <Text style={styles.buttonText}>Editor API</Text>
      </Pressable>
      <Pressable  style={styles.button} onPress={vrm}>
      <Text style={styles.buttonText}>Conectar API</Text>
      </Pressable>
    </SafeAreaView>    
    {/* <View style={styles.area}>
      <Text style={styles.textArea}>{str}</Text>
    </View>  */}
    <View style={styles.area}>
      <ScrollView style={styles.scrollArea}>
        <Text style={styles.textArea}>{str}</Text>
      </ScrollView>
    </View>
    <View style={styles.areaButton}>
      <Pressable style={styles.clearButton} onPress={clearText}>
        <Text style={styles.buttonText}>Borrar Texto</Text>
      </Pressable>
    </View>          
  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    paddingTop: 50,
  },
  button:{
    backgroundColor: '#913595',
    padding: 13,
    borderRadius: 7,
    marginBottom: 10,
  },
  buttonText:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#fff',
  },
  textArea: {
    fontSize: 18,
    lineHeight: 21,
    //fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#fff',
    padding: 10,
  },
  area: {
    flex: 0.7,
    backgroundColor: 'black',
    padding: 10,
  },
  clearButton: {
    backgroundColor: '#d9534f', // Color rojo para distinguir el botón de borrar
    padding: 13,
    borderRadius: 7,
    marginTop: 10,
  },
  areaButton: {
    alignItems: 'center',
    flex: 0.1,
    backgroundColor: 'black',
    padding: 10,
  },
  scrollArea: {
    maxHeight: 600, // Ajusta este valor según tu diseño
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 5,
  },
});
