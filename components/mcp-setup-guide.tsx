'use client'

import { useState } from 'react'

export function McpSetupGuide() {
  const [copied, setCopied] = useState(false)

  // This will be updated when deployed to Vercel
  const deploymentUrl = typeof window !== 'undefined' 
    ? `${window.location.protocol}//${window.location.host}`
    : 'https://your-app.vercel.app'

  const config = `{
  "mcpServers": {
    "lou-it": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "${deploymentUrl}/api/mcp"
      ]
    }
  }
}`

  const copyConfig = async () => {
    try {
      await navigator.clipboard.writeText(config)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy config:', err)
    }
  }

  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Connect to Claude Desktop</h2>
        <p className="text-gray-600 mb-4">
          Follow these steps to connect this knowledge base to Claude Desktop via the Model Context Protocol (MCP).
        </p>
      </div>

      {/* Step 1 */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 1: Install Claude Desktop</h3>
        <p className="text-gray-600 mb-4">
          Download and install Claude Desktop from the official website.
        </p>
        <a
          href="https://claude.ai/download"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Download Claude Desktop →
        </a>
      </div>

      {/* Step 2 */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 2: Configure MCP Connection</h3>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Configuration file location:</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-gray-50 p-3 rounded">
              <strong>Windows:</strong><br />
              <code className="text-xs">%APPDATA%\Claude\claude_desktop_config.json</code>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <strong>macOS:</strong><br />
              <code className="text-xs">~/Library/Application Support/Claude/claude_desktop_config.json</code>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Add this configuration:</h4>
          <div className="relative">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{config}</code>
            </pre>
            <button
              onClick={copyConfig}
              className="absolute top-2 right-2 px-3 py-1 bg-gray-700 text-white text-xs rounded hover:bg-gray-600 transition-colors"
            >
              {copied ? '✓ Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="font-semibold text-yellow-800 mb-2">Important:</h4>
          <ul className="text-sm text-yellow-800 space-y-1">
            <li>• If the config file doesn&apos;t exist, create it</li>
            <li>• Make sure the URL matches your deployed app</li>
            <li>• The current URL is: <code className="bg-yellow-100 px-1 rounded">{deploymentUrl}</code></li>
          </ul>
        </div>
      </div>

      {/* Step 3 */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 3: Restart Claude Desktop</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-600">
          <li>Completely close Claude Desktop</li>
          <li>Reopen Claude Desktop</li>
          <li>Look for a hammer icon (🔨) in the input box</li>
          <li>The hammer icon indicates MCP tools are available</li>
        </ol>
      </div>

      {/* Step 4 */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 4: Test the Connection</h3>
        <p className="text-gray-600 mb-4">Try asking Claude questions about LOU IT:</p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Example questions:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• &quot;What services does LOU IT offer?&quot;</li>
              <li>• &quot;Who is the CEO of LOU IT?&quot;</li>
              <li>• &quot;How can I contact LOU IT?&quot;</li>
              <li>• &quot;What technologies does LOU IT use?&quot;</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Success indicators:</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• 🔨 Hammer icon appears in input</li>
              <li>• Claude can answer LOU IT questions</li>
              <li>• Responses include company details</li>
              <li>• No &quot;I don&apos;t have access&quot; errors</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Troubleshooting</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">No hammer icon?</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Check the config file syntax (valid JSON)</li>
              <li>• Verify the URL is accessible</li>
              <li>• Restart Claude Desktop completely</li>
              <li>• Check Claude Desktop logs for errors</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Connection errors?</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Ensure this app is deployed and running</li>
              <li>• Test the URL in your browser: <code className="bg-gray-100 px-1 rounded">{deploymentUrl}/api/mcp</code></li>
              <li>• Check your internet connection</li>
              <li>• Try redeploying the app</li>
            </ul>
          </div>
        </div>
      </div>

      {/* What&apos;s Next */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">What&apos;s Next?</h3>
        <p className="text-blue-800 mb-4">
          Once connected, Claude will have access to LOU IT&apos;s knowledge base and can answer questions about:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-3 rounded">
            <h4 className="font-semibold text-blue-900 text-sm">Company Info</h4>
            <p className="text-xs text-blue-700">About us, mission, location</p>
          </div>
          <div className="bg-white p-3 rounded">
            <h4 className="font-semibold text-blue-900 text-sm">Services</h4>
            <p className="text-xs text-blue-700">Offerings, pricing, details</p>
          </div>
          <div className="bg-white p-3 rounded">
            <h4 className="font-semibold text-blue-900 text-sm">Team & Tech</h4>
            <p className="text-xs text-blue-700">Staff, technologies, contact</p>
          </div>
        </div>
      </div>
    </div>
  )
}