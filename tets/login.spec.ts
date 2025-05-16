import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://stg-app.nexmedis.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/NEXMEDIS/);
});

test('Masuk system ID Organisasi/Perusahaan Invalid', async ({ page }) => {
  await page.goto('https://stg-app.nexmedis.com/');
  await page.type('input[placeholder="ID Organisasi/Perusahaan"]', 'example');

  
  
        // Langkah 2: Mengklik tombol
       await page.click('text="Lanjut"', { timeout: 25000 });
    
       const alert = await page.waitForSelector('h2:has-text("Gagal")', { timeout: 10000 });
      expect(alert).toBeTruthy(); // Assert bahwa elemen alert ada
});

test('Masuk system ID Organisasi/Perusahaan valid', async ({ page }) => {
  await page.goto('https://stg-app.nexmedis.com/');

  // Isi input ID Organisasi/Perusahaan
  await page.fill('input[placeholder="ID Organisasi/Perusahaan"]', 'official_nexmedis');

  // Pastikan tombol "Lanjut" terlihat sebelum klik
  const button = await page.waitForSelector('xpath=//*[@id="app"]/main/main/div[2]/div/form/button', { timeout: 10000 });
   await page.click('text="Lanjut"', { timeout: 25000 });
  expect(button).toBeTruthy();
  expect(await button.isVisible()).toBe(true);
});

test('User masuk dengan email dan password invalid', async ({ page }) => {
  await page.goto('https://stg-app.nexmedis.com/', { timeout: 30000 });

  // Isi input ID Organisasi/Perusahaan
  await page.fill('input[placeholder="ID Organisasi/Perusahaan"]', 'official_nexmedis');

  // Pastikan tombol "Lanjut" terlihat sebelum klik
 await page.click('text="Lanjut"', { timeout: 25000 });

   await page.fill('input[placeholder="Email atau Nomor Handphone"]', 'example@gmail.com',{ timeout: 30000 });
   await page.fill('input[placeholder="Password"]', 'example',{ timeout: 30000 });
      // Langkah 2: Mengklik tombol
    await page.click('text="Login"', { timeout: 25000 });

});


test('User masuk dengan email dan password valid', async ({ page }) => {
  await page.goto('https://stg-app.nexmedis.com/', { timeout: 30000 });

  // Isi input ID Organisasi/Perusahaan
  await page.fill('input[placeholder="ID Organisasi/Perusahaan"]', 'official_nexmedis');

  // Pastikan tombol "Lanjut" terlihat sebelum klik
   await page.click('text="Lanjut"', { timeout: 25000 });

   await page.fill('input[placeholder="Email atau Nomor Handphone"]', 'suprajal-qa@nexmedis.com',{ timeout: 30000 });
   await page.fill('input[placeholder="Password"]', 'password1234',{ timeout: 30000 });
      // Langkah 2: Mengklik tombol
    await page.click('text="Login"', { timeout: 25000 });
    




});
