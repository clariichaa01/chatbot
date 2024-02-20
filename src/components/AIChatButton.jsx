import { Bot } from "lucide-react"
import AIChatBox from "./AiChatBox"
import { Button } from "./ui/button"
import { useState } from "react"

export default function AIChatButton() {
    const [chatBoxOpen, setChatBoxOpen] = useState(false)

    return (
        <>
            <Button onClick={() => setChatBoxOpen(true)}>
                <Bot size={20} className="mr-2" />
                AI Chat
            </Button>
            <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
        </>
    )
}
