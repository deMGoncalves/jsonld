import * as f from 'f'
import hook from 'hook'
import graph from './graph'
import render from './render'

export default (structured) =>
  hook(f.once((target) => render(f.push(graph, structured(target)))))
