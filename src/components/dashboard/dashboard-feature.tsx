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
    "5TG5sqV17HWEYyGWfZnowCKpwYGWADZxmT1jUCtq9kJXzBtGtgPpvkzDkbPnpv2C9JsPSWi2u4fmvUtovwJ5KeWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ut927C3zY1w8DSkCeKPj8D2rL1X6KyYfZHNgBHGXtAtd2g8JdHszs26LzqWUBu8oKq4tqJtdCgxNTbdBqSajdsR",
  "key1": "3cbnHJKeMbQBkFDyEXMmHh8tTw2byaALXwNww61JpTwCdZe2G4i4oNV8GwNVarfJoe1fAQjqhimU9ufeFziiesG",
  "key2": "5iEvDht7qLuGbQ7xfAAkBigTnce5nxQ2gtV5VXGgP9BnCoerLxAb5cG6RQQWdzNGesYayJTn3WYv82w8QSFQv4LB",
  "key3": "2DV6rq8KCXHBKLaiDa2mets2nAQwvhwaiy8xF8VmFJ1Vj7xHGoitpAMNNhGMKTbT33BNFcCWfW9e2ENHYmJYeQfW",
  "key4": "rdjhFf1pWX5Jk2ubtSiDuXFvTBPqbPvgkJSuzQcTchdExujX7fmzVqvVVSvdYHqc3WNPZcxVqxGG17wL3sCMMe8",
  "key5": "5XFKTBrmhTQCxZE5yDrYcfAMTdK4f64cHAmRirn3aRNJkCXemrYWEFyR5Kr32nYVXqxvaiCQQhQLLhMVwecKGgBM",
  "key6": "3ry1d9znLYYrsH6oongebL8vQJns4FkUjvBFWKsiSaEvQw58w2nuQA35Qivbfg7YM8ShRDXJZFBzRbcgLKjYrgad",
  "key7": "5NfiRrEa6jhrfXfXrtxZwUKyooGpqs8KDTWRutZfDocSoYukWCDgVjowK7iBKticuyqS1FLDkUqU3k5CB2zyV8Cd",
  "key8": "2mXjTodfvzxQKxKpNBUSwufA1Mchk4xVHqrfwEVDKs2r9BmURSTxfJNnSTxffcQcgE2ttAh7ZR1P2fC1gejfz9XU",
  "key9": "3AjWndjfTvSnkAYsttWr5tH7YhtRD9A2KNS4CCWAFfh1hBzaK66aVWzL1TPi182k5YnvQ7RuWnQppsEZm5LiKEQP",
  "key10": "2hmz2UPnbxKZejQH2gDE4PJRckHAWSZenEwk9avgSV4h5KyRba2PYUKfWEa6RSJF2zTcSx81CUfVdNQqtmtNYZ98",
  "key11": "gfxF9z15dMbu7FTgME32ud39fL1Edwfp76h1k1abTgh3TeK2S7oJEW6JMQkPS46wPPTDBLrrkFqY2Ggi58oUtrN",
  "key12": "22AYChgZVKpDJHjAYNYpwNmXZM6SYcumkQgpvLzLhW5wwWNsJzo1tPCKAB1Qdp7TF8ssUN6XQW48jtQqmcbkUBnN",
  "key13": "37jUW3WYKRAvNMYmbTUF14BgAvkY8imy6unSVzAFcGe2uPcbQSbYyN9NqiWiyfKdjeo3fL388t5VVWp9hoLQWab7",
  "key14": "4NG8aQ4wx3yFj79Zzrgnk32TmqU6DgE1aLj2hiPFVLyaLMg2pu4fR65Muz6oq3WmLqc9PeC2UvYGferDWWUnSDqv",
  "key15": "5gPj8Fx9y7iQTBKM1LDqKdHk82YmvtQQSkCtigofANS2x2TbbrUDSnVRHGgb1oikB5EBDHnxqJ1uzT74s9rWxh8",
  "key16": "2jzKcxdrdKa5V96EhbeZYK3b7FifPChgeDP1v35g4aU9fYwaJxZgMP655QS4JjSH1GTGWmhAWMga2d9wVseP7DLt",
  "key17": "5gZRW4uo8W8Rd2TgEPt6AJ2qTAzrS4dRFVbAJxYJNLMYXdivr6HmoWavdaLJvKaPKhdspUpRrmjaUMmb1gEEbCff",
  "key18": "2ByZgg33KR16iVz6s5EjtGABUW2EL1cpBzqC5y4HTEiGmK2YBB4TzPuSzzTzcDUXkXDSo1S3JJMhtNNTwP3mSDR",
  "key19": "37qvRno7Dsi1c6rG3CKigu1Cnke6bgzZog855ioZaMi3f1BYrLgjP77LPJ1nuAxHvoibodfDY7WyN9EkiG1JBDQr",
  "key20": "GKP67iWda5CzCzMgfuU3CaJQgUqCXweTHm9C8hhynKgD5ZrztJphUdFevTr8HkVecdPCVSdFMtui5EGStjUbzo8",
  "key21": "4rHckSph86demwo4gTYY7dQsmDdNZDbtPaRz4LWbnMcuQTXMagjSGkTsoUn1f5e6GvdxVGGBuM7e77JWmhkcGDf7",
  "key22": "4jFLzQB3ikrSvcehs5x7DBzrnA3N7iVpYBwsKwZD9eqd2SR8ujtqx4vFFQYK7dvdbD73dhTUfUaE8xqW9pH6rXCW",
  "key23": "2N9N48uXdJBvDCYpHabLKVymPu4jPzfXLuivon11rZuP3XTuh6wU3VuW7XLQ8fe62j8vWbCa7zZnkxdXkGxxq17K",
  "key24": "2TGHCEVuF386SfsP1Bc9kivFJaSYHLYgwAGYuLoLKspTUYZoS66fa6F8fZFL3N1CFDPGAKBeEi6rmV2r6bDipmZc",
  "key25": "VWwToXvrAmTDhFVDqrz9yiHUovPFR94MGLtAS1efuR7do3TQrA3UsQy3vogPcAL4GPsenQwaXoYhZAxBuckpCvR",
  "key26": "2ap9Tn1iK1ihFdJ3fghYNXQkq2Jasd15DPNzkGa53o9w6PNLcFeJEhycarqyPwbcX2XyQKgdxHuMSY3956i2Sf24",
  "key27": "4gTGm5dEizvFzNBdRfoGHWQuvuoQ8MTYqsG2bCKXVu3iSuwueBJyZxZ4G2sqsgEH1JwHJw7GXhwVpzSGMY3Q9itH",
  "key28": "5zTShEdGunhVz8mXYsMj6qrZXMgRpjxrdngSEWo5UJHhJbNEbaoFNtuNPBAueqcAunjLGrYgbGLwrYPfqLq4qeqS",
  "key29": "4UZsCQTusjmn8WKD4toZB1wnTJKtTTZfHwRiuv87ToPpqLCuur8uTLj4ZTYdareyYKsQcwxQpPeSFWhebZacgduP",
  "key30": "52ZHUfo6iP1L6XczR4uNMpQYtStNtexbgMQCJEezA2d1o8qMhxigUAK1KgnVsLTForMC2opAYpyVgH9Z6FHsHrFp",
  "key31": "35RJaEUcPaAVhraDNUxAnavdHjVC1Mf7jtP6UqC9Qoun3NZZ1nUnXBE5Rd9nEr1cdHdXh5EfyzaR8QCrLoXq4nLL",
  "key32": "5jXBx9EYoSyFbHJ7VfPmW7JsLAKaMxXJSes6hvZkZ7oVHBJHwBMNTfcBoe4qbLmG7LWvNgBxsFJEhhycycehXcdq",
  "key33": "5ZH8CAcWzeT4h5z5NZztw72HhV7evWfSk3vM7JoqEZeWNCGQcNYULBToMXqHLT3g11DJHFnkaLJZDbW7mJ8Nr2XU",
  "key34": "4TQUSvDdSQ9x4X63YeJ3k2vJkZ6JMapRrEnGVX5s5cjCLByeRJByC7JAjWiaZ6UmdVCUZht9Ewq6a5czXhoTDaLD",
  "key35": "7HDP2RdWQDmnL3J8Fm3JqsQA4gs6t88AnWYeZ3XWNciaMvn71uqrchPZQSeojmr5AoTwYCiM28ptDQMgaCzeF2x",
  "key36": "3QsyhwBpfBQMDfjQrHyXkzk5XevacWGmwBXN11hgJ6fUkN1XHN2ey8gvcN6PnbhrZpXr4f4M1z3a6HKoDsq3i7uL",
  "key37": "3FrbVS6hdJTnXBY366Q6ncPKR55fPbAHnzsBM7jJEtKwc9t95gGbEggL5wzKGrTTPLwSK7J73SKKMZe5uDgsWpgT",
  "key38": "5hTm51VsEJvbeoiScFxjVg3vfNH4kyBUKnd6YHDF8qhZ3S7TE9TSeYWhFPAvx4SydHyzaEJBJ9YQLFXdfRnHckFV",
  "key39": "5VhUYYJBEyxEMSRtvsTgxDvQ3BwxWCkox9x2M2NGUELE4NQDQFmae6Tpfv4M8ivimWGL6Fnd11fuL5PHuvBUHcPL",
  "key40": "3qE73fY9iL8AyV8VgPrqZofrNKAzL2FNYedoRViFV1a2NkRGXPcuwjGV87L4nmLiBMPCcRX5ft5t4cgHPk7Bybnr",
  "key41": "4ezaWZ1X8LZU1DLpwcJDx9BaFBJfap2DatKMjriHH9tFJpYRRR3c3THZMPaomc2b7NLdhAcDCxmp4bnWuY17kbHa",
  "key42": "5ztYmdpLpTPmdpvFTD9E8yz8CcP6VxamFWxZXn1NSaQu1LiuzaaMyF5jR4W78xrGguzeuMmhQxG5LWnPxRDgSggw",
  "key43": "4amvvqMgE4SVDvMse7N7FyKrDzTBUL3FJDTV4PerQQAFfBJQx9EMK43XLHoYqYzYANvdLkMnKvYzxcGNjKhZpXeK"
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
