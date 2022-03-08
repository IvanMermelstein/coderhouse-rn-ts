import React, { FC } from 'react';
import { Text } from 'react-native';
import { TextList } from '../../../types';
import { styles } from './styles';

interface ListItemProps {
    item: TextList;
}

const ListItem: FC<ListItemProps> = ({ item }) => {
    return <Text style={styles.textList}>- {item.value}</Text>;
};

export default ListItem;
