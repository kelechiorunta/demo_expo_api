import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Spinner = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex: 999, backgroundColor: 'rgba(0, 0, 0, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Animated.View style={{ transform: [{ rotate: spin }]}}>
        <FontAwesome name="spinner" size={32} color="#6200ee" />
      </Animated.View>
    </View>
  );
};

export default Spinner;


// import React from 'react';
// import LottieView from 'lottie-react-native';
// import { View, StyleSheet } from 'react-native';

// const Spinner = () => {
//   return (
//     <View style={styles.container}>
//       <LottieView
//         source={require('../assets/spinner.json')} // You can get spinner JSONs from lottiefiles.com
//         autoPlay
//         loop
//         style={{ width: 100, height: 100 }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default Spinner;
