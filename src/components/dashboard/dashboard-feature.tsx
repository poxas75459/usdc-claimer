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
    "3nRNAT81NSRCxZoo9q3Uo4UcjbFeE1S4M8LCDNwJVYVjU3fk4JYhAMS6L7jpRivKY5y7GcpBUCFmUJerLYxTWmAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o2iJngQL5ywRnDJ9kZnztSmSs4Kc5VLTg6SYhiNMaUXxnbujJXreCvRGZyCmoTLYMVsdwRdmiYSPPq6emuh1kmt",
  "key1": "3m7feoGHWYHSYgcaQrD2mf8seJ6aF1e1eJwfwieaemGyqTfMhcohicA9T8KtUztd3X4EAnShmRYZ8Fq67c3e5zyh",
  "key2": "5YeYDNicTCAWHtTGqAeR94vtf174hugHf8BdHr9hwv9i2udnQRJ3p99wch4Rgg7NikDrbZcUVqAtnACx84oaeCKi",
  "key3": "62SXfyEcmrp45A4pTucarvr14Xo2cadHRMLLsM4yr5jE8xeXNQUTrWJNrUBppsQwaktsZpj6uJWNyPKKAHqSNtbx",
  "key4": "5JdBkaTDah7npNQMXLiV3sZWj5rNxWKZLXyhHmio3g3C1MQqt4LJWUzuRh2rydqTZrb4xsvSXZqQ8EYmndFQEYZ4",
  "key5": "2kDDvikjLcUwFsTYsEvin7pRw8jyMezD362ZLyoTfmELWk6PEh5DWdqDT6Y5i7GfZQkfEUQdr95PvShXrp8N6vcQ",
  "key6": "zc5m1SRi6UMqyeQch8t1KYKbi2TUCT17WNmzVCdWMeiPHnbKqHpLY7MTe8wgxP4tzzuKicTt7dv1yxy5g6GgEds",
  "key7": "2hiiN8d2YxjYUJgEEBX6ytnEBPeto2ERS5Nd7sieNnvUfuMQLR8WLKbgYAHLY695eEaym7iAvf8ypapdF4mRwEpa",
  "key8": "daQDJ2SKUZ2JLdyqUdtFzvULciuCJWDg5dvGofWPPB8e65VXZwELPdywhNEbohvnKBEUY7qeD7PepDzFFZRLkWV",
  "key9": "2aXVfxRAKfUFAmJkWgdw279QJZbG4qk7E1NiHBCXzuUj8EVJ2BrAsHNDCUKkPSR3u7o2eDmHCzcTh8pCmc2b8Ygk",
  "key10": "3Ys35j9ogJEbVfJnghGwi2Fufdb9ycAf1pCuN554HkFcwbR31pM424KtzBpoew2VcHM9g83D5RckUke7kuHbRcZm",
  "key11": "2Zwk8QSz7oagTjeG6bf7h6UdKNMFDuRxvzKJNmZT9KoiccArBqmxBJYvpoDdvpVbT8LNgiubC9uCckfPDh6vr2Po",
  "key12": "kqEhCmLAFD8jzRrrPrakYV7o6ks8mrTNcG5DrGLdi3YNaZzb3eCBng8XJsfUjTaEs2kBjwfETr9GfRwVSni1bXu",
  "key13": "vmUa4vsZj4HVT6nZVELngirYWkTbtiZniEdApAmGMLWqPANN5nRNMQz1tq4jY6fc1Z9oXSx78SpXRMg7VKpHDT1",
  "key14": "3agksrrrwfi3sM1ndP9HfyupuEY4GxAzynzFxw8CspgWVqcr2z44Rb2SbW7oFRFr7kEzCWurxQAeb3KPfxtBeEVV",
  "key15": "dsfTkzrRyx2QQM36GF4MPZC3eWzrZCZDbVM5WNAd8mJxqDaUbfRY3RW1w9P2EApn9c8M7DJ2v1dVMjhz1Q4w6FT",
  "key16": "4QNbB9xWriAgfqkEJLeD6EgwMMqYKGANefHoWnkLTBGZqxpWYXDzc9upAR5s4VqJAGu6eFtXL27DFGErsHmrw3sd",
  "key17": "2pN3HQW8UC5Ycm1p9iCro7wokQfvTZx7BJ3rdvGnWUeXEnPdNrXUotN5CKJb8cyAF5x1NvXHDGzxYMMRjqF9kubG",
  "key18": "2KC4xvEXMAkgwBqFUtkBvCWn4ZDFkvxTHxhkzMhRR62HVQiFw42aXeHj1tiJ8fEA5B93Lrpdc5kEPLRbPby86dJC",
  "key19": "V7kyEPJvbxsE57VsV119uArRwjBtTdhbgEzQ5mGh41hrPZFWyhMD9JmKiLtY3rdzre4K7ew2AXdteVeH8CnAfAU",
  "key20": "35jDHB8zntxccpPAMmnmoa4YjfuoPW5FKfhkk2hkydD5jDsrfLWyj7m7YeyxuRG3FaeB9RZFeNqLLQsW95FXDDmW",
  "key21": "3pa2r3YeJmjNs5FL14Yo8uy9f5U8PLsaHP7YmLKQShF3bNLi5EiLn1ZabVgw6DRmZZVdUGsxqEJHo8Z1RXU5HMDJ",
  "key22": "37ua739AdUfYoJpBtQBjn4J2T8mieANYkEjJ5Ey4LKvsxEsP8tXzn53hXoxpyDi7tAesXWuyPgarTukMdrRgY4GD",
  "key23": "Si75oVL8dvxgDjnYLbPvL61oZCNgAAct68RYgUhxCeKqwoLnZDAsQTRe5jWx3oyVL2MgF1YgDYbFaCLwbAQz7QK",
  "key24": "61RiJLdVGug33czYRrRBhZjKzKPVgJyapJ9dFcCwAUzX91MwxWcrF5hwzPEudF5mFQDvhoJmWsnJFnx2UMWv5jde",
  "key25": "2fM67EERicXsvWUYGXpJDy58XWwzdF8NzzLV7aa1JVLZdT2kGhUkpWJQp2Hw6w6AP9TjgYcUNQZrqqtEx1nMe7Kg",
  "key26": "58B8FQasr9L78fuG4bHmdi44JxK18iZSP6pP4UBEBk814LY29dve7p8C2g2FkTKZmL3Rtw1kL1rkzw8NqK33VYS3",
  "key27": "2k1FByNS6WR3MVzxc8ozhN6Y2K8Earu8fgf83n256F2FgWnzpTVd3UMMfiKkN6cuvYDSZe1LDaLkjT48WXVQqt7p",
  "key28": "2zQksh15hnKnaRtguxzbjYd3Gacei36kJAVrTFzBCkHgodoTXxij3FR4bzSRAA9mDTbDYxJBmJeVenPMPuxycm5H",
  "key29": "4KFJeXeDs2wJbojVDTUTRGPyfNgvV5hivG2tVmkP9soxYp2gDptNk7dtd6pMhhmDUAPbzyCLthR5JzAs2xtdKjWp",
  "key30": "3dVHy3f25F3ghHBRqygZwiMywnjYQNCVAE1Gehen3AwBHaKX2wksMDqbjXDRsqYTXwzrSbQVeNKMnzmuEvWoDJzM",
  "key31": "3F3WaK84nYMniuxcNV3PyfZsohcAhNhJqp9sFEw8Y6KwWfCmxQyAk5ciitLYi9X95ArBcyEkdN8Nymt4cn5Yu6sr",
  "key32": "48wBF6eydmaMP9tGkCBGrreXscV3d2j2EGcHRGFxDeUUYCJdQPyFFFf4WR7vPTYvrawnk4TBrKHTwhcUHzeCHR5K",
  "key33": "2S5w1jhDSgrnaHZbCc638kg36XWxkE3ijDCmAE17XLHkV7LV5CxHbn3DXkPVF3KPWp1TXYA8qhM6SUHbTPmZPzhk",
  "key34": "4t4zs6bWpxn8vJk1NwoWjhhQ7N37jVntcgULDcpoxD6s66qasLox1g55uPH851BxfQC2CHx7Zc9cU5MbSEaP2MCy",
  "key35": "2kWBJxgwkDFsRmgHYmTyKjqHEjrrPPZ6YC25pE5sWVHGuqwHN4y4SbGMxrRo6658bhsL51najcyzjEwjex7x7PM4",
  "key36": "3ipNXTB2cUT3bNUvhkWdp9xSYQJVQqfMmV3APtCYeZrZRbyqV4cEjntgUUxoSpij2YUsdx6DK3vWXo3FEZHSLyLY",
  "key37": "4HPnzQKzB9EmWYZv2kkvZDiZ6r44WHUBde2ghtTnWHpJ7yHqDwijxFZhRNG535PSLCFG8f36s2tHqF7xsthyayci",
  "key38": "3J3iLDJaDYEgPXUq4oG851uFyq1ziDxdBzwjFwDhEQ3AmcmYrwVJ1463L4RzBvGq1hnKN7grWFGrDmXmdKQ3eJbj",
  "key39": "3218NDwaQqewASvkWLmc3ma8K3Rig4J5af3B2EZWLQC73QaUd5FV7LUqvMo7VYa6kVxpGfCiBq2TqAQmwnHf5Fu4",
  "key40": "39zPmFtidTwgwKapEYzJkVbT8eTqSzuJMhuRpswCZYWvX1M8Re3bza7aszvVFLQQqnVFyBNsmsW1pohbpETqK1YP",
  "key41": "4DUNNne8MWy1SsBRVzz2vyJvxCoxfv3J98NPxSsLQVyjheRZji8gDvVEKhb5QV49br5bNNVKUZKWqkvYMAQVBAMq",
  "key42": "4RDN83dq6YX7gZ6FgQCiatNYLVjrneL6ydhibBceeNFtXeTA13inqrMuu3odiDwdDvj3sFKxptH9sH5NxXRAZsC2",
  "key43": "2BsdSLXt5b1ZhpwxfrFMnYfMuswWhGBaHVJPQrYfhstDjs3hB6PmXFg9aVx172QkcgYn3cNyh7haGr3t2S2Es1id"
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
