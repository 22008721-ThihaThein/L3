import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, TouchableOpacity, ToastAndroid} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const InputBox = ({label, onChangeText})=> {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={onChangeText} />
        </View>
    );
};

const MyApp = () => {
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    // let username = "";
    // let pw = "";
  return (
      <View style={{padding:12 , paddingTop:45}}>
          {/*Exercise 1B*/}
          <Text>User Type:</Text>
          <RNPickerSelect
              onValueChange={(value) => setType(value)}
              items={[
                  {label:'Admin', value:'Admin'},
                  {label:'Guest', value:'Guest'},
              ]}
          />



          {/*/!*State*!/*/}
          {/*<Text>Password:</Text>*/}
          {/*<TextInput style = {{borderWidth:1}}*/}
          {/*           onChangeText={(text) => setPw(text)}*/}
          {/*/>*/}

          {/*<TouchableOpacity onPress={()=>ToastAndroid.show(pw, ToastAndroid.SHORT)}>*/}
          {/*    <Text>LOG IN</Text>*/}
          {/*</TouchableOpacity>*/}

          {/*<Text>{pw}</Text>*/}

          {/*/!*Getting Text input values*!/*/}
          {/*<Text>Username:</Text>*/}

          {/*<TextInput style={{borderWidth:1}}*/}
          {/*           onChangeText={(text) => username = text}/>*/}

          {/*<Text>Password:</Text>*/}

          {/*<TextInput style={{borderWidth:1}}*/}
          {/*           onChangeText={(text) => pw = text}/>*/}

          {/*<TouchableOpacity onPress={()=> ToastAndroid.show(pw, ToastAndroid.SHORT)}>*/}
          {/*    <Text>LOG IN</Text>*/}
          {/*</TouchableOpacity>*/}


        {/*  /!*Exercise 1A*!/*/}
        {/*  <Text>Username:</Text>*/}
        {/*  <TextInput style={{borderWidth: 1}} />*/}
        {/*  */}
        {/*<Text>Password:</Text>*/}
        {/*<TextInput style={{borderWidth: 1}} />*/}

        {/*  /!*Exercise 1C & 1D*!/*/}
        {/*  <Button*/}
        {/*      title="LOG IN"*/}
        {/*      onPress={() => Alert.alert("Welcome!")}*/}
        {/*  />*/}

        {/*  /!*Exercise 1E*!/*/}
        {/*  <TouchableOpacity*/}
        {/*      onPress={() => Alert.alert("Welcome!")}>*/}
        {/*      <Text>LOG IN</Text>*/}
        {/*  </TouchableOpacity>*/}

        {/*  /!*Exercise 1F*!/*/}
        {/*  <TouchableOpacity*/}
        {/*      onPress={() => ToastAndroid.show("Welcome!", ToastAndroid.SHORT)}>*/}
        {/*      <Text>LOG IN(2)</Text>*/}
        {/*  </TouchableOpacity>*/}

          {/*Exercise 1G*/}
          <InputBox label="User Name:" onChangeText={(text) => setName(text)}/>
          <InputBox label="Password:" onChangeText={(text) => setPw(text)}/>

          <TouchableOpacity onPress={()=>
              ToastAndroid.show('Welcome ' + type +' ' + name, ToastAndroid.SHORT)}>
              <Text>LOG IN</Text>
          </TouchableOpacity>
          <Text>{pw}</Text>

      </View>
  );
};

export default MyApp;
