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
    "qkJ3RjTuuob4PHrM8Dtfep1XydCPkUmzbje98uKZJcRtCtxCfE9V9X8yvtS5FyCNN2VDDnFbHEcGZ7WmARa1fRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XCdRqGe7TkYBk6CoE76kSYXgS9fnRpLGhdWEWt8Bdt8jWwtniBvYZJe2pQwmBm8HaZXLUu1dwLpY8yPTKdiBUac",
  "key1": "2sXHcnJVt4g5EohcNjjfaPKJ5xC5VyHy8gCpLLygtTpX6HW5AL44QTewC4EGzoYuSPWmQWwm4bXWkL92kv17HnTw",
  "key2": "2ehwxHXLZB74VfCGvt1WgA8hSWa5cXPxQuCZYdrbEmBB8Jw8TZLbF53zdrbMFTWqMan1Qwvuur5RM4SFBQwEsxXB",
  "key3": "4JH6rubpGffc6ykWao721skGSYT2rcKRETS5s38PpKFEzSS1Rmtwk7z4gNCurX55FjsaAeG8UkFT7BNJb1v39n6W",
  "key4": "4HuexzdagYYS4Qd27jiPhiAc44H2nmfvSoc9gkL8ztKD1x5d9xGknHCTeP58GU9TZLXJnqmiaJ7AEYc57DNJYTND",
  "key5": "5eTpc1xJsNbjoqDrJzGvW5QC689LL1ebmbbnvq4FdZoHhTM31GocVN7jwq1X519YWJFW5UAxHkDPYvWA2WvAg68w",
  "key6": "2egHZGvQiTrho423P41WxAmZfTug4HnAByQ4vdytWGSbhnZcxS7v3uhAq2yLEVsm4rtHgARfKeF2QrqkicA9C95E",
  "key7": "yz77WhiDAwC1cdVf3qDN5U9YG1QxZGnur2B5dVHCUhCDdxDha1axgVWDFAwmKE7QwZDgrHo4Y5gTBbM1DUpBhpH",
  "key8": "5VbV5HEszBszDLxpE2BWQnuib8L7Q9BqU3Uwi5sPZwcbH8s6fjgDFJwvBvsctL6cnm8bmXQ3hxGqjo2pF5nNVZ4a",
  "key9": "3gXMbh1Kk4HpNjKNtTW22o1gYonNKaVdbFS585qM9kd441xRUyJNKP1WJ24Ry4hykGwnELRWV4GESC1ukx1bbB2Z",
  "key10": "4jamSffjLAef8GJbiYLr8bKeVQeTpjVbcNefA6sW8bKdUahcp5kFG9zoQenrnkBqdXUrL8SebvoGU6JJGqjyyF4g",
  "key11": "599qLiCoDjWseZ4mkGQE4k6Wmhx4Q4iFTyaPRHmF6CdPhpawaeKTPJKgpJoudgMRLTUg41oDkKa5cQMQ2NRtwkpS",
  "key12": "2MsCtxutewn4vSWsSERba3ZWidYCEvdCUhyuTaFztXoXErxzHLA7B7eTXkqR4tKLsxP6ubciQNKwJ7hhAvXtWN1v",
  "key13": "3dU5FidodwTQ5aR7uDWZnPsUz2gMp9BbdESXfRsY1BVo9Pbray7ckXGWQpopqNy9AWFCU3YvQXd41A1f2mQn2vqU",
  "key14": "3oUQKLzfgumkwdFEUAaxWPYdMx3APRMpjBmHpwu3is8AjKQC98MZQL7PxEro2vUk8mXVEzy5eM7767pBGYDm7pHC",
  "key15": "36gQYKTkD1rtUUjoHe1SP7iErqg8ER7Y3vSqiAt2zzNpsdw2YtYaJQqEiASF9VMsPtF2U6WU4WJ6psANxNB5oQ5B",
  "key16": "56EMM34K3iv4fpFrEo4vp4xWhVLWwZHAUWcHDWdXsPLpUzuNWYtdMDDQBXYpcuRMBtzwW18ubQaogn4shPdy3H5L",
  "key17": "XkccEKTsGbsfripayEJRxb1ye5WHXvctYHvTEAi7jZ7zXmTEndgjjime3yU4L9FscGZGf8Hd1nniCm9Doon2vLA",
  "key18": "43XKhxrjWpGswBF8FpykkPa6UmjzpPLDEUgk8jNEPqYkve4yqvUdhuBNZtVPEfepcQSfvRKDUbGbNXi43ZS6UK6W",
  "key19": "4z2zyB6EeH7PnHhVHwebgUUFkGDYKcqWXn4WyrrbK1KSexjLmMGJnmh3BHLLeoiKZia1WfvE55NKoKShvph5ayKC",
  "key20": "2GkTRzMoqFrnsPDmKrvUC7f6HSX7KHvjfiRtNp2zGvyWRQHDhcvbotnd29j6TjcvxZYX2Jf3dDwjwYQ7Mp2KVmFL",
  "key21": "2ZMKoUJpp7VCzYwrBUKJkUbdYDfuHfLSgX9tUmxuJtmRAqx81kqLJPM2rTYoqG4k1n6GWDPZtdq5xaTeVTq57sdA",
  "key22": "4WPh2FPhvUmfDfWvvtkZAbd7sb9VXcwpEuF4GC97H9pWgq6ELjVtMsqFwPfhnxCEEExc7M9odJ2h7aJ7nrjZjcde",
  "key23": "39dH35GzaJQn2fT5AhaM6aHvTE9ZwywphL2VGqsbso2CNpksj8N5Mv9a4TKnNu48pDvErMgWWTtkxqx1V5uVzMik",
  "key24": "2WkZEcY1nmEbBztiXYCib11kmWRq9ZAtt21XsXs6JrhTq7baCWAHPSJZ5B5jXGuK1mLAhKYiC8SqMKLBJ5gnF58t",
  "key25": "3cJrvQPHzAbH3yqzsobdtweXi9mWD7Eb8Dhh8q4eQoZR2nkHueffxho9pcXe5Hufjbm8aQFTxxZ7xWJDPPD3yF4p",
  "key26": "mHVEQddE94cDgkj2Wpbe2S35uXdeHLigjspYjJL51GKq2L6T3VXKUikSbYrv7peV7H5swMDM5RR5zMNR4L5tdoe",
  "key27": "QiXMv9wteXZUXUtpVx52zgKLhjWRgJ3qqV97YpD6cFrxH9zzfbPMLqs53GmnZeBryQA49iQmMAtDXbQBgsjego5",
  "key28": "3F2UuAWHKJiK7km1J6Uid73LvsTFFWBaTj5vVTkhpX1oRzVkaL4bNy1gXgk2nzsPpRpbpVYcShRnnEM6HPdxb1EB",
  "key29": "4juv4yuvimDYVMf9s6RWzj2REjBECqzm8NeMjMnxPpdvdUSWma45R4bhJESd7a8USDexedExwxwJYnSYxwJRgQH2",
  "key30": "4PJSZ87H3eBRUvMUzJkvYuy1KkcRcdrDBRwLefxnK99A33hsnx7TmqnXQQwNnPzWKLA3aLEpFMNCn1f56smxx154",
  "key31": "BdiDQZ4gq9PrsYEQ9Qyg5eutm2nFsqyhEQdTRdLvbcdzpqLpnA6842tmu9dk9xqpemw4zfHL3bbAeQQcsv2dvM9",
  "key32": "3aUPguLYpBMCNgSCLq9NZXHMXmcV8m1zivYd99qcbMDnLagQNtNWBSNeSk66Ys4Qub5EVLRfB6norM4h68XQM48D"
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
