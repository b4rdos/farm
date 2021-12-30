# farm

Start a stack using FastApi / React / MongoDB

The code is the result of following the steps in [FARM STACK Course](https://www.youtube.com/watch?v=OzUzrs8uJl8)

---

## Instructions

The following assumes `docker` and `docker-compose` are installed in the system.

**Start service with `docker-compose`**

```bash
docker-compose up
```

The above will do the following:

- Download a mongodb image locally
- Build the backend image and start the service at [http://localhost:50500/docs](http://localhost:50500/docs)
- Build the frontend image and start the service at [http://localhost:3000](http://localhost:3000)
