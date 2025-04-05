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
    "26NYNyu8XFm5qS8Rf3bsRiMeYmxCAsjQ9s5N4V6LscRw5eR4SrQXgTEcptYdqXqvv2WcHLS9JoFBSV2vs7UmAug3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oCXs1qQwc3xXt8vy46fJYHkYPJLMVKB7MgFW322DUXuYfknwuoBqKh5e3Xsw58Kr92LKt7pArxvoa4GdFdeDzwU",
  "key1": "31pMW6D5vxJ9u9hwR7VDUYtQcao1duz2zMpS7VBHuAqjbpQYxdgx8yGeM2pK874mKkM7aeSAMYqFxbt6VxQmAcVU",
  "key2": "DjeAj5fWD7sacC3KjD1XqyMVFyjK6fCmAaVSozRg5zJuTVARPv2U3RSc4ogkMbGs5ciPtgg85J9R8Kdz8K5gtEM",
  "key3": "Q52U7hcUfAgtch3fLxbBLawkdJswENC9Ja7ZiqCuDD99pAQ2bvcAszEZ2aFiKz3TXut4ubcGDMXGzWCFpAEXB8Y",
  "key4": "2Y1SAb1yBKFsmTAbQFSPZ6Qy8TGjYjWyvkAKJdeX1kfkyL9jQPoGFTtybzBptTcbg42mgnZTn4jdM4fR1kLTaRqF",
  "key5": "2czTFQnrKSB3KHYkSR596zZCHXvBmSHa2aXnvofvDxstuHyMES9KnZJF32R6AQMwCkS55aDngzetDmQ1XT79qGvK",
  "key6": "ktJEa2Jep9unJ9kbp2SmK5hoHFHavt5BqDc6dRSKH19fMKDASNmBt7JzgTWf1UXYKGMdYzPco4io72bT1kXGPKQ",
  "key7": "4RwRJowJ6d1BW5CMhy7ArMNo2sibN6XwTjaEbM6S8QRQzKaEYxom1HnLVnm89pGDii8pDmxV62Rp8mujvgbyc1rQ",
  "key8": "2Kde5byRNRXQ7VG1R1vA8fa6NZFYdy5EBVsSnepBqgMZTD1hrWoPqebGiBM8tV2w3ZVc1QVXdFSHtYpRVfVG8hww",
  "key9": "5nLnxrM1Jp1TeAH6xuSWnwPdbJ25QR2P3D2Ys96JMsiDRnhoqjHp1fQMHg1tj2g1k82Su9xH7TF4TaKLyUBENuFC",
  "key10": "pFbxjQmeFAWx7SkVy1tGEK3QAYFqayTnpeGD3hindyo2hcPsKUU7ND2yoU16LEFQUXRzM3ixEkZFvFvHVAcXkEV",
  "key11": "54ZFSCVRRZex1JvV1v8zHV8fDq4gh3rf6E97wRKWwi5JiS2YXKXqq62CpEczSrLHu5oALFCFqgL7xZRRP8LsF1Kq",
  "key12": "nTEBKQXw7umdoyikVtLchT5QxN4VS4em6TwWThhLHG54ry7XkjcGGfnPMRJa8wTqrRAJgTNuqfkeJcHqivNg2ZM",
  "key13": "3rx2GmUZZ8Cm1NsDnNqWDnViugMHTFu588WJa2A3MJ1FckxoopehGDfoZFnV4VCukW8iQc8gS6nWShE32gt2hM6T",
  "key14": "RFD8NAnxHrQQGqKkY58NpVeNurk5PQd8u9wgZHkiWxBUpkQ6UtbJ9uMzNMpcitRdFPTsMDxhEaBA1PkTFtXvY5H",
  "key15": "53Tg7BdQfoGRsNHnh68trtiyk9y5Nx1CZYugQAezSC9Wwvi9b5DMxLKB5R4Y69VsYFqgCuoHvEK5FhVdpHXxj1i2",
  "key16": "2n9vpANPjK86YwwiXV1LHhD4RjzeNv71cqYaRjAaxSqcmGAj9zjBuaWAHTpTLL7t7o6z4gGr2Prk14Qnzt1eAuHz",
  "key17": "4LiK9QACFGRtaxxTatJN9m5ZKsmF2B7tVnqCzbwgqUfWTPBEmjc3w9hHiaLmLadL2pGrssUqkXAYm4jpTmkZg45N",
  "key18": "2V5qEu8d4sULJLXhSc7ETCtX8QhRD8LtcDNLSVbaXyhBVRaLsLxj78CpKFGbZ3VPrnhN2gYTq3pSw6HrTKUqg6pS",
  "key19": "5jBXgoM7Vr4t5U9BBi99tazZLgSn6UnaZJLqFWg4ywwZyzqYd4jPbyrVuxSJ28VaiDNtptdkAFrcSu4h4K8smTyA",
  "key20": "35mBXJY4ynVRqJNQctA28FBp4w2oBdnAChBrdQXAkx1hL6Gfs638QJi1uDpNzWb8MoijXBVD91SGkH7bMRK3P3y3",
  "key21": "33oRhqNgWgw2yttZHUiwEfCFdpAH2epVMFaUEYsQeqRPVkcpLyahrZMgrXjwTpFjWvzWUTBSkHKe9y3w86BUkZW4",
  "key22": "3vJUP19K5yjp3gALHGiHGRm5s9pCXUVbDwsubwaKrBkVmVUpyfNBWykcKRhVybFq1yuaDbMUCcwKkkuxseUvGanK",
  "key23": "VDMPMEYdqHabkAsyDtPSXmUb7ztPNn5An1BAXwL4iNRLxN6L5RfH5cPcqXCtLeAwFbiZX56Vxd7sLqFge7zPKzV",
  "key24": "5AyCTCPsiSDR79WfUBATZ9Fjkj1wTVSXS5GqD7rjz4NBiGut2TuUx7vLfWvaYUXWxoUveCWvbqKPint7PYC37TAg",
  "key25": "5gNLnMH2HSU491pFZ42wDhJsTrwtCDf7t8CfK5BaLspCwK9GWy6mgifboJHYgHfo1KvmkLwG2LSsut1og5pDTJGA"
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
