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
    "33aUPPnd7dWb7M8YD4VJCR4evPtPboMC1BbqBv7qi2tSH8QgkKicc5bzwWRmSnEuqvaQAZoLFqURmfJBt5wpMYvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ReRQudohxRT7KpGKHBuqeczYhwht4cmRzNdd83D4nEWF7aNHTczMxGZ8rg7ySxGzTcE8SBZz2PXnuFtVtjza6hR",
  "key1": "3eMw3HUQ8rsh5zfHwcbUGayrvYyYdQzEjCWoNYhWrsoS4kuVfUPLRxj6KDRgUbbqmW9PxF8pk1oLUeonVbKxLAG5",
  "key2": "39gBnnjvrRqNs7vgeqBLP8igGgAYKQs4Kc3vxqFU5oyVHMBoqHKHH1sCY84eNAudbjAsNy1ZDMaPDhjsBmXQKYtS",
  "key3": "3RHMspe8mpv9a4qUfFNTLTLEGcC8soU9n4FJBxgvBZRSpVwNc1RkJFnAAZiqUmkFLGM4NnEjtz9kbgkeV1AgX8Zs",
  "key4": "5noYCsPrDUWNZNbZg5pNKAHs667ExVPNX7duLvRKXgXVa2V2cNDPYvi8C2g6z6hcXphqvzAhsfc3iLtycEZmPbM6",
  "key5": "3f9Xu22R3ECs87Rd1BjTafp7enwk5ZruQT6JWeohxpU9Mcig8C2Fg3q4biyRPSkSAqryvVZpTU1byMUjNwugtcth",
  "key6": "v274dYqWpjnFQ5RkRYAHaUY5ZzESGDVLsZ9skcTCyHftVtayeM5uYrfaUE5DaT46Tb2nJ4AxNAu3K9JUrXWMJ1J",
  "key7": "5uJ26LHyvzTY3yMtdq9qRs3vWdUGbYd22gkWKTyVLqCUuX77iVh384rcEvS1AQpLmuYdFP71tWgzW8SPXXEafxus",
  "key8": "5wtJ1iUQ3sK8hhYa4NNtwGUqSEsQQsSQ1ZXDVeECd7gxiiXkv33yCj8TcfkNHhKEFM6Bb76ZiUQxqF1QAbyA9WsK",
  "key9": "5V2eAwdb12C8RSm9tRVnkMAZXETmQRWoSm7tPD1n3Vv1Pg8GSGBdHH6kGcH9uJbWPvRow5YRSxBTRbtYPJtTT2hn",
  "key10": "rD5qtHzcBum5WQpKXkHYmy9riDAjzQR2onRrmRo5GZAnqNsdNmn2CNhCZ7Ag8zMFPbptyKGokrGniBHqACYwi8s",
  "key11": "5A3B6ccGDfmcusAdc8mm3u7ymD5iy1H35fJvDo9CDGwoy51hifqnn8y2E7pzv53gEmrgN6xJr5Rg6QxBVYD35E2b",
  "key12": "5q1fQhCAXKatnJeqF4nzRWc4bjkLZpqwWbxh5YPcbgGB1hqnJKUCR5vdogMMfWJCzraDj7FV8Vv5KidB7Xc4jLEd",
  "key13": "25JUdzYzqZ5YzKvxGj3t5ktUNwooF8c9FvCFVQT8PnR7gQ8CL1ssk2VmbAERPhnMNeaKYdVYQhCFgLw6dFsUEpub",
  "key14": "qLBs9V821Fgo2bufCxiyeGHeoXpcZeGNTxtfWjKFzbe4fhNMGmgV3G2PgN425y3H5x3byjyPbqNaSKcrTe6X6Sd",
  "key15": "5P246qcfdnvJcJtro9ywDjV7tYF3aw7eG1DkP7Uopf7qSnQQbkPU8afZ5Lsnk6VuQaK3v1oQ9hQyQCdkkMb4X5v5",
  "key16": "5bVgkf9FeNwkpt44GR7WVXnCEuFTfg3xstRkEEvo4b8kSAzgRnT9mFH2fhSqKGe8ZixM7KqK9ZnhpVUoUCtUpZDx",
  "key17": "55duFXPQDwvBXJX7931dcwq6CdNWnFuwNB5BfFXvB99injxHe21euH56GZXab66odLz3K7c8nPdYn9VarkPGoDtj",
  "key18": "KeLp7kVyhvcYkR4ak6B1f5AbUiNdsXq56RF7EKHNMYypvsUCRAJz89jpDNNjBgXTXcDRutRykbUwcaYNF8vNSNN",
  "key19": "5BJf5QBcxvi7MasQrhJdJGH1YV7vY69hjLoCgmj1Azn9NonumRiuGKpF8JKpvb1npQr87anZSwsdCy6WDfcN2xFQ",
  "key20": "5rsZ49LLaEPhyWvupocKJ6363YkF2xaYt2oWhyiWU2wQ1AbBvHfSYhv2DFdSUCK1j54skLjAiumZQgQ7YJuofNdZ",
  "key21": "2oNmujPHewcfH97yWCpxVn82jX1ejvXmknYWUKuSP3EjPUhXEwZuHZGYAfo77rPBciHiNGq4HXhPAdkwJdD56qNE",
  "key22": "5HCCPwWofB1mTn2iUhJosXyCAjRRjN6kPKrvxAgRLzsfnZcwcrReN67X5kpPsD6NrYUt2yN7viHkMQs4ZZeyriRT",
  "key23": "2eqJgFcfYEhBvWpCpS1wteCueDee1vNKiDdxfZaJKAdGjcrvCHTVcoKforHP7r3hfJ5mUC7M9j134jDZdk7h3UDq",
  "key24": "8a87iSxZFhBWufBT5cKPSVU8hiQSsUdJRphPt6MUtMrNkcUEmva8YDtsq7Rty3TNqbLCQjTxeNi3gVdo8cCuvb2",
  "key25": "5vuWRevx1UGWBrKpXRTUuBieYvgbUFND1LTrW8iSkRFebbTrfSp21G8vUPCgFV47M95uvUGpdsrJ67ttwaDCxk1",
  "key26": "3wSSqwYRM9KrT3uocNgZYPDXfQteBKaCufkhgdDCdDDkkytosvh65Zh9YAWanWsVn2goPtWpuANX3WuxyduzhQYC",
  "key27": "yNUmNuLLu7yWKNScTKQMY1ggaGDCTdZbCGiFxgT9rCLQK85MsrbLVa68wAtA6Ldtx6uES61JtZ7auD8b62JggYA",
  "key28": "qdGYABz7saVJQjvufcBSjjuHu3keQT7KvzXVAGcUyCtKJ4qVtgeekqaBxKZJoxUb7bwiu3JVkZ1qkY9FUob3qds",
  "key29": "5q8LrvUKHQ3uXRQWijbrQPCCzRvmxDAt8nN1eXpxH14WDJ6srhg4tU8s9pCZgDRNbEeCNWJ9wkZfVuTgoRrz4Jcc",
  "key30": "4Pm2u8Xzrpotv9saVWmombaZ7KqzfeTz1569cYon2ZtcAWRea1uYHhnPWMkwAAyoZFavPgeRHkLBX3JJ8a5aE36U",
  "key31": "ur4kmLw2Eq5aqx5hRZh7mmCWo6vu2D2f8fxph4dpVWwG2iSjS5sd3PvkK5LzGAodvpNodQGAQoewaLFLY38SSjK",
  "key32": "2YTKqkgMKcBKgB4zxmicT69XazUQq1VbGudm1vV7WRrZzWpSwPcYMZeDejWujPS4h9tW9bzS8QWgbCHt5XLTpD4R",
  "key33": "MDWJfy5wADJbRQ4NvVXHjmHuExS4zKsPFY9DJky53q4EC5ufKjFor6QFVHJQYwD386LyDThLoCA7FMLVweHjQCZ",
  "key34": "31NJQKYeDXrUwg1af5X5snG9fjCpBR2aHXffUMi7BpWGCjL3dfsDMHB518vBXYYiUaNbBFVyk9Xzzh46dVKW3zes",
  "key35": "53nErqrU69ZxNT1Lzr2H2YNkDYeFqjcnMo4seAR2ctfWvKxnR3nGuYmXgz1muW96XWx41tNpVbCB9EK1zf1hMch8",
  "key36": "4rVgD689hi8EZFwUDgyuGgMgdPSNzSsSEgjjLHEA1X84cA8VLquAd8eJZkS4qwZrvoDkGhojk3xTeYzvmrxkA17D",
  "key37": "5XDVT6ZhoUv47sG3fMRFqe9HTy5KkicbCRXMAfSPBTiHi6jQXumHmrM1UkQsgfejzWmRbdLXGjuAt3fwJnxu62gC",
  "key38": "28mmFwhh3ASAtShBzhw2sqUVnSj1Xc7VH5M72AoJyQxKV4mtotYga3ra8DdDQHNd4uWDSHhWzXKmuG8sZK7d58vG",
  "key39": "34pZb93U4AJqiAYrwBoXJoSzaaWvBmrCuJ8Ysp3mnKcURz5hB7RKsoWZPFsFgpBxBjFw9mcKF7WdLvnr2cu3PnrV",
  "key40": "AcSq3iqL87NHSw7A15BVzYaPGSjLVJ1VvKQVu7M87yCZYNtMjyjcXWKJu15TTtBh2uMXbN5sj8wkfU9LJphPKZ1",
  "key41": "3Hf6GHN8NLU6iuvQwpPEpWuyMKe4pb8NwMVAihh67kLe6iitHfCqd4xHcw2F3Kvtx3gE6JWSkSJUhpU2utDkwTmz",
  "key42": "2M48BxiY4UYSmWwsFmuNb5dvQDLkkiruyiNSWbNnYtvLDVpX1vspUydAr2CjK3nJursXC9eRk47RFu491b1LxcuF",
  "key43": "oKWrGR3WrvEt6f8SrLW8M3zjwZL2j1rheYUVLj5RPjp5yXAd6Fn2cFJQHSDz5QXQ8ParCqMazsA3g8hZZc4fYDv",
  "key44": "2SFQJE8fKGmnCeFmYLVPZpn7e2ALDdNoJqGYmxLdg3iZaaarmLJmqtqXUcj5KWkCUm4W6nnz7bxAv7BTLxjcYayw",
  "key45": "NyHerm5g7CEuKQVRCKK7naXTmFUK1RN8U2ehLwxyHKH9VuvrpYfBkqj1478J4Kywz27e1hoFANf36nvxnj2MRyF",
  "key46": "5E5TJot98wJWbsDw94EXVVaxUraAkeYVXDnm3Qsj5xRd9jPbDDL8HKGmwQym2ho3721CwNwZHE2JmCoWq5MGdjN9",
  "key47": "5TKqnxzcjokgRe8au8R8tShbAvd2RMcmMwgjp7NN67T4MsXQa9mMoaRu5bzHfTit58S5r2bcnRtazYmurrTTYMyq",
  "key48": "3vKxTEVLTNLKKNwX13RrG41xL3C1AvSoudtoHmoFS85xDQiqktV2rL1RimdPF2BvfRiDecA9EfX8PAiyGJzWKwgC",
  "key49": "iongw7XXioJHpXNkMEZu3fbbyxWdUPeZFoUCNVq1eoBoWJL9NN9cpA8yLXjuFBusxJZ9aCu484iBeKfYVw6XkKp"
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
