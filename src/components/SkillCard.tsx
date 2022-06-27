import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native"

interface SkillCardProps{
    skill: {
        id: string;
        name: string;
    },
    handleRemoveSkill: (id: string) => void;

}

export function SkillCard({skill, handleRemoveSkill} : SkillCardProps){
    return (
        <TouchableOpacity style={styles.buttonSkill} onPress={() => handleRemoveSkill(skill.id)}>
            <Text style={styles.textSkill}>
                {skill.name}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill:{
        backgroundColor: '#1f1e25',
        padding: 15,
        marginBottom: 15,
        borderRadius: 50,
        alignItems: 'center',
    },
    textSkill:{
        color: '#ffffff',
        fontSize: 22,
        fontWeight: 'bold',

    },
})