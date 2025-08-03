'use server'

import { searchKnowledgeBase, knowledgeBaseTool } from "@/lib/knowledge-base"

// Server action that uses the shared knowledge base logic
export async function searchKnowledge(question: string) {
  try {
    const result = searchKnowledgeBase(question)
    
    return {
      success: true,
      result: {
        content: [result]
      }
    }
  } catch (error) {
    return {
      success: false,
      error: {
        code: -32602,
        message: error instanceof Error ? error.message : 'Invalid question format'
      }
    }
  }
}

export async function listTools() {
  return {
    success: true,
    result: {
      tools: [
        {
          name: knowledgeBaseTool.name,
          description: knowledgeBaseTool.description,
          inputSchema: {
            type: 'object',
            properties: {
              question: {
                type: 'string',
                description: 'Question about LOU IT company, services, team, or technologies'
              }
            },
            required: ['question']
          }
        }
      ]
    }
  }
}