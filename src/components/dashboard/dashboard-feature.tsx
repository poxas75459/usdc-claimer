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
    "3D7H5fivqXSzxv9oTVUckUEJ5tofCpFtPXq3fpdxhLXeFUzhNRpgFq1cNZiGE63RFEfeiSEetBfadj63TTDkYkTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jYU78jEDyLYwHwQurFVELCcpoMTassBhDGM3XJiZ8hvdbXRteYkstK4VYjB6pp9CaMNKr2Nvs8mRDMcLpd1a6V1",
  "key1": "5L4oeFjXXTi1ftHDhjmW8XA2iB76XoWjRekC72tkLNat8K127taZajZJzWHztWJxyn8J4ewxnF1EeyDDGSTeQFQb",
  "key2": "2N75XRsJ3h7Bspah5k34VmjYMm2zWLayXT1MMrU65pD5qKMxuNooDSrm7aiAEcp3bCLDUfCZqRJ2f1TGsWyPnCno",
  "key3": "NmNoTzXmXxgdZd5XU4Z7eeK9AHecPjNb1dtJKCacu7iw5RbuvDLHKRksyGCNpV8QFAnGcit1GLHbPwNJmJ9U13e",
  "key4": "4Ty5xtFLcLQoMMrqyC1UfM4TEUsf8kMPcCqMutpRby69CoMxvZhv2HVryNPAzajjKr7M6H7RHtypQnsFEr5L8sNM",
  "key5": "4SopLC1YqpFTgyvyWMg1gMUKHcU53qUM6XfSZSSafS5J6Uj4Usi5KDvH5czPML3fRfdJZbw3gm9b1N7z1ysjJ6Wm",
  "key6": "3psaW4yRNo2ANG75WN26epw26a6ovTJJE211dn1Pqn4NmiMtpuhAMyhoEDeMJj32XsFvrEDv2yZs89fPcfNfWAvj",
  "key7": "2ECMWauVARfUqd4ixqpEPo61Ye6bj2bxPt5bmA7yAUp7SvgHc51yuhHpRLvpGGRzCtGr7j7bbf9LPUsAS17qgcAm",
  "key8": "34RCFJG5Ssnj7TL4ff3256EPENucYr8MPDV7TvZ7thFvyPMxbfbGHoUsfZEzZSpwviqT5PkCfu2oBuxHGysmCTZE",
  "key9": "5K6MGBptUG5BayV3dvHNB6UgUae26NPEcwqNeCf3yN3fdFsvVVw2Yp8igFSBq2cAWrrDt3MooyMdvkPddh1jBk3P",
  "key10": "d1SG8sZaFA1aLtiphBfNhmjb3WzXVEYDXS8g8b6aTpkxGwc42CZ9ngLHswG9R9Zpas45beYm6XiMDWcY78HRejA",
  "key11": "X4EmpJXGfyFaJRJvkzCcF55Ev7VfD3cK3W1SHEARgzfAamcjRY5ZcqZ5Fn98HMuYESMhyFQ6TCHKHYbB2WYZLKE",
  "key12": "5dcDvwEh1k9AENsZWjuzRZ6U91xh4PWv5FSaqc4ve7KhB96at8bqAwJ4kFp6aNrALHeEtABNFnuLVL4bVutv7z5f",
  "key13": "q7v9cqvri4Qjuj7xT1p9PE7wiAEUSx75hk5cPityvUAHnXiAXvqmnJbE73RUTcSDu6UFN7rqmuxxE1xNAw3Q2yN",
  "key14": "4NqTPck2KMMmUToKpSsZWat45UGFc47GEXDmHomRQ4MUdPLeyXuTMdKFDvpcEbArTnkbmsSrr83tUD4hAn3D2PD9",
  "key15": "CFEWviAA4QzqDAMNs6npe7G1scwBSsccPBUPFZ2a6uNAUVYsZUtBEawg5jazvoUSz394ZwksCs1djec7TbqWkdh",
  "key16": "5SfmWEoJMBB49jiqEp6BQrKAPJGkCpjMiAuftMVaG6L25yktL5XafRHjcqftYAuaadZJKrJAccWZny9UiMQncVrh",
  "key17": "5piFrpfhax6xwsq9PMR1obB6c7ZT2YwJPndD8yD39PhpgJcrfc5S5RXsvenTqqiJH5sapAyJ4vkNyFb49nNJvRc8",
  "key18": "8M7txDjCpXKefGQJ1ttzPzsbzUtmuzdSQBGEp4MCSKK6L8jQkWMJoWZsvgKQQzL6osLwGAgDoe2Y2VQHJrSXGL4",
  "key19": "5MRECrxev56JLwBoBr6dSqAVhMfBhwR5SR3BGCAp1LuvyjoQR62F4DYwXTifBJhDmu82JW6bYySmkQtCBJ3Kypn4",
  "key20": "3T5fjdJcDyeVBApkypfbqnLMnXbetJ2whsvUREDfGqou5fC8orDAyaoVoLPJAUtH2wAczeeZ16HsLMC2pBGx5sHZ",
  "key21": "3mZ9NLDbrP3YsKUYP2jAtJzCyHTmiimah2EpGmxJu3EaW8jUVaKMz1umYTP5ATeQqG4BFCKLFfj1ypzveF3tUvHC",
  "key22": "4QjFc34rPm25UeytGMqcoJtVjEogE7w8hmDqsAPS4J8vyA4ns3k4bbeHnFvgFz2d7LrK4MESQGxK5LrrdbK1V5Xk",
  "key23": "2Xi2Ew2AhP8dS7iH9abXb137wpMKJn76chL7ZrfKAV5wUjChQaiPmTBq1ZTrEPzgEMacX5EnLJkmfeY4SD7yD5wD",
  "key24": "yUL4i9byPCJ5HEHS49C8bU1JHd3KW2iUN4dowRbPUyM8JVfUinr1EHVE5eTSJdKWt1Jo4Wpsp2c5LA4Ube46pFf",
  "key25": "2TczEXvu6Vv8hapCBvnK2va41S8NzBfDNkpqai4uub6wP93PbT9GZBMQMR5eiU91NWv8nPSsEPTh2yqmVLMKtSjh",
  "key26": "2mQ1dy1qoMF4phQHJAo5FmBoxix7cUuF4Qkouue1NMq2rAjR2MdCUczMP9WkuNnMfLSmHSA5SRZ11T638sgtaCup",
  "key27": "2TKes56HgnXErv3zGNcVcRat952KQ9fw3F8DvoEoc6KDvmMqGtD2DX6PcjeyQS9uzZHqw76o1SbZFbAshVto3vke",
  "key28": "5bURSGV8cpidRjSEScFis8xQBm6xncnwYp68CakQt861ym6FbSY5xq9BvwAt4cexs2cmavvftjW4d7pYRP9tPXHW",
  "key29": "64amLWXoQdmz51uxXaoeoLNNzp67JtLcgdjp21L3s1mJbRv4ehD4P2jZr9kSJ9nRiRc4vsK1hxvXZWQtZguUHzP3",
  "key30": "5JLYXZ5uyLuuo9ie3yY8mggViziXL8CGBFCnAKd1ACGjtduWpSV89a9XLQ6VxJYzePkUc7r4psJWiY3xSB24tyJR",
  "key31": "4Anp93wLu6hyzr457E5Ze1dLSWEUdJSxSezudkthiEhfz81gCEKwZiqzV3DeUy9EojZDmr2gL4WWHyqXZvPW5HKe",
  "key32": "7sRhfBXTKGj2xwyJLGsihx844kMwJY2YiuKgYQLuLT8KB8Nvk7gjnEgciZF4cxu6D2pKBxGzTwKhHbLzVsve65D",
  "key33": "4gtQ8t3TTzaGznvWpcizghVf9huRFUPSNJc6CnKfwvNpZKdFkLA9eb1rwbEFCbJYumQtaEV2dnWdqh26b4ewrRHb",
  "key34": "5KKSCasK8xdEmyitMeVfBVzV6xDkpMBS6sHn3pZHuBiPomhdcrV4cogt8QJFjP1fpKJ8oZCvXoaeAKdSn7hjiFXh",
  "key35": "4Kq1tehmJE2cBRpUVfLXXhikkFwq9whzkqPHLwjxNSLTAtjeLm1ED854oPq33dHLivG2j7CX5tPyKwQvnDtSUaHP",
  "key36": "3vMn6kPRZbfRzsKV2FyXHyWBHEaqXUpSTTwryJFV58Vsv1EjG9JSwAR6h6S3dArGFWPwLnk3RCb7Lb14HQcbaRJY",
  "key37": "3ZkZDhXybt6Z3AytWnLdDVSW3UdEBkXWz5LegJU7ia9mLeteHZK46NPos455WjWaaJ44NRamwjMjT3777vHhN19K",
  "key38": "2SbiX3xNUQUPJAyfCSrUzaqkJgeQMeAaLzC3L8iW4mc3GL5hFSfFogK5UL3jMaQUyyhfVJGNtgGPYEiQv8LtqepQ",
  "key39": "3KAHRaSTsC93kEtb4YhCvDHFastvjSTggsux2tCW2HKvJV3bHR6gHVTMUCy2mPKYSdMCeNJvtZ9Gtc51uknsvEAY",
  "key40": "5Ghm4FtbXaRTqrkQvguBLM6hKPC2QvtBQWFiyDm7BWPRDBRL2EPzrewRVRRnDzk8jJ2331mGGfEet98dNshG3Nn5",
  "key41": "5Vcxnmwfe9Ykihjbzka99yhoqJY9pDVxgocQyLPHWuQBTAdK2KAbB4pPaEwQPUhH7xtobpRhAckSfogEjGNSjiih",
  "key42": "5o4dNi9YSTWAkif5HRCChWVMYbWFgfi39tM7ETpvVWDB8xY94bHtkquBHALiAfP2iZz51bhUaF6nB3MAsPdSTPw5",
  "key43": "2cm2LZkoNM7xex23mm4Ny3kmDZkmYvA9abSLgbZGBhYG6BFWe5kK2WviPAnjsGZuJwGPexcbq9VjjHvaDiqKe6jP",
  "key44": "3wKxJq9QicW6fLKxkJFsuyk8AQmQJGYCbi6GNaDsGXmrBHAsViqj1dmrJ7JyJUEnJ3RtKGboZih54EhuP8VNUXj8",
  "key45": "2XN6zYgWpD8k5u4uwRDGpc9UHjWjZDUSrZK4PDv9iZB7V52sozbgRRZJgt8eSXzkJEC7yJe3RiSRYw62zP6iiQdc",
  "key46": "5qwMMVzZG8HdXqqqKQm4KwxLx42Jk2o2WfVVmzj5Nqf2vvBQpXEVTTGXk2X4QQMuigTJsr8mMEMVc8AJzMvuyMTy",
  "key47": "5Fo5KEMDiaf2Cvt6fVS5VKm5kEze3KWQmtBLMWZChRgPxVjqdBV8Et25efDN12j8Aba4fUwJ47vNB5p5JeLQETUR",
  "key48": "5SsxZdPJztMWmvAMmeDYQo8GzYHKZCb7Pj1Y34BM6jcLdDo4gJfb2HJ9T2C6M3H4VTos4AzudvCgn245ujJeksk1"
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
