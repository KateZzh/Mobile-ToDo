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
  image: {
    height: 254,
    width: 194,
    resizeMode: 'contain',
  },
  wrapperTexts: {
    maxWidth: 199,
    gap: 16,
  },
  titleText: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  descText: {
    fontFamily: 'Poppins',
    fontSize: 13,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: '20.41',
  },
  btn: {
    backgroundColor: '#50C2C9',
    paddingVertical: 16,
    maxWidth: 380,
    width: '100%',
    borderRadius: 8,
    marginTop: 110,
  },
  btnText: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
