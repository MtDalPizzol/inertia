export function withVite(pages: Record<string, any>, name: string) {
	// eslint-disable-next-line no-restricted-syntax
	for (const path in pages) {
		if (path.endsWith(`${name.replace('.', '/')}.vue`)) {
			return typeof pages[path] === 'function'
				? pages[path]()
				: pages[path]
		}
	}

	throw new Error(`Page not found: ${name}`)
}
