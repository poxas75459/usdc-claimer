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
    "2DZRyimDinD8jRwRrUrvs2kygM8JMhKqh2NYDFZpyRZaDRoG9y9qQiLDtXLo6Kjt2mXzVQ2b5VTjLQF8RTZG8EoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41g9JGEqr9KffMfbhUQ9EZdWWHYRxbEYsJW3qSCoXzJRShKueRTiLxjGPRtnxq5NmGYPDJjCFdntqgJtTmtdwnVN",
  "key1": "35XwxfGkpQnAaSxrspKLZRNZZtHQJiLwqzxbDaBWmtGw1CAewBGSFkfshoNJvkoTMp2fXTRM2CHSi5GaZ9vJvuPZ",
  "key2": "21Qg1sTAdZdX36dQ7F1rLRp4knaryHpCU9At4viJ33i8jkL3ke7F61CjYHnTvLcWiFbyYcAo1Nihp26GH631mmSL",
  "key3": "4doZsDjiCjrS6n9DNbjzBupgKuPa3dki2kJDQ1SrYq6M2LF51bK2s7w5Kwf4zCKkksGPxoTH9yuYgFEanJH2uKML",
  "key4": "5WKbKY3F2RuDBL9Ymyow462TEYvSM5kEGJkGB4tA93J3ayLHUFfqfbjWaddksQAc1BsDEe4SsS1EPwc1pNUCrX8g",
  "key5": "5AAVVpKzN68sDzihsLj6sQLfEAc63ANPHjJSBTzuJyFtbafBSaLnAbfjKmo1MRuVRYo6doQUz3yxTkeKtQ14g6fS",
  "key6": "5AJsm34erLm8Bvb3jvWKpBiAeaeL8aVWLrh99hrsGJ5xNozi65Vojz3kun2mCXFs9kXDJhhqZ3pGj6RoV6kS4aJX",
  "key7": "2ELtgqZEtVnzNPKskyJS7EHfsmDT3BB18PskTCJm1HKwbTgYyH2DF19tqgJLmnnhGLRUT5KwB6kBs6nfGyh1RYr4",
  "key8": "3N4rPXusYog128n8txiqXC1mPEdNj2m3dNGVyasHterfduwymJKTcHPWNKBYqYeaEqBPL2Gui9EiyoYC8cg9yDpV",
  "key9": "3VTed7e7rMKLczcrtjpHrhUnA761hPifLsZWeKRLJdxaamV1U1o3De9Whyv1xUcqodQshgqva28ksH82CFj1gvoR",
  "key10": "woUqFmo5BAx5oJxpqjNtBj9LkUAKWxLh3TiPGKumxW5zEo3NCaTLm2yXo7frY8gh6rnbnQwhAdzciJ23WUnwDho",
  "key11": "4emmMNdaAbJHngCBwmPPbjcPfR8VYuJajdBdMBCeaLnS1Et4Lx1wR76qsDkPCpmLtdHKWzfzUmEJLfGozUF6PYKn",
  "key12": "RPkVNhUtJ1D7EgxXAyTHMo8N3Wv7JmVgno4KT2uxgrmScFse8GZXP3ZWuj6V7N9cz35mgHojSLS15KvhxQChe8Z",
  "key13": "3a5ZH7bEpzdamwKdrJzQSwhisr7nqdWpZxLssovBc4x6xDGGK2uvNdZcbPjsNnpbTAArn8w6qqKLeKuXTP41rwQL",
  "key14": "3LuZzhR4QT2k6H7xE9pBF91xugfF5MST8QcG3Ad7Z62wDZW8vcPsDuojDD6k5NbBvdjBfM9D2RHYv6wzEFscfc2J",
  "key15": "GUPyH8R3knXMtxK8qXyfoZKSVKpnLjtYtyrDtV2LszWAcsKtCXD1WkXxPFshyvBdhJmVRHZMRsQd4MEBGtSAxzb",
  "key16": "2VVDnQdUtvFG1p7jGFnsgPFAvPfmbUUuHtGykLy12tUWcza2e5HTzFDSZ2q1zsubfcijoVFd8hyA5sowcMqx4UqF",
  "key17": "2GLvb7MjG1t6jCQAnsNLHouweYKRTqjn2KJHd6m6xTvUMQYTBwm7FzcWvZd1PL89bDu4HMB9gh6jKmSsUoEKwkMq",
  "key18": "3w8e8vxofN7n3o89ynhoPhaLyTdXPA4NEEXtAvsX8sDkuWxtw3vq68SzhD3pmr5fBLBiZY4rsahXTd8C7MPFJd4h",
  "key19": "242hpCYa2rWpJqhevLZDHKXvhhGY4yPC3Da45ek19U9PqJPc2urLNDxRZpBBa7Kr8iTdPD3WWeUogSgYdHrwRnLz",
  "key20": "5UQPGczeWwQKzHRj3R5dJUupghBNJv5ADeWXm3xK76zncXWFYFhBz5BQrtvB6Cc58GKfmKsiLVYTxYkbmSSEzmfU",
  "key21": "3V6X9kxN1Pydc7QYL1bgPengVcpbNKxeXXx5pXf75e6fAC8umUWyDkdWCivbjKic1v3Pre9BcEnyaebroUbfSKGb",
  "key22": "4cA6mjh58QVNqbHsPjHYZLzeT6q99W8duZ6mVZxjGFDcewkdzt9dZ2herqbysfjCWoGLWAQx4jtw9bM8omgsTK57",
  "key23": "2AG3UXz4yHeVjsSrvciDot1T4ETKKx8Tf4uFFnaDbucHPUc2fEq6S7UVFUQrPWoc55xGCuzma6VSXHv33wscdqpD",
  "key24": "UAQmcpGgEryv8gakobiet5pZon6fPxW9DykfCQpS2dXcFiiGkH5MzjA4QjGXc5Bpch8kpGeBUdZJbHcrMHsXFxx",
  "key25": "32crqhXPirvWyiXqfGxdM5rvNLV7cXQgox6R3uWDoBcP8o1nPYx9ooh8VQH7aH8d8vdbcz6eWrATsq9PMKKMtP2",
  "key26": "55X3CrNMSUX6d3rduY5LwJv85onnhuDB42fzFB4TohhM18z9yjnaDGMqyJC3gep1Mqj4fCciBoPjEWoCkfoAGVBy",
  "key27": "5zQiv8QccTLhs1rea7zje78zVvjSLsXw32XL3tqb9kTGuPyn6TSiu9nQrTqB9TjGfD2RVFaEQ59nwsyRLC27TrVH",
  "key28": "5znseVyUpkguHboBZRGuNReoCQqnFAejVk5LFicC2wumCF67aMbmwTt32jc1H1XKQ7TZLJabys45o8wSoK7fdKDg",
  "key29": "4DFp6VyiAYU7YKCHwH3EGvz62sjx8YhFZ5ia14V8YDx57J59QjA5jifETNQu3C6A8z5GzDic9xpLwFX2EZPmMvwi"
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
