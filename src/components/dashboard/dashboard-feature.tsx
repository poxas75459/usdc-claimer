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
    "5FUpzNZpR9CsdF5mHo6F96LES74fXHPW2WJFN8AnWenfyJ9EFMFCxZnnKPz46Q7YZp9VJRmCffYGnq5BkPEinx9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CkL1dgZmHKLr2tKYysJZK3LZ9AWbTU3qQCzju3M92FnCqr1235Fn1aUx3amQvNSQ4YcHZnJ5oWYfKh2c2yGW16K",
  "key1": "2X29bGBY4VvDwQM4N5g3fZ1B5aV2iuXD9xnKeFF1E2BjnntrGXu5T3uCC8ai6zW68rt8c8SjHQrUkBtxttMLqJ7p",
  "key2": "346Ss5EXvbE3XhBQCBkvNSS2QCJVCjr3ouAhnF425PdpkSXJUfNDf37XAovZp5BJ359MpJ8yciKW4k1YpNBSGH1w",
  "key3": "3sNqJLfKFjZZWPEdrrNSxp5stAtNpuJtr8SBBVeN9QJUhTdMKLDdUoKhSMk8FQ652PSZfQi7fM8bQtYcbBNEpp2",
  "key4": "3WpEDAQMvZHJSu6gdUhMnpdRNbeoLZVpGWMJSUAZxgnYgTwymZrabNoeobuwejY8tDEPUH6TXvTPLfRMCZ2unJR1",
  "key5": "5T1uRXUko3B7b95VWpKGQPu88xqx7DsvKdKLJxiXFBWtJtkKFGqnatusbpJG5TWwwKudr5Mp3Va4iV7y2kcFQNUj",
  "key6": "53HVsmC64CJgCUe9HGY5aupF8WhpX2zAagmNMiPrsTj87rfuDBYju7UXFnkjmLtGDQdj5H9DzDCDz2titoCKkwF7",
  "key7": "2j3PCaivJ6jkhtKVFBw63qUqqZaiQXJLcmSpBSVVYXtXjqKw3v292vAajUXUdJdFZA5vPn2wyXJ5WF5XvyPW5Lvi",
  "key8": "5Lku3yocUyjmDQdP1gn8B9d517Kxhi6RihDuQQucsgM53KTXktpPjHKSJa4vDGoSZknB1dJ7ki6VxqTQvneZuHqu",
  "key9": "2mPUjSGgXLM4yUutDgeLhMH9Qw4Tzeq7vBKbT1w1F8euWjjnMwLRnWsjGyAeVVnHohgKovrfiC3zSCdH3of3v869",
  "key10": "5jUg3LzUeTD6ZXxJkdHd4gBTeWMdSay9uD4JrcgE3XHWcFHzPX4cTHgyyBxbfwCecpV6RPVitavpk9yfijcoDBFR",
  "key11": "31hnduH7HpPjP8x1uh7Tc9dkmRgtmFE1xPZv4kVfqJ6EanqLhxijEqcY1DeTvENg27RkVpKAwS5zJcpbx5ihTPtH",
  "key12": "53e7q186AjM4MtNWK4vrYR2xwtz886STePQHRgbJCnnRs1qEJDZxQV9btgLyEZ26FLFYASSWaMGxPLnL5Ff647Ft",
  "key13": "49hrvs49JNthnwUkmpGgFZ6AwQ4ARzSjKPniJduL2ojtRz9UcxDmfjDex8jrHBbSrtWBG5jr1ZQmK7BTxVoQzPcG",
  "key14": "33cJEKwT5zjKiWPoZLEPKoridLLmzcxVKqbbGdS4j7vXHKpPjtyncVSTDKgHr9FAGfH4J4f7qQVPFPmZnE6u6y7s",
  "key15": "3sd65tirAxnDEh5j2woZK1oH5ANpND1AF9Z1BNUjgLXPkGyCkimGvGM2hjUcWW9sTwagSNwMGATTbpYhY4KPSDfs",
  "key16": "5mjW7EzWJFukL318RGva39rRhQUH4hshVAN54gDwLYjPkn2vAr4ZG72X4L95pRGQQzaLkVJynMjmjRBgpgEvsvus",
  "key17": "2ab5mte8wLjHsHn6bMf2CG17wQGFqanvjrVGBTXg13zH8buEHDE1bqGLhxTRhvyYvxQAou9U3zQz24g9SeDgidYx",
  "key18": "2ohnnDYLmsba2rFyhFFq9w56jmJR2wigxgi7EeWbCYmk4dc8rx9fKNEdHbJSWqfnuyErUduEaMNqeN13SzhGGHDq",
  "key19": "Cegryk9aaajMz3qL58acCDGCQm9Uf5Y2NLnAo16RLsBg1ZuEJepYdduumV71dTPTx9dq4XGwwwJJAA1JR5aNzkz",
  "key20": "516Wyw3vCCjEYumdqLcis5mq4Z7YHTskRbm9UatYk3HQN9k3y9C253u7aCQNkhCkaPsw2kDKyPrTDQMB8wpdZy1R",
  "key21": "29arhUAMjoeGzmypweQpZfMmH4SpEgqsZgnhgNcw3bLkxw4kA9V4t7rLrEh9nHTS7cCgL2348PHh8hyX9qGP1gyk",
  "key22": "5B78qgGRcmiHRdduq6JdrGmBXru4mvhxygY54dy73HUP9Fv42kLica38PFPuYZZARMaKyzhZymvb3rfCmS1YsBrX",
  "key23": "2e5NNVdpcrWjmxgoggBRhBg6o8kJjsVLErmw23QMnVp3RCkzUoMYEmuMUhPgoKDgRttgoSDgueQVCoKV94dVZiAb",
  "key24": "4DNE5sJMntYMjreRUqB2C1EAkHoiZkrbEB2MoHXpCqEXtD9Cb98kEh5UUAZhbAAt41pyNfmdhfa4wmJbXLx6kofJ",
  "key25": "2tjvGk6EghSrmUzuCyHA19KDKhn2DAHtDve6ruSLVAiEiv6tbjYVqC8gPbcphKpJ76Y4wpqdQrkofqPDA1GkSBeZ",
  "key26": "2cC4B4Qdw77o9sCAz4XoCbCjuhaaWq9X12cBUDTKfHgdAqWm42mNsJsyRvZL3PeZrSkPLFvQvR7HGhvjU9VdeZ7d",
  "key27": "4jNBhTHZknJ9rfpCmiLxH7xr2tKZhwdNSwJhGpY7E7vPcuwaC8o1EoPiefq5fjoqfeqQPdqvVsdLFj3JVvYLBwM6",
  "key28": "gpRubs2CiiX1NJtoQLw2RUe78dR8go3ZVoyzihJFHTGwgsdZs5JiLCeSnFdRkyK5YYL2ovrW8FCnBM44M9r96Bb",
  "key29": "2aoonzEE6wq3qnUcTaCu1z2aP4NHAowSuzkGHasyuVeb44f6UTzaSYmnWZQDPvmHeEfPYwtGXPuKoFpoEWAcshaD",
  "key30": "64JWWGWhuZ7Avomu71B2UTddVgXyuW5Fwe9r7SYvSkB2NniYGUmnvb3dQv7eTK22VoH75k6oEoemk1vB8YgqYHGX",
  "key31": "3ULzRVSXLKDwEW93YY4dXL9S7yB6TtiaF5B3aVdVW6D1p9UVaZZC5eSbwzYsj1midKijuCXme7mPdkxttLneP4rS",
  "key32": "2YEmcoxJFf3mBVZbx1PciBhv69XjXnSgSqZTgGBCbjTV2mfNNSYcdLiUiMYCi9vWK57DzXvhnvL7ryed57UcWvTu",
  "key33": "5nyrH6vTZGPfjZdikyjN9jvfNk3cjvM7QWxuSrUmMgKCwAqbxgBp12ffSXqmm38Ds6GmgAwz9HqLVTYQgZcrceQ",
  "key34": "49VNKAzRurYtm7eh5sPiz5uZZUWb4T5LrQWqxe6sKSHtzXFcuT3n3tYi8PFdEcVWm7vmnS3ToMroh5sTLgF3iMeh",
  "key35": "2hHATBUmcSAyt4LESpHCmRrUACxSbkCUfhUr5tDxRuB7ydkkjtNyU5cuT1FBLKTi7p5KXPos4fgWYRuvgNdWhXts",
  "key36": "646thgkz25fEJD8SrNVU61SKKUmoH5q6zbnsSYg3AxBhcRW3WEmJGVrFc5EYbRzRwKMmskCN8r9TMeMy3QmgS6LV",
  "key37": "5ypA6nABLJJhnQvmhfSWz8G5JSBJYqJdMLcTsouVERYgFEffzVQpduuM4MfpjK3ouSmZj9JanNCvyNAW4ZxVEnDr",
  "key38": "57LGi59jYLF5PWWvnz5VmdFAbpr7ACFRZr5AEtY1vu67jo7LpEz8QYpPE4YYyZTMfzzFv6L3uHJYRbnmxGvCmvvs",
  "key39": "28hj5r8VqBRpidHYgPLdcJH6JpUWPpKSrrJhu2LLTyun63M5cKvFgqbub5pTcEJbMwatqorfZqUaJ65Goho8ajGq",
  "key40": "3BYofXgxkmRxHYNUVYhssHYjBY4Vg9b7DbAQVZtvW69nBNysV5RtFeeC3hMnvEZWw7HZTtkeVgMbXvoM9kKLiotH",
  "key41": "2GHjpdUWgrzGcH6nfrQKsBNAdR8cgPfgLJv1N3wPKmKJkMqantqHz7f63PD5VWfVt8JC3wyjjwPGQgVUkgRDH7mo"
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
