import { InfoCard } from "@/common/ui/surfaces/InfoCard"
import { CloudCogIcon } from "lucide-react"

export const GeneralSettingsCard = () => {
  return (
    <InfoCard
      title="General"
      description="Manage general application settings."
      icon={<CloudCogIcon/>}
    >
      <div>This could be a list of the general settings.</div>
      <div>Each setting should have a toggle to enable or disable it.</div>
      <div>Could be timeouts, color schemes, etc.</div>
    </InfoCard>
  )
}