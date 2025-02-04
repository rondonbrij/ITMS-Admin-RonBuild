import { SummaryMetrics } from "@/components/summary-metrics"
import { NoticeBoard } from "@/components/notice-board"
import { PhilippineCalendar } from "@/components/philippine-calendar"
import { AudienceInsight } from "@/components/audience-insight"
import { RevenueChart } from "@/components/revenue-chart"
import { CompanyMetrics } from "@/components/company-metrics"

export default function DashboardPage() {
  return (
    <div className="p-6 w-full">
      <div className="space-y-6">
        <SummaryMetrics />
        <div className="grid gap-6 md:grid-cols-2">
          <NoticeBoard />
          <PhilippineCalendar />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <AudienceInsight />
          <RevenueChart />
        </div>
        <CompanyMetrics />
      </div>
    </div>
  )
}

