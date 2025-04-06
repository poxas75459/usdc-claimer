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
    "45CrNTTxkEJEtrBpPgw9Q4z4rMgHqa6Mz88fEfVpRS8T6tooDRcWkrsqBKvbyAhnRvqRnKTZEBtse7vWfF2Wb2dY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X1tAh5ANJR5iznvbpmKQE2W3WqTWJjmrD7kYASQrV5R1xMfZEk7J8q66iUzPwXkuHmbYUychERZgUUAyLQnHgpJ",
  "key1": "2br4yJDhJUgUP7zaMoRvskny2eQNoSwkcEsYi9E1r6bArnPhhawtCp62uD2N1sFtFsZAyjQUEESvzB1Rf2Ga7Lz7",
  "key2": "k92i8XtrwHKqqVVjHyexUkF9jFuxczFx237BWubcCkiEzJEHkLSqcHNdaUieUiGhNhYYXzhsyns2nmc4E4qdNcU",
  "key3": "5Jracoe9UG4UZbzJPDQ2M37XvMZgPEYiWCniWZNhNgcyeHoiBvgWJ7CVQJqAoai9AetPytBvBaXPSRiHmtQrZad1",
  "key4": "2YqjRxW3shMGN8s2uEmeTAXtWMJ7JCEA7DeuCTuhJTUWUqFRzqXeut2KLgr8Zbs5fVQB7gbhgCynzoknk8dSaXA3",
  "key5": "x3EPDyufdjPXNg5a5WzTpTTgkxsnnobWRaGLkxg1vc7UahmkeCt3Szt9qfFLk8qa45yLVanQAbhN7iLTzQT6VU9",
  "key6": "4VMj24KfgZfpmppjvQNSJVqipBH1i6eTLsJwChbmHbS8vXKcwio5kyvhVFKBWY9vUY6xtEnLMfwdmrLZCsu7uUwg",
  "key7": "4dvLYo79R4rmdp4MVmMJWicFwQPicvFEbNjQeEUESuLPbt7AWEW54ox9wJGknNcFwX18qQJnSzkYuH4SQW4Bepzz",
  "key8": "REoBqwqeP3o7i6s4mJbM2SmsjQX8nxquGzvdTasugu4oiZssMJw4pGKsKpFVixa5BztyYmstDTkpDsq5pTTR1L7",
  "key9": "5P24Mi6yDHx8cqtcHJnjemTjXHNJw7oS2hgP69Yc6SXwnHQBwrU61w9ZcNou5ytn97xiJ6bWiK4j6iszehhk7u26",
  "key10": "3xg4akNXXVT1p5UwB251q7pKeK3btsGJXEnjb1JBypELAmDSsZVUsUnkmDCc8qHMG1VYSsfWnbTwsK9mJoEML9eo",
  "key11": "2NW1QHDLRpEyzwR7Ku7BXxtprAAtaYGAyohXAKE1RbZYuSbQNwjnpKUzWNK3rq3VUqVmxHvuTYzm1FPBTFx1up3",
  "key12": "5FuxqYrbTnHsDT855bxUjZcVJnbSfNB9t4YGUXsEuf8J6ZPS9hGtinNr88a9EBuzfag5M1YoUK8qADX7n5mN4csd",
  "key13": "KPLBFQj14oEqmRGWLn4bspvubVTYHej1VWFdzui4VBVBtFfxyJnAiScBhae4vZU57wcRhfyxKoCSGp9uXkEGFab",
  "key14": "2PTPSfCEnJKmEtW1AosB5E9D44asWxWdq7UT34ywE9SKo3xnJiENqjLX59so3Tnmi1cRR5kfw8suWw9e1Z9ECosS",
  "key15": "3s5VeeX2swoVXKxe9WLF6opUav45rsTgaWPWbKLyeTA88tVj1mwaTs9iZeQTesFwPvFwVvQZ4QpR88CthVXo7N8b",
  "key16": "3JtDR1FCRz5smphar3A8ThGsrq1MuJR6LRxn3YBMeaj39jtEnRr4uyVX8SEgGmLe5QUP2fgVB3bif9CqRgBPXotf",
  "key17": "4x3qzXfepAckgHM5eLHhy9apQb2KgFkQPfFiH1CYgPkoFupnvrjm1PoUJBRvERbLzsaasmvWiPSniQBiu1b3JAWb",
  "key18": "5mCFcbG2QEWMGM1m2uMdXS3RJBAiq4akf1PCEVKURs5tEqmfvRY7aWrRfmRn1h8r5pyvQwKNwcZ66CzxbwUZnFdH",
  "key19": "4MJGzmpnmHnciUZPEWbDd8BkUsLYbQdFzrkwVnU4skGRZMNADCyG3iwWp6W3VgZ4UwZCrc3UumdmtXwTbtUgUxWY",
  "key20": "22BALJneTFagXGvCE2zrfWJ663cbMkjPsLbTpxPkDPi4jQvu1uYMkTHUf4Ez3ygTRBEpGNUG5Juy3fSLTVZXkkEh",
  "key21": "5hdvgYdoAJKwghp9qLbRjgLXedMprjCoxsddHhSR2f6mAq6ECy1ZHkRZLPKNQgZC6dYjCbpCh4f2TMc7Nt4BysrC",
  "key22": "571pVwrPtZkGGcSvTd57zg19YQ9kRpwyETkfHiHvESnTkHewAn2PNHSud66KzYxXnVy4RqDGVKyPiGGqDVGcd9qs",
  "key23": "3yuL21JqJwBTQHbNwHnV92F5vt6XtyMVrymyo3Lt1tukkiDmJCdpcdGozR3ooN458FsfZubAE7b7RBPBRza8VCJM",
  "key24": "5fwzWJnFmKDUvYPhpxPKH85rSTdDCZiSkMuzWHx6587yfqJTvqSH8exKWAG4KZSRYDZ1uS4hspCK9oJQNCf7gtgR",
  "key25": "4LjoioZkqJjqKnL4gY6FV48SKGLcccSnamsRpHyKEkVzCXx8jsXGAXyjTbkwcT2sYUHF9cEpjsmokhMF8rDynxWU",
  "key26": "2nrAe9cBz7LtZxWrw5ZpJSCRALmMtxRq9DvBiJYWowdrFGoKKvwnPBvJjSfFLVui97ADgwEkczXJ43noZpkj4475",
  "key27": "5wHGp3MF2YTXmwLWfiLbgyvFJH7avaKoQtsnTNfiT8kmwT3Q6aDtKRYkXv6MUzjGiz7kLfmDy94LBzejUZo4k3zr",
  "key28": "2RkjqedcyrWBtWSVkTpoS46zeF6z7rvDnAeLcnZDnWoh1m7Mqb8MNchaZKRMUQs5yTYWPG7oBkSqTQF8EpwYynCb",
  "key29": "3X5gr4q1F6C9XoeNxsHktMnMGsEH1NAefQixFQ34GS6uyiTrzgEJ2t3ugoaTSsVzYHjSpefUcDgZvhoRgpRVRQei",
  "key30": "52TMSRGoyzT8cBcRU5vQVa3H8USev91hDzbToavxRAaZTgxi2A6XBxsFyBHu1kLYVaezyntkAJAgLx5yhgbevWuj",
  "key31": "2arTVe62hPnZPdwzG5B88rmeGmAxxEbr1rLz3RgvcPCXFTgWx4LahLmgGzrnDvrRLp2jG4hHnZX7q5etTw2erAei",
  "key32": "4XVRYGVGkD352KDk3EA44o4farrteNpGr7tWfYNDkdKBaUZ9q7zp29mcqYJMqU596gdTdBiWmbxtcJQijjFFb6PT",
  "key33": "3US3Q524gEjyAbef8Xk7buRtPCG2DNJ7XYjKM6LwWJVw63eJSScvms2XSPGx4nd76B4t3GyxArSSXddgtc2fj2Hq",
  "key34": "4LiRe4oNauSmeH3BZzD7tSGWMrXBg3HiZwj6XfqudjDvWT4SuYJduKdGW7JegrpBPbE2PidatJBTqhBdhgwDCXVE",
  "key35": "2V2sgquXqFwCTRCa3j1ABNwsxVR8ESFHCYibbwK8dW5u2TFabB2efoZvRBNJJVFH4kN7Ddt81JUUo4HUjZ2yk9UW",
  "key36": "5FtrmGn1Ekgpdd7ynUea1RcBEUAo2i8Z4rVZmoqVdeY4BoYR9c7W9HpkyJZtuzDcyKfSCB3Mrmo1ijUkLAFB6wnU",
  "key37": "4EX39TRsiKmwq9P2AVSrdRQqy6D2DRq7q9EnDUK3eJdVRAfQjeTaFUNUneeWbm2g79YdQWdEmdkjypTwdJ3dFVij",
  "key38": "4Y5TeGiVSHaeF5FG7KTux4pqr1GmNWk8yGvmpqGmzEGUFssinvwPFUCSb4rMGrT2wjQ1rPfg4Ce96ht7WYaG8ccg",
  "key39": "y9hKK4wZ5BMT6zdegHDHrb6zsFxKrrPkMVLgFyC1hDLpL6ij6xQDMKStFLGjRnTpStGvSsLkUstsvCBqr7k9sSr",
  "key40": "3kgEMFU7pZFsY6MS8MNE4wGX6816Me9rLrYJTKJjjfkVCMjbwSpWjUbzpDAL6jEAxqgUUPtjzeEDpSo9xTfxtYup",
  "key41": "2W1fhvroh1S4ysVwSmA4KcvHYoRH2X6cLQFHx4J7Y8mQ2gghktpqNvZmZjaHdRhRWi9ETcUUGvxSitvbn79zmzK6",
  "key42": "4pMTzRcVxpnMpLvsFmq1fQwc5f5zyBBvmozY7U2YK7HTVGAvqdWAb3pKZ8MQwMMZSemq6Y2BjYwiPGr68WzfDpc7",
  "key43": "5nsrW27nzCV7UD3K1t92nBcvRBMHeQRAqgELPkrXn6y5cN416Q9nrLZ1QPt9XbsMPfhk7cbXMbu9PhHHdVYK8LJF",
  "key44": "3aEqMHjtS9mHaDxnnrjFXMxbDNE4TCLscsf4Z5RokUgfKefM6tTkcW9d7vwRhTbMK18ArNeSWhe8ivvg6JawQKYQ",
  "key45": "4BdAkoiGkGdrunBLNGhjfp6LUtr6GVAtaMXERUdVA4CJmHYeGcrYfjoDcpD9Sue4dbtPboV5uZwMNHW5f5Wkd7ve",
  "key46": "2zBcpyN9RC3udGQ3WZHk7p9w8YcwEhS8e5nDAi8vciEkvH74na8oDj2Umm9xrh36JSAK7D7LAtdgKaRxwp15xG3N"
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
