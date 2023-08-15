import React from 'react';
import {View,Text,StyleSheet, TextInput, Pressable, KeyboardAvoidingView, ScrollView,Image} from 'react-native';

const Login=()=>{
    return(
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                <Image 
                    source={require('./../assets/yip_login.png')}
                    style={styles.img}
                    resizeMode ='contain'
                />

                </View>
                
            <View style={styles.loginContainer}>
                <Text style={styles.regularText}>Email</Text>
                <TextInput 
                    style={styles.Input}
                    // placeholder='UserId'

                />

                <Text style={styles.regularText}>Password</Text>
                <TextInput 
                    style={styles.Input}
                    // placeholder='UserId'

                />
                <Text> If you don't hanve an account? Register </Text>

                <Pressable style={styles.button}>
                    <Text style={styles.loginText}>Login</Text>
                </Pressable>

            </View>

        </View>
       
    )
}

export default Login;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:`#ffffe0`
    },
    loginContainer:{
        backgroundColor:`#fafad2`,
        bottom:0,
        height:'50%',
        left:0,
        right:0,
        position:'absolute',
        justifyContent:'flex-start'


    },
    regularText:{
        fontSize:20,
        margin:5,
        left:20

    },
    Input:{
        color:'black',
        paddingVertical:10,
        paddingHorizontal:10,
        width:'80%',
        height:40,
        borderRadius:20,
        backgroundColor:'white',
        marginRight:10,
        borderWidth:1,
        borderColor:'black',
        left:20
    },

    button:{
        height:50,
        width:'50%',
        backgroundColor:`#ff0000`,
        borderRadius:20,
        borderWidth:2,
        borderColor:'white',
        alignSelf:'center',
        },

    loginText:{
        fontWeight:'bold',
        color:'white',
        fontSize:20,
        alignSelf:'center'
        
    },
    img:{
        height:500,
        width:300
    },
    imageContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
    }

})

