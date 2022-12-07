import React from "react";
import { View,StyleSheet,Text } from "react-native";
import * as Progress from 'react-native-progress';
export default function Progressbar(props) {
    let progressdata = 0.0;
    
    {/* 체크 한 갯수 / 리스트 갯수를 계산 */}
    if (props.islist.length != 0)
    {
        progressdata =  props.ischecktrue.length / props.islist.length
    }
   
   
    return (
        <View style = {styles.proviewstyle}>
              {/* 투두 리스트 진행 상황 바 표시 */}
              <Progress.Bar progress={progressdata} 
                
                width={300}
                height={20}
               >
             </Progress.Bar >
             <Text>{props.ischecktrue.length} / {props.islist.length} </Text>
           
        </View>
    );
};

const styles = StyleSheet.create({
    proviewstyle : {
      flexDirection: 'row',
      marginLeft:10,
      marginRight:10,
      marginTop :20,
      justifyContent: 'space-around',
     
    }
  });
  