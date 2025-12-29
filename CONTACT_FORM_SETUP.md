# Contact Form Setup Guide

Your contact form is now configured to use **Formspree** for sending emails directly from your static GitHub Pages site.

## Setup Steps

### 1. Sign Up for Formspree (FREE)

1. Go to [https://formspree.io](https://formspree.io)
2. Click "Get Started" and create a free account
3. The free plan includes **50 submissions per month**

### 2. Create Your Form

1. After logging in, click "New Form" or "New Project"
2. Give your form a name (e.g., "Portfolio Contact Form")
3. You'll receive a form endpoint that looks like:
   ```
   https://formspree.io/f/YOUR_FORM_ID
   ```

### 3. Update Your Code

Open `src/app/components/contact/contact.component.ts` and replace this line:

```typescript
private formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
```

With your actual Formspree endpoint from step 2.

### 4. Configure Email Settings (in Formspree Dashboard)

1. In your Formspree dashboard, go to your form settings
2. Set the **email address** where you want to receive messages (your email)
3. Optionally customize:
   - Email subject line
   - Autoresponder (send automatic replies to people who contact you)
   - Spam filtering

### 5. Deploy Your Changes

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Add functional contact form with Formspree"
   git push origin main
   ```

2. GitHub Pages will automatically rebuild and deploy your site

### 6. Test Your Form

1. Visit your website
2. Fill out the contact form
3. Submit it
4. Check your email inbox for the message
5. The first submission will require email verification in Formspree

## How It Works

- When a user submits the form, the data is sent to Formspree via HTTP POST
- Formspree processes the submission and sends you an email
- You receive the message in your configured email inbox
- The form shows a success/error message to the user

## Alternative Options

If you want more submissions or different features:

### EmailJS
- **Free tier**: 200 emails/month
- URL: https://www.emailjs.com
- Requires creating email templates

### Web3Forms
- **Free tier**: Unlimited submissions
- URL: https://web3forms.com
- Simple API key setup

### Getform
- **Free tier**: 50 submissions/month
- URL: https://getform.io
- Similar to Formspree

## Troubleshooting

**Form not working?**
- Make sure you replaced `YOUR_FORM_ID` with your actual Formspree ID
- Check browser console for errors
- Verify Formspree endpoint is correct
- Ensure you've verified your email in Formspree

**Not receiving emails?**
- Check spam folder
- Verify email address in Formspree dashboard
- Make sure you confirmed your email with Formspree

**CORS errors?**
- Formspree handles CORS automatically
- Make sure your domain is added in Formspree settings if needed

## Current Implementation Features

✅ Real-time form validation  
✅ Loading state during submission  
✅ Success/error messages  
✅ Email notifications  
✅ Reply-to field (user's email)  
✅ Professional email formatting  
✅ No backend required  
✅ Works on GitHub Pages  

## Security Notes

- Form endpoint is public (this is normal for client-side forms)
- Formspree has built-in spam protection
- Consider adding reCAPTCHA if spam becomes an issue
- Never expose sensitive API keys in client-side code
