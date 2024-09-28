import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Step 1: Generate sample log data simulating errors and traffic
np.random.seed(42)  # For reproducibility
dates = pd.date_range(start='2023-09-01', periods=100, freq='D')

# Simulate normal traffic data and error counts
traffic_data = np.random.poisson(lam=200, size=len(dates))  # Normal traffic
error_data = np.random.poisson(lam=5, size=len(dates))  # Base errors

# Introduce some anomalies in traffic and errors
error_data[10] += 25  # Spike in errors
error_data[50] += 15  # Another spike
traffic_data[20] += 1000  # Spike in traffic
traffic_data[80] += 800  # Another spike

# Create DataFrame
df = pd.DataFrame({
    'date': dates,
    'errors': error_data,
    'traffic': traffic_data,
})

df.set_index('date', inplace=True)

# Step 2: Calculate rolling mean and standard deviation for errors and traffic
window_size = 7  # 7-day rolling window
df['error_rolling_mean'] = df['errors'].rolling(window=window_size).mean()
df['error_rolling_std'] = df['errors'].rolling(window=window_size).std()

df['traffic_rolling_mean'] = df['traffic'].rolling(window=window_size).mean()
df['traffic_rolling_std'] = df['traffic'].rolling(window=window_size).std()

# Step 3: Define anomalies for errors and traffic
threshold = 2  # Number of standard deviations
df['error_anomaly'] = (df['errors'] > df['error_rolling_mean'] + threshold * df['error_rolling_std'])
df['traffic_anomaly'] = (df['traffic'] > df['traffic_rolling_mean'] + threshold * df['traffic_rolling_std'])

# Step 4: Visualization
plt.figure(figsize=(14, 14))

# Plot Error Counts
plt.subplot(2, 1, 1)
plt.plot(df.index, df['errors'], label='Error Count', color='blue', marker='o', markersize=3)
plt.plot(df.index, df['error_rolling_mean'], label='Rolling Mean Errors', color='orange', linewidth=2)
plt.fill_between(df.index, df['error_rolling_mean'] - threshold * df['error_rolling_std'], 
                 df['error_rolling_mean'] + threshold * df['error_rolling_std'], color='lightgray', alpha=0.5, label='Threshold')

# Highlight error anomalies
plt.scatter(df.index[df['error_anomaly']], df['errors'][df['error_anomaly']], color='red', label='Error Anomalies', zorder=5)
plt.title('Error Log Anomaly Detection')
plt.xlabel('Date')
plt.ylabel('Error Count')
plt.xticks(rotation=45)
plt.legend()
plt.grid()

# Plot Traffic Counts
plt.subplot(2, 1, 2)
plt.plot(df.index, df['traffic'], label='Traffic Count', color='green', marker='o', markersize=3)
plt.plot(df.index, df['traffic_rolling_mean'], label='Rolling Mean Traffic', color='orange', linewidth=2)
plt.fill_between(df.index, df['traffic_rolling_mean'] - threshold * df['traffic_rolling_std'], 
                 df['traffic_rolling_mean'] + threshold * df['traffic_rolling_std'], color='lightgray', alpha=0.5, label='Threshold')

# Highlight traffic anomalies
plt.scatter(df.index[df['traffic_anomaly']], df['traffic'][df['traffic_anomaly']], color='red', label='Traffic Anomalies', zorder=5)
plt.title('Traffic Log Anomaly Detection')
plt.xlabel('Date')
plt.ylabel('Traffic Count')
plt.xticks(rotation=45)
plt.legend()
plt.grid()

# Show the plot
plt.tight_layout()
plt.show()

