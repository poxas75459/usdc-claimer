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
    "67iEvCdtLMhvfDeXEAEpddgUwR8dGJGGhbxoTHAtBtFevw2Jk5mKMzF9C5UUvCuDPQgRwhNhzXqrNi4bXHvD9W8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VZUq7RSqH4chdccYy2uydpAkcPc5XtsFnpKEbRA1ZEJJPUN8G47ijFLBMwszGxvcMVZB8ittkn7cMbkuUEEkgQx",
  "key1": "4u7SA47iNFia7jj2QQndTHeRo8CN5ArpBJXY7EndzngVKAimn1rLmaJgHYo6Ftyi73mDBqtBYdwrairKVy6sovE7",
  "key2": "2v41rwb21NDMBQYPnRyDCddu1NivyWC6fLxU81EWVdpgmQhZLN4WjDuDCrZHkmDMwaThSczShCkXQCoGeVFvzuPN",
  "key3": "67KMuPkWXZ8BvJaj4jp84En3LHshdWJCx5tjNy2zwEKFUtJTH13W5YWpJfTERL2by7GPD3PTDpQgAanRoaAbVh6y",
  "key4": "2VUJMrBHAUyZxdePmivcXhaRGYXn9i1MRS6KKqLMuuDieySL23CQDGgVZEUKvdAYT4z9HC21sLpWGoUYbnM9tWWf",
  "key5": "2QFvQPj1Ysxx7aBvueDm5VVwRBmYD4ybfor9UWcQSb9R52ctHDssR7R9iZDRt5R4AmGdjKARP8h3qjgEwfUuaiiN",
  "key6": "3PxPYkAbFc8nPTgUaU4obwVz1oerRaXeHYYgJfAz7AXtERq4vhWRogAKhjysQ5F1LzaqNCB8ZxJw9UsyieZzhjy1",
  "key7": "xuvDZdTL74XKvZxqxqP1ZvMz1g8egCBwUdNBGXEHZfFMczgpeWjgrFtnwQR6ckrLQyd8TGvVeP2ZngfkvJcXWQN",
  "key8": "46FXBXCKy8CgC7z7vtF98LYUAHYuZTuwdTMxkYtYQX6MRsoiYDBwS77C5bd4MYyMchgfUBtZtrz6Rov4QS2SQXy4",
  "key9": "539VGHoybjawL1McSH9J1BUZDehBDYpbeavfBsCfnEy3sWukmsRvS3Y3AEn2wfrNZkh5o3vbtAXMPLjxfoowDL5q",
  "key10": "5VidLNHTLtpSY8hydMwwiugRV5eFLRAETSQNWSn5QsaKsKHsgsDj7Yy2QgZK3X8SRPf7piVXPvwyoet5zYW9ygge",
  "key11": "2aWRxj94qwVVonuUGmg3QewNJ8iiuv8DUTo7KeXvGQrNjvMP6PvKJu35PFJh6AVbH1k9h7dERvYhjjfUb5GoiATo",
  "key12": "4VMsvaqTrDqhJVrzNZzJQwfizaeUzELcFvVAQpEG2zYEZxWb2dFF7Gj2YgDqmYjhzoLpco2vsadgkdTKDBXSksUK",
  "key13": "4GFWtTuo8tVyaBTeEc8zC6SUrVwR1W2yGFCVnAzM8JHv4dkj6y4kaPfgCZWfDMLxoA8g8Up7vk5kyhbvoJEmKENa",
  "key14": "3s1YbaoFKokQvu4deRBirV8JHzdB7LTmREb6KXeq9kWxKAJKkEV6mKcjehwy31mjBbYfekXhuKhCfEezBX8DurKF",
  "key15": "47EaGNSr9rMy9aVPRh2nesKm89DrhEYfPrupJ6VX98UpSd6qxTjQs5uD2cKBJTQE3mNCg7Z5c7A6ydXyG4ejgUSe",
  "key16": "2jYPMw49vnxybMQjnX1fH8ebSio2zczKC6KCS3PnCvuRbD3aD5TYAbZbYCvPyEVyAHArHxV1H9bmHvnfZoUbCc3",
  "key17": "3og7ojZLtsRoJUF5mgpQEjCq8T4q9SPfUEvKzr1MBTkhDta13h7yQT5pNqpkkfL6YdeP96pZ5ABf8yoQQBXgSTfw",
  "key18": "2imsXcQXQpeRxuvmUzrWpp2ax1CBCUefwEoRnFgWWK1B5ECQ4MkNXwfgJ5a2J5nSCVFp9jnwwNXbPWAFLGB9GsHx",
  "key19": "3dLzKk9XH3EAQbdq3Jruw9uvMnSE4HfuMDaVrFCMPyBgftqxNkKppXAwePohLi2qhHLZkjgAua9N7XzXJGgB2Fzq",
  "key20": "MeCPE5RUA7XBeYUqqQ4SoqA7oyXrHkDCUcHf3GR9KxGpQu6rSSygo9QNuQsgqeN6W6dvjqzn7BYkPNvGqfSzTXT",
  "key21": "65mt9nrx4ZKF9J4m8uFX21yjEPxXVPM7NdjBhHjk6df6bnLCk7RL3YsMD3cSHyPfJfgZJAzD2NZWvG974cnx9bPm",
  "key22": "7E2xZGJw7j3fGBSajPyGu95AzfGek9ic4cR4AjHGaCiqp9T9qvJfZLzBJtDT1iWUmzAykgqwaTYuQ6t11NTDKyF",
  "key23": "2ZV53K3NDbTaUYh34dJAwxitLtCNiKBQy5RHtTBQBe1EUhMfFKqdm7H5XQUDdCmBya836qpgt9QZUDrzUq6tNMYS",
  "key24": "5rQCj5dCiH1VatpUvfvK2KvXxerLanTnZ7TtgCGYSsAjZeWiNz5atsfWcwEERUPW8KGppBUzAuPMyJH6qvZSePnn",
  "key25": "4EkZVMiaDioyKULNJBaXcVAbJZxNGnYrV1gvwfCXjvvUxVxmQu9HwTjnsMpPGFeoApcc848i6GTi9dUXi4rkeKCM",
  "key26": "55CfSh6rWL2vcrsRSCpZZ5cNnzfiPQDZYLtdAf3Xzg3ZXt9vjYKZmnXU8G5m45Yrw5LZAxe4own25xFdiPWGUNDw"
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
