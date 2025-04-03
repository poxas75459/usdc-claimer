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
    "3LLaLL6vo1XhNzPeZZ7wCqsPbZLpVMnezSRC2bTaR7aQsfJfbVVT748S9aEwpaKYb7bpEgcGkjbwzSmbkdZ6F41s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h1w69i6PeQX6QmSEEXtRZkuJ4ZSHLctqtbUJEP8pB19J1idXZ2uzcCdiLr5Br6GSzF6rm9n57dA48VsbBXjUfVA",
  "key1": "4kBPAPkieDpa3zkHhqySvwEaB5S2b6e8ik5YfsYNkCQPoqTactFSm8cxYGBzKZbkJKw1R2dUJRHxV8af32KGh3Xj",
  "key2": "3gqwkpjTAuW7SspsCNDrEKxVPWk2Pw7SaJAnoAMtcLEgMyqEX32X17c7z2FUB6eFspg5fmBb6GJ1obMZbzdt5nh5",
  "key3": "25cAWXTL7voqHutNay7Z92oDfpRT87TYH8RutAf6pVhZbzXmob61sGtfGwXFw9hFgMFMJ89z85ftXL4tkqS8q2mz",
  "key4": "4p2L1p9DAkVdpTYQcM5kM2fTK5UjmvET3Z6KwDN3R3ZPaKj8CxqZ4p9pKFmdWWdg5Yrwf2YEWmZqpJohk1iLi1qo",
  "key5": "4iipvCtaJkM32JXZwEZM4e58gm61e3AmhNno4X7ecJXQGwZskbvv8crQ3hXqn5eF4jpzK57YZxt2UWjDUWxprTHf",
  "key6": "3mVR5hvsMFphrpPti6EGLLk9z7zxhotfxusFw9LoRjVtRdBD8LnYtdqHBnrKy1G2X96p1AsZpBhiahEJqEQGCyc6",
  "key7": "23yNXKahMYJXGzJBkTiD3kKWtpybm3i45A2dDGDwm3Q1QdcysFAjoVAVCDWQU1jBCq2NH5CbVBMPBCS33hCMpVYc",
  "key8": "4ezmvtWkyJLpgddzrrpkvWCeSo4GfKNH3LM7XUNkBPxsAYL196r7HKSg5EaJbFnLt3n5by1pdoxmYxswcvszH6ga",
  "key9": "BbnraYehKZ4cQrgVLUoGW9jSxdRrBvzJtdfg7tqZjdWL8qjijvWwf8c6nt5C4p6hcWdMWJ16mio7nHSV6eMgPu1",
  "key10": "61J7KsRkn44iZ7LoirVN7wAJxVR8vVyKgXGNpv6zXHQNk2f5LJJbV1Q4EbCuvV2UXwsLKC9eyfg55huzVpV45phf",
  "key11": "5QtwY2K6C4HQr15CBTDhNi7Ha7Mpktw7c2hAr3Dnu3WFpoJL9Cw573znhr13pLqjDxkjxWEQQNM5wpdM9c7D3Nuq",
  "key12": "2vJmkXmzRwKcgwnjQpiDNpTSLM4BhoP8VquVJVzgVWLAkZ5vA8LjEQR1FdSPudXFvVgxK8vkYTqbbyjJSZE8gogD",
  "key13": "3F3HUQgE6ZgvqwzeSR6Z1HY153mFtRWDu5FW4wn158TbzgjmR2TjJmSsZvTXrjP6AjcuBSWXrisU3hjiSeuZzFyR",
  "key14": "4wX7Fr2y97NCPC8TSj48mvChkeF5qPi1gn789HXwQkEF7sfajZ4sBBKZ9TShX22teBFigSowLDLAqMnwra38H6ZX",
  "key15": "MzxNKBfraUhpcJfAKRpk5ovuqbt1KF1rZWyrUn5LzLTMVuJgbMjsbyg5wuez8MF4zUnUzztgRdtvfAvRuWuJgfZ",
  "key16": "2bJKbuZFgzAE1W4RxWrQgRFqKNbcFi6k9nzKmGMthHQZ97Qn728NjUXB5KetYQbCEFVfkGUoPxLu3iyqPkun3hD5",
  "key17": "3AmmVcjA8by8pnx773ypJUBcd1ZJiP96ASEsBfXpzGFGnaVvhNAodnvoUTP21mmQw7E6qGwripcJYH4t2ja2S8kL",
  "key18": "5FmkvndK5t7Q6H7H3asX7fuK5AzLLao978636Vx2K8WW4sfzShRvBr7wWBzBGaeTzsaHgYjm3Qy8nKhyCVbWgVv",
  "key19": "4ExfWSLuVdBAsBNc9k92zsbKSB5z42aTP5DePiSbxdD7fsY5ipMRiy8sdPBPeeDsGHznGCFasG6qWX4g3J1KcvX5",
  "key20": "64uSoS9sKbovn7cRNEmaf13cMnwu1HcpLPwSLEhiWs1QjawVgfSkaQgWv1FJ8hxs5NudTtoJtQ8vqjHNiWB2Agsg",
  "key21": "2gwgNLnY9AvQmq6pZw9EB1K7dPCpHMvqGTyzK2tbMNbuHr1Zd3zpkvwQWPXvnhKXjA3XGZyZKqkigbpWWYVNPxqw",
  "key22": "32LKFt32DpqTv95htvCACxKRpAq1uPYYJR7YpjZhGHSRiMUwLUN2jkcertMmj4eU4hKfiK59uqjvEZz3bk3z5CYe",
  "key23": "2dw8MTMjqh56voZThR4Me5QTFu6GDdfg3Rm7YhyRo958a7VkVganmAtTpG1MFSup3KhzxXdtnRx4LmZgv8uZnVHc",
  "key24": "3trFo26vpxU81FKcf9qYzCe6RwBucK6zFnbAraVXd3VqeJZYubSN816Dj8GZLAoAFGZMrTxjGzsyGkTe6hpeymZD",
  "key25": "3mhSJ67j4VzkoX2JTTqB4jXYzsxMpt5aJZmryam2dbkQw75b8wUxu91ioZrvVPVXdkdroDpaX6Z26rNJrotHoovv"
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
