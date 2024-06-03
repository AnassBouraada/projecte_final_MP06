# Proves d'Usabilitat i Recollida de Feedback

## Identificar Tasques

### Accedir a la Pàgina dels Seus Registres:

- **Descripció:** L'usuari ha de poder accedir a la pàgina on es mostren els seus registres d'activitats i informació personal.
- **Objectiu:** Assegurar que l'accés a la pàgina de registres és fàcil de trobar i que la informació es presenta de manera clara i ordenada.

### Accedir a la Pàgina de Llistar les Classes:

- **Descripció:** L'usuari ha de poder navegar a la pàgina on es llisten totes les classes disponibles al gimnàs.
- **Objectiu:** Verificar que la pàgina de llistat de classes és accessible i que les classes es mostren amb tota la informació necessària (nom, durada, tipus, etc.).

### Filtrar les Classes:

- **Descripció:** L'usuari ha de poder utilitzar funcions de filtratge per trobar classes específiques basades en criteris com si es individual o no.
- **Objectiu:** Assegurar que les funcions de filtratge són intuïtives i que l'usuari pot trobar fàcilment les classes que cerca.

### Desloguejar-se:

- **Descripció:** L'usuari ha de poder desloguejar-se del seu compte de manera fàcil i segura.
- **Objectiu:** Comprovar que el procés de deslogueig és clar.

### Registrar-se en una Activitat:

- **Descripció:** L'usuari ha de poder registrar-se en una classe o activitat específica del gimnàs.
- **Objectiu:** Assegurar que el procés de registre és senzill, amb tota la informació necessària.

### Intentar Registrar-se en una Activitat en la Qual Ja Està Registrat:

- **Descripció:** L'usuari ha de provar registrar-se en una activitat en la qual ja està registrat per veure com gestiona el sistema aquesta situació.
- **Objectiu:** Verificar que el sistema reconeix quan un usuari ja està registrat en una activitat i que proporciona una resposta adequada (com un missatge d'error o una notificació).

- **Descripció:** Quan l'usuari intenta registrar-se en una activitat en la qual ja està registrat, el sistema no ha de mostrar l'opció de registre. En canvi, s'ha de mostrar un botó en verd o indicant clarament que l'usuari ja està registrat en aquesta activitat.
- **Objectiu:** Verificar que el sistema reconeix quan un usuari ja està registrat en una activitat i que proporciona una resposta adequada.

## Selecció de Testers

### Tester 1: Pare

- **Activitats Realitzades:**
  - Accés a la pàgina dels registres.
  - Intent de filtrar les classes.
  - Desconnexió del compte.
- **Problemes Detectats:**
  - Confusió en la navegació cap a la pàgina de llistar les classes.
  - Dificultat per trobar el botó de desconnexió.
- **Solució Aplicada:**
  - He millorat la visibilitat del botó de desconnexió fent-lo més gran i de color vermell per cridar més l'atenció.
  - He modificat la ubicació de les classes, ja que accedia a les activitats i no a la llista de classes per veure el registre d'activitats.

### Tester 2: Mare

- **Activitats Realitzades:**
  - Accés a la pàgina de llistar les classes.
  - Intent de filtrar les classes.
  - Intent de registre en una activitat.
- **Problemes Detectats:**
    Cap

### Tester 3: Company de la feina

- **Activitats Realitzades:**
  - Intent de loguejar-se en una activitat en la qual ja estava loguejat.
  - Accés a la pàgina de llistar les classes.
  - Accés a la pàgina dels registres.
- **Problemes Detectats:**
    Cap
- **Solució Aplicada:**
    Cap


## Testers:

### Tester 1: Pare

#### Observacions:
- Va navegar cap a la pàgina dels registres amb relativa facilit
- Cap dificultat per trobar el botó de filtrar les classes.
- En el procés de desconnexió del compte, va mostrar una mica de confusió sobre com completar la tasca.

#### Comentaris/Preguntes:
- En el proces de desconexio, va demanar si havia de borrar el que havgia realitzat en la aplicacio.

### Tester 2: Mare

#### Observacions:
- Va accedir a la pàgina de llistar les classes sense problemes.
- En l'intent de filtrar les classes, no va requerir cap orientació addicional per comprendre com funcionava el sistema de filtratge.
- Va intentar registrar-se en una activitat, i no va tenir cap problema en fer-ho.

#### Comentaris/Preguntes:
- Cap

### Tester 3: Company de la feina

#### Observacions:
- Va intentar iniciar sessió en una activitat ja iniciada anteriorment.
- Va accedir a la pàgina de llistar les classes sense problemes evidents.

#### Comentaris/Preguntes:
- Cap


### Resultats de l'Experiència:

**Facilitat vs. Dificultat:**
Durant les proves, trobem que l'accés a la pàgina dels registres i a la pàgina de llistar les classes va ser relativament senzill.

**Confusions o Manca de Claritat:**
No es van identificar elements que resultessin confusos o poc clars durant el procés.

**Nivell de Satisfacció:**
En general, els participants van expressar un alt nivell de satisfacció amb l'experiència proporcionada.

**Millores Sugerides:**
Es va suggirir implementar una opció de confirmació abans de desconnectar-se per evitar desconnexions accidentals, una mesura que es considera beneficiosa per millorar l'experiència de l'usuari.


#### Anàlisi dels Resultats:

**Resum dels Resultats:**
Els usuaris van mostrar una interacció globalment positiva amb el sistema durant les proves d'usabilitat. No es van identificar problemes significatius en l'accés a les pàgines dels registres i de llistar les classes. L'experiència en general va ser satisfactòria per a tots els participants. Com a única recomanació d'ampliació, es proposa implementar una opció de confirmació abans de permetre la desconnexió del compte per prevenir desconnexions accidentals.

**Identificació de Patrons:**
Durant les proves, es va observar una consistència en la facilitat d'accés a les diferents funcionalitats del sistema entre tots els testers. Cap dels usuaris va trobar dificultats significatives en la navegació per l'aplicació. A més, no es van detectar patrons de comportament que indiquessin problemes recurrents o preocupants en cap de les tasques realitzades pels testers. Aquesta uniformitat en la interacció dels usuaris pot reflectir una bona usabilitat global del sistema.

---

### Millores Implementades al Projecte:

He realitzat diverses millores significatives per millorar l'experiència dels usuaris al lloc web:

- **Accés a la Llista de Classes:**
  - He modificat l'accés a la llista de classes per fer-lo més directe i intuïtiu, facilitant als usuaris la trobada de les classes disponibles sense complicacions.

- **Optimització del Registre:**
  - Ara, si un usuari no ha iniciat sessió, els botons de registre no es mostren, evitant confusions i proporcionant una experiència més clara i coherent.

---

### Actualització del Lloc Web:

He implementat les millores suggerides, incloent la modificació de l'accés a la llista de classes per fer-lo més directe i la supressió dels botons de registre si l'usuari no ha iniciat sessió.

### Proves Novament:

Un cop aplicats els canvis, he realitzat una altra ronda de proves d'usabilitat per verificar l'eficàcia dels canvis implementats. Aquesta ronda de proves m'ha permès confirmar que els canvis han millorat significativament l'experiència de l'usuari, abordant els problemes d'usabilitat identificats anteriorment.

















