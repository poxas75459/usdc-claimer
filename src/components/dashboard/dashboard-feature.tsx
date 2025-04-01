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
    "XZC8HnV3mPbCFkk3LK89UxNtA1CoeVX68xrdtPFmWjb9BRP4irPE1hsq3BUPCyoD79BRvXKr4QWtG7pe9zDBaJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UtdCiVdVYucYHS5jpzPBz65257SjTdB2DQ1SXzB1r2KzUKNvxQpnzXGPnukiDQmcKnCCmWHcpJLxY75nt52dxkS",
  "key1": "4GLQZrigUAmGM9bAT7RewGsUmitgTP9dFe1FBePzUuiaducHEi8Ek6MWjqYbM3dz4CkWkHWJLU7JrMTfD5nDgedf",
  "key2": "3pMRb3m5VMJHBmgUHD4qTGYzmakRSL9GBF73kXHgnsVZgppYeNfcyiiHo1TAN5FSWmGC1r6fpupZ3smMS8N9TB69",
  "key3": "55BGDcXFtavP7hpqCmkusyQLA4ogv5zvUgiAeavYArVodHsdx7bo2qHdaW3VHzJ5qiMtJVhnc3CSwzq9d3BeDQgj",
  "key4": "wTsrbk4LXPBVP77QneV5zRD2XyagaeSgihZAPo5iy1p6hrStn1FNDoGwiXRDnRKkJwQUJd87n3rVEiTiExaVjFC",
  "key5": "5rtrGZ33Z9e3RoUqVa3f442cL2om5LRJzTpfrgCnjpheW6FcTeyNpFc7tZspPyk9JTo2Un48Z2ESQerMdxj6LRoZ",
  "key6": "F4S7BiyCbyTfDKnaLYJ9acypPNULCKuqSDZFc2efBBfzkxt7LMpHP6PqTavtRaK3BYf7JjT3xRUhPGMJ87fE9SZ",
  "key7": "3zsGDzEWUY5jBHxExt6nUuHGcvHb4CDFVhWyU5w5bodKgaVTV7TsabfjGcG8f5bcnGkyb39MzDfsXznCF6ikN1ww",
  "key8": "3wr22WFg2YMknkszUioHFBA9pPomYmiDb6yAu3LDR4QMvpfCJ9z61ZpaKW6t6iT4vB7SqqRFCbqf5ZmBtjSotKZj",
  "key9": "2m47ruVzREZEDLx3uDbXfstZ62QmJkpJiLAUzWg7Nmt1fJeL2jj7sdo1JYbr77bEST7ogbnqVYY4BwenD4FBGF1A",
  "key10": "3HraMo8gwJKY3LqdpFMYrpWfUsmpzcrhkVdvmcjLDcZHyr3cVCovJJkUDC1E3MLsXjam9aAtrqjBmsN2bqdmDqRr",
  "key11": "25ytdrcyxVBcovqrLTpyxbwuoPx99sVjj712aV7kKDv9eSTm9xQ1znZ2aFv4GZQmTe4UYHu3jZLt196oqH3vXrHK",
  "key12": "56vyBVxz2ngsttcytKqGtLwbzPeJHPYojgeyCq814wzGprUFg2CdpBUuRBSgiRBMrwUMUgEZE787rfYtpMT2RMGt",
  "key13": "WKFnNa2CroHU27Eud7K9LYmFMr55865VNeznMH5BYjwNRD7RwGq7MoGHQaYkGVJ2EKDQQNrYBtzfYGXjmaAP9gH",
  "key14": "3itLgwhCvDbNPKNkhqdv11Usbb3WTodABMuQHPKsPNtswDQKidzhH1E6biAdo9gcNf35JgMPws9w7yWi3wF4fPD8",
  "key15": "2pfUeThc6x2R99aAxkBz1Jv4VaDzMT1ww4jRpHemcWi54ntc7NdNaSWEPaPsdK6x7HE8rEdL4qEi1nAHv9H8iax6",
  "key16": "2rg5CaqCTNLbttXL78oBmDrbqFJ9Fbs3iVfEMiAx7jkuK3MPX6ovkpmQ5bcKYZsoeVUDJ1GetAyCSf9H5Q7WEY5E",
  "key17": "sqJcUQphof5XnCnev9djqZTkePJyLF1db4VaLwaXvaroTP2bZ534LAVKKqn3yUvRUxxHZ9qLY1SL8V4S16aqs28",
  "key18": "4sJh8fJRze5UnEUoef7jXEz9vo7GA3qxYFcUjLYmPryMkACkBx8h4Eg684d6m9tkXgivUw5D43kMJ41FNoJt37My",
  "key19": "4bV3KnUuxdubQ1apPJaaRK2zWQAMSXPDeDD1VJxM6Vcq37Z5vbEfg7ew1dK7SN1E1UcVf5WgRKJjmF6pwFmrhLEZ",
  "key20": "42W3WFsNLTQ753R2kzoHWzgvSqrvVCoai4Xfj4vnDxKaDPzVL9Vy2hXrHdR6FsYBqaDAypPbjmH19RFCjWJMDdit",
  "key21": "5hzm4AdjeCM64CPDjZfroLQqBDg5s462MrH6gYhQsRG9xD7M8TNwRa1eTZGHmLzU8xUXSNa6XXYqJKWvGRRcp4CG",
  "key22": "4mitNbJjJmqbXaLFsZhACiVSGEtfkMtumTiqwfPisr5JcYn9nRPSmTpNjTAq1vnkrYf988jW3B3wnqCpS1s4pxqN",
  "key23": "4FnWxY4HycccoUY879MRjWz38JNH2upHrWaXPuzP1WM4uuCE1ZRZ1ZtE12eM5cVrpseWNjPuxFzMGsHQaBZaAwcS",
  "key24": "2Yrchv8DaRDYvu71LdjeMd8z1A484LhwwcHR6zAAKSounewF8jBBvPoe1ivvKPjGQFgxh8eEz8bSemczaZBdF61j",
  "key25": "5jx9Y5ngrbvDFxitZXcPFuNVLpQmsDrWguXMfKd1p1M3CVuEzZwEhZV1WiESpGsmvKUC8SzmEAYJ1YgekgNFkQXW",
  "key26": "2giqJn97mEZ4Ahrkci6AcNNDp9SsYc3KusYxEeo4ynv7Fhbvva2sJLarUfoZ1xw7Hk3uhdsLnSi86xXLWfEBu5NA",
  "key27": "kpeUEudwxVUDhPkYTGhtaUJJ1sPBg1UoYXPqCmkAr7xeJ7PAmZpEJP8UiZy8MbMG82rwu2pEKhaV1rV42fMb2hG",
  "key28": "JvWUdwzNXff1KkShSwEqo6XWcSzNHVc4r4qFkQETpLtiy5TS8v3ZkraRxA7LnZy7go6Ze2HHQEtDwxvihuqCn8S",
  "key29": "3bCNDVtVZHDf8iZdXvshd7GpbhsYnMzm2j9JzGJBLEpMwSqX3UTNMczafrGy9DHSoydPmHbr3squ36peRWJ5dSNg"
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
