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
    "c4r7Rgb78fc19WaydFHGMYa5DGTf2Jr95TDRDdJAafEjoGWBwVSQZkrFPwhz9isWj4ZVfJqbQPsqFQc5r3m1ZVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QGVmuLnvpE5mp2VSfHgYA5bTzDip2ymaVDFHj9z7rSojiwjW4epgVNGkwFcqUXqD9vJ5HcZ28K6KiDRj5xfTivc",
  "key1": "EhYUXXuteJAvncQDaFynVgxhKnjFLvhjhebnBRtcDVBevqFv8krYLkW2mUongfhen82F4rzhNza7ARRXAb57m3m",
  "key2": "2NgN9Zk1J4BmTnvjJJhJSN9qby97PqMbpSXE2H4H9gKaV1DWkJRMRiT1KUEE7rdouDb8tjDXXk2hTn3gqZtDy8nq",
  "key3": "5wwXQRRodzeHzi1REkDeAvW8PXxq1KaYfYPJ7Hi576ErDoeCV3eA4jBypGVcMg53EP2FosobBDRqcLzzi88dePLs",
  "key4": "3X5RpNJKvJUyBwKPb7CUvfVT2uFZ7LqNs8Yz7kBaZH5iU18e7zH5kA2za5z4BYNopGYBRro58cRvFTc2yhBmU6Mk",
  "key5": "43A8Jhq1VEunmnGiJhM6MT3Y71K7hyci8FLhN8ytUaFsGDUudQ8uc1cLiBQPNuphSytCmq4q5ecz4he8zigJWuW",
  "key6": "5jCpsqX2Zmx5PwdCNwnxjwd93HZomDoPXtuWMYHwujeH8mhkbkUGUicStd2zWeXbbyJGNYR76vnD8nPL8oDeXSWB",
  "key7": "5RCJh9fwXtPEDp9fCwyBQokXoNU9Fy8VNQZtNDCRRc4s5uoXAiYNzUdwYpqxtbMUzBEUXjVuod5zZ4TXTKhLAdHP",
  "key8": "3P8ePLRmKoQymgjMzYXKz6vVUa7j9tFBQ3mvR3DPt9mfcb9gzSZBk3DJv3742Q76eZbYpDqcEzzJWAoVQFQaKnNg",
  "key9": "4GQEFya9LGPWTuAXA3Nc1d6Fm7NfmgTC7itY44GMgJBhVWCf5Lqk8VBrtWbLsDV9DakudtBEzGyX2it2r45VMdME",
  "key10": "2T5FPZ82iV9yJ6Ab3xwSvpEGQ7GSDM8CQrZfJuRD7LpRJqLmKFZNiU7aJ4rAQLRiYxH7F4jxj9cfFapG9gnC29Sd",
  "key11": "4f4mSXKFFWR9q4Qqti56vLJFXhNBJYLun4Tr6Xs5xbkPLcM3TSk26BMxYqXdKLcQXfAuH8VLPTWymGFtcegmp8H",
  "key12": "3aStE69e35P9MXqi3Dtku4KGKe2eG6NNT7YQQAZTSM4fGqJbHXfSVvtPEU7nHEiDsEdM4BUvesRTcpNMUMEEkZdr",
  "key13": "2YdiQ7b1ZCcPQJ2V5WuCs52fCNbUXd1rCBhuww8bHq8PaCXtCiYXw3fMi2r4hbRhxAZaqAs5NatazVP4X86h3sZp",
  "key14": "3mUSGZhxsYatc74pXJXGjs51xq7G57rGuTGsEcFigu14w6wic3qUrPgH5hTCH1m2GKvsszAemQkZb7qviVXww84S",
  "key15": "5aQshrkpJdnUaDkhYhnEh3SkoSskGgQwWHG1nUk4AC4RmiLLx7cjrTCy5KVV9nwrjHiD1qns8Uq4XKPKndBUFfka",
  "key16": "2EzPjerEuRi2qUU1Xrgd9HWTfTMCpzpCG87D8RUGY85pUfPKYaVotkXebASc5VFqZ2WWcH6CNDt4Y7nWRsRarj62",
  "key17": "3qughASqYdReRFLU7vi5JbFkQ9878pksdVS9CU9aCYNGHYHuBEF8VCHm35jj65i4tJkAcgYYc37HBvd765swwSjx",
  "key18": "4TjhGyZinjLpwNYC8FBy3MQ7ofgUJRyXbwMFNVXYCrUfZxZgpG13QFga1iDpKcyiNTEWs8bG6s1jkwD8UTPerAo9",
  "key19": "5bFtSRyFxEEdNm5A42Y3qw9EhES5rhZVEiMvkV8MYrE2R3dFoaPuD754pMNUY1an3oPvWkNGKbnWM88nFn4sP8Gu",
  "key20": "cKnmeB7i5bUwmjLvzZ3TA6RnmvXzVmUqnG4jHdftvm8SEBgHuNzDgA4RiLERovCrNnd8PJqj2ZQpM427FjbQkHJ",
  "key21": "4qzU9BGUPeCm46SnQpayAwPYsE88x6Ltz7qq1eGtchDgG9nX94ZjX4mKRCtKFQaJhexERGEniigYbLPeq9WLgfEy",
  "key22": "38MqqnD52EAoAxXgpZUgMXDLfezjebKLhxDKNaEjbysWwumHA3MYRFE9ewtRAvWG6f9SKrtUaiYBqwf42vbczvbG",
  "key23": "3aWG6qHCHAEt66Z8cwAdTxooRFy7C4adEDgnpmBZoW6q7dXxSPY1fLiVw4QxjPrFhKRxqD3rNU59sLkQGiuKhnF1",
  "key24": "2rHFUz3uTUmusMeKPoEN1ok4Nd2tkkz4Byd4gYDMVAC3SJryy7CjeGC6zkq3wXkey4DeJRnTrvTZpSy9G2jE8fc2",
  "key25": "55in21sxnwRK8V3pW9v9rp4TTnWsYhnJitg5bZG4XZJgJtjNiWN3ZEb6vpgzKJTCdkSfuirvXafnpvK5PZWEzzG6",
  "key26": "56RdjVShZ7SokTsFFD4cgzneRU6HSzBDpMb8vkj7iF1dPYHTSZ39S3poZQDanWo2bhUuiLBWVsrbjphQi5Aktpi",
  "key27": "2JNF6J3eQLk6vFXp7LMdzaCwHcSGGLqgsvDeQKhqpPvimxR5xquM4pg2uHgb7WXsPJn861en8HN36QLiP4T8Kf8c",
  "key28": "guKw6bCM1grrN4XRHrMTgdSxgUwSaRJiH83p9DaEjcyLuKup6fSUCCz5e8efp6bo82Lgm448eed7Z27ibqf5LB3",
  "key29": "4wj2picVmfNgMyNpMRTYQckztfFvkQ89SQAGq28bR41Rr9Si6jmjS5YBAh2DTbv4Pv79yzpDTcUtrXDSoVZ2gLgF",
  "key30": "4htPHBEcDBgkj4wfuRszbiVJvQQQp1zgdEWTWZgpJrit915CtKj6TJ7FFR4jnauE6quW9i1pqApqW5JjXVGsNtsk",
  "key31": "66FmiYZB7BAAXepsoXRDGd3Tg8Rrh3qJBDdaTNmB2eQXqUDCSVxJ7NAmnaELhhTZMhjRiCx7ETDM4FzwztKfeeLR",
  "key32": "Y5bQMkdjhqT9ucixTtUJruH1QvQxybvbxRmTmdfLHPueSNVqvozbFoWz1TdRiyb8z5GQGmvfxACMAcYBQ354Gfw",
  "key33": "5Ehiz5fidsYVmGCgfaNRt9ngMQMyZ1hPSbhaZ3suHwJrvcyr8GSpFCvmxhzjeaAn1hH2NemUjFEeG1QpLmrjoyiQ",
  "key34": "2bTRr1ySjxhonmPxndhqL5WvZPTWREVXuJHbioFdveF6bGjPzgBeZddBrkA15jc9d382V79S3FqE75jfSGLEUJ6N",
  "key35": "5nCAw32XjWX6kTteyFA5mjG3ozFPhmcYzVJZiWVRn8oUp7MKoeNXQAiA7YLxsHRdMV3RAFchZW9gqGp1JCCgHZRq",
  "key36": "3fF9JUVgiM5ZFc6wP4SXmq1DUMAEfmi8wgnEZ3vLSa4GdgJ8UScQdZtZRUmsaGaG5NxyMGe35UhLYj7weJT4yp8s",
  "key37": "MBU2Lmr1uqcnjoGNUNYQefS3SeQwjV69wf1bUjUgpfHWHtGXzgDeEfxQwpxXw2nFRNdY2odaQ51MeuAsKe2W83W",
  "key38": "5R2Fko8qM9UqhuovzmD8LNoPFPNffod3qmNCh1us9G1CGEBNuthvtzYBSzS6qat3sjfLtNYktN1nctwUXPG1WDPD",
  "key39": "4uKscF7v8tM6sZsUn6G6mh2gYJn6wvkUvsUYqK3EcP77RdXMr6KwxHWs98QPHFoMqUNBf5P7eeivCkTA5UE6eh1w",
  "key40": "3P89BhQCxwx68teJcj3bkBENu9Fzf6wToa8UFvD25rR3voNQtT6dCvJdVES7YLqD1VhXg6z47cmfxHeHFvsLfBXK",
  "key41": "5E8Lwf5PngcsrfJxUAVM4MmULgvb3CPsySFy8u8X5DuM2ZN1uCseGU1FXiLXHhz4XEQ2UbPnciJ3AppH1D4Z6T8y",
  "key42": "3qM1PBnoj1C8gnhryv4q5zrd8UDKHSiksEyCC2eDtfGwPYvicMfv14wH4i1ocMGX3uBAxYa63ZXjWBaKFy2fwNxt",
  "key43": "pNUfnajwR1rrpiGwjFjTqoWY8A5QcR3QbA1cuqr5NXzb8JA4RpPEorGxJRtEcJQbmyFNuwSVqfqpm2gSx7PFq3w",
  "key44": "MAfjePJPkmTFNH9qqMit84gHWm1pKfujheMAd8VYYiCtmWQExN1AomLhkfm6YXnRtd7sGQgpPWLF2XcVhtXpmD7",
  "key45": "59pCxvNtXjHPGgskR8VB4Y4uyYxbniyh5vkwfmnD3pdxXCPHsmyUrYNNd3cUvSGDw2Uu5v7uPnfg3NYdh44A84Ja",
  "key46": "4janqXBNfHkzbd4GHJe5eEZboRb7tQ1unb92sjhEnh1dDGSBMMTEVby71m5Qf3GW12UUhAarMESFrL7wCKsCEVy9"
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
