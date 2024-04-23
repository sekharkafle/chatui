import { ChatWindow } from "@/components/ChatWindow";
import { IntermediateStep } from "@/components/IntermediateStep";

export default function Home() {
  const endPoint=""
  const InfoCard = (
    <div ></div>
  );
  return (
    <ChatWindow
      endpoint={endPoint}
      emoji=""
      titleText="Chatty Assistant"
      placeholder="I'm a chatty LLM assistant. Ask me anything!"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}