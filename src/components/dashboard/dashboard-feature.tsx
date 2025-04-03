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
    "65EWVh5B27G86jUSZPjsRTnPiRbBYhvaGiW83JMHehb2ftvCo4P1SpVLJofPWAx8DcSi1JGfJjetJqvb3aUc4Qa2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "328qM6D6jAvP7sNGEMg9SqFtFKSxfPXgvSg3K8tjDh3278fGySnnik41mz92m44gLpkzfsZmxfBFBmVbC7iRNLzf",
  "key1": "3pHk3D6i2Jdri9yu3HCTqwQ1pGRE8Lsyds2uGyzHxDGRjYTUUYNqp4bi5jHfgVmqhCuxqeqdDd6tVtjPbH5yAYQP",
  "key2": "3htiVWqt2uFMQaCHBfyGjj9X8G2whRftDrr8c3nsNTpPF2ZWG6iPqgJzZtUEhTS1aTyUwFgR5s9q4PmdvQLRKU8e",
  "key3": "4SY2ZY7dLoYG6NJDfAHWtBqFnKTh16sV3ffQQN5Mgrk1LVyLc2JE1WmrgLRVVPZin8zS66VdjbdyeFEtpi76BB37",
  "key4": "275YYE37fLbHDx6wahpyokTqhRgrEqf7YqoubNmprNy9czsgE7NfqYsCuHhCPHvVkLrjv5Srcku8ud15jfEQBxb3",
  "key5": "2zE5y7RXbXWFVCqmBCxQMY4iWaSYLMuYuXdzzTyetRqpKnBm6pzp3MquFBgWiVcNqgxr8wUzTAGTJcqVeN55xbB",
  "key6": "5VuB3jkWP39tVsVBdfWLEjk9F7daSeCQL5GVbA2xpFv4DkptrKRdun28uVUC7KvjtyGMbdYDVFcPYneJk61nWMkR",
  "key7": "3p3kfHgYFvYiRiwutFjsfnjkqLCG61hzdyojT7skmiA5ZLYMsNZVfgzuQzbNTsqeuN8ZmUD7wzY8GNrnAkjx5WzB",
  "key8": "3kETMd6TDtefmoKDV9wfUvue7j8qVhZuTWDdLjkmMazysw72HkAzGSM5XYQyw6fzq1GuhQWxiiiGjS4WpC19LGVc",
  "key9": "4aUQ1LYZYEoYP382NEQnYLeMdEmEV4mGnUMcrRcwihQymFPCV92xt5dmNx4NufL2v6zbDvSiFeSAoMMVDMH4L7eB",
  "key10": "3aFsiVTq7JYmwpmEviHbXgktFLzvcKgQFVrUijwaAHtKRxry9bkuR9TmMmjzgNgithKEGUx4DoquCsNVBVHABjDS",
  "key11": "2jQoyvH6vjNKREEqAPesTBXZppFU7TyFGaVpjkMYoR6eEn8YhtyRtmn8mmPJy4WdD7XPwZkm6hLkfU9iE4NUnJX2",
  "key12": "3i9g8NwwYMxGE9XfrvMYjQizJBktdvY1rEg1pPHEwDKp9wSbay461xxDtUbU5rq2AhF6TrQuLbaRggdybkWBFMXi",
  "key13": "5PYhwBHHj35jhczyKc98Gfrv1U7t5WFJMdkknYkaGRiL8uecAykiuavNTFsfwthGw7ouHoYZnmqqqQWtY9iLt4w9",
  "key14": "2sH6Pdpdq3nNc8GeuU27FCSdKzUTLYj319N6AcHMGpaCoWq15n4ToavN1a6kJu35DGsPW3cGiMLvg4KHTZMbdJWw",
  "key15": "56cLvTgjBfaA9oFMxwBdoQTg4FvfvxhfZWT6qPQgopwnsgyuiiG37ApWwCoauKfuJxGvWUHUGeduRu1snHbCw1aX",
  "key16": "2kG4mrmU2DyMSX4XJLy3CuZWFnE1ipsJj34wABhrhK5xzwkfiem8Pmttsr4sS2X2wmwA4hVedjAKpeLCUpkWUFKh",
  "key17": "3AH6PdjjjqdV4nG7Q16zM7qTsQjMwxSD2bCp5fbEutu3Y6w7ct4g46fweRyZiYFQjzFfLUwgXFNZAGQjR8yt9D6z",
  "key18": "6pzkqqB7BAUYFvXFjsYBYgPBiWXoh2MDtuQWdfg5SoQV81r6Y5pSMmEQ3rxfbzFMWfDBUpuZiChqBRu2ZRQNwS9",
  "key19": "CCkDcfXPfVmqNASJMBLXsZuw3HGzJFa3rzCeThFUuMXaAdDXYFNeucvVdaTFsUzAa3pz2YVPXJmdzPDbaYbm37Z",
  "key20": "61zyiWYQWKAgt6u1AFbB27QgDjEe1pANK9pTQfQ4Y4iBaoqJb6KvcmW5ndviAgEsiB9i2R3CPGkWkcgHULCwEXjC",
  "key21": "5iDKD5S4NTUZ7YXWeYVePqrRr7b8xib359eNmQBae9y9UNc2k1B37NgziqTMWThSQEpQukhh11B2eH1yiX6Qt9v1",
  "key22": "2XuePFPGJKiVezJWzt2DCL3gKMmST9963QH8C29meFgyHwEeFJnRiN2hMFCDVbriXMmqAuDsn4KLKct7VyqrpuUE",
  "key23": "2RVEv8EgGbeXXTbCApB6Pw3TY8WKoDmJa8aXC18yLUH263QBMLzBppatBskTugxZHP9pFcR2Jre2YyB1soY3uCRK",
  "key24": "3dBmJfZZUSooYwbyxFePnwjdfUjRUCDQoyLDnHbg7wRniVzAJXXfbcK6tTT6hkMhHjUVK58xGRzzA12P6y6Xfkc4",
  "key25": "2qxMkrFvxCFYUn94biWZ2UxiDW9DqnpgTYyEL2pS3XuzUfSoeY5szxqBn5SV9asTFjgm6tNvR1cJ6grm5jM3v4F9",
  "key26": "37Wzy2CWkYX5SjxfnxFqUpWjxpW1UwE7gRG7eFAgtL5ewpsa6AVkHhcnCaac46aNp84SHeHak7GdDijvEDDqKaov",
  "key27": "MwmzkJLwrJWxdGGPqLgJKvoyC7nuyo1m6TRYUZT3GPfPdv7dNVnKsR8x1Ji6gVzeGLPf6VTe3QBrJfzEq5vBceh",
  "key28": "5GmKFGY6i7y9yW6fVvAW7m8gFc82qSnmvfpKiwvkbCY1WNYkEjiyPzwtnfWcXZonkbGEqy3o9ZHz74CrVk5fw7W7",
  "key29": "5Uos1eBTJPUB11Mxt1z5svREd8MchnY8WxbyvPBgnf7ZfZK4gbaj9zfJm17TPebctzhFBgBmUvm26ZG3EhN5zzQu",
  "key30": "LKfNcDnxpDmvXikWmUF6v3ssPxY72c33cq4yBeFhbPbnKKsXeP8vQH2QLkwEhyHjLTbr6anrUnVXh6Xzgf8BuXa",
  "key31": "2DCaP75rguBq8SEj4yXX8XGrvnTHBwtiJgXxVU2soTmLNvSvxAwwdWknQhX2XvttsW8VU8Pgp598dMCPLT7ArHJL",
  "key32": "5QeJ2s97Y2658A5BrzXy5xJAzffevK5rCegK59f7zRZgfxnnQSSdVSUhybrRwcr84QaHxxgJEN71cWFMGwb8RpwB",
  "key33": "5yuHQsmvj9gPCphDpGsiKz5GQUZAX5hjymDShNfKZm1LVHhb1BAgRuvGCrkAuBHZoG4tUYH5P6RECdQEqvprcXLZ",
  "key34": "4bHaR5EuXNP1r76GUtfzsmkL12bJ5aeACUTEGW4y9yFk21bx6Qh4ZithEeETUs22PSVvhk2NjsZXhha9X1fbCb6R",
  "key35": "3urTfwCLQi5ksMUBUXHi3iXXtfE3C8BtaYGr7XiHxkSWDkRt6T4A8zjYf5fx3nYk3FdbT54tFxq54GvLYwPb2FFx",
  "key36": "5sjFsRmLWXFwoKFyd1PUUjbDAxqDzgAEgPTXXZcvAe525rZTcBJAFGVWtseHrekxVJD3ZJzxBSwrnkaFmrcQm6Gc",
  "key37": "5fAxxukUWUULf9QSNHTmu9UV679VtrdEM5SFcn5NQtUYStjVxFHPFm2YJSQX1bxrWhzKZpxBLbUTFwPVdr3gW51Z"
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
