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
    "6tv76QfTwHRAECRskNH19crzmfTqjTi2w3Eebst3KtBXw3ukEXYmRMhgDdGus3hALUPSNMQPzpcDfNes1FpEZLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iZPAbQr4VL6ihyZ2VbxkwRnSKRGRHzWroLhNKZVPAXg4oA5uR4dFnB1QN66Q86suNbPnAn6T52s7ByuiSbW9ts8",
  "key1": "QsVkqFsU4iEgkJgbA5ULiR55sRs6AZHgnokme35MKwAdrzEQPDDTabqUu7koSPuCumjo8y4nzWuAR7ueNsZtmyE",
  "key2": "5ekhBX4nXFnNrBLHoj87QtcceYjhZZpjfz2G3yz7qWGUqrNa7s2z4zsYRN8PHH6uSAtFnP31ZHcAeKeS2sG8z3yQ",
  "key3": "5HHbHzAivH2kh4Ew1iQCDBiGfTtuZddPqP4QngWmUWxUaPym154tfgfiRaB96uADMDFbf4v7R2ywpDVzQ8A25BZe",
  "key4": "51ESuZUsX2iG7JDcK4yrDjg8j6atXpSz5zo6EwMZSmWBPP4pZsdUzfWj48XLUaqEa5yaDWQ4YmoHff4kSLf97Azm",
  "key5": "3dX2qjXHJCLKAr4NRCeAHK8WbvZjsysiXUBUrWNgTEaTmMFTqRo5mHc7SgH6KAThjEXomou7taRz44e9KaserU1M",
  "key6": "TGys9VHPNGtP1tsRQ1PzL9tL15JFmetc6bt7ajqfvV4UD49WnNZXoFqwmNS13u2RKRrw8UWDXzJoH7Wjq4Bu8ys",
  "key7": "XZhfbqUtrsmGzfT3CxLc4kbRSBRg1QS55wNredBC4sf4qcKWbxE7UPexByAD1Pzbi4Lc1ibnWXKCMyRn6kVSHi7",
  "key8": "3uVix7XAQFt6VoTtm7nhDZJNQhgARPqdep4vUo14WJSvqUA5AFZdvuXEiJMDyv2GSrkC4aA3yrDLkgVceNd8Y1Y5",
  "key9": "2Fmbj6cmHQLb3Uv6KZTXsE9HTdkDBP4Fyed7qc7JA8WpAiV7ACauDmZA15LYZ5hyn4mwLApBqsDz75V4ZneNY6FM",
  "key10": "65SBZPEXu7LuERViT2pDA4r8qbVbLiu41JSWqpKNQQRXW9c48mZuEYwwwNk8MijDd9ekAywv2jd1iyVP12Kmp14V",
  "key11": "572shqD883pK5MKgZXmaGffTe2vCQjTavkVYZmBQrHiGVLNFZ41E9P46ZVjycNGaQkYPKEVigDWEFxRgkAHnHQax",
  "key12": "3is6esczS1MSKcMqzxNgiNSzjnQUDo17y3TWDJuSo5za5949mBBedSao9KdtfADGT9zU3x4KcYSabDrsVdpghgrU",
  "key13": "BqaL2pqhgZesWb4ZKNC5qvHJpScNaAb2CnyGTyhXhyh4fyHzqC8PAXaMPFrPAZMMyjhhfGN1r1WqCBjeeaFXfpG",
  "key14": "3nusGNMWaX5outftx3N2sHJtiJYmy5Evbet7UsVntkFcn5jm7oB35qKicef9b4awA3wqGEXgwfVQuAwmrNAoRkzG",
  "key15": "e7hGev9iTchmTG2AR1vjxfxbx9osr7psvPPypMcLqoBYpfKpU2fLHQXMtNuzNa47aA5uoFutbRYXYj39fGgzvXH",
  "key16": "5powmXLzxKvi8kgtivoZyGCE7qhSLHSjDXZnLXaN7MMwvJnFh2XAWsnEp9REAXotczPNZpNgQWpGSHBHq8nq7wzw",
  "key17": "3E4cuX8tb7X4mVUEiuYRBk6Kfbb28hczJ69QdqNKnnYHpqZfW2wHNNuZXnBvejNzC78NDzCpRS1Ehq71CdhAkFvL",
  "key18": "3gdq3yqAGVx6CbPRqsiRTk5hH6z1gPMZNjv5x81EqdMn8PAJXJ2DjZyz24VGXfWhtANxdRd1mz6zwpHFz5Mg8wiB",
  "key19": "4AcBUAYXRsLP3H2n7RVXwHNPfGJNUuetiwoxuJP8NmzGXfmhULTXNhCz9dcBKXyNWePJeLuSUkBpaH4QWvS2eDiR",
  "key20": "5x9DLC4sjtAEyWRWX6AEiW1Qtms1j7XhH6rd4kbQRspeMPAUG1gED5F1bdxre6AQ3NhDJ8ZbSNKquK6EAwDnaJtx",
  "key21": "8nvAM8MkLPh4tUafArSUZtdvj3ztvWgtqeeVzL5kFH96Dm3EfGDnchXpkGRijDVrj39z4dJjn2MLD4tC5Hjx3iv",
  "key22": "2pTzbsC9rMy2VXhRjt7eaUTmAo7odHseEmJLgZKfXCk4PgWNyc8QiaaZYgriSsmpotGFNsoD6w6GWa4fsekxvJZf",
  "key23": "58PwQuio1hPSzu4atULGnAbURi84TdoSWw9g1PFX8SVmGS1X6L2J3LBZrP5kutiCJHbDjaBVkMpZYqhsQXGAf5s5",
  "key24": "2y1GgW3BvTQMxsy8vhMxSPFcQYLH3vqyw14u6iH6qkHJHAbAHnP23uiyEfa8K8BVdHeyLQwV8houF5VGRy5t2mby",
  "key25": "5m4mfq3UuHKHgcMRhJcr45z5rAiitkHDFxz4kHnGTwADn4Q8DPcKpvbGc5YZ2SgEnRyttndgejCTpUAduFQAE9tk",
  "key26": "cQfGNG4gXmwgQkFKizYUwwhDSfirXFAsLKKhbJL6iLvFN2pTMvyby5xVfZ3mWMZBHgRF76PSe5oCJyGGYhiqKQa",
  "key27": "5zhJY1epqekKnwVK8LZiJ4AWxPxtHBeW28ZRhcuU7VznihfpxiMccuKGnNwo5J2kw7ybPC5U7EwwAJJSD992sqPx",
  "key28": "491AhqpLmVXLaDwKGNKcbT7YVFwexNpi2JtynC55Am7ezHzMJjr5xpy5U5NhhSrQCF3VQCYKJ7V9XR86wKS93NN7",
  "key29": "4BiiZTxNLHxAYJeWqdyqpWGhCwcdmNzcrEEiVTof8Wx27FaXK3PX4cqB8iFxy2cjqrQrX8useb28A9ZG3v6sAs1B",
  "key30": "4i9aFAd4XbUKQEwr422652NC2io35nAy4ugfs3cX9PwAQcCHTP7S4AnrxsxAu9tTgc2LyJq5U7TG7mW3VMNsnany",
  "key31": "5yqTzxmyp2R2kb9NygfM7LKVVB4UWHZeqVghNCVHm5CeYiDhan19xBd9adGew5o3R5Mx57oPsE48AfFJcBx7vD8H",
  "key32": "DwgiFaheLvbTTwo8jjCskcG8wx7M1roFqQ8VCuWiDoHdD1LXER528QBk4k8Qy8vCUX342x6pxfXCpB4CHEKdBuz",
  "key33": "36J9qhna4joyEKU8MUrH6nygDKHNf26CPeTgmHSC8KfGFHWAVfcXKFBa57gTJ61r3qnbHtnQnS73vR8nksnLougX",
  "key34": "389Ct37qKARY9gv8JdTNxAdT72BsoHyTxK4UnbCZ1hDpczz8Ze9ZAHDFSrCGbpAtQvi75WeWpSmJ8njiATw3mW5H",
  "key35": "2CDEaBqbWf5Ruwd9FTJBoqRZsNDTfPR6SAJLDysZQLPtqs2L7EF5Tuwzpm54JZ5KzGssPfyMZGaE4LyCogU28Q9V",
  "key36": "27kEiaLJCwWa3iQFvHB5uATDy6PmMTDFHA8HF9gM8fvzLBxCy57DvpFHMW9EqUxjtPvwBJ2dfX6c4ge6SbTRDJJ7",
  "key37": "27nMJW4hu4phcF7RX13K5X2uhtYp17LDmPHfQBXCgE5a2Svf9B5PTMibUjtBVLze7P6TqpXKZUo3QSJqq23GvL8h"
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
