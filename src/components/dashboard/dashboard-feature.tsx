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
    "2nXmMMgyvaC8N5xd1Pk6t6CZZ7iXkxzCiPACUCTJ8VVZGHCxvCBMBo9zQDdEy8zL9FSJWrv9j3QEyhpb3CSqBsVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47PqNXtNoNwhBM42Q7eE3EcRiL9Fmqnew2QM4sibaGLZFHA6yAh6vMWsuXVSLBBWFpKfyoycic9gU8rB8u4TL8Pm",
  "key1": "2s7B4uiiXveeEMsn3oK7QEWzmtrcnY3NdMhJpM27LgYVVASchWQKDd7gtQ9X4NUW7ZhdMpEfajTFaRxXPJTBEP3Z",
  "key2": "4TuYJurV3GGrXbWRkC6Q9tHvriYPJ82xiQXzMMZEb7YacEfZYzSfvBdKzpXdEW8JiVQAUwQGEYadsNMGHBgBebXe",
  "key3": "Hcdi2QzbZ9H5fQLYyA98JgufvCK8tSi6Eh7eDtU6zW3KTBzSS8LjMK3Nuh98FADzFRm8gZoiDEJKkKAcMT2N9TL",
  "key4": "3eAPREZeUygGKDGj3oLgcpo3kUMWcFDy1c7daryH6d2U81roh5ZiUz9Y1m2NzmQsuKqQQKezZxP9khFeA49FfjaU",
  "key5": "oGgkeCG6wfyZMtbhJjq3pWCkbToE7pzAyjmoMsFTzYEpo1qycU3QB18tZD3V3tLWSaYJespFwsat2N3A4SwshwV",
  "key6": "43unB2hQz11E2LwEp6rphm8KqreQmSuwCWZJjHVxPa5RVG5AAp4EuPYbrZoqXqYq9VEvg556i4g5NAd2xtwZQFez",
  "key7": "3vaSgKe8w269XirrWUokt3WDmUEG3oYpr3akMDb6eESW1XmevgR8ZAmyR7JEjj8mg3SBNeff7bmbkRjCHTLFd862",
  "key8": "J7Dq4i5HJHmUubTfexTJHVRHNGTG2XKTtBRQarZcu5Kc1ML2biRdoFGLZz7mjxpV96akpHu6sZnz1WXLpKvu3rS",
  "key9": "54VWeKkp7LdG6wGwhdZ5NN7bNR7PmKcaBv9m2GbEETj3kGNKcoziR4r5ARSuT5gFjEyYfcWhNhdfsK8U8SHgoWpE",
  "key10": "4jn5PYxLCN5kFXeXFUXFkKE7Vuxeo8yg2QzThjEK78N7zuNkVLDsWxaZ6NwB37HrQUDLQQ1r3ZewGSgMcMvA94uS",
  "key11": "3UTHNvvLc4fWBFKtVM5JJTCW1TsyfXoEyzuXsZhYxdToggXK5H33tByuEPqSJTdt4nH1GHaeexWXkXwZSCTXj8US",
  "key12": "4DiPkkJbRHJ9dH19TW1bcCZ7ypb5a1aVi4FEvu4BjFuXgAW5DcMjKTfDtTag2K7bNmmVVWTP5D85ZjbsjuydvFFZ",
  "key13": "2QzsVk9E8yzX77Y8BdWwvqzsb3eaxrYnQSJ5k9748XiiNJL4zBmzb8qhc2jHqi39HQFTVDmzXjkCboZNPmJByo1T",
  "key14": "24S4akymECUWyePuS2dSUCYwPmaXBPLEQEPTaJEqEhwryXbTyv5T42bwd7dU4Eeit2YAHgNDMdAUeeMtY4dwtLW2",
  "key15": "3aMecSxB9a6P1wnUG2NBEQ382Vo51n4HJYmp67s5h1FuPJj79bbaKCynLRF6zF4i5E6BkfMS7wFGDXLMKwKiwHEc",
  "key16": "4KkdJg6rjuWRg465VW8pE2brRhyqVpZ1tQ9XouZ2eT5pnQrZQxFxbfb6TMEWxQQXML7S7m2Er454NECKNw7riyDH",
  "key17": "U1vFCZ6LMDGeRxjfsf4og835jQcH25iERgg1vgaJuqm9rvTXjcmh1dTpCuzARaVWvezMfD6jUgz6H1TybDiJ6Vj",
  "key18": "EC3EutfEdmpq1BwXpXcnXEs4g14zb8kAmJ1wsnc94B6sW9Gcm1DEmH6GN5RJTmeThPa6ax4eKNm3cZGd6B9T7VD",
  "key19": "5zHfco16gUKWrnGa5Ja1FuBsRpb5Vp1BGko6o8UbnC1dpEheMcsvMfjtRqZoiM2p5ekw9xWuNdbsRZ9V2NmMT9ux",
  "key20": "E8p89hiaC4pbksSbmiQj47nxJKhmpRKTM1tsAGnn1GgVm4juphJzPcTXGsmx3tXb83ZBs5msjhptikzo4moXH6m",
  "key21": "5tW5XKGvRDsVBsWrvTFfyezcoEtjdj5QxPPD8o8SyFm14hvenstKPv6LLWyahHE75R4De73AVe7h4yFAePAxzwwB",
  "key22": "3KZhaVSCFuLkGbordd79nxNQPRVXKcTTWiMepYCR4P4Stxk38TGpRwiCcWNohwAt3VfFoCEYYS5jZR9aGvyt7KBY",
  "key23": "3VKLzxrbT9sS5bYmgNm4he7NJ56PZQiaFUWBYNRMcmb12Xq5ZQaRDGV2SaziXfQvRGeV4PFYWsKAjzP37vn2vjPq",
  "key24": "5iRCHPkxWNoWtWJkWaFWoW9EfURtbo92fKz8b2eLqZFYoK547F1JtgW7uKcZ8GrdG13yEBJvdprfYZiDLzgXfSja",
  "key25": "zoEQCRjcFF71cSYHU7pwMjginuUVTUgkH7wEYKRTUqyynkBRKwh8FLqqQWjoyyiF7SeYJdmAE78ossFcquo6pnT",
  "key26": "4dMQVk3j6cPycYXTDhqbXDowcQBufvMvV27MfRFyNNdgGTo7fGhWrdTc6gKMuYDHLe2ZzTpAjKdmvb2g6g8GQH2q",
  "key27": "5pdnWUCwGTWuQJ1k4GMyHZPTxUyN6vGeXeM7aDQvM8eQdw4FKeDejv4MX9dDeckjitoAEX5QFJKKb2Jvcwe1FSWd",
  "key28": "5CPbzMJBVjGdfJPb1hWZg7U9mbV4FNiUgvyQkidXfN6CuaF3sABhTZyMzihLD8nc2zXZbMD6JdWGEXhwhfiMDU3X",
  "key29": "bX8w24PWLcmbXHfyiZ9uaU3mJjnFfKKUNNcXBo7pZsXgujac5cFfJNuFaPoS8u3fGV8C38CrxqtrhQSJGLtc2XV",
  "key30": "5cvsygvPL8APwNL77ANr548gw3A2zqTj4VTFUbJnZicQGuAEyDmhQVeoyULbxjMudu8NMxjw1dGh8YYHaPVqawc5",
  "key31": "2ZbqR347pn9cfhiumRpV2Au7a8N6uQ9sy2prXmC6j73dkxG5KueBaP5AfVBrJQbsRUH77G3uMupLGUM6inPhWb4J",
  "key32": "2HPK2VkBGwUrhyMvi9jVZWDXs1zZNaWKMZzpocUZswGmaVuD1RPjcDZAjrqDRHULGj8rEFaJT2YTyZHXgawPKMQB",
  "key33": "4gAizpmoxaQF77R68JmG38UfF2ssc335xvRwGs8QTvrRFWb5JatmQJUMx8RzrLcnYUfyLqARDYCeNt1fM4W1JoHc",
  "key34": "5uLBcoYyfDZpbn8NtPRSpLhHc2b9CABXYYpE6BkyiGQgkcmGHZS6fxjkUDyBFsn8exkSRhxwFyco6YJv3fgvcEJT",
  "key35": "23EXeh6zARMpDdRngb15u94ayEkTiUsXbN9CP2tKtsU9qmxV88RUwaAWAcDncV66SNC1eyMNE3TWDJ8wupcNkUjV",
  "key36": "5t9xbhyUR9FWdsEJm9x19pWRCPda62Lxw1QAsk7A52cnDfxFh9SQCUZDmr5EYfdyUyuao7Fb1fvsQsejgy6bV7aa",
  "key37": "437bor5qC2f1btmwxMqJeNTbPLZ1xnUtLjyumwEMcWJ4PTfJwdd6HhPbjsJ7Z88WPKK6RzQSUABCGEpqzizkabaL",
  "key38": "3ovfDW9a5Dimafj11CbRMHsWhVuJyxM39eJefikcqmR9HEcsaAfE3yyoJdU9Emop3JK8PtwsmNCtHb3V1qkpZFgM",
  "key39": "5yEGfqotDXYbP2bSzicxxzf7RpPUW4ARtFRM7y4ZNfYhxsuY7J1AP7gXZAp1NctfNrNDPT4KZgJ84XqGa7w1WTqf",
  "key40": "5T1EN1uLJsYfa4R5BoKUfyWL7mSB4CoXes77mE5fjUFXgVutBb6uTYa48XN8JdnE9yVQisPqqcD2A2PVhihyrN5i",
  "key41": "4utxTuPCYVe5MtS1R66JJEbDy49JrsTS9CRqewTpjCsjCoGMNmkDzAKhXZRGrGozpq8YW98AcMcsNXAG6B6Xk6wR",
  "key42": "3xaeymxgScCvsuTXYsmwZZv533HVV8358jeV4qZPDvG4JFPQBRszsFjWX1JLEcBgy3deVyquxWP4NqJrL6yYJr6",
  "key43": "qVv2mbM42zvnmycq6j4H7aQut14XeYKU8ZZcHwgL4ygmZsvyFbzCD1jhfrA4FijYncuogtCTdDzR1M4H2xsJFvu",
  "key44": "ST3FP8AVt87rNYWSoDL7dKup4xzpHdHRkvLkDntdnFkj9ihLHBiw8C99Dq8ZsLeHSR4pwwLrEgQ5e9CpKGVHY56",
  "key45": "3w1vSNNpeihRt6thjwZ9JMAt8F3FNgd3iXape5mBmNFFdqWrgSgF3EGiVGHzcC2AcgRyc27apMZgf65V9cQKnon3",
  "key46": "56d9uG4D9hE6CYsv93WBYDnMxDbtGFmY9iC2ZbvxiPoFtGWE5ffssVipuLryHAiehMxWeiq1L3iDNCzM3MC7PDDr"
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
