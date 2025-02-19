# databaseApiExamle

Tämä esimerkki havainnollistaa, kuin MVC-mallia sovelletaan Node.js/Express sovelluksessa, jossa data on <b>MySQL-tietokannassa.</b>

## Controllerit

Kansiossa <b>routes</b> on tiedosto book.js ja sen voidaan ajatella olevan kontrolleri. Kun aikanaan tehtäisiin frontend-sovellus, niin se kommunikoisi tuon kontrollerin kanssa, kun haluaisi kommunikoidan tietokannassa olevan book-taulun kanssa.

## Modelit

Kansiossa <b>models</b> on tiedosto book_model.js ja book kontrolleri kommunikoi sen kanssa, kun haluaa käsitellä tietokannan book-taulua.

## Tietokantayhteys

Tietokantayhteys on konfigutoitu tiedostossa <b>database.js</b> ja jokainen model tarvitsee sitä.

## Sovelluksen asennus

<ol>
<li>Kloonaan sovellus komennolla git clone https://github.com/tvt24spo-esimerkit/databaseApiExample.git</li>
<li>Avaa komentokehote kansioon databaseApiExample</li>
<li>Anna komento npm install</li>
<li>Käynnistä sovellus komennolla node app.js (tai nodemon app.js)</li>
<li>Luo tarvittava käyttäjä MySQL-pavelimelle ja anna tarvittavat oikeudet käyttäjälle komennoilla:
<pre>
CREATE USER 'netuser'@'localhost' IDENTIFIED BY 'netpass';
GRANT ALL ON library.* TO 'netuser'@'localhost';
</pre>
 </li>
</ol>

## .env

Tiedostoa .env ei ole järkevää viedä GitHubiin, varsinkaan public tyyppiseen repoon.

Tässä sovelluksessa sinne tulisi rivi:
MY_TOKEN=kk4j5s9i5j68sjj5kjsi8urjhjh5jhjh5jh5jhjsu4hAJJSLLKSedd