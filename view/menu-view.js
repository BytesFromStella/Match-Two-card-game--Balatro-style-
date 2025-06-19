// Menu is responsible for all UI

export default class menu_view {
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
    this.container_pointer = document.getElementById("container");
    
    
    this.createLogo();
    this.createContainer();
    this.createButtons();
    this.styleButtons();
    
    document.getElementById("placeholder").remove(); // Remove placeholder text saying JS might be borked
    this.menu_container.append(this.wrap(this.splash_logo), this.wrap(this.play_button, this.settings_button))
    this.container_pointer.append(this.menu_container);

    }   

    createLogo() {
        this.splash_logo = document.createElement("img"); this.splash_logo.src = "assets/superlowquality logo.png";
        this.splash_logo = this.splash_logo;
    }
    wrap(item, item2, item3) {
        let wrapper = document.createElement("div");
        wrapper.className = "wrapperBox";
        wrapper.append(item);
        if(item2) {wrapper.append(item2);}
        if(item3) {wrapper.append(item3);}
        return wrapper;
    }

    createContainer() {
        this.menu_container = document.createElement("div"); this.menu_container.id = "menu_container"; this.menu_container.classList.add("menu");
    }
    
    createButtons() {
        this.play_button = document.createElement("button"); this.play_button.textContent = ""; this.play_button.id = "play_button"
        this.settings_button = document.createElement("button"); this.settings_button.textContent = ""; this.settings_button.id = "settings_button"
    }

    styleButtons() {
        let a = this.play_button.style;
        let b = this.settings_button.style;
        a.backgroundImage = "url('assets/PlayButton.png')";
        a.width = "400px";
        a.height = "150px";
        b.backgroundImage = "url('assets/SettingsButton.png')";
        b.width = "400px";
        b.height = "150px";
    }

    createMoreSettings() {
        // More settings to come here
    }

    destroy() {
        document.getElementById("container").replace(menu_container, "")
    }


};