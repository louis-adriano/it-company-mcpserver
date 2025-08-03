import { createMcpHandler } from "mcp-handler";
import { searchKnowledgeBase, knowledgeBaseTool } from "@/lib/knowledge-base";

const handler = createMcpHandler(
  (server) => {
    server.tool(
      knowledgeBaseTool.name,
      knowledgeBaseTool.description,
      knowledgeBaseTool.schema,
      async ({ question }) => {
        // Use the shared knowledge base logic
        const result = searchKnowledgeBase(question);
        return {
          content: [result],
        };
      }
    );
  },
  {
    // Server options
  },
  {
    // Handler options
    basePath: "/api",
    maxDuration: 60,
    verboseLogs: true,
  }
);

export { handler as GET, handler as POST };