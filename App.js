import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar hidden/>
      <View style={styles.header}>
        <Text style={{textAlign:'center',color:'white',fontSize:25}}>Player Music</Text>
      </View>
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
  }
});
