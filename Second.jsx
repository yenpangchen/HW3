import React, { useState } from 'react';
import {
  Text, View, SafeAreaView, Image, TextInput, Button, Alert,
} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import styles from './Styles';
import MyComponent from './MyComponent';

function Second({ route, navigation }) {
  const [titleText, setTitleText] = useState("Bird's Nest");
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [pressed, setPressed] = useState(false);

  const bodyText = 'This is not really a bird nest.';

  const onPressTitle = () => {
    setTitleText(titleText === "Bird's Nest" ? "Bird's Nest [pressed]" : "Bird's Nest");
  };

  const sendText = () => {
    setName(text);
    setText('');
    setPressed(true);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{
          marginBottom: 5,
        }}
        >
          loading...
        </Text>
        <MyComponent />
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200, marginLeft: 30 }}
        />
        <Text style={{
          paddingLeft: 5,
        }}
        >
          幫她取個名吧
        </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 5,
            paddingLeft: 10,
          }}
          placeholder="請輸入..."
          onChangeText={(text) => setText(text)}
          value={text}
        />
        <Button
          title="確定"
          color="#f194ff"
          disabled={!text}
          onPress={sendText}
        />
        {pressed && name.split(' ').map((word) => (
          <Text>
            我的名字是:
            {' '}
            {word}
          </Text>
        ))}
        <Text style={{
          marginTop: 20,
          color: 'gray',
        }}
        >
          功能:輸入並按下確認按鈕後才會跑出名字
        </Text>
        {/* <Text style={styles.titleText} onPress={onPressTitle}>
          {'\n'}
          {titleText}
          {'\n'}
        </Text>
        <Text numberOfLines={5} onPress={() => navigation.goBack()}>{bodyText}</Text>
        <View
          style={{
            height: 200,
            padding: 20,
          }}
        >
          <View style={{ backgroundColor: 'blue', flex: 0.3 }} />
          <View style={{ backgroundColor: 'red', flex: 0.5 }} />
          <Text>Hello World!</Text>

        </View> */}
      </View>
    </SafeAreaView>

  );
}

export default Second;
