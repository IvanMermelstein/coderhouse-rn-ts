import React, { FC } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { TextList } from '../../../types';
import ListItem from '../../molecules/ListItem';
import { styles } from './styles';

interface ListProps {
    textList: TextList[];
    onHandleModal: (item: TextList) => void;
}

const List: FC<ListProps> = ({ textList, onHandleModal }) => {
    return (
        <View style={styles.containerList}>
            <FlatList
                data={textList}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => onHandleModal(item)}>
                        <ListItem item={item} />
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

export default List;
