'use client';

import Head from 'next/head';
import Chatbot from '../components/chatbot/Chatbot';

export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Componente Head para configurar el contenido del <head> HTML */}
      <Head>
        <title>Chatbot Institución Educativa</title> {/* Título de la página que aparece en la pestaña del navegador */}
        <meta name="description" content="Chatbot para soporte estudiantil" /> {/* Descripción de la página para SEO */}
        <link rel="icon" href="/favicon.ico" /> {/* Enlace al icono de la pestaña del navegador */}
      </Head>

      <main>
        {/* Contenido principal de la página */}
        <h1 style={{ textAlign: 'center' }}>Bienvenido al Chatbot de la Institución Educativa</h1> {/* Título principal centrado */}
        <p style={{ textAlign: 'center' }}>¡Hola! Soy Chati, tu asistente virtual. ¿En qué puedo ayudarte hoy?</p> {/* Mensaje de bienvenida centrado */}
        <Chatbot /> {/* Renderiza el componente Chatbot */}
      </main>
    </div>
  );
}
