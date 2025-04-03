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
    "5vL6TBx5umehGCG6dUjkGu8h5pNE9DQ3a8QvLhX7ChUY7TE8hAiHSzj8W5HLtkxK5ddge9ZvZQ5mn4NcwZGfq8XF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CQakBFPLeBZSTMD6zaGnYv5BKbPgusTSdsKkZdaTCrw2uaCautJNFz3bJeSAnCpBH7vCMYNAZKxynJByJiTQRKE",
  "key1": "48pHeur7CyNt3i1EB6hqRJhCZNEZcHSp4rbah7ZZSDzGzaAajkQ38pqRYc1jLiy9WibGpEtdtQnoQZzk8bkN95mR",
  "key2": "3eGtQWDCrd31V75FRNqu5jk47EA6BRn6ZxEJmW6xMnXSRYD42kgRwYtZZxaFykUuupe7xmGsiy8kMqFh1n1wpSHb",
  "key3": "2hDiPt32648zTA4qdPh26oAhuu7GzGq3fRNTS4rn7LZJgtGP9BqvmiqAB91y8xQxTyWxKVFwrYLzZFZGmwqeCd4U",
  "key4": "5AySiAjcFcc4bJrii4ZUftgpYUVjMnGSWoaaLgUXk6G1EYQa1CRMMxF2thTVNTSyVxeg3T4zH6FqVqZLUnREiiba",
  "key5": "2KAX57njg12kZPdSCdwRRzqzqZ3oEfYfWgK2ZZzFCJBHfwyB9zHZXLbkaFSCwp8NxQNwtpDaSmJQptcywx3F3WuU",
  "key6": "3UsYtzM7pnudbwZzKGJEVZ3tZA5PcbEYY38sUbWZttoPNyKMyE9ZrprRRWCFNFHyRTJ2LcxKwoCXBQB84MC5fhec",
  "key7": "7VxshzZeenY7JD8DYcW9rCYq6jghhrkFYgqi8sRHrezyWThVo3j7cmRxMq9Crm7mWcKyMinEEjW2CsaKDJv8oGf",
  "key8": "SCqQgEf7Szm1dVAUz5cz8i6Nno9DcPUoiKxKgjMroPK9gWbtojKADAMaYZzmVUkCNdo1gLmjM46JCHuv4h2s3Um",
  "key9": "3Kw46u8QJt4XroWdDkSVfS2Snagjnzj3JhFLytY1BFLkqzWX2S9NSZCEvZi7jpdkny6hLj11VLcUfavY1wpJzKho",
  "key10": "5HLpEPemF2Dwzqb4t2zHbTyuFV17otfawphmBKg2Xd6jcudEYuSG5pqY27HD6xVoRqSwZBWr1MxwueuomAXgBbCF",
  "key11": "3FXsqGVfBoiXeNHghtfNocgenajSdYpsZQi6ABwfw7inLxioDJKvo4K55uUQVL5DwWU7UmX3mFhR53nkZUH1SSY9",
  "key12": "3omxTHzrfbjhPnc9drkPeK5gKGPmUHSToKQKqtDLLgEu7F5ut7yj7xpMZbS4okWoSXkZYfwfykqyaynaGHz3tbsy",
  "key13": "31teHzrwVHRY9qP9LJxdJEyMNyLjPcNAegwnTbPwF6UEH9UgwxiJsYjHtyELKuMKv5tuPc9LMc2sVQ8aVRWMSo9F",
  "key14": "4nEgvxt4XUmFbyM1UXpNrGv9E9nTo45zRffyQK59zr3iALyifkvyeth5VALF6L1rHWbUNnJGq5E9XDHtvsTGovrb",
  "key15": "wWWjc627fGgsdonBpTVHGuYnv7BzKNxkEye467zEH4vdYchwFwVR2njS4iU2gkY1R89ggHQfwtDyepLXdK7opGV",
  "key16": "iNicTA87EYFUamzHhDKyhiczuYGFwr5vh5XH6zfRS7CmFcyjXHFbDrRujsNcgUC37w6bhNYar7aTrsRHkh1Ue53",
  "key17": "4egmMeg2S9Q6QYy3bFpqVRF3UoFo7isXAe3yPkDWDP7HvEGAnHfQesevoBPs3zU3fJpjgyBPn97UY5wLnSVoXgY4",
  "key18": "2L5nJcWYenMhvPHNsiKoE1XQVC8B1YyAvmgNLdRnis4brjsbk611Xvot3iMJmTsa9fSpNqsSUw18y3DLuvp2kNiR",
  "key19": "3k8xd7iH8FLLARzPiQew91ENY5cBxZZStgQ51y1ezZYkSUHJeoYcVBQkTKn4284mD12vVYYFAt6acha62btaXUkV",
  "key20": "3WyvJbWtgGSsa5qXJVmKZ933CPyHMDMM7nHBLW4VWLr628zkwHs76EzCagBEjLeHf8iWJjhFE36JM6XvyNNekqat",
  "key21": "3uikXrKWGFjgTvbHhw5fEmhgm9LVbXnRmmZSu3jV4mrvPdkMpCXsbYCF17SaPzYr4WjduwvbJPyPKgfNgvywefFA",
  "key22": "42E23DHgwRxAcxutaMsZUFtAZLDyNpcCX2ekYT2ddWgWeSYhhvh4GGsngZ4w45iyauPGwr8QxwRc63cRiJfHqmER",
  "key23": "NUhvBs3NhuhkavRDuRYyQpXiq6WnwnjLtwtsdYcMUjKeWCNRy46TTKiMSXxfuRYVkCMt3frJknegWhT4EHnXUok",
  "key24": "3n8xGFoFwdS4w2vbDCNSit9Jn12oX1VoXwjgTRLTyJA2jVycxHgBCQExd5SctFYuNtn1hXxhavPp1Ca2LDWH5Pvv",
  "key25": "4hTHcBL6ZrZ3N19Gbgi9x9qhiJHvVZSqLkgaHdsHBq4Y2EcHjGYHks2q5YLvAWr7ji7LWbsQzA6vHfeejzDSBwjr",
  "key26": "59P774hZsqBzVbwHXxRq2Ko1jnFDvYa9uPAqSr5Z7gAp8cZj8qAdDQKFaX4YNHKspEBtnCSa1YQwcNwtZqf2TorB",
  "key27": "3GFSVxbyv6FNKUx5igccHFigPsASx9MrrzXXUyoSf2c7xc9xKj2k8jH9cKu9LACvZ8FhnigxuG6chtbzVtQGz62n",
  "key28": "DDWQ7tTp8LqSZa4fmWTmeNgUFjSQJSKoYsKGRBTPsDQuXr9sj6vv8W6FJcJ1o24uoyFovHLVT5EbJXnpm5qJ1Z4",
  "key29": "5YmUBtFSPMmfFaLTQb21Ca3GZtPyeyP5RQycD7aTaKwVeqCCzpD5ZmsyUpWCJgJCUZpq5bHCtSTsM6sUT9g6Nm7i",
  "key30": "5W6qd28WksaspFRBHvuqvCR8BSASMENuH5hWeEnDimoLfSpndQkkAGbB3NFSyaJWsLvij5ofBcJ9msj8RrePfCRN",
  "key31": "3AkqfwZB2DGnPxPKd4Uej7swKfB5cvWFHCSqYua8duKmnW1CJ19ZrJ6mnZEfgeRfcj6DuxX21eugLyaeRnQx9n2M",
  "key32": "1uWbXiKCJnxYWAWwqHgj3os4xGUe2AK4tMEEeo3r2fsfSDXv6EA99EsroQV8bp5u6e691c8u65bcBc6EegYyjqm",
  "key33": "2JdNWwwoLfD2GTp7bMxXwT2Cmvg12Cfr4BiLE18yBYu54XbKGFkpqZT33turn3kTDBvqGZGQHuLNStVZApHwopdt",
  "key34": "2msK3D5HX8hLSFWF4Mb1yVsmSBD3JswDKF2CghJZ1YHuJT2oMFW5xMUTxWmpUeNHjZcv7c2pSXavVS9g4eY78PwJ"
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
