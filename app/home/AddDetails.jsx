import { StyleSheet, Text, TextInput, View, ScrollView, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';



const AddDetails = () => {
    const [name, setName] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [dob, setDob] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [joiningDate, setJoiningDate] = useState('');
    const [salary, setSalary] = useState('');
    const [address, setAddress] = useState('');
    const [designation, setDesignation] = useState('');

    const handleRegister = () => {
        const employeeData = {
            employeeName: name,
            employeeId: employeeId,
            designation: designation,
            phoneNumber: mobileNo,
            dateOfBirth: dob,
            joiningDate: joiningDate,
            activeEmployee: true,
            salary: salary,
            address: address,
        };

    // const handleRegister = async () => {
    //     const employeeData = {
    //         employeeName: name,
    //         employeeId: employeeId,
    //         designation: designation,
    //         phoneNumber: mobileNo,
    //         dateOfBirth: dob,
    //         joiningDate: joiningDate,
    //         activeEmployee: true,
    //         salary: salary,
    //         address: address,
    //     };


        axios.post("http://localhost:8080/addEmployee", employeeData).then((res) => {
           Alert.alert("Registration Success:", res.data.message); // Show response message in an alert
            console.log("Registration Successful:", res.data.message); // Log the response message

        // try {
        //     const res = await axios.post("http://localhost:8080/addEmployee", employeeData);
        //     Alert.alert("Registration Success", res.data.message);
        //     console.log("Registration Successful:", res.data.message); 

        //   } catch (error) {
        //     // console.error("Error displaying alert:", error);
        //     Alert.alert("Registration Fail", "An Error occurred during registration");
        //     console.log("Registration has failed", error);
        //   }
          
            
            // Clear input fields
            setName('');
            setEmployeeId('');
            setDob('');
            setMobileNo('');
            setSalary('');
            setAddress('');
            setJoiningDate('');
            setDesignation('');
        })
        .catch((err) => {
            Alert.alert("Registration Fail", "An Error occurred during registration");
            console.log("Registration has failed", err);
        });
    
    };
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{padding: 10}}>
            <Text style={{fontStyle: 17, fontWeight: 'bold'}}>Add a New Employee</Text>
            <TextInput style={{padding: 10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5}} placeholder='India' placeholderTextColor={'black'} />
            <View style={{marginVertical: 10}}>
                <Text style={{fontStyle: 17, fontWeight: 'bold'}}>Full Name (First and Last Name)</Text>
                <TextInput value={name} onChangeText={(text) => setName(text)} style={{padding: 10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5}} placeholder='Enter Your Name' placeholderTextColor={'black'} />
            </View>
            <View>
                <Text style={{fontStyle: 17, fontWeight: 'bold'}}>Employee Id</Text>
                <TextInput value={employeeId} onChangeText={(text) => setEmployeeId(text)} style={{padding: 10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5}} placeholder='Employee Id' placeholderTextColor={'black'} />
            </View>
            <View style={{marginVertical: 10}}>
                <Text style={{fontStyle: 17, fontWeight: 'bold'}}>Designation</Text>
                <TextInput value={designation} onChangeText={(text) => setDesignation(text)} style={{padding: 10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5}} placeholder='Designation' placeholderTextColor={'black'} />
            </View>
            <View>
                <Text style={{fontStyle: 17, fontWeight: 'bold'}}>Mobile Number</Text>
                <TextInput value={mobileNo} onChangeText={(text) => setMobileNo(text)} style={{padding: 10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5}} placeholder='Enter Your Mobile Number' placeholderTextColor={'black'} />
            </View>
            <View style={{marginVertical: 10}}>
                <Text style={{fontStyle: 17, fontWeight: 'bold'}}>Date of Birth</Text>
                <TextInput value={dob} onChangeText={(text) => setDob(text)} style={{padding: 10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5}} placeholder='Enter Your D.O.B' placeholderTextColor={'black'} />
            </View>
            <View>
                <Text style={{fontStyle: 17, fontWeight: 'bold'}}>Date of Joining</Text>
                <TextInput value={joiningDate} onChangeText={(text) => setJoiningDate(text)} style={{padding: 10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5}} placeholder='Enter Your Joining Date' placeholderTextColor={'black'} />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10}}>
                <Text>Active Employee</Text>
                <Text>True</Text>
            </View>
            <View style={{marginVertical: 10}}>
                <Text style={{fontStyle: 17, fontWeight: 'bold'}}>Salary</Text>
                <TextInput value={salary} onChangeText={(text) => setSalary(text)} style={{padding: 10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5}} placeholder='Enter Your Salary' placeholderTextColor={'black'} />
            </View>
            <View>
                <Text style={{fontStyle: 17, fontWeight: 'bold'}}>Address</Text>
                <TextInput value={address} onChangeText={(text) => setAddress(text)} style={{padding: 10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5}} placeholder='Enter Your Address' placeholderTextColor={'black'} />
            </View>
            <Pressable onPress={handleRegister} style={{backgroundColor: '#0dcaf0', padding: 10, marginTop: 20, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold', color: 'white'}}>Add Employee</Text>
            </Pressable>
        </View>
        
    </ScrollView>
  )
}

export default AddDetails

const styles = StyleSheet.create({})