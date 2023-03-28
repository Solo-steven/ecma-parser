import { SyntaxKinds } from "./kinds";
/** ======================================
 *          Union SytaxKinds
 * ======================================
 */
export type AssigmentOperatorKinds = 
    SyntaxKinds.AssginOperator |
    SyntaxKinds.PlusAssignOperator |
    SyntaxKinds.MinusAssignOperator |
    SyntaxKinds.ExponAssignOperator |
    SyntaxKinds.DivideAssignOperator |
    SyntaxKinds.MultiplyAssignOperator |
    SyntaxKinds.ModAssignOperator |
    SyntaxKinds.BitwiseORAssginOperator |    // |=
    SyntaxKinds.BitwiseANDAssginOperator |   // &=
    SyntaxKinds.BitwiseNOTAssginOperator |   // ~=
    SyntaxKinds.BitwiseXORAssginOperator |   // ^=
    SyntaxKinds.LogicalORAssignOperator  |   // ||=
    SyntaxKinds.logicalANDAssginOperator |   // &&=
    SyntaxKinds.BitwiseLeftShiftAssginOperator |     // <<=
    SyntaxKinds.BitwiseRightShiftAssginOperator |    // >>=
    SyntaxKinds.BitwiseRightShiftFillAssginOperator // >>>=
;
export const AssigmentOperators = [
    SyntaxKinds.AssginOperator,
    SyntaxKinds.PlusAssignOperator,
    SyntaxKinds.MinusAssignOperator,
    SyntaxKinds.ExponAssignOperator,
    SyntaxKinds.DivideAssignOperator,
    SyntaxKinds.MultiplyAssignOperator,
    SyntaxKinds.ModAssignOperator,
    SyntaxKinds.BitwiseORAssginOperator,    // |=
    SyntaxKinds.BitwiseANDAssginOperator,   // &=
    SyntaxKinds.BitwiseNOTAssginOperator,   // ~=
    SyntaxKinds.BitwiseXORAssginOperator,   // ^=
    SyntaxKinds.LogicalORAssignOperator ,   // ||=
    SyntaxKinds.logicalANDAssginOperator,   // &&=
    SyntaxKinds.BitwiseLeftShiftAssginOperator,     // <<=
    SyntaxKinds.BitwiseRightShiftAssginOperator,    // >>=
    SyntaxKinds.BitwiseRightShiftFillAssginOperator // >>>=
];
export type BinaryOperatorKinds = 
    SyntaxKinds.PlusOperator |       // +
    SyntaxKinds.MinusOperator |      // -
    SyntaxKinds.DivideOperator |     // /
    SyntaxKinds.MultiplyOperator |   // *
    SyntaxKinds.ModOperator |    // %
    SyntaxKinds.IncreOperator |  // ++
    SyntaxKinds.DecreOperator |  // --
    SyntaxKinds.ExponOperator |  // **
    SyntaxKinds.GtOperator |     // >
    SyntaxKinds.LtOperator |     // <
    SyntaxKinds.EqOperator |     // ==
    SyntaxKinds.NotEqOperator |  // !=
    SyntaxKinds.GeqtOperator |   // >=
    SyntaxKinds.LeqtOperator |   // <=
    SyntaxKinds.StrictEqOperator |       // ===
    SyntaxKinds.StrictNotEqOperator |    // !==
    SyntaxKinds.BitwiseOROperator |      // |
    SyntaxKinds.BitwiseANDOperator |     // &
    SyntaxKinds.BitwiseLeftShiftOperator |      // <<
    SyntaxKinds.BitwiseRightShiftOperator |     // >>
    SyntaxKinds.BitwiseRightShiftFillOperator |  // >>>
    SyntaxKinds.CommaToken     // ,
;
export const BinaryOperators = [
    SyntaxKinds.PlusOperator,       // +
    SyntaxKinds.MinusOperator,      // -
    SyntaxKinds.DivideOperator,     // /
    SyntaxKinds.MultiplyOperator,   // *
    SyntaxKinds.ModOperator,    // %
    SyntaxKinds.IncreOperator,  // ++
    SyntaxKinds.DecreOperator,  // --
    SyntaxKinds.ExponOperator,  // **
    SyntaxKinds.GtOperator,     // >
    SyntaxKinds.LtOperator,     // <
    SyntaxKinds.EqOperator,     // ==
    SyntaxKinds.NotEqOperator,  // !=
    SyntaxKinds.GeqtOperator,   // >=
    SyntaxKinds.LeqtOperator,   // <=
    SyntaxKinds.StrictEqOperator,       // ===
    SyntaxKinds.StrictNotEqOperator,    // !==
    SyntaxKinds.BitwiseOROperator,      // |
    SyntaxKinds.BitwiseANDOperator,     // &
    SyntaxKinds.BitwiseLeftShiftOperator,      // <<
    SyntaxKinds.BitwiseRightShiftOperator,     // >>
    SyntaxKinds.BitwiseRightShiftFillOperator,  // >>>
    SyntaxKinds.CommaToken     // ,
]
export type UpdateOperatorKinds = 
    SyntaxKinds.IncreOperator |
    SyntaxKinds.DecreOperator 
;
export const UpdateOperators = [
    SyntaxKinds.IncreOperator,
    SyntaxKinds.DecreOperator
]
export type UnaryOperatorKinds = 
    SyntaxKinds.BitwiseNOTOperator |     // ~
    SyntaxKinds.BitwiseXOROperator |     // ^
    SyntaxKinds.PlusOperator |       // +
    SyntaxKinds.MinusOperator |       // -
    SyntaxKinds.DeleteKeyword |     // delete
    SyntaxKinds.VoidKeyword |       // void
    SyntaxKinds.TypeofKeyword       // typeof
;
export const UnaryOperators = [
    SyntaxKinds.BitwiseNOTOperator,     // ~
    SyntaxKinds.BitwiseXOROperator,     // ^
    SyntaxKinds.PlusOperator,       // +
    SyntaxKinds.MinusOperator,       // -
    SyntaxKinds.DeleteKeyword,     // delete
    SyntaxKinds.VoidKeyword,       // void
    SyntaxKinds.TypeofKeyword       // typeof
]