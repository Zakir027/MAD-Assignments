import * as React from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import{useState ,useEffect} from 'react'


  export default function Profile() {
    const[name,setname]=useState('');
    useEffect(()=>{
        getdata();
      },[])
      const getdata = async () => {
        let Name;
           try {
             Name = await AsyncStorage.getItem('Username')
             setname(Name)
               }
           catch (e) {
            console.warn(e);
          }
        }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome {name}!</Text>  
        <Text>This is your Profile</Text>
      </View>
    );
  }