import data from "./data.json";

export async function GET() {
  return Response.json(data);
}

export async function POST(req) {
  const data = await req.json();
  // simulating latency
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Response.json({ data: "Successfull", data }));
    }, 2000);
  });
}
