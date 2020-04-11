const palette = {
	background: '#2a2838',
	background2: '#262433',
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
		'statusBar.background': palette.background2,
		'editorGroupHeader.tabsBackground': palette.background2,

		"activityBar.background": palette.background,

		"editor.background": palette.background,
		'editorHoverWidget.background': palette.background,

		"editor.foreground": palette.foreground,
		"editorLineNumber.foreground": '#eeffff44',

		"activityBarBadge.background": palette.functions,
		'tab.inactiveBackground': palette.background2,
		"sideBarTitle.foreground": "#bbbbbb",
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
				foreground: palette.keywords
			}
		},
		{
			name: 'Functions',
			scope: [
				'entity.name.function',
				'variable.function',
				'support.function',
				'keyword.other.special-method',
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