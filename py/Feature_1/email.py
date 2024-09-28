import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Replace with your email server details and login credentials
smtp_server = "smtp.gmail.com"
smtp_port = 587
sender_email = "your_email@gmail.com"
sender_password = "your_password"

# Function to send email alert
def send_email_alert(subject, body, recipient_email):
    # Create the email headers and content
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = recipient_email
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'plain'))

    # Setup the SMTP server
    server = smtplib.SMTP(smtp_server, smtp_port)
    server.starttls()  # Secure the connection
    server.login(sender_email, sender_password)  # Login to your email

    # Send the email
    server.sendmail(sender_email, recipient_email, msg.as_string())
    server.quit()
    
    print(f"Email alert sent to {recipient_email}")

# Example usage: Send an email when threshold is exceeded
def check_thresholds_and_alert_email(metrics, recipient_email):
    alerts = []
    
    if metrics['cpu_usage'] > 85:
        alerts.append("High CPU Usage Alert!")
    if metrics['memory_usage'] > 80:
        alerts.append("High Memory Usage Alert!")
    if metrics['error_rate'] > 5:
        alerts.append("High Error Rate Alert!")
    if metrics['traffic'] > 1000:
        alerts.append("High Traffic Alert!")

    if alerts:
        subject = "Threshold Alert"
        body = "\n".join(alerts)
        send_email_alert(subject, body, recipient_email)
    else:
        print("All systems are normal.")

# Example metrics for testing
metrics = {
    'cpu_usage': 90,
    'memory_usage': 75,
    'error_rate': 2,
    'traffic': 1100
}

# Replace with the recipient's email
recipient_email = "recipient_email@example.com"
check_thresholds_and_alert_email(metrics, recipient_email)
