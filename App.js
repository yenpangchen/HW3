import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { SocialIcon } from "react-native-elements";

const Layout = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width,
};

const Colors = {
  theme: "#24685b",
  white: "#fff",
  greyish: "#a4a4a4",
};

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        translucent={false}
        barStyle="light-content"
        backgroundColor={Colors.theme}
      />
      <View
        style={{
          backgroundColor: Colors.theme,
          paddingBottom: Layout.height * 0.2,
          borderBottomLeftRadius: Layout.width * 0.1,
          borderBottomRightRadius: Layout.width * 0.1,
        }}
      >
        <View
          style={{
            alignItems: "flex-end",
            paddingHorizontal: 32,
            marginVertical: 20,
          }}
        >
          <SimpleLineIcons
            name="equalizer"
            size={20}
            style={{ color: Colors.white, marginTop: 50 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 32,
            marginVertical: 36,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Image
            source={require("./assets/shaw.jpg")}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              marginRight: 16,
            }}
          />
          <View>
            <Text
              style={{ fontSize: 25, color: Colors.white, marginBottom: 5 }}
            >
              陳彥邦
            </Text>
            <Text style={{ color: Colors.greyish }}>資管大三</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#fafafa",
          marginHorizontal: 32,
          padding: 30,
          borderRadius: 20,
          // IOS shadow
          shadowColor: "#000000",
          shadowOpacity: 0.4,
          shadowRadius: 1,
          shadowOffset: {
            height: 1,
            width: 0,
          },
          marginBottom: 16,
          marginTop: -Layout.height * 0.15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 8,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>自我介紹</Text>
          <AntDesign name="user" size={25} />
        </View>
        <View style={{ marginVertical: 8 }}>
          <Text style={{ color: "black" }}>
            我是資管三
            陳彥邦，興趣是打籃球，目前是系隊的副隊長。這是我第一次接觸React
            Native，
            希望能跟大家一起學習。因為以前都是自己寫些小東西，所以我想要從這個團隊中得到開發的經驗，還有學習如何寫App。
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#fafafa",
          marginHorizontal: 32,
          padding: 30,
          borderRadius: 20,
          // IOS shadow
          shadowColor: "#000000",
          shadowOpacity: 0.4,
          shadowRadius: 1,
          shadowOffset: {
            height: 1,
            width: 0,
          },
          marginBottom: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 8,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>常用的東西</Text>
          <MaterialCommunityIcons name="pen" size={25} />
        </View>
        <View style={{ marginVertical: 8, flexDirection: "row" }}>
          <SocialIcon type="facebook" />
          <SocialIcon type="instagram" />
          <SocialIcon type="youtube" />
          <SocialIcon type="google" />
        </View>
      </View>
    </SafeAreaView>
  );
}
