import {keymap} from "prosemirror-keymap"
import {history} from "prosemirror-history"
import {baseKeymap} from "prosemirror-commands"
import {Plugin} from "prosemirror-state"
import {dropCursor} from "prosemirror-dropcursor"
import {gapCursor} from "prosemirror-gapcursor"
import {menuBar} from "../plugins/menu"

import {buildMenuItems} from "./menu"
import {buildInputRules} from "./inputrules"
import {buildKeymap} from "./keymap"

export function setup (options) {
  /*
   插件：
   1: 输入规则
   2: 快捷键

  
  */

  let plugins = [
    buildInputRules(options.schema),
    keymap(buildKeymap(options.schema, options.mapKeys)),
    keymap(baseKeymap),
    dropCursor(),
    gapCursor()
  ]
  // 初始化插件

  // 菜单项 初始化

  if (options.menuBar !== false) {
    plugins.push(menuBar({floating: false, // options.floatingMenu !== false,
      content: options.menuContent || buildMenuItems(options.schema).fullMenu}))
  }
    
  // 历史
  if (options.history !== false) {
    plugins.push(history())
  }

  return plugins.concat(new Plugin({
    props: {
      attributes: { class: 'xmfplus-editor' }
    }
  }))
}
