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
    "5u97MsWx78rr6mmFZrfTdLFJqSyVXHkswxxNYiRDJvMZw5YNCkSwyKsJ9rQ86PT18QxUFrZprS96Kqd7owYgpyBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uEWxYfM4NN8rUVV3yfB2wuhR5SzZmbKDEb4p8DRgQHFPpxSEGVN1b14GGUTEtyEe1bdbvnGbPa3yoWM7UkXkkpt",
  "key1": "BRpmSyK5e2AhxVdRXPtyT5stzMENepNKGt1bTeBttN9eqEvLQgmYRpp9PgQijYG25umQYXoUhLmzuAt4q9c1XNp",
  "key2": "4bxByEziHE6rjMdUPNNYbQkdM38wjrQM9b1xV98vcFdu6u4eWkMDGcm4SLpUxmDZ7uQLR15xfvqaZutkRxxsvJLP",
  "key3": "2bWxHCNXeSiAyrfnot2psTUEFXQeBQpbnKA2JU6HZtMtfMzBwQUmYpaNuxxpcKVFzoejHr3opSqD8yLUPxVarEwZ",
  "key4": "VcCB2vgLC9NHXxboUFu1arh4zcHjT6Mr8KStErb2bexKWRBbW5t5397J9kd1i9n5YS8mpLiPbuFSkHG6Yx8nGSj",
  "key5": "5C4xqFwkfLeXPKJkGHQU9RVao3WgQXv6dXoMNguDGAwDFCDKvysydZPmC6bavfSpFZHALmjNXH29L153Th1wxN3F",
  "key6": "5s8hAqNVpsSGNyBYSNTH2oWDW3iQiZnTxptVQtRM7LWE9FforeyPSn8fagL39SwpxjPBK4x7kXAPsDgSfti9p22X",
  "key7": "4Peg7UuPdaQFneFCYTnExHe9uke36mq24aBbCBZRpQWXTQLqWgo4NCeiAaUrTRWLAsmEyWjgG84MN6yEWMmUpwto",
  "key8": "4MATqYge9KT1DfMiDc9vruaj3DMNdqjcvgov3CjCBhGeHHUM3SPXUJFEAdPBW1rqrXdjCnZdPxsCKAYKuWnCDqxG",
  "key9": "4qeeZ2tubC4vzDzT7HtNGyJHPSifFQVLtDi9ou1Hc2TANzR33dh94G2gEedEaMzAJSHLwEicL8DTKuthZYJxR5h2",
  "key10": "2qrr37yUsmAtQfBgtZRmgoq1MJKEKMV68jByBEFR3DBMspcCLAWyfZd1nijBMZApD3yyHPEhr3Rxnm6aZX6YEneS",
  "key11": "64cyFUofxTSPMqTJmKTQe1YmatoeFqkpSk7nA5RGTnTNExP8Vgso2SD2cPfR6UrAWg3kou6dKqvvz3vArv4ie3yP",
  "key12": "k8TXgdWvBpfwfpSEfBQZgZGaHU1TU83Rp7UqrieLLQvs238fqFTW7dXrsm4uPvkyyVjz92PjZwSxzsHtxQ9qmWU",
  "key13": "3QyQoAszHPW5rBhfYoVdXnACc49tBLKCR7NizGipA5KgmB5v9MChzVyCuU8X5nEM22D96JkcXRMz9KpN79mFyA8q",
  "key14": "4pgXrdBgjm7U2X1K7q9ErmCEUAY3dGJiH1SGZbEed5P9aU4hzD5MJevt4Df5NR4kEZLJa5z5UoBLDVJkSVjX2pUH",
  "key15": "3QcpistQjdv3fnsp4dnQBhwL7RCt4iLybszV8PpC29GrcyzQzyncnSqx8Nwm1ZdC7HPTsc1hEVD6vESX4xWmqPTD",
  "key16": "5ap9BUWVtXwK7AdjrQn5YSSfLmWtfum43du4uceFYhH499BRmwfo7vG6YpcshW1bQUjvcHe6PPSAT2PRYGvLbQe9",
  "key17": "s81Kbrdxya87XmUgJcEJw5C9ik6izmj2pZx82mk8FRq7V38zB9fdAHfugyrbDzD22PojoWDgxWaBNyDKHRkZ8vA",
  "key18": "km54LB1cECpqjwZaJTtk7M14fdAphiv6jUpzBmsxkmGCxquNhkhbfaMeyyedxLgeQg5oCkskQRM5qJVFA2wHdLD",
  "key19": "35sKCuL1QB3Em4VjgrX1dx8MKWAoD3XhGpwAsszLruV9uaLd4mzEQJ39c3BPktNaBan5RLFLGRnMwMfyQboeS85i",
  "key20": "3rRZX4SwEqDzD7P1gMKnbntWcPb4kRhijGpfxPh4AC4hksLBsh4QzH2V6PH9PMcNrzDLySYRUUAfxjvDoj5oa1Ce",
  "key21": "5Zp6daMhyeJX84HWMgEADArLi8mmknjFRcAwH1kipabBwJLspLHH8kkirafDFH2nKDbnLvogUWcsmpi6dTRFLqqj",
  "key22": "4rZAprGrkFoYJqX5ty33oC2LzsgLsUM1ZwoEHJTTYvh6ntUEBmq9DxBu6oHatMW1ACLY9jNUmUUEqtp8qtYwZrKP",
  "key23": "3nJE3KarsaRjnM3AQqAbbgWvCPCrVPC9NwNBUTwFpjcNYRTYYUfvnYGzZUEkTskLsNHn7Gj9WHU3CPmwGsPLUZPc",
  "key24": "2nxDtaU81WerDchBzXFTJ6JRCTjJnxBdhN8uavnyggquS9FP6H4wrwkRLhLyLAWYpTXvxdGhtdkagodGiUznCfVF",
  "key25": "2N87Ffbq4DFry15GqEw5emMW1VUWayPQEmHP1N14oqyUAsthgLhGwo11K7GPK4Za86mfCo6ej7p2UEFKrcyS4sN6",
  "key26": "5uWxgXcx1njUNZLvcuQuEnmeBGofHW3TsNLgxUWcEEfZcMTAm6z6yVawQno2ito1HdxEfC39ty58f2MtXUQqtWjk",
  "key27": "2BsdkasyNhUUixVgx95UwufbRAA3rdEjMuQ3cTXhekkpL58a3XFeKHKS7jfMyqkL81f7B1zVRBYkHuZMG49wFkWA",
  "key28": "2pha7xJ3KR6JgsJV7RNJUqbPwDWPnkBPZaHsSG1YE6r2zsbd6WB8LKxhLsUzFJQh4JUeESYjVcG7pZnMnkEMtwtu",
  "key29": "4jZzG1eRU5Wfd8EayDy5pEMZthqtvRVFk9fn53nDuiJ6GiZyQNSVm2R9b8EwVKfcpDYgs2QKRksrr9QrRGWcrVBX",
  "key30": "62rq8kffaNEPQe84XMizgf1SHJpbiykGT1QF5nnmGQ5zYUHWmiZx1pzcqWvh58uGbhD7HVFo8WNGLTGriSU4Y9vs",
  "key31": "4yz9uSLd8hzbcBytcoQjAMBRFvp34aYNM1ZY7PSea1TSHL1X45vi9PLEEZjAFfMigxSkKagSNJnks24tStmTtLLv",
  "key32": "3xbaHJMhU6EmkcpqUBu2uKEMb8JUpRwSRZTozdWyipwwzDoaJjBJAq8L2tUK3VpJbQhTXi5tm8uGySpdZtxy3pmd",
  "key33": "4kXUSuhGTTYyEHFbu4pFt79JLWjRLaJZMghCqQwtMbhiWQF4LVncX2rTkCajSjpr78sKGph4rGbDrDEMLfJigCUm",
  "key34": "4wtSdzpu9jZXTNoZWFDckad1Tn8xiUoHSCiDznzQ95fNm9HGYpcq4bBLFGeDP244s6LaPooS3B7iJ2ptujvGJD6P",
  "key35": "4BPA8uZ2RtWkW5eWd7fp9sWoHibfoUZb511sjTFUYYmvQNiCcvqjZQTTUxXB1aYm1mdKpBqrptfqhipY23GrqPzB",
  "key36": "7iFTzK1ty97j3YUwGG7W6njBxMquC2iDRG4bHDkbZ8kreYrz1UPQ2g9hiMDoNBF5jDufzkaV3qqLNRb9MNKoyd6",
  "key37": "66oqbtfLYgWRGCqeSsgDiRpxr1FmjhdBXE54Bwp9socJioXpX4r7M3ChhTx5vMztJs7Csr4e7yYQgasz2xTcfpas",
  "key38": "5ssRKRSUAv5BsALCYnHdR7KpnWy6JmUkXDPGgwuJ8RyGGdCT92dqjsthZcmtD651oFBjupMBvWjWt75e5zgUDBY9",
  "key39": "hKsHLnYezugrERdsvF84SGEEheFqnSAbqdGqzj5M5HkJh1AsQDWqHBxdAXjZ69JKBsDhUA6jFAgveVRWF6Z5z1f",
  "key40": "VXLh2dEwqEP9FT8yimij1Jrq4nxcDUyMuPxU7ycfbZF5b5iFaymovnwUf9QN22FyypSrLxUgPZYPAwsh1cmkE8P",
  "key41": "2v4SuusQTBybGnB3ZSsnxG7goqECiXpFEvL62N96hG3kxK7zdQ46HBEVRR8xDr7dg1kQvtRy62QE2o9drFCU1rtE",
  "key42": "2ihf62GMPcoJcypWttK4UGdw16eWGH8WbSvnvAK4PQEzvYXwwYwZ1E6TEAjHHbXW5taE9g3tsToprXrqNQK8GpCj"
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
