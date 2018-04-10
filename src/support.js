export const matrix = {
	chrome: {
		    48: 0b010010101000110011101,
		    49: 0b010011111001111111101,
		    50: 0b010111111001111111101,
		    51: 0b010111111001111111101,
		    52: 0b011111111001111111101,
		    53: 0b011111111001111111101,
		    54: 0b011111111001111111101,
		    55: 0b011111111001111111111,
		    56: 0b011111111001111111111,
		    57: 0b011111111001111111111,
		    58: 0b111111111001111111111,
		    59: 0b111111111001111111111,
		    60: 0b111111111001111111111,
		    61: 0b111111111001111111111,
		    62: 0b111111111001111111111,
		    63: 0b111111111001111111111
	},
	firefox: {
		    43: 0b010011101000110111001,
		    44: 0b010011101001110111001,
		    45: 0b010011101001110111101,
		    46: 0b010111101001110111101,
		    47: 0b010111101001111111101,
		    48: 0b010111101001111111101,
		    49: 0b010111101001111111101,
		    50: 0b010111101001111111101,
		    51: 0b010111101001111111101,
		    52: 0b111111111001111111111,
		    53: 0b111111111001111111111,
		    54: 0b111111111001111111111,
		    55: 0b111111111001111111111,
		    56: 0b111111111001111111111,
		    57: 0b111111111001111111111,
		    58: 0b111111111001111111111
	},
	safari: {
		     8: 0b010000000000000001000,
		     9: 0b010010011000011011100,
		    10: 0b110111111001111111101,
		'10.1': 0b111111111001111111111,
		    11: 0b111111111001111111111
	},
	ie: {
		     8: 0b000000000000000000000,
		     9: 0b010000000000000000000,
		    10: 0b010000000000000000000,
		    11: 0b010000000001000000000
	},
	edge: {
		    12: 0b010010101001010011001,
		    13: 0b010111101001110011101,
		    14: 0b111111101001111111101,
		    15: 0b111111101001111111111,
		    16: 0b111111101001111111111
	},
	node: {
		'0.10': 0b010000000000000000000,
		'0.12': 0b010000000000010000000,
		     4: 0b010010001000110011101,
		     5: 0b010010001000110011101,
		     6: 0b010111111001111111101,
		     8: 0b111111111001111111111,
		 '8.3': 0b111111111001111111111,
		 '8.7': 0b111111111001111111111
	}
};

export const features = [
	'arrow',
	'asyncAwait',
	'classes',
	'computedProperty',
	'conciseMethodProperty',
	'defaultParameter',
	'destructuring',
	'forOf',
	'generator',
	'letConst',
	'moduleExport',
	'moduleImport',
	'numericLiteral',
	'parameterDestructuring',
	'spreadRest',
	'stickyRegExp',
	'templateString',
	'unicodeRegExp',

	// ES2016
	'exponentiation',

	// additional transforms, not from
	// https://featuretests.io
	'reservedProperties',

	'trailingFunctionCommas'
];
