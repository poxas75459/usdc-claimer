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
    "3i747kdJFCGwkWYYF6m3zAdj9GRVGJn62KB8v33pArCBnFzxQHsj64azHxqB1g83q8K2Gpowa4Eg5hzNjc4B3Lw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mdEc82Gm9KGLxro1LBjts17E2ohnQ4FRsuvfA7dPeGLcoWmXRxYfTM9RkJVRqNXynqEN1KHGu9N9dZDbi8VnrUP",
  "key1": "4xwAAvmhYNiK5KCt9cpWmXsNi4QBuhosw4wrxk1jChrxC7tkhnQFz8fe419bwRLhu3a74i7hvUV4Cxgb3eyuauFB",
  "key2": "33q2mh9MT9c7EoCqpwTcV9PzrocRvbfE19agU1ncZ62W3m5pgdstNYhFTomoJEH1SeAudAt7RXyRm5NMXVyW8xRJ",
  "key3": "5u8iYtGqVqBcAtRk4Q8umzaaZ2kJq47eDhV9YgBFWyD4bpP1nTV3Xjd24uZGjreWQBpYNZiHweo4CtG8bNg8Z88s",
  "key4": "1NGEV7B2oyeGoBqxYd9P7eGKgsARJ1FPWDGkTopiqyoRtCASAa13UTtwsuMEQwcp8JX8kovyFHPJb6ukxMg2ucj",
  "key5": "2HqJ6Li62qfKRu9xbowb2KkzmYkhwJjAJ7jAgMVyrkPyFpfS2V7vkBQnUY5Z7ss5SAMiWMDjmssFEoF4ArrgyJuC",
  "key6": "2h9NSzo3bdYcK3mBvfXG4bw4KE6hcWT45YKe1yrM4JgPtcKzVzX9fLPNhsH11G46JZ6mo2H9TbGR4qReKuAY16N",
  "key7": "4UbGdwQo1vtW4F5Zs2NpyHYkc1zANZiPf8BNAYhFspKbi7MkaXz2hbjvEM28yNHX2GGo7khUevZg1JkQ81Mgn7RC",
  "key8": "4K3PVzdJfohtpFFHAU2ojto4WYxQsFRHNPUQPhVccNTGV84tD42V2bUBMpGAE2kp6Z1vugs7hGiyu1ZpuSaX63ne",
  "key9": "2X5JceKuJ733jRCvG4KDwus2jzT2ce5kTFPBXfNf1vVCLZ1df6U9reaFA2WrsEvCGMT8KADihRPAjfseGPVhEJEa",
  "key10": "Z1kiR4AFH5T8YgMDQ5H6nW5xcc7JERkHu923ZQophfUWbs2DqUkJuL6vU4nQdwu67wurbDgxiZVA2SyEWLp9P3h",
  "key11": "3K6q6pWG3Jo3HShLPe3vAXWysvADu2kfJx2hY6Tpjowb2HJh1zTz9D9n779cPrtm9YCjxGr3PhryqGNkg5RLvjto",
  "key12": "3BJ7DXehzB3SVKcKvvDVRGz3vTCDynrM9EHDTngYYCeGsrEtC9wEsSY5SLVx9CkRqsMStts2egCqs8VqnygxXiCh",
  "key13": "4LYr1b1ZppxU8abzc9PptMkdyR4abWqno7e1JuBrt993CD23jCo4qnNSt535TPgp3qcg2UnVHWdgNv3m2FLy2qKn",
  "key14": "2WizJpsRACsimGQdrGteMkStuTBKtWv3XaUj4kwUGqCisp8pMup8NxvXC8voj26pp8DTqyZ8QE3WSi3QkHC1uRVn",
  "key15": "55o1wCQYYeMubpDS14185DBeG5FKJ5FtLMgNt6PcKSKBesxTF4qofQGRScZt3CxPcjB5xZx2MrBuPobLmEhaqXVe",
  "key16": "4FvTzzsCAW7Wc4v96gNpn8cnMKCahN8WZdX8jXBwtRwPT2rSbFd8XveMeRtgu5QG1YMJk8MyQzF67uDmjLTB3Qww",
  "key17": "465aQQQEaMrBSHnNpwE6KtoHDDj9xHaHzfNTu65j42d1SUs7tfhuAuWmAaZ7c3BiM3euAjmZHe6bNs17tahRh5ia",
  "key18": "2wXJWwrQgpdr2bqGaMQWYNR21RLqximHjikp7TFbCkAwcY8aXtAWBQxAACXZH3vEnLj8RRLr4jQiZDJB5jUkuQQ9",
  "key19": "2XdN5RQzEfaJBx3kqgbY5pXXRDhLagmb2accc8KEPJi12AfwRAipZnryGpChaVGXvuZ96qUYeM16DTXCBZ7Hq9X9",
  "key20": "zvqAwQxRJWc2BfMZ8hwzuvZHj3zs5wpAV4XXAKSatpftYTQVQkTBS3FuU5V6XT99tFKbHKtUzQqEnjWBfKmE1Ux",
  "key21": "2DCSZPBz5wd74s18hbtUdJj2kgkvmMnSWUyhJqtHLv5k1r5hRoMjZbgENavRsP2NALx9nnBBmN1yxxMUpQjYSqby",
  "key22": "5QBy1Ca2fPkfFUP4nRL5PbvFDWVebVrs4gAfz26LWSKKsc277Emm741kBugM4q444JCneNbpSoWSayqsYciKAKX7",
  "key23": "kXLi8r7z8gLQdiD3WqTPkJVJ5ik5iu29DBdYmK3rp5P46ptZrSLN17ghsRw7mYUtJbwpaKYqnND7CBky5Ux5B85",
  "key24": "4QJFj2GkNn1Z2xeZRenALV29boxoKxmkDarKYj5uWwswXJCgNEbbiBGmuUcbawYugoqcSkaAR3YJjZ4geZrNhagm",
  "key25": "2VZfFoDvYuBwoxoGuwhFxNms2VLyJp39QxDhk9M4gQHYGttyGxC8H8EzNnGB5A4eUc6XiKF3RqCzFGfL6SXahRgT",
  "key26": "3euTA2XMiPSwmNEHm9f8PqvjzPXhyREk1ZUXqY9p8GQADHTc79o4Hwjpej35KoPh3BKhRpSSgg7tj7BxWYibh9ss",
  "key27": "4ywMqR6xPymdPH7qUxzwQgWxEsqsCfaUwHKaZmhe41SY2FfY6hwAmKEhK9fhp8N2yorz4pGYuS6CanK5UMfnd2DP",
  "key28": "33S1jUz7xymyE1MXnxFH8bCbPriH7HMc8Cucm4AgUfRt6GyyqjPb5S5JVNeuXyh9LAhS3zsnJBLP68KXxWjrbS3t",
  "key29": "3x21b2ZuXquGAsLoGRj6BWvvFWrfaVBgp9u9fQsUN5BFRPmGyWwwTMAxKJsmqCJ1GLrj6UHQ5WWUAUXjX8ovvB4b",
  "key30": "3uwXhPp6YybUcnd22GCejBsUqRE4WRa48tMdjtxZbSJRBRkibMfBxTySiQfKd1U6h56TTPi4xEaLiLJkj5cJcndi",
  "key31": "ASChc8X2tFUS6KBj3wb2A6jGMKZ5FSo69nE2msti4unyRw9YTrbMvVqzbUTqpriBzna6gYu1DFKXiTabu2ebYQ9",
  "key32": "35uLJXkRfVHtimRYoJ5U2oMLu9Wxaixpy8PjvWzJWB59Pw5pkuUBnxxuhcrkULzhG2QJGL4FLLBzzUggyyFVpRcW",
  "key33": "21tcBMnp96j8XeqCEVYNH7DYmqQ8c4sJbeLUJV54HFQRLTjVz1SpdiTv7tVXWEfxPMB9sExYwPKWjZckA98ewqY8"
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
