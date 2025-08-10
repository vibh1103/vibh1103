from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            page.goto("http://localhost:5173", timeout=60000)
            page.wait_for_load_state("networkidle", timeout=60000)

            # Expect the title to be correct
            expect(page).to_have_title("Vibhor Malik - Portfolio")

            # Expect the main heading to be visible
            expect(page.get_by_role("heading", name="Vibhor Malik")).to_be_visible()

            # Take a screenshot
            page.screenshot(path="jules-scratch/verification/verification.png", full_page=True)
            print("Screenshot taken successfully.")
        except Exception as e:
            print(f"An error occurred: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
