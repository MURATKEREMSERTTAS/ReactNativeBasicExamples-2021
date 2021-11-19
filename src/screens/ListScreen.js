import React from "react";
import {View,Text,StyleSheet,FlatList} from 'react-native';

const ListScreen = () =>{

    const friends = [
        {name:'Friend #1',key: 'Age 20'},
        {name:'Friend #2',key: 'Age 20'},
        {name:'Friend #3',key: 'Age 20'},
        {name:'Friend #4',key: 'Age 20'},
        {name:'Friend #5',key: 'Age 20'},
        {name:'Friend #6',key: 'Age 20'},
        {name:'Friend #7',key: 'Age 20'},
        {name:'Friend #8',key: 'Age 20'},
        {name:'Friend #9',key: 'Age 20'}
    ];
    
    return <FlatList
            showsVerticalScrollIndicator
            keyExtractor = {friend => friend.name} 
            data={friends}
            renderItem={ (item)=> {
                return <Text style={styles.textStyle}>{item.item.name}-{item.item.key}</Text>
                }
        }
    />
}

const styles = StyleSheet.create({
    textStyle : {
        marginVertical : 50
    }
});

export default ListScreen;