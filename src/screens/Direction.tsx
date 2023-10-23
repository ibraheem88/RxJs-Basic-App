import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useRxController } from 'rx-react-container';
import { directionController } from '../directionController';

//interface DirectionProps { }

const Direction = (props) => {
    const state = useRxController(directionController, props)
    const { current_direction, onUp, onDown, onRight, onLeft } = state
    console.log(current_direction)

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', backgroundColor: 'red', height: 200 }}>
                <View style={{ position: 'absolute', top: 0 }}><Button title='Up' onPress={onUp} /></View>
                <View style={{ position: 'absolute', top: 100 }}><Button title='Down' onPress={onDown} /></View>
                <View style={{ position: 'absolute', right: 100, top: 50 }}><Button title='Right' onPress={onRight} /></View>
                <View style={{ position: 'absolute', left: 100, top: 50 }}><Button title='Left' onPress={onLeft} /></View>
            </View>
            <Text style={{ alignSelf: 'center' }}>{current_direction}</Text>
        </View>
    );
};

export default Direction;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});
