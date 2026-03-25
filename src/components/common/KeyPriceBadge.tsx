import { cn } from '@/lib/utils';

export type KeyPriceBadgeState = 'default' | 'loading' | 'unavailable';

interface KeyPriceBadgeProps {
	price?: number | string;
	currency?: string;
	state?: KeyPriceBadgeState;
	className?: string;
}

const KeyPriceBadge: React.FC<KeyPriceBadgeProps> = ({
	price,
	currency = 'ETH',
	state = 'default',
	className,
}) => {
	if (state === 'loading') {
		return (
			<div
				aria-busy="true"
				aria-label="Loading price"
				className={cn(
					'inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1',
					className
				)}
			>
				<span className="size-1.5 animate-pulse rounded-full bg-amber-400/60" />
				<span className="h-3 w-12 animate-pulse rounded-full bg-amber-400/30" />
			</div>
		);
	}

	if (state === 'unavailable' || price === undefined || price === null) {
		return (
			<div
				className={cn(
					'inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1',
					className
				)}
			>
				<span className="font-jakarta text-xs font-medium text-white/30">
					Price unavailable
				</span>
			</div>
		);
	}

	return (
		<div
			className={cn(
				'inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1',
				className
			)}
		>
			<span className="font-grotesque text-sm font-black leading-none text-amber-400">
				{price}
			</span>
			<span className="font-jakarta text-xs font-semibold uppercase tracking-wide text-amber-400/70">
				{currency}
			</span>
		</div>
	);
};

export default KeyPriceBadge;
