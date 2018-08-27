import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon,
  List,
  ListItem
} from "native-base";

class CardComponent extends Component {
  render() {
    const images = {
      "1": require("../assets/Gambar/1.jpg")
    };

    return (
      // Card 1
      <List style={{borderBottomWidth: 0,borderColor:"white"}}>
        <CardItem style={styles.p}>
          <Left>
            <Thumbnail small
              style={{
                borderColor: "pink",
                borderWidth: 2
              }}
              source={require("../assets/rici.png")}
            />
            <Body>
              <Text style={styles.nama}>RickySetya </Text>
            </Body>
          </Left>
          <Right>
            <Body>
              <Button transparent>
                <Icon name="ios-more" style={styles.button1} />
              </Button>
            </Body>
          </Right>
        </CardItem>

        <CardItem cardBody>
          <Image
            source={images[this.props.imageSource]}
            style={{ height: 250, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem style={{ height: 10 }}>
          <Left>
            <Button transparent>
              <Icon name="ios-heart-outline" style={styles.button} />
            </Button>
            <Button transparent>
              <Icon name="ios-chatbubbles-outline" style={styles.button} />
            </Button>
            <Button transparent>
              <Icon name="ios-send-outline" style={styles.button} />
            </Button>
          </Left>
        </CardItem>
        <CardItem style={{ height: 1 }}>
          <Text style={styles.likes}>{this.props.likes} </Text>
        </CardItem>
        <CardItem style={{ paddingTop: 1 }}>
          <Body>
            <Text>
              <Text style={styles.nama}>RickySetya </Text>
              <Text style={styles.kata}>
                Jangan lupa siapkan KOPI dan sebatang ROKOK...
              </Text>
            </Text>
            <Text>View All 104 comments</Text>
            <Text style={{ fontSize: 12 }}>2 HOUR AGO</Text>
          </Body>
        </CardItem>
      </List>
    );
  }
}
export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  nama: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold"
  },
  button: {
    color: "black",
    borderColor: "black",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    fontSize : 25
  },
  button1: {
    color: "#d6d6c2",
    paddingLeft: 80,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
  likes: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold"
  },
  kata: {
    fontSize: 14,
    color: "black"
  },
  p: {
    paddingTop: 2,
    paddingBottom: 2,
    borderBottomWidth: 0
  },
  card: {
    borderColor: "white",
    borderWidth: 0
  },
  border: {
    borderBottomWidth: 0,
  }
});
