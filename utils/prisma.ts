import { PrismaMssql } from "@prisma/adapter-mssql";
import { PrismaClient } from "../generated/prisma/client";

// Parses "sqlserver://host:port;database=...;user=...;password=...;encrypt=...;"
function parseSqlServerUrl(url: string) {
  const [hostPort, ...pairs] = url.replace(/^sqlserver:\/\//, "").split(";");
  const [server, port] = hostPort.split(":");
  const options: Record<string, string> = {};
  for (const pair of pairs) {
    const index = pair.indexOf("=");
    if (index > 0) options[pair.slice(0, index).trim().toLowerCase()] = pair.slice(index + 1);
  }
  return {
    server,
    port: Number(port ?? 1433),
    database: options.database,
    user: options.user,
    password: options.password,
    options: {
      encrypt: options.encrypt === "true",
      trustServerCertificate: options.trustservercertificate === "true",
    },
  };
}

const adapter = new PrismaMssql(parseSqlServerUrl(process.env.DATABASE_URL ?? ""));

export const prisma = new PrismaClient({ adapter });
