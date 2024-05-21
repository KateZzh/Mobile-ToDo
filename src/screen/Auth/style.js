import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F0F4F3',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '20',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
  wrapperInputs: {
    gap: 20,
    maxWidth: 380,
    width: '100%',
    marginTop: 40,
  },
  input: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 100,
  },
  textWithLinkToRecoverPWD: {
    fontFamily: 'Poppins',
    fontSize: 13,
    fontWeight: '400',
    color: '#50C2C9',
    paddingTop: 28,
  },
  btn: {
    backgroundColor: '#50C2C9',
    paddingVertical: 16,
    maxWidth: 380,
    width: '100%',
    borderRadius: 8,
    marginTop: 28,
  },
  btnText: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
