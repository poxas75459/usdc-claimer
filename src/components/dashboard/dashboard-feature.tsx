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
    "5gbPNthJ349AA6pgrzsUVcpRp8zDdfcwm1MV1TsirGW3deoi6PT8jDMGcyYJ3cyYgLHZWQ8dZPSwWTUYVqC5tuuP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A5zexsR6HFKeXPb6Mpn6WndVzRzwasSS1QeWYit8uSrJ7bRdew9XGu8o1aGfCxu3Y7cWHgfqtBQKu49xqegsWpJ",
  "key1": "3XvGLLvDkjRDDrit5bFxWf8oKw7Qw8koQ5b2rwp4FgkEAu38wRBDRqg6hcGz59tePunhpfM5Lfsg7JRXMaWJUEpH",
  "key2": "Y72kH5dbp8gQkv56gFLxdKJZYcXffZjxL3kYMXS3m1u5rUmyj1JF9BzjPbHswt8mCvT2QXXk6KmtSf8VdQ6sMhh",
  "key3": "2H6VgywfXC4n5WqArQ3dp7UMvvdw3bQLQMY35bGBHC1RS1JgVDSCsfF3PCwWU7ZUnY2EQSNU81hCUQ5WVc1xZJPN",
  "key4": "4eReoLmUtgvNcHz62G4yq323jTU2aeSKuyDtXjqWqna1J6m7LHF5c6T88xRTwhQXGsHmCTiH9YkkLPkcB44WoPEj",
  "key5": "2ukroUgycTjp6xe63kgPnmee87SQtUUoKhNn19N3FJBwX5HmK78i88NYt1TAsSoBBDzmi3uQJHKD9MzZQfTpFkMn",
  "key6": "QMSu9SAQwwA7xsTC1oSTtztX3AmtysSoFMfShEhrPy69XuqTJLiwpr6n1rwv1aqCY8QuLSPTo6MxiupiqLxS1AK",
  "key7": "4GKGahUuoUXxDsKSwZ2gro4HYPpKrLGMx5QTX4cPxq2ohLQ3SNdBK4TBDUxd3EypEUeXkRA1y6syoE9eLwzNTzpy",
  "key8": "3bJrxFMAB3u737hS3nh92SP7GYsLQoKARhTx8EVPZhRvRsbs4Np55PkuRShgqG7EqknxsSTjNRgy6JCqdmAxifMt",
  "key9": "qgCrUAqNHRSci5S65UE9c9vZo49N5FixzvvKpgRVssfJFy8PYEzuAsjgGqxwMmpTJL2atFB8Q9YHFTje2p3cmji",
  "key10": "4heeHVCm8ft9Fi14KgwuQHBL9Tck3yjmNwH61Tkbc4dYMuZbAi5hZMyaXf7gMBbYCWzT4HuChbAe6VHqVqov3HdY",
  "key11": "2bTKWq153TQPMTQBL9pkFu1h8aPFxXfABmfZXkD7UzhUV831BV6hFirzUUoTwk7dBoSRB7APUrwVwFXmrstAU7Rx",
  "key12": "tKxmnnMsR68Vjkwds7eao8w1Bio96AvDNdCNEr7eFtZjKeWv87k1fHqVNmf7MDU5vbgtsVspswhXEPErPrQ9RCP",
  "key13": "2vwVdx7KyvZ6DQ7ZLtVw1ZaphoPJYuf8mbi2PwbnwgDzzYhZDvVP1csukLdVBnSgMLkmDKiYf8XNbUU6B4dtA4A8",
  "key14": "46femzJDZm4PxTxqi4Wu2k921yd8mWqgqZQuuxCecN2XVF4eBSTMCgnx9QJpEKWCJyS6FVD5MJse9yq4qzoAhaD9",
  "key15": "5th3pjXvyNsKgHPoovQpxFtzMQ1zdTZUExK4Lf1xtWbW31aXy4ZrE98hHqRAjPy9Jxms1KxiEjmxBsbk7z5F9U95",
  "key16": "28Wt7nwyebSv1CpNxAb8LLDmgVwYWBqRS9zZm8dP7PDHt1Ns2VH84nU1QMLta5uFrCZrQadk5H8Hzi41D2MczBRs",
  "key17": "8Rr6BupoTihGNyuTaTJuMWEK11X9rFd8Sq6SqcWPNhVNP7hvsmWYeymxhdwjTQqDJJRUjw9kprroTLXG3L1RrWB",
  "key18": "35oBM9fQn9EWDjoe8TXqpvXQZaxns8q7hcSE586JwZd3qsHnied9zTWamfrYhfsTdn28hzRgWLAMGk2sEusSYMvx",
  "key19": "4Ln6H9E5zKCnHxZLn9Xe8cFenWKMAp5FBefN1nnE4m7rbRAKaZfD85gAfRuBd15VXqqXvJRwXTuifGnfG5SQozg7",
  "key20": "5uvDpARrL4iC4Tr2k9UhjrCL5n1GyjCppbBjR5V7HyAcmifsxkMWmDGpADkWHnky96Um4UUeFMd6XUBpSqkckHaQ",
  "key21": "3v1X3G6z4LJwTRDxZoFqmaqT3YkwM2uWaTdJeBc1v4xb6g1sRwgGzAB266cGK2ydvRzBGR533nF4qTRNYTZLGRQU",
  "key22": "38f64J4di8JgRPB6SubFHpmv6isA85fnzo37RPVa6GHBW7g7581nLQjQm1a6pQAsEJSZu6CswevH1SrFWBhpoWW9",
  "key23": "3H4wh8pZAv6L8JtmFKMKKAtKKBzhgYoW1nSEe3M2KRk9cTVj5DAcQjPicQF4T46e7J8Mokc88WQ3nrpZRmmmu6cJ",
  "key24": "3Ye5zL7AardWDm1XGVAp9CP8kYsqxHYgRRGYFbjgt3hJ8dBsyVSZeid1Mg2JWG1Z1fs2JzVwn9WE7Q4X6WX8vRZK",
  "key25": "2g9BFr61uFLTaS99srNCU7fLMTfzjHX5FKjSq3pEywyPggcBCbnd7YFbvUG7dBro7SGdSdQqh8txQjWgHVkWz47P",
  "key26": "bzB1kCGEpAE1pMAwfhHy4Fu6ugWTHjmAXPapEXGx4PTEA4X7MbfCntNNygVXa7BaS2ZWtYYENyQK4ToETqNp4rT",
  "key27": "3A2NLBxBLW2tLhPina8gceMxWX7JvLHQr4kJmC2ph76crXGmnR4ypRogPHxP8Rde7hcpFWeduewy3vgFSBFXHu62",
  "key28": "4wKyWfBVWnD1rZyRKGs2TBfhD5Hryuo8rpTwhNYnWC6P1798ePFNxDPMkzh1VBLKR56GPhadDTX6KuKyCHJZ6txA",
  "key29": "3Su6MrpCc5kFN3phMfw8LeDEeLSksV9GrGUnXW9A2BtfBaeS9hxka9taH5iunwjLnn8E55XWsPFFQFKa7YKfnihJ",
  "key30": "3XGjQ7ZzhToR4xi82BaEEM3qhqoxE9DMHzPUQV96b1R8TzL6xAwuPLXiKtRLw9Y8cqHhzVRn3W9gXT4aU2r3VhZ8",
  "key31": "4BVuwcc1TSbDn458ZHynmwGQZzGC1D95CAnMMF85oMdhXB2735gmgHe57CdyBhV76xQmWCr1WBZfZvJwQj57HC8X",
  "key32": "3GGdERoJ4byjhRoTdaB5Ubhbn4VxVB5rXieYLqNMirqm2ckVLpsCAisxnrUALcwctTSSwyH31LdxzPfkAk7XTNcj"
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
