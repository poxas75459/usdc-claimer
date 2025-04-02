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
    "Tsrv76CtL39aSYnJneBPAV1Y7ZNebdpuyqYB9g7GkoP6NJCA5A3wnLv7e5uxEfTehSF9nksuBhoFjzDQqmwZYif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aVUkBww2JeaghL7PLLj8KMpKpu55tPhDoAey3xEGKNd5ZyDAvJcuZMQsFAxfPpWxL4GNz6yqSFbb3nUQWHh1c4u",
  "key1": "3G8UhG8PhKWPsv6whD2g3JU2JdYCNvK1N5WvDwxoMHgiuV2jPmbHqtPWQUgWXdDFcZ2X7gEJZbhCYvVN6KgEDStj",
  "key2": "AovDubSrN9jTmGvE9twPi7QyTSApxxAAoBY9R3RLZ86JTudBMcEwuHfXxx3tjHAwnbCxU4G9UuG4fZjhUFEnf91",
  "key3": "4CkrBPnKkarqXvUYaSrkiKJ17y4u1HAd781xs6q6d5xdVZpb39RYNzgBcbTFduUJNiLgAF6SXRqEttUrGMuKYU4J",
  "key4": "3Znv4C7Ps8ZVERThZJu3DZ7dedmHq9V6Ans9b6Phs7qKLL6Kp7N2ruESTgWzbadvEke2KTh2SM7QrVqJVNt8TQLd",
  "key5": "4g1NzELunz9ikQUjUcj1PtLYSmodUrWHdjCwsnDb35CdNhdKGE82wyQjPryJZxD5CBMFof1qdQ4q31v825rYSBtw",
  "key6": "2oPXQ8TNVGkJnRBL4rjvYn7G7VmjpQd565iZrt15SJexgoHm6Di5hM82nZWnb8KstKYYsRKfHySDqxvtiqta5tnZ",
  "key7": "5fsEbFQhQnFQwZKaeke2ogAQNdyiLjrueYXA9J3UaPUtfLf7hFPZFyKpGHWD3CG7DU3kwNjDpDB537NxswvQmbzP",
  "key8": "3EtXJqzouU2gscC1FT2qfM32fGd5N47CTk7obpcqPD7K7wvCYi8NpWxNLSsCphzQrwCKrtcbXHwWUDQVpDBTKBpi",
  "key9": "3cVRUP7y7wNhWdfWBNMzfaJvryvN397pvLTnc8yyeNHDjabctm4VWyF5vfsXFTUpzeVntwdfGsnc3VwZ1vWijc3V",
  "key10": "5uza4whniZ8jzzVyusKW53FcX3DqY4qPSgPZwWFU22fSJQG8gXrsrH324YHFZHLtnwE1umwfmALzepRZG641zEDn",
  "key11": "42aBHWZUCR4gscJjLVdv7zGtViCpsiJRHrdSQEYTfn8V4RA42bKw9Dud6ymottLBRJYzPKwE3jGGkkQfL9uUJKKT",
  "key12": "rZU4NpNwCDbchMbeGey7ujRwxkxgBQJhEVZQqezSqjWxpF53rco3MajtReHQBbRsczhHpNxyianw8KPA8P23dz9",
  "key13": "5xWbCMubngm6v5LDPh2UxzhA321cBrEqaNpQrtTufA9Sph3uDzsKnwSATfSugBQNgBipfzLqLnpFXj3QPwK77ABY",
  "key14": "aqeTi1Q28PntQj1hwFFGCF64b4e8VAsB1LH84vunt3v2TKeUBmr7w8BUxAmFP67NFycvkFt8zCxwJjFj9xdZi4d",
  "key15": "5Pj53HxnTQa46uwqJyKtw6esTgPeqShCj11AoV1o5bSAGhH263T4MWvqtaFYEVPxAYVNngeeZjLsmE7afquAu3bD",
  "key16": "5kH6nNZ5JdGnf9uMwKGCSfxNVJ2NCVteiHx8LYHrYCAq7Ug7KT1CZEcsce84SrgtpfrMJi31R426MR4Tm67hKEjN",
  "key17": "4zNw8SY3NUk9aKxWQhWKYBEn1jVqt8RbN3njQivzk5YtswoZFC4hvnHxem2BCjsnhPoaV5PRwFU3ryKwzT6wT7em",
  "key18": "56s1ZxKjX89st77QcKHKretm2EmZwuFzLm7aFx9f6Um56k2pVY4LeaMbKvbAJzoiPaHhgP96LVCZ4eQ7GcV3Qxy3",
  "key19": "3E2M8zADkUxWSHpAyic7By7hUz7HGxoMfbtE82n2JBa3vSNJHPi294XuQanLhejRroyYnE2yK1JZgU4q8fJQd9aF",
  "key20": "4XuwXTcJRw1K6uBMdRnTAqQ7DphMtwDpHh1qURg9QJYcMneSWigAYWGC8eERwJixFYKGyEvQW8Tj7kTWAanPCCdh",
  "key21": "5cS5uui1f9wmDmXnXVFYHydGACWKUHaYiKXP7msYV7Yt1Mc9dJqsTS6Hb9mVd9rsgDnaWQSZDyd8ZSzxBsrfo7aY",
  "key22": "53CcMLCsboBEGw8opubBazsUeMoAeGdknNqrctiLho8j8zqAHFQTWfegvvzZeKxr4ZaWxfyx7ZajYd4eA3UBSZDb",
  "key23": "2r2yPHfuVSs5NLNSE7DPUavjvtCuWm3KyoP3XQbEMMoYXhFPqub4W9KymC1s3Z6bTZebWny5awpG1u5wrua7ySoH",
  "key24": "Pc1ScGm1BMKys4626SnA9nnv2jMYscKRjsbnB7USxpAxUR5XEM8p9A43qJrF8sGa5ZJEFX1mLxm54SjQehuidfL",
  "key25": "YjSLjoadzUWPCF34NxQB2K2HSTYWhF5c9RKKzupcYpHVU2jm3ftcPoo3qLEqMMvc2A5Gn64cKvGvTUurAsFDpVJ",
  "key26": "LCU3YU36A41Md7TpRyKzvdhMrTX7nfHCBqELUzToeHkpX5URADt6jiUmEE51CefBBqJ4iVd2m8BjD7MpT2QR9Di",
  "key27": "VBe4iJG8pAe8C5WBnoGBGcMK9jeY6fn2dMCFi9fLHuHc1wKk1xLVoWrkLpNHQ691cJbB2kzeygwuMNViMqbTaQt",
  "key28": "2h9xMQTuBjNfR91m5ih8cJJvZnfrWMheoEFS5AKyryY3ULs2MC6nkogqmhc3d8kHzD7dFoTLiXazp4jj65LyvzED",
  "key29": "2kzpMWJ55avfn4qdwMnw6e2JZczkJkHL9FkGr1nVRgMrum6emR3cbV614vFoMUGy7HT3QMtfn9P91PdD58EFrwSS",
  "key30": "M3MTrRKCtv4fKFdvUbAoYgQqm2fYi8C2N9BQWo3FrVA1ZFiRLNUbK833CDMfEkEwCpoh38cG9G2Uj9yfxAh5DsB",
  "key31": "3jeCtKQFADGoDuPena2A6NzDMsThHby2dwCPQN2wYvrxq3r9T4ZXCaugkEhRBWnDv6MgGiP9Uv5oTZPnCQMHV6KA",
  "key32": "4LkLs5MYMVp93hz4iaNVCm9T7gVt2zQfRvzjwShEaQqr77vUJ9MU5r1UDNDygdWv1iKDgYatn2VUoK4GB1Lt6hgD",
  "key33": "4eqwzP8UePw25dgb6suiKjUd1RNphGwHeusdrQehayijD6TX8m7a2cDZKVwUSXyKG8Sbgf8VZ9NVzND7qz4q3jAT",
  "key34": "4ERf2poo8vStcYCjVEkAhoyGZUvWBLtzuH6uhGtyUcsgHoeen4ub6ExvkvDBArxVfwbgiR5A25eFnH5HskaH9GbT",
  "key35": "zZKo3Z8HXVcM6F5orDjpmnaeFGqsnbzG5bwegXuginPNtPvjnXLisrXo1Qnj18cejixFRnACsW71XAGU6zPnW6k",
  "key36": "xKe6EkKTGiL1QG1JPtwT3XeCM2Dmy6zyGhKVvCcwbLkyErvz15GQEKenW1SSYmSBMmBRehQrhkNQrf5ys8LacG7",
  "key37": "4VXE5LXrpuJMFMGJfTNJ6pMKzGLa7hBQbWMbeCqTyXpovBd5iULLmYt7PJnoeSWd4hp3RzpCKNhSkNWaccFkBKuJ",
  "key38": "2ScBQhC3CakJB5g746YN7VTnfoXGnaZLfWu5PqNLLa3t77qxoqM1XgoD1nBgKN7cHBzmp8o7bYrEvWY64K4UtxDF",
  "key39": "4uHDoD6XPLK3kaCQ4EYkqdZm1Z2gPwX2x6RGLXy9DrwC1Npd4SBYWrjnTnnt5B8k9NoRQ4xyiQrSrme3xWiN3JZA",
  "key40": "2FDBY1vQMkCrY7Rn8KqQV1AHw86j3dhV1fyqkobsPuDXi7BxSaqQdZmpD9xtBgZ9n56xku6dszsSu6x2Wd4heBbR"
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
