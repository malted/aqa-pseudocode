## Translation reference

### Comments

#### Single-line comments

| AQA                  | JavaScript            |
| -------------------- | --------------------- |
| <pre># comment</pre> | <pre>// comment</pre> |

#### Multi-line comments

| AQA                                         | JavaScript                                    |
| ------------------------------------------- | --------------------------------------------- |
| <pre># comment<br># comment and so on</pre> | <pre>// comment<br>// comment and so on</pre> |

### Variables and constants

#### Variable assignment

| AQA                          | JavaScript                          |
| ---------------------------- | ----------------------------------- |
| <pre>Identifier <- Exp</pre> | <pre>**let** Identifier = Exp</pre> |

#### Constant assignment

| AQA                                       | JavaScript                            |
| ----------------------------------------- | ------------------------------------- |
| <pre>**CONSTANT** Identifier <- Exp</pre> | <pre>**const** Identifier = Exp</pre> |

### Arithmetic operations

#### Standard arithmetic operations

| AQA                           | JavaScript                    |
| ----------------------------- | ----------------------------- |
| <pre>Exp {+,-,\*,/} Exp</pre> | <pre>Exp {+,-,\*,/} Exp</pre> |

#### Integer division

| AQA                          | JavaScript                       |
| ---------------------------- | -------------------------------- |
| <pre>IntExp DIV IntExp</pre> | <pre>Math.floor(Exp / Exp)</pre> |

#### Modulus operator

| AQA                          | JavaScript           |
| ---------------------------- | -------------------- |
| <pre>IntExp MOD IntExp</pre> | <pre>Exp % Exp</pre> |

### Relational operators for types that can be clearly ordered

#### Less than

| AQA                  | JavaScript           |
| -------------------- | -------------------- |
| <pre>Exp < Exp</pre> | <pre>Exp < Exp</pre> |

#### Greater than

| AQA                  | JavaScript           |
| -------------------- | -------------------- |
| <pre>Exp > Exp</pre> | <pre>Exp > Exp</pre> |

#### Equal to

| AQA                  | JavaScript             |
| -------------------- | ---------------------- |
| <pre>Exp = Exp</pre> | <pre>Exp === Exp</pre> |

#### Not equal to

| AQA                  | JavaScript             |
| -------------------- | ---------------------- |
| <pre>Exp ≠ Exp</pre> | <pre>Exp !== Exp</pre> |

#### Less than or equal to

| AQA                  | JavaScript            |
| -------------------- | --------------------- |
| <pre>Exp ≤ Exp</pre> | <pre>Exp <= Exp</pre> |

#### Greater than or equal to

| AQA                  | JavaScript            |
| -------------------- | --------------------- |
| <pre>Exp ≥ Exp</pre> | <pre>Exp >= Exp</pre> |

### Boolean operations

#### Logical AND

| AQA                            | JavaScript                    |
| ------------------------------ | ----------------------------- |
| <pre>BoolExp AND BoolExp</pre> | <pre>BoolExp && BoolExp</pre> |

#### Logical OR

| AQA                           | JavaScript                      |
| ----------------------------- | ------------------------------- |
| <pre>BoolExp OR BoolExp</pre> | <pre>BoolExp \|\| BoolExp</pre> |

#### Logical NOT

| AQA                    | JavaScript          |
| ---------------------- | ------------------- |
| <pre>NOT BoolExp</pre> | <pre>!BoolExp</pre> |

### Indefinite (condition controlled) iteration

#### REPEAT-UNTIL (repeat the statements until the Boolean expression is True).

| AQA                                                                 | JavaScript                                                           |
| ------------------------------------------------------------------- | -------------------------------------------------------------------- |
| <pre>REPEAT<br>&nbsp;&nbsp;# statements here<br>UNTIL BoolExp</pre> | <pre>while (!BoolExp) {<br>&nbsp;&nbsp;// statements here<br>}</pre> |

#### WHILE-ENDWHILE (while the Boolean

expression is True, repeat the
statements).

| AQA                                                                   | JavaScript                                                          |
| --------------------------------------------------------------------- | ------------------------------------------------------------------- |
| <pre>WHILE BoolExp<br>&nbsp;&nbsp;# statements here<br>ENDWHILE</pre> | <pre>while (BoolExp) {<br>&nbsp;&nbsp;// statements here<br>}</pre> |

### Definite (count controlled) iteration

#### FOR-TO-[STEP]-ENDFOR (If STEP IntExp is missing it is considered to be 1).

##### Note:

- If STEP IntExp is omitted the step value is 1.
- Note that in STEP IntExp the value of IntExp
- can be negative (see the third example)

| AQA                                                                                                                    | JavaScript                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| <pre>**FOR** Identifier <- IntExp **TO** IntExp [**STEP** IntExp]<br>&nbsp;&nbsp;# statements here<br>**ENDFOR**</pre> | <pre>for (Identifier = IntExp₁; IntExp₁ (IntExp₁ < IntExp₂ ? < : >) IntExp₂; IntExp₁ += **STEP** ?? 1) {<br>&nbsp;&nbsp;// statements here<br>}</pre> |

#### FOR-IN-ENDFOR (repeat the statements the number of times that there are characters in a string).

| AQA                                                                                           | JavaScript                                                                        |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| <pre>**FOR** Identifier **IN** StringExp<br>&nbsp;&nbsp;# statements here<br>**ENDFOR**</pre> | <pre>for (Identifier of StringExp) {<br>&nbsp;&nbsp;// statements here<br>}</pre> |

### Selection

#### IF-THEN-ENDIF (execute the statements only if the Boolean expression is True).

| AQA                                                                              | JavaScript                                                       |
| -------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| <pre>**IF** BoolExp **THEN**<br>&nbsp;&nbsp;# statements here<br>**ENDIF**</pre> | <pre>if (BoolExp) {<br>&nbsp;&nbsp;// statements here<br>}</pre> |

#### IF-THEN-ELSE-ENDIF (execute the statements following the THEN if the Boolean expression is True, otherwise execute the statements following the ELSE).

| AQA                                                                                                                           | JavaScript                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| <pre>**IF** BoolExp **THEN**<br>&nbsp;&nbsp;# statements here<br>**ELSE**<br>&nbsp;&nbsp;# statements here<br>**ENDIF**</pre> | <pre>if (BoolExp) {<br>&nbsp;&nbsp;// statements here<br>} else {<br>&nbsp;&nbsp; // statements here<br>}</pre> |

#### NESTED IF-THEN-ELSE ENDIF (use nested versions of the above to create more complex conditions). Note that IF statements can be nested inside the THEN part, the ELSE part or both.

| AQA                                                                                                                                                                                                                                                                            | JavaScript                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <pre>**IF** BoolExp **THEN**<br>&nbsp;&nbsp;# statements here<br>**ELSE**<br>&nbsp;&nbsp;**IF** BoolExp **THEN**<br>&nbsp;&nbsp;&nbsp;&nbsp;# statements here<br>&nbsp;&nbsp;**ELSE**<br>&nbsp;&nbsp;&nbsp;&nbsp;# statements here<br>&nbsp;&nbsp;**ENDIF**<br>**ENDIF**</pre> | <pre>if (BoolExp) {<br>&nbsp;&nbsp;// statements here<br>} else {<br>&nbsp;&nbsp;if (BoolExp) {<br>&nbsp;&nbsp;&nbsp;&nbsp;// statements here<br>&nbsp;&nbsp;else {<br>&nbsp;&nbsp;&nbsp;&nbsp;// statements here<br>&nbsp;&nbsp;}<br>}</pre> |

#### IF-THEN-ELSE IF ENDIF (removes the need for multiple indentation levels).

| AQA                                                                                                                                                                                                                                    | JavaScript                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <pre>**IF** BoolExp **THEN**<br>&nbsp;&nbsp;# statements here<br>**ELSE IF BoolExp** **THEN**<br>&nbsp;&nbsp;# statements here<br>&nbsp;&nbsp;# possibly more ELSE IFs<br>**ELSE**<br>&nbsp;&nbsp;# statements here<br>**ENDIF**</pre> | <pre>if (BoolExp) {<br>&nbsp;&nbsp;// statements here<br>} else if (BoolExp) {<br>&nbsp;&nbsp;// statements here<br>} else {<br>&nbsp;&nbsp;// statements here<br>}</pre> |

### Arrays

#### Assignment

| AQA                                      | JavaScript                                  |
| ---------------------------------------- | ------------------------------------------- |
| <pre>Identifier <- [Exp, ..., Exp]</pre> | <pre>let Identifier = [Exp, ..., Exp]</pre> |

#### Accessing an element

| AQA                           | JavaScript                    |
| ----------------------------- | ----------------------------- |
| <pre>Identifier[IntExp]</pre> | <pre>Identifier[IntExp]</pre> |

#### Updating an element

| AQA                                  | JavaScript                          |
| ------------------------------------ | ----------------------------------- |
| <pre>Identifier[IntExp] <- Exp</pre> | <pre>Identifier[IntExp] = Exp</pre> |

#### Accessing an element in a two-dimensional array

| AQA                                   | JavaScript                            |
| ------------------------------------- | ------------------------------------- |
| <pre>Identifier[IntExp][intexp]</pre> | <pre>Identifier[IntExp][intexp]</pre> |

#### Updating an element in a two-dimensional array

| AQA                                          | JavaScript                                  |
| -------------------------------------------- | ------------------------------------------- |
| <pre>Identifier[IntExp][intexp] <- Exp</pre> | <pre>Identifier[IntExp][intexp] = Exp</pre> |

#### Array length

| AQA                        | JavaScript                   |
| -------------------------- | ---------------------------- |
| <pre>LEN(Identifier)</pre> | <pre>Identifier.length</pre> |

#### FOR-IN-ENDFOR (repeat the statements the number of times that there are elements in an array)

##### Note:

- Array items cannot
  be modified using this
  method

| AQA                                                                                       | JavaScript                                                                      |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| <pre>**FOR** Identifier **IN** array<br>&nbsp;&nbsp;# statements here<br>**ENDFOR**</pre> | <pre>array.forEach(Identifier => {<br>&nbsp;&nbsp;# statements here<br>})</pre> |

### Records

#### Record declaration

##### Note:

- No point trying to enforce types in JavaScript.
- Would have been nicer to use a plain interfaced object here.

| AQA                                                                                                                                                             | JavaScript                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <pre>**RECORD** Record_Identifier<br>&nbsp;&nbsp;field1 : &lt;data type&gt;<br>&nbsp;&nbsp;field2 : &lt;data type&gt;<br>&nbsp;&nbsp;...<br>**ENDRECORD**</pre> | <pre>**class** Record_Identifier {<br>&nbsp;&nbsp;field1: &lt;data type&gt;;<br>&nbsp;&nbsp;field2: &lt;data type&gt;;<br>&nbsp;&nbsp;...<br><br>&nbsp;&nbsp;constructor(field1, field2) {<br>&nbsp;&nbsp;&nbsp;&nbsp;this.field1 = field1;<br>&nbsp;&nbsp;&nbsp;&nbsp;this.field2 = field2<br>&nbsp;&nbsp;&nbsp;&nbsp;...<br>&nbsp;&nbsp;}<br>}</pre> |

#### Variable Instantiation

| AQA                                                           | JavaScript                                                          |
| ------------------------------------------------------------- | ------------------------------------------------------------------- |
| <pre>varName <- Record_indentifier(value1, value2, ...)</pre> | <pre>let varName = new Record_identifier(value1, value2, ...)</pre> |

#### Assigning a value to a field in a record

| AQA                             | JavaScript                     |
| ------------------------------- | ------------------------------ |
| <pre>varName.field <- Exp</pre> | <pre>varName.field = Exp</pre> |

#### Accessing values of fields within records

| AQA                      | JavaScript               |
| ------------------------ | ------------------------ |
| <pre>varName.field</pre> | <pre>varName.field</pre> |

### Subroutines

##### Note: for the purposes of this pseudo-code definition subroutines that contain a RETURN keyword are functions. Those that do not contain a RETURN keyword are procedures.

#### Subroutine definition

| AQA                                                                                                    | JavaScript                                                                             |
| ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| <pre>**SUBROUTINE** Identifier(parameters)<br>&nbsp;&nbsp;# statements here<br>**ENDSUBROUTINE**</pre> | <pre>**function** Identifier(parameters) {<br>&nbsp;&nbsp;# statements here<br>}</pre> |

#### Subroutine return value

| AQA                       | JavaScript                |
| ------------------------- | ------------------------- |
| <pre>**RETURN** Exp</pre> | <pre>**return** Exp</pre> |

#### Calling subroutines

| AQA                                                                                                                                                       | JavaScript                                                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <pre># Subroutines without a return value<br>Identifier(parameters)<br><br># Subroutines with a return value<br>Identifier ← Identifier(parameters)</pre> | <pre>// Subroutines without a return value<br>Identifier(parameters)<br><br>// Subroutines with a return value<br>Identifier = Identifier(parameters)</pre> |

### String handling

#### String length

| AQA                           | JavaScript                  |
| ----------------------------- | --------------------------- |
| <pre>**LEN**(StringExp)</pre> | <pre>StringExp.length</pre> |

#### Position of a character

| AQA                                         | JavaScript                            |
| ------------------------------------------- | ------------------------------------- |
| <pre>**POSITION**(StringExp, CharExp)</pre> | <pre>StringExp.indexOf(CharExp)</pre> |

#### Substring

##### Note:

- Created by the first parameter indicating the start position within the string, the second parameter indicating the final position within the string and the third parameter being the string itself.

| AQA                                                 | JavaScript                                         |
| --------------------------------------------------- | -------------------------------------------------- |
| <pre>**SUBSTRING**(IntExp, IntExp, StringExp)</pre> | <pre>StringExp.substring(IntExp, IntExp + 1)</pre> |

#### Concatenation

| AQA                              | JavaScript                       |
| -------------------------------- | -------------------------------- |
| <pre>StringExp + StringExp</pre> | <pre>StringExp + StringExp</pre> |

### String and character conversion

#### Converting string to integer

| AQA                                     | JavaScript                         |
| --------------------------------------- | ---------------------------------- |
| <pre>**STRING_TO_INT**(StringExp)</pre> | <pre>**parseInt**(StringExp)</pre> |

#### Converting string to real

| AQA                                      | JavaScript                         |
| ---------------------------------------- | ---------------------------------- |
| <pre>**STRING_TO_REAL**(StringExp)</pre> | <pre>**parseInt**(StringExp)</pre> |

#### Converting integer to string

| AQA                                  | JavaScript                   |
| ------------------------------------ | ---------------------------- |
| <pre>**INT_TO_STRING**(IntExp)</pre> | <pre>IntExp.toString()</pre> |

#### Converting real to string

| AQA                                   | JavaScript                    |
| ------------------------------------- | ----------------------------- |
| <pre>**REAL_TO_STRING**(IntExp)</pre> | <pre>RealExp.toString()</pre> |

#### Converting character to character code

| AQA                                  | JavaScript                       |
| ------------------------------------ | -------------------------------- |
| <pre>**CHAR_TO_CODE**(CharExp)</pre> | <pre>CharExp.charCodeAt(0)</pre> |

#### Converting character code to character

| AQA                                  | JavaScript                              |
| ------------------------------------ | --------------------------------------- |
| <pre>**CODE_TO_CHAR**(CharExp)</pre> | <pre>String.fromCharCode(CharExp)</pre> |
