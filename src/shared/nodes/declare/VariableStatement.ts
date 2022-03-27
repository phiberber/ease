import {DeclareStatement} from "@nodes/declare/DeclareStatement";
import {Expression} from "@nodes/expression/Expression";
import {IdentifierExpression} from "@nodes/expression/IdentifierExpression";
import {Span} from "@shared/Span";
import {Tag} from "@shared/Tag";

type VariableType = typeof Tag.Variable | typeof Tag.Value | typeof Tag.Constant

export class VariableStatement extends DeclareStatement {
    public nodeType = "VariableStatement";
    public type: VariableType
    public identifier: IdentifierExpression;
    public initializer: Expression
    public span: Span;

    constructor(type: VariableType, identifier: IdentifierExpression, value: Expression = Expression.empty, span: Span = Span.empty) {
        super()
        this.type = type
        this.identifier = identifier
        this.initializer = value
        this.span = span
    }

    toString() {
        return `${this.identifier.value}=[${this.initializer?.nodeType}]`
    }
}