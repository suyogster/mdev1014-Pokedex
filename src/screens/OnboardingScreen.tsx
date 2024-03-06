import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../theme/theme';
import Message1 from '../components/onboard/Message1';
import Message2 from '../components/onboard/Message2';
import Message3 from '../components/onboard/Message3';

export default function OnboardingScreen(props: any) {
  const [page, setPage] = useState<number>(0);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {page === 0 && <Message1 />}
        {page === 1 && <Message2 />}
        {page === 2 && <Message3 />}

        {page !== 2 && (
          <View style={styles.dotContainer}>
            <View
              style={[
                styles.dot,
                page === 0
                  ? { borderColor: '#495767' }
                  : { borderColor: '#827373' },
              ]}
            />
            <View
              style={[
                styles.dot,
                page === 1
                  ? { borderColor: '#495767' }
                  : { borderColor: '#827373' },
              ]}
            />
            <View
              style={[
                styles.dot,
                page === 2
                  ? { borderColor: '#495767' }
                  : { borderColor: '#827373' },
              ]}
            />
          </View>
        )}

        {page === 2 ? (
          <View style={styles.lastRowButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.navigation.navigate('Home')}
            >
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: 'white',
                }}
              >
                GET STARTED
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.lastRow}>
            {page == 0 ? (
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Home')}
              >
                <Text style={styles.onboardTitle}>Skip</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setPage(page - 1)}>
                <Text style={styles.onboardTitle}>Previous</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => setPage(page + 1)}>
              <Text style={styles.onboardTitle}>Next</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.onboard,
  },
  content: {
    flex: 1,
    marginTop: 180,
  },
  onboardTitle: {
    fontSize: 26,
    fontWeight: '700',
  },
  onboardContent: {
    fontSize: 16,
    fontWeight: '400',
  },
  lastRow: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  lastRowButton: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    //change for android layout
    marginBottom: Platform.OS == "ios" ? 0 : 20,
  },
  button: {
    backgroundColor: '#F57D31',
    borderRadius: 20,
    height: 50,
    minWidth: '80%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    //change for android layout
    marginBottom: Platform.OS == "ios" ? 0 : 20,
  },
  dot: {
    borderWidth: 4,
    borderRadius: 50,
    marginHorizontal: 2,
    maxHeight: 3,
    //change for android
    marginTop: Platform.OS == "ios" ? 0 : 40,
  },
});
