import React, { useState, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    if (message.trim() !== '') {
      onSendMessage(message.trim());
      setMessage('');
    }
  }, [message, onSendMessage]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }, [handleSubmit]);

  return (
    <div className="flex items-center gap-2 p-2">
      <Input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="flex-grow"
      />
      <Button onClick={handleSubmit} disabled={!message.trim()}>
        <Send className="w-4 h-4 mr-2" />
        Send
      </Button>
    </div>
  );
};

export default ChatInput;