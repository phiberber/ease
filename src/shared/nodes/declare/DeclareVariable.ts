import Declare from "@nodes/declare/Declare";
import ParserNode from "@nodes/ParserNode";
import Tag, {Modifiers} from "@shared/Tag";
import Token from "@shared/Token";
import Span from "@shared/Span";

type VariableType = typeof Tag.Variable | typeof Tag.Value | typeof Tag.Constant

export default class DeclareVariable extends Declare {
    public type: VariableType
    public identifier: Token<string>;
    public modifiers: typeof Modifiers;
    public valueType: Token<string> | undefined
    public valueNode: ParserNode
    public span: Span;

    constructor(modifiers: typeof Modifiers, type: VariableType, identifier: Token<string>, valueType: Token<string> | undefined, valueNode: ParserNode, span: Span) {
        super()
        this.type = type
        this.modifiers = modifiers
        this.identifier = identifier
        this.valueType = valueType
        this.valueNode = valueNode
        this.span = span
    }

    toString() {
        return `${this.identifier.content}=[${this.valueNode.nodeType}]`
    }
}