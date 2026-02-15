import { InfoCard } from "@/common/ui/surfaces/InfoCard"
import { CloudCogIcon } from "lucide-react"

export const GeneralSettingsCard = () => {
  return (
    <InfoCard
      title="General"
      description="Manage general application settings."
      icon={<CloudCogIcon/>}
    >
      <div>Content</div>
    </InfoCard>
  )
}