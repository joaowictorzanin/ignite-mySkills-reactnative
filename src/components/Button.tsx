import React from "react"
import { Text, TouchableOpacity, StyleSheet } from "react-native"

interface ButtonProps{
    handleAddNewSkill: () => void; 
}

export function Button({handleAddNewSkill}: ButtonProps){
    return(
            <TouchableOpacity 
                style={styles.button}
                onPress={handleAddNewSkill}
            >
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#a370f7',
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginTop: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText:{
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
})