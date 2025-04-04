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
    "yxL9aLFFfS32Na5vJ8LRQzS5jaoAFjdvPEE9k6HhECsSJJPKatwCb2PwJwaLXXiLpMyTE3JzSXsCKURZ6f1RB6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JKCF9MNMKnZRSgerejgQxtGiQUUkKNm9J6rqGirvkUUPwQ95y6eBQPDSb31CvK4uM4TUMs44m1WThTCHQQa3NUv",
  "key1": "cQr6p5ZyM5sPqrRibbxWfka5iRWNKW89QPbMkt9gwN4CvZoxbm6mAYaA2AeJTZFEoXLzeKoZr1DvpR6etbj1TsX",
  "key2": "BEWvMQwbSbFmV9k6cY5RVzU2HubxQjvi6EnLmpeVFUhzyPm9cwPGh1X2YQjR17fRZ4cE3BfwpeaHuB5Ruvy4eLf",
  "key3": "4QbSZygYoMfP724FVjGT5KULXG5Ce6hy6XKqomUi6UJtQczBW5xJTh6usV2CxMeQ5eqRWzzokM1niB8is67PTpfF",
  "key4": "SDGmESzkqKueS5vwYJZ6ynDdH6MtP4P7Z6Kp5oWDPBymYrCi3QtgLNT5HnVkkMcqB6GikzDQKVcmhwsJCcF5Biz",
  "key5": "4fZeYBY19idCzvMFCQ27c7x2yEEJchgZDqTabxhBEuuG8Yj2eiZFFdyykptaBghX9PZ4BKUyVnmifSy59YQT8Eib",
  "key6": "37tSSVRMtgnZY3GmhrKYUqKVPP2o7iDdYwz7Wikrmx4yjvUKG53b3dLrkmYDaA6SGPe4wCfJivMsLrL3g4ia4fB4",
  "key7": "237YzMkPMRj2pVHdH8L5pcuE3288y4wSpgrbY7br7zn4ggkygufbXvLM6pbcQZBXJXbhDc8jrSXQrjxzkDUKFQtt",
  "key8": "3ouiz7YzwT4RDoFbrWJgaXV4FXvQdWywWcH4sEGoTCumgHu2ikH2zUwMXyvz96QwxCR8H79U73p1LPPHPQ8L3vup",
  "key9": "v5aRJhiPzar9dqr8G1ZJj5arRkjz4ojpxLg8w5ugRb8vpMbf81hYZpgPM2FEN4BJDTmFHw8kNkCPEFjEryMPa6y",
  "key10": "dJFtVxfThpVSsi5KWPMEHcDUDn7e6Sh1JGdtuQTweJdoBBiS95wQKFvKxGDEqjbRPMVB4KzdJF95bGq5M9DCMzs",
  "key11": "5RGtuLfPeLkmZHFkLo7aaJTn9mdSqX8ThkD6pgBbNTqwmxZGmqWJT7VYPihcAYSF6ZzLDjZxB2PJ94j4vMrevUcS",
  "key12": "4nduVfwWvLBqG6tAZkCWxc9nJF6GsF9CLbfhvEbvny2G2cRbYVQUn4VFRKnUH9kncXGmzPH4zDdqZteB43Cm59cm",
  "key13": "3H6WV1rq3RZeiBzheaqdjR3mzoBUR3fhA5F3Ptyx1Tgiu1btff8ho1n7gbTERHa77GqSMMxKiKiDM6dyRxjmdAaJ",
  "key14": "3VkyyCK4wjE1Ho2UmFwSW4Qy8spHJu8smHhf5osVvTZrdpxAuk5oqC5ZbxzXoBGbxLKE5n7Ljs4q3fVR34HWHGtS",
  "key15": "rzdWS9U2LAdqJNcMFBTX8udgVf8G6GLkbjdH4Vm6ZRm1VHnbKUKAAUt5ui719cDMEP6aphoyJV47H14SHRzeLKx",
  "key16": "5KthxhnaQYdxicm4gqPZgv7eMsvnAj45AP79xVZXKzZsurX8u36T4b8x6TcrxWFWjRKagXMcEKQUhRBqqxiJJWqV",
  "key17": "2GkZh7JTGuuGMke8LhTLxD3mzad31FAHKtNcpHZC4ViviQZwGyKdLy8q2ePb3bYzBv1jpf5bYSnqds4iZdnMQeRN",
  "key18": "FJE3Zf8GDm2yEWSeAxW13aftcaRGXjkuhnCVD8Mr2CE372WA1VttdTJNUZUYF1tyF7nR3howFp3xPpRpc2N9tWG",
  "key19": "4DZC7f2GAfutTEiPzctAEcxnCQGdBo5DrpxUMzAEny1Vsq4QatRtkxPmHwwz95m64FfwB8zLCPLfq33JasyfCYxS",
  "key20": "3kYqj96mqt88WtFowoJVTQeo5b3RScpeStJ2YxCaoQuLQjC9xRxK3gdZPJtrTRsdAjFsxoc78GVgN5mN2qA8KzKV",
  "key21": "4ZhMGn7rfEpjKgDQWT6uoUsCDbokrT2X7n8GThVsuFjwvzj1SZm6JdY3ntF7ZGdrZrWPM8TfBxPa3YvGmUgokhEm",
  "key22": "2PHn4w7UsoXYXc161SCTeEZzDsBEKCzdTJGdPmXM2BEmxyqbUBd8GgUPzdcZJQfoc7XVDP4625h13aHU2Sv8J1fn",
  "key23": "9t4GQfc8MpGhHpueZiRqiTeeFrwvJfEwLfKrxjab3Fkxbyx7BaY3u3aw4pSHZFAGX5XSqdUvizpw3cXZZuijmSt",
  "key24": "K9hhxKfmuDC7oTYaZeGjDqniJEVAecmRzBkD2Mycp1CrzsiANzEMCP9WShJnzopXDuD7fpSYsQKQJhho93gj7dD",
  "key25": "51QzbXW27nEJykWzPapAWwob4mC9u3xvp6dQZwNrKcWv4wu8BMQEyZEFvHFcCzYdzsPY2fobPUxczDYQb9umRHYd",
  "key26": "4D5Z1waC8XxuNYwpfXp24s1USATQWAbc4jpZzBUaejRxN6PwVKVrNsRGHiyi4ysth671uEeTXRotncASPF8nVQxM",
  "key27": "4zSFpmWEMdjGQZAZZpF225AXSiatix7WTJ4m1u9hTKGuK6EVc1TkPG8QB5PmUFF3V6QxbLqBE4BRphZFMFzq6zpN"
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
