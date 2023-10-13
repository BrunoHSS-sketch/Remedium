import React from "react";
import { View, StyleSheet, Image, Text, SafeAreaView } from "react-native";


export default function App(){


  return <>

  <SafeAreaView style={styles.container}> 

    <View style={styles.container}>
      
      <Image  
      source={require("./assets/icons/hamburguer.png")}
      style={styles.hamburguer} />

      <Text style={styles.text}>
        HORÁRIO A DESPERTAR
      </Text>
      
      <Image
      source={require("./assets/icons/Clokwear.png")} 
      style={styles.clock}/>
      
      <Text style={styles.number_clock}>
        08:30
      </Text>

      <Text style={styles.text_remedy}>
        ANTIALERGICO
      </Text>

      <Text style={styles.text_next_time}>
        PRÓXIMO HORÁRIO
      </Text>

      <Text style={styles.number_next}>
        18:30
      </Text>

    </View>

  </SafeAreaView>

   </>
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#041023",
  },
  hamburguer: {
    margin: 44,
    marginLeft: 310,
  },
  text: {
    color: "#ffff",
    textAlign: "center",
    fontSize: 20,
  },
  clock: {
    flex: 1,
    margin: 50,
    marginTop: 200,
    position: "absolute"
  },
  number_clock: {
    flex: 1,
    fontSize: 80,
    position: "relative",
    color: "#CB003D",
    textAlign: "center",
    marginTop: 110,
  },
  text_remedy: {
    color: "#ffff",
    textAlign: "center",
    fontSize: 40,
    marginBottom: 30,
  },
  text_next_time: {
    color: "#ffff",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 200,
  },
  number_next: {
    color: "#CB003D",
    textAlign: "center",
    fontSize: 25,
    margin: 155,
    marginTop: 650,
    position: "absolute",
  }
})