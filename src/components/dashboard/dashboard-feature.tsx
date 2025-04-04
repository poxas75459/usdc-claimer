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
    "63e4crf3vzaZ6nBVhgu8M1yDXBrLwNn3n2ju6XdbavZ3oFZxiPvCRpjksc2sP5i9Evaj6n6w2XKQwpdV9yceFt4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q35D9Dp31yXSmGdWSZ74uxRfk4ttXQFGCdn9rbm4uAW5kUwUufPiQ3gnhyuoKPRG3Uap9HW48YEL2tVnet3BjNN",
  "key1": "5C2NoLTGSGZ9equfyVyozVxPgXXY2gYYhW2YMccAcdJow4fQcUkC33Cq6DnZNYDL8WJi1Kcus1QZK3Mb6NcECaj8",
  "key2": "4RhHuGjzKqcsJbaSYWBKPXaT9Pn9ADq3AgKazqoc3GZrtcXkKgp3v5SJzhGtY57mjFcFkfwcUJuEe316Xk4D9qj4",
  "key3": "VuNTRqN9FBYrs1eQAoRRjX4dLxbi43Bc4CaoJVYdhQEaBeRwTKEBgnQJyaf4XgG8WBiBJQDm7poim99brnmVBLi",
  "key4": "4W6qFrFKTCv7UeQmxSVX38dij4AXxBVeFu7pDqRV3ECDSi2yVVdNjCMNytJqcM1uf4Z2TArT1jd7UjdM6TMapuLe",
  "key5": "4e3cbRpk3NpqEEYpf3MFUbEJCmi1WcFS8XvHmppEAi7Y2VcqSngUHTHVfGbx11ZHRd2wS8pb76awhPW4VxDVCJvf",
  "key6": "32DmRsWy46V9qWzGXaCYfjg9rMXUmk91qS3QYqvDh7AseyZQ7mUWy1JgtEPh6BzkmWWEpBrGqoRDi2QDyyoXEiDa",
  "key7": "5U3e17NAjef1RobnBFiAgvbjEJMNyfu3wffqEwXYAyr3AydLYCdBYrHAv9aVvzXhscN4iqrHhxh8xdsmEe5NJMiS",
  "key8": "5aZawEfsxFsRLASd2xYzRe4P3XsipkCYdwmBqj4XdfLRnpFJfnjr5RbVmqrHVDHXpCkk7HFVJobWTh38J5AzSrHD",
  "key9": "3KmTtSZ1GCBU6b28QofafduqNMaCpFkH62DdLVxYBfMop3Dt6rMhGLMbPUKkrK6kH9yrsWWbx6vQ1Sgba3cR5hfF",
  "key10": "5kJYhposEzbo23bbSfH4wSzYjjg3quRVsCfwhxWmSMunjkA2NmbVFFcqNCt7MMWxtkvfXAc6b8aAX1z12KvQdPLQ",
  "key11": "34zXK5vxZ5WTfRtTLdtMhGhS2YLTPfCnw4dWPYLn7BjdTBcMiwQPKDQ5gmb2n3CQnKobNRQatCeANZz17uPM6DjU",
  "key12": "4WkMb9nKAkmxcN22j39R8Ud8YiZSBVS3uKqzXkf2gxajJd6AL7a2VRdKw4CArDL1RUpGY5FmKtmV6qWHmw7K8ckL",
  "key13": "2n9HmLPE6ZGPLACXM5jrNZEpboASw9kQVbUq9CwFkvN2YCvLEsUrGrRWuumdsYK7bDPxb7nk1pzqkigZoL8WNNgw",
  "key14": "3ojTm3f1khAdrcCVdq2PcdL16Gw3qZpP8WL6pmoe4HvCgb5Qn8ZHrjdCuEvRt682LmfW2k5xn6piCVV82pSjG1gF",
  "key15": "7oRhjxnnccED7jFJKfng2h5WzDqGDNiz2qavvJNmDmJN1XzqMpQNmy3dbBRVbfdJark5hpYh1g6hjSz5odNK2f8",
  "key16": "2Q6VKjfZ2Yab2tpnJvxRY4jTxrD432VVoGt9KP5U4u9kUMbGNGpUw7KgZt31PMNs8zFbuGUc89GFcC4NuedcCHCv",
  "key17": "2t3Sq3fASheiVH1mVHoqZusawcUdn6Arw8QCTnx2CjsqazXU6B8Joo76k5yvUmz1yqJacNZV5EGEPfs5vYPS1WvV",
  "key18": "21ciaeQpdzXWwb1v8jc7FtyyFvdcrhAj3Lq2GATAxJhbmWQxE1kuHi4FWqxnx6gZY572nZB4moXHEu4DQUumZ5cz",
  "key19": "3tKZhBZ87xBEQpYaFFuN7pjc7JKvE11NQz1csqmW7sQ1Ai6yxu1tKhf4fLDacsA1xqwu4CyfwScfxas6opNXtd7v",
  "key20": "5jHkNqWJsrDdiBkDocmQTjbLH7Mz2BQJ8M7BowuGbkzgQzpUMtibRhDZ25riNKNWxWJDf8ymmUibkBvFgYQRttG5",
  "key21": "2ozyezwtkqJrkvNQYzrjnfnpm1dQ79A7i3hV1ED3PrBzKeEhVNbQL7mxVHHT11NvPXQCpupZzFgrYdZtZYMEYDB7",
  "key22": "4jPnDekSSxP6GKXVWGuZwHn3rWAzqjAcuP5odFmrvvgnqBrUmEk7ZmNh2eGnbQdw9dfvYxx2KkrW8hXYVKa5pqSG",
  "key23": "5jYxPipMdj5AnSjNGcKSJb4Zh9o7j8YysXZMhUsyxBLjENoi5bK2HqTauzh7tPCiDBZT25Vg3cgAPzd4KwXpxzQJ",
  "key24": "53azLqJzqwpyyeJ7YuuM7HM6Do4zSjcvXprDy1L5RLXthijTkNZBbvb8V3tBW4rYuwJvXfkq3SEE68USPGSRdVvw",
  "key25": "4KojLcxoaSxHC4Cj9p6cJ6t3pJ1vKevS5JdNq5krHfaMqChjuFsrzGvUfQDQ4WfmpTDAm2bRLEzjZVDudarzR7iy",
  "key26": "4VUT4spb61stZRRTXJHm3g18fEf7StzZMh9tMNu55tQf6N5F6oE9JkR96X35UpxyC2kD3Ts6yiLfDeWz89pjWVuk",
  "key27": "3mS83aRthE5sb13XsJs8LGUfPX1LG88QXHbi7inns6wC2h66EQKjaUBVAeUR6m1XniMz6hri6Z8Qi8M1PeyVt4BS",
  "key28": "pMndCC6AGpeabi2tLx97uAUFtRoY59QMQh2uSQsPYgru7UYAWxRky6KhAb3Tzee6ArD68v6s6wNU6YJ7hiLDdH6",
  "key29": "PYBcM3FAjy4ntiBF8FWZDdbUj4H5WtDGzsZMZUCfrWyRQp3Dwwk6DV49U4Cvxz35YDFxCSt4JEf22hj9euYfxjh",
  "key30": "2ZftQbw4b7TuKzPP7joLdif2sCgTAoXvc9JYKcdLKX87Uk9yBpSZ6WdKAaMrBhW5zFhXjKAWpbqM1YC77bDtrzZX",
  "key31": "3tPkgusqMJr6LSaGmG5AjqX1KuG3T3ERqgm1DELdoyWuDwMfHdkXwLhVmk1hrn9TbBwfkhTiqpu3mickcz5X7B7P"
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
