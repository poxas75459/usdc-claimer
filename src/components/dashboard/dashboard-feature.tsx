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
    "sjTEBvtRTQXFwiaetYV9wqAWeU69JuwFZxaUoBnwzWpioRp5KLcrbNuF21E8JkqdEBAuE15ftYriv7r4i2SZPoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ux8V48g5RZqvj9Bzaw14Wi7QzMxQaABFezAKviEeEUVa8i49qGegv9c3rJEBqfmc1sMt8q9isz3gARV8P2nbrJb",
  "key1": "2jhAXjkDioQXXASW3DkCfnzUtWuqwyeHvVyPyY4nwteUZnEpqCBaa3bqFKn4ajcoH1Cc4DZiTTP62iNFiPrPtkb8",
  "key2": "3E39EaFHaKKyc3rvqWpG5LTGvD1TJcAVv21oVCrMW6CwaQFcg3zza2kiKvxZKbZG4xwZuLvqH4XSwqwvYwG7c5jb",
  "key3": "4VJBGYjUiVuoasWCtQQrjJkZSEhZ8U22ejESMU3RU5KTeTbofY5iTweci2urVTb81FT9vTWPd73KD9hBSDrY2isK",
  "key4": "3X3zhkhQx8YpJEFxz6dQQJL1fPWQ9sbzosP4V7zvVi8GW47LdwtNHSEq6SzLY1UBMHCF5A3aS2h5W5EF9iHnRKjW",
  "key5": "5mTpfJQVXd1mUgc6xszbS7TEHxBYaCaDQBfxevnBqFKRWm7Uojo6WMAUAr2BAXfGN1zsJ59RWi8yxSiXDHtbt5if",
  "key6": "3w7ssht2rzUAXV9VGxwnV8ySqFKWhmQou6pHT4YxFvWxhnegP7UyG8DYW69CJtAC6wP3BbmqRMspWBD57oHqjEVA",
  "key7": "4Lm8J4dvB11UEDttQL8FPzLJ4T7rV4KumgectSfxsVXECpETcLqfJ3m7aEbdZSJSxNJ4ASKzofZDGkN5d4SAfs4j",
  "key8": "3CEqyzRgQajH95EULLBkgjA7V8BV4zjePBqPQnH97DE4zpyBXbRqK7DggvwuqnBiPaZPNWdsDq6baDwsFfdFfyFd",
  "key9": "5fn7uESqhNeje1gp12z7J4ad3SeZkAweypcNznXqDRTmQGvA9hxF72g8JRwd1ayyqyemctNcPh4PqpaT8h7qRJfF",
  "key10": "2L1DyJPhNZiAtiJNELrYqgFPencanJqg4uBStRZ1DAFWqYRZZcpV5fs89RSu4aUdKzqFXcyTYXzzjPS7ef2prc3E",
  "key11": "51pqG9RbZpCe7Hjb1qofG29AQEQsysi6T7geCF3ynm7fainm5My3v9YXjDRJKsKsiVstK8ifFMQo6JaN5Ajt5cTF",
  "key12": "239HBDwdhhmuoDXMLnycNbmGWXouHnHf8CDrrNa3EcEh92fMVLue8CvFcaVSRcqabk53cHs2joMvoj5cC68pE5Ru",
  "key13": "2rqdxv7etZautHaA6joAY6MouvTzULaWHU6HaP8PvsaJ5511JVA1Fw2emqa1b8gJCf5U2fjykc5JkQbPa8CP4zrJ",
  "key14": "C8x9FWrDgC9yHTGhhqA6eLTwK1k1VAdJrqrPb3ABug3qQMoMe5FFNrL9wqpHqEpW87dv9vwhraWEGUhxWZeEnAQ",
  "key15": "7j7bFsPi8pf7RPrApaW8yx3pQxCvjo7GVjmLEq2NKgmtPdy6R6benJkJ89jZZagGnzmjEkRgXuqyP4w2yGSTbnS",
  "key16": "5Quq41AnUAbMpXuMokp32erFQDxCjZ1R9YpVWSebyrpi2d1mQAfdHz87R5W2uEBazcoXnpLc6frVKAejEJ8g22nY",
  "key17": "baMjBrmtADjAGKvkt2at31pXsz6yryqs7hEbtiEYhKRcoPXSg8Cc7eRzv8fJfbpc3tUSFuBVC2rZfi5xra2ZEVr",
  "key18": "ma3VEnz93yCn7DGPaARczzRKbN1YLgQZkGH9GSvm4Go2EiotZSpi3LbRYqFtgEPPV9tD8kBzarUVx3S5WhkCEHy",
  "key19": "4i1noRRMKFE6KiZxCMgAJaYQ9R2pxWPDrqRydidcAxyPX13T4c9e6JtgEcpzD1y7qTjsw12QgYVANV3eLoDkhkw6",
  "key20": "4XY5UjRF4TW6hiqm5iy8FRWz7pr19Di5hs7S9WNVz1R1dyat4azmfroTEv7LSpKdJoedaqBjzkhFVppen7HegULe",
  "key21": "4pfBNFP5U25X9eiQqkKUQBHJaTUnXryYKWyMeCyCgXzFz6jmHnScGnDuygkUqj3hnHueX7FKoLyBBneLDYQbvDws",
  "key22": "5EZzbRyggWaQeZJxoA61rCjFfJwGjFZhxTHtXJCjMikf61EMmii5MaTZ5z6dSQABmMfE4tYSPu8PaFscdonoAMKp",
  "key23": "5BPR2SwCUgjVwmGp2jXDAeb6bPNxhimS9T2L5NC2RXZ7myM7JXfBhsMTquAkNoKy87KeiWDVP7S3QYYagQBWeZTT",
  "key24": "2L7HuFVgzCHxdqmKfco5P57aW4MdivSQJKvF17GH2FRPkvAmy1LQqjLZsM6cCmvC6C6dws9UhQCuo2TW5Q6VHWYf",
  "key25": "2e6vydJ86vpgMHrr5CPBejS9FnX63gowNisxhpBYuVeQqqgHLZkTJ6ni8jfbvTKgDu8PDNACENzrUwzAhhe6RR5W",
  "key26": "4rfkoVxNHDbMdmFGP5y54YgF71t4BKY4YfaFbFkmnJG4ZrKPDrkxmqN245pyQmt5x8NqpJ9qNDMkGWqU85muoxyB",
  "key27": "STYmqarwKCmQs7AUswb1fiv7iaVs4QhBa8wzygDtVA5T625Z4qwGvVnkkTuvTmo8bMd1PQyRaNHziPXWeA2Cdfc",
  "key28": "5FNC1GR5WJSF36ZcCpTpaGUA5VJEz5pfpNmxncMGRLYpmLFptxxRjJ6t9A3erSYw18raF7eTkaocuLBNmJMUYp23",
  "key29": "5TN7MbkCUvjRVSQX8b1Mj7SBZbYg8gqXtE17Btgnt9aNxv8zPrrvAwTrJhfffsE4rsK6KjhYdk8s9RiieBFudSoL",
  "key30": "9vSgm6XLzdU6D3rbEw8hMPG9RJeCvtspgFHoUUVXefj4TkyNUVrh6CCA3Nkunp56ZtZZbogXJRjRAQcog1uGexE",
  "key31": "2mG6Xz45F1Ke8bDiHnkA3t7yTpVDHSonXQDGaFyb7A36iyZ3spej7cVNxon4MwXTHqqWmw7DNw8qgbpimxzF3LVn",
  "key32": "Rpvi8DnzMGyXJ3AkhDdWLYJ9MwdwcKTVpZRf2qGevu2siB8azMQuueaEZS1mVvLyaMyGmVQvyt3SqqBYDtHqoXh"
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
