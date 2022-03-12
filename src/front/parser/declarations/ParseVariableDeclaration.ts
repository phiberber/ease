import parseExpression from "@front/parser/expressions/ParseExpression";
import DeclareVariable from "@nodes/declare/DeclareVariable";
import Tag, {Modifiers} from "@shared/Tag";
import Parser from "@front/parser/Parser";

export default function parseVariableDeclaration(this: Parser, modifiers: typeof Modifiers): DeclareVariable {

    const variableType = this.match([Tag.Variable, Tag.Value, Tag.Constant])
    const variableName = this.match(Tag.Identifier)

    let variableExpression

    if (this.accept(Tag.Colon)) {
        // @TODO Implement Typing
    }

    if (this.accept(Tag.Assign)) {
        this.match(Tag.Assign)
        variableExpression = parseExpression.call(this)
        if (!variableExpression)
            this.raise("Expression expected after variable declaration.")
    }

    return new DeclareVariable(modifiers, variableType.tag, variableName, undefined, variableExpression, variableName.span.copy().expandEnd(this.span))
}

