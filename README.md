# 🚀 dm13-example-frontend-app 

A simple Next.js frontend application designed for testing CI/CD pipelines with Docker and Kubernetes auto-deployment.

## ✨ Features

- **Modern Stack**: Next.js 16 + React 19 + TypeScript + Tailwind CSS 4
- **Containerized**: Production-ready Dockerfile with multi-stage builds
- **Kubernetes Ready**: Complete K8s manifests with health checks
- **Auto-Deploy**: GitHub Actions pipeline with automatic image updates
- **Version Tracking**: Displays app version and build time
- **Health Monitoring**: Built-in liveness and readiness probes

## 🎯 What This Does

This app demonstrates a complete CI/CD workflow:

1. **Code Push** → Triggers GitHub Actions
2. **Build** → Creates optimized Docker image
3. **Push** → Uploads to container registry
4. **Update** → Automatically updates Kubernetes YAML
5. **Deploy** → K8s pulls new image and rolls out

The app displays its current version and build time, making it easy to verify deployments are working.

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
bun install

# Start dev server
bun dev

# Open http://localhost:3000
```

### Docker

```bash
# Build image
docker build -t pipeline-test-app .

# Run container
docker run -p 3000:3000 pipeline-test-app

# Visit http://localhost:3000
```

### Kubernetes

```bash
# Deploy to cluster
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

# Check status
kubectl get pods -l app=pipeline-test-app
kubectl get svc pipeline-test-app
```

## 📖 Documentation

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment guide including:
- CI/CD pipeline setup
- Kubernetes configuration
- Monitoring and troubleshooting
- Security considerations

## 🏗️ Project Structure

```
.
├── src/
│   └── app/
│       ├── page.tsx          # Main app page with version display
│       ├── layout.tsx         # Root layout
│       └── globals.css        # Global styles
├── Dockerfile                 # Multi-stage Docker build
├── .dockerignore             # Docker ignore rules
└── next.config.ts            # Next.js config with standalone output
```

## 🔄 CI/CD Pipeline

The GitHub Actions workflow automatically:

- ✅ Builds Docker image on every push
- ✅ Tags with commit SHA and branch name
- ✅ Pushes to GitHub Container Registry
- ✅ Updates Kubernetes deployment YAML
- ✅ Commits changes back to repository
- ✅ (Optional) Deploys to cluster via kubectl

### Pipeline Triggers

- **Push to `main`**: Full build, push, and deploy
- **Push to `develop`**: Build and push only
- **Pull Request**: Build only (validation)

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.x | React framework |
| React | 19.x | UI library |
| TypeScript | 5.9.x | Type safety |
| Tailwind CSS | 4.x | Styling |
| Bun | Latest | Package manager |
| Docker | - | Containerization |
| GitHub Actions | - | CI/CD |

## 📊 What You'll See

The deployed app shows:

- **Version**: Generated from commit SHA and timestamp
- **Build Time**: When the Docker image was built
- **Status**: Confirms the app is running

This makes it easy to verify that:
- New deployments are working
- The correct version is running
- The pipeline is functioning properly

## 🎨 Customization

### Update App Content

Edit [`src/app/page.tsx`](./src/app/page.tsx) to change the UI.

## 🐛 Troubleshooting

### Build Issues
```bash
# Test build locally
docker build -t test .
bun typecheck
bun lint
```

## 📝 Commands Reference

```bash
# Development
bun install          # Install dependencies
bun dev              # Start dev server
bun build            # Build for production
bun typecheck        # Run TypeScript checks
bun lint             # Run ESLint

# Docker
docker build -t app .              # Build image
docker run -p 3000:3000 app        # Run container
docker logs <container-id>         # View logs

# Kubernetes
kubectl apply -f k8s/              # Deploy all manifests
kubectl get all -l app=pipeline-test-app  # View resources
kubectl rollout restart deployment/pipeline-test-app  # Restart
kubectl delete -f k8s/             # Remove deployment
```

## 🎯 Use Cases

Perfect for:
- Testing CI/CD pipelines
- Learning Kubernetes deployments
- Demonstrating GitOps workflows
- Validating infrastructure changes
- Training and workshops

## 📄 License

MIT

## 🤝 Contributing

Feel free to open issues or submit PRs!

---

**Ready to deploy?** Check out [DEPLOYMENT.md](./DEPLOYMENT.md) for the complete guide!
