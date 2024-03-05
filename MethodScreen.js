import React, { Component } from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Dimensions,
    ScrollView
} from "react-native";

import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

let customFonts = {
    "Dosis-VariableFont": require("../assets/fonts/Dosis-VariableFont_wght.ttf")
};

export default class MethodScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false,
        };
    }

}