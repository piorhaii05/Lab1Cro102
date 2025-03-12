import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'

// Header Custom Component
interface HeaderProps {
  renderLeft?: () => JSX.Element;
  renderCenter?: () => JSX.Element;
  renderRight?: () => JSX.Element;
}

const Header: React.FC<HeaderProps> = ({ renderLeft, renderCenter, renderRight }) => {
  return (
    <View style={headerStyles.header}>
      <View style={headerStyles.side}>{renderLeft && renderLeft()}</View>
      <View style={headerStyles.center}>{renderCenter && renderCenter()}</View>
      <View style={headerStyles.side}>{renderRight && renderRight()}</View>
    </View>
  );
};

const headerStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    padding: 10,  
    backgroundColor: 'rgb(254, 218, 218)',
    borderRadius: 15,
    width: '100%',
  },
  side: { flex: 1, alignItems: 'center' },
  center: { flex: 3, alignItems: 'center'},
});

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header
          renderLeft={() => <Image style={styles.image} source={{uri: 'https://cdn-icons-png.flaticon.com/512/93/93634.png'}}/>}
          renderCenter={() => <Text style={styles.text}>Header</Text>}
          renderRight={() => <Image style={styles.image} source={{uri: 'https://cdn.kona-blue.com/upload/kona-blue_com/post/images/2024/09/19/465/avatar-trang-1.jpg'}}/>}
        />
        <Header
          renderLeft={() => <Image style={styles.image} source={{uri: 'https://cdn-icons-png.flaticon.com/512/93/93634.png'}}/>}
          renderCenter={() => <Text style={styles.text}>Trang chủ</Text>}
          renderRight={() => <Text></Text>}
        />
        <Header
          renderLeft={() => <Image style={styles.image} source={{uri: 'https://cdn-icons-png.flaticon.com/512/93/93634.png'}}/>}
          renderCenter={() => <Text></Text>}
          renderRight={() => <Text></Text>}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 50
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});