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
    "5so6YLtf5YD4XamVH8JoA9wESk5WotoR3sTzr9fDa34evtE2pv3yFTdusQMacmQ7U2zusdYVMmMb2dG3tSTNb1g4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n19ErjbbCb8EpMT1Y7nujDXjtNTqoGwRHKyGrzWjZEbfTPweWDYdte92L6yJEsmw6HM4VR1GbKVExFCbcCFpW6i",
  "key1": "2gJ7LgRDAYZpLbszAUpRYoAynZyUKuq9J1xb1tHmh5fxuHprXAYnQZ5ZLTZkGqv5gmGtLEBk3H31HVtvibzV3kkS",
  "key2": "242Eyahd4ic7f8oDDtByaSnUYYzdzpMSWQQmRj7f2kcARcnHgKEAfutiq2sJ9doEyMCweKePiSfVpz3fbTbi1sh6",
  "key3": "3frAvnFHcWqnfCNoA6enCcTkosn3NBjRiMimZYQXzWYAyrRWv9T6KPjYBWnFzvGtXEcX93ecvMt4mTLY5YpHhqUt",
  "key4": "5gkhY21DE6TymtnVkJhbvf2zEA6VNyPrPYTAp54iPARiPJeSEf4YQUgAMAQzWdwjfSrcV4FNvVsSW1LJU1A7P5gT",
  "key5": "3TY1727kQm3EmK7D7uiGAUnZzbvkivyRK89BZgcJSSEGwnxUHsMJGEuRSEz7jSBVytzqMrnPh9UmpzXyZAa3NrEs",
  "key6": "2iNngNyPktinQSBgBB3nzuv2neHuLxkRu6tQU2onVE3cMefNqEpSzVBmry9d2cBcty3fp9pjmu2ViagoJk7TkxZB",
  "key7": "44dLGPXP5zh5m8akemi83ePMsWhJg9XVMEjTXEWKTDs4j6ptYNEan4ak59MtPXQDnS7jaoTR2koGzmHq5pHx3NEj",
  "key8": "2be5TDf4Por4jWvrdRazEyNzoBnEdLnTCLTyaB7vMdTWyuw9nGJwLGRu1VAk2SQLWRJGZeWYmNiTFDpqw3os3SbH",
  "key9": "2mmqFafTfrynved6yb1PVzs73WevjDJ7SJQ7x1Cj7Te9e7tg7hrWhEDi5AnYuqWN5UG3Zda2EvpXGgozrNDww4wW",
  "key10": "2VhwpvHw9gynuu1DEaYNkdKCk8SgSt2UArL8rDxKG8kEDYT6zChVaqaYB5X3Gui6zgo2ecvdckxqVjhsDSsUnsEL",
  "key11": "58T6HwT1AiRWyPE6BLWASRQG1XuZJkAPGYDNf1LxyZMRGEFvC4wKZxKntocjBqJGbMs16dXQKWN4JBhZS26qQCEF",
  "key12": "qAx1m7RZXX4RAJbAyRkYYAWy1dBrGogWNcEDCRbGAEzcT2YeAaaBz6VTGtmgoydNvh22kj1BS8wWDGnYMGzXuV6",
  "key13": "mx3ah9gGGeEM735y9t1GDExj63T5it4uudCHEtC7txcUpPqk4M17uxdedGME6nRY3YGA918cU48AKEmfxuU7Qsi",
  "key14": "4sthsGpgLt4jtNLYgTNpMSk2NN9dhc8fAyK2EWoqA3CBUmQEtaHpAUV37zikPPiNcovhrJuBExQFbJ8QfXXReAn9",
  "key15": "xFjsKNSRkRXfpNRuaUgJnRDvF6vZ1iKwDErpeaZx9hKqF3ajrD7ETd1cbhvKEFrDSiAfpbDsrn4MygmmQADFkZt",
  "key16": "5hTiEx6L6B75ji4g4B7eSawCPAvCbMnjBMZAMmv1ProLL8GUzcENpk5g7SWd6Keb5CaWJzEj3apLGp7VmBKY6Yri",
  "key17": "4nF5VtEoFajz4bdJJhspFu6onasdgnD7pCFq5CFUm8FVyK87EuZN4VLMGC3ZZQ3ZoLL63Rp8Qo6U5rcchC3zFWC2",
  "key18": "LGkffe1iReKn6dErCwFqYTA5c1sQLwjsnamUNu9bjzwy4zJDpB9qTuvAeBmG36pUrpEsj7bHP7ssJwrS5Lx9N4M",
  "key19": "2YzXh8595hczCJGDDCeu9cyy7QdNfdNgWS6sQg6QHh2JbuyKASDXSxeJTM6Dn2KHDBT7puFoct2eAPSUTLUJe3EK",
  "key20": "QyQLpy9ke4mNbAkSsJdGR8T6jWftrhNhCveBTzy3WBFEHFqv7aGs2N6kXAyggxo4D2RPHoYLS3XuQRJ35ZigNbv",
  "key21": "6j6R7JpBmUXXEau4QgJtE2V5nGn1XmNfAmcFXnkfyKW5MSA4KgrJpe8GV5C4CJWPdiTSiDsVGtK25BronyWQV2w",
  "key22": "5gSQEeWxjdBJj2qGGedaCXTNXpcKdfB9CUX4sx3je9TesW6d5rUhwQifc5EJXvtMBjeAWo8cL2v4RYMu8B7sR5K5",
  "key23": "4ShEh1zKpkf7kPBThZJ5HbKnJHvKctPiNZyndkyXiTjHnWPjRjDRc54KASr31qTvKeA4Vtg75B1djPdVQaHYYxVb",
  "key24": "7VmZukJEgp8awckz8QPPgBoi4SktXQbTcZiSSTWhX2V5gkEmwkiu8p8hpUNkSih77Eo35fw6JfEARSyR5L9KG8i",
  "key25": "28vMG2ovfJryaq5vFcNoCZMMkSsmzi1iK5DpnuaE17CgzmmvKoX3JJU2sDiCD4uux56ejQr7g4SAsPyA2FH2DpGj",
  "key26": "3DnNDrtbeXGb1rKYT9mpJWmXzo8ovfEoX8TTbvtUzk4DZoup4278mzb8tEhbH78pWdV9XgNwkRy4EB2U5W1PPJfc",
  "key27": "2SmEwUiSuzkBFfEJUsV1x4AP7RrstoteoFXiawf6667FFNjMV3XDsRP8zHdyKvAPcj8Qs4imZqdGpRQEqaje8mgB",
  "key28": "2NYftHAU1iVtXwUWCuDzdc1XMpHEHAK7ohumSnyHfcMbgx6KRJ1VYBa2vtZX1CPLHdt1nZNMSvwsYNdP2Ahf5qWV",
  "key29": "2dZSortw2w57pQpurZq97veEvBc5SRQx8zT9dtdbppx4juLVsLXnfyb6E1nce4oYv1k42rcTdsFBXhUenQnikoPk",
  "key30": "45VHd2tZXVnq2brHfXcbWtDw6R4p9C7RcYKJJoj9iwTdFxva6mLiWkXk9jAQNqB5RnJSVtvgVzKesQHdNxYt5tTY",
  "key31": "3uyDXLaXK3cv7sXYYpQboApRF8xWnVyJNQT7NG2yoKv9cuRAePgH73cZj4cq4DcwrHKTt83Gnk6erCLigvfTmkHw",
  "key32": "7gWSxCiv3euhQzWoedNt7innALSUTsnSaQrA5aNy8VaYibxkFhimZrSoSH62J8pHAwrCE6oVbk5KNMuUfhuWe1C",
  "key33": "4XFu19KLtcsiAdcXQssRHJ3fGNYLpWRqWBUyYzsKReX2cSgkgG9XABvB1ZRt3t78LZqKhVPLmQ8JuQPv1vsC593W",
  "key34": "5dSs6M5gNrDDUpMjj8tcJPm4b1eWK5AkFyHRJJNVVhtomuqaWtUeEEfPsH6yVXCjZsEd4F4K2tQY6zGQ1JNE9SkF",
  "key35": "4SXbF9czfE9Qa5vicSivuUg2vkRVcYiMsdSuV42zQDCwMBnJ5fy8LLnUbxvRcYthGnRhS4RXuCqCkRUX7F3JeXp1",
  "key36": "2aHorUMUVqUnSqEV8CEn97Y5ydYmKXPZb6p4zhE2zKkkvjn49LxfzTXdnL5ygxxxQbHogxnQ6rrK1Qp636C5mHHG",
  "key37": "21hPXq7oFdXwHP9LDj73JF2hczA39BtMVQmhBt6oz1VTxX366ywFBhcEdpfQoSLbWeqx4VuXwKMWkyv7MNwwMw5v",
  "key38": "FaPwJzaHfBHQjHzAPfodaK5oFCRaHkkN6TjwtsYGi4ZUtDwefqC8tPRAfvGdjUk2d8cK9mqYLToWBecXwKqTxWD"
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
