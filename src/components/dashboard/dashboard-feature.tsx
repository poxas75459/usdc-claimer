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
    "4KiQDjPYgQBJkRraSfabdm1SffdgrV7Sono96rtu9NNkdD7K9oopEYv8LLjD9itMQcLPDZqSQCFUabgRspNzg4EF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u9XpJK8oJm5fjnmgf34tJ8FiyyPAmAKrEwpTzPNsVK7QG8QVwgwbeeWPVN2HmBfnfSiLq2iqStRzq1L5drpYgxs",
  "key1": "28YWkbEgRmVK468g7UWjUNBH2ws7ECDrnYFFWPxetME3po1YoSxmD1qbQymTjukgcLiz67EjzyjJV34Yg6E7nEwe",
  "key2": "5XB7sp73zXVwcz5JpZHV4G9g2tWCtLeDLEopM9n3x7LdqFcyQyfU1BRkdRkyFrFwWJ6NiLUxSv2xQtQiAUux7WCs",
  "key3": "3RYYJCjMucpAYcbmwzJx5hWGiH7Wh9kXUQjkdgc5TNcr439QMPTiRjagbhZvnnf5hmFBPMTkiAu5UgtdSx392KUy",
  "key4": "PophJzaFYXvkgTeeK1ZeDmZqGGZodKx5Fo8pC5Bnu5DoVPcLXtZkT9FP3mr58pyM7AiMk43HMBZx9nhftte1VjW",
  "key5": "kJB8ZXLZzkrA8EZ2Rxh6EQh5JMnBUDerN2xJAyHYZVjeZoF5iH6Zofkge8iFNfDVrxK4VB6Hs8ogs4YKgXrY5cv",
  "key6": "3BWk2NcgyRxz4MqZ915YBrCLmiEGuycGPWQxi36QehscRLbQbpEmVF9VqJM8Q4U2JSjXRfarkXZmErcgzYWyLr1L",
  "key7": "4FDGVN2pBEDRRmHXMB9TTPULso6SYLaFqx2TFzXYR42HjqmiSJD7utzEPe6Agwh5GoXKQw2AWkLB6gp41dUsuTH1",
  "key8": "5qcS4p823GRhumvxfp4uauPp6kyBJ7r1gGvAiQARsi7JuXsDPr212dA3SNjtzPpnWuNJaBTrgXq3TEBzzhQkT5dv",
  "key9": "3KesAosBrq4nWbWckgw5w5adZb9cBMWmXwefabpQkEByybvyxccn6kjqfKeZhocQ68kV2dEn4QFZMtB2YMxYZRVT",
  "key10": "5HQczRh3hgsia9xriu2S7Q9vHETVSXUQ8QQUb11Ah9RakJGUt46WVnCMz87W17SAEmLzWXoFYhGHAWK4eHwtddsA",
  "key11": "4VdbcjcqPFnLaFgGfWE65E7evMwTm7CvxHyZXDFhNiB1YmdabMGPVU5jjT7BZPBzbZ1nYsCfXtGhYHKJueAic1he",
  "key12": "4v1q6YvsWkQEZLrMJ3R49nGsS6VVYZjV8VL4aDhtYv9gYnUbr6JZhUXTtQXWgdeCt1XvSCu4oAUZvHNMWGtao2jA",
  "key13": "49CZZQgGrp1m5a2D1ubZdtrpxYxHxBAwq9XAAtrGFTMHdrfMoSbfFoYjhT5TAmavfMG1UKZ5P1FvmNwhfKuR5qDJ",
  "key14": "4uBykELe8RQEsRxetzZaEBCKWjAiVMqhWbrjjoyu7xxBAoZAisMvK7VUFZiLVcdDDvqP8spbxVRsTcyXuGaxcHJN",
  "key15": "3EoCWVhRK9eTCSpWQhTWuFou4XzhhkdUdR4nwoYrMhZz1G2WSChw7ProAveGXTgToVedjP5vQ3yTtfEzVrKv4hA5",
  "key16": "4R8wJcM1Mb13JT8QDUqnrBA7pb2VLD2xpDtysTECHDTT8Btp9jnyV1froF9ZEcq83gQBRVtf9SvtHineKfwAWHnC",
  "key17": "4yjadJLQW71GNaX9gaU4thenhQxSUCuDHUSTUUcsv6U3Zq4XKHyJSHtDmTgRe8Zqmy4eZkrEQMzQNomK43XW1KHK",
  "key18": "LFo7Z3B6iPpuCTMqyfumWXFcfuCcR96HbyL1JkXdhcQaVPjDHxLKiKecCEwcgdNj3Emq5hJtLX7V2EANKGW9Zsg",
  "key19": "518AdTrMgKAA6EeprrQ1EL6zj7EGADxd89nYS8wwGUuEKUngaryQzigMo9DvGkCCFts1U37Nx1MxChttuBZ4zbfA",
  "key20": "5wQYU5nkK9kk2D6pLpPAijqJ7TvPbFY5XSGptXvSeYPXMnVfw5X5SXNV61bdifHc9KvsS9hRsKcb93APUbKL1QHa",
  "key21": "46KnaopiJgiZqqKKi9zcFcDxEjVh5i2umrR6Wh7PXJdfr1uCegDpKccbn3Zq2JgbWTmCiH1XSea37Nba8RfQ8uBg",
  "key22": "mQYj8SeBRj7hxmzWjsYpaeD5fPz39E2xqWVn5sHEKxaKFBcJVBqH9KyLrywmUrGhiYwDHGBgjAByEudu8VWNYaq",
  "key23": "32cJXQBcoiR25Mh3zjVnuqhGBgH97Cgek3E5rDPUUQdb7U5zVtUbdmpKNafQ8SDnCxGiTqnoh1vgf36QHXkff5nT",
  "key24": "38DwvMFKaVuP4sX27vtzdwruehhMKQ7wNYaW9kg4wpRpm3ipzKUGstpR6iguW1sXZ3PyPq76MVQ3pnmzorwmQzUx",
  "key25": "2Az3xsp7MUdRJPTe28ZPzXGEYUJj73MgmjMiVG7vn6g8XnBEV5Fe9PAUqeMNGcLx69GkdoyCg32AQCN9JgnZQCTq",
  "key26": "2rNYQabkXQNBCyCEuZX1NpGASZyy7XbebEebvVhgh6XFvQFRV4QoMZHrSn4hkXJu3CT4pLUaaJvNUaLcTZRrovbf",
  "key27": "45Qf5NEutbbdmxGmv9Jyy6PxdEgeAwfFstL6EdHEEWHfN6uMHUaK2QFqMRu8LLXV1UjAncXYesV6Eh8LsZANptco",
  "key28": "3ArajAFMKQsuH36Mtvpa66hsaGoEKr1YgmpvXhDMsENq5oaRvevqHbAjjGJsvZNmmgxew9Y8dxsE6APEr8kcwxTp",
  "key29": "2JMAy1oPFQeVuTi9CYGCjwuSGtePwbXcexo5BvZMZx96H9FEhaP3kL6nb4HAvFNjB3sw4BcNbE4htrBXWEz2zzwX",
  "key30": "23jsQvyKU5y9wtsj33sAWkKE4bn5DZLQA4SjbRTWeENP5kRoMQDwCMyTASwreSikK4Qc8KYhrAr57u4WKuSmwuju",
  "key31": "4GQY5La1xTxJiVbmgpdcGbHYsJcWRkE92mGiHrozrEnYHhR6pyXY7HnwTKU2VFayZSdh3XYzsSomi9GqtuY6Adhc",
  "key32": "4fUeB6a2rL5oUwZSbpKcLom2p6AXLu8zy86kJs8SVCsK4FnGNvXH9rZX2FBoES4n1TDi7DfoCJ3fp3ht42BqSP5Q",
  "key33": "5WNPS4bQyaqdEJgetgA67k1ERx5XDqAYJE7Z5BUKoQGxBta1ec1biBuGqsSpnY7uPkfVhU32qik5rSTxEmiFyDC8",
  "key34": "5L5b7hwyWhMxCn9SLGkuQamPFfmy9nPbzaEg8DA926eftn3kEmA8QWaLAXaGHXAuQe542WHJEM6pDttzFBEpZ4T4",
  "key35": "3FtCUKxSBeRaHY7dgticvim1LUzMuRoZGhSDhiW886fw2bnPp2tfs57BF4ppzTZuVgcoPD6pn6rriwRKuuouSQVE",
  "key36": "26pWM24ZYaGZjsjiQV8yf76sMT8eoWkWqDMtVe7RPBMaxMtupTD2fVroJvghcvz3QLRTyTnAJzqWxGbZ8oVkWVw1",
  "key37": "2eLm832aHBQDf5hYnW8CRHcRnifPVXeWLwe9CTVvCnjaesgvnxi3Hhd2JnoQc8s6aeuBgbhyGGNa1sWKVZSVhvCf",
  "key38": "4eTVmVVxx4C88zTXaMM8ssDn9bGvTVJ9CFbjG7MamweBrLM45KKzj9TG63yMXauX3u9HYAR1tDStPcxfxp69mj7w",
  "key39": "4sMjdoieeCJHYbSMn1eMi9DDZtJL2KHtXiC9W8iZcvhLcw3d3K7V9Qt8fK65gByw68sNrvQwPf4o1tMbPcSb6dy9",
  "key40": "26xCbZC7msQBnHGAUs8ckSJsfkdfFWRNGHvxBhgQugn1iGnso8neYpeAqp2jQmmrx4ZwnzMVMhuoGgPdjdpWAKDk",
  "key41": "5XAWSHj3TwzUUqZvHyXEusb6z5dWzLeQY172b5LcKGe4VfKESaztWGcTM5sERP1Bpsxus8fu8TYwRzHzDG17GLnK",
  "key42": "28RkDWvuRWFy7odu4r7quZAMxfmzqBchehuBgDvi9cqR2ed2oaUE9QYVwzTHmY3UTnUsg26shQm47VgimaZwWgjF",
  "key43": "5XhJRibePGGs9vYWLMx8kzFHL2MG1289No3ieHAhiSf8ovPetFW3njEkYt6d1rrQzWT37AoqST9jQG6efLnRsnX",
  "key44": "iCqRaYVtpmQBpG7KJXRTGCoR7prQ7B318iFZNR6Nz8WCw3Cp5xrQ3xVRaRvhkQfM2xQ9E7b1eKLvRcpeY8sJMPe",
  "key45": "oDzfvD14uqLtmMafXxQnMKpqYRz2siXwjqLXJMvN2gwogiB4b5o1VRTFDVs8kehZPBFUiek4YdYa2NLvVm8La85"
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
