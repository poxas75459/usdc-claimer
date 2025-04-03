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
    "41QKDt7mDBHqL7ETAZSm1DqybTXapCZKHBDVjBs9KitDk2NemDyGZRDgA8KRkQAEyT1B4LEbReZpoxU4fJcyRLBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QsNoGipsKEAf1ECBQWieN23gq5FgHvqnQagrK6WkU2roJcWBXMD1ZMhMCzrP2E1bjpcHV8nFxSe2BS4yn385dfJ",
  "key1": "2r4wcyxn9Wd6DBYmDnQ9o7fsnmdztNKEPZFeKW8iKXCub3b24LwTQTydErRurZurw1xx7vuGJtL9PZPZU2vRhbeX",
  "key2": "23MXWNQMvpTKyNHVve9awVTXE1gfewd5LbVs7xjMgqUUrAePb28SpAv1AkQ4y7pgBKi27soAGYXxcWyG2rNFEu9t",
  "key3": "2MZ9zd2YhhxvsUeVVqEF6sFTbs358EUBCWzHW28xqzincSydP9GBcURPhKoQJaVFqWZ7jEuzddjgfjTo5skcq7Qn",
  "key4": "4Z3dkHjc9SKowSfcF43eYYvsBizMiBdhDBboPj3R51x47uLW47NY47jYfef1wa1tuibVPDi12verJSsw34iLDmHJ",
  "key5": "3anj5Cdb5PgEzKnezQ2ooY1hSb51CnfzixtvftXGkMzu9CijRF61aLWuK5wDZohAopyvoqaPSZMTZPPguyhWCmF",
  "key6": "4WmH3KUZAvW8G8ZuJSnaN5c75U4D51j47t2PnwFnh7hSFgL4taRZvdZm3zP36G9npLooeNyMiXLPMyWPPQ7cMQPA",
  "key7": "3cJgk3K4r8N9zwHj2TMrVEP6FemEkxhPjicQf8wZELiz3e223f2iFHhtRZKD1yoGuVLnk3kohiNckTirfYucWjtd",
  "key8": "wBZFPMgLJ5z6sQuNh7vze88yJrtZKcShLJL1mik7cTcF3nXyuyoSg8vaL8x6QSn3aQGwbSy4SQbYiFoFtVdMiUd",
  "key9": "4UPNwvfix3swqwDD4Pq7mpKc4cBEB4MyZ3ubawnZimUEmgeAhgRVdwD67gN7UuXu3ExviSUVDkBmWB13dNGQX7zR",
  "key10": "2XZd17NKUe52FtaxEuxYsi89rqeWcF3EF5CDgXsDEG1LS97fXBmxUyXqD1fqQAgpZCMLFgftoJq8mNXbZ5pvjxRy",
  "key11": "4rGwo5oF45h5dT6e9DkEfgXx6BJ5XPC6hLzYDXVwzfoTGVHHUPCSrpS5UaG11vr7oLGHahhNB29i7jSBTkwF5zM8",
  "key12": "27aHkk84diS4fRTQZcbeJQAExnLQfwF8HnzT9PX6uhyo9K8sEirbMwFf6ervM1ttmrdLAok8QLDSsAzPrQE2nfJc",
  "key13": "5cChpfUALRWfUTK8c9ndAbXddAj3WAkJXBTprzk5cuSDgQp2hdet4V6EkskJEMyVnYYSfkjqPiDVbmmMkiYmzRdB",
  "key14": "v7oHNeyXQ6mJesGBG1uEVx35suxTamfqmNQCaVdxqEDdLEmL1R3ndHhABSZqVExq78WXwi12H5nuegUJP47ZUmP",
  "key15": "3L9RTQPZb8yUsoRkeZ1U3W8ABMhXFf8SRQsZpuUzUhrUjcFepRkvDt6ip1bdJUEuiXhsbV6xKPfn4p7y2R3qzG8q",
  "key16": "2EFwy6R7wc49mwaUWeFepmGJXqrRD33fd8dmcMnehi87KW8pBRpd6RLsyhDbjDyf5RU1HrkJKRb5ssbVLxXXyRyY",
  "key17": "269pEAh8mKag9KCEVgJJvn3TmY3fiVRjp7nnpwAUNgLzB9wewZPdPNw8h6waumYDwUCLo1H7J3D9kMDPu6ktSYQ7",
  "key18": "5q6YK5Wb5gPPmAsDjFSTtdYiLXg52UQPePFMhWUmppWB1rXD9heWqeBc4JUwWscKfCYoAzJcJWTF4yGA5ggywENd",
  "key19": "211wLGJ5o8ux4EZ6XY7BfEU9kUQ4YJik5hNbT6Lp3o7HaLPW5kYMHjFYrjr1g5YVctoUBVdxAwUTCWusMyWy4ezf",
  "key20": "j23iXdcWz8fdZTXAKwm4Mtx1qDdpi2B8xCcMeF4JbY9gUekKoLN3T2ZwZe9WwSDyxpUyxac6t8mPDPeWKwxhm7w",
  "key21": "2fB9jBp3BFeadsd9pKxvgqZ36aWdEynmVXrD2h8HjjfWdPwB756VXrDcTaSziiQqLgBepUPc6Q4ov6kA5LDpBMgY",
  "key22": "3W9gi1kFutv7cmTChE8WfDHKLtet95jhZCeJuzW9gnmwVCtwb6fAne8TLFtwPtJLN39ArNqZQwFvqiZqJBo3bnfq",
  "key23": "5AG1ABkKiNyqihwvj8yyez5dfK3qUmmC4QUqraUhG3dGQfd6ogZJ8ZqCcmFisNLTbNjx6e7euDM5hCzQGaEUymVw",
  "key24": "3bdqMwRTXrDs7ARjHG9CBfwy2RbzzEgFDQWZD5WuK4MfeQuxPYaTLe93wCuFRbARF6s8NTevT4GdKuioi8fdD6fR",
  "key25": "3AWdhqJnmesgerPR8cx8jR6P8Q54yZw5LM6ShsGXJxd9tiho5H3ePk96quFg42zzFWscCqu3wqdUzj1xkdBUXSYE",
  "key26": "3SFMv8TnWVst4xcPVdWHnnKS5cUeeLY8ZvxNwtKFXJzJDJFHhWFMxi4WDV4Dyh9aYaeWNeYjLA7JKBWqGJRH5FVV",
  "key27": "3eonSnKzPbzfinSW5b3G5ojd96uG6VZYV3ujzykm5x6d6eurDaSHMpFZovRFgYZGSpgUyUgWnZs2USXxJLp6XxNx",
  "key28": "2a455PKsu6XgvywkrqUMkSYDz7sxQEVhg4WXEmdpqXp2MFUaP3SGsV28Y6ougRVkBkhWMieGnEomoxZiYFcWdfbF",
  "key29": "qHvCeNiL36yvGAxtFeBhQsHH1g35Y9R1Cz438C4WSyXF4vBvdkAFm3jBdYfr6EZ3WF9JrEzuSRoDVZ1fdfCjQZs",
  "key30": "Ru7ntu4fHyWeWjREX7S6YSoTvHpWrvaR23ncSgRksz42UHHBC9w2EHtrdFQfmhMaB9LYr3eeZ1qdtP2Z21Jks58",
  "key31": "3TeGyW3ZqKtTjcrJiu7bycyDEidMSHQSR1jzKZm11geDWbd8nPpNrUYWMJxwE7cgUJwK6DQMWN1qK3FS5WxuB3Gz",
  "key32": "2qoQs7QxdxS5GHY7g5uv5x41uWe9oDzyE9FnSBhUApRgLmdMmDmamMw2bjnC8eX9wNnYnDLacQnfDmwVdp5g8uyK",
  "key33": "35uujyCNaAQSnThXH5hE2qdxfX4LGTtPFNbTBZxjcZngNfD91yj9gBNVVd3FomFP88hey6XBqF3pQvDjy3CjaGMq"
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
