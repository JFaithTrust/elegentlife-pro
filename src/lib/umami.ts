import umami from '@umami/node';

umami.init({
    websiteId: '7bad4ef7-5477-4ae4-b555-b334413c1242', // Your website id
    hostUrl: 'https://cloud.umami.is', // URL to your Umami instance
});

export const umamiTrackCheckoutSuccessEvent = async (payload: {
    [key: string]: string | number | Date
}) => {
    await umami.track('checkout_success', payload);
}