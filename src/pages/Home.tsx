import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface SkillData{
    id: string;
    name: string;
}

export function Home(){
    const [newSkill, setNewSkill] = useState('')
    const [mySkills, setMySkills] = useState<SkillData[]>([])
    const [getting, setGetting] = useState('')

    function handleAddNewSkill(){
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }
        setMySkills([...mySkills, data])
    }

    function handleRemoveSkill(id: string){
        setMySkills(mySkills.filter(skill => skill.id !== id))
    }

    useEffect(() =>{
        const currentHour = new Date().getHours();

        if(currentHour < 12){
            setGetting('Good Morning')
        }
        else if(currentHour >= 12 && currentHour < 18){
            setGetting('Good Afternoon')
        }
        else{
            setGetting('Good Evening')
        }
    }, [])

    return(
        <View style={styles.container}>
            <Text style={styles.title}> Welcome, João! </Text>
            <Text style={styles.getting}> {getting} </Text>
            <TextInput 
              style={styles.input} 
              placeholder='New Skill' 
              placeholderTextColor='#555'
              onChangeText={setNewSkill}
            />
            <Button
                handleAddNewSkill={handleAddNewSkill}
            />
            <Text style={[styles.title, {marginVertical: 30,}]}>My Skills</Text>
            
            <FlatList
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <SkillCard 
                        skill={item}
                        handleRemoveSkill={handleRemoveSkill}
                    />
                )}
            />

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 80,
        
    },
    title:{
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input:{
        backgroundColor: '#1f1e25',
        color: '#ffffff',
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginTop: 30,
    },
    getting:{
        color: '#ffffff',
    }
})