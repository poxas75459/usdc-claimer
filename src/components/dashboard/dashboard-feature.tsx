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
    "2hPjwSuGxbQ5oMVQewVXtAMEsbnbw536nFJCnmX1828wP4RmK73TqoeVcrC8UDNDNcQp7J6Ypu8rtXJ5h8ev1FAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SsH6Fxu4thT28NwteWmvFbpCFcZEvxsGcd53zv8NgcS8FQQVD5Z2xrSBaRUUUCMo9H7hrPgh3yG9sHLCnaETs9W",
  "key1": "5ZxLP3KXXBsyV6wDSiorzVzjvNTusghEU8jj1CHi5CeS2NL6nmftjVB8NA2H5CTauHwekonaeqtobwhD7nC7C26K",
  "key2": "r36iY9WsBgCsGkA5pA6FcdvgSyKCi3LkeGHT2JUTg3Mgu542jWZKpFBw6vqihsrMchNeqyemN24W8PHP5Na9pRD",
  "key3": "5mHCnqSZupyedotZReAPEgnYx34xH7L9hVNiGo9ZPx5J8reKHDE19jHFqRWW2RjXvgx1zyrDgdLPMvZ3ka4mWfjy",
  "key4": "3r8a3CrWFSZWCS2ZtXfA87qX22rmfMhGDvcrH576PjLdWboQDnVkozGiuNxvL4A3hv7G2K61M47PJCKiHhEV47z3",
  "key5": "46BwGQFNqXaWBr9ZQx7ocpRDjeUb9RuEWQ3x1QACJGMECYAGuEh1M2JHWyig2aSpgDZMoSmryfU4HgTgeHpwAij9",
  "key6": "3Jkd3xbVh13QWxPgWub7HvUUSx4sAbJXqEVC8D4bemyWYupBKsfm6B2ksuPUooDRjkLAQ7UQtGmj8Hu27ThvfFLh",
  "key7": "67R5qj4w7g3KMwrFvw7VX6Waf8fc5NCiMP7JAhv4yMBi6evXPpeWVGXYbyVucoHC6V6FHHCkU57RFzgdf8WNHnEP",
  "key8": "3K9bupmr7bRwbZ4j2iuL53q7HukMDPN9Ziku2cSUTusgnMnNhW9XxdCR6xFkZDhZzGrpW6QC6gJAGZ6guMFLQsHb",
  "key9": "2rsc7t65UucqWY88uoTFCTWTpCjszNeF8YW7YQ53VmqHVevFQZzfhhuGgS92KGmciWg73PYFdX19ymWaMTZrTzza",
  "key10": "5gzVqvdnCJVMZop4sndQfFdj8EZ24VjsamsNWqEwmFoHiTGGsqbtdUH4hqBTRYXoWK2Qwtz7CbwpyuU19pzZgegE",
  "key11": "eN9fKSrJLqfV8au4ND1pK725BXZjVSYVGd5qyHBhdVWcdQJHEpgWX8TH7VkPCqnetq3nMMh3bYdCpzwaS19FG7d",
  "key12": "65npcaeqzWCpsL8U4Zk5trQcbS41EF4VZCuvUaJvrgkwkVwTFaFnw7N1d63MHb7Dz249ofECxbmYp8chpSmLXzWA",
  "key13": "5gHKYFaHdJZ49uJTihvruHrjCU47wfRcFrmNvFDZptwpgFJDpBprnKDkjWFxkgKsQV9eWe8MTpr97EjK2Jhfph14",
  "key14": "2N5w5oyaJfMyL8rSmfuo5PNtMnPno8GJJuGpugGh7KJvTkWtJheDUaimRAQpA1dG5QabnLmV11JZyWC1Y4XhkPaP",
  "key15": "2U25Np4d9hb3WumRN4efPnohYUxtNPgPRChN3vwFaB4hSmNJ9kS4qTY4h6cuTKPSZSF1TqJkQUehk8zteaSqbyiT",
  "key16": "4DRjZxW85z8eafseKVckPAjbU8x4ng7LFGPAUz4xMZVtrucWUM85wxGFUK8yiTc3Htvu1WTNoa9pgF8ZUGG6DDAz",
  "key17": "2Pwif6Ky7LKVViukw6KWLHhc3ZcZ9TRzhXd1wUpS83hegbLb7ZWDp58YebPe5KKRGLNrHM8w7DSqcWzaByzmpdm3",
  "key18": "4WSVFFUV6sbYTcC1BUAp2iqtAN4wWi6peZZ5eoH7HqGvj3JKSTTkvu5Gy8AbF2RiSK6W5BZccwwLYdMYTcqmehbg",
  "key19": "4Pvn7NKayHXrNeNRYxE7tMVa6G16ZCFmAxAGDHPYEK9L98xsQ8SKaRJdsoyb6aBYxCbFvrw1xQD7eumKPDoxTNxK",
  "key20": "5FnkgPinhfvucoYtivhN4y9Ycm3NvYz26DNU9xgJfLA8jFzri2hhYThNDkfbNroX9Afr2nNqHXAwtSyVnK9FFu4i",
  "key21": "5Uq9EttoxfvxARHMWaB9qUJCJ4fZKY8Z3TQS4LtDJgGiuXzhdpuGWnfdpQ4gKzug3PLhqvSE2fm2ztxS2ktD7Y7P",
  "key22": "5HmZptWhnT56PmgBhRhC1d6FuMP6B2B9uYiS5xZiNR6DS29RpV1hBjAUBbSWLEAam2S37mSZuPrktzbwZs9mdzBm",
  "key23": "dGxDWyHMnhutPMXKEL6RBuf4zoyqXQrT7yhT3EtLjWSSnVPduEyQFFeoa1z5As15VxwDccYihSeynJUEd1zfQsg",
  "key24": "5TU3k8nVtTgFhRRTtRerbwZ8DBQuwib3ab2CYfsRNssPrUqPsMe8P3PxizqHcaA1LxH2jZziieVUXvaY8ZA6CRSz",
  "key25": "ujfpS67bUcwRrMUxgKrRf5VZmi4AV9YrjJZ7M9Pp51fLNyrxwNaDu1ugtncV6Qo2JiMYXPe1w6riVWpEXPSPfE2",
  "key26": "5gBQGBnKG6v3P5hvVGrXCVfK83x3bjFAzG7zVhc78gMArmW32ecUzGgS2xhP8XdLAafcCkpeidJ1WVDxrcBfUvth",
  "key27": "4SFzQLjabF73bEn5kMWRodteWoVNxXcTtdqVTRcCgjxu8CH21agEK8nXw1Mr67c7AzEXjTzg6WBCrVLwTaS53DwE",
  "key28": "3x5dwYrTuHNojcf6ySYLob4S8dBhtwef9SfMgUAkDBYcqCKRUMFhuiSYgCH2g6aTSaXmSsWbpskE3jTLPpVSPPvo",
  "key29": "3kA6nNWsWypBWEWVW2VDddGRrAcBheJ9mMeZYeq14gHpSqEfGNG7UxzsNzQ2u81TWEsb8aNY8L1N2VuN24d5iEBx",
  "key30": "48XWYYJQFauC7mCMYqRjkfkXYLAhC4smc34dPjryedN8RQNV2zDrkNCK8S1BrjQq3FzrP9fTNNiXRiqsro5EGDHk",
  "key31": "3ZJrUoeap2usWwKyg3znp9wum2VLdh31pR4uDeBbvsASFWth4pN8kNZSmd9uQ537Gi69uV5oPsrz2VVkKteZfGpx",
  "key32": "3A2Mx2HVQ9U5nCEFx73WtxBtktxpMpFVHRLvTnyBdCvRjLeqtzrcw93tWJHGqSr6EzEgVgAH5xhAEZwBX1Q1UvH6",
  "key33": "4ZanMSg371RuEpnWfoGkWednNJTq9eyEGi68n8HYsbJQEojP6znVq84JjUw2vTZXcUMtHGW2ueTtXjt9in9VgkZk"
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
