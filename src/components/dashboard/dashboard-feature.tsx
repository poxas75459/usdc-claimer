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
    "55evKKHRN4pSK69m8znvPGMf2ZmKvgLyg8dLCv2mzEiwWKTqRa3sdK2T5LuQJqrjRSXp5SJgg1pdTmG4WM2ttrym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4stbfr2ZuYeU5En3QtbNeC1CzTtnPiXNT9QS19JVdv2NPV7GqJ2EVaS1gnSVLsaPMWh5UubuKkmks3JzRVz9g8Qm",
  "key1": "rpfoxrruZfPBfLAZKTVh2Zjq5ECxzmLrC5jSjgkuk7HjKGiAgBLaZ2W3P7NCkYu6hMiwjzB1wSNqAx3Yb6MRnYL",
  "key2": "531DqH1LBrVWv1okNhTfDYAGmmTSRUWE6HTk8dVbae1kUeiAdXZQSMm4frmon7q832QcGhdffz887Z4yyp7h1RQZ",
  "key3": "4ZSxtccfcjcDv7pV6c2noRiPBPtuXTg8P2UzVLK7yXdLkQtzmewijDySd7RVyXUuqGP5Jd1Z6miVDaDhreywEGfn",
  "key4": "2ZHYZmFAZbQckczeibMfazoxPP6DBRkGx4iUwcDD36QvHPbeE1uJK4pRKJt8Ne2TAmR5f6CuMcC8JvH7nPvrNotp",
  "key5": "2TuqZx4Py8yjQWBmk5Vq6tYUmMpzPKuPBiLR52mqN62b7B1MmZD39Swtvn1Lqcc4uYurUBmRkuh9ARqBsf1VTjt6",
  "key6": "3QMVzmRTnWBP9DAVQ4XY6Vj8CEL77z4PYe1b9aTRXua9QLyPAafZT6mt2RZdRBQrEYMfhty6dL28jJvcqYDtxXmw",
  "key7": "GSpAvqLbPf35mSfegGedCcSMHKjaJj3AUyVZFHU3cF64Z5aX8GBFgJr7sYFQtG4kiBWX6jB8tqHnAhFjfHUh9ca",
  "key8": "WeugKQ2B1jaJuRgcvAWkJPMo9JvRk72ewrLxL9tEqyA29fxUBjp7S3jnG9vrNRR5uZnvbBZL5eFALQmVanDHmuA",
  "key9": "4vfZ1QLhvK8tacWNcrdfjKsTEPoRXWGuiZ17FoM9t11poUBgzXUyLPbycKJU475SkghaaSA1AwYLTt7KVXwkHP1c",
  "key10": "5DfRBwbDJtG6U6QU35LSKjiAYZtPoFPMs1FpxKtNfZdLPxUQnmdQxVUnW9angqoqHTgPC9uhX8j8koCtz6L7tkWS",
  "key11": "34TZFrNnL6BAfpR3y7Sk8DLseYrdcLoNhecHNn8LsgpKkw4NgLCHnNexEDTC2JQsk7xZsAg3ULd9GHANMM7EKbLw",
  "key12": "ipvqgCEyoW2ikwYuuu75bvVJLw4VrB2NNCMvmaHwXkMytgS217oEvKRZPYcQn4WEaHvq2TuMh2cPwkyqQvzJCG5",
  "key13": "sAKcHg8NCPXEUjMRfRVpQqQuKv79G68zfjRoeX24An1zv4GFjx17KrmYeGUSZfCsk4ejDLYzaCsVtTJnTzhqBXE",
  "key14": "5sm42mwHYjm8tuEDeEn6yjzeV3Yr6wyXLNXnWMVJhuCtedByz1G1MEL5U3Bmz13Mf6wx8gWb5DECDhL9uGV3634z",
  "key15": "5P4qbWiNAraJocuQuX4ogZAK9giCordRrNmU8zKWgXFx4BhcMXeY6grVdwwNJFvt6JAdRTyUxmNwCLGvR9aSTxM",
  "key16": "3SdRWfY6Y92ABg5FhYHqmpmpXsjpexdgGDHe52124EFVx5yKLw2RYbzwKHrMHJVbcg8i6pVyXVxCse2s9H8sGqFt",
  "key17": "4tX5AVQowKCCqaYHLGZowNJdqgPN9aUmugh5EBUqdmVgYbwFndbcKWCSDue3JqPB7N3bsdAeeiPbcq3a3FP5Purk",
  "key18": "4aDbQaHSvAg9kNJWf3FDtU23z7XtSNVQdXt7oKVwbJHdi6xLZQq99HLpGX7cR4jdw7RUKQFzXb9Qb9CFTsLq3FyM",
  "key19": "4gjQHsgf21PokqHb7tb8SttxcvVZuDyeKuX5SjfytHw7a9nrXcpEZVckrR1sY7hXbmWxcmTiWxTDsCRoNjfXVLmx",
  "key20": "3mmjpa1DuNEkydD1NPqtNP1AKBq7bJXESQVL5T67soRHixQc4rDQ5Vh1cuNtJxcQhsKBewPgCGRL9eJ3eja9M68w",
  "key21": "4KSAQbsPzhZYLivjNC1JJrWKCBU1V9mZ7hEHdQifMXpGzaQ2Y9eTEybz2W2yeX4N6vBny73Sb7rWMqYBcqKVndRQ",
  "key22": "4XjfVTo1d61VcUtCZBHMxxRdkqpKzFBbgATTugGw1xVut1PGJHyNcxkPzU91hdWr4eSEqEXgpc276t2sAHSKmAKk",
  "key23": "4gWSLG4Vqy2hBWzAMYiaapbGqxb6VHRSsgwuNMYx5dP1t9xCxsjYFE3WihwdEEk2ocZb9HJe7i1N2eQtzHcYQs5F",
  "key24": "476mumAdrLcbgL8ncUaBA7bJWfqC84tkdd9AHsDsrAw5QLfWhBmBDEa4MFr9QsL211sMsJmhy1X5VVMSd8CTKTWU",
  "key25": "eanXc8cmym6KwNZgjMrU6wEULXohDDJCyEKf5cMyqJbJVfbGbnSVyzEqLccqjQ97aRmVTsuPmkTPzUdvJqqvj38",
  "key26": "478he3QTPf59S4q7pD3ajh2ULWH3qR6nL6GVAdVNkopXroC94Fook3AsoGixNwST8ndML7FLgPskoAGgGtCKZBZ5",
  "key27": "3DESvbd1m53sEWkBypQJg41QJx9QW3wPCz88pEe1pxNfbBS5WMn6Bzr4R6AwKbV6kFopL8zuMQRDsSqqUDCVxWd9",
  "key28": "36aY7ag4bkfzgqEVgrm86er2kQ2ZpNEr5EFaUoqQp4PM9PfpNJnzBQf2zUNU1vS2rCv24PuYAU6oEqKjS4C1hmUd",
  "key29": "5udbYCfKh2deX8FkiVKMo6KSype9bGjZhFcpryq6rAPBzcsdmusHqMn9YRM8u22Zs8FRfoBoHcTXztf5pkL12ck3",
  "key30": "4p6AbXoiPJzeT3xMAYRyDGZKgEiiL1bcBRrHCS3WQcEBKjhZ6d3oQaEga5M8HzQZd2gx8xVnrAx41R2oVajCSvRY",
  "key31": "2gdwTNPAMvsZTaXVwcWG6qUyCxMsGM8CgUi4yXshxX53CbjYYxn1ojtTp7v8cDUtZFogcXM8oKphDHPpsRRTbfc4",
  "key32": "3wCwQeffyaBYSrgnjYkcMLjMiXfSEmt86QmV6VLSZibVJaFaGZkVfz9HbYfHkTCfRQ5ozw81tKkBphApLQVgX2Df",
  "key33": "4qboX7rYUDZvqssGgLZXS5NxHKzxQx4XHSR14TJ5n6WEPQz1n3zXqsbtoGiTQ134jCuubbHBpvthAL8xKX9tDi5T",
  "key34": "2a3V7eNRP8mPgUnbiuJ9NRJMezdspPbLgeqWnPcBw8jFM5YziAc1wBXonHTRM84X87aLnss9n8Gohj3nvVdVjbir",
  "key35": "3pcAa9w7tvyeCP3j65MmdpR3QZAWnzWqrKFpcjaEjMP62H72RGpnQEPsFc6UzQaeZemby5LEpWJvcU7QJGCaMvcW",
  "key36": "kRNRa3F52YFgCNzEJWaZD6n2gCoLtSDV18jmuMVECjEBxW34zpUpiRQv8m4vAHo8WksTFQu432QoXsYxogGys89",
  "key37": "5ZBAdvJvPR5QbzFhn7Fe17ksz5XPicgBd1b9zn4GTphrHJci1TbvHHTsGMSmEpErmEN9dEc8jzfNiS8CC9SWFsXb",
  "key38": "3e45RHcpu2Z8w5VwUHWweNzTNa7dxAqXK9Bk6MSNxstqESAzzgvWTCCFcfPzQhCv2EGsM6TVAN9newnsQCawSzRd",
  "key39": "3WZmBBmjURPiREfc6uzajTvVFdp9f6C2xZgb7um6RqGG4sLc8UeCVxVCbhM2YMFjRRuB6sQqwAYD9h9UU2JGKgCx",
  "key40": "XC5Yy24ne76MqXV7VGVH9HEj16tFPMXCqx4r9BtppySx5hmL7DprtiQkfksJYG7k5XsZB7dE1Q3tvzRc85tL87i",
  "key41": "5nWvyxXF3wTaupMJVmKgUhA7tJmgXFBsA1EZ2gWXJrdiADo3VqVytq9TAyJfnTiCMVLzNYh6DpVttLKGrsbYBRRo",
  "key42": "zsYpkHB1czst9SCvH7mdz6vJgrqzrZDX9EyGzC9cXrep3NPSRRGMAsoQ6bSYBn3rDx3Q8bkHv5pS1fXYqWT9Apw",
  "key43": "3BeDwuaXe38DAuRhsacSncRDbGgT65ayhQfLXhdVWjRo6PPhwnMKsg5ZkfHdfX7uNKKJFU3RjWosY7yUfBNQe8zT",
  "key44": "4TJQZDohv7X3B92FZmX3K2b1Ut8F7Po2z4HzTwWSuW1yd2EZXRTsK8ZBetU9x6cUXfh4mZ151VV2GEikKnLejviX",
  "key45": "577KZDUShX2pkHfmLQMfgVLqTPEnoGRVsXtH8v8riv6HHBazcNjFbdjW72Tx27s3yztM8bLF2EaguCBbGREXUWff",
  "key46": "RiK9HGv9apuqTS77jFDQKLetFuzYRhrjVn29J5ejogxmdbc8kVCcNeWch8Kb6RBdSx2bnsAzFVE6oHnUfPPtVDY",
  "key47": "5xAY57G7vp7yUgW7uo2fa9bG2XFywb3xoa2CumyUXB8LdR4tzNJqNHzyX9bhpnKA4Dgg1QFVxHHDguM4p2kAETVi",
  "key48": "243Ga5uteJjkNsDf3AUHErwF62g3zRU9WjeStsrkvGzJrYoeJHrpmprAYWSDirv8qBPpJfri7kdyA3X78L5tN3G5",
  "key49": "5ZVp9biAAZS59w8AVtu1o7KzGeW1EeujaJP2f2e76aJZkoLHda18D3rEDECGxC3zCYFHYdXx6HFh7dMiAhq1duWM"
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
