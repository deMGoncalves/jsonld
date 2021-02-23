import h, { render } from 'htmlparser';
import * as f from 'f';
import graph from "./graph";
export default f.debounce(() => render(h("script", { type: 'application/ld+json' }, JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': f.filter(graph, f.compose(f.not, f.isEmpty)),
    '@type': 'Schema'
}))));
