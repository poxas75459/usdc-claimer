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
    "5Fh8gR6dqaSUiVBHK7m4J2zzAtCEt9pEwoqmt2fD7Jn8ubHqmNmRMfLC5qoeGyMR2vDq1EcUgXxWG1sGvKwVHhrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47VmC86bAfL5u6sDcEPq9DgqeR7zUJHLnHcMwaTezzsgQ19A8HdmPXBQAJ3n7Kq3EyewJik8D6krdkLK3AMtnfte",
  "key1": "4WDX1xhaA8ZhUjyvDTmxqXPWpdrMHfD7psx91HuZiFiueeCs167hjUJimaZoRAoDPTcNbU8y3EsDAxriGvEs4c51",
  "key2": "32LWYCRpv2fzr1w7e1Pf32jNTpALdi5vov2chFjix7u1uiRwZiU9XKJ7J1hhzF8smAN3KicLDE6x7npU6ZRDz55P",
  "key3": "2YABE7X6GCpV5CMupoCzhZ8qnEvytH2kcPQCQeb1mqEjFQW4JGGutfeegbEfDtEcXNNMrKVYXXdNibnPyJEv5ZND",
  "key4": "3BY5qsC1vmzfDjTJL8eS4rNLLVcx89pvqqxUL1BnwAaS2JZBeQU1VKGNwyiAo94bvEe9eFsvuN3sGyfogyr5Hk2",
  "key5": "5QfnyPr3rwaZYRUjyTZzj7S7wpkRdqLaKGJk8yctrYqwJi8F1TyvepXR3LUx1q8dtoKgCqfHqJ89hRWQFUSsXc6o",
  "key6": "2qqCc5JDnsm1g63JUphAUHEwgWxiPn953oSMzcduaGyco1M1hLFaEDv1aywkg2P5MwgqC74QoXT8FCCyTNqFHTk5",
  "key7": "4Eg3h62a7sdaThacaaTEt1amBCDPJRMWM2V9x8CS9T1GN9Q1ZSWUVytmZYEaXQeW2jQNibxCsvxg4D7kJBYPFbAe",
  "key8": "45xhyqcWmThbHn5GWTmub64Pd7pdTdPLMVMEpRJzdSJzufYLqVpMrWjMTUhduBTbpTv6yviC2XHNHZkgQ1s6huQi",
  "key9": "3QbLxvqwKGFZPrsuGHw71CV82KgXoQ4GVuhEV55sND8ng3B7UTsKHtZQFMSx7NJvz3USizUB1a7bHh2GHreMnucB",
  "key10": "3TakNMpmCAXwVnipL91DfDjE1zzxJ4cBLaZmMA6HYqRu4Ky2hw8T43nQ5eeJNJitSWKmVqAwqoTVb2gR6dxsypn",
  "key11": "3HE2oP2oeYRgXhW59sswZkiKqA2zAFaK4WDUbxJEFJFRd2feaDoddWWErdTFQMCKY9CLQ6pQdXWSfLG4ajGJPMDq",
  "key12": "2D7fwMfC3W9sHGmDoQ4U3kjnpyHjvMvP3jV4CqyNKmLRKNCzTxP75in28xLHfXH237cGkt7DHXsaeqxNWrjTVVig",
  "key13": "2268gZLYfAR6AJjLRQf6v8eEqwyarhzjigx3GqZmFiY5KLrnHAqQh6WCtQo9bCDuTmqz4izbecM6szH8bSgR6EWh",
  "key14": "2ZTKorPCjZGJHgTVx4HNbSEqSaqrALKdbh5BVvTn52cc8AhPhfWvMFqUQEnYBkD6o2otpF4wxYvrFvRzhW6rEJ2w",
  "key15": "5Puk9rmuUhx1faBwVYCbG2DwyLg67AYxpmUVF9C21kZA2Hec5xtG4UWh9JbvfAUv5szSMPhWgeBUA7MxQ86MsRhz",
  "key16": "3dy8kWB6yub5DsCtCfeT9jA1hditv8NV4iB4gYQVpJ1541ZwfGgaZAdAMHNJhTYuJbat8xhdCLuyYAcjjvn91z85",
  "key17": "TE6G296sQDQsV38noyFc4p7otijn6WWMGQjrxQKKfnZPMMBT6teAZ7JY6WAXgzH8CsVpdYpa6V5vbBB5KjbeEy6",
  "key18": "9xDqfyBQRQuQiJEN3AKpHtf7NCuL6JunsGqeQKxuUX6RLJxbDjb4xyy69r5FWmGr8HL5Ywf7iPXv2fJMwD5nvmn",
  "key19": "2YRFuiRYfyYShCcokrd5AijoyU5NT4p25FKdcR6QVoyC4wNNP9KMyCvNU4rUgwnLRzPo7D1JNXwbvrAg93F1y9yw",
  "key20": "4miJjmjvz4YzWAEysZzzW8v8S6HwLLqESSbAxNxXCHJhnbajTvVAg7AQCcEvB2tB2n5GUD4HAN7gefvGUErvy16E",
  "key21": "64gWz1Vh2rGwNf9RkKTZKEPsxCy3jxUegg9qLxfQirYmBnPRTkLxtW9pTwqeBHhEGrypMqgRG8AgjibHREKC5mYi",
  "key22": "5LraugXXYLhPMqpUvVbkEFnjXF4aoCxeJzQmdGHBu3KcQ7QuchpuLusmof7rszV8VoHyM2WGH8wnquUBf6RDzrmh",
  "key23": "3LKtea92uxvtvV49JsUjGxxhsDjVMp8quz1tnDNEi9oNLMNawzRsX1KDB223Y36HG4nKvm2LHKZm3jcUrSvEbmnC",
  "key24": "2QGFa5DbLqQdVUjt9dB55YaxkSVHC3NdbD1BuSvbvKzGBqURDGddWvj2AVGw8wbGgwZMGTRX6i6YD6Nux9J3avSQ",
  "key25": "3sdvyFBtz55tyxbkzK6LpFSLLdEB34uYQCFuu2tg23Mkq3eUL9NyZuAaJBtatFQ3po5VFz7pCxzJqWS7nMepxMeu",
  "key26": "3enZjV1qRxohTpKNwXZ4JgHLC8U92xC3VScQxJQAeCQtemriLiraeJMeEprNyVX18bHTYKVUi1UwBcLEHJXvXg1k",
  "key27": "2ukpsbmeh4BcA5Kiu6VVu4qTJWdUPSevW3FdmyRshLkKYsZx3fjHUnu63eSZK2ygyHPjA38z67p3ev1dBBcBB4iP",
  "key28": "T3wxM9ZWL1JNKJc8tUL7rVJBDHhZjzf4FfkgpgQYk2MZYrUFYiu8BhLL5XdbUdPCszAU8gQP1JLkQeuAkcydpFW",
  "key29": "2Md4DV6vAzewKLM9zZnqdPeZA7yHEQwp1XJC4grzfyzRg6wptFtFcM2p55UuohZ8iGec6nhQL8wwGC8HwYqWxeBX",
  "key30": "3drLhp9gKx89g8y6rYRs4Q747s93xq3Wc4GaxmW5kVahL19uHj1Yd74AF2Q5mzMwSnTaAY3DKMwbbcx9h5tL7LvT",
  "key31": "nmBiUsj1X5jn9kRCWPatv1w3ZicbntkBJbekqqYu94PW1CnKeFf3dzDjvNQxyqfyDciKdDHCNDABPck1mE9osRP",
  "key32": "5L9fVm4i2pFZvGtTPCaUZyQEAEXYogePcQctCruW6jUzeKmbqqt2xX1RmwLqMF4M1CsLTywqvDXFRwNkQbWHPn7q",
  "key33": "bP5VqFmaCT5k9ZVU5EAVCjmjcxBE1R8BB8qTmPg1XczYryGjsvKsFzKAz9ZsJg6Sk2xNn2LD54UZDuWakutFbTv",
  "key34": "3wMCuia2zbnTne4tj21MgrQZrJtfTj1T4f4eZZYH51ZKm497mZKSHs7BVLtk5PW3yNiMiz83uAWYunnFrbLUVS6Y",
  "key35": "4k2JNv6R8Kz9Lrzru9KZcr8At7nSjnTEZdD6vBNEezdj7fN4mAXiqh6VJd9KjFenDUenJvuKaeiP2gNmMTWhazoZ",
  "key36": "5w8WUbscspMwVEWqem1PWZuxBdZxxKMZfJWo2WuD1BMfyHr3sC9GEySxXhQfdggvAe15m1sxceGZ7SVoYKNES7Sa",
  "key37": "4SnMVurm7UWMmphMkvbzTwUQTtxUGiRTHbEeGdUYRuQ2abY9hQf3YWSBR4G69jqDShMvvYgTNtaGEDNdNsUKe8sT",
  "key38": "3aXQSzwYW7j8BQomf8igevmifCDBhJoSCSkfgXTLpeJstqtkeUyUDHf2kunqkvAKu5vF1khnPifrRnDSVr9hs26H",
  "key39": "fP1Ub2d8tofjGLg52tByc3numrQftnMRE6mZDDSuBmEoFtcdgfk7M5DPDhCerpvs3NbJ6MNsw9j8A9pRxKrKAfb",
  "key40": "nk6adAbRPCmamrWLrsY2eCVwVod1iLCXJtiZH5qwHk2szfNaYx5vxySgoMLjGcrC9xqN2xJvfyn1Qmm3QChKT9c",
  "key41": "2GD4Rvgxv9fpwnVesetYwwqVvRHQEW9nWVnwWMKDey1JFfrKphs3SH2ygMPvPtbD48yBAPS1A1bHan3K4YtcPeVq"
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
