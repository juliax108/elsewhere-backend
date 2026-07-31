# Elsewhere Backend

## Projektbeschreibung

Das Backend stellt die REST-API für die Reiseanwendung Elsewhere bereit.

Es verwaltet Reisen und Wunschreiseziele und speichert alle Daten in einer MongoDB-Datenbank.

## Funktionen

- REST-API für Reisen
- REST-API für Wunschreiseziele
- Erstellen, Anzeigen, Bearbeiten und Löschen von Datenbankeinträgen (CRUD)
- Speicherung der Daten in MongoDB

## Technologien

- Node.js
- Express
- MongoDB
- Mongoose

## Installation

### Voraussetzungen

- Node.js
- npm
- MongoDB

### Repository klonen

```bash
git clone https://github.com/juliax108/elsewhere-backend.git
cd elsewhere-backend
```

### Abhängigkeiten installieren

```bash
npm install
```

### Backend starten

```bash
npm start
```

Standardmäßig läuft das Backend unter:

```text
http://localhost:3000
```

## API

Bereitgestellte Endpunkte:

### Reisen

- GET
- POST
- PUT
- DELETE

### Wunschliste

- GET
- POST
- PUT
- DELETE

## Verwendete KI-Werkzeuge

### ChatGPT von OpenAI

ChatGPT wurde unterstützend verwendet für:

- einzelne Fragen zu Node.js und Express
- Unterstützung bei der Entwicklung der REST-API
- Fehlersuche und Debugging
- Hilfe bei Erstellung des README
