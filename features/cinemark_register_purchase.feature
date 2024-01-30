@RegisterAndPurchase
Feature: create account cinemark

  @Register
  Scenario Outline: As user I want to create my account in cinemark
    Given John can navigate to cinemark colombia
    When John complete section personal information with "<TypePerson>", "<TypeDocument>", "<Names>", "<LastName>", "<Gender>", "<DocumentNumber>", "<BirthDate>", "<MobileNumber>", "<Address>"
    And information about E-mail with "<Email>", "<Pass>", "<City>", "<Theatre>"
    Then Jhon sees the text Registro exitoso

    Examples: 
      | TypePerson | TypeDocument         | Names | LastName | Gender   | DocumentNumber | BirthDate  | MobileNumber | Address        | Email                             | Pass     | City   | Theatre           |
      | Natural    | Cédula de ciudadanía | Ana   | Silva    | Femenino |     1049212155 | 1998-12-12 |   3202542651 | calle 2#16B-42 | test.WebAutomation.07@yopmail.com | Test123* | Bogota | Lab v5 Multiplaza |

  @Login
  Scenario Outline: As user I want to realize login in cinemark
    Given Ana has an account in cinemark
    When Ana enters the "<Email>" and "<Password>"
    Then Ana can see her name "<Name>"

    Examples: 
      | Email                             | Password | Name      |
      | test.WebAutomation.07@yopmail.com | Test123* | Ana Silva |

  @Purchase
  Scenario Outline: As user I want to realize a purchase in cinemark
    Given John and Ana want to see the movie "<NameMovie>" in "<City>" the "<Day>" at "<Shedule>"
    When They select seats "<TypeSeats>", "<NumberSeats>", snacks and schedule
    Then They can make a payment with credit Card "<NumberCard>", "<NameCard>", "<SecurityCode>"
    And They can see the code Qr and complete the purchase

    Examples: 
      | Email                             | Password | City   | NameMovie                  | Day | Shedule | TypeSeats  | NumberSeats | NumberCard       | NameCard   | SecurityCode |
      | test.WebAutomation.07@yopmail.com | Test123* | Bogota | Elvis '68 Comeback Special | mié |   19:00 | General 2D |           2 | 5247081012761500 | DAVIVIENDA |          777 |
