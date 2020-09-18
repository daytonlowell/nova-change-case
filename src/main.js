const camel = require('just-camel-case')
const kebab = require('just-kebab-case')
const snake = require('just-snake-case')
const pascal = require('just-pascal-case')

nova.commands.register("camel", (editor) => {
    console.log(Object.keys(editor).length)
})

nova.commands.register("kebab", (editor) => {
    console.log(Object.keys(editor).length)
})

nova.commands.register("snake", (editor) => {
    console.log(Object.keys(editor).length)
})

nova.commands.register("pascal", (editor) => {
    console.log(Object.keys(editor).length)
})