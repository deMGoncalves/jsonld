import * as f from 'f';
import hook from 'hook';
import graph from "./graph";
import render from "./render";
export default (target) => hook(f.once((page) => render(f.push(graph, target(page)))));
