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

class EmojiRenderProps extends Component {
  render(){
    const render = this.props.children;
    const {itemList, emojis, } = this.props;
    const wholeList = mapEmojiToListItems(itemList, emojis);
    return (
      <React.Fragment>
        {render(wholeList)}
      </React.Fragment>
    )
  }
}

EmojiRenderProps.propTypes = {
  children: PropTypes.func.isRequired,
  emojis: PropTypes.arrayOf(PropTypes.string).isRequired,
  itemList: PropTypes.arrayOf(PropTypes.string).isRequired
};


function mapEmojiToListItems(listItems, emojiList){
  return listItems.map( (listItem, listItemIndex) => {
    const emoji = emojiList[listItemIndex % emojiList.length];
    return {emoji, listItem }
  } );
}

export default DefaultEmojiList;
export {EmojiRenderProps};