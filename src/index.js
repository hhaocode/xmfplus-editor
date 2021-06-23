
import './styles/index.scss'
import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {Schema, DOMParser} from "prosemirror-model"
import {schema} from "prosemirror-schema-basic"
import {addListNodes} from "prosemirror-schema-list"

import { xmfplusPlugins } from './modules/index.js'

function XmfplusEditor (options) {
	if (!options.el) {
		throw new Error('el is must reuqired')
	}

	const mySchema = new Schema({
		nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
		marks: schema.spec.marks
	})

	const view = new EditorView(document.querySelector(options.el), {
		state: EditorState.create({
			doc: DOMParser.fromSchema(mySchema).parse(document.createElement('div')),
			plugins: xmfplusPlugins({schema: mySchema})
		})
	})
}

window.onload = function () {
	XmfplusEditor({el: '#editor'})
}
