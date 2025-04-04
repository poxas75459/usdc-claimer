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
    "2PvcPqNKcjonWiBj8Ly8Ru8MUKZUmJ63wEeBmDBHbxcQirZntVuH8mkHrcFPpXNy9vrXe78qp9zz5BNvcVK4fzWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XQJpstD8cRKd4yjkmPWkYKNg8HtQtXPMF2XymVbuLPGeXLjFCaso6tekeJUgKUud55Dhu9zYSdhfjdDQJyw4Co8",
  "key1": "3S5qA4nh6hjB7UCnCcinUTqTQXWDtDaEKkbnfTD57jKbCVKQFAUfTd3pKS516KY1dFm3G4UQajSzbkCf2YdJK2Ju",
  "key2": "2XcHDr37FqWqkCfD1UkQsizG2aT3cgF639qybALP4kc28PPE6adhctae6vWECtVvs1jEibufs5QBCQc7ZFB1Rmqe",
  "key3": "3DWXNYCx7wzqoFCJKuYvijEsexuLwXgFmMBp7GtvGX84FCW2KJnoY7N8oxrHJpWuP9BRfEPFwdgzvLQtmLym1Buu",
  "key4": "5BNng1W7aDWme2w2E7zSBPxJYmvScSg2HJXgcMf5xcjRCG9JwRMjaUWZNPzAQwcn2ur6z97iB2E2XhdNv5MzaHi1",
  "key5": "364ahfaYHz3G5dTGsm7Hcj3qTJy3uX7NcNUU4uYVFurZJysRMaYa6MimZ4GRgWzQxYPpAQ5rX4oTSchtKhHubEXZ",
  "key6": "ZSN5uDqSqFa9vUZm3r6a49ATPw4DgXmLQooD5UnBm11KqHUZz95gZnBFark3WyB5JGTfQAzNNk9LZNsK2LKWMR4",
  "key7": "638PhVLkQW9BVE5w6C56nxoV68kBn7sPVcEL1VEaeqpZfCndA2CXGTh5LmRuLMv9zhVqHtLvXfcao1BoAJNXoYdM",
  "key8": "3W74qatQpg5EPdRpo6KyRwoNHkCyiwSeSaJdTAzhaNtkpjBapq7UNknSfzfT3shmTavVbybkT8FXoFE7rZPRLgMc",
  "key9": "reCRB1eayD62bTtkZ7VtxpufPpy8WdttwFACp7nKZVVwp5xdNdfs7bLtaFt42huwKBM9gAJa3jL8K84kHgMz26m",
  "key10": "49fYasW9tzMkKLTLQWdQeiqYGse8y1ZVKgHFAiKYBRpdgGBWCGLUbN1qcMyPMQPPAQvDG2nfuSnwwHUcZqrCbvBQ",
  "key11": "9uqa13MZLk2vWwUxqwrvf6Bn5T8opnZpNCE5hE9AAok8RRb432JwchVAZMqPqkbgKB78w9nUC2dTzCYkP9wnc9E",
  "key12": "68g6FRBdj81ZQr7oW8JaLt73UdSRjite1VzKoqBs9k35yXK1YWxP8ZmPrq82TeGG5KmCHet4gAVvYN13mJVX1aP",
  "key13": "2x5nWjJJXfyQYgyzFGVA4n4t5EjZnkswJchSS9p2X7Fx925ERrVQRumGrJMMeohZMavGQKDKqA3XTqDXYTUpint2",
  "key14": "5XiHq4RR5XzXbZiZWz9Ru5sgbXLecLFiHmPuD5mAUZvqKHA5aasb4JeShs19LQAde8DYtJwQiQXrQC28JRG7SUsi",
  "key15": "3STK9xxdbDUSFtkH3PDJKbwfDF84nsJRp5tYGkiMr6kq47gwzkVmBFX19iuvGTBqFSFKt2XKsHPu4RUq9rLDu17R",
  "key16": "79AdUQxwJ6UgHUyVi7QFH3B7wwrfCokidHz8opz97E3S1Q8H5VEt8We2vmGjSy5TPjw4ytkDwDU8z7x6T8gCW4y",
  "key17": "4JM5fzi197mkEiTLW9RSzKpvM6GDFi2UBXSnBEo5gMmKZKnApv9gMm1RzF8ifsSQ7fKbcrJmwZb77WLnn92RkuFT",
  "key18": "4FAV4q6PXARG4ii3hx8bWjw3Rx2D6DH7pRWvWkq5F6kp2xkfiS2ofNp6xQrh5VRqoKDNWWXpriAbqrjPUUk2sKKR",
  "key19": "wsBPzxYZFBQvVDUyxQ52BQoKvmbFpScX7yHvYYmdGzdp9Zu4FwyAFXV4HYTYfircT7gn3eRm9qaz3ar2axndv8G",
  "key20": "21WaKKFsjT5BGKyi3HyjJNHLnrHKiMviVziL3qmqAyEDiWn4wttfAh881RLkp4iEq2rvww8HnDQHwvcC6z692QJe",
  "key21": "4vW2xRTMCzYJ8ozRVfHwxaWEqC2cgV7ncBCck56fUNwTYMYAPoCaaCSywF6EUaUtLUqufMm1ag2KQaxBPJrHQWrW",
  "key22": "43KRTiRVtv3z67BwnXv9VcDqsjKrDyng1M372ZppaxNSYrL7hHsWMK3zoRenwxirbwXvYNMmemskEmS8efqDLWwZ",
  "key23": "2dByCgJcndar2YrAY28P4BWfRenofozxEaEccsEKCmSpvmHeb5rEqJPMxvzEsCYbJMKeXcn1L3suBSAEav8HVFQv",
  "key24": "4Mk1uqxVriNZvcv9AWf5Gh9pgTBKdMGkb9jKctkpPGWfyRktJaTgiQNmyKXnqJVrUn7Y14TBJqVWDPAPA3rny8ki",
  "key25": "4R6a5GsNwBYVPAEdJbMGCMvwfinbsGWQA1TF3NLab3i4VJUTMsy5McHx6wiPiW6WSTCKFVv1PKgJoHWoULjdkM7r",
  "key26": "2ua4Q4b8P8cra7m8tMyVwvKYwoVRph4vvMgHiVsTseKBuXkUKxY4u4cxivV8N7urM4UtqhXkBarim4KJ857WeYcL"
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
