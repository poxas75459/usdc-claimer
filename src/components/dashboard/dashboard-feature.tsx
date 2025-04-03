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
    "4EdGNBcmKeauomdypwqpbSH1ZssXuXaEkRmg9VxVo6C6x2JFqVmHAeZGBF47LL1zXBP52jHfHi9k1Wb3qHjMUULu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4etstWDvP82mP3CKVgDNFVwBzUL4mbGb4eE3v85tiorDLvhrZXCapeezBQZJ99hSPuKpSTjd8Gqa5Bx2ywW3UPUG",
  "key1": "2gvFXXu3Jccf3XThgQLB5RKiq6ofhUFTWE9pTZUkmNkKrkN9CGdLarHCePZck8LHFfmwW12ftm71H6hi3kgUxorX",
  "key2": "4oaZj16beVnvqxo8uKokUDee9Nq5G49tDomihfXRW1iu6xzckwDVthSiFgvEidoxMzGAYWB3Lt4XNuhAzgGkdsXQ",
  "key3": "4EmWiNhJHtYtxyQe2hWtmYAfxAmUJLGR911v9hvjrz99MUDiWtxLgoFM5Va2vMMReH3UTJDCnv7hUjun6HKvYiek",
  "key4": "3cPokJ6D4uKfo8ZPmuWFQv9tyAtJFQx45fz6KjAtq4Z34uuDxbCpiheDCNFYjmp23ZEAPFsnsx4kiyDXe9HnFHU",
  "key5": "5GL8u8HSnhnMnFCi4pQTRtsBuGyWD9X9T3ApVMt6D5iih2xPfr4kbPu9eQbpqiLDWjDQafmePQphuR3Ho6R6sc3C",
  "key6": "4a1tgNw19vWgHr3v9bisdj4WAYdVX412nHe33fN3UjouCnAtqTTBfLVGCzTWPPLCLF7nsddyTqDU7vdLLvAVc7KD",
  "key7": "3xRrF7BqJoq9ok4w744aNpfcBBV1CFf87pGg4Q8nT3Saww2MzRhTbvUSsT8dGZM4ETr18APY2qSQiTEsjZ9QCYaL",
  "key8": "2d8Bhn5LkCsNEy1Tarq7r5cTxoKmvEbXfdRVobcKh7iLEo4oiW22T7z5pAg1CeSMDoaty4XgSqGApb1tkDd3NcQU",
  "key9": "4Ba2hsVTwdZVJPjfityTpN5ih1Qt3TuuqDLPSQdqye286Zn75FZMmmygEvRbX2SprKZ75M6W9nqZjJaLzeE62GiY",
  "key10": "2Ass46muKrUJiVpJYJCHUccwDcSLrqeSXA3MqozEVRAeML2RNW3FMJyvT4QGG82jGh7dmPmhFbvnQPjoeY8uyi5i",
  "key11": "4M7yYvWznpWDNivMDxeqkXZzTcMjioKErJXcxYZRVDFDsZ7PAP5KHKK7m3xHk7FMXUxxcECQX8tbrpvbAvW28ykL",
  "key12": "4M4LrNHNMocW5BXvNzrDaP1BRB6xziJCedMhzbLBtMGDqk2NCNzi6eN6nNfi7xoCS8PCrDAXRjbi4UCpDegvAHHp",
  "key13": "31g7t7kdiJe9kEjwzxL4eHw5ZQfAmTeJT35V2pTrXYwxVNYumTMo73kVgLZCJnx8ZqAwZkm2sUyczvmz1XHFymie",
  "key14": "5QDHY1eNV7Vo6gHdaxj8XkQx9VfgVW8dKrKykYFX4pYREj9ZqLutnKrHuXGZFRsy9hAHcPxLtfqWerDB7KEzpGsu",
  "key15": "5XAFHascL3g1RrddXKNyT8GJ6dbdHJoMnCMX1GJCpXpht8pku2NWvKkg7Bd8rV9VsPxEJD3bMcwNT1rhKAxwFh94",
  "key16": "BoyoJ7LDef77gXvttUWqbembi4YKgp4q7FhU49c2aiTiYacbs3H4TwoohmUXUnCw5TjbDJr9ZqJuxgVn2Do6SsS",
  "key17": "2VF7oWKLpAWZtrPa8XGiTmtEQWGG8Go3WbxFfpzbejrV8uheS5ohtuxG8Cgtvc13odp8kkGChcAjkZnRda4JCdXs",
  "key18": "EUYxSECeKvTS85Rzm1qh2VMCnq2Y5HRjbf26UVuUAAakUN18trmwXTKM3atfWbiVLipJg7W4EZHWkHqDn8xWXnz",
  "key19": "2HRoee1i9XzuY474K5Asd5Ue4m8diV2pUHPxERoSpbwcT8A2GK1Ho8epDcxLhj5EsEMipp4XR4cbxrQQJg4ciByC",
  "key20": "63oz8hAXttmiYCVRh3B5Q2yaAGjpepdDhxFMLGnfNADFhK1Tj4dk6DHCHMNMmYm3eyyzrLTvrFFTzdt5a9VKazMz",
  "key21": "2DxYWqNhuCyhbfQKfF9MJJYHhww2qHrLyN9ZcxvN2d115rzERNxPpd6kduZkaK4wcu3oDNEmU2nP73XH1vTD8iZq",
  "key22": "4DpWuDKDC6S3KL5DmYGwHZ3SPFoyvaBS8fynSWBjbdYNUQYZmgSPbTgGosqmjoe1bQQ6nYXgKNtLKfxqb89UPjPh",
  "key23": "2e9RbMCbfxzu34CsGQMfN1oDeDjDqBoCzcHsapvtqg4fyk5XdAtnqHn13xucmhFYqCPfGZ2JayQeeMSDw8WwZBPt",
  "key24": "2H3MYJVJi2J9VHyr2DoqyTTWZMj9BZ9e95eDooJwGotA4ahHDaDZFKREtTRB9zq8yi8dp7oYtPrsGXLyQCegJhf2",
  "key25": "4yLBw6BVuwQ22EXcT3LQXAY7e4GRsP41QsKyrTSs69aBJcRctdkYSz15br5TFy5ispu9ooDvhTc2uxWwkWKeL7Cv",
  "key26": "2zYQTW5r7jv2i7DUqfmK6jXgPHmZM5rXwDgsjPRwvaB4qgmn7a9RLqEmWTGsP5LVpmUaXmFr94Ccrgf9Sn3c4t8d",
  "key27": "XaurhxBuBNREGor2SAz4xgdfi47guc8Nw344DdU7yXz3KEN3gScTrWMSQ7NsCkPY8tfy8jRpCrV7ysHsPYxemgh",
  "key28": "4J9JRVMGKcbuojZ96xEQaiDehYZV75vaEf98tGfckrt2esb14UE9nJfL7E8ow5FxBcEwW6VzHXndRsQA6yCbdizT",
  "key29": "kcHAXG8UXupuAEYqkS79WjZornQXUhzhUchcAN7JrDuxX12Dm3kVdrj2vsPaaUgYr9w4rHfbMLZS1jrX3fzdhjQ",
  "key30": "2pidHH61CXgQ5MwpUJTeRj1gBzVXfAC3PYf2atPpQuJU6APTxqB5B4BsvWBEDXQARj6N1rZX9kc12hcTxndCDZdS",
  "key31": "3X2hjZRxHQwsFH8UKfCUYQdq17HrmxdrrGtkXxemkoZ6VdivCq7vyA8poEU5Yp2WozwX38nS6QtVJHdCR296dkSa",
  "key32": "5wjmRp29vPUEtQY1Jx356WnHZwa3kBFZvuuraunhBpnPuYYCF2obJxHNYRnUcNAVQ2C3JyEad8R8GHd92jf99RsF",
  "key33": "34vfd3cGPz6ZEDhq166DArxzrAN6Wn7kkenmJ4s75pS8dZ3rMoQ2q99xvH6m9amfyXutzyGGskJBPxVXvqUCTGYV",
  "key34": "4BQ4xME3tMpX1FBgMXfqk5KFwhqi1W5gj1mqTyJZmjTkjy1vHN3N4xhxXmicjRJZ8itBNNDd9EWiawxzyMwsQzQS",
  "key35": "3yMiE6cgeTNmKo2qK1RSEP2ygqiraXDXSYRhhUdF6GDppEdqr3ALAcGU8q7d435me8KhNd5ghWu9pbW6m5S11tx6",
  "key36": "261J1bs7EDXeqPpgXE7fDtagZqxgfB5Kdvcdkn2Mq9BXuCZ9L88SxteAn43xrkf8cPxtdQohfKjRXR3de3WYa4NP",
  "key37": "3kfXDt6NAThnxfWy7VmCz6Yn57sewHggw2ywUdEFTAbdEBZgph7bSe4aSSC9aoJAfeRNmdDpnucYUw5xXqot6vyx",
  "key38": "41XyEyq3XofVaYRt5BaqaAQ1hEkHWGueiC4hVNciXQsoKrcZXVY3831Z9XsXrVAEkUienpfRHWwUt8Cy4FgH1qGt",
  "key39": "4cZdCZFh7bt4phRTtm8ipLNaBQ1zXM8qPEDTK6tzAzKbqB2LUBKWsb6792nskrie2KET5vgSpBjm9ci5eRWGVwgU",
  "key40": "5wV86cX7H6nouTxyLwajcFd4yb2ChbVLDsw66g3JWaLLz7DtZsp1mXXB8hGBZzTh5q1ghychDL3FgJpwzudS3Sxs",
  "key41": "2wRfcikdHyDSC8wf5CMKJsL6Ho41zgvSGmgUmKBuJFY4y34UdyQUwvW5vFeRqfqiTRTNKS4bhcJ5Yf8VSbZ3BgbX",
  "key42": "2BKonX89gtooomvDNdmUDTZjvhKANFF5ECcqPU35r5JALWLfAgGG3h5d2S1C4UHBZx3wbc2YAKyKG1xUzRvSPbqR",
  "key43": "3jpbb6oTVHbLe73LnuCYXZcwkbQ7HmMTaBPsttgzYMFfG8UHZdQP6LvxUfDGw6CdHzXgUVinucKKtqENVcfkRXs3"
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
