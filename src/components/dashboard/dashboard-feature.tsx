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
    "32rKLaCbpLAivpnRQkQfYgrGJTUgwPmL8x4d1kmAWuzHgvrme8Ev4nACmACJiW3Lot8XPRZasgiVGkyQjd7GhpBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WuwTaENtM4gw8tUE7kfnjCmuPqLtUNP1ZD9Ta6WF3MQxhhLNdgi81e4EuzejAgkUZZZan4iHyX7g2xxgb5zpRJU",
  "key1": "28L2NpPuKEC72K5VNUrob9PMFgWbMei1FsXZ5Mvyqz8YctwqxtkdwE4RZa8cFpPH9mGBG7pmhvBYx2n14EYe87Wx",
  "key2": "fipuHzrZZfMRgWg9vVCbsw68Jr7CBNVq7CFxPnXAVGwBPuSTPgXcv9zZWL21NDNJ3x3Q27kbQN6fRt9kKKscPBS",
  "key3": "4dnQrKbAkmmRVsAD1HsNf7CpFRKQ96gwFGMh3vNwrGmvzf2YGbKz8PBUQdCnhe837Za6uW4pZUXFFWPv3oZpQaLU",
  "key4": "NhRLs6nRJkxkhziLQ751QvsHAES337icLfNpUP9nKUCBBDjHoYCsWdUvywzuc944hgunVdPMyXaTT9JTzuUjzBW",
  "key5": "3ZNdbAquqxyDFc5hxPvGJpNjYt7dk4KSSRqsYdFK1nVnz1cEU9CiGoUYodDd2W6JX1wYmjZna6CpXsaF6oTENMZa",
  "key6": "3rqUuHVoL9Vxp9JkWrB5DHyhoF7ZPW88Zh87kQLPufG9jvUA5WAx5Knk9dJ1HS45Tmqy7UMKkWSEBk4icSHHQsx4",
  "key7": "5DqbbsgfpKG1hFBbDzFoRK4r9Ru3WR6vTKAE7k8UDWJZaLWnU2sQY2DJ7UbiNimyQLpz5XMtDfAtUKDad3S67YQP",
  "key8": "2mZQwtaAeXdeo3KoAr4UCiKfkXarFbVkkVpW6yyUuRbKYFeAVxaBUAXUDjG1UT26AZCyGwALb6ARC51udTGC8h7y",
  "key9": "5yEhvSuBiHczKr9qCfzm9wF5moUC2YMr2KYFoxXEm7c4cwtZGw3hWWLSzs4h6SapRpGs99RvMFZF33StWnLeMA5s",
  "key10": "3R4DV5BL4hoC8LrnYJ5F41ZgnAJAqQxifp2T9MhhVgVfUePRgc856P4KB65gmgJL1d3XcmKz9uN8ycM3txWVMt1v",
  "key11": "5sodhvU4LQPb5G5Ni5GQqJR9GJLpHXzAx18vnzchNQGpdNYggYTJxsCktryfQJFr7vtZPR9HYg7r62ABGrV7CJtM",
  "key12": "367HJCD4Btc5YNKZViXnjENEoNmwiTXNqJa39EaKKRJL6R4L8WSjSzPevPzf6qjnY6beTzfFxNWYEDfcqBgTujhm",
  "key13": "2QfXFLens9u4sz3wVygrLqnuzopMvvYZ5gYKRxr54t5ofU2xWEh9KM16ymNezEp8mJc6PNDSeYcHRqSsdW9gVerc",
  "key14": "5kGNgZnchs9pj5cw3puH7an544fQFLQyavmxy73RYxqNCXrbvBq7fPvQgiqztk4aFzvHfqeDTn1suNoagkGsjbPs",
  "key15": "3Qw3XKzSfb1oeQnM1Uoi1Gsw7XE7c6ASHxgmozvCHV7JYSFTvNRbE9dq3tB7sizgtqrgGuQ8Z6ePv8FrrXsJt1FB",
  "key16": "3d7wgwMd3VQW7bihh2wRuVqFQrS3WeWnfekoj9ocCYhKbb7mo7TL4WY2QfB1KZLTeskBNNeiDz23WCSyR4SMBSdX",
  "key17": "4Wcb6HXhKUKfdogGxkNHz8PougyYRcEXxk7zzCGaMF1YTSQNWVtXAgW9A7vUuZmmeWCi4S3csfRS5rsSfd5qXDHn",
  "key18": "3hqed56yNSJWf3KJABoVvZNSGXhRNJG3R8dyXcKuURWfWqbuGhSEFtzXCL6R9qpDTP1bGWHxBvcKeF6fgWG6ENws",
  "key19": "4SHyZLo4nxU2PQUjCp3HRuKJ4UvA6NdDkWojvA9t8WBsHhmKi9fTbjto3jMpzzB5gFGUtZNyFwD6pbodM5qfC3oq",
  "key20": "3xPA6UJJwrUHFUTsHKxPYxZbuRBcKn6Hw715uLusfJGWnDx7iLJVuehfapmnHtyapCGbHSPQMP27FvpExwxsNoup",
  "key21": "61MLnMjTDAtG1VZten6rEsfQtvn524BXsd6vPngS9ZdBibDBoupEcLxos85iCCET73m4TwPNddWEa5BJrgarZ4NN",
  "key22": "4Nkpst3j8MNhvAkGng9ebuDfCBBcnUuGZjNkGNuxMV3f2mZ3BxsK6DgPhrMZ7tp9sXDfxjvDuKcpkktrJ77EHpFu",
  "key23": "BTXUfHF7fXo3uWbPzRft8Q4jxXJLgB82zXFSjh6UbUi8vsYFULL9AMai2SYa2LZBdtxWaLrJGyQUYfqxvJPKCN1",
  "key24": "677RQHeg6vbRyUguWfZYXzrrahx5sj5111S4gJAZ8XVd56JorKD63aAUu9thReS1Nt1CvpSHXcF38ct8tCdtMs6D",
  "key25": "2gXJ3HsK2mssgbem4KbiNWo84xDuKGwudmq1wQ4VQYY7V9ExyAa57RMhiiXqtkvsUVzWS5mz2wBftv6Rsgg7vaAc"
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
