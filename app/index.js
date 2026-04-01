
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';


export default function Menu() {
  return (
    <View style={styles.container}>
      <Text>Bem vindo</Text>
      <TouchableOpacity><Text>Produtos</Text></TouchableOpacity>
      <Link href={'./produto'}> Ver produtos </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
