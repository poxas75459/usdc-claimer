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
    "3bMqDd82nyrjP5baz6xgFBxS4nSzAskDK1XZCVB4kvozitvpaWaCPKiPzS7sP6vTwcQMmJ769XyXgbRjT8u88wE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L4B1efH1QZ2eYK31wE81X46QYSsRtU19P6QrENmKoiJHJLruwgJBfbpyBZjLNhEo8pG6v5sYRzF6gZ8Ec2x749H",
  "key1": "tE9VANj1yjU1K9DSmrerUZRH8FBwzUV8oHxdVg7cdp2d9fiBiDPQV9KpmjF7boNMet4PVvYCmKuNKPD1uSnGoTK",
  "key2": "589NFiBwSG4VS3hLaKRLTePrZ6uGtqWykoXFQxo2KfwToi3nmccP6GiHJmhGPw5tXnRfMX7JQsh56RVBHjZri3vJ",
  "key3": "3pbeS4VNt5gPZJpk3eDfPmfaiEnRGc6qQwUhsJcEgw7QFmv5q92A6ZqDvwTsjDt3z7V59mLaqqAFJ3iJR8VdBMEV",
  "key4": "gQN7yWphriSoLeQpxgNZx9fRMjGkC7SR2ZaGyt8YyBnoLfdMminQSPUcYxkbcgnzYj1oe84rWenuz7k3WbgDTXX",
  "key5": "7nj3a56gpzkjc5PCTfQSHqnxhRHKmbn4hyA2gN16cZDe5X8bvDJAJzC7aCLUN6Knrw49yq54qCAdpyqrUqMTxHv",
  "key6": "3gJ7Vb3md5uV2VBDkcDJJDt1aa8Mw2ZxMBKDrydjsxzc2UYPdBt6Ek5mk5TqnW1CbGmNzvhoeZNFDv1PrwTPyPL7",
  "key7": "5YeXS33JQWHorNWZd9nrFDKLwhmquEBjVVAm39kkUXJa62Ux6LJL9XLotTwi2tuXdqKpbBPYbYb4B8s4sJx2foHB",
  "key8": "55wYaye1ub6oUYMp8u8fTtVz1fCKfjpqYFEYkJS5xj76LfJkCJgMcesq35An6SmZqaKrWL1R3MJB1vQcd92Xvgoj",
  "key9": "23hhfvQ8XakPzqnQYzCikbTTFE8jAHw8ZqEKqpjUy86hSaCJMEPeisuai9dkpsUakd1avT8yL93qWe22fnqhX1tc",
  "key10": "35Rw6kmx9dUpSBKRGHAvTFgFy11nFxMHqmmdAHCVAhmzEqcoK2tn5mwuBc3LJGFRqLQnjg43qgQhq73TbMyxayib",
  "key11": "6Au5SZqg4jPrBVfZ7nzkMfCVTFkM3pZnSQMJT2izjmXrL7TktHvJHUax3YBrR8dFVSNVSXwatESFWay9b9VZj6p",
  "key12": "2XFc2bJYg6eJMz3xFe1HNJ7FTdL8xDZqVzB9MsS2AH6ez2x1G12HPDTx2MTiWtk4QzEuZw4ZnthLRe5r4kZYSrNY",
  "key13": "1thuDVV5gZfKgDByubghGZXNz8Z2pco82yCDz2y3FtbmKp5dqr93hi5JwixXtzfcF1CEKbwZNot4wt3JYfYwmLW",
  "key14": "544wBtPJGNc4vFiqPhN5wPNzUpw1dWBDqHzVE7H9sZYiyY7sAEVhMNGj5YD7MK6k4Fy2w1KUGwFBXnYnBJGS98hZ",
  "key15": "423fQhANgccHhPKfXKvu95inEEhUMAoowKuTkvugKpqVWzZcfJJn12QQjHz7r7WfQN7KBFV6FVR8pFkJNcgXh9JH",
  "key16": "4pPXySot6qzYVW3Dsd55GRjMHkKSv4biS4H8bEob6dnjPKnSX8UQiJaoxiHmoz6b9NimiimzEeAZPCBWZQk5dqo9",
  "key17": "dZN4PPuU7etYQwnAodDvN3jSXGsyH7gJ6jpjKtCcLHJyk6HEcoVDXgmhkGCLt7DbtbqWyMaPYzHmVSpe6obbSNG",
  "key18": "5HsghvCrrgpAgP3Diy5TYYvKmvrX2kv2KjbtJvELJZpYwER4DnEkTJZ3u2edzidh5DnRMZ1zw2Z7YmTHi9XT7SVr",
  "key19": "5x22yG16sGdoch5sXqW8xDoCTW15Jcak5LhbjiwGtmXtNptViDcXeDFZgpKVmU6ebFV6jK8G6j82ZEh97pKTo2SJ",
  "key20": "3xTryVpn1p42dR4RTnkuzZ5goZrXNqhY4uJmosQu37aovZKoCd7UrHHu19HMEDTyvx5MdMHT6y97mpH6Smmh7uPQ",
  "key21": "2w62dB4jJYGBdY7GHAPyQs6pM4sNSv5hoL8N9gqUDGcaAjKY7emc1RL19pyHtmS94K8UtGqadeumHm74SYV3KKEN",
  "key22": "34KQGivceFhJV385rfQKj5qCq7PX4o4WqyRdCBmqpBJ3e1x7GhVA1ATE4bBCvwfoNeS7MPvdosUwMiHxH6VX8cKz",
  "key23": "3StYNztAspEsyby3b3ebxGsuGpRpUxBAs98he7V7dAzSMPj722e5XwyveS7CyKNG8jvXBq6NF9RX6Z1ZS5v1fD3a",
  "key24": "3bcZ98cCsJ5qvRpVVfyHNXhDgmzFi1UAkSYNsytX3s19uG5vEA3GdxwfU9yphtH6fMGzvRckwX28yRKxzLz6Q9v6",
  "key25": "UxtPwoYVWJrS2fR8UpFSqn9hThineYPsuQfdMsTLdgsfze3jzPUdLrzJAmSQ2wQfECa1MpyeCavoWxk67ncE8WE",
  "key26": "PPWPcyA63uYbMEowt5kYhhHkQn9KwU52t1eDfaLRJZoGYNnfZGRZgKo2jUGiunwrr5FbNoxYp1khqMhBacv1Sf5",
  "key27": "ktZs7PrgmVouYBBADCnYto3fjYhSqtbqQbZseMrYacskj9n4zfZcVSoQ1FknpfBfEKzFHS7RXcqDVwwSTWXMhM3",
  "key28": "3JG9QAdi3Uv9fEP4J4aVQzYYH35LjJ5RevQcMLUZkAW1Kp4GzS5j8McZaMqJmj1vgmUui2VwHmSg37r5dqDZXQ7C",
  "key29": "kGupDRmw8pqyYs9UGEHzb86fm6jjKx9cCNHPdhCo4m5a13Vb2fcyeH8CWuGjjEk7mq16uZGGFctNmJkA17V8f91",
  "key30": "HKbigUL7XR5WvMS7LoQPk6QbZADyJ1j1ge9HUXFrNgt1ZfjRQ2XstLw8jYh7xRehvfJoU254QjKkjSJEuaG23Zw"
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
