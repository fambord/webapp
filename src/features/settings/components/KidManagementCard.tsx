import { InfoCard } from "@/common/ui/surfaces/InfoCard"
import { UsersIcon } from "lucide-react"

export const KidManagementCard = () => {
  return (
    <InfoCard
      title="Kids"
      description="Manage kid profile information."
      icon={<UsersIcon />}
    >
      <div>This should be a list of the kids.</div>
      <div>It should show the name of the kid and some basic information.</div>
      <div>Each kid name should be clickable and lead to the kid settings modal.</div>
      <div>There should be a button to add a new kid.</div>
      <div>There should be some quick actions for each kid.</div>
      </InfoCard>
  )
}