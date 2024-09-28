# Function to check thresholds and trigger alerts
def check_thresholds(metrics):
    alerts = []
    
    # Check if the CPU usage exceeds the threshold
    if metrics['cpu_usage'] > 85:
        alerts.append("High CPU Usage Alert!")
    
    # Check if the memory usage exceeds the threshold
    if metrics['memory_usage'] > 80:
        alerts.append("High Memory Usage Alert!")
    
    # Check if the error rate exceeds the threshold
    if metrics['error_rate'] > 5:
        alerts.append("High Error Rate Alert!")
    
    # Check if the traffic exceeds the threshold
    if metrics['traffic'] > 1000:
        alerts.append("High Traffic Alert!")

    # Trigger alerts
    if alerts:
        for alert in alerts:
            print(alert)  # Replace this with actual email/SMS/Slack notifications
            # Example for email:
            # send_email(alert)
            # Example for SMS:
            # send_sms(alert)
            # Example for Slack:
            # send_slack_message(alert)
    else:
        print("All systems are normal.")
    
    return alerts

# Sample metrics data
metrics = {
    'cpu_usage': 90,         # CPU usage percentage
    'memory_usage': 75,      # Memory usage percentage
    'error_rate': 3,         # Error rate percentage
    'traffic': 1500          # Number of concurrent users or traffic
}

# Check for any alerts
check_thresholds(metrics)
