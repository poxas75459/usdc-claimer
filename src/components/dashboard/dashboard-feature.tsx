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
    "2KfzCLQE4w5S52o34cs6Sb7bApD4JZh9PZ7xNbhwpqEyhzTTMNEuARL6rxhYBWYR92334t2Lwm9FfBDwrHBTnZ4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gJkoiPyz8xUFL3z4E8A6MEHj8tWJSgozfzuPgmnxY4mjmBWd9VaCx72TMW9nmeXz1rBZT2U2YRb4A7mBSqSEz8Q",
  "key1": "2GTM9DcGheNA3pBWjGbQdLTiAYMAT8uen9cRbE546hbH9veCnqcerLuXVxVQsH7ZH47QKtTAGcoN8umfTH8re5wc",
  "key2": "yQzV3pqji7615noLhathLoCDPcVqEzP2Kmg92WWW4gw5TV1nE4iX6r1TcMEu44i1MvTYDi2LyZxmNKcrB2tqkpV",
  "key3": "4E7P8QNvYp27LGTfC686VCm5YVdRuyAKZybaF89ZbR3sDuB6sYG1LP96F1wUdwUHr4JB84SMoHvZ95hb8nE6LKrz",
  "key4": "5RLr4cjG1ieetnMdmQs9XoYJmyogRhwDFVpKZTQXcM5mG14DsodEiENbV3msGLdUPBiPT53vySsNwfTeSP7Lcv3i",
  "key5": "5DqXRftnC5VzGonuuWpUyeCVbWmhvtJX2wSUTnGXnRpjpRLdFU5h7jSAphsWfVNszxq9keS5Lex8hxX52hNxDHVS",
  "key6": "4WctigafiqhVXVvdMdFMeWqvmRsuCFBavgCdbfqSMtGuMiV4qZPrauMkUcjc3Pt5e9mnFJrbgwa2Y2XgwMbgiQHn",
  "key7": "4mwt8iQSE2ytnZJ2d5fRmmhxQ3mmkX6Xnifd4TGKiRseDfLiHAEGsWi8RdBAk7LDc4mi1K8otLeya9Mcdyw1RkMt",
  "key8": "3Mxc8GFJgpZw4JPdu4Fxo2fJERqjGPTWroqHDpk5MCiXjYm9J5nMZgLCcR3vWf62SxyiPwYxWqYdcrn8q8VhJ5ne",
  "key9": "3xQHAPHT6dgV9ZCSXogSd1g8u62YmtbJdC8vsvo27GffTGPFaVGAg8fBKbvPMeNziV2odKpkTbPL3hypF7gubgQK",
  "key10": "5RMZ3ZaStpcHewFPwpkMn8iBsxYgTCWCzhihABqUrwjBuwPAyAhHP8QDsNg8m8mRPVq6ZwekTy9PLXgiUefibuxH",
  "key11": "4NPwHWxDW5rHWsqd7g95N59NNdGbdgACw5qoYAkwRWbFYxjdNUfmYPZxCuMuHhfBnEzFUr7o5ZEciG4ALT9rtejG",
  "key12": "2rHjmLj7y2opMyzH2T5Vj1JeTwkuq299NS1oCzxpcsUEn3wVLDmyKHV9RBPqcqWeJrcdfrfE2ivGRL6ojZ2zDJz5",
  "key13": "CvKKLsKWVkNDiUKQWTvfPd6xVaTn6MDjrJxKTwXWDE4RbhoiYZvWDnjy6Sovj5DUqag6QPedGTNBtHnGhLzHxnt",
  "key14": "4eMDs1ufvXVkD25RdEBqxkizipxh5WrUrwTt3bBHjJoFJmxiJHLxtnkkgtFs1SZaqoGASnuXYhDT6Naoo69KAKdb",
  "key15": "uHcqANNyuszit3a2QpswSm9jK78dDzXMUNenRUK9FFQPP4i9BaiGTmcMnjeicwp1uw1a7f8K8gFLkRbUx9Afuko",
  "key16": "2prxuhsrJo6zmBJe79QU5LRpnwo69JkpiGH5RgYYStDPwsEAMT9HSB2estZc8nPpYvKbDGUPBedyex6WYV9NNGjb",
  "key17": "4mDk5WQoRW6AcVeyVT2XVYrmmQgwcGP39TB6QF7Y34D4Jho1yi4uQ5W9S7ZtMKyGn7WN7rqaSHgHriSq43iKb5nA",
  "key18": "2aXbQdMqwh79gYMpvBbNNkFhBUBp6vXugS3Ert7w5pHzPbG8YLv42pa8h6zAwdAZ6o87o6XBgztqKzmTPfq5HSfV",
  "key19": "2gVeDN2oQgjkXL138pJG6Q2nZDaoNF4oQJJBfTxttgCXDseuyioxaMDUMbWEqrLPFTGdQxjfP86asH23kdPryjs2",
  "key20": "3YS1nVqztUMZc1Erk7xzaTwdS3TtGrLGxj8DXg1XHsLbyRBECwEWCgE6vTB5irRLrdWrFU7WieoLqCHvfdtfyydS",
  "key21": "4gvwqbD3LmBzHsyqqgoaxRcCNmSrdMc26derLHRP57DDktRUhRL1vUfN44czaAUb6vaMYQJnL8nu3KFATUMVXsNo",
  "key22": "4jDyw6wL57Vj8oiGWM29wvC1yo4bzycZLrAE92AAQej2N4BibWE65NUpqFMkENJEtoU32wcdPNjb1G4RNwtAY5LJ",
  "key23": "1qD1jLJgYefzjDgxjhjcCyv6GhNCFFcr2wWVKaXsFXJduKFiViqdq6eARWAecnXgsujKcLPZNF7Q687KKtunuG2",
  "key24": "DfT6oiub3AGu6MuAoXuVBYeeoTt5Uz19Ddj76ABsYxfnzumyzQvDBn4LV8gtxqE7XfQWVfWoTziCJg94xU35Uxp",
  "key25": "3XDrenYA15pn4xj4cadhCojRLYB7KPM8PwHFCVJabFxGtJU83B8uSKJiS1qjAHMAFRrBeYnfgUfSi9hcdeM5cinE",
  "key26": "3waZQVrvQiwhEkpBRGxjWjMjc7N9ddPbo2ukUQp6qoZuJhQeXUERRkGT8UYH99NFDDzYUm6S2kQC31bqCxbApLpv",
  "key27": "2397H3wgZ7wVC9uDU2g8TiSq5rbMbRfsuKhnvQmLeNEgwGYvu4DXySeNCZAW9etDRT7XuLaV3UyLCy77oCKc96bB",
  "key28": "65ZbDDqHQcQf9QiCiDGqzCakRQvAGgmoMraFKAtSHJZuTKCmUVvRE74mZFVi8Fp2ML9mwup56ZnhxzCQeugrCQi1",
  "key29": "65tBiiwbQmJjrP4GE9zLKrQ4HhKGfEyobmwny5ZhzEGyHaXPDfNVcPKUhuuJampaKwAatgmx5RJyz2DERL8i9E3G",
  "key30": "3e8yZdi2Dg7ifrLsxZ6Ry87eeaNFnPsAWWNfTQ2MQpWAt2CJrAXHMKg1vR3RUnHmspLZ8T7ZEja1KqqCaeNH5wrv",
  "key31": "2woocYeS34jYHV1eKSWRtmuudsMSPGA4frbnGHxU2ysc421wXYFmGHaC3kzRFwHy8AQuHxBZRzG9kobVFumHTDZg",
  "key32": "53UCAAsNimQuJdzW3pSNN1evXtf9hQjCJVrdvNWmUJRGKiEsRQyW6MipwrNuaeUkpshQuAjPPbmZnM53BAYvZer8",
  "key33": "4aKHmXVEcXr5pXE665Mj9pQJovJe2Jy4z5V6prg465eCCC1ftSVbc8BniZ1UyxGATn7Zw1vFU6xgqPvyD4NbqHaT",
  "key34": "4dZQiZsSYJzoLGuDGdRTDDFGHiYpyQozNRZNRRMWRuReynYDmQFi59rCG7RSrqti3Yzr3KceWcz41Nh7r37ogp8J",
  "key35": "4BgVYSLuj4ycK2hd4VPRevHNxSV9zjbodR9Xc3szbBSjG4tnq9rv3pbwQMg5tjp1MVpi8YBWkoc86FdDBAhqJHzz",
  "key36": "zhXxA1v85cYZ8nYsQGcdPiLQ6d5qdgvRNZwmcBUjaeJCdMrD694zE31MynjmKvPmdFrstMKJKky4DjJ7pWDMzXP",
  "key37": "5LyCsvKL2vuLAMeJsfyTBEBqvpeXZoUSXF1ngyhnTJT3dzPn1cgbUeCkmjs77evpgcyvPYjgXwsiL4usXvHAfpXu",
  "key38": "s3pVe9ArFxbSSU1WXQWb4dmrjeRJErpyu2hNtQXqZz6Unu3g1387oScRFx37GZng3Wy8FVgUnxAKAgFctuS6sdJ",
  "key39": "5a6PrSztd68sZPPrnhPUpJgzQhLWyRJqn2stoWu3Qy8AWTs7yX6R78PyczqnSS8hxFVUBcWRkVRRDYp1KPtvj1Gr",
  "key40": "FkmwaHTzscWxZeVLEh4PfVhZaJjka2vyjCtFsGuV3DZmth4BRqhcTje8ffMjdqhHAeRCmPm5HzuonxvtMefaEw1",
  "key41": "37MKYEXbspYJJf1YqWKthUFrdYzEQzMpWjqZcrwLCdum6NdPRGKJCoaiCvn48BCJB8xcaavoUCFd6fjGeBBo3QHd",
  "key42": "3b2JndBwnBYm3MhHE34KtjQ7Wg2dXqW3HHw3YYu66RzfhDAjb8qDEv9A6WGTZBrgQ8hN2AFH27MbhW3bwbZP2zsk",
  "key43": "2ZbxGKEGDS4GjR4jT3BSqntRxNMnpbRhRqAAF1wMmXwP2eaN8vhnmq3Y7Rntrr3w3HP7hg9c1YYoLjPsmkrHhAz9"
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
