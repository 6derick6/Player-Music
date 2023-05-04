import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function App() {

  const [audio,setarAudio] = useState(null);

  const [musicas,setarMusicas] = useState([

    {
      nome: 'Sweet chilf of mine',
      artista: 'Guns N Roses',
      playing: true,
      file: ''
    },

    {
      nome: 'Welcome to the jungle',
      artista: 'Guns N Roses',
      playing: false,
      file: ''
    },

    {
      nome: 'This love',
      artista: 'Maroon 5',
      playing: false,
      file: ''
    }

  ]);

  return (
    <ScrollView style={styles.container}>
      <StatusBar hidden/>
      <View style={styles.header}>
        <Text style={{textAlign:'center',color:'white',fontSize:25}}>Player Music</Text>
      </View>

      <View style={styles.table}>
        <Text style={{width:'50%', color:'rgb(200,200,200)'}}>Múscia</Text>
        <Text style={{width:'50%', color:'rgb(200,200,200)'}}>Artista</Text>
      </View>

      {
        musicas.map((val)=>{

          if(val.playing){
            return(
              <View style={styles.table}>
                <TouchableOpacity style={{width:'100%',flexDirection:'row'}}>
                  <Text style={styles.tableTextSelected}><AntDesign name='play' size={15} color="#1DB954" />  {val.nome}</Text>
                  <Text style={styles.tableTextSelected}>{val.artista}</Text>
                </TouchableOpacity>
              </View>
            );
          }else{
            return(
              <View style={styles.table}>
                <TouchableOpacity style={{width:'100%',flexDirection:'row'}}>
                  <Text style={styles.tableText}><AntDesign name='play' size={15} color="white" />  {val.nome}</Text>
                  <Text style={styles.tableText}>{val.artista}</Text>
                </TouchableOpacity>
              </View>
            );
          }

        })
      }

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },

  header: {
    backgroundColor:'#1DB954',
    width:'100%',
    padding:20
  },

  table: {
    flexDirection:'row',
    padding:20,
    borderBottomColor:'white',
    borderBottomWidth:1
  },

  tableTextSelected: {
    width:'50%',
    color:'#1DB954'
  },

  tableText: {
    width:'50%',
    color:'white'
  }
});
