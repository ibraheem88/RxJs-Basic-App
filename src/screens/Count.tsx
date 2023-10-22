import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useRxController } from 'rx-react-container';
import { controller } from '../contoller';


const Count = (props) => {

    const state = useRxController(controller, props)
    const { count, step, onAdd, onMinus, onAddStep, onMinusStep } = state

    return (
        <View style={styles.container}>
            <View>
                <Text>Step</Text>
                <Text>{step}</Text>
                <Button title='+' onPress={onAddStep} />
                <Button title='-' onPress={onMinusStep} />
            </View>
            <View >
                <Text>Count</Text>
                <Text>{count}</Text>
                <Button title='+' onPress={onAdd} />
                <Button title='-' onPress={onMinus} />
            </View>
        </View>
    );
};

export default Count;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flex: 1
    }
});
