import RapportService from '@/services/rapport.service';

export default async function DashboardMonth({month}) {

    const data = await RapportService.getByMonth(month);

    return (
        <div>
            <p className='text-xl'>Statisitque pour le mois : {data.monthLabel}</p>
            <ul>
                <li>Nombre d'event : {data.eventCount}</li>
                <li>Ticket vendu : {data.ticketsSold}</li>
                <li>Revenue : {data.revenue.toLocaleString('fr-be', { style: 'currency', currency: 'EUR' })}</li>
                <li>Taux d'occupation : {data.occupancyRatePercent.toLocaleString('fr-be', { style: 'percent' })}</li>
            </ul>
        </div>
    );
}