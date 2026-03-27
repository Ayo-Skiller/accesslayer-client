import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CreatorProfileInfoItem {
	label: string;
	value: ReactNode;
}

interface CreatorProfileInfoGridProps {
	items: CreatorProfileInfoItem[];
	className?: string;
}

const CreatorProfileInfoGrid: React.FC<CreatorProfileInfoGridProps> = ({
	items,
	className,
}) => {
	return (
		<div
			className={cn(
				'grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4',
				className
			)}
		>
			{items.map(item => (
				<div
					key={item.label}
					className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-sm"
				>
					<p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/42">
						{item.label}
					</p>
					<div className="mt-2 font-jakarta text-sm font-semibold text-white md:text-[0.95rem]">
						{item.value}
					</div>
				</div>
			))}
		</div>
	);
};

export default CreatorProfileInfoGrid;
