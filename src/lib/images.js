const CDN = 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw'

/** @param {string} id @param {string} alt */
const photo = (id, alt) => ({
  src: `${CDN}/${id}/public`,
  alt,
})

export const clubLogo = photo(
  '867c304b-a51e-4c33-68e4-00c74a2d2300',
  'Richmond Area RC Flying Club logo',
)

export const siteImages = {
  hero: photo(
    'f18adeca-84c4-4cd6-fc5e-269dbcb3b600',
    'White and red Extreme Flight Edge 540T RC stunt plane performing low flight over the flying field',
  ),
  fieldSign: photo(
    '20e73b3c-f875-4c70-e4b3-0c6d85d26e00',
    'Sign for Richmond R/C Field for model aircraft flying, set against trees',
  ),
  fieldOverview: photo(
    'c8375642-052e-4d73-4866-40bc8eff5e00',
    'RC pilots and model airplanes at wooden workbenches on the RARC flying field',
  ),
  communityGroup: photo(
    '25e4b698-0d32-401f-894d-f907c846c300',
    'Club members gathered around a large red, white, and blue RC biplane on the field',
  ),
  fieldPanorama: photo(
    'e42e946b-d29b-416b-1215-da8c2f910d00',
    'Two red and white RC airplanes flying over the field with trees in the background',
  ),
}

/** Photos used for the hero crossfade rotation. */
export const heroSlides = [
  siteImages.hero,
  siteImages.fieldPanorama,
  photo(
    'bdb2eabf-b56d-4c91-c375-9482578b6a00',
    'RC airplane in flight at the Richmond Area RC flying field',
  ),
  photo(
    '2deb1be2-3f6e-4dba-e93d-e51cc0df6000',
    'Blue and yellow and patriotic RC airplanes flying over the RARC field',
  ),
]

export const highlightPhotos = [
  photo(
    'd1a89d05-d014-462e-58b9-2880d9d24000',
    'Futura RC jet model on a stand at the flying field',
  ),
  photo(
    '96153c78-692d-4e3e-4abf-280eec55a000',
    'Pilot watching a red, white, and blue RC biplane on the field',
  ),
  siteImages.fieldSign,
]

export const aboutPhotos = [
  photo(
    '0b53ebcd-d8dc-4aa8-3b75-a2b32d1db500',
    'Two members working on a red and white RC model airplane at a picnic table',
  ),
  photo(
    'a115fae4-89b6-40ca-8b68-d8941095bc00',
    'Member preparing a small white and red RC airplane at a field workbench',
  ),
  photo(
    '2754b791-82f2-4c73-7351-c37b79e18500',
    'Vintage WWI-era biplane RC model in flight against a clear sky',
  ),
  photo(
    'b86ee73e-658b-45d9-aba1-80c6c2998a00',
    'Blue and white Wright Stik RC model airplane in flight',
  ),
]

/** All club-provided photos for the gallery grid. */
export const galleryPhotos = [
  siteImages.hero,
  photo(
    'bdb2eabf-b56d-4c91-c375-9482578b6a00',
    'RC airplane in flight at the Richmond Area RC flying field',
  ),
  photo(
    '561747f8-beb2-4391-5b14-50a923b17300',
    'Model aircraft flying over the RARC field on a clear day',
  ),
  photo(
    '7ec8cad8-74ff-4b23-f65f-0fa471b79400',
    'RC pilots preparing aircraft under a canopy at the flying field',
  ),
  photo(
    '8a77b8e7-6fcb-4801-f0cb-7ea42d9a4200',
    'Scale RC airplane in flight above the club field',
  ),
  photo(
    'a20fb75c-91eb-4d48-5f87-8b3eb72b4d00',
    'Single-engine RC model airplane in flight against an overcast sky',
  ),
  siteImages.fieldSign,
  photo(
    '2754b791-82f2-4c73-7351-c37b79e18500',
    'Vintage WWI-era biplane RC model in flight against a clear sky',
  ),
  photo(
    'd1a89d05-d014-462e-58b9-2880d9d24000',
    'Futura RC jet model on a stand at the flying field',
  ),
  siteImages.fieldOverview,
  photo(
    'b86ee73e-658b-45d9-aba1-80c6c2998a00',
    'Blue and white Wright Stik RC model airplane in flight',
  ),
  photo(
    '0b53ebcd-d8dc-4aa8-3b75-a2b32d1db500',
    'Two members working on a red and white RC model airplane at a picnic table',
  ),
  photo(
    '4e83aee8-b2b4-4cf8-cf46-1ee3cf2efe00',
    'Grey military-style RC fighter and high-wing plane on the RARC field',
  ),
  photo(
    '4403dca4-fb10-4be6-a6a7-15dacf719c00',
    'Red and white RC biplane resting on the airfield',
  ),
  photo(
    '96153c78-692d-4e3e-4abf-280eec55a000',
    'Pilot watching a red, white, and blue RC biplane on the field',
  ),
  siteImages.fieldPanorama,
  siteImages.communityGroup,
  photo(
    'a115fae4-89b6-40ca-8b68-d8941095bc00',
    'Member preparing a small white and red RC airplane at a field workbench',
  ),
  photo(
    '2deb1be2-3f6e-4dba-e93d-e51cc0df6000',
    'Blue and yellow and patriotic RC airplanes flying over the RARC field',
  ),
]

export const joinPhoto = siteImages.fieldOverview

export const fieldPhotos = [siteImages.fieldSign, siteImages.fieldOverview, siteImages.fieldPanorama]

/** One photo per gallery event card. */
export const galleryEventPhotos = [
  siteImages.communityGroup,
  photo(
    '7ec8cad8-74ff-4b23-f65f-0fa471b79400',
    'Club gathering under a canopy at the flying field',
  ),
  siteImages.fieldPanorama,
  siteImages.hero,
  photo(
    '4403dca4-fb10-4be6-a6a7-15dacf719c00',
    'Red and white RC biplane on the field on a perfect flying day',
  ),
  photo(
    '2deb1be2-3f6e-4dba-e93d-e51cc0df6000',
    'Two RC airplanes in flight over the RARC field',
  ),
  photo(
    'a115fae4-89b6-40ca-8b68-d8941095bc00',
    'Pilot preparing an RC airplane for flight',
  ),
  photo(
    '0b53ebcd-d8dc-4aa8-3b75-a2b32d1db500',
    'Members working on model aircraft at the swap meet',
  ),
  photo(
    '96153c78-692d-4e3e-4abf-280eec55a000',
    'Pilot and RC biplane on a calm Easter Sunday at the field',
  ),
]
