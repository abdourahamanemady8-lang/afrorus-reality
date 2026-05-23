import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nom, email, sujet, message } = body;

    if (!nom || !email || !message) {
      return NextResponse.json({ error: 'Tous les champs obligatoires sont requis.' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'AfroRus Reality <onboarding@resend.dev>',
      to: 'feloninchallah@gmail.com',   // ← Remplace ici
      subject: `Nouveau message de ${nom} - ${sujet || 'Formulaire contact'}`,
      html: `
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, message: 'Message envoyé avec succès.' }, { status: 200 });
  } catch (error) {
    console.error('Erreur envoi email:', error);
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
  }
}