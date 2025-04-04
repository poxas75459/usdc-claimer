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
    "63JyhxzExhMBB6hF4SzS9a6KmTVqZ7Npct7QaeG6Tm9ptAkDNnwBXZhzFLZnAsg5X1Yh4qMJDuUW2QDd3n2XorzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TBaYEFET5RjeyLxPekFixrNbyhDUT3hJZG3rDAr7285VUtqJpL4Xi1A6785PkvxbizbQhmfDbGxUnT8R2tefqEW",
  "key1": "64DebRS9eK4Hy5fPtdiaHrETsG5w8XhRGcPfaFmXAEzM2dhfJvTW57jKKrKfwjPceUFytwMvY2MQr7qRZtAHihEX",
  "key2": "5tc2E9CDKoYYkEqfNLtWqDgCF5QUaNVgk5RBNmAbETFFDEoddSQKBtjKjuKxzKnYJd91mxNQWfvSuddfSypNjcSp",
  "key3": "2gm4eu22YyTqhQnGccNZtw6MNQZawYiUPgnqymcQcJqsPe8yq7YViW3LNT5X5cF6n3jHaTUb8s139MhPa82ihBVH",
  "key4": "55u5HQcDLLTq9iqk5FU9wDrjurv8xhN5abmPrm5DMi7o7d3MQGk5GVyVUEA9egz56Y6M6kUFXi4sj812kBSMWXkR",
  "key5": "pC1kKLvuwXRahmt9Jx76HdRKwu9K2UQoLp5Tta4YHdu1MLiLb3WayfYxRMGkixE43eMWo4kUxGiFGZEsDyPeqiS",
  "key6": "3kwkyZLdXxpfgLp62S2xRuRS9LL8P5DH6uZYzZQ9VZyF4exZtY6ti5aQs16XzgavZD7XtdGqSe2SkhuQta6nvy6X",
  "key7": "5QxYnSyAv4nYxgo6mYvRKXcWLafBrxKjVoD1PZV4sm865hFjZhFKuwhKrEGiZxdkzkWpK32GiPsXYZ63PbjwrnFt",
  "key8": "2x3ES3cnBTiagqjxjsmEvLfU83nBADDixKNXhtyz7ajr5fK39MkXrbU6jY8D6phpJxZVqKYSi7Wo4x3jsB68PybR",
  "key9": "JysG9kqXonVSF53qikq87Lw8gRk8Q1mffE7d3VtzFxERbWYYNX6cm8QDaU5qrMtfypyJ3aWr4Et7AQeiHeRc2n5",
  "key10": "3q44cpM72azD1pSsN1ap8RgV3XkS2GGRj9XGnx4JcyrRQ56YMm5oVC99o3jCBeocG65yC9NaieL8LMUGJtSebSF9",
  "key11": "4KHuwQbBaMZqLVS6ZAMe64prTnAAaGABuWGxCwW8rJyP8db3dCpjUBapdWeSFNZuh8JFzTa89zCDJkn5ScQkCr36",
  "key12": "3AC9mYpMfHr6PGp77hazTyg8NH39CyutrFHqYnPPt7BsWJhwEbnb7XnmadwBcduJLaB4WkukjxtVfH6CjN3LeLK4",
  "key13": "618L2nUkRqzKUY9Ev4YfLTZjEF4142nBUKrnJqoXfVeh9jPdATqcyjyH128m9s6pCg8ATqPLQyFhb3hqjLJWySkU",
  "key14": "4RgCfJ4QRH42qwrjjcyKY6MaZGci1ph1aVaKVzSi127FTDKHYzAL3rxErVziaqttxiUqrgpwzuX5PfnNTMLZTeaq",
  "key15": "29MYHo5CXJwXN9ChBX7w1QiJx6cGbS4bvtoKiNYEaMGNAZyGLenKKb1FkieuPpihHMVVMCiJGmE2NtnBXoxxy2Dj",
  "key16": "7tz3gSF6k2o4ZdDVkFpeByTp48YVNKrCZLucCXGBsmYnVPdd5vWsKk1FUzQeShwvCba2wsTRCXh7Mf87GuCK9F4",
  "key17": "4pzgvVeqBvPtTBfu3bkegJwLxNJVQZ7KAgbkw9tuYVS5xqZnYG1Mq4VKRd44NKdCgar6SkV3Bt5c87wX65Xr6rjQ",
  "key18": "mQYrdmHEgbJ8XXGdWt7djccLWrXNsXScFK32DE49Ry29UkrcbkBrnrbafh5T751oy8ru6vrEXrEvF499wTZWR81",
  "key19": "oUacWXs81q6Aevu1smjE2KjHsqhGPyerdBhMb2LSGqboK9iMv9p8mCPo7zh6f5okfZCzQ6aV72Bdt3doRBrfqJv",
  "key20": "2FeD1GCMrWnGVHbzqvpaTAVSPsTYvnZwgYhwNnHqqLe334Ccy1pXwBD9CwD71YdgcTm658DwhU3UthjcawQg44is",
  "key21": "2U6TkQTTvHTYVWq2oL2qPAz6EQKQ2oygf9z6HDyLjFq4BE8k76pjGYhVuBiAjkQSuUgQuLmDCAmMMrh1d44TQzJu",
  "key22": "4ZCqXeKrL2yerv5f9bevurjSeUeoqnMc8wpty4fdc7zmagGeNpLoaZkpjxdsRcPU8T75RUYevm5ZyCTEPwAbsQCM",
  "key23": "26HuW4VvFwArfoKZtVBPNEfDBiHomFmXKVAP8baMYoSdou6wummKm1AfdUSTmEDqXb8tmjLHDwez1TU8tZuPNceW",
  "key24": "5wFmSNYd6NpNrEkZJCt6y7hEJ1vecFMRnaLzz4xg6irzQTkWewf2umBQ4zbFeNiFRF3VxTuiDCEv8q72KpiGCE1Q",
  "key25": "4wGhCa7THUvsmsb9iP5VXERkaX7XuEf1MQUseBMwqrTHgMtQ7sQUEUwwzfd7M91JjAFa2evakbA7wNmeLhT4rvJj",
  "key26": "5VzwXTL5CCuueYtjMGowsvjdU2emSgm6eefpCwmTSQQaYupwiuhttaziw6tyieYm5pUKzhHpo6zjntis9SfHigar",
  "key27": "4e6tLNrWGC4Yqd9DqK885XdJGPZkkhMviJJQ1AjSZSMAzQSU1HAtfYAsB9SyiSpzUvivDzCzTNn9KooynvvNqQpp",
  "key28": "XammREQxTRYexGg8wH4GbwG2UqrLduemsrj2VW4kvEDUtE6Freb8TWMutKnDiMpQUc1R59TjRiR56vL8dtqikn8",
  "key29": "4SJWcLQoACUFXcxnX7zu4SNaUxYV2AsoqeqLTSTQU2pt9774Wm4EWrdWbPu4KNADq597bDEw4vWQJSw9VexLXqg6",
  "key30": "4g3g3PoSvai2mtCj8bgtjdGdYnHj8zvqXSHg8ktkbdaBMYHYegf34sFXcBtfVQDMsd6pwMfJoJZDrEzCxLbWC75j",
  "key31": "4vMhRvfYV6232Mq5J37mAkz9mw53PLreU6PSNeHN53VyMzTdHPagBDp43JVvNha55NLEMDnBq4QyLuuARRrWG4QG",
  "key32": "5sKGMkVK8nTwgNopwmoLDky5YxBW4VCicspKLtYHo5ixA54pCf5ZGxSUxeP54eRFKaxWNwWPeBPrizYLNSSh2W1i",
  "key33": "3SSRUyknnhX6PqnY8TtsLAmw7ozS9xY7rT7pb5cnCVo2V453sUeY5mx3paV63qyut3RCRdeVk2t7q7RERViXVTdm",
  "key34": "5VWqpAKfcuVtSKHXnxhfdzPC7r2dFHdzQ5q6mi3ERzAHmavrTXMnXEEC5uY2TVH9kti9AphSXFPNHtzmbC6d4493",
  "key35": "31U6SNBDDPPEDSzUCDgo5Gonj8GDZnZGnAxYEzuNUjDeSSE8X3VqDWsa3Yd1qM12WW5zLwWbUqF9wqwd2WecZCSf",
  "key36": "4EhqaQZEqVt9UwaQcF4XKsqjb1ybnN7BFHoAypgvE7QTHLS5z5QMzMDn3ezKbhmggb3uhVFZa1FYH4Cn8Zbds4cM",
  "key37": "3wTuThFiHqJK6zhMCy2bdQyGKBe6n7erjCZUrjPyk7gBD9a8BpibEFbzVA5YHen4ksEYTVRpPgRE3w4Q2vTdp1UR",
  "key38": "Sw4vjhVjLX3WvG5TZonRmePjAi1mbcGkY2S6siJQFkjsMFWuKmxaDkKu9LQmSGnPLPxb8zSBfMMiUQp3jvs4KW4",
  "key39": "2bosv5G6EGr64p9RQTretNpRzU7ixMx6HHP9pgTYTn8VmGHKPaVxpfkomWbjgQvbUxA4oS3Tpqt83DVjZ3GKQXaE",
  "key40": "2S6tGRR4GTXjbTstRRbv2d2JFRPB5QbcMJT74NSVqGmMmfL8iHRcYhuYx5guvu2KKrPZSd1pbzUTwG4T7xwUnkjk",
  "key41": "HKbCYU644h3qgMmEr8AYzoFgdDvYZgw9MZdmCjXUtZnuxonPF1x5JRyJFmLUxSqE95V9gX4EQ3wKxcT8ckWyCaU",
  "key42": "5xbuKYWY4MUqycXGk7T2BHaaLhiXuKpK8eXgR1t7UfvP9MTfSLKpcrbu6XwLFAvHsJQroVmdp8mV25WzQR3xNjDm",
  "key43": "4pKTabXcN1TtogqjRZ3CgAM7tujR8HgNmhaEdy1VkjNXzMYbgxjmKPrLnh9985Pa482ERkG1f6Ae4rBRq6W57YWk",
  "key44": "4cAPamweix41hA1sfeTk6WNYQeVUA6G7huJ58SuWR9TXq5Qnt49KjT12aAQ1qJrLF9wJHXFE9DkDnzvu5UWuPWSA",
  "key45": "hsxEScv3jsBAo3yWnZpEkMd8sXnwwCtHR7X1K6mAAbqVAoYuzYknSR6XB14mZU3esQaEToHU4ZX5LCnUTWB5ggv",
  "key46": "5LaGjpF5xTS2GeDnGPRQACvJXTrGz9q7StsNE4CdRDhAE8aK5K1vLhcW3VnUEv9rihxKE4ihpCjnnzZC7ZrDFCpF"
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
