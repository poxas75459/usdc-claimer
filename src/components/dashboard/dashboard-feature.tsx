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
    "xYBX3PTEuY8TyiySJsvEpPtGH5eVPgVdYy4k75Mu8ReXj9Mg9uiNmBC9EeEfDXJPrYRZ2jFFUHqsQUrbs8ry5ND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RwE52pysfpTAuWvU9fBy9ev877o4qLwbRTHPxsPh7EHhCWae4usE2AiwwHGX4qCHLaHh6JWNtUrPtCwjGCRmrfF",
  "key1": "37XAyHQJRhPdX468tHgxnAUobVsHWjYAQFWtvar84k1TP3q5VjGinatJdS6BwsCPkA51VAWWQprCS5wp2RYSGHrj",
  "key2": "3EeDxQiUKiMp1NcYES1KuAsqZv9pzYWGogvkKD5jNdCiH1gogSqPaDiCfQnLMPkVH33cpJ3WBsKwPZCaFxGKSSDB",
  "key3": "3o462bYGwobomcw4TdpRUmQMM4fHdknPjZXAYd1SwBBHAxnapvhw55oo7ydnfY59ax13werx9eTUx3gzdMgKGCkr",
  "key4": "4gNSsqD2eAk4mSZpW5yt91UWCX7ZqfaKjbR2Dph4cAuuegYeJfNznf6cu7dgjtbE63Ye5HQF8uZiNNDaeBv6WSwY",
  "key5": "5CN6PRWQpqcaDbeSGPi7Mn22jfAFjhZf2UobDzJzttMzoMD5B6NmqrVz4wMCybdN2Cv1iWZguttkYLiYoao1Cr2e",
  "key6": "3mSvQkrRVzfdgZFF5bCLeorzWUa1VNmiXnWiAx772FZAjYonKXqXjG1WA5r2EUXhx7CmujTE3WN9Yh2LGRURGnr3",
  "key7": "5xjqpojqS8ny4YzDdokwDJwgy6UasUA63sD956Su3jkpwHUSDu3NMF1s9mrQyPfAjyosUPr1ksGVqqbYNshUe59T",
  "key8": "Z6nR2pV6vEAUb823KV1Vp2jYitfJkAFAzZbJix6UP1UmPFAjri4bBzq8sr32BntL9VzApVFf2sGo1AodwkFfDAx",
  "key9": "WiZASTy8jCT6ZPY18dcsfhCCVC1CUMS3kbVSFFWfbtwTpYfCGPU7ynFwLNuBnFxXyWszjUmHBJYs7d7zPCENfMx",
  "key10": "Kp2AR6W1uQfGovpsfoPZxDSEiSHfS4mrSJG6EpH2sJPKBuGX1ZmSHkVGpDAASenG2E6q7CUFZUipY1wTnvkyMPu",
  "key11": "4DcAVeVxyxXDRBuy1T24sj3khv817cDauo7CvdnY9uFjG3oxPnxSGShaqKcZk5Qq3pJEVQbnMh7QbPFjw6drgLB8",
  "key12": "47eeCnekunze3fGndm779rGi6h2PFeyWsKk5haU9EUUxmLcMUzG7gqpjC6M9oDLntDnhXWLeZDMV8Z6HrDfJWvdh",
  "key13": "dYC3rseY2gFuL4E3kuadydbWD5sk5hdFTefAKrPpb2BKxfeRrqDKyULfgbRHXkfcFoYn9iDsaBdpMQHaLhtwL35",
  "key14": "2CqP9W7p5A7SEK7q5hNStDGRN7MVpnZdRsLLKtdcjdkispPMme9imjPtSCHQ1g37v2kzXLaVMt7RFasBYshb4YT9",
  "key15": "yisHSVLxSP8SYdh8iuXKh8geJWoC7ERucQVyeAbrh9G7Lmah63yv2coFJyeJcnHkahusek54EhDbhxK3G9y3n8G",
  "key16": "35xho1udwm3YR7a9rbjCAeSe4jybuhMKgtHFBytbdQeeobwsuDjYsrL7EQ4272UYr6BN24xD6CE2pT7GTyUwitJk",
  "key17": "HDZYt8rxNLNoi5gvprRbopsZUTV8y6jbCAxDczFdYQ2ivyh4m6HLp5HrD3RmCUXqZRfNSQGJZeem8RHv14R93Mt",
  "key18": "K9UbbmB7uQW1ZEzPpwgb5GnVoxRfmQA8kj42uZiMzCrgyekXL9MYFgbNMo4FXrDi7W733CgxuUj4EnP7HiyvAYB",
  "key19": "2jAhUBADo1Vk4UCyU9UgawJER3rM6aG8ij4CkXwq6uFPfifXQKxUcVTQFNEDgP1bYTpD1KY3DEnymp3cuD1UQ5VK",
  "key20": "3mtngwHZ3u3tNygfjQtDbwvBRxdbzKTcaMTPUqzcL2YM2xah42ZAsotZJhoua8LquJZ58rqzx9JoPjv86S2c6MDB",
  "key21": "3STvMVJAU55k4sqqGr8Wp7tf5MjBU26npN4UUkqHh8u15Gw2A8BziHSAq4BqvUv2HZikv3dzAWhpcFCdzg4Zzwq5",
  "key22": "2FZu88E2KoLGE3EtUDp2QHvDmKxqszWtQQ7aDWt6PU1q8kHWpHshAh2w8vbhBZrVUwjPvZhtdWjkj8CLRJMi6X66",
  "key23": "VZ4UV245UXoLAh9UCxRH6GMMNF4QvN6GoeUWzNh8apFEh1kpK4WwpBnAgcp6kwsvGFBjm36HwSvkARbdQNhokki",
  "key24": "2G9zUy5tygySzDMHqLMKuAK1e7d7nX4HjqmeuH8ibpiBLWaFDGmpNN1UR5baVZnfuGugeYwL743Ny8S11N8aNixL",
  "key25": "5B9d8bXFsPCrk3fusoR4kXQvez1Vo3gjHaPF3hRgYQXvGnPcgV3gmHopn5YyHtdCJocRWhiAZLftNRT6FQ8Q8WiX",
  "key26": "3ynFEQ7LSpwQWF6xZDVwbBdKpLbkL2PjkEcCWAMv3vxM1kEtcjXmP1H9V4MibTKMEjZWZnDFU7nroJrXqrzshzhk",
  "key27": "5GSq9y145bEzM4tZGq3xGFia7GKJFZvwUDpTy5hmFyUfttQ1JmB8g8W37xFftxmNmURAWWbFUFzGktzJh455dCHN",
  "key28": "3yRKYsTKXPEqs9nr6h3Aw6Mw7GcHnHsUB5wuPPZeB8ZL4LzaW9bsWnLUxc29DW9vECZLhCp14ztRWGR8cCHT1dEf",
  "key29": "5bjxEP8cMZ6Z76vrMRMcckdGYWoMzVrLMdHBZm6mkLJSJ5cb3DVFZq3sTt6smXDJ3nrMmWXmuxfSnM831Jm1wWHM",
  "key30": "4RqWvHzFE5AS3kR1EcwhsNQa3HQZHy88oX4NEV6fvuEqe3aRZm3rcpb3uwLv3y1RDvmENmyN73qY56qKVsWc3HnC",
  "key31": "4bhm9mFR4f9EXKfyjy5gFwqy3mHuTY3WUkjQWfuuMKJBwvwNhgjXJSg75st1r4mLEsToCLMFRfy6Ta8ffRVjoqMU",
  "key32": "3cBKGf85rVtUBUwVPfTD56iDBxnpXWimhmeDbtZBXDukytXLBborTLAcaY7XFBg3hdvPapFCDUZRpZu9jEmcRwMR",
  "key33": "33WoQdUGcLXxNJaWbnUbFvWva9zwhkSgdciUsM2Da5Xaqj9JHkhvHX6ww7PLy9sbTGoFCGv8SJwgh2CdBX4wA3Fg",
  "key34": "a1ZrUP69WwHauqrayfLMFMxoAq4h1f7icXC7WG8HQWEDugz9b6SijH5Mnxo6VLuPU3xeSWEhT7dN1XPuejLaCBp",
  "key35": "UNo4y6R76WwYTPV9Hv6ggrVw1qxGUjrP4YAEcBPESPUGwX6yuXUuHAVwEWE3uxinNub4MkHKEiWg9uLX5ZX2zzZ",
  "key36": "38AQz3or5v7Q3ZFPT1PcYy5EYw4div5f5nJbrQfDnsDp1nSWBGUZ4ta8yJLHTRiE5RRBYSY52n9EBYN69HeXeKDZ",
  "key37": "35FReeuXad43oAWv3LhPsqpBFqUnUCYsdUh1wE39b6ajKt3zENEkbhU2thd2EpoWxvAu5sHQH6zf9GZfiSgMua5b"
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
