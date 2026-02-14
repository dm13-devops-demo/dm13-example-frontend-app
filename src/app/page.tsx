export default function Home() {
  const version = process.env.APP_VERSION || "1.0.0";
  const buildTime = process.env.BUILD_TIME || new Date().toISOString();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="max-w-2xl mx-auto p-8">
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              🚀 Pipeline Test App
            </h1>
            <p className="text-xl text-gray-600">
              Simple frontend for testing CI/CD pipeline
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Version</p>
              <p className="text-2xl font-bold text-blue-600">{version}</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Build Time</p>
              <p className="text-sm font-mono text-green-600">{buildTime}</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Status</p>
              <p className="text-lg font-semibold text-purple-600">✓ Running</p>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            <p>This app automatically updates when pushed to the repository</p>
          </div>
        </div>
      </main>
    </div>
  );
}
