// 📁 app/api/wilayah/[resource]/[id]/route.ts
import { NextResponse } from "next/server";
import axios from "axios";
import https from "https";

const agent = new https.Agent({
  rejectUnauthorized: false,
});

const API_BASE_URL = "https://ibnux.github.io/data-indonesia";

export async function GET(
  request: Request,
  { params }: { params: { resource: string; id: string } }
) {
  const { resource, id } = params;

  if (!resource || !id) {
    return NextResponse.json({ message: "Invalid path" }, { status: 400 });
  }

  let apiUrl = "";

  // Logika yang lebih tepat untuk setiap level wilayah
  if (resource === "provinsi" && id === "1") {
    // Jalur khusus untuk mendapatkan semua provinsi
    apiUrl = `${API_BASE_URL}/provinsi.json`;
  } else if (resource === "kabupaten") {
    // Jalur untuk mendapatkan kabupaten berdasarkan ID provinsi
    apiUrl = `${API_BASE_URL}/kabupaten/${id}.json`;
  } else if (resource === "kecamatan") {
    // Jalur untuk mendapatkan kecamatan berdasarkan ID kabupaten
    apiUrl = `${API_BASE_URL}/kecamatan/${id}.json`;
  } else if (resource === "kelurahan") {
    // Jalur untuk mendapatkan kelurahan berdasarkan ID kecamatan
    apiUrl = `${API_BASE_URL}/kelurahan/${id}.json`;
  } else {
    // Kasus fallback jika resource tidak valid
    return NextResponse.json(
      { message: "Resource not found" },
      { status: 404 }
    );
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
