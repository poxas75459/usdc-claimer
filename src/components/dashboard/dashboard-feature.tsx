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
    "5GDsbcPBCUKZSNN4fEfbyHfGEe6a6RquNq1hirjgzQDcsdbbMtQnPbed8EgqvrMopG12cwbDVcEvPea4VDQtouCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vjhYDcGFWCqT23EtRuqcmbqHbK98SmvdzhfgpvzLLoGRg7Drbm9ea7TFff4wPtDiUwW4fWfGRbNwp4GLvqW4Hx5",
  "key1": "2bm3dYQXa9M3kL78b92sbzoua1D3qmi5TGHgWzvWS5jx44Jk2zRQB5L5LegVj8kSjq1XHiq63vHa6MF54qkY8Qra",
  "key2": "4ziWZvGf2or8oVdiMhY6bUZNLG1ftnGhLFRz6HdBSns7MgmoCbfb4e8MLbLYWRzSNNCLTk67EWwwCxeS6K73AcEJ",
  "key3": "2GepoTPs3pvrBQ4QBX4jB7nju1T9qPsdVW8TJAnUxNjzWgAUiHJ6PbQTeLPk4Zv8o7TZ1nhVCgD3HuZasJVDWn7d",
  "key4": "26siN6a56tiHdMhjHJ1KPmYtgADE9sbjp3ifX8Nh9rSN9UcBp5BiB4ysymnLQhMcmTpRuSV8WV9nqvtd7Bt8UqUB",
  "key5": "3RNijXNJ32zRrtAaQVGVj3isKEo5J3yRKTjQRKnZDzEwfW3KZfi9T6uV6PswphQQ55YBs3U5RMF7dbsDSFbgH3zG",
  "key6": "4uTP6bqKxcybNURrikqqZqZwwwxThXnPyJYPv5xfsWggg9AYc2dCpZHNfMi1AavyXWXfChFYhJRQg4Cw4u7nwafz",
  "key7": "64mVVie4NJrRXtKBGXaYcH5oQQJrAYFnT4M5DXbdrM1KgVcmSTvLEpXdtnHBvZd7tHmCdjCHzAtP4TVQxF8qidR2",
  "key8": "26yQjbD3QybV7Q2PEDzQ8LR7hSpmFCae6PqHNnpkFY8W8JDC4ckjbHCzHXXdyhUzJbEzFHLcuejCBotL1uJj7DDU",
  "key9": "5hQBcwRxAeer1uGuGsDYtnCZAR9uqN41fmd36Bi6hY5REnQEg4cynFw867a4FecnCUUA6RiEgfEdX9r39urwAoDX",
  "key10": "5biAyL8rUak6hg3J7tnm5Ua71SuJqQSVJYvZmZwk1uPSu4h8cbvB9EkMoyMJzy33Mn9xjM3DeUzshTzcJiY1dxAd",
  "key11": "zXBzty8WMpmzSdsqxBPXR6Pd63Z3gGL1BKHM1kfZz9DYTKvt1PSzmacz3NRQRGrFrBCKcnJFrkV3h8fuyyS8iGV",
  "key12": "59MwPmiyJrNfKanswxJxGgmreVFu14AkaYkr2BHEdwpxGewUgccaJpftn1bKNU5EQxiHfR7qssY825Z7QAhYkZEj",
  "key13": "4Wd3dPuXyA7D4e84DmqGt7cNgx9bwNr4CRcsEejtvQMEtSEsw3tJzwjcSKD2hhnbZY9DKioSsZMVPJbHHG1hLnSY",
  "key14": "25Jkn3XjBC582KAkoLF5FuMkXrqr5CqsByRFhZ9oCeA2ov62BFhUNm3Rg9LiDtwaKCgAtzpWAtC1vCW1g7YmdbeE",
  "key15": "4YcBcYhrw1tMepimacuG7m2h7PsLmNgCbeVzs7s6AA3qWLZ5tMmEvatdv2fBtzcz984QWqBE69CAmvbFueq9AEvT",
  "key16": "61WQ5ibV38EhMpKa7QyUVXun26gVijPoANtUHHXKUEqbJmwjBmwdWJdUzW2FM2MYurDbXnJMyatJ8qr3DsgNRxBG",
  "key17": "3GgpMfWekPuK7EXL8or1cjprcpABbDuwPRPevU8bg2G61dcNVD6WH19P2gteTRbKoc1j6AgPMnNVkG7SLu2MDn18",
  "key18": "27RtKrWiNCn6gsdrSi8qWdY6XDr8rXKqi9onSDK6DXSehqpdN8p3guSx5SfSoWyRtvNRyDqmPbnaipnwtqBRD6gb",
  "key19": "3w9jHHWNS6q1phsJdVHdzqGL4RZHecx9QUCXqYTm21UDFQw3SKy5Tew6pE8kReUDEnYtuHkxYgrp1V6GeF6pJcXn",
  "key20": "3XCC28Dex8CEGd6NNbnF74VUDdRQyfF3FjsC8jTGZHsZoNC3vniRWNxamsmJ1gDKH2kGvb9Twv4RLcPgJcSYc32P",
  "key21": "2M7QkGP9xBfKkDAbXDW6dvvGiL1kdBCJwRXbHjqmxLgVx1FYF5mDJVTtVmNmV49c8yWY5rZCuJA298vqEr5tsQpb",
  "key22": "4GEqmsDrgvWUedGdMKRBhFybqbZUEPcijEysD4MwMRcTvXfeowTD7MhnAvV94kv7fC4BEWqWRwHwkJ2bzHYjnibi",
  "key23": "4brtZFxnNvpsWVDjQTRM4VsinnzR1oW98CUfD12Qw9UQoo49ZasRQAigJDPmeobD8UWc5gqUfMmmPGFFWMiRZ9Fd",
  "key24": "2bN6CiuYZsvQ2QQSmuYSYeZ5aJe7Co2q3iiSotvzGsK2erJKawQBFf3UiWrHksrW3q6s6pMyv8m8t55Tqyns8CMf",
  "key25": "46i2ZeoJEEVHqkCJqNyEsrSRufajjHiNVB1tsTBaNg3QV6GnLYfazWwoDDBcMZfSrwjD6Yoa4zzYLUHg3cujxC27",
  "key26": "1TijQ3hsuVUkQBAmA7LbC2BgPLSsX3WtBYiuJGWqxooes5MWCZfTrmExGGKn8HK6Q66DBjQHsBSfRK8Y9a9VoSJ",
  "key27": "2V8NdKuiWdS7FmQo7Bycb5jnv97gXkU7SBApjfxXm7Fioyj67XuRaZtCWbdW55rrfwS9WkFHhQL5ey9jeicsrCzD",
  "key28": "2z5qqDNcbFRYPobgwQUgpqcBiPx7qULpn4ZcASLBZg91f4zLuQ9J3FrEMPcuqtc5nd9uWXmf2AqbR68WpGdJbow4",
  "key29": "3zqunSL4mxxu8oEiQ9AKoqdTtWBV9jRkPzDH9tfnTKsLMHrJKso9dmgSSChxeCPGAFSDqjBrSBZPxSyqkD3oibU8",
  "key30": "3qVBBBci7rPEsLkNTjeit7CCeRKS5QCtafi4rfvxaDoYc8ksGzi1YdMQGCkSYx5uojM8qpvZD3FWsEfg47DEDzSY",
  "key31": "2UYor5b1YftWNSbPm8SCdBMM3Wj15m8Y8FcMLEitucnTwjKCrkMxsBM5WsDvZN8y7JtQszmq9ZiWV4eL98VcwFSe",
  "key32": "2E2JS55rMEdLXfm8b6qsH7UD9ePDXopaxxJ4g1XvPdTKQzjSb47CDgLLFyP3FdNSvWLpfhU8TTweT4gSKimmgwA4",
  "key33": "3uDks1jiJP43TiVwB6e1kWBrMHvNf76prnLDfiaTyLesKrziCHyFBnNZfpkC2o21inxXS3fLzEeLimknCaZawCqV",
  "key34": "3UaLPEiMzy4a1eGQEqDQSQpgmieKU1Yng7jUTvqmJjxVqBJ3aoZ3vdNZacu8z4YxiYNrgocWm1grtAqS8Wv5mmZS",
  "key35": "5VHNwpgQqeLEVm2qeB8fyNwYUAyWWoCMmUsCMFY824i97NuE5PprEghA4SahhAMxYRjNAKwcqk2weiNDbx2AYq9F",
  "key36": "5Js82BuvN2eCD4GtWNWg9tc8xcqYDN75LVPnwu3rx11rK3fWG6TevxSDj1VWMNzAw8J1Rgxnvf8svFfjXx5N31AS",
  "key37": "55MgXSesUmRYxD5mhfD2yXKjYjfKbfKUov4pSDuU47SxKzX3nwtH7U1ioTQzjZWrs1AirSEycW5EdksgtEWr15qx",
  "key38": "55WGVDu18epwzg9MUFPtDmV5tag4U5KD47r1HcVtMX8ugAC1P2WoWsut2z7zjeVdEkLndkgHuABXrqWrppvcNQ6o",
  "key39": "2Pu6grFtC8ts2JNn5FowUew69hh4MPYKUUuZ4oNymMr1xyAcNgNRL8wANnABmZBXcRsesduF35oTSBkAq5XKAXhR",
  "key40": "2Q1gVe9NvZPSsupdKrvxxRjh6RXtYAnCoExQzqx5KNXHPTJ5BxxJyj8C1MSQi5kYi4gHSXuWMoaxsjVZH71zw8sC",
  "key41": "2hWyKcyUdsTfN7vHKGcztR9o78voQapnPDHdTcnwFrsKWauq4vwfZJ2awg1kUoPLy2kezdsztq55tmeK2HdDFA8m",
  "key42": "idHtRpBN3GRRjoSWsfEBxwpi9gCM7FctNpUzzKL4i7xAqJaizTR9Qr68pkzPpZ9zEunXPVhke4hbMWE5ppsHC7k",
  "key43": "MVx84bm4uopL6kU5Bpx5n25mQdjyMefDbs6yaH49Afq3Jk2RiALJsQWaGivdHYZzx8tFf7cHvJN8nNQNJaLunD1",
  "key44": "67Dc73CLJD7PdSHoAAFDWYLgAVdC9gKVwmZtgmhRQ4ae4Gu92TNRLCr7AThunetaHWK166zUoZcj7tLoERRyDwQc",
  "key45": "2oBhPJEnFsi4eQunLba6vXjSbYVmcdngVQnN1m8HfQMAWCG1CNJ7cjz1o4v1DvWBEKC5jJAw7ewvWTrR62fZMsFd",
  "key46": "2f5MpBZf3UXZjbbHLUXBDQinzeEHAfsHeaqWFmP8dxnW1n4gjr5h54r13u9dvutQNRfrYAkjSyXMWbz1oWM2ZkRG",
  "key47": "TtoVR9v8zgVP8jyg8xQSt8GSo12SM9sSMf9paRRsPRmyv63eDRkA5H9k5438AFUGfYmpFReqpEXEir5v65AbP8m",
  "key48": "3xYu4ymQUHJ5n1vrNDpbwjhi6iVx8gifXcHHsJNDYtibRPo48Bjkf93Mkt1CsgM1cLoLxbcr7mRQBwjy11tmXWJe"
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
