//English

$(function () {
  $(".en").click(function () {
    //navbar part
    $(".nav-link").eq(0).text("HOME");
    $(".nav-link").eq(1).text("MOORING");
    $(".nav-link").eq(2).text("YACHT CHARTER");
    $(".nav-link").eq(3).text("YACHT SERVICE/ SUPPLY");
    $(".nav-link").eq(4).text("ABOUT");
    $(".nav-link").eq(5).text("CONTACT");
    $(".language-selected").text("English");
    $(".language-selected").removeClass("change-it");
    $(".language-selected").addClass("change-en");

    //banner part
    $(".home-banner h3").text("EXPLORE and ENJOY our AMAZING Island");
    $(".home-banner p").text("We will keep you going; for technical assistance, Yacht supplies and uncompromising Charters. Try us, you will love it! We work for your smile! ");
    $(".home-banner .btn").text("Read More");

    //feature part
    $(".feature-item h5").eq(0).text("Sardinia, but not only Service");
    $(".feature-item p").eq(0).text("Our service doesn’t stop at the end of our harbor. We can and will help you all over Sardinia, Italy and the South of France. It’s good to know a friendly face!");

    $(".feature-item h5").eq(1).text("Charter guidee");
    $(".feature-item p").eq(1).text("Let us help you find exactly the right Charter boat for you! If we cannot help you, nobody can!");

    $(".feature-item h5").eq(2).text("Yachting made easy");
    $(".feature-item p").eq(2).text("The season on Sardinia is amazing yet short. Enjoy each and every day to the Max. We take care of all your Yachting needs.");

    // package part
    $(".package-header h4").text("YACHT");
    $(".package-header h3").text("Choose Your favourite Ship");

    $(".package-text a").eq(0).text("SACS Strider 15");
    $(".package-text a").eq(1).text("VanDutch 55");
    $(".package-text a").eq(2).text("Jaquar 92");

    $(".details-text h4").eq(0).text("Length");
    $(".details-text h4").eq(1).text("Price");
    $(".details-text h4").eq(2).text("Shipyard");
    $(".details-text h4").eq(3).text("Build/Refit");

    $(".details-text2 h4").eq(0).text("Length");
    $(".details-text2 h4").eq(1).text("Price");
    $(".details-text2 h4").eq(2).text("Shipyard");
    $(".details-text2 h4").eq(3).text("Build/Refit");

    $(".details-text3 h4").eq(0).text("Length");
    $(".details-text3 h4").eq(1).text("Price");
    $(".details-text3 h4").eq(2).text("Shipyard");
    $(".details-text3 h4").eq(3).text("Build/Refit");

    $(".more-btn a .btn").text("More Details");

    // agant-registation part
    $(".registation-text h3").text("More info? Wanna work with us?");
    $(".registation-text p").text("Join Our company as new teammember or as Client");
    $(".registion-btn a .btn").text("CONTACT");

    // map part
    $(".location-match h3").text("COORDINATES");

    // ===========mooring page ============//

    // mooring banner
    $(".mooring-banner h3").text("Mooring For Your Yacht");
    // mooring main part
    $(".mooring-content p").eq(0).text("The Marina MareFun located on the new and welcoming seafront of Golfo Aranci offers 50 mooring places for boats up to 100 foot, sailboats and motorboats. Draft is not a problem with us. The crystal clear water in our port will leave you speechless, and in just a few steps you will find the best local restaurants, try the catch of the day! There are ample places to have an aperitif at sunset and shops where you can buy all typical Sardinian products and much more.");
    $(".mooring-content p").eq(1).text("Golfo Aranci is the corner of paradise, an essential stop when touring Sardinia, its coasts will remain in your heart.");
    $(".contact_taxt a .btn").text("Contact");

    $(".mooring-content p").eq(2).text("Our MareFun staff will welcome you and help you to fully enjoy your experience in Sardinia, we offer the following services:");

    $(".mooring-content ul li").eq(0).text("- Ice");
    $(".mooring-content ul li").eq(1).text("- Wifi");
    $(".mooring-content ul li").eq(2).text("- Water");
    $(".mooring-content ul li").eq(3).text("- Linen service");
    $(".mooring-content ul li").eq(4).text("- Transfer boats");
    $(".mooring-content ul li").eq(5).text("- Gated entrance");
    $(".mooring-content ul li").eq(6).text("- 220 / 380 Volt");
    $(".mooring-content ul li").eq(7).text("- Marina Reception");
    $(".mooring-content ul li").eq(8).text("- Mooring assistance");
    $(".mooring-content ul li").eq(9).text("- Technical assistance");
    $(".mooring-content ul li").eq(10).text("- Food on Board Service");
    $(".mooring-content ul li").eq(11).text("- Specialized sailor service");
    $(".mooring-content ul li").eq(12).text("- Boat assistance and storage");
    $(".mooring-content ul li").eq(13).text("- Restaurant, Hotel and port reservations for our clients");
    $(".mooring-content ul li").eq(14).text("- VHF assistance, channel 9, Italian, English and French speaking");

    $(".price_btn .btn").text("Price List");

    // ===========Yacht charter page ============//
    $(".charter-banner h3").text("Yacht Charter For You");

    // charter about
    $(".charter-about-text p").eq(0).text(" MareFun has a comprehensive fleet of charter boats, we can satisfy all tastes and needs.");
    $(".charter-about-text p").eq(1).text(" Our charter crew are all multilingual, friendly professionals who understand how to make your charter experience great. They will accompany you on your journey to discover Sardinia, revealing all its hidden and heavenly places. Getting you a table at a popular restaurant, a place on the beach or a berth for the night, with our network; no problem.");
    $(".charter-about-text p").eq(2).text(" Our fleet is maintained meticulous and all ships are located on the northwestern coast of Sardinia, waiting for you to discover the most beautiful area in the world.");

    $(".charter-about-text ul li").eq(0).text(" ⦁ BERNICO 45 LEVERAGE.");
    $(".charter-about-text ul li").eq(1).text(" ⦁ RIBBON 45XC.");
    $(".charter-about-text ul li").eq(2).text(" ⦁ SACS STRIDER 15.");
    $(".charter-about-text ul li").eq(3).text(" ⦁ JAGUAR 92.");
    $(".charter-about-text ul li").eq(4).text(" ⦁ VANDUTCH 55.");

    $(".booking-btn a .btn").eq(0).text("Booking Now");
    $(".booking-btn .btn").eq(1).text("Price List");

    // =======BERNICO Leverage 45=====//

    $(".bernico-yacht h3").text("BERNICO Leverage 45");

    $(".bernico-text p").eq(0).text("Fast and Furious! This Bernico 45 LEVERAGE is a custom build powerboat with a stepped hull and twin Mercury 1100Hp racing engines. It is made from the same mold as the two-fold world champion in its class.");
    $(".bernico-text p").eq(1).text("Although she is made for speed (capable to do speeds over 220 KmH.) in this layout it is all about luxury. With the engine tuned down and different propellors she is still capable of doing 90 Knots but without getting uncomfortable.");
    $(".bernico-text p").eq(2).text("This is the perfect ship for those special mornings or evenings when the sea looks oily; no waves… although she performs great in waves.");
    $(".bernico-text p").eq(3).text("This awesome machine was fully custom made by Bernico in 2021/22 and delivered in 2022. For speed enthusiasts or really anybody that just want to travel fast from A to B it is an awesome peace of equipment. Not for the faint of heart.");

    $(".bernico-specifications h3").text("BERNICO Leverage 45 Specifications ");

    $(".bernico-specification-items ul li").eq(0).text("Length Over All: 13,48m");
    $(".bernico-specification-items ul li").eq(1).text("Beam: 2,80 m");
    $(".bernico-specification-items ul li").eq(2).text("Fuel Capacity: 1200 l");
    $(".bernico-specification-items ul li").eq(3).text("Water Capacity: 70 l");
    $(".bernico-specification-items ul li").eq(4).text("Max Speed: 95 Knots");
    $(".bernico-specification-items ul li").eq(5).text("Cruise Speed: 35-50 Knots");
    $(".bernico-specification-items ul li").eq(6).text("Hull and deck in composite material using vacuum injection techniques");
    $(".bernico-specification-items ul li").eq(7).text("Fold-down cleats (8)");
    $(".bernico-specification-items ul li").eq(8).text("Life raft and lifejackets storage");
    $(".bernico-specification-items ul li").eq(9).text("Cockpit handles");
    $(".bernico-specification-items ul li").eq(10).text("Special racing seats");
    $(".bernico-specification-items ul li").eq(11).text("Deck with Esthec finishing");
    $(".bernico-specification-items ul li").eq(12).text("Navigation lights");
    $(".bernico-specification-items ul li").eq(13).text("LED floor lighting");
    $(".bernico-specification-items ul li").eq(14).text("Custom Seating and upholstery");
    $(".bernico-specification-items ul li").eq(15).text("2 telescopic seats + 4 normal seats");

    $(".bernico-specification-items ul li").eq(16).text("Electronics and instruments");
    $(".bernico-specification-items ul li").eq(17).text("Garmin navigation and engines control screen");
    $(".bernico-specification-items ul li").eq(18).text("Electronic CAN Bus throttle controls");
    $(".bernico-specification-items ul li").eq(19).text("Engines oil alarm");
    $(".bernico-specification-items ul li").eq(20).text("Water temperature alarm");
    $(".bernico-specification-items ul li").eq(21).text("Raymarine fixed and handheld VHF radio");
    $(".bernico-specification-items ul li").eq(22).text("Thermo-acoustic insulation");
    $(".bernico-specification-items ul li").eq(23).text("2 x Mercury Racing 1100 Hp. inboard engines");
    $(".bernico-specification-items ul li").eq(24).text("2 x Mercury Racing Z-Drive");
    $(".bernico-specification-items ul li").eq(25).text("2 x 5 spoke racing propellors");
    $(".bernico-specification-items ul li").eq(26).text("Service batteries 3 x 12 V 170 A/h, maintenance free");
    $(".bernico-specification-items ul li").eq(27).text("Engine start batteries 1 x 12 V 170 A/h, maintenance free");
    $(".bernico-specification-items ul li").eq(28).text("Mastervolt inverters");
    $(".bernico-specification-items ul li").eq(29).text("Air-conditioning (on shore power)");
    $(".bernico-specification-items ul li").eq(30).text("Battery charger 20 A 220 V");
    $(".bernico-specification-items ul li").eq(31).text("Shore power connection with cable");
    $(".bernico-specification-items ul li").eq(32).text("Head lighting");
    $(".bernico-specification-items ul li").eq(33).text("Navigation lights");
    $(".bernico-specification-items ul li").eq(34).text("Air Horn");
    $(".bernico-specification-items ul li").eq(35).text("Battery switches");
    $(".bernico-specification-items ul li").eq(36).text("Battery paralleling for engine starting");
    $(".bernico-specification-items ul li").eq(37).text("Cathode protection by zinc anodes and ground plate");
    $(".bernico-specification-items ul li").eq(38).text("Electric flush WC");
    $(".bernico-specification-items ul li").eq(39).text("220 / 110 volt plugs");
    $(".bernico-specification-items ul li").eq(40).text("Pantry area including refrigerator");
    $(".bernico-specification-items ul li").eq(41).text("Sink/Wash basin with hot/ cold water");
    $(".bernico-specification-items ul li").eq(42).text("Toilet accessories");
    $(".bernico-specification-items ul li").eq(43).text("Mirror with light");
    $(".bernico-specification-items ul li").eq(44).text("Storage cupboards");
    $(".bernico-specification-items ul li").eq(45).text("Black water / fresh water & bilge system");
    $(".bernico-specification-items ul li").eq(46).text("Tank 36 I / 9.5 gal");
    $(".bernico-specification-items ul li").eq(47).text("Macerator for discharge to sea");
    $(".bernico-specification-items ul li").eq(48).text("Shore pump connection");
    $(".bernico-specification-items ul li").eq(49).text("Fresh water pump");
    $(".bernico-specification-items ul li").eq(50).text("Fresh water tank 70l");
    $(".bernico-specification-items ul li").eq(51).text("4 Automatic bilge pumps");
    $(".bernico-specification-items ul li").eq(52).text("One Manual bilge pump");
    $(".bernico-specification-items ul li").eq(53).text("Safety equipment");
    $(".bernico-specification-items ul li").eq(54).text("4 Portable fire extinguishers");
    $(".bernico-specification-items ul li").eq(55).text("12 Automatic Life vests");
    $(".bernico-specification-items ul li").eq(56).text("Miscellaneous");
    $(".bernico-specification-items ul li").eq(57).text("Swim ladder");
    $(".bernico-specification-items ul li").eq(58).text("Premium High-end Fusion music system");
    $(".bernico-specification-items ul li").eq(59).text("4 x 2500 watt amplifier");
    $(".bernico-specification-items ul li").eq(60).text("2 x Subwoofer ");

    //============= The Ribbon 45XC ===========//
    $(".ribbon-header h3").text("The Ribbon 45XC");

    $(".ribbon-specifications h3").text("Ribbon 45XC Specifications");

    $(".ribbon-text p").eq(0).text("The Ribbon 45XC is a luxurious versatile fast tender that can also be used for enjoying yourself on the water. Its luxurious design with the typical Dutch simple lines has been conceived in detail to favor comfort and practicality. This ship is fast yet extremely comfortable; suitable for multiple purposes such as transporting, fishing, diving or day cruise experiences. It uses the same acclaimed hull as the Ribbon R45, it just doesn’t get any better.");
    $(".ribbon-text p").eq(1).text("The Ribbon 45 XC provides accommodation for up to twelve guests, making it a fantastic boat for fast short to medium-range coastal cruising.");
    $(".ribbon-text p").eq(2).text("Its distinctive profile is the unmistakable vertical bow and minimalist lines. Thanks to the stabilizer on board even on anchor she is very comfortable, this is a truly unique feature for a ship of this size.");
    $(".ribbon-text p").eq(3).text("On board you will find ample seating and a sundeck in the back where you can enjoy your drink in the sun or under the Bimini.");
    $(".ribbon-text p").eq(4).text("Even to use this ship at night after a fantastic evening at a club or restaurant is no problem, thanks to its sophisticated integrated radar, sonar and night vision system. No matter where you go with this astonishing ship, you are sure that you will attract attention.");

    $(".ribbon-specification-items ul li").eq(0).text("Length Over All: 13,48m / 45 ft ");
    $(".ribbon-specification-items ul li").eq(1).text("Length Hull: 15.55 m / 52 ft ");
    $(".ribbon-specification-items ul li").eq(2).text("Beam: 3,92 m / 12,95 ft ");
    $(".ribbon-specification-items ul li").eq(3).text("Draft: 1.05 m / 3.15 ft ");
    $(".ribbon-specification-items ul li").eq(4).text("Fuel Capacity: 1000 l ");
    $(".ribbon-specification-items ul li").eq(5).text("Water Capacity: 70 l ");
    $(".ribbon-specification-items ul li").eq(6).text("Max Speed: 45 Knots ");
    $(".ribbon-specification-items ul li").eq(7).text("Cruise Speed: 25-30 Knots ");
    $(".ribbon-specification-items ul li").eq(8).text("Hull and deck in composite material using vacuum injection techniques ");
    $(".ribbon-specification-items ul li").eq(9).text("Fold-down cleats (8) ");
    $(".ribbon-specification-items ul li").eq(10).text("Life raft and lifejackets storage ");
    $(".ribbon-specification-items ul li").eq(11).text("Anchor with automatic hydraulic pivoting arm ");
    $(".ribbon-specification-items ul li").eq(12).text("Anchor chain (50 m / 164 ft) ");
    $(".ribbon-specification-items ul li").eq(13).text("Fresh water fill cap on portside ");
    $(".ribbon-specification-items ul li").eq(14).text("Fuel fill cap on portside ");
    $(".ribbon-specification-items ul li").eq(15).text("SubwoDeck self-draining systemofer ");
    $(".ribbon-specification-items ul li").eq(16).text("Cockpit handles ");
    $(".ribbon-specification-items ul li").eq(17).text("Deck with Esthec finishing ");
    $(".ribbon-specification-items ul li").eq(18).text("Navigation lights ");
    $(".ribbon-specification-items ul li").eq(19).text("LED floor lighting ");
    $(".ribbon-specification-items ul li").eq(20).text("Seating and upholstery ");
    $(".ribbon-specification-items ul li").eq(21).text("7 telescopic seats + 10 normal seats ");
    $(".ribbon-specification-items ul li").eq(22).text("Electronics and instruments ");
    $(".ribbon-specification-items ul li").eq(23).text("Garmin navigation and engines control screen ");
    $(".ribbon-specification-items ul li").eq(24).text("Electronic CAN Bus throttle controls ");
    $(".ribbon-specification-items ul li").eq(25).text("Engines oil alarm ");
    $(".ribbon-specification-items ul li").eq(26).text("Water temperature alarm ");
    $(".ribbon-specification-items ul li").eq(27).text("Electric steering system (Steer by Wire) ");
    $(".ribbon-specification-items ul li").eq(28).text("Joystick ");
    $(".ribbon-specification-items ul li").eq(29).text("Raymarine fixed and handheld VHF radio ");
    $(".ribbon-specification-items ul li").eq(30).text("Garmin Radar ");
    $(".ribbon-specification-items ul li").eq(31).text("FLIR night vision ");
    $(".ribbon-specification-items ul li").eq(32).text("Thermo-acoustic insulation ");
    $(".ribbon-specification-items ul li").eq(33).text("Gyroscopic Stabalizer ");
    $(".ribbon-specification-items ul li").eq(34).text("3 x Mercury Verado Racing outboard engines ");
    $(".ribbon-specification-items ul li").eq(35).text("SubService batteries 3 x 12 V 170 A/h, maintenance freewoofer ");
    $(".ribbon-specification-items ul li").eq(36).text("Mastervolt inverters ");
    $(".ribbon-specification-items ul li").eq(37).text("Battery charger 20 A 220 V ");
    $(".ribbon-specification-items ul li").eq(38).text("Shore power connection with cable ");
    $(".ribbon-specification-items ul li").eq(39).text("Head lighting ");
    $(".ribbon-specification-items ul li").eq(40).text("Seating ");
    $(".ribbon-specification-items ul li").eq(41).text("loe ");

    $(".ribbon-specification-items ul li").eq(42).text("Electronics and instruments ");
    $(".ribbon-specification-items ul li").eq(43).text("Garmin navigation and engines control screen ");
    $(".ribbon-specification-items ul li").eq(44).text("Electronic CAN Bus throttle controls ");
    $(".ribbon-specification-items ul li").eq(45).text("Engines oil alarm ");
    $(".ribbon-specification-items ul li").eq(46).text("Water temperature alarm ");
    $(".ribbon-specification-items ul li").eq(47).text("Electric steering system (Steer by Wire) ");
    $(".ribbon-specification-items ul li").eq(48).text("Joystick ");
    $(".ribbon-specification-items ul li").eq(49).text("Raymarine fixed and handheld VHF radio ");
    $(".ribbon-specification-items ul li").eq(50).text("Garmin Radar ");
    $(".ribbon-specification-items ul li").eq(51).text("FLIR night vision ");
    $(".ribbon-specification-items ul li").eq(52).text("Thermo-acoustic insulation ");
    $(".ribbon-specification-items ul li").eq(53).text("Gyroscopic Stabalizer ");
    $(".ribbon-specification-items ul li").eq(54).text("3 x Mercury Verado Racing outboard engines ");
    $(".ribbon-specification-items ul li").eq(55).text("Service batteries 3 x 12 V 170 A/h, maintenance free ");
    $(".ribbon-specification-items ul li").eq(56).text("Engine start batteries 1 x 12 V 170 A/h, maintenance free ");
    $(".ribbon-specification-items ul li").eq(57).text("Mastervolt inverters ");
    $(".ribbon-specification-items ul li").eq(58).text("Battery charger 20 A 220 V ");
    $(".ribbon-specification-items ul li").eq(59).text("Shore power connection with cable ");
    $(".ribbon-specification-items ul li").eq(60).text("Head lighting ");
    $(".ribbon-specification-items ul li").eq(61).text("Navigation lights ");
    $(".ribbon-specification-items ul li").eq(62).text("Air Horn ");
    $(".ribbon-specification-items ul li").eq(63).text("Battery switches ");

    //============= SACS Strider15 ===========//

    $(".sacs-text p").eq(0).text("Absolutely amazing! Enjoy your day or weekend on the water without sacrificing comfort, power and elegance. The Sacs Strider 15 is unrivaled. With its luxurious design and low draft this RIB will take you anywhere fast and comfortable, it’s layout just doesn’t get any better.");
    $(".sacs-text p").eq(1).text("The Strider 15 provides accommodation for up to ten guests for day cruising and 4 guests for a comfortable stay over, making it a fantastic ship even for longer-range coastal cruising.");
    $(".sacs-text p").eq(2).text("Its distinctive profile is the unmistakable width creating a lot of deck space");
    $(".sacs-text p").eq(3).text("According to Sacs this Strider 15 has to be one of the best performing and cutting edge motor boats in its sort. We agree!");
    $(".sacs-text p").eq(4).text("On the foredeck there is a large sunbathing and relaxation area as well as in the back where you can enjoy the Sardinian sun with 4, even 5 people! You will find a convenient Hot/ Cold deck shower at the bow and one at the aft area.");
    $(".sacs-text p").eq(5).text("Below deck, the Strider 15 offers ample living space, making her ideal for weekend trips. Designed with the concept of chic luxury that defines the silhouette of this elegant motorboat, the interior is as aesthetically pleasing as the exterior.");
    $(".sacs-text p").eq(6).text("The perfect flat and spacy aft area is ideal for guests who wish to bask in the gorgeous Mediterranean sunshine while at anchor or dive into the glistening light and dark blue waters for a refreshing dip. The sophisticated on-board music system allows guests to play the music they want, contributing to a relaxing vibe or upbeat tropical summer atmosphere!");
    $(".sacs-text p").eq(7).text("Guests can escape the most intimate hours of sunshine thanks to the automatic large Bimini-top, this way you can relax in the shade while still marveling at the natural beauty of the rugged Sardinian coastline. Should you wish to escape the sun completely, guests can retreat to the cool air-conditioned suite with 2 king-size beds.");
    $(".sacs-text p").eq(8).text("Below deck, the Strider 15 offers ample living space, making her ideal for weekend trips. Designed with the concept of chic luxury that defines the silhouette of this elegant motorboat, the interior is as aesthetically pleasing as the exterior.");
    $(".sacs-text p").eq(9).text(" Through completely new 2022 hull design, she can reach high speeds while offering guests a quiet and dry ride, a distinct lack of vibrations means that comfort will never be compromised..");
    $(".sacs-text p").eq(10).text(" This RIB-yacht is just perfect, allowing you access any port or beach, hidden coves with tumbling green cliffs while meeting all size restrictions and being able to dock at prime harbor spots like Cale di Volpe, Porto Cervo or Poltu Quatu. Guests never have to go far by foot to explore the (is)land’s attractions or it’s authentic restaurants..");
    $(".sacs-text p").eq(11).text(" With a cruising speed of only 20 knots, the Strider 15 effortlessly slices through the water, even reaching St Tropez or Monaco. Or travelling from Porto Rotondo to Maddalena/ Tavolara in less then an hour. Thanks to this magnificent display of power and speed, guests have the amazing opportunity to explore an array of destinations, making the most of your luxury charter..");
    $(".sacs-text p").eq(12).text(" Even to use this ship at night after a fantastic evening at a club or restaurant is no problem, thanks to its state of the art sophisticated integrated radar, sonar and FLIR night vision system. No matter where you go with this astonishing ship, you are sure that you will attract attention..");

    $(".sacs-specifications h3").text("SACS Strider 15 - specifications");

    $(".sacs-specification-items ul li").eq(0).text("Length Over All: 15 m ");
    $(".sacs-specification-items ul li").eq(1).text("Beam: 5 m ");
    $(".sacs-specification-items ul li").eq(2).text("Draft: 0,75 ");
    $(".sacs-specification-items ul li").eq(3).text("Fuel Capacity: 1200 l ");
    $(".sacs-specification-items ul li").eq(4).text("Water Capacity: 600 l 225 l ");
    $(".sacs-specification-items ul li").eq(5).text("Max Speed: 43 Knots ");
    $(".sacs-specification-items ul li").eq(6).text("Hull and deck in composite material using vacuum injection techniques / Hypalon ");
    $(".sacs-specification-items ul li").eq(7).text("Fold-down cleats (4) ");
    $(".sacs-specification-items ul li").eq(8).text("Fenders and shorelines housed in aftside box ");
    $(".sacs-specification-items ul li").eq(9).text("Lifejackets storage ");
    $(".sacs-specification-items ul li").eq(10).text("Anchor with S/S chain ");
    $(".sacs-specification-items ul li").eq(11).text("Anchor S/S chain (50 m / 164 ft) ");
    $(".sacs-specification-items ul li").eq(12).text("Fresh water fill cap on portside ");
    $(".sacs-specification-items ul li").eq(13).text("Fuel fill cap on portside ");
    $(".sacs-specification-items ul li").eq(14).text("Deck self-draining system ");
    $(".sacs-specification-items ul li").eq(15).text("Cockpit handles ");
    $(".sacs-specification-items ul li").eq(16).text("Deck with Esthec finishing ");
    $(".sacs-specification-items ul li").eq(17).text("Navigation lights ");
    $(".sacs-specification-items ul li").eq(18).text("LED floor lighting ");
    $(".sacs-specification-items ul li").eq(19).text("Seating and upholstery ");
    $(".sacs-specification-items ul li").eq(20).text("Seating of helm and leisure area in Silvertex with quick foam ");
    $(".sacs-specification-items ul li").eq(21).text("Aft sun bed cushions in Silvertex with quick foam ");
    $(".sacs-specification-items ul li").eq(22).text("Electronics and instruments ");
    $(".sacs-specification-items ul li").eq(23).text("2 x 18” Raymarine navigation and engines control screen ");
    $(".sacs-specification-items ul li").eq(24).text("Raymarine HD Radar ");
    $(".sacs-specification-items ul li").eq(25).text("Water ");

    $(".sacs-specification-items ul li").eq(26).text("FLIR Night vision system ");
    $(".sacs-specification-items ul li").eq(27).text("Electronic CAN Bus throttle controls ");
    $(".sacs-specification-items ul li").eq(28).text("Engines oil alarm ");
    $(".sacs-specification-items ul li").eq(29).text("Water temperature alarm ");
    $(".sacs-specification-items ul li").eq(30).text("Electric steering system (Steer by Wire) ");
    $(".sacs-specification-items ul li").eq(31).text("Raymarine fixed and handheld VHF radio ");
    $(".sacs-specification-items ul li").eq(32).text("Engine room and fuel system ");
    $(".sacs-specification-items ul li").eq(33).text("Diesel package: 2 X Volvo D6 440 hp each ");
    $(".sacs-specification-items ul li").eq(34).text("Propulsion: Z-Drive with joystick ");
    $(".sacs-specification-items ul li").eq(35).text("Thermo-acoustic insulation ");
    $(".sacs-specification-items ul li").eq(36).text("Air extraction fan ");
    $(".sacs-specification-items ul li").eq(37).text("Automatic fire extinguishing system ");
    $(".sacs-specification-items ul li").eq(38).text("Hydraulic engine room hatch ");
    $(".sacs-specification-items ul li").eq(39).text("Generator Onan 4Kw ");
    $(".sacs-specification-items ul li").eq(40).text("Electrical system ");
    $(".sacs-specification-items ul li").eq(41).text("“One Touch” Electrical control panel ");
    $(".sacs-specification-items ul li").eq(42).text("Service batteries 4 x 24 V 170 A/h, maintenance free ");
    $(".sacs-specification-items ul li").eq(43).text("Engine start batteries 2 x 24 V 170 A/h, maintenance free ");
    $(".sacs-specification-items ul li").eq(44).text("Mastervolt inverters ");
    $(".sacs-specification-items ul li").eq(45).text("Battery charger 20 A 220 V ");
    $(".sacs-specification-items ul li").eq(46).text("Shore power connection with cable ");
    $(".sacs-specification-items ul li").eq(47).text("Head lighting ");
    $(".sacs-specification-items ul li").eq(48).text("Navigation lights ");
    $(".sacs-specification-items ul li").eq(49).text("Built-in Horn ");
    $(".sacs-specification-items ul li").eq(50).text("Battery switches ");
    $(".sacs-specification-items ul li").eq(51).text("Battery paralleling for engine starting ");
    $(".sacs-specification-items ul li").eq(52).text("MastCathode protection by zinc anodes and ground plate ervolt ");
    $(".sacs-specification-items ul li").eq(53).text("Electric flush WC ");
    $(".sacs-specification-items ul li").eq(54).text("Easy Maneuvering System, consisting of bow and stern thrusters, including joystick control ");
    $(".sacs-specification-items ul li").eq(55).text("Cabin area ");
    $(".sacs-specification-items ul li").eq(56).text("Queen Size V-Berth ");
    $(".sacs-specification-items ul li").eq(57).text("Ceiling lights with dimmer ");
    $(".sacs-specification-items ul li").eq(58).text("Closets Corian finishing ");
    $(".sacs-specification-items ul li").eq(59).text("Floor Esthec finishing ");
    $(".sacs-specification-items ul li").eq(60).text("Air conditioning annex heating ");
    $(".sacs-specification-items ul li").eq(61).text("Saloon with sofa including tray and storage space ");
    $(".sacs-specification-items ul li").eq(62).text("Master cabin with double bed ");
    $(".sacs-specification-items ul li").eq(63).text("Guest cabin with double bed ");
    $(".sacs-specification-items ul li").eq(64).text("Cupboards as storage areas ");
    $(".sacs-specification-items ul li").eq(65).text("Ceiling hatch with Air Sky light blinding and / or mosquito protection ");
    $(".sacs-specification-items ul li").eq(66).text("220/ 110 volt plugs ");
    $(".sacs-specification-items ul li").eq(67).text("Pantry area ");
    $(".sacs-specification-items ul li").eq(68).text("Full size sink ");
    $(".sacs-specification-items ul li").eq(69).text("Microwave Oven ");
    $(".sacs-specification-items ul li").eq(70).text("Induction cooker ");
    $(".sacs-specification-items ul li").eq(71).text("Coffee machine ");
    $(".sacs-specification-items ul li").eq(72).text("Twin refrigerators ");
    $(".sacs-specification-items ul li").eq(73).text("Bathroom area ");
    $(".sacs-specification-items ul li").eq(74).text("Electric flush head ");
    $(".sacs-specification-items ul li").eq(75).text("Sink/Wash basin with hot/ cold water ");
    $(".sacs-specification-items ul li").eq(76).text("Full size shower ");
    $(".sacs-specification-items ul li").eq(77).text("Fan ");
    $(".sacs-specification-items ul li").eq(78).text("Toilet accessories ");
    $(".sacs-specification-items ul li").eq(79).text("Mirror with light ");
    $(".sacs-specification-items ul li").eq(80).text("Storage cupboards ");
    $(".sacs-specification-items ul li").eq(81).text("Black water / fresh water & bilge system tank 200 I ");
    $(".sacs-specification-items ul li").eq(82).text("Macerator for discharge to sea ");
    $(".sacs-specification-items ul li").eq(83).text("Shore pump connection ");
    $(".sacs-specification-items ul li").eq(84).text("WFresh water pumpater ");
    $(".sacs-specification-items ul li").eq(85).text("Fresh water tank 224 l ");
    $(".sacs-specification-items ul li").eq(86).text("4 Automatic bilge pumps ");
    $(".sacs-specification-items ul li").eq(87).text("Two Manual bilge pump ");
    $(".sacs-specification-items ul li").eq(88).text("Safety equipment ");
    $(".sacs-specification-items ul li").eq(89).text("Portable fire extinguisher ");
    $(".sacs-specification-items ul li").eq(90).text("Fire alarm system ");
    $(".sacs-specification-items ul li").eq(91).text("Fuel detection alarm system ");
    $(".sacs-specification-items ul li").eq(92).text("10 Automatic Life vests ");
    $(".sacs-specification-items ul li").eq(93).text("Miscellaneous ");
    $(".sacs-specification-items ul li").eq(94).text("Comfortable aft swim ladder ");
    $(".sacs-specification-items ul li").eq(95).text("Aft and bow hot/ cold shower ");
    $(".sacs-specification-items ul li").eq(96).text("Stainless steel flagpole ");
    $(".sacs-specification-items ul li").eq(97).text("Cleat covers matching hull color ");
    $(".sacs-specification-items ul li").eq(98).text("Premium High-end Fusion music system ");
    $(".sacs-specification-items ul li").eq(99).text("2 x 2500 watt amplifier ");
    $(".sacs-specification-items ul li").eq(100).text("2 x Subwoofer ");
    $(".sacs-specification-items ul li").eq(101).text("Full color LED underwater lights ");
    $(".sacs-specification-items ul li").eq(102).text("Water toys /Sea bob or jet-ski’s at anchor location ");

    //=============JAQUAR ===========//
    $(".golden-header h3").text("The most beautiful coastlines in the world");
    $(".golden-header h5").text("EXPLORE M/Y GOLDFINGER");

    $(".jaquar-text p").eq(0).text("Navigate our unique modern gorgeous fast luxury yacht. Equipped with all high end conveniences and highly professional staff. Hop from island to island through sheltered water passages, or take fast trips on open water and spend the night in a secluded bay or a romantic remote port where time stood still. Plan your holiday to perfection or just let yourself be carried away on the current. One thing is certain: the travel to your next destination will exceed your expectations.");
    $(".jaquar-text p").eq(1).text("A coastline like you only find in the very best travel brochures; that is what awaits you during a mesmerizing Mediterranean yacht charter. Begin your adventure in one of the colorful ports of Sardine, Turkey or on the Aegean Sea. Be surprised by the culture, exquisite cuisine and the most beautiful sheltered anchorages during a cruise on the Mediterranean Sea. Or look for the timeless treasures of the enchanting Dalmatian Islands. A truly unique experience.");
    $(".jaquar-text p").eq(2).text("Navigate our unique modern gorgeous fast luxury yacht. Equipped with all high end conveniences and highly professional staff she offers ample amount of space. Hop from island to island through sheltered water passages, or take fast trips on open water and spend the night in a secluded bay or a romantic remote port where time stood still, waves don’t bother you because of het Seakeeper stabilizer.");
    $(".jaquar-text p").eq(3).text("Plan your holiday to perfection or just let yourself be carried away on the current. One thing is certain: the travel to your next destination will exceed your expectations.");
    $(".jaquar-text p").eq(4).text("In Croatia, Italy or Turkey novice and advanced sailors will have a great time. The Italian Amalfi Coast is steeped in culture and is dotted with beautiful sights. Give your sea legs a little time on land during the island hopping along the Adriatic coast in Croatia. Or indulge your senses in Palma de Mallorca in Spain, where modern and antique form a unique symbiosis. Wherever you throw your anchor in the Mediterranean, this will be a dream vacation you will never forget. A great Yacht, meticulous and friendly crew make sure you feel relaxed and welcome where ever your travels will take you. Either you plan the route or we will; we know all the great places and hidden secrets of the Mediterranean.");
    $(".jaquar-text p").eq(5).text("This well designed yacht (by: Paolo Caliari) is equipped with all conveniences and styled by Dutch interior designer; Denise van Rijmenam. For her size Goldfinger offers unexpected spacious (bath)rooms. You only need to take your (swimming) clothing and toothbrush with you. Our capable crew consists of an experienced captain, deckhand, charming hostess and great chef (all certified, speaking English, Turkish, Ukrainian and Russian); professionals in their field and with just one goal: making sure you feel pampered, comfortable, safe and welcome.");

    $(".jaquar-item h3").eq(0).text("Master bedroom");
    $(".jaquar-item p").eq(0).text("Spacious Master bedroom with a queen size bed, Bose surround, Apple TV, 48” 4K TV, ambient lighting. Walk-in closet and Bathroom en suite.");

    $(".jaquar-item h3").eq(1).text("VIP Bedroom");
    $(".jaquar-item p").eq(1).text("Spacious Suite with a queen size bed, Bose surround, Apple TV, 42” 4K TV, ambient lighting. Walk-in closet and Bathroom en suite.");

    $(".jaquar-item h3").eq(2).text("2 Double rooms");
    $(".jaquar-item p").eq(2).text("2 double rooms, single beds (2+2), HiFi system, Apple TV, 36” 4K TV, ambient lighting. Spacious bathroom en suite.");

    $(".jaquar-specifications h3").text("JAQUAR Specifications");

    $(".jaquar-specifications-item h4").eq(0).text("Goldfinger Yacht");
    $(".jaquar-specifications-item p").eq(0).text("Model: Jaguar 92");
    $(".jaquar-specifications-item p").eq(1).text("Vessel-ID:917244");
    $(".jaquar-specifications-item p").eq(2).text("Delivery date / commissioned: 2013");
    $(".jaquar-specifications-item p").eq(3).text("First use / completion / refit: 2019");

    $(".jaquar-specifications-item h4").eq(1).text("Dimensions");
    $(".jaquar-specifications-item p").eq(4).text("Width: 6.5m");
    $(".jaquar-specifications-item p").eq(5).text("Draft: 3.43 m");
    $(".jaquar-specifications-item p").eq(6).text("L.O.A: 28m / 24mtr (waterline)");

    $(".jaquar-specifications-item h4").eq(2).text("Propulsion");
    $(".jaquar-specifications-item p").eq(7).text("Drive: TDS – Arneson");
    $(".jaquar-specifications-item p").eq(8).text("Engine: 2 x 1920hp MTU diesel");
    $(".jaquar-specifications-item p").eq(9).text("Engine hours: below 300 hours)");
    $(".jaquar-specifications-item p").eq(10).text("Drive running time: below 50 hours");

    $(".jaquar-specifications-item h4").eq(3).text("Speed");
    $(".jaquar-specifications-item p").eq(11).text("Cruising speed: 28 Kn - 20Ltr/ Nt. Mile");
    $(".jaquar-specifications-item p").eq(12).text("Top speed: 35Kn. – 24 Ltr/ Nt. Mile");

    $(".jaquar-specifications-item h4").eq(4).text("Navigation");
    $(".jaquar-specifications-item p").eq(13).text("Joystick system, Auto trim system, Autopilot, Radar, Flir night camera, camera system, VHF-radio, GPS, GPS plotter, Compass, log, echo sounder, barometer, AEDS, port manuals, sea maps");

    $(".jaquar-specifications-item h4").eq(5).text("Technic");
    $(".jaquar-specifications-item p").eq(14).text(" 2 x 30Kwh generator (< 500 Hrs.), double high capacity air-conditioning, 360 Volt Anchor - winch, interactive RGB underwater lights, high capacity water maker, RGB light in saloon and all cabin’s");

    $(".jaquar-specifications-item h4").eq(6).text("Deck Equipment");
    $(".jaquar-specifications-item p").eq(15).text("Swim ladder, Bathing platform, Hot/ cold shower aft and bow, all conceivable water toys, Jetski Wave Runner FX SVHO, Tender Grand 850 with 2x225PK outboard, Seabob, Crystal kayak, underwater drone, paddle board, Diving equipment, 10.000 Watt JL stereo on the aft deck, 500 Watt JL stereo on the bow, Bimini aft deck.");

    $(".jaquar-specifications-item h4").eq(7).text("Safety");
    $(".jaquar-specifications-item p").eq(16).text("Fire extinguisher, Life raft (2), Life vest(24), Bilge pumps, AED system, Fully equipped first aid station, Flags, All emergency signaling devices, Gas detector, Smoke detector, Automated fire control system.");

    $(".jaquar-specifications-item h4").eq(8).text("Interior");
    $(".jaquar-specifications-item p").eq(17).text("Full electric toilets (5) and bidets (4), Electric cooker, 3 x Refrigerator, Normal and high capacity icemaker, cutlery, tableware, towels (beach and regular), Sundeck bow and aft, 5 Sofa’s, 8 Person dining table inside and outside.");

    $(".jaquar-specifications-item h4").eq(9).text("Entertainment");
    $(".jaquar-specifications-item p").eq(18).text("Satellite TV, radio, MP3, Apple TV, 5 flat screen TV (1 Saloon and 4 cabin’s), 3 x Bose 5.1 (master, VIP and Saloon), High power Hi-Fi system, JL Audio Aft and bow.");

    $(".jaquar-specifications-item h4").eq(10).text("Cabin’s");
    $(".jaquar-specifications-item p").eq(19).text("Master bedroom (2 persons) - VIP cabin (2 persons) - 2 x Guest bedroom (4 persons) - Separate crew cabin, laundry area and kitchen");

    // vandutch //
    $(".vandutch-header p").text("The best way to enjoy a sea experience without sacrificing power and elegance is choosing the VanDutch 55. Its luxurious design with simple lines has been conceived in detail to favor comfort and practicality.");

    $(".vanDutch-text p").eq(0).text("The VanDutch 55 provides accommodation for up to eight guests, making it a fantastic boat for longer-range coastal cruising.");
    $(".vanDutch-text p").eq(1).text("Its distinctive profile is the unmistakable vertical bow and minimalist deck lines, with enhanced volume and interior capacity from its 16.48 meters (55 feet) in length.");
    $(".vanDutch-text p").eq(2).text("Frank Mulder's naval architecture ensures that the VanDutch 55 claims its claim to be one of the best performing and cutting edge motor boats in its size.");
    $(".vanDutch-text p").eq(3).text("On the foredeck there is a large sunbathing and relaxation area.");
    $(".vanDutch-text p").eq(4).text("Below deck the space is organized to satisfy at first glance, no one can escape the charm of its aesthetics. Every corner has been designed to make the stay on board pleasant, but above all functional, the spaces couldn’t be better exploited.");

    $(".vanDutch-text p").eq(5).text("The perfect flat bow area space is ideal for guests who wish to bask in the gorgeous Mediterranean sunshine while at anchor or dive into the glistening light and dark blue waters for a refreshing dip. The on-board music system allows guests to play the music they want, contributing to a relaxing vibe or upbeat tropical summer atmosphere!");
    $(".vanDutch-text p").eq(6).text("Guests can escape the most intimate hours of sunshine thanks to the large Bimini-top, this way you can relax in the shade while still marveling at the natural beauty of the rugged Sardinian coastline. Should you wish to escape the sun completely, guests can retreat to the cool air-conditioned suite.");
    $(".vanDutch-text p").eq(7).text("Below deck, the VanDutch 55 offers ample living space, with two gorgeous cabins making her ideal for weekend trips. Designed with the concept of chic luxury that defines the silhouette of this elegant motorboat, the interior is as aesthetically pleasing as the exterior");
    $(".vanDutch-text p").eq(8).text("Through masterful design, she can reach high speeds while offering guests a delightfully quiet and dry ride, a distinct lack of vibrations means that comfort will never be compromised. It is clear that VanDutch have carefully designed the 55” with comfort and luxury in mind.");
    $(".vanDutch-text p").eq(9).text("A 16.49m motor boat is the perfect size, allowing you access to hidden coves with tumbling green cliffs or golden sanded beaches while meeting size restrictions and being able to dock at prime harbor spots like Porto Cervo or Poltu Quatu. Guests never have to go far by foot to explore the (is)land’s attractions or it’s authentic restaurants.");
    $(".vanDutch-text p").eq(10).text("With a cruising speed of 25-30 knots, the VanDutch 55 effortlessly slices through the water, even reaching St Tropez or Monaco. Or travelling from Porto Rotondo to Maddalena/ Tavolara in less then an hour. Thanks to this magnificent display of power and speed, guests have the amazing opportunity to explore an array of destinations,");

    $(".vanDutch-specifications h3").text("VanDutch Specifications");

    $(".vanDutch-specification-items ul li ").eq(0).text("Length Over All: 16.48 m / 55 ft");
    $(".vanDutch-specification-items ul li ").eq(0).text("Length Hull: 15.55 m / 52 ft");
    $(".vanDutch-specification-items ul li ").eq(0).text("Beam: 4.50 m / 14.76 ft");
    $(".vanDutch-specification-items ul li ").eq(0).text("Draft: 1.15 m / 3.77 ft");
    $(".vanDutch-specification-items ul li ").eq(0).text("Displacement: 22 tons / 44.000 p");
    $(".vanDutch-specification-items ul li ").eq(0).text("Fuel Capacity: 2500 l / 660.5 gal");
    $(".vanDutch-specification-items ul li ").eq(0).text("Water Capacity: 600 l / 158.5 gal");
    $(".vanDutch-specification-items ul li ").eq(0).text("Max Speed: 37 Knots");
    $(".vanDutch-specification-items ul li ").eq(0).text("Hull and deck in composite material using vacuum injection techniques");
    $(".vanDutch-specification-items ul li ").eq(0).text("Fold-down cleats (8)");
    $(".vanDutch-specification-items ul li ").eq(0).text("Fenders and shorelines housed in portside box");
    $(".vanDutch-specification-items ul li ").eq(0).text("Life raft and lifejackets storage");
    $(".vanDutch-specification-items ul li ").eq(0).text("Anchor with hydraulic pivoting arm");
    $(".vanDutch-specification-items ul li ").eq(0).text("Anchor chain (50 m / 164 ft)");
    $(".vanDutch-specification-items ul li ").eq(0).text("Fresh water fill cap on portside");
    $(".vanDutch-specification-items ul li ").eq(0).text("Fuel fill cap on portside");
    $(".vanDutch-specification-items ul li ").eq(0).text("Deck self-draining system");
    $(".vanDutch-specification-items ul li ").eq(0).text("Cockpit handles");
    $(".vanDutch-specification-items ul li ").eq(0).text("Deck with Esthec finishing");
    $(".vanDutch-specification-items ul li ").eq(0).text("Pop-up navigation lights");
    $(".vanDutch-specification-items ul li ").eq(0).text("LED floor lighting");
    $(".vanDutch-specification-items ul li ").eq(0).text("Seating and upholstery");
    $(".vanDutch-specification-items ul li ").eq(0).text("Seating of helm and leisure area in Silvertex with quick foam");
    $(".vanDutch-specification-items ul li ").eq(0).text("Electric high/low seats in port and starboard cockpit seats");
    $(".vanDutch-specification-items ul li ").eq(0).text("Aft sun bed cushions in Silvertex with quick foam");

    $(".vanDutch-specification-items ul li ").eq(0).text("Electronics and instruments");
    $(".vanDutch-specification-items ul li ").eq(0).text("Simrad navigation and engines control screen");
    $(".vanDutch-specification-items ul li ").eq(0).text("Electronic CAN Bus throttle controls");
    $(".vanDutch-specification-items ul li ").eq(0).text("Engines oil alarm");
    $(".vanDutch-specification-items ul li ").eq(0).text("Water temperature alarm");
    $(".vanDutch-specification-items ul li ").eq(0).text("Electric steering system (Steer by Wire)");
    $(".vanDutch-specification-items ul li ").eq(0).text("Raymarine fixed and handheld VHF radio");
    $(".vanDutch-specification-items ul li ").eq(0).text("Engine room and fuel system");
    $(".vanDutch-specification-items ul li ").eq(0).text("Diesel package: 2 X Caterpillar 950 hp each");
    $(".vanDutch-specification-items ul li ").eq(0).text("Propulsion: fixed shaft");
    $(".vanDutch-specification-items ul li ").eq(0).text("Thermo-acoustic insulation");
    $(".vanDutch-specification-items ul li ").eq(0).text("Air extraction fan");
    $(".vanDutch-specification-items ul li ").eq(0).text("Fuel tank 2500 ltr. / 660.5 gal.");
    $(".vanDutch-specification-items ul li ").eq(0).text("Automatic fire extinguishing system");
    $(".vanDutch-specification-items ul li ").eq(0).text("Hydraulic engine room hatch");
    $(".vanDutch-specification-items ul li ").eq(0).text("Generator Onan 9Kw");
    $(".vanDutch-specification-items ul li ").eq(0).text("Electrical system");
    $(".vanDutch-specification-items ul li ").eq(0).text("“One Touch” Electrical control panel");
    $(".vanDutch-specification-items ul li ").eq(0).text("Service batteries 6 x 24 V 170 A/h, maintenance free");
    $(".vanDutch-specification-items ul li ").eq(0).text("Engine start batteries 2 x 24 V 170 A/h, maintenance free");
    $(".vanDutch-specification-items ul li ").eq(0).text("Mastervolt inverters");
    $(".vanDutch-specification-items ul li ").eq(0).text("Battery charger 20 A 220 V (*110 US Model)");
    $(".vanDutch-specification-items ul li ").eq(0).text("Shore power connection with cable");
    $(".vanDutch-specification-items ul li ").eq(0).text("Head lighting");
    $(".vanDutch-specification-items ul li ").eq(0).text("Navigation lights");
    $(".vanDutch-specification-items ul li ").eq(0).text("Built-in Horn");
    $(".vanDutch-specification-items ul li ").eq(0).text("Battery switches");
    $(".vanDutch-specification-items ul li ").eq(0).text("Battery paralleling for engine starting");
    $(".vanDutch-specification-items ul li ").eq(0).text("Cathode protection by zinc anodes and ground plate");
    $(".vanDutch-specification-items ul li ").eq(0).text("Electric flush WC");
    $(".vanDutch-specification-items ul li ").eq(0).text("Easy Maneuvering System, consisting of bow and stern thrusters, including joystick control");
    $(".vanDutch-specification-items ul li ").eq(0).text("Cabin area");
    $(".vanDutch-specification-items ul li ").eq(0).text("Queen Size V-Berth");
    $(".vanDutch-specification-items ul li ").eq(0).text("Ceiling lights with dimmer");
    $(".vanDutch-specification-items ul li ").eq(0).text("Closets Corian finishing");
    $(".vanDutch-specification-items ul li ").eq(0).text("Floor Esthec finishing");
    $(".vanDutch-specification-items ul li ").eq(0).text("Air conditioning annex heating");
    $(".vanDutch-specification-items ul li ").eq(0).text("Saloon with sofa, easy to convert into double bed including tray and storage space");
    $(".vanDutch-specification-items ul li ").eq(0).text("Master cabin with double bed");
    $(".vanDutch-specification-items ul li ").eq(0).text("Guest cabin with 2 single beds");
    $(".vanDutch-specification-items ul li ").eq(0).text("Cupboards as storage areas");
    $(".vanDutch-specification-items ul li ").eq(0).text("Three ceiling hatches with Air Sky light blinding and / or mosquito protection");
    $(".vanDutch-specification-items ul li ").eq(0).text("220 / 110 volt plugs");
    $(".vanDutch-specification-items ul li ").eq(0).text("Pantry area");
    $(".vanDutch-specification-items ul li ").eq(0).text("Full size sink");
    $(".vanDutch-specification-items ul li ").eq(0).text("Microwave Oven");
    $(".vanDutch-specification-items ul li ").eq(0).text("Induction cooker");
    $(".vanDutch-specification-items ul li ").eq(0).text("Twin refrigerators");
    $(".vanDutch-specification-items ul li ").eq(0).text("Bathroom area");
    $(".vanDutch-specification-items ul li ").eq(0).text("Electric flush head");
    $(".vanDutch-specification-items ul li ").eq(0).text("Sink/Wash basin with hot/ cold water");
    $(".vanDutch-specification-items ul li ").eq(0).text("Shower");
    $(".vanDutch-specification-items ul li ").eq(0).text("Toilet accessories");
    $(".vanDutch-specification-items ul li ").eq(0).text("Mirror with light");
    $(".vanDutch-specification-items ul li ").eq(0).text("Storage cupboards");
    $(".vanDutch-specification-items ul li ").eq(0).text("Black water / fresh water & bilge system");
    $(".vanDutch-specification-items ul li ").eq(0).text("Tank 36 I / 9.5 gal");
    $(".vanDutch-specification-items ul li ").eq(0).text("Macerator for discharge to sea");
    $(".vanDutch-specification-items ul li ").eq(0).text("Shore pump connection");
    $(".vanDutch-specification-items ul li ").eq(0).text("Fresh water pump");
    $(".vanDutch-specification-items ul li ").eq(0).text("Fresh water tank 600 l / 158.5 gal");
    $(".vanDutch-specification-items ul li ").eq(0).text("2 x Subwoofer");
    $(".vanDutch-specification-items ul li ").eq(0).text("Premium High-end Fusion music system");
    $(".vanDutch-specification-items ul li ").eq(0).text("Full color LED underwater lights");

    // ===========Yacht Service page ============//
    // Yacht Service content part
    $(".yacht-service-banner h3").text("Yacht Service/ Supply");

    $(".service-content p").eq(0).text(" We support yachts, during their cruises in the Mediterranean Sea and during winter time in the shipyard.");
    $(".service-content p").eq(1).text(" Look at us as your onshore crew for delivering the fastest and best food, provisions and even parts.");
    $(".service-content p").eq(2).text(" Our staff will ensure that your onboard (working) life runs smoothly and comfortably.");
    $(".service-content p").eq(3).text(" We know the best places to buy top quality products, and get them to you fast, even in the middle of the season.");
    $(".service-content p").eq(4).text(" Captain’s, ETOs and engineers across the Mediterranean Sea know they can rely on Marefun to find the right parts fast at the correct specifications. In most cases we can also provide you with the specific knowledge or specialist you need.");
    $(".service-content p").eq(5).text(" Our goal is to satisfy and fulfill your every wish, we transform the impossible into possible and without making you wait. The right contacts make all the difference, and we will be your favorite one to enjoy every second of your holiday.");

    $(".offer-text h5").text(" What we offer:");

    $(".offer-text ul li").eq(0).text(" - Rental Cars;");
    $(".offer-text ul li").eq(1).text(" - Party planning;");
    $(".offer-text ul li").eq(2).text(" - Tender service;");
    $(".offer-text ul li").eq(3).text(" - Crew documentation;");
    $(".offer-text ul li").eq(4).text(" - Reservation of refueling;");
    $(".offer-text ul li").eq(5).text(" - Full Technical assistance;");
    $(".offer-text ul li").eq(6).text(" - Restaurants, hotels and clubs;");
    $(".offer-text ul li").eq(7).text(" - Mooring reservation throughout the Mediterranean;");
    $(".offer-text ul li").eq(8).text(" - Delivery drinks, foods, only best (local) quality;");

    // ===========about page ============//
    // about banner part
    $(".about-banner h3").text("About us");

    // staff  part
    $(".header-text p").eq(0).text(" We are MareFun since 2000 and proud of it!");
    $(".header-text p").eq(1).text(" Our greatest resource is without a doubt our staff; all professionals in their field; multi lingual (Italian, English and French).");
    $(".header-text p").eq(2).text(" There are over 12 motivated staff; Clive our captain of the Jaquar92, Tom and his brother are captains of all our fleet, Martina who takes care of booking, front and back office and of course last but not least: Marco, the initiator, director and founder of Marefun.");

    // ===========contact page ============//
    // contact banner part
    $(".contact-banner h3").text("Contact us");

    $(".contact_taxt h5").text(" Drop us a line");
    $(".contact_taxt p em").eq(0).text(" Without contact, nothing works. So, if you want more information about our company, prices, availability or really anything….");
    $(".contact_taxt p em").eq(1).text(" Drop us your information and we will contact you promptly.");

    // footer part //
    $(".footer-text small span").text("Copyright");
    $(".footer-text small label a").text("Terms & Security");

    // termsandsecurity part //
    $(".termsandsecurity-header h3").text("Terms & Security");

    $(".termsandsecurity-text p").eq(0).text(" Read these terms and conditions (hereinafter: 'Terms') carefully before using the Marefun Srl. website (www.Marefun.com or affiliated sites). By using the Marefun Srl. website you indicate that you have taken note of and agree to the Terms. If you do not agree with one or more Terms and/or Conditions, you must not use the Marefun Srl. website. This website has been compiled by the private company Marefun Srl. with its registered office in Golfo Aranci.");

    $(".termsandsecurity-text h3").eq(0).text("Permitted use");

    $(".termsandsecurity-text p")
      .eq(1)
      .text(
        " As a user of the Marefun Srl. website, you must behave in all respects and behave as you would expect from a responsible and careful internet user. Among other things, you are not permitted to use the (content of the) website for acts and / or behaviors that violate the law, public order or morality. More specifically, the following acts and / or behaviors are not permitted: (a) infringing or otherwise acting in violation of intellectual property rights of www.Marefun.com or affiliated sites and / or third parties; (b) making damaging, unlawful or misleading communications; (c) distributing legally prohibited material; (d) avoiding or removing the security of (parts of) the website. You are only permitted to download one copy of the material made available on the website for your own, non-commercial use. You are not permitted, without prior written permission from Marefun Srl., to otherwise copy, modify, distribute, distribute, reverse engineer, decompile or otherwise use and / or use the material made available. You are only permitted to create a hyperlink if Marefun Srl. Wonen BV has prior to this has given her written permission. Requests for applying a hyperlink can be directed to info@Marefun.com"
      );
    $(".termsandsecurity-text p").eq(2).text(" In the event that you do not adhere to the aforementioned permitted use, Marefun Srl. reserves the right to recover the direct and indirect damage resulting from this non-permitted use from you.");

    $(".termsandsecurity-text h3").eq(1).text("Intellectual property");
    $(".termsandsecurity-text p")
      .eq(3)
      .text(" All intellectual property rights with regard to the website rest exclusively with Marefun Srl. and / or its suppliers. Intellectual property rights include all patent rights, trademark rights, trade name rights, database rights, design rights, domain names and other intellectual property rights in Italy or elsewhere that are related to the website and Marefun in general, including also know-how and trade. You are not permitted to change or remove the markings or recognition marks on the material, and / or any indications regarding copyright, trade names or other intellectual property rights, nor to change the material or any parts thereof or after nor to cause any damage to or unjustified benefit from the reputation of the intellectual property rights of Marefun. In the event of a violation of the intellectual property rights of Marefun Srl. and / or its suppliers, Marefun Srl. reserves the right to recover the damage it has suffered as a result.");

    $(".termsandsecurity-text h3").eq(2).text("Liability and indemnity");
    $(".termsandsecurity-text p").eq(4).text(" Marefun is not liable for the content or the accuracy of the data of the website, nor of websites that are connected in any way with the website of Marefun Srl. are connected, for example by means of hyper (text) link (s) or meta tag (s). Marefun Srl. is also not liable for damage, arising from or related to the use, or the impossibility thereof, of material that is available on the website, or that is obtained via cookies.");
    $(".termsandsecurity-text p").eq(5).text(" Marefun Srl. is not liable for (the content of the) services and / or information from third parties, which are in any way via the Marefun Srl. website are offered.");
    $(".termsandsecurity-text p").eq(6).text(" Marefun Srl. does not guarantee that the information and material offered on the website is up to date, complete and / or accurate. Marefun Srl. Nor does it guarantee that…");
  });
});

//italian
$(function () {
  $(".it").click(function () {
    //navbar part
    $(".nav-link").eq(0).text("HOME");
    $(".nav-link").eq(1).text("ORMEGGIO");
    $(".nav-link").eq(2).text("CHARTER");
    $(".nav-link").eq(3).text("SERVIZI/FORNITURE YACHT");
    $(".nav-link").eq(4).text("CHI SIAMO");
    $(".nav-link").eq(5).text("CONTATTACI");
    $(".language-selected").text("Italiano");
    $(".language-selected").removeClass("change-en");
    $(".language-selected").addClass("change-it");

    //banner part
    $(".home-banner h3").text("ESPLORA LA NOSTRA INCREDIBILE ISOLA");
    $(".home-banner p").text("Per l’assistenza tecnica , le forniture per gli Yacht e per       il Charter, siamo senza paragoni. Mettici alla prova, ci adorerai! Lavoriamo per il tuo sorriso!");
    $(".home-banner .btn").text("Leggi di più");

    //feature part
    $(".feature-item h5").eq(0).text("Servizi in Sardegna, ma non solo");
    $(".feature-item p").eq(0).text("Il nostro servizio non si ferma al nostro porto. Possiamo e ti aiuteremo in tutta la Sardegna, in tutta Italia e nel sud della Francia. È bello conoscere una faccia amica per avere i giusti consigli.");

    $(".feature-item h5").eq(1).text("Guida al Charter");
    $(".feature-item p").eq(1).text("Lascia che ti aiutiamo a trovare esattamente la barca Charter giusta per te! Se non possiamo  aiutarti noi,  nessuno può farlo!");

    $(".feature-item h5").eq(2).text("Lo yachting è diventato facile");
    $(".feature-item p").eq(2).text("La stagione in Sardegna è fantastica, ma breve, goditi ogni giorno al massimo. Ci prendiamo cura di tutte le tue esigenze di Yachting.");

    // package part
    $(".package-header h4").text("YACHT");
    $(".package-header h3").text("Scegli la tua imbarcazione preferita");

    $(".details-text h4").eq(0).text("Lunghezza");
    $(".details-text h4").eq(1).text("Prezzo");
    $(".details-text h4").eq(2).text("Cantiere navale");
    $(".details-text h4").eq(3).text("Costruzione/Riparazione");

    $(".details-text2 h4").eq(0).text("Lunghezza");
    $(".details-text2 h4").eq(1).text("Prezzo");
    $(".details-text2 h4").eq(2).text("Cantiere navale");
    $(".details-text2 h4").eq(3).text("Costruzione/Riparazione");

    $(".details-text3 h4").eq(0).text("Lunghezza");
    $(".details-text3 h4").eq(1).text("Prezzo");
    $(".details-text3 h4").eq(2).text("Cantiere navale");
    $(".details-text3 h4").eq(3).text("Costruzione/Riparazione");

    $(".more-btn a .btn").text("Più dettagli");

    // agant-registation part
    $(".registation-text h3").text("Ulteriori informazioni? Vuoi lavorare con noi?");
    $(".registation-text p").text("Entra a far parte della nostra azienda come nuovo membro del team o come Cliente");
    $(".registion-btn a .btn").text("CONTATTI");

    // map part
    $(".location-match h3").text("COORDINATE");

    // ===========mooring page ============//

    // mooring banner
    $(".mooring-banner h3").text("Ormeggio per il tuo yachtt");
    // mooring main part
    $(".mooring-content p").eq(0).text("Il Marina MareFun situato sul nuovo e accogliente lungomare di Golfo Aranci offre 50 posti barca per barche fino a 100 piedi, barche a vela e motoscafi. La bozza non è un problema per noi. L'acqua cristallina del nostro porto ti lascerà senza parole, e in pochi passi troverai i migliori ristoranti locali, prova il pescato del giorno! Ci sono ampi locali dove prendere l'aperitivo al tramonto e negozi dove acquistare tutti i prodotti tipici sardi e tanto altro.");
    $(".mooring-content p").eq(1).text("Golfo Aranci è l'angolo di paradiso, tappa imprescindibile per chi visita la Sardegna, i suoi costi ti rimarranno nel cuore.");
    $(".contact_taxt a .btn").text("Contact");

    $(".mooring-content p").eq(2).text("Il nostro staff MareFun ti accoglierà e ti aiuterà a vivere a pieno la tua esperienza in Sardegna, offriamo i seguenti servizi:");

    $(".mooring-content ul li").eq(0).text("- Ghiaccio");
    $(".mooring-content ul li").eq(1).text("- Wifi");
    $(".mooring-content ul li").eq(2).text("- Acqua");
    $(".mooring-content ul li").eq(3).text("- Servizio biancheria");
    $(".mooring-content ul li").eq(4).text("- Trasferimento barche");
    $(".mooring-content ul li").eq(5).text("- Ingresso con cancello");
    $(".mooring-content ul li").eq(6).text("- 220 / 380 Volt");
    $(".mooring-content ul li").eq(7).text("- Accoglienza Marina");
    $(".mooring-content ul li").eq(8).text("- Assistenza all'ormeggio");
    $(".mooring-content ul li").eq(9).text("- Assistenza tecnica");
    $(".mooring-content ul li").eq(10).text("- Servizio di ristorazione a bordo");
    $(".mooring-content ul li").eq(11).text("- Servizio marinaio specializzato");
    $(".mooring-content ul li").eq(12).text("- Assistenza e rimessaggio barche");
    $(".mooring-content ul li").eq(13).text("- Prenotazioni di ristoranti, hotel e porti per i nostri clienti");
    $(".mooring-content ul li").eq(14).text("- Assistenza VHF, canale 9, lingua italiana, inglese e francese");

    $(".price_btn .btn").text("Listino prezzi");

    // ===========Yacht charter page ============//
    $(".charter-banner h3").text("Noleggio yacht per te");

    // charter about
    $(".charter-about-text p").eq(0).text(" MareFun dispone di una flotta completa di barche charter, siamo in grado di soddisfare tutti i gusti e le esigenze.");
    $(".charter-about-text p").eq(1).text(" Il nostro equipaggio charter è composto da professionisti multilingue e amichevoli che capiscono come rendere grande la tua esperienza di noleggio. Vi accompagneranno nel vostro viaggio alla scoperta della Sardegna, svelandovi tutti i suoi luoghi nascosti e paradisiaci. Portarti un tavolo in un ristorante popolare, un posto sulla spiaggia o un posto letto per la notte.");
    $(".charter-about-text p").eq(2).text(" La nostra flotta è mantenuta meticolosa e tutte le navi si trovano sulla costa nord-occidentale della Sardegna, in attesa di scoprire la zona più bella del mondo.");

    $(".charter-about-text ul li").eq(0).text(" ⦁ BERNICO 45 LEVERAGE.");
    $(".charter-about-text ul li").eq(1).text(" ⦁ RIBBON 45XC.");
    $(".charter-about-text ul li").eq(2).text(" ⦁ SACS STRIDER 15.");
    $(".charter-about-text ul li").eq(3).text(" ⦁ JAGUAR 92.");
    $(".charter-about-text ul li").eq(4).text(" ⦁ VANDUTCH 55.");

    $(".booking-btn a .btn").eq(0).text("Prenota ora");
    $(".booking-btn .btn").eq(1).text("Listino prezzi");

    // =======BERNICO Leverage 45=====//

    $(".bernico-yacht h3").text("BERNICO Leverage 45");

    $(".bernico-text p").eq(0).text("Fast and Furious! Questo Bernico 45 LEVERAGE è un motoscafo costruito su misura con scafo a gradini e due motori da corsa Mercury 1100Hp. È realizzato con lo stesso stampo del due volte campione del mondo nella sua classe.");
    $(".bernico-text p").eq(1).text("Sebbene sia fatta per la velocità (in grado di fare velocità superiori a 220 Km/H.) in questo layout è tutta una questione di lusso. Con il motore messo a punto e diversi propulsori è in grado di fare 90 nodi ma senza sentirsi a disagio.");
    $(".bernico-text p").eq(2).text("Questa è la nave perfetta per quelle mattine o serate speciali in cui il mare sembra oleoso; senza onde... anche se si esibisce alla grande nelle onde.");
    $(".bernico-text p").eq(3).text("Questa fantastica macchina è stata completamente realizzata su misura da Bernico nel 2021/22 e consegnata nel 2022. Per gli appassionati di velocità o per chiunque voglia solo viaggiare velocemente da A a B è una fantastica. Non per i deboli di cuore. E tu sei abbastanza coraggioso?");

    $(".bernico-specifications h3").text("BERNICO Leverage 45 Specifiche");

    $(".bernico-specification-items ul li").eq(0).text("Lunghezza fuori tutto: 13,48m");
    $(".bernico-specification-items ul li").eq(1).text("Larghezza: 2,80 m");
    $(".bernico-specification-items ul li").eq(2).text("Pescaggio: 0,75 m ");
    $(".bernico-specification-items ul li").eq(3).text("Capacità carburante: 1200 l");
    $(".bernico-specification-items ul li").eq(4).text("Capacità acqua: 70 l");
    $(".bernico-specification-items ul li").eq(5).text("Velocità massima: 95 Nodi");
    $(".bernico-specification-items ul li").eq(6).text("Scafo e coperta in materiale composito con tecniche di iniezione sottovuoto");
    $(".bernico-specification-items ul li").eq(7).text("Tacchetti pieghevoli (8)");
    $(".bernico-specification-items ul li").eq(8).text("Zattera di salvataggio e giubbotti di salvataggio");
    $(".bernico-specification-items ul li").eq(9).text("Maniglie del pozzetto");
    $(".bernico-specification-items ul li").eq(10).text("Sedili da corsa speciali");
    $(".bernico-specification-items ul li").eq(11).text("Deck con  finitura Esthec");
    $(".bernico-specification-items ul li").eq(12).text("Luci di navigazione");
    $(".bernico-specification-items ul li").eq(13).text("Illuminazione da terra a LED");
    $(".bernico-specification-items ul li").eq(14).text("Sedute e tappezzeria personalizzati");
    $(".bernico-specification-items ul li").eq(15).text("2 sedili telescopici + 4 sedili normali");

    $(".bernico-specification-items ul li").eq(16).text("Elettronica e strumenti");
    $(".bernico-specification-items ul li").eq(17).text("Schermata di navigazione e controllo motori Garmin");
    $(".bernico-specification-items ul li").eq(18).text("Comandi elettronici dell'acceleratore CAN Bus");
    $(".bernico-specification-items ul li").eq(19).text("Allarme olio motore");
    $(".bernico-specification-items ul li").eq(20).text("Allarme temperatura acqua");
    $(".bernico-specification-items ul li").eq(21).text("Radio VHF fissa e portatile Raymarine");
    $(".bernico-specification-items ul li").eq(22).text("Isolamento termo-acustico");
    $(".bernico-specification-items ul li").eq(23).text("2 x Mercury Racing 1100 Hp. motori entrobordo");
    $(".bernico-specification-items ul li").eq(24).text("2 x Mercury Racing Z-Drive");
    $(".bernico-specification-items ul li").eq(25).text("2 propulsori da corsa a 5 razze");
    $(".bernico-specification-items ul li").eq(26).text("Batterie di servizio 3 x 12 V 170 A/h, esenti da manutenzione");
    $(".bernico-specification-items ul li").eq(27).text("Batterie avviamento motore 1 x 12 V 170 A/h, esenti da manutenzione");
    $(".bernico-specification-items ul li").eq(28).text("Inverter Mastervolt");
    $(".bernico-specification-items ul li").eq(29).text("Aria condizionata (a terra)");
    $(".bernico-specification-items ul li").eq(30).text("Caricabatterie 20 A 220 V");
    $(".bernico-specification-items ul li").eq(31).text("Collegamento di alimentazione a terra con cavo");
    $(".bernico-specification-items ul li").eq(32).text("Illuminazione frontale");
    $(".bernico-specification-items ul li").eq(33).text("Luci di navigazione");
    $(".bernico-specification-items ul li").eq(34).text("Corno");
    $(".bernico-specification-items ul li").eq(35).text("Interruttori batteria");
    $(".bernico-specification-items ul li").eq(36).text("Batteria in parallelo per l'avviamento del motore");
    $(".bernico-specification-items ul li").eq(37).text("Protezione catodica mediante anodi di zinco e piastra rettificata");
    $(".bernico-specification-items ul li").eq(38).text("WC elettrico a filo");
    $(".bernico-specification-items ul li").eq(39).text("Spine da 220 / 110 volt ");
    $(".bernico-specification-items ul li").eq(40).text("Zona dispensa con frigorifero");
    $(".bernico-specification-items ul li").eq(41).text("Lavello/Lavabo con acqua calda/fredda");
    $(".bernico-specification-items ul li").eq(42).text("Doccia esterna acqua calda/fredda");
    $(".bernico-specification-items ul li").eq(43).text("Accessori per wc");
    $(".bernico-specification-items ul li").eq(44).text("Armadi di stoccaggio");
    $(".bernico-specification-items ul li").eq(45).text("Acqua nera / acqua dolce e sistema di sentina");
    $(".bernico-specification-items ul li").eq(46).text("Serbatoio 36 I / 9.5 gal");
    $(".bernico-specification-items ul li").eq(47).text("Maceratore per scarico in mare");
    $(".bernico-specification-items ul li").eq(48).text("Collegamento pompa shore");
    $(".bernico-specification-items ul li").eq(49).text("Pompa per acqua dolce");
    $(".bernico-specification-items ul li").eq(50).text("Serbatoio acqua dolce 70l ");
    $(".bernico-specification-items ul li").eq(51).text("4 Pompe di sentina automatiche");
    $(".bernico-specification-items ul li").eq(52).text("Una pompa di sentina manuale");
    $(".bernico-specification-items ul li").eq(53).text("Equipaggiamento di sicurezza");
    $(".bernico-specification-items ul li").eq(54).text("4 Estintori portatili");
    $(".bernico-specification-items ul li").eq(55).text("12 giubbotti di salvataggio automatici");
    $(".bernico-specification-items ul li").eq(56).text("Misto");
    $(".bernico-specification-items ul li").eq(57).text("Scaletta da bagno");
    $(".bernico-specification-items ul li").eq(58).text("Sistema musicale Fusion di fascia alta premium");
    $(".bernico-specification-items ul li").eq(59).text("4  amplificatore da 2500 watt");
    $(".bernico-specification-items ul li").eq(60).text("2 x Subwoofer ");

    //============= The Ribbon 45XC ===========//

    $(".ribbon-header h3").text("Il Ribbon 45XC");

    $(".ribbon-text p").eq(0).text("Il Ribbon 45XC  è un tender veloce versatile di lusso che può essere utilizzato anche per divertirsi in acqua. Il suo design lussuoso con le tipiche linee semplici olandesi è stato concepito nei minimi dettagli per favorire comfort e praticità. Questa nave è veloce ma estremamente confortevole; adatto a molteplici scopi come il trasporto, la pesca, le immersioni o le esperienze di crociera di un giorno. Utilizza lo stesso acclamato scafo del Ribbon R45.");
    $(".ribbon-text p").eq(1).text("Il Ribbon 45 XC offre alloggio per un massimo di dodici ospiti, rendendolo una barca fantastica per crociere costiere veloci a corto e medio raggio.");
    $(".ribbon-text p").eq(2).text("Il suo profilo distintivo è l'inconfondibile prua verticale e le linee minimaliste. A bordo troverete ampi posti a sedere e un solarium nella parte posteriore dove potrete gustare il vostro drink al sole o sotto il tendalino. Grazie allo stabilizzatore a bordo, anche all'ancora è una barca molto confortevole, questa è una caratteristica davvero unica per le sue dimensioni.");
    $(".ribbon-text p").eq(3).text("Anche utilizzare questa nave di notte dopo una fantastica serata in un club o in un ristorante non è un problema, grazie al suo sofisticato radar integrato, sonar e sistema di visione notturna. Non importa dove tu vada con questa sorprendente nave, sei sicuro che attirerai l'attenzione.");
    $(".ribbon-text p").eq(4).text("La sua potenza e velocità ti permettono di raggiungere rapidamente la tua destinazione, grazie alla sua stabilità la velocità non è un problema, non ci sono molte navi là fuori che offrono un giro migliore e più asciutto!");

    $(".ribbon-specifications h3").text("Ribbon 45XC Specifiche");

    $(".ribbon-specification-items ul li").eq(0).text("Lunghezza fuori tutto: 13,48m / 45 ft ");
    $(".ribbon-specification-items ul li").eq(1).text("Lunghezza Scafo: 15.55 m / 52 ft ");
    $(".ribbon-specification-items ul li").eq(2).text("	Larghezza: 3,92 m / 12,95 ft ");
    $(".ribbon-specification-items ul li").eq(3).text("Pescaggio: 1.05 m / 3.15 ft ");
    $(".ribbon-specification-items ul li").eq(4).text("Capacità carburante: 1000 l ");
    $(".ribbon-specification-items ul li").eq(5).text("Capacità acqua: 70 l ");
    $(".ribbon-specification-items ul li").eq(6).text("Velocità massima: 45 Nodi ");
    $(".ribbon-specification-items ul li").eq(7).text("Velocità di crociera: 25-30 Nodi ");
    $(".ribbon-specification-items ul li").eq(8).text("Scafo e coperta in materiale composito con tecniche di iniezione sottovuoto ");
    $(".ribbon-specification-items ul li").eq(9).text("Tacchetti pieghevoli (8) ");
    $(".ribbon-specification-items ul li").eq(10).text("Zattera di salvataggio e giubbotti di salvataggio ");
    $(".ribbon-specification-items ul li").eq(11).text("Ancora con braccio girevole idraulico automatico ");
    $(".ribbon-specification-items ul li").eq(12).text("Catena di ancoraggio (50 m / 164 ft) ");
    $(".ribbon-specification-items ul li").eq(13).text("Tappo di riempimento dell'acqua dolce sul lato del porto ");
    $(".ribbon-specification-items ul li").eq(14).text("Sistema autodrenante del ponte ");
    $(".ribbon-specification-items ul li").eq(15).text("SubwoDeck self-draining systemofer ");
    $(".ribbon-specification-items ul li").eq(16).text("Maniglie del pozzetto ");
    $(".ribbon-specification-items ul li").eq(17).text("Deck con finitura Esthec ");
    $(".ribbon-specification-items ul li").eq(18).text("Luci di navigazione ");
    $(".ribbon-specification-items ul li").eq(19).text("Illuminazione da terra a LED ");
    $(".ribbon-specification-items ul li").eq(20).text("Sedute e tappezzeria ");
    $(".ribbon-specification-items ul li").eq(21).text("7 sedili telescopici + 10 sedili normali ");
    $(".ribbon-specification-items ul li").eq(22).text("Elettronica e strumenti ");
    $(".ribbon-specification-items ul li").eq(23).text("Schermata di navigazione e controllo motori Garmin ");
    $(".ribbon-specification-items ul li").eq(24).text("Comandi elettronici dell'acceleratore CAN Bus ");
    $(".ribbon-specification-items ul li").eq(25).text("Allarme olio motore ");
    $(".ribbon-specification-items ul li").eq(26).text("Allarme temperatura acqua ");
    $(".ribbon-specification-items ul li").eq(27).text("Sistema di sterzo elettrico (Steer by Wire)");
    $(".ribbon-specification-items ul li").eq(28).text("Joystick ");
    $(".ribbon-specification-items ul li").eq(29).text("Radio VHF fissa e portatile Raymarine ");
    $(".ribbon-specification-items ul li").eq(30).text("Garmin Radar ");
    $(".ribbon-specification-items ul li").eq(31).text("Visione notturna FLIR ");
    $(".ribbon-specification-items ul li").eq(32).text("Isolamento termo-acustico ");
    $(".ribbon-specification-items ul li").eq(33).text("Stabalizzatore giroscopico ");
    $(".ribbon-specification-items ul li").eq(34).text("3 x motori fuoribordo Mercury Verado Racing ");
    $(".ribbon-specification-items ul li").eq(35).text("Batterie di servizio 3 x 12 V 170 A/h, esenti da manutenzione ");
    $(".ribbon-specification-items ul li").eq(36).text("Inverter Mastervolt ");
    $(".ribbon-specification-items ul li").eq(37).text("Caricabatterie 20 A 220 V ");
    $(".ribbon-specification-items ul li").eq(38).text("Collegamento di alimentazione a terra con cavo ");
    $(".ribbon-specification-items ul li").eq(39).text("Illuminazione frontale ");
    $(".ribbon-specification-items ul li").eq(40).text("Posti a sedere ");
    $(".ribbon-specification-items ul li").eq(41).text("loe ");

    $(".ribbon-specification-items ul li").eq(42).text("Elettronica e strumenti ");
    $(".ribbon-specification-items ul li").eq(43).text("Navigazione Garmin e schermata di controllo motori ");
    $(".ribbon-specification-items ul li").eq(44).text("Comandi elettronici dell'acceleratore CAN Bus ");
    $(".ribbon-specification-items ul li").eq(45).text("Allarme olio motori ");
    $(".ribbon-specification-items ul li").eq(46).text("Water temperature alarm ");
    $(".ribbon-specification-items ul li").eq(47).text("Allarme temperatura acqua ");
    $(".ribbon-specification-items ul li").eq(48).text("Telecomando da gioco ");
    $(".ribbon-specification-items ul li").eq(49).text("Radio VHF fissa e portatile Raymarine ");
    $(".ribbon-specification-items ul li").eq(50).text("Radar Garmin ");
    $(".ribbon-specification-items ul li").eq(51).text("Visione notturna FLIR ");
    $(".ribbon-specification-items ul li").eq(52).text("Isolamento termoacustico ");
    $(".ribbon-specification-items ul li").eq(53).text("Stabilizzatore giroscopico ");
    $(".ribbon-specification-items ul li").eq(54).text("3 motori fuoribordo Mercury Verado Racing ");
    $(".ribbon-specification-items ul li").eq(55).text("Batterie servizi 3 x 12 V 170 A/h, esenti da manutenzione ");
    $(".ribbon-specification-items ul li").eq(56).text("Batterie avviamento motore 1 x 12 V 170 A/h, esenti da manutenzione ");
    $(".ribbon-specification-items ul li").eq(57).text("Inverter Mastervolt ");
    $(".ribbon-specification-items ul li").eq(58).text("Carica batteria 20 A 220 V ");
    $(".ribbon-specification-items ul li").eq(59).text("Collegamento a terra con cavo ");
    $(".ribbon-specification-items ul li").eq(60).text("Illuminazione della testa ");
    $(".ribbon-specification-items ul li").eq(61).text("Luci di navigazione ");
    $(".ribbon-specification-items ul li").eq(62).text("Tromba d'aria ");
    $(".ribbon-specification-items ul li").eq(63).text("Interruttori della batteria ");

    //============= SACS Strider15 ===========//

    $(".sacs-text p").eq(0).text("Assolutamente incredibile! Godetevi la vostra giornata o weekend sull'acqua senza rinunciare a comfort, potenza ed eleganza. Il Sacs Strider 15 non ha rivali. Con il suo design lussuoso e il basso tiraggio questo gommone ti porterà ovunque, velocemente e comodamente.");
    $(".sacs-text p").eq(1).text("Lo Strider 15 offre alloggio per un massimo di dieci ospiti per una crociera di un giorno e 4 ospiti per un soggiorno confortevole, rendendolo una nave fantastica anche per crociere costiere a lungo raggio.");
    $(".sacs-text p").eq(2).text("Il suo profilo distintivo è l'inconfondibile larghezza che crea molto spazio sul ponte");

    $(".sacs-text p").eq(3).text("Secondo Sacs questo Strider 15 deve essere una delle barche a motore più performanti e all'avanguardia nel suo genere.  Siamo d'accordo!");
    $(".sacs-text p").eq(4).text("Sul ponte di prua c'è un'ampia zona prendisole e relax oltre che sul retro dove si può godere il sole della Sardegna con 4, anche 5 persone! Troverete una comoda doccia calda / fredda a prua e una nella zona di poppa.");
    $(".sacs-text p").eq(5).text("Sottocoperta c'è più spazio di quanto ci si aspetterebbe. Grazie al layout dello Strider 15 è incredibilmente ben organizzato per soddisfare al primo sguardo, nessuno può sfuggire al fascino della sua estetica, gli spazi non potrebbero essere sfruttati meglio. Questo yacht offre davvero più spazio di quanto sembri.");
    $(".sacs-text p").eq(6).text("La perfetta zona di poppa piatta e spaziosa è l'ideale per gli ospiti che desiderano crogiolarsi nello splendido sole del Mediterraneo mentre sono all'ancora o tuffarsi nelle scintillanti  acque chiare e blu scuro per un tuffo rinfrescante. Il sofisticato sistema musicale di bordo consente agli ospiti di riprodurre la musica che desiderano, contribuendo a un'atmosfera rilassante o a un'atmosfera estiva tropicale allegra!");
    $(".sacs-text p").eq(7).text("Gli ospiti possono sfuggire alle ore più intime di sole grazie al grande tendalino automatico, in questo modo è possibile rilassarsi all'ombra pur ammirando le bellezze naturali della frastagliata costa sarda. Se desiderate sfuggire completamente al sole, potrete ritirarvi nella fresca suite climatizzata con 2 letti king-size.");
    $(".sacs-text p").eq(8).text("Sottocoperta, la Strider 15 offre un ampio spazio abitativo, rendendola ideale per i viaggi del fine settimana. Progettato con il concetto di lusso chic che definisce la silhouette di questo elegante motoscafo, l'interno è esteticamente gradevole come l'esterno.");
    $(".sacs-text p").eq(9).text("Attraverso un design dello scafo completamente nuovo del 2022, può raggiungere alte velocità offrendo agli ospiti una guida tranquilla e asciutta, una netta mancanza di vibrazioni significa che il comfort non sarà mai compromesso.");
    $(".sacs-text p").eq(10).text("Questo RIB-yacht è semplicemente perfetto, permettendoti di accedere  a qualsiasi porto o spiaggia, calette nascoste con scogliere verdi, inoltre con le sue dimensioni è in grado di attraccare in porti privilegiati come Cale di Volpe, Porto Cervo o Poltu Quatu. Gli ospiti non devono mai andare lontano a piedi per esplorare  le attrazioni della terra o per assaporarne i sapori nei i suoi ristoranti tipici.");
    $(".sacs-text p").eq(11).text(" Con una velocità di crociera di soli 20 nodi, lo Strider 15 taglia senza sforzo l'acqua, raggiungendo anche St. Tropez o Monaco.  Oppure può viaggiare da Porto Rotondo a Maddalena / Tavolara in meno di un'ora.  Grazie a questa magnifica dimostrazione di potenza e velocità, gli ospiti hanno la straordinaria opportunità di esplorare una serie di destinazioni, sfruttando al massimo il charter di lusso.");
    $(".sacs-text p").eq(12).text(" Anche utilizzare questa nave di notte dopo una fantastica serata in un club o in un ristorante non è un problema, grazie al suo  sofisticato radar integrato all'avanguardia, al sonar e al sistema di visione notturna FLIR. Non importa dove tu vada con questo sorprendente mezzo, sei sicuro che attirerai l'attenzione.");

    $(".sacs-specifications h3").text("SACS Strider 15 - Specifiche");

    $(".sacs-specification-items ul li").eq(0).text("Lunghezza totale: 15 m ");
    $(".sacs-specification-items ul li").eq(1).text("Larghezza: 5 m");
    $(".sacs-specification-items ul li").eq(2).text("Pescaggio: 0,75 ");
    $(".sacs-specification-items ul li").eq(3).text("Capacità carburante: 1200 l  ");
    $(".sacs-specification-items ul li").eq(4).text("Capacità acqua: 600 l 225 l ");
    $(".sacs-specification-items ul li").eq(5).text("Velocità massima: 43 Nodi ");
    $(".sacs-specification-items ul li").eq(6).text("Scafo e coperta in materiale composito con tecniche di iniezione sottovuoto / Hypalon ");
    $(".sacs-specification-items ul li").eq(7).text("Tacchetti pieghevoli (4) ");
    $(".sacs-specification-items ul li").eq(8).text("Parabordi e battiflutti alloggiati in scatola di poppa ");
    $(".sacs-specification-items ul li").eq(9).text("Deposito Lifejackets ");
    $(".sacs-specification-items ul li").eq(10).text("Ancoraggio con catena S/S ");
    $(".sacs-specification-items ul li").eq(11).text("Catena S/S di ancoraggio (50 m / 164 ft) ");
    $(".sacs-specification-items ul li").eq(12).text("Tappo di riempimento dell'acqua dolce sul lato del porto ");
    $(".sacs-specification-items ul li").eq(13).text("Tappo di riempimento del carburante sul lato della porta ");
    $(".sacs-specification-items ul li").eq(14).text("Sistema autodrenante del ponte ");
    $(".sacs-specification-items ul li").eq(15).text("Maniglie del pozzetto ");
    $(".sacs-specification-items ul li").eq(16).text("Deck con  finitura Teak");
    $(".sacs-specification-items ul li").eq(17).text("Luci di navigazione ");
    $(".sacs-specification-items ul li").eq(18).text("Illuminazione da terra a LED ");
    $(".sacs-specification-items ul li").eq(19).text("Sedute e tappezzeria ");
    $(".sacs-specification-items ul li").eq(20).text("Posti a sedere del timone e area ricreativa in Silvertex con schiuma rapida");
    $(".sacs-specification-items ul li").eq(21).text("Cuscini per lettino di poppa in Silvertex con schiuma rapida ");
    $(".sacs-specification-items ul li").eq(22).text("Elettronica e strumenti ");
    $(".sacs-specification-items ul li").eq(23).text("2 x 18” Raymarine navigazione e schermo di controllo motori ");
    $(".sacs-specification-items ul li").eq(24).text(" Radar RAYmarine HD ");
    $(".sacs-specification-items ul li").eq(25).text("Water ");

    $(".sacs-specification-items ul li").eq(26).text("FlIR Sistema di visione notturna ");
    $(".sacs-specification-items ul li").eq(27).text("Comandi elettronici dell'acceleratore CAN Bus ");
    $(".sacs-specification-items ul li").eq(28).text("Allarme olio motore ");
    $(".sacs-specification-items ul li").eq(29).text("Allarme temperatura acqua ");
    $(".sacs-specification-items ul li").eq(30).text("Sistema di sterzo elettrico (Steer by Wire) ");
    $(".sacs-specification-items ul li").eq(31).text("Radio VHF portatile Raymarine ");
    $(".sacs-specification-items ul li").eq(32).text("Sala macchine e sistema di alimentazione ");
    $(".sacs-specification-items ul li").eq(33).text("Pacchetto diesel: 2 X Volvo D6 440 CV ciascuno ");
    $(".sacs-specification-items ul li").eq(34).text("Propulsione: Z-Drive con joystick ");
    $(".sacs-specification-items ul li").eq(35).text("Isolamento termo-acustico ");
    $(".sacs-specification-items ul li").eq(36).text("Ventilatore di estrazione dell'aria ");
    $(".sacs-specification-items ul li").eq(37).text("Sistema automatico di estinzione incendi ");
    $(".sacs-specification-items ul li").eq(38).text("Portello idraulico della sala macchine ");
    $(".sacs-specification-items ul li").eq(39).text("Generatore Onan 4Kw ");
    $(".sacs-specification-items ul li").eq(40).text("Impianto elettrico ");
    $(".sacs-specification-items ul li").eq(41).text("Quadro elettrico di controllo “One Touch” ");
    $(".sacs-specification-items ul li").eq(42).text("Batterie di servizio 4 x 24 V 170 A/h, esenti da manutenzione ");
    $(".sacs-specification-items ul li").eq(43).text("Batterie di avviamento motore 2 x 24 V 170 A/h, esenti da manutenzione ");
    $(".sacs-specification-items ul li").eq(44).text("Inverter Mastervolt ");
    $(".sacs-specification-items ul li").eq(45).text("Caricabatterie 20 A 220 V ");
    $(".sacs-specification-items ul li").eq(46).text("Collegamento di alimentazione a terra con cavo ");
    $(".sacs-specification-items ul li").eq(47).text("Illuminazione frontale ");
    $(".sacs-specification-items ul li").eq(48).text("Luci di navigazione ");
    $(".sacs-specification-items ul li").eq(49).text("Clacson incorporato ");
    $(".sacs-specification-items ul li").eq(50).text("Interruttori della batteria ");
    $(".sacs-specification-items ul li").eq(51).text("Parallelo della batteria per l'avviamento del motore ");
    $(".sacs-specification-items ul li").eq(52).text("Protezione MastCathode mediante anodi di zinco e piastra di messa a terra ervolt ");
    $(".sacs-specification-items ul li").eq(53).text("WC elettrico ");
    $(".sacs-specification-items ul li").eq(54).text("Easy Maneuvering System, composto da propulsori di prua e di poppa, incluso il comando a joystick");
    $(".sacs-specification-items ul li").eq(55).text("Zona cabina ");
    $(".sacs-specification-items ul li").eq(56).text("Cuccetta a V Queen Size ");
    $(".sacs-specification-items ul li").eq(57).text("Plafoniere con dimmer ");
    $(".sacs-specification-items ul li").eq(58).text("Closets Corian finishing ");
    $(".sacs-specification-items ul li").eq(59).text("Armadi in finitura Corian ");
    $(".sacs-specification-items ul li").eq(60).text("Aria condizionata annesso riscaldamento ");
    $(".sacs-specification-items ul li").eq(61).text("Salone con divano compreso vassoio e vano portaoggetti ");
    $(".sacs-specification-items ul li").eq(62).text("Cabina armatoriale con letto matrimoniale ");
    $(".sacs-specification-items ul li").eq(63).text("Cabina ospiti con letto matrimoniale ");
    $(".sacs-specification-items ul li").eq(64).text("Armadi come aree di stoccaggio ");
    $(".sacs-specification-items ul li").eq(65).text("Botola a soffitto con oscurante Air Sky e/o zanzariera ");
    $(".sacs-specification-items ul li").eq(66).text("Prese da 220/110 Volt ");
    $(".sacs-specification-items ul li").eq(67).text("Zona dispensa ");
    $(".sacs-specification-items ul li").eq(68).text("Lavello a grandezza naturale ");
    $(".sacs-specification-items ul li").eq(69).text("Forno a microonde ");
    $(".sacs-specification-items ul li").eq(70).text("Fornello a induzione ");
    $(".sacs-specification-items ul li").eq(71).text("Macchina per il caffè");
    $(".sacs-specification-items ul li").eq(72).text("Twin refrigerators ");
    $(".sacs-specification-items ul li").eq(73).text("Frigoriferi gemelli ");
    $(".sacs-specification-items ul li").eq(74).text("Testa a filo elettrica ");
    $(".sacs-specification-items ul li").eq(75).text("Lavello/lavabo con acqua calda/fredda");
    $(".sacs-specification-items ul li").eq(76).text("Doccia a grandezza naturale ");
    $(".sacs-specification-items ul li").eq(77).text("Fan ");
    $(".sacs-specification-items ul li").eq(78).text("Accessori per la toilette ");
    $(".sacs-specification-items ul li").eq(79).text("Specchio con luce ");
    $(".sacs-specification-items ul li").eq(80).text("Armadietti ");
    $(".sacs-specification-items ul li").eq(81).text("Serbatoio acque nere/acqua dolce e sistema di sentina 200 I ");
    $(".sacs-specification-items ul li").eq(82).text("Maceratore per lo scarico a mare ");
    $(".sacs-specification-items ul li").eq(83).text("Collegamento pompa a terra");
    $(".sacs-specification-items ul li").eq(84).text("Pompa per acqua dolce");
    $(".sacs-specification-items ul li").eq(85).text("Serbatoio acqua dolce 224 l ");
    $(".sacs-specification-items ul li").eq(86).text("4 Pompe di sentina automatiche ");
    $(".sacs-specification-items ul li").eq(87).text("Due pompe di sentina manuali ");
    $(".sacs-specification-items ul li").eq(88).text("Equipaggiamento di sicurezza ");
    $(".sacs-specification-items ul li").eq(89).text("Estintore portatile");
    $(".sacs-specification-items ul li").eq(90).text("Sistema di allarme antincendio");
    $(".sacs-specification-items ul li").eq(91).text("Sistema di allarme rilevamento carburante ");
    $(".sacs-specification-items ul li").eq(92).text("10 giubbotti di salvataggio automatici");
    $(".sacs-specification-items ul li").eq(93).text("Varie ");
    $(".sacs-specification-items ul li").eq(94).text("Comoda scaletta bagno di poppa");
    $(".sacs-specification-items ul li").eq(95).text("Doccia calda/fredda di poppa e di prua ");
    $(".sacs-specification-items ul li").eq(96).text(" Asta portabandiera in acciaio inox");
    $(".sacs-specification-items ul li").eq(97).text("Copri tacchetti in tinta con lo scafo");
    $(".sacs-specification-items ul li").eq(98).text("Sistema musicale Fusion di fascia alta premium ");
    $(".sacs-specification-items ul li").eq(99).text("Amplificatore 2x2500 watt ");
    $(".sacs-specification-items ul li").eq(100).text("2 subwoofer ");
    $(".sacs-specification-items ul li").eq(101).text("Luci subacquee a LED a colori ");
    $(".sacs-specification-items ul li").eq(102).text("Giochi d'acqua / Seabob o moto d'acqua al punto di ancoraggio");

    //=============JAQUAR ===========//

    $(".golden-header h3").text("Le coste più belle del mondo.");
    $(".golden-header h5").text("ESPLORARE LO YACHT GOLDFINGER");

    $(".jaquar-text p").eq(0).text("Naviga nel nostro unico e moderno yacht di lusso veloce. Dotato di tutte le comodità di fascia alta e personale altamente professionale. Salta da un'isola all'altra attraverso passaggi d'acqua riparati, o fai viaggi veloci in acque libere e trascorri la notte in una baia appartata o in un romantico porto remoto dove il tempo si è fermato. Pianifica la tua vacanza alla perfezione o semplicemente lasciati trasportare dalla corrente. Una cosa è certa: il viaggio verso la tua prossima destinazione supererà le tue aspettative.");
    $(".jaquar-text p").eq(1).text("Una costa come quella che trovi solo nelle migliori brochure di viaggio; questo è ciò che ti aspetta durante un affascinante noleggio di yacht nel Mediterraneo. Inizia la tua avventura in uno dei porti colorati della Sardegna, Turchia o sul Mar Egeo. Lasciati sorprendere dalla cultura, dalla cucina squisita e dai più bei ancoraggi riparati durante una crociera sul Mar Mediterraneo. Oppure cerca i tesori senza tempo delle incantevoli isole della Dalmazia. Un'esperienza davvero unica.");
    $(".jaquar-text p").eq(2).text("Naviga nel nostro yacht di lusso veloce, moderno e unico. Dotata di tutti i comfort di fascia alta e di personale altamente professionale, offre ampio spazio. Salta da un'isola all'altra attraverso passaggi d'acqua riparati, o fai viaggi veloci in mare aperto e trascorri la notte in una baia isolata o in un romantico porto remoto dove il tempo si è fermato, le onde non ti disturbano grazie allo stabilizzatore Seakeeper.");
    $(".jaquar-text p").eq(3).text("Organizza la tua vacanza alla perfezione o lasciati trasportare dalla corrente. Una cosa è certa: il viaggio verso la tua prossima destinazione supererà le tue aspettative.");
    $(".jaquar-text p").eq(4).text("In Croazia, Italia o Turchia i principianti e i marinai avanzati si divertiranno molto. La Costiera Amalfitana italiana è ricca di cultura ed è costellata di splendidi panorami. Concedi alle tue gambe di mare un po 'di tempo a terra durante l'isola che salta lungo la costa adriatica in Croazia. Oppure concediti ai tuoi sensi a Palma di Maiorca in Spagna, dove moderno e antico formano una simbiosi unica. Ovunque getti la tua ancora nel Mediterraneo, questa sarà una vacanza da sogno che non dimenticherai mai. Un grande yacht, un equipaggio meticoloso e amichevole ti assicureranno di sentirti rilassato e benvenuto ovunque ti porteranno i tuoi viaggi. O pianifichi il percorso o lo faremo noi; conosciamo tutti i grandi luoghi e i segreti nascosti del Mediterraneo.");
    $(".jaquar-text p").eq(5).text("Questo yacht ben progettato (da: Paolo Caliari) è dotato di tutti i comfort e disegnato da interior designer olandese; Denise van Rijmenam. Per le sue dimensioni Goldfinger offre inaspettate camere spaziose (bagno). Hai solo bisogno di portare con te i tuoi vestiti (costumi) e lo spazzolino da denti. Il nostro equipaggio capace è composto da un capitano esperto, marinaio, hostess affascinante e grande chef (tutti certificati, che parlano inglese, turco, ucraino e russo); professionisti nel loro campo e con un solo obiettivo: farti sentire coccolato, comodo, sicuro e benvenuto.");

    $(".jaquar-item h3").eq(0).text("Master bedroom");
    $(".jaquar-item p").eq(0).text("Spacious Master bedroom with a queen size bed, Bose surround, Apple TV, 48” 4K TV, ambient lighting. Walk-in closet and Bathroom en suite.");

    $(".jaquar-item h3").eq(1).text("VIP Bedroom");
    $(".jaquar-item p").eq(1).text("Spacious Suite with a queen size bed, Bose surround, Apple TV, 42” 4K TV, ambient lighting. Walk-in closet and Bathroom en suite.");

    $(".jaquar-item h3").eq(2).text("2 Double rooms");
    $(".jaquar-item p").eq(2).text("2 double rooms, single beds (2+2), HiFi system, Apple TV, 36” 4K TV, ambient lighting. Spacious bathroom en suite.");

    $(".jaquar-specifications h3").text("JAQUAR Specifiche");

    $(".jaquar-specifications-item h4").eq(0).text("Goldfinger Yacht");
    $(".jaquar-specifications-item p").eq(0).text("Model: Jaguar 92");
    $(".jaquar-specifications-item p").eq(1).text("Modello: Jaguar 92 ");
    $(".jaquar-specifications-item p").eq(2).text("Data di consegna / commissionato: 2013 ");
    $(".jaquar-specifications-item p").eq(3).text("Primo utilizzo / completamento / ristrutturazione: 2019");

    $(".jaquar-specifications-item h4").eq(1).text("Dimensioni");
    $(".jaquar-specifications-item p").eq(4).text("Larghezza: 6.5m ");
    $(".jaquar-specifications-item p").eq(5).text("Raft: 3.43 m");
    $(".jaquar-specifications-item p").eq(6).text("L.O.A: 28m / 24mtr (linea di galleggiamento) ");

    $(".jaquar-specifications-item h4").eq(2).text("Propulsione");
    $(".jaquar-specifications-item p").eq(7).text("Drive: TDS – Arneson");
    $(".jaquar-specifications-item p").eq(8).text("Motore: 2 x 1920hp MTU diesel ");
    $(".jaquar-specifications-item p").eq(9).text("Orari motore: inferiore a 300 ore ");
    $(".jaquar-specifications-item p").eq(10).text("Drive tempo di funzionamento: inferiore a 50 ore");

    $(".jaquar-specifications-item h4").eq(3).text("Velocità");
    $(".jaquar-specifications-item p").eq(11).text("Velocità di crociera: 28 Kn - 20Ltr/ Nt. Mile ");
    $(".jaquar-specifications-item p").eq(12).text("Velocità massima: 35Kn. – 24 Ltr/ Nt. Mile");

    $(".jaquar-specifications-item h4").eq(4).text("Navigazione");
    $(".jaquar-specifications-item p").eq(13).text("Sistema joystick, Sistema di assetto automatico, Pilota automatico, Radar, Telecamera notturna Flir, Sistema di telecamere, Radio VHF, GPS, Plotter GPS, Bussola, registro, ecoscandaglio, barometro, AEDS, manuali portuali, mappe del mare");

    $(".jaquar-specifications-item h4").eq(5).text("Tecnica");
    $(".jaquar-specifications-item p").eq(14).text(" 2 generatore da 30 Kwh (<500 ore), doppia aria condizionata ad alta capacità, ancora a 360 Volt - verricello, luci subacquee RGB interattive, dissalatore ad alta capacità, luce RGB nel salone e in tutte le cabine");

    $(".jaquar-specifications-item h4").eq(6).text("Attrezzatura di coperta");
    $(".jaquar-specifications-item p").eq(15).text("Scaletta da bagno, Piattaforma da bagno, Doccia calda / fredda a poppa e prua, tutti i giochi d'acqua immaginabili, Jetski Wave Runner FX SVHO, Tender Grand 850 con fuoribordo 2x225PK, Seabob, Kayak di cristallo, drone subacqueo, paddle board, Attrezzatura subacquea, Stereo JL da 10.000 Watt sul ponte di poppa, Stereo JL da 500 Watt a prua, Ponte di poppa Bimini.");

    $(".jaquar-specifications-item h4").eq(7).text("Sicurezza");
    $(".jaquar-specifications-item p").eq(16).text("Estintore, Zattera di salvataggio (2), Giubbotto di salvataggio(24), Pompe di sentina, Sistema DAE, Posto di pronto soccorso completamente attrezzato, Bandiere, Tutti i dispositivi di segnalazione di emergenza, Rilevatore di gas, Rilevatore di fumo, Sistema automatizzato di controllo antincendio.");

    $(".jaquar-specifications-item h4").eq(8).text("Interno");
    $(".jaquar-specifications-item p").eq(17).text("WC completamente elettrici (5) e bidet (4), fornello elettrico, 3 x frigorifero, icemaker normale e ad alta capacità, posate, stoviglie, asciugamani (spiaggia e regolari), prendisole prua e poppa, 5 divani, tavolo da pranzo per 8 persone all'interno e all'esterno.");

    $(".jaquar-specifications-item h4").eq(9).text("Divertimento");
    $(".jaquar-specifications-item p").eq(18).text("TV satellitare, radio, MP3, Apple TV, 5 TV a schermo piatto (1 berlina e 4 cabine), 3 x Bose 5.1 (master, VIP e Saloon), sistema Hi-Fi ad alta potenza, JL Audio A poppa e prua.");

    $(".jaquar-specifications-item h4").eq(10).text("Cabina");
    $(".jaquar-specifications-item p").eq(19).text("Camera da letto principale (2 persone) - Cabina VIP (2 persone) - 2 x Camera per gli ospiti (4 persone) - Cabina equipaggio separata, zona lavanderia e cucina");

    // vandutch //

    $(".vandutch-header p").text("Il modo migliore per vivere un'esperienza in mare senza rinunciare alla potenza e all'eleganza è scegliere il  VanDutch 55. Il suo design lussuoso dalle linee semplici è stato concepito nei minimi dettagli per favorire comfort e praticità.");

    $(".vanDutch-text p").eq(0).text("VanDutch 55 offre alloggio per un massimo di otto ospiti, rendendolo una barca fantastica per crociere costiere a lungo raggio. ");
    $(".vanDutch-text p").eq(1).text("Il suo profilo distintivo è l'inconfondibile prua verticale e le linee minimaliste del ponte, con volume e capacità interna migliorati dai suoi 16,48 metri (55 piedi) di lunghezza.");
    $(".vanDutch-text p").eq(2).text("L'architettura navale di Frank Mulder si assicura che il VanDutch 55 rivendichi la sua pretesa di essere una delle barche a motore più performanti e all'avanguardia nelle sue dimensioni.");
    $(".vanDutch-text p").eq(3).text("Sul ponte di prua c'è una grande area prendisole e relax.");
    $(".vanDutch-text p").eq(4).text("Sottocoperta lo spazio è organizzato per soddisfare al primo sguardo, nessuno può sfuggire al fascino della sua estetica. Ogni angolo è stato pensato per rendere piacevole la permanenza a bordo, ma soprattutto funzionale, gli spazi non potrebbero essere sfruttati meglio.");

    $(".vanDutch-text p").eq(5).text("La zona di prua piatta è l'ideale per gli ospiti che desiderano crogiolarsi nello splendido sole del  Mediterraneo mentre sono all'ancora o tuffarsi nelle  scintillanti acque chiare e blu scuro, per un tuffo rinfrescante. Il sistema musicale di bordo consente agli ospiti di riprodurre la musica che desiderano, contribuendo a un'atmosfera rilassante o a un'atmosfera estiva tropicale allegra!");
    $(".vanDutch-text p").eq(6).text("Gli ospiti possono sfuggire alle ore più intime di sole grazie al grande Bimini-top, in questo modo è possibile rilassarsi all'ombra pur ammirando le bellezze naturali della frastagliata costa sarda. Se desiderate sfuggire completamente al sole, potrete ritirarvi nella fresca suite climatizzata.");
    $(".vanDutch-text p").eq(7).text("Sottocoperta, il VanDutch 55 offre un ampio spazio abitativo, con due splendide cabine che la rendono ideale per i viaggi del fine settimana. Progettato con il concetto di lusso chic che definisce la silhouette di questo elegante motoscafo, l'interno è esteticamente gradevole come l'esterno");
    $(".vanDutch-text p").eq(8).text("Attraverso un design magistrale, può raggiungere alte velocità offrendo agli ospiti una guida deliziosamente silenziosa e asciutta , una netta mancanza di vibrazioni significa che il comfort  non sarà mai compromesso. È chiaro che VanDutch ha progettato con cura il 55 pensando al comfort e al lusso.");
    $(".vanDutch-text p").eq(9).text("Una barca a motore di 16,49 m è la dimensione perfetta, che consente di accedere a calette nascoste con scogliere verdi o  spiagge di sabbia dorata, rispettando le restrizioni di dimensioni e potendo attraccare in punti portuali privilegiati come Porto Cervo o Poltu Quatu. Gli ospiti non devono mai andare lontano a piedi per esplorare  le attrazioni della terra o i suoi ristoranti autentici.");
    $(".vanDutch-text p").eq(10).text("Con una velocità di crociera di 25-30 nodi, il VanDutch 55 taglia senza sforzo l'acqua, raggiungendo anche St Tropez o Monaco.  Oppure può viaggiare da Porto Rotondo alla Maddalena, o Tavolara in meno di un'ora.  Grazie a questa magnifica dimostrazione di potenza e velocità, gli ospiti hanno la straordinaria opportunità di esplorare una serie di destinazioni, sfruttando al massimo il tuo charter di lusso.");

    $(".vanDutch-specifications h3").text("VanDutch 55 Specifiche");

    $(".vanDutch-specification-items ul li ").eq(0).text("Lunghezza fuori tutto: 16.48 m / 55 ft");
    $(".vanDutch-specification-items ul li ").eq(0).text("Lunghezza Scafo: 15.55 m / 52 ft");
    $(".vanDutch-specification-items ul li ").eq(0).text("Larghezza: 4.50 m / 14.76 ft");
    $(".vanDutch-specification-items ul li ").eq(0).text("Pescaggio: 1.15 m / 3.77 ft");
    $(".vanDutch-specification-items ul li ").eq(0).text("Dislocamento: 22 tonnellate / 44.000 p");
    $(".vanDutch-specification-items ul li ").eq(0).text("Capacità carburante: 2500 l / 660.5 gal");
    $(".vanDutch-specification-items ul li ").eq(0).text("Capacità acqua: 600 l / 158.5 gal");
    $(".vanDutch-specification-items ul li ").eq(0).text("Velocità massima: 37 Nodi");
    $(".vanDutch-specification-items ul li ").eq(0).text("Scafo e coperta in materiale composito con tecniche di iniezione sottovuoto");
    $(".vanDutch-specification-items ul li ").eq(0).text("Tacchetti pieghevoli (8)");
    $(".vanDutch-specification-items ul li ").eq(0).text("Parabordi e battigi alloggiati in portside box");
    $(".vanDutch-specification-items ul li ").eq(0).text("Zattera di salvataggio e giubbotti di salvataggio");
    $(".vanDutch-specification-items ul li ").eq(0).text("Ancora con braccio girevole idraulico");
    $(".vanDutch-specification-items ul li ").eq(0).text("Catena di ancoraggio (50 m / 164 ft)");
    $(".vanDutch-specification-items ul li ").eq(0).text("Tappo di riempimento dell'acqua dolce sul lato del porto");
    $(".vanDutch-specification-items ul li ").eq(0).text("Tappo di riempimento del carburante sul lato della porta");
    $(".vanDutch-specification-items ul li ").eq(0).text("Sistema autodrenante del ponte");
    $(".vanDutch-specification-items ul li ").eq(0).text("Maniglie del pozzetto");
    $(".vanDutch-specification-items ul li ").eq(0).text("Deck con finitura Esthec");
    $(".vanDutch-specification-items ul li ").eq(0).text("Luci di navigazione pop-up");
    $(".vanDutch-specification-items ul li ").eq(0).text("Illuminazione da terra a LED");
    $(".vanDutch-specification-items ul li ").eq(0).text("Sedute e tappezzeria");
    $(".vanDutch-specification-items ul li ").eq(0).text("Posti a sedere del timone e area ricreativa in Silvertex con schiuma rapida");
    $(".vanDutch-specification-items ul li ").eq(0).text("Sedili alti/bassi elettrici nei sedili del pozzetto di porto e di dritta");
    $(".vanDutch-specification-items ul li ").eq(0).text("Cuscini per lettino di poppa in Silvertex con schiuma rapida");

    $(".vanDutch-specification-items ul li ").eq(0).text("Elettronica e strumenti");
    $(".vanDutch-specification-items ul li ").eq(0).text("Schermata di navigazione e controllo motori Simrad");
    $(".vanDutch-specification-items ul li ").eq(0).text("Comandi elettronici dell'acceleratore CAN Bus");
    $(".vanDutch-specification-items ul li ").eq(0).text("Allarme olio motore");
    $(".vanDutch-specification-items ul li ").eq(0).text("Allarme temperatura acqua");
    $(".vanDutch-specification-items ul li ").eq(0).text("Sistema di sterzo elettrico (Steer by Wire)");
    $(".vanDutch-specification-items ul li ").eq(0).text("Radio VHF portatile Raymarine");
    $(".vanDutch-specification-items ul li ").eq(0).text("Sala macchine e sistema di alimentazione");
    $(".vanDutch-specification-items ul li ").eq(0).text("Pacchetto diesel: 2 X Caterpillar 950 CV ciascuno");
    $(".vanDutch-specification-items ul li ").eq(0).text("Propulsione: albero fisso");
    $(".vanDutch-specification-items ul li ").eq(0).text("Isolamento termo-acustico");
    $(".vanDutch-specification-items ul li ").eq(0).text("Ventilatore di estrazione dell'aria");
    $(".vanDutch-specification-items ul li ").eq(0).text("Serbatoio carburante 2500 ltr.  / 660,5 gal.");
    $(".vanDutch-specification-items ul li ").eq(0).text("Portello idraulico della sala macchine");
    $(".vanDutch-specification-items ul li ").eq(0).text("Hydraulic engine room hatch");
    $(".vanDutch-specification-items ul li ").eq(0).text("Generatore Onan 9Kw");
    $(".vanDutch-specification-items ul li ").eq(0).text("Impianto elettrico");
    $(".vanDutch-specification-items ul li ").eq(0).text("Quadro elettrico di controllo“One Touch”");
    $(".vanDutch-specification-items ul li ").eq(0).text("Batterie di servizio 6 x 24 V 170 A/h, esenti da manutenzione");
    $(".vanDutch-specification-items ul li ").eq(0).text("Batterie di avviamento motore 2 x 24 V 170 A/h, esenti da manutenzione");
    $(".vanDutch-specification-items ul li ").eq(0).text("Inverter Mastervolt");
    $(".vanDutch-specification-items ul li ").eq(0).text("Caricabatterie 20 A 220 V (*110 US Model)");
    $(".vanDutch-specification-items ul li ").eq(0).text("Collegamento di alimentazione a terra con cavo");
    $(".vanDutch-specification-items ul li ").eq(0).text("Illuminazione frontale");
    $(".vanDutch-specification-items ul li ").eq(0).text("Luci di navigazione");
    $(".vanDutch-specification-items ul li ").eq(0).text("Corno incorporato");
    $(".vanDutch-specification-items ul li ").eq(0).text("Interruttori batteria");
    $(".vanDutch-specification-items ul li ").eq(0).text("Batteria in parallelo per l'avviamento del motore");
    $(".vanDutch-specification-items ul li ").eq(0).text("Protezione catodica mediante anodi di zinco e piastra rettificata");
    $(".vanDutch-specification-items ul li ").eq(0).text("WC elettrico a filo");
    $(".vanDutch-specification-items ul li ").eq(0).text("Easy Maneuvering System, composto da eliche di prua e poppa, incluso il controllo del joystick");
    $(".vanDutch-specification-items ul li ").eq(0).text("Area cabina");
    $(".vanDutch-specification-items ul li ").eq(0).text("Queen Size V-Berth");
    $(".vanDutch-specification-items ul li ").eq(0).text("Plafoniere con dimmer");
    $(".vanDutch-specification-items ul li ").eq(0).text("Armadi Finitura Corian");
    $(".vanDutch-specification-items ul li ").eq(0).text("Finitura Esthec del pavimento");
    $(".vanDutch-specification-items ul li ").eq(0).text("Aria condizionata annesso riscaldamento");
    $(".vanDutch-specification-items ul li ").eq(0).text("Salone con divano, facile da convertire in letto matrimoniale con vassoio e spazio di archiviazione");
    $(".vanDutch-specification-items ul li ").eq(0).text("Cabina armatoriale con letto matrimoniale");
    $(".vanDutch-specification-items ul li ").eq(0).text("Cabina ospiti con 2 letti singoli");
    $(".vanDutch-specification-items ul li ").eq(0).text("Armadi come aree di stoccaggio");
    $(".vanDutch-specification-items ul li ").eq(0).text("Tre portelli a soffitto con accecante air sky e/o protezione antizanzare");
    $(".vanDutch-specification-items ul li ").eq(0).text("Spine da 220 / 110 volt");
    $(".vanDutch-specification-items ul li ").eq(0).text("Zona dispensa");
    $(".vanDutch-specification-items ul li ").eq(0).text("Testa a filo elettrico");
    $(".vanDutch-specification-items ul li ").eq(0).text("Lavello/Lavabo con acqua calda/fredda");
    $(".vanDutch-specification-items ul li ").eq(0).text("Doccia");
    $(".vanDutch-specification-items ul li ").eq(0).text("Ventilatore");
    $(".vanDutch-specification-items ul li ").eq(0).text("Accessori per wc");
    $(".vanDutch-specification-items ul li ").eq(0).text("Specchio con luce");
    $(".vanDutch-specification-items ul li ").eq(0).text("Acqua nera / acqua dolce e sistema di sentina");
    $(".vanDutch-specification-items ul li ").eq(0).text("Misto");
    $(".vanDutch-specification-items ul li ").eq(0).text("Scaletta da bagno a poppa");
    $(".vanDutch-specification-items ul li ").eq(0).text("Doccia di poppa");
    $(".vanDutch-specification-items ul li ").eq(0).text("Asta per bandiere in acciaio inox");
    $(".vanDutch-specification-items ul li ").eq(0).text("Acqua nera / acqua dolce e sistema di sentina");
    $(".vanDutch-specification-items ul li ").eq(0).text("Serbatoio 36 I / 9.5 gal");
    $(".vanDutch-specification-items ul li ").eq(0).text("Macerator for discharge to sea");
    $(".vanDutch-specification-items ul li ").eq(0).text("Shore pump connection");
    $(".vanDutch-specification-items ul li ").eq(0).text("Fresh water pump");
    $(".vanDutch-specification-items ul li ").eq(0).text("Serbatoio acqua dolce 600 l / 158.5 gal");
    $(".vanDutch-specification-items ul li ").eq(0).text("2 x Subwoofer");
    $(".vanDutch-specification-items ul li ").eq(0).text("Sistema musicale Fusion di fascia alta premium");
    $(".vanDutch-specification-items ul li ").eq(0).text("Luci subacquee a LED a colori");

    // ===========Yacht Service page ============//

    // Yacht Service content part

    $(".yacht-service-banner h3").text("Assistenza agli Yacht");

    $(".service-content p").eq(0).text(" Supportiamo gli yacht, durante le loro crociere nel Mar Mediterraneo e durante l'inverno nei cantieri.");
    $(".service-content p").eq(1).text(" Pensaci come il tuo equipaggio a terra,  siamo sempre a tua disposizione, saremo veloci e vi offriremo solo il meglio.");
    $(".service-content p").eq(2).text(" Il nostro staff farà in modo che la vostra vita a bordo funzioni senza intoppi.");
    $(".service-content p").eq(3).text(" Conosciamo i posti migliori per acquistare prodotti di alta qualità e possiamo consegnarli a voi velocemente, anche durante la stagione estiva, agosto incluso.");
    $(".service-content p").eq(4).text(" Capitani, ETO e ingegneri in tutto il Mar Mediterraneo sanno di potersi affidare a Marefun per trovare velocemente i materiali e i pezzi di ricambio giusti. Nella maggior parte dei casi possiamo anche fornirti le conoscenze specifiche o lo specialista di cui hai bisogno. ");
    $(".service-content p").eq(5).text(" Il nostro obiettivo è soddisfare e realizzare ogni tuo desiderio, trasformiamo l'impossibile in possibile e senza farti aspettare.  I contatti giusti fanno la differenza, e noi saremo i tuoi preferiti  per goderti ogni secondo della tua vacanza.");

    $(".offer-text h5").text(" Offriamo:");

    $(".offer-text ul li").eq(0).text(" - Noleggio auto;");
    $(".offer-text ul li").eq(1).text(" - Pianificazione delle feste;");
    $(".offer-text ul li").eq(2).text(" - Servizio tender;");
    $(".offer-text ul li").eq(3).text(" - Documentazione dell'equipaggio;");
    $(".offer-text ul li").eq(4).text(" - Prenotazione per il  rifornimento;");
    $(".offer-text ul li").eq(5).text(" - Assistenza tecnica completa;");
    $(".offer-text ul li").eq(6).text(" - Ristoranti, alberghi e locali;");
    $(".offer-text ul li").eq(7).text(" - Prenotazioni ormeggio in tutto il Mediterraneo;");
    $(".offer-text ul li").eq(8).text(" - Consegna bevande, cibi, solo della migliore qualità (locale);");

    // about banner part
    $(".about-banner h3").text("Chi Siamo");

    // staff  part
    $(".header-text p").eq(0).text(" Siamo MareFun dal 2000 e ne siamo orgogliosi!");
    $(".header-text p").eq(1).text(" La nostra più grande risorsa è senza dubbio il nostro staff;  tutti professionisti nel loro campo;  inoltre il nostro è uno staff multilingue, italiano, inglese e francese.");
    $(".header-text p").eq(2).text(" Ci sono oltre 12 dipendenti motivati;  Clive il nostro comandante del Jaquar92, Tom e suo fratello sono I  comandanti di tutta la nostra flotta, Martina la nostra manager che si occupa di booking, front e back office e naturalmente ultimo ma non meno importante: Marco, direttore e fondatore di Marefun.");

    // ===========contact page ============//

    // contact banner part
    $(".contact-banner h3").text("Contattaci");

    $(".contact_taxt h5").text(" Scrivici");
    $(".contact_taxt p em").eq(0).text(" Senza contatti nulla funziona.  Quindi, se vuoi maggiori informazioni sulla nostra azienda, prezzi, disponibilità o davvero qualsiasi altra cosa....");
    $(".contact_taxt p em").eq(1).text(" Inviaci le tue informazioni e verrai contattato prontamente.");

    $(".contact_taxt .btn").text("CONTATTI");

    // footer part //
    $(".footer-text small span").text("Diritto d'autore");
    $(".footer-text small label a").text("Termini e sicurezza");

    // termsandsecurity part //
    $(".termsandsecurity-header h3").text("Termini e sicurezza");

    $(".termsandsecurity-text p").eq(0).text(" Leggere attentamente questi termini e condizioni (di seguito: 'Termini') prima di utilizzare Marefun Srl. sito web (www.Marefun.com o siti affiliati). Utilizzando la Marefun Srl. sito web in cui indichi di aver preso atto e di accettare i Termini. Se non sei d'accordo con uno o più Termini e/o Condizioni, non devi utilizzare Marefun Srl. sito web. Questo sito è stato realizzato dalla società privata Marefun Srl. con sede legale a Golfo Aranci.");

    $(".termsandsecurity-text h3").eq(0).text("Uso consentito");

    $(".termsandsecurity-text p")
      .eq(1)
      .text(
        " In qualità di utente della Marefun Srl. sito web, è necessario comportarsi a tutti gli effetti e comportarsi come ci si aspetterebbe da un utente Internet responsabile e attento. Tra l'altro, non è consentito utilizzare il (contenuto del) sito Web per atti e/o comportamenti che violino la legge, l'ordine pubblico o il buon costume. In particolare, non sono ammessi i seguenti atti e/o comportamenti: (a) violare o comunque agire in violazione dei diritti di proprietà intellettuale di www.Marefun.com o di siti affiliati e/o di terzi; (b) effettuare comunicazioni dannose, illecite o fuorvianti; (c) distribuire materiale legalmente proibito; (d) evitare o rimuovere la sicurezza di (parti del) sito web. È consentito scaricare solo una copia del materiale reso disponibile sul sito Web per uso personale e non commerciale. Non è consentito, senza previa autorizzazione scritta di Marefun Srl., copiare, modificare, distribuire, distribuire, decodificare, decompilare o altrimenti utilizzare e/o utilizzare il materiale messo a disposizione. È consentito creare un collegamento ipertestuale solo se Marefun Srl. Wonen BV ha precedentemente dato il suo permesso scritto. Le richieste per l'applicazione di un collegamento ipertestuale possono essere indirizzate a info@Marefun.com"
      );
    $(".termsandsecurity-text p").eq(2).text(" Nel caso in cui non si aderisca al suddetto utilizzo consentito, Marefun Srl. si riserva il diritto di risarcire da voi i danni diretti e indiretti derivanti da tale uso non consentito.");

    $(".termsandsecurity-text h3").eq(1).text("Proprietà intellettuale");
    $(".termsandsecurity-text p")
      .eq(3)
      .text(
        "Tutti i diritti di proprietà intellettuale relativi al sito web spettano esclusivamente a Marefun Srl. e/o suoi fornitori. I diritti di proprietà intellettuale comprendono tutti i diritti di brevetto, diritto di marchio, diritto di nome commerciale, diritto di database, diritto di design, nome a dominio e altri diritti di proprietà intellettuale in Italia o altrove che siano collegati al sito Web e Marefun in generale, compreso anche il know-how e il commercio . Non è consentito modificare o rimuovere i contrassegni o segni di riconoscimento presenti sul materiale, e/o qualsiasi indicazione in merito a copyright, nomi commerciali o altri diritti di proprietà intellettuale, né modificare il materiale o parti di esso o successivamente né causare alcun danno a o ingiustificato beneficio dalla notorietà dei diritti di proprietà intellettuale di Marefun. In caso di violazione dei diritti di proprietà intellettuale di Marefun Srl. e/o suoi fornitori, Marefun Srl. si riserva il diritto di risarcire il danno subito."
      );

    $(".termsandsecurity-text h3").eq(2).text("Responsabilità e indennizzo");
    $(".termsandsecurity-text p").eq(4).text(" Marefun non è responsabile del contenuto o dell'accuratezza dei dati del sito web, né dei siti web che siano in alcun modo collegati al sito web di Marefun Srl. sono collegati, ad esempio, tramite hyper (text) link o meta tag (s). Marefun Srl. non è inoltre responsabile per danni, derivanti o connessi all'uso, o all'impossibilità dello stesso, del materiale disponibile sul sito o che si ottenga tramite i cookie.");
    $(".termsandsecurity-text p").eq(5).text(" Marefun Srl. non è responsabile per (il contenuto dei) servizi e/o informazioni di terzi, che siano in alcun modo tramite la Marefun Srl. sito web sono offerti.");
    $(".termsandsecurity-text p").eq(6).text(" Marefun Srl. non garantisce che le informazioni e il materiale offerti sul sito web siano aggiornati, completi e/o accurati. Marefun Srl. Né garantisce che...");
  });
});
