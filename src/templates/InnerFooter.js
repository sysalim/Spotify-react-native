import {StyleSheet, Text, View} from 'react-native';

const InnerFooter = () => {
  return (
    <View style={style.Footer}>
      <Text>hello Ini footer</Text>
    </View>
  );
};

const style = StyleSheet.create({
  Footer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#2D2E30',
  },
  text: {
    color: 'white',
  },
});

export default InnerFooter;
