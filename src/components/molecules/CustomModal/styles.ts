import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    modalContainerContent: {
        backgroundColor: '#ccc',
        borderRadius: 10,
        elevation: 5,
        width: '80%',
        height: '30%',
        justifyContent: 'center',
        marginHorizontal: 40,
        marginTop: 200
    },
    modalTitle: {
        fontSize: 14,
        color: '#212121',
        padding: 25
    },
    modalContent: {
        paddingHorizontal: 25
    },
    modalContentText: {
        fontSize: 14,
        color: '#212121',
        fontWeight: 'bold',
        marginVertical: 10
    },
    modalButton: {
        marginVertical: 10,
        paddingHorizontal: 25
    }
});
