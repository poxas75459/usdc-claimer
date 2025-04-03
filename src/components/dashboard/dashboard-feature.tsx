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
    "2Js9UQ57tHsWHZYX6h1z56tvLyeqLJVhxW3KodwyaLguKygfMCo7qxaQpYCwAszn8vvzU1R5XJoMEzkbx31o8sNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T4joRnTnbotLvB6q3kyRsgU8etL1aCi9DL9s5AN114LTthHrVovE72Jv4e2r1Jcnp3UqV2G2MJ9mep8Wwq2QsLs",
  "key1": "3BBzmFeHxCjAkYZyfNdWzGQFLh15DZsXDRHeyzb17GVTLfCFJ6ECe8qFJYBEHd6hhMR9Fg8bmEpjukdhFaTaWidE",
  "key2": "VB6WaMrzKB9hYA3xhGWMfrGLQW2Sp4zMguvJiyiqhmhJhUihNHqdctNsqKUKXzpBmho2BH4KqGu1EJsmHdQ8AH4",
  "key3": "2uHzgU9hQfrUmtrbW7rhx8vi7hXs2qrRccZmoiwdo3jUkFWLXQrF4HpMcDD9iXqhorLimfrFtX57JAV9M98yUtUc",
  "key4": "4zJi9vqMtyKnLnQS2Zq1qt3ET1aPtX6FjbrX7QqVCGWn7NqgZxw23tnXLj7zcFLGsrnfr4yxzsGfoxcmLzncWTxc",
  "key5": "3jsxaPGhYSeoUHP6pTjX75BuGvNJgj3sBb4YnUqoLiF2k3ZLbY7KeYwhqeqe4AM3mhE8PJeDNREN2zbupbgJrjQi",
  "key6": "CfPFVk8z9HFRJ2GEdDq3pJZhASvMJtgoqe45HiKCj2cvEcW9cPBtxxQyyh5cHnhgfGui62jQ9kqPNV66NAqvGTD",
  "key7": "44ZpTwumyYuHwkSbrUkbnaWQXpKwKjiLzSsQR2BR3F4Riq2eG6Z5QotrZxu2yyT2YcB5S8HyXBSyYwkDnToYJZoS",
  "key8": "aio8h2zUrt5BvNN499pEqVvt5dgR3gkrxX9LkHrwAH5Vgxh5c5BfZwgJYw2bKKJNvWPdRCfEFx8D6x5ohrQHQfH",
  "key9": "4hKKZFP1AoLGeCNRVFWCxf6QXAoCi8x6BjqsWwsoTTt3fRkH11AttV5KTeWTAxAPyo1jMzwQLuYJqmAqrD7qia5M",
  "key10": "2aa9j9xCsZkBHKRiN6KStxdY9N6ABWEavBPGwwAzUV2WwYeTZ4x3P8TXShLJwkJ9Zaq8cPp3Qy5gjWhLtyeXcVyK",
  "key11": "ynPkuoUgk9C11ioomhG5a3jBWjVpVFH3hw6tAtGY6wMBzDbe4yYQanNXgYRSnefwAQqnxZAnTMMPLm7EMdCYR26",
  "key12": "5vCJD1qqAw3SveyyPJ3R1LgCbFR9c5StocaBxktpBioU67Ezry8NW5DR9atg4sATcTPf2f877dtJNWscyHdwko89",
  "key13": "3nsePYaYkZJugHhJsq3iVJauztWvwDQ8XvnpHCGjCC8g3w5CcHHdgvDyX1bijXoynyVszNpkXFZfUBmbm4aXZ73W",
  "key14": "eyJMx7yD9m7QdwDTWnXV65i5q1dNxNcjw5SbyzpwksGCQ97VvokwZK53koinqsYpvDuxMxXdyQmsLnziYRXXaqP",
  "key15": "3zRdJ89KEkN8PDcHgrYabr9pxkE6cnZKqdPaqTH6qZrWTw3ERBbfshEeHuSpaLGad7h6N9VdQXZTj2ouP6LBqidu",
  "key16": "5cPaUokEkBBAjF4aFuw9q7YcJGVDWwnNsgSnNvkV7njCso7fmPnyUgXyUHPnq7hhaajxQnfSeDM4dHhVsRMJVRbm",
  "key17": "2xboUriUwEGC9V6e4ARYqWiLNSQZcoV7xRbSGJtydkxegK8vpFY3vy8XBxj2pZkpWBXmv65hgt3MCx1X2sTZzgLq",
  "key18": "2CW45yALP8fDqSdjdPkuEdCh78orEd29Xff7ALVXX8zKK6NC3bj8Jw2pzsgxF1wyxJT8KWJ2XfCf5tcKeyoqPr2q",
  "key19": "4vabdrW7cyGt4JRqBP9NttZ1HyRwmf7ipnngKT5BR3QTERxYgejoG8YfnoyVyqarNjxQDXgxzYeBtAXnoKhKCqqB",
  "key20": "2SGr2SKPGsEDFd5LECvGco9dJDFHyeKbTWs3LFCzLL4Be3de2Vjp3q6QXbcCTS4amFFwWUyxrHuUmqUdzyfwQije",
  "key21": "56FN4fDgtsD2Kh21oCAJ9jpukd9RuSGCBh8bTWkW3LRAZx6b7ghqAbC8RxBRGxkLg5w8qfwrrWQxJ8RgT51dxLCC",
  "key22": "59RapDa6DX7FHY17qhTNZC6vCxS8chkCmGb8ozy5rAauRcG21C9JZEeBpt1YiUEXGS8mHy5uWDRMDXojySeGaLCa",
  "key23": "3LiDHyZuREyPuvfYkTz5TP7DmpqbhYK3949etHrD9MxXCN49FrUMGMZ4QjksYukKzu6HVts96sQuMisMaovDzpFk",
  "key24": "5gtF4KvPLQehhHVzmECui4CLARweHou7rrLCJqnP65tp7HNQ6ABC1JEYcp7nFP1fLFWC6VADKYjonUYWh8ciX6yH",
  "key25": "26t6JNkBZhpdDcWCU8DKrJFcj4anjNLhmjdgh4J5iudQz4F3TF1LzkarYodRhm3W5qnN1idHpywh76B8epMWbjaB",
  "key26": "28NwY17koLP2bJ2ns5K3n3SbGj85AhgWxVZVAfRh9iiscbMKWmmADNeuAQUcrvFrsXis7AcdPjjf9v5n5UnrZSgH",
  "key27": "4adMZVHFLnRYgqAgyartWAf2zrSaBJiCnkjmxQxhPrXhwGCWLEdmABw2eQJCbXX9pYMNpxVHHfu7waQ8MLwXoGUW"
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
