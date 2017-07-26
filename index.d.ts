// Type definitions for LocallyDB v0.0.9
// Project: http://boutglay.com/locallydb/
// Definitions by: David Soler <https://github.com/aensoler>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4.2

interface Element {
    cid?: number;
    $created?: string;
    $updated?: string;
    [propName: string]: any;
}

declare class DB {
  constructor(path: string);
  path: string;
  collection(name: string, autosave?: boolean): Collection;
  removeCollection(name: string): any;
  getCollectionNames(): any;
}

declare class List {
  constructor(items?: Element[]);
  items: Element[];
  toArray(): Element[];
  length(): number;
  push(element: Element): number;
  pop(element: Element): Element;
  shift(element: Element): Element;
  unshift(element: Element): Element;
  clear(): Element[];
  remove(from: number, to: number): any;
  where(selection: string): Element[];
  where(selection: Object): Element[];
  sort(method: string): any[];
  group(method: string): any;
}

declare class Collection extends List {
  constructor(name: string, db: DB, autosave?: boolean);
  name: string;
  db: DB;
  autosave: string;
  header: {
    $created: string;
    $updated: string;
    lcid: number;
  };
  _cpath: string;
  save(): any;
  insert(element: Element): number;
  insert(elements: Element[]): number[];
  upsert(element: Element, key: string, value: any): number;
  get(cid: number): Element;
  update(cid: number, obj: Object): boolean;
  replace(cid: number, obj: Object): boolean;
  remove(cid: number): boolean;
  deleteProperty(cid: number, property: any): boolean;
  deleteProperty(cid: number, property: any[]): boolean;
}

declare module "locallydb" {
  export = DB;
}
