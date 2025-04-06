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
    "2JVRTscbW6dxPvVyMTR2cuJ8tbD6y3LWLuXpsSRwuipDGRQjDNf13ZAHW9wuPohqg4nbS7q2wjtLks4UAZZEksv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RyjYqAQxeqyD8CvdGDpJg6mhZLoK4KNL2taecfRFzU84qxNpnoHJUmtU86a5oWgPCGGPxoMaZQMohnDvSLnKM7z",
  "key1": "29TSXDUzcEPsDVC88nR9D1FQHw72KKHPkpxdibauggkYm7jiNqPgjWxiYyseNJVBky6YYTwGfvnE8gWY1ixQWVSm",
  "key2": "2hCS3B1ZkzBJAu48JkWJYbrKtfbhNz1WPuHqeZeRqFkic1KF4J4TBPKHXrL6HMYYQNsBRnLLPQybgV8A22L1UkGs",
  "key3": "2hi6UtXTqcvpnegapya6QHfM1ev7maWoeu1BU1b3a3a938GZf774vZjkE8XSD7a3fe7C1oUJ6tDnqDeEgjqWuAMY",
  "key4": "4fuySyTtLjBtWtsFkbG3E8xUCaLG3witFEW8VvUFwaLk9cZVi1cNGASVaMLbGump8XhyngKhVXRGS5RqrgChfh6G",
  "key5": "59CFMrwimsbuJeAW1u3XNFKcTsUFubV2hqxwtHfepsWLUYKb4Fso7eRC8NG3NxeiJG1sc6eSe779kuzm6RCLSEb9",
  "key6": "2sJUnrfNzXT8xZt5Pv1EctB9DKCtTH9VEaX4v5v9B7ozk8QLc6eg8T16g7AFqGHgy8ue8m5LaXtyDq2pDaPak9o",
  "key7": "25w39RAGK9C7KEmy46yXrRTcHLTWY9dvEgBQ3N5znb8RAyCHknZ11fuafddDCzTSNH4ZGx1Nf4FGyCucz7K4ig5U",
  "key8": "2e25VT4oN6zE9p8e8C52rF4UzrNDXjVbRDpjBKFjRkfFAuCjJvZDLvLhzYGgndaDEHrqmrpMPLdaeJJnCNCj6t47",
  "key9": "4bm46myRcSwH9iQsM1CDiqRjsqddzBxmBkobZc5yCjR41xNAYoASFUrWGLJqo9Pmgtx1CBsuV3PUw6beiVPQ4w8F",
  "key10": "2HExvuKFa2eS6n9m3CMif2djUvdmv5yXfyEW6kvS95qmSHxrNvzfhEVRv2kqitwttH2w7zj6XtBDXAHNV2pTdTC7",
  "key11": "UjwFvxehwsq5eCZx91AGcTBPTn4L8WnZa1r3DcruAGFrg6nnqVba1o2Y2V5Pqq2SRF3kK1ggoc33PobkQVTpHHz",
  "key12": "5EqGLHz9VNwGT1EHonGvT6AL6gFpATCGyKGfpmDfEFbD1ahKUcVKr3VmNY2x6XZSbE6WwVtkrWqft5ftDqphdXmS",
  "key13": "3ypSJDQDCxcDoT9AJTNW32KKwV84XWpHLSjHvRhLou9zVSCNuWv7qBNgf3bg8WiGDMg7LDgScuyTso7m3s3ygSdk",
  "key14": "2Z7yfKbjynA22VAy9ooCbxmkp2od8SWx9hej9K2urNRcH4e4akLxze4uR9RBmkxn5tUbnjCLhBCMwjYsbxjWAptp",
  "key15": "4ve3nHZh6DCVmwHJiKXiWSUvPJW2NRWthHPsGeqxy5Qwkr1WCt2GqFnmtAWVf3MXgCYRqCiaA1Yia3PkJxVvvQ55",
  "key16": "4ZZmtCBKJFK2Sygzpcir1oYWfMeGkvGptSHMf5rDtw9hP3xEbSDVBK5pQKLBFFd4492r7rKWZqqNypDR3hGsDmKJ",
  "key17": "2Hqw9AxCMoZ45BNfEoi776kWQ6voPzsRNji2XXLEUuZrEF7GogUfVY1BZkr47eW2henAtLG73843YoXa1Q7brKbX",
  "key18": "3o8xToCaBVWCTWGz1CZbfbJdhLXneWW65tw3KpyGHa1evSJCerWXkpz6ADrhZhAi5D1BrLmoekWhmjkk2GcBLTti",
  "key19": "2XwKEDt3qT48HM7G1aJrrP9TLE54sZQsJFhZpNqKadcniYyr2LYTy2qE3jo5pzqRf8QWEdWvT1wRbiaw6TdnXvnz",
  "key20": "37VZwTWT7uBPUVXawyVZgxXG91saW1yc9QKX3oHABDPZfREApBAs4H1bdeC1jgE6smAGFbVrnPbNNRkdXSPCb9Hp",
  "key21": "y3i4cJ9Mb2BXvYNFN8XQvAXN9Vp2uFro9erHte5zzZFQUTqdWomc1gtNuu1eBwoZWt1n5WgxC3b1sAAjxFPKzfv",
  "key22": "5Edi5AZTg3sSnqBjBuqjHYPB4EvMxDm5exukD4QcfR4ZdgBFaSu95NaVkj5bEse1Jmne6bX3mV4fTvUifGXhgEUd",
  "key23": "5WYCeWaZvdJAPJ3Q872fMbFUC6RNgBqEPQhgGkPzkXasoA2xxoXLrwHDuMLXJU4RN1a3ZmW25XBucK8xpYg41MUH",
  "key24": "3FtLfqDwrayx1Rbx8hfDq182917obXusHnYEUnsjQSCafgRNWQGdWZyAFdzgXQPfLjixP9QsuS9oghRxe4bV5b3c",
  "key25": "3aYJ3hFhh2nz6CA8Xn6sBTV15xWcUkos6UYtUD4JaufnaRXRVfUCNwdDm1NvwBtMwWhGJ7MmoSEjk2Xtkj4jhjQM",
  "key26": "52xtfMwa425qt3vKdZdRdVVD3QSgQ8u6tVqoQCaKrh8UKoqEuxeAKqoKY4KbUXNnF6qo5ZyVDxtSPbWVj6rhcQQS",
  "key27": "5N7ms8teTQbK7KfovDBZzs9M5T556RPh8dPbo3VmVP3UzMRfL7uYiEp2TSWXBazxDXRddT8LSgqW7doohFBeXKQL",
  "key28": "4oPUhcug3ztsSJUCJTWi4xVFu1grWgf76aBW3t177Acb1wSH5tBixtPo55N9wkNetGPs7DeiTHAD7oevBf1A3jLF",
  "key29": "UMzJshDJySfccF7Py6qYoea1ocw252Hs8gnmDdm73Dy9dpCwP2zGk7EqUdAU7Tye6c65nj1CVBW3YHAMLWz2BBt",
  "key30": "4T6QvtLevfhT4kzz61H9W7FFmnst7WNyzDB3CusM2quJy2bRxdj4yZ1xdHesGwfHWFjimGYGVZ4ZWB2uWsrb3dqC",
  "key31": "5Dc56fFXfLjeaC3kGKz6keBHuHiMwRDNKfpStrTibtJeunUW8EwRNit1YnKnMZpwcJe4pPmrveY8jBHHARRSiq5S",
  "key32": "3zV75uHJXvRdPDX85bGPsac9vk5hfPn1zAviwvBk1NsMyyorqexR5UMtZffNpFgoRq6RBiAZ3JTJyxibLfJFJNCt",
  "key33": "28QMkXwdk94RVc6w5NP8PZqMxM24A4aLZVkMP5PEVYDe7zSBm3bQ2S85GGYbCZicCdeHkrqx6tD7pibcRiggkGEV"
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
