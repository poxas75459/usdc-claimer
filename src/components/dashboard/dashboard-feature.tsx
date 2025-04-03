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
    "5H8Pmp3dNVdWkJm6eJvyivS716jYajUDmZSwAyEPZWUZ1JQ9hmdkCUCFnwfPPqfHojzbbqysth1Vv8jhWkdd7EP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zsLrPJxzMpgfCzbwHjxiTCQZ4VbhbuVfzC34EhMMrQqUk8JXUpU7cMXG9REGSu9KJcdVBpRDw3sNV6sSGo536Qn",
  "key1": "4RHKNK2RPW4D441D7ySrSHP8RipWWrnDqgB2MpAwxWrJYGeu4m7Btpzw3f9KKfu8qaGMqdou3hg7855NJ7oGkaK6",
  "key2": "3DNuysNv9RzPxXfCttwP1mjG8AMowm9sXqz7c7LAKdKagi4DpGpUyaaK6feh7xXDp6ZGJNkR8pcrkRqVPdp4ZPrs",
  "key3": "58LiQLEZZnM1qBwy9ZbnMdkmcgxwGWS6qekgWht1pmJrYTmTJoHtSUjeFQFMdj2BsHV1VyxJGGL2VR44vSxNSdkm",
  "key4": "29yz6Pe19ZPFuwAXf9hxCbsnzPkD9mCcf3zVozvV2KbR6QYm9YZVVqu3JUuMxPYi2x3H8Zy71LAJG7Di2wfEZcTv",
  "key5": "LvKxNXkVuMW8EdiGxbRF2LdXGNpHiv1yUv97dZoWuThMa1eQo26KXxwSoBp1CUygcx6UEjKM1s2B8JLYpXBySpz",
  "key6": "57NCsiQkw5tfqpyc75xpDba6nwte6ecQsBwJG84tvQayt6xNegswMhjte8NWiiN3MhHUBc7HjnfXZsRTYYp2kq53",
  "key7": "31TnK7qr7aKYPtSCqwnarah9pvFz3KcdpA2nxyqBFRCVpnPavKWZaspKf1zyY59vCwtws9hsDhCny9dBS4QKrNmn",
  "key8": "5pPApYteCtkpFZAekzQrPwJdmTtHWK364ggp6q9Ro2Qvcj5y4FYiR2hKEp82eujLjUKAMtAnkqp7XWA6HK1PA4VJ",
  "key9": "vPp17oYTPaveQ3fWQ9LbwFxzmQLe92RAGfHHEjDZvnCQLatG2Ko8K5jxTRQL7WjLUAGQFqbiMnrMStbZmtP7omm",
  "key10": "669EnowrkXwYBvaj5sf17qYCfJJSnzazasaDs4AnmeaVXLtGLsu5BQqL8S8Gp8UhHVsgK5qXan8DJxUQT6hVj7hm",
  "key11": "2641h3Wv818PZa2rUJLWjYXQ2JownEgxmayE6FzcCLE9H2yfhDjpzowGMXkhDC8zuA8QhQqVKWBN4GDGrK7WgNqp",
  "key12": "9rcidpYVH1Q5zjz629B1PtZSHoNzMqZMFWSXWxrVE5mPFKoJUj5s4QkUniCD57vH6kFJYqrgbHSXt2PAAvLCpiL",
  "key13": "3KiFKCbmuuqZDeszqGmhjL6TZ8vhDq5tLqeADWJgzp9iQXfK33XY17bwrMN6UERjuvfuBJcwURm4L6yCU9LUuWhe",
  "key14": "5fQyDdBRSmqdpZWvBj8DWddKfMismxSSdhyzuXQvTHghojvX1s6BJHgcjy1Jov8xmEEzqx9kaHJq7buh6Wz4aSRK",
  "key15": "2rev6pmYRkNremLPdFeWGiqw3ik4dYX6qZx3fLxgB3Pmy9MFjZZDjXpf5aiqCa3NYMkEcY3Pomqe1Hnjtmccc3jQ",
  "key16": "tP9Ba1f8tJ5KrnekCc3i2c6D55DFtRFp5yUX75B9kWukYJyafFvnu6ijf5WpGzsZwJ6PkVKFxxjziBmD3XpL7LJ",
  "key17": "2JVdjL8sVekWs5bb1oLSYKcMjhHpBA5HtZMfNLvxN2gMgg4VmFhJEaoUtGeHrREEFftSn2BDiqPJrwLTogzWdp9e",
  "key18": "3gTHFBWn39GjJzrkXQyqe9sgnCpLdeq1xw8NdXZQH9JVSh5fcLqEPYeDUycP2Z59KTEvzMjnXiV1WdzYMo9mEbRv",
  "key19": "4T8FwEvJQLN9kKdaJ9BqmLwa8SAyMJukyN4oLqSzw7VmSqBfQXgqoXm45KrKKk2RpUQqUCSLaap2a869Ph5YmgHa",
  "key20": "5hZDPPxQZW4yGMMysPtuZKetsq2qDL7Lf5Dw2nW15deJwDS9p86FXD5qjpeBdzkK9LVHPBybaEhUTrL9o8viY8Jo",
  "key21": "3pzKqqnCmRh6bXJA6yZoYL4evHTM7FL8PWEoxM76Q6tdr53TjRXtstNZyoqXCEPxq1raDsZEHW7XhW6v6RuMqU72",
  "key22": "5rkNLuN3xT8LLjtHBZrL2yySuf2Mdxgzo1CRKa4B2LpmYDgxPu72FKVwsu18U2Hh6ebx9t8h1HS77h4UErhNoFTw",
  "key23": "5T8Ly2fzTHDxhzfBTZDaw8DJiWdaJ8g9GZN4bfzdAueY3Bu1RzdpupLtx1tetPc36fHo3ZVRavCfLSQmCZaspohr",
  "key24": "3XRW7N3TLgfxfccx6KPvKZ9u4B32q3eJWjNRp8Ua8qDbtNof1qqT6NbLSNGCiqmeAJQk6WtbjNHvrLkQL3WHVUe1",
  "key25": "4bHAB89TysMdb5RbpVLU3T71qMA6jCv52xH8TMxGzEwvAgLmBbaSiooqSPhmoLLRV54D7owAK3j1V1RGLuNus1Js",
  "key26": "4k1yyBtMjcYTounzMYY3297KhP3YiBvosfFR4VPgxJYEvxTM4mSxkK6BWNRNkUaQ9yfbn7UvzpD1iw8bxFKrFW1U",
  "key27": "4DNRDfAGzGbx82TPGcrD3oSYM7mazmdjCmiFFmRPvgJuHGtmQNsGn5WAZEww1BD76CEnJHAgykJNtigSW6h7CTAH",
  "key28": "5aXtN7tmuUMpMWaK32ZnNM11cAzw2yxsDd2FBL3txJMj9Qm5AwbYHkP6SbPkj3tAHFfrNnMyBUas2caPVyrQi4b5",
  "key29": "3zVQgaNeQBneU6D7TPmivvxSjmshwgbscX4V1SAQNtQDfxjHS5LSqdbkcUbHArPru3ajQArgeacdijZKWcQDfahd",
  "key30": "2zViPqMVNWMUKZuqLqXrof25F7LVZbWRtJeW8ePTuZ2TbfLSHjwrkb4Q3zKmAULgCMozCeiN6RRdhN9i9voMAPPC",
  "key31": "4ubcpUdpDfj7b9SQhgDjUTvcy9BfeJwD85D3wGwW7Vmtc752aLzjiMvvsU9bwQcxm4vpkXhnWcdoKZM5z1NaywCE",
  "key32": "48Qi155bL6cD7esPGCUw1Rx2mx72m7roJKUNV9yVzWWFVyG4BJy4xfiHAXBMQjMF3rY3vYopHoh3MiVJ2f5Netdu",
  "key33": "osgyTXUxnmEppDyG3XiAZQuEWNubLXNbXgy7ZNsYUSQbd35tVpRWx7mMktGdh6xpkGMDpExbja6Har1tYTuk9G6",
  "key34": "3AtKRV9SjYuC4ieBfcnhCDifaTXFvKCHzzZS5cPNE8GMHH4QaHyiC1YNPUCXg7Xe1DnwWFB79jJgdD1jZmnJhyXH",
  "key35": "NE7fkDmHtU6CEXMkDYGV59pgQ9EhYPMZQ6QiHudRETQkSBD4SjHkmdsNJ1AF5ppAP16u2jvkAyVbigg2boBPxLR",
  "key36": "5RuMTaZzFHXVb8RcyREspGGZ9eaRLzFtXAzZ1GQShoeZPvowKBDpnCfnncgfDXy9zq62Rs3CwdFD1JgPdE1Jxs19",
  "key37": "26E5S4GV2ZXSBdjNgnNdpZW87JoAUdnB1sUqkn11CXE4VsrJiXuwAKhQmwJuDyoDrV6EiLey9NYQ33VSRJxdDwiy",
  "key38": "5NtcGaqpiebkLof6rzVtcaHbZz9MsyAqJah4mZ5jV3c8itXBMu6ApPMh2f5gAixoG2vVqySXbhDujJnXDjbhgMLp",
  "key39": "Sz8juDcM19L2UsbCrrdLFYB2g6QRbeCJRN73Pp3TXZ7j1QmHqpAhFvZxVKkLguatvCR7E9epprrQXwc57BnESUE"
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
