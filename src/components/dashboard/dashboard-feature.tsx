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
    "4XojWF4DKBkRScgzc3Zd7M7y8vCCBnfTBFHmcjZ9auH6HKvUsjQX4ofnrp8rahrgce1sBVhop1Dmo4BwjwbKzho4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39bSQYmvrEuCyMg5CyF5oLr5i1iNFgoZJ7LMpDTUdgANG1LYu9NQnADLG57avG3xwH7xkBcxhaQF4Jerka2d7E8J",
  "key1": "3koYnxQetim3xg7kAVmbg4WZ4bhU9LFLpkk9gEUiAWPjvE8jgDbH8KaAzcx99cCEGuEkV5kTMFJPvnponLVAFbgQ",
  "key2": "PFwrwuMVjWgxVFwfKvZmB4Sh9mpvyBkusLDTgr5jyoZQ5iE3a9YBW42X5vKqyVtszvbrXwMxmzJyWLRkQMWN3uc",
  "key3": "2WJZSMoSn6BN9ESHqNEr7JdpguVYQPxV22JMnsnJesQqVf6QtBCdmWwNe4PURzrEY5e3GU6Sezo7iphhrD2r3QTF",
  "key4": "3hWuBzVM6Y3fgcgz3qiV9ShkN7qaQNSUAwUj5peeHg9NvcpRzz9Cns4vBcyvPZRmEGMp18KfnBNwozkPT2QZBoka",
  "key5": "5bFS3LnqEjTdHMgm13azidBkJDtHtF91qhYB1gR7wb2AMbNN8UxSBJvbbYF8zBou4sC1PgRFbPnYtLare6WqyNRq",
  "key6": "Vw4iAa9pkmBpHkkcLLkmF4HNFkjhcuBPmop2adUjQMhUGZNc2UNTCEsi7LW6HwFcU5Bo4s71Y38X2VYZC7z3kvT",
  "key7": "5y3U93qbJMdqqvqEM3rLc1Ba5g4LF18zcUm4gkmKXd2YZC1cRBCwjERWhiTp8tDjGh6z4CX8Du7v6SnP5prjEVT",
  "key8": "4L7SnJoK8BEctGZnzyugJC4znzjJjTc4Ny65zRkccsrNNX93fDxdnq4tALnazcRv8ZB75r863oyZUXieFFZcCWWP",
  "key9": "47HGa2pjKaeCjefQPnmX8xh2RNRVQSd1jPmGeyyKhzC6AtAW6QartyYfxTtGBCS9zH3TXRtWa59Jb5Dfdy9z8S4f",
  "key10": "5oWaf8j8tW5rseEx74WY4avMoztZmf5tBLuHaoYktMPJrHsPPNxuyBqL8eDz2NR2uKurfdSuuDsZ2LjHm2Zoj5t7",
  "key11": "2cUWn6CEbiwqwW2YtCWa44B7w26MMHMhbDc9aY1WPwGdCfdcntTb1C2WTuRHZ9bqw5bWtSxCUme9bxyGFdAjh8m3",
  "key12": "2WvYrALBseHnqJdZHwv2BP7YLhx3i2qhJ3kSb21ARdkGBPiKLKwoScPvwJQMQfm2gpmPMiDCuszL2ych2m6hg6uf",
  "key13": "VgHe3jcw1PhCKimqtsBYpMbLrwr76pJzV2H7N9DMhcfw4o3hNJH9RD3yPzbZdfk9v4vRzEN8VhTihJDi3LF2XD1",
  "key14": "2v86Y77zC131eNvYCAs53kfHtBnMuypjFQd8VWHtqm8kYi6k4iTTkmPY4m1nsunKueyLoPcWPikZ1zJHXWw1UG5h",
  "key15": "4k5N52uLCjy2B1Bu8zUtF9EkHs63DLnSvu8RsVcidSXLBeSm443fEiiRsCjhu28wACV3Dze53uAExztyDMJ2sRcL",
  "key16": "4URewrTU7kfJmY2M3MYiXeJijMnysJJjj6mZ7YyAgk6fEsGG84AbDt5UCNvhT1aFrPNYqUM3q5K3hZdNskCDrcCy",
  "key17": "21NYFMGKomwPcTgtt1A7PGnHfZycdCxhEKMFrkw8dWuHubWtSvFQVjLmMRck6jSUjnnTPoo3csTVt6J2MTwBeHwA",
  "key18": "4RVPrHtoicFLKAxBCz183jw9xhSNYfjN9EMTcRC12m3B47ELW4AEaUuVh91X5J3gE1CZjp19Co9f2pZWtk9w7ZNY",
  "key19": "4k47yJJ7EnoZ2VBRAoSWMjxpGAvyZcuBjXVnnGNsEzSx5kiMZpJAdGmmUMYBorj7mwNg5Dy3VXPUikciWYc2jctC",
  "key20": "nSqsAmYuBbBMzwuDvTrBzsPjgcmN2NUoFTz6hQpa2fbxaWXU9awZV7eEg8AyD5KtEdiLLuN8wiu5FSENwauZVPG",
  "key21": "36FUMsbVxVnYu5vzp7KLNZRbNxggFhYcnnRGUu3QDaPofmhPWdiEZ1DHCR2AFbHKC6oBcUpTQMfFgmXMHbm4C77X",
  "key22": "4XfRoiS6XdiVnePAFwgdWRDZFyJG5jMDCCYLkG6s8nRckjBPcytSaqviinDfmUPuYL8xS2UNAdbnZL3adfdbiwUr",
  "key23": "3DM7ubiF8heB6XggREHXm8QmdwYBRSfMfJ8Ac9DsStZ3VQ6TMmAc9CuCoBrqyq6S6ceNznydhnjwofKuHqmLQnjF",
  "key24": "28yYy4WeKXuxUVEekbQrysKgwvaGtkU7NddqvpAA2XCqnhyJxodenE7AZvouensDVQkDjWrHVYQibTQxFNQMJ5hR",
  "key25": "4FLapmLz8ubYLQzSKsoamntsRkZjeidMqypYgkrcE3ugxfyBbUryDfuyvvFcrww2rrkZ7bQ38n82mQuNuM3y8E9J",
  "key26": "gC6nXnfCRurCwggbpkr6ZEw8xkjCF6TJRcX9Z2A5fVW4j3togPnZX24ni7MsZuzoMGD6msZZZnsPdA2wKV6aQif",
  "key27": "5XAnsua9Ra1d27EF9ZUfyTJGXw2d2sbXzDzFiXQ7rXjUfBTZPLhRpdsw4QbB16sGDxAhzCaZNFJaN7r4DQb3L9kE",
  "key28": "2SrriP2vAeteDV5F3KwKaeT1BgXzLYxR9bTaT4WLfcaFUs962cwJ1oELDCzMNjhQUcUqSfcgAAnSyLCHc5qS3Mhv",
  "key29": "3HVtucvhEv1CnXrAjdojEEzvKPpUXXym98srMxXdWeiAiXUGu5kJuRp5zPw532yKSDVcqkVBjSdk6fH8k1SDLbYH",
  "key30": "5BvfyPoNTc8VFMgDBRXy7sXMEXEU1sawpfWSx5gC5f631ECt5FjoYCcRom7qxKrP6K1BNEhFe9Bwaxxg9AuRiGsv",
  "key31": "28SjfyTVCBKE1zRUkasSrBxvuD15ek8waw7288ZHSXmtnBGycYDD6DpbFjUB6yvgSTAv7TAGQRpztdqfwpizk5BF",
  "key32": "bTg5bwQPKcFKmEpyT16GbGwUS24w3HEhf9BsxM5EGjnTik2RPxXGpJZ1gLAXZhUP3vLdhFaCbRVDgefcmNjQDGL",
  "key33": "5wBKPCARDSe4DidfihNakJYUfvbzyVgvAxJLMSLzPw9uF43ifdwzH9o7aoDgArsRhEVbz4meBawaekzaPiVrVQVs",
  "key34": "o7VzWEc59HftRW1NehRR9LRBfoJSyDcvs8phE6oBgzPzwVwMdxCUzQz2em2VNUP8ykuLUjJdNKwKGVixJHb7Paa",
  "key35": "4SLrkh9fEkNnMPPsxvBdxRTjk1CrMJYBgmU8sDioaH1XjBdnZNyKC5AYQvBYx2oR31Kk5GVn3SnSuzT3LPPdoKb8",
  "key36": "4AkeRWSvQPx9gDUarB1D2ZBzd7pWBEPbN4NzWdipcf8zBaBJ2zmDMjainHjVBhF5ndz7akeyP4whzdvBPj3kQxaA",
  "key37": "2rbgz2zp87bNu4fvmu3y7fBTyTQqtFN1FCnh5xrVhwvzqv5bZnbBmCGnmpQafXE1z8tym6MDQyUhcyxDE3HWikny",
  "key38": "3CATsLU7baom7sRMY8UiKb95BJ1ttasxuis4SBDqpTYuD2MgZB8eFm6Y7LUhUMG7zWmRUMqgi5FC8Cj2qo4A1gca",
  "key39": "dDtgdQLkj8g1iFTFvYGAEQrDgbY99YLN2whHWMe9kSFmFY2GjdAmPNP66yuhhxDEPBRqsgKgzyPsSnLWqi6h85q",
  "key40": "mJqNuxfHh5Y1bkLmLcuqRybLWWbzuFyGqtUkftmGexpQFJ8TZXP3C75Tpki1K5qAMZYR5pArrGTXPwkeHEJZxbA",
  "key41": "5QFwnowPSJotkMjSwBpiNoPwuorGKcxHXnApGZpKGLu8NZStbF36va6cUbsdAHGi5Apoq4bZCdNDMNLvT6ZBE8ob",
  "key42": "5KHqTq2WjFmibc9HRbKmQmjxgGqqS4HJN3Mf3W1PuEkkEzFX3MVdEcMe417Xmx4kzt8C964TaETyQ9g4BqSF6oyq",
  "key43": "4qAaeCCYs6yEA75MXQEgXrg8gmTkmZeV9Brr3WpdVE65ZywZThGGZHrrvqT5MeBVxPNq61NFBMvkNGG5Zy17uZud",
  "key44": "3zu9NkbTecUKkuLZR8We4XHoVj4GsB3DmFoyXC2qCYoNVtKNrtcURGExyHW6xkhh2zL1KfcDtmy2TApBsidxLgmp",
  "key45": "3XxdMdA8EnAUNS54Zr3fA2e9kPyuSwTMHqDZdTyzr6zPjkECXeVGhyfRYpuciZthNSwdAyn9B7E9VarmcE5xGpJ1",
  "key46": "pPKLCRmiQTbqbGZERGV4j2jhkpsNGa5fNbPkkNP3qprqCB7nesVdhSBnvAEYqFY9ko3u2AuPMgZVWdzFqFypfJY",
  "key47": "ofQiuzHE6PhCS7T8iSELMXhFNJU81FuKYpmvmcc2qfca4pqEK6q8A2hKUXjQhMNpkiiEaLsDuntg5S5txb8u5SY",
  "key48": "31Rf5yFYSh3ULd7wANVbK4MwDQz8BiJap3u7X8qHDZyguwV9FxKW52jPPK8U7fnu3aMXMjkifGzD9hRkmEXsB58D",
  "key49": "3UJA2quc88Vcr3JsPbvLnBg1FXzuVDbezdwU3DPmhz1oV6GQpibA7XYJaMhG9ti4zFKh8JFHCqzdA5B6qiE7ta4R"
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
