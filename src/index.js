import React, {Component} from 'react'
import PropTypes from "prop-types";

class DefaultEmojiList extends Component {
  render() {
    const {itemList, emojis} = this.props;
    const emojiListLength = emojis.length;
    console.log(this.props);
    return (
      <ul style={{listStyleType: "none"}}>
        {itemList.map((listItem, listItemIndex)=>{
          const emojiLoc = listItemIndex % emojiListLength;
          return <li>{emojis[emojiLoc]} {listItem}</li>;
        })}
      </ul>
    );
  }
}

DefaultEmojiList.propTypes = {
  emojis: PropTypes.arrayOf(PropTypes.string).isRequired,
  itemList: PropTypes.arrayOf(PropTypes.string).isRequired
}


export default DefaultEmojiList;