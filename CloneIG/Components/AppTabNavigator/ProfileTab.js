import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList
} from "react-native";
import {
  Container,
  Content,
  Icon,
  Header,
  Left,
  Body,
  Right,
  Segment,
  Button
} from "native-base";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
var { height, width } = Dimensions.get("window");
import CardComponent from "../CardComponent";
import CardComponent2 from "../CardComponent2";

// Gambar
const images = [
  require("../../assets/Gambar/Profile/1.jpg"),
  require("../../assets/Gambar/Profile/2.jpg"),
  require("../../assets/Gambar/Profile/3.jpg"),
  require("../../assets/Gambar/Profile/4.jpg"),
  require("../../assets/Gambar/Profile/5.jpg"),
  require("../../assets/Gambar/Profile/6.jpg"),
  require("../../assets/Gambar/Profile/7.jpg"),
  require("../../assets/Gambar/Profile/8.jpg"),
  require("../../assets/Gambar/Profile/9.jpg"),
  require("../../assets/Gambar/Profile/10.jpg"),
  require("../../assets/Gambar/Profile/11.jpg"),
  require("../../assets/Gambar/Profile/12.jpg")
];

class ProfileTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ white }) => <Icon name="person" style={{ color: white }} />
  };

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  segmentClicked(index) {
    this.setState({
      activeIndex: index
    });
  }
  checkActive = index => {
    if (this.state.activeIndex !== index) {
      return { color: "grey" };
    } else {
      return {};
    }
  };

  renderSectionOne() {
    return images.map((image, index) => {
      return (
        <View
          key={index}
          style={[
            { width: width / 3 },
            { height: width / 3 },
            { marginBottom: 2 },
            index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }
          ]}
        >
          <Image
            style={{
              flex: 1,
              alignSelf: "stretch",
              width: undefined,
              height: undefined
            }}
            source={image}
          />
        </View>
      );
    });
  }

  renderSection() {
    if (this.state.activeIndex == 0) {
      return (
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {this.renderSectionOne()}
        </View>
      );
    } else if (this.state.activeIndex == 1) {
      return (
        <View>
          <CardComponent imageSource="1" likes="1.5k likes" />
          <CardComponent2 imageSource="5" likes="103 likes " />
        </View>
      );
    }
  }

  componentDidMount() {
    console.log(width);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={{ paddingTop: 14 }}>
            <View style={{ flexDirection: "row" }}>
              {/**User photo takes 1/3rd of view horizontally **/}
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "flex-start"
                }}
              >
                <Image
                  source={require("../../assets/riki.jpg")}
                  style={{ width: 75, height: 75, borderRadius: 37.5 }}
                />
              </View>

              {/**User Stats take 2/3rd of view horizontally **/}
              <View style={{ flex: 3 }}>
                {/** Stats **/}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "flex-end"
                  }}
                >
                  <View style={{ alignItems: "center" }}>
                    <Text style={styles.pff}>12</Text>
                    <Text style={{ fontSize: 12, color: "grey" }}>Posts</Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text style={styles.pff}>33.5K</Text>
                    <Text style={{ fontSize: 12, color: "grey" }}>
                      Followers
                    </Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text style={styles.pff}>300</Text>
                    <Text style={{ fontSize: 12, color: "grey" }}>
                      Following
                    </Text>
                  </View>
                </View>

                {/**Edit profile and Settings Buttons **/}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                    paddingTop: 10
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Button
                      bordered
                      dark
                      style={{
                        flex: 3,
                        marginLeft: 16,
                        marginRight: 10,
                        justifyContent: "center",
                        height: 30
                      }}
                    >
                      <Text style={{ color: "black" }}>Edit Profile</Text>
                    </Button>
                  </View>
                </View>
              </View>
            </View>

            <View style={{ paddingBottom: 10 }}>
              <View style={{ paddingHorizontal: 10 }}>
                <Text style={{ fontWeight: "bold", color: "black" }}>
                  RickySetya
                </Text>
                <Text style={{ color: "black" }}>
                  Beck-end| Front-end | Programmer
                </Text>
                <Text style={{ color: "black" }}>WA 081-554-579-425</Text>
                <Text style={{ color: "#002db3" }}>anakdesakreatif22.com</Text>
              </View>
            </View>
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                borderTopWidth: 1,
                borderTopColor: "#eae5e5"
              }}
            >
              <Button
                onPress={() => this.segmentClicked(0)}
                transparent
                active={this.state.activeIndex == 0}
              >
                <Icon
                  name="ios-apps-outline"
                  style={[this.state.activeIndex == 0 ? {} : { color: "grey" }]}
                />
              </Button>
              <Button
                onPress={() => this.segmentClicked(1)}
                transparent
                active={this.state.activeIndex == 1}
              >
                <Icon
                  name="ios-list-outline"
                  style={[
                    { fontSize: 32 },
                    this.state.activeIndex == 1 ? {} : { color: "grey" }
                  ]}
                />
              </Button>
              <Button
                onPress={() => this.segmentClicked(2)}
                transparent
                active={this.state.activeIndex == 2}
              >
                <Icon
                  name="ios-bookmark-outline"
                  style={this.state.activeIndex == 2 ? {} : { color: "grey" }}
                />
              </Button>
              <Button
                onPress={() => this.segmentClicked(3)}
                transparent
                last
                active={this.state.activeIndex == 3}
              >
                <Icon
                  name="ios-people-outline"
                  style={[
                    { fontSize: 32 },
                    this.state.activeIndex == 3 ? {} : { color: "grey" }
                  ]}
                />
              </Button>
            </View>
            {this.renderSection()}
          </View>
        </Content>
      </Container>
    );
  }
}
export default ProfileTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  pff: {
    fontWeight: "bold",
    color: "black",
    fontSize: 16
  }
});
