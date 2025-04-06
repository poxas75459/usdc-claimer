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
    "277b3XaBDNA44yUpbzgKoQZvNpR4fAu7UBUKRiqiLgDnZYPP7bZRfau4uoi5DX68ShdaYunpD7Tw3MpZNJWtiXhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64buzJLKgt6BNFchHDqbuM3EceXiU1Ek6NMmaVF61bVfN2M5is993CtJi7P8gSuNpzSLay8jGCHXFDiAxZuusgsL",
  "key1": "4GMJhuBAJg7JC51wJqr9hFM87JpaVnvZDrBkXXHaUbrxmFtA3hdhQPJQ9wDuvfcuMK8pprBebLkA5NcAff6no13B",
  "key2": "2uKc277BgvS1u5e9ZxpBCNa2Q6GFkmNYMmewrUd5Ev5GKRLRbkPcjFzHWdfQBaWbCiQnS29y8qYEgRvDBboBWJcE",
  "key3": "5HZjgp3fh2myMc8FFjGfrxWdS2CpYMVRw2LwREkNTHhRq5cBDBrwk7pfkNvYnFWBu9c9tinm2jggapdYj4HLQ4hH",
  "key4": "4qN9BZKLJzUHRncMc56XWBGKWbZgRMJNRiTSPugbcxJ1nHN3YhBg5RcLRAwyCRAjGoa1hXBvG7XBBvLZa7USLYLN",
  "key5": "5M7sceXXU5PB2JnPkMVcv6iStxwveq8PtaBJGAj8Fg8QeukDcRBKfyDeaBhjayvM1YfUJwL5THASkTSRqUfMKETN",
  "key6": "3TXs6eMi4MX7SJviU4fuxv81HT8Cuv5ny4AD8DuRsw65rVRKRTf64BsVSRmpnqKGf6YgSSaHHYHjkjr1jNqsUz7a",
  "key7": "4gPoqSMfBMCG9q4r6mgX1X7VhoyxiTNgS6WCexAuc5Zr7F9qiq1x9AWq9V5bAzJr9EpcV5VECLWjWTbSDrC6nYXJ",
  "key8": "ghEptH2JFtsDnkaqoE1WaSjTyxc7MHkSiw5TC2r9aLUPhJbzSB5UfFrR7wLwAxDuesqwbyKer7KWhUFMQpB32N2",
  "key9": "2HgSgdoVQ953fuGqWeJM7BtCwBULRDHZNsD45dYdjWqnLTPiLgNNg6n3dhpDersTgGUCmb56tVdm2sfoU6RwBguy",
  "key10": "5fR3RPBV8tVqBTdkJZyHcyGVWckcfE8Ke7prxdBufq3H6SptodoBvgvdxUgv92K6qi1dZA7Sv285f8KmGzykYAC5",
  "key11": "581pibLpEHY7AaLjGigLhafwLxjrtAtGBrKkz2J97VpTZpahgmGt9Gr9RWB4PMyYQGvy2WJpKZYkuXo77qCBX1gw",
  "key12": "4V9ZhyfQZ2C4sriRtDScbbcQ5KwSatocCfajp2ZPueLjic8WStxRuWuG3kgXxw1kzkGsGUkGXysv7fGDfYaZEWtk",
  "key13": "4sQRxnfF6EWbg5XcrKGjQMEBxp3315pQjGrHG6NsUxditHXeSZGahotapQCwrFW49Fkm4t7TMFVU95hJVayhAS83",
  "key14": "itMnqgzhJ35gTxyFTb2Mq1p8PJH6rWqSoDWJJATtCoND6xSTHXszUn2pq6U5TP1heVd1iLTmuWmhcz9H5E48cvf",
  "key15": "3XhorcSw2GKn6kUYLoMZa27AHg7JgKjuJwNBU6HYgXLVVoTWabyzrxmAY69o916bsiXr87f3hto9y2P6SqZMqnzo",
  "key16": "5UVbZQqi4Na839dcRfAMWaj3J17Cpa6vkDhMp9agqq78WWzBZsErEmFvwouYafwD6vBQatoGZWqzfXXim2MRKUMZ",
  "key17": "JneCJjbeFSF3fUtMfSqxybAeR37PrCS6a2DNPFy25P5HBCgxUcg6sqmyrhf4vF1qFz7qpmYmQHembWdaGnGWQat",
  "key18": "4tZPi7Y3dgHhaGoCH8qbjp8ECXXUTjBAna1L9XYSL8DPbC5pXkAqLCp2A3XY6VKXcCZLzBG6cA9aUK9tAcgRgoi9",
  "key19": "4fTB1Swj6a1YPEPWsbqtkbvhQFfqUnTrzQGpkGuc8sjPEUATWdyXkw5ZKPd68epqH9YqpaAHTe6d7sZZQCNGBHoY",
  "key20": "5YpQ7p1WiqngAw3mwAXazBMXzwCSZ6aKgt38VJYxf82jgKVMMiqJjE3fkZZggcK4j53JFAT7AKjywyR1M2cym79Z",
  "key21": "3P75qh3mUqUYPG6gD7FSfSA6Z84DWSqc43AMK8xWZ7Dt7v7NdiG1J9FnQAyoH5gySQY9BaG3E825yrVtsiXh4gax",
  "key22": "295xQ7jkA7DtwLua3tQukWeZHvvZMHHZiaBqjKP1E64LboJVrdADrFjLEJDaaNAZgtJPrnXko7Z59V2VevHYD4rX",
  "key23": "4HrfSykFYnHdwXteXZMknFi8LQKdvhkYHHsgqcbDNZFyf9Lw3bjqhDJH5dfmzqH4k3XZAJ4HwvWVKmt1ME9tdcZG",
  "key24": "496U77bF11awrswTgUNYkgNLGJTGgTQ7egh3aEyA1xRhorJKDFse8SsbjLQg3wHtA8rBrmRrW3iXcCf1MAUfnx5V",
  "key25": "QqZjgU51buZzZsvxVPB1HYgTGR6PrP8a44ccNgaArAAdHNs39iDakPAcv7Dq1vs3277JUAv1JRtju7EWqTRJX47",
  "key26": "4t2qh6kYNoQyvXNiURjK6j7msYtXrP3nB6pLDbfrv6jBhUgQWUdyCVRkdZNePgEQS8hVWUszyFhzA8Y8dFvPmpsY",
  "key27": "2y1S3dYazNR5hfaAX4mMqiDoM8MdheJ24hAnUEzA6BuA9f4u6GoSTjwKrjtPGxc5sXcVN5yB2E95p565WtNsWUSM",
  "key28": "526VHoagHSfqaL4aL8LPHP278oDBuY1HPKRjQnB7P3H4P9WdAzVhRVZ4nsSe4zfHTjDsTPabF6yE6Ut3sqHgJ2E6",
  "key29": "2Gyhsjv9VwABBS6kFCuJdLuGnrprrU3bkYBHBri4Hktycin3XRUUodb92xUk55ZCKxXRzexNhYfABsP4ZRRhNYSA"
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
