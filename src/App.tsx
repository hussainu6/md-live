import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './App.css'

const defaultMd = `# Hello Markdown!

Type or paste **markdown** here and see it render live.

- Lists work
- \`code\` works
- **bold** and *italic* work

\`\`\`js
console.log('Code blocks too!')
\`\`\`
`

function App() {
  const [markdown, setMarkdown] = useState(defaultMd)

  return (
    <div className="app">
      <header>
        <h1>MD Live</h1>
        <p>Markdown live preview</p>
      </header>
      <div className="editor">
        <div className="panel">
          <h3>Markdown</h3>
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Write markdown here..."
            spellCheck={false}
          />
        </div>
        <div className="panel preview">
          <h3>Preview</h3>
          <div className="render">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
