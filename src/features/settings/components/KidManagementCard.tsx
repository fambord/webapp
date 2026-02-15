import { InfoCard } from "@/common/ui/surfaces/InfoCard"
import { UsersIcon } from "lucide-react"

export const KidManagementCard = () => {
  return (
    <InfoCard
      title="Kids"
      description="Manage your kids."
      icon={<UsersIcon />}
    >
      <div>Content</div>
      </InfoCard>
  )
}