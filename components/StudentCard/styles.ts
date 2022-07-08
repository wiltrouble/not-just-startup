import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 4
  },
  photo: {
    width: "100%",
    height: 200,
    borderRadius: 25
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "600",
    margin: 5,
    color: "#181818",
  },
  toggle: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  toggleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default styles;