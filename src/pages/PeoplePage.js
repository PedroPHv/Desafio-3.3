import React from 'react';
import { View } from 'react-native';
import PeopleList from '../component/PeopleList'
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://hp-api.herokuapp.com/api/characters'
});

export default class PeoplePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      harry: []
    }
  }
  
  async componentDidMount() {
    const response = await api.get('http://hp-api.herokuapp.com/api/characters');
    this.setState({ harry: response.data });
  }  

  render(){
   
    return (
        <View>
       <PeopleList harry={this.state.harry}
            onPressItem={(hp) => {
              this.props.navigation.navigate('Detalhe da Pessoa', {"hp":hp})
              }} />                   
        </View>
    );
  }
} 