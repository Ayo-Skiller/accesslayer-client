import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import CircularSpinner from '@/components/common/CircularSpinnerProps';
import { cn } from '@/lib/utils';

export type TransactionFlow = 'buy' | 'sell';

interface TransactionPendingModalProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	title?: string;
	statusText?: string;
	actionLabel?: string;
	onAction?: () => void;
	flow?: TransactionFlow;
	className?: string;
}

const defaultTitle: Record<TransactionFlow, string> = {
	buy: 'Processing Purchase',
	sell: 'Processing Sale',
};

const defaultStatus: Record<TransactionFlow, string> = {
	buy: 'Your buy transaction is being confirmed on the network. This may take a few moments.',
	sell: 'Your sell transaction is being confirmed on the network. This may take a few moments.',
};

const TransactionPendingModal: React.FC<TransactionPendingModalProps> = ({
	open,
	onOpenChange,
	title,
	statusText,
	actionLabel = 'Dismiss',
	onAction,
	flow = 'buy',
	className,
}) => {
	const resolvedTitle = title ?? defaultTitle[flow];
	const resolvedStatus = statusText ?? defaultStatus[flow];

	const handleAction = () => {
		onAction?.();
		onOpenChange(false);
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent
				showCloseButton={false}
				className={cn(
					'border-white/10 bg-slate-900 text-white sm:max-w-md',
					className
				)}
			>
				<DialogHeader className="items-center text-center">
					<div className="mb-4 flex items-center justify-center">
						<div className="relative flex items-center justify-center rounded-full bg-amber-500/10 p-5">
							<CircularSpinner
								size={48}
								color="#f59e0b"
								speed="0.9s"
								bgOpacity={0.2}
							/>
						</div>
					</div>
					<DialogTitle className="font-grotesque text-xl font-bold text-white">
						{resolvedTitle}
					</DialogTitle>
					<DialogDescription className="font-jakarta text-sm text-white/60">
						{resolvedStatus}
					</DialogDescription>
				</DialogHeader>

				<div className="flex items-center gap-2 rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3">
					<span className="size-2 animate-pulse rounded-full bg-amber-400" />
					<span className="font-jakarta text-xs font-medium uppercase tracking-wider text-amber-400">
						Pending confirmation
					</span>
				</div>

				<DialogFooter className="sm:justify-center">
					<Button
						variant="outline"
						size="sm"
						onClick={handleAction}
						className="border-white/10 font-jakarta text-white/60 hover:bg-white/5 hover:text-white"
					>
						{actionLabel}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default TransactionPendingModal;
