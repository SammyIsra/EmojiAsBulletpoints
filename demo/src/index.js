import React, {Component} from 'react'
import {render} from 'react-dom'

import EmojiList from '../../src';

const emojis = ["🔥", "✔️", "🐔"];
const list = [
  "This is some fire",
  "Correct?",
  "Dinner",
  "BURN!",
  "Green Vee"
]

class Demo extends Component {
  render() {
    return <div>
      <h1>emoji-as-bulletpoints Demo</h1>
      <EmojiList emojis={emojis} itemList={list} />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
