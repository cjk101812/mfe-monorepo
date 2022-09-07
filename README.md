

# Microfrontend Monorepo's

This project shows the ability to create a monorepo that houses multiple UI framework frontends 
within the same "shell".

The project includes:
- Angular Shell
- Angular Remote
- React Remote

## Getting Started

Clone repository and run `yarn install`.

## Development Server

To spin up the entire application, run 
```npx nx serve angular-shell --open --devRemotes=angular-app,react-app```

To start a single application, run ```npx nx serve APPLICATION_NAME --open```

## Understand your workspace

This project was generated using [Nx](https://nx.dev).

🔎 **Smart, Fast and Extensible Build System**

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
