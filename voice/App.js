import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Audio } from "expo-av";

const listBackgroundColors = {
  1: "#FF3E4D",
  2: "#D63031",
  3: "#74B9FF",
  4: "#AE1438",
  5: "#2475B0",
  6: "#25CCF7",
  7: "#019031",
  8: "#A3CB37",
  9: "#53E0BC",
  10: "#2F363F",
};

const soundList = {
  one: require("./assets/one.wav"),
  two: require("./assets/two.wav"),
  three: require("./assets/three.wav"),
  four: require("./assets/four.wav"),
  five: require("./assets/five.wav"),
  six: require("./assets/six.wav"),
  seven: require("./assets/seven.wav"),
  eight: require("./assets/eight.wav"),
  nine: require("./assets/nine.wav"),
  ten: require("./assets/ten.wav"),
};
export default class App extends React.Component {
  playSound = async (number) => {
    const soundObject = new Audio.Sound();

    try {
      let path = soundList[number];
      await soundObject.loadAsync(path);
      await soundObject
        .playAsync()
        .then(async (playbackStatus) => {
          setTimeout(() => {
            soundObject.unloadAsync();
          }, playbackStatus.playableDurationMillis);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.gridContainer}>
          <Image style={styles.logo} source={require("./assets/logo.png")} />
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[1] },
              ]}
              onPress={() => {
                this.playSound("one");
              }}
            >
              <Text style={styles.itemText}>One</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[2] },
              ]}
              onPress={() => {
                this.playSound("two");
              }}
            >
              <Text style={styles.itemText}>Two</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[3] },
              ]}
              onPress={() => {
                this.playSound("three");
              }}
            >
              <Text style={styles.itemText}>Three</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[4] },
              ]}
              onPress={() => {
                this.playSound("four");
              }}
            >
              <Text style={styles.itemText}>Four</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[5] },
              ]}
              onPress={() => {
                this.playSound("five");
              }}
            >
              <Text style={styles.itemText}>Five</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[6] },
              ]}
              onPress={() => {
                this.playSound("six");
              }}
            >
              <Text style={styles.itemText}>Six</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[7] },
              ]}
              onPress={() => {
                this.playSound("seven");
              }}
            >
              <Text style={styles.itemText}>Seven</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[8] },
              ]}
              onPress={() => {
                this.playSound("eight");
              }}
            >
              <Text style={styles.itemText}>Eight</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[9] },
              ]}
              onPress={() => {
                this.playSound("nine");
              }}
            >
              <Text style={styles.itemText}>Nine</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[2] },
              ]}
              onPress={() => {
                this.playSound("ten");
              }}
            >
              <Text style={styles.itemText}>Ten</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image style={styles.logo} source={require("./assets/logo.png")} />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  gridContainer: {
    flex: 1,
    margin: 5,
  },
  logo: {
    alignSelf: "center",
    marginTop: 15,
  },
  rowContainer: {
    flexDirection: "row",
  },
  item: {
    flex: 1,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
  },
  itemText: {
    color: "#FFF",
    fontSize: 20,
  },
});
