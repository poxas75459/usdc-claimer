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
    "2JaySoe2q5iKCXfXkBPk9GWQGpD9csg8UyqQsRApSuGEHPy7BN4DpRpvURBsuKy5dESPzK8aJLvASYeAXzWM3unJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fAGAB345SjpqqoicyKTrzUyYiS8K47zquLufuc8rKftdebKwiYVmNd3rDBnwaVsqN4e5PuAu1AaA87oTo2BvoyB",
  "key1": "5jYC9Ch11bUvgzwRhCcM7MGQdgVuMyrLzLLGkX5HRuYEMk8QSy3qiwxANRwb2Ts5Q6sJc81bxRf7KC1SxaNHmbiL",
  "key2": "4Ka2Ui6Er69Qcw7hwPGUpytBZAA7jBce1rSTpjbevPqe42oE5a7yC5rwMyp7oFL8wyxKCosWmAtbAqWhpWhE9tKD",
  "key3": "4zggcEAcgLdbWhu8ef9tuYwDZCkHhXJrs3uSaxxPuZJPHkrCKYfL42B2oQLWhCCTPZrkhVHsryhFZmMKi6voakoM",
  "key4": "5gGHE6dmGnwPqTFnCzsnAkTAKABF2bvShd9zwjvK5GAnBJZVSY4PvL8UvBRjEwFL9pR6tqXT4kda3LPfG3krJjxW",
  "key5": "soDfA5BUDT4zyaqfFEq4qEYj8aKQU68w1A9mK4zbtMUkDnXKV1SC98b1pKEUHuaRjAzvjQoiPXW429o2AhNjTYA",
  "key6": "3F4DdmvxY45S4V3C9UramH1b3nhWNkP3C7P7AU2Q36sCX2jLBzq7vQFsZbiRXiATfbu4prfZmB5EZmhmSbEiJnCb",
  "key7": "5f3Sp3P2mXwyaPkGFhZs2qUEVtYjmLmrtkCBuPgqEudQUwBi4D62ivxKcP9rKTkiY3kKWeVuohT5kaz7AvXPQJN5",
  "key8": "4Ri35Gu1n3aznAJZim3oEg6gWuV9gDeZZDKptE5QmT1bAnvDx3rxu9RxPbuKHdh8P5KWnCBftWsH6ar25d7uo6gx",
  "key9": "52tnJ1GJCrjSdNhVWUPKgKxQDYkct5vbUGGVV6CGiMK1DvsSMHTK5R5nBcbUVzqq8PXcwdjas6Ytd1cmQYutfStj",
  "key10": "cJvRK3WJ4fTqs2a2nvsRhmdiGXJGU3hxiePRnpKoqq5186AJqiqAmA6s2sSG8FX7YC8PiXqSWj9Q68mFh4Yk9Ek",
  "key11": "5MdSzZszgQYjpYdfx9xc1DsHtLJCPX2g65q2ZtoeCUmJRVpiWYaB6mA79zBq2YSynisL6sKsYSSkzY1z2pqhsM5X",
  "key12": "3WGkPgzDK6Am4xneSbzDQ6Wdiu4rTpbvGyUEpL2Ayk4vbsU71V1FtS8aJQ74VNqsyKvxURfD8ZWMJgwKsujQXU9h",
  "key13": "amdTDQua2J2wXkEUNQoKJ5oABqCFRh8Cm8McKBLLhGYyHYSpHuUtFdEJKxRfvQraiKFvEMHRJus8wyehoqNSwCr",
  "key14": "4RJTNubiELXjmiZ7AF27MLn2CfntttdUxuoPFUoUEes7Ae4TPgNi1AiF8ahPrQbA6Dt6rMCwWjsZRh5DkisK9enB",
  "key15": "5B9hACstWK8b6vEtvMypUrMc7mqqkcU2gf3uu8g9v2chPHgnJMdvbZkZJLKD4gjQSyjN6RM3BJj9rrbXnu4TfST2",
  "key16": "24Fm6tg4XnrVnWw6KjMn2coqNvCPLBvcjp5VQw3vsEXvuxw8VAxJGQYRANhfiMn35j8gNHLZZBUErBTowQZ4T3dv",
  "key17": "5iPbW55VFECxs6KesHugcp1oFF1QR79P9mcmQ84bwJ7ThtggiZxnLTWf4QxnBCMR6q7d2UTYeVGgeBitH5jeYot5",
  "key18": "3FVAjq4bwgWdUggpkpawi7T5Z1dHGxF3CXGGmxt4EHEr4z6m26dpUr1CimjsT6L3guGczDN5XLd6PP7Y1vmZzHax",
  "key19": "3oW3UPtNB3snRzZkGHKhAdGKYb1vWQC7mBZ6QtbBP2hotcp5hToNNK9P1XqMexHzk2VSB96GtMLWrhWzVZd6qpp2",
  "key20": "3SUqLyh4jH4TxPFWSoK4C3tWMGBkTUnhmehYzS27c1fYJbJG38tZGThL2MaavHqEA2bTdCqVUsamQcjowY8ws1tQ",
  "key21": "jgQG9VaUHC348jXAmU79FCJURd9hxwL11XGo19WhB4LvZPJ35GpHBzdN837JM4JYJuBHLhvFC21Ev3rJAcC1rM2",
  "key22": "2V27Y5wDTEWc1xL9uwoarM5vaSpoNYP2rfkuWFwjNjUzzXLRCfreBQmYTshejfxM3Bbi3ocALoFKvG9VtREyLNZt",
  "key23": "5pnxdtEKwNxSmKDrwgSjNcGMboLfnytJc84XSqPDu3hXnyzKgmxJvVFgx4pTjRKxzqdGBYAQy9NbJv4FrJvhk7g9",
  "key24": "3V6isixfJmcHGTG4C56wQBLLnTvoqEuuGMdmMZCsiQo3R1MJXLHnnAfHw5iFQn1UKqf4Npehop2FeUdB1wgzfphZ",
  "key25": "36Jws2PuEzdecq9Hx77FyoWb3VDffYqbQufBhMxQJwHnmkjg5KpH9vukJphjKJuUcRtXdwT6TYrfdJpbYnsmkmji",
  "key26": "4wUHQiDCDiPxvaRvwmHBJfoqYVA1tzf21ZetmhQeEpHyW81YjY3WoreWZyEVfspBaaBGew6vCBVCotpbHs39pf4V",
  "key27": "zeStQFE2tRkjGKvjv5yFR5cqSzkJQoMF1F9cmEM4HjMUJrxPvZVuAKNPjQvfYriURejZSc3Xvwi2ezr2YvZp7oe",
  "key28": "4TF75gYZWn4pQ4Louo2dVFA3imu6rBQHDBaYxh9kUzdDbdVZrCMLEH3umewyQ6pR5MvztcjUhrifJR7DAVfsFEJf",
  "key29": "4ZYW5tptSem38zxgZiQ4BrRRpCkowGX6buznMesEESpxWeHYyvuX19n96ynKg6t7ShLJGZC16jMytk5vqYLddK4k",
  "key30": "4S8ffZeovWhp7guVcUfZTQkbokvzVnzcmGSWBoL4LnyJjw1rFC5mtooiRSErBnL85fB5q17n4kSnJRZCbqnGWkKD",
  "key31": "3hwxzKCjswD77yXU9QvJxBSj9qJJdKgfKgnAXWCz3RSHEmAxKBypXTk259HYTewsQ97ZcHGjxTSj8TCuNpchp1MC",
  "key32": "5r3FJwvAjGJEoQWZGwxq3EWmiwQhWDa6Z9ZPjSqVmivcRzGQv3V5PTS1YTVhZv3ZkY5Gh1uhHP2UePdQBxygVzy8",
  "key33": "5Zh1riNg38sRzxK9jonjbuF7k6KSDKrWLCkjuM7ktbDfGaK1BX6JRf63SVgmUCphFKiKNhjZQraJEwibDB8g2ttV",
  "key34": "2KmRRgvN568oabJytPGnAij5k3VN3tqvA8T7ArBMUQfEuv59ooAmD1VNtBjc16C5GT3opv7cZMXP8tD8q2uGKAKb",
  "key35": "5ikz42HHxFJFRct5RG8LM9AecaPd7FkGLKmck4hN9qXn6vNNnpdFDzxTjivV1ok6o23JXac73PJrZHpwzMWTmeGr",
  "key36": "273THaTJoZh9Sp8fzqxToks3PMDE3vGYHBFZMfRUqR7tWNfJ9iBczHhaX5xrLRfP3g8JaUKUhbPDGaXkFZGt56Q4"
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
