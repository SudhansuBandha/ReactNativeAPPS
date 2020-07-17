import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";
import * as Font from "expo-font";
export default class App extends React.Component {
  state = {
    isLoading: true,
  };

  componentWillMount = async () => {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto.ttf"),
    });
    this.setState({ isLoading: false });
  };
  render() {
    if (this.state.isLoading) {
      return <ActivityIndicator />;
    }

    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://image.shutterstock.com/z/stock-photo-mountains-during-sunset-beautiful-natural-landscape-in-the-summer-time-407021107.jpg",
                  }}
                />
                <Body>
                  <Text>The Pathetic</Text>
                  <Text note>Unfortunate</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    "https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
                }}
                style={{ height: 300, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
