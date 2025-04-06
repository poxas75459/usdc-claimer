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
    "4JV69KzbnXCyVSLxiTGu7mN5vohFk8imqTrMJAtLN8uHUsvNpMYmP7UQD32zMfzp6H8ZWUVrqFDtFgyazuHrpdeo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fhzkQQqphw2HZqfR9nvV7Nm3JcSPbvjvWfzUBNeChtv9Tto1AMio6JU2D5DUhYDQeFxZaLgGqMwV5ijYb2sEQRW",
  "key1": "rMMrMJ6AYXN63ZiXjsehqtoXW435W4zH72RxZRt7QdzkkatfH1j6Vt9MYGzboHtgWF1zJygp2HtTGVXwttNb2tY",
  "key2": "438bhLzCXg6UmTmX6X4fGR9XzNJn7ma9GbUvPBR8WJaGhgsBiY2EBSuBkiSj5vea9JffAbjUTtn3AzxpmUxrY52z",
  "key3": "3s9ShHmbUqCSKsQWaNsKny4rBhvhVyHRaZvJv6FCGXMyVkXh64W74T2iTAxn7Vqv9yFk3pJzEVFaUddYQyCa1v43",
  "key4": "5toC5nBpuDpVDuADigQuwiecQCJ2MdZvH91RNWs2imsRi2tzMQPH6uvUkkc7LFJ1EZRSTdzqrTV1Vk7LWvYUx4ux",
  "key5": "5h4UPiKwKD9r3GNPfact4mGyNPyPbeahKiqdUoLx7ak5EhP4mPXGeDm4BMsuKRT5aKhZvUUEZ3ctiJo2G9yjeWFX",
  "key6": "4caKYh5MS8UYawK1rfbHzVME8kB5y2ycY9YjHbx6Pm87qj6nBVdDBBbSNGRUUhGrP7VF6Xp2MKWJvgwyqYuW6dgg",
  "key7": "3QBrVk5eGU9u9tg7yZhLyJ9rXwqTBRphUcD1Y8PzENzsct83oeHFbE9De6Q8LKM2KHDXvpH4k821Rx7Jj72xZjZN",
  "key8": "49Y9nL67giDhfAg2GiaRRr6binE51tcmN7H3yNRq8MmmGJb391As6naiQo6UQDLhnhzqQVdc9yA4FJGjnVvrg91e",
  "key9": "3EN1JKNaMVAiTbFrnMbhszvymsZ41Wcsm7eJNQeWTsPAZcu3NYHHgbW6a4xi1WsYABgwfVbmGukw9pn3aMCjSBnj",
  "key10": "66HRcDrem8QcVeV6GN2HT9aQnkgBvVKdi7K9fhVxj5xmQvG1dHH6GdUD6nbyyZjmNkpCgQgLyVTQ5e198QaKR332",
  "key11": "5BFuh8dCqd7CwAAEMNF4nU9qELXTF7S9BRpqXjRS1iVKV7xHaKxVXydUn7TNbyRfyPr7qhZg9wwudHV3s3CP3CNC",
  "key12": "31j1muHgvC2F8st7xxE7z9dv2d6H9ofRN7DYrmm9sgVm4JyWP8rf1p1bYD89vwU56NeCkuQpaFGVuXiHRu4eRYE9",
  "key13": "4W9w9ytA5mb8UW6ySd29M3381N1hFVSeKJLshSkD7x7zb9XYYoCneVjeBCAH1XyaxcsRKMrL1gY1d3RDhuZFLbb6",
  "key14": "3bpUAgNaaRtJ5hMHmWdW5TzyKa45vHZDZ1veU8KuHF4MpMg2Pk8BPtcYGmu4vp24bxVXquSY9n5HdeLWEqs4yfz",
  "key15": "dhGHpWgQkayHmc9qT1k1GKfhAheYT9Qt7a3HuwTow4Uy7nhX1Fj4KYz5SDqgmbYijMNTSms8zqFsBGqcwB9St9Z",
  "key16": "4V5GCFoDfHmMdP7XZWwKgu2ssWiRcthSC5iUM1nCncWxXRQHrUiLe7axtvrT4bf4taVAz3uRh8ygdArDzNuSzHkG",
  "key17": "4v1VyNpZ3tgBg89oAGE2nzqZTZJXLe352qqGj63d3jhBYeBoCBvhLeqXDLYZPjTxowYyFf1HWPse9TmHbXwEAyrs",
  "key18": "3pqLF7MaxUm3arqWvtzscZqTLHg7i7PDAvu1kuE7APhGtDWjYxYJGCB77EgzFeHLMvSMofkJcFgpkggUyypePhB1",
  "key19": "nCazkx3sLphJvRnC5YV5NQ8P87oD9cr3mqVNQhHFcKu9vVRLYeu3pCV2mE1Z9vrGDX3hm1BuSeCdGYvT6RC4sbh",
  "key20": "LWJSUmHcXSjM8DCRnP654YMrxVwfYGwM9HunWKRQiaUJLgM4v7ykx7h4b28bnYdKCj9gpMujbJk3ja2Koi1QWYo",
  "key21": "32YtqQp624RPi1DkTuG4pyfSFkt1Me4VbEiPgvo1Mm6Ca6vLWWqrgvHE3oGUwPKHVyMGPJoeo1sLBGsw4a1m7erS",
  "key22": "CqNneTxnkdrgZja6Bxy9HAXfvRLY9YmJPnaH3ihkzMsFqXojqtQbbMGRobrY8NCQkxG8RcxYscNLCegq1MVT2Jq",
  "key23": "2NbY5PeFe4JZnohuUZ3zkfQpnZKg5NVFj1HrX9yArqZZ78ozVujF23ph1nm53PnEp1kyNe3SbyBFzywRzaVxTqkz",
  "key24": "2zzSGEQw8i68YSDchujuGE7Vo1EpfwZF99uSYSg5jjS4AtK2UWmX8LhxRWiD83rE3Sc7PYk3paRf8WEArYSpJjLZ",
  "key25": "2a8fwaUgtqgZced5yAEDK633J3oNM3p7XxpDRy3Nes6pk7jMbR4vLaokMJL66kJybJ93AhMJvbAZo4PPLMTXr2gm",
  "key26": "3nGqxALHh3GbHxJFYrZBmmbfoqthGipVUDYV5fTxjT3LDsCkmDSYuEKFdAhoir5AfaJYmjMXV7SfrvqpfKXmPyS",
  "key27": "3F3kYriCoMSph8o4xg3hgJAthT6Q7RS6PdZHAjVVXcFfPF6cp2GSd6DKUeaPhKJaXcvrjUssJTMiAiHUoys7auiB",
  "key28": "3go3uTMg29fD3C8rXnDgkxaVL3cVpG22mvZ25DA6oEyrFEtpUM5zU9hq1yEmkStCRsZjBHpUBQ2dHKGxhXD2KZeF",
  "key29": "2EZSbyF92qtLHnBbkukHoaGpmHNgsFF9yvPGDVeBjf6yT8S3Q5XaNn4Ffwf6EyyNVUJt21fQY3rPNAdVXhQBTMjq",
  "key30": "3v1GwitJ4MWSRrb9GAFJinWay9KYbysAXnZvEBsggen4XruzeoYA18DSvE9jXdthU1MNEFaxqMT5D97KtQcWUaMx",
  "key31": "4Y7uLNuvaaeLrqEgKHW8pmfuVYFmSVSmrmJnkekZxzaiyzi8ykZwWrjzWGTAUjXDPcWEuR9YmZGDn7TnLMWQSERw",
  "key32": "UsA8xZ2wC7VrvFRxgKfyoCQHWWmacaLcqRBEg8xPHvX9ep7JVY8cvinmagFwLPF7jWubrKFmKu2BUa19khDB5hz",
  "key33": "29c7GcbvYC28N8JnSBWHVenbL3K7Uz3x6gRQVHVKMo9hnZqDtrk9xQxLkKxuLuLNkH2XJo5jzQC8HrhiEigaun3D",
  "key34": "5MJ4FXFE9Arrbs8nTYEVSCkgSqxS89nyBzL8BzVuM49NThgNpsTXadq85BhpK5AvB8AtX7468aHR8XsA4frMUayE",
  "key35": "2Bn3A3k2tgqNvT1ULqHK7XUtHrYMo2Y4nM25qjFa336gHQ1qvZDNKxs9cNtJEHbuWJLk78efTTVvtEb5Rk4jZjor",
  "key36": "3B7fzk8aTHLG2BeqhYE4pYX8x5cMrYB163g8u7CokSASYiBvbkiQaxWMYmdNNHoxBE2YWZ39hy9kz5LBUUJ6R1Mh",
  "key37": "2AHcCPNLM5yDUFMQ6dyFqB8yfYnzhi1TWkTuhVUHtWP6m3sf8ZQVGP4BHNmdhtBPtwGR8X2qY5GrWzGT3A23pxB3",
  "key38": "25jbwAWDG65amddTKk3XiTdRKsTBce9HgH9eQLXskhuuYcmfjQt6JbWqHgyCFRRSFFKsGoEX3ARDRzSHZxSrADt7",
  "key39": "58rdDBbC7shfY9sMBasQL88CpuCPtaXoNQ6U3Ly8ZKYQriHiK56BTD4fQgKaMTVyPxtEJjsE3vZD7UoMVWV4FErW",
  "key40": "2Wp2K9RVpLMwqVbPrs4bhLfUVx8cQpBUbPsBWVuWYECZb3JKfEnhducePyDqFF6sVRHDKqeyemXo1W7qcRLFqSRV",
  "key41": "37Ak9eC8fsQ1bk4AFdUAa9iHsZyjG3CvW1UUg3U8N3i8EFxoqqV85eyCR8YL4HXDgedLmDsDPAoUr4JoPofo8PMD",
  "key42": "2ktDfegxPre6vYVAvEr5r7AyGfeZYMRhPSwCHCVE6TVGpHvXhGA3dgGeftSHn98BaT8Wn4jzRVbz9pPwCxz2NZtb",
  "key43": "SZS3h2Zi19X6S5VPXeRxyvuq5E9KkdfS4Nqy1EDCBKA5PaGKZqVuqmAQEpgMNHwyQaUFmmxZWaDFGMTN97j9V7V",
  "key44": "29TV1P3Vm1DM1k9LPwSPk8aM1UonFDDnnR7e5jvyPbtAXLALiR51kJcr9UFDMp9YLQchvSB7uDPKGccpC6T3pbNp",
  "key45": "3MttnnxqKVRqa7fmNHdaZ53JWMv5Mub4v1PkSrzM2F4x7CEVrtHs6HQFcKZoNHgF8H54UhgmLNAZNgTk1UCrdLjP",
  "key46": "2AsMTdP39qmN6QcWhmPXYozpX7rukxeURVbGoJfV1PQDKUrnwMRxPUkMtiXQterG25Rh3YTxbvWuyGuPVfg7pNzi",
  "key47": "2qSohXoi7h4fou1JBhqRf8f532ruVb19RaGuPxh6DarFiujFnVffh8P5GrC2WNJBzD82W6KwRH229LmBW57J2fzH"
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
