import { SummaryMetrics } from "@/components/summary-metrics"
import { NoticeBoard } from "@/components/notice-board"
import { Calendar } from "@/components/ui/calendar"
import { AudienceInsight } from "@/components/audience-insight"
import { RevenueChart } from "@/components/revenue-chart"
import { CompanyMetrics } from "@/components/company-metrics"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <SummaryMetrics />
      <div className="grid gap-6 md:grid-cols-2">
        <NoticeBoard />
        <Calendar mode="single" className="rounded-md border" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <AudienceInsight />
        <RevenueChart />
      </div>
      <CompanyMetrics />
    </div>
  )
}

