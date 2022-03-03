import React, { FC } from 'react';
import { Button, TextInput, View } from 'react-native';
import { styles } from './styles';

const App: FC = () => {
	return (
		<View style={styles.container}>
			<TextInput
				placeholder='Type here...'
				autoCorrect={false}
				autoFocus={true}
				style={styles.textInput}
				placeholderTextColor='#b18fcf'
			/>
			<Button
				title='Add'
				color='#c7efcf'
				onPress={() => null}
			/>
		</View>
	);
};

export default App;
