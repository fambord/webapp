import { PageContainer } from '@/common/layout/PageContainer';
import { AppSettingsCard } from '@/features/settings/components/AppSettingsCard';
import { GeneralSettingsCard } from '@/features/settings/components/GeneralSettingsCard';
import { KidManagementCard } from '@/features/settings/components/KidManagementCard';
import { NotificationSettingsCard } from '@/features/settings/components/NotificationSettingsCard';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(app)/_parents/parents/settings')({
  component: FamilySettingsPage,
})

function FamilySettingsPage() {
  return (
      <PageContainer
        title="Settings"
        description="Manage your family settings."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <KidManagementCard />
          <AppSettingsCard />
          <NotificationSettingsCard />
          <GeneralSettingsCard />
        </div>

      </PageContainer>
    );
}
