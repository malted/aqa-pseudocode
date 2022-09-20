enum TokenType {
	DECLARE,

	EOL_SEMI,
}

interface IToken {
	type: TokenType;
	token: string;
}

let code = "";
const text = await Deno.readTextFile("src/input.aqa");
for (const line of text.split("\n")) {
	let statement: string[] = [];

	for (const token of line.split(" ")) {
		switch (token) {
			case "<-":
				statement.push("=");
				statement.unshift("let ");
				break;
			case "OUTPUT":
				statement += "console.log(";
				break;
			default:
				if (token.startsWith('"') || token.startsWith("'")) {
				} else {
					statement += token;
				}
		}
	}
	// if (statement.trim().startsWith("console")) statement += ")";
	// if (line.trim() != "") statement += ";";
	// code += statement;
}
console.log(code);
eval(code);
