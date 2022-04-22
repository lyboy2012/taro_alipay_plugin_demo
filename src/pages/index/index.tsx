import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View, Text, Navigator } from "@tarojs/components";
import "./index.less";

export default class Index extends Component {
  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>

        <Navigator url="plugin://myPlugin/list">Go to pages/list!</Navigator>
      </View>
    );
  }
}
