import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ForecastRepository {
  async saveForecast(cityId: string, forecast: any) {
    return prisma.forecast.create({
      data: {
        cityId,
        fetchedAt: new Date(),
        data: JSON.stringify(forecast)
      }
    });
  }

  async getLatestForecast(cityId: string) {
    const forecast = await prisma.forecast.findFirst({
      where: { cityId },
      orderBy: {
        fetchedAt: "desc"
      }
    });

    if (!forecast) return null;

    return {
      ...forecast,
      data: JSON.parse(forecast.data)
    };
  }
}