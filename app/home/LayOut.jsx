import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const LayOut = () => {
  return (
   <Stack screenOptions={{headerShown: false}}>
    <Stack.Screen name='index' />
    <Stack.Screen name='Employees' />
    <Stack.Screen name='AddDetails' />
    <Stack.Screen name='MarkAttendance' />
    <Stack.Screen name='User' />
    <Stack.Screen name='Summary' />
   </Stack>
  )
}

export default LayOut

const styles = StyleSheet.create({})