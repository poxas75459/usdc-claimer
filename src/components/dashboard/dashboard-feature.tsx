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
    "3TnPsh1zk5KGYU8H3KB371phEN26ykSdJ5vLTLZ9TTEPJuQTT9YeRCoNSKgDv3vYAsQ9PCZvLLu7NRCJ7ZeC1Lo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZGRCTBmw1WKciJLxZxVHj9eYQ4K5QaTKtkWNaXU7XuBVFbWKsqjCWw2ByLF6fX96ttTwKMuXxWdEJhe493VW23C",
  "key1": "3wsskPWN8qpUbLhkf5cWQk7mKhqQYMtwT93G1amtoLxqXe3gimvjpaKhFMpfArJWi7TbG5HfARcVmh6L5M2fAxhH",
  "key2": "bZUMuxjsaXmf6KFb3w4ZSVJiuXNubiipqQRHnvJ6MfMZkyXo5UhHeFAidW318NuBcV2bKLe3KaEcL74QWP5cR2r",
  "key3": "fWFnHCL1UZ3PXwRi7WXrujtkA82hjbT4QVgDaepYNXBJmZe7ZeKNJWEwKn34hCFbCgZkGtAC7s4j8tuAZjmSG64",
  "key4": "zzZb82a2MFSLPtsWHdWjAVbrdDq4Y94rU9LvNyn8m9DVamgfb9cwnhzKBZu6Gky3T9NKLSrbLk9ukRVCeS6bCqy",
  "key5": "3s7uYErkUGkVy2aABoaQ56hrjPm4ao5q58GLj912ugcuRHhbS6Ks42ja9BbHUv8ZMbRZC1VdjiGYAiXF2GWLiy9f",
  "key6": "rJf6iTufycthuiGD3pYqQHSTqHkRCaJYej6ttjXtGMm5PeJxMZuzd6box57HC7mb8pNWjokkXjex247UXwudVNP",
  "key7": "2gRwttkLVpJ52y5GD9mnaRwJYQRH6qJEgUsj28ATWxEV9gLtLuziEmF9ohC6jnkGeUtnvbjbprHQckfWLuVf6nx3",
  "key8": "62JaxuMjNNF3QEuUTdy1fNf24d2AHF1EWUmTa6f2E8cn9HBrMRgg46zaTxzAX3G2pjFiYAmzA23XDjovmy8FFELf",
  "key9": "2LmBcJygByLgzGS1bLxAsjWE5cC12WAAUaDMxNYJMPkHCqG4imNELfdAYDJam88ukgsKALjUXvzv69aYFv1wZKp",
  "key10": "4nYR8UUNFy2FCtaeeoP5S4yVvzEhCuCJCCPfT64KnxHWyWGeVwHUtP2HSBFAyZc21RtQK7r1C9wMggGsTWyLMDax",
  "key11": "SFKjAK5TjnQSLAKDycDPztpFVdFDVGYbq5qhVf5iZUCkoayRRRkVXq7kDtmX2nd37nC8dqKM5biTvZEmtmGPAue",
  "key12": "32fX6nBnr8R9RN9YidPxNKCzRgP2Qrw9nDbVZrA5rxmSNRJLdYrANoTLn1P8diL72mEnR4rFDAojDYC8FZYQ43nL",
  "key13": "4xB6CbJ9yH9gGkngjGupSJKqdbeHtfYAeEx384ZzgWeQpZVwRM7Q5xCoD8jfvbNbZLdvRWaRjcRrR3Ga9KdSbaZ1",
  "key14": "2X38nSXLt78wQ87SfQK9cGzFX2ebzzFYYSae6eqJ5e42TuxGmw7cxNmK3nbpoUz4XWSqFj8yJS9PnTt5QDcmLj6B",
  "key15": "5ErN3WcNGfz4sFK3ABs3XbhagzpX5QQmofLinuKxwchu9xqus3VTg2GDpYiw1dXWtGvn9ukqLiCQQqmp64i2mYGH",
  "key16": "5hfCULAcGZxxAC2ZhiQDVZws54TrPd4uDTG93W1SPyta42Xd4xtRBP7w8fWJmDKsferZGH57w1hzZHegjqxCzm7F",
  "key17": "3gxeQyyQYNKHcpv95ZGezp1fkRDfV5vUyoqkRitew8yyBXrVNt3voQmWzHNASWmx7KrLuV6cxebTXk2cushT45JT",
  "key18": "5nwZD4fxmiybRhAejND1R1yo4iAoAPpZXrHTXchkRW9STWVJY3i1AvsEsmXgkKEpZcwWAQHd1JeFwartx3BgSaas",
  "key19": "5SSW891aUncu7YcHsa6v2TUy2hdQzpPS7Krwp53V86cNMouhj9Gby67UqvPjxdT1Y1HSbkZhZYrVvuHosZaNMWZu",
  "key20": "2bPbKjhjjfztFJNjKiF6PhzNCpuSs2CGMz25dQJ1ZLJiVkVb7YhFGfh6NBRQmC4fM2Hrvxe7qg8GtVFpCj7zs7QG",
  "key21": "4BDNSbsYLCnCuJ3yvni2G3BXogvzSFs4QJAN16CG5RMkYHeCwenR5JiX4u55SSQUCuqm8QmvhXsSmTahar4TdKUa",
  "key22": "5TtqoLyBYnXcuszx3Vq2iDsZ7tQgLswaQZLMEZcGw9o1Ta5AeGVnuzwBJCU3V3vdzpHj13Bx4KPKAjvG3J4NvS8z",
  "key23": "5VfGHDC5kkHm4SLonwJ1Vi37qq9sdduoBUw8dAa7kmLkPbwrFcSZKVGVZ2N6PwKzppbKJZH9PoRHVwFkqoKxw4XS",
  "key24": "V8FckcK7pZZMUqZFFRXY8FazS9TPESjELpgDEoZD8dC5M8emEjR42PzY3Jwwq7T4CqJsZJiER51dkx6ahEgyRXE",
  "key25": "2zzzLak3G26SL8bKij3jx4bjqoTQJn7VPg3CANT2wXpWSxFoMAh5uqQJTVcX8a68wiZmN2Re9nt1unXBAS8ifmrW",
  "key26": "2odCakN8BHtNT6GSXUmVyNFDMtMi2v5diYZ24LbmUhyrD3A1bAKNsByPEEBowxSQ8tJx1qohuGz9pStXTy6NSC4d",
  "key27": "5YMsdCRn9tLSCsaGJ9uFmLYvPk2GEBEFpmFBr2r7d3dhvXoFXnrjRuy6ti2tccXFss53Dk3oJuYFQBcctFmWbme6",
  "key28": "5MgzJuVjaBfmqUTqHHV7TD75LSfGsyHMLacr5WJTxW7h9kXTyXJj25Xodc2SnzwVn1v646jmwfUnDe2Gzvs8sTaS",
  "key29": "2Z2UQnDQZPac1ez4pBmASzDPTNQjaguF6pbDqLTQZKxe1agFwJFRm8PDNVruHH74BWfs4CB9Yv8HSk7DiYZtkRj9",
  "key30": "2CYngMnuszoobHW4S6AUy3Ti5wCv8LeFb3Rn2uXzCQrw5xFbvqGdarRnHEVs3mZSrzGbKYPBXzxLzKeM5EhXFftS",
  "key31": "3NYXicJtWGQ3vfYzFwxUcF4uuw2NFvvZWdC7WNb1iEMy4WuYLVnk4n1QNMt8sEcNxycnzKcJjCtorQrvwvhvkJ5Y",
  "key32": "5jounxAWGiBzMjKdG7t5D6iMu1mp4FEGeEcDJjcPXaTDQVzD8pdK6LAxnrBB57U1hiwFv9so8JRuhuvPkJmGWfFS",
  "key33": "w6P1jrCEqBkDqYnge4F2kDYRtxDeYyutCrNFYDGaPK9DGen5jXjkGKxVH1YYL3vPsugqbjiL1axjy37jWBXUcm6",
  "key34": "3L6ciDkeQgEu8E7yUCVV6KNuauGeayF1XDnaWzKsCL1dcnNahN1vC4XnnTSj1XVrRA1giXtQGEo9jSjtkAEhgqW5",
  "key35": "3qxvJkfeCtsbEnF6bkZe9hW3KJV6z1bTpgV5rwYLswnRRBXFmubUKXZBCAiqWH4JDqZM2yrDF3oP95E4TanLhyeV",
  "key36": "2eMqAMbwCAd53hsP9NRAXdt8L33Rove86QZYJ2z7HEFSR6wVyT9TGdJBmoDaXBvi3B82SHsyff3vP1ywyTdnCaq6",
  "key37": "2UsEgRuATMNJ7vv64ekGd831wLvPuyaz9QtHQNbC3Q959gUuktGFLDASMEEYkMpW1CiTfuPv5mygEgKgGDZN1AWo",
  "key38": "5oXgK3RXdjciwS954LNMZdKdDuTgaeU5rXM3i6ii5ESHgtR33U5rzy3Ahu4KJtc3vVPHETMmCWtoQGj1qYZDNdEM",
  "key39": "54mFFHMKoGmjH7c6g98QVqBLKAe1bP1yci4AjyeXfGxNZv6vNYHLNMGVyV8zi8ZarJB4TEK51brF5CMaKSkc656K",
  "key40": "3NVHmY9C1SAvitRTQVLCeHy8AFcgQB9Qsr56mpzQ3J6pdhD9nrekfnTrmFXpJSXhZ2jdoGMbKixqF68DdqG1iH6V",
  "key41": "5JvZgaNNByB2NhsxKAHaAwqKKFiAvPSavR7p8sEwdwCcf5vbA6vqzUWnF6t3sCRJMpUGfabeSa1NP7YDArxHvrst",
  "key42": "25mHVEieBae4KnGBf4nF5tHfU1SkWvmJhPhkvBuihR4BEArjx2fdKLLHuMj9P2aLuLXWfkXEGTNT9gQbXDfGhSH1",
  "key43": "52wdZRdHfQvtH3cn4MqRYNyBHqAnwyndNDH3MWZz1TGxV7uDvroL1VfBF6W39feeyzZFYS7FSpV6QWUDFazxZvZc",
  "key44": "5rRg3Wt55mTKrPhPwA4vXqEUv9aaHsan1GpjjFEK6t3TDeBDPa36pTMJXHwMSPr488DhSQu1zgHuo3kVKiedtPiU",
  "key45": "45wMbBhy9N4JB4dqcZd28jMd4W7khp5P84b1n95JwL3VLiAKcGxY4quMMURVGg5Lxjz2qH2TiNALG1RCkUbswsJx",
  "key46": "2SwRuxRwkiGvXQaK3pXhwRiPMo2TJiFk8QFQYqfJffVsygcpmnJ1rxPEKfF2EPCmwA5t5fEsJ9uWXxJ5Kv1RJMhX",
  "key47": "3WwJ3FVd8MS2wjHQ13VRg4b8fryvbFuh8VYvxveFMKonxhnTBTZcC6LcyJ29bfKyEQymGBiv2hxNpNhVBNS369rM",
  "key48": "3qeswyE3TqvrYWSUX6W7rqp5zg4BeBLz2RABbBjCV8JuEtBYo4XnhdndwiKo3BcAc8knnnHYQ8icdqsgGyo6VzHq",
  "key49": "ZQPbNfAZqCnAxhLFc11Mr2MtnEEtyNbeLY1tQ3GtP77egfP1KP17cHRYvg6TNscWN2mLwmv8AmoFDf9BdoUVRLM"
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
