import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from "../contexts/UserContext";
import { Task } from "react-native";

const Home = () => {
    const { user } = useContext(UserContext);
    const [open, setOpen] = useState(false);
    const [categoryValue, setCategoryValue] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [taskInput, setTaskInput] = useState("");
    const [taskList, setTaskList] = useState<Task[]>([]);
    const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

    
    const storeTasks = async () => {
        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(taskList));
            console.log("Tarefas salvas com sucesso!");
        } catch (error) {
            console.error("Erro ao salvar tarefas: ", error);
        }
    };

    return (
        <View>
            
        </View>
    );
};

export default Home;
