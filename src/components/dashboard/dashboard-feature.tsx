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
    "2xCsVtythpm8CvzntEP4h9LMSZKSUY9cu8Fxdvx4QDnyixGzTJff3GVyMs9QzTrNz9iM5M9rqrCjWEDafkcsJg5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tiUSMtL9pmhg7fPNzRiNBdV9J3fZ1FoaJwYFWaS8cdv8P5uPbdBKJESJhbyh6huKS1bZ4RZ5Him8d8HC2bcVADy",
  "key1": "3pwWRUJ8ZDaFHSo9srLdJ4HkmpFscrBK26xrfLjUTHMgMLgrmJDf7m5iEcV4VRYUDBn8hgsvAiavmFLm6uQfAipu",
  "key2": "2z3igYZyogY2UHfoZhCnYLkHxL2fdLuEnAphtJsP4UGrJ6w646DpmLf7Xog7SM2NzqVkLHhnbfZGB5WUDBGTchwF",
  "key3": "2U7eMGCgek4CLce474M2696jtNgMc3SEYMaq3PpdtsMBzM8TmTdVTCZV1MW79rEj7jvpbPR56GmhJ2kYZA4ap3Ez",
  "key4": "3c4FMcvLp74c5aYvVubiHryWyieSneTQGR8vogT51s1ndMYZMjcZPpmXaAYH7V9uu7raeHYDKzbdG2hEhiTpTqHy",
  "key5": "3fqggEaFx3jqcMWHrWL2CtDisP2xUWVt9JhDQY7zxBJkS4c4vELUKhxM1xkF2f3sZbWjfunS2W6dfCdpuc6PpfKU",
  "key6": "4gB5oVKKwNkacppDUidU6M6M6BpDF4uU6nyouxR2PvwXC46FPSaY7sifDfQHxnovkipfZHLuNPzn9bJvHShRnNgA",
  "key7": "8qqcirYGc7HdVAsA1Lf6p5twHzRWE7HWR9CDNK9vhRbGVkYtnBdN1DbNBSZhp4zdVQcJbHZp98vwTUnFKMxm6PQ",
  "key8": "2y4XhHfxYGXX7eaNQ7Te1jJFZ47F6uhfrtrkq8BZL7XqDQCS8RnSEG5SMSiQB8YpB1bLTEweuYXcYmtV1jhX3RaE",
  "key9": "54Xsvukoi5HuiYLT4cXxsRn5CRSfMwGmL6Wzsw4p2t1xKyxXppaPBUcmmuAkvHUFzk7TzgwL8FZwAsjs3yJ7pi8n",
  "key10": "3jJjKJVD49QyGAbYUCXxdxH4Tt7zb8FBhQZ3GdasMheD3m1v49cVWD5oyGJGcXcwdYbjaBNooF18tpJ6MuGA3f8m",
  "key11": "345iVqoyewiTVBrFyf9Ebddq5Jyw1Yt1A7NSZxNFStbRmY629tXd7D5PC8Kjf1JwTkyZ1A849vEZNiUuhZa2rrVV",
  "key12": "3VdGaTSQ3fUz3GcaXWqgcRSirAa6vGnKuCEDYxJX3DyptmCqGG9xMcMnAoKhAZzL7oUVg1V8ztcewCfjWm4QEhF",
  "key13": "7S5BapniZi2Ld8vgWkJKS8cWYwi6P8am6o59oeSJknq24zRww6qcYCb8ng2GaZUeYR14J11NRcCQsct4HzRbAhs",
  "key14": "4oiU6XAWt9buE1XFaKFh2Wb8sPaV54QnSpF9gmZCkwVMt9DYbE5mRs2ueumZBBN1MuhCgHNXiHvxnURPBxndiccz",
  "key15": "2Un5SnGtGsANmZBQudkMBehFreqhdbA4QVXjRHJhDGErXj1NXEQZHwrkPYUiKiJk3fNJ81V551hffdBErnrpGUKe",
  "key16": "gX8sH4WR2CAFNKF5YNSnLZHnmVPgirjj234k11JmU13aZfPS68jcpAcXNiDs54QpAzBdwQNfaZJhfRyaZTgijty",
  "key17": "sXPKhUYcgFYh7Cwuv1BN3fs8AQujKsgDk6JMoZmuLnymzwmkreUumzHQG8mTFNsNxjCwvBCwbfC381eTfrmYinh",
  "key18": "5EbZYL69Fnju5oaonq3UgxJGaQEiRg2bRKkFimXqtT9P3iWpB44PJT9CuLnt9EZiyVhid1pMnwBQZx4SuGe6VAuD",
  "key19": "28C2YaQKte32hwKg7kkdaPi3G9SiEEBBLVKqpTqQiZ6RVHpGk7jk6uJaDNiDvx1E7KarPoZD8Y4UhZZC1uyiCx3u",
  "key20": "5rF16H2v6Gwrrze9fJnDXzr9TNxTBMhmpAyGt2vzsbPHnLDedXwC42H7ojNbhUAW1vMZuhx1hirDP5a1E45b2cje",
  "key21": "4fQtYgG6yeXdxNEwtnQJhtAZqGNrrdr9gRbYpZNjAL7QKps91xtcu5uRnp3urqsMpaLjxrTm1HE3ra25AwJQtZpG",
  "key22": "3c3nWo1urxtHaYTN4TrK3bxWywCRY1r4e26usu55NPZN54xjgTgkHCA8tvDNBXhyGvYwg9V7rTNiH1peLzh5qgJp",
  "key23": "4wP4VSDRwyMa86bU3Qq1J5DP5MBouz77j6ch6MVVY67nURoFfvqy4hy4z5o3gm9sFZ8eGUkNJr8L6vkWn35W1HfG",
  "key24": "4jNyLz4mrkgG4oeiPBQQoqSJjqDTHnmZzhaMC1sJ9Wp26oqEjDKGqpqUqbGKca5bS1JLQHaJyYpQRvsQi1Tt83NT",
  "key25": "5csoYx6aSSURKWywoHmH6EWWMRUcG2NYhKk2tpBYD49DJhGCVmDWcsDV3H9wa2ZfGhW3FRRrWzXx9D1UDQ5xShib",
  "key26": "615QT3jf97ztn9v1eYPQ3WDENVXuVPja1bsEdxyiNvT8nFq47jmmF45Po5MJR2pgcmrj5Hc4z6AuSjqKCC5izdj7",
  "key27": "r6kGLwqCukBezDDsNRLs2gcHhLqzCkZaeGsr9Ys9LnjCqKBSWP6u9YpKSzzFej8bwZyvFaRHjxTea9cqaiPSRWp",
  "key28": "2L3zESq2uA5ks4g4oCFZPdp5yHLZpZBzgv7D3M6iuJ9ErxJpAQeDaeYMHkLZU92nDejpav3q1ynDyTWY713CQAuk",
  "key29": "3bikg24KUdKLoMWo8Kozg5j5QaDgVx6N9YyUX2zBUCCrk3h6yfSy3QrpAWNcfQaTv8VyCDZnvfPLBmZFdEDwZf8F",
  "key30": "4aqGDAMLjDX8y1ySPhGgodNq4rvf2WbCj5NPiMAubZm11tqbppPPKVZkDS2N6pFZ3K6NLT9cGzg7bhzL627T8mb1",
  "key31": "41cXQKxizQwMigFTU6BCFJg9E1mMFbZQbwFZUUANNCAAEsauFLwJ5p3z74782KAvHiGNLhqFKd5kmcyJsbwQzB2A",
  "key32": "5ULojeRL8xUSmyTbrxjmCoyVxNN3tBvRVMJ4KQtu3aNtuD9HuvNjKGt21to5c8M9ngSNiwuzbaWktkcDG1bXxsyi",
  "key33": "5a9CNSqPVtJZ9MFDTaz7V13bVp4YLgtVaDHKR3zetvNaRstfUEmcoZ76ecfK6vAk3EFvPAGkF4ZpnN1A3YEAgW4D",
  "key34": "2CyQhrZEeUCSBBE4fXsFGQHJU4zpfxz51oMq3xkGtPr9t1oescvheLXgetxxzommbU5knkNwRdgqYWLXkuyYitVg"
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
