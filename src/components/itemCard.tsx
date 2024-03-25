import { StyleSheet, Text, View, Alert } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import { Task } from "../types/Tasks";
import { categories } from "../utils/data";

interface Props {
    task: Task;
    handleRemoveTask: (id: string)=> void;
    handleDoneTask: (id: string)=> void;
}

const itemCard = ({task, handleRemoveTask, handleDoneTask }: Props)=>{
    const category = categories.filter((c)=> c.value === task.category);

    const handleDelete = () => {
        Alert.alert("Tarefas", "Tem certeja que deseja excluir essa tarefa?", [
            {
                text: "Nop",
                style: "cancel"
            },
            {text: "Yup", onPress: () => handleRemoveTask(task.id)},
        ]);
    };

    const leftAction = () => {
        return(
            <View style ={styles.swipeLeft}>
                <MaterialIcons
                    name="done"
                    size={20}
                    color="#fff"
                    onPress={()=> handleDoneTask(task.id)}
                />   
            </View>
        );
    };

    const rightAction = () => {
        return(
            <View style={styles.swipeRight}>
                <MaterialIcons
                    name="delete"
                    size={20}
                    color="#fff"
                    onPress={handleDelete}
                />   
            </View>
        );
    };

    return(
        <Swipeable renderLeftActions={leftAction} renderRightActions={rightAction}>
            <View style={styles.container}>
                <View
                    style={{
                        borderStyle: "solid",
                        height: "100%",
                        borderLeftWidth: 6,
                        borderColor: category[0].color,
                        marginRight: 10,
                    }}
                />
            </View>
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    swipeLeft:{
        
    },
    swipeRight:{

    },
    container:{

    }
})

export default itemCard;