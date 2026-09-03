import DashboardMonth from '@/components/Dashboard/DashboardMonth';
import DashboardSummary from '@/components/Dashboard/DashboardSummary';
import DashboardTopEvents from '@/components/Dashboard/DashboardTopEvents';
import { Suspense } from 'react';

export default function DashboardPage() {

    const currentMonth = (new Date()).getMonth() + 1;

    return (
        <main className='p-3'>
            <h1 className='text-green-600 text-3xl'>Dashboard</h1>
            <div className='flex flex-row gap-10 mb-10'>
                <Suspense fallback={<p>Chargement...</p>}>
                    <DashboardSummary />
                </Suspense>
                <div className='flex flex-col gap-5'>
                    <Suspense fallback={<p>Chargement...</p>}>
                        <DashboardMonth month={currentMonth - 1} />
                    </Suspense>
                    <Suspense fallback={<p>Chargement...</p>}>
                        <DashboardMonth month={currentMonth} />
                    </Suspense>
                </div>
            </div>
            <Suspense fallback={<p>Chargement...</p>}>
                <DashboardTopEvents />
            </Suspense>
        </main>
    );
}
