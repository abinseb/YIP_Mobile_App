import React from "react";
import { TextInput, View, ScrollView, StyleSheet,Text, KeyboardAvoidingView, Platform } from "react-native";
import { Button } from "react-native-paper";

const Registration = ({navigation}) => {

    const handleNavigationBack=()=>{
        navigation.navigate('Home');

    }
    return (
       
      
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView style={styles.screenView} keyboardDismissMode='interactive'>
                <View style={styles.container}>
                    <Text 
                        style={styles.text}
                    
                    >Student Registration</Text>
                    <TextInput
                        label='Name'
                        mode='filled'
                        placeholder="Name"
                        style={styles.input}
                        theme={{ colors: { primary: '#000000' } }}
                    />
                    <TextInput
                        label='email'
                        placeholder='Email'
                        mode='filled'
                        style={styles.input}
                        theme={{ colors: { primary: '#000000' } }}
                    />
                    <TextInput
                        label='Mobile Number'
                        placeholder='Mobile Number'
                        mode='filled'
                        style={styles.input}
                        theme={{ colors: { primary: '#000000' } }}
                    />
                    <TextInput
                        label='district'
                        placeholder='District'
                        mode='filled'
                        style={styles.input}
                        theme={{ colors: { primary: '#000000' } }}
                    />
                    <View style={styles.buttonContainer}>
                        <Button
                            mode="contained"
                            style={styles.regButton}
                        >
                            Register
                        </Button>
                        <Button
                        style={styles.cancelButton}
                            mode="contained"
                            onPress={handleNavigationBack}
                        >
                            Cancel
                        </Button>
                    </View>
                </View>
            </ScrollView>
            </KeyboardAvoidingView>
           
    
    );
}

export default Registration;

const styles = StyleSheet.create({
    screenView: {
        padding: 10,
        paddingTop: 50,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center', // Center horizontally
        flex: 1,
        padding: 20,
        marginTop: 20,
        borderRadius: 2,
        elevation: 2,
    },
    input: {
        margin: 30,
        borderWidth: 1,
        height: 40,
        width: 250,
        top: 30,
        borderRadius: 5,
        borderColor: '##000000',
        marginTop: 10,
        paddingLeft: 10, // Make sure inputs take up full width
    },
    buttonContainer:{
        paddingTop:20,
        flexDirection:'row',
        justifyContent: 'center',
       
        bottom: 0, // Align buttons at the bottom
        marginBottom: 20,
        alignContent:'center', // Add some margin for spacing
        paddingLeft:60,
    },
    regButton:{
        marginHorizontal: 5
    },
    cancelButton:{
        backgroundColor:'#dc143c',
        marginHorizontal: 5,
        
    },
    text:{
        marginTop:10,
        paddingVertical:10,
        color:'#000',
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
        
    },
});
