import { Pressable, StyleSheet, TextInput, View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import SearchResults from '../../Components/SearchResults';


const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [input, setInput] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/employees");
        setEmployees(res.data);
      } catch (err) {
        console.log("error fetching employee data", err);
      }
    }
    fetchEmployeeData();
  }, []);
  console.log(employees);

  const navigateToHomePage = () => {
    router.push("/home")
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white' }}>
          <Pressable onPress={navigateToHomePage}>
            <Ionicons style={{ marginLeft: 10 }} name="arrow-back" size={24} color="black" />
          </Pressable>
        <Pressable style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 7, gap: 10, backgroundColor: 'white', height: 40, borderRadius: 3, flex: 1 }}>
          <AntDesign style={{marginLeft: 10}} name="search1" size={20} color="black" />
          <TextInput value={input} onChangeText={(text) => setInput(text)} style={{ flex: 1 }} placeholder='Search' />

          {employees.length > 0 && (
            <View>
              <Pressable onPress={() => router.push("/home/AddDetails")}>
                <AntDesign name="pluscircle" size={30} color="#0072b1" />
              </Pressable>
            </View>
          )}
        </Pressable>
      </View>

      {/* <Pressable onPress={() => router.push("/home/AddDetails")}>
        <AntDesign name="pluscircle" size={24} color="#0072b1" />
      </Pressable> */}
      <ScrollView style={{flex: 1}}>
        {employees.length > 0 ? (
          <SearchResults data={employees} input={input} setInput={setInput} />
        ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No Data</Text>
          <Text>Press on the Plus button and add your Employee</Text>
          <Pressable onPress={() => router.push("/home/AddDetails")}>
            <AntDesign style={{ marginTop: 30 }} name="pluscircle" size={24} color="black" />
          </Pressable>
        </View>
        )}
      </ScrollView>
    </View>
  )
}

export default Employees

const styles = StyleSheet.create({})