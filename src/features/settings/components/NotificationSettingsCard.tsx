import { InfoCard } from "@/common/ui/surfaces/InfoCard"
import { AlarmCheckIcon } from "lucide-react"

export const NotificationSettingsCard = () => {
  return (
    <InfoCard
      title="Notifications"
      description="Set when to get notified about your family's activity."
      icon={<AlarmCheckIcon/>}
    >
      <div>This should be a list of the notifications.</div>
      <div>Each notification should have a toggle to enable or disable it.</div>
    </InfoCard>
  )
}