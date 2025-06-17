// Menu is responsible for all UI

export default class menu_controller {
    // Create the menu container
    // Put the menu container into the document
    // Create the menu objects
    // Put the menu objects into the container

    constructor() {
    //// Having this code in a constructor will allow you to regenerate the menu after a run
    this.splash_logo = false;
    this.menu_container = false;
    this.play_button = false;
    this.settings_button = false;
    
    this.createLogo();
    this.createContainer();
    this.createButtons();
    
    menu_container.append(this.splash_logo, this.play_button, this.settings_button)
    document.body.append(menu_container);

    }   

    createLogo() {
        this.splash_logo = document.createElement("img"); splash_logo.src = "assets/superlowquality logo.png";
    }

    createContainer() {
        this.menu_container = document.createElement("div"); menu_container.id = "menu_container"; menu_container.classList.add("menu");
    }
    
    createButtons() {
        this.play_button = document.createElement("button"); play_button.textContent = "Play"; play_button.id = "play_button"
        this.settings_button = document.createElement("button"); settings_button.textContent = "Settings"; settings_button.id = "settings_button"
    }

    createMoreSettings() {
        // More settings to come here
    }

    destroy() {
        document.body.replaceChild(menu_container, "")
    }
    apply_assets() {
        // grab the assets from the "graphics" view file (images)
        // Apply to buttons
        // Add background graphic
    }
};