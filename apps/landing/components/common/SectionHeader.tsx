import Link from 'next/link';
import {FC, ReactElement} from 'react';

export const SectionHeader: FC<{
	tagline?: string;
	title?: string;
	description?: ReactElement | string;
	cta?: {label: string; href: string};
	align?: 'left' | 'right' | 'center';
	isH1?: boolean;
}> = ({tagline, title, description, cta, align = 'left', isH1 = false}) => {
	return (
		<div
			className={`flex flex-col ${align === 'right' ? 'items-end' : align === 'center' ? 'items-center' : ''} gap-y-4`}>
			{!!tagline && <p className="text-lightBlue-500 mb-2">{tagline}</p>}
			{!!title &&
				(isH1 ? (
					<h1 className="text-6xl font-medium">{title}</h1>
				) : (
					<h2 className="text-5xl font-medium">{title}</h2>
				))}
			{!!description && (
				<div className="flex flex-row">
					<p className={`text-steelGray-500 ${isH1 ? 'text-[24px]' : 'text-[18px]'}`}>{description}.</p>
					{!!cta && (
						<Link
							href={cta.href}
							className="text-white flex items-center pl-2">
							{cta.label} →
						</Link>
					)}
				</div>
			)}
		</div>
	);
};
