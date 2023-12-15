import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { colors } from '../theme/theme';
import { user1 } from '../data/mockedUser';

const SettingList = [
  {
    icon: require('../../assets/Profile_Transparent_Icon.png'),
    title: 'Edit Profile',
  },
  {
    icon: require('../../assets/Heart_Transparent_Icon.png'),
    title: 'Favorite Pokemon',
  },
  {
    icon: require('../../assets/LockIcon.png'),
    title: 'Logout',
  },
];

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={{ top: 50, zIndex: 2 }}
        source={require('../../assets/UserProfile.png')}
      />
      <View style={styles.outerLayer}>
        <Text
          style={{
            textAlign: 'center',
            color: '#495767',
            fontWeight: '500',
            fontSize: 18,
            paddingBottom: 10,
          }}
        >
          {user1.username}
        </Text>
        <View style={styles.innerLayer}>
          {SettingList.map((item, index) => (
            <View key={index} style={styles.settingList}>
              <View
                style={{
                  flexDirection: 'row',
                }}
              >
                <Image source={item.icon} style={{}} />
                <Text
                  style={{
                    marginLeft: 15,
                    color: '#495767',
                    fontWeight: '600',
                  }}
                >
                  {item.title}
                </Text>
              </View>

              <Image
                style={{ tintColor: 'gray' }}
                source={require('../../assets/Right_Icon.png')}
              />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
  },
  outerLayer: {
    flex: 1 / 2,
    backgroundColor: colors.primary,
    borderRadius: 16,
    width: '95%',
    height: '40%',
    paddingTop: 70,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  innerLayer: {
    flex: 1,
    backgroundColor: '#FBDD6E',
    borderRadius: 16,
    paddingTop: 30,
    paddingHorizontal: 15,
    width: '100%',
  },
  settingList: {
    flex: 1 / 2,
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'space-between',
  },
});
