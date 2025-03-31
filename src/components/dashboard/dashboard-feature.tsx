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
    "3LVVGjCzvABwbPQoUWeRM6M9CgnNDuP6Z3uivbDXNVMeDqPC7Qzq9JQiB6GBmc1QpPddxyMnsjQMCA6qX9Ku8RhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53KrkvwBv2GGs3PeeEpUdVBP3WdNpVMj9KRo8Fmq14JjL4DN1seK3WehZSNEQT5Qd4Ut7VSFzUhP9wUL3oJi79aA",
  "key1": "4ynEQofcddEx6yTipjpBERW1iRZgwqJzeLzK4Mvqe4hgnqGbKkxQt8aVxxjEfovJ6CnqikQff85ZBZ7fz5MaArej",
  "key2": "62NyUxUHQfFzfQtzu1om8Uax13YQz5MNLRGN98WPds9ztA7bGBxVGC42XDFvu5EHWCccFR2j7fjbhf25pyQRLb7L",
  "key3": "59q4YTguSY6Cm2V2uUFsPqH2MvFftEj6h9ZGoRYVrNZp1EhqS4zbCBXRfvSRVEaqoSNJe6mKPKGjVYMx89HLcVVC",
  "key4": "48rGoUdbHvm2doQ1USHNDZcW1GZ14CQFpU9EExK2LXxYSSjFmcbN4QYjKxwmhvHJsNqfQZSyD21udmmbRf71uZJQ",
  "key5": "347toTefAq7EUUwBqg2vPoTSq4oyFLqS2KPFFsQKT4UEKZqZ7q5YxS4FGTmtQpfuTcV3F8Wz4WwkU7gAH3hhXUgo",
  "key6": "3Wc65BD9gK3toRuGYUgb38eLhjyUouRJXDvkCd5QNwF5mMhsJnk7nURBFJnrACMPgo7FJePiR9fKQMybmexcRRPo",
  "key7": "23oDdtwmqVSmpTbWyjWYtVeRtDz4x8wizjxTFCrX2MAzNasTxCvH6oq93tdrqMo9D77i5jVxbGW2GuJY5FjsnrJy",
  "key8": "z4MAYfLzY8d43kCdaacAzRhfZdNtDqyiHUnHpRmVcL29s2FTTzVcM3Q37AFCyhTqzeCP8M3WeVaQYZzJeVoc5T7",
  "key9": "4zVRwdLXP3Daf3VUhMQMXQngWrdCiPyZkFkiQd8d2KhTj8D3x7dMbQPjR7WxMn3YvW42BPe7VbSM4rWpDgz533Dq",
  "key10": "5eLdN48NJrUmFYJAY59N1Satubkxb5nV1y2P9vJFePakSoWbaKQ3FMnQ8z7D4BJ8pWcWaQ5FWiiiWURS7tojW9Sw",
  "key11": "5TqVA2iYf8tuMHDEy9MEcYj1fzDrpqunSwtjjHDe361WWeyWvFif6JBC4tgE26khMCQ2BQAyB73L1Yn73KRcgKNr",
  "key12": "xXQQWYYy7EQQN3uD2JNxoNdPf8tRkd2etFNtXwmUKwdQTAQMEEQ7v9s5zGUuuKY1DimTSNTr3tYbAC8YZf2pPTB",
  "key13": "4jhctHBvTXawyfYY9i7Vz7DWMWFw5S6j6Lt6vZhvZ1GLQ6yD5z2BfWPwVky4sX4UPNNCVyHVWzgFp3n3zio3vhBV",
  "key14": "4o3HM7iWvWsPf7aLcNhcmH7prHUPT8ArVk3RLehkoFHeLiwzrFBSwac8JCkw8SXNKiznPp9EkFN5FLrxBEzknv1w",
  "key15": "3HskTjmKsiWnK2Dzj18RpVFVsV1sYTT5EkwMYfBYekRCX4gy7ia6NLdHw68wJV1driPUfBvzinta9XfGYzQvYaCa",
  "key16": "33KZZA6Ttzx5xmv4NF3Ka1oBwrQz6RvoY1i7hwvtWwJ84xaxSPTWfMgNWn9CED8VjjS8eVLjLe5MerAs1yvTxMBv",
  "key17": "w6hvq6vKW71az8M1XFA7aR38PHVdKbBq55n8JWm1QkLEvRqgpqKCSjS7DeejwTRowhRvP5uju5WoQvg1RLbNhxs",
  "key18": "5fec5EKEZoHsbCQKs5jM7Uc7g23oCcG5cJNg9Y5LKVpFJLxVTCnBZ9QYAj6um4vKxBe7Td3MSReWi8bM91GR9FnA",
  "key19": "391VdkTBjM8KXc1PfLEAPPDCbZBraKKdtb5ysLYNu13j2hL5TG83RkdDvV3f6JeHYvstHyJ2XWwUCqRUnXLA4jvs",
  "key20": "3SMhQGZP31wNg6eoPWMcF5NFHjRh4uASo3x12vjAhsWkfW61zQVqCmetcKzr6hS6KkU2N8NhipTw8nHABkf8CRak",
  "key21": "2Zoh6sB2iHTnx2Bjg2M8DuP1j19nKCiE1yXcyEevtYcLxquJeiqoBL8YxkuHDUQmhdyg4iAsDAzr2oBL3LUAwNUT",
  "key22": "5qapNrFj4AoCx1qJPascqMhpmrV1Lfs1ik52UydebAuAWTiysiDUVNkLKfvrMtKfnXVVLVK7KwGBnjFx5on7T1qu",
  "key23": "2enqDx3oM7NdjNwVcYw1UN6Lzr2VxDdYW9udxkQ625RhaPF7MhPyLAszMmicNbcDHiPY2rkW1S41dUCXpUVp6FPv",
  "key24": "KdNz96g4bWG69VX1Un9ZwcE1oChQ5gdYBNmXysgR9LSiTGH9ZChD2M9AASEjrt59TzV9BX8PL6r8pfL7bVZ42yA",
  "key25": "3q7DdZWcmi6RybG3Ju8teAYUUnHReGR4MRDpV3BTC4nV2Bgbk2JgsZJBRws8Y2YzVpH77cuof3XNkkUHViQoxCp1"
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
