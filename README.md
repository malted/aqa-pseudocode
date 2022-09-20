## Translation reference

### Comments

#### Single-line comments

| AQA                    | JavaScript              |
| ---------------------- | ----------------------- |
| <code># comment</code> | <code>// comment</code> |

#### Multi-line comments

| AQA                                           | JavaScript                                      |
| --------------------------------------------- | ----------------------------------------------- |
| <code># comment<br># comment and so on</code> | <code>// comment<br>// comment and so on</code> |

### Variables and constants

#### Variable assignment

| AQA                            | JavaScript                            |
| ------------------------------ | ------------------------------------- |
| <code>Identifier <- Exp</code> | <code>**let** Identifier = Exp</code> |

#### Constant assignment

| AQA                                         | JavaScript                              |
| ------------------------------------------- | --------------------------------------- |
| <code>**CONSTANT** Identifier <- Exp</code> | <code>**const** Identifier = Exp</code> |

### Arithmetic operations

#### Standard arithmetic operations

| AQA                             | JavaScript                      |
| ------------------------------- | ------------------------------- |
| <code>Exp {+,-,\*,/} Exp</code> | <code>Exp {+,-,\*,/} Exp</code> |

#### Integer division

| AQA                            | JavaScript                         |
| ------------------------------ | ---------------------------------- |
| <code>IntExp DIV IntExp</code> | <code>Math.floor(Exp / Exp)</code> |

#### Modulus operator

| AQA                            | JavaScript             |
| ------------------------------ | ---------------------- |
| <code>IntExp MOD IntExp</code> | <code>Exp % Exp</code> |

### Relational operators for types that can be clearly ordered

#### Less than

| AQA                    | JavaScript             |
| ---------------------- | ---------------------- |
| <code>Exp < Exp</code> | <code>Exp < Exp</code> |

#### Greater than

| AQA                    | JavaScript             |
| ---------------------- | ---------------------- |
| <code>Exp > Exp</code> | <code>Exp > Exp</code> |

#### Equal to

| AQA                    | JavaScript               |
| ---------------------- | ------------------------ |
| <code>Exp = Exp</code> | <code>Exp === Exp</code> |

#### Not equal to

| AQA                    | JavaScript               |
| ---------------------- | ------------------------ |
| <code>Exp ≠ Exp</code> | <code>Exp !== Exp</code> |

#### Less than or equal to

| AQA                    | JavaScript              |
| ---------------------- | ----------------------- |
| <code>Exp ≤ Exp</code> | <code>Exp <= Exp</code> |

#### Greater than or equal to

| AQA                    | JavaScript              |
| ---------------------- | ----------------------- |
| <code>Exp ≥ Exp</code> | <code>Exp >= Exp</code> |

### Boolean operations

#### Logical AND

| AQA                              | JavaScript                      |
| -------------------------------- | ------------------------------- |
| <code>BoolExp AND BoolExp</code> | <code>BoolExp && BoolExp</code> |

#### Logical OR

| AQA                             | JavaScript                        |
| ------------------------------- | --------------------------------- |
| <code>BoolExp OR BoolExp</code> | <code>BoolExp \|\| BoolExp</code> |

#### Logical NOT

| AQA                      | JavaScript            |
| ------------------------ | --------------------- |
| <code>NOT BoolExp</code> | <code>!BoolExp</code> |

### Indefinite (condition controlled) iteration

#### REPEAT-UNTIL (repeat the statements until the Boolean expression is True).

| AQA                                                                   | JavaScript                                                             |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| <code>REPEAT<br>&nbsp;&nbsp;# statements here<br>UNTIL BoolExp</code> | <code>while (!BoolExp) {<br>&nbsp;&nbsp;// statements here<br>}</code> |

#### WHILE-ENDWHILE (while the Boolean

expression is True, repeat the
statements).

| AQA                                                                     | JavaScript                                                            |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------- |
| <code>WHILE BoolExp<br>&nbsp;&nbsp;# statements here<br>ENDWHILE</code> | <code>while (BoolExp) {<br>&nbsp;&nbsp;// statements here<br>}</code> |

### Definite (count controlled) iteration

#### FOR-TO-[STEP]-ENDFOR (If STEP IntExp is missing it is considered to be 1).

##### Note:

- If STEP IntExp is omitted the step value is 1.
- Note that in STEP IntExp the value of IntExp
- can be negative (see the third example)

| AQA                                                                                                                      | JavaScript                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>**FOR** Identifier <- IntExp **TO** IntExp [**STEP** IntExp]<br>&nbsp;&nbsp;# statements here<br>**ENDFOR**</code> | <code>for (Identifier = IntExp₁; IntExp₁ (IntExp₁ < IntExp₂ ? < : >) IntExp₂; IntExp₁ += **STEP** ?? 1) {<br>&nbsp;&nbsp;// statements here<br>}</code> |

#### FOR-IN-ENDFOR (repeat the statements the number of times that there are characters in a string).

| AQA                                                                                             | JavaScript                                                                          |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| <code>**FOR** Identifier **IN** StringExp<br>&nbsp;&nbsp;# statements here<br>**ENDFOR**</code> | <code>for (Identifier of StringExp) {<br>&nbsp;&nbsp;// statements here<br>}</code> |

### Selection

#### IF-THEN-ENDIF (execute the statements only if the Boolean expression is True).

| AQA                                                                                | JavaScript                                                         |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| <code>**IF** BoolExp **THEN**<br>&nbsp;&nbsp;# statements here<br>**ENDIF**</code> | <code>if (BoolExp) {<br>&nbsp;&nbsp;// statements here<br>}</code> |

#### IF-THEN-ELSE-ENDIF (execute the statements following the THEN if the Boolean expression is True, otherwise execute the statements following the ELSE).

| AQA                                                                                                                             | JavaScript                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| <code>**IF** BoolExp **THEN**<br>&nbsp;&nbsp;# statements here<br>**ELSE**<br>&nbsp;&nbsp;# statements here<br>**ENDIF**</code> | <code>if (BoolExp) {<br>&nbsp;&nbsp;// statements here<br>} else {<br>&nbsp;&nbsp; // statements here<br>}</code> |

#### NESTED IF-THEN-ELSE ENDIF (use nested versions of the above to create more complex conditions). Note that IF statements can be nested inside the THEN part, the ELSE part or both.

| AQA                                                                                                                                                                                                                                                                              | JavaScript                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>**IF** BoolExp **THEN**<br>&nbsp;&nbsp;# statements here<br>**ELSE**<br>&nbsp;&nbsp;**IF** BoolExp **THEN**<br>&nbsp;&nbsp;&nbsp;&nbsp;# statements here<br>&nbsp;&nbsp;**ELSE**<br>&nbsp;&nbsp;&nbsp;&nbsp;# statements here<br>&nbsp;&nbsp;**ENDIF**<br>**ENDIF**</code> | <code>if (BoolExp) {<br>&nbsp;&nbsp;// statements here<br>} else {<br>&nbsp;&nbsp;if (BoolExp) {<br>&nbsp;&nbsp;&nbsp;&nbsp;// statements here<br>&nbsp;&nbsp;else {<br>&nbsp;&nbsp;&nbsp;&nbsp;// statements here<br>&nbsp;&nbsp;}<br>}</code> |

#### IF-THEN-ELSE IF ENDIF (removes the need for multiple indentation levels).

| AQA                                                                                                                                                                                                                                      | JavaScript                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>**IF** BoolExp **THEN**<br>&nbsp;&nbsp;# statements here<br>**ELSE IF BoolExp** **THEN**<br>&nbsp;&nbsp;# statements here<br>&nbsp;&nbsp;# possibly more ELSE IFs<br>**ELSE**<br>&nbsp;&nbsp;# statements here<br>**ENDIF**</code> | <code>if (BoolExp) {<br>&nbsp;&nbsp;// statements here<br>} else if (BoolExp) {<br>&nbsp;&nbsp;// statements here<br>} else {<br>&nbsp;&nbsp;// statements here<br>}</code> |

### Arrays

#### Assignment

| AQA                                        | JavaScript                                    |
| ------------------------------------------ | --------------------------------------------- |
| <code>Identifier <- [Exp, ..., Exp]</code> | <code>let Identifier = [Exp, ..., Exp]</code> |

#### Accessing an element

| AQA                             | JavaScript                      |
| ------------------------------- | ------------------------------- |
| <code>Identifier[IntExp]</code> | <code>Identifier[IntExp]</code> |

#### Updating an element

| AQA                                    | JavaScript                            |
| -------------------------------------- | ------------------------------------- |
| <code>Identifier[IntExp] <- Exp</code> | <code>Identifier[IntExp] = Exp</code> |

#### Accessing an element in a two-dimensional array

| AQA                                     | JavaScript                              |
| --------------------------------------- | --------------------------------------- |
| <code>Identifier[IntExp][intexp]</code> | <code>Identifier[IntExp][intexp]</code> |

#### Updating an element in a two-dimensional array

| AQA                                            | JavaScript                                    |
| ---------------------------------------------- | --------------------------------------------- |
| <code>Identifier[IntExp][intexp] <- Exp</code> | <code>Identifier[IntExp][intexp] = Exp</code> |

#### Array length

| AQA                          | JavaScript                     |
| ---------------------------- | ------------------------------ |
| <code>LEN(Identifier)</code> | <code>Identifier.length</code> |

#### FOR-IN-ENDFOR (repeat the statements the number of times that there are elements in an array)

##### Note:

- Array items cannot
  be modified using this
  method

| AQA                                                                                         | JavaScript                                                                        |
| ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| <code>**FOR** Identifier **IN** array<br>&nbsp;&nbsp;# statements here<br>**ENDFOR**</code> | <code>array.forEach(Identifier => {<br>&nbsp;&nbsp;# statements here<br>})</code> |

### Records

#### Record declaration

##### Note:

- No point trying to enforce types in JavaScript.
- Would have been nicer to use a plain interfaced object here.

| AQA                                                                                                                                                               | JavaScript                                                                                                                                                                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>**RECORD** Record_Identifier<br>&nbsp;&nbsp;field1 : &lt;data type&gt;<br>&nbsp;&nbsp;field2 : &lt;data type&gt;<br>&nbsp;&nbsp;...<br>**ENDRECORD**</code> | <code>**class** Record_Identifier {<br>&nbsp;&nbsp;field1: &lt;data type&gt;;<br>&nbsp;&nbsp;field2: &lt;data type&gt;;<br>&nbsp;&nbsp;...<br><br>&nbsp;&nbsp;constructor(field1, field2) {<br>&nbsp;&nbsp;&nbsp;&nbsp;this.field1 = field1;<br>&nbsp;&nbsp;&nbsp;&nbsp;this.field2 = field2<br>&nbsp;&nbsp;&nbsp;&nbsp;...<br>&nbsp;&nbsp;}<br>}</code> |

#### Variable Instantiation

| AQA                                                             | JavaScript                                                            |
| --------------------------------------------------------------- | --------------------------------------------------------------------- |
| <code>varName <- Record_indentifier(value1, value2, ...)</code> | <code>let varName = new Record_identifier(value1, value2, ...)</code> |

#### Assigning a value to a field in a record

| AQA                               | JavaScript                       |
| --------------------------------- | -------------------------------- |
| <code>varName.field <- Exp</code> | <code>varName.field = Exp</code> |

#### Accessing values of fields within records

| AQA                        | JavaScript                 |
| -------------------------- | -------------------------- |
| <code>varName.field</code> | <code>varName.field</code> |

### Subroutines

##### Note: for the purposes of this pseudo-code definition subroutines that contain a RETURN keyword are functions. Those that do not contain a RETURN keyword are procedures.

#### Subroutine definition

| AQA                                                                                                      | JavaScript                                                                               |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| <code>**SUBROUTINE** Identifier(parameters)<br>&nbsp;&nbsp;# statements here<br>**ENDSUBROUTINE**</code> | <code>**function** Identifier(parameters) {<br>&nbsp;&nbsp;# statements here<br>}</code> |

#### Subroutine return value

| AQA                         | JavaScript                  |
| --------------------------- | --------------------------- |
| <code>**RETURN** Exp</code> | <code>**return** Exp</code> |

#### Calling subroutines

| AQA                                                                                                                                                         | JavaScript                                                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code># Subroutines without a return value<br>Identifier(parameters)<br><br># Subroutines with a return value<br>Identifier ← Identifier(parameters)</code> | <code>// Subroutines without a return value<br>Identifier(parameters)<br><br>// Subroutines with a return value<br>Identifier = Identifier(parameters)</code> |

### String handling

#### String length

| AQA                             | JavaScript                    |
| ------------------------------- | ----------------------------- |
| <code>**LEN**(StringExp)</code> | <code>StringExp.length</code> |

#### Position of a character

| AQA                                           | JavaScript                              |
| --------------------------------------------- | --------------------------------------- |
| <code>**POSITION**(StringExp, CharExp)</code> | <code>StringExp.indexOf(CharExp)</code> |

#### Substring

##### Note:

- Created by the first parameter indicating the start position within the string, the second parameter indicating the final position within the string and the third parameter being the string itself.

| AQA                                                   | JavaScript                                           |
| ----------------------------------------------------- | ---------------------------------------------------- |
| <code>**SUBSTRING**(IntExp, IntExp, StringExp)</code> | <code>StringExp.substring(IntExp, IntExp + 1)</code> |

#### Concatenation

| AQA                                | JavaScript                         |
| ---------------------------------- | ---------------------------------- |
| <code>StringExp + StringExp</code> | <code>StringExp + StringExp</code> |

### String and character conversion

#### Converting string to integer

| AQA                                       | JavaScript                           |
| ----------------------------------------- | ------------------------------------ |
| <code>**STRING_TO_INT**(StringExp)</code> | <code>**parseInt**(StringExp)</code> |

#### Converting string to real

| AQA                                        | JavaScript                           |
| ------------------------------------------ | ------------------------------------ |
| <code>**STRING_TO_REAL**(StringExp)</code> | <code>**parseInt**(StringExp)</code> |

#### Converting integer to string

| AQA                                    | JavaScript                     |
| -------------------------------------- | ------------------------------ |
| <code>**INT_TO_STRING**(IntExp)</code> | <code>IntExp.toString()</code> |

#### Converting real to string

| AQA                                     | JavaScript                      |
| --------------------------------------- | ------------------------------- |
| <code>**REAL_TO_STRING**(IntExp)</code> | <code>RealExp.toString()</code> |

#### Converting character to character code

| AQA                                    | JavaScript                         |
| -------------------------------------- | ---------------------------------- |
| <code>**CHAR_TO_CODE**(CharExp)</code> | <code>CharExp.charCodeAt(0)</code> |

#### Converting character code to character

| AQA                                    | JavaScript                                |
| -------------------------------------- | ----------------------------------------- |
| <code>**CODE_TO_CHAR**(CharExp)</code> | <code>String.fromCharCode(CharExp)</code> |
