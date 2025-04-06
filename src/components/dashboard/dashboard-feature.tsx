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
    "5fEnW7mnB296cJ4JZQrDpYK3MKrEBKH5k9dCEfymTCCWftT6a5Sjh5c2McEnwPWVd3TLZiiQs9EGd2PQJKQ6SKAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y64NC3hPjpz4gzw8ypSkV1wKcCfVFJxbbzAiG1gtQk5p5KsMwBEpY9uNiejXVvCVahfBrQvfqhN8DMW9U9mcatx",
  "key1": "sRo3nBPp2K4DWS9DDfoQRCJV8B5J9VdLVJTZk51qaYwQJJLkV9ZAAZC7n5ZftGzyKhYyvUEH4sjQdFTN354YL2N",
  "key2": "2dpwNZczwhX15XspaSCPswdx6348fq994RRaxj8VWvpJnwKX8hsby8StGRnLK7m38c67fQvrSobVhokXX6zvjJ8Q",
  "key3": "6ACUA4rWvo8etphFj5dL5cPZP76uq4rKp6EVrDsd9JTDL8ju7r6RYnEhzvmozJPYDcRJobDNKLdrKJs4yC6QBxV",
  "key4": "2aeWD12XJ5HWt3Kjic3Mzgj6MmkibbSrmb6fxhwgQyWtJLrXPNitXW5mX11JpZubtQwLN3j3P7VwjBTFbCJYhEaG",
  "key5": "T5Eg3iHy7wPuNZkpbFNzTh3knujAsJB1KgJu2HWDnxXvHAmY2spreyxZnAo7sLzXxcj8cVoTygNcT5bznpQCZGB",
  "key6": "5jfP2yNVF1JdakaBBqgkCQRFqQyppY8wKegU8Pv8zRnXLFkMWRGppHGSJcnM6QGQhnDmjqGJ1X9XWFshWiPQG8zf",
  "key7": "3jSc7zCyuz1pGm4bKi8YwcQomdxM4Xw22zj7QqzgsryEmX16EeGoTWEodeE8u7SqRnJgx5fFvXcXAd3DpCbym8k4",
  "key8": "3kUmDgsCCm5XeuuktQgVgoGXFdDeaV6feLE9Rbnk4ovNzhwsqYDCJdQQp3aKzeFSQiTrLQZiVuwbQ1ywNVf7cqgG",
  "key9": "2PVBp7i78JHXoQXiTXXcAjQSxoeEaeNgoMLanCRcgSuN7KKa9TnEfYojPFjETAwr8pYJye1YCeFwNLh6nsPz7sCb",
  "key10": "322ogXVJNQtrRmHDZjXVJhufx54GpF4RJcsWxgFT85n4GzGEeeDUEBc1NxLgcvH2XupeCwrmWBRwX9ADo4hugWuW",
  "key11": "62xsnjBttJD1bNa7XHxMTxiGAc94RdLuDFszBZej9P3wt2Cg8HcMhCmSfw7EhaYMUVKwgRwvPjpMqupGuQMmWQrQ",
  "key12": "28grE4CSTkzNbxRY9jCoCGtZ9GjNQSM9DFE9xWZ9HgNNCUxKzEv4uo17USfM5hcA4xaVgQAiKwY8maedKXYy6awQ",
  "key13": "EomGNCositMUsQybeTUv8QSNLawAXWHJx4caV6DuZUvnBHufETrpBDLEcuzmMc5UNArJ8Nsst1rRk9gFPMvH5Df",
  "key14": "5NKzHY3V42xELEcYyvgr41D27FMRa7PYLyf17PFFByjiaSqSWvciPSHmToGKJhh19G3uAzTcQDFffCGNLQbzvKJb",
  "key15": "5YLKzuAog5J5sFdbJofTPv1uUzR8mU74ULqYYVSG1XHCWiisKp5Z71eFuzaFyR33c2BCcyC32iKMeSXbvGQxTay8",
  "key16": "67YYn6mhrbdpDetXr9eDTPBGasxnvgSsgGVWeMHJmHYcX1uYbLT5vU4ntJrmKmQeokit8AMB54Re24JmyLdSkL9",
  "key17": "4tePcWfVr96qFibsN8yMWXAdn5Yoaj6bEiTd8e564qdjWXPTEbxxx7e272MPav119qagRzQFRhkF4TA3spu9i2no",
  "key18": "gDMv9GELsV1vQgNh5iVZNhkEL2qn9GK64wUBFEdUH1HYnGKxNc2qtjTC4cEb587oNuxGQ1f5FfTAGp9rU2Bzcvs",
  "key19": "23dKhDu679boTuAHtkLHYAb7VssWNiZE3bB78RnWjma4zGytrYge7WRG8kJf9jUY9FGREfvM1jsuvt6B6brpFhwr",
  "key20": "53MKapJhX4Wq4ZgdyvawXANaaHQUykoXtcne2WRG5QMiRHkdHHnqrTWWevphw5Ec1ugc2Ee3szCwkTk3NjtU5HUq",
  "key21": "2tfqdc9Uj8iULSuxoDzZZo1EoSQWbyJLk9wJKMkYsx7LcbVyPUc8jDh9gkFTGRvRxvEyB5QcBq4S7Ei4WuRM7EoL",
  "key22": "taJ2r3ZNc23g8uGRVadUKwg7hDVxtstMsrXKLJuhLnBH5KpX7SmiEWebAxQ55By8CTurC3Z6HykQHXQzb4JEZaN",
  "key23": "4WKYWeY1k47EwmG458pLNcWvn7WQSDTAcVY6frXXM3358Mmm1fpJuL9a9mWsHzFQq1ZYSigV6KcNJqEZocsTbVi",
  "key24": "ejurWwyiNNVWkW5MstyYAdTjQa5W4HjoHmn3UtdgEzihobbKtCVtcRbbsmWqdGwzcDkH84UhGC2EWLxG9DDLPa9",
  "key25": "5KFBBW9uENW5wviXX8KAfKiP7KUXjH5qfrhBHoSQhce6t54fWKzmEv3nzPoSsBTgA3sz21n6MVmHn4B6WUQgLwjo",
  "key26": "FAKPeqcSDjMzf322JK2RKyoerahETh7foaZKMpQi3Zk9xRWsesZjV9G62BKwhBzTYXf4D7SEwRyYTG636jue2uX",
  "key27": "26eVzNTQ7aE8wxEeumsKJ5yVafdGHHF1Za4trdMND8wLMPdipD8Ui48DVRQ32Wtf86P3sG2qunsHPSHxRS2tnBTN",
  "key28": "2uUQc4k5UNFBJssbQ2si5MyySdkP3duELSk9huNJ5kkX63fBAKsS56eRixPog4rFAoTxqxyRYRnS7M4puB8x1eya",
  "key29": "4gWoUVHEqP1nLrEFbVzWpaa4zWGVdSPk9wYXiKYRr9fe7GK7NSHCcfGoDzRtjazR5dgtMAwuKioW7a1VKgzxMrC3",
  "key30": "k2vLPuBXMZ9hZTMzDK43rRmPWchNAV6TRpgUrcN5vCJKNwRVyssXtATun4aVvbQQW5vkBWeWvERbSJ8qkEMcYCm"
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
