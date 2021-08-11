
import './styles/page.scss'
import './styles/editor.scss'
import './styles/menu.scss'
import './styles/setup.scss'

// import XmfplusEditor from './editor'

// export default XmfplusEditor
// import "prosemirror-example-setup/style/style.css"
import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {Schema, DOMParser} from "prosemirror-model"
import {schema} from "prosemirror-schema-basic"
import {addListNodes} from "prosemirror-schema-list"
// import {exampleSetup} from "prosemirror-example-setup"
import { setup } from './editor'

const mySchema = new Schema({
  nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
  marks: schema.spec.marks
})

window.view = new EditorView(document.querySelector("#editor"), {
  state: EditorState.create({
    doc: DOMParser.fromSchema(mySchema).parse(document.createElement('div')),
    plugins: setup({schema: mySchema})
  })
})