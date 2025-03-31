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
    "473n4N8SpubK9N4w19KTdjYtXLYTqye8hqaVe563GyhZEoFaP2opxWKdNwenSQgJCZaNAdw6FEpmiBqSgFqbFRh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q3dCfuRsn8Yj6PgUVSJhM9iTb8qNAEWKu3wC3AEXgh5C4nLAt3zCanBm5Gpquas7Z6KnL7UQej863wrs9tzLBX8",
  "key1": "csXJ9gCDkq6uG6h9mG1sMLBrpZ7NDpnbh3BYaMHAfg9eSRbEYhqCQB3vAuo5MwWJvZo4DTPMpfMEeZg4MuBCteY",
  "key2": "23E1f5gcrLQP2UTZkkcCozw7sAorxRXqRRRk45Z9W8mo8ZpBZDsPUDvd4A1G2zhqGB4Q7wDMjJAaico2kfvwzVZ7",
  "key3": "3P1ErvUSVkJgXmhYDB3axezFPhPNs87KEjFA3AYcGor86GYBNM6ES14rCXz2fAYejB4mTqMaNQwmeawVDpnoiYkv",
  "key4": "4wUcnfYdomE8r9F3MfGkLeXwBSGVrV1hxGN4qV3cDhP7MJ8UT8aKMoc7H89dVomJKwD9JfF8iN6WaVmReqPvgpt7",
  "key5": "5EWurGGkKJ4ykPrkonxFU2tj4pPGdZcV74McU32c7eqnpRs63faCJkUpucbeHuZ4L6nJ5G7H638XyVE5KCwf8UjD",
  "key6": "gwcSkqoYXpRSQQn8ajP2J3K9Ysz8pZkVCeWBRuc7YfU2sKQK1nHhkkgvDch24YFov8y4czuSKAKAmBm3k8wjqQp",
  "key7": "oHtjjYtYcGkBYW9aZwXHkXLgyYgyQePhtEPuc5T2B8j7mBGTTQW3W5F8oSKjKhdpGfiYWdeHabkaSGU9rJsF9zu",
  "key8": "5FSFG3Mn69zarM9jypr2DHUjBZ45jSPzUrGiziUTPWhv8rhUQwwtWWDGan9kKkdCj5k72WJcR7xjhDzRCuapKBeo",
  "key9": "3dUHbWE4mEfFsFSm4j3LYgBGRpbEhWfGG7CjMrKmDnv6Ex4EFWp5DJcwWxpirVrVtdDNA7WqAzQneBtxoGLH1AbQ",
  "key10": "5a55tPLB31Gy6V92CTFsTzTqrims2cHbxywupKZkpQWQ3V2h6zMUCwfGgpS1Tm89nxBujTMJz6JtvbkUSW7iJeZL",
  "key11": "5VZdwnJQt3yoAPnbWEtyJ8BVwzUzMA8jVQepWfghWFzvWMs8yBT1nGorXMXonvp6JfWZp2ABZz1mAftXVe6DPMPm",
  "key12": "VYze9X78gxpGhrtCQrrdjNJcaUTS1ES9jHCmhMwzJTnTkTCXFUK4MSHp2bmLFQCqWzk2Bxpwwa7t6B5svF3ERfx",
  "key13": "37odhrrbthy3UdJdnbEc1XjV3o7EZ63G3mba8Nrgaq61jk9a6jBEVmG6i849p3x29SCftWWo2xgsJBkc8tmUdzJu",
  "key14": "2sJg6ZsnsSfcYD8WdGFsMSW6nq3F2oTh81uwxjvETMqyg7JViQHitkATUBaJzQ3XimaTUZcxqjztcf4YtXWiELg4",
  "key15": "4JwHircy4ZYgfEP7JQdmuqwfQoMK3DfHMaLoHogZvax59T6qtnQgw5QBpuaBCbH7RQozCcKB45iM5knZjujKFAXK",
  "key16": "4RX4J68PzuJAazLA6T61ttA3JN62qg7D4Z53NgCftVGZe9e6ucbpxPvHcpCrEqQ49gH3i6fFvYSbxZqznGQbRNTF",
  "key17": "233b7VKb5PxJwVNTtnaCebh74isQPDFi5r1k8Q9TMz492rUbZewdAyoxHgRnk4gaFLizFUtuShhkx2QhCcbrrTjQ",
  "key18": "4gtx9D5iEajoV8vQ3YmbpH7xYQjizNjFSzyJrfrG5NcsEsJy7y1rPTZWD8Vc9JPfcAQ22Py2zwAQYW4AwxFLJGNx",
  "key19": "63X5FW715QQ827aP6jpKfhXPeGusZhSD5bNg68zduxifjmUKsWzvdBLmjKZzXxudSGG9v9AU7P7of2HZ2NUGiBK3",
  "key20": "fiSoQ9JZM7Svvi68fMxAGa7FwdETCQP3MVNrhq7RLM5RfTb91LLbXY3jXXd3Dh5draRT2aBNMH1AZu7xvTbKRGE",
  "key21": "5nYe85dJYBcAycq6pnNXw7Fs8LRgkuXeBLpg1h7ULU7BrHTfwkMTNipxtZL6PCn8sjb7Pm4734gt3moHQZe85Ue",
  "key22": "5MP9YfuvLa8M7V2GpZfifKEHob45sMS7A5Nx7BnYiMEqMVdevnJXFfueEUeyPqu95qj1YC3G7cGN5cZfTqZ4S6aV",
  "key23": "2X362SqJVD21mKiAoLxwKQ6aNigQL7Kr5XRoPG9PFQEPsDJaUnceWB3qeRwhQue34QPjhnGYrTjx9TPG2UgUNc3H",
  "key24": "46uC5YS6tqsrvTCSQswwj8ngLKiG8sxsJrdnZrpK9ntouMtgPhgVC38PNW8Dej5igD8PJ1acpxqZtGubQSoGBVGU"
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
