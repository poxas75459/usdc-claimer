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
    "3avMFXWbgeQ7oynT3V1MFghgiXUs5gA9rkYbXkgaMTPm8zsfziWnE9KF3BkLNcP68MM4s1Ykz8NyWeU7hb5LzFLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LgJHjaVWpfzE2CTigpMCsEpkuSp9Kxqi58ZcXyT71g7fxbKcnHbxnufVw3HUjduEGNzR3gyUBwQw98U3M6NWnzh",
  "key1": "6QZgRTKMFREazYiwzTuj1ztWPkVTBBv1cooq8bgpfLc99x2sDMRMqKMFuFa5W1zTjHEThaXh64TnzPxcUWRFZRD",
  "key2": "2nkEjTT4GhWbSFM8WuZYJZJpm4BpZ2BK6UBukFce9iGmrrSsJGgf1Tz1DExAzd1TamjftEEJPrTZWzZ9uQtCtDMD",
  "key3": "2CKheA31uMLJwcWrXR9RSPNkDu3ggT7kbo3vc4w2dWSDs3MYeQgHRw7FUve9h717u2eHtYSdBsB3tnLoeTzRCHDQ",
  "key4": "43u6iiiiqgRDo4DNGpVkCFCELnEw5G2ZgtwKuM3wEewYqCMmj33QUw7pDWmnWKvCWQLM18vWASXp6i42L2RDBZzF",
  "key5": "4UXPZ9eMLuPm1AnGVur7yBCAxasX2nSSVjNZSMLjkWZ6PNzM2s7FebMNDEX8ijBmtz44MJzKzgvqrspGkBhK3jrZ",
  "key6": "2FTJukPn3McPKAmQB2Mqdba6XdmmuotYfQFfWgYcXX11uxSRvb6fAwLSWtvaLiu9cvK1xo3RDrMJeHGucJy119qg",
  "key7": "3iQ3K6QXdZjw9b7aewrBvpwjVTGCW1HryCrzSejeAZ9fEQuYVDW2cM73dP7EF3mQ3tcnB5kfQwjWnoqXDkPQAuL6",
  "key8": "2qezD9L9sjSsqEiNEsxtmubib7gmdqA2uA2sW7cLzGAPpAExTiJpLVc7RaZ8kaDEdK5qKyJdfZKfBcJsWvG2LCvd",
  "key9": "5cKtoCn4VwkcGofgNgwC1TPnjXoWLrPg4eeMzxaXwGB46VPyqfTPvw27Lx7QoUXZiZF9MAYJ2CyaemD5TCCEasM5",
  "key10": "4dSABqo682Hw7222tZsPWZmy8fkPTWaLgV3K8u8YtYDAzL79Dr6cjagqTEXZNG4fKQBzfYygFiKeAHDx58ymMPx2",
  "key11": "ZsWUGWwEiwAs8MWC3m1NHZy2QwKKMEn2gNYzL7VxPLqeqh9hJ1CosVALWu9HSpfyXF1izZr8t8wsC5XQovvhwwS",
  "key12": "YJaSagYcXGkQ4S3WCH76c9CpY1eVcnouMCS7dm2Etead8r4rLx6MPMebvGx6vGDVyBNohVK9ERBULcvP5iXB69L",
  "key13": "2bANqiiSicdsogPy9ZixwssWjaboGjRXMMnhFCBLFUaXqY1ptp7pyBcnWbZCHShePQaSiXsSge6fKG4pN1uKfzv9",
  "key14": "5L5GDRo53QWFmTrVSkU9ivMobczYUqFZt5AMHYSSoqcdLWab24uBtsGHHMmzmutKvwLYxGQSk24r5McBbthWqN4Z",
  "key15": "5Ru26bPgLLqfK5J44AcMeDzJ7vwBMX4TAP4eNfQAjppQPqGdYb6nUywZjFcwXkrAaqq3inEfuWJavCsVTvSbpDkW",
  "key16": "NPwcMCoahrLWgNEwM44RaGiyqFUgTcEeLaXtnnBCmdCVGaYGS3RDadvP71ZMFgZnJFwePseLLiNY14NCVTa4E4i",
  "key17": "5jtBBJmVhahbVSyK86JWLewz8fCDADU6k9JT7qSayZnE6Ji1iKScpg6gYbhEkBzr5gq3aSSRHdnit7Rj5DFE5DEz",
  "key18": "4fJvtxMiQnPevxbXyZB6yVoJGm6k4bKnFUtx1y6ghEihaVQU1KZ3M1mMCdkbp338V2x5ZwPeAzBiW4BVPYryxUAu",
  "key19": "32cvv64Jky9GA9q5wAMk3fQx6rFhxmFyTmM6KMMWMF8YmqcPfTZUW3cR3XBBuqqjbERpoL917YNdY2gFmwQLfm9V",
  "key20": "51cFL9shdwfc6vqsp3wqqLXuSYoEuaxozrZ9P6jUWBgU5TGyd4cA6NtVJMm3kpLULH8s2NKX2in9GUKCGX3SgjcG",
  "key21": "5kAQddyHg9vdSNTZiT8AHjx48JwCPfk13V7cJNBvgBu8w1ikDZJqcZGQu556Mzp7G1XwNaRrrScSBUwM9kqocqkS",
  "key22": "HszwNp4MEaKirmNE11tpbJV2ACk66z48oYCh2obVx7GL3CmKtxGqzPgh31ZpKHYo9mwchrbwDHCNr9gZ6crr4Gp",
  "key23": "WLr4agE3Qpo3eJUHsxJkj12v6To6U4EvKcSjgLxFF8itrbexQPC1SPSj7aqck9Qv4CrCvaDGyiX2tQijpdRwRWD",
  "key24": "5ySAUK3h2B46Lo4dWtbD5uifiAR4UU39f28QUSDoidHZspfb19GJW1bALzccJjLomeipe7Yvohz4ioowS9byoWKp",
  "key25": "kASmESujrGttLV1TNsBrRhQb4sc3EnoW5dmdQ3WDKzZaStL2kMNsfj3XyGDqHGVKd2kfm6fiFru9MLceNxzyDke",
  "key26": "5LeYo3XuT3K4YzgSvBGoqieKg9szwm9zu9pZnHFBX6PK54iTc6ZkktJwbFCKXG7tRnm4PT3H5M9e7VbhfVwoV8rv",
  "key27": "WArDtcMuyvcL2ds3p3bQyvr79wudUqob4wFhM4TF4zgLgjm7KHS5H7hq8V8w3qK4JZGtMMdjoiCpYqwx6fnTTWS",
  "key28": "K28dBemLcxR63MxQSCspuDpjL1FTKaHFZd4wrk5iRAET5KxdPn8PzSpzsrPUUfz2LnjoRJd8UMxToDMp2be7GgJ",
  "key29": "4v8v3Rp8dFsArzgJM9QWuWVUrcbsdcNfSZRzwG2woppJ1Y8CDqBvxc9NZbKJytZRbx96N9Bn5963oHMEuXhnwsjf",
  "key30": "3dcu4PLC94jaFwqYQR2DFHG2YoSn1vNSCiqiHN8dbPzkdjsZh87xWDodcGdHz8LrU8kEKHY6mWuxBZitLUab544v",
  "key31": "t1qW8rfrWAwHowghSwdLYQvh4KMV3RRyvEUsU4L2fj2jU9RoGrzosfTbJ7QqVQaNAVQeBGPe4PDwDXP1QZRQyBu",
  "key32": "GDev4UYdfU5WyqZ3ifLp1XGqe6zmfy1L3gQ3AxiN3ysVCXmBu7sEffBiT2m1ShnYb9eYofYURNsBgntjtwm15jD",
  "key33": "3hhR1XmCgJM3aV6E77MKzBkbP3oo2dMhZh8xBWeVRNirbfFgtdjnnsXZi38ZewXQTzAUaQESLYsXEQakt22pFtjM",
  "key34": "4L7ijDZ9gXBiG5CCU9mFMahkgQHrvPq91Ef7ubQRTTsXvZfEiCrnTQ12teT7paB9szMDDQeKeXVMoT7uALtqmk3N",
  "key35": "MjqcdpAvNbRccUjoSmvACouXwTvB9UJVAECDbbxc7hbPSgHC9tVcEUZPtpwoz8jTjew7D7dg5cRQmFrvvNSLLbp",
  "key36": "63i8z5XFD9qkfL39UW91onF45KNeZQmSo7uyK6sAWwDFQ9C5BEWGQiQJQEn18k5qyDFH94H97D9EWZGKCB7MepZM",
  "key37": "BjbJPPmV72Hy4XjeLFiVwm8m6QXhpjnmB996d8hmnibCNQaTVRhdmijkjGnp7ais3TaAiHAJKhVkge2j2fxHsKk",
  "key38": "2WTDSQXCqeQorDzJkXLqjmzQZvMyE3P9ctye4N4Vkgfej66xyp3SwoCsgpC7ZTaScnPovyhGR5LADNY3E2Wj6wTR",
  "key39": "Ai2f6CbRjE3YkSirzXQYgNjyCbtLFps14HiAdbxxEi2r9V8u9SNDdecvztqavjbn3APiDrRxttVv3nnnSkCHGUs",
  "key40": "3niG7UcrhEei1qbwxp3c717mEK4MSkfTVQggzm6C76AAKmrZVPaeJURrkR9mfdYeCViEqzNC6obHdS1BUKZVpeuR",
  "key41": "5MkLJugdoyGxWzaMbXXAFC4ZxKRNP2ToBcSDSYuKU6KsbFNan7EJS3hM4kKE7dYUqnNzTZpRm9VCj3tVxN7Hb3zG",
  "key42": "41MBvUrSu7qva371xaPG9FA8fHKxWbsHDUySnwup2FrscSe9oUtwbjn3mKQ3s8D1TeoWeYgXecnzagtMGkhk3YNZ",
  "key43": "3rYp5M2CzSY94QhKGFxKWJg7dzotwJy1LfYTi1m89crY5Wivkb5Ca2XBwQfcW97bryWzjwRWdVBBkbvK4GuUyKwm",
  "key44": "54Ln2SraBdBCyD9XPA3ASHfgGUbnMQvvczhWDixXnMFD5TZ7wKk7J44fj9RAkAmtroFr4p3Pw4qshPkdvKRr4GU"
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
