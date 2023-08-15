import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image,Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
                        resizeMode='cover'
                    />
                </View>
                <View style={Styles.body}>
                    <Text style={Styles.text}>Whats Best Describes You ?</Text>
                
                    <TouchableOpacity style={Styles.infoSelection} onPress={handleStudentClick}>
                        <View style={Styles.select}>
                            <Text style={Styles.text}>
                                Student
                            </Text>
                        </View>  
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={Styles.infoSelection}>
                    <View style={Styles.select}>
                            <Text style={Styles.text}>
                                Institution
                            </Text>
                        </View>  
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.infoSelection}>
                    <View style={Styles.select}>
                            <Text style={Styles.text}>
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
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        fontStyle: 'normal',
        
    },
    img: {
        height: 200,
        width: 200,
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
