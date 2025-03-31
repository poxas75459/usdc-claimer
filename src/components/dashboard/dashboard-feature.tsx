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
    "5dACkAigWXHQq2aYiN9LxjYGBnv9B4nGicNniF32BjG8XA17ijGWaeHW7h7avncTcBCdQ27VgC4ESThMuB2JG8Zz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yEHGzSahbWFYxGn2eiXW4RK2TVycJMCszi9SVmpXF24Qn2TwdhXcLyxZ8KoyeWzfrR7FcErBJe7dv2qAQVGpLkx",
  "key1": "2trfPF6zT67HxAXP4azw9kqTkSBAYtyYPfsUmFW3SGikhcdtUyQfyLA1h6RMr2QjPLqqSzYFzjvmHFfJ2Yaqo5ML",
  "key2": "4gskUaGYEHrPa2QLr3XzpJvSX1yY5xMgT8PLeQfY4f67uYdKZdST4HyZrU7CDbavsYofLKoTku6rP9X7todoafpk",
  "key3": "RE4TKTeRrFyjiX987VcbS6AFtS3jhhq7f6XH8unNuv5mCog3YBzVjaecyKTqXkAD1h6oh4b4aS2MyE2BwNBPQqh",
  "key4": "4Wf3quTJrEDmCEjAZE4sVoDjcLQ7bCEM6SZdHwpDiCXhQPAFZqHZKoq7e6qCA1MFy1yAFCh8bqBjtTVjcNUTmtQM",
  "key5": "48mD5e4ZzPpWN9JougMA5VdtNRLpAgaourdsH3QdG2KiDoYwC11o72WZM9BU93LkSbsxaBYZJjvpyigcyQpT6QZm",
  "key6": "4X5kLAwxikEQ2cJyG3uPHbGXEn5FRbZjn7KibXdx9692a92cEjJVZFAaD4gJfkpa5aJFCT64zVQoATV3Em2VJRV5",
  "key7": "5J81VJ3TyaLnqESeMRnCrUdHijxEmCXDsmBbqdMHbb2jGsyMUwHbJSQgPx5U8W2fQbHE7V5YAqPQQHTaa6ptKDWK",
  "key8": "5F1CgwC4Pu9nrHVGQDG7H9qaJUP96wAh4QcddJtwvgiNdbW7hfH7dryZpueCtRw1kczVW1qkAnS1UZ92sUzXFZ5n",
  "key9": "5SkzqFHHCHfw1RUQeNoFdQWGHyZQg5fbcpNRMWFUvondTdbDVZcQqu2NyZBsNf7ofQRgN6H36bj5k4r1xvF3GXYH",
  "key10": "5eKJhPmWhAri8pUmsPQhKXDF9DbEKAp3YztAXMSJVxKuFZxCAWBM2GZYo4fWCcUgYAtz7M8d61qjrvPnLWfWymUf",
  "key11": "3cstHtDTLwpTXwTWRKoJwRtUvCWyB6m2KM51x899h4xRVUmkowMkfZFaYjNDw56DJh6MUCDBNAbiULqyrdvaxskk",
  "key12": "3D1y7eC2osPvY8KZstcB5d1co4mfCj1J2UemjP2mq55hfeAspJLea1ucmAPQhTrT41HGWMkwMeKmq81eztSeM3L6",
  "key13": "4RysXQeo1xybh5LK99fX5SZN6nkn495XKN8AoXS1PR4KdY3tPGpzJWvBctWB8xwBpACqCuPykKe74Xd8pr13X6kL",
  "key14": "66MwA7Ar4K2PCwg9PHkaz7sDbj7UpG5zsc9i6gVTzFgMH4h7kEKEnTTW1k4wUgEScZtfu5B9cqLymqCXzgm7y1PR",
  "key15": "67PWS2WFBDtg35iHvBnGufVucM6M5cU2T8NkVW7nqmEeBmd278bjpFpst68Kc8WuATG3Kwk3urppFDswinfpcnAH",
  "key16": "3LaKCbb5oQvhqWgxutCJVVX2hLSuSwg3dht8noM5m5ttvTzkTML3iCW1hC4boGoR2ncz5Njgrnwbw6X8rPnA9fuN",
  "key17": "4JnHK4o9qtfVSMvqY9tVjHVgf7wttLR3CVxXQWJhPPLwwcoVVkrsMjR98N6f1q4ZHrX3v3LNCdehPUyAKN14dBsk",
  "key18": "JtLav9m2fuYmnPKw2NmZnHydZuLtGwBg5H1QLvEzPTshL15QtDReSwwqiKMQ2VEF573w9qRu7qtmpNTQyDQ1xBR",
  "key19": "3Y7RJ6pXUqRnZvUT17jAEhBh3uHQKSbuzUfr39m8NZBzFoKKgS9rgC8annM4EDL19YE7LaVCDvnr8izk56TouiXr",
  "key20": "cEpQh6o4d4CqSZq33xnruLRhJ9EiiFExg57HdLZpG1xGi5kyHYTtm3WeZmew4SGfvcfwdcBJbACSLHf15WC9CPU",
  "key21": "5JDPgGDHSboeLh8QcfkqAgkkwzSZuYxMNiwy587SbWuJ6HV1Fi1eFozeeAbiu2DDqZpcDGZvB1upL5UgJRqnTuiK",
  "key22": "2uDwQ63iXQb7MNbkSWxwj6wxmiincwmJXNkfckvH75GCbokjoQpGRvxcLrqSuGtrEKng4A3TRXKwnfMZ2nzmWeo3",
  "key23": "4kAM71vjFVQDDhcs6P8p8bRTnnLeEJiuHKAX3iJjteKq2DJxrjYdwRdqPp8XLrZW3jwR2gyzWUCqRxqEUGpWZ9v8",
  "key24": "WNGSz11vFo58urXVWJA6kcKXBndj1aJRxnyrKR79b79k4SeZ1L7RnU73rxMz1ErbUwdniPJ2xRdcXS1JawsuRMw",
  "key25": "24jN5aotKRazPaSvNNKJSQzd6KiduiqAYhRG6J9MJNXbyti2HAY7KZ9RSPujwY135zLbs9jRCzDRuKUqJhXsCkDA",
  "key26": "xyh8ur4sxkNtWSyGT1arLzM9KXUv51ihnKH9eBuo4pF4FCgC2NLCfvRMnz4e7nBKFjGaHGmXaWre66bXtQuiCaE",
  "key27": "4kf1sBxuGx4xPRmzMEF7gpr3qrYXdKKbPuVYtvRQ1Rb9Ncu6S4sUdaZbAWMM7W6LU461zzbYzY9AAtkasvXjR1jP",
  "key28": "49x6wCyeEjJr64dYCzerFCRT3ByUSTVGASEZqYcsVhnjTXcfX9pHU6FyPkg54VTrRrWu6UgcBKqfGyYp5jdhVMLU",
  "key29": "2La5MYgtjuwMhVQ54uKMEmcBbX2LZokv8ek1ArYdfrrinFDrWt7zWYtFtWYFXraaS6gzDsaSdE1HXH7nfQbpjH9M",
  "key30": "2KJyjr3TTkrvXjyAthJrTsmkzMDTsrSyLtSyxhjMXKsyr9kAW5HCYgN6MNtXiyqkHv3hzNU7u8K1NbN3zvBfzwgg",
  "key31": "24d2p6vf2tSrtG7d8RxPQEeJ3HY57f9wztXUY1KTSsW23N7hZfcjghmhDM8iR5iAVQqupSMuWWWknxDzis2iD3gH",
  "key32": "4cCmxMrPaK5ZGwm4dMgcaETXj5wD3ZduGzvQXEcHn1AVfyu1gyGMKU4g7NyuGoP863vSWyLTPQv8XMTS5Ba1XFDE",
  "key33": "5jXxEXEb5i5PRudEPnLaexdezm7vdr4L5xUNXGZKJPics3n1kBfC4Yy5R5zyNJ2XzgvjCNtFC7KyXpvyK6t5uzhB",
  "key34": "5vhunoyFtuV3JYnhjCECykUyWYbEkAFUhCHunVRBNDCZbEhEMGyAZCahTBJN3CY2yvqJeRKwD8c9AhpFrhdTFC26",
  "key35": "kUHR5T6cJSE1c9kaPmDqd1yFBB8MTfcSbdeRfDzGps7USjvc8EqKfDvHK8WJaGW1aw5XJcWxgKigL45FzTwfzso",
  "key36": "2REwzB2TFZsW3iDXraqJLWQ1yXF8CFEa9WxTQ2Ydy5X9pL8JX1jirbRnkDGwozC5vzpujSi1PZGxGEH8YbSMzXhE",
  "key37": "4UkeBQdniwuizJJVuf2WUmNudfqx1KnRhEw5pLjDr8DjpfAp7hwZnf4mZM3WRFPK88nD7WcjeQQZgLdKKJcc1hkf",
  "key38": "2uRNKi6xoA7PGYpMM4tsWzvwzMsPbEosHZhraxdUSU9yQbxoFsgkLRzky9gZhLv1JYZn18RvW65kGbXrqPQfQSoV",
  "key39": "2jc3DZdQUmswnY7kMiYKVmkVKnTmvVu2fZVpZruGSveTxZZ86rZzpLHqMELSGZEqJGz8RouNDCf2awGfVohQshbr"
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
