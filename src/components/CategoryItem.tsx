import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { category } from '../types/Tasks';


interface CategoryItemProps {
  item: category;
  handleSelectCategory: (title: string) => void;
  selectedCategory: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ item, handleSelectCategory, selectedCategory }) => {
  const isSelected = item.title === selectedCategory;

  return (
    <TouchableOpacity
      onPress={() => handleSelectCategory(item.title)}
      style={[styles.container, isSelected && styles.selectedContainer]}
    >
      <Text style={[styles.text, isSelected && styles.selectedText]}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedContainer: {
    borderColor: 'blue', // cor de destaque para categoria selecionada
  },
  text: {
    fontSize: 16,
  },
  selectedText: {
    fontWeight: 'bold', // estilo de texto para categoria selecionada
  },
});

export default CategoryItem;
