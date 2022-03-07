import React, { FC, useState } from 'react';
import {
    Button,
    FlatList,
    Modal,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { styles } from './styles';
import { TextList } from './types';

const App: FC = () => {
    const [text, setText] = useState<string>('');
    const [textList, setTextList] = useState<TextList[]>([]);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<TextList>({
        id: 0,
        value: ''
    });

    const handleOnChangeInput = (value: string) => {
        setText(value);
    };

    const addItem = () => {
        if (text) {
            setTextList([
                ...textList,
                {
                    id: textList.length + 1,
                    value: text
                }
            ]);
            setText('');
        }
    };

    const handleDeleteItem = (selectedItem: TextList) => {
        const newList = textList.filter(item => item.id !== selectedItem.id);
        setSelectedItem({ id: 0, value: '' });
        setTextList(newList);
        setModalVisible(!modalVisible);
    };

    const onHandleModal = (item: TextList) => {
        setSelectedItem(item);
        setModalVisible(!modalVisible);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerInput}>
                <TextInput
                    placeholder='Type here...'
                    autoCorrect={false}
                    autoFocus={true}
                    style={styles.textInput}
                    placeholderTextColor='#b18fcf'
                    value={text}
                    onChangeText={handleOnChangeInput}
                />
                <Button title='Add' color='#c7efcf' onPress={() => addItem()} />
            </View>
            <View style={styles.containerList}>
                <FlatList
                    data={textList}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => onHandleModal(item)}>
                            <Text style={styles.textList}>
                                {item.id} - {item.value}
                            </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
            <Modal
                animationType='slide'
                visible={modalVisible}
                transparent={true}
            >
                <View style={styles.modalContainerContent}>
                    <View style={styles.modalTitle}>
                        <Text>Description</Text>
                    </View>
                    <View style={styles.modalContent}>
                        <Text>Do you want to delete this item?</Text>
                        <Text style={styles.modalContentText}>
                            {selectedItem?.id} - {selectedItem?.value}
                        </Text>
                    </View>
                    <View style={styles.modalButton}>
                        <Button
                            title='Yes'
                            color='#c7efcf'
                            onPress={() => handleDeleteItem(selectedItem)}
                        />
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default App;
