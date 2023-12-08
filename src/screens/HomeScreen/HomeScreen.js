import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Color from '../../styles/Color';
import Icon from '../../common/Icons';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  StatusBar.setBackgroundColor(Color.btnColor);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flex: 0.45}}>
          <Image
            source={require('../../assets/images/banner.png')}
            style={{height: 250, width: '100%'}}
          />
          <View style={styles.iconsContainer}>
            <View style={styles.likeIcon}>
              <Icon
                family="AntDesign"
                name="like1"
                color={Color.white}
                size={20}
              />
            </View>
            <View style={styles.menuIcon}>
              <Icon
                family="Fontisto"
                name="equalizer"
                color={Color.white}
                style={{transform: [{rotate: '90deg'}]}}
                size={16}
              />
            </View>
          </View>
        </View>
        <View style={{flex: 0.06, padding: 10,marginTop:10}}>
          <Text style={styles.headerText}>Cleaner</Text>
        </View>
        <View style={{flex: 0.9}}>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 0.2,
                flexDirection: 'row',
                backgroundColor: Color.btnColor,
                justifyContent: 'center',
                alignItems: 'center',
                width: 40,
                height: 30,
                borderRadius: 18,
              }}>
              <Icon
                family="FontAwesome"
                name="star"
                color={Color.white}
                style={{left: -5}}
                size={20}
              />
              <Text style={{color: Color.white, paddingLeft: 2}}>0.0</Text>
            </View>
            <View style={{flex: 0.05, paddingLeft: 5, top: -2}}>
              <Text style={{fontSize:30}}>|</Text>
            </View>
            <View style={{flex: 0.25}}>
              <Text style={{fontSize: 16, color: Color.lightGrey2}}>
                30 - 45 mins{''}
              </Text>
            </View>
            <View style={{flex: 0.05, paddingLeft: 5, top: -2}}>
              <Text style={{fontSize: 30}}>|</Text>
            </View>
            <View style={{flex: 0.3}}>
              <Text style={{fontSize: 16, color: Color.lightGrey2}}>
                {'\u20B9'}
              </Text>
            </View>
          </View>
          <View style={{padding: 16}}>
            <Text style={[styles.headerText]}>Menu</Text>
            <Image
              source={require('../../assets/images/homeImageCleaning.jpeg')}
              style={styles.cleaningImage}
            />
            <View style={{flexDirection: 'row', marginTop: 2}}>
              <View
                style={{
                  flex: 0.25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    color: Color.btnColor,
                    textAlign: 'center',
                    fontWeight: '400',
                  }}>
                  Home Cleaning
                </Text>
              </View>
            </View>
            <Text style={{fontSize: 12, color: Color.green, marginTop: 10}}>
              All Items are exclusive of all taxes
            </Text>
            <Text style={styles.headerText}>Home Cleaning</Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                height: 30,
                justifyContent: 'space-between',
              }}>
              <Text style={[styles.headerText, {fontSize: 17, flex: 0.7}]}>
                Make Your own Package
              </Text>
              <TouchableOpacity
                style={{
                  flex: 0.24,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: Color.btnColor,
                  alignItems: 'center',
                }}
                onPress={()=>
      navigation.navigate("DetailScreen")
                
                }>
                <Text
                  style={{
                    paddingTop: 3,
                    color: Color.fontColor,
                    fontWeight: '500',
                    fontSize: 14,
                  }}>
                  Customize
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                height: 30,
                justifyContent: 'space-between',
              }}>
              <Text style={[styles.headerText, {fontSize: 20, flex: 0.7}]}>
              {'\u20B9'} 999.00
              </Text>
              <Image
              source={require('../../assets/images/rippon.png')}
              style={styles.ripponImage}
            />
            </View>
          </View>
        </View>
        <View style={{backgroundColor:Color.btnColor,marginBottom:20,width:140,height:40,justifyContent:"center",alignContent:"center",alignSelf:"center",borderRadius:20,flexDirection:"row"}}>
        <View style={{ backgroundColor: "red", zIndex:1,borderRadius: 50, width: 15, height: 15,top:4,left:25, position: "absolute", justifyContent: "center", alignItems: "center" }}>
    <Text style={{ color: Color.white, fontSize: 12 }}>1</Text>
  </View>
        <Icon
                family="FontAwesome5"
                name="shopping-bag"
                color={Color.white}
                style={{left: -5,alignSelf:"center",paddingRight:4}}
                size={20}
              />
             
<Text style={{alignSelf:"center",fontSize:16,color:Color.white}}>View Cart</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  iconsContainer: {
    position: 'absolute',
    top: 10,
    right: 0,
    flexDirection: 'row',
    borderRadius: 15,
    height: 30,
    width: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  likeIcon: {
    backgroundColor: Color.btnColor,
    borderRadius: 15,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    backgroundColor: Color.btnColor,
    borderRadius: 15,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: Color.fontColor,
    fontWeight: '500',
  },
  cleaningImage: {
    width: '25%',
    height: 70,
    borderRadius: 4,
    borderWidth: 0.2,
    borderColor: Color.black,
    marginTop: 10,
  },
  ripponImage:{
    width: '25%',
    height: 70,
    borderRadius: 4,
  }
});
