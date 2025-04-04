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
    "59pDRhuL4Kr28hnsKdJX3m2Uw1ifhfETGJFoaQPns5wdCzqGZbCysvdevgqoKEZFqSD6XJLW5CfP2LQXgwmvqHBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xxNiiimn7gKYk7fDNnF56tgHnH7Zq2YntCsBP89UV6MJYY6w5HhLhUJMPfbcX5W5qV8BE5omfhyG3tNRMRne8DP",
  "key1": "4s2zGnuBzmJrrXQNSqHuGg7FPFR4coF3HKWUYtZ6DkhykSH2SP87wUh48agUVNsajgt2zrG3GhDyrTUiZ5YLtruo",
  "key2": "26h4R2R24ffnUwBScNRvoS65agxkVJ3pS2BmgcfTKvm7wEb13PXiGVmRpCjayDMcVi9sdEivMhUfmbv3cYsAEyB4",
  "key3": "3RKz5tNdXmLWmD9HTNKBSKCDJpwHedcMJQYi1wv2j6mGMNu2nFAY63XGbrVe5Bh8uTD2uMDQqWZnBS2vnhCJ2XXd",
  "key4": "5JunjdmR2ctDdHnUuk8CMMjAK2fzbVnGK49XpAnQ2mXaU894YDxW7v6LeD8jEdtwrXf6csWZmkNMmbS7DWbS21sQ",
  "key5": "4L8Kx56w7pqDjSCWdgSeG5rkxm3Vy2y5t5bu7so2hVAGpkY17C5FbqZBLm7vkjJnJEmGcDno1CfvBmhaXDmTcsTE",
  "key6": "4XEiNt5x25jHdDVcf2QCpHL982XGJWFyYLxFBZDNRmQXSzFE32oYnRquBKFS9B7R7r3rJ69wxPHF5dzyUZY4baAf",
  "key7": "3vk1fFzwrxGMMS2LWxc6dkz9QPtjnYx1spziz9DqTy9hXnnueTLHiqHnLf6do4J8x78woh9E7bvqYzhgUg2YSJgC",
  "key8": "2ptqr9rTivbjUNuHg2MR9SyLFNjp9KtJXxS32jQASJnXMJ7mPpX7B4DuTFwMYgPJi42epqK7iMmS3h53ftK9nRfR",
  "key9": "4Zqo4DtFZdRpSQa74uNM1bA1vnxcLaat7C7n9BiJVJEfExEEePcnzHsbc6S5jYscYbav9VjAmeLzm4ik9rYoevTQ",
  "key10": "3Pq5Xcj3671WSLE3AzFQr7yZEzAqyoLMx3dnYhLN2NbdbWS8SuYtZWYtTEcAC5Yepounjdg713KsqeGPqPRR4JMB",
  "key11": "5iQJr8jRLWx1Wct9wQtkJjP2zD3D8w1kCRAxRBS75gGS9bLkT83dQgesqxWZjEgTWmFLJF65W2KxoQdhoSuGNLF1",
  "key12": "3kuSRHBU5e2MqKUxsaFX8Avy7Te5ytqYSXFAckgFzGdxA58iY1g23VBgcnsaHYuUWCJmjnVJ3mp6Upk9fNJRUhQ7",
  "key13": "cJ8Z7yAeeW3LnbzBLu5rM71Fk6EpXZQChxDKQnQHfq9TmMnQZ8ZR696NbSFfAuaA85kyV6diPKt5iBgnm5zDobk",
  "key14": "2RSKGPm4Rv32f2E3AmbeUqzGMxGGmKuP43fJvwwvAxgpwUmYaqcSYseepFR89AUYrqdK4hjyKaTc1UteVjHjoGAj",
  "key15": "27JmwWHFHSsfmC2JNnZn2cKFqReEH597hwL4LXJtYV98zQQjR69b7gLdafoPvfjkppQRsEAy1qFzcwUKUzjfyQAF",
  "key16": "uKYwxXqDPPpWixezp6dv1kPsfGsksjh9Q6t6g49iWJfHG8P7U7oWRst9Ku3uzmMeM8RE3QQFunLof3pR5jFeend",
  "key17": "4i33TxjeGY7uLPUQfDE9xwN3zRv9H6AkULjdQEpahu3iBq76eBDQ4JQti3TnJ3Q5d3qv13MJGrbFhZjWg2p46Ank",
  "key18": "UpKwquq9yYXfoymVnHMC48UhKWmxJh1trdXd9n5Af6B45aRGFoSWkyhLceaZD62tCux85zvNfYzwag6mmYcKrEr",
  "key19": "5zfYDCuBKz8xYmRnN7YBB5Spd97DqbwC7gd2NX5E3vPvQohNYtDKFgEZGFP4mg8QGJ734J83P2oxEqwmjpBjLMPH",
  "key20": "4fbfhWAz1KYw9i8Z7krat6TRgB1zk3paiXHcfjpAnbZiCCykA4pseUEyXKNXg8PHQ2wanN6JFYcFadvxkTtpYyab",
  "key21": "2QDNwUsTZi5RUsNZdrzkxbyCNeFSAsbVYY8dpC4z2VGwph6bTT14dW4G3Mg4k8kz7Br3iUAwYXbdqeq9TSSvxDX3",
  "key22": "3jYfCtAufSvP59PkvKSMj8gowEQjsaMyxV6Y7JCvppTkB5DJf28wGbdEGesXcCUcQnEoLjjBUq7XUGGdD99HdEmz",
  "key23": "5XvS9BKkVL6GpqVj33wDM26JDyx638SHig12Y7goLe9eQzSRDbJHPfHEpjtuNABY4Yo8LCyJVF2RwwU9SXmtruGA",
  "key24": "4XKLackVmD7ca4RnV5Rengsma8hrrKrkcMtSSgTDE2oxkn34m91A4nXtXH2knaofLjyeLcb4Zwy64BuzzfoiefVY",
  "key25": "5JEBjKUL2LcNknXevan5VVG6859MSqAD1NgohfgLsHLaapDEJLBAaQEJFncJxLJ7XEiXhgQRibxir2bhTkdQ3ToX",
  "key26": "5JfMUcZKHuf1DZWkTtnDnft5BfU5kyUNC4wy4F2z5D7oYVkZDtNuhaR8ZRaGmfXwGc8jGqaWyd4aAdP5H29JeXt1",
  "key27": "Cey6QwRLUwzuQC4ucTCofsDuEdJTjo6kcNRuBXW78Zznn2RKLaqSfb8LVYr9C2ct8ThW8zofcpvR1dekzbQJ9QQ",
  "key28": "61LX3RgbMHx84rzgSvCfLYohaLj2wYTQBfEYH5neubRkcwEUVMd2rSVP5Jnmb9Bm93V2mTkkp5CgRSTKEbmJ2hdh",
  "key29": "37KgRT4iAkPqn85kPqDwsZ2PQ1fY2SGD3bRpCbTGj8HeuVDPquDvbrWyqoGV1AFBFvAfA1YNFDncfBB1W5QHhe9r",
  "key30": "5y6FjT6rQFRc3uCBWLXg6VfEzg7AWjZbsQyFEFfx7THsrjZCfADHZtM1PWhbynaJHC8MSkmdiwiVxety1Ro1MZyW",
  "key31": "59NNuV3H6mgwwYyeMt21q3FhoLjZV7oJipiozBp9f96R1vYwvuvswzkVPVN7cmHv1iCeRoADBmmTyZHDdLFeJ5c5",
  "key32": "5KNhiQVjuT5PSQmygfRN6bEWxfQTEn4jePYWEuUz9SEy9Ls1HuwG9YXBg9YiK9Y2u1roPaeoZDZxtTn1ksaRmKLJ",
  "key33": "3EUUcrUr13FXCV48amvpcbBamrn5NcUy9ZuF5R9D59cv38ru7fV4bcH11oQSZJixG6KCqAjo7wD3SYHMCQ1ub9Qr"
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
