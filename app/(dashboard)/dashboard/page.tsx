import { EmptyPlaceholder } from '@/components/empty-placeholder'
import { DashboardHeader } from '@/components/header'
import { PostCreateButton } from '@/components/post-create-button'
import { PostItem } from '@/components/post-item'
import { DashboardShell } from '@/components/ui/shell'
import { blogPosts } from '@/config/seeder'

export const metadata = {
	title: 'Dashboard',
}

export default async function DashboardPage() {
	return (
		<DashboardShell>
			<DashboardHeader heading='Posts' text='Create and manage posts.'>
				<PostCreateButton />
			</DashboardHeader>
		</DashboardShell>
	)
}
