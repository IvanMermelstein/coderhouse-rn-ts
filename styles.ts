import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
        flex: 1,
        backgroundColor: '#333745',
    },
    containerInput: {
		padding: 15,
		flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    containerList: {
        paddingHorizontal: 25
    },
    textList: {
        fontSize: 14,
        color: '#c7efcf',
        marginBottom: 10
    },
	textInput: {
		borderColor: '#b18fcf',
		borderBottomWidth: 1,
		marginBottom: 10,
		width: '70%',
		height: 40,
		fontSize: 14,
		color: '#978897'
    },
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
    },
})