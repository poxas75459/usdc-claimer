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
    "3qNKc7GP8STrs5GiP1WjDsbrp9tt3q7bhDZjFAxKfrNbbBaGAUfKrXq6f2ysygg1HBPAZTMowdkFkf7ogibNCpcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WRCrENULbtg9U4K1GovbKnxsEQwxKd4jWQNw1ihMVPNX8LmNdW9jdwwjpSE8TjTnCkfYjFhdL3uN7aip96CU3mt",
  "key1": "626d28wjta85TCtbYtL4T1tiqo9Wb31xnbwjkR7eCzr8fNxaH8nZPUnh1LPXVKH4aBZXQXW2U9iiQPbgPXaQBj7B",
  "key2": "54TT9kEdwjcFfQS2eM8fox56GWrijb6XAo5wkqv32Br4qv4xe8QjcW86bW6arp51vaEzbtvaoxuNbTC4GJwvxR6L",
  "key3": "XXQCHqAsqZB9gSXKn9dB2cha4gwSDuKj63m1vMWCZbPBZ7uusG3enFhFyWR1Lyyx7aoJD4cYUJRrezH4T8DNAB8",
  "key4": "3bLTT6F7S3KBxqW9McxTfRjb37YJSNp2qVP2qno6EaFCJEY79SpoVdKsp6w4gBbaJGcFScKtfCfbo5jMPuVoCB2r",
  "key5": "43CjMNVXrn7shPMgCZZbgAmLbVGvyZHhsgEpYDcoTtqKHLAFKXWngmnLmQM7KbJBLZP9YPqwmamUnyhZEVcAntcP",
  "key6": "4kCGpZzdTYWtsCENNQYEfB7Q9b6btnN6KGtzYN54FUKFbhLEWxhSBCVS4BZkw9JkR2wwq3SNWkVacJZscPdYnGJt",
  "key7": "3Pb4gFx97AmEBeXLijSnZ7QCuq2SismyKayWTkfWpWoFw8RKw6jpUR3SGnRN2mEuY1ZJ3Wt8GkBTVRGHixwQ7NPK",
  "key8": "4X6L1vr6Mnv9XtTNDZccboxZibUYsScGB3ZwNQia7YGBpxDPtMmUjyRKqnnWtUM8TU7xfadGGTyK6tsGtWTN9gZD",
  "key9": "2EeiVaLLDRwLuVxTKjkRd91HCt2PRS6eue2WSXLC9TFT8tZ1QzGHFKJif1x5PMNiEHBZs6zFHaGXAh2csJL1m48H",
  "key10": "4j98zqAFBx2LVpKSrhBqk1yNom4FrSMUKfV7N7GtAdnrXsjd8EkbTtnAp9E3xdXh29yykEPRd4pq1hJtsA62jx6z",
  "key11": "4fWGtP1J6krbDF1WJtNiPUUKS7if3qjLzAfCjPWE4dHZhpz3v5ka86PtW8FmCmJ4PweVPBuZ6CJeoUk2cadsgTJT",
  "key12": "5KHtbJ6MqyNCH1zNuUhuw5TR58e1Za9en3ih67fFEyLqYkTrCUAZp5MgoRNNoF12LavQcgQiZ2RNszE1ahCgVVeX",
  "key13": "2znBdW6xjEarNk1aGLHzA7bVxt6coL3A9yfvdL5rcZyGrjS1AtKqSMEpKovWZjhjvw8CMhL3AGM6KqSLrrKSq9WC",
  "key14": "3q6J16J4sb3yvN8rpdnHnGe7mTSFW2U6UY4EwUzkZbtNXXmgF17Zdwb5xZvdVAHtut1HQxRL491FkU3yBLDWrivV",
  "key15": "4Anj4QuDig6F9xqTBrtNJ7eJpeoidVcAurZuXbmeP9HarhayvekQbnta62tjiXuXnfEsttn2B1PTVsPTW8wDwH5P",
  "key16": "3qFGXiEjrnZgubERs9iNUJ3VAhUn6Boo8LyW9hGU5XYBxFnYJsvSo6ki5qucdGbnAYjqkEeNKfye9xqDRSLhard4",
  "key17": "52LiqpVkDLU5VupGTZgkmVQPY3mVkCLvTuTmZv7kf5xB7wPVG1ZCPikAuNif8TFDNHffbaCVWUdVLSbTL3ww1sQe",
  "key18": "25ddxapmtkKqN1exkYZN6aWrREiR6T9GmErawGggvUFxdqvFuf6xNXQinL9QiYtxCBm9w6fev58Q8jtJCNCrMYcQ",
  "key19": "5at1ZvCg8b6nELBD33MhUSKSrAqYgVQa6oerw8tyVtgDnzXuY7sWfuKbPNkUQErABGH1bem2JN4RwPo3sVGMmttA",
  "key20": "2M6dBmacWq1ohtfLDjTJ8bDbYmVZyB4rM3cAkKHwKpGZv4bdKPGA1ta9rZNfPJuooYGroCHQ5v3sd6g48bqc9pLH",
  "key21": "2uNBNMWe6wz55NFsTPuCJMnfafswdUxCx53cjwGYGER1B3kdANF6dMczpdABsRN5MRTDZ9UvTQQcPCtTmZ3zzibN",
  "key22": "4oVKi3FAe3sLkZ9aUMBatqMZN1JUVFhrPto6ktDAVLsb5QZCHgSd6Sxvgp9QCXkfpZmGpfficngQ3TWrQRAodK85",
  "key23": "w5MDYXUCygWY9RmNYPt1JuvtsGQyDHBBesYPPbfNq9YT3NgEi7Bre9J5kaiZW8KW5wktxUHqLon62Upjakwycwb",
  "key24": "5wTJVSsiYpyNZj8tWkQQyc3sEkXDShjdJ8rUcruipXH7SyKtjFyL1xiXy6B7BS41CHxGPJXMyMxMnWfPnuZv9SA8",
  "key25": "4ta7UVpZsoXdvm8R3BHEFNnxAuNFtSWj6js7FpkLPPNNvQWdZW4dp5dmp8SEhWBdEv1iBL2bD5CR4DjJ8rZBZ1Kd",
  "key26": "232pZMzbQURfCU6mRuSr6Py6PSTBkMWmVpyR5SXpNgKNKTFHNnBpsPqcneZiN9GcES1JjtPYNdFPqyzJXGVAyRLp",
  "key27": "5vinw9G7UeCDtBpsLpC54doSKqm2SGyC11SZFCFoo2TATaas7mnN3MYBNKoJQmDbypZvwLEaHaq3k34TSbxtAY5q",
  "key28": "4BmWoADdrkycu4tyBikAzrQVmwkgmoEpVAJGQv7kYVUkTNPZJ7boHgdDU73P76Ti5bD8Sd9uVtg6MAjuV7trnRPQ",
  "key29": "5Hj8Avm8nenj12QY7LLiPzpvdDbCByPEwjqaSnDsQ6PBFq36PJZb419ZNYdZpAqa1vcMJbiiBWYu49Z9LVLVK9fd",
  "key30": "3xAoUiTB3FZ6aa3Hdwe3kVwD2bvD2Afgao1ciS3AoirgetJRhC22VXwyyho7M4LPUuKEs3145ifB9rigPCW9iKKv",
  "key31": "5Ju6Ywctg8tqjxounmjJv7h6B9y7FwwUKkZBLpjzSNzjceQ9a6wxztN4BbBQ7zSVN5vPHFZWhShfqBrKcYvNbpJu",
  "key32": "5p37mSehek7UZBsxVc7og9uKnzmJVF9VzvvnggJak6UQZJPqK15Ns75G6hDs1xFEwCb4EiQKqT7wp3XTb6vARjqp",
  "key33": "38vyXfq7Fa8acKBwafFh25hrE71SLnvXDqQLmpEvaxu53FcLBWVLf34Cpn2kAr5SqLrXt53TYLwi8McsHv9ssEkb",
  "key34": "54aXipBTnh6Js42icMjmrZHShMs4z8AFVboVQu9hmqHGnDWD3BXkHzyuHmLweU6DUQGQ5YfzN3d9g98PmBSQaobS",
  "key35": "2ce5Gt1fGuztgPTNc2sqnqS9jGzBUQfN6VnqLBL7bJydLNQqqp4UUhzTXFDqeLVVtEXP8cxVUtitmKSEFJ1JkBJe",
  "key36": "51xMhr5tnCwZyyRyMDw7mkiQHfBixUkbEGudo7aaSuheXGEoh3nqXHchPbcipSXPsFL5MHGLXr41Ssfnwv61MKhJ",
  "key37": "2Cvw7v7SDseP6MxUEZLRg24zqSK5xsNr6ftb4Uv6gAui8gPdAneupD4xNbxxfSRizDMuoZ1ZobguqvNQJ5m5q4t1",
  "key38": "2eoeNgWvAAxN9Fa8y6Urq8pdxtaf8V2HdZhR3DLyC8SW7m5ktfn9bajFMGshRx5riacRJ3UZBrW1Y1YW1RGytjYh",
  "key39": "5gCowkSAXvnT6F8YW4u9GVc9W48yUZYJrSCLVc29aE1tXFWbWFsPyeJPEP8XzYBcmdK5EUkSFY4xqkBQQizbrHxF",
  "key40": "5vJ1vYDBooqdyJsF6Q9Bu3bczWFxqe9NPRtQ94pq3saRrmZBd8bY71GETr4kLqyV4FFoaWDYNh1ERgcARuKhtPRW",
  "key41": "3K7Z5s5muq1BFRFGsz9W8zhYMzpGP65d3Hn77mzF5RvDw9FcDL7c7JbaB8xrs9HEVLyEQhWsoFVX4kR1xo4c4ovm",
  "key42": "EZuyZWrE7iXFG8VZ9yPhzGfrxtQMWWgDKWUMrphv3J3GG39tXUvkC1yY1D8VbK94arzRcLKL4WgesYwbA8z4REg",
  "key43": "2nBGmnL48XsW6TXjbRWH9WBPHiFCHUdxQdFUf3sLB79DryJZrm2KbXvCzW26oSw3UpwyNMJMPPcteJXGG8gbW9Pj",
  "key44": "5ZRRLfBGmscXrYT7KBMm1EWTcy9qR5mkAyAjtA7ZiZmDAGLdh3MpdqYC3sZTBpPWbJudWfBJZUjZRueJaWAcZCos",
  "key45": "dJWt2Z23gxCRc37F8jrBi6ys8qnyJWhVjrHVEgdqNFGkMsG4n1jPZBSVdwtiipg4M1WwbkgrSpvY4jyzfESKtgS",
  "key46": "2Y2eWRjuhCqSTDt6yaipfQduvPNGKL69ryk8Jcwz1Bp6MtVvmkuFinJwYwHNsM7m2HzvF8AeBV3hQK6azz6k3NvQ"
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
