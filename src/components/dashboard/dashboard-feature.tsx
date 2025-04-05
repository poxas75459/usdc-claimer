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
    "3NXkc7NXfpPihqnRXg71AKgYaycSBLfQKverLRMCZYb1aNNwWpc9bsbeeiLPWDxp783ueqmBMjcByoCvcfuD9Rde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4THv5iQabzLZw22fUcpRyfdvHikuWvHkx7a9ZZK72zs8fXeKUTrBSNN3evzfj6t1evkQ1ptH8sAGhvhyvh7V1oB",
  "key1": "YyzZMTVKZbMM4bqXmQZQzJPQEW78EevGNwugwTxZJoQjQ7RXBErn6dcLdLpvZWHLmwUs7j7gtDyZcU52TtvLdCw",
  "key2": "2AktYqdS7CQQRDJQue7mWkJL3QddJCcLrvaRQ7rT9GDdQDGvx8NEiQDsmhqUAjMsAGUsftYf1q1ScvbWRsXhj9gz",
  "key3": "52pvCZ2FcP6HsycCMYXWb4Ud97GorP7oeucuP1KSQry7F8Ga3iobNr65LVEmdZMJJo6DS8zEggyyY2FTMKqbD8ww",
  "key4": "48oVbJrdpJkdFYWu9jWf2W8zbVdC7LUhrgVejLyQ6EWYKZbCALwTQPPUh3ZxK2CHeWAjXG242eH9UhNayuj6xjhs",
  "key5": "xmpUQpMr8caMV1dVqEFjjoBoErBwFuKLuJ9PTujjKi6TP7zMPFnjTQT4XpZqoCgFH5QdGKCc6YmrWKPZbhx192F",
  "key6": "2xYsWQVbv6Ax2UcPsdRMHNbbAtWekiPMtQ4Vb4nFH1YHxhw7pxdBCSgYWPbVhUd54pFwVFpStV37ptpk4YGiF3M4",
  "key7": "2UbWjoLRdCHBpTDLLfVg1EzYHqvb8ZBJkMzq5xTj7sLPYny7HWkQw4orQVV4z5PjkAXv2HG25p4yr987FL6Fs3WE",
  "key8": "dKZhPYLtiNjWa9MJAttwWJzRStrMybFE8fFH4EBkkNx3w3KAGnq3duPxCeDVzYQboESNPbkzfsURsUecJQ8eY9C",
  "key9": "5VzqotAJGqYY8Ms9a57vrGNusBerFjQF9uzdxcLTg372ijPZAdj8DFMX3nVyXHVVY7YyEF77CpitACnA9TCc4bxF",
  "key10": "3KkMYX82WEsD9ci9qqMCK93UHxA58rVhyo53khUyqYXUngTKUYvoLZrDhHiC7Ci8mEVHRuRXXzFjMZTU1CLmU73j",
  "key11": "BzwprCV1eGk7yjfKp9TqWSE3mE57dhxzoNT8b9xNjWMKed734BoJGjjkR53F1fvHUguSWkzYgRqej9GbnjSGcNo",
  "key12": "21i51wiWRrDrWtAajsu8y38cWqbHRFgZEGVkWRBwKbkWEryV4sJtgDPHZhYozqbB66biZuh6Q2CALWVqdHbNhNQg",
  "key13": "345rF2AvF4GZF1TCAWoV5a4y5vwduyXaazKx7fPXL44rZGDkdt8eePpTbnsfgWtF1h2oZrSHLEf1676HsBPLKACX",
  "key14": "NfGCQL7fMyhH5ZPuhyWQzozyyLgdyJcRB9gCr6ZafQzVtHanbu6QgM6rJTs25YchX1r1vRNcyLVNdHkwMZibNjP",
  "key15": "4b95SRYhvwCpHjjQsEScStfgpzkPgcEHPsV9orUTM5dZ9jSo7eJbEddiTgq4EB1QZVmbkZxKX5AnZKQkFFimrJmo",
  "key16": "2cr2MaHEvBEnRNWPmJ3m3geWFzebWrDDFjVujaUj5VnHfKwPBM9xMAuXqtzwwFYFwgM3DFSwim8rs5jMTCQPA6wg",
  "key17": "2AeskhzQTZDQUQsxxybWNB39GEndfsvcpSgKnfJY8E4HRdtkvJT4cT1YbfGZWwe7PQbvNmDAu4yfs4oeTxR2bmKi",
  "key18": "2f35AVL9ywxTPNmFa3BcD1EPvGSL27ZQoe68hZZBGmC7qiRzMDBxximf3M8XhF7hHrRGZGh9Qew5XSS39XKEekiG",
  "key19": "2V7xgyFJAJ6hJsDw6JkYQkoiE6mYGY7QfbUJMaZ7jVVreCXy6ZMEbtQ4g73H1CqhnZWi563d5XGrTczEjxAqNWzh",
  "key20": "2CWXhsjnpqnnQkhePeA5N78jizKhrGMcprugNYfM6iAjxQJQ2j2t6qyyG2CBWfG8UXi4E4WfBekKbr54KBnh5TRt",
  "key21": "3oxEFv7wFQ2TzeuqUk8VLMc6oQwpixPKX9trFZRtWhpGrvMhogBjdtAXcJkhJX74vP2t7Jjasatt1rNSi8NsjKMc",
  "key22": "TpQbMNDK1ZQAvJoQvQq6SPYKozXbEZnk4wLEqYHWkQSGNFwGbnhNpPLEyRkcumZvJzFCu18pALtPg1bysskVTpf",
  "key23": "8zRNPepG1DEwGaQp3FH6Xi6MzhgRFgCncohBxyD4rzzVmRxerNqnsM6GTUCxbF2dpD1TXYXNvAVVZVGwS5erSQS",
  "key24": "4TgVJCBDnCkGa4KoUrTo7Gm1YrX3KgPYbVdtw38HSihqG9LynBE6MgjoHPqu2LZvxNcZ4yjaKUVFcdTkAS1D5CLY",
  "key25": "2gzbUeThHn1zQRN2mK7EUWUs8stdvQcpFzQAQpF1Yy1YnzHuTu8KVnurzAzv2QKZj33WkotD4UiTyvJah2b1mXfT",
  "key26": "3rbQZQn91McAEhoLzwebNr76yPZkUBimhmhboxZnp15TvWwg2zkucHrnrkwD5tqpg8pwV7KQoY6Nn7B8eBroADFd",
  "key27": "4vKuzTehGnnXGpz5Mfza3y1e3jZojEDmv1J2ba5rFgAwziCWeZpCTSyjBcXujMKDaccwjWFNao69MxvdbbYtyeV9",
  "key28": "3qbVMQdoAXoogT6vUELmofYgzEgXwkrEsykrrKwaKCgev74S6RvzzaPxaZbCLJrsPdhsXSV3qdd3rk2j7Y4xZ6N7",
  "key29": "22iSRwzyzPSNztHxTRhgoDinT3KGXYBSdf49VkJTUPz48PamdyoPL5Lt3Z92xVDYtv8J7oCAVfyiUyX6RGFkNoVD",
  "key30": "4zuqCmbLrVtEYNawsku4ofey54bK9jwaUUy9ugyM8wV8fDQiS6niJUcNwxUfTDUJCdHdQzzaRL4GDNc9bftS8d8g",
  "key31": "2EcEMH1QtRFssuxkqiADRUMZekDLTkEeMNaJacpku7tEwTuxAT7xzDvQtGEbZLcpExNKktDVrgLY74tKzk6Mt4TZ",
  "key32": "3y7TJeUVAAiPLfndSawGkSo49KtbBUhdfPL9mDxa3PpFph23m1cWcAV5qtQGa4vgN2vRK16pvxu2oQyZHz9mzBfg",
  "key33": "5VmxXuVgxNdKxTXFQ6Abk9FsXaKxULDB8VxVADVjJ8MyTvY4ZNPQndoD9ETt9kBLcF7ZsaehmyK4bnW8TSPJnC8q",
  "key34": "3h3sYH9fYRwvxTh92oNijNzkizPLC8WFwK8WgHfpBKMhUvSVrnGfK98NQeiNPd6WJ6X7C7CNR5V5X5dKtnP1AjY3",
  "key35": "651EVyJaAgL74jdsXBCUGrsk8cEEf8BehwoSnCeZVeGrDP6CJZzqScVHM7j8GYc5cvbobn4MVtzM2gSJAtGLofZA",
  "key36": "4UnMPDGZ6WxZpJ2638RRmmB4vpSUHYeZgDStuGYyq2jTxgS3Vje61Le1EDr7vHfciBsNAFvWLswrcn4GRQnvWCy6",
  "key37": "2hy6BSfk7w1BZDc4a7VPSR9GKv8ZhmvHjor3NUuDr8thS1biFe5uz9ScpzRjzkLfXUiMV6GmNr5JrNQRFmJzpE91"
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
