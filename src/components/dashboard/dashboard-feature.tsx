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
    "geDEz6yDLgbsri1DXP9EDRCneu2DnsPVNnd4aytA7Nez3Z6NbQ8VcABQ8rTkgu4QD8kyTt8UMEHa37pbTrZd6ht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bXAaxEY27KA1bRxt8G17XeTHkNMx9tFH9rxsZLNKrWcPv1JT389TU7HiSWEgYF3xEtiJTmR32Gop5sKEsY9mfdX",
  "key1": "4mycydousVX5rC8tPK8KzCaZJNbiwEJiPfHh8GfSsBJXESKsNKvxzTFYWYSs6oUR2h3V69ucvjZVBPWVCNEPTJmh",
  "key2": "3vLp4xqekNDgoQzCweCUmQmYdhNcdN4u7Mio5qTw9Kv1HxiyWTkpo39wxi7gS2e6sucSW7CiQjd6RdGpLrNXLeYc",
  "key3": "6bHdWcwiwz2hfGk93CJAoEogkpDq4iuCoojrxDRSZYwkFxVWFCZjfu2B24ArhZERrsZwNBf6SpeAUsBJve7RbVM",
  "key4": "3ttbATkNnmRsNWAxLXD6b7U5AUCywUzhPKqzqB6fGqzu2bn4bnRA95KqzECY8pxHbwPbhfNExKXjGpW2M2gmEDS6",
  "key5": "49H1riQaA54SShKEcmM3Zc4WHcp6kez3Tn84U6yGbyqL7WgfhLd3xP7nmEgP6A7tEQxcMQsiGsrNrxWQgQ6GZfkm",
  "key6": "3K3wwJmuPLbwdALAyDZD97UTZEWgU2oMSQhS74pjWSPUQ5KhL88FmBQR3EDmTpny3WcXnoS6W9zy9R1UWHBXmX9n",
  "key7": "FwfTDUxFhkYeGHM4VPks2qDe3UKjedRtkXZW9gPZrZu8yc8ZnJpvX3X8HZHmcSqPpLTVFcNNrVcNVScyGqmXMPM",
  "key8": "2JYuYdrfA1a96B4TMKFtbzvJFLMSJ8rhBv69eP6q9zjnG3M9wkzxCgQG7f3sRa4PQ6g8o2UDao7MjoudNpqwZqdF",
  "key9": "5vUVECaJX6mW4xgKisnjm97tudxvyHGXwJjuNJiPoYW1TkbiuWezBmqg5xXjGmsjp2VpJbYdCNgZUYa9YxnUVzhJ",
  "key10": "3b8RFPid73qRgY5AapMsoETaub6Cv87H8jvoBQsHpCjgDxqs74VMs1U9RCgfM2kuEhA17uTwrYCJA1M5467fpH4W",
  "key11": "hjHZJF5ex6Z3GviEhbfg1skactZ4kKJGZur4ZBRYdH95eM4NSx85U82qU5mxyc8fiyfTx5LbUtCYx5RYtKmJtZ9",
  "key12": "4tHW8uSDGRXdV54WrQLTQqZVu1mEtCBGFRPjqcdmGPizQtH5UBpbyb5BRzKExdfmYwu6UGdNR772kHcfeGeraEg4",
  "key13": "5tja4QwSvQXDKNuHduiWsFAbYTGJ14PCq46HLaQgXYtAu7CZYjzCi33D9BhHm4GPNSfQcmENCpdfjGVhEPGRdivU",
  "key14": "5ytU9FvzygM3kQQjbon48Ybzuaz33LvUci9jKrTGtqZQrFARukKbHvso2BVCr2ztcWNbxuyxhyYu7bUQdDP3uUZq",
  "key15": "62JY7QQUoVDD4xWZwWAVbujGxFvN1jKTQhD5jHWSF6cHhtJFfhHccp4SogEaXJpVXPkYa4nAgB4ZF6vJtdbKCwzU",
  "key16": "53BNvMaN6e9HdCxWBUhUgwCH7R9yYaxd8PYuKuKBWytHti53xj1bhTmcXe5ob1VZCK19Gi3UtJMKcHCRmK9dapnv",
  "key17": "2fgRGGVCVAJykrwEPA8RNEyVvotgfvE4RHAM4FgWqMshkNgVCcYDKeeyVhikqMV7YexbPFW8iAPnjxyPwoNAtDzr",
  "key18": "ABUXjwNWHs1KMMY4SvihJMFDSmLKVRPXQ4LgWj1ksQ5bAhpqqqL1g4iv86STpcVM5ukH31HhMbjWjDnQ1LU6R6u",
  "key19": "4sZz8w3qRnRqfikSeciBcQKu5VsRx2r9kCT2UA5TEAZhgbgVPrU3GxFG9gf8DC2SxF7LWxpKZ5VtWsHky5LwKDF",
  "key20": "EJsMrRvdU6E9s5FANUh1PsGk2ki5y8pnmQU6sB44XPNo7RD936ZSrU2SdHDTL3YHoYBKvSxBrDECq77JygWRR77",
  "key21": "VwJu2GuenwL8ZoP6rkkV9JSjBPxQZxPsc57TCQixGAwLYyg2ydHmt1JbJjjiWKH4ct4vXygAUjWdxapRn2PvBJ4",
  "key22": "4PyQhfUuTUxjkM7rkNt4hB7TgzYwL3ixmcRwVgFkQio18Dd2oE4g49wcfMxfrmMZdGDddSRLxwUFeHC9yskWNGGi",
  "key23": "heHVCFcXLJg9eSFxX8cB7e2KevFAWfLV1k3DL87MZXeB9QBHqR6YvX1n9HqzDSB3qAyZbVTCQPM7rfJjnhWCZfJ",
  "key24": "2gataMgdyC3eKbGLPt5MAzjtiTgbknuVdkimKWAvZSrkfV9oqVxrMi4mJLyXdNETvVAoHeKxMMZ9zw5wLrR48NQU",
  "key25": "47zXYAPFehgygqDmqRtaGvmRcfdtj7JttHe2Y3vTjXwXaduuLaf1wL3CUTcWMaCLHbbrWgvZK1TNzJjcGCjmBWep",
  "key26": "4Xj6Ez2ttFqPtusHUF1nZCgC2xmwTRbvFrJV76TRPigiAnWxpPmN47wDGs29E7dQFSipB1xCVadJRwG5zKXmewUg",
  "key27": "3oETowuLU6BCkGM2cyAH5u7vXrBWF2UNEjxENS2L9SjWabcqKkdx7XZHYw5C7jXEqxiyp6mjRebNChUFhjTwxGnZ",
  "key28": "2epYVFz887RsDQwpFisJeVX21vXc3ujcVRhxKTy2JneSp3LFhX1rjTmfk7RLxdoDwYhjGj6sJgTitWJJQ8ff2NRN",
  "key29": "UiydjvMaiR5usHyE4FieUScZrTEeQwrAqh5keNW6HoUfREYTJCtPpBY26bpXeMrFki5mfQEJF94G5kuqxcK5CiE",
  "key30": "44KmmicbWNn2r5k3GHjevtFYPn21LRf5e6oeBbUBnUx67Tfv1yjEprc9zKYrCK1LDqiPAYrN5GzLkWuPQ6QrTJD8",
  "key31": "2GNNVyAt9nJsVzk6HtNtdaWM8Fjp1ULNmvNpZu4tujJgm7VBNN1EAxon7ByUffMKmQZEjPyWQiDjYyEgvQN9GQjw"
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
