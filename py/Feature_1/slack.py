import requests
import json

# Replace with your Slack webhook URL
slack_webhook_url = 'https://hooks.slack.com/services/your/webhook/url'

# Function to send alert to Slack
def send_slack_alert(message):
    headers = {'Content-Type': 'application/json'}
    payload = {
        "text": message  # Message to be sent to Slack
    }
    
    response = requests.post(slack_webhook_url, data=json.dumps(payload), headers=headers)
    
    if response.status_code == 200:
        print("Slack alert sent successfully")
    else:
        print(f"Failed to send Slack alert: {response.text}")

# Example usage: Send an alert when threshold is exceeded
def check_thresholds_and_alert_slack(metrics):
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
        for alert in alerts:
            send_slack_alert(alert)  # Sending the alert to Slack
    else:
        print("All systems are normal.")

# Example metrics for testing
metrics = {
    'cpu_usage': 90,
    'memory_usage': 75,
    'error_rate': 2,
    'traffic': 1100
}

check_thresholds_and_alert_slack(metrics)
