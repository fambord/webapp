import { InfoCard } from "@/common/ui/surfaces/InfoCard"
import { AppWindowIcon } from "lucide-react"

export const AppSettingsCard = () => {
  return (
    <InfoCard
      title="Application"
      description="Manage how the app works for your family."
      icon={<AppWindowIcon />}
    >
      <div>This should have the accounting settings.</div>
      <div>Points per dollar</div>
      <div>Payout thresholds</div>
    </InfoCard>
  )
}