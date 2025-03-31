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
    "2m2kPzL1Gg1ffaxhdB7cuTGfFfTeGQDR7jcTTt6Lx9ct7zXinUWgSxHvBhHhF73akwp4foRLrhFNvBqXLQGYaqDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tZzLArqdHu8yNFEJePDkVHzDq5ZJREv99pTJPjfSiNvipQAVUYcY3rVDatEw9AwQh6j37HhyiQGiH6iG5kpuyGH",
  "key1": "55Fp4vgTmu5oXZNydVMBxdjiHmGpnq2o8LvaEKXg4o6X42zndpv5LecuhsHgbbQyLfPMhAmMgNEJ1tGfU4we3Aws",
  "key2": "5Gtm8cN1utTVUrqZsEB5YBhtSr8VthqvaohkwygyJhJ97CYgvqaTteq8JHFunAypgCBoC16CGWLub6F5pgKDZiM9",
  "key3": "2aefwYDv9CJ2avpEKmMHhtWyGkWExfe2XtxRTvi1yVUBBLJPY5CX88kLLHH4H4Rq6WAbAgrFbmCcHNjWcjDTjw41",
  "key4": "3fwmaWdHPsd31NiuJQTcgzsqqpxwQq2FbXfF69PRRVmWzYPES16io8t4WTSHERbAiz9MehKr71K8hx336seaByDs",
  "key5": "2tHv4akkHNShCw8gVCN6zJXz4wpdFaswCiy29TbvDBwSMsNujoVoyDiDD7R7WuDDf7dwqxsWQwcQFHEDXXUbk5Sk",
  "key6": "123XVdwdaCZAhHofsgmgEBXJ57wMXtWwh8tFKrEmw68U1ToQjR1yWzCy7nRd9cGA1LA1WwAR5t8w7GTuFNQvzyXk",
  "key7": "3n3juktY4erLfqXtDZqvZxYKJf7Hi1HQa7wS6YUTYDfEyR6uLZDS2xTVTssGMu5qroHbBy4hL1b3xFq13kWwZdJg",
  "key8": "2REYjdXJSxBjB8AVi7xpfLid1EG5u4usMruQoiKXwBRq7cZeVVypxqEetvkRtSW8VgKUQ9bjmFhqmAViYDZcvP7r",
  "key9": "4LDrSpLZjAs4N7UJttzQn2E3XMx9j17brf5HCPKZaexxqkykkPboLR8ABMk2j63DQxxnx6p41xKBXMceedNYuMXd",
  "key10": "3z5X5ftHvDYoCftHtL2oJ1Xqz77PYDiymSfhM3X5FtLy93ReLm8ZAb6NBSLd1zyDh6EfPKi2uhYR8KsH7VccG1D1",
  "key11": "3J79Fmtu7tNaCVQFbRuNBsSj1JrC1djYzbdEUNaXvA9GvKPJUPRVox1wALTeREUziQ4xZZ5PS8qHaR27YhRQYF8B",
  "key12": "293PxHyKYSyvBq7yq8dbgCmcSB7qpvw7ZV1JtqgHwNV1HTG1RtrzEPEXr1JtWLdAoemWpovEZUJMk1iJXvBdmHCa",
  "key13": "3CQiyzJEDFChpfuRd4Cjkq2hdGB1V2z2QisxcGDhpRPv41jaH8beceib5wcLRe8mEH9qVpsk9jjrMACFH4xcSgrj",
  "key14": "4UbTw6Ps9frRppULHJn9Q66DQWsGAPiCb57rJ7M7zj4qwHqTiJ9dKPcokYkLbXy7TRZEUN2g1BAUv18xzotJoLzU",
  "key15": "3iYk4iyQg57rbmApTZGcRz85Mp8UAfkdDTjYW7WLLAVXVNSzKTrALwyyix7oa9GFA9RjydAx4LmECNkeBJGVcUe7",
  "key16": "3Tb19Ad8DdFeYXghRyCZ2ebDtwYCrkHRcPrnszctA89WTwMW3vqtxXX4RoohMt8YBkp3x5RdiVc39qLqmFnXTSjt",
  "key17": "2yWjMUt4drafjJC7xRbJXMHckM4K98bbjC2gopcSQy9XzvBJoUCC9PLQC15R8FREi2xa9KLKeA2rRbmfjhkPjDDp",
  "key18": "4LdHkqC4vomumumdY8SmK3Za293SMYrzwbxhoLVoZdpQgoaMfeD4jGifMy31yCxpnQ4Un3vTaJ38aSeXLNVMt1pS",
  "key19": "SPMNgcCovHNTQEPQNzANnCGEFbXT2j7Z6JxLANyNiHjDoSavGQCZn5LbFQr1Pmew5UioVE8XxR8XJmYx7eXfwro",
  "key20": "CQF75JPCUFL87yxea6VpJiSQ2gTQ3T5Qd6EcUH5ftePPWcKSA5YFsQ6YnbYMuqThvzQD79a1yPjM1J9bBtDfpBd",
  "key21": "5M6RdiX1Wd64f8tDM7p81Afv1jDEgZTEMN5dr5bTD28JzY5d5Us29RHXnS9kSymvWMk5EDJGVCz6TxLbWZ7wLG8R",
  "key22": "5Hx56KTosnQ6b1RRYsTxu12Lo4hBCh2tZZdNNfE4f4UuchWejRMkhvKWLguAAM2tFqWSWv4CPVGzdfEMTH7xQXVj",
  "key23": "Sesavu82CEoN52L9HhwteqKutQ7f1BHkSquAommPwgfhBCwZ6vak86zmVG9M5kdJQv31uiQC7MiX2imFNHJXtYC",
  "key24": "21J8o4A3WC5Y7cLvZAR3gtzumTWqkDyeG583Sd7DpC36KrPekzYiJXRpKajbRjQFDLpNN4pjebDEWxmZtGZmyCk7",
  "key25": "LvtHouoD7sB85oXMuVqC1rHHP9oykQFKUQLC8stG9neDexriYYQA6ThbFrc8cKAjXxwAvkG7oeCfGRM3zupxTNi",
  "key26": "3a5XwFmThkXjtMeMwadNMQY5912mrumnVqFGCXzFD54d2JMj9qSrMqUie2daHrQZr5YPbL6a6FUHLZyZM9tV93NP"
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
