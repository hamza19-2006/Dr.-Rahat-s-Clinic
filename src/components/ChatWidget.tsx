import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'ai';
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Hello! I am the clinic assistant. How can I help you today?', sender: 'ai' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue.trim();
    setInputValue('');
    
    // Add user message
    const newUserMsg: Message = { id: Date.now().toString(), text: userMsg, sender: 'user' };
    setMessages(prev => [...prev, newUserMsg]);
    setIsLoading(true);

    try {
      const response = await fetch('https://hamza2222.app.n8n.cloud/webhook/newclinic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMsg }),
      });

      if (!response.ok) throw new Error('Network response was not ok');
      
      const responseText = await response.text();
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (err) {
        data = responseText;
      }

      console.log("n8n webhook response:", data);

      // n8n often returns an array of objects for webhook responses
      if (Array.isArray(data) && data.length > 0) {
        data = data[0];
      }
      
      // Extract text from common n8n response structures
      const aiResponseText = data?.output || data?.response || data?.message || data?.text || (typeof data === 'string' ? data : JSON.stringify(data));

      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: aiResponseText,
        sender: 'ai'
      }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: "I'm sorry, I'm having trouble connecting right now. Please try calling the clinic or messaging us on WhatsApp at 0325 0783600.",
        sender: 'ai'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-clinic-teal hover:bg-clinic-teal-dark text-white rounded-full shadow-xl shadow-clinic-teal/20 flex items-center justify-center transition-all z-50 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] bg-clinic-surface rounded-2xl shadow-2xl shadow-black/50 flex flex-col overflow-hidden z-50 border border-white/10"
          >
            {/* Header */}
            <div className="bg-clinic-surface-light text-white p-4 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-clinic-purple/20 rounded-full flex items-center justify-center text-clinic-purple">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">Clinic Assistant</h3>
                  <p className="text-xs text-clinic-teal">Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-clinic-text-muted"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-clinic-bg">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.sender === 'user' ? 'bg-clinic-teal text-white' : 'bg-clinic-surface-light text-clinic-purple'}`}>
                      {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div 
                      className={`p-3 rounded-2xl text-sm ${
                        msg.sender === 'user' 
                          ? 'bg-clinic-teal text-white rounded-tr-none' 
                          : 'bg-clinic-surface border border-white/5 text-clinic-text rounded-tl-none shadow-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-2 max-w-[80%]">
                    <div className="w-8 h-8 rounded-full bg-clinic-surface-light text-clinic-purple flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="p-4 rounded-2xl rounded-tl-none bg-clinic-surface border border-white/5 shadow-sm flex items-center gap-1">
                      <motion.div className="w-2 h-2 bg-clinic-purple/60 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                      <motion.div className="w-2 h-2 bg-clinic-purple/60 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                      <motion.div className="w-2 h-2 bg-clinic-purple/60 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 bg-clinic-surface border-t border-white/5">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-clinic-bg border border-white/10 rounded-full px-4 py-3 text-sm text-white placeholder-clinic-text-muted focus:outline-none focus:ring-2 focus:ring-clinic-teal/50 focus:border-clinic-teal transition-all"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="w-12 h-12 bg-clinic-purple hover:bg-clinic-purple-dark disabled:bg-clinic-surface-light disabled:text-clinic-text-muted disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors shrink-0"
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5 ml-1" />}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
