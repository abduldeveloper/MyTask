import {
  Animated,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Color from '../../styles/Color';
import {SafeAreaView} from 'react-native';
import Icon from '../../common/Icons';
import { useNavigation } from '@react-navigation/native';

const ApartmentSizes = [
  {name: '1 BHK', price: '999.00', id: '1'},
  {name: '2 BHK', price: '1999.00', id: '2'},
  {name: '3 BHK', price: '2999.00', id: '3'},
  {name: '4 BHK', price: '3999.00', id: '4'},
  {name: '>4 BHK', price: '4999.00', id: '5'},
];

const BedroomCleaning = [
  {
    name: "I don't want any bedroom cleaning",
    price: 0,
    id: '1',
  },
  {
    name: 'With Mattress Dry Vacuuming (No. of Bedrooms)',
    price: '199.00',
    id: '2',
  },
  {
    name: 'With Mattress Wet Shampooing (No. of Bedrooms)',
    price: '299.00',
    id: '3',
  },
];
const BathroomClening = [
  {
    name: "I don't want any bedroom cleaning",
    price: 0,
    id: '1',
  },
  {
    name: 'No.of Bathroom',
    price: '119.00',
    id: '2',
  },
];
const LivingRoom = [
  {
    name: 'With Sofa & Caret Wet Shampooing',
    price: '289.00',
    id: '2',
  },
  {
    name: 'With Sofa & Carpet Dry Vacuuming',
    price: '189.00',
    id: '3',
  },
  {
    name: "I don't want any living room/dining room cleaning",
    price: 0,
    id: '1',
  },
];
const kitchen = [
  {
    name: "I don't want any living room/dining room cleaning",
    price: 0,
    id: '1',
  },
  {
    name: 'With Chimney Deep Cleaning',
    price: '199.00',
    id: '2',
  },
  {
    name: 'With Chimney ,Fridge &amp Microwave Deep Cleaning',
    price: '299.00',
    id: '3',
  },
  {
    name: 'With Fridge &amp Microwave Deep Cleaning',
    price: '249.00',
    id: '3',
  },
];
export default function DetailScreen() {
  const [selectedItem, setSelectedItem] = useState('1');
  const [selectedBedroom, setSelectedBedroom] = useState(null);
  const [selectedBathroom, setSelectedBathroom] = useState(null);
  const [selectedLivingRoom, setSelectedLiving] = useState(null);
  const [selectedKitchen, setSelectedKitchen] = useState(null);
  const [totalPrice,setTotalPrice]=useState("999.00")
  const [text, setText] = useState('');
  const [count, setCount] = useState(1);

  StatusBar.setBackgroundColor(Color.white);
  const scrollY = useRef(new Animated.Value(0)).current;
  const headerHeight = 80;
  const navigation = useNavigation();

  const [headerVisible, setHeaderVisible] = useState(false);
  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -headerHeight],
    extrapolate: 'clamp',
  });

  const toggleHeaderVisibility = () => {
    setHeaderVisible(true);
    navigation.navigate("Home")

  };

  const headerPosition = headerVisible ? 'absolute' : 'relative';

  const renderApartmentSize = ({item, index}) => {
    const isSelected = selectedItem === item.id;

    const toggleSelection = () => {
      setSelectedItem(isSelected ? null : item.id);
      setTotalPrice(item.price)
    };

    return (
      <>
        <View
          style={{flexDirection: 'row', flex: 1, padding: 10, paddingLeft: 12}} key={item.id.toString()}>
          <TouchableOpacity onPress={toggleSelection}>
            <Icon
              family="FontAwesome5"
              name={isSelected ? 'dot-circle' : 'circle'}
              color={Color.btnColor}
              style={{paddingRight: 10}}
              size={20}
            />
          </TouchableOpacity>

          <Text
            style={{
              flex: 0.65,
              color: Color.fontColor,
              fontSize: 14,
              fontWeight: '500',
            }}>
            {item.name}
          </Text>
          <View style={{flex: 0.3}} />
          <Text
            style={{fontSize: 14, color: Color.fontColor, fontWeight: '500'}}>
            {'\u20B9'}
            {item.price}
          </Text>
        </View>
      </>
    );
  };
  const renderBedroomSize = ({item, index}) => {
    const isSelecteselectedBedroomdItem = selectedBedroom === item.id;

    const toggleSelectionBedroom = () => {
      setSelectedBedroom(isSelecteselectedBedroomdItem ? null : item.id);
    };

    return (
      <>
        <View
          style={{flexDirection: 'row', flex: 1, padding: 10, paddingLeft: 12}}
          key={item.id}
          >
          <TouchableOpacity onPress={toggleSelectionBedroom}>
            <Icon
              family="MaterialIcons"
              name={
                isSelecteselectedBedroomdItem
                  ? 'check-box'
                  : 'check-box-outline-blank'
              }
              color={
                isSelecteselectedBedroomdItem
                  ? Color.btnColor
                  : Color.lightGrey2
              }
              style={{paddingRight: 10}}
              size={22}
            />
          </TouchableOpacity>

          <Text
            style={{
              flex: 0.65,
              color: Color.fontColor,
              fontSize: 14,
              fontWeight: '500',
            }}>
            {item.name}
          </Text>
          <View style={{flex: 0.3}} />
          {item.price > 0 && (
            <>
              <Text
                style={{
                  fontSize: 14,
                  color: Color.fontColor,
                  fontWeight: '500',
                }}>
                {'\u20B9'}
                {''}
                {item.price}
              </Text>
            </>
          )}
        </View>
      </>
    );
  };
  const renderBathroomCleaning = ({item, index}) => {
    const selectedBathroomItem = selectedBathroom === item.id;

    const toggleSelectionBedroom = () => {
      setSelectedBathroom(selectedBathroomItem ? null : item.id);
    };

    return (
      <>
        <View
          style={{flexDirection: 'row', flex: 1, padding: 10, paddingLeft: 12}}
          
          key={item.id}>
          <TouchableOpacity onPress={toggleSelectionBedroom}>
            <Icon
              family="MaterialIcons"
              name={
                selectedBathroomItem ? 'check-box' : 'check-box-outline-blank'
              }
              color={selectedBathroomItem ? Color.btnColor : Color.lightGrey2}
              style={{paddingRight: 10}}
              size={22}
            />
          </TouchableOpacity>

          <Text
            style={{
              flex: 0.65,
              color: Color.fontColor,
              fontSize: 14,
              fontWeight: '500',
            }}>
            {item.name}
          </Text>
          <View style={{flex: 0.3}} />
          {item.price > 0 && (
            <>
              <Text
                style={{
                  fontSize: 14,
                  color: Color.fontColor,
                  fontWeight: '600',
                }}>
                {'\u20B9'}
                {''}
                {item.price}
              </Text>
            </>
          )}
        </View>
      </>
    );
  };
  const renderLivingRoom = ({item, index}) => {
    const selectedLivingRoomItem = selectedLivingRoom === item.id;

    const toggleSelectionBedroom = () => {
      setSelectedLiving(selectedLivingRoomItem ? null : item.id);
    };

    return (
      <>
        <View
          style={{flexDirection: 'row', flex: 1, padding: 10, paddingLeft: 12}}
          
          key={item.id}>
          <TouchableOpacity onPress={toggleSelectionBedroom}>
            <Icon
              family="MaterialIcons"
              name={
                selectedLivingRoomItem ? 'check-box' : 'check-box-outline-blank'
              }
              color={selectedLivingRoomItem ? Color.btnColor : Color.lightGrey2}
              style={{paddingRight: 10}}
              size={22}
            />
          </TouchableOpacity>

          <Text
            style={{
              flex: 0.65,
              color: Color.fontColor,
              fontSize: 14,
              fontWeight: '600',
            }}>
            {item.name}
          </Text>
          <View style={{flex: 0.3}} />
          {item.price > 0 && (
            <>
              <Text
                style={{
                  fontSize: 14,
                  color: Color.fontColor,
                  fontWeight: '500',
                }}>
                {'\u20B9'}
                {''}
                {item.price}
              </Text>
            </>
          )}
        </View>
      </>
    );
  };
  const renderKitchenCleaning = ({item, index}) => {
    const selectedKitchenItem = selectedKitchen === item.id;

    const toggleSelectionBedroom = () => {
      setSelectedKitchen(selectedKitchenItem ? null : item.id);
    };

    return (
      <>
        <View
          style={{flexDirection: 'row', flex: 1, padding: 10, paddingLeft: 12}}
          
          key={item.id}>
          <TouchableOpacity onPress={toggleSelectionBedroom}>
            <Icon
              family="MaterialIcons"
              name={
                selectedKitchenItem ? 'check-box' : 'check-box-outline-blank'
              }
              color={selectedKitchenItem ? Color.btnColor : Color.lightGrey2}
              style={{paddingRight: 10}}
              size={22}
            />
          </TouchableOpacity>

          <Text
            style={{
              flex: 0.65,
              color: Color.fontColor,
              fontSize: 14,
              fontWeight: '600',
            }}>
            {item.name}
          </Text>
          <View style={{flex: 0.3}} />
          {item.price > 0 && (
            <>
              <Text
                style={{
                  fontSize: 14,
                  color: Color.fontColor,
                  fontWeight: '500',
                }}>
                {'\u20B9'}
                {''}
                {item.price}
              </Text>
            </>
          )}
        </View>
      </>
    );
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView
        stickyHeaderIndices={[0]}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: false,
            listener: event => {
              const offsetY = event.nativeEvent.contentOffset.y;
              setHeaderVisible(true);
              if (offsetY > headerHeight && headerVisible) {
                setHeaderVisible(true);
              } else if (offsetY <= headerHeight && !headerVisible) {
                setHeaderVisible(false);
              }
            },
          },
        )}
        scrollEventThrottle={16}>
        <Animated.View
          style={{
            transform: [{translateY: headerTranslateY}],
            backgroundColor: Color.white,
            paddingTop: 20,
            paddingBottom: 10,
            position: headerPosition,
            opacity: headerVisible ? 1 : 0,
            top: 0,
            width: '100%',
            zIndex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 12,
            }}>
            <TouchableOpacity onPress={toggleHeaderVisibility}>
              <Icon
                name="arrow-back-ios"
                family="MaterialIcons"
                size={30}
                color={Color.black}
                style={{paddingRight: 10}}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                color: Color.black,
                fontWeight: 'bold',
                left: -10,
                flex: 1,
                textAlign: 'center',
              }}>
              Make Your Own Package
            </Text>
          </View>
        </Animated.View>
        <View style={{flex: 0.1, marginTop: !headerVisible ? -50 : 0}}>
          <Image
            source={require('../../assets/images/rippon.png')}
            style={{alignSelf: 'center', height: 250, width: '100%'}}
          />
        </View>
        <View style={{flex: 0.3}}>
          <Text style={[styles.headerText, {padding: 12}]}>
            Make your own Package
          </Text>
        </View>
        <View style={{flex: 0.3, padding: 12}}>
          <Text style={[styles.headerText, {fontWeight: 'bold'}]}>
            Apartment Size <Text style={{color: 'red'}}>*</Text>
          </Text>
          <Text style={{fontSize: 12, color: Color.lightGrey2, paddingTop: 2}}>
            Choose 1
          </Text>
        </View>
        <FlatList
          data={ApartmentSizes}
          renderItem={renderApartmentSize}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => `A${item.id.toString()}-${index}`}
        />
        <View style={{flex: 0.3, padding: 12}}>
          <Text style={[styles.headerText, {fontWeight: 'bold'}]}>
            Bedroom Cleaning
          </Text>
          <Text style={{fontSize: 12, color: Color.lightGrey2, paddingTop: 2}}>
            Choose up to 1
          </Text>
        </View>
        <FlatList
          data={BedroomCleaning}
          renderItem={renderBedroomSize}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => `B${item.id.toString()}-${index}`}
        />
        <View style={{flex: 0.3, padding: 12}}>
          <Text style={[styles.headerText, {fontWeight: 'bold'}]}>
            Bathroom Cleaning
          </Text>
          <Text style={{fontSize: 12, color: Color.lightGrey2, paddingTop: 2}}>
            Choose up to 1
          </Text>
        </View>
        <FlatList
          data={BathroomClening}
          renderItem={renderBathroomCleaning}
          showsVerticalScrollIndicator={false}
          style={{marginBottom: 20}}
          keyExtractor={(item, index) => `C${item.id.toString()}-${index}`}
        />
        <View style={{flex: 0.3, padding: 12}}>
          <Text style={[styles.headerText, {fontWeight: 'bold'}]}>
            Living Room / Dining Room Cleaning
          </Text>
          <Text style={{fontSize: 12, color: Color.lightGrey2, paddingTop: 2}}>
            Choose up to 1
          </Text>
        </View>
        <FlatList
          data={LivingRoom}
          renderItem={renderLivingRoom}
          showsVerticalScrollIndicator={false}
          style={{marginBottom: 20}}
          keyExtractor={(item, index) => `L${item.id.toString()}-${index}`}
        />
        <View style={{flex: 0.3, padding: 12}}>
          <Text style={[styles.headerText, {fontWeight: 'bold'}]}>
            Kitchen Cleaning
          </Text>
          <Text style={{fontSize: 12, color: Color.lightGrey2, paddingTop: 2}}>
            Choose up to 1
          </Text>
        </View>
        <FlatList
          data={kitchen}
          renderItem={renderKitchenCleaning}
          showsVerticalScrollIndicator={false}
          style={{marginBottom: 20}}
          keyExtractor={(item, index) => `K${item.id.toString()}-${index}`}
        />
        <View style={{}}>
          <Text
            style={{fontSize: 16, color: Color.lightGrey2, paddingLeft: 20}}>
            Note
          </Text>
        </View>

        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Note For Item"
            placeholderTextColor="gray"
            onChangeText={setText}
            value={text}
          />
        </View>
      </ScrollView>
      <View style={{height: 60, flexDirection: 'row', padding: 16}}>
        <View
          style={{
            alignSelf: 'center',
            width: 110,
            height: 40,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: Color.btnColor,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight:8
          }}>
          <TouchableOpacity style={{}} onPress={()=>setCount(count-1)}
          disabled={count==1?true:false}
          >
            <Text
              style={{fontSize: 28, color: Color.btnColor, paddingLeft: 15}}>
              -
            </Text>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              height: 40,
              width: 35,
              marginLeft: 10,
              borderWidth: 1,
              borderColor: Color.btnColor,
              alignContent: 'center',
            }}>
            <Text
              style={{
                alignSelf: 'center',
                color: Color.btnColor,
                fontWeight: '500',
              }}>
              {count}
            </Text>
          </View>
          <TouchableOpacity style={{}} onPress={()=>setCount(count+1)}>
            <Text
              style={{fontSize: 15, color: Color.btnColor, paddingLeft: 15}}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{backgroundColor:Color.btnColor , alignSelf: 'center',
            width: "70%",
            height: 40,
            borderRadius: 20,
            flexDirection: 'row',
            justifyContent:"center",
            alignItems: 'center'}}
            onPress={()=>navigation.navigate("Home")}
            >
                <Text style={{color:Color.white}}>Add to cart -  {'\u20B9'} {totalPrice}</Text>
        </TouchableOpacity >
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 18,
    color: Color.fontColor,
    fontWeight: '500',
  },
  container: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  input: {
    borderBottomWidth: 0.8,
    borderBottomColor: Color.lightGrey2,
    fontSize: 16,
    paddingVertical: 10,
  },
});
