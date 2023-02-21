import React, { Component } from 'react'
import { options } from '../API/api';

export default class Monsters extends Component {
  state = {
    optionValue: 'Frost Drake',
    arrayMonster: [],
    arrayLoot: [],
    arrayItems: [],
  }

  componentDidMount(){
    this.setState({
      arrayMonster: options,
    })
  }

  findLoot = () => {
    const { optionValue, arrayMonster } = this.state;
    const searchItem = arrayMonster.filter((item) => item.name.includes(optionValue));
    this.setState({
      arrayLoot: searchItem,
    })
    console.log(searchItem.items)
  }

  
  render() {
    const { optionValue, arrayMonster, arrayLoot } = this.state;
    console.log(optionValue);
    return (
      <>
      <div>Creatures</div>
      <select onChange={ (e) => this.setState({optionValue: e.target.value})}>
        { arrayMonster.map((creature) =>  
             <option value={ creature.name }>
                { creature.name  }
            </option> 
             )}
      </select>
      <button onClick={ this.findLoot }>Find items</button>
      { arrayLoot.map((item, i) => (
        <>
        <div>{ item.name }</div>
        <div>{ item.items.item }</div>
        </>
      ))}
      </>
    )
  }
}
