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
    "4s1JQS1dpeEuz4Xk8b8ShSngZRk2N3gRoe66GmtpX7ZqCw6G3ybsuq5KoEvzEjrvAE9EFJA5o42o7EXktsJQcrQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FrgAVJVtVEXZD6rM3duz1jqjhWvRyZq9R4XMfxAu2ZTuL2uzC1Tk9FZcpfSC2JJAHkLCNmeQdZt4c669Erk1Qd8",
  "key1": "4nYikoxQza1aS494ftDxaxNpnzHRE1jNNMRENfgMeSMGGt1wtovKHhG7DjfKQdeGgEAx4Pz5As9VGLUQwvsfrSg8",
  "key2": "3zpcdFPjGhXhYgCMTf155TL2GHJXyWXY7sZYJRcTWRQawdycv7RJDbJT2v5oGZ6mHdexaNfCTTGXPXgvsbWm9m6c",
  "key3": "3zEwj4YWxuCjDfNj8u95NFDL8vMBErTEMYznZuMFJVLeBHpw7wL8xuD1ewApy9hKn4A7Bf5SXHb5zGGkCY7eXKdK",
  "key4": "5n2q1SR1Lp2MReMJewpZUj9g9M62ANRLy2B7aMxqhTPhepty2HUc9YCQiuckgaeqKa6R8VY9Ahu81KrFiygsckTV",
  "key5": "3iHKX9jqssnUEqhuRSbtVCq6AoRQuXoa4YXB5CvS274PSfL4Ro85eRrfED7zKCvBh2EQQNHeY8TdpisnRhMCqjVc",
  "key6": "4idPuf6G8Lu2Uwa7uctgxJHXJsCi1qRQSoCYMmtuoUkmgJLWBeUrPZeCZQNPozrXxX1Q1fHGr7jaW2NxnkA9cS2N",
  "key7": "2R5fsJSJSzEMjph3dsv2gCVtPQwbuNsKBzDP7tA5ApnVN1AjCRcW24HzL1LiNWRC9fhqnoU8sFj4zaRXumcVuCrA",
  "key8": "2YqkWW8dakovfs88gr96ANp86B9qpYrxcnWw5ksjyRoMYGfVWHPo83n6AtkitYN3Fr8wovtmdCujyd4QAS7pikgN",
  "key9": "2B1T71mZwwREaG56GwqdEyod4ydqdty8odCt1Ft5n4x7AUcmEx79n1cunRYqmGQzCiaejqKQkaQpYesgnwht3tDs",
  "key10": "4dkx5NiKgNCfe4GVizbKAmiEGR8hXhPsbgDSL9NaPvZGj6PLwz8jjU6WdfFRncwwM13HrQtSgQ5kjaEAP6cDNCdZ",
  "key11": "s8vNcLfe8oW3vKPkF5FsdRDUgDmhKCa4B5kcb496Ldp3wcjNUZJLwBQknBgr5wgfMeg4etM5RbcoYfav3wg9WBr",
  "key12": "2qiqbP6v1CrwHrdG8hg8cLEDTofP9p3DG3bk3bCb753kUkTF34tfkkFfVrABTALP7TN18VcoPFrpHZoJdHM34VSj",
  "key13": "2o6H12f6BQS2piKoXchnKsRGeoWFcqkehm9BpyowfcoUpRAVb9q84ughgQYKNTkzU9sHRo5VZxYzz67FpLfdKU1L",
  "key14": "2PTxhxmcTFpddqydJK479eBpihawiiQML6inmkx9As1gsrwDA3syPVRyXjJAU4SaNmLhHHCb7tWCSyMwoQKGjd9f",
  "key15": "4dmLayK9bL6JriBMMusN8Ge5zogVLbCGCefyz5ykUiPA9bT9WcU1Cq6Re4RQYjMM2cVpqFB42seCPtrz34hiKH9f",
  "key16": "2PDwYWXr8MBNjg8JHpHqozM4mqawKjsb7s3nfuiEU8VK5f57vUafP2rYs5K76pJvkEdDvnRADXwtmJzqf7ekMQow",
  "key17": "2LfMfZQhg32D7UBnwAePwWq3SGFJjE4fJmkrmstunvGpu5CdxWt5kJFfTrHtDqnepoEmakZYwd4XcqjPEoCHfJsJ",
  "key18": "4uCh8pQY6XCRfSgB21oz2XVYwNJH5DH84ct8iRVd2ofSthwaxR6r6JYbhA8mHw1n7juc436pmg9SEzyncvCoyBer",
  "key19": "47TusYxrwrqRSyCEM4hFeBgPJsbtsju3TEAqr6soqb9KdjwGKQTnygPxDFkj9wmDjDJUzHJL3aonR1ZWddWaWKKi",
  "key20": "29hPLkEJ87TkwTX2aYL8QugQksy65dVauyxmEq28DnnmhCN7eqC2vLRxJuEEP94aj4xwWRzkCXPhJZdN6tcWLFpf",
  "key21": "3vmyom2scSDUbfwBUnYUaC8D6Ba2qaAQDMwUCgbmTaWbo3w8iWonzuBzfKGBhTsJuoHbneRjm3fmJcGcA86m1Wjk",
  "key22": "Mhy95MdUYZhRcyKqn3Np8W5M6qXUtwua8AigcqueUp5qc2rXLxWuNXmGhwYUzsDzAv5BUHnHmFbNygdgD4xCqDw",
  "key23": "4N3LFvkfzvsbdjqKFkn2n33KtGpbgv8cqJXrbZ1wNYP4zUenodpoKRF8krmwszuwf4pD8x1unfDUSs37JLwdFHhi",
  "key24": "51Zwu7ujHciv9zT7LHq5Gbppbqr1srm8igYV8FUenv78347fvdHtTZHUyN62LHNeE8Nyqyju3MozVk367LTb1dvU",
  "key25": "p3JgqABk2ZcFtsPu8Jnu4MYX9nFcSiNTBBsNL8abLY1TA431Wcox6RcXkhh45bA12ZMqj5kjcGKJpf7NWHHkrbR",
  "key26": "2jsoJNKW8WHNGjmj5HH2Ji1bpjMqDnur7jjLHNEiCmrB4ghHEEnYZjT6Z24sJUsMAT2Vc12phmFRs4zDBMAfHfJQ",
  "key27": "5irfDKajc37yeoy1b9eSsBnf63qLuHnByUxu8JUjxNREd59PpfFTx97bf92PyWVQ8qPZsPoFLSAofGJsqMQ9eXS",
  "key28": "YE7QoKtJ2ZfofAp5gg9FLNB5MLTDxvmja9W1Gu7oSwjq2fxpw5tJ3rkRjhX5e5zHffCN8AX7wDF2iWhBGJDWTfW",
  "key29": "23Ea8otcRTNuTxghxR7Upaetq2nMPYwR1RhgAw3HbTpYRTEUjPcWDKMBL4ArCQGZ2bjeuKUe6ew4NCby9DN47q5v",
  "key30": "31SymRKW5GkDx33MtGdCSJzChNAhwhVzSvLoi1cTy32EUQSXjB5YSDc5HUu48J9h2e9e6DCNPYkXHF4QDoV9L2Bi",
  "key31": "5q79dUFunnzt2KieuT9qqBHTusLUNGJVNRtpJvjqtjPFysDCxH2CALjsitU4cFrkCtZDC3FuzanMbjw9iqEg9746",
  "key32": "2bBwRzEUUFgk2TZk9qXMGjDw2RQLms8VnDH2q2qkB47q8GxqKSn7P5xjNKRQBKmXfKPcGerpLXp57kQUijzPKjEn",
  "key33": "2WoXRiAALjyRiFCDXmzq3h7wDisLTN7nTPhymcFuvn7uTuKeJ3xJ9NyQwgCTssm7nayJaT7J6kMqTtG7mNb8dbn4",
  "key34": "3HQegZQ1umea5Rmwo4UL95qSMgdaWy3QVWwC27kULmrVkKsZo1nwpEo4aWyHNc3VEgEN3GnsYuZAaZgeb5LERBmQ",
  "key35": "r1zB8ZZeGv22VxmoqfQHQrD5ZiytHGsMvT3Tt2R1pfFz8LugbZsBdWdkS5zfPL55hXsdVwNjU3aQMA9HSwq78rk",
  "key36": "5VzcArV5zeHbhzvoKUTq1PXrBbkwkfvVCmuauiaMNeXBjBiu9zmusaDDtZXiZBAzccW96jVGhGVGtXRfQkAe4oWd",
  "key37": "2pKeZcLHTDufL8BkMYBRvXpBkPE62LgCGLTwu3Laxbv1oJu6BUUiFghRRxQpufcVHdBXVkBjoEv8L1Rv3edkECwC",
  "key38": "3rwqYu9vJimTq91zwRdett5NaQzgFNAYJNUip4jEaA4iMgSBLud54d5d3TScGNkZVLkdiRunMJVXCCR6muEqoG4P",
  "key39": "4JvL8SjREuUxKpYk12BKzajgkCqGHa4Kty1QJmxDcEZz5s1xTBasPCTG5EkZYZ5gA448xqLQQvXhbhet12k6SpS",
  "key40": "qrJxMR9L7hBu5M8wEzWNktuVS5TNnWSeEiHKvPH3VB5Wm8zb94gnENV3pPT4heXHcd4WntCSpJWss1xyJ4Vpraz",
  "key41": "59ixp8Rgf7xuGrwCqLMYF8DRvtHCZJzxhCSQuPBMiQvdHcZAnj38MY4uy7MAZWugGSAhB29ABZyLbMpaWoZzKVDC",
  "key42": "3S3Y9TBCW5EEPcW6ZY5Tqg5S9usiXkhs6RzLqvZTuq3z9yHNwgFRh1VphWBN62YMZ2FFebDfZEszu6aJwgs9rHeU",
  "key43": "52ScY2V46jStyvhjBid5Mavp83raRBBtFYYcp7JpeBAB8uKMgsvx7cwiGx7cJkSVFkfgpeavt4FGVQqU7kTpGDJp",
  "key44": "5Liohe7ie9MdcMdi5uoDR6VRLTXRb79GLxsN5CcJsjaP7VdsRnHbTM9X8bKRwdNKMAYiHd6g8f6ccFpUDbXiS28m",
  "key45": "2zVrRBj1JaLBRjHk92Limo1b8tYWdS2HKdXaiujAV2p9P9RLECshk7c3tTD3Po7n56REAMGvdmsvv2bkxd4ABFit",
  "key46": "KEMwawsPLTXRnz5Wgp3gHnd4big8dJKgNeaVM9zqBbQ7VYGupYokATUCC6pmFwv7zbpHKjTf4x3HkaA7Fj5WTj7",
  "key47": "2dtQqf9ukPptGAnTKjsR3yjfJ3szzSqanA2HMHhdeSzpzcgAFPnmhMqPnFVKvAqQ2EiypshKi6fTBuQrJdzJ6CyB",
  "key48": "4eivaJL4SPSn76uVr6Q4dh2Eib4QE5hCHaR4KRGxqpoCQKaSHpn634As7ucZDkD7zoAxYe1w8aZDUM8UASJyDwR7",
  "key49": "kJsxDHEvLmo2tssjPN2JfKFCFvHhv2P16pSGPc3oxGtdsrTDU4Tg6kG7GJYBx66RgzsNQb6vWD6R6MFZtRvrf7P"
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
