import React, { useState } from "react";
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar, Avatar, Pressable, View } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Image,StyleSheet } from "react-native";
const StudentHome = () => {
  const [selected, setSelected] = useState(0);

  return (
    <NativeBaseProvider>
      <StatusBar bg='#ff0000' barStyle="light-content" />
      <VStack flex={1} bg="white">
        {/* Header */}
        <HStack bg="#ff0000" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="100%">
          <HStack alignItems="center">
            <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} />
            <Text color="white" fontSize="20" fontWeight="bold">
              YIP 
            </Text>
          </HStack>
          <HStack>
            {/* <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} />
            <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} /> */}
            <Avatar bg="green.500" source={{ uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" }}>
              AJ
            </Avatar>
          </HStack>
        </HStack>

        {/* Content */}
        {/* Add your content here */}
        <View style={styles.Content}>
        <Image source={require('../../assets/studentHome.jpeg')}
          style={styles.img}
        />
        </View>
        

        {/* Footer */}
        <Box bg="white" safeAreaBottom width="100%" alignSelf="center">
          <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
            <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
              <Center>
                <Icon mb="1" as={<MaterialCommunityIcons name={selected === 0 ? 'home' : 'home-outline'} />} color="white" size="sm" />
                <Text color="white" fontSize="12">
                  Home
                </Text>
              </Center>
            </Pressable>
            <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
              <Center>
                <Icon mb="1" as={<MaterialIcons name="search" />} color="white" size="sm" />
                <Text color="white" fontSize="12">
                  Search
                </Text>
              </Center>
            </Pressable>
            <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={selected === 3 ? 'account' : 'account-outline'} />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                Account
              </Text>
            </Center>
          </Pressable>
            {/* Add more tabs */}
          </HStack>
        </Box>
      </VStack>
    </NativeBaseProvider>
  );
};

export default StudentHome;

const styles = StyleSheet.create({
  img:{
    height:'100%',
    width:'100%'
  },
  Content:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
  }
})
