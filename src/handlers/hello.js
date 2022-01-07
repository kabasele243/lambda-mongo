async function hello(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from bro' }),
  };
}

export const handler = hello;


