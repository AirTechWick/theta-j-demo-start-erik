import React, { useState } from "react";
import { Text, View, Button, ScrollView} from "react-native";
import { infoButtonControl } from "./theta_control/info-button-control";
import { stateButtonControl } from "./theta_control/state-button-control";
import { listFilesButtonControl} from "./theta_control/list-files-button-control";
import {takePictureButtonControl} from "./theta_control/take-picture-button-control";
import { setVideoButtonControl } from "./theta_control/set-video-button-control";
import { styles } from "./styles";
import { setImageButtonControl } from "./theta_control/set-image-button-control";
import { turnOffSleepDelay } from "./theta_control/turn-off-sleep-delay";
import { turnOnSleepDelay } from "./theta_control/turn-on-sleep-delay";

export default function App() {
  // fake-theta
  const urlEndpoint = "https://fake-theta.vercel.app/osc/";

  // real theta physical device in access point mode
  // const urlEndpoint = "http://192.168.1.1/osc/";

  // end camera endpoint config
  const [responseWindow, onChangeResponseWindow] = useState(
    "press button to test API"
  );


  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>RICOH THETA JavaScript Demo</Text>
      </View>
      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="info"
            onPress={() => {
              infoButtonControl(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow(data);
              });
            }}
          ></Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="state"
            onPress={() => {
              stateButtonControl(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow(data);
              });
            }}
          ></Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="file"
            onPress={() => {
              listFilesButtonControl(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow(data);
              });
            }}
          ></Button>
        </View>      
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="pic"
            onPress={() => {
              takePictureButtonControl(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow(data);
              });
            }}
          ></Button>
        </View>           
      </View>
      {/* start of second row of buttons */}
      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Set Video"
            onPress={() => {
              setVideoButtonControl(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow("Set Video Successful!\n\n" +data);
              });
            }}
          ></Button>
        </View>  
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Set Image"
            onPress={() => {
              setImageButtonControl(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow("Set Image Successful!\n\n" + data);
              });
            }}
          ></Button>
        </View>  
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Off Sleep Delay"
            onPress={() => {
              turnOffSleepDelay(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow("Off Sleep Delay Successful!\n\n" + data);
              });
            }}
          ></Button>
        </View>  
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="On Sleep Delay"
            onPress={() => {
              turnOnSleepDelay(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow("On Sleep Delay Successful!\n\n" + data);
              });
            }}
          ></Button>
        </View>  
      </View>
      {/* end of second row of buttons */}
      <View style={styles.responseWindowContainer}>
        <Text>{responseWindow}</Text>
      </View>
    </ScrollView>
  );
}
