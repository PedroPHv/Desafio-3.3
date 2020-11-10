import React from 'react'
import {View, Text} from 'react-native'

export default class PeopleDetailsPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            "hp": props.route.params.hp
        }
    }
    
    render(){
        return(
            <View>
              <h1>Informações dos  personagens<span class="badge badge-secondary"></span></h1>
           
                <h1>Nome </h1>
                <Text>{this.state.hp.name}</Text>
                <h1>Especie</h1>
                <Text>{this.state.hp.species}</Text>
                <h1>Gênero</h1>
                <Text>{this.state.hp.gender}</Text>
                <h1>Casa</h1>
                <Text>{this.state.hp.house}</Text>
                <h1>Data de nascimento </h1>
                <Text>{this.state.hp.dateOfBirth}</Text>
                <h1>Ano de nascimento</h1>
                <Text>{this.state.hp.yearOfBirth}</Text>
                <h1>Ancestralidade</h1>
                <Text>{this.state.hp.ancestry}</Text>
                <h1>Cor dos olhos</h1>
                <Text>{this.state.hp.eyeColour}</Text>
                
            </View>
            
        )
        
    }
    
}





