import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../utils/colors";
import RNPickerSelect from "react-native-picker-select";

export default function Form(props) {
  const { setCapital, setInterest, setMonths } = props;
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Cantidad a pedir"
          onChange={e=>setCapital(e.nativeEvent.text)}
        />
        <TextInput
          style={[styles.input, styles.inputPercentaje]}
          placeholder="Interes %"
          keyboardType="numeric"
          onChange={e=>setInterest(e.nativeEvent.text)}
        />
      </View>
      <RNPickerSelect
        style={picketSelectStyles}
        placeholder={{
          label:"Selecciona los plazos...",
          value:null
        }}
        onValueChange={(value) => setMonths(value)}
        items={[
          { label: "3 meses", value: 3 },
          { label: "6 meses", value: 6 },
          { label: "12 meses", value: 12 },
          { label: "24 meses", value: 24 },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    position: "absolute",
    bottom: 0,
    width: "85%",
    paddingHorizontal: 58,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: "center",
  },
  viewInputs: {
    flexDirection: "row",
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: "60%",
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: "#000",
    paddingHorizontal: 20,
  },
  inputPercentaje: {
    width: "40%",
    marginLeft: 5,
  },
});

const picketSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
    backgroundColor: "#fff",
    marginLeft: -5,
    marginRight: -5,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 15,
    color: "black",
    paddingRight: 30,
    backgroundColor: "#fff",
    marginLeft: -5,
    marginRight: -5,
  },
});
