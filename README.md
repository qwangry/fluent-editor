# FluentEditor

FluentEditor is a rich text editor based on Quill 2.0, which extends Quill with rich modules and formats such as tables, images, hyperlinks, copy and paste, inserting emoticons, file uploads, @ reminders, and diagonal menu. It is framework-independent, compatible with Quill API, and compatible with Quill module ecosystem.

## Features

FluentEditor has the following features and advantages:

- Contains more than 30 rich modules and formats, in addition to the 21 built-in formats in Quill, it also extends and enhances 15 modules and formats such as tables, images, hyperlinks, word counts, emoticons, file uploads, copy and paste, @ reminders, slash shortcut menus, screenshots, etc
- Powerful table function, supports inserting tables with specified rows and columns in the toolbar, table row height/column width dragging, inserting rows/columns, deleting rows/columns, merging/splitting cells, and other rich table operations
- It is not related to frameworks and can be used in multiple frameworks such as Vue, React, Angular, etc
- Compatible with all Quill APIs, Quill ecosystem modules and formats

## Quick Start

Install FluentEditor:

```shell
npm i @opentiny/fluent-editor
```

Write html：

```html
<div id="editor">
  <p>Hello FluentEditor!</p>
</div>
```

Import style:

```css
@import '@opentiny/fluent-editor/dist/style.css'
```

Initialize the FluentEditor editor:

```javascript
import FluentEditor from '@opentiny/fluent-editor'

const editor = new FluentEditor('#editor', {
  theme: 'snow'
})
```

## Development

```shell
git clone git@github.com:opentiny/fluent-editor.git
cd fluent-editor
pnpm i
pnpm dev
```

Open your browser and visit: [http://localhost:5173/fluent-editor/](http://localhost:5173/fluent-editor/)

## ❤️ Credits

Thanks to:

- The [quill](https://github.com/slab/quill) project, which is an API-driven rich text editor with a modular architecture, good scalability, ease of use, and cross-platform support. FluentEditor extends and enhances a large number of modules and formats such as tables, images, and hyperlinks based on Quill.
- The [quill-better-table](https://github.com/soccerloway/quill-better-table) project, which enhances the built-in table module of Quill and adds rich functionality. FluentEditor's table operation functionality is based on quill-better-table.
- The [quill-emoji](https://github.com/contentco/quill-emoji) project, which is a Quill module for emoji. FluentEditor's insert emoji function is based on quill-emoji.
- The [quill-blot-formatter](https://github.com/Fandom-OSS/quill-blot-formatter) project, which is a Quill module for resizing images and videos. FluentEditor's image scaling function is based on quill-blot-formatter.