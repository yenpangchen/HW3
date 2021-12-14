import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, Button, View, Alert,
} from 'react-native';
// Import Firebase
import firebase from 'firebase';
import TimeController from './Time';
// import Time from './Time';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const firebaseConfig = {
//   apiKey: 'AIzaSyAlE8I6Rg_GlJu9oNd0SSjAWQ6DbNU1Y7o',
//   authDomain: 'test1202-7b82f.firebaseapp.com',
//   projectId: 'test1202-7b82f',
//   storageBucket: 'test1202-7b82f.appspot.com',
//   messagingSenderId: '740858759924',
//   appId: '1:740858759924:web:f05a6f418b00c04a4c2ca1',
// };

const firebaseConfig = {
  apiKey: 'AIzaSyBsid1rLQMwUjP9uwJ6P_KI5nI41oeE9Oc',
  authDomain: 'test1214-2c5a0.firebaseapp.com',
  projectId: 'test1214-2c5a0',
  storageBucket: 'test1214-2c5a0.appspot.com',
  messagingSenderId: '362221127230',
  appId: '1:362221127230:web:c675b1b745dcdffbe7b36f',
  measurementId: 'G-CCRVG3DYT8',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default function App() {
  // Firebase Start
  const [lastestTime, setLastestTime] = useState([]);
  const [times, setTimes] = useState([]);
  const [pressedA, setPressedA] = useState(false);
  const [pressedB, setPressedB] = useState(false);

  useEffect(() => {
    TimeController.getLastestTime().then((res) => setLastestTime(res));
    TimeController.getAllTimes().then((res) => setTimes(res));
  }, [times]);

  return (
    <View style={styles.container}>
      <Button onPress={() => { TimeController.getLastestTime().then(() => setPressedA(!pressedA)); }} title="get lastest time" color="#FFBF00" />
      {pressedA && lastestTime.map(({ id, time }) => (
        <Text key={id}>
          {time}
        </Text>
      ))}
      <Text>{'\n'}</Text>
      <Button onPress={() => { TimeController.getAllTimes().then(() => setPressedB(!pressedB)); }} title="get all time" color="#007FFF" />
      {pressedB && times.map(({ id, time }) => (
        <Text key={id}>
          {time}
        </Text>
      ))}
      <Text>{'\n'}</Text>
      <Button onPress={() => { TimeController.addCurrentTime(); Alert.alert('myTitle', 'Add Successfully'); }} title="add current time" color="#00FF00" />
      <Text>{'\n'}</Text>
      <Button onPress={() => { TimeController.deleteEarliestTime().then((res) => (res ? Alert.alert('MyTitle', 'Time queue is Empty') : Alert.alert('MyTitle', 'Delete Successfully'))); }} title="delete earliest time" color="#FF0000" />
    </View>
  );
}

// import React, { useState, useEffect } from 'react';
// import {
//   StyleSheet, Text, Button, View,
// } from 'react-native';
// // Import Firebase
// import firebase from 'firebase';
// import {
//   Card, Title,
// } from 'react-native-paper';
// import fruit from './Fruit';
// // import TimeController from './Time';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// const firebaseConfig = {
//   apiKey: 'AIzaSyAlE8I6Rg_GlJu9oNd0SSjAWQ6DbNU1Y7o',
//   authDomain: 'test1202-7b82f.firebaseapp.com',
//   projectId: 'test1202-7b82f',
//   storageBucket: 'test1202-7b82f.appspot.com',
//   messagingSenderId: '740858759924',
//   appId: '1:740858759924:web:f05a6f418b00c04a4c2ca1',
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app();
// }

// // Functions
// // async function getFruit() {
// //   const db = firebase.firestore();
// //   const fruitRef = db.collection('fruit').doc('YSAIPw9OIK28niEt8GiE');
// //   const doc = await fruitRef.get();
// //   console.log(doc.data());
// // }

// // async function getAllFruits() {
// //   const db = firebase.firestore();
// //   const fruitsRef = db.collection('fruit');
// //   const querySnapshot = await fruitsRef.get();
// //   querySnapshot.forEach((doc) => {
// //     console.log(doc.id, '=>', doc.data());
// //   });
// // }

// // async function addFruit() {
// //   const db = firebase.firestore();
// //   const fruitsRef = db.collection('fruit');
// //   const fruit = {
// //     name: 'banana',
// //     price: 18,
// //     onSale: false,
// //   };
// //   const fruit1 = {
// //     name: 'grape',
// //     price: 24,
// //     onSale: false,
// //   };
// //   fruitsRef.add(fruit);
// //   fruitsRef.add(fruit1);
// //   const querySnapshot = await fruitsRef.get();
// //   querySnapshot.forEach((doc) => {
// //     console.log(doc.id, '=>', doc.data());
// //   });
// //   /* 請使用 add() */
// // }

// // function deleteFruit() {
// //   const db = firebase.firestore();
// //   const fruitRef = db.collection('fruit').doc('xqmFtJ7vv1NdTjKVQMva');
// //   fruitRef.delete();
// // }

// // async function switchFruitOnSale() {
// //   const db = firebase.firestore();
// //   const fruitRef = db.collection('fruit').doc('2h7xsOkU0BDM7twMgsi7');
// //   const doc = await fruitRef.get();
// //   fruitRef.set({
// //     onSale: !doc.data().onSale,
// //   }, { merge: true });
// // }

// export default function App() {
//   // Firebase Start
//   const [item, setItems] = useState([]);
//   useEffect(() => {
//     fruit.getAllFruits().then((res) => {
//       setItems(res);
//     }).catch((err) => {
//       throw err;
//     });
//   }, []);
//   return (
//     <View style={styles.container}>
//       { item.map(({
//         id, name, price,
//       }) => (
//         <Card
//           key={id}
//           style={{ flex: 1, padding: 10, margin: 4 }}
//         >
//           <Card.Content>
//             <Title>{name}</Title>
//             <Text>{`價錢:${price}`}</Text>
//           </Card.Content>
//         </Card>
//       ))}
//       <Button onPress={fruit.getFruit} title="get fruit" color="#007FFF" />
//       <Text>{'\n'}</Text>
//       <Button onPress={fruit.getAllFruits} title="get all fruits" color="#0000FF" />
//       <Text>{'\n'}</Text>
//       <Button onPress={fruit.addFruit} title="add fruit" color="#00FF00" />
//       <Text>{'\n'}</Text>
//       <Button onPress={fruit.deleteFruit} title="delete fruit" color="#FF0000" />
//       <Text>{'\n'}</Text>
//       <Button onPress={fruit.switchFruitOnSale} title="switch on sale" color="#FFBF00" />
//     </View>
//   );
// }

// import React, { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import First from './First';
// import Second from './Second';

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer initialRouteName="Home">
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={First} />
//         <Stack.Screen name="Next" component={Second} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Dimensions,
//   SafeAreaView,
// } from "react-native";
// import {
//   MaterialCommunityIcons,
//   AntDesign,
//   SimpleLineIcons,
// } from "@expo/vector-icons";
// import { SocialIcon } from "react-native-elements";

// const Layout = {
//   height: Dimensions.get("window").height,
//   width: Dimensions.get("window").width,
// };

// const Colors = {
//   theme: "#24685b",
//   white: "#fff",
//   greyish: "#a4a4a4",
// };

// export default function App() {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <StatusBar
//         translucent={false}
//         barStyle="light-content"
//         backgroundColor={Colors.theme}
//       />
//       <View
//         style={{
//           backgroundColor: Colors.theme,
//           paddingBottom: Layout.height * 0.2,
//           borderBottomLeftRadius: Layout.width * 0.1,
//           borderBottomRightRadius: Layout.width * 0.1,
//         }}
//       >
//         <View
//           style={{
//             alignItems: "flex-end",
//             paddingHorizontal: 32,
//             marginVertical: 20,
//           }}
//         >
//           <SimpleLineIcons
//             name="equalizer"
//             size={20}
//             style={{ color: Colors.white, marginTop: 50 }}
//           />
//         </View>
//         <View
//           style={{
//             flexDirection: "row",
//             paddingHorizontal: 32,
//             marginVertical: 36,
//             alignItems: "center",
//             justifyContent: "flex-start",
//           }}
//         >
//           <Image
//             source={require("./assets/shaw.jpg")}
//             style={{
//               width: 50,
//               height: 50,
//               borderRadius: 25,
//               marginRight: 16,
//             }}
//           />
//           <View>
//             <Text
//               style={{ fontSize: 25, color: Colors.white, marginBottom: 5 }}
//             >
//               陳彥邦
//             </Text>
//             <Text style={{ color: Colors.greyish }}>資管大三</Text>
//           </View>
//         </View>
//       </View>

//       <View
//         style={{
//           backgroundColor: "#fafafa",
//           marginHorizontal: 32,
//           padding: 30,
//           borderRadius: 20,
//           // IOS shadow
//           shadowColor: "#000000",
//           shadowOpacity: 0.4,
//           shadowRadius: 1,
//           shadowOffset: {
//             height: 1,
//             width: 0,
//           },
//           marginBottom: 16,
//           marginTop: -Layout.height * 0.15,
//         }}
//       >
//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "space-between",
//             marginVertical: 8,
//             alignItems: "center",
//           }}
//         >
//           <Text style={{ fontSize: 20, fontWeight: "bold" }}>自我介紹</Text>
//           <AntDesign name="user" size={25} />
//         </View>
//         <View style={{ marginVertical: 8 }}>
//           <Text style={{ color: "black" }}>
//             我是資管三
//             陳彥邦，興趣是打籃球，目前是系隊的副隊長。這是我第一次接觸React
//             Native，
//             希望能跟大家一起學習。因為以前都是自己寫些小東西，所以我想要從這個團隊中得到開發的經驗，還有學習如何寫App。
//           </Text>
//         </View>
//       </View>

//       <View
//         style={{
//           backgroundColor: "#fafafa",
//           marginHorizontal: 32,
//           padding: 30,
//           borderRadius: 20,
//           // IOS shadow
//           shadowColor: "#000000",
//           shadowOpacity: 0.4,
//           shadowRadius: 1,
//           shadowOffset: {
//             height: 1,
//             width: 0,
//           },
//           marginBottom: 16,
//         }}
//       >
//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "space-between",
//             marginVertical: 8,
//             alignItems: "center",
//           }}
//         >
//           <Text style={{ fontSize: 20, fontWeight: "bold" }}>常用的東西</Text>
//           <MaterialCommunityIcons name="pen" size={25} />
//         </View>
//         <View style={{ marginVertical: 8, flexDirection: "row" }}>
//           <SocialIcon type="facebook" />
//           <SocialIcon type="instagram" />
//           <SocialIcon type="youtube" />
//           <SocialIcon type="google" />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }
