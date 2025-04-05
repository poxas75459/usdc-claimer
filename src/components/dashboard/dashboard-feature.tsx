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
    "2rcYkX3mg5EshNxFUJUrmtrCsdESFkfe2e7P18EPCHDSp46Ujgdm7z61wFP8yGk9fsMxFNV3bn1R6iTArjhCxB7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uBmhKvFCwUt9A2PJTmkhjaDcwthdpdeinhFQ5f9dDYFWMXYd9AxMq5oN9sysBf3xdqMASWaic19w1JR23C3vYqi",
  "key1": "5b782fEoM5tkVKwtvykwxDQLUfsdrPD1pf5rviZvvin4NJ7LotBjeufU5B57R8JNxffNGLRfxuuU7G3PVcDykWMf",
  "key2": "54Aa7kcYHPTjkh9XKHiB2Busarx4r4LNguSvyk3C34x686wgBVeWL1TiCGJ5cirbggtDD6Hjw5w1zMJLvs7Qvw8U",
  "key3": "29bjqUjgb4R24qK4uJjc5mrfRLN3dhWNzZdeDmKQY4MHeCJFtdcUAWD8ah8s2bYZtGMP4hT8oK3bs8hKE21gCorV",
  "key4": "T1bpCRSAxwEVYBe1HkALhqiRX74qXNVq4PArqVDejB92DjFWGqqQiPRz9Lp4vYGMAnhDDPrY78L7FYPS3nRF9yt",
  "key5": "5wS4TBoEAe3zNxtYvW98Vs4xmAruqKRRUGkdTaWfNYwycNf45ntUEMvhYLnTh5QovXowR8WwW7HxGU2AocvmwKXo",
  "key6": "3FdH8JVMmoFjdWG2SoV48unerJUYPmn5qTeQr9sVggukHYG55G8qtrFvUZ4pdxQgHrVcRyvuYzBWph3tS8wvpHYf",
  "key7": "2Ar9ciALk1bpsH87L41KC4Smj5qFpk6M93bdMAXn3LmTk6P8dkGEebmxrCc5LijtZouENudfH1uswN1SBruds8hH",
  "key8": "5SV28ZmmQ1wA2qsKBRo4Dwjgv1twSzpa1gmG9WyNHxvpV8JmqbdaD1QbcJraeuaXm1bcqdLsRSHdYBnzo5M8tdg5",
  "key9": "aLUG6a1cVyuMXX6gE7KGeWBvDaktEt1t3ptLMopeKUikRMiFiXZ87zV7hFFcBoBAyCBCX6S2MzVjtH29UeCiqQH",
  "key10": "42qwbeAbAtQfH21iiSSs7jw1UP16zmNKme6RevSdudBG7a1k3vWXLAj3S9g8xj72JUxBRxhBHnEqf24T58tV6EaU",
  "key11": "4QDkakvhs9DmZTbctTTEoQqQXgNXAEpasyUxzuqY9kPpV2pihRdjGrPMEpTG9ciaVrAwhrgSKRH84nDuxoNxJxQ4",
  "key12": "D7eaxzeVdR12GVqQWyzYZBXPR4rpDKeoGLf6iDRoKUV2AdmW4zvG61FmYTdTJ87tSZ6Skw5TB1EbsAsg8XvtREU",
  "key13": "2Z4wAzkaJX5XeM3E1NhsKM9y9KeCSqLyJq5pV5mjrYddNARzhzAydZniw3tkn7MJsktuXwKKDAauFWdd8rg2NTye",
  "key14": "2td1uuS8rxZHAXowFcigjq1UCeCyJHMpowZAGCyTcqBY1JuwjYPoMaHFxu7GHRnToQ3rF5ie3quxdg3rzoURYDBj",
  "key15": "M5PT5P12H9cdUMf45hLZZEMGaUpRg9HN57NgGfHj56eDrAJ8qzPLm9q13gievkraSivZG58DPC6u6dUcZiHF6GX",
  "key16": "QgnsTkY53gn3ezVyGXfvMR2fWQHjFkpMDW7ryy8pp1Ro3iyZ99E6fR585UBowxpJ6qv8YEwg4QQJHmQPPQ3V6rQ",
  "key17": "51KUzMbvNBqqVipwboa9YzPcEphNo3AwsPfMKU9QybaLLyCtvgxosS6Xx2DfPrA8WmSxxP8aJAvsuwqny8cHe1Mq",
  "key18": "2PUMRd5b4yFepLLD6ywR2o9DjNG1ovLKF3V2k33iUZJyJeAq6BeH7q7dPcf8evJMHKZe5LAprzB6FmkXk5u5Ff2P",
  "key19": "meYYdLj39bfsTSGvhhupbm9y2BY7FDDeKg7jd1eq766zhXr35jLv7EqXWrt354PYKny5rCqKvJZT5asYPeHN2VL",
  "key20": "zkG8Cx1PaGVdZqrQLwm6uj87GATUD4NnVDNPVRaQVDMcjRgT7Mw1bQbXzs1T7yeE1kpEi44X2EtEJKntD7WBVqq",
  "key21": "3FBJapNcyLjJ8oKNJ59Cj43QGpYMYSavYmapo8s9zQMwMswCVvrSJF8AgG9PgwY9kDN5NQvmP4gz9X3oBQgVkkHA",
  "key22": "4955DoKQRd4NgtQaT9wgmHcUhZHV66XEVHGmaKz2XFUhKtH7B1BCGQGG5PoMFhWzZWGthKhYFAwFiHSpkQJn6sL9",
  "key23": "4p6Ets4rdHFjzsQHSyf1u28RvWHtDEqjivfLKZCpS5AgGbL8j8Bcx15KK2ZiRPLb66YNHvFM2fmCAwVBqnqtkz6c",
  "key24": "5t6sGfJvD7yuswHTkhN867Jjq61mvaEYtkpzQWbxPnvyogbBat3yR2V9s65xeJcBHNuoEF3SDic3EuScvjU8u9Hx",
  "key25": "PxRTQ6vvMRPPaME33FBofaX3QfgWCShAGMKQYSef5ySMFK7Q2VqAZJyX7PgFMwkSCmbU3UkuadHHFKQnFwoS9hz",
  "key26": "2qJ1SkLpT7CYCR7y2jXE5DMV4khqvPgANZsGyXgYiSiZUsLCvEB2p3HhWVTUiWbWRQv6bR2nyzCmeRgPATj9yhrc",
  "key27": "5yzAyUr4cupzL6UqHoYnvERt1aavgvYv6456AR85hhRYhJnPKKRy8WbfpWUf5iF6uNZ2TdS52FNfFacCnwcLsWQu",
  "key28": "2DC9ELbm6KFWCbmpBBqysHB63BqB8DpcV84MWSewPG2kVDkN4ERLVqCDxLB4misuTshZtC4SBbHcGszxCLu2M5fP",
  "key29": "2KccEKWxZ7D7SKUDJSizfoVq7A8Hm7yJtDEdVnq7BW5tXnnje38L7LVb4jUW1E8Jce4p1r9MEZNeSMRjqCkSSoLs",
  "key30": "4SwSQX8isoL5JNohHTaJuz6hBzub6Wj7qASzVVRvVZUGZSqrpvVRX7VcVTstQUUzSBSUvDAnQpmVQorDQSLvH98r",
  "key31": "3MCWQ6LGJ8VbznW7S3KDiNvFeS7pnFWoHFQ676vD2G87v3KVybEZkjUSk4maYeZZqKUkkKBsWsEWBAjZz3mGiXTq",
  "key32": "4eZKSQGSiM1dFTnzLLaPfwJJWxFFFfLt3AhVYMTehcgGgoSTV51EXK6JChqdb148q7pp6VjiTuUmmHxeR2QRsVAF",
  "key33": "47uNgbinYkGzyNSVaGBU5NJEuMXhP3FerrQtjFvfU3bTeumvH2h2gycpMxY7oxLRip5aqPEatcPX6yHPrWUqwyDP",
  "key34": "5wJ6KigWELi4WZXL39VtL4Q3w427riv4r5aquEyhte7ZsibMkSyHe38ATEENsCSST9JWr2pLcbXrRSuTj6paQ8So",
  "key35": "ervCXpLMYi9p6SeyjpqNyvZHZj58B8m6v4w4gNS2MwCwHTTfze28Rw1xt22GYcBaMfespKmsQ7Uxifee4RvzhdW",
  "key36": "3oFs6RPQogZPwTeSDkgih2VJJ5rfPAHEcQPxayigQAHyJiyTczsDHbYpVaY8iCn6SWfpYkQUttGzpvyds34zbNtw",
  "key37": "5zpzUazp4pPFGMVpBu5KhLWP5BT7bJKfwqjBz6HyFsjMzBR5SoMgedHmFhPqhyntNqoPG5SHGHX4wN1j13956piN",
  "key38": "5Ktq4BY4fqNn8VWBdHexXu5wJaR8BVZkGPXEuBWFkQCgR1dMiknnbpKJHzBMtbFxAK2virKRDAQR3YnrmzmsHrHP",
  "key39": "ztY8HoYbaCjhWH2ovm2d8WQs3Q8BuujAhkbQnZFWVGzgKDPKyQNuSAn9K9Y44Ti7Fjy5cme81AVFPMoxV2cbNVH",
  "key40": "5KiagLLzju6Cy12xkciCQVaEm8yiX7kWfvv8adoR7kTMn6r7B32YPxPQMibUthLQnPk4qWZwEYgbu8gCopqCxLGZ",
  "key41": "2ufbhNhRuzw2KNJkWrexZDdTS9Q5f3C4giuii7dfBoigEPk558Jitf9SS4XqtuypY3xJS9QmyfYMMfhSuQP84qjS",
  "key42": "5rZprBP4THSnoanSLQGNzvdY2AQwfwrZzWdPiT42SXbCMSz4epTBzGgyN12TREbFDyCJ7tR6QjMjvFuR5mkNJVJM",
  "key43": "5Es2dT6AQnLwjvFSWWzws6ruZYgF7JwrfT1rDxVJUo5fQYFApmExzXZUzwkNiSkTEx1QrVRjWqwdX5hPP5sh3yGM",
  "key44": "VvfdmQcUG6CvzrWgJ2ihmppXeBR1GFY7nAVvrGKi3hyzziQFXPkJq2izoD4A1EXfYw72tSBrpq2bRhhnLR22Z5R",
  "key45": "4FSM5VPmdsjtmNwCK1iv54w7UC5WUkJ3hMRoEVVogcEendDoGTRi5mhJMz3BAyNwALw8x1fhVV3AxT13AAgKDYpq",
  "key46": "2V5jxKfqAf3NZKFuR1uu8tCUoDpP71KA3ib5NJ3JKNovMHf12Bke3MqERuMxv5gLzAhaWXwjcauKacpavGPeS8Ny",
  "key47": "4rcPhYwKtJsDMoMgsycMXeEsjkWMD6qRGaCVZPMwor3K84EcbHNGMbsra8K28nxGDxLt7KTkZQwkzP3JyoDLQg5K",
  "key48": "3Doe2G6wdRWdGSDRn4Ce4HQ4DzqaiZcut2CXUaSmZTLqREhNa8embL8oKUitDFk743739cZtNAMNs1GKjTU1a2Uh",
  "key49": "58T9CPfgirp6urK1ojfogP3psFgrQ1mJygL1wJ5FqB6JcggTUQy7HAUkWVzRmernPi4HedyfFygcM6AVXmqUWdz7"
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
