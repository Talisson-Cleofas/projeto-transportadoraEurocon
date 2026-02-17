import { Hono } from 'hono';

// Definimos o tipo para o TypeScript reconhecer o DB (D1)
type Bindings = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

// Rota de teste para ver se o banco está funcionando
app.get('/api/test', async (c) => {
  try {
    const { results } = await c.env.DB.prepare('SELECT 1').all();
    return c.json({ success: true, message: "Conectado ao D1!", results });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// Rota para receber contatos do site
app.post('/api/contact', async (c) => {
  const body = await c.req.json();
  const { name, email, message } = body;

  await c.env.DB.prepare(
    'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)'
  )
  .bind(name, email, message)
  .run();

  return c.json({ message: 'Contato salvo com sucesso!' }, 201);
});

export default app;