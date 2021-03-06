import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';



export const Container = styled.View`
flex: 1;
background-color: #5691c8;
padding-top: 30px;
`;

export const Title = styled.Text`
font-size: 25px; 
margin-left: 15px;
color: #fff;

`;

export const Input = styled.TextInput`
    height: 40px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 5px;
    background-color: #fff;


`;

export const Botao = styled.TouchableOpacity`
    background-color: #fff;
    height: 40px;
    border-radius: 5px;
    padding: 5px;
`;

export const BotaoText = styled.Text`
    color: #000;
    text-align: center;
    font-size:23px;
`;

export const CenterView = styled.View`
    justify-content: space-around;
    align-items: center;
    flex-direction: row
`;

export const List = styled.FlatList`
    margin-top: 20px;
`;