import React from 'react';
import { Button, NativeBaseProvider } from 'native-base';
import { ImageBackground, View, StyleSheet } from 'react-native';

const Home = ({navigation}) => {
    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.imageDesign}
                    source={require('../assets/yip.png')}
                    resizeMode='cover'
                >
                    <View style={styles.buttonContainer}>
                        <Button
                            style={styles.Button}
                            title='Register'
                            mode='contained'
                            onPress={()=>navigation.navigate('Registration')}
                        >Register </Button>
                        <Button
                            style={styles.Button}
                            title='Login'
                            mode='contained'
                            onPress={()=>navigation.navigate('Login')}
                        > Login</Button>
                    </View>
                </ImageBackground>
            </View>
       

        </NativeBaseProvider>
        
            
    )
}

export default Home;

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
        bottom: 0, // Align buttons at the bottom
        marginBottom: 20,
        alignContent:'center', // Add some margin for spacing
        paddingLeft:80,
    },
    Button:{
        paddingVertical: 5, // Vertical padding for the buttons
        paddingHorizontal: 10, // Horizontal padding for the buttons
        marginHorizontal: 10, // Adjust the margin between the buttons
    }
});
