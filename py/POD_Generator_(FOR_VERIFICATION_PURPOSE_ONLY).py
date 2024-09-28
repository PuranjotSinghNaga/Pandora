import random
import json

pod_types = [
    {"name": f"Pod-{i+1}", "app": f"App-{random.randint(1, 10)}", "users": random.randint(100000, 1000000),
     "cpu": random.randint(1, 8), "memory": f"{random.randint(512, 8192)}Mi"} for i in range(20)
]

def generate_pod_combinations(pods, n_combinations=10):
    combinations = []
    for _ in range(n_combinations):
        combo_size = random.randint(1, len(pods))
        combination = random.sample(pods, combo_size)
        combinations.append(combination)
    return combinations

pod_combinations = generate_pod_combinations(pod_types, n_combinations=5)

print(json.dumps({"pod_types": pod_types, "pod_combinations": pod_combinations}, indent=2))
