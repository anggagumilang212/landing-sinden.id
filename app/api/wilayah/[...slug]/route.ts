import { NextResponse } from "next/server";
import axios from "axios";
import https from "https";

// Workaround untuk masalah sertifikat di jaringan lokal Anda
const agent = new https.Agent({
  rejectUnauthorized: false,
});

const API_BASE_URL = "https://ibnux.github.io/data-indonesia";

export async function GET(
  request: Request,
  { params }: { params: { slug: string[] } }
) {
  const slug = params.slug;

  if (!slug || !Array.isArray(slug)) {
    return NextResponse.json({ message: "Invalid path" }, { status: 400 });
  }

  const [resource, id] = slug;
  let apiUrl = "";

  // Logika untuk membangun URL sesuai format API Ibnux
  if (resource === "provinsi.json") {
    apiUrl = `${API_BASE_URL}/provinsi.json`;
  } else {
    // Contoh: /kabupaten/11.json
    apiUrl = `${API_BASE_URL}/${resource}/${id}`;
  }

  try {
    const response = await axios.get(apiUrl, { httpsAgent: agent });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(`Error fetching from ${apiUrl}:`, error);
    return NextResponse.json(
      { message: "Failed to fetch data from external API." },
      { status: 500 }
    );
  }
}
