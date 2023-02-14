import React from 'react';
import { Text,TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles'; 

interface ButtonProps extends TouchableOpacityProps{
    title: string;

}

export function MyButton({title, ...rest}: ButtonProps){
    return (
        <TouchableOpacity 
            style={styles.input}
            {...rest}
        >
            <Text style={styles.buttonTask}>
                {title}
            </Text>
        </TouchableOpacity>
    );   
}