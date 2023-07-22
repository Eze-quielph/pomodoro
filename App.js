import { Audio } from 'expo-av'
import { StyleSheet, Text, View, Button, Platform, SafeAreaView, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react'
import { Header } from './src/components/Header';
import { Timer } from './src/components/Timer';

//Colors Background
const colors = ["#F7DC6F", "#A2D9CE", "#D7BE2"];

export default function App() {
  //state time
  const [isWorking, setIsworking] = useState(false)
  //state time duraction
  const [time, setTime] = useState(25 * 60)
  const [currentTime, setCurrentTime] = useState("POMO" || "SHORT" || "BREAK")
  const [isActive, setIsActive] = useState(false)

  const startAndStop = () => {
    playSound()
    setIsActive(!isActive)
  }

  //Sound
  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('./assets/alarma.mp3')
    )
    await sound.playAsync();
  }

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime(time - 1)
      },
        1000)
    } else {
      clearInterval(interval)
    }

    if(time === 0) {
      setIsActive(false)
      setIsworking((prev) => !prev)
      setTime(isWorking ? 300: 1500)
    }

    return ()=> clearInterval(interval)
  }, [isActive, time])
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors[currentTime] }]}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          paddingTop: Platform.OS = "android" && 30,
        }}>
        <Text style={styles.text}>Pomodoro</Text>
        <Header
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          setTime={setTime}
        />
        <Timer time={time} />
        <TouchableOpacity style={styles.btn}>
          <Text
            onPress={startAndStop}
            style={{ color: "white", fontWeight: "bold" }}>{isActive ? "STOP" : "START"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 10
  },
  btn: {
    backgroundColor: "#333333",
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
    alignItems: "center"
  }
});
