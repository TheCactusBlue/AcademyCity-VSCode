const palette = {
	background: '#2a2838',
	background2: '#262433',
	background3: '#363450',
	background4: '#2b2a35',
	background5: '#201D2B',
	background6: '#1D1A27',
	
	foreground: '#eeffff',
	comments: '#eeffff88',

	keywords: '#7599e6',
	functions: '#5ebae6',
	strings: '#1fdbac',
	types: '#f0b82b',
	literals: '#e02d60',
	operators: '#8a75e6',
};

export const theme = {
	name: "Academy City",
	type: "dark",
	colors: {
		"sideBar.background": palette.background2,
		'statusBar.background': palette.background5,
		'editorGroupHeader.tabsBackground': palette.background5,
		"editorPane.background": palette.background6,
		"editorWidget.border": palette.background3,
		"focusBorder": palette.background3,
		"sideBar.border": palette.background3,

		"activityBar.background": palette.background,
		"activityBar.activeBackground": palette.background2,
		"activityBar.activeBorder": palette.functions,

		"button.background": palette.functions,
		"button.foreground": "#212121",

		"list.hoverBackground": palette.background3,
		"list.focusBackground": palette.background3,
		"list.activeSelectionBackground": palette.background3,
		"list.inactiveSelectionBackground": palette.background4,

		"editor.background": palette.background,
		'editorHoverWidget.background': palette.background,
		"editorSuggestWidget.background": palette.background2,

		"editor.foreground": palette.foreground,
		"editorLineNumber.foreground": '#eeffff44',

		"editorGutter.addedBackground": palette.strings + "de",
		"editorGutter.modifiedBackground": palette.functions + "de",
		"editorCutter.deletedBackground": palette.literals + "de",

		"quickInput.background": palette.background5,

		"input.background": palette.background5,

		"dropdown.background": palette.background6,

		'tab.inactiveBackground': palette.background2,
		'tab.activeBorder': palette.functions,
		'tab.hoverBackground': palette.background3,

		"notifications.background": palette.background5,
		"notifications.hoverBackground": palette.background5,

		"activityBarBadge.background": palette.functions,
		"sideBarTitle.foreground": "#bbbbbb",
		"panel.background": palette.background,
		"terminal.background": palette.background,

		'terminal.ansiBlack': palette.background2,
		'terminal.ansiBlue': palette.keywords,
		'terminal.ansiCyan': palette.functions,
		'terminal.ansiGreen': palette.strings,
		'terminal.ansiMagenta': palette.operators,
		'terminal.ansiRed': palette.literals,
		'terminal.ansiYellow': palette.types,

		'terminal.ansiBrightBlack': palette.background2,
		'terminal.ansiBrightBlue': palette.keywords,
		'terminal.ansiBrightCyan': palette.functions,
		'terminal.ansiBrightGreen': palette.strings,
		'terminal.ansiBrightMagenta': palette.operators,
		'terminal.ansiBrightRed': palette.literals,
		'terminal.ansiBrightYellow': palette.types,
	},
	tokenColors: [
		{
			name: "Comment",
			scope: [
				"comment",
				"punctuation.definition.comment"
			],
			settings: {
				foreground: palette.comments
			}
		},
		{
			name: "Keyword & Storage",
			scope: [
				"keyword",
				"storage.modifier",
				'storage.type',
				"support.type.primitive",
				"punctuation.accessor",
				"punctuation.separator",
			],
			settings: {
				foreground: palette.keywords,
			}
		},
		{
			name: 'Functions',
			scope: [
				'entity.name.function',
				'variable.function',
				'support.function',
				'keyword.other.special-method',
				"entity.name.section.python.renpy.label"
			],
			settings: {
				foreground: palette.functions
			}
		},
		{
			name: 'Strings',
			scope: [
				'string',
			],
			settings: {
				foreground: palette.strings
			}
		},
		{
			name: "Strings (Ren'Py)",
			scope: "string.quoted.double.single-line.python.renpy",
			settings: {
				fontStyle: "italic"
			}
		},
		{
			name: 'Class, Support',
			scope: [
				'entity.name.type',
				"storage.type.cs",
				"support.type",
				"support.class",
				'support.type.sys-types',
			],
			settings: {
				foreground: palette.types,
			}
		},
		{
			name: "Number, Constant, Function Argument, Tag Attribute, Embedded,",
			scope: [
				"constant.numeric",
				"constant.language",
				"support.constant",
				"constant.character",
				"constant.escape",
				"keyword.other.unit",
				"entity.name.tag",
			],
			settings: {
				"foreground": palette.literals
			}
		},
		{
			name: "Placeholders",
			scope: [
				"constant.other.placeholder.tags"
			],
			settings: {
				"foreground": palette.foreground
			}
		},
		{
			name: "JSX attributes",
			scope: [
				"entity.other.attribute-name"
			],
			settings: {
				foreground: palette.functions,
				fontStyle: 'italic'
			}
		},
		{
			name: "Operator",
			scope: [
				"keyword.operator",
			],
			settings: {
				"foreground": palette.operators
			}
		},
		{
			name: "Heading",
			scope: [
				"markup.heading",
			],
			settings: {
				"foreground": palette.keywords
			}
		},
		{
			name: "List",
			scope: [
				"punctuation.definition.list",
			],
			settings: {
				"foreground": palette.operators
			}
		},
		{
			name: "Bold",
			scope: [
				"markup.bold",
			],
			settings: {
				fontStyle: 'bold',
				foreground: palette.types
			}
		},
		{
			name: "Italic",
			scope: [
				"markup.italic",
			],
			settings: {
				fontStyle: 'italic',
				foreground: palette.functions
			}
		},
	]
}