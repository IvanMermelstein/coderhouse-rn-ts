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
import { TextList } from '../types';
import Input from './components/atoms/Input';
import CustomModal from './components/molecules/CustomModal';

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
                <Input
                    value={text}
                    placeholder={'Type here'}
                    handleOnChangeText={handleOnChangeInput}
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
            <CustomModal
                title='Titulo'
                description='Do you want to delete this item?'
                selectedItem={selectedItem}
                buttonText='Yes'
                onHandlehandleDeleteItem={handleDeleteItem}
                modalVisible={modalVisible}
            />
        </SafeAreaView>
    );
};

export default App;
