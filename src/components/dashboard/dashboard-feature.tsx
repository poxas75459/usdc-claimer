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
    "5Vj6gsY5fc2vK6SU1jjtW78ps5NPncCEX6KAENjJcoDS92mWqua8CAcWkTo6R1x2yAKGcWLb4km1a9u4wa2sKRWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UKXax8PC6qSv5M5g4kcSmfmejiCb1E4Ke2pjd1V2txA2S1od7sx32BgF1mpUWKjtfaxDnKQUSS4u4dNaqpE6C66",
  "key1": "rpt6G4r3tzF6XEEVspvw9o9gmPzjAN4aY9zPLffA84vezzmMyKodPGdJVmzi66JoGTmo5iQs7GzvScsLMWhafPh",
  "key2": "5fG4k7y26msXfHMsYSbWh12Hb354tHCHJKxxZ1bDYqdxYVjDbnFTsq4pcQgHkQ2GUhTw2gSr3qfNVu1vekqTs1Yy",
  "key3": "2AV5gqKuHfLeEvSrBkX8CLQVRzdJNGvvvMARCJkHony2b9i8wn4FhsVH2v2tNq87jq8p1hPf1ahhWbGGZaST5xpE",
  "key4": "3p6ektzvvGr7ca2W7gtgTjLDkPhhU4zG8ntxzKSTi9guVVog1s9Uka1NkPdJ2qSmxyQsY7fgUp6MC4GZRvwNsV3e",
  "key5": "2rB7f49H3Zefxf2SkjBGfGGMmo98pCnxzSTZmM77A6YByq4AyQsP1iRbBE8Gvu4RiXmVLrNztTHr7aAxVMc8F1P4",
  "key6": "3uZj8MKu3uGtS6f99n2kaRbUk2mSKLkVWHPfhqiryNb8MzhpEwmbhqv8PkvnVXeV61kVAvReQSkWzdsxzbayoozk",
  "key7": "4gE8TBsDsD7nY6n9SVSQ8qFA3ZU2Qnq17WkPbo7vJBvwoTXbqATtro88Ck3cPRau25FHEs5BbGdcx8TuJ75fXRCM",
  "key8": "4244Nadt1K9nUoujWwfJjng1ysCr8PNf6FhVZ5Q8MopLFRY8gPDC8sJPMd8UEMArmgDeDe9FYYiFcaHN4xiyPT8D",
  "key9": "2TnHM6T5jVBrNPZun85RDXhiFPTdp1ZtwbM36QtUGgzsffmpB6Z9uXnensUXMBBE1KfRdJWSoqbUU4ZTB3ULG87t",
  "key10": "4CYwBckLNARV5cfad33Yh2cDbrr6J3g8y6uQeyC1Nz754yYdoJEBYeQKCvPAVt9BvMnk8cA68HYS5Wb73wzVLf1o",
  "key11": "puLrVhisW9CF2wDdEP49ejJao9fwA261X8b9pg1zphCCiu8KGroiP32KEVWeR3dErPQKYyuH9MU1Sn7W9oZgYpn",
  "key12": "4GMdedBjTwWtDA8FNP9m5ipLS3VN3KqYbuzbMCPFtZnedTVxyR65sdzpvwtkncnQS2C3SE7hRZBDegACH3W8no3G",
  "key13": "45KHCPWmVTUKKwDWB3PK5ofzDFgYXegYmdisC9WV2izdr3H2jm2in2imHCQ43j58idSFEsC1R2iat8UPrYuyPouY",
  "key14": "3A1iRfAzZQZBG9u5s31vHdnfvfFy19X8EHsUFLGWKYdVUEVrtZjHJ15pjk8mtF7YkpYxp1dxWNot5WxjFT7k1pD1",
  "key15": "4AdsHcK9ErbeyNL4UvRVDigwSHoMW6gZ4vMsCBp3zP5Ak9waY6mNFXRcxgoaLPa5HYcqx3oYqTVLwgQ5RmVMPnaR",
  "key16": "4W8ou2UNtV1CFVUKbXSBdU1HFgCz1ABe3aFHoNidESVLgt4geppN73zpXwoCZ1G4Vyqre3cMt13yGBbMmga7RhtR",
  "key17": "4GiZ8uYjYGsgKAk5LiUQ23VFUdxsFJVMw2EbCMzs5uN7N4gBjYxR9pBYzbiSLKrioz9iviKMH2mwb2xLUSe7SQrF",
  "key18": "4nDhHGqonsT5bwLtiZ7fKhMrBRaa1HCxGX8kSoKoUTo9zYB5AGH2rQGS5okq7XHT1QYK56eji1y596stPQWPjzwW",
  "key19": "ojz5n9hdZ7NvNF8GoSSCjRTgePHqDgwCx8WuNdZUPTpc1DMhGEQZJcx6FYEfF48zexQ5rxNoaicXjP7GNMoQyTr",
  "key20": "3nDHFezbkTBmnJfBLF9F2VKFtDPz9c1MwYk6nYSyKcREY2V1CAKNbed7285LCSbCGLDzWuKbvLyGEMGBKVMokPfQ",
  "key21": "5VdMFMst2nLjFvWZPduXijKLtyFKJJMvGAYSwurM2xzqUsHPPoARkj56rLh4dCzri1WriRHDuo4ALdjFsPWFdTCy",
  "key22": "5jxS5BRe4KEJfGT7zRKnKGTZQUtnjYURapSjxicnmbACJ5vaiMvRxgxBjLSMgzxyiRv4nQD1XGQZ34Pa1dhZaPfN",
  "key23": "3RGzWmY3YUchKvWbKgSQkSPdqUjzUU2qsykTdEkLLo7YEvJxvdqhkSX37QQ4VF7x94QUXWAnePzLCkcn6ws2ZvuW",
  "key24": "4mWav9EdnVtL3CirLsnkydzUkctMKgLCjT7Fb3CSbwv3hcTftAEMY3aZqh74xhkjV9kJQxYyDEnsT3vUC46uzm6x",
  "key25": "4MNNpeobf1Xfn1uTzrzwnmiQ8BEpe63N7cRPXkCeQ8qAvhMsaJ5Ho1yL3sVwKYpMTEVQCzVs1PfBwbnqharxSiWx",
  "key26": "3iNhufv7M3jXcNFtdEk5CrYBjRuUq38bMyhvcDuVJRdQ6wXPHkcEsLFuKSb5KKwHuTZuA1YdXQ8DLDyBvfHXetk5",
  "key27": "2YUgEt814bxEbzrcS7jWtEx2eqryTRLHJWzBPhrDyUg8bPM43QqfWJkZKgnB9gB57Yb3PR8ETFJkyHPt72DpqfdA",
  "key28": "4Uyuc5hQAo2J5fP69RsWL23hhVMtNF7k4nUFNcazpuTiVFUDaRBThiMkgaUNp5LjF6BjGdZGrd43EJg6FHNAXofW",
  "key29": "5XjvwGgFJipFy7k55YHYEQ6dZdF9MEnBVsSZM33vwWEyVBntZ1bUimbmVp69jLfG9F78N8PzAyveuugmtEKtaocB",
  "key30": "2t9qPHyrFBezYVyupAhb9a3HiRi9W2u6CWWbhc62sxw1s3s7BnNrZV6RwtJRMwfuTYW3b9CRpUEb6vyNvXUEWhL7",
  "key31": "3oExd56DFHuAm8Ro1HEWMph5BqFHLXRSsiZ5TeeArfrS7JNLojDVNjc1XWVNkET5z2m8CABtWAGXLbPuJxyR8fZR",
  "key32": "3bLSWuT9EQX7YNvmyazWttKzqeqRWvL1pvZ9TLWCGnk3EgiyyHTD7mguZcUa9g9AJgjk4G8wDwosSw7TCRhcMp7Q",
  "key33": "mnrM7zEWxdPi6UV6o1mhMwRz83iika71FrRRz4a61kA9z5ZKLfeABtrPoWqrFnkhg82gaR5istren21nrNgfSRY",
  "key34": "4CeiiEnH4uFTEdMT3Esoot472ynezzos8s7xs3hWx2r11bfUCQNiLGq8WbF2HXnz9wHU1icEQTLSGR7o2ErCF9Xc",
  "key35": "28r2mV36BXPEBDWJ9GwthqfkFmdqp3Vb9uz66igo5TqZwRZDCC98SzDCoiyS5cVAHcmSfwnMo7upnAtfCitkTwHB",
  "key36": "4T37knMS31DCiXZVeKLwqz4A3QtNviNs43GKo5rLjh1t819qMHB18vh47uEsJbVaFvyRV3dBYwHxcUo2Q8KXZLZq",
  "key37": "4L8TFuYbzgxXtJRDhs8w8yxpT4moGv6ieBAVo3anCnNasCFFbW6EK1rX5pJEbbdsd7BQVRp487xrCpTE6FX3ic2c",
  "key38": "2zCLVaucs81xDoAkAEgv4TJRZskvDvdetMe5TizBu62vVK2CvmNFfVVDaDa1wLVmQsUfjPdpaaXceHaBGa9mzRWU",
  "key39": "3WhvbsJPoWx5Fb91y8Pu98YKWb7FbTsCKLjvobGgVmDaYFRSfsNx49NEMN4AwD77opSBu1PXQYBKXuk2RK14RX26",
  "key40": "549VcRQzM7KPbgBgpQVqSeX73nzes6j229i9jgLojZg5ViqxjAw1EJKqezprc8GAwCcdEpovudXzbzGWjmBDkHxY",
  "key41": "4DS6sVTos8Rv4ScogNyEJXMuom4CNmBjDfVdMWytZmPzRiVaPVQVNcpRQccRM6dddQB5tEAh744nLmfP6phohStD",
  "key42": "yXYbmewb1JZH2YTHM3owKeSo4EKRi27dtu7JphrkN1ghynjc8P6FUZEXfKQRpz5gJttLbKtjqoh5Jygt6qFiZeq",
  "key43": "TchmyaWMDuU5humWynqTU3BEm8fr4hFgv2FaNrPBdJVLeSPih5WjVQqZCSDX7XJWFFEKH9JhcapZwnynWygTbBg",
  "key44": "39KVgNqqKKsMLy49S9Q9LfNu9eT4HMt8S6ADQY4eTQVgetoF4LJXiYgTZU5nJLAtpjkTy2M3UwdyBPKty8oiorF1",
  "key45": "4E2afihd7qbdKpsqcwn5aFeH3VSYNUNurHM7sN186thNnLsg2LD8WcUBbt4mtd4zsCRj4yabULtTtHmkfwngQ4xA",
  "key46": "bGxbG53UW1JjnqgghtDFCcGJFHJFCfqvqqTz2A6VG7pA2pCuKGHrVWYoJWSxcLFo2LS2Rnu38mfeSEkTGjFKx5M",
  "key47": "2Dbr5cbMuLbygpVSD7M91nEp9SPPaRbPVy9ex3Z6zSSZYxeSfKimBeobLiTcZYzEtQxWduB3tTBoZRWFwxhRnAo9",
  "key48": "v1Wn6ni7WVNTeEezSUiahoETicUSVZPuxAJgEvD2T34ZNXY19YaTJyyAk3FFK68CigRPB9vLBfCgsfUQ1mstVTQ",
  "key49": "3zvKpTKYkCPCJvSwHSdaVEPCKj9FDes3MaDKsUuySf9UL4qdBKDLxys4jGpgZknAmqKhx48ELWJrabwdafq4UD8L"
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
