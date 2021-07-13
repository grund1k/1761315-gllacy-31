const slider = document.querySelector(".site-wrapper");
const slideButtons = document.querySelectorAll(".slide-btn");

// SLIDER

slideButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    for (let i = 1; i <= slideButtons.length; i++) {
      slider.classList.remove("site-wrapper-" + i);
      document.querySelector(".btn-" + i).classList.remove("current");
    }
    slider.classList.add("site-wrapper-" + btn.value);
    document.querySelector(".btn-" + btn.value).classList.add("current");
  });
});


// feedbackpopup

const feedbackForm = document.querySelector(".btn-feedback-form");
const modalFeedback = document.querySelector(".modal-feedback");
const modalFeedbackOverlay = document.querySelector(".feedback-overlay");
const modalFeedbackClose = document.querySelector(".popup-close");
const modalForm = modalFeedback.querySelector(".popup-feedback-form");
const userName = modalFeedback.querySelector(".user-name");
const userEmail = modalFeedback.querySelector(".user-email");
const userMessage = modalFeedback.querySelector(".feedback-textarea");

let isStorageSupport = true;
let userNameStorage = "";
let userEmailStorage = "";

try {
  userNameStorage = localStorage.getItem("userName");
  userEmailStorage = localStorage.getItem("userEmail");
} catch (err) {
  isStorageSupport = false;
}

feedbackForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedbackOverlay.classList.add("feedback-overlay-show");
  modalFeedback.classList.add("modal-feedback-show");

  if (userNameStorage) {
    userName.value = userNameStorage;
    userEmail.focus();
  }

  if (userEmailStorage) {
    userEmail.value = userEmailStorage;
    userMessage.focus();
  }

  userName.focus();
});

modalFeedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedbackOverlay.classList.remove("feedback-overlay-show");
  modalFeedback.classList.remove("modal-feedback-show");
  modalFeedback.classList.remove("modal-error");
});

modalForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userMessage.value) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-error");
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userEmail", userEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Esc" || evt.key === "Escape") {
    if (modalFeedback.classList.contains("modal-feedback-show")) {
      evt.preventDefault();
      modalFeedback.classList.remove("modal-feedback-show");
      modalFeedbackOverlay.classList.remove("feedback-overlay-show");
      modalFeedback.classList.remove("modal-error");
    }
  }
});
