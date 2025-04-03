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
    "4fDPiPv6PiwQwU5C2zytYaBydJGaa3wvyLY2y7xk4rad3JFxDHPgfphvX2xqpBgxXLaK7WLrimLNvGxE9DpWeJwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tNBj8MZRRBEmzovKqhGvbHa3CSbCL1aHctdQ8e7Hej7BoXLhnTZc5UQ4p4z1EChu4iGfXcmQugYCZzQzhznB32T",
  "key1": "2xa5DGmWM2sjgVcR4TZ6n15dJoT5x2RgYN5ugxankTTVLGWRQpgbRD1MAEWqf9Jg7fCMj3H2HYF8imy787pYRgii",
  "key2": "2y4LZdVrNE4axc89bdRaPWMtND7bVqNUDLEECnqzXgUaFPdxn4knq1yQgbfzKX8SRZMgsVZMX898CKmWvh9hikGt",
  "key3": "fi7dhUqFNiKMNEd4Pmz2YgZtDBqkEufzXYd4MoZZYbZjXe7QhySxHbVMQKximEP9eaE4V8fAwkYikqwKwcRdSvH",
  "key4": "jYxDJj4rzZSojb2MWcWn11y2Po9Z8EDATbQ9hpFwEdvEuWo184aNi2S2ZbUnvufVSDpJz7N4YvQg68zeMUSNCTC",
  "key5": "37vaVWH1QbQFiqcABfNtxfJWsCbQ6zd8hSGbnn83Rh1XHbpEQdTkp9Z9PNgjJxEAxgMs4L1cKv7j5XC8cAp7jiwU",
  "key6": "3mMQBZzXQdYcpkdWZ5G5rnyRPh37xLkJrJNpDsmfSqaNukjvH3EtyZCMp56Qop5G1mP2AZvoUhEAP7njg3iEY3cL",
  "key7": "4BNnGn2NxsFJrE2m8r9gonC2hLt1X9SDK2DcvVnebohk9oswUfXqhxsCvtGwqonA2JH9XDRv7Ax5Hg8vPcSZdfpm",
  "key8": "5rmZ3fkpr2PsBLn87BePFkZm5uJYfoJG26KJeQTUiqUEkTDc7V6c1q9avNRi5PzxYxVdBsR3yDLtGXgoMVDpGVqm",
  "key9": "3UMZdtZn9pVvicQ1oKws2qZpLTk6AE1z79kX48AJTaqYEbtGVRmD58PNhBGtM8oufrserm8L6Ej95J5bJaSUfwtr",
  "key10": "4kXnvzsB1j34pyovj7uwjNea4rJshRondZTTjbFFeUYYk9bFfjipGEheQ8orVX2fppfDb9HnV8w6qTFdsdGkFyPE",
  "key11": "4MW85v2LCkuXZENvQZkbZUX1kUA3EsT8jEZcX59D33gtX9ZZmRpFdhb1hNZ7pMjxebr1eT3pKxb9TUQzAVjKuSxg",
  "key12": "3jUxCYDnFk8urnKyVSeMXCD5XHGYQSWuXUdGd52uox4dgM4RZ7kSdaWndh9854VAXUUdSo7tUJStMM3YWenJWyMH",
  "key13": "2cEcZFzJ9E3Dwvwf5KJanon1s8apAZL7gSQfWJXmTMFtiEUDsuj78UympwJG5BnvDjRL2P3yaanxfQZArU8KoPQz",
  "key14": "9uqC5rK3VZg34tXCQjXns8HAyppKvZiyB7dnwZGkdK6SJ68YNK1R8PFfwcJN38FUMBTzbugbXep9QDbYMgxpcq9",
  "key15": "48EdxjkHR43ULycvWaBQZFc2yL7Ne6VwUBkNgJVrNwNKiT2SCrSLQi3JzYo1Q7BABJjunJW3FRhBPgRFSbnZTPFR",
  "key16": "eT29VnHTohNt3XDbjZgWBXcoT43LVqTnUy4yBzZmd74PscqpjipNDkv7JNvorKPMxPfghdPyRGQ6t8g2eeYwNsL",
  "key17": "5sZhhFG7ptop3vdZxE9E8xwZaN5r2hAXCyijvXeC8tmxTqDBoMYQGXhcrjyW3DBfY6Fk4SYhGxDCUU9hdSt3dhcd",
  "key18": "3AvKkBBFWA94C1jqJzPBZEtL7Q8mZBBPQLo13tcuFmZE2337NvhAkerTXWVojKC1vHbuLrGjmJTD3NvusJwmMP9a",
  "key19": "652TterGwijpdNj4bYHCo8WWyXH9DjK2ePqZ29TJSbr2cAJqKCqChgBE5h4xEnHpzvdWPkVcFbSCKxsRgCSEUFYp",
  "key20": "56F1tGuXoqF566LzbrDLmRgbzirGEvR76u7FASFqMronjf75khmbkL5QxCkrrr23BkFXLm2o3BA1Uba82Fg9La47",
  "key21": "VLK3F7bR9xVqmWPXRgmuqHPRwQpneWXvy9pjQkmb75qxm1iCUWCMAXLD5gPp2VaXMbZJxE2xFSuQYPCgqEpjwFC",
  "key22": "u4MiN1ZNVww86uaDx1U3bKcvNJ7EyXpvUCxEnYs29ryhPUpAaWMgrWem6JduLmucCEZUxA1ibYC4HX7dKQPE4VB",
  "key23": "4RLLJzNg6p8htHutPH6GRfPfRvmw2XRY26pYQr6Xs1mobRMshsqMuLBVCDmdUy2Fzq22KiNwYDPfJjqSYWn3vo4p",
  "key24": "4M3b1A3ZFrsNBATMc9r9ZtnRVyhnoqX35qCjBnFYCiTtb3WHTQXMY5S5tWeTcoeDpLhzv4caqjvLJMU67BhNHKBy",
  "key25": "4skuAtR9DWwgc17xKWFBuNwExUYb5NfD7F6ZjhmrsRddB1bDSywn8wMNFNRsSo9hMmzZTzXN4yet4jiPxTDWGCG9",
  "key26": "2dkaXGDyf8E7iWN54Pi9PHKLqbA3JW3xoDYEukCaijJsYZcMzrJF627P5U5SdjqJYAMVKdp1BF7FhwTp2556rAEP",
  "key27": "4TxFRmdvheLZKw4hzDRn4sjeMFrQdxWSdX6xsUDCfpbGUdd8NchULR5E3Zfy4ewGjjJiXncvLEi2m3Fcoda391fw",
  "key28": "3r5tDYGSDB6F5m3Xz8z1dUWGo3cjPv3CbVUyZhvCnd22L8uTqXckfnDrgrauUZVQvnHEaELG3LkdDthudjp1tGj4",
  "key29": "29TmzuFbm7GB4RqF3ZYMwVSNhynYoq44ZE7PuWE7AX3Y4eYLGVjSaaaYvZnauXqJdqznJgPwQqcMzJVU47jMYoTE",
  "key30": "3TjW7exFmcMMnd3rYQ5qVW6KCKqTQjKNX9p2eGezcVdu5hBZQZn2pvScS28HqP6XHaYY2grFxdQ57CNhEcULypzX",
  "key31": "4RDYa1qL5h6xo3p2U8u1RGK6VvwYTuXayQKG1YWtb1db5cPwvM3ecvkY6snnWxLjfXmsEfEMqrqHoXJ7KX5JpxhJ",
  "key32": "2wmX3RW1ViPNoxRYq62WwRpQcFaMJ1Lr6Xs5YNpQK836YsYeqnZtAHEqBKdfXM8WsHXCm81AayMPYo4hCKGqBSvN",
  "key33": "5G9pLYcd7jqKQLYSYo7C4LxoeP1bWoyHHkm92MgR4XfkRMzAGP35x1GfKF5JDVnaPgh1tdijt3qP6QeEiu1LA2TE",
  "key34": "5kanrdzGcA1iFaAC99Ne7zfRRS4ZcHRGnVZrJxmYjh7Re2u8vgPKQdSn2gP3WDeVshdhsMCRyD42F2w8Cj5Ac9LQ",
  "key35": "EQRwRobSQTp1JwtHtSVNTAT3n8bPngx5KFoWKqxfExvEYegYuKc8crDQ9K1aZG2asWF8Jc7ANWBkLCrbJk1cA9H",
  "key36": "5acX59HSyLgSqvZ8RLbD2dB1sEz8sghKiapyLE2qm3sD2zqh2aySNU3EKW9xSKhGrfgyQTahfWGauczuD6X5fk2i",
  "key37": "33BNRdH7qj8mag8ihtsdXc9ZY5moggbHqbW7r9Nu78DQpGezgfudiYKPXoGTqnzJ2SMi5hZAkfQhNL8ZeqiDAJjm",
  "key38": "2GPvDn59cQfMFcnyA9wKFNnAj95UJ74c3xCrapcZqxa9VLTERDCDebQ36vqWzhFnisXXvXbbwtxsBiWDQ7N4cQze",
  "key39": "5RB9xvifTnnAH9vRDbo9kadLVWiGs6MMc7Yvy1yHSMgZZroMXCvSxhSSbztHwnw2zE88sfUam4MuTEYnEw2Bdwqp",
  "key40": "2GNN5z4UmUK9rM8y5LhpUD2f7FxktfDBpErsJsk9K9MMJAfUnXhFEMy3UvUdSnQpUCTvLjToZD8LptwfxS2Nfa1W",
  "key41": "Q746RTHFtWKsVGh3LDm8MX8ABmRzNodxxLAUQ18fTAEHp2h5AbdCc6BXcHnbJ5uS4LU2x77h2Ac6JSo5BiZGZtc",
  "key42": "3ZdEhkfzGZcR9rTobuhzujNRGbh2NcuuqsRFQHWpBNjoHz9beEGBfjkP2k4ZwW4jrNFPWBJvuXWnaJPZTQ1uM99s",
  "key43": "2QA8MrmqUcf4wi1VKohbkiWvoWfav8ojvJe5U8CgvLmXDjNjzksh2BLsnZDwfh1MU8VVN1kQFKq6Ztao7bQiNDcr",
  "key44": "2qNVF4CfFkTRx6bZ3xEyLEgbA4y8EqSb7cqL4YSFbb3v1194zg3BqnhXgCJMGRU8nBuickaWmExESRu3xPkJGL88",
  "key45": "4iiJXyWAYARoVdzA2qR7rQQdQaFKoZgrNiiutAJQZPaxArKWarjnSBQhrwA4zUzLnACYNt3BqcMexq6ewiobq4QG",
  "key46": "4ioKzJroFmnohKi7gv2ZwoWHXxrcwJUYAdKVuK1uRkg3s1CQevC2LiDqRTndndu3aADhcmeiPVHGBSM5tG6JZwpA",
  "key47": "xmxfMVJaVA2nZvvyUQgtLhf3HUAUd7tnr3zgSQFKw6qfj2QDLbX968MkYhVuTG3X4ot7UxJexGgSjtGW3fvvR6M",
  "key48": "jMmAjypEhyPL2u25dZFmLSAqRLjguhGreDykHGSt3UXACcdzKUERvvgBvZovfPptXkyBoLHcRbhKSwigoLXiymL",
  "key49": "2Yi8CHk95dPzgnVo7j1iyfHh6pmZqK8Pt7iepKSnD6rV7WQ4Ke3jY9557dDTZbjuPwHFpgXA3tMruKdMbMT1Jee5"
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
