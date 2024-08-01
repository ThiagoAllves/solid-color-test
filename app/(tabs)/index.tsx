import { Animated, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { useState } from 'react';

export default function HomeScreen() {

  const [randonColor, setRandonColor] = useState('#fff');

  const ChangeRandonColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const hexColor = randomNumber.toString(16).padStart(6, '0');
    setRandonColor(`#${hexColor}`);
  }
  return (
    <TouchableWithoutFeedback onPress={ChangeRandonColor}>
      <Animated.View style={{ flex: 1, backgroundColor: randonColor, justifyContent: "center", }}>
        <Text style={styles.textCustom} >Hello there! <HelloWave /></Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  wrapContent: {
    flex: 1,
  },
  textCustom: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
});
