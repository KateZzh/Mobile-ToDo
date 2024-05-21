import { Text, View, Pressable, TextInput } from 'react-native';
import { styles } from './style.js';

export default function Reg({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titleText}>Welcome to Onboard!</Text>

        <Text style={styles.textDesc}>Let’s help to meet up your tasks.</Text>

        <View style={styles.wrapperInputs}>
          <TextInput style={styles.input} placeholder='Enter your full name'></TextInput>
          <TextInput style={styles.input} placeholder='Enter your Email'></TextInput>
          <TextInput style={styles.input} secureTextEntry={true} placeholder='Enter Password'></TextInput>
          <TextInput style={styles.input} secureTextEntry={true} placeholder='Confirm password'></TextInput>
        </View>

        <Pressable style={styles.btn} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btnText}>Register</Text>
        </Pressable>

        <Text style={{ fontSize: 16 }}>
          Already have an account ?{' '}
          <Text style={{ color: '#50C2C9', fontSize: 16 }} onPress={() => navigation.navigate('Auth')}>
            Sign In
          </Text>
        </Text>
      </View>
    </View>
  );
}
