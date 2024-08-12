import { NextRequest, NextResponse } from 'next/server';
import fetch from 'node-fetch';

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: Array<{
    description: string;
  }>;
}

interface ErrorResponse {
  message: string;
}

export async function GET(req: NextRequest) {
  const url = new URL(req.nextUrl.href);
  const { searchParams } = url;
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json({ error: 'City name is required' }, { status: 400 });
  }

  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'API key is missing' }, { status: 500 });
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      const errorData = await response.json() as ErrorResponse;
      return NextResponse.json({ error: errorData.message || 'Unknown error' }, { status: response.status });
    }

    const data = await response.json() as WeatherData;
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return NextResponse.json({ error: 'Error fetching weather data' }, { status: 500 });
  }
}