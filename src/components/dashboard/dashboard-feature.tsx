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
    "kSEEwTZe2PCFhr31EDoatepErqXenXJW2odcfi13zxwF1X3MJ23kgTVJx8ibdRq6R8YzeubzxjfArfBUz5EXSoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3syJ5hvEhnHb6PP9kTJ8CmdmV4h8dCV8ADG4EXcAHTReknFSQrd311UQ9WwTbYufwZ3jzXSFud5A2gtY3XyaMqpS",
  "key1": "67c1p8Qn8cHTfCJsF3JHtPrK63WGZC5DF3YNajwvu5WtMZYRafykAE9graZ2Dp7BaayATiueUfp8ACosE7RKXJk3",
  "key2": "5vBdHjZtANj2deCaUMMd7hBQziV8HJYSheWpH3U4avwbz1TYXQ68eULgQLkMqTELH1D29EACDYKmqnu2nYYjjXbZ",
  "key3": "4EHiuTzEbFzQ5aatHPWuSr6BVb1V9Rw12cZwrEhZRKgSbpfJ66YcRuCQxnpcNV7K3xVxhqWLgr3XFRzsWHw4ipcU",
  "key4": "4mjcLpMQ859Rib7nWmo8zgkAjS9Kp7bpsNnyvympfprU9ZkffVh1c3dG9DzFVGXrHnSYuChdC4Ery9tDyoxZ1nYs",
  "key5": "2JtM2KgZiVBVDEJjkcK9Cn3uXnT8LF4cQEBfzeNFV2iDVc3DsLbrmCxMcMNJ6b5CXESUydMfjNv5vwkfGHQJth24",
  "key6": "3ywKMT3SAiyddB4XhGVDsHRnHoBUC4Te1MQSF7h7JKxNo3Hsm4m8Wr9HMqPpvKYDPo44vC4rA8jAoDKpbM1FP2oe",
  "key7": "2qQg6UEh95mgvcjCybuSLnNKumdMhiCEASUYtd5psiR6VYrjXawxMa4tRoSc7SMfURsthKJ1ecE6LepnqUdGBdnh",
  "key8": "ymQdXGYxaA985aPcpreuUv4Wy19oVqqHozuWA4jogHr6r6i9xaXbjYqqkuCSqhfrbrMpUHkcrSXUPio3W5X6DjD",
  "key9": "58oYjLBAvGQUUZ8ofo4iNB5tB8QrnPFevBjNjKAmeRmP4N5HAifVaRjYxto5ZTb2wVb6f1zvjic2jcDFZmMD9KWp",
  "key10": "5sTeat8SvSRwisF2zvCL3pFv4f9dGaAHqfXRWS7ibxqL4RH1qsw5HaKTzWN8Mked9VyNEkbn4TffBAKf8AZP2xRR",
  "key11": "4apY72A5MKUajWh1cMcJMh4qFknLkvnL2yCzBQPyqGHsCb8ECEzVUnU57y5VdXFbF7vdbXXcfff9w97bq5aUmaZF",
  "key12": "2AvSFE9V1gxbuvqMNnCLpG665N8toAEdDfS6RwU3xYqCfH8wZmgczvmgrxy6ouG2wNNfPPmUVfgjR2N2UBe2wBqN",
  "key13": "sPZfy6PBy1YZk1iexKdjaRg4aMpyQUoxhZj9axLDKCH72fnuet5EyUzGmi2zPZcCUqZ5QkoodU7bDnJVJ5ArANT",
  "key14": "5UsGsLa86fMXvHwWCKy2ndkrYD7g66tgsGDbsALkQvpWadq62mvuAm1QWNTYFgUvpKRZmYmKTeQTvMfep3vb5aPe",
  "key15": "2ZdV9sL1n2m9wkUCDbRjUYAfHrJvstXt2zC6MvVryzDxzon9vAAKuMxA63bfbVLYNRnSXmeWhL8FgHw87a3MRhmD",
  "key16": "2MH6ZEnFBSsNozMq7PDQ2cSaqagp82ybvszVgFJBvjmVqBqDrNNx2an6Zap8WvLBqCfoffn4siQ5vDjoNACbhbpj",
  "key17": "3pjVmK6rWxeDeFEWLVBijBPvMWCigCVNBm4nfszhUracRL7SzacTdmT1DuZYbRwahUwUu9GZuRFRkEuJMRYThBdx",
  "key18": "4nUG18gRbH4w2vmhCZ2sidMsn4hjAW73XvBb5k7x6ufLs6cXKtgdKy2zDAk9gauWTRRhnqunQWaxAWqTKpxUBwha",
  "key19": "44ooNCTw9rFVkWBTv4tm33P7vgutLsAq6kpVeDAkHmCgRL5VzqxdpyUGM1DK2BXDnQmcWTKfoHQPATHkMaLUgBn3",
  "key20": "3WZg3BPdZEu8iUy7kARXhnf5PZwRyYtqdadMVaXSSGuT3bTtipLheQDbautRVNEza88DtrZYDUzH8HRUUNXzWWYz",
  "key21": "5W3biRXvT8wweK5A2BFGpWBPB3Kqwdm2NTKz2epqTdStgcqmyuTqzC9rMaY33wiBswvnS6aipYbq3nm7tDS3vmSz",
  "key22": "a7DzMa8HNfnSExXkSUbJbdC6ooAifcs7rbY7WFPjzg95kcvkZdE57JkmyKWiwfAiUF9nNJKxbKpq6ZGgKVRYmRf",
  "key23": "2CpayX1eayjLrpC394Pw4nUAm1g3jj5FmtJo2MmqT4UXNnEC8JVmJ5NdpsvdkbYjLkbG9UsUYXQ4fCiBiKNn7zjo",
  "key24": "4iteQyTW66UCXVMUAk2EqknyDA3YfpfDFR2eFN9o33tbkCDdavkM7fnEEwLGCaRwwafV9RK8a9ecepsCsxuugQ14"
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
