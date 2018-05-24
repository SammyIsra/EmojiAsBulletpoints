# emoji-as-bulletpoints

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## You can use this like so:

Say you have this list of items:
```js
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
```

Then you would want to write your React component like this:
```jsx
<DefaultEmojiList emojis={emojis} itemList={list} />
```

Or, if you would rather do it render-props style (by styling your own list):
```jsx
<EmojiRenderProps emojis={emojis} itemList={list}>
{ (wholeList) => (
    <ul style={{listStyleType: "none"}}>
    { wholeList.map(({emoji, listItem}) => (
        <li>{emoji} {listItem}</li>
    ))}
    </ul>
)}
</EmojiRenderProps>
```
Note that `wholeList` is an array of objects that look like so:
```js
{
    emoji: String,   //The emoji for that list item
    listItem: String //Text of the list item
}
```
And it will end up looking like this: 

![Example of emoji-as-bulletpoints](https://i.imgur.com/dzqt5W6.png)



[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
