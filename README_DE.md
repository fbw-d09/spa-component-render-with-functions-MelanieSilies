# `07` Rendering mit Funktionen

JSX ermöglicht die Verwendung von Funktionen zum Rendern von HTML, und das ist großartig!

Das ist eine sehr empfehlenswerte Praxis, denn so kannst du Vorlagen erstellen und deinen Code wiederverwenden, z. B:

```js

// WHAT: This function returns a string that will be rendered
const PrintHello = () => {
    return <h1>Hello World</h1>;
}
               //what           //where
ReactDOM.render(PrintHello(), myDiv);
```

Hinweis: Die Funktion PrintHello beginnt mit einem Großbuchstaben, weil wir sie in der nächsten Übung in eine [React Component](https://reactjs.org/docs/react-component.html) umwandeln werden.

# :speech_balloon: Anleitung

Sorge dafür, dass die Funktion __PrintHello__ `<h1>I Love React</h1>` anstelle von `<h1>Hello World</h1>` zurückgibt.

[//]: # (autograding info start)
## Ergebnisse
  [![Ergebnis-Badge](../../blob/badges/.github/badges/autograding/badge.svg)](https://github.com/DigitalCareerInstitute/SPA-component-render-with-functions/actions)
  
  [Ergebnisdetails](https://github.com/DigitalCareerInstitute/SPA-component-render-with-functions/actions)
  
  ### Debugging deines Codes
  > [Lesen der Testausgaben](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)
  
  Es gibt zwei Möglichkeiten, um herauszufinden, warum Aufgaben nicht abgeschlossen werden können:
  #### 1. Tests lokal ausführen
  - Führe `npm install` aus
  - Führe `npm test` im Terminal aus. Du wirst sehen, wo deine Lösung vom erwarteten Ergebnis abweicht.
  
  #### 2. Überprüfen der Testausgabe auf GitHub
  - Gehe auf die [Registerkarte Aktionen deines Übungsrepos](https://github.com/DigitalCareerInstitute/SPA-component-render-with-functions/actions)
  - Dort siehst du eine Liste mit den Testläufen. Klicke auf den obersten.
  - Klicke auf "Autograding".
  - Erweitere den Punkt 'Run DCI-EdTech/autograding-action@main'
  - Hier siehst du alle Ausgaben des Testlaufs

[//]: # (autograding info end)
