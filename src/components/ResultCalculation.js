import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ResultCalculation(props) {
  const { errorMessage, capital, interest, total, months } = props;
  return (
    <View style={styles.content}>
      {total && (
        <View style={styles.boxResult}>
          <Text style={styles.title}>RESUMEN</Text>
          <DataResult title={"Cantidad solicitada:"} value={`${capital} $`}/>
          <DataResult title={"Interes %:"} value={`${interest} $`}/>
          <DataResult title={"Plazos:"} value={`${months} meses`}/>
          <DataResult title={"Pago Mensual:"} value={`${total.monthlyFee} $`}/>       
          <DataResult title={"Total a Pagar:"} value={`${total.totalPayable} $`}/>   
        </View>
      )}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
}

const DataResult = (props) => {
  const { title, value } = props;
  return (
    <View style={styles.value}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 40,
  },
  value: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  boxResult: {
    padding: 30,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    fontWeight: "bold",
    fontSize: 20,
  },
});
