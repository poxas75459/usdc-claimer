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
    "2NByaTrbckthBQcgsp2vpgyxh4CMvWJ7jooafiKVWfohR4mK7fdDEttiBe58eUZketB44n2NYUGFV87o9ikNaDP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dfHLZ9wZvt9xep9M7X1ULD7aLWxZcoTtKdbtchNVU4LgDdJ3cdnb4kGjs2wDgQHassPvMyHe3McfjBYAxtRFNdh",
  "key1": "aNVAoFRshNxBAurpQjQYR65vSV12eTqSWyB89WzfySHnwSSMBUpNd5GzTN1r39D6chths1ED9jKkrvqeUMqyHL6",
  "key2": "3d13Ry1SGTgC71Q9KuxGZiuRE3QYiuBPgwSsQ4FZwskdpGLfs1rQoBZw6LrrbJZ57i1UT8m6TH2ThmHYPVaz8Drw",
  "key3": "5TLQDBbrCnHAVNzqaA6w2FbLD89RFCvW3h9Wmjm1AkkdqTeAyggTJBXjvWicwRpUkaZQvVGLYQzRPMwFDFYcuaou",
  "key4": "5opNooWPpRq393MJwVPBTpjtPc4TPmYwWTK2k2X3QJUaa19wTnEtvEvoWgUX8grrUHTCNeK86pwYEmQAzHyxxviJ",
  "key5": "5duqAYFydLYMDaFbbHLdQsqUuEiNen47jG6ZxZRfc6JzAxATbFT4FMu96PbDbbw29Z15J7znqnTN3aPLd5VPo5Jb",
  "key6": "5SmDWJhKMQFuvVSJiH8cUS9tiFTMGohjrRH16u1AHQa68voWt3NhQrbh1AnADL1xvPqGKiUY3V91aJLxoiaXajD1",
  "key7": "5oE43omr2PkiZoFniyAUrDWY5x4DHnYT1MBJKXc1JTqdA2vrhaxrgDkT4o5ajQv93i1kNfUxXTYA4Uuv9Yon5W3f",
  "key8": "CXzeymm1HnvBrJoZAeRLvWowBjyfK2CmH4dX2A5HuaajZVrHJp54reqTRKjS4nkPhijBoaGE6no81MRuWkABbMS",
  "key9": "4BAixtP65ECXGByZzbt9qVHzSQb4Vf5DSMZf6oyCN9Y7Sa9fUDgG4GWsvfnULDrDCFngpdPuYSnebeAghcFqo1KK",
  "key10": "GwPvtotUN3MdduvhyQYhEtMGrP8jS9umdWQEmidr5yc93ZcoH4SnjUwhfSkc39M1qqVv1XL15mhUqh6dmBPmDkc",
  "key11": "2pDSiYej7NkMcgzNQTVUSCc8inpKdLjtvmFC76xTfokiVza4ExuZxQqyrczckRSLRfcaZUMbxdwN8S7wAjpFQUwv",
  "key12": "5FjebJAYR5UjbKkE4SGetukr83vivXzgdKmPv2D1r9S3qeY5wNp4ECABmVBCCHor5jEoPTHJKaRFeMsbudakKPWg",
  "key13": "2v6CisoaN9LMRqrki6pDyRuyg5akdwERtJiEVnr7qjco3FpKHQxuvbxq3en4Pm77QT2FAz6h8oXDbvGC5Hn19qtC",
  "key14": "2ebQcpUQ5NMMWxxt8yu9t3brc82X8mRneLkzNXKd78EMRgrsj68KFvvgXv9ZE7JRrKiAowYu94xZZkSBPnJ5wAGJ",
  "key15": "4PCsA8cnfsyiLuBuVvjF6atmnvLkQTVctZNasyayB2Hn8zCdyGbg5jBhKYvgCXiqw8vFd63LF3utJTVi13FKJLF",
  "key16": "944nxLooDoVGoGRAAhF4o8ZsvVR2KnzPb2gi5YrSdw1te1v3henb2zhYFmhwrQfHzAStqsebAg3xLmGNLYnx5Lj",
  "key17": "5n5391AhN7TWMyWF6aZKQYx91M4yEXqw5HYnuJbjyNTS1i1fsdrVgPmuuRwgZX5QgJqTj2g5XYxDSecWcZ9FvXeP",
  "key18": "57hWPvvL8aVtAfz14Vvqg8g5PqDJpsbLLH77BPMJpqxZD8q2pCgCjJDNs7F8NUpZWPzBkpwaFzCkKWSKfr4yeZWe",
  "key19": "4bcGCi6dPAKJ2RNQqRe54vuxH1awTpSCkB8M3GQmaBg2ukt6zMrk8frau3ZNG46xds3BfeukMoUQwmq8yiJpm3jz",
  "key20": "5PihN9Y6TEKzCN5qZ81nEXWp35kUtGT7h81omHcFZyoTeYqPvL6ZYthkQycc7BhZwpdiSFA1CwxTCB5Lb4d9YLbC",
  "key21": "QguU71dDXe7Vu95k5At8q6BPy9T2FJKcWELhndXfoNPZ7BLD44atLqXyT5EbUmprs4PiCKzDGBLNejJVzR4cr9n",
  "key22": "2bjCB4mzA7SG5GETLt3k4HmtiyEVr7X8o4h17WRWV9GUYDGMf3X2yAhCCvCmUBAJxbkxHrud65khncPJL2BAMeMn",
  "key23": "2ft8xhcrQ3VMzBFo1gTWu9VzdeKscJFE269y15EBnGFpskGrieVe1BrPYjjLrBCesXNhhFzNH3wuscPfg3bCSLhP",
  "key24": "3s6nSeZ1QetWzYMMRahaYVBQe5mBPJaZ3vPNtn2ejLrPMXKWD6ixta4fLwvcSCwLzfgsPFAuLm1jY7ed43RbUbob",
  "key25": "3CMxvtoeYRkW46huHCJWT6EaCVmB6EoU5HvyVmUKyFmwk7QqmtAgc2YEPdN7FxLLHaQEoVeR6w8Mpyd6TNEb58J2",
  "key26": "3Yxr3Wt18veerGidfoyqLkChGZiQvJb8Kzn6ZiUYkYiyu1H3k7RnU75kTrzyL8MD1X84DyNYgFq3AGWDC8UYCq6y",
  "key27": "5ZCejn5EZsaxw2mysssqwn3zoqzce8mAdS4ZiDs1aAUkhNJtx5qTLy7DEGGSF5wg35VbyQhiXAcgZ2TiAggmqzFW",
  "key28": "3qgZJG8q7zP8hboN2soKgbVaZiXyedGHdDbiT4xFNBjywQATcPguo5SbK489SwQ1gACStE6UVk8KfgqKgV443Rgg"
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
