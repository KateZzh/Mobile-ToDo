import { Text, View, Image, Pressable } from 'react-native';
import { styles } from './style';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.image} source={require('../../assets/main.png')} />
        <View style={styles.wrapperTexts}>
          <Text style={styles.titleText}>Gets things with TODs</Text>
          <Text style={styles.descText}>
            Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod. Consequat urna quam felis interdum quisque. Malesuada adipiscing
            tristique ut eget sed.
          </Text>
        </View>

        <Pressable style={styles.btn} onPress={() => navigation.navigate('Auth')}>
          <Text style={styles.btnText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
}
