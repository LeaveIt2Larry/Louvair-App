'use client'

import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { LayoutGroup, motion } from 'framer-motion'
import * as React from 'react'

import { cn } from '@/lib/utils'

type TopbarElement = React.ElementRef<'header'>
type RootProps = React.ComponentPropsWithoutRef<'header'>

interface TopbarProps extends RootProps {
	title: string
	activeView?: string
	markup?: string
	setActiveView?: (view: string) => void
}

export const Topbar = React.forwardRef<TopbarElement, Readonly<TopbarProps>>(
	({ className, title, markup, activeView, setActiveView, ...props }, forwardedRef) => {
		const columnWidth = 'w-[200px]'

		return (
			<header
				ref={forwardedRef}
				className={cn(
					'bg-black flex relative items-center px-6 justify-between h-[70px] border-b border-slate-6',
					className
				)}
				{...props}
			>
				<div className={`flex items-center overflow-hidden ${columnWidth}`}>
					<h1 className='truncate'>{title}</h1>
				</div>

				<div className={`${columnWidth}`}>
					<LayoutGroup id='topbar'>
						{setActiveView && (
							<ToggleGroup.Root
								className='inline-block items-center bg-slate-2 border border-slate-6 rounded-md overflow-hidden'
								type='single'
								value={activeView}
								aria-label='View mode'
								onValueChange={(value) => {
									if (!value) return
									setActiveView(value)
								}}
							>
								<ToggleGroup.Item value='desktop'>
									<motion.div
										className={cn(
											'text-sm font-medium px-3 py-2 transition ease-in-out duration-200 relative hover:text-slate-12',
											{
												'text-slate-11': activeView === 'source',
												'text-slate-12': activeView === 'desktop',
											}
										)}
									>
										{activeView === 'desktop' && (
											<motion.span
												layoutId='topbar'
												className='absolute left-0 right-0 top-0 bottom-0 bg-slate-4'
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												exit={{ opacity: 0 }}
											/>
										)}
										Desktop
									</motion.div>
								</ToggleGroup.Item>
								<ToggleGroup.Item value='source'>
									<motion.div
										className={cn(
											'text-sm font-medium px-3 py-2 transition ease-in-out duration-200 relative hover:text-slate-12',
											{
												'text-slate-11': activeView === 'desktop',
												'text-slate-12': activeView === 'source',
											}
										)}
									>
										{activeView === 'source' && (
											<motion.span
												layoutId='nav'
												className='absolute left-0 right-0 top-0 bottom-0 bg-slate-4'
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												exit={{ opacity: 0 }}
											/>
										)}
										Source
									</motion.div>
								</ToggleGroup.Item>
							</ToggleGroup.Root>
						)}
					</LayoutGroup>
				</div>

				{markup && <div className={`flex justify-end ${columnWidth}`}>{/* <Send markup={markup} /> */}</div>}
			</header>
		)
	}
)

Topbar.displayName = 'Topbar'
