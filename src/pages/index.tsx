import { ChatWindow } from "@/components/ChatWindow";
import { IntermediateStep } from "@/components/IntermediateStep";

export default function Home() {
  const InfoCard = (
    <div ></div>
  );
  return (
    <ChatWindow
      endpoint="https://f4wo0au9r5.execute-api.us-east-1.amazonaws.com/default/claude-chat"
      emoji=""
      titleText="Chatty Assistant"
      placeholder="I'm a chatty LLM assistant. Ask me anything!"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}