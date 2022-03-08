import React, { FC } from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './styles';

interface InputProps {
    value: string;
    placeholder: string;
    handleOnChangeText: (txt: string) => void;
}

const Input: FC<InputProps> = ({ value, placeholder, handleOnChangeText }) => {
    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={text => handleOnChangeText(text)}
            autoCorrect={false}
            autoFocus={true}
            placeholderTextColor='#b18fcf'
            style={styles.textInput}
        />
    );
};

export default Input;
