/**
 * @openapi
 * /jobs:
 *   get:
 *     tags:
 *       - Jobs
 *     summary: Get list of jobs
 *     responses:
 *       '200':
 *         description: OK
 */
router.get('/jobs', controller.listJobs);

module.exports = router;