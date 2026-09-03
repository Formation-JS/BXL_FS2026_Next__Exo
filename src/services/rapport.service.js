function delay(time = 1_000) {
  return new Promise((resolve) => { setTimeout(resolve, time); });
}

const data = {
  "overallSummary": {
    "totalEvents": 24,
    "distinctVenues": 10,
    "distinctCities": 9,
    "totalTicketsSold": 10738,
    "totalCapacity": 13030,
    "occupancyRatePercent": 82.4,
    "totalRevenue": 379869.0,
    "averageRevenuePerEvent": 15827.88,
    "averageTicketPrice": 35.38,
    "averageSatisfactionScore": 4.16,
    "soldOutEvents": 4
  },
  "byEventType": [
    {
      "eventType": "Conférence",
      "eventCount": 3,
      "ticketsSold": 1065,
      "occupancyRatePercent": 78.9,
      "revenue": 100125.0,
      "averageTicketPrice": 94.01,
      "revenueSharePercent": 26.4,
      "averageSatisfactionScore": 4.33
    },
    {
      "eventType": "Réception",
      "eventCount": 3,
      "ticketsSold": 835,
      "occupancyRatePercent": 83.5,
      "revenue": 89980.0,
      "averageTicketPrice": 107.76,
      "revenueSharePercent": 23.7,
      "averageSatisfactionScore": 4.67
    },
    {
      "eventType": "Concert",
      "eventCount": 3,
      "ticketsSold": 1443,
      "occupancyRatePercent": 91.3,
      "revenue": 52014.0,
      "averageTicketPrice": 36.05,
      "revenueSharePercent": 13.7,
      "averageSatisfactionScore": 4.57
    },
    {
      "eventType": "Salon",
      "eventCount": 5,
      "ticketsSold": 4230,
      "occupancyRatePercent": 76.2,
      "revenue": 36450.0,
      "averageTicketPrice": 8.62,
      "revenueSharePercent": 9.6,
      "averageSatisfactionScore": 3.79
    },
    {
      "eventType": "Atelier",
      "eventCount": 2,
      "ticketsSold": 120,
      "occupancyRatePercent": 70.6,
      "revenue": 26170.0,
      "averageTicketPrice": 218.08,
      "revenueSharePercent": 6.9,
      "averageSatisfactionScore": 4.75
    },
    {
      "eventType": "Spectacle",
      "eventCount": 2,
      "ticketsSold": 825,
      "occupancyRatePercent": 85.9,
      "revenue": 21915.0,
      "averageTicketPrice": 26.56,
      "revenueSharePercent": 5.8,
      "averageSatisfactionScore": 4.5
    },
    {
      "eventType": "Festival",
      "eventCount": 2,
      "ticketsSold": 1330,
      "occupancyRatePercent": 95.0,
      "revenue": 16110.0,
      "averageTicketPrice": 12.11,
      "revenueSharePercent": 4.2,
      "averageSatisfactionScore": 4.0
    },
    {
      "eventType": "Banquet",
      "eventCount": 1,
      "ticketsSold": 240,
      "occupancyRatePercent": 92.3,
      "revenue": 15600.0,
      "averageTicketPrice": 65.0,
      "revenueSharePercent": 4.1,
      "averageSatisfactionScore": 4.5
    },
    {
      "eventType": "Team building",
      "eventCount": 1,
      "ticketsSold": 215,
      "occupancyRatePercent": 82.7,
      "revenue": 10320.0,
      "averageTicketPrice": 48.0,
      "revenueSharePercent": 2.7,
      "averageSatisfactionScore": 4.4
    },
    {
      "eventType": "Cocktail",
      "eventCount": 1,
      "ticketsSold": 175,
      "occupancyRatePercent": 87.5,
      "revenue": 9625.0,
      "averageTicketPrice": 55.0,
      "revenueSharePercent": 2.5,
      "averageSatisfactionScore": 4.6
    },
    {
      "eventType": "Exposition",
      "eventCount": 1,
      "ticketsSold": 260,
      "occupancyRatePercent": 86.7,
      "revenue": 1560.0,
      "averageTicketPrice": 6.0,
      "revenueSharePercent": 0.4,
      "averageSatisfactionScore": 4.3
    }
  ],
  "byMonth": [
    {
      "monthNumber": 1,
      "monthLabel": "Janvier",
      "eventCount": 2,
      "ticketsSold": 1070,
      "revenue": 28440.0,
      "occupancyRatePercent": 79.3
    },
    {
      "monthNumber": 2,
      "monthLabel": "Février",
      "eventCount": 2,
      "ticketsSold": 735,
      "revenue": 37965.0,
      "occupancyRatePercent": 79.0
    },
    {
      "monthNumber": 3,
      "monthLabel": "Mars",
      "eventCount": 3,
      "ticketsSold": 1643,
      "revenue": 31100.0,
      "occupancyRatePercent": 83.6
    },
    {
      "monthNumber": 4,
      "monthLabel": "Avril",
      "eventCount": 2,
      "ticketsSold": 500,
      "revenue": 24360.0,
      "occupancyRatePercent": 76.9
    },
    {
      "monthNumber": 5,
      "monthLabel": "Mai",
      "eventCount": 2,
      "ticketsSold": 1300,
      "revenue": 28600.0,
      "occupancyRatePercent": 70.3
    },
    {
      "monthNumber": 6,
      "monthLabel": "Juin",
      "eventCount": 3,
      "ticketsSold": 1100,
      "revenue": 37615.0,
      "occupancyRatePercent": 91.7
    },
    {
      "monthNumber": 7,
      "monthLabel": "Juillet",
      "eventCount": 2,
      "ticketsSold": 888,
      "revenue": 17874.0,
      "occupancyRatePercent": 98.7
    },
    {
      "monthNumber": 8,
      "monthLabel": "Août",
      "eventCount": 1,
      "ticketsSold": 215,
      "revenue": 10320.0,
      "occupancyRatePercent": 82.7
    },
    {
      "monthNumber": 9,
      "monthLabel": "Septembre",
      "eventCount": 2,
      "ticketsSold": 660,
      "revenue": 66000.0,
      "occupancyRatePercent": 93.0
    },
    {
      "monthNumber": 10,
      "monthLabel": "Octobre",
      "eventCount": 2,
      "ticketsSold": 1645,
      "revenue": 22375.0,
      "occupancyRatePercent": 87.5
    },
    {
      "monthNumber": 11,
      "monthLabel": "Novembre",
      "eventCount": 2,
      "ticketsSold": 672,
      "revenue": 30270.0,
      "occupancyRatePercent": 68.2
    },
    {
      "monthNumber": 12,
      "monthLabel": "Décembre",
      "eventCount": 1,
      "ticketsSold": 310,
      "revenue": 44950.0,
      "occupancyRatePercent": 88.6
    }
  ],
  "byVenue": [
    {
      "venueId": 3,
      "venueName": "Espace Colibri",
      "city": "Bruxelles",
      "eventCount": 4,
      "ticketsSold": 1355,
      "revenue": 103605.0,
      "occupancyRatePercent": 75.3,
      "averageSatisfactionScore": 4.21
    },
    {
      "venueId": 2,
      "venueName": "Château de Wavrelle",
      "city": "Wavre",
      "eventCount": 2,
      "ticketsSold": 550,
      "revenue": 67750.0,
      "occupancyRatePercent": 78.6,
      "averageSatisfactionScore": 4.56
    },
    {
      "venueId": 6,
      "venueName": "Théâtre de la Cordelette",
      "city": "Liège",
      "eventCount": 3,
      "ticketsSold": 1290,
      "revenue": 41445.0,
      "occupancyRatePercent": 89.6,
      "averageSatisfactionScore": 4.61
    },
    {
      "venueId": 1,
      "venueName": "Le Hangar Central",
      "city": "Bruxelles",
      "eventCount": 2,
      "ticketsSold": 1390,
      "revenue": 31670.0,
      "occupancyRatePercent": 77.2,
      "averageSatisfactionScore": 4.22
    },
    {
      "venueId": 8,
      "venueName": "Halles du Marché Couvert",
      "city": "Mons",
      "eventCount": 3,
      "ticketsSold": 3330,
      "revenue": 26260.0,
      "occupancyRatePercent": 79.3,
      "averageSatisfactionScore": 3.75
    },
    {
      "venueId": 10,
      "venueName": "Studio Kepler",
      "city": "Louvain-la-Neuve",
      "eventCount": 2,
      "ticketsSold": 120,
      "revenue": 26170.0,
      "occupancyRatePercent": 70.6,
      "averageSatisfactionScore": 4.75
    },
    {
      "venueId": 5,
      "venueName": "La Ferme des Tilleuls",
      "city": "Namur",
      "eventCount": 2,
      "ticketsSold": 455,
      "revenue": 25920.0,
      "occupancyRatePercent": 87.5,
      "averageSatisfactionScore": 4.45
    },
    {
      "venueId": 9,
      "venueName": "Jardin des Serres Anciennes",
      "city": "Uccle",
      "eventCount": 2,
      "ticketsSold": 545,
      "revenue": 23790.0,
      "occupancyRatePercent": 90.8,
      "averageSatisfactionScore": 4.61
    },
    {
      "venueId": 4,
      "venueName": "Rooftop Solaris",
      "city": "Anvers",
      "eventCount": 2,
      "ticketsSold": 373,
      "revenue": 17149.0,
      "occupancyRatePercent": 93.2,
      "averageSatisfactionScore": 4.65
    },
    {
      "venueId": 12,
      "venueName": "Chapiteau Nomade",
      "city": "Charleroi",
      "eventCount": 2,
      "ticketsSold": 1330,
      "revenue": 16110.0,
      "occupancyRatePercent": 95.0,
      "averageSatisfactionScore": 4.0
    }
  ],
  "topEventsByRevenue": [
    {
      "rank": 1,
      "eventName": "Congrès Médical Annuel",
      "eventDate": "2025-09-27",
      "eventType": "Conférence",
      "venueId": 3,
      "venueName": "Espace Colibri",
      "ticketsSold": 420,
      "revenue": 50400.0,
      "occupancyRatePercent": 93.3
    },
    {
      "rank": 2,
      "eventName": "Réveillon au Château",
      "eventDate": "2025-12-31",
      "eventType": "Réception",
      "venueId": 2,
      "venueName": "Château de Wavrelle",
      "ticketsSold": 310,
      "revenue": 44950.0,
      "occupancyRatePercent": 88.6
    },
    {
      "rank": 3,
      "eventName": "Rencontres du Numérique",
      "eventDate": "2025-02-12",
      "eventType": "Conférence",
      "venueId": 3,
      "venueName": "Espace Colibri",
      "ticketsSold": 305,
      "revenue": 25925.0,
      "occupancyRatePercent": 67.8
    },
    {
      "rank": 4,
      "eventName": "Nuit Électro d'Hiver",
      "eventDate": "2025-01-18",
      "eventType": "Concert",
      "venueId": 1,
      "venueName": "Le Hangar Central",
      "ticketsSold": 780,
      "revenue": 24960.0,
      "occupancyRatePercent": 86.7
    },
    {
      "rank": 5,
      "eventName": "Sommet Climat Wallonie",
      "eventDate": "2025-05-14",
      "eventType": "Conférence",
      "venueId": 3,
      "venueName": "Espace Colibri",
      "ticketsSold": 340,
      "revenue": 23800.0,
      "occupancyRatePercent": 75.6
    }
  ]
};

const RapportService = {

  getOverallSummary: async () => {
    await delay(500);
    return structuredClone(data.overallSummary);
  },

  getByEventType: async (eventType) => {
    await delay(1_100);
    return structuredClone(data.byEventType.find(elem => elem.eventType === eventType) ?? null);
  }, 

  getByLocationId: async (locationId) => {
    await delay(402);
    return structuredClone(data.byVenue.find(elem => elem.venueId === locationId) ?? null);
  },
  
  getByMonth: async (month) => {
    await delay(402);
    return structuredClone(data.byMonth.find(elem => elem.monthNumber === month) ?? null);
  },
  
  getTopEvents: async () => {
    await delay(9_503);
    return structuredClone(data.topEventsByRevenue);
  }
};

export default RapportService;