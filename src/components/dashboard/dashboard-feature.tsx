/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "XGD3asEHAGxnBgsxUXvRR1JufUB2XMNzXVAyj25SLrM9gWStTCStzvDm6wHjT4GSLvBs2yW8d3FkP9TwKBffovz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RQYHHHpXjcoFnS95FiePNHpuwyaAachDyUwozQVti7PdxFW8RKtzuQAsZCd64mZkNHqLv6yt9qeScg5efzLs1d3",
  "key1": "4B6qtjiCFg3QjA4ZZBVYm1jR1JhqvvpsxpF35V9GKfGBnfzCL4bGhcwNT7uvk2ti2mEs9QEAnr429toWNmjJdhns",
  "key2": "3nMN5ahgfuuDiGPTswc9Q23BmYg73Ei1XKQibBu5cJhUoaaudxfv1J9HPyEYvx8sX16U2hNWq4gTpuCPMosLix3y",
  "key3": "2994SqSpFR9a84LYkcH8zf8V58oB3R1oETgTtghreDcc35RzQjSsLqQMUMgy6CutP7gXWc8i84krTLGfznAmdbJ7",
  "key4": "2wRXaCDj2wtCZMBZ9muW5UBJzD2bY14m2yyLLZsXrjGuyhcCboDoAUPDkMPXwLWpXdKoC1XLtt8dNMUyu4qfeF3G",
  "key5": "3mrJB6RjnpBcyzvrzBDSii5vWCTDxJuVZZU4E3xEh2yjPBL7ZzzxNg1Ttu5K1Fwihs7wWYSfZPFCXrk3KQ5YPkVr",
  "key6": "3mbDSpfN316G8MRWzcth1jVHBppGkns3kFKZRgHW3ZdPHte9ZrXse14bsproqJSdLD5dWzgc8JxGNMFxwP5yQKh9",
  "key7": "1E43HNvw7SPeJ2eQcLSy5BzyC5jiHH8FtNsQwBNaK6EHhEt1u6yfDkieLHq4fX7uFJLLPzpx4vwVy1jmTL241o9",
  "key8": "5qYFCH4danzRZj62H8zfZYBBE6VZky5Y71Z2feTBhpZUe4wiQm5f3DmdmQVY1hyj32FhJvYKmEwUeo9mAN96JQKW",
  "key9": "4QBLjhykexwWJYwtGcBbTj86DtsQRoNQ3ZtiBsCUuQwU9zGc4qjurnRUqiKM8R3BrnyHV9aBkpd2Qxqc7KLvVKk6",
  "key10": "5LtNFAV1pgpLocAM6s7u7THBak56mHDXehsujDNBkGHHfkDLGS6e2VuejtGyf1FpUduTMAfpuMdkLxzFiVn1VaU8",
  "key11": "2vJVg6oFyTBCpkeSCzRq2mXKPfRUdCMrwY5VNdk5kwFr5pcorrD7ba877kzxHxBP3WmuBRszpV5woY9A6ogpsaDz",
  "key12": "4BEdYwjWwnw8PDaMLyRjzRJjouusJMMpX42WGoSDo86QrxjQDHRP6ymU2EwjWQHbWQrW8zJ1DSFGcUqTCcXrFpQi",
  "key13": "Rhnh7kinWvSxa9QVRHWJu7T4kuiBzssCWt24UYAzL5Zdzx6pw4bNKVrxUHRSozFit7r6V13Xaqt4r2Q2UKwuuam",
  "key14": "3B5YUd4y84Ax8CNH3TgTh9gmy57cq6PZuBtyor3tJ8joQqBFst2pZXBf3C4aDTpnpGRSPNF6cr31RyPSWqCkBe7m",
  "key15": "2YMEmAp6iWkLVx1mv4R6SqSNPqxTafPpCQsxB64qB522kU4a4xSvT5nyd6ZXmnJzAyhfxoWvwkCQpGREZQBsxUZc",
  "key16": "NhKpbRxJsSWrn22gYmEMmg5MgU7yYckCUTPmG3bfdk7gJmNjYmzbsdf3f28xDTyQfQz1bXBogaj3MMqEAi8toZA",
  "key17": "2mHPuZfhf4MWMGcSCbcjetUhpR1Mey3KXr8CuunRN4ov4qrL3c6tkdkgMc1su5RmYwMcQ8r77gDJGo9R56bsfHji",
  "key18": "2TuQ3LcaHVnyDAtQ4pmoKhWqGgdS1CKWs2762AK1iDN9LErhrCWspyXj48xtQR9ZJ7eBXF71ESANSb2pJzNSYcFg",
  "key19": "nixhbUvad114gcLUW7fr38yEeJkL38v6YTwStm2Fr3SpjWaTryb2Ntj8UNMtC8WkPvfovBmEWEAfxVNKPDUG739",
  "key20": "3Ri2Rst1fCLHgpw7F1MSLWo4C9wEWwxbYofRWFNp1iQY82gE9WzEVUcWuK9vZweU849Xtz4FtT82oGaZuyPZxtLd",
  "key21": "2tqiy7rU9NW2gdDiSef7TbTz79DgA6en25YX1fgs2d3ZGCpjYupJuW8y2AeFFTWCbjVrD5UfhLzWJ6UXTabCnPrh",
  "key22": "3dCvzftKXg5c7LmZ7HQDuXFYu6FSiHj7TzLMrUdogzjRu2bShJjz82rNNiz7FbGjpe2yRxwXhrGAvuHCubhhN5pn",
  "key23": "PonXoJYyaNwMF5xdzGVM4UWB9HgZAAWDbCnZ2bXQqv97qbCWTEvYgQDwk6Af2sHJTpmRkrw8VWreX1a7U9SVHqj",
  "key24": "4r4r2GYGqsqk374SZq6zrBcejoiKqDsHJpbxvqtpYxdimKdwWCh2f8LfjtXh7eNT3N3GBSvdTqNRjPcKXycRykXy",
  "key25": "2dAz69z5TD7RQQJeeUN2KQfeWaZsGpqidiNTvGbvvbLM64h8WTXWvEkVT2JCkXgub3tqbqGupgKzqLpvPAsJ5eki",
  "key26": "5vt1UDoxtCLD9SJ2BN49w2MB8kAFgnxizqEWRW5ES6cA5uoY9nondvN9Nb7Sq6msShtTiLkv9EAHedt5U9BKMS5R",
  "key27": "4uhpczAXRXreUF82BZbmadsvE3UuqfWZH7MAXcXT7jNBnKXzNRmXuDhBLLYronyTFzHnjsH2vLkL5NeCKPmRWXQ1",
  "key28": "4pZeqDEvzdrJieULfoFz7qUaMsTd8sE5Xz5WHdpNe5SbZqx44Z6YTmiEQL6Fz7DxgFLp9tMg9X7dmEgVEL4fsNBr",
  "key29": "4A77on7L9XE4vTcFLeUn6csEKUQfiFz4XpSqk8ja6ZxFxVTnqsHeEV3bfVctHNg7KwAkgKqXxcGsC5de5GhL79AJ",
  "key30": "2ocxxiXMuA3C3efY9TbeBkAujJe3guuWUZGReBRAwWuBDkDfVz1gJkRtoGkQo3JHH4A97HyNrAFhFa8wdFXNHM3f",
  "key31": "4wzkJjErFBT4NS5pHs6tvVZGgtDSoPprycLQJsDjn7zJ2rTRMykLbEu5188M9novDhx7agjHoFHTNPTwTwuxGKjG",
  "key32": "Tsnr84R6P5ddxVKrR2p4sZr3VcAZEqx6cfP3wDvG1RMgvAkk3WMSsR2BSsXmmr5Vc6nT1PBs9mzJdENqDvRNHvk",
  "key33": "4WBNXsHSNxgYaVCwJj5uCDEmmDtbYioZzHMVztJ4tbRF2zuDgHzvY5fMMeRevs6UgPfQpwS49b4aP5LPgaMhGAYX",
  "key34": "4GMAXgK8qy2ySCeQtrv6dT54R99xRLUssfgfnotEimzcwtf2sypGdZ64ZMT8jEBoFTVQvC5DPnVXypnufaNZZUB8",
  "key35": "5k2BfpHAPWJquXx8HzXjoMJfBtueH25fWmJbXzCxEc72W5pS6nVz7SxR2i7NtDHFa6sS8MbDQsiWYTgmJHL8YGiQ",
  "key36": "3tdHtaAaWdwTGs3ijxrcSUWA4cyUTyhmiQTSuALbViz4NP8F1GUmvAyAu5JPELw6swUrgiSaWkhWemsxBuvWTiB8",
  "key37": "4yPHyK1xjCuv8tAAJXme78D2ZGjq9bzuYEvF5WiKUeu9wZNHQWyz224gNFRCnpULt9LF38QYRXVHNnGDmM9N32y1",
  "key38": "4WbMkptJWkeyTpmPnKkUWfaFuDrBfQwzt1e6QVHuoDiRTc4wFUtWGfnw9A6AhWiuAnbMmFDeYUfJU5PgporyRkQw",
  "key39": "5CRRoVgUys53rtxbJM7ySHnkmUypjwwTRhNn2VatUVSVcihhs5wSGSNMhMvMixYohqwC4mVqZPVe7ChjV2TVkofF",
  "key40": "5huzuyJgR7oYq4j9RbVT11mCWcCBMgz7QvnQRx2Tcj2xH2egr1YNUDDDpWcnk2a72Kf3CuN8ts3SMrfAPemn8o3Z",
  "key41": "5jAWajEDsoa6vtfXx7sQjMbAWqq5bbc3EAqQ9FssSknZatw6cZLcHvfMKN7TXF6VxK5Sqv63niEADkQ3ydfmxQk3",
  "key42": "3eQDBu76AKJCEvhiYCCtPrYQDxxAaHU6tneLU3faR73qYFnpwTPuRAEELnvHoZtMrmBLsLJRcQqK7r24KZnMm8dF",
  "key43": "1ENcNdyhgYLgQnyiQ48EYutNop24DZ7t1SJ5fXZSBw3PbDfAvtasB9R4QrR25TjPJGqqUvydyAxKkHLycGPExpV",
  "key44": "4ybV95ZwHRrAZmdT2b61H1xuQTR1qg1LkqHXdPs7LFtTeijTZMdEnEwV3GxgM7VzYuwewnHie1rf3AtxAg6VHs3B",
  "key45": "5PA3feasd7bXdNrVVDKLwgRuFpAmQZgBVr1ntRG5D8RNy2CAFH9SENSMNFq7yFwxbEheeGaeoAhHpo14jEmerojE",
  "key46": "24CH1e3rNzZ5j5AS8TAPuUseKKGG1bFLVKka1JcYfE77mcKbY6KWjTzrihxTXHuBasEUK9HTdwosDwiCvazgpX2T",
  "key47": "4zP8szMPXiMqVeGwvpL4FxeoWpx2g2HL9AfCTQMCe7YYpy6Kyo8M943JnqTE4vi7rx6sCYwUzFBQA8mmNMUhrWMg",
  "key48": "3kQCojeeJWpQGPfBFZ5hFqvD3H9wu8VCMJq4a7euMzEKt5k2GSYtzLvkFbAQarBEJqMi9nL4jWsQzK7ktA18q1zd",
  "key49": "7AmxBQpW2fXDPQHYhwXoHgSQZVRuxkCMMaJBidUGQ2n4gVwaeBn9NGRUQ1KYR9qRZGD5f1eJc8XY68HwBVegBYU"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
