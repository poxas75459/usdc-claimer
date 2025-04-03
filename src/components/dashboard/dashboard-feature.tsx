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
    "2WhKoj8dNSYqFLxuuV7Bo32MBpmhvWmUjrTuUrcQkzsctk4VPkJpGwgbBRnkHppAVWC5hrDMaayvwwAY1ttf3h7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YqwZ4BsrzqfFFHs6BWScovYoJxSk9ZpSCnmmMHXkZiU6TiDNzow4jxvB66dkZMeFxdF3UDCKwEGKrDCB4Rot7SH",
  "key1": "65TsEMgXen5Lfv2HtqqQGscp9zULHWHZGDbsEBMjZooqSQgrfn3AviNXxmwUX4F5Kshr3GUxYHCen29MpbyXJEjL",
  "key2": "JCQfd43JgtphAVP1y1qrsSfZZ5EXowovF3JNVAoXvF6G1easvdiFoWG7J9fuyk9fsCGqaGwAoKHzUJstjmjJKoC",
  "key3": "3P5h3Fym5Q4SThcM4kuXAd8WTs43ThVuKEZUzkQEp51qQifjTrbKMg2dp8YLYakJTGrAHGM12ArpdugQspa2xqWM",
  "key4": "3qReg3V2KTfrL2tpQxSrHDZyPBDj5Y5UNMspxabhsotPcMFbvLapsgyZkmeMYBXF9bAnHhYSPNsJWN4Tn6719x6n",
  "key5": "2vbY4ZsqPxcY7JQCfaBP6zj5gWKEQceAc7wgXRhzpzFWSyD5wKFdEHyQ3jKHGPSm4CuSh3YyoTq4cufYwNoWs3Qa",
  "key6": "4V6n4cQiMkS7X3dmp7qt1YA3xuwGAdnamAGxiz2JnDjSTF5nb7knvm9KbckLgqpjdXbwXREBP2XGQEfLbiAwgkMj",
  "key7": "62KppDimWCW6VzwzsUgmque66TcPBF1gXdXVh29ihUUMEjjQYgyCn1y38uMAc1Hv8HoZtEppwKnEdW469YTomjLo",
  "key8": "2kPbQU5oqbBQy8iZz6A9ZPiXcUvCzLqgZGTfP46Sw8BoD3ku77rh7L3XhFwPE4VAwnFpmc2ik3BRaZVABTWtKgK6",
  "key9": "VDqUr5R8zJYuaGTJFRVZXVaFRqWKfNjKo9P895g3u6k8EfeXMMMKZy5ZyyuUrH7fSYzh2rtbuRccmLiix7c8EJF",
  "key10": "7bWnianPbC2MmaeEnNKnFrXeUJyUL6Sd4w6QJg8S9trs42ArDTtN9qPgwRWRiZwWoMpBUeSvHCXELYfHdUubFjh",
  "key11": "2xM2tRMwUbQuDyZ2Pk1opJnjbXGe6S6gW5GiLWvy5mr3yHpHXLPENuksNoEdkD82VvixbuHksJw7s4hvN4B1CLHT",
  "key12": "5cANpaY4bJwAQ8Shvko6C2J7UQrGcXYC57qfTGEskpDFi7iEDd2viiLUKJGNFHu4v3d5TnyEgYYmnJx53qtCzGf",
  "key13": "2T7TFNydNpfqEWSbidghD5AMBLEw8AD2RmzQVymLHwH1Lo2F2RxnnjsdG1kLJ1F7kpNXHiCp7EGR2dSU5V4WxvyB",
  "key14": "49v6UMjRNgHZoN7Hfp6T3Jd6E6PuBFo3mEFFWearKQWbQKeKojx47tAjKajzEmmRDt2qbK7qdB8c4zAP3KQAKVZY",
  "key15": "4oZqK35dohffnECJyfa42tuG4LRvm7CMvFzcbLV8DhoC2avNUhRmu6uT1yXkY7741EXrpJVRccdysfXZeDARrEaN",
  "key16": "4rUb81pyLDZZGzFzL3Yp9hFJxzcJvh2z6PA8b8zixafYcEDX6B1hEmsFyY273zXKm6t43fJ5Ui4ghmDArS5X2ryK",
  "key17": "3da9DdTTK5edfgGNEuwzvRzUJwutbYVMwVAeVephAbeJWYQwHpV2YKDWgnafCV13v9nPA59g2fWXLbKe5kyRfyx5",
  "key18": "xiU6RytjCe8kXSfiKbHrexdAWBWuX7g4c7mo8D5ACyFQq82FaEnpTpFFe2bdMgAwT2M9fpQBzcaHgGsTddqnVsX",
  "key19": "4vThdenVzafmZ1m8xPZAZC4wN9pmfLSmPmXhSfSDJ8HP7x2mhBwriko539Es8fP1TqmHQSWh9gWBj89Vio4KXLRb",
  "key20": "3nV4ZHnwHLr5Uv227E1obX7wjWjbBBC5xzZE4U1ZvG1Vv6z8AdePLZC3WCGkgU9QRzjP7bcH4YPkb45GZ3G7AF57",
  "key21": "3d4NRqvxUqSmF9HK9TS82fAieyWuXdN8aniZuPuf8FEsQg4aRybQvBWmPiWV139dkTiSf1c9SXL4mh65pQ1TVxNs",
  "key22": "2k78P6FtACCN3QtyGBBKWiFY7yaTsesE2fneYcXuQsht3GSTcCCWSBYgFVY3S46Am2vc9o4oKK2qUY5a4nrFWHPc",
  "key23": "3qR1b4YVKFAmswzFPdCvBUcJMBVaeWkzxWBZuLXTHZsJiPKL8RvvNBUgMUqcAnqEERNRxAZmVHdVMvAJBGAGWrbs",
  "key24": "sJKNc7Bw6LQfH6uhKJ7TxEn92muxZDgwWnuWUw3srBQrvRV3rDSdCdmgQW9EikT18xmfvJNcgeVCJxpFJNXT34Q",
  "key25": "3WtVzxqhL8rKrerd9Bf48QgsiKBEJAY82syLoiBQ3f6q75MoThvZETBvNTgKao8fihFHsJw69mrHri7Qj3eY1e7C",
  "key26": "27NsC3cdY55hNG8AV7CxPt4WL8rkxvnZcfcdgc26qyfBCKskwFmXtxUScxEGh2GfRJvkYJgEGnczoToEbHVwriDX",
  "key27": "2KvuraznFzbkkAUZCuWUjLSYmQxm5hCpuZae1HRnXiVkBPBnTHfgztL5AzK5Vp4paH3Ka72ErCe7ANEhmxQJg2pu",
  "key28": "cfoPXVx7hDos7L2hLoM2evY8V3GnY7C5zi1eFcgrGuFBeb4mc8X5rqaNNWBxCQE4VLuCtcu527NpNRTDJo2rYnW",
  "key29": "7cpHtZvYSMP3rRZCgnUiNvUUcT5esLgNXu16Mv9whHRTPaGjxnXTnocX9U32m17cr3hSbNLwj9iNjg8mCNUwAaE",
  "key30": "2a8N5Y7PiNYnqdzb8WNpFg6koDBtuDdqFVixVrVJTiyo6HvQYPMjoABYoAGebNWYPKxCavKL4FeQMohaTBxUKZuj",
  "key31": "ZiWiMacGagB92oqcCdkFaUmWXykKKLD9hRX551rwUKdbxxibxZ2mbjDQVzo8hThfCVgb7RDLWjv4D5y1dPHgsYo",
  "key32": "4cqfnwyuZ8dXicf7QddgnPncNAzvoWWGFiG9BcTHQ8G9FrEYzhku4bix3zfRwoso9wpDdCMQGJ7t2edEbLHmhLco",
  "key33": "j2MborFhDmSrK2Yo63WVouGUqEGPtBLnPokQUDuJcTkCaDzuHtLZCwas3U6gmxLWUGLrwRPTpnKbzarcKQSNPho",
  "key34": "4QfPH9P65Aepv1yi7VbB7eN9NY5DvaZutkqBnAeAR1KKNX4fHgHNhLaS9cVgmR5ZA3taWjtmujMAmJviZQASDZcR",
  "key35": "5uZWk5JB9AmZmMie1MVUZTsPBQJk2Uwv6hGcW1845ubVxmDnQ7F2ZS47pu1syWp7t17hWtWoVhHynZ3ENYYkmqgN",
  "key36": "odH22KuvFu5831GgQvLM1sPsh1x1dkTahZFSLf3fvWmPwnpGFhDxJdqJgeNjHKcg5ENiEJSJCXc5CH2aBHWa8RQ",
  "key37": "2mNfM5n7485UHP9dxA5R6qJ19adxSo7i3Zv8cmaejS3u6yrahQx599N3r2EsmdczE6yTAs69eBH9c9h7dQRxPUxp",
  "key38": "5jcwgHJtg2ib2TBsRekqxSHRgno7N2seY5FedLZGhE9VRGrJAQTn9HGEHfvpLUzvuBkUXc3shsWXRoKuGSvrEKGs",
  "key39": "5vLFXM5QAyMuZ9Rby22d6zr8z7ghhopXR62kbqTAiRYW29VeZxkXjED8RsJCcz1i63GvzsTJ8oRZbXVaMJMchGai",
  "key40": "4xKzQdLLnYXmcpygQhDadnn6LCX3AmAFE7NcaiJZMFYCRfcewdSAjATfTU9taDFRXSxeNG7hRvwGKHYihmhyDK6A",
  "key41": "4GMpmPexs2BFBs79QDmhoizGtj1vwQ6vXCo5f1h9qVn8v1FM6kaChSRBcv6tt7h7kqxajk5zEXUDpNrL5mdSV9T2",
  "key42": "cf6NYFQsFf8DzhiSHjgjXCzdAQnvxVm4bFboKipU1BMpBWdG9iNJUyr1P1PmeujyhsLCGP8stY9mjWkGHgVbKFP",
  "key43": "4xX1Ub8tLbqdWuuw9txFXZfiM753EyrBrsLJLwf3WKCbmRbB3tNqpZuixBrWm52f4KBuFmFXk9RqyiFrSuHLGPG5"
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
