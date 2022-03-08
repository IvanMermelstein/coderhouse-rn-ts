import React, { FC } from 'react';
import { Button, Modal, Text, View } from 'react-native';
import { TextList } from '../../../../types';
import { styles } from './styles';

interface CustomModalProps {
    title: string;
    description: string;
    selectedItem: TextList;
    buttonText: string;
    onHandlehandleDeleteItem: (item: TextList) => void;
    modalVisible: boolean;
}

const CustomModal: FC<CustomModalProps> = ({
    title,
    description,
    selectedItem,
    buttonText,
    onHandlehandleDeleteItem,
    modalVisible
}) => {
    return (
        <Modal animationType='slide' visible={modalVisible} transparent={true}>
            <View style={styles.modalContainerContent}>
                <View style={styles.modalTitle}>
                    <Text>{title}</Text>
                </View>
                <View style={styles.modalContent}>
                    <Text>{description}</Text>
                    <Text style={styles.modalContentText}>
                        {selectedItem?.id} - {selectedItem?.value}
                    </Text>
                </View>
                <View style={styles.modalButton}>
                    <Button title={buttonText} color='#c7efcf' onPress={() => onHandlehandleDeleteItem(selectedItem)} />
                </View>
            </View>
        </Modal>
    );
};

export default CustomModal;
