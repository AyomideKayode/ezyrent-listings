from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()
    try:
        page.goto("http://localhost:5173")

        # Wait for the property list to load
        # Use a more specific selector if possible, or wait for text
        print("Waiting for property list...")
        page.wait_for_selector("text=View Details", timeout=10000)

        # Click on the first property card
        print("Clicking property card...")
        # Clicking the first element that contains "View Details" might be the text itself, which is inside the card.
        # The click event bubbles up to the card div.
        page.click("text=View Details >> nth=0")

        # Wait for the modal to appear
        print("Waiting for modal...")
        page.wait_for_selector("text=Book Viewing", timeout=5000)

        # Take a screenshot
        print("Taking screenshot...")
        page.screenshot(path="verification/modal_screenshot.png")
        print("Screenshot saved.")

    except Exception as e:
        print(f"Error: {e}")
        # Take a screenshot anyway if possible to see what's wrong
        try:
            page.screenshot(path="verification/error_screenshot.png")
        except:
            pass
    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)
