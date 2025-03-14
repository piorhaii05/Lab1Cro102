import React from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

const WrapInput = ({
  title,
  withColon,
  required,
  error,
  description,
  isFocus,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {title}
      </Text>

      <View
        style={[
          styles.inputContainer,
          isFocus && styles.focusedInput,
          error && styles.errorInput,
        ]}
      >
        <TextInput style={styles.input} {...rest} />  
      </View>

      {error ? <Text style={styles.errorText}>Error</Text> : <Text style={styles.description}>{description}</Text>}
    </View>
  );
};

const App = () => {
  return (
    <View style={{ padding: 20 }}>
      <WrapInput title="Tittle" placeholder="Place holder" />

      <WrapInput title="Tittle" isFocus={true} placeholder="Place holder" />

      <WrapInput title="Tittle" placeholder="Place holder" value="Place holder" />

      <WrapInput title="Tittle" error={true} placeholder="Place holder" description={"Giá trị lỗi"} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  required: {
    color: 'red',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  focusedInput: {
    borderColor: '#00AEEF',
    backgroundColor: '#E8F7FF',
  },
  errorInput: {
    borderColor: 'red',
    backgroundColor: '#FDE8E8',
  },
  errorIcon: {
    width: 20,
    height: 20,
    tintColor: 'red',
    marginLeft: 8,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
  description: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});
