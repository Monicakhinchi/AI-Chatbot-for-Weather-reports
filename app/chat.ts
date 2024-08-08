// pages/api/chat.ts

import type { NextApiRequest, NextApiResponse } from 'next';

interface ChatRequest {
    message: string;
}

interface ChatResponse {
    reply: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ChatResponse>) {
    if (req.method === 'POST') {
        const { message }: ChatRequest = req.body;

        // Replace with your AI service integration
        const apiKey = process.env.OPENAI_API_KEY;
        try {
            const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt: message,
                    max_tokens: 150,
                }),
            });

            const data = await response.json();
            res.status(200).json({ reply: data.choices[0].text.trim() });
        } catch (error) {
            res.status(500).json({ reply: 'Sorry, I couldn\'t fetch the AI response.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
