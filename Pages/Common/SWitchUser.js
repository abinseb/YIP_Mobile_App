import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image,Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
const SwitchUser = () => {
    const navigation = useNavigation();
    const handleStudentClick=()=>{
            navigation.navigate('Home');
    }
    return (
    //    <ScrollView>
            <View style={Styles.container}>
                <View style={Styles.imageContainer}>
                    <Image 
                        source={require('../../assets/yip_switch.jpg')}
                        style={Styles.img}
                        resizeMode='contain'
                    />
                </View>
                <View style={Styles.body}>
                    <Text style={Styles.text}>Whats Best Describes You ?</Text>
                
                    <TouchableOpacity style={Styles.infoSelection} onPress={handleStudentClick}>
                        <View style={Styles.select}>
                            <Text style={Styles.text1}>
                                Student
                            </Text>
                        </View>  
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={Styles.infoSelection}>
                    <View style={Styles.select}>
                            <Text style={Styles.text1}>
                                Institution
                            </Text>
                        </View>  
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.infoSelection}>
                    <View style={Styles.select}>
                            <Text style={Styles.text1}>
                                Facilitator
                            </Text>
                        </View>  
                    </TouchableOpacity>
                </View>
        </View>
    //    </ScrollView>
    );
};

export default SwitchUser;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: `#ff0000`
    },
    body: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        justifyContent: 'flex-start',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '50%',
    },
    select: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        top: 10,
        justifyContent:'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        fontStyle:'italic',
        
        
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 20,
        fontStyle:'normal',
        color:'#dc143c'
        
        
    },
    img: {
        height: '100%',
        width: '80%',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%', // Adjust this based on your layout requirements
    },
    infoSelection:{
        fontSize: 24,
        width:'100%',
        justifyContent:'center',
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#EDEFEE',
    }
});
