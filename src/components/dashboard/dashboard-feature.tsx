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
    "MMxLYmM8tonM6rsVoWMkGgeezGdyYwXDYR8zQgWX96R662Gdkg1vgJU6BPXjdBy7pKMe2tT6xsFWDVGEGYrg9DU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WuT4HV4FtUJeosBFCphvtCzZFQoNmC1mTyKM2t4vVcTsxYipS217S9Pqtxz1QgF74PwST9k2GBsQdG9ZKY4jWoA",
  "key1": "pJFaCmMYD7isM52kpYqzqhY1ux7uqcTf9fVmRcvDwo1PzQc5qi4bcxUkvyzmePcGrSfpbn9ca8ZAMPzJsMKW3pr",
  "key2": "2Hrcjy4A9QbHcxG9KUcXpxXwABFdpgp7QA7XJQH5xEG9ojC8zBw7bXJFqX7RzoHLiTvqiSPXawJG91iqRj7oW27N",
  "key3": "3xytxe3CNjgfsziV9KTkXzEwnzo8SJhnQEKaGSuAsfpsedcVfnLGkdn6QxdbpuYNFWG5pkYY8ncpihCGyxWW1dQ8",
  "key4": "2b7kBZgGGZdKu4XMfUV9gfREWnZJAZTnYE9xPD6DVREWwF493R6jn3jU6Ffj1qZdQxvMQ8JCrWkdF9Nq7rwb9rHu",
  "key5": "5QaroivAGrryiuVU3He573oZQi8yEf1AtgU9iUhE3ipJbLLmBJb63zTvFneeDso1bxEccV1fzNQqTQA9Qf56wXPP",
  "key6": "qM4QJeo2dLzNEd1wUYK9C2JUtzNG7FBJMfoLSe9PFQNXgPU2ThCE6SbqvS7BJFZJstw3dNqxAWUHjaJ2AwLGAnL",
  "key7": "EhW9C1jM675NiGAhU3zuJbZqXL5JK9gqJwDQmLw1ANtpGhEvAvh91z8Ey91SktGRksWqd7dQWG35Vrh1q36B7xo",
  "key8": "uny1H7fW9UrKLT1xnWLzRQCKuJDc4ifB2FeqhWQv7RmRRb2KudVj5WsBFhQZnroVpeJ5Kwgqt6BpN3KQTYPcauh",
  "key9": "2YohJwU6nvXCRQRsf13rTTCfJzycLWd3W21GzF4QEX6zLJ2zVjJKFBAJZeeWYVXYBwcFwjrdCxFYVLK9CyJy6res",
  "key10": "3S5iRieZwCwddErDkqhUGk8tiT2QcC3v2q5pxjToT6zP9BToZ6EKGVLLzTj5TNbKQzjsL6GVcAeNtoo2UdGTkWWS",
  "key11": "acpp5ThqBm5o5jZLf3nqqk7G3zH6hHMmuMn8DxB6B9HYAvDQCU4TvxDrQH9kegJML7XGGTp4Y78wRKJu6kCb8Bc",
  "key12": "Qq1B5N81D5eDhD6YuTVXCYniwLfcM9q9g2MQgcJf1NNkX4sHCTVADXbUB74fXofaQPZFT6nLsKPgk2JcUruFuFW",
  "key13": "24psbPGTjPxBW6GsVD2zA2ADsyCVZCJUd4N2FPn2EFrnbR1UE25hU5uzqSZJ8GFzKwtcU4Dhz7GJ2tJAijLE8C4L",
  "key14": "Rz8HYuropS9VS7CLPkxq5dM5n2nNpMvVjk2kQtUGUmDB8SFSP5U3VK5mF2ZZoU5HALiu4MtA4vcuWU1KZSmDCjK",
  "key15": "4A1a9ymCfnXn8uvD4RzCwEMUo5EajWRDHmcwFAPGHms2J8U8FJrVByY4BFp7TJtK1LfZ5BL46bjtnbacpAQEQYzV",
  "key16": "5eTU4PKZhGGv22tog5SDjiMZqpK6zeV3gua3Bzuqp1JXbmLoiQixKgAFLyRMD63N5dz8hXU3qdaqQHwdZVDrTXrS",
  "key17": "33BrCYhJDz8ai8pzSAg3ZRHCwpWgihYYmBPjfcB6q6eeHSSngnqNAf5d5LURmDYUmL3zZrWQCdaHF7FbCnomrEDR",
  "key18": "3t7RRFu59szRKPBUemzky1vFxmPN6HBxhbVpQcgr1wZif9x2Jshz5sgHy4z91BCcLUVchXt7pTXEnnkTGbjVzHwx",
  "key19": "55MR5pZxKbtZsRBqUcwQBpNME1KCf5umr5ezkMKgXcPwrj43NXDQGd2758qvAH2MBvRUWb13KiJRmdX3GXa2FwmR",
  "key20": "3XiemD1Ja5sJen8RSrCUEr8FjjaUjtK68MYW3QsKExSZngKY4LHBLNwWciCyzmARvLZPyptDbqn63hBmbUD3uQp4",
  "key21": "45sZTFBsYvCdqJMg2bPwGYgxHNSrMkNtHAxtZHu9SVUdci7c7yxKjQK5ctTyCUdbdjnkcDT7o1DVoJ61fmeMWHUa",
  "key22": "umSMY69cD1eQ8kDJuZ8WrqipKRSi3UxWooe2X6FhU1BSWK1GG5WxE6RLXZ7ComaLpM4opVrDzgU1zG5FmWVLQhb",
  "key23": "2vJFkDjfVwBBtswjRbJNnzj8UnHsVCWkWsNhZAFrQM4etKTPfU92vE74AnpmtkdQskzLf6kb6rMx44PKtpzwp9fk",
  "key24": "5XT93LR8hYPbbw1GHZ9CYQZkDKpoLCB4Y6SZALqa61jWWoLqFu3pjPZGfegoQK8BZP8QnyCUBaWpuMjEvc41TtBn"
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
