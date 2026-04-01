import { StyleSheet, Text, View } from 'react-native';

 const produtos = [
    { id: 1, nome: "Notebook", preco: "R$ 3.500,00" },
    { id: 2, nome: "Mouse", preco: "R$ 80,00" },
    { id: 3, nome: "Teclado", preco: "R$ 150,00" },
  ];

export default function App() {
  function lerProdutos(){
   return produtos.map((p) => {
      return(
        <View key={p.id} style={styles.card}>
          <Text>Id: {p.id}</Text>
          <Text>Nome: {p.nome}</Text>
          <Text>Preco: {p.preco}</Text>
        </View>
      )
    })
  }
  return (
    <View style={styles.container}>
      {lerProdutos()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  card:{
    width: 200,
    textAlign: 'center',
    padding: 5,
    alignItems: "flex-start",
    borderWidth: 2,


  }
});
