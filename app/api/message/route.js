import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
  const userMessage = await request.json();
  const response = await axios.post('http://43.203.75.81:4000/api/message', userMessage, {
    headers: { 'Content-Type': 'application/json' },
  });

  return NextResponse.json(response.data);
}
