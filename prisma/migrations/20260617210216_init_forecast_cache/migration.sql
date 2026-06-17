-- CreateTable
CREATE TABLE "Forecast" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cityId" TEXT NOT NULL,
    "fetchedAt" DATETIME NOT NULL,
    "data" TEXT NOT NULL
);
