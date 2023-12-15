import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../theme/theme';

interface Props {
  label: String;
  secureTextEntry: boolean;
}

const defaultProps: Partial<Props> = {
  secureTextEntry: false,
};

export default function CustomTextInput(props: Props) {
  const { label, secureTextEntry } = props;
  return (
    <View style={{ marginVertical: 8 }}>
      <Text>{label}</Text>
      <TextInput secureTextEntry={secureTextEntry} style={styles.textInput} />
    </View>
  );
}

CustomTextInput.defaultProps = defaultProps;

const styles = StyleSheet.create({
  textInput: {
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: colors.textBox,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    height: 50,
    minWidth: '80%',
    paddingHorizontal: 10,
  },
});
