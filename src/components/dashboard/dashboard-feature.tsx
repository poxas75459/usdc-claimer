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
    "52ueRVvyHbCgv5aEMgDtLohbHgnA36mkff3GqMBf2vXeTg4WVp58W7iJnzcsZ7sihEVRtNhVyQpimpKKmfaxre7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cP197cC2MeJccdja3dR5ExB5iVyCdw34KpKSTFkRewJLGvcdbLPDDcTXF7TNu3H4LQPmAF7s1FGLLqv9yKS4pFH",
  "key1": "4o7HkLoQxKJb3SLuVyqHKCSgoH7ke6rVqW58N2zkGLrLq6cUY1obuf2dBjmsZhi5h9GybsSLpGvtXPp9Q1uwuQHD",
  "key2": "jLYULCtQFGL8dm3syii2Xb59GLixkMcVzCa5gYh56g3jgfMXPCHAhgyT5LyCCU2X9mGLmj5NKZynhj7QKH4pSrs",
  "key3": "4qqvQiyDGUsRpeeBuZgjXKQfaQ1QZUuAjVzoLGh5e7YaRnTi1g2eR1W7JRnQMHpUzYxwBnMB5s4MGgcpL5M4bfo4",
  "key4": "m7Z9fxzBK58i4fM2QPHJv4fHM8K6ttKiQDgsGGXtPyHopJZHwQmX6gCZPp9MJPfHpbVyBns4YSengPBn99ZqhNH",
  "key5": "2vqQhGR2SNJYELR3VD8NbdBMzTZVja45jHHrPNT1Stg4opZuHoMWLqK6QGaSzpMkwmQRGc3daPfkRjY7q7PRjB5m",
  "key6": "tmjkXiBRZk6p6qTMPVD8exBGLcBRM2HnaWfStXCRLK2wA32SbaN2EWPZMQikgbPbcEKpF71odyZFFBombGGxXFa",
  "key7": "4TcttgCGtx8xefuYm9WmDyiAUxdeSR2DeNPWnxnDpWvdVbWvoDHzVrzrPxgMdL8pzHazWKfZhT35hiVUL6dPpLqA",
  "key8": "4PgLV3A3ydHPg31tDKU1uzCK4UM6wpiKRZfuCf2yCpERAaWyVDYBzTCwXdgSzMeuuE2xVqdZhat5xG3yaX7r8jPq",
  "key9": "4HSw1XUEWLJ9X7byv7eNBYhDcgyRvETiK26qovgetLA34Gejboaf7iiU4x7hS48nZyYyBfxfewFmkyyxPAJmSdXM",
  "key10": "5HH7FEoc3xoxGCVKR2BNt8Vg5N2UiiYrb1zqkmRNvU8b9cNP74UyGRJVtga9Q6EgH2n1fyGQu26UfKDgWswx7X91",
  "key11": "4JQ6Q8GetF5fKVwsjQ9SHuQeQYMVVbGaisdHopLh1afzRjkRyV9vSz5XkK1n28yxNXPua6esWuA4waiyiqKsvvqw",
  "key12": "5XACM1DXZUjaUWy4PGWFRS8w4nTjjXvY9j8t8BTh1ARs5gKoACA1P7AeqEKuyMSdEvzEtvQq9JZpGq7i2vLMGXfT",
  "key13": "54endMTvf4ojbh9Do1A4ue5Gf8P71LUC9nf99TiRneeFKbNR7GnnsKK1PxTjYPqQoubT5kaegSpw3ZdAbYvqb5K",
  "key14": "234eR9tF4NFcythMk2coWbK9yxJJLnPiLXAoUAGDzKKpbrnE2HzCv2um1jziKbepcfDLqHjv7QV4sr3nBohSRrSF",
  "key15": "3Sd6eQMLP2HWgRknhchdcoHNbjm2Rudd6ygnMJUiDEDik85fxcgCpYmQg4aRixCAaDYRQS3yy8MJsVpRRfngaTiQ",
  "key16": "3Xx8tp484XuVMNgDtw8JQ7HuWyxpQD4R3DQN8oYipw8joo3PXxKBmoaCequJYak9AeGfscaKHtjwEEG6N3Rr25Ly",
  "key17": "2gKSJqLdw5Gu4whQeABsTb6REFup4d7Hhr4BkuQ77WorBpJUaueV9DWVH1SFf4yQ65igtqWPjmz3tGN5vDY8NYM4",
  "key18": "4AngQrMg5Kp64KMjaYMD9tpSu3KG6bjS5VZSF3NYo8UWm6GovybB7L24qvyaJiSsNXzadN5MbNGCrrLEYqoxbVmP",
  "key19": "Y8je2mjNjyHMJHVmqzhRqwfoXXDw5ayQU5kjg7UDL9pN4DqQGX52AbQ5Y6FsdqBboURRAJ556YAJehTNZRHW5zY",
  "key20": "3yhz3pNv4fXNUCDKREw2HAhV5jXx95CwQU3hGWz1pPaFXMa8vxatCVcycaSRLRhUPbeGKMz5Vx3VBKdTZeHC3qbe",
  "key21": "2SQt4JDYDaQkruAsLx2EffvhvAEq7QMYuJUzTxyWP4H2Ausf1ogGjhfyinf99gYE17HXE89ackqEMj18ToK6qy2u",
  "key22": "26L1LLwhPNUTyZ3hcGzqBKKJ1NDynAYv2EqvT1dD2gotWsJ9DYS8hzdumGpegD136z8FCURzbyVfpuzDtGRrkS3X",
  "key23": "4tRdk3wHL8nkePJP9HCrpaE9aQ6F5me3gfU9fZ3fLHDSf3E5Ps5cH9Q55YPbZvQeNG7wYJUwixZqVq8RJvSNDLjC",
  "key24": "2ainMpYmhfD8dPEvpsuxENXkecz9JdZ6mFHfQL3VgGuCvNHMZ9XCg9hJCe2RzYJX66Ud6VjJFfirrFHN8ngmNaNs",
  "key25": "3qH2GbDX3RmmdmdD9iwP7Cc2RxPKXegioPD8t5PTG8hxAS2pWavvdwyNHpntPcJxbfjYTx5nsrspHoBo2NnfNAnE",
  "key26": "4H9sqnQ8mrCN5aCyHcDqUJXBpdqggmcZ54ZixhHeMcN9DqaYWvRt2TPuQNNz4jPBrt8ZEy9o4rEwGDonPmgqVP1F"
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
