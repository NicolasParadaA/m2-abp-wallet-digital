# 💳 Wallet Digital

**Autor**: [Nicolás Parada](https://www.linkedin.com/in/nicolasparadaarias/)

Billetera digital interactiva construida con **HTML5**, **CSS3** y **JavaScript puro**, utilizando **Bootstrap 5** para el layout responsive. Proyecto de portafolio que simula las funcionalidades básicas de una aplicación financiera.

## 🚀 Demo

[https://nicolasparadaa.github.io/m2-abp-wallet-digital/](https://nicolasparadaa.github.io/m2-abp-wallet-digital/)

## 🛠️ Tecnologías

- **HTML5** — Estructura semántica
- **CSS3** — Diseño con variables, gradientes, grid y flexbox
- **Bootstrap 5.3** — Layout responsive y componentes UI
- **JavaScript (Vanilla)** — Lógica de la aplicación, manipulación del DOM, localStorage
- **Font Awesome** — Iconografía
- **Google Fonts (Inter)** — Tipografía

## ✨ Funcionalidades

- **Inicio de sesión** — Validación de credenciales con almacenamiento en localStorage
- **Menú principal** — Acceso rápido a depósitos, envíos y movimientos
- **Depósito de fondos** — Incrementa el saldo y actualiza en tiempo real
- **Envío de dinero** — Agenda de contactos, búsqueda y transferencias entre cuentas
- **Historial de movimientos** — Registro de transacciones con filtro por tipo
- **Persistencia de datos** — Saldo y sesión guardados en localStorage
- **Cierre de sesión** — Limpieza segura de la sesión activa

## 🎨 Diseño

Inspirado en el concepto de tarjetas apaisadas con gradiente oscuro y colores MasterCard. Cada sección tiene su propia identidad cromática:

| Sección | Color |
|---------|-------|
| Login / Menú | Rojo-Naranja (MasterCard) |
| Depósitos | Azul |
| Envíos | Verde |
| Movimientos | Dorado |

## 📁 Estructura del proyecto

```
├── index.html              # Login
├── menu.html               # Menú principal
├── deposit.html            # Depósito de fondos
├── sendmoney.html          # Envío de dinero
├── transactions.html       # Historial de movimientos
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos globales
│   ├── js/
│   │   ├── index.js        # Lógica de login
│   │   ├── menu.js         # Lógica del menú
│   │   ├── deposit.js      # Lógica de depósitos
│   │   ├── sendmoney.js    # Lógica de envíos
│   │   ├── transactions.js # Lógica de movimientos
│   │   ├── validaLogin.js  # Validación de sesión
│   │   └── logica_global.js# Saldo, transacciones, cerrar sesión
│   └── img/
│       └── chip-card.png   # Chip de tarjeta
└── README.md
```

## 🔧 Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/NicolasParadaA/m2-abp-wallet-digital.git
   ```
2. Abre `index.html` en tu navegador (no requiere servidor).

> 💡 **Credenciales de prueba**: admin@admin.cl / 123456

## 📌 Autor

**Nicolás Parada Arias**  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nicolasparadaarias/)
