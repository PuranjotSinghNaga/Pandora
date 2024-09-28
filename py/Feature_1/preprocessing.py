import re

# Example function to extract CPU and memory usage from logs
def preprocess_logs(log_file):
    with open(log_file, "r") as f:
        logs = f.readlines()

    cpu_usage, memory_usage = 0, 0
    error_rate, traffic = 0, 0
    
    for log in logs:
        # Regex pattern to find CPU and memory usage in log entries
        cpu_match = re.search(r"CPU usage: (\d+)%", log)
        memory_match = re.search(r"Memory usage: (\d+)%", log)
        error_match = re.search(r"Error rate: (\d+)%", log)
        traffic_match = re.search(r"Traffic: (\d+)", log)
        
        if cpu_match:
            cpu_usage += int(cpu_match.group(1))
        if memory_match:
            memory_usage += int(memory_match.group(1))
        if error_match:
            error_rate += int(error_match.group(1))
        if traffic_match:
            traffic += int(traffic_match.group(1))
    
    # Normalize and return as percentages
    metrics = {
        "cpu_usage": cpu_usage / len(logs),
        "memory_usage": memory_usage / len(logs),
        "error_rate": error_rate / len(logs),
        "traffic": traffic / len(logs)
    }
    
    return metrics

# Example preprocessing of logs
log_file = "pod_logs.txt"
metrics = preprocess_logs(log_file)
print(f"Preprocessed Metrics: {metrics}")
