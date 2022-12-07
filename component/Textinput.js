import { StyleSheet,TouchableOpacity,View,TextInput} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from "react";
export default function Textinput(props) {

  return (
      <View style ={styles.container}>
       {/* 입력할 수 있는 텍스트 창 표시 */}
      <TextInput
        style={styles.inputstyle} 
        value = {props.inputtext}
        onChangeText={props.setinputtext}
        maxLength = '20'
        >
      </TextInput>
       {/* 일정 추가 버튼 표시 */}
      <TouchableOpacity  style={styles.buttonstyle} onPress={()=> props.add(props.inputtext) }>
        <MaterialCommunityIcons name="plus-circle-outline" size={39} color="black" />
      </TouchableOpacity>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height:40,
    marginTop:20,
    marginBottom:20,
    textAlign:'center',
    justifyContent: 'space-around',
  },
  maintext: {
    width:'100%',
    height:60,
    textAlign:'center',
    backgroundColor:'blue',
    padding:15,
    fontSize:20,
    color:'white'
  },
  inputstyle:{
    width:300,
    marginLeft:10,
   
    textAlign:'center',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: '#f1f3f5',
    borderColor:'blue',
  },
  buttonstyle:{
    marginLeft:10,
    marginRight:10,
    textAlign:'center',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'skyblue',
    borderColor:'blue',
  }
});
