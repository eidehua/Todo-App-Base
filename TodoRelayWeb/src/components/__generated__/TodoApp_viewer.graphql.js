/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type TodoListFooter_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TodoApp_viewer$ref: FragmentReference;
export type TodoApp_viewer = {|
  +id: string,
  +$fragmentRefs: TodoListFooter_viewer$ref,
  +$refType: TodoApp_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TodoApp_viewer",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "TodoListFooter_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8ba92a6f137d22386635f08a47260bc3';
module.exports = node;
