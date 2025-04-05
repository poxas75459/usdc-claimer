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
    "2YUxFAfBcqWyhWRVyKmBm4vUTrRqmegTWrtU2c4gzzcanxuD4DDJWheyKSpcPier6v293ejMBnwxCcQvHKZjr67K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vFS1Be1sQyc3AojRF7TGw5f2eSxK6iHY59U8xGKgFFg7yLMCaaBLtbKxd2inpQnvwo1oTXTSrbQnEXgxpAuecK2",
  "key1": "4q7hkPaTEmcpm2YM3T52FPizEJFQU7UjeGe1MGK7GMwNfrQrLy8XtBpLTSCUY9Uh5SPS6pKA9T5hnd3WasjtJCL3",
  "key2": "xMA1eLT8Y1nzDA8vWFMioBaAoxxVAFxrVVMLfeQbup8cvcfsTmHpfA16R9MsC87xPqwGL7TiMeojYYV4TcwHgX6",
  "key3": "3dTLjAdsW3My9RK4McQJwcFvRvvnzahn78f7H3V5jDwPVbrx6FhKuY6MaQQGh8rzMXMX9Rpvy1x9TZAP1XGibAsh",
  "key4": "5BGFgy5hwYUyXZCPeNytSHJYwUqP8S1qQVERMetL58f6pFpJaNTyVLXVEPdfa72SJCExwHk2d3xdQgSwwXdgecoC",
  "key5": "5U4MPvDry4u3AiUxhWhGf1v6kGDbdNDJtgn2GagwRtmpwWqk4PbkdNKFdbP5mpMpnGtjkFvswUhXPC62xX7GWAQn",
  "key6": "3K5hKatufmMQx3xyWT31kVco3RpPf3Cpae7PecpMFt9fj3ZyRsxtyG3ArovpRAKHphjLKb9AergpYVYbmJQDq8oT",
  "key7": "3r6ZxAkkLLv871zvc4fXnbvm2fdZ8SLgj7HStmSA7GWo7ysPBFizbiM9osmHSLHgrdTJcdqaD9cKmDXD1s5m2i6u",
  "key8": "3UhazSKWSnRMmwy37AaLBNxCQoH98xk3swqorgcyfWoc8mnLi9tas2Y3RcoCj9tPmcJo5rVq9vbRG3qJiFCPqpoX",
  "key9": "37xYnVLm6W3FVufFpNLG3BS2u4j3A2cEkVNx1CPKXPtYi7jLLSofXSYtzeuyoFhD9scmzi7dkfw8RkaPpDzct9pU",
  "key10": "3CoEzPkrfvezVRMvg7Wp1TaEA4X3uchXncf3voa3LexXupgXd7v3kno9suueYSzSYMCYUsCDCEvDvwdhpBrJdaWd",
  "key11": "J1RD8M9JMmZBrgVMpASyyascPrn4DT1js3qWsQdcRn6NSPnZKC91cuSZRbYo3K8ahrdAJjRELmEnVXAf5grki4z",
  "key12": "34E8VjNs3n1gvGyhHMNCW1LEkPk7gRr131mRg5dHnCBUaMAcVKsi3WTsXKLvv7NhHhSaFbuNAV4WtHYwyUtt7PeV",
  "key13": "2GvLMybrHgEZvEWTd3dpiMb6rGHm8ppezkFzcKDdpPw5Hx84dit86hTvyys4ejhZDv6Z2b4zWU8ninRZH9HoCgHA",
  "key14": "58xTX1qkNfGvpF28r72vfhehG1pnyzbuYXHhtyFJH7BZud349DDjQXhFxKrcjgfCyHoXTKrL4yigHHf892e2j5zi",
  "key15": "4yLuz2LcJKZrjhRFvJfwnbFKKxxwe8MwBjDNqmji7YqeXh3wsx9eXxf6bkCQ9Kcj8J3VESFR9dGrdYYookkw67GA",
  "key16": "421ydR8gWMgzkd4vke4tcErmiyX5d9r58bG4wef4QaoRKbBxNvb2APbrrJeVJq2kq67WSeHvST7F1wBkDEhpzKg2",
  "key17": "5y1eFGsj196R8N9woLjnxrXQrhAMv7Z4vGnT2iyF3q3sdNZF4SDWyEwjGTrognBAaFgxDzd5g3aGNZdGa55dJBKS",
  "key18": "4oa6gTVcJN5f9pKub7mCsT4ZV9AAtLNjYiiWhvcUEnVSJ9RqX5NXXqof5GNPB2eUV4th2v2dTNViehuwmP5DwHsP",
  "key19": "V7qjDuAf2X6LjBNzgtfnuMFY4ota5Hm9DaF9Aw7zEgxZbgWwUZw3p4tuXvSikzRsPSYhTsEm8cGjKS9AdaHXPw5",
  "key20": "AsUz9mRZp1Em2how4aCvBmY9XH6weC3eMriPDu6YjvCZynDiDSkNTx8C6TrDySDAq5LKQvAmUmcGybCaWHXbdxk",
  "key21": "3cujxUrEro8sGAwLvZyb7mEsfUDMbkWdqwWfypDoPSEM9tqCYorgvrt34nXNp4ZceYknpPkvGP6KD7tg31v5DqxR",
  "key22": "2tRb9j4fBpJ6GpcqrKRvAmcyFuR85UQk7z5hDegT5dTW7VhNpDxPysETVryuCq37HStHg17XMkRX6zTP4hbT9XZx",
  "key23": "54aVoVTi2NpKLsL4XM9Q6npGPzcFKu21XQJuuLQ96Bwdj8rKwZqck89gpcjJHfZuqUhXmoknG2nJviZuz6WijQJw",
  "key24": "5TPrKja7FL5xvT1v1bRKgzP2YJdvUfBgmuWGxi5sgYFKr1vWzVX6ofMC1mVuDcbfaZQQF5Q2ozXww9snAHZz7GB5",
  "key25": "2eBbUvVKMFLCp7jn7RjkPqDcUoytNEU5BMDBj2u8i6AfinC4CAtoyowWtf45VgJbLsb6K9G5ESg3Lds39jaWBM8k",
  "key26": "5jWBLjFhvWQ8MfrscF83n1sXYXVYHueLWCd48aUVgntpNrP3KWbWCeXcPEKdo1RxBYZxQn8CkxvprQCkKk6YKwZB",
  "key27": "1Q89fnN4fGk8VkAkJJdRfFVi6WzrpB9Bjs8fNpgBGt3Ztd3Ae9VirCJnVBb89JKfW8QYPm82iFSBhUQXkaebThy",
  "key28": "2tQKsz2T37SVxJGFD9zZf1EpvBstNs3AFUCCQdv2nUhih9YZpb6jsPmPE7qddn1TQDKykTYMk4F6m8pxQ5NmLaoc"
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
