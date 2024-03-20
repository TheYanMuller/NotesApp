import { StyleShet, Text, View, Alert } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import { Task } from "../types/Tasks";
import { categories } from "../utils/data/todos";

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
                text: "Nop"
                style: "cancel"
            },
            {text: "Yup", onPress: () => handleRemoveTask(task.id)},
        ]);
    };

    const leftAction = () => {
        return(
            <View>
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
            <View style={ }>
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
            <View>
                <View
                    style={{
                        
                    }}
                />
            </View>
        </Swipeable>
    );
}