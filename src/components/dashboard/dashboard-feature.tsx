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
    "24Mj8Qsw4B2PgZSjwMdL5gCKAs6ntc1eWhrZEK9oV6XUE2JypsouJqs7mqfq9wpPzkvAV1JDGxb8W4LQS5V2VK77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y7GJXLWJBuE4NUWVhpejcX8DcReMb1anPNE3eiCRANweeBsZFWB8n6wcNY71LvVGmFvRyebGm3F1QhUmzrwgiGM",
  "key1": "4GArsJ9UR71B96gqJLZWyE9YDz35PhE4u5cxLvX6qzZzzwKH2Ym7GNpApVDQKnkipXxpH8TUtMXRdBmqh8VFCNnY",
  "key2": "5ZN1KWjXZ4ZHhnyC6RNnH6mXRkj55uEyfUx8K3yw9rUs24Z84FYAsWjjnxuepVCTwHLgg59xJTxhwMJxCksE8dUF",
  "key3": "64JmMopNxrAy4SKnJ84hzTWzjm8Vd4LRp2JiwMDicGrXsfM5bZZDadeoYfZxS13rSyBw7gigThDgpkcQDHS2o58v",
  "key4": "2rN4ho3hFwASQmCKY7EVty9dA68V5SFnDn9YgWWe44oQ25Xwm2remypVsRA6DWkfPQAd4ogpBuYPxRky7bN4MwGy",
  "key5": "Kgkum4vgfV4KMPcD1LeKXD1LzxUfZ7WCdy3Vu9qCs7GXYMvwgXSNDf4CQsErSFuVXN8ppPpobtBqpjAgCHjptMm",
  "key6": "4ZpDLEaxeDHQQxQhtfWFQ8bNBffMHu1By5eEAq6hUb2Ns8jFYf5MoTJG3nnNKMJtvWFRz8KjtjZqJWVu7B2Ryfwm",
  "key7": "5hjJDTK6sEBJWornQfurZhFWEV8wzqp6AwMMsK47jQHGamPa24cRX6NPCrcYw7jyMbsQ1vapHCJFgLAUVSYobqTc",
  "key8": "3Y2VJY45k6Jt75v9SZgEj92P35FoC3EByHSpmXrJmKzA2yzRgQf27T8eCLzZqEm7FcjLF1zfXueP9wLwgoiXPKmR",
  "key9": "rja4aBzVJUKdq4ftSEkeRmpf7ooex37YzKoK2imVpX3t1w1KFeu24d1V4ZoWyQRmKW3gkwmmkAvT9AkHesN3re4",
  "key10": "2NzAUrjdVCv5czWWxzbX26GWBoDf5xFtYW9Dq7gdRPoocJbyq57vniSaLM9LXW68aRipAofmZB6UfjVz6MseTALr",
  "key11": "3uZhUAQ1AByxBjjgyBXMc6LK4wR4UqM4mmaFk4XdXdygasDLiY19c96JXY3HuZYUabD7WfdWj951mdzH8yg8oWgs",
  "key12": "Bog1RQqfr5bC3Gn5RWHsyb3CP95bYEtEHvMZtVjvoNEBjg3C6k1cE7jdt599UdANo1jGHe5xPxCu3Zb3BHzEjZc",
  "key13": "HFgqCq9kgcToUgd4x8ZXVYTCAGw5M5YAvCwYjhMX8V1iVwHFpVcGX5R84MRq4KH6Z57g8Bsgy9oi9paPtauqxPC",
  "key14": "5UGJVYtwHSf9XuA6joqppLxdw98FpaQkanLBncJbW3DXPks6GhugUqkVuwx8zs3Dfhx4kXx5T6ojoXLMKbRXXVER",
  "key15": "2VLFZvgY8me3w6REvPMXsw6DqosqthbvDCoqtqgX4oknRWUmhv8xCbnn6usHoBhN39aaEyBQmpSaE4ah7BLz1LTg",
  "key16": "4EXE1LZVgrik14W2xjNLeso8FTXQSCCknvcF3rX4xC531JPk3rmCjsRuV33r5J3tLqroE61xBLb3NUykHZ2aAAEX",
  "key17": "3gcNzvDfphQXqopCoHr9sHzxcc9fqMYzA4LeVHxkhBgJMdtHiDQLReHBqbyzvv9FCxR1CxYqfbUqZ5oxzgTKShjg",
  "key18": "4CRj2AfHsntPwwcYenDBaARY47mfT4PZQM6bC9tRNTn9tfRifqDKWFyPndUmeV2jNuTQZ95NYnu1wqUPHzpB9psw",
  "key19": "2jkikpj6pwacqCZjosFn5RMmdSq1ji42ougK2y8GGKVfNLNikiJX1JFs15pzUc584Aij4fGVxFE8fQuNEMkQ2g5c",
  "key20": "wHghRHdTSEryKGME7dkGV5vSgFkzudWEeqPxDJRAuNqorJ3jadFcXaU7ioE8Fk75zjBvGyG1BTKgNd7wnCAvqB7",
  "key21": "xu4XQqTUT1VaYQPRLwCFU9bKHbUj1sqNiUiRzapgZu8LsM94MrMMTjop49bD1XdkDDn7EHaASbxUdFTfeXgZuHk",
  "key22": "t5T85cTGMYmBRLwt7gDoam59mBhNZRACWjJj7MdZ18QpUGQkgCy4g9ApDShk9ByaPMMraJ9MqxoVW3n3n3EGXbg",
  "key23": "3hCbyCm1SiTySntWsGhRAXKuA5gFanRqEc4voTxqosYuT6GVvr3SPPhAC3b2Mrow11jrmA5EZZTZz7PzmJB4Jvjo",
  "key24": "37siL6xntBFA4ApTMqxovd5a67NFuXZr22kar8Myue28dXzEHUGcwYjU2HQKptsHUf2Vjim9cjTJPyfziVdXr4vm",
  "key25": "2HsTjyWq3Q4TWg7c8XjgBkEaYRbw8H823dK7d1Qd1FF8zsZUWqoXrqSsZJZiAX5ayx3BXJpCiwXSdr6tnQSYjfgr",
  "key26": "qZhqYNv6qhT2bpjSGK933tpioBLe29ZkvpEmreFFHw75Jjg1EZfpFPTQPpB6Yvv8coVHNeDkwutn7BT5jfuVRXH",
  "key27": "2AKKFNAnr8ugFcjWQevXfjm6o9rEnBvXnxjhWmjB98cG38jRurxf85exQaGx8MuHtNnN4qUXLD1eFHjToFNYxnFP",
  "key28": "3uQpm4z4PVStSWgTdG9QfPzz5TaPsvys7TfG3Dc8VkzFtTR23su5sBRuXjC6uUH33V9eEekvFFAJLxyUTg6VXLKa",
  "key29": "4NqF1LK2j3c26NRmnvKFBvzvkSvaQ5g9MmrzNFpiBX9VaZzfV7tNkbKytU5FmpWbPCw8rYWHY3yXaJhAvpZs18yX",
  "key30": "5Zkv41AhP4i1HKPnzjZ92VeztvH2YuNHYPRAyor7nD5RVTmBtJHKYdCSd1zuTPNF9GuY7yNjiJcA7txbHtbiFYcU",
  "key31": "2Wjm1R2ZtiTySNLw6iQXvSqW646MSM52viCeDhdgdgtzJADC8GurivDXDXFFqYVtcGmZySm3SZRQ3Lk7EtgXonLD",
  "key32": "4Afogmy9vLwEchtMR7h8xwy7HaMSV9QiPhDhFGhib5ToQqQJLYRKmt2UJnTcieMV7T9nM9SStMqdqHwEVhEGWARs",
  "key33": "4PDacayHTTjVTPMYcKimLwVWTuCtuZtTjXBUfTmTXgqx4D8VUuvoE8rouuSeccnRy3fNiNhoUwzu1Rt4fAW1DXzd",
  "key34": "23fZyrgHjHEY9fmx3mccmcPCF5D7W97XByt3GK1EcHPSPm3Xju7tpaFiqfCYEtCufdo6ArTX4LuZnb5TkFHKsEc1",
  "key35": "5aG7wgevvapkUwrraVj2kj3chQ5LP2KXWJtfkRzkFUqy4LArvBpDkRv5g5Xas5VF2ys1ioZaYTEULEzR5j5n4oNj",
  "key36": "22UYJmoxVgw3bxy8ETUX8YWR5t3qeNJEqu1Fh71hA3breXCs4Nu2t2KKpvoqbLJHdsyvKZ437KwWihrDsrkXrJwp",
  "key37": "FxU35nh8mkBgAuC94TcVWZJW4sHtpbaDHtS32rJRjVXLfMBoH7NUXShKnKeFxw3DcPmPj8EctHMvJ3oeBwV9HYQ"
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
