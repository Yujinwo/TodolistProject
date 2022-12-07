import { useRef,useState } from 'react';
import { StyleSheet,Text,View,TouchableOpacity,ScrollView} from 'react-native';
import Textinput from './Textinput';
import Progressbar from './Progessbar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DialogInput from 'react-native-dialog-input';
import React from "react";
export default function Todolist() {
  
  const [islist,setislist] = useState([])
  const [indexstate,setindexstate] = useState(0)
  const [isDialogVisible,setisDialogVisible] = useState(false)
  const [ischecktrue,setischecktrue] = useState([])
  const [inputtext,setinputtext] = useState("")

  {/* 일정 수정 버튼 눌렀으면 */}
  const Edit = (idx) => {
    if (isDialogVisible == false)
    {
      setindexstate(idx)
      setisDialogVisible(true)
    }
    else
    {
      setindexstate(0)
      setisDialogVisible(false)
    }
  }
  {/* 일정 수정버튼 누르면 수정할 수 있는 창을 출력 */}    
  const Editshow = () => {
    if (isDialogVisible == true)
    {
    return (

      <View>
      <DialogInput
        isDialogVisible={isDialogVisible}
        message={'SCHEDULE'}
        dialogStyle={{backgroundColor: 'white', borderRadius: 20,borderColor:'black', borderWidth: 1,}}
        textInputProps={{
      	autoCorrect: false,
        autoCapitalize: false,
        maxLength: 20,
        }}
        hintInput={'Please enter a change schedule'}
        initValueTextInput={""}
        submitText={'OK'}
        cancelText={'CANCEL'}
        submitInput={(inputNickName) => {
        {/* 텍스트 입력 창이 비어 있으면 */}  
    	  if (inputNickName.trim()=="")
          {
            alert('Spaces are not allowed in schedules');
          }
            else
          {
          const tee = islist.map((list) =>   {
          if (indexstate == list.id)
          {
          return {id : list.id , text : inputNickName}
          }
          else   
          {
          return {id : list.id , text : list.text}
          
        }
      
        })
        
        setislist(tee)
        setindexstate(0)
        setisDialogVisible(false)
        }
      }}

      closeDialog={() => Edit() }
      />
      </View>
  
      )
      }
      }
  const nextId = useRef(0);
  {/* 추가 버튼을 눌렀으면 */}
  const Add = (text) => {
   
    {/* 텍스트 입력창이 비어 있으면 */}
    if (text.trim()=="")
    {
      alert('Please enter your schedule')
    }
    else
    {
      const list = {
        id: nextId.current,
        text : text,
  
      }
      setislist([...islist,list])
      setinputtext("")
      nextId.current += 1;
    }
   
  }
  {/* 삭제 버튼을 눌렀으면 */}
  const Delete = (item,item_id) => {
    {/* 해당 일정 리스트를 삭제한다 */} 
    const newarray = islist.filter((list,index) => {
      return item != list
    })
    setislist(newarray)
    {/* 체크가 되어 있는 일정이면 체크 리스트도 삭제한다. */} 
    if ((ischecktrue.includes(item_id)))
    {
      const newarray2 = ischecktrue.filter((list,index) => {
        return item_id != list
      })
      setischecktrue(newarray2)
    }
  }

  {/* 체크 완료 버튼을 눌렀으면 */}
  const Check = (idx) => {
    if ((ischecktrue.includes(idx)))
    {
      const newarray = ischecktrue.filter((list,index) => {
        return idx != list
      })
      setischecktrue(newarray)
    }
    else
    {
      setischecktrue([...ischecktrue,idx])
    }
  
  }
  {/* 현재 일정을 화면에 실시간으로 표시한다. */}
  const Addlist = () => {
    return (
      islist.map((item) => (
      <View style={styles.mainbutton} key = {item.id}>
      
      <TouchableOpacity onPress={() => Check(item.id)}>
         {
          (ischecktrue.includes(item.id))
          ? <MaterialCommunityIcons name="checkbox-outline" size={30} color="black" />
          : <MaterialCommunityIcons name="checkbox-blank-outline" size={30} color="black" />
         }

      </TouchableOpacity> 
        {
          (ischecktrue.includes(item.id))
        ? <Text style={{ fontSize: 15, flex: 1, textAlign:'center', textDecorationLine:'line-through',color:'red' }} >{item.text} </Text>
        : <Text style={{ fontSize: 15, flex: 1, textAlign:'center'}} >{item.text} </Text>
      
        }
      <TouchableOpacity onPress={()=> Edit(item.id)}>
        <MaterialCommunityIcons name="playlist-edit" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> Delete(item,item.id)}>
        <MaterialCommunityIcons name="delete-outline" size={30} color="black" />
      </TouchableOpacity>
      
      </View>
      ))
    );
  };

  return (
    <View style = {styles.container}>
    <Text style = {styles.maintext}>TO-DO List ✔️</Text>
    <Progressbar islist= {islist} ischecktrue={ischecktrue}></Progressbar>
    <Textinput add = {Add} inputtext = {inputtext} setinputtext = {setinputtext}/>
    <ScrollView>
    <Addlist></Addlist>
    </ScrollView>
    <Editshow></Editshow>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'skyblue',
    flex:1,
  },
  maintext: {
    height:'100%',
    marginTop:35,
    marginLeft:10,
    marginRight:10,
    height:60,
    textAlign:'center',
    backgroundColor:'skyblue',
    padding:15,
    fontSize:20,
    color:'white',
    borderWidth: 1,
    borderRadius: 10,
    borderColor:'blue'
  },
  mainbutton: {
    flexDirection: 'row',
    height:40,
    margin:10,
    alignItems: 'center',
    backgroundColor:'blue',
    justifyContent: 'space-around',
    fontSize:20,
    color:'white',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#f1f3f5',
    borderColor:'blue'
  },
});
