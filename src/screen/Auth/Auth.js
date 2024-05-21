import { Text, View, Image, Pressable, TextInput } from 'react-native';
import { styles } from './style.js';

export default function Auth({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titleText}>Welcome back</Text>

        <Image style={styles.image} source={require('../../assets/auth.png')} />

        <View style={styles.wrapperInputs}>
          <TextInput style={styles.input} placeholder='Enter your Email'></TextInput>
          <TextInput style={styles.input} secureTextEntry={true} placeholder='Enter Password'></TextInput>
        </View>

        <Text style={styles.textWithLinkToRecoverPWD} onPress={() => navigation.navigate('#')}>
          Forget password ?
        </Text>

        <Pressable style={styles.btn} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btnText}>Login</Text>
        </Pressable>

        <Text style={{ fontSize: 16 }}>
          Don’t have an account ?{' '}
          <Text style={{ color: '#50C2C9', fontSize: 16 }} onPress={() => navigation.navigate('Reg')}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
}
