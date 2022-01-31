import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, View, StatusBar, Button } from "react-native";
import Form from "./src/components/Form.js";
import colors from "./src/utils/colors.js";

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);

  const onSubmit = () => {
    console.log("capital =>", capital);
    console.log("interest =>", interest);   
    console.log("months =>", months);
  }
  return (
    <>
      <StatusBar barStyle="light-content"></StatusBar>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
        <Form
          setCapital={setCapital}
          setInterest={setInterest}
          setMonths={setMonths}
        />
      </SafeAreaView>
      <View>
        <Text>BODY</Text>
      </View>
      <View>
        <Button title="Enviar" onPress={onSubmit}/>
        <Text>FOOOTER</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: "center",
  },
  background: {
    position: "absolute",
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: "100%",
    zIndex: -1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
  },
});
