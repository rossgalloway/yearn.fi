import {useCallback} from 'react';
import {IconChevronPlain} from '@lib/icons/IconChevronPlain';
import {cl} from '@lib/utils';

import type {ReactElement} from 'react';
import type {TSortDirection} from '@lib/types';

export type TListHead = {
	items: {
		label: string | ReactElement;
		value: string;
		sortable?: boolean;
		className?: string;
	}[];
	sortBy: string;
	sortDirection: TSortDirection;
	onSort: (sortBy: string, sortDirection: TSortDirection) => void;
};

export function VaultsV3ListHead({items, sortBy, sortDirection, onSort}: TListHead): ReactElement {
	const toggleSortDirection = (newSortBy: string): TSortDirection => {
		if (sortBy === newSortBy) {
			if (sortDirection === '') {
				return 'desc';
			}
			if (sortDirection === 'desc') {
				return 'asc';
			}
			if (sortDirection === 'asc') {
				return '';
			}
		}
		return 'desc';
	};

	const renderChevron = useCallback(
		(shouldSortBy: boolean): ReactElement => {
			if (shouldSortBy && sortDirection === 'desc') {
				return <IconChevronPlain className={'size-4 min-w-[16px] cursor-pointer text-neutral-800'} />;
			}
			if (shouldSortBy && sortDirection === 'asc') {
				return (
					<IconChevronPlain className={'size-4 min-w-[16px] rotate-180 cursor-pointer text-neutral-800'} />
				);
			}
			return (
				<IconChevronPlain
					className={
						'size-4 min-w-[16px] cursor-pointer text-neutral-800/60 transition-colors group-hover:text-neutral-800'
					}
				/>
			);
		},
		[sortDirection]
	);

	const [token, ...rest] = items;

	return (
		<div className={'mt-4 hidden w-full grid-cols-1 md:mt-0 md:grid'}>
			<div
				className={cl(
					'grid w-full grid-cols-1 md:grid-cols-12 px-4 py-2 md:px-8',
					'border-t border-neutral-200 md:border-none'
				)}>
				<div
					className={cl(
						'col-span-4',
						'flex flex-row items-center justify-between',
						'mb-2 py-4 md:mb-0 md:py-0',
						token.className
					)}>
					<button
						onClick={(): void => onSort(token.value, toggleSortDirection(token.value))}
						disabled={!token.sortable}
						className={cl('yearn--table-head-label-wrapper group hover:text-neutral-900')}>
						<p
							className={cl(
								'yearn--table-head-label',
								'transition-colors',
								sortBy === token.value
									? 'text-neutral-800'
									: `text-neutral-800/60 ${token.sortable ? 'group-hover:text-neutral-800' : ''}`
							)}>
							{token.label}
						</p>
						{token.sortable ? renderChevron(sortBy === token.value) : null}
					</button>
				</div>

				<div className={cl('col-span-8 z-10', 'grid grid-cols-2 md:grid-cols-12 gap-1', 'mt-4 md:mt-0')}>
					{rest.map(
						(item, index): ReactElement => (
							<button
								key={`${index}_${item.value}`}
								onClick={(): void => onSort(item.value, toggleSortDirection(item.value))}
								disabled={!item.sortable}
								className={cl('yearn--table-head-label-wrapper group', item.className)}
								datatype={'number'}>
								<p
									className={cl(
										'yearn--table-head-label',
										'transition-colors',
										sortBy === item.value
											? 'text-neutral-800'
											: 'text-neutral-800/60 group-hover:text-neutral-800'
									)}>
									&nbsp;{item.label}
								</p>
								{item.sortable ? renderChevron(sortBy === item.value) : null}
							</button>
						)
					)}
				</div>
			</div>
		</div>
	);
}
