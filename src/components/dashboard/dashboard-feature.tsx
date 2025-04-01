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
    "4Lrn3BFW9SzBJgPJ5zo1S6kKxY5DJw5cTUECG8yFkwc2KzoYGxTwtG3SYFZ4c5MVwyta4s1xf9WZNsTowyV8X271"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aYzUeFzwkfQrTgZaHUNWBKFSCne9YjeLbzhM3bYHPcf2Pp1u8jCnESRWFsNNbDngeAZ418DwcjMdZb1bMXsyCgL",
  "key1": "THn8TyZSywh1AYSLg6djPpmHaWvfVWN5mXkcr2k8GtnxjQarNE7Z1u3fi8iAJuKvpXsSGSAewW7xw9xyfPYV5bv",
  "key2": "5PrJVDFzqMdU5Ev2zaS3iLUBj1dVwYN6ar7W3EX61pnZ3KwPmyVfrQDPbAUjxFYHzAPwhYj6wHGXoTchHxcM9DdW",
  "key3": "56mDFWoAbqx3jmmAqdhQ5Y5zZ8mdqXWjVGuGt54preZhPtbjG4CrM3Z8RQ63g8M6kfNDBRyF69Md2Km1v5FqxjD2",
  "key4": "29jHqbH4cnYnEG7A1vjxthX7LXkB54x9Tbw4Z15szUgZMcNcgi6F1W2DdWg2v6cceqDESwNGW5kJUK5SareEK282",
  "key5": "57YyTFJNAUbqCnBkfDABYG4uhc3qBM4CKGyuueZUpoQojHpqf85nMJhbzu9SW6gKBRtaFNGr3GZS1AS9ZoHGfEqY",
  "key6": "4mPDYBLCvNxRETc3KEcqqPG8T7eRJ1yGHVgSKLVDqxYV9nX1gbCohcT9K2aDEzkrMneRgv684d242PM9kVQ7BEui",
  "key7": "2bLjPdX9RzG1DvMBR7tq4ZQutVM9Xje3kHosojq48e35rvPTyJHc5SRfgu4pLT1buJy1MvxSC6FcDFY5gFtBNjJA",
  "key8": "55uyGhNAsAtQEBPso3S6jDZNJKcfQuUbpJfLGFPzBeo4iMBgZRpZ1XyY1cC9QGSScbm2RB1pAxbqm9mK4qBwJcfX",
  "key9": "Ryh6vLwMBsxDwRbyqPqM2824Gxh8Bw6Y6WKCWSyhBzMKMWRXWbZBbQD22XuGm721UqKkEDNYA3rKcGrgCr89bR1",
  "key10": "2iqKKonfX7L6XTnxT5FBncU9YPx7UgWqU1dYQWKKk8RT9T24Pzs4bSeQrQJQUFqftq8fBh8Bc81gSweZuu7jutGo",
  "key11": "3PS4DYeS3MM8vyxJKEHqjiTWnckfK7daKGFuiYD51VDAr6sdne7f6e9AN7HyV4Ja3bdPxi8hNuYJ29YQcWwwNEY3",
  "key12": "4aNabDHEYB2ndb8WKTpNJsnJVmYu3eiNrLyG4mTaWsuXC5in2WyWS5JcRyq7UQkzWYvAru3r9aiWtHfDyoofKT8f",
  "key13": "35yjYec9VhdHTrdhxxJeCve41arCiWwgsSat6Uru3uKW12zzezqnddJnyZQbv9dto8pfjtMraUwVRQMWUbVqiW6A",
  "key14": "gmHBxvjVHwHEYyvJsB7636ESHnqG6uzyyTfRdnQwekLSUaHPQGUmkPFnsrg4NeWQxincsnnQoF12zc4tWzBS4pP",
  "key15": "3J4nePx4JggRfZhWQ5BkSnRz8bwAsJJ9VrjynAXMJi7MtM1CM2NixRkbU9UjwhR2RxdHAzf8GPS5h8CHfZpqaxmR",
  "key16": "31L7MTSH3tuogmFeAE49eLgiGRYYo8R6oop7yQkWMErxZ7M1hrRLTJRcKEYfoN39zwj6wMxmYk3LDTRdnR8c1VKe",
  "key17": "5yq1ZUWZmWLS1oSTTt8bMB125qgUQSMQcCPUATjn9VkKEjQ2Jqk9wCk4t9aNHmzrPth9d9TVVwqFM3ptPvMztRNe",
  "key18": "5aXRozmyJXKCqYryQQzrQxrRaqCoViGDFJXj12AyTUv8r3rYpjeaG5JVYkYfLEpjM12WhM2otk6b7QwHavKWnRcb",
  "key19": "5J1GartApypHCRn5yETTRT8zuFiCa2qMTtjya5y56EPMBAewFfqC5gg6cH451LfHZQ4sBTuHEVLuWhWMQ4yrQgih",
  "key20": "5wGpvuXCoBuzaNzpnvKLEjNqvMwfe5ygtM4kSi18LGKCUysXKbcVAVVy8ynkq61tJvJXtA8JtCxPmxo56cnr9rce",
  "key21": "5MZcJ8S4kUtpSaQn3LGVuuvwkyNhKGJH8EfhXdANLdrJZvSGzdZwDti1pNy9uuS6qKJSkvyafkt9wJTLBa9CKpEv",
  "key22": "cFrkwgjRh4Jo7SKj8itB8ttGBPtXfjmjd5zGMhDMkqLik1SDgAagA36dqVY4DWZCaN36wxm9gTydQ3DQojHTPXc",
  "key23": "BnAMNAC5NFuv7xwNk9VGxtXknpRuffH7ZvdGFQSW6mJFQXFdC8wBPRSG1Q8dce3dCBCwJwWMBfKmLKprsDQaDL4",
  "key24": "5i8v7XZFq6a1HNvKYTP9KkEPEasHKuJxQDtaEKVigthEVoeSBSqoq6p3ght9AfmyMxxVW4gXAWPerBqs6jNgs79k",
  "key25": "2YzR5kWMUhNpp1bD9Ek2DxVV8Ma89iP8gdH9quAKKUGQsdTX3ju4oxK5zj7sA8CYco9X7e65CZY6bGssrosyBCUQ",
  "key26": "2DFk73pG5PNySWUiNM9AScmjEJtaaFNrMhq4o2dqkXcAcxmdXFqpsxz7Uf8afGUXN384S23K7ujLZma8VAwcHMox",
  "key27": "4c8gXqg2TTK9a1FJqwA2JkvKUbAkzaQuxNn2ksNwv69wFynq9C1RxZNUycWrqMFB5EmmczSGYkvJvKDCZohh6Ukn",
  "key28": "3xGopQUE834xTjv6Eb7nhi5s1eJKy4JGAoCq1gyLHdnJGTTvJDpF39RNzuzbHy9RShiqAagRveqUfovcddTjC3EF",
  "key29": "3MQZZD5wLZ22gir5fEZzQGzrQNzHiHJe5FNp82ySqyGyfJK3ydjLAc94bmy9XKbfLZdhmLtExrGv9cPZT6c13KBu",
  "key30": "5mUbVRQ9ahs4GK7YxXB6wMLioxW57whjGXEq68fyki4gyL4dKf5YT816o3R2Jzv9PHyZkGPD68HMFKmFUKb1HgM2",
  "key31": "4PPZpdniMGnNsXPCSWM2Hg3dusT2MUHz5sTSQajJ39zDae9uUSPZ7yzCnJCiscYNkfNMfUVodDDUswoR8RU272oK",
  "key32": "4rhcJ5iiabtLQCW63kH31MsbqNc2kEA6wGv3uFqaHFDBZFU1rWWms9S4SDE29b6KuMDWnpbmoKPA5FUqWYdqS9Z4",
  "key33": "3B2AnFsaHn9Pa2vo7LnnBBNND2MGz5vs4EyH4uf77ttwPjmjnFU6so1Y3aFnjBBsfr1LngBrWFuwsyQ5x2pTDaxe",
  "key34": "2aXJHyJru7pHKMCYjxpsjCokaRuobpUknM3Yi9GxsXDrpcAyLJQ8hUhijF3wDbJTXTz4RDYbPQsigvYLK35prLKe",
  "key35": "4GxZi6QNzb1bW6cWvkkA7MwWEotmtKCzWVVVZEbQ4XyV7LxV5fpYLvbuqodptuNsx1SdjVLUaQ85aQCoeQziwrJ7",
  "key36": "3SGULEZmxPst1GBaukVWjuaUzRCq6oucbCp5NBbJRJcXZfjpqKfiQeJCxEvUHZgsh6XKjww1QqMabTR45pCdnD4j",
  "key37": "2dt718LHxVDqL3HR4Y7e3XVaEz8uabQHsDLCBFjzXVGDQ3xR7UWnbnF2kZ93HpqLSASLi7uQCziHWcih2iPtMVqR",
  "key38": "5EsCmujMWP5pxcJBvJA3cuo9aC97fTwbBpHhtKYc1CTMMdWfwB1tcEDrtNNVUgTqFqp7r9cTqWyXECu1xEGEDbV8",
  "key39": "5hQMjDfLDkHRD1WgQBVCYoj5i1rHAaFAWpXYgrtJJ2Uk3zK1WhLGrXdS7K9XbMwNeTDDKjRq1gUggVfrSQpS1FPP",
  "key40": "64PrwZNQAPKW3L7ff2sWkvvan9hGfTgVkKrD1BNQnX7VbCzgNtFwEk1SYzGwxcdG7KXVXKYNAnMNu5bekA3vfYG3",
  "key41": "2Gpvf6hbWBRvxFNukaqVjzLN1LkEfSRh54uJVwyq1MZxtDWqbpv2qMc99fMDcg9QZBr74RjNMVsjuuLPs9j1QC57",
  "key42": "5QrFwdzJJSYyMrt5BrJUtTArDh21j5DB2wzYDWBjcp3eAiSX4RjVtUBVRfyvYktzrXxySZjw7Lp8zTH6R4CT4WgE",
  "key43": "m5NNxngWesuV9MibZWXkhEw3ZZYzFh7w9xVqsP8HBEusChGC4ZkuUyndEC42CcrPCgCP4g3d1cFcBRJYU7oVoa2",
  "key44": "FizcYACyYfPmAaidD6XifMctdk1WXDYhYCcQ3RDfNtU5fTXjQzQUUxLK24AG8cY5RSJGViNNaXFmenvSW8jwS6t",
  "key45": "RREqDCDGrYdaTfgbp7FtwXEvaBS2SAG4z31ociiDiVKqnAfh73uo8oBBF24DMrk6jsYX31DzacdYZTRPxGvXiZh",
  "key46": "5kBDLiC7f9QXG6Xz6DxqeRgS94pVMjy4Au2Sseu2HrUrsH17wYETc4wQvU2hjXXDe1G449Cd3WLAowFrYXYqu7C5"
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
