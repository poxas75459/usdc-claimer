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
    "5u1Wqmqmc3YChkAJCvDPdN2niVt3a3BKx6dVHjN5bm3cC5gnwWuwZNobYGvWZtmfeeoJQCtVhgT2iz4uhRhQc5Me"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vij1U5bPbzctfKUMk8KkmGkCQQgpzXe52f56dytLRJmb58ZZFd4Z9ijRKCRayQXnnMpyhbqiknivdxDiURY2HTi",
  "key1": "3wqVctGD474JfbkgmhBdqzSKFm4S8BY12buQV6n6NjAs6R4fNEZfqAwYepq25Yfe9GG3rXuCBQZFYzxooa2mxitY",
  "key2": "28mULzG5QhtZLniB8CwTH6evAJsNWzLa89kCuaePRMFWEWSaiqAAVs3vWjCU8La9K2CFYfEdPyszJQuLeMsZKDQA",
  "key3": "ad948rrBExiuyUzVdwqxnMFUYbnCXvvGifopStak3KPAedzX9bKVUUXs2bTEYtnXWCr15sfsGkhqxnUa9kqdXGt",
  "key4": "4cmgF9caf89xHBRRJZbaqRcveiABarYnh4Mg2f6EZfRv1AwNwmaHCtW1umghFusqftKnCVqf2tPY77kgQhCaS3nd",
  "key5": "4sW6FVEvoBQLiuwHVAnSpVmrbtEAUyqpQLDqTcUwUBmJDWsdxr5EP9nySNS6N6m9qCXjjqSM54Ggyfxno71AddQ5",
  "key6": "5jp4VnRkcB2bhPiEuzBQfdeosJz4VjGYsMwACHrMfvFXJTBT8ox5PipkuEjJQe6PVXpcE9DAzcyJEy9hGQVkFMAm",
  "key7": "LGXqK1cwm7EC6k4fvBqaH3a8HoNz7hFZPvYAb4Ge7eAiZiy8qckEVt1EyJWGCJu1J8ouphKqFCrqTUkBNpSGWm8",
  "key8": "2CgrTWfbjz9R4QaNPzJH7QBjwTwi2HjJ6b7jVENfv69EVSjvUaxKaQAjnDnXGwvWX5sJKKSXZTvQ8PKHRnSzfc6D",
  "key9": "2F9MoW6vajEe5RHNzKxrKnqPkF1vdiMUSKRNuGrTbd1MgGWLzbzwJF95mnTs5nWJXXkYwkpFjK9WGz985fQpHYrY",
  "key10": "33gvihjj6dxnL9UyqY9WzLYmFxgkDhft2qrdLX1MCRmFQsRUPqixfpcD1kukjYmajqCnnXqdfpgdnGhhZjnXzQxK",
  "key11": "2XLaG2huZCZVFFFYhyTP24MVEGcFJDMXLv2yGqJ5jcBvQkAKrZYxvVSvsmhKShoiNx1KKchPch34QjRhfH2TSRbT",
  "key12": "36RzazKQQfDXD7uqQ16Woq3VCP1vMLvwJm1FvW9fbC56BqDUgQpfFDBHssW3GixBxMzbvzWYqNbbxcXqStRLmg39",
  "key13": "3wTYB5JmwU4q2MzsVdJi7zR66VSwnjWZ87WyD3Hprpsr4rbDG2QH93cfjys1aaD83DeTPejsK31HWUUuxZrZgfLS",
  "key14": "Z6xmRz8tUFLZDC7ubFpvfKKThcq2XAdgwhKvgsy8N2VGCeDqhUkMw5S9xyX1ZYYuhSwDzfALjYWQPVhC8fpkPEy",
  "key15": "5GQngjj492GRodtLhSu19yoCtxt5UsJdJHRQX7XgVw5bvSiFgEuBiaCLkBdHskSf1pQ69mdwr3ejy5Qt6XfgYydV",
  "key16": "C1F6et6M28DroRnMcT9UzLx79GcY83U4BuTYANNe9w3LMBNeEb4iqNhP8SSkkEKwHApzJMomWuk5C9jsojcAm69",
  "key17": "4eburm4ZTzVd4dxhxB7YNDhxe9bZDPEGGNt6W6AFwMCjPFN5tkqij1oRHwBtBa75SMKjbipV4PLgUenzK4xdBf8S",
  "key18": "3hbQ4KiP3B8Z82KQ8jFFsbp3w3FfkAgMkiZB5GD7nH1jUHDWacAVphJQLpUVYJaGWhThhZvErLx5KeskyKXkYEfU",
  "key19": "2qKNzy8d9JDYSoDQVFHErJCbgfuTWNbmpjXBdooMyNM2WkQkNLuTMFTA7DUXkDQum25FsbMBwhrMh1ezc7ppzzVb",
  "key20": "4ZPro1YTGso4d175tSxB9ruv2DN3Mkt66G2XDChEQgkEgjvnvcGiBsPgwYhajLkM5y7E8V1tEgkwZFX8XGWq6rbX",
  "key21": "48UwP3jj4WFyHKuPhEyMvUFAx5WMkuy4JykD1YRe5W1JQSRkzmcTqrKsTAFAe4ecdNypsETBeo4e391mgeDZkb93",
  "key22": "259dk3CLQUwHxtwDRz8TnP2mViGETsJxmu2zFAeYqFNKzN5FVUkL7giUw9yCBfzQdixqazAFzqJGsGUXkYCoP92u",
  "key23": "5uK6MRb9G3BqfZu7jChQDDrXUmbugudf8QtP285oowRPUWiJRPNoXKcnZnda7bx1JwEbNVvqviJkLEFxF9RkTKtK",
  "key24": "3Vt6Eo77RA9MjnuMWsFFoJVhJ2a9kRHpju6cy4FbKGphvYGgEGWMfi1W7cBVvqsEwKDJjUGE6QHFdCJQJ6TrGHLM",
  "key25": "3PrgfSescgf97PnVyC1BRQHQbVt4m5QhNWisSNn3U257VomzkrUJGogWLACb96diStt4iD5NU8LYjuUYCf1iRvgo",
  "key26": "3dqCk2oPHJ8AapRv3ZtYV3toCKF7F4mTtW3Bb5o7EP1YfahNFwYx59NZhtWfTCcmNZ63c9ymZ3kGXzVv5cmPrVfB",
  "key27": "DWL8G2gUARgQhPuNQi9BcnnxiAyYtYDnnpzb9vekE2kjfawWwrjF4AWJA2CkToqK5ZGkrsP6ymMvyrWPTCv9sG6",
  "key28": "2n9z2h2kaPet6zxshZo7K8yYAQiv6GJdirSwH2DGvK4BXJko29jWxkBCEb75TVdu3mpcXbb8K4emix2KQhTBZvUw"
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
