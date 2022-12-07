import React,{useState} from "react";
import { View } from "react-native";
import { format } from "date-fns";
import { Calendar } from 'react-native-calendars';
export default function MonthlyCalendar() {
  const [day,setday] = useState(format(new Date(), "yyyy-MM-dd"))
 
  {/* 캘린더 데이터 */} 
  const markedDates  = {
    [day] : { selected: true},
   
  }
  
    return (
        <View style={{marginTop: 50}}>
              {/* 캘린더 표시 */}
              <Calendar 
              monthFormat={'yyyy MM'}
              markedDates={markedDates}

              theme={{
              selectedDayBackgroundColor: 'blue',
              todayTextColor: 'FFFF00',
              todayBackgroundColor: 'FFFF00'
              }} 
              /* 캘린더 날짜를 누르면 누른 날짜로 설정 */ 
              onDayPress={(day) => {setday(day.dateString)}} />
        </View>
    );
};