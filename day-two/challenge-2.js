// Confident that your list of box IDs is complete, you're ready to find the boxes full of prototype fabric.
//
// The boxes will have IDs which differ by exactly one character at the same position in both strings. For example, given the following box IDs:
//
// abcde
// fghij
// klmno
// pqrst
// fguij
// axcye
// wvxyz
// The IDs abcde and axcye are close, but they differ by two characters (the second and fourth). However, the IDs fghij and fguij differ by exactly one character, the third (h and u). Those must be the correct boxes.
//
// What letters are common between the two correct box IDs? (In the example above, this is found by removing the differing character from either ID, producing fgij.)

const boxArray = require('../myinput.js').boxArray;

async function findCommon() {
	let [margin, a, b] = [999999999999]
	for (let str of boxArray) {
		str = str.replace('\r', '');
		let [points, closest] = [999999999999];
		for (let c_str of boxArray) {
			c_str = c_str.replace('\r', '');
			if (c_str != str) {
				let missed = 0;
				for (let i = 0; i < str.length; i++) {
					if (str[i] != c_str[i]) {
						missed++;
					};
				};
				if (missed < points) {
					points = missed;
					closest = c_str;
				};
			};
		};
		if (points < margin) {
			a = str;
			b = closest;
			margin = points;
		};
	};
	let new_string = '';
	for (let i = 0; i < a.length; i++) {
		if (a[i] == b[i]) {
			new_string += a[i];
		};
	};
	return new_string;
};

console.log(findCommon()); //returns 'lufjygedpvfbhftxiwnaorzmq'
