import { Hono } from 'hono'

const app = new Hono()

app.get('/', async (c) => {
  const answer = await c.env.AI.run(
    '@cf/meta/llama-3-8b-instruct',
    {
      messages: [
        { role: 'user', content: `こんにちは` }
      ]
    }
  )

  return c.html(answer.response)
})

export default app
