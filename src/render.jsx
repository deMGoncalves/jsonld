import h, { render } from 'h'
import * as f from 'f'
import graph from './graph'

export default f.debounce(() => {
  render(
    document.body,
    <script type='application/ld+json'>
      {
        JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': f.filter(graph, f.compose(f.not, f.isEmpty)),
          '@type': 'Schema'
        })
      }
    </script>
  )
})
