import ReactPixel from "react-facebook-pixel";

const options = {
    autoConfig: true,
    debug: false,
};

// Initalize Meta Pixel
export const initFacebookPixel = () => {
    ReactPixel.init("1610231932942175", options);
    ReactPixel.pageView();
};

export const trackEvent = (eventName, data = {}) => {
    ReactPixel.track(eventName, data);
};