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
    "2Gn6KQuUuigur73Gp72SAvDiehRuRNwiiQwBGWnLULc6VsTSfsezB6kwSbTxZmSaXjp5FgvZ27VRJ3TRpT1LwdWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kBDAdNro8ye6oE9ra2CNa2QowWviakgHHb9jHYiHPW9zwzYSPgfccKfp3GvfM4tTFGWW3UBYWDdkPguv4FNSRf2",
  "key1": "4yZoo5n9os2vpGzHmubuDndVFG1Edo6y1p5vce83AmBpRsYGW1QDap6rpYnhYrxtuvEDVyVz2jQwYAVBZwemdxZE",
  "key2": "4ythncEF6kYb5scJ7S8vXqFU1FcwkTy8krCQZRo4S3xX5bgXFWhiW39cRnWSEtmepLSjH4f2aeSwQiQMpKgWRwct",
  "key3": "5w4BCdf6qAj5CU57DhfEy69UqCgU3x2LXyhtBp6EqKrnDLXKkUd7L481rMApNJWMyKxnGRHVL7EyZCwg8vvkZ8Xd",
  "key4": "5e8aRgHVutXGtTqUGxwUhZHriSqk4N7qYYBCugu5RTeuQP3zXzrsPZSCF5zDTMoKSQewRd1KCSGNK4XVtHpytjQs",
  "key5": "3vFGZYBZcwDdQshLNQUZnFfYatB2uXidueeFQeWd5yrupkjKhpVreCpnuUcvV2vgQeEW5FYYgUmj9Tnj38XFYp52",
  "key6": "5VDBA9Lp61qPHCwfrWuGyJHK2A7afAQJk46FYZv3shT7cBbcHPAhtdWHx1aNDUtbCKz5chse9toQuzddKMJQABG1",
  "key7": "5QqMJFNC9Wqs13MsrYGiGty2uoGVbDFbUHiFyqdAufHHF4mpNKhYNH6V2EmK96JDjaGTWWV8ak44Uu5Sp34aK4ha",
  "key8": "3xwjQKxAF4VhCeq3NtkLkvoMAnvKi7fD5EEiGU9ZvwR9CJKX2tEMuBBCvSX7n9Z6EtY9fBHYmRUP4xvvnznX954N",
  "key9": "3DnuGotreVR9rS5dnNCnVQkXLoARm3hfyfKJCyEFCwDerBuSH3HLYYeSH9bBsuAi3T9LBNE8tdL1sqZqd1RRk5oF",
  "key10": "424ryd3q9Ud2WqkPN2r8ucMv7De24jes5N2trKEPyizWPpDWb7bgfWbiTfnJ9xoBK4SN3ku5Gd7o2EaTuzP8yEF1",
  "key11": "5tJPCms3P3NmMqaMZ4YdHNBYBRxHzunJ3dh8sj6TWs4eeWXjtKqf8Ara5yVBkU5VA3DhTwgPbB4A7pgrDL1j1XAt",
  "key12": "KkZWdPbKX9uiXwzyKYm7uMwLmPQAd8TWeom4hKyLwp5vkxKes4P1DvXJGfdTygVB7Kv2MM1K24FBE4tKRwgdwq6",
  "key13": "mBfqzEMfCibTvYLdD8YbpMobiMvxrjmGyWBP9tPgfHCRqGuSBMYTrN55csa6agPz7kKJQKbAKqop2rM8f3wzhix",
  "key14": "4AYhL46mXW51SBV71884R3Q6NGZqo8a3tqfgxw8wGwESaN9eEbm3QjEZADXbzcQGJN6rGYMqVR3N4Baks8p9XcHi",
  "key15": "52eAmdwSk9FEtJGqsYZkBPDZNdqDFPXAFokELLExbMmEbWnpU6dYkCm5bB3F9hke2vPa8yPiHguEYnUG6F4fV2s3",
  "key16": "qzQPwo8hd8nWygxNYXPGzuAwVoNuCDbCBxQHLEq43MsWQjYbfPicWmzoATCgWNWi4vu3cfWv2csTKiiQttABnKJ",
  "key17": "5mtcXBWPevJea6BZ5k5U1QCenbcMVtwxjsrZgawhYBEE1RqJMAwTL1aL4iLQ8MvZgRe4JmunFf8VnHnRzTHVY8PU",
  "key18": "2xrJzYQeAWcFVLTuuSfrm7dXFDj6DvydJVVfhM5RH6oQ8ewSHRg8eHwJ4SkdH1K6MUS9Q5kq5HsFXYDSgz3tcXbN",
  "key19": "CpggCLbUrMUs9eNZHySQp1bbtFMCveWQvEZVj7zc7n5Yj4rM64ijci3ViGpB9q6PJBZqSJi2E5U1c4KVPy1e7ah",
  "key20": "2hixA5xBnNPyHxFdRunkwmfH4JKwhAP9tw1xFspxJqhNcEPqmfA6EhE3GG68xBWfMn7XVsCJHrhvysnUm44Q8f9N",
  "key21": "4vWTpS29mCpBLYT7HyuiGNdhR5hyTsXuYAuRVtbNNxmgYKxaX7jq4zPKNLsQcKabLmLp8niy5y9bNVL9JNbDEPwG",
  "key22": "2Cn4gNp5YS5beo8CX3rr4z2TrbXnPPsWeLwtj2vLy9PhYm9qK8ZLTrhQ3PX6xtbtU6jwBCYE6HPFpBDMG8YpAHPy",
  "key23": "Rxg2xg2wvtbAwc8mTgcvWhEgygazeJQx4H3NdAzQ9jx2hw8oTNgVmVxbwsRbnH6d113NAXhzkX8aQocLPcsN2pM",
  "key24": "P1symWc4zSKRfWHBa3z4QnXD2PE3fSULANm1gmgd4YwJbaXDKsF96UtnsgCch42RozXvaPn41t6NVJCegMUrUqj",
  "key25": "656rPSUZ8WM4o2yZ9ebYF2xQ7Knj9AV9qUYj5wN4zqgtdK7xT7hRRV7w3shDm9T4KH9MR4debeDbhq9C4FB4dz7o",
  "key26": "2J53hDz2PHarVWURpY7L3YayjFzEEN3ZjxnzHCU6sn9utPviip8K3Y9Nvkfr5CkgepB2FmvK5np4Ut4Na3vUUPET",
  "key27": "5nz2UUYZeJK5yw1DbQfoU9YzYFKKLiLajNfs87jHrbus4WLNvN5KX4hYmCik1LoKVo1gGeN2YWFCpM3wkitc46vN",
  "key28": "pEUp5Szq7ZfRsmUnrXDBkmd4JuDNZ4zWrZo8cY57agTRUEURLBeEnybd8HL6uxQDdVgNxRQ2y1MniMsDp6nDBPT"
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
