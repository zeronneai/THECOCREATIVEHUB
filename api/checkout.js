import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { priceId } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription', 
      success_url: `${req.headers.origin}/?success=true`,
      cancel_url: `${req.headers.origin}/`,
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Error en Stripe:", error);
    res.status(500).json({ error: 'Hubo un error al procesar el pago' });
  }
}
