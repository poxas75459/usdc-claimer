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
    "2vYUFsty2EnmoFHejsarLUaMLUHU17cZ8DZGXsKYA5LCz9xE6K9NsRYqsjL98BeBuHCQpJ4yHG2nBVaFFrYr1rH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T4oUFYfbBuQ4KoTCSaZTBza4ATULxp1kdhrdxRMqoMNe12JVGNcRYucT9aJD8PQMnfzeBzP8BMnULAeP51guqZj",
  "key1": "46rx6xAKrQn2r3kQtBE5Rq5dSUqcAAxS3KcDdh4ufPvoBb9bocVL5FE1YD7vpFXfwZBnzkDTm1bZ51BVj9eRmHSn",
  "key2": "4fFJBA8oAMRaFjd4G4kxHuVZJxG7pYnqxVW3tWqV2s2gY2LdpD5p9RRj9wTph7p15QHe3yKmdXDHtZQ1CXxyfp35",
  "key3": "64cWF5JYC3nWfRmGbkAEZPxAZSSeEXqLthkwfz1YAi3rwJaJf3q7mDdoZoNDnjfXWQ74CWe4CK1gK3r1ZgovdB4w",
  "key4": "2fXjMoMupfi9Ms36GfdNMikrCH6S1hKuVGZVgjF5nsUFHgbdVfAwvfpAWdNHg9azdeQ6p7kJ7uiWpS14pUHWWeEj",
  "key5": "2smqi7Pxd83xmV5jUDaWAPGTHrHfyti1RabdqduAH7uPTBRVURCgSjCuWrQk8xUp2AoS2cvL8iB7HSCTV693w9om",
  "key6": "zA8uedJtrsdGcnyXQU45gQ6eoLj8YViM4ezvgNR12vAvSzy5MxwV3pDL9MKngkkkrhUoby7QffjdQeWVQ9REifY",
  "key7": "559v9NYqnGGP1V3Gcn79Vf6mdBfA5psaJCozVEiybfs8PCJBf2qQrzHH9hupka5rFyrbbxj55wSmmsuh2iMC9fcs",
  "key8": "SfJvMbk6upR2KKY4zyCHKBvfKyr4Ni3jh6oQUuFZFHPh3aYGDXkc53CckrH6shEyXz6wkCjqAhaJUQ4BBniiEJJ",
  "key9": "3KmCwFxY49bvvjrxemK2BFJhDxJhFbfVKGTfXbx7FiSQJeHqRzURDEh3jnvPEutftYC5AYbt4HS6MG5WqDhRW8pz",
  "key10": "5EUzdz2a6VAGuearGcXA2UiD9bp4Tz42jfMqmiHg85nbDFH9TEwWWHRvNcZmJuzhXuFKxPcqSkcyPGiSrTibJGEk",
  "key11": "3AmfGn7AnBBPWsZVKRWPS24CuWmdKXeXkGdo9xU3h6p4zyoLQJvtjiSHJ4nRSj38yhvrwD5mt7Y755QXTxUmyQV2",
  "key12": "epjBop54vhiVXCik1y9k5fvoRiu6BiFfqhGJH2BsvpXACAfydTezE1L15ULQVyooBWpdxSGFT9nRA5JHE7if3s7",
  "key13": "pniFapoEYX6kb7GnkrUQQTDqwgb6wBkhbUGeqUXEynnMhmdzNDos8MJzABvUnJN2CtwzFHKY68kcRPo9nVMCDEw",
  "key14": "3UNdbJCYaQRTxNfbzdBBe5MJojEpnT98zEKr8sdEzR8FMMwW94sPPV17PwyxVGPuVecAKxZoHGUg2YhmcnVp1rxf",
  "key15": "2Nww8YtyvXYCrWpqvu72TLHPubSmrKpcRjE3os1UZJjxDKAq1FDYeP735bjWmRjJs73nnhzEPGXfogLhvY1gL8pm",
  "key16": "4KcGx57G6WRXHHQSDGAFGG5KrAjvLmpsZeQtUKaWidZuboT4LwPeDCtnUegQsFQDWgrSm7mwvuQ15sGJr77Y1jzg",
  "key17": "TQbiyaDGFBJo89YUWpWEk5BD9w6pwbvJgi6ZMdqELt6iz7Y5J2h36vX5u7aUP2DXUhwYYQx3VKpSXMGaM7C6QuX",
  "key18": "2ha7b56G6vZQzmKykS9snmJosX7CXfyyrb8qVugEMoWDGdPnVcirwWED4heP6u1qBhQ2tnuvy6F1Q19LcK6juqJa",
  "key19": "54KzqCxjV6ctV1TGmdpbTN6wConSEDBrHrVi2RVL6k3gkXnohDTj1CPiyyPXM6YYsnva4cci2719rZD1zGsX2Q9N",
  "key20": "5GhGFbTxwy8iJTSG7sndUxaJjkSeGKHcvvRuBfLd6zJhQooxV9kUz55RmwhVNjQPcByG1Dv52DvNfWFYYJBATe6v",
  "key21": "2SGftwQxPdXZk5uJqbatUo1uQAUnGSWYKFDfcAro2fEfsPqgJxFasiTpdc8xskD1EjjSsWxb42t6me6EBfAdjtDD",
  "key22": "6xCFzNrDhp4b9JpU7Pg1j55MTvMadCn1gGBVVSVhKqMyYLkTxHmirt7XvNmK5imoQGV5PhZyMu1jK9L9yKDNHdc",
  "key23": "Q33jcEoeUsiV48Qb5LFUYXjpAVC5A4Yc6AszXva9Kip9bh1n9LGNV4j3Lsnza5sj97Y2nJQNdkmYZ9HU9fMsA8Q",
  "key24": "4p1Kfcu7za5y1V52UPMQzn3iKwouaHhGHQRrFxnfyLBzd1tFXFPj8BEakLXh2UmripUADSPyizugNhvQZs8AGJDZ",
  "key25": "4bskY56RiyzSFUtXVkshjf1FZTjf21uBWNqsrHm1n3wpyYS5cEGG6cZisNCQ8F7NDSo1Cd2C2PZZ396gNrEuowT7",
  "key26": "eEfpukScGKW6YjCLkRMktVyk9AQe62F7LC3zceVjM8WM395qR6FuUKf9xX8QgU32vBRipaAMBR7zshgRuwMaZq6",
  "key27": "5iBTfFcHpCKz11ZP9RmWtCXqDsDbBpKjnhQvzWRHx4wUEQaReuBH6xdp9uXgbFtABK7j8v4MFzao9Wy1E3g9H8Hy",
  "key28": "5F98P2wsxExtJuHmtdRiLiL3smudTfN56nJx8wfMmfZqEuxuiJLR7psyg2rYQEZeZKvoa6MxEkU1sZtzHYHPLi8W",
  "key29": "2eBTUSufx2rQ3B4qjA7iDiq3XfTYhrb7jadHBjzBVcdSuHK1iU39R1QzwcJ4wJRZDwGHnpa42t4VprsbTFsXcKYF",
  "key30": "3ncwFkSp5UumHB6Tkt2mZCPjhMEdzBqehuXAfvgJP8CHsDzDbPHQNPQrhothUR9pPfndMS5zDwkynujUyUsdQBJe",
  "key31": "4CxXKHxGx8e9r84ZeawVGan5BA395a9iX6sdk5jJ92cZt1REy45D8d3kr1ch1PsXdjBeVYn4UMfAqFwDnaKewLYo",
  "key32": "4kWCLMu113hKqSmjxPq28Kfg1UUGMVWwFwfwXwSQrCNsG44rTxc4ZFV7SU7cvPK58JvuSqmihZ8Y8Qf727VNuKAE",
  "key33": "3JeL1NQgTasYzEm1q48SYJDC6NzYWrgVtmiFjfAcye4EbUskWjJrdA1T9m3oRy94bn2rXZ96ft9qjiGDNnnZSBd2",
  "key34": "XWguQiSBDVrdPCi5idFXKEE2nPw4B65gSUtN2uKGfHfBHNvWkswMF3Y3qw8obnbNg61MPPcjzXsV6hPj4WkmDqL",
  "key35": "59qT8Est4QPjenbDoFahQ6Xs4ejdtWqmuW9ugixYJwsZeJkD3MK7cwHxaCAoUBT1NFCWUDRG83J1cajGxeoUuXwm",
  "key36": "3JUHKwHgDBHYDGJi4CqXtPQFantPkrmZKMkJUnkQXN8gnzLfUiyq4ekcu89enZYGEQDzior9hh3V548fNLeEBiGZ",
  "key37": "63nzirCwxansrwkw9hcDjwt18MjGUm9TT8sppnnUXN3j4B4M3QowLJ277FJr6Q3KY82Ey8uo78WcBkgKRSq3MCwG",
  "key38": "3uLr25x5AYMBQqx7D8tRRZrQ2X2PJTJYjWjkW4mJjmS4DrUDayQdS5S4p5zqHku1ffHqUTyZo5ktezV7SRLqhxaN",
  "key39": "5unST9oJHRyebdBTzxWgm2RQFqcLwaMXtWo32vK6TZvkFvkc47uxZPwAFGGWaccK9TqoQyfUJLDArNofQy62PTgF",
  "key40": "JcWHPxC7KVbmoDjvr181o7w6A6kc9u8pu9n19GGdUo7RJrucxs74Rgejehf4faoXVnbAWNjCKxzmm2o2tvrkn4N",
  "key41": "5ZsT3HpQdP63nUzQ44jW4cCvHtVsLCzi4fjmEAzMBpmj445P88XcuhtMcYGKrLJYUXMfZjd46iAy1jM99mL1UVXy",
  "key42": "534pMPuPVd5D71fzzcgqFapMAH99BL1xKZPDZJDEGATcb5wNFY2u9G89mZA5keWtLZpe2mvKU3HZ5FfFb7qtfGYe",
  "key43": "5pzCvGcQvgJLcBNc4FBFVrm1NhKgo8fHDPCAr1esCNFgUPk6aABd48EMu8H54vwkEDmAhvjokYaeJfmvMGDQsbeK"
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
