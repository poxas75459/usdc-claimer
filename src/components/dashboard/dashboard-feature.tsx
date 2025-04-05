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
    "Npfm2Sw97q1fagpAaG9MnAj3haqSJLwuFURUUNiCuerkdPC7ESKZqDnG3iZGbfGr7JytKDzZqc6Jq2bRKscZp3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cD33iRpmbHm8jWBWQ2RhUZ82SZ7SRm2X4Xt6VApmoRjAXNuQm6ye9S4CQj7V2CSxNnphAgCnb1Pano8CV5ibjgx",
  "key1": "47VF6xztr9TPzmzsYFY6xybxpyAMVEJGdMBgp8jJMBMvSdBgJXPD7J8g6CDPsXYrWwqwHubTwbqCUw7K3d6xifjC",
  "key2": "2fCPMhjmEFBWWcDRiHwwuib5S3ow68HzMth6BBDGsC5fmsMXJmyJtrTAeSNaxtTXv3Kw3ty6A6STovfRgg9R1DAu",
  "key3": "U2eQmy2woKcziWiAHFDuWeFDQQ7fDKuV9gFPFjtK3BGjeH42SKsx6DZbEG5aQ2nA6ze2dQCrMtpGhCZE3iffZgq",
  "key4": "gadFtythR4hVnDtPf6A9VaKNMgNtRJji4PGDmbxZ82GoH4dc9aCVNrTxBzzHMZem36aU6tsNedscujZ3UdFJLNc",
  "key5": "4jX8tU8c9oTyMC6VPSz6J5Mi4sN9TL5NuSfPqZEPmHvC3Ue7EzemhhL2gN7XzHiuVJE6DQcF1qNwZ2UZVqwFEi9x",
  "key6": "2jnjGDiZkpuccEY2Cx5cBjiazz324Vz4KbPFppbV9RNDENiRkDVgBFhuPgvUc1QJAgyJDWXHLz74jFGLSoCsUevx",
  "key7": "9of3qcz8nNaovMtQ2hjLdQaSXFvnn3LBarZKUHZLNztJCa8d7UsViupk9CZaQWvFpfWUVp3owh5527VPj1YfSvA",
  "key8": "VY2bQeASj7B5j4Hk4Dor9zeUSv8uWb9SmmCMHMgsgCBo52zp72tBF5eMFXcLQkGbUdTYUyGK8DNcBGa3xtNvnQV",
  "key9": "fTPeTu2Vfua1M321xdB2QcMhx2wYHUq4gNQ3MR9UtuDDGCx9V9BgrxjNwh2RQQQqEKGFpf2RxrZKcwXFb5KaFmr",
  "key10": "26rrdgNdsazrRe7MWbHk9XjUyh4Rg58eNUR8949H9hZHWxTsGifm7ZsoABm6bYV13s7hjD7Mp9ZAfVTdUQSnstPL",
  "key11": "3o8EBrgVWZQ3wjTM3SP5DXDQ4DNyVsKNeYEpFHgphWeUJkusxvBzwsJz1wdKnAQ7pDqGhf3AePLXLKakBVBidhC4",
  "key12": "pdjYquTo79ZHekbKHzR4Aw6bJndDEo9ck8TKjhXQSGSzRVVvYFbs2E7HPc1ZTqbyRDpyKwXk4fp74Dvo4LwC4co",
  "key13": "2F3Yaq4A1knc2mCHiFvwm6dZSBzmhKbsyYAExQ4Fs4pcqw2nPd87wBZSacXoR1FGezmeptDKx2ZK79anUM91mh7g",
  "key14": "36SwrqGkJmJpfsuKjfJYE8T8nVUofNZQh4m2FAfxbkeH9ZFxhs3UaKrGijugv6WmRgf4WVQ8GbivmdXUkzWe9i3o",
  "key15": "mbUv8bQB4idLwzWuupDdWMxThC3u9r36WMRHKci55jrVCKVZM6ZXa5UNq7N1ZQHmPJTE1QMQLFVSNAEbDmTDDEt",
  "key16": "5PpVYSbVjwpACppad8hydi5RGDu8fnFw13Jte3VQL1FFvmsvbABAkaVMHGuiUUcBmxwUJQntEf9erj5e8AEs18or",
  "key17": "Et6sC4zPccTr41wh7DfhtoiGqfbVhYScgDjiFRiPoAA4rFubFhCeoCvqb4gVUTLeFqfDAgkU7FTmpVG5tAB5Qqc",
  "key18": "MiZNzLr4R11Dpcqo9QEUpfyG2DE4WPkuPvfy88hnxQb1G4MUXMW2Hbsb2UqGYYEVwSQPmWQQcdTo1kMrN56UwDi",
  "key19": "5NxKMHTxdpF4CKUBotcss2suoZUZoMN1hoKmzwbqhWvAxoypCLhW2V9MbV4ea4YyoEq2tYQZUECuR7C1Lw7JgEMQ",
  "key20": "587NzyhvGe6EQAEo96QPv13uA74r3t12aJzZ9wPVPRiHK79piQTbtnSwRMYtbRMtTfTK5JF6VRgzP1X1QkhPL7gZ",
  "key21": "LmT4nxgQWrbsXJAQxbgJHU4pnQD7jemDyLD71MTprDirz3LbmeiBFvfWCDKhwEqvfD2Vqr6oVuCp8HfGnumhixW",
  "key22": "4nB7zZcjzeqNLmPtwkyM8edmcE8maY29TKkcbDgEy1v1Cw5RKQ9rhFf4PQzCJuoPVFo5C8Ns35kfPyRnDicHPSr4",
  "key23": "kT3Y8eXGiRkfrabBLJwNxCqZ5HV6QvXrVXCQszQ3CCiCo633t1PUQx6gkxAviHZtECDQ9vduF4GDxLFcmp5vhgf",
  "key24": "5aMb42fys6EF6r7xPvUKx61GvDif2YUby6wxMJY5Lo4sV6f1jePfHwGHhXNA19NMH4mWkMMhyBeuK886d8yWxncq",
  "key25": "3412E2n8LgFtcECz4AKqv8mnecAMs7ZQeNdFTFtrk1F5wJNXGWctxdxrdR6M8q8dEBJgjUaDiPpWsnusUtW6m8wS",
  "key26": "4khhR9FnvhGdRqzwiDc2bV6iZ9xT6HhBYmBnPAgFMXZqnUnwj4kWXK8eJcCgzgZfbzCiXGBS9u44DzGVEm8j3usE",
  "key27": "3AxZ19kpmT9FCjo9EUHc6RSAyHu49NvcGbM1y8sSt8GFLRG9wBRsKTuNKVfaUBCNmBSBJYK2KG4ysTUHYdxUXsvt",
  "key28": "jcv87k2eJ1xWwQdiWiwMAvgdnT4ey65Gv2AbTFyWmVbjrx3LT2oUHKJDzzaCNMRX8U3SXHLpdHVJyMJQvWoqH5G",
  "key29": "3xTAsfcr7cS4ynnVVG7KVjBHYpdir2zQJToobAk2oVoKePK83CT6GDFNWSMQbrmg7irKE3RTKrkYRcqHutzHqxCH",
  "key30": "4VWpJsEWPx6XFde7p5Xa3qzuNZ6Z7KXfzjQ85SAwoHGWhGTAbjKH3rAcWyTR6xQAHsBYpkXQtsKbLDLYngfUU69J",
  "key31": "3pYSagKp7i7XEhoiJNxiMsTQrD5okyfcd42PRFx2uwZ7RsWTvzXyGKB7k1S99wS6QgQoJPqu7NQvvToJQghyJ49t",
  "key32": "2UaRJ9VsnRGtMDKRiPtQUpfHXYZw74jYmW1QBPMiyxB2yrSfiZVuvTj6jbTg1fsdWcbgWVcWPtouU8VTHbz97ZbP",
  "key33": "52TgotKCC5GLYSCZGF3ZnN5mPnVzucSoBUuMpZ9kVF2eoqMjFaaChmpA3D3LecC1bh4K6i8UWhCppWRH6RXgfb6K",
  "key34": "5GwE2abTX1wGyKdnzZdaxEJAKxE1amDwd66qHFVhVT3yckksvD1qDWU2v1XkMqcYhy4YeRsPg8hYRYmihiSTRJWa",
  "key35": "55kqqNjPAXG8caGDisLmVegVkbTNefa6x3TWXmBgXqjDhLX4YayAVq4wkC4MQzftNzKW7jCqfyYvjBjTbzS12GiL",
  "key36": "2N9yTCpTGZQcaE5UPuiCDkGHeaivDKaf9cz8xYSfokZ5fAntMSEPLup75DV1svNQZEmuvta4AnvJd8uxMCAn7f5y",
  "key37": "5uPyL3Rcj3eASpojKMj6SYQnMT2eXBRPApafWYh69y9FVaf69XRVUG769TUMRgtWkVHS9nhoMX3cwsPhQamsGSNk"
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
