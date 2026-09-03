import RapportService from '@/services/rapport.service';

export default async function DashboardSummary() {

    const data = await RapportService.getOverallSummary();

    return (
        <div>
            <p className='text-xl'>Statisitque globale</p>
            <p>Nombre d'events : {data.totalEvents}</p>
            <p>Lieux distinct : {data.distinctVenues}</p>
            <p>Ville distinct : {data.distinctCities}</p>
            <p>Nombre de tickets vendu : {data.totalTicketsSold}</p>
            <p>Capacité total : {data.totalCapacity}</p>
            <p>Taux d'occupation : {data.occupancyRatePercent.toLocaleString('fr-be', { style: 'percent'})}</p>
            <p>Total des revenues : {data.totalRevenue.toLocaleString('fr-be', {style: 'currency', currency: 'EUR'})}</p>
            <p>Events sold out : {data.soldOutEvents}</p>
        </div>
    );
}