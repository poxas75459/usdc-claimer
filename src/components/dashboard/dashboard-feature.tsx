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
    "57dodJVqYcToXgFAq1tHbvFP8uWcgQnPvtx6RcfsntuaEyDH5SYgqoXxRTpe6oWXyifW6UeuEhDNoX6d176T3c2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WAKKMx1tb7AMS9NUgztCmcApKVqTHuTUY2SC8EJLRdoyjN4N42CgiUtjiKp3R3Rb6Ji5TWgCoGjigiwuAG1HQyX",
  "key1": "PBPEQFQnMgZeoPSFF4FV8bK9StsgBPWmpF17sVGvXsVdsCLnxZf9HwzUVXr8Pmgenit18eETjYGaVycaxbBjLY9",
  "key2": "5rnGNDE4MJCFyZQEPdfUP18TJGWRMDTWGY2UkH7XqBERXk6PM1Pt4jcTAMFNfgUkRSUhV1Z9ci9popYRz8TJDhpR",
  "key3": "5yF86gPdrT1FF2XADW58VQcFcGKqKb89btJUEJaMVMquFQjyfdq9apJrixBz4vrbfu1Lccv97eTrT7wbKaBkdQp3",
  "key4": "5wzTtAAFDFsTzicWAPsiHVrzoQRkFzNYqw6nXQ12s4pDsKfbJ3KTxM3FxRJckEfwNphBcSYBQDDHjDNMUsHqqQC4",
  "key5": "2gVbAwTfFxf3F6VParFNTPBB5fThJ4ZuP45XVEs8LSqiNs5MbTb5GZ9kn1z7T2yyma4uC5Eo94YSK9P2sVvUDLn5",
  "key6": "p36VEp8NEDqbTBvJCF62w7eStCRLx87JSTDPWALD7DvkTJ2vpgKH6f1LebeXrrgkP5sJqGt21VsmErMgBhQwTby",
  "key7": "4jDZt8mWmbMjz29RkReamnS5hhvXMMsJtJkYLUxjyeBS7tSnJbfy26q89GRps3adVKG5dkJHJ2X6aE8JptsVW5z5",
  "key8": "5GZux2MSSBNh4zXDWzrFyCuimPQF7L48Ftc3hfT3i6Vvvyid85hYvZGhyqGZwyttDr2gYnVawJZjHSjiLbXqNzv7",
  "key9": "5TdFoneCWESa87AHfZWx4uKdNrCGsKKoVtr1K8oHC769Aso4uDaXkvuouX4bijsrvCeokzLfYRa6QywyupBpZ7SA",
  "key10": "3YE1SKWQ6f3A77RkUfHv6vUw7TM2AdFjBPH779KDwnMNhKh27Hry27nLzCHvwkjgo2xu9x68WNy3MkCYQUDguKKh",
  "key11": "6F7XtDiHmXAkUzeTSb8zdsLtT2FHWCwYZ7UqGHres3TGJ4i2gmm86f1iTmxWbEBVjmCUNEdunMqjuiWQZ64AN1C",
  "key12": "53mooS8aNQmZmYEzb6EVNmcvgmFXhxBD2Z7iAfGSkJMzD2YpuDQknZinFd3vYEvoKKki9A3fZpUo8Dq8id3ZeNjz",
  "key13": "62MTeYgD83R6nX9cj4RFmPK7ynwYiXn8Hhq93vS7ELzqkrapiJffdE8Qm8Kh1p5RSkzRYBmXDbTZ9Tx4LgfSxnoq",
  "key14": "47mqbHj2mjEaMQ5UQSpw9jtRQdVmMxAsebDzDM8g6E7zTxUCrP2sAv5FP6fgSmotgBGH5cx7XYH4jVaAHopggRVP",
  "key15": "4BvUJXvJqYoAZBJjfZ6PgMK15BGAqnebdChEvai4iYE9vaWrZHaForRaNCNUF93Nz2rcD1UdSMh2LH5fRqBjADk2",
  "key16": "3ePUACFQSLKE1BVyf8g8FapMxRQm8w7kZE6CnNZ6Qbn3FBeTvEpWcCsoEchjXbidUcEvSLGg1XRMx2nguGDyKhRH",
  "key17": "hb1XJ6ZCAcptYQ1C5Vmeh9aeAqF4WAoF32YUJC9HQLDz94H7H1fjPEsJCUhM768f68YXcUBo2oheBWJg5LEJpeA",
  "key18": "448LasK86MxGVv76Pa8YDUXgg29JhtnBB71rZktihudy8sfZb9n3qNRzTovLdFFA2YCf1Uo3o6zKLNeap4ZZrkXx",
  "key19": "2HUQzTSyGLaZkWgN5aQPahWS4vQhWfe8HEzCpkn4Dg8xEanRYoB3vz9hZbnSYWbWr17absMz2gN8ryh24PHAKeVk",
  "key20": "5bFqD49YUrCRjv566pNcqjaAF1geJ1xQtB4TA1jw8dLso4pyndZvWbriNaGVcBKaxDeHMdQuzECmVe1G3tsyfaBw",
  "key21": "3SFqBfYioZ4qzErRNHAS6HB9vAjeoFMgd6V8ZaYmepz8YnEHAcZ3P4adiGq7Z9yF8GjNLgzuz8WiHZcrhy4BdVwD",
  "key22": "EcNaE4obFAw3aAq9jqXe8r2dCPvvPw999nCnbTj8yEGC5niWePpezTNDy7jJaU9WPFPAoGkhVJ34YQSsrhPhHA9",
  "key23": "4WFAwhtaALNRcXaQYmQEU6cQe61ZacEtucQRbYcdRwif9r11bwZbtFKWjCnwJsrKvFt99PKVAvDxwP7suEB9csmV",
  "key24": "42fHrtQdD95rrEFZjR468opuDrGfckJbeb973ex3VzWrtZTNaJuXFdzG39MRKrby4dVkzyZjw2qwxGgzeY461Bkb",
  "key25": "5cGH3fydwhiQG1Ev1fMpbVV28By2np97xsoxHFce8TcFg6PHC7NP5ATRvmPkNE8swwV7EXDjQe2R1oQhDHA5Pkoq",
  "key26": "43hh1iGPiNrwToyCaeEHBkMWqiVc8VosZpoxLLyckDv9Xppzk9pryYEAGCRRBCWAQBG4nQfYk2YD9PtnWbT7WsDX",
  "key27": "3nX7tUUsrWCFRUAuttmUrvTjJZ4z9HpYQBbAJMfJM8xa8nPYL1VXFhpCbL7eMK6kFhPB33pEzcMravxRrndN1ng3",
  "key28": "4JzYoSA3yooxKDZxwLY7QS4WALr84JiTooJpepJCKkCbUpUd7DkH4eMQb5tSL5rpxsVAckhC2auNF2wHbbefEB1c",
  "key29": "49TLcF16uL6ZEjywyRT53uEyYWkMM24jAtLJCw731PpuoAPFQgM2BTP399hpowEpSQ4Vr6EUCZPU9chp8BnWEoTg",
  "key30": "5zp5cr71qpjLNgzAU13je19QsmhL7vyQdCqCfY2TLgxq6EdpmQSgC5KtvUZrnVQ1rpbiw47GJ1NxDuzGWkceC917",
  "key31": "3e81M2B4Ym8iABN2dht6tVhfGa1QZu6u6qjmqD9qYgh44Ht7Nzu1J2p3FSv1cwvcHTLivPB3xVJpagRZrJ87zkzP",
  "key32": "4sZLQnNKHu7uYe1qxd84UfVYL9GjWzAGMHxVRJuX7WjJY948aXFZJCNm5ohB8SUfqxfu4pjHdEMZcxT55MG2beA5",
  "key33": "5JgnQ3xGHkc5n5cwEPNkjpbPtn2zLJ7BPnZ53o454LzoGJqeKxeufrFX6nCgZ2fU8EukuYge96cVW8foEf7iApo6",
  "key34": "54p1mCuJorVdkNj8WQkn1WKxRf2Q5xMdZ57jecE6JFNnTocBxaTM2ibpn3tJEHnPbjKrLBTeSCBcSDZ8PT4JhbJk",
  "key35": "4utY8XnLW8taGa8XtePdEDV1bmCUCzDyTS65TFDX2vDWDUanDna9Y9Ccpj81b34eW3oDag15He3DzADtjHLHh8L1",
  "key36": "44TyrpJCSgAxiwTgd6wmHZcrJxAsvMztAQV8DDQR8hgVigrjQ45L1rpoTTLMUnFt8AvEKcYj4bkgG6ozKGbGJAb8",
  "key37": "5NQj9CKEftKpWu53zoUh2cukD1GJcpBiP61TbisGb4X4rRstLzYTXR1emmQtrBVFmmVh4TZrrDg32kNz85sC1n4m",
  "key38": "2dskN4cEGViuo65UhiWR2DHE1i224cGEg9bz1ayVA2iMrRXLhZaGtCsRvzHkFMDvMmSTFDVzuJkzzEKMfM9ENQGd"
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
