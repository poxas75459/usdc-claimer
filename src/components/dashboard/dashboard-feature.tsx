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
    "27h4bt5H6eTSagrcGTUeJwuzjsFGyCUWfgZueo1LYMJKaRzcf5Pby3qfCFWj2fMoEqscagqJAtuAr8YkxyVvGMzf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YwSUsHEEiC7r7ASm5yuXwD4pqiEuXoMB39geBaYRQHHtn4FGy9LzLjhcJnxANoTNLVua2QJZtDVRm5H4iDxmSGq",
  "key1": "4jvo2TNczxs5VYYbb96R5t9dJM9n3PACaxxs2w6nef4t31MECRtvcAx3iQim7PCpo3kZEVqHDhX4KoNaHf2YtokV",
  "key2": "NkkhNsaGFngrWb4AeswWxL6WvW1CAbJ4zYjNPDRnXTaDj9LouZD7eybhi12A5BdsQPosb131pQhbdHpBvSyRFym",
  "key3": "dL9zc52Q3XtYCWDExQURAXj8AtvoHvM5zxGnJ7G97X9wE6N8hgduSKzLZLMhkjz62nkJWJqUwjiKfmzvJHWR8K7",
  "key4": "5bVu7K2BbSuZMQDHfn1mwFuCij3q1BDHQ9FAmMQRz4FCuCQ3AkXiaJ5YwcbyHu9Ravqi3dvueGrA9WJD5qpPDd92",
  "key5": "1285bGfmFEmvZQG3uJrTutPw7S1qmtUjRpUtssLfiVoV9Fc96H8H6omt4HNAuGuFoupdrsAZCrhuwLuRkqr6A7nn",
  "key6": "3vDvgEutQA3wiJJRkf3NzucRGZQq3PpPiPS5dkerYNuoLhGoNyLhtzJHD5vWZR8jy7QEHyCcwbVjfYX7PkpgwVS4",
  "key7": "421qKwhJmoqWWr1DMrVhzZKB3mFEAdKxRqWmPyHC23KrYzQGF4fRwYzmH8ZtZEMVEG5qgk28No3ah2RYwNvC3H2h",
  "key8": "3M1kH9HNHWpJ59fyTsSzhqGH8KtTq4zmDmiTdNAUntGGf7HtyXrwSpVkNr1AfbBqpsH9ynsTzz3jk3fWqyUMgz3e",
  "key9": "5Y5nxqXFNHrGsksWctRhRgxy9VjYuU2zTj5S7zSe9Ws6MLdL3egw4Ezkt9hRqd5H5PX6CumBua8CFb4Y7EAwf9JT",
  "key10": "3Q3LaDWid32RdUiFRXT4REK6tV2CtM6EcEXYfu29vFTepdfPxPK5YYjAf58Nj9AtWH6qxT8VxmrFVYx4mWLkLwWk",
  "key11": "2p8YSrg6gro9nZXgKEfRZPSKQpWK3efnyBuizzhscEk9PXF3pEBqX5xE5c2m8r6BvPFjXF7pPsMmFWQuqQpsNzZ9",
  "key12": "2XQmtxBbzHHMCVtDFR7A2wLPPQqJAvW2KgAJTd6n6c6H8uhB7EuSjeyKkRKvTxhJJUp3MwVR1ZV28gk1DWS89XbA",
  "key13": "34HzF8CexbBk515Y2bvuhgiSsPZUCvvhHeNpS1GKJjemQ1hDtXtR5NAQGFrPj69WjiqW7nX4L3ygkRcNrqyA7cxK",
  "key14": "657Q1ZaMQWq3sCxDZEuSiGq11N44FjiM3YqFgKGR544shhJsE23UjAvP3QG4VtmENtBfUoePWyTqEwoiZ6jU82ut",
  "key15": "2VKSUcY5sVtdDUDfhYJR5d4gct8ELoiG5AMGgY3AwXWiFRoBSoaeWs3Vz8wgiDMVcxm77UVQQJCsmrNvGdGDQRGj",
  "key16": "2hE1M3kfXdiunKkNYX47vM5G38TMYrtWTitjk9Et5MUKxxe3x74BuCUV382dFYxS2TEQoFH8GwhWhEqLtGw2inT1",
  "key17": "5AC7WuSwoZNJgC78FPgBZJAb34ev78JKu5LZ8rvBBWfvvVEhemiMChEbgxy5KVnBdsz5QHMW28n7xJMEAbvwxnxH",
  "key18": "63DFPhdEv8X7N4dBe2u34wkgXfueAwxYLmvTmw5Gd33QiUx9ho8bvYsznHQ6ygzw2TZ96K6cJRL8coFmBHVq16g8",
  "key19": "4JULtWUwtNzjJ1wdZvgPdyKJSMQrRseRdQEvaujvDY8C5veiyXWo99TWueTA6roTw4MAJoARkLGKsuuQi4S32wym",
  "key20": "3owhQh7vG8wQi4R4ngEAqgMafyaprHCVDBYTDP98BmeoeRf72KUrWkFosSoN537ahpjqS5FeWvjjayJjg9dgFabW",
  "key21": "JnoKGe61UnLbL995xAD8zJKMfPiD17JBNSFmrpxEjcRfAt3C5FEbPsyaTHN8oJe7DzqJ1P2pPA8ptRHBcNT1MbP",
  "key22": "2FcoK9R86sngFLTMq5tUeNJiAe3CFNSmx8huqZtAfWVVER3BWCSFFRNupRtivPQbuwWS4Qznf9Syu1jE1fZxF9Lw",
  "key23": "HLXG8YvbNkFMRmK21n1PzHR6CQZDcMwLvAodv3wtKos4iJ9wcxn8DP5hyA8ujRh94XgUQ1pX4ditmciaTkp78wr",
  "key24": "vDQogdb41CRm2y8ZWMmQK7GBTYHBRbWdJFHrqM69LgK1unhPX4rf8vE5SP6DdktspXxsq9nGZYV3XB8Z2Hrkz2e",
  "key25": "7aRTgKADLV23DjrG9bijDC4E9XFyAJD43SoBEVL2wYDaV1Q1S8sgej7SNwp5goRUiyhvVy1feJzcRaCLaJQ8R2i",
  "key26": "TSv8XqKNrE3bKy8ouoZ5ppymh4EkSsHewwtpqKMU24nfc8AM1FouhTZAm93dZdkuiJgWHAM4dmDr9DjPyRk72k9",
  "key27": "5cBwdBj8qWU6xpSjsF9QR4NiFcYBgKuDARADLN72eMnZLL3nx18QNopp84mdB24iyx7ogeEk7zABeUNmrT7KNL1y",
  "key28": "NmY5weM1FsXX4TL3kha5dJfgkWXtw4XuXUHeCcmqjiCSB62ZHg2Jw4fn6bCeHWWaYF3hEMsiYhwVKVUAAedMQeY",
  "key29": "nufyrbxYrNvHPHnrChKZoHAhEeUwJZ97pePaaD5KrxTuLfSmz9ZtmzWHsRDx3RU5WgR3F3Pws63sUTKwYkEuN13",
  "key30": "21mcqy2FWSuF7Cp3KF3sEjGxqCShjVa4BTki4zE2djMgvj5N4xoL1dk27Vi7ZvUdFVCWxXe25FR5yACrAvGnEQ4h",
  "key31": "5nqPDSobUfSffXtT8z8KYd1VkzhGFSnL4sMvB8g3yz67xvvHwkDAqAYmYGVzbA24nfxbKdqqqXadsLZDQoveXByj",
  "key32": "no6My58YtSkivuojsLk6NvdTis7cq1Pods41YqLsDyaGf8fbmjNHcopx9W35QxFi6CK5GPCwowY5h55FYf7osTM",
  "key33": "GcBKvC7JsKYP4pg6XjVeBETzZ7kuZzm3QLZ1WVPysvFKs4rdt3ppXtKzZEn5kdKLUFtxuLrb7vSgMc98DxvsReR",
  "key34": "2cFXwwJWb5XnCvqyAGYgmHTMZEfVH5t8LVAQVxGqiJHpocsJVv31JnoG5Bo9Syii9Bj6pya9hYwHf8xggS69j12V",
  "key35": "2qaKhKecPLFNv1Enyj2yEyCJojxKd9SaTCV7hEKzPExMwig8VQcVBnnNhkYSmbjkFaT3wj8iNBAfaRYMhwHyS3oy",
  "key36": "53JzSrzJkqm1AkcQyT5Ff6UELFm4bUgFEvBHmfUuWSiXbBdSUMwpZMVYdcPJrSoCUfoBnn7mPFWTdgJteGFS16cc",
  "key37": "k2tVEDR736cCwsRVNZpAC7E8LP1vopbN7vUnYxKNCG6RYBxzoRQgRBeATTUMijnNawGy64uy9w288Ly3fwSuYZh",
  "key38": "4J2kTKXmfjDPukV1KPMoJ6cc3xgXu82U89K4ASDmXfnZfpd6UAnUhet5d25aMp44E273GQSzHbw9QFkSMUPsCGdt"
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
