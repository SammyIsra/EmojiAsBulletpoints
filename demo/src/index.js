import React, {Component} from 'react'
import {render} from 'react-dom'

import DefaultEmojiList, {EmojiRenderProps} from '../../src';

const emojis = ["🔥", "✔️", "🐔"];
const list = [
  "This is some fire",
  "Correct?",
  "Dinner",
  "BURN!",
  "Green Vee",
  "I lost count",
  "Is this the chicken one again?",
  "...oh"
]

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>emoji-as-bulletpoints Demo</h1>
        <h2>Default Emoji List:</h2>
        <DefaultEmojiList emojis={emojis} itemList={list} />
        <h2>Render Props Emoji List:</h2>
        <EmojiRenderProps emojis={emojis} itemList={list}>
        { (wholeList) => (
          <ul style={{listStyleType: "none"}}>
          {wholeList.map(({emoji, listItem}) => (
            <li>{emoji} {listItem}</li>
          ))}
          </ul>
          //<p>{wholeList[0].emoji} {wholeList[0].listItem}</p>
        )}</EmojiRenderProps>
        
      </div>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'))
