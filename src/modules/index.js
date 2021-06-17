import {keymap} from "prosemirror-keymap"
import {history} from "prosemirror-history"
import {baseKeymap} from "prosemirror-commands"
import {Plugin} from "prosemirror-state"
import {dropCursor} from "prosemirror-dropcursor"
import {gapCursor} from "prosemirror-gapcursor"
import {menuBar} from "prosemirror-menu"

import {buildInputRules} from "./inputrules"

export {
	buildInputRules
}

export function xmfplusPlugins (options) {

	let res = [
		buildInputRules(options.schema),
		keymap(baseKeymap),
		dropCursor(),
    gapCursor()
	]


	return res.concat(new Plugin({
		props: {
      attributes: {class: "xmfplus-ProseMirror-style"}
    }
	}));
};

