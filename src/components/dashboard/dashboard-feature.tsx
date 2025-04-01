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
    "5obeBPHQRADr3i2oMeFAXnDEonDFXtPLipNqqmgLi6y6hg7AHVuqWq9rVmceS7nqAFZ9bqkgbosedE2MCChcnZE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ud4K8mKx3RJRSs3Bp68QU9zSoFKxTiEe1wYuAfC7vmaagjgutD8uLwpGFHuCsE5AeDC72JyjetddGaeHs2een8A",
  "key1": "NsiWoCzBKkY2Lv7ApaAV19kph7GgXSZKrpE6bcyS49yU9cXvk9zugsWKsTTR99qEY7EDrjTbyTMgQx9xzCHJf5o",
  "key2": "3zqhfHt9TNg8shZ9GzJ2ygnUYnDnB72b4cKuoRT1csfvxwNH3fkCtWfy8wxmK2esos473eZBDUW4RJFDC5K92iba",
  "key3": "2jmczQpRcsPGp8vk6RTAFFVqt2w8MnFzBGnYgknSyF1T55MkC3sZzwfXvREstjsWSSrTv6PbxMSGUiy3yfcSpnZ3",
  "key4": "2Yqt8QHbQsEFVS3HhzkezwPGJQT5n1tD1C6S9JdYqBKc5FSUSF4mf5EXUtTEbNXv4vdWGEBrokHL2pQzNqwi4tZ6",
  "key5": "L2otMpnAsaaVQNtYiECx1djHqQ3XKUth3DpJwh7gCnv6jnsZ8hBS7ErCg5KaxGzt8dSHBcD9V8DR1UAVVLDned3",
  "key6": "49WHJ3rRqMq3N5DCjq4VkrXPdmdrMtVn8AC4qSYUctXt8jyRfiGB4fj67NqNCqtstqpcrkUDvT48z7XRx9yqjmAe",
  "key7": "4n1m7FFsGw3H32okDpkpqsnbgPBsE1dtRAV5k2BLmJiRczFESy9oLaVfuoXmqGKLdfouFAS9VjVJVD1jLrFcYfsy",
  "key8": "4t7oCq7KsZ1tcBVAWi5RVcrwuu7sHYNxhMydwKeNuAvJwNETtA9SBsMrqsKCVx3SLEfTdLN1TYb2kN1nqKsXjunH",
  "key9": "Tb6Fch5UYYr9K3CTtoVXpw8A3c7sX619DzM7UneRo7e4L4iC9rfTzkkQ6qkx3eepxaaDDTsT8SqVh5iXwXxFcTS",
  "key10": "4GVf99sbzGPAh9p3EXHFgCRPDEj7Ybq2oytSAQcZN2YqWZvwPmEXyL85A5Yn3gAwHFZJvQajzSBWRZEQfAb7T6ho",
  "key11": "2afJCNDTd5s1Sfhs6G7fYpYN8AZVb1yvRJkB51bDFf9JnKSAHYhB4SQd2LP8wr2rEoyzLFZCkpb7rvGGXKofNNbD",
  "key12": "3NDD8BTSgDGnGW8AEKEMZddJRupWYcUfcCpEh34rqEs6JukRCKj4zvvwAh9src9fdFyvSyz5yCEFFVNfETZnNSaW",
  "key13": "2gpSJuQTRALYYKiEbtzkaYPMjgPBCq3wq16n4dm39cSSxX4xtCQCJMWz8jJ5ErHncpR35ngBgwyAsEUFKRcm1CN7",
  "key14": "4HwgburQ3ThNXf4KM3rnRdgquovd4UtuMevG3nAhZhJbF24LBA9YAQYCXVABK4sB6Y5rSSZfw5PaszSC2637e4em",
  "key15": "3dms23LUMxHuwpiamPTdUnogqFjJSgc5Pba2fnrvEFzZJ8TXp3VszaKcRXP38MhpDuWZ4KsZrqzaQnFsuQNQmTiW",
  "key16": "WwCLVYtiFXKBmoyGVUDEv92rNjrBKsfur3TjWpBosAAzi2tDyvz2v6LdpCqxB2keG57jUs7aVzM5v8T3am5iu5g",
  "key17": "5jAnGeZNMM7Tjd6tjtGwdwrWiKPWikKMzhVQ9iR8GERLfuXTxFvQNTi1LAa5MSib9CZCxYZBPaKdj8zVeDFBosVJ",
  "key18": "2mQ2TvgcyyqVVGEG25PNQnBsaY1wiF1TsP5TjLtNSTsu9KJtQngyJ7d5MYvB7C5q5fbzRpw4CtgLtJ1nnvtAfc7h",
  "key19": "24DAEw6D72BcLmjGtq2o8ihJz8TE6mniazMV3AxgUprigrxEqJfG2aEyJcJET2yDEkTjyocyJ4fAmUghaEBbMgab",
  "key20": "3J1jnq2ekCrbdubSnzFcQUmeb3NdtaCVYVaNVvRGXemUShxEvtmLX4z6461T8DHWaevvPfDMz2Yght6H66y14AKd",
  "key21": "3njPAG72ivh6AGJ5sBjW2UfGJYBkTQ2PYZHBexxnzfyazNduXF2ryKuhPmqtqxwiuGajKHyxMqQgoPgP6rugyQWZ",
  "key22": "bnsNf5txXQtzzvpcLWFHys4WDvMZdLiq5Ff4c2A25rNfkMMCauYi6NFU5MNfaqwadBrEedwdSx5AnLtQG6Mjtnx",
  "key23": "22YUxTPvtFQrH5Vq1FrD88yMBeAwMJt7oKsCdQ2W3W8mPuXHrybBPAzk2mZAXcYkyDR5vLo1uyVordCJyHbMzyz5",
  "key24": "65t1KDiCzj2Tv57Z1fbZKPpoBWSbHj8Gy4juq1gQbyqvXAnZNgBAHTGC7xZyscpKvjg2a4AjspN9Aii2c2n5cri3",
  "key25": "5DszhG1W5s6NdBChCG2WDD3uyyMNxTRvvKejsu9k4DrrqiKWgLqfFks8Kq1cMpvChXiw2dBqS1AuZTaEdNcvAtXg",
  "key26": "UW5orqPQnKjf1MaK1Qu5Gi7nXvRXZHg2Ptn11k49WSrJAdJhrmw9QJhCk1u9caarka5W2wmFcwxbJkj1PDGHEg6",
  "key27": "d4rEqZMEzKtQX1yFkNntTfpdwLPCQpWKmrHzJx4BHNitNYWqNuPGornFaMbdw6pJ2EHPAYqecKZHtFyzhHyTNAW",
  "key28": "hooopex7ZgpaBpt79rf73A886WV63SQMWFzG2mR7p8J2GNXc29Y2VzUw6jsWNMNMSqZpagS9skNVH49wHzEA7aK"
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
