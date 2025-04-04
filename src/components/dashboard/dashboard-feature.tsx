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
    "WmfgY3LCG7wiVfk4gBF15RcmdKRjT2NWb6TXikXPeLXcdWznNQqDbfYTmUucUzj4Q16hXLqAbEMKbYfeCzQZUNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5goFcfJXrRWng7AYmM8a6HbL5eESkmwcfipeQQPeAT15rhjfFrFD2TZaXjz4hiPKUfsX8jbAiYdewnKhEoUX9F2R",
  "key1": "v7CiWrbnQN8gUyqtXt8CgJPSnMhwQp9XpCXBJbz52MwrydzxGxQXtMUGGLKLKHgtxmzpBL585sWM1pDRtacfoz8",
  "key2": "62JvUSL25D2DC3AWtPVxyvDJzNhLrz9dLLNXCW5E15EqrxUEk1JjbP4S9L5BBbsmvD3SH2TADVwimXQupvS4DbEo",
  "key3": "2s31PuVC4bK3vKfZzi9a3kEsBECRN8Jyjw9aiam2azeJcrVhUzcYi4D9dFwcinmPrRVdBDjn8tdvu5i9D2VMes5G",
  "key4": "4RJfUVqEsyzoyGsWC4o8vF3psqGjtopeMLJjq7F1xaqyvVAmhN19PTohoKo4xBZMrjk4Xs6queeWZtfdE2hUWL17",
  "key5": "3ownZCp1mdPxLY3o7uZgDeQZ3Uis2Rid2DWGyZxmV5yg1LHuYYwBP1EcoiFVeHPCpEEdzZMiqSbJzeY83AybLNd1",
  "key6": "vpCUq4bHL3Hy9mFwWFTnVM4A4ZqAYUCfwqczSnsorgUHCdbMAH1HTmjkspAsf1nt9BSDmt2GvAwJt2u1jbDZ1K6",
  "key7": "W9bqkvax945UomdxvJikGZ8oonjDsgoC36MypBLNX4XeDtiV8gTcYpJ5LYSE9F6AwqrRPXdJj6zzEbpywDzRyp7",
  "key8": "5wgNdi89apJX1Wpr9bHwHDyByiCP88fBXARiEoATzhAKAoY4dzHMqFTKrudJg97oGXgrp4tfeAcxPDCZ7BNeViUm",
  "key9": "XNejo1LBUfqmYF3S2hUZaMsvVCxGy72P7rkJpDPe626usmBgJxyb6s4RycZFhPWqeB2yeMXRrgzUHn6Vhin3USr",
  "key10": "2iAmdyCZssNKVaAV5NT4kGbowrYw6QozN3JiuU5oRhvCd5MienL3pMrkxvEmZ1PPhDBPu34naS7GptsdnKfYvRFj",
  "key11": "5EKLstQkYxjvp6LBGdpyaL7uXCiQi6rwdrvtZNHcwZLz3yCD2mfEWbtBic1eF8wR3zKauWWs8WahJFJfFaHYZqfo",
  "key12": "3b7dXasW5HMj2jN3C5kU11Wp78ZD9sj2Y3Pyxwcfex8fzLbdyZ3LTXLt7dPLQ4HBqxfVzVBLmuXgE47mZepck4Tg",
  "key13": "4WxUNbKNYDWHr2JuHZzWc8W4UDADGCDuQv5Gz1UyQrSUF74hYS5rPARLM8c9Qu74thHUse6RyUGrW8jhXkYaC5fC",
  "key14": "Cc4N9f7c1KbQXZEfuvSh94Q2LtfEs1CWxsQW1mUetQnGrjBHkcHNkKoyYkco2vFgqnbigx8hA57A2XDebYL9KHR",
  "key15": "2ZEYtyDVHgSaRZeGdcUGPrTbN4kH8q3mZ2tu1ktNm2xqdvDWoedRBqXmcBKMDdttaR4tZQdyTgqYcrNkQvPFjdem",
  "key16": "1pCTTzpMv7GQCfqzVhXhGUfW3gCj191dBLKtiGphmpWKnFnozU4MRbaSRbQ7Twfhh8rjHuRZMfSj3HMwDHDJQZ9",
  "key17": "2LhXTYSWdpHxxCNKQV5XySkbwkEFi3Q5rTHQiqL6fx4TwZitaeuQAwwvBY24sLn6vUwfUpcL73myjhZnre6LULmP",
  "key18": "47EgnYUR9jzhCUGc56DyEq7MYZikEnSdWx9omHb6WyWXZ5mhtW5D55LhhMxSHqnADaxrJLCHafRFE4Zvoyy6wfrs",
  "key19": "4huWuYoGGG8bDdmaugQEqBK27YcMar675Ej5EhmTQRfw1e9ZpQKXvPj9nsjCymdZaeAw7CdTEVm6hs66RVC6Mies",
  "key20": "5YTByeN2T7X8n85BUKQphqty2hmF1KuwXLV6gxbMjZoWgsFVWk8hgS7ko3mgu6oaxCKdb4upSixfn3sk7DXgiRgA",
  "key21": "5mXiSC9PiwRFavfAwefaiVa5KUfdvVNyonYR6jZDSXKdff2sSKTtQCffYZpyXZw6qLg2zgsjyQbbCzLPvNoPzwBN",
  "key22": "2NcP9QN9skvmPDyEXLpPe7BQsj62bmnH1BrEWZu71UQgt919PMww8qhQkUz8d3VvwrN63BjxXydJ5HviqywRMyqb",
  "key23": "azLyrQu3jowtd9Qf4jRkQGMRsxxKpPrmUZ7QUXpuRBP6PfTeUQbAgnicRGc5yXjya3pXe8KZ22wsp4o6EXu6h1p",
  "key24": "67Mpjhtqw8hNh5iKpComvUWP4AthRTBN1hbdPQ517SmddVisnWYwiP4JimzcQ389AdPcsjqbNd8M8nQoijwo3qh",
  "key25": "5HwfQRos2BNzf2MWTT9WstuMEyLJRAoknbHEnHHZrYXnDcFdJyQPAfcADYQaFzK9a4Jvua2UvTdP85qzhbFchRLD",
  "key26": "45SGZAKisK5Pcvj36SRS1nBKfFqLCsKP9cJn19JktDSwaB2yntCe9h6ytYkJQqb9TbR8CaWamGaPMVJeTVggNEpS",
  "key27": "acUQ8ZuLF8NJobisCEeeDzxCHY9cT6e4SMamNZsbLSjWPGBbsh7ZG27tUVXbWg3g7pgABe4zhZ8dUhgRwEa7BEw",
  "key28": "3Dbg3HELNhfaHMdMTSmg9FPHZxbLY95JEqZaPZSt1R81nYz1wqscFVgXzH6mkwiNNQE1Cz398T9eD8suhzqQMCJb",
  "key29": "5EGgzBZEkhyudv4uAzu8R5kDJGY6v1u5ewQdPNvyMZabUSwc8pkPM6sm1v257fxKFfmxtWYcNkTo492VuVCuNwy6",
  "key30": "2NMjJuc6BWCfjyPZLaHT6NNRRxXXsB4fNzhRi7SkTpN15rTDcacgdk6TjvAzwD82iaYjWCiFML1oQrbwQc45GdT7",
  "key31": "4diPD8pqJPs3tWFzU7RFxT55xbg1NumaFEDzAQiicWwDfeNZeHahTxELxBpKV1s6L4PNo72Dix93LtA3dHJnLqYh",
  "key32": "5dEbY41GZ2wtgTjkkvYz4u4qcvEu2WVDGqxpsXbjmzrgNYntBhZsx9b6PnGYeGsjJWzo4AL6CL9nMxWEB2VYRQzo",
  "key33": "3bzk834ansR5nrdF88UG6ePac3KmhznfYpTufGatkomAhsEttY2J1bwiLgQG9Y4vXhE3RaAuGL88LBAXg7WZs96z",
  "key34": "4EcwWuTFU4S6eJb7ixPzFnwCFV7uh9Fi9j9GqrszT5vaiR6bd448be98MeH6TMhVzeAoq6b7U5ZkBdnM8CXCiyve",
  "key35": "6aViD4VHoWZ2VmWyQJT8VZvKcrPCaDpfdjHCikzcM9Tk5s9LqgLRHSKjqqsqSYPFUKSBcnGJ2pBDTLYw6pKnAvY",
  "key36": "5tyEARmekFaPM5Cx4WJfUF2RcUrDGmaGtgphfwtPJgdX3KSuA39VNdA66BWm5CxfY2YEWdrd7sCEnic8S8tZeimK",
  "key37": "2CYPw2cvMHcaGBXgMF8fdGxfKCKkvr7mdAoCSnDUNtuDe9pvBCLZ9DRNyQXA9Dz4AMJuVvUBr6KsKXn9hoxx4pzK",
  "key38": "4tPKBy3yRagroaYApCtkpK4AHMy6fuA2gsW3MN5rx2t8JKXqpV2TpbFLsRHdC1JbZyzC4TnRJXiWZmaGsHXEBhyP",
  "key39": "3WA49khgcVCsV12GH6nJphVUjg1VaAieTbJiCyKMSZ6czSt5GqVYfCobYHfTQwSDFHPZxjFAsC3RuKoSc6fgdADx",
  "key40": "5d3VokZNLqMZjej1atgCNwo9WR6bmBaZeVpyEYn94t4WUSPYmUd1V7GLwTM9Z38XEwxSyNF7AYA596wGNoYzHAC4",
  "key41": "28Ee6ppR9RPYHRB8ibQvPPZFyUXv4iyJ6e7hpueCe1AesecC3W8QLG5GfARW6SJ9M57aSURtCS6yFjt4dcUZFFXm",
  "key42": "4gT57g9Y6i964PfT5SFXQ49X5WspWpXMVAg5TaBULm5e5HfMAdHaw1LmdxwvUZrv6SDmkiqiX9kkbfZikMHyxaaQ",
  "key43": "4ixHjLQcYS3aR1iUreGUAdtFqPdqyvswf6usxfD6zYWc6SVncjRCVBcGtV38VXPB5Ujgfm8mMsrqWsw4rWhzDYny",
  "key44": "3KAUfWVRZzqGFNz7zr1bysLLmGEW2YeWAc1Ksf6oTTfMasnUSKRqk1CZLnkwFFRdPMkHN1dwBzZXgUXvtCkU5Kbe",
  "key45": "3XUfH3NeeZS7LJgPWb5zJQmw984CfsSgubTZDfA8puLdeA4TqBM2Kudw71JVwKaKSbozZqCnK8P3KJFjB8ya3qsp",
  "key46": "FKwqGLg6gUbQaJWKhCQRGKT2pPL9rxKfCDBp1RzRoinaqquRPVR5hEetpsTVMgbGZiRsi2MY7SAw8yfkpvDiY8P",
  "key47": "3bReVaHbUkderyK3LQ4ZNjATeckB6vLL79FgTMwS5FwHguR6ebys4eFYeQWFwNXNtZKuGGcqQMKTbVAm7xsquDDd"
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
