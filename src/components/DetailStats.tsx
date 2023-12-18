import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

/*This component is also used in the pokemon details screen for describing the stats of each pokemon */
/* A custom progress bar is implemented in order to visualize the strengths and abilities */

interface DetailStatsProp {
  attack: number;
  hp: number;
  speed: number;
}

const descriptionKeys = ['Attack', 'HP', 'Speed'];

function renderDescription(item: string, progress: number) {
  return (
    <View style={[styles.progressBar, { width: '100%', height: '20%' }]}>
      <View
        style={[
          styles.progress,
          {
            width: `${Math.min(100, Math.max(0, progress))}%`,
          },
        ]}
      ></View>
    </View>
  );
}

export default function DetailStats(props: DetailStatsProp) {
  return (
    <View style={styles.container}>
      {descriptionKeys.map((item, index) => (
        <View key={index} style={styles.decriptionSection}>
          <Text style={styles.keyText}>{descriptionKeys[index]}</Text>
          {renderDescription(
            item,
            props[item.toLowerCase() as keyof DetailStatsProp]
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  decriptionSection: {
    flexDirection: 'row',
    width: '70%',
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  keyText: {
    color: '#6F7A87',
    fontWeight: '500',
    fontSize: 16,
    marginRight: 20,
  },
  progressBar: {
    borderWidth: 1,
    borderColor: '#6F7A87',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    color: '#FFF',
  },
});
