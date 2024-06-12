import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 40,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    width: 100,
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: '#fff',
  },
  loginbuttonText:{
    color: '#fff',
    fontWeight: 'bold',
  },
  signupbuttonText:{
    color:'#000',
    fontWeight:'bold',
  },
  buttonText: {
    color: '#000',
  },
  submitButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 20,
  },
  emailText: {
    color: '#fff',
    fontSize: 18,
  },
  logoutButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  carouselTitle: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 20,
  },
  highlight: {
    color: '#FFC107', // or the specific color code from the snapshot
  },
});
