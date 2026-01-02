// ساده‌شده: بارگذاری products.json از مسیر src/data/products.json
export async function loadProducts() {
  try {
    const res = await fetch('/src/data/products.json')
    if (!res.ok) throw new Error('failed to load products.json')
    const data = await res.json()
    return data.products || []
  } catch (err) {
    console.error('Error loading products data:', err)
    return []
  }
}