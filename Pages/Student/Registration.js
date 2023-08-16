import React, { useState } from "react";
import { TextInput, View, ScrollView, StyleSheet, Text, KeyboardAvoidingView, Platform } from "react-native";
import { Button, FormControl, Select, CheckIcon, WarningOutlineIcon, NativeBaseProvider } from "native-base";

const Registration = ({ navigation }) => {
    const [inputData,setInputData] = useState({
        name:'',
        email:'',
        cemail:'',
        mobilenumber:'',
        district:'',
        institution:''
    })
    const handleNavigationBack = () => {
        navigation.navigate('Home');
    };
  

    const handleDataChange = (name, value) => {
        setInputData(inputData => ({ ...inputData, [name]: value }));
        console.log(inputData)
    };

    // email validate
    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    };

    // validate mobile number
    const validateMobileNumber = (number) => {
        const numberRegex = /^[0-9]{10}$/;
        return numberRegex.test(number);
    };
    const validateForm = () => {
        const { name, email, cemail, mobilenumber, district, institution } = inputData;
        
        if (!name || !email || !cemail || !mobilenumber || !district || !institution) {
            alert('All fields are required');
            return false;
        }
        
        if (!validateEmail(email)) {
            alert('Invalid email format');
            return false;
        }
        
        if (email !== cemail) {
            alert('Emails do not match');
            return false;
        }
        
        if (!validateMobileNumber(mobilenumber)) {
            alert('Invalid mobile number format');
            return false;
        }
        
        return true;
    };

    // registration
    const RegistrationOfStudent=()=>{
       if(validateForm()){
        alert("Registered Successfully");
        setInputData({
        name:'',
        email:'',
        cemail:'',
        mobilenumber:'',
        district:'',
        institution:''
        })
       }
    }
    return (
        <NativeBaseProvider>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0} // Set this to the height of your custom header
            >
                <ScrollView style={styles.screenView} keyboardDismissMode='interactive'>
                <Text style={styles.text}>Student Registration</Text>
                    <TextInput
                        placeholder="Name"
                        style={styles.input}
                        name='name'
                        value={inputData.name}
                        onChangeText={value => handleDataChange('name', value)}
                    />
                    <TextInput
                        placeholder="Email"
                        style={styles.input}
                        keyboardType='email-address'
                        name='email'
                        value={inputData.email}
                        onChangeText={value => handleDataChange('email', value)}
                    />
                    <TextInput
                        placeholder="Confirm Email ID"
                        style={styles.input}
                        keyboardType='email-address'
                        name='cemail'
                        value={inputData.cemail}
                        onChangeText={value => handleDataChange('cemail', value)}
                    />
                    <TextInput
                        placeholder="Mobile Number"
                        style={styles.input}
                        keyboardType='phone-pad'
                        name='mobilenumber'
                        value={inputData.mobilenumber}
                        maxLength={10}
                        onChangeText={value => handleDataChange('mobilenumber', value)}
                    />
                    {/* district */}
                    <FormControl w="3/4" maxW="300" isRequired isInvalid>
                        <FormControl.Label>Select District</FormControl.Label>
                        <Select minWidth="200" accessibilityLabel="Select District" 
                        placeholder="Choose Service" 
                        name='district'
                        value={inputData.district}
                        onValueChange={value => handleDataChange('district', value)}
                        _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size={5} />
                        }} mt="1"
                        editable={false}
                        
                        >
                             <Select.Item label="Select.."  />
                            <Select.Item label="Kasaragod" value="Kasaragod" />
                            <Select.Item label="Kannur" value="Kannur" />
                            <Select.Item label="Kozhikode" value="Kozhikode" />
                            <Select.Item label="Thrissur" value="Thrissur" />
                            <Select.Item label="Kottayam" value="Kottayam" />
                        </Select>
                        {inputData.district === '' &&(
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                            Please make a selection!
                        </FormControl.ErrorMessage>
                        )}
                        
                    </FormControl>
                    {/* institution */}
                    <FormControl w="3/4" maxW="300" isRequired isInvalid >
                        <FormControl.Label> Choose Institution From the List</FormControl.Label>
                        <Select minWidth="200" 
                        accessibilityLabel="Select Institution" 
                        placeholder="Choose Institution" 
                        name='institution'
                        value={inputData.institution}
                        onValueChange={value => handleDataChange('institution', value)}
                            _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size={5} />
                        }} mt="1" editable={false}
                            
                        >
                             <Select.Item label="Select.."  />
                            <Select.Item label="St.Pius X College Rajapuaram" value="St.Pius X College Rajapuar" />
                            <Select.Item label="CEV" value="CEV" />
                            <Select.Item label="Don Bosco Arts and Science college" value="Don Bosco Arts and Science college" />
                            <Select.Item label="RIT" value="RIT" />
                            <Select.Item label="CET" value="CET" />
                        </Select>
                        {inputData.institution === '' && (
                             <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                             Please make a selection!
                         </FormControl.ErrorMessage>
                        )}
                       
                    </FormControl>
                    
                
                <View style={styles.buttonContainer}>
                        <Button
                            mode="contained"
                            style={styles.regButton}
                            onPress={RegistrationOfStudent}
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
                </ScrollView>
            </KeyboardAvoidingView>
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    screenView: {
        padding: 10,
        paddingTop: 50,
        paddingBottom:100
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 20,
        borderRadius: 2,
        elevation: 2,
        paddingBottom:20,
    },
    input: {
        marginVertical: 10,
        borderWidth: 1,
        height: 40,
        width: 250,
        borderRadius: 5,
        borderColor: '#000000',
        paddingLeft: 10,
    },
    buttonContainer: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        bottom: 0,
        marginBottom: 20,
        alignContent: 'center',
        paddingLeft: 60,
    },
    regButton: {
        marginHorizontal: 5,
    },
    cancelButton: {
        backgroundColor: '#dc143c',
        marginHorizontal: 5,
    },
    text: {
        marginTop: 10,
        paddingVertical: 10,
        color: '#000',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    },
});

export default Registration;
