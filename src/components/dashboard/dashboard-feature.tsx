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
    "5DA9CBEmSih3hMA5yraUGxPhwV3XsofD34j7eT5hnjy3WXvXo4vHjEY6veBzQDxA1aJNKREmmNosd6Ce5atHZQmM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f8xRaNuQ5dCRRGDixP67bNKpXTs8NucaoV7KEsmsFGyJMbDM6Ze1S2NfLWfQxefdtnr5MY1t8gUHDq5bkTvnxi8",
  "key1": "UP2vgKfzL6FhQGnb2Td8SJbxDph5tp5emnNMM2wXYTQFnrkxawAnLG2QYCQfk9CLnFWEhzpUjiZn1Qvv5bnFdpr",
  "key2": "2kKwhzdmXtDVbqyx8F7cs7Dx6X7GKxgKLxR8B1Kmgapz4JtCpRSBAgoXNnF1uRtQdpnrMEFVouozKQ4kusQtTRaE",
  "key3": "3d4vMCqpBjyB8TZd2DU7vxgHP6My6iGpHtze1yZ9r8jBrsyYnTC4mVAYWBKAM4m1QrBX8gUcgjEYj8c7ZiASWYET",
  "key4": "3mSo3H3vhgw5cDtxZtyF6zxaHcEhC6XvXGLSRHUDU28SJtBp7z9Wqq1iMLGHJs6yiL2XeMR23dq6362rWL8iHtyx",
  "key5": "6AEo7hGjhwbWJg4Awht3EcY9QMwfFhXUZLLtcpy847LYtkKk5fDweqHtQ5dEJB19UCMbnWH3fPCDk7zJTaLEoSJ",
  "key6": "2RHYpZsEsMfqy21gwqJBQ5XmuPhMTu5s2E9R3QmSDswAWB4HA3GC4B8dH6aaKE5qYweFH4yvrzqv4pWKorQJBLwP",
  "key7": "4EBiAgVgzTEmVSV5NY6eVxLYjnG7QRkkTGakGZosJUTBjqQQ3vWyXY2nVGs9bKhMdZFMZCzBKWAKJwAA6v831JSS",
  "key8": "5yLjcMa5ANQM3H2tDPRbtkcm4gUsy5MmDoEBaiQ3d5JJygCYEP5km84Ns9QTD4KNjMu57tPRMjQM5T1XfD4S36HG",
  "key9": "311dUnSXfacq627Uk4yyNMFX4xq18wkLr766tCdRqJ2rasCgJkb58eoGNHj7Yogt1GM3pLiyAjgCTqEpR4WPh8h9",
  "key10": "3V6Dy6oncfSZCghRy3CqWweCmFKnQ79kizVZZYAaLqw79bEWGHU7J9BciwfAWhK9atWtHYAUQs1469kUYUDnCLk9",
  "key11": "3dJtYm19S28LxXMR9LFoqavnSrn8qgxRHNT1awF36dEjzoMCQcSVhh9PkY2wUw4tkkNCq25jNJtSReFui2RGP9ie",
  "key12": "4X3EgdpKAjjKYqX5RmBk9jDRMCm5Y3kQnVsP2nrkkUCQB57StELm1bgLqnbw6PxQGuLVMQ9SpLPXzwFkTEEepV4p",
  "key13": "21Xep5HALpBxc389Hgan7P1ypeCC9P4LmYkz2mokc1HYyu2VyQh1EwLcQXSkAMi9ZC7fRDoHktrGc5PUh5FuQdQB",
  "key14": "5ooLxsyeqquaPLmCBDe7iXHJGN6zuawhRioGvUE9PgnCRQPuTTVNCVxcXze4H27UXEGysruVrvGfv9uwDir4GwBF",
  "key15": "3xdh24MnZ1mTVYMZXtxupYMVw6fh7LPS36KqahDDsBEqLmShY2ii23juJUD47U3FiA1dMWszAKSdvvJaJg2NeLdR",
  "key16": "5ojdtoo8qGMDmEGJUxohLznimAz5jCgbnYzyrAKgWsugc6P1Pjx3Cv64ziHizF8xPjCVaMqEBHYpLAuM3k7wpzvZ",
  "key17": "xhd2K1K8134wDMzAJFRgFLr8FdTubVvkuFek2HZk1NPyuUihVZiBSQXg6wUinU8Y8LoBLMXLyxzF3FQfS3scDn6",
  "key18": "6H5Xxb1zpkGto2djqcGZJS4LrBniyuiwQBm62MU5YLT5RKUnMTLq4e8HYYv868gJrK6dg24tc42VaCXtkWReKfW",
  "key19": "FqK3XqRmpKwoaNwengtca2YsXnfQZrnrthayfCccgnNBakeUSQFtMYxX4rsjhotuSJqQpyPLGH3EVCCd5Db3dJR",
  "key20": "4M2s3h1UKGUETHL99psLhqNjcQy4Vh4w313XHM9yrH1bJWweJAXaEcENmNDZGf1D6AeVAAyJCLT77iw2spa1pwFA",
  "key21": "jA1nUXksMaLYjHiUtWa3vEqwmjdVXPZ7qe84wGXyUHyJWtZ9Mb3pjUyFVr61TjqLtj3YmKDqow5t3hQe1tV11iX",
  "key22": "4mN5sGaACJZunHP1TDFhyNCyDMppf3Jb5PfMMnFddYkQKA986BCrtMrp1MXppQHszTwSgTz5pjfLbwa4FrXcgUAf",
  "key23": "4FFM2ZZySr1ag5t33nJLBeuNeDjQ9CdSmatL1aUoNAxw6ZGhkum3micF1eTtXsyjXhNzFas9HAtizsANCpfUe51w",
  "key24": "4do7MEvVkoBCDn58eAemhcsbr2c4RhxjQKK5h11qYv3VbSrxfNXXCjQGv4ed7B3Y5HfeL4KuiVx2oba6vqo25KDG",
  "key25": "4h7GVbW1ZZyyeRzyBB3yvX9aD1VWueKJqDh85iJPSpQDqYPY3iR887ydtGNofqrCjqogcXWfwg7wmhFNbmd1uBRE",
  "key26": "5f7FR3QieWvvsaMyhrfbh4LQgaJvYFHknUeT2C3t4P24xh1tZFRomhseCRSfwxouFpK4zRcRgTaKi7Djih41vzuc"
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
