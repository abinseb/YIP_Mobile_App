import React from 'react';
import {  NativeBaseProvider } from 'native-base';
import {Button} from 'react-native-paper';
import { ImageBackground, View, StyleSheet } from 'react-native';
const CommonHome=({navigation})=>{
    return(
        <NativeBaseProvider>
        <View style={styles.container}>
            <ImageBackground
                style={styles.imageDesign}
                source={require('../../assets/yip_common.jpeg')}
                resizeMode='cover'
            >
                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.Button}
                        title='Start'
                        mode='contained'
                        onPress={()=>navigation.navigate('SwitchUser')}
                    >Start </Button>
                    
                </View>
            </ImageBackground>
        </View>
   

    </NativeBaseProvider>
    )
}

export default CommonHome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
   
    imageDesign: {
        width: '100%',
        height: '100%',
        position: 'relative', // Required for positioning children
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute', // Positioning within the ImageBackground
        bottom: 150, // Align buttons at the bottom
        marginBottom: 20,
        alignContent:'center', // Add some margin for spacing
        paddingLeft:125,
    },
    Button:{
        backgroundColor:'#ff0000',
        paddingVertical: 5, // Vertical padding for the buttons
        paddingHorizontal: 10, // Horizontal padding for the buttons
        marginHorizontal: 10, // Adjust the margin between the buttons
    }
})

