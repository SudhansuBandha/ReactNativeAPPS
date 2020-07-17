import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback, //for that keyboard issue
  Alert,
} from "react-native";

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.19,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000041,
};
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      resultValue: "0.0",
    };
  }
  buttonPressed = (currency) => {
    if (this.state.inputValue === "") Alert.alert("Please Enter a Value");

    let result = parseFloat(this.state.inputValue) * currencyPerRupee[currency];
    this.setState({ resultValue: result.toFixed(2) });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <View style={styles.screenview}>
            <View style={styles.resultcontainer}>
              <Text style={styles.resultValue}>{this.state.resultValue}</Text>
            </View>

            <View style={styles.inputcontainer}>
              <TextInput
                style={styles.input}
                selectionColor="#FFF"
                keyboardType="numeric"
                placeholder="Enter INR"
                value={this.state.inputValue}
                onChangeText={(inputValue) =>
                  this.setState({
                    inputValue,
                  })
                }
              />
            </View>
            <View style={styles.converterbuttoncontainer}>
              <TouchableOpacity
                style={styles.converterbutton}
                onPress={() => this.buttonPressed("DOLLAR")}
              >
                <Text style={styles.converterbuttontext}>$</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterbutton}
                onPress={() => this.buttonPressed("YEN")}
              >
                <Text style={styles.converterbuttontext}>YEN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterbutton}
                onPress={() => this.buttonPressed("EURO")}
              >
                <Text style={styles.converterbuttontext}>EURO</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterbutton}
                onPress={() => this.buttonPressed("POUND")}
              >
                <Text style={styles.converterbuttontext}>POUND</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterbutton}
                onPress={() => this.buttonPressed("DINAR")}
              >
                <Text style={styles.converterbuttontext}>DINAR</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterbutton}
                onPress={() => this.buttonPressed("AUSDOLLAR")}
              >
                <Text style={styles.converterbuttontext}>A$</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterbutton}
                onPress={() => this.buttonPressed("RUBEL")}
              >
                <Text style={styles.converterbuttontext}>RUBEL</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterbutton}
                onPress={() => this.buttonPressed("CANDOLLAR")}
              >
                <Text style={styles.converterbuttontext}>CAN$</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterbutton}
                onPress={() => this.buttonPressed("BITCOIN")}
              >
                <Text style={styles.converterbuttontext}>BITCOIN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4C724",
    marginTop: 30,
  },
  screenview: {
    flex: 1,
  },
  resultcontainer: {
    height: 70,
    marginTop: 80,
    justifyContent: "center",
    borderColor: "#c1c1c1",
    backgroundColor: "#0A79DE",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 20,
  },
  resultValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
  },
  inputcontainer: {
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c1c1c1",
    borderWidth: 2,
    backgroundColor: "#0A79DE",
    borderRadius: 20,
  },
  input: {
    fontSize: 20,

    color: "#FFF",
  },
  converterbuttoncontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    borderColor: "#c1c1c1",
    borderWidth: 2,
  },
  converterbutton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2B2B52",
    height: 100,
    borderColor: "#c1c1c1",
    borderWidth: 2,
    width: "33.33%",
  },
  converterbuttontext: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
