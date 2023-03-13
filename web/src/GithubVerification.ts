export const GithubVerification = {
  contractName: "GithubVerification",
  abi: [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_toVerify",
          type: "address",
        },
      ],
      name: "verifyAddress",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_toCheck",
          type: "address",
        },
      ],
      name: "addressIsVerified",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
  ],
  metadata:
    '{"compiler":{"version":"0.8.18+commit.87f61d96"},"language":"Solidity","output":{"abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"_toCheck","type":"address"}],"name":"addressIsVerified","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_toVerify","type":"address"}],"name":"verifyAddress","outputs":[],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"project:/contracts/GithubVerification.sol":"GithubVerification"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"project:/contracts/GithubVerification.sol":{"keccak256":"0x10e7cf762d6f23a5524df342032eb2a57e4429aa6bedfa5058a0e5b4279fd776","license":"MIT","urls":["bzz-raw://497773171d73ffa7d526fd5c40a1ddaa51eeb54f85652397dc6d9e9d7ce658b6","dweb:/ipfs/QmPCQRiGVF3bFXRcznHawJ8rcEKLzsG2fhxyjJvPg9s9xx"]}},"version":1}',
  bytecode:
    "0x60a060405234801561001057600080fd5b503373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505060805161031e61005f600039600060d3015261031e6000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806310a4cff71461003b578063fcb2cafc1461006b575b600080fd5b61005560048036038101906100509190610208565b610087565b6040516100629190610250565b60405180910390f35b61008560048036038101906100809190610208565b6100d1565b005b6000806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054119050919050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461015f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610156906102c8565b60405180910390fd5b426000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101d5826101aa565b9050919050565b6101e5816101ca565b81146101f057600080fd5b50565b600081359050610202816101dc565b92915050565b60006020828403121561021e5761021d6101a5565b5b600061022c848285016101f3565b91505092915050565b60008115159050919050565b61024a81610235565b82525050565b60006020820190506102656000830184610241565b92915050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006102b260208361026b565b91506102bd8261027c565b602082019050919050565b600060208201905081810360008301526102e1816102a5565b905091905056fea2646970667358221220334494831ff275c4566a651d54d0fa5e32cea0c5f9cd766e5f512754b36b8d4a64736f6c63430008120033",
  deployedBytecode:
    "0x608060405234801561001057600080fd5b50600436106100365760003560e01c806310a4cff71461003b578063fcb2cafc1461006b575b600080fd5b61005560048036038101906100509190610208565b610087565b6040516100629190610250565b60405180910390f35b61008560048036038101906100809190610208565b6100d1565b005b6000806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054119050919050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461015f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610156906102c8565b60405180910390fd5b426000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101d5826101aa565b9050919050565b6101e5816101ca565b81146101f057600080fd5b50565b600081359050610202816101dc565b92915050565b60006020828403121561021e5761021d6101a5565b5b600061022c848285016101f3565b91505092915050565b60008115159050919050565b61024a81610235565b82525050565b60006020820190506102656000830184610241565b92915050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006102b260208361026b565b91506102bd8261027c565b602082019050919050565b600060208201905081810360008301526102e1816102a5565b905091905056fea2646970667358221220334494831ff275c4566a651d54d0fa5e32cea0c5f9cd766e5f512754b36b8d4a64736f6c63430008120033",
  immutableReferences: {
    "7": [
      {
        length: 32,
        start: 211,
      },
    ],
  },
  generatedSources: [],
  deployedGeneratedSources: [
    {
      ast: {
        nodeType: "YulBlock",
        src: "0:2760:1",
        statements: [
          {
            body: {
              nodeType: "YulBlock",
              src: "47:35:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "57:19:1",
                  value: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "73:2:1",
                        type: "",
                        value: "64",
                      },
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "67:5:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "67:9:1",
                  },
                  variableNames: [
                    {
                      name: "memPtr",
                      nodeType: "YulIdentifier",
                      src: "57:6:1",
                    },
                  ],
                },
              ],
            },
            name: "allocate_unbounded",
            nodeType: "YulFunctionDefinition",
            returnVariables: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "40:6:1",
                type: "",
              },
            ],
            src: "7:75:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "177:28:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "194:1:1",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "197:1:1",
                        type: "",
                        value: "0",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "187:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "187:12:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "187:12:1",
                },
              ],
            },
            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
            nodeType: "YulFunctionDefinition",
            src: "88:117:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "300:28:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "317:1:1",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "320:1:1",
                        type: "",
                        value: "0",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "310:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "310:12:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "310:12:1",
                },
              ],
            },
            name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
            nodeType: "YulFunctionDefinition",
            src: "211:117:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "379:81:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "389:65:1",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "404:5:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "411:42:1",
                        type: "",
                        value: "0xffffffffffffffffffffffffffffffffffffffff",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "400:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "400:54:1",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "389:7:1",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_uint160",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "361:5:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "371:7:1",
                type: "",
              },
            ],
            src: "334:126:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "511:51:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "521:35:1",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "550:5:1",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint160",
                      nodeType: "YulIdentifier",
                      src: "532:17:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "532:24:1",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "521:7:1",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_address",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "493:5:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "503:7:1",
                type: "",
              },
            ],
            src: "466:96:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "611:79:1",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "668:16:1",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "677:1:1",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "680:1:1",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "670:6:1",
                          },
                          nodeType: "YulFunctionCall",
                          src: "670:12:1",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "670:12:1",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "634:5:1",
                          },
                          {
                            arguments: [
                              {
                                name: "value",
                                nodeType: "YulIdentifier",
                                src: "659:5:1",
                              },
                            ],
                            functionName: {
                              name: "cleanup_t_address",
                              nodeType: "YulIdentifier",
                              src: "641:17:1",
                            },
                            nodeType: "YulFunctionCall",
                            src: "641:24:1",
                          },
                        ],
                        functionName: {
                          name: "eq",
                          nodeType: "YulIdentifier",
                          src: "631:2:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "631:35:1",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "624:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "624:43:1",
                  },
                  nodeType: "YulIf",
                  src: "621:63:1",
                },
              ],
            },
            name: "validator_revert_t_address",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "604:5:1",
                type: "",
              },
            ],
            src: "568:122:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "748:87:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "758:29:1",
                  value: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "780:6:1",
                      },
                    ],
                    functionName: {
                      name: "calldataload",
                      nodeType: "YulIdentifier",
                      src: "767:12:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "767:20:1",
                  },
                  variableNames: [
                    {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "758:5:1",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "823:5:1",
                      },
                    ],
                    functionName: {
                      name: "validator_revert_t_address",
                      nodeType: "YulIdentifier",
                      src: "796:26:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "796:33:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "796:33:1",
                },
              ],
            },
            name: "abi_decode_t_address",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "726:6:1",
                type: "",
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "734:3:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "742:5:1",
                type: "",
              },
            ],
            src: "696:139:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "907:263:1",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "953:83:1",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            nodeType: "YulIdentifier",
                            src: "955:77:1",
                          },
                          nodeType: "YulFunctionCall",
                          src: "955:79:1",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "955:79:1",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "928:7:1",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "937:9:1",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "924:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "924:23:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "949:2:1",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "920:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "920:32:1",
                  },
                  nodeType: "YulIf",
                  src: "917:119:1",
                },
                {
                  nodeType: "YulBlock",
                  src: "1046:117:1",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "1061:15:1",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1075:1:1",
                        type: "",
                        value: "0",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "1065:6:1",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "1090:63:1",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "1125:9:1",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "1136:6:1",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "1121:3:1",
                            },
                            nodeType: "YulFunctionCall",
                            src: "1121:22:1",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "1145:7:1",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_address",
                          nodeType: "YulIdentifier",
                          src: "1100:20:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1100:53:1",
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "1090:6:1",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_tuple_t_address",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "877:9:1",
                type: "",
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "888:7:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "900:6:1",
                type: "",
              },
            ],
            src: "841:329:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1218:48:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1228:32:1",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "1253:5:1",
                          },
                        ],
                        functionName: {
                          name: "iszero",
                          nodeType: "YulIdentifier",
                          src: "1246:6:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1246:13:1",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "1239:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1239:21:1",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "1228:7:1",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_bool",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1200:5:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "1210:7:1",
                type: "",
              },
            ],
            src: "1176:90:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1331:50:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "1348:3:1",
                      },
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "1368:5:1",
                          },
                        ],
                        functionName: {
                          name: "cleanup_t_bool",
                          nodeType: "YulIdentifier",
                          src: "1353:14:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1353:21:1",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "1341:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1341:34:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1341:34:1",
                },
              ],
            },
            name: "abi_encode_t_bool_to_t_bool_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1319:5:1",
                type: "",
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "1326:3:1",
                type: "",
              },
            ],
            src: "1272:109:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1479:118:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1489:26:1",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "1501:9:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1512:2:1",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "1497:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1497:18:1",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "1489:4:1",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "1563:6:1",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "1576:9:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1587:1:1",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "1572:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1572:17:1",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_bool_to_t_bool_fromStack",
                      nodeType: "YulIdentifier",
                      src: "1525:37:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1525:65:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1525:65:1",
                },
              ],
            },
            name: "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "1451:9:1",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "1463:6:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "1474:4:1",
                type: "",
              },
            ],
            src: "1387:210:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1699:73:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "1716:3:1",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "1721:6:1",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "1709:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1709:19:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1709:19:1",
                },
                {
                  nodeType: "YulAssignment",
                  src: "1737:29:1",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "1756:3:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1761:4:1",
                        type: "",
                        value: "0x20",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "1752:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1752:14:1",
                  },
                  variableNames: [
                    {
                      name: "updated_pos",
                      nodeType: "YulIdentifier",
                      src: "1737:11:1",
                    },
                  ],
                },
              ],
            },
            name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "1671:3:1",
                type: "",
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "1676:6:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "updated_pos",
                nodeType: "YulTypedName",
                src: "1687:11:1",
                type: "",
              },
            ],
            src: "1603:169:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1884:76:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "1906:6:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1914:1:1",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "1902:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1902:14:1",
                      },
                      {
                        hexValue:
                          "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "1918:34:1",
                        type: "",
                        value: "Ownable: caller is not the owner",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "1895:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1895:58:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1895:58:1",
                },
              ],
            },
            name: "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "1876:6:1",
                type: "",
              },
            ],
            src: "1778:182:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2112:220:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "2122:74:1",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "2188:3:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2193:2:1",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "2129:58:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2129:67:1",
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "2122:3:1",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "2294:3:1",
                      },
                    ],
                    functionName: {
                      name: "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
                      nodeType: "YulIdentifier",
                      src: "2205:88:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2205:93:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2205:93:1",
                },
                {
                  nodeType: "YulAssignment",
                  src: "2307:19:1",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "2318:3:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2323:2:1",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "2314:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2314:12:1",
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "2307:3:1",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "2100:3:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "2108:3:1",
                type: "",
              },
            ],
            src: "1966:366:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2509:248:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "2519:26:1",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "2531:9:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2542:2:1",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "2527:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2527:18:1",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "2519:4:1",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2566:9:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "2577:1:1",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "2562:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2562:17:1",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "2585:4:1",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2591:9:1",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "2581:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2581:20:1",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "2555:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2555:47:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2555:47:1",
                },
                {
                  nodeType: "YulAssignment",
                  src: "2611:139:1",
                  value: {
                    arguments: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "2745:4:1",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "2619:124:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2619:131:1",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "2611:4:1",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "2489:9:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "2504:4:1",
                type: "",
              },
            ],
            src: "2338:419:1",
          },
        ],
      },
      contents:
        '{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(memPtr) {\n\n        mstore(add(memPtr, 0), "Ownable: caller is not the owner")\n\n    }\n\n    function abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 32)\n        store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n}\n',
      id: 1,
      language: "Yul",
      name: "#utility.yul",
    },
  ],
  sourceMap:
    "57:565:0:-:0;;;189:50;;;;;;;;;;222:10;213:19;;;;;;;;;;57:565;;;;;;;;;;;;",
  deployedSourceMap:
    "57:565:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;373:127;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;245:122;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;373:127;441:4;492:1;464:15;:25;480:8;464:25;;;;;;;;;;;;;;;;:29;457:36;;373:127;;;:::o;245:122::-;559:6;545:20;;:10;:20;;;537:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;345:15:::1;316;:26:::0;332:9:::1;316:26;;;;;;;;;;;;;;;:44;;;;245:122:::0;:::o;88:117:1:-;197:1;194;187:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:96::-;503:7;532:24;550:5;532:24;:::i;:::-;521:35;;466:96;;;:::o;568:122::-;641:24;659:5;641:24;:::i;:::-;634:5;631:35;621:63;;680:1;677;670:12;621:63;568:122;:::o;696:139::-;742:5;780:6;767:20;758:29;;796:33;823:5;796:33;:::i;:::-;696:139;;;;:::o;841:329::-;900:6;949:2;937:9;928:7;924:23;920:32;917:119;;;955:79;;:::i;:::-;917:119;1075:1;1100:53;1145:7;1136:6;1125:9;1121:22;1100:53;:::i;:::-;1090:63;;1046:117;841:329;;;;:::o;1176:90::-;1210:7;1253:5;1246:13;1239:21;1228:32;;1176:90;;;:::o;1272:109::-;1353:21;1368:5;1353:21;:::i;:::-;1348:3;1341:34;1272:109;;:::o;1387:210::-;1474:4;1512:2;1501:9;1497:18;1489:26;;1525:65;1587:1;1576:9;1572:17;1563:6;1525:65;:::i;:::-;1387:210;;;;:::o;1603:169::-;1687:11;1721:6;1716:3;1709:19;1761:4;1756:3;1752:14;1737:29;;1603:169;;;;:::o;1778:182::-;1918:34;1914:1;1906:6;1902:14;1895:58;1778:182;:::o;1966:366::-;2108:3;2129:67;2193:2;2188:3;2129:67;:::i;:::-;2122:74;;2205:93;2294:3;2205:93;:::i;:::-;2323:2;2318:3;2314:12;2307:19;;1966:366;;;:::o;2338:419::-;2504:4;2542:2;2531:9;2527:18;2519:26;;2591:9;2585:4;2581:20;2577:1;2566:9;2562:17;2555:47;2619:131;2745:4;2619:131;:::i;:::-;2611:139;;2338:419;;;:::o",
  source:
    '// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\ncontract GithubVerification {\n    mapping(address => uint256) internal verifiedTimeMap;\n\n    address private immutable _owner;\n\n    constructor() {\n        _owner = msg.sender;\n    }\n\n    function verifyAddress(address _toVerify) external onlyOwner {\n        verifiedTimeMap[_toVerify] = block.timestamp;\n    }\n\n    function addressIsVerified(address _toCheck) external view returns (bool) {\n        return verifiedTimeMap[_toCheck] > 0;\n    }\n\n    modifier onlyOwner() {\n        require(msg.sender == _owner, "Ownable: caller is not the owner");\n        _;\n    }\n}\n',
  sourcePath:
    "/Users/mik-0/Documents/GitHub/SecureSECOVerification/block/contracts/GithubVerification.sol",
  ast: {
    absolutePath: "project:/contracts/GithubVerification.sol",
    exportedSymbols: {
      GithubVerification: [58],
    },
    id: 59,
    license: "MIT",
    nodeType: "SourceUnit",
    nodes: [
      {
        id: 1,
        literals: ["solidity", "^", "0.8", ".0"],
        nodeType: "PragmaDirective",
        src: "32:23:0",
      },
      {
        abstract: false,
        baseContracts: [],
        canonicalName: "GithubVerification",
        contractDependencies: [],
        contractKind: "contract",
        fullyImplemented: true,
        id: 58,
        linearizedBaseContracts: [58],
        name: "GithubVerification",
        nameLocation: "66:18:0",
        nodeType: "ContractDefinition",
        nodes: [
          {
            constant: false,
            id: 5,
            mutability: "mutable",
            name: "verifiedTimeMap",
            nameLocation: "128:15:0",
            nodeType: "VariableDeclaration",
            scope: 58,
            src: "91:52:0",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_mapping$_t_address_$_t_uint256_$",
              typeString: "mapping(address => uint256)",
            },
            typeName: {
              id: 4,
              keyName: "",
              keyNameLocation: "-1:-1:-1",
              keyType: {
                id: 2,
                name: "address",
                nodeType: "ElementaryTypeName",
                src: "99:7:0",
                typeDescriptions: {
                  typeIdentifier: "t_address",
                  typeString: "address",
                },
              },
              nodeType: "Mapping",
              src: "91:27:0",
              typeDescriptions: {
                typeIdentifier: "t_mapping$_t_address_$_t_uint256_$",
                typeString: "mapping(address => uint256)",
              },
              valueName: "",
              valueNameLocation: "-1:-1:-1",
              valueType: {
                id: 3,
                name: "uint256",
                nodeType: "ElementaryTypeName",
                src: "110:7:0",
                typeDescriptions: {
                  typeIdentifier: "t_uint256",
                  typeString: "uint256",
                },
              },
            },
            visibility: "internal",
          },
          {
            constant: false,
            id: 7,
            mutability: "immutable",
            name: "_owner",
            nameLocation: "176:6:0",
            nodeType: "VariableDeclaration",
            scope: 58,
            src: "150:32:0",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_address",
              typeString: "address",
            },
            typeName: {
              id: 6,
              name: "address",
              nodeType: "ElementaryTypeName",
              src: "150:7:0",
              stateMutability: "nonpayable",
              typeDescriptions: {
                typeIdentifier: "t_address",
                typeString: "address",
              },
            },
            visibility: "private",
          },
          {
            body: {
              id: 15,
              nodeType: "Block",
              src: "203:36:0",
              statements: [
                {
                  expression: {
                    id: 13,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 10,
                      name: "_owner",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 7,
                      src: "213:6:0",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      expression: {
                        id: 11,
                        name: "msg",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 4294967281,
                        src: "222:3:0",
                        typeDescriptions: {
                          typeIdentifier: "t_magic_message",
                          typeString: "msg",
                        },
                      },
                      id: 12,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "226:6:0",
                      memberName: "sender",
                      nodeType: "MemberAccess",
                      src: "222:10:0",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    src: "213:19:0",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  id: 14,
                  nodeType: "ExpressionStatement",
                  src: "213:19:0",
                },
              ],
            },
            id: 16,
            implemented: true,
            kind: "constructor",
            modifiers: [],
            name: "",
            nameLocation: "-1:-1:-1",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 8,
              nodeType: "ParameterList",
              parameters: [],
              src: "200:2:0",
            },
            returnParameters: {
              id: 9,
              nodeType: "ParameterList",
              parameters: [],
              src: "203:0:0",
            },
            scope: 58,
            src: "189:50:0",
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
          {
            body: {
              id: 30,
              nodeType: "Block",
              src: "306:61:0",
              statements: [
                {
                  expression: {
                    id: 28,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      baseExpression: {
                        id: 23,
                        name: "verifiedTimeMap",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 5,
                        src: "316:15:0",
                        typeDescriptions: {
                          typeIdentifier: "t_mapping$_t_address_$_t_uint256_$",
                          typeString: "mapping(address => uint256)",
                        },
                      },
                      id: 25,
                      indexExpression: {
                        id: 24,
                        name: "_toVerify",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 18,
                        src: "332:9:0",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: "IndexAccess",
                      src: "316:26:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      expression: {
                        id: 26,
                        name: "block",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 4294967292,
                        src: "345:5:0",
                        typeDescriptions: {
                          typeIdentifier: "t_magic_block",
                          typeString: "block",
                        },
                      },
                      id: 27,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "351:9:0",
                      memberName: "timestamp",
                      nodeType: "MemberAccess",
                      src: "345:15:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "316:44:0",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 29,
                  nodeType: "ExpressionStatement",
                  src: "316:44:0",
                },
              ],
            },
            functionSelector: "fcb2cafc",
            id: 31,
            implemented: true,
            kind: "function",
            modifiers: [
              {
                id: 21,
                kind: "modifierInvocation",
                modifierName: {
                  id: 20,
                  name: "onlyOwner",
                  nameLocations: ["296:9:0"],
                  nodeType: "IdentifierPath",
                  referencedDeclaration: 57,
                  src: "296:9:0",
                },
                nodeType: "ModifierInvocation",
                src: "296:9:0",
              },
            ],
            name: "verifyAddress",
            nameLocation: "254:13:0",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 19,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 18,
                  mutability: "mutable",
                  name: "_toVerify",
                  nameLocation: "276:9:0",
                  nodeType: "VariableDeclaration",
                  scope: 31,
                  src: "268:17:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 17,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "268:7:0",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "267:19:0",
            },
            returnParameters: {
              id: 22,
              nodeType: "ParameterList",
              parameters: [],
              src: "306:0:0",
            },
            scope: 58,
            src: "245:122:0",
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "external",
          },
          {
            body: {
              id: 44,
              nodeType: "Block",
              src: "447:53:0",
              statements: [
                {
                  expression: {
                    commonType: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    id: 42,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      baseExpression: {
                        id: 38,
                        name: "verifiedTimeMap",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 5,
                        src: "464:15:0",
                        typeDescriptions: {
                          typeIdentifier: "t_mapping$_t_address_$_t_uint256_$",
                          typeString: "mapping(address => uint256)",
                        },
                      },
                      id: 40,
                      indexExpression: {
                        id: 39,
                        name: "_toCheck",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 33,
                        src: "480:8:0",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: false,
                      nodeType: "IndexAccess",
                      src: "464:25:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "BinaryOperation",
                    operator: ">",
                    rightExpression: {
                      hexValue: "30",
                      id: 41,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "number",
                      lValueRequested: false,
                      nodeType: "Literal",
                      src: "492:1:0",
                      typeDescriptions: {
                        typeIdentifier: "t_rational_0_by_1",
                        typeString: "int_const 0",
                      },
                      value: "0",
                    },
                    src: "464:29:0",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  functionReturnParameters: 37,
                  id: 43,
                  nodeType: "Return",
                  src: "457:36:0",
                },
              ],
            },
            functionSelector: "10a4cff7",
            id: 45,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "addressIsVerified",
            nameLocation: "382:17:0",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 34,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 33,
                  mutability: "mutable",
                  name: "_toCheck",
                  nameLocation: "408:8:0",
                  nodeType: "VariableDeclaration",
                  scope: 45,
                  src: "400:16:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 32,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "400:7:0",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "399:18:0",
            },
            returnParameters: {
              id: 37,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 36,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 45,
                  src: "441:4:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bool",
                    typeString: "bool",
                  },
                  typeName: {
                    id: 35,
                    name: "bool",
                    nodeType: "ElementaryTypeName",
                    src: "441:4:0",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "440:6:0",
            },
            scope: 58,
            src: "373:127:0",
            stateMutability: "view",
            virtual: false,
            visibility: "external",
          },
          {
            body: {
              id: 56,
              nodeType: "Block",
              src: "527:93:0",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        id: 51,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          expression: {
                            id: 48,
                            name: "msg",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 4294967281,
                            src: "545:3:0",
                            typeDescriptions: {
                              typeIdentifier: "t_magic_message",
                              typeString: "msg",
                            },
                          },
                          id: 49,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "549:6:0",
                          memberName: "sender",
                          nodeType: "MemberAccess",
                          src: "545:10:0",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: "==",
                        rightExpression: {
                          id: 50,
                          name: "_owner",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 7,
                          src: "559:6:0",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        src: "545:20:0",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                      {
                        hexValue:
                          "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                        id: 52,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "567:34:0",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
                          typeString:
                            'literal_string "Ownable: caller is not the owner"',
                        },
                        value: "Ownable: caller is not the owner",
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                        {
                          typeIdentifier:
                            "t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
                          typeString:
                            'literal_string "Ownable: caller is not the owner"',
                        },
                      ],
                      id: 47,
                      name: "require",
                      nodeType: "Identifier",
                      overloadedDeclarations: [4294967278, 4294967278],
                      referencedDeclaration: 4294967278,
                      src: "537:7:0",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        typeString: "function (bool,string memory) pure",
                      },
                    },
                    id: 53,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "537:65:0",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 54,
                  nodeType: "ExpressionStatement",
                  src: "537:65:0",
                },
                {
                  id: 55,
                  nodeType: "PlaceholderStatement",
                  src: "612:1:0",
                },
              ],
            },
            id: 57,
            name: "onlyOwner",
            nameLocation: "515:9:0",
            nodeType: "ModifierDefinition",
            parameters: {
              id: 46,
              nodeType: "ParameterList",
              parameters: [],
              src: "524:2:0",
            },
            src: "506:114:0",
            virtual: false,
            visibility: "internal",
          },
        ],
        scope: 59,
        src: "57:565:0",
        usedErrors: [],
      },
    ],
    src: "32:591:0",
  },
  compiler: {
    name: "solc",
    version: "0.8.18+commit.87f61d96.Emscripten.clang",
  },
  networks: {
    "5777": {
      events: {
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
      },
      links: {},
      address: "0xee7dA9A4Ba8243975A1d527751E5F2Bee0f6816A",
      transactionHash:
        "0xd13f47fbe5fd0a7a8a547c30a23cf4b5cd0fd712ed89f32249215b81dcd6d04a",
    },
  },
  schemaVersion: "3.4.12",
  updatedAt: "2023-03-09T14:29:33.228Z",
  networkType: "ethereum",
  devdoc: {
    kind: "dev",
    methods: {},
    version: 1,
  },
  userdoc: {
    kind: "user",
    methods: {},
    version: 1,
  },
};