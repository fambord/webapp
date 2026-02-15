import { InfoCard } from "@/common/ui/surfaces/InfoCard"
import { AlarmCheckIcon } from "lucide-react"

export const NotificationSettingsCard = () => {
  return (
    <InfoCard
      title="Notifications"
      description="Set when to get notified about your family's activity."
      icon={<AlarmCheckIcon/>}
    >
      <div>Content</div>
    </InfoCard>
  )
}