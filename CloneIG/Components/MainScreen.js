// Komponen React Native
import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
// Komponen AppTabNavigator
import HomeTab from "./AppTabNavigator/HomeTab";
import SearchTab from "./AppTabNavigator/SearchTab";
import AddMediaTab from "./AppTabNavigator/AddMediaTab";
import LikesTab from "./AppTabNavigator/LikesTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";
// Komponen React-Navigator
import { TabNavigator } from "react-navigation";
import { Icon } from "native-base";

// Header
class MainScreen extends Component {

    static navigationOptions = {
        headerLeft: <Icon name="ios-camera-outline" style={{ paddingLeft: 10 }} />,
        title: "Instagram",
        headerRight: <Icon style={{ paddingRight: 10 }} name="ios-send-outline" />,

        headerStyle: {
            height: 45,
        },
        headerTitleStyle: {
            fontWeight: 'normal',
        },
    };

    render() {
        return <AppTabNavigator />;
    }
}
export default MainScreen;

// Menu
const AppTabNavigator = TabNavigator(
    {
        HomeTab: {
            screen: HomeTab
        },
        SearchTab: {
            screen: SearchTab
        },
        AddMediaTab: {
            screen: AddMediaTab
        },
        LikesTab: {
            screen: LikesTab
        },
        ProfileTab: {
            screen: ProfileTab
        }
    },
    {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
            style: {
                ...Platform.select({
                    android: {
                        backgroundColor: "white"
                    }
                })
            },
            activeTintColor: "#000",
            inactiveTintColor: "#d1cece",
            showLabel: false,
            showIcon: true
        }
    }
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
