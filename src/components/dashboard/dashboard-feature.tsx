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
    "35xEwFvLQ1CMhRsWwHaeKUhcqdZtYHdthrhwD1MbAkMzHzL3Ti5K9gUZpBkwS1ExaGJY9yE4iAtaorw3ty5eWec5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2chotQnU3osGg8gAzMwqXNnte1Q8A2d5vUj5oS5qSwHV3NuHgsyWKv5uQ429ivJjv2qZFsPoVmTF4HEp66k4bwft",
  "key1": "3KwHMwMSGAzi2qRN8G3P2s48oGdwP2A3VxzefXttpAkbhXrXTegCfXPcmDP6iZA2zGPCGGfEagAYJGt7QVgLenEa",
  "key2": "4o2DhmZnimWNq1FzdoZ9fCNcDBaPATrMv5sf1dcUsqWhDci2fHUZVVdqGzNBVdEGYWzpt4sEL4AreCjKH883FG7H",
  "key3": "4tYJQJcB5Zhp2BDw3fMyZx5KRh5vkQhuaTCnf538W2EuVznPQbcGpgmLm6aEeYbxykxm2Fynjjansg554R8MtddU",
  "key4": "5urmqbRvtkYuH1DmNm8X6UQ3ZejQ1AQN9TYgrEPoZY4qHB6SnhdZvHamdgnSxw7naji9p1VgWz3CPucm2gfhWGoW",
  "key5": "3W6Eh4sznDsYRVeZ44vp3xEmBxFUopVg68LyQ2mr6yubrbExzcTJX1wg8GkWfxkw6TTbh2ErZw37XbsATrZuf33K",
  "key6": "mEL6vJJq91i887h5FpcMPr1hvGkhPXxKJpU5b3XeXVUxbgR7XgepsqSWgTRa6PgyBTPdtKCcfH3rj2gR3Ji7ccJ",
  "key7": "3KyZSazgDM9HH4r9XnawQPcx4k4MD812CkPKM3pekjaTxYGCHtgnY9Phhr3iZockxDS2gpirKHHC6YxWQmvL5yry",
  "key8": "ND5Y7NSqvUxDsAFSFjmfuSxFWZuZMd8G93SLtEzScGsGWchkk3ki59MpzSMvVggLfbv9wfH8ZjdoQU33gmYKC5X",
  "key9": "EnXWDHBWdeijnTKuwdqTK7xNmm5DF4Ec3umAymMhrUpkzsYCS6Jx8oB2TFQYGJ8YDpVpGDtTS1r2YhV1qrcyBPT",
  "key10": "5B75czFKQCT8QXvG143BZH9433Bse4ubvixjsrusXFZbocXmLEQ1BnPZeWHU6Noq2iafwghy7GchUfzPsCDE2UY8",
  "key11": "3r4icAZ1vFkjrKuhZckfstTRF1fz7PTUKF5oRA9KSzHtZUwQSBGrEPYVgHpXjQhxULMZVvUKY1BCg3UjE7wS7Z3w",
  "key12": "d9KCb7DKhqzJR7LuHqfXwbHm4PkEASN43nJ7V9GiXsUzEMWD3rVqPsfjXJJ8BghvZrRSLcaYb9HuC53i8FdvYet",
  "key13": "2g7zbnVUoXGNmasYZu3xRt5hD24ubn8nqGwGJQcMk9PfC8BWhFsV16T5x7nu2u2ne4XnHK9U9T3sBQ6q9Ysv6GYJ",
  "key14": "3U64whW5SPdVagRR5gx8odRNgqHfAe8JjBV5UNkwUr5bJigqEC5p8XpsZLncjfriJGmajhQVnDFDXvqBNKe5E5iz",
  "key15": "2PAXUMDLt9q9Uq2BLiX6uwDYWtv1Jcc1ECJsbbKJ3gYKRunYumLRd34XCuDpXWkSyTSYqg9CVhxFHEtPC6XZoZnA",
  "key16": "4w24G92cbb5sMmhHTqy1RoNrPijw3qfb8TBCrqW1xsFFGUkwRqrPNbz2N12LU1hduWGMrZGjFAhrM7j6HEvfawNy",
  "key17": "3gJLaW7jSC36nMadnUhYXcuKsbFtSwvP1mjujAWu7EA5pf5qrnqojmyfJxs6PWcYqVqpc2jyy9XqEeyH191Amoyf",
  "key18": "3bj7oujWsDub2jqaHgfDs4ys7cZCoWNb8aARdQQF1danrVUsmkzEAdwEabiTXFF3koSPJhto5aEc1p3kgxjUQ7qc",
  "key19": "32ShAQs8LiguynTkEsJYVjVnyWEHmhUEvC64UguqiVacwCNvdxLsx3US2NoRmZ3BQzBA1Dv8YgKdgdfTBMCUNYdG",
  "key20": "3pKhfopBGfAbDGoAdjaBgAjWFAkWE7PSbT7FEFJnkcggHWUXB7hCrPqeHno6sNQXj3zNtwNnzoxqJGu8UXzMtynG",
  "key21": "5p4kNWW9TgC6ZYjVS41D8z4iUehwuriiWLjYvJSv52N8skrePkuxi5JAVYct1TDyiCZ5bJxyhK95sWRTffEcGRNz",
  "key22": "2MptDnzU2UBcwkftbFPhh7h59ZxnVvGfPvszCZe3hH44Ash6UXEfQzsDn6gHY35Fe3CJ8NEvcBDEsfjdQc1wDNMQ",
  "key23": "65W5YzjNGML57T1vsiydCnWtJDoMC9gxMC4ayPT1FtRVtojHtTVGSvxb9MpnHvYtsZL9n4z2D1sbaarTseG3Yeoq",
  "key24": "2AN62gTToWbdJJwsycvEryLhceUSyxtVMek8LUoq3hfwy2J6yuJSc1GvDLqTnYCw6iDeWaX9KFWCBXy9vvxzyyBE",
  "key25": "5dHrp7ncgejsUh9kJfV8nayb35EF6KqBZ5y4Uq2dD9XfWwCrfDERpTQ2ZLBA7zB6eQ9Y7AhnVxQRkspMVvMnup27",
  "key26": "2uMr4EuQpVzpXapNhuHieErqLhsn9n1pJjzPVc8twH3p3kp3gQ7PRNQkDuXJ8DNXj5GEiWHRjXvNv8V75ixgxTvy",
  "key27": "2JSreNa2Kt9oLczA14PLmDK2yh9DvoxuekinN4AnFasa8q2eG31FupBM4puzXYrqaxkCuyb9zDoDGzoChuZPwib8",
  "key28": "5sDeVbVrqPvea8a3QpQ24aEfKSgyKqSRxBaRj1yyPhZBPcXHMpLfadL3XpFodSE5ngMyP6GzK2hYAy96SfzxmWb8",
  "key29": "5ehfd9A398kkUBaDWg3pp88esnUEEojL2wcpvaLExEQGSEvu7NVxYG9wPauBFFXcotC2T4GXqBEey3fjwUeovdtR",
  "key30": "3RkAcxgvJ9pNd2i4rUx65DSDWNK16tf8PiZ6T2A5AJBCjGVpVB6pUxUFt6XyJZe2wecRFvsfq5GSHfQnbN4ckqud",
  "key31": "2u72ftufQxjH48wL2t9NxMVnKi8XL9TeZMfNwPSuvdVF1gRWfz5oEsft7LdoJVbhAQXhjxGkj9PoHW1dLBGed1oj",
  "key32": "CjdxPZ91CHC4bf37n8qWHJtUbwto3yDASPZJfBhN97JDdR37qTGYkDM62BQStYb8FKjywgtSffBEREHduEhsWQp",
  "key33": "B6HKjNnBA8p2jw3CEYSpNXKEZqTmLnwbCtvH5pTZLUmoLbKGm5dCUmixXVqPwXRgZCDyKyYRJw93uNnm5TMNVq4",
  "key34": "teQzND6RuaWTNoptbNTGQ96GL9CqqBAF1RcwCy2zSGCx1T3xeABThcFFE8RdCYYHSSWoe6S2Y2aSj1p8wqNF9Uw",
  "key35": "4aepBGnXe4p3JRH9WNHtS4nWreYuUmQoWkkuwXfEMYA9m4waam5HZsJjL8UQMXakisHYzR8qFA3BGvZiQehQ3fs",
  "key36": "4t2oDU8MvSZ8GdDtgajcRRScntWPutALMqonHiy2YL3MQLmJwsyccqc5EzVi7jfXU4sDAJq9gyEBRHNvH94kLBAo",
  "key37": "2GpcfKZ5ZEpKwvFeMrryL8K79LN5bJrxLHMw8dWz2duEN2334b8dRyi7Yvk1KAJFcmThp4Wt2RC9K7c5avCwLofa",
  "key38": "92mZwPVAjcR2yCxW59ob4tpbvQqWRQAFwe6ZZ6Vah1xUGWK6nWuv1PdE3MUmUG5VEqDJcVzFK8KExcW9CrPjpRK",
  "key39": "4tWjeRzPtHiKMqtzrL96K1qV7Z1qxVLtATGSk2hkS5XofsPvwvSbnrFPsHkMUiTQ4vmQdg13p2sCSsUtSdqoXhpT",
  "key40": "47Ys6kFsCzyTTdAA35u59dbLJjuFhrBz7iLZTdNwaVpTgamcirXyTwxvadDfdYCYN2cUjjNkSLXBKbqDYpiFd2yQ",
  "key41": "4qvSxfQJjDLRopEG4wGks2djmZZhdVxdF4vd7tnXgy7Njv3SqC7tA1DArPbXCn5DCJ8iP33YMH6aKEwo8A2Z3RnA",
  "key42": "3oH4JVv8BvtzcsAAD5RKDBnNFumCBnH3doMf9iuZsh8A6ykEbpKyCzzoMFfx8j6akcYHd4w97mtVdCC8w7fTiRCk",
  "key43": "5ZgFPcyYft5eYfvhF9RDRWrejppgtfBK19hc9egeUPd85mL74rqQRgbQhH39ZWEf44MCPvLCjvNKTkM9q5Ss2ffU",
  "key44": "efAn7a4zwocCESqDudXb5rkfSnCMJVEgt77fL8UZW1UPVjnVCg5QkQ4BfoQA3Ey1GaU43HiRkSwz8fYeRAYCTMY",
  "key45": "5NWDEkya8TUceUCYsgVfJDC47JZBNZ1oi8zPGc2NBXgUiBSCZbfzNBqhQfqy5rcY1uEjPTQvjbei8U8caSD2k3Fe",
  "key46": "2napM7jLaFYvrMexzcvYhkJvrhJSwUNaHGfNGqk7FN8TTADVLX8ECauv57xhYyzx34tCf5EP2CCSNWPkJyQ6FE5W"
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
