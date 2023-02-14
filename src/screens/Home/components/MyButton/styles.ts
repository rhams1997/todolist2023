import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    buttonTask:{
      backgroundColor: 'green',
      padding: 15,
      margin: 20,
      borderRadius: 7,
      alignItems: 'center',
    },

    textTask:{
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    }
});

//Platform.OS permite testar qual sistema operacional está ativo, para relizar configurações especificas de ambiente