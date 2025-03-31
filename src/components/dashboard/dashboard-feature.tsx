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
    "2ZKNn5dsWaCWivfFtjtm7XigXsUhgjP7qwTDzMhSs6JEazN9xyQh47aRehajmjTtxihWXufaYXPXW4YZwXToDsVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ho52sxq3MgGbRLFegNESKfpnf1vmGMghi4fU2HyL8aSLYMubnAQfLm5eZY5Ddk7qr8WJK6nRjV293UkG9ZqfvNC",
  "key1": "5qeYMQE465DZKhjQeXS2MN3cPe9mNYfLR3SNrMNMVyJbRxNkRsC2cjiAMLVotoCMzcRYrp9eJN3Dwhsm37MMt9dj",
  "key2": "2hZkuGF5Zfbm8No3anJHayrBpF18S5WNNf5R8iNGJafNEe6Ckf6ojr5VRa2SZFAUoFEssFRfPcuFH8hsZRhNCofT",
  "key3": "3ye6KYu9rpYcxpow2d8145B9hUEByPSvvCnqWVEySh46NYY29SYADbcEw8LCSsqW8VL9kEWXgA6chbBEoE6asgpH",
  "key4": "3egqCLbbyT5VMA3EWmpJB1koKeN4dmqkRZdWVTo93xt4fKvGAM7Eyn4NN4fwgZ47CXH992C5KmyMsEcEvAGbasn9",
  "key5": "3mNFVLrZzzRZjagAyRMop1LT65AJx1Pu4qtmrt7mHXmZBtsGJ7hWLdvJAJg47QngNun1eJ6RqQmZ5NrZ8KBJ4vWv",
  "key6": "51WzWXVuWRUWyPaYRYL8ANBLzAQBEcvribzCWeXTBATHNKQ3ik8qose9nLwn5n4humaGUDZH1JoDMF8ayLZCXTtr",
  "key7": "53PXthETwBV5jp1hbs6C3X4S9gN8o3BATLViuqpHmbwG8vmcq2mEBckRpQqHqZqV1WP8psxfkxqM5THTpTaZP67W",
  "key8": "655RBGddZPZqzHUdJ4ZVZHLjRG4GY4XmVxC7h7VkKXWCfHTdn8uLuWaYipAfJxLPUhLDACcxhYaEcEsgVAWA3ANd",
  "key9": "2zpy2ugRRA8ioghnVoAmFyvmfdtHhMRPSWC8UTPgFWqLK7NxmhXH63VybgktxHwoV7VJQkpVjuV6PGyFvWRdv5qV",
  "key10": "3pBoWJtnvZYLfKsEy5YfXRtXtpjAfcQvzq7pfdnxs8H1rhAR4H6hpEfPLzzFqGbhaUuPMdyQRShwa77zTYYkjSY2",
  "key11": "4Kpmfrw7dAQdtNfzBjAGKuXsZ2jAyo1QEDHCy7tZveCTNvvt787AQGaBnTXwZg3N1wNNu3ADirJS4UCWmb4msUjs",
  "key12": "4jQxDWNiy25ZtxcfAhKcGrM5robzSk5dAzXTDCd8sxviy8gQnX9HW4jRvTy8eqfBdJHb5NonSvQTgyhVm8dhHLrF",
  "key13": "29zNZemxzBz7iK1TeoffQY22T17i4NXvFhnC72nr5kudD9tNZis7dPg7QxE1cfq53ohhbo5MVNiiaebgLnCTtNEe",
  "key14": "CDePAZbz1PskU7Ci2qzd3H1KunJ6akyH7RaCRubpnVti7J8XRMpCwbBq1TC9Ag4s7Zj5xGehFzuSFucVuWyybKb",
  "key15": "2JrzJ5HeCRqhkq38AVxAARy4y4UtS3gtVJaBDZatVPYKFDAEuDhz1sxAG4W6BmpzPC3qckMUDR6CkB99hGH5t427",
  "key16": "2MYL7ocpuSHjmc8wGpQyk631YWikVNAuddvwKczCyuegfCfkDx699kqMA3BbxufeMWgWZMgaA2g1hbPyMKgVN83Z",
  "key17": "384dfXGf61QdDMgmGFMPyAArTd9XtpuBmkqUHuaRrkXia2y8nKPqgFt7LWThCt4jTy5v2NwCS9N7c8SS3tRYvb98",
  "key18": "5c7mUJ68dYFN4Wk334g6UwKfhZtBGPXophTk4N8hJTwTJ8yv7cQnk3VNpg12wfhCMvbmJvoDSrrHPWTZ5tjqxMAb",
  "key19": "2gZqTHXVfhdDfRdshBATQtfvQ9qqhtCrLznNmuineSfFx9g7h3xyspuKsUYHJjkjUYxmC4a523uBWZTqFhzsWu6R",
  "key20": "2vUyQCRFQJRKARgr3PCp82v1tY2qsTUjiqvhB66kQgJMLFdF9vyY7nnPGPDRxxWAvzEnVYqLR5DhxohVBH45662b",
  "key21": "gRWZxmQmvv8kejHCn9BMA7zBYPYdZ5DHf9ZFPQmHnLz7gm8UKbiRA1njHx983HynGUXa3cpjV8MCKExES7BsS6p",
  "key22": "ZXZatkMEgHTeFyee4rfa6UThpm6963tNu7S2QrymP6tAEe4zytJyHGY9V5p6nZYW7LirXn64wqzZoQCovvHW67F",
  "key23": "3XBrcpDGvpcLm9nqEieCGru3ZsMqwoSMgpRgAhkx3Rx3MaZ1287MbEzjU9nULRmD6GkK2Rv38EviY7NiHZHdh4Tb",
  "key24": "2n13adqxSMLoqoWF7NPVpxLCkzbDJSDqYv7KGPxoGYxLX1JV1QPrVSSsL2bW6rtxXUfMv8NAAvxgLcEtvwxSAeLY",
  "key25": "3mBK8oB2tJU1pJx4fTbW4spJ44cN9zmzatgWeD1hi5Ue3bvf9TgFisoH6XZ2ggpd3u9sd2v4dDuCYQMcyi3NWeSh",
  "key26": "48T35Tz79kQQUe6ZWpSZwem6rM1nYhV2YNX2ktxwB51bEAcvXKrEX1cuHd1uQhpbu7dcsbzp3T9HgarmZfKq1i6s",
  "key27": "5QBRpyKT9fNcqigkWpgJ4eWSTomNsuVTiGFAeFW18SjgzRQYYK1gYFpYPPQ2mhoUGDESA8pmy9TmecBYqquAyNPb",
  "key28": "2TP6JVnXfUH478sdeoKg9sVXCz7WF9bYfJTm3RZGAUx17MJUCygB3P3cnuuRmXF2Tci17Mqauoay6q1nLwWrsyF2",
  "key29": "2X4rh6JfRvMPNXyca18h6aNBP2jaVVhzPaL2P8Y6SNQhQd3jPiURE7pkfYAaJpGG1dfm48yDdE2wjAvmYkXN4QfP",
  "key30": "2LVQQ4uNqpxdHQXXRWhuAeho5s37LEnpjAzmmL1Jvuh3jR81ekQLiJsTX9VsPrUuc4qxU7X6vgj1JTtb5ayoER4g",
  "key31": "4819nyEdTN8v8vnRXf7M5dJskFsXL6H8XXXnANJYJew4WyhVg7dMxsaZnYrRVw4fViqN8SHpxFpiqA8kgEwJgCc9",
  "key32": "3vY7sQwn8szveEBszYuX9d54Xgn68DERsK98uozyki8bJJfZyfGVouXPM1PEcuWmY7kn7MMnA8BWkz3GgcnLjNzX",
  "key33": "5xDDGug42AygRmjz5WyiuVrUrUpuYJCm9HKPyZ9uU8qyANrAf31WpTdEuv77Pxz3APsCQC5xy2Li9srwJE1pwJkr",
  "key34": "5UTYefQhdJWaBAMQxq3HcVRiuNfomwdw7GMubCtt1NA7Jci2n8fuB2XwcoqzvmWRCne8J5HrKmvoGQmcrpBQZM2R",
  "key35": "3e5F1moet1ZBCNYXnXJtwqaoDisvvtdhq5fnM7uJBLERARJM7R9UzfVPmXKb4pfeq5mwQSuJnsfJFEiuFu4eoXjB",
  "key36": "ZfuNkbHJG3HGhG5QMKkX14fDLgU8mpEcaQNxqr784tRPYsf82a1DfCdDjq5EgNYTXkynAex3yDvoYeHgQbhDgxj",
  "key37": "3XQLudzyTSy2eepTocN3DmFSoyA3B4zjieK9nM42VjSGrsoZe93mGx8VgFBroweXmVvCxXjj5TRc8GvGYBKim5hX",
  "key38": "k2zsKKdkZTyu5qmXsn5fVJASj5jHh1jpVyZU6gbSxPiXEf4bwfrJvZcVUhfm1iVEvxxSJkdbXNLDGuRwZL8Tcv5",
  "key39": "4sdDayGSkF4DGB5y5UVsekbqBhXGDMBwxcY4MkYX9vRWiNkzwcRe6nShggQsNGUQCUx2nXYtPi6zgNXNhahTwneV"
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
