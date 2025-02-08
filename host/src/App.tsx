import React, { Suspense } from 'react';

const RemoteApp = React.lazy(() => import('remoteApp/App'));

function App() {
	return (
		<>
			<h1>Host App</h1>
			<Suspense fallback={<div>Loading...</div>}>
				<RemoteApp />
			</Suspense>
		</>
	);
}

export default App;
