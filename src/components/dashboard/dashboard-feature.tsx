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
    "4aosKYtwzbExXx558sCAZiBDPtRs9USSmbYekUDcrQHnRjaJJQZeTxDj5nvZrJa1JhojmdPJ57K1iVgeKqVFhhyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iptJaMXzPxhnnDKBJAFQa1wDKpHcPt1U8hLJe5pc9mjaobDUiCDxUAZSc8AxrBcxdd3TCN8ZjidRsKKtcumd18W",
  "key1": "xz5v4Qrb2MBHFWaFWoV8aNUgbaYsj6DmYSX4gsRkS1LAMkngagGAiDTSd9Eq5UGG5JroezpeUttuGbivaSqmDJv",
  "key2": "44UZoE3p6j3w7VvovT8Bp6jW2fqhPDFyz8PjgnNeqpzrQpMu7ydqqaoSR32k2Mphiy6krrw7zjhW62PDT6Xpt59o",
  "key3": "dzbbWg9PuxruCZLbPQuJdjYbPdpW98SdPZdWtvomfp6SLtFkpAzbw8AM2st7wE77jpAYcsB3apVPMLGrKL59J2m",
  "key4": "34CW3ZDbn3nfLW6JfqiJbsGUEq4hinaNpSc9QTCwbsVyefTb5XGK5FE5UAD5Ds5kcoK3DhK1dnfgegAXX7PBWfqw",
  "key5": "3CGHHgMcbtNYLiMqtJtjsSSSh4EMYqresvcrffe29ka4MqUPcMPW1p1P5tNQj6neANkJyrWHAzpqjeMu4bLqjnM4",
  "key6": "3115LWPQFATTmoZ1zFnM9hz9wtgh9iyMP5DJAdb3ETHwaaLNEZ2XRwMJKCC7xfpfzLurzJZqZSXQteYGoBkaKAoV",
  "key7": "5YcEDV11PVEgFcWnNiVMWrp1uXq84uUSiUcTSgkMyeMY1LZWdQeaH22ufDpLgitXR3eRtNb3UeSZZrvYoGC4N6i2",
  "key8": "3nj4uqZdxAbb6Fb4jNXUvggSMfVaiW2BzFF2HUTBd1yVZdGeXzEr6iCYSzVtmbTGKKQkftHjCnhwotC4ptoTKJUh",
  "key9": "3wCw8eYsfjtbxHCDCkRdADAWsv4WXELeEZuYqG5QjMU9LBNgmkF9FeWMYQzvzJzapTYNSVHGLja2okYUe4NSJsV4",
  "key10": "29APdXNu11Q8qqphgY3JrxoZDMZ73MGwke6HSdaE9EhubCVgCbJ21PKb5Rk3iCreH78NVL72JAKqL9AYttvsWKhF",
  "key11": "2HLVFzzg4XAR2gjptEQ389sBR46qR1rx1yix6JCQq8fnBoZCNR7kWGUUUDZJvMtxTHd47WuWs9dF1uZGcDXE8HrN",
  "key12": "2UeWd4SFZeCgFXPd2vTHVunDka6xNw9Z8hdcZWopFWK45QdS3dywuYfoBGW6qak2NF5bFKYnZh9m8A6nUzWHLHp4",
  "key13": "2UWF4YgLNgqcwUTx8L86yxSRntsiRicAm9fH5s95ydxMoJ14nLk8e7H8PZSrsnbu2RqrAX5bUFGtcSzBA4ecRnUe",
  "key14": "63e5uizpDeba8wGmnFZGzStDLbCmDxSC1zunKkF4wtaqbAfJfyioMqoqEX8RSwWceo1mw8WJWw6bLpnihNzGhJLF",
  "key15": "4LE4Ku3R5q5EtxX1Av2JuwDTRLcv4dir6hsy1RVo7c5uNRANpJhJXpskEujhgT1szMqkku8YdAnis7QjXRAK1rpJ",
  "key16": "2HToSJrmBmiLS6pGrQdRb2cZQjdjxrZAm1JDgmmcZtepxSajsM8S6ryKptbvf22qeQrjdgCAbWazJW3QHsQsAKN3",
  "key17": "5XoiJ5cK8213tpFxH4WWxBRrPFsMVozJ9JRTJD243n5kZc1SPmwTGWGJkFXQQfewiHqpMdo6HeqeqUgmP3ATWvqw",
  "key18": "3xBheCHRghz1qUP4wwxvJuGdnALsdhiMBaVVyp5NtBfURBRaYKDQ48fBzz3UhLm5qTPVZffa1CqA3CRRMCgJdo2f",
  "key19": "YjUFynDBofwketeccsyzMH83X9jJQFA2kKLdCGvNGDRm5vDX3STtA3Z278bC9ty6mDMiMDdHeNbs7aLznyMuDi6",
  "key20": "a7ifVxaLqiyMS4fhWAtiLNGY7dfahMk1CVmsBwqoSux3RnrXkAxpFGKjRDyhhLnwCg3WD5fBXjn8nkv5wknwvCM",
  "key21": "Ymx6TZp15S9tCUgS1kum6BnBfu3rLw8tPPmB7CJ8va8F9ua9HG3J2KEWWNruFDfoG9aJAyRNKdcL5VStiVEcKdg",
  "key22": "5VgBE5iF23R5dy6EgSGE1KmoqygtF2KxRtwCArkfR4Dhst9TNuZ2f64aKu95NhxWWULT3e4RQNVrjcohYqLnass6",
  "key23": "43CbhZsTegfxmHiHneRoEtSK1ZDw8eXH16NdWkZdvS37FUgXFxveEQckCBCeBkqQmpJb1JBCDXvXdzyW9HNUu55e",
  "key24": "2pAhHhdXPU4qDiwYuhuKGa1FEz1BN5gzhfUp1ZhkEh7CyTEQS8epVqZPi38hfAycxgN36sMsedbKX82ZmmiEf5nf",
  "key25": "77VJrMsd6jCkpaMWBgrbXAvwbujCxio8CcLtCzftWyCsYEdNjeJLc3dv9pPBgwTgLK9J134gtZV4uUqTxgn7yRr",
  "key26": "5wA3fSE3tnhdbHd2jaMcncNq4hShNLFnnB2pLFnCmPKyCV8qS6Lt2e8Bn9pHkV4oHhwbYZ3Z1oYohePEcZQiguFT",
  "key27": "49UwJxFKJTnJUsBGwMYxbHKyPrVZzA7GLoCBXJRenkGNHyr2Fq7C4qC4L6sQdMFvyZjFpR9rB9Cetkm5cVq2Pwaz",
  "key28": "4BcejdzNPkJ7pBaCi9Bur3reXY4rafg3xt1Ew33hazKPCJntkzbZGWvYQRfDcn2tL9vwanJKTX2icqo9PSm3w1HD",
  "key29": "3LVKRoQzyjknJcR45ihH6B3xEdBghMnB6KWh28CHFiXYPzubDmqaukYqtBsRHgo2M6Y4tBZvmZ8mR8RGVML2gSmf",
  "key30": "2Nun7vZWeGgmeY3npjB3XmjFFwV6YzDmhzbZRU4RXXA9FPwLk9P6oDFRuVrgy7jTMy46vznhofsuwLTrq9BAVPxi",
  "key31": "5VHassWemfWaYouWFz5X8zt2rG7rk1m53SnW8vh5YSNLxH2ffp5sStdAVsrHjTyjChZZywVBrTzRjUiFyALPjYLB",
  "key32": "34MBFDQng7DNWgzQ5RjUwfaPqSoLEjQLtmJiNXjd6EZvzvF4B7cn3uTdQLp1UcJhFypqhXdvdzvCbVe95JTL7sR9",
  "key33": "2qmvMwpw6BikZWU2iYSnAUV6XbLUpvrnLjXpFKyRHq9XCaViYy9WVsSAFSmNTKD3BZRtPBGQ6uPatYoSCenUdbkx",
  "key34": "3iSwgFNqhehoXZgQxCA6Wcavxq4rFHmydUahVGuwkrMyNn7Mj9HW1XjSMXD4pexYRn4bz4wrrxqvs6UNzC4QsYc5",
  "key35": "2Tx5Abtphx77CuLpBy8TNuM4KymWBSwontZ4mEwxBBocmMRk9qXcBPJUcsfXQU5V1qYfVNXPNj98uXE6gawvuid8",
  "key36": "5Wm1hFRAL5aaLUnCZs3i89RYpQXqvU26KxjAHnFwyoZuJ9hhg9PQgUaUNL55K3K9iEyL6nZmjT3iBzruGLBtmoYK",
  "key37": "5SN19BEjHDNHWodurzUCc8aqkD241xcyWCWh59JqrvGS8GHCNct7CUWhKUcncpZ3SSks5vXhQLHKFtnDqAQcKpoT",
  "key38": "5RRKqaewGVZ2zGeyzKbSdWw2LPLhcfJaFhXjTXWFUvGSWFwR5XWdw6jWdDW3xsHuk1dUGCumnNvz2JNa8BMiSUvC",
  "key39": "5fD5hfJbf1DS4f8ekkHvqHD6qLY2TmVvc3xxKCahRVAVxVZRqTTE5JKNs2f2Q1qbBcSTeV4REwgGn5s27KotYLRx",
  "key40": "31TRHvhKocNsVq9WyjqSjvgHmuBhFxuMrvuUwxdKetvGHCirmKsvRuPHwUGJBApmVJVwHzW6pmWyGHzPFNbKei94",
  "key41": "4GJhVqqNzidTX6DCpEjBZwLXVkpVbLJu4tXiv1Y419n7KdvfZzp5kLPMuBMTRgC1GWFUoC13r77F38D8MhCkhuhk",
  "key42": "Y5NASz6BxaCQR7Z78Gm89mTV5PvFNMF1VvYhJCpLdnHamAzpjC68ferJUs8kxhxC2GYkPTQH3Fu2xfecS7rE8pz",
  "key43": "5H7AjSUDzap7uCbL5E87k6bB1NPaV6KmDDm63RVr9fx6c8wWCAhPZu4P1PEYcm2EM6tdpGyTXMgW6nwpiUZF16zu",
  "key44": "5vYxMqDqjTfVUt3dkyL1mJcKM6E5wqFLZjK93riYeuypjquU2DioRinmvqdJj1XBVdf33dMkp1aLmqZwiHWqAFru",
  "key45": "52mkVFRdjXs6mQwghYsYP7kUJpSf2wDtCzedVtHZab9QCuR2wRaWcNgkZdufPg3jHaZvwTaUtDrJdExKPmLTbkXJ",
  "key46": "56iLqz996q1w1mAPQuFPqtB6Ab8HLnF1aLY8XemmnooAei2RJmzRfAqHKoZH1Gbiwi8gtYrs1P4wkq5ZUafdXwjV"
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
