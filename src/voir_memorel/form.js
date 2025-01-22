class FileUpload {
  constructor(element) {
    this.element = element;
    this.fileInput = element.querySelector('input[type="file"]');
    this.uploadArea = element.querySelector(".upload-area");
    this.uploadPrompt = element.querySelector(".upload-prompt");
    this.filePreview = element.querySelector(".file-preview");
    this.fileName = element.querySelector(".file-name");
    this.removeButton = element.querySelector(".remove-file");
    this.errorMessage = element.querySelector('[data-error="file"]');

    this.setupEventListeners();
  }

  setupEventListeners() {
    this.uploadArea.addEventListener("click", () => this.fileInput.click());
    this.fileInput.addEventListener("change", (e) => this.handleFileSelect(e));
    this.removeButton.addEventListener("click", (e) =>
      this.handleFileRemove(e)
    );

    ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      this.uploadArea.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
    });

    ["dragenter", "dragover"].forEach((eventName) => {
      this.uploadArea.addEventListener(eventName, () => {
        this.uploadArea.classList.add("dragover");
      });
    });

    ["dragleave", "drop"].forEach((eventName) => {
      this.uploadArea.addEventListener(eventName, () => {
        this.uploadArea.classList.remove("dragover");
      });
    });

    this.uploadArea.addEventListener("drop", (e) => {
      const file = e.dataTransfer.files[0];
      if (file) this.handleFile(file);
    });
  }

  handleFileSelect(e) {
    const file = e.target.files[0];
    if (file) this.handleFile(file);
  }

  handleFile(file) {
    const error = validators.file(file);
    this.showError(error);

    if (!error) {
      this.fileName.textContent = file.name;
      this.uploadPrompt.classList.add("hidden");
      this.filePreview.classList.remove("hidden");
      this.uploadArea.classList.remove("error");
      this.element.dispatchEvent(
        new CustomEvent("filechange", { detail: file })
      );
    } else {
      this.fileInput.value = "";
      this.element.dispatchEvent(
        new CustomEvent("filechange", { detail: null })
      );
    }
  }

  handleFileRemove(e) {
    e.stopPropagation();
    this.fileInput.value = "";
    this.uploadPrompt.classList.remove("hidden");
    this.filePreview.classList.add("hidden");
    this.showError("");
    this.element.dispatchEvent(new CustomEvent("filechange", { detail: null }));
  }

  showError(error) {
    this.errorMessage.textContent = error;
    this.uploadArea.classList.toggle("error", !!error);
  }
}

class SignupForm {
  constructor() {
    this.form = document.getElementById("form");
    this.fileUpload = new FileUpload(document.getElementById("fileUpload"));
    this.submitButton = this.form.querySelector(".submit-button");
    this.buttonText = this.submitButton.querySelector(".button-text");
    this.spinner = this.submitButton.querySelector(".spinner");
    this.formData = {
      name: "",
      email: "",
      password: "",
      idDocument: null,
    };

    this.setupEventListeners();
  }

  setupEventListeners() {
    this.form.addEventListener("submit", (e) => this.handleSubmit(e));

    this.form.querySelectorAll("input").forEach((input) => {
      input.addEventListener("input", (e) => {
        const { name, value } = e.target;
        this.formData[name] = value;
        this.validateField(name, value);
      });
    });

    this.fileUpload.element.addEventListener("filechange", (e) => {
      this.formData.idDocument = e.detail;
    });
  }

  validateField(name, value) {
    const error = validators[name]?.(value) || "";
    this.showError(name, error);
    return !error;
  }

  validateForm() {
    let isValid = true;

    // Validate all fields
    Object.keys(this.formData).forEach((field) => {
      if (!this.validateField(field, this.formData[field])) {
        isValid = false;
      }
    });

    return isValid;
  }

  showError(field, error) {
    const errorElement = this.form.querySelector(`[data-error="${field}"]`);
    if (errorElement) {
      errorElement.textContent = error;
    }
  }

  setLoading(loading) {
    this.submitButton.disabled = loading;
    this.buttonText.style.opacity = loading ? "0" : "1";
    this.spinner.classList.toggle("hidden", !loading);
  }

  showSuccess() {
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("successMessage").classList.remove("hidden");

    // Redirection après 2 secondes
    setTimeout(() => {
      window.location.href = "index.html"; // Remplace "wsp.html" par l'URL souhaitée
    }, 2000);
  }

  async handleSubmit(e) {
    e.preventDefault();

    if (!this.validateForm()) return;

    this.setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      this.showSuccess();
    } catch (error) {
      this.showError("email", "An error occurred. Please try again.");
    } finally {
      this.setLoading(false);
    }
  }
}

// Initialize the form
new SignupForm();

const validators = {
  name: (value) => {
    if (!value.trim()) {
      return "Name is required";
    }
    return "";
  },

  email: (value) => {
    if (!value.trim()) {
      return "Email is required";
    }
    if (!/\S+@\S+\.\S+/.test(value)) {
      return "Please enter a valid email";
    }
    return "";
  },

  password: (value) => {
    if (!value) {
      return "Password is required";
    }
    if (value.length < 8) {
      return "Password must be at least 8 characters";
    }
    return "";
  },

  file: (file) => {
    if (!file) {
      return "Identity document is required";
    }
    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];

    if (!allowedTypes.includes(file.type)) {
      return "Please upload a JPG, PNG, or PDF file";
    }
    if (file.size > maxSize) {
      return "File size must be less than 5MB";
    }
    return "";
  },
};
