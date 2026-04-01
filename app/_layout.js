import {Stack} from 'expo-router';


export default function Layout(){
    return (
        <Stack>
            <Stack.Screen name='index' options={{title: 'Main menu '}}/> 
            <Stack.Screen name='produto' options={{title: 'Produtos'}}/> 
        </Stack>
    );
}