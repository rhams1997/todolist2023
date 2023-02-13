import React from 'react';
import { Text,TouchableOpacity } from 'react-native';
import { styles } from './styles'; 

export function MyButton({title, ...rest}){
    return (
        <TouchableOpacity
            style={styles.button}
            {...rest}
        >
            <Text style={styles.buttonTask}>
                {title}
            </Text>
        </TouchableOpacity>
    );   
}