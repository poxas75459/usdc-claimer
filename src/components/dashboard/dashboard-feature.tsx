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
    "Kd7BNHiHyPKvwKwepy5jkYK3hsj6jd5mdLCwfc4xsyh1PuTmo74FfqWtisKvcBc5MM2A7d1r3tWZdpRvPLbFSkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ydPYcrZrr2u5iWkGhhJ6ZK6ms2QXpwxLjt58YXExZEdG2oRiGrLz7AJ4UTgTTLqU4PE77aaZo7VVrqMDhrBxchx",
  "key1": "n9YwbV7mLDxDKKZBrkgWK52GSM8Qc6RBEm7bz4seWGFW5RE1kGZH4ADrashfpv6FqrGPVbxD79rFcHEWgyT4Rbf",
  "key2": "2UbVWLtEoFYWW6Qbft4MTp5Ux24CWpYctCd4JFc9sYmmtCUvW5qk1T2uzMeC95s8p2FGtugaL3KafdxyufAiJu7F",
  "key3": "381oG6AfMjusvSkhtQzg4wjE5DpVFcBhWyxBsRM1jpbXHs6n6ogM4MpBDeYEivNH8sntJZWZq2HwywQ166G4SWWn",
  "key4": "3R9sNXzjLcHswJPUpN6LeKmmoLyqGDNYuBFoU2u1ND7UgGBS1WmXxQxaeWQBtwruyLFLPqn53orWeKdndNgqnNxa",
  "key5": "5KMCcY9BhwVP996Lon9Sw3wFEcJWE3cvUpky8qob59hVnF6EX4FJbz7QdUwmtt7TAZHL7dan2AwRtAjyjCgtVW3Y",
  "key6": "jcGJBR5T9G6M7RX81FYohxfK4EU2mxe9GzxxVwdkk1Y3b7s6qjdoriURqHFe13LQTeuczaHbx2QmPfZ46RRQTa4",
  "key7": "6KLS9kisNRsidHpqYph3TsprynJtMs1vbcJa56CJo1z2vfbbkkhDYQHtiZRCqQBuDcSJXtAmWCwjDTveR7ZMsQH",
  "key8": "TV5bRLK34H1YYPusRiP7f1k8UPY9hMEQYTUPRVgGmybcQSgmwAstjaLqXNGyhTTXzf8yYD6ZCMt2qv9rfNAjVLx",
  "key9": "5PYctYAKddLp8GW9JRcjZpy5LBHhBK3JEH6YadKn12oQiHt5GtfkmgHEXdUFwxEx86VsF5WBvXhDXo47pWnp3kNA",
  "key10": "4gu2JTjkPGr8SkBhcPTeFUR4XCgW5nNk1XMG6ojKLnUHFvpzMx2c3fT6s5bo42UEkuy33b73rTQAEGAiZYirqYNU",
  "key11": "2Mup8rTdbfkaen8jxaNHgC214mHEeaZeKuSxuCtrBMVfZPAZ289jfQRzYuUKKYQEe6puhowd6TWQ63LuR9yf76qb",
  "key12": "J4VRNKFu24og9rWW6q4tNHe8M2YiDqPE3xu24yxZixL5rxM6jHeTKz8ki1iwAx44NM5c7QMVBdhPiX9MsDrLt9v",
  "key13": "HHf2xHZJ8fWcP6Ck7KHoE95mrgDEVtTSdnogx5SfU4xFgUmhAYGfwPHoeJ9ToeUAE7thLisctQYjuTX9UTGZaWR",
  "key14": "3eKsNMQuXLRVWbbpXmNAL48CH4QzVGGouPFX5DrGwKY95Yi8sCxuJeoCHSCohfBaLNYrqbZQChuqho7UrWQLM1wJ",
  "key15": "xwaQFp6oQ15vxgEbFrCP5exswFM1Ex6q7BeCsyUwGsXCbEK9Ra9NuiKSy4K2n6kVqgDofZSrGbYHafhfaZeaeUL",
  "key16": "EvEycfDipMXwwQB1CKxGVjFTHjm1p9Ztf4zZ4MyutnguD79kehRSL1cicMK7sVCS9Rp3WNY9bnn1YazbP9LZrz7",
  "key17": "5DV47TsK44nTLjk9mBK8jCDpNFTVYzt4vgK57v8Y2xJmELcBR2bW1joA6bMXjyR8vsEwLWB3VueVhwpaT1bH9WXw",
  "key18": "3aB9Tdum9gZE39dT7DEbkHhcuS6BY18T7GqKKsgtP7AkQVt3tURCHatDt4s3m9jyzT7mRkFY4VS83C6UThk7e7fD",
  "key19": "2UKsoUFkN8et2ZGxrhn6i7ATqK7T5zppvGgoC3ybJY6hgFtzrhZQXKNXonFAkjyWCsTaR1Aox54SoaPfPBA1ykQp",
  "key20": "5DBCqoJ5AgtgvppxcA6A9wHeMiFDJqPuhNxU1d5fy8UAKX6R3MCrTZPnDAUkkn1DrbSuS6V38mAjcJn24sTyqupR",
  "key21": "451wBn6NxBR2WRa9eqx2q2ucrKBMMVTU5KLbTPny7buv8PJLDLimGgsjT2tLNJD74FLYR3fCTqmWhJcojiCqCe4P",
  "key22": "5oicyHVcVefjvYcmFyDvdr61CUBs8nJorz98KZSyUimZY9d1hDA6tFiMdr7MP3xYgXDAr4mXQkhQDjJ4w2735rcK",
  "key23": "46AtSCBtcA5igHknnb6LYX9TtqaaNXpT7h4AiayuMeDVvsw5yTAaK5XgcEFXxenRK6d63LQsz4jSPK9v4uZ3Rzep",
  "key24": "3TUoEwc2SCmgyTSSW8JkhrCQgwZwZWtcJfdPp28Ap2wmjiTfU9s5UDB5tj3GGEoaSgvQVcDKPNqa71kELBdKheFM",
  "key25": "2XY32ZNCBaGFKTPZWZriwP2QWeK7eG84i4Bv24U7mLVQiKoBCXCSQscrMuMqXYEuFQdz5aYHCWdat6joQu6Vf7jo",
  "key26": "qG4N5e3HJg1yWgcpuaQiaYuYNQpxD33kT6WtyMroNDKRCFem1wSqAoSsiMgYg5jKq4H2j9R3AvsStbpBUHBfC1g",
  "key27": "kPRMs68iVao8EYtnV2ojCAa88N1bSqNA9RVid31y2nn2KUdmNp9VbpbopJFM36GSPmPzH8PZukK72TZw8vS1BSG",
  "key28": "5dkNuaRgKij23V8nqdBbR9QPvFmQF96DrdgDejsRjTh1CQh58KowMcUjzyWnbbZ7pV8CGLA8qVHcrf69uHdjknxi",
  "key29": "4c3zDncxH3rSoAupV17Ds3kjyvJzdAqUXkDNvxUd8XHkjmmNgBYg76sxjLSc7bNFYxB73qZbTmUUFX6v45nEmyck",
  "key30": "4U3aihZZDhkhLay7X6nJJ3G3dTDpUD95NSzNkP1yPvUV75pY52remW3UCpJP6ws1jZm79LoSLvEyeoCnpp4G5diz",
  "key31": "3ZUFe6L8UKHoD3JSx64uPirpYZvrSLuUNb8vqjnTNbwwwJoAATGwWatH1H9gzz588gachddN4ARHgXmu9Lj4F1Zd",
  "key32": "2dfkZLrBiaDuMvfYckwvWQLcoDkWCKsB3bzrXBEzbnr971miQRnVxeggibDE9P1Kw7A4nMpKw3Lip1qyyVUmrUop",
  "key33": "n6UNg73Y1TVviXmmhwGFWJ7cD7W3YE68c5z2hU788rPywSA8soTaZvAbwSsstrx1sprzZeVQ4LDqYBU4KH6hRkV",
  "key34": "4KBdoMYE35QDKcYF8sAmRZYBRQf7BER56E2oRZvzMsJGLTp5E3aSHJQv9BQznrRMHy3gbDB5wuozunTaZ5BFcauk",
  "key35": "4PnrSZfm3rTwuPu22Q5ej3sSJTTfVjEgkrMZKMLYtDdrq37KdfVDGVBsKS8mXxoFs3f5y4RNPXXsqnjboQP9EGGh",
  "key36": "44wadzHZWB2BsSVJbmz4ANEZLfG19UikAE1zfAtwZBt5eW4v3QkuKb3NhJbMBBX7RHQw1GrEnoxVGFMduhvQ24xZ",
  "key37": "3Nnj22QaNpn84Drmj9TXbgX5m7A327BEN5j852U9gxuJ5XMHR1oAi7KrsEm9Kga8VntcTep64WLmdiofuhZeZd15",
  "key38": "4gjopDtv2fzfqhEcabhQK2BNRvRjGLdF9MqysqEbBcGojh2NiXwZZqaDHZVZLE3oCETNoMs1mRdkHiVTvNe9AVeN",
  "key39": "5zU1EZ96zm2eJ4LLKX5kmoo4iGxd7rdkL3rEstVQTEXHDdFo5kH4fbq4RVSmd1389T67EcF2iWmyjPzLr9rkcH4m",
  "key40": "42VcpY4tq8Y8HMzQA4Q7ez3keFWkYTinwkUejSzbfDWUbouwnLTRQXr8CQWbLFibSffZuo8SGrRboj7Ru9MCGSX2",
  "key41": "YrxmGcQ97ZJAyxBDB8ab8Ckf4gybjQ7nL8Bsj6eynVo7jsLthtpauugtHxL8V2XKkFdCebVSeggeMZ41ye8w1gP",
  "key42": "jMovXRCcqbqAh8jeVNozAHuwRo6PunTkMAW16gAkHWg4MhtTELKHSe5FFQmzyTUqtb6DGy1rNtTwkWzaq14K6GJ",
  "key43": "fgKreDnPU42s7whBhkJHQgotVyqAA16xni9H8LNryeeVujJ4XMLFpMHstsiKhN7p19MaURho4giGr7VcVW7RpDL",
  "key44": "2PiuKWNvE2zJegAFZSnkLeHEVKFEFx47xM2wGjZmJM8XLW1iNjtwk4TPCk5FaiH2e17n1JE4LtPw4U22ite8FsG8"
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
