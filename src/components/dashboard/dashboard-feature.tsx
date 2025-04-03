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
    "2ne5NzTKzKqtZHihfD9FEPGvMqnGqafdNZEtBCPpUBf34UyKt3C6Tju8K6Tz94HrG9Ey2mGWfeAzyYo2JRE8KD68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bAc1w5XKNv4zFqpZgUbvZsSPJYyrTxWU85NoL1aiwfSbEdvNdt3dXYikh7JVjug1zttGCKCDhAJHthxcK4KrgAs",
  "key1": "2UG1sanAY3GeRpKWAvUXQqqH9P1JjARac5L7W3rSMid9oGvJgnWpTpBppWfQJzbh7p9YJPjT5o4AFYYHatMJYjTi",
  "key2": "3VvknCFcemKsrCEA45mx5yZWQrd6bWnnAeBqP8JaLhVHcUhkbvzNJXmoBwSG2FPLSGtWUzr7iVEhz82bVzFtNXHk",
  "key3": "2Qnhx7yq9DHE2EcqGZcaejkdLsymg8ZiWR2FAXYAJJJ2SJTsoU7qDv7NaGuLi9ZpAtjvvNs3WMXcpBPFyRcoth4p",
  "key4": "29RtrW1PJ7Tv8PDoik91HE2czE6Q3yGh9X7nRgLvTLoGRZ7mCvaAdTBnkkTutChezejcZfQf2jcqDH1LomVhzCvV",
  "key5": "4yMX4FvN38rN8yXS9Eho5hmMfe65RfxQauXn7ZJUyMcFBwe3hkkv5zdEuguvw8KDFwLUHWotmRLRvu6w6UvhBbf8",
  "key6": "VsLxxFJWjLG4usEmvh9zZzqZkAF3TomF6QwcjadKLgETxc61E5ihbzFegpqaACpo4r7BNBA3aGbBnKfn2yGQHho",
  "key7": "2sJA13R9bJSBPekE6cJT6gT4m7G1rNzzCF83DarSwRa6c6G572nzd6Es5kYXZfysV14Pm1EZed17KbaEWiQogfVg",
  "key8": "5qmfJhq8Ed3UnoGMRaazCfhTMsHxvfohjvyocDjkhMnkFkwvKU4LwZNUiF8WmMYsdTWnmvAC8CviJjyKMxonYu1U",
  "key9": "Usn7PoVuSQiXj9LbpUAJodCLvdramcLsv3YUuV6TBpZ6jeXWzCtc2XcxnuxGYib3XXGWYAzQgcDeYPWd4YyvFbh",
  "key10": "SgxjHmB4TVLnUyJD6QAyzKNfVttXkwNFos4QvMwo1rR6ZzdS4VqGQ7ARuS1xVBhW61S2NjyE6gFADM2kYfBLmBV",
  "key11": "cigqcJbKZGjwqKNJMmqV51fPsgoMEDaPeTxmBkLwxYeqzV7XvxrBxUPkPGkQRaqz3Mdd38SwurPhBRb8Q6GgAoc",
  "key12": "2KexTr9MzEZfQizsFdn1fH14GRgVu3vLZJAnAJC3SwK8zmdLj1Du7KH3ZxiCswhiQqZ6ihUYcXi9u8iXmThuXRQC",
  "key13": "5MRraeDG4hNrJtewFyftZMCZnQMnTycKdDR33soVHk6rzxrcUrt7gaqdnUHGsQm8EYpitNdVAoHGJUUfNRUAsevh",
  "key14": "4aXEmzbPMZrp2N3gJDsvWBMH4n8QBhQi8pT1kaac5ecHpnmdrqdFvZfC1BBEgMKfZgT4TYSUh8dxkkLK5i5YmULe",
  "key15": "5qt4EnsdiuCsg8ytTJgarCG1bkygc1C96DAMRpHEQ4SZLMbLcaPCBgbJizk4L4U9Kb6m5SPrSkUuLdYXT2C1ba3c",
  "key16": "2iWZDYEkF2W11EyF7JnwVWvrXvaSNGnQnubQHuKkiumdowWuGiJ8MrnRcqQQZ74Y6BcvhTkar62X3XMEgKBQPgot",
  "key17": "U8Ju7Bvgm7a5XrCs314hFGvrRABBkoxVH29JiPEAvx2J5cBHpMUjTTpfdd2SDmoNkTwDMYK46pxycKQ6cyhJygy",
  "key18": "3xxaNDB4DWT2KQ2Z5Xzci6MZDxvMBuc5TUgdTFqmnmu9zyscSzbvWrr5wq1nPbPGH9bY7syfYrnFGk7RgEk46u9L",
  "key19": "45ABbUgfHC3KC6aGu4ggZuvFwHvM3VCBS2AZ8FBcLGoz3E9QAPisVJbdgfRB3FMEiA3ix4NLJzDKSWPsf5ydqSGc",
  "key20": "49LTXqrPLLZTPKCftsH52izstTxxiQaCrM4Um2tBqMpXVhQYpYCu9Hw9v7Y94AWob7Z6mtFRCUjVh7EZnY769vC3",
  "key21": "GCgE6aX9JNMYPGjo7LL7ZMrLsbtUBpLBUZ38n8pMtkNrAV9GgPjw9GqC2YwP3GWvkxk5iYaQSSh6p82eoy5fft5",
  "key22": "SxBhRqojbJZA8reryuGzU6nJ5Koxz6BPrJqJGqAJyQcbq57CNWo1UjsT9Cy1YvtDyv4EdHvazHjmJwQqpGrU7rG",
  "key23": "2p8pZ21775HGbmRkkMHkX7hKwwpXbQV6mcjSy8nwDP2hoxZh47nA6zfKo3zVs2qLEUFt5opACXgVgnGVe3xZ45Eo",
  "key24": "2v8TwP965YD4uSQF6VJoAod4WdfmwaK5VjNZcrEcUj2QbbXVgAVLcRtjzPQz9bjx3p1MirjM9VPPMMQhDPStywQN",
  "key25": "42Z9MuUREkhm1GQ82ajgMdbovATi3fjzfxs7TXNjFZjxDMWFU1Z5ZdkXQWHr6rUdQB1FkMAcNcELdzHS4z9AERV6",
  "key26": "3grdDs5uzNSbGwpBXaWkRsKYCJABKjbNXoiPKne2cdeKZ5i4cgyTtkndBwvxeWrRf4p21o9MakVnYVt8Y6UfGmsE",
  "key27": "4J2wBRsicH5zCc2KU1RjTboX1qaWnLjuiAu8G7ftVD1NhdpJ3kxKfJN1sW1HrjRVD1PJnRHpi31tT2KMheNyQS7f",
  "key28": "3qGZuxicCrjERxzupZyUsHU8mtUVKmo6WZDXH2MA6V1UAYrTEd6NBeLFo4ddB2inHCCxKXLJPjn5k24bc1vUxDim",
  "key29": "3pjcJMYxKXTYro4fhjXYo9XBbR6x4wQBsBgkCe7G2g7nGzxGHsGhdVqwRttGMw9RWNrhHT34WCnsinq7XTNZrRNU",
  "key30": "67BYTCET1Gc7MbxsPwQzRsiEnAkbsrWLMd8s8tR73Qfbn6on6EEq4NVPPsY8CFYtwqqZd8boCXD5WLTpH5pudpK9",
  "key31": "jAjz9CJ5WJ7kEbfthUfvXyMnHjzqW2xAR24hBcG92H6BupsZvtNQBEHwAGSm8YNgUmXqN6LEv6uryMuSj28tp4H",
  "key32": "4SEEBTKsKdfphyaaJWRSLF1ynEcx8pdq7HbgEds3bwDUtwtwguXGNUEu1Gz3wvSNZgHZ6oxL3PJfAi87H2KBcPMw"
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
