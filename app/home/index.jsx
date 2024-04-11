import { StyleSheet, View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Feather, Entypo, Ionicons, Octicons, FontAwesome6, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';



const index = () => {
  const router = useRouter();
  return (
    <ScrollView>
      <LinearGradient colors={["#fd7e14", "#6610f2"]} style={{ flex: 1 }}>
        <View style={{ padding: 12 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Feather name="bar-chart" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: '600' }}>Employee Monitoring System</Text>
            <Entypo name="lock" size={24} color="black" />
          </View>

          <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', gap: 20 }}>
            <Pressable onPress={() => router.push("/home/Employees")} style={{ backgroundColor: '#D3CCE3', padding: 12, borderRadius: 6, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                <Ionicons name="people-sharp" size={24} color="black" />
              </View>
              <Text style={{ marginTop: 7, fontWeight: '600' }}>Employee List</Text>
            </Pressable>
            <Pressable onPress={() => router.push("/home/MarkAttendance")} style={{ backgroundColor: '#D3CCE3', padding: 12, borderRadius: 6, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                <AntDesign name="pushpin" size={24} color="black" />
              </View>
              <Text style={{ marginTop: 7, fontWeight: '600' }}>Mark Attendance</Text>
            </Pressable>
          </View>
          <View style={{marginTop: 20, backgroundColor: 'white', paddingHorizontal: 10, paddingVertical: 10, borderRadius: 7}}>
            <Pressable style={{backgroundColor: '#BE93C5', borderRadius: 6, padding: 10, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
              <View style={{ padding: 7, width: 45, height: 45, borderRadius: 7, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                <Ionicons name="newspaper-outline" size={24} color="black" />
              </View>
              <Text style={{marginLeft: 10, fontSize: 16, fontWeight: '600', flex: 1}}>Attendance Report</Text>
              <View style={{width: 35, height: 35, borderRadius: 7, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable onPress={() => router.push("/home/Summary")} style={{backgroundColor: '#BE93C5', borderRadius: 6, padding: 10, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
              <View style={{ padding: 7, width: 45, height: 45, borderRadius: 7, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                <Octicons name="repo-pull" size={24} color="black" />
              </View>
              <Text style={{marginLeft: 10, fontSize: 16, fontWeight: '600', flex: 1}}>Summary Report</Text>
              <View style={{width: 35, height: 35, borderRadius: 7, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable style={{backgroundColor: '#BE93C5', borderRadius: 6, padding: 10, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
              <View style={{ padding: 7, width: 45, height: 45, borderRadius: 7, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                <Octicons name="report" size={24} color="black" />
              </View>
              <Text style={{marginLeft: 10, fontSize: 16, fontWeight: '600', flex: 1}}>All Generate Report</Text>
              <View style={{width: 35, height: 35, borderRadius: 7, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable style={{backgroundColor: '#BE93C5', borderRadius: 6, padding: 10, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
              <View style={{ padding: 7, width: 45, height: 45, borderRadius: 7, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesome6 name="people-carry-box" size={24} color="black" />
              </View>
              <Text style={{marginLeft: 10, fontSize: 16, fontWeight: '600', flex: 1}}>Overtime Employees</Text>
              <View style={{width: 35, height: 35, borderRadius: 7, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
          </View>
          <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', gap: 12}}>
            <View style={{backgroundColor: '#f79d00', borderRadius: 6, padding: 12, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={{width: 35, height: 35, borderRadius: 7, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                <MaterialCommunityIcons name="guy-fawkes-mask" size={24} color="black" />
              </View>
              <Text style={{marginTop: 7}}>Attendance Criteria</Text>
            </View>
            <View style={{backgroundColor: '#ABCABA', borderRadius: 6, padding: 12, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={{width: 35, height: 35, borderRadius: 7, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                <FontAwesome6 name="bar-chart" size={24} color="black" />
              </View>
              <Text style={{marginTop: 7}}>Increased Workflow</Text>
            </View>
          </View>
          <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', gap: 12}}>
            <View style={{backgroundColor: '#D3CCE3', borderRadius: 6, padding: 12, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={{width: 35, height: 35, borderRadius: 7, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                <AntDesign name="areachart" size={24} color="black" />
              </View>
              <Text style={{marginTop: 7}}>Cost Savings</Text>
            </View>
            <View style={{backgroundColor: '#bdc3c7', borderRadius: 6, padding: 12, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={{width: 35, height: 35, borderRadius: 7, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                <AntDesign name="piechart" size={24} color="black" />
              </View>
              <Text style={{marginTop: 7}}>Employee Performance</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({})