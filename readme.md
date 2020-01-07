This is a simple calculator built using HTML, CSS and Javascript.
I learned basic DOM manipulation, array methods, and other fundamentals prior to this project.

Project plan:

1.  Build calculator button layout with HTML
2.  Add styling with CSS
3.  Add operator functions
4.  Add triggers to buttons
5.  Add function to calculate the result and output to DOM

After the project:

I used concepts from chapter 6 of the book "Programming Principles and Practices Using C++" by Bjarne Stroustrup to complete this calculator. Parsing concepts became very important for this project when I tried to follow PEMDAS hierarchy rules. A grammar was used to define:

Number:
    -Floating point decimal

Primary:
    -"("Expression")"
    -Number

Term:
    -Term * Primary
    -Term / Primary

Expression:
    -Expression + Term
    -Expression - Term
