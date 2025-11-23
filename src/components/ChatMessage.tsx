import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { UserRound, Bot } from "lucide-react";
import { format } from 'date-fns';

interface ChatMessageProps {
  sender: 'user' | 'ai';
  timestamp: Date;
  content: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ sender, timestamp, content }) => {
  return (
    <div
      className={cn(
        "flex items-start space-x-4 py-2",
        sender === 'user' ? 'justify-end' : 'justify-start',
        sender === 'user' ? 'flex-row-reverse' : 'flex-row'
      )}
    >
      <Avatar className="h-8 w-8">
        <AvatarImage src={sender === 'user' ? '' : ''} alt={sender === 'user' ? "User" : "AI"} />
        <AvatarFallback>
          {sender === 'user' ? <UserRound className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
        </AvatarFallback>
      </Avatar>
      <div>
        <div className="flex items-center space-x-2">
          {sender === 'user' ? null : <p className="text-sm font-medium text-gray-900 dark:text-gray-100">AI</p>}
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {format(timestamp, 'MMM dd, yyyy h:mm a')}
          </p>
          {sender === 'ai' ? null : <p className="text-sm font-medium text-gray-900 dark:text-gray-100">You</p>}
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-200">{content}</p>
      </div>
    </div>
  );
};

export default ChatMessage;