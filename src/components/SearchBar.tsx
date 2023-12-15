import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

/*This is a search component use for displaying the desired pokemon in the main screen */
/*It is a simple input component that uses the TextInput component */

interface SearchBarProps {
  onType: (query: string) => void;
}

export default function SearchBar(props: SearchBarProps) {
  const [query, setQuery] = useState<string>('');

  const handleOnClear = () => {
    setQuery('');
  };

  const { onType } = props;
  return (
    <View style={styles.container}>
      <Image
        style={styles.searchIcon}
        source={require('../../assets/SearchIcon.png')}
      />
      <TextInput
        style={styles.textInput}
        value={query}
        placeholder='Search Pokemon, Move, etc...'
        onChangeText={(value) => setQuery(value)}
      />
      <TouchableOpacity onPress={() => handleOnClear()}>
        <Image
          style={styles.cancelIcon}
          source={require('../../assets/CloseIcon.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#FBDD6E',
    borderRadius: 16,
    minHeight: 40,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    alignContent: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: '100%',
    width: '87%',
    color: 'black',
    marginLeft: 5,
  },
  searchIcon: { height: 20, width: 20 },
  cancelIcon: { height: 20, width: 20, alignSelf: 'flex-end' },
});
