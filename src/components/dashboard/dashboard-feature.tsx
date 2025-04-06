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
    "5Hyu8Cmj423WSLeiKZJwjEQSdd7yZ33oj4VA94UWmjDGptqJzwp2uVHUXv4VJDBWVda4Gw5CfRgq75bJaEjS3N2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lm9eabt24LTUKUZP7KYEVj3rVY43xJ2qmX356XnBFANWAPmG9PNB1TxRKFbLsvBQX6RF8ph1b4S81Zffm5zqaBP",
  "key1": "5AWE6qDP8cwTKzDiSYb16ym2eUE6vgjQ8FZWMRwYqQDwcQcGEFC7wc6CFsaaMPhkQg5PqEkGadqzfXTTEXwZoan5",
  "key2": "2TXX43wpxYFzLKe7mPtm5qY4gaGfnXL4TSaGPqSC5sjVf7SLRECbbeDa7nY5PtFp4mTM8BZyu5oNtCjbphLBdSyt",
  "key3": "uPjvXvZ9uEghpxZSU2PFNjQibthjpwqaWiReUKUEJKZ9mRwp953bEWGStcABe1KsjYyGRYXvFx2qyJesbgT8Zsv",
  "key4": "3LQxdYwDbU5jR5kQLuZZUZUxk99N2NjTLzZexGyJzh7UkHnJ3AgPhReWT7gQD5knvCMrrWvTDw3Z7aXbwFveMNWi",
  "key5": "3EutcAdo8QyCpGvSJkNweJGxj52eR4LXtLNJnF3wMMoW8cvZV7u5ZgkLDzXfMksKgrXhGPGjp3n4vLmAqFwGNKm",
  "key6": "QgPWdDxSzR2ycLKNc7upsntTYM4p1YE8axRGcjHjfBTZkc6KaCxr4kdi85MSRV5UyTHKpBtvadvAnbdVexR8tkT",
  "key7": "43SVwsHoZtNnmQB7WvJfU3AMdKY5CieBvnLc7XEikQJdBLo9wN9iuLmTKMTr1PpujLxjkJ9X1MvXxEFZsQFo2yuh",
  "key8": "4NXMkkyWG1NeWuBynWr3st3oimNNdeKkKnBPUGBPz25bNTo7smpchQTeAgFSpqxWnGVsFqNpPTMQbQR6dVLzYrf1",
  "key9": "4zMQSa7wRFhrjCVi77Hv8G98av1j8vrC6SMQo9hyvtX1YmTg4FbHP99fPbVL639vY4vScAEdwLpS2LwRPq8osgJf",
  "key10": "5gvtsF1v8BvDcjMQwiWsWEByz6Zh9m3Qdzgfi9qiHLsMaxcoZUs6pR5AqXV7bVV7riA3LR9fhvVDcmEUho4FKtTr",
  "key11": "yJYfaVyurXqDvpsEk8qaAdWHRqqvvkEMZ5QA3jUgQfd2RtFKbmi46uYhLwhRprfZczVQGa6abaXtMCU9f82ajgR",
  "key12": "5s6DEr9URsHprDni6T49vZz9gUdwXh2rY6NYbRB7LNHczocje4CvH6szn2eiEybqXGMjxB1oegLbcstWu99ri657",
  "key13": "5kyGdJZW1VRPtJYxXQxvryPGb39rL3yyikfB5erzsBBMZT4LetfTASdUp97gedvaJSBBSqXu5fM2dmzNafwSc5yn",
  "key14": "2skUtS6MUFukUQ6Foh2cw8ukwqJW8sPpTrZ5NSZpmxYtYsmEUZCKBGkEdx6QzCtQU7SVLosHhYD3kQao73ZV9zL2",
  "key15": "4A1Kxn2fbCGSjUXnVGUKTV696VvPoVX8pm6qa7EahC9Kux8YDgGRWUXk9wifmt4zSWdbsFdYEHD56EeE6jNPkTUa",
  "key16": "4C5WtWMcncvVPQJ6f3Gb5x1ngbKJ5BcEDYXzw9JS8eJRYRswAfemMnzh6UDcTcCgeFKmcJEVbE7wCCy7KePYzny4",
  "key17": "3hy9cx5tAnEF6Ajo5HTqKJaqJ1GMS9i2FNxpfhygZ63JM4tL5YA3ThXD4ovpZwNojQLax3mzm89PxjdvrMEZ5WMB",
  "key18": "4QhyzP72Mur7PaK9db82ZDB4UXGPKLVXUWiNYkghvRir5G1bqRERs5D2VQNgVKjbucn9FXbX18k7RHqi8im5esas",
  "key19": "4roGSNxR6XRmvr9AxeJkAizgqr46SMqyHomsJuqPZu75c8jAMiyPV2a3ah1urLoN12WMHhk9AbnVHmBARGf4B4TR",
  "key20": "67VAbWZo8Dag2pVeF2Z3vGW7n5a8tP5c574VJWgA2DxprjEY8qZs4mhVhKs6vSceLPgwX1h8kz1SPLftf2VRHDdL",
  "key21": "4ekum6Ld7y9nJq7dujAELrd7hiXDXzvzRXuA1JwunkiEpYvihoXWKwZkCftqt9zZ72veWGRaGadKXQpbgKGkziK3",
  "key22": "2QFnXZGw5K3HCWxuJye9ZpAUFN4M5LAqvqu2eCYuuS1zAc9t6xHsFgGWTx2CjKw4GcaCVdiJ7fNGbihTRAxLzwfi",
  "key23": "5xKyx6euqfFZmEWhE9Pwo3ZNjEsJSnue9MpuHHagg4WwnxzBkFt9xeUbyTG2avLUUHaduR3qdQEHtw6kBuaf2ixg",
  "key24": "3q6mAkSYnH8cvbybrghV9VDaeBzGciyQUokcyTD1UvwLAGMCi8G1UKJX8xhypj5L1hvLXbjw2PNWi4RsrPxk3jpk",
  "key25": "bLjG6yi4H6Qaxv47ijL6SbbF5hty4PdyrcnMV3HKMFWF1a7gw8Krqmhn4gMC1uSDYYKG9eWoiT5P6cRaWD74ue8",
  "key26": "4kFN4LEqEKeQSRAGyaGCMb6Y2yyBF7Rfx2drgdJaWpYRFLB7j5EVy2CBFaTFUrHuujVR1nMVvWWqEm3Z4j9wpdEq",
  "key27": "m22sBPHmDbPqGVGmAnFZZ3xFrEqPL3sP7aC8AwkDRs12RNSWmBGpZcuvBcP1DKs4App25dhGQEqrw4BMb7LnEKL",
  "key28": "5qWwj1PVm2QLeeePRSXhmDGwZk7Wo1ggur4Usk29SxL4L33hUCGsvxWZvVxpRJSwR9aJJDDkTQDMyYkQd5aKwyi5",
  "key29": "5ems2PEXupHWfDVmQPBWQHPyd2Utwo2K5d21U4Y8nUAxXJBNUMJ3J8FkS2FNDvMGUreLZDBrGMTbJPeRLtpFbXBC",
  "key30": "J7YLFw4BqiujSKak8wEe7EBGmNzwoVTyPi1qDv6E6PQB3twYdatp4KucCpTBTy35rM1bTyzZqvgR3Wjv1BciM1g",
  "key31": "55PfrqSD4BmJrS8qwfLED3nKEcCMnFVmLmGuQ5rA8BWJXQe3chtYrh7W1av31mtMTx2w6T5umoK17MNUC6WNLZNy",
  "key32": "3h1fbMVB9wPKv9JyVHmJTUxQwK795oVZ3qJ8nMsaXxQmoYgspWaWXowQ4pNsQiyTdmFRv9x6iouxmuHz2FdJKd3",
  "key33": "4xNUm3eCoW14MzV3VQTRejtmz8AkZDFJZXQ4WgPo5J5bXXqTdVoztbJcRZ7puu4tka7AVeigFyFb73uZvsDstS1Z",
  "key34": "5QJN95trMxGwg4UbV9sX7uqboaQU7Y2UzsgKqLMPRKw6f4yMNKS8zueMytoXpX9aKTvW75Qj7AkirKvyKgDrX1He",
  "key35": "51LSimQh4wd9F2Cg1AjZhtnyQy2kFDMHekfoQYiwdXVVMTqLHJtexigwfJrwdP2CjG45kaXbNAZyFujUHn6hrwsR",
  "key36": "676waTax4ccPm4U3L7Ekw9tc1x2L6RmmLnjcQ2N3DfdpzMpgkyd25FNC1HhqL3PFKeehjYj4HthuxMFRHZDbkq3V",
  "key37": "2XHp7DL1JDYPuKvXgRcTRSayp6s4qb78gTBqooA5yXws6B328ugfdin2cpRo7DFmR9tguAimmPsx7b2sjFpZ1gTZ",
  "key38": "4cBaTwLEDB4NjGsLHvXMRbd1bzDpD61E2tT5UERutAYQJrqJZ7zUmwgRppWdgyLa9fvxZMJx1q9eo8ErrQJPZ6b5"
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
