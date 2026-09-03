import RapportService from '@/services/rapport.service';

export default async function DashboardTopEvents() {

    const topEvents = await RapportService.getTopEvents(); 

    return (
        <section>
            <p className='text-xl'>Les meilleurs events</p>
            {topEvents.map((elem) => (
                <DashboardTopEventsItem {...elem} key={elem.rank} />
            ))}
        </section>
    )
}

function DashboardTopEventsItem({ rank, eventName, eventDate, eventType, venueName, ticketsSold, revenue, occupancyRatePercent}) {

    return (
        <article>
            <p>Rang : {rank}</p>
            <p>{eventName} ({eventType}), le {(new Date(eventDate).toLocaleDateString('fr-be', {dateStyle: 'long'}))} à {venueName}</p>
            <p>Taux d'occupation : {occupancyRatePercent.toLocaleString('fr-be', { style: 'percent'})}</p>
            <p>Nombre de tickets vendu : {ticketsSold}</p>
            <p>Total des revenues : {revenue.toLocaleString('fr-be', {style: 'currency', currency: 'EUR'})}</p>
        </article>
    )
}


