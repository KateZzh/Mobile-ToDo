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
  textDesc: {
    maxWidth: 196,
    width: '100%',
    textAlign: 'center',
    fontSize: 13,
    lineHeight: 20.41,
  },
  wrapperInputs: {
    gap: 20,
    maxWidth: 380,
    width: '100%',
    marginTop: 70,
  },
  input: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 100,
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
