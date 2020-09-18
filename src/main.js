const camel = require('just-camel-case')
const kebab = require('just-kebab-case')
const snake = require('just-snake-case')
const pascal = require('just-pascal-case')

function format(editor, formatter) {
    editor.edit(e => {
        for (const range of editor.selectedRanges) {
            const text = editor.getTextInRange(range)
            e.replace(range, formatter(text))
        }
    })
}

nova.commands.register("camel", editor => format(editor, camel))
nova.commands.register("kebab", editor => format(editor, kebab))
nova.commands.register("snake", editor => format(editor, snake))
nova.commands.register("pascal", editor => format(editor, pascal))