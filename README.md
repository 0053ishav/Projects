# 🧠 Projects Showcase – Developer Portfolio API

Welcome to the **Projects Showcase** repository.

This project powers a **read-only, production-grade portfolio API**, backed by **Appwrite**, served through a **secure gateway**, and optimized with **edge caching and rate limiting**.

It demonstrates how real portfolio APIs are designed — not just how data is returned.

> ⚠️ **Important**  
> This API is publicly readable for demonstration purposes, but the **data itself is private and owned by me**.  
> Only my own subdomains consume this API in production.


## 🚀 Live API Documentation

👉 **Docs:** https://projects.ishav.space/

The documentation covers:
- API structure
- Response shape
- CORS rules
- Rate limiting
- Usage examples


## 🌐 Public API

### 📍 Available Endpoint


- `GET https://projects.ishav.space/api/projects` – Returns a list of all **published** portfolio projects.

- Backed by Appwrite Database
- Images served from Appwrite Storage
- Cached at the edge
- Auto-updated via webhooks


## 📦 Example Response

```json
{
  "success": true,
  "projects": [
    {
      "id": "project-id",
      "title": "Project Title",
      "description": "Project description",
      "image": "https://cloud.appwrite.io/v1/storage/buckets/{bucketId}/files/{fileId}/view?project={projectId}",
      "tags": ["nextjs", "react", "tailwind"],
      "demoLink": "https://demo.example.com",
      "codeLink": "https://github.com/username/repo",
      "featured": true
    }
  ]
}
```

### 📦 Response Structure
---
Each project contains:

- `id`: Unique project ID
- `title`: Project name
- `description`: Short project overview
- `image`: Public Appwrite Storage URL
- `tags`: Technologies or keywords
- `demoLink`: Live demo URL
- `codeLink`: GitHub or source repo
- `featured`: Highlighted project flag

Only projects with status = published are returned.


## 🧪 Usage Example

### Fetch API (Vanilla JS / TypeScript)

```ts
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink?: string;
  featured?: boolean;
}

interface ApiResponse {
  success: boolean;
  projects: Projects[];
}

fetch("https://projects.ishav.space/api/projects")
  .then((res) => res.json())
  .then((data: ApiResponse) => {
    console.log(data.projects);
  });
```

### React + SWR (Efficient Client-Side Fetching)

```tsx
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

function ProjectList() {
  const { data, error } = useSWR('https://projects.ishav.space/api/projects', fetcher);

  if (error) return <p>Failed to load</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <ul>
      {data.projects.map(project => (
        <li key={project.id}>{project.title}</li>
      ))}
    </ul>
  );
}
```

## 🔐 CORS & Access Policy

This API does not allow all origins.

✅ Allowed :

  - ishav.space

  - Any *.ishav.space subdomain

❌ Blocked : 

  - Unrelated third-party domains

> This ensures the API is protected from misuse while remaining usable across my own properties.

### 🚦Rate Limiting
---

To prevent abuse and basic DDoS attempts:

- Requests are rate-limited per IP

- Excessive requests return:
  > 429 Too Many Requests
Responses are edge-cached to minimize backend load.

## 🛠️ Technical Overview
---
- **Framework**: Next.js (App Router, API Routes)
- **Language**: TypeScript
- **Backend**: Appwrite (DB + Storage) 
- **Gateway**: Server-only API with API key
- **Caching**: Vercel Edge Cache
- **Security**:No client-side secrets

CORS restrictions

Rate limiting

Webhook-based cache invalidation
- **Hosting**: Vercel


### 🧑‍🎓 Learn From This Project
---

You are encouraged to:
- Fork the repository
- Study the API gateway pattern
- Learn Appwrite + caching + webhooks
- Build your own portfolio API

🚫 Please **do not** use my live API or data in your applications.



## 📞 Contact
---
Have questions or need help?

- GitHub: [@0053ishav](https://github.com/0053ishav)
- Email: [Public Mail 📧](https://mail.ishav.space)



                 Made with ❤️ by Ishav-  Bring creative ideas to life
