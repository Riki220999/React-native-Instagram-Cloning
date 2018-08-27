import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { Container, Content, Icon, Thumbnail } from "native-base";
import CardComponent from "../CardComponent";
import CardComponent2 from "../CardComponent2";

class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{ color: tintColor }} />
        )
    };

    render() {
        return (
            <Container style={styles.container}>
                <Content>

                    {/* Menu Story */}

                    <View style={{ height: 90 }}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                paddingHorizontal: 7
                            }}
                        >
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Icon name="md-play" style={{ fontSize: 14 }} />
                                <Text style={{ fontWeight: "bold" }}> Lihat Semua</Text>
                            </View>
                        </View>
                        <View style={{ flex: 3 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    alignItems: "center",
                                    paddingStart: 5,
                                    paddingEnd: 5
                                }}
                            >
                                <Thumbnail
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: "pink",
                                        borderWidth: 2
                                    }}
                                    source={require("../../assets/StoriesHeaderThumbnails/ri.jpg")}
                                />
                                <Thumbnail
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: "pink",
                                        borderWidth: 2
                                    }}
                                    source={require("../../assets/StoriesHeaderThumbnails/8.jpg")}
                                />
                                <Thumbnail
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: "pink",
                                        borderWidth: 2
                                    }}
                                    source={require("../../assets/StoriesHeaderThumbnails/9.jpg")}
                                />
                                <Thumbnail
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: "pink",
                                        borderWidth: 2
                                    }}
                                    source={require("../../assets/StoriesHeaderThumbnails/10.jpg")}
                                />

                                <Thumbnail
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: "pink",
                                        borderWidth: 2
                                    }}
                                    source={require("../../assets/StoriesHeaderThumbnails/12.jpg")}
                                />
                                <Thumbnail
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: "pink",
                                        borderWidth: 2
                                    }}
                                    source={require("../../assets/StoriesHeaderThumbnails/13.jpg")}
                                />
                                <Thumbnail
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: "pink",
                                        borderWidth: 2
                                    }}
                                    source={require("../../assets/StoriesHeaderThumbnails/14.jpg")}
                                />
                            </ScrollView>
                        </View>
                    </View>

                    {/* Card Komponen */}
                    
                    <CardComponent imageSource="1" likes="1.5k likes" />
                    <CardComponent2 imageSource="5" likes="103 likes " />
                </Content>
            </Container>
        );
    }
}
export default HomeTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
});
