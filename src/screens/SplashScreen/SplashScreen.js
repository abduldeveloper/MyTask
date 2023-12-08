import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Lottie from 'lottie-react-native';
import Color from "../../styles/Color"
import { useNavigation } from '@react-navigation/native';
export default function SplashScreen() {

  const screenHeight = Dimensions.get('window').height;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate("Home")
    }, 2600); // delay in milliseconds

    return () => clearTimeout(timeout);
  }, [])


  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, 
      duration: 3000,
      useNativeDriver: true, 
    }).start();

   
    setTimeout(() => {
      slideFromTop();
    }, 1000); 
  }, []);

  const slideFromTop = () => {
    Animated.spring(fadeAnim, {
      toValue:1,
      tension: 8, 
      friction: 2, 
      useNativeDriver: true,
    }).start();
  };
  return (
    <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Lottie
            source={require('./Splash_Animation.json')}
            autoPlay
            loop
            style={{height: screenHeight * 0.4, width: 300, alignSelf: 'center'}}
          />
          <Animated.View
            style={{
              opacity: fadeAnim,
              transform: [
                {
                  translateY: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-50, 0], // Slide down from 50 units above
                  }),
                },
              ],
            }}>
              <Text style={{fontWeight: '600', color: Color.btnColor,textAlign:"center", fontSize: 30,marginTop:-20}}>
             My Apartment
            </Text>
        
          </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({})