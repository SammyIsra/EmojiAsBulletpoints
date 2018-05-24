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

You can use it like this:
```jsx
<DefaultEmojiList emojis={emojis} itemList={list} />
```
Or if you want more control on how you render your list, you can use it render-prop style:
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
And your list will look like this:

![Example of emoji-as-bulletpoints](https://i.imgur.com/dzqt5W6.png)



[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
