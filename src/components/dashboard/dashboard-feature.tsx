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
    "2ciEfwZnN4TbzAfytHsrkTA2YmL3GduB1T2nH4XoeVHQut79TPP487A11WETNh4xaJfJWquerVQ1k9n6M4yDhPvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35PbhEEaLKex6uN8uptMLTfAcB8h4Q9HQT6WAG15b62uBmcUupmCavJtestjMEvC5pfA4PpxwEzDktd1JCHaQKG3",
  "key1": "z96nJJebegKLbY4rsWW15rC2n1bT2L6GA1cBU8xZ44RwD3JvSGPoCLuD4A7WHcDZvM55HWfd46XEzb22HHXhBJT",
  "key2": "4FMN76Ps8b8inHc6rgi5nXnTURyiq9uZfbSk4eSdXda1YiijU9o7KV1YyVzd1E8T3FTbKj29NH4tpVtdGqmCVUjZ",
  "key3": "5tXUEoTpn3Y6oZcRETQAvxdcm9XS5uB6frVV4egJaPZdZ1P9mGiYggyqhbYgbRvxdVyt8yt6cLhVZCJbfCbUMwda",
  "key4": "4Y74HbwphWwMBGmzbxdjgVLPyDTRU5gacjCB9QBSoP5fN99iTFxzvF5Ywk22rhMj6bbvvVTxeVQUwUtbTxA9gpLJ",
  "key5": "52MyMpiGqJLGqTC6ZK9GxpMqHBMUV8WQFiFGjGfyMtuxsamWwqXZ2K2ez7CFPqvRBMmxYPMoQ95ke1i99LCsPihH",
  "key6": "5ZcfipvRSutRXBJL56UJBGGCRcHXyF4J6e9DLqSw8qntbpKYyAkJjEGY8t16eKyAT6uRdRVStjh4HJJ394Ny8ETq",
  "key7": "2RRRM7Wa5S1dST9kUSLAwf2PRcZk1sUyiRY1frRJeSXj442f1Nz89zLt4SxbeozfHVgFK8FByisPQUSb1xjYgWmd",
  "key8": "2q9LBPzzo1fJFFQqCa2Df9fYkM6Poi4GRbjBufPR1S2ByxWvyteWFM9PJ45pvYUp1JfnLyDczzZdXYFHSYxrWSPP",
  "key9": "2CV6z1tqnPTSpmp5ExeH1XvKz7AcCbBdKZ8swhgdD5GRigZvWG6sjCrQJ3zEzapKWpGCP47MwjvjYhBUeweznVV5",
  "key10": "6hZAxgnhpqWgs6EGusZHaiyKMLJtde4MqathzTn8ibqyhyxmxMEjowK2CPATbtaRFXMJPz7JodwfEdyXNdtMX5g",
  "key11": "6sxmiSWrZMvD7vVuwNKhW3KB1s69un95wW8duW3qD3T76EfiERW1WQW8TLD2pSTU6KQ2UUFGL2CHLtWgJohzao6",
  "key12": "5bqdnzMyu7gZjfehG2zDpYHdawXM8CS5HQqcWep69cubJADoTrzyH3zDPHQQfUexEYB9R4YB7DFT6bRyLndcydcf",
  "key13": "2baYtmzEHsy3QHNWzQW4akMSsb2NU7fMWqKRk8cxPtmYmyGZ47uynbqMqoSspzEYN9qDpCT2CQ6wsSpe9kKMsqU8",
  "key14": "H6vjqYyzDaTV4xy8SfmdtJyzGJ3DZ9YqLFMXDAcWcCPHGiGkpnf8u6XM6bMfVDtix4KJ56UtTNFP312p9YE8wQX",
  "key15": "KYiGvMDVz6tmvhVHybRxi3zPJCUnzdvjaG1E9D5z9ZzLVitJDEe7oWXNVfVfq3y5FoBa9UsB99gDxhJTEumErbw",
  "key16": "37Cork6hEPdYHk5Bbu3Af9jc7Smeexe734ZMnqH9rgyuxnmRKnEtWnhfuw7NkZPSGrrCNd2RMPerz6Kxso5mFTCi",
  "key17": "2sK9do1opYpHrpKCUiQBzC8irQPnt9nLbaC3pDmRNyn8GyUsnbA8t4TnuDd6aHghckqG3LHKvKJBZ3FEudELtHR8",
  "key18": "aKzKjermoqqViRZLjaVyUNqNuZDrP7Zf8jgRn1hfyH4zcVPAnGDhFN1ML3j3Szi9Fwzc4ahpeWxhSq76CP4k2Bp",
  "key19": "2nJ3AUxk7LVtpctUsgr5qmz37xFAErXnXpbVyPsr9farqUaCzkHV8JB5zC5VQrsAz68rBqBsWCGc3FSb3hzka7xP",
  "key20": "5BWwXGkEqUzr4eLgyaBQ4H6cJTtRNeFWVPFc7PhCabMXywfp9BXAJKTy3p17QgHqtCThqZTX7Z3snN62yMh7EYUU",
  "key21": "BqDrv7MXEqgXraYSaEJQbnCm54BbaKNdhCym5fEHY7gdy3JKfkknADN1Bwctyo6tLNWhdHw628GGYjpkDaUz7TW",
  "key22": "5NvbK7Jbm5tgB3uYJUwds65SAvF5Xi1Lxm9oYKnNXyLx1TShLbgNCuT7YL5kc2QJqapj34PZQCsJSNbGqfeBpzxD",
  "key23": "2cvRsuf7oPDNBcGtbLrRCqbtXkSCUw29GdJb1jFjL2qrX2CGQ2fLP4soRsJoXypsWuc8afCWAPkgzRW3pnDsTRSi",
  "key24": "57yXeRv566oQy5ErhqTLdx1MA4g9CkuwvAActQ7nf3SeTi2qYeqbbAvbPnEW9CZrWHtqeS1sketmMqvMgK2hUtVT",
  "key25": "5G39HYdjdYmvVbgeSmDcGyGaqqM6jLJtP58cM753CJDGfNYgTvPq69nMJKqeNq6a5Zi3TvPvbHkbCCSAmupPk5f2",
  "key26": "5aydj53ab85LuZM8FFiNnJmTtpUfKy1coui3GneKMDsKGwfvEBLrZx1KGsDm9upCsAiXWMKXzsv3sEZqUVFa4WJX",
  "key27": "W6hJMoTbWCD3zNPATsp1mhcF2GaSDcPweiW4erVUob3EDQHX27k84YWNMg9vnQxEUBR1cSv2Y71cpoK2iPfjcDL",
  "key28": "52cf2fwdnWHxz1nsu9xdcEgDsqRbF9qAWmec5z2y4aTdLrqMvwGTqtB6DJgNveQvsTzt8axv8k3te5qwAKuyHqVs",
  "key29": "2owCHafbvKiZzEKLs2MTxeLecGnpwcncB26jhymtikEGscs2GgWxkam3mBaZi4xV8aPgsB6SRQVKPp3V4MJsgq4z",
  "key30": "XoMf4hawDWsoapw1jv3SboLTe5d9UsFVGP39EBKvKfm7EfjhufzVdsmN8iqdwekhYVmQ8mTqjFkepL5UfxXB4RZ",
  "key31": "iRxDtjiGxXEY9L9EiuVAxuC1VDjAsEq4ZSVaFBSewHr34HsyD5NYQVB9Q39rqRJu1Sp55MiQTTTnBuMUaF4TCFC",
  "key32": "47mi1bjiE6rHAbngctrsp3WdXYLSRn25kKwxcHNVSsDDGh8N7TyzYP8B7hDXZec9atPKn8NaTUzUEnbNQicNHcJw",
  "key33": "5aAVYDb9GdkKiE8E8g8q9wUVJ7rzMeMGNS4QJP4YSPaThTEgtLEtz3H23iedvp7fT3HrM68ERNrRFDDkJ9grfDCJ",
  "key34": "2PpzMafxWAT26vaHDSmy5JJhnKeTTrNqDkNPcScjzkJR5GX7jwhPbjDbW88dNEJAvpK5SRowgXkDfqRbMVdmgoTQ",
  "key35": "iffmFhbLWKAHSVNcNxcqnJSMBNpf7gvhcHvKmZ8cARTBvLnBVu5AiWpNk5qRqUoZPBmUc2F6TE6gVxXee2x91zu",
  "key36": "2uwCFTQA3mo4CyaA7LJQ5s2AH3Rk1zD51xqeNq7jeSoQV4TX5Ywt5SH4MVCdTBtcf6h7kGZoVwLGu5cnN77K8vPN",
  "key37": "2qYVx7ENeHFVuNGb2XCmkB97AcuY4poPMXY8zh43Rc4LRtPNbhQZ2tPySsCa6KjrjmSAyZbkk66WwXkseFnFYwFJ",
  "key38": "jqfdk8yjX3bBKuH8ybJZpFVeDBzNmgNAzK9tH2tSnqpgCGNQvERsbHDmBYiRWZkEmJAGHQsETnLny1oJ9jvSv9y",
  "key39": "3WVFsKwHvChKVyZfTnFdvsh9gsGia6DaEdfWUMCUKiy7pc2nMA8cWjTKCCfebJNrfmWWkZdsmL8McPnuyQD3s9GG",
  "key40": "ceu3icBfF2rSNGZehMCbZ8wXyRKoCRc1pcWZ9hWK8W2UHLcSs2BwYDbRxkMqYN8j6S7v8ATcqWLQKcboEqPqMmP",
  "key41": "4vh4vDND1UjxpJtsccX3PQmyzhvELmyxnkidKohVDubZMrsUZtzJP9NYkuBgoaromzZYAWLC4oBfdUpPQ7gerzb8",
  "key42": "iPQRBaBXxLfMbajRezjcPicUuBa73xV2aEVQNYGsyPV37WhuHFNCcRzN8RVuB3TAbeoXJvuxZAeGhqBA9Ja4xo9",
  "key43": "ZhjjUSswRgQjxsTtTCvuswFp9Hpvrv1s2rTcD5v3uWB1jaqedvbjbtEctwywX91WYUcQ8JEUzeNgeSdxToBXsv2",
  "key44": "5q2wAseNRjhkD1GqnNiKGDGrCCmZX7HaG5HFwY3JqTuA12y4xhwHRx6LWjEGrv4w5QwGFzfvq7azsZEbL41dEf5Q",
  "key45": "Ui47HTWBhnozkJTDwZU2Z1b5Vi1T7d4gKjKMbMbKyijX9UQYwEk9BKuy9QZZUkpkwfxcw9MBrgJwFDPSz458KME",
  "key46": "5scVHw136uS5RqDZbmUNNWta9jqUTWjN3J2w26VawTco94E1FMEf3pLbxpYwhjicrhCfJk1eACqBUvVteXfYGwja",
  "key47": "5Tpuft5XbMRRoCyuCJDZ51dzjjx9rLUW8ENmN2KhGhiP46temRhswr8AwxW4SAYEFLn9ouFMG1g9gRoyS2LYkh88",
  "key48": "4PggWgYzfyVpvKgaFMeYaa3PvQXN3ZmdbcSnofpnCk87fpoRvWRuWigFUNVWPpHKtkBZ4GPqcypaLBCUxG9YnsF6",
  "key49": "4bSb5sBSYnGY5KZ9CfAm31aYDV2fo47EhbJXrZYJDP7BeQiCFc14qPuJ3FyR8v3XhKoGSusT4iiMqighneC24ymf"
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
