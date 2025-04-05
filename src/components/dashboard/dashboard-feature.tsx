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
    "2sfWdZCDHryjKswvKF5sv4sq2o6RHaFBTu9o2oqokNjxib4df8hJEJ8FVhuqSusTnpJzDR1yr1LbNj4BbFwSbg4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29qyU5Fxu1WNeFs9icYLkH6DxKaNEi7BCZUJiDTUg6iqod9DQm1WN6aKcpjppEpdMSHmNW4e4e4nKusBjVVECr3L",
  "key1": "2Nes38cteJFJzKPZWJEMQtYm5Tk4quoSAMxuyQJPWw4DpypWshKccnQuoejk4cM6Z9FA3WSDhTSueSYagEuoNABt",
  "key2": "DrHnBi2EUKY7vbn8GQ5wTrwgjrVoBznykQGDGzVy1RT6w9H1b7NGvwMq3nxYBC8HL2ttFAJRUZsFiNFRLiJwhZb",
  "key3": "53we55n1zc71rTpuBZw68aCKbPnarwJio4AZB8mwSm3FnpWGMaMHqmVCkEALMAUKYhNVv75BJiiaVEvCGwGNHYYQ",
  "key4": "3AmAvmcBJE4oSyyrFtajGex34zbAe3wC5b82AmV3jWkj5P3o3ye3r1snwzFuyzTcPAqJjA4sb2MQMuVYszUQUZow",
  "key5": "2Tr4eNRrhSksihzs5oxKDPJfHNdzK6C8T4mbdX35dhCHcrTgBNW5gkEJ8HQEEWT7aPV4y4euXE6aLbid6veuPdoe",
  "key6": "2KqWuNCXipUNez9wzLMtpixQimN45Bg778vZ8326ghzggw3g5oCLdgFg9NQoLeDjk1N62r7LwfbaDJjQz6uqxGWX",
  "key7": "2SWsHss3JTbqphV32awc6ay6mTsE5XyPN31uzZP47ppX5A9pbnWZE1ReuZFvxnTvEzK2Xzu21bCVHsiNVrjZSbRq",
  "key8": "41yCWKEAU3fWkFGa8qYRVGr1Qh6gSpiFd28cQRdBrv5CQprgnEm8wDZG72J5VHBMWrRfqVVNMJHwaBXuRm3yerKb",
  "key9": "4tQEQQUaEDbDjxF1armJM56Z979CJywMAjahHHU7zBqVgeMRj1Jnze8zRWJ5AqnrX5VmqxFqJjkNygWMtKpkD5G4",
  "key10": "4YmLhANEpgGFcYTB8qTj1ZRAbp875dfZLXVQWFXNXsamwKwB2r6hh43Gwu4jRV157xppNsrV1M6zLukK53Leg5mH",
  "key11": "3CjGtFSkoe6ZkoLXJo3JdJ1ZAMrg7T8NFL599SbMmUzcyJ15WpMoxzuUcGi5DA3bZVwQZT6goYQbHJ7dyCDfkU6u",
  "key12": "2of1wLrWy2Ruyiw6Sp4uLXTAqqT5kE6N6oBNsWe8xmZipBiZt47ZyeXyc6623fC2wQWaNjKsZrh3WyAhRumG3V3d",
  "key13": "4fBUjywxzLyYiFYuDs1RQtshRbU2Qs9Vfco7LJ18sA1JqJZ5oPqe2S3VMHFRZd66iiiL27CL8XcKskkuf4S9rGUQ",
  "key14": "4s8v12xbBzfKYuAs36U97w85zuxz8UQReJAJR61CqU5CNVai1sti7jFqYrUNFkEKDgxTHNSZrDQx4NQRdDvWYA9m",
  "key15": "FZ3rx6eA6vh3yHoj2KcAQJ9DrcxXfb8nUwLuNFkhzovh8CbEmZh2TYTKxrpcoA8yTsQAJYTdwcoRv3CLXiFJBvB",
  "key16": "qphsh6RpN9okXgMa4aFJouNx25fXoCBSFpiYEEHenZHaZBxy5K7XvJxuKEwpw6wJDsATciHaQENykE6FaSjVKeu",
  "key17": "2YzsbhB88W2DKXJ5yxjA1iAF9EYnVukoq5JkoSAidVF9YdjwGhnEL345Rbgd55bm5znGkZ4YEkyPg3ncZqBxUcpa",
  "key18": "3hUdRV5v6UC2czWTRdAvFWD2PNhGL1BrU3YKc821FfXJaunGEfaW8bBMj3VwrL4ybHvPcct96ETXZCQdMjk9aQcf",
  "key19": "3x7kQ6W6aC275dt86Fe76vmhQDL1eBHqTja56cJoiWJfQR8pBM5SjoDX7JNUSmqyEiFmU5gEEpd3SniqHjBuqHVB",
  "key20": "3pNeLnTvZKzXEhZae6dGNzyvyukB1Lp4Gd2jqvrLymAXTy3oorPmDADaV7r1gjZALV8mu7gy2FLCsQhNAD3WNKxr",
  "key21": "42yhnDTGNZCzX9zrXJhLJHCN6yDFsDZxefrU9huag8EiTq3PPEfYFTif2RhDfU7HdjzFVf2VNRebKJfEkZpsFtJQ",
  "key22": "4MFJxrNF7scrMvVzVmTd5mtjS2989npj1FRjnMNbU3UZeqZs5oWNeLQssv6RocNN6Rrie74TX3FiJb6tYq7JQABR",
  "key23": "3KF5obQwzarGeCeAB1jynW1RGo6adCYEnmPKXiW63TjuYujhn9vp7Qm3GoV4AKohLC9ew5tQGwiJcpAc4aMsAvWW",
  "key24": "5mS9mGTR96CCk9KqvNMhWWW74R3BnxeDUksguXe3wNbPKTqh9Z8ostjTNMSJW4YX9i6DWsRBqN8Cx3Hav7GHrY4n",
  "key25": "QST6FRBmbaVEkDsTcbRFZGwca2jKgyH1t1tXHv23owyyUfWaDujewcGuBmqw5sq2FEtJoL7E1FY9oh1VBFwLtr8",
  "key26": "3ViNsZnKJLnAmtNdEvwTvde6ZrsUrWCcwFMDKciXh6cZ38Y7gZ3BwFsrD7xMRZjXvUrajnExTejsabebwprC7Wz1",
  "key27": "LaLUcsv3R5DMboTXScMeKtveFMQdiSKTFpcJbDNVtPVrsyCxQbzvVVc99bB66G4Am2vdPDWPHQYVpHEMSPyUP9e",
  "key28": "2yhihGppggC43n4HLcVCtxXvNQXTzdV9CJT8v1SbzYMGjMXbS4v3x8yBEPVxmYG4L5L3gKJMKrtKrA9boFxqpG7Y",
  "key29": "55tSmD6AUmRa6u96Aq2bdLRhcUyjZuczLUPvce8VSxA3RKKwTUxnvvAWswvKgo8Xe7Br2vmiqksWzY1JgSzhMBpk",
  "key30": "2tK9WH8c3LYJLofhPuP8J1RUn3ZCkBdjjF8No9eeL9zHs3RipS729JPqMkxgQZea6eFyQ2q7f4vdXPH4QKAsuApt",
  "key31": "56BRzMVHqhg6k1tBYxvxSrzvkUkE4bRx5KJoWZ5ox99bh4WGuvQnmFdwtJCPZDksceRJYNzMkHAUTcVD1JXXJRXj",
  "key32": "9BUsUSSBvBbD6fK5bEtv8NBRWkKs1WeR7XLWutATUALWhJYsbEKALi1ptqtvnHpE9c5hz1xpRdg4YgvWxbTX1PX",
  "key33": "CUaxT94WN3a6porpCx4Wq8Wd16c8VeT32bSUS3oGdynDUdtskthSVGvmuQkTYney3DWqeEHXGG1kyWn6p38MMtr",
  "key34": "2HPXAgvXRndLrxgso36KEfgEzMndBsDreJE1jY1JYtEb54sm2rJ8vwBdU8GaBqQnMU38HdBFbJFJBsbn2KYr7UDN",
  "key35": "dPSAHt4sxuTXQTmi1a7TCTnJhoKbAnf6KeKMFzb3QyANhnzdZMBkugyPYMFcG8QqtxLawZfn4yi8CSmospdN99g",
  "key36": "aH5YBhUTrtoMnrg1MXwU33aN8rFFUa34vfYPcvmcjqLem3PQGbvq1GMWLFnE4vq4JGgAYYU1FUZZasEubSouBTv",
  "key37": "4S7vKf3oRcu9Jm8NKacheGLEkiBKqxBCe1cgxRCpTFzt35QCtP7XNnHuZ3YZZppbWndwUo4UD31d9Hyfpo2gEbop",
  "key38": "2fU7yRXxAQbfhrL5VBqd9C1ugDwDuYuAqjSmGCnzo1c2yH7iqKMFUy3GBTYWiVcEi8FxA3GZptnUZCEd69v1KKrQ",
  "key39": "5yHTxnEDK4rgvzThsP3LSY5Lv6wyUxkzybRWXXuF3G1EVznwXqiDPrMaHAKDNANvnjirHrBnPnKinPa3nqv6EDiF",
  "key40": "4dMb9rRM4BE3ddpBbNaDetPjRVgWegiaA6X61Dw3FKUBvvbGhF5BBCzQcRueUzPAkjVxwQcigvobe2RJ3oVf9egK",
  "key41": "3uWvsSP5yBmH5NBLExepEwXAmc7jWQYWa7RQoA3FSxmNkcU73M94H6Rb1We8TJfo3i3HWG1r29CgNG1yNrh2DX6e",
  "key42": "YsCvVQjuGrYPe3xyX6aEbfvDN2mJsj2DhHYEPURih8tqp1avPpufuTJbXYx94rGuzkgor5htrc4L3qGsHKGbFpc",
  "key43": "aEZAoFmZuq6ECEBnTGdCBFP9oNW67yGSi8RD6jieE2Kbw8Rh2vZnReZewXEPJ4xwb7UyJoZuHqnWZjtWzJvu1AM",
  "key44": "5wSof1mU2VRERXKtSeGppHJZw9enxvhq41SZm5sd8Ub17BRXt4TezXVvTifVGq5ZMkrDkHaSrcGvZjPSCBbosQnW",
  "key45": "39sPC7ViAFZxUEZmT5EdYNKPgdcsfDHATqBRJ6dAYzASPAkxygJDtzQAmH9niAKmSHJ3d2zn6wrmWTaydsrJ3jqa",
  "key46": "5EwCox8btWL4D46AeHWJSK8vL61Uyd1j3escr5f8wVzT4CukCGeDqRaKm1sSo5KnW1wy68RD8hZQY4PPjepiwKAe",
  "key47": "5kyZGfne4baeHTBW8uigiTfC47V8wRrqUjXbop2VhXny5jYzzYzB5Ujkretvk9Bko4mQALZS5FjaFHa2frNTgGoE",
  "key48": "3kLnRUMF9szxvuFY8FXekVDiHaeLyMAk5Wq3fdFVSjLsw37AZbCVoofTX5KnjWyQLFQ4LNuujgJreceuyhsGHGao"
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
