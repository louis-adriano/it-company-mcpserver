'use client'

import { useState } from 'react'
import { searchKnowledge } from '@/app/actions/mcp-actions'

export function KnowledgeTester() {
  const [question, setQuestion] = useState('')
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim()) return

    setLoading(true)
    setResult(null)

    try {
      const response = await searchKnowledge(question)
      if (response.success && response.result) {
        setResult(response.result.content[0].text)
      } else if (response.error) {
        setResult(`Error: ${response.error.message}`)
      }
    } catch (error) {
      setResult(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setLoading(false)
    }
  }

  const sampleQuestions = [
    "What services does LOU IT offer?",
    "Who is the CEO?",
    "What technologies do you use?",
    "How can I contact you?",
    "Tell me about the team",
    "What are your prices?"
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Knowledge Base Testing</h2>
      <p className="text-gray-600 mb-6">
        Test the same knowledge base that Claude will use when connected via MCP.
      </p>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-4">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask about LOU IT..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !question.trim()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Searching...' : 'Ask'}
          </button>
        </div>
      </form>

      {/* Sample Questions */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Try these sample questions:</h3>
        <div className="flex flex-wrap gap-2">
          {sampleQuestions.map((q, index) => (
            <button
              key={index}
              onClick={() => setQuestion(q)}
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
              disabled={loading}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Result */}
      {result && (
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-2">Response:</h3>
          <div className="text-gray-700 whitespace-pre-line">{result}</div>
        </div>
      )}

      {/* Info Box */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-2">How it works:</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• This interface uses the same knowledge base logic as the MCP server</li>
          <li>• Claude Desktop will access the exact same data via the MCP endpoint</li>
          <li>• Questions are processed using simple keyword matching</li>
          <li>• Try asking about: company, services, team, technologies, pricing, contact</li>
        </ul>
      </div>
    </div>
  )
}