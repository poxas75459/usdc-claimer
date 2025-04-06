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
    "5s6eg1BKw44gsk2HNtHGHjo5h9aj11uLj9x9VNzMF8FFTcAMok3J3vNYuvV277d3d59WwgLbrKBAwEahbdacLz3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SdfNnjdmsCtW4aHVhCsPCNWAcbMaXMskqf41ztTwEAURwLL58RzG89Zh1a9Mtui2Y5AVMAg9ezs1V4MqSyqsWrj",
  "key1": "5fSGkX6gUbCgjACmjRezdKSRTep2c6Q3WuV4hd4yM5c9jGUWv2BZ2JUzQPSY77BACM9obbahnHyRmLbcPNqtXmjj",
  "key2": "39w1vxGNJKzTHm4PVECKfZ8qM9CNvzjka6pzMjdr3KnqmBNHYTVR1Pw7pNuzuxHLnTBFU1e3wLdoLgijKAkb1iEy",
  "key3": "42ch31WUyW8Ur3n7xgw8oRq57CK5kAPtK3hxFvAyKGc3Cg61nGqG5AnR1P33vZ43VnhrtmnPSb9cR7zKbHuUwiiq",
  "key4": "2EVWgE2s5PFDEHqFRQT8fURovdvL1gPGMy8oC9bczuts9HrHHyuw57uM2uiB7BfAnE6RAdJLki9VPdfbCDRQT42d",
  "key5": "56BF2NeexVP1YzjotCv9yuAE4kRknqheienfdpNF9zKNYCU7NgMrn4Kj5AbSwfbkYekbNDijuszfnq8H8ehxubey",
  "key6": "4HV64YtqhETQmnEvCXsRoHJ96P6mDg4Tz8cdWyS9B3B2iUrs4dey5kp5DTAYFNsAqDKjqbRxn4F4Tj1GyDYHPXvm",
  "key7": "L68tb7wLhigLZvvgfDVYCuG2JjwVcTmVcbu7hsStk3dm1TJse8ncL63FKWQF4gfkgguiskcjP21c6ep1gZvNnEL",
  "key8": "4jUcRRr9o2Nbj5AqSi9J2cpvb7ABdxBoU4i6NEQSvPfNbDr6e94fxi179Ca1VLzubrRh3VdigudiZ65PYYUcY1Rh",
  "key9": "5EJwqbJhwjLFpCH7hj1s5PNamRAd4cpQkSScHetVnzcsasj6ib19ecFvXDK7xdBKJurCwyWDncTn6bVoCMHibC3P",
  "key10": "5zwy8EZYcNLzpRRUMTX7qPnfjFtb1AEiDvvxJEMVC58ry9uyxZ5JjFHBhop1KUB4uKEaLhdkdG96fmdF17GcH8xs",
  "key11": "2RkF8tXenUbDeDKZbkhRB9hme9p7wC8T5NpBZAXJWLFdqcvXZYqtS1GZZHUVBfyCpWEufQWVYh9JbzLoJimzrKL6",
  "key12": "4ge1vFAmZKHAumhnfmMJaF8sSXZrdvZtyWQxP5kAGKrbEXzVxCv6XcMnRvpTSVcidA6MnkrqqmQwgNag87jjpnk9",
  "key13": "5B8sSSybcArvKFYZMM86x9NUE2ZdNzCYQdz5Xzd6bvpkzkJFZKjq9LP4ke6SBfpCbC4xLD6kzmE53DBViyGLfHc",
  "key14": "56v2Cm17vPDjeovo3rY6wZC2ahcxKVMcbpXwQRzxNBaHyFMSPXAUk11PnN9KvTL6XFieKD8ic5jgVZ575A1aguQ9",
  "key15": "2z5rz4KmyMxpTK5hQNVNikz2o1KUVkDBmGTHA7by5RY5wN3XCtxs1utorXYh7LGzpAqVMWzxXWeSV1E4cmdveAoo",
  "key16": "5dDvjeGrGs3pJUzRfbTCe8QZ89eEBhhYvM3gFRdQ1ANQPLiaxwvPJ9rvjXWdEKBpvdicP8W6J6YEL7ZdAqerSjVU",
  "key17": "2E4jvTdRMcLgXKSiZPovS8W57PFNVynsPdSywUtzDEqmZmLUkkXj2uaz3BPpC47Y1vxTwhf6RxWASE5uz5e11pEx",
  "key18": "64vuJh9BRjqGpsMotK7ekVWR7kg7Dopy4VjZBnjU7kELdR62ka9noHkH2Y3tjSxm1ijzqUkBUJqKuvAQvwHFGGCw",
  "key19": "XQB28iWj7WjY1GqW1R6oHCRBPB1VNYyiMkiPszTZRsdSBTM7kRh1HPf7NkuGLJsvpoepihZBAYfxFVhLffacomT",
  "key20": "4D96NmpVL1jmRVJmj1Qav4jG9sGdqPpG97qBTdhMQ4XtpDMTNtoxV2fttvM2y2ugdrf5UAXeJyJCdoaGbtP5N1Mg",
  "key21": "2QZqPfZSzHze1JZwa7d3baZZvzAqGGm3VekqJpXzeSwK92wjUgZzVQHkLzvSSgdSxQsbmTbQRnRz3dVyot4ems3H",
  "key22": "4orH6m8f1Xhej8P5mnqDErSbrayHkpVrVTRm6qZohMwTgzD5T1SHBBXJuJjdMwjHDfNmDmadNYpp6W5adP4xYHf7",
  "key23": "4WSQDB2n4mLfyioDNq2wGaQhQVEnF6TuyGnSYiD4xuRB4sf1rP2DGvpE9LBjYhCSJsb6xcPez2wsU5eKVzs6dK2K",
  "key24": "SKa3EY32y4fVDZRAhYn3vTTbJFitwUMigDH2xtCcsqgFsvXuB4veXkM8tUsSbwXHFdgJP1Pdhx6d8HRMx4r4cWZ",
  "key25": "iJyR7JxyBnKMxrQhxACES1mDpHPY17yHKGGG8gPR8qbDWtjEy2FXj5ktxMDtPAMtrWLx1ZSQMFJYNa2H2QfsPGj",
  "key26": "2aBdH7m3pjLrNVWTRaSrSTnuoT5z6fEsMUHhp7bizQyBv7iTjq7Y7Ey7u5JyR7V93PmqSEhnsU91bBXvZduYfUPK",
  "key27": "PeNda9iCAhzPrBsQp2ATwsNzyGnoxr8gvRLf7ZCrCXb79qjQ72onKD8RPd18xWG2TSVvRdYBuSQhiPEHg92BSfR",
  "key28": "Y2JssncTYsBZG7zaZ3nrk5aZNV72zhdvALVsZYkbiFNmm4KAbEfzD55kc5sEZujw8JAwozfHJfqUdKysNA3x259",
  "key29": "4U8zn9FxoHXybPpQCqKMVToJvHbteDNWpBmLCWXMzf2TVU4cHpxws1C8YXRfi8nUpiWRhenboRaAb8UUwHiRJdZs",
  "key30": "39GfMnGJkb7Gh45VKEih2j14x2pHiiD6UrMEZDHqzwp8YehX9NsPwCCiAhj88TvTjYMNKFZDfyD4py6X82BvR9at",
  "key31": "ggCH8Hr3aZnNs854NtbiD35MeDpw1vtzeuqhBQvKwqfQywvV4j1VMx27XtdSHhbMADzASgcPjWy3Zp45zhN658z",
  "key32": "62D7fxtqdJmmtLa1rEgoheVsEVdLFQQ5DibPWYL52DiDyU8m91ArPshAoBzryW9ZLah1czJKHx8Mo15sicjQPyQs",
  "key33": "Ffq6repEgERi5ya7FkLizAmuq3AKnRh5JMYxbuQvTjc9SwLuDh8Z3Tnyndr4Xkb4Uy4pbU5MR6KPCeBGhEoH277",
  "key34": "5cZsAhpm6gDebUDy8N4PGRCCqWFo42UqnUukZGLj4oTe4NjXqZPZS5E9wi8gXagzdtdMpQvnp46nWB2EAzRb2ZkK",
  "key35": "TxywfP42xk4FgqR4FrtKtQ4rj8xF4zqBPEW5eczDSrGnmCsCetgY5rEtsivKAs7m7DDswKn5k1LUdJ1nfWKNHMS",
  "key36": "4iBWb2PeLG5M6DRx7vnRuxVNTkybHLZQRaGiVaXnCfrDUJecWjZi1VWRJA6MApN4khnvs3JqkdSGjEU3nRhDvja2",
  "key37": "4gfhKx4PwWNUwJLMWCmYD28ewUcfUmhWbvfYoDFtL9tck193PooxkuGVT6pQk2WuPBMnKYUGaRaYT15daNXuD4ko",
  "key38": "CaR6QBcf9KrkUcHu8CqrZHk582ytjkfPT1dg2cn4oMjPYJxczCkJsJvm4D9ym6zz8FMJDQH9cRAXx8sX894ak3y",
  "key39": "3ygVfVqmGpGn1nrLyQRnrGFQQCZpo7BwbuTjtj4ibejj5A8ieVNKauYeXK8y2f7CHdLiywEJ2jHSDxq58Ua12iKh",
  "key40": "Hg82KLkLJg9JSchLvR16oa3jGc8DcQFXBJBKaaeeLczqC1se2B54MFeEoN6X7hj1Bb9GDkBfKRErzUH6stLzu4V",
  "key41": "4BPt5H5DaSqNs5bYU6mhEpsXuG5tetkJqomNi8dd6gV78ePRnRQCojDw49X7pPAReGhzASxt5wybi6paUN8hsmgY"
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
