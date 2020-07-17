import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Button } from "native-base";

var itemArray = new Array(9).fill("empty");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCross: false,
      winMessage: "",
      disable: false,
    };
  }

  drawItem = (itemNumber) => {
    //decide what to draw: circle or cross or default
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = this.state.isCross;
      this.setState({ isCross: !itemArray[itemNumber] }, () => {}); //we cann add a call back function while changing the state
    }
    this.winGame();
  };

  chooseItemIcon = (itemNumber) => {
    //choose appropriate icon
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "cross" : "circle";
    }
    return "pencil";
  };

  chooseItemColor = (itemNumber) => {
    //choose color for icon
    //choose appropriate icon
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "red" : "green";
    }
    return "black";
  };
  chooseBackgroundColor = (itemNumber) => {
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "#74B9FF" : "#FF3E4D";
    }
  };
  resetGame = () => {
    //reset all values and states
    itemArray.fill("empty");
    this.setState({ winMessage: "", disable: false });
    //force update to the component
    this.forceUpdate();
  };
  restartGame = () => {
    this.setState({ disable: true });
    this.forceUpdate();
  };

  winGame = () => {
    //decide winner
    if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[1] &&
      itemArray[1] == itemArray[2]
    ) {
      this.setState(
        {
          winMessage: (itemArray[0] ? "Cross" : "Circle").concat(" wins"),
        },
        () => this.restartGame()
      );
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] == itemArray[4] &&
      itemArray[4] == itemArray[5]
    ) {
      this.setState(
        {
          winMessage: (itemArray[3] ? "Cross" : "Circle").concat(" wins"),
        },
        () => this.restartGame()
      );
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] == itemArray[7] &&
      itemArray[7] == itemArray[8]
    ) {
      this.setState(
        {
          winMessage: (itemArray[6] ? "Cross" : "Circle").concat(" wins"),
        },
        () => this.restartGame()
      );
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[3] &&
      itemArray[3] == itemArray[6]
    ) {
      this.setState(
        {
          winMessage: (itemArray[0] ? "Cross" : "Circle").concat(" wins"),
        },
        () => this.restartGame()
      );
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] == itemArray[4] &&
      itemArray[4] == itemArray[7]
    ) {
      this.setState(
        {
          winMessage: (itemArray[1] ? "Cross" : "Circle").concat(" wins"),
        },
        () => this.restartGame()
      );
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] == itemArray[5] &&
      itemArray[5] == itemArray[8]
    ) {
      this.setState(
        {
          winMessage: (itemArray[2] ? "Cross" : "Circle").concat(" wins"),
        },
        () => this.restartGame()
      );
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[4] &&
      itemArray[4] == itemArray[8]
    ) {
      this.setState(
        {
          winMessage: (itemArray[0] ? "Cross" : "Circle").concat(" wins"),
        },
        () => this.restartGame()
      );
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] == itemArray[4] &&
      itemArray[4] == itemArray[6]
    ) {
      this.setState(
        {
          winMessage: (itemArray[2] ? "Cross" : "Circle").concat(" wins"),
        },
        () => this.restartGame()
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.grid}>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => this.drawItem(0)}
              style={{ backgroundColor: this.chooseBackgroundColor(0) }}
              disabled={this.state.disable}
            >
              <View style={styles.item}>
                <Entypo
                  name={this.chooseItemIcon(0)}
                  size={50}
                  color={this.chooseItemColor(0)}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.drawItem(1)}
              style={{ backgroundColor: this.chooseBackgroundColor(1) }}
              disabled={this.state.disable}
            >
              <View style={styles.item}>
                <Entypo
                  name={this.chooseItemIcon(1)}
                  size={50}
                  color={this.chooseItemColor(1)}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.drawItem(2)}
              style={{ backgroundColor: this.chooseBackgroundColor(2) }}
              disabled={this.state.disable}
            >
              <View style={styles.item}>
                <Entypo
                  name={this.chooseItemIcon(2)}
                  size={50}
                  color={this.chooseItemColor(2)}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => this.drawItem(3)}
              style={{ backgroundColor: this.chooseBackgroundColor(3) }}
              disabled={this.state.disable}
            >
              <View style={styles.item}>
                <Entypo
                  name={this.chooseItemIcon(3)}
                  size={50}
                  color={this.chooseItemColor(3)}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.drawItem(4)}
              style={{ backgroundColor: this.chooseBackgroundColor(4) }}
              disabled={this.state.disable}
            >
              <View style={styles.item}>
                <Entypo
                  name={this.chooseItemIcon(4)}
                  size={50}
                  color={this.chooseItemColor(4)}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.drawItem(5)}
              style={{ backgroundColor: this.chooseBackgroundColor(5) }}
              disabled={this.state.disable}
            >
              <View style={styles.item}>
                <Entypo
                  name={this.chooseItemIcon(5)}
                  size={50}
                  color={this.chooseItemColor(5)}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => this.drawItem(6)}
              style={{ backgroundColor: this.chooseBackgroundColor(6) }}
              disabled={this.state.disable}
            >
              <View style={styles.item}>
                <Entypo
                  name={this.chooseItemIcon(6)}
                  size={50}
                  color={this.chooseItemColor(6)}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.drawItem(7)}
              style={{ backgroundColor: this.chooseBackgroundColor(7) }}
              disabled={this.state.disable}
            >
              <View style={styles.item}>
                <Entypo
                  name={this.chooseItemIcon(7)}
                  size={50}
                  color={this.chooseItemColor(7)}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.drawItem(8)}
              style={{ backgroundColor: this.chooseBackgroundColor(8) }}
              disabled={this.state.disable}
            >
              <View style={styles.item}>
                <Entypo
                  name={this.chooseItemIcon(8)}
                  size={50}
                  color={this.chooseItemColor(8)}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.winMessage}>{this.state.winMessage}</Text>
        <Button
          full
          rounded
          primary
          style={styles.button}
          onPress={() => this.resetGame()}
        >
          <Text style={styles.btnText}>Reset Game</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FAD02E",
    alignItems: "center",
  },
  grid: {},
  row: {
    flexDirection: "row",
  },
  item: {
    borderWidth: 2,
    borderColor: "#000",
    padding: 30,
  },
  winMessage: {
    padding: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  button: {
    margin: 20,
    padding: 10,
  },
  btnText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
