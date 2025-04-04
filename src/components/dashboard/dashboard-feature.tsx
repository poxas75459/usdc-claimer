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
    "5j8HewVFSFgWyHS4SFEk7Q6PsyvxkroHsDf551zbRWF2c1wC7kmvZnMvXrRbV2idiCt4r8dC3Uu3yzwNy2BpBCwh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r1BbbDujLfobiokSMVsGawwQfRrRaoYpkjMU5aadUnAyJxfqQ4MWUS6YSWBXXDd9AkNrPpHV4DbrQ9UWeut25JB",
  "key1": "G11Wt2VREiv4VdkYqAR31nL15AjwZXxRYX6CtkCKDGsxRCNmCvJwAJwhAFFXm8P2gfdqz9WGSSMEKwQdMyVsGYC",
  "key2": "3CHdgjEBtuFx1ea59vDzNNMNNGKv4MKN6zZi8qKVhLMpwb3BnkzWmzABEeSk1RBTRMymUUFavFWhaRvhMcfadcoP",
  "key3": "4qBzNsD5eD9WAaFDZ3y2sgdh1zxC77qfZZZa7y39y5RtruutYF4fcqdoLK4VhfNs2QvLFGY7an3fDuFiku59NiDQ",
  "key4": "39k2i5CDK2mR9T1EjpLGadDUzvvcoHiMGJQnMRgrHSZGgfsomjuL4GHBvWdbeuo8BUSc11A9ozrkGr3bFQVSnhgB",
  "key5": "4sk4zoiFRoHuFzcCqFDScSmXe9pHVsJGBu9J5DQjvY6CvPmLs8nG3oxQawXe5ykRtZK1YSFRBk9QDjWSYfix8sPo",
  "key6": "DGhUguy6G9BxNX5XXcJTreaJsuekrNchi7rM2AJB4rHMFELUMunajXALvhJooizXasDpo9RoxWYLhexaJ4GWojF",
  "key7": "67a44spx41DRNN8JSGquu51ygwNds12PSm8uWWVrR5kJj455dXr6eN96KDegJsoqwyKHGnV5US7Q5dv6QABMiZmx",
  "key8": "f7BqaxHtTFA1Lo2c3h4hEBcbnQMhH2rC7dS5WdQnEznE6h5mi1dZjGSBE3qiY7DuLVwxwFLDs2Nkmi2fBiWE1BK",
  "key9": "5jBxtV3x3TuGY6vbixGB68vb6bNTCtpZSb1ng2URJ18VciNV4FYuKZuKarqrCWxDzby3iCFRByYRStNEirkwtGdS",
  "key10": "35oRfQ33WVxmLBpbLvJEu7DujxkVuzfwpQa9X8sByyx9yhpysPHzdq3kwZ4K1zmCM52RJxcagjSSLMSoKcEhWdkw",
  "key11": "5LWZx2iF5ptMFAL8Yvayz894pk8dhTxAMfKsZ36MKnZQUaKWsmybyZJuYdvXE3JayjbvMcofvxGZyRcg7kFwhx1X",
  "key12": "5Qe3Dq9L5EZMpE62DjSJ59sMGhmvnjowMykHqELGPT5qKFi5SZtKDURrjUWWa7Y39ZDAyertCiNhFrSuuV9UVqaL",
  "key13": "KYvsQjhFc2C29QxfdSxvP5tRS6uNQ59u2GkKWrkwb5nVV5kirMMcnevRPatjZedZabBv8tfbCMoEUFVeZGTC4zK",
  "key14": "2ievpZ6wusfjYWJxTA5j8suP5wsN9aCNJnAiEdm8TM1qCAGCVvJvjfpggRBt44Ru5XEYX5xu9NaJ2w2mSpYcNQ6e",
  "key15": "4GsCvVcYxcjJUn42Zoiue2PQmpuSQuuScUXLQdUp3RfTUJFxrqVEShT4N6eHwPWUke3XwzA6oiRtfdF9QXz5JgZZ",
  "key16": "5yXAHEPYEad1W1mm5fLuLXfpSSDYqKBxXwndvCXwB7jRBqA2VuWfEZ2mqL6eZfcD6pWKMhtZ54kHdjCAWJowe2GN",
  "key17": "4W7NBKiyYvsCL1z8oH5BNt4S4fW3oSLipS6XcknR1kqpZFDsDf94PTXzCJ28HyAGX8pQZkt4Jmdm93kJ2SrjNvHS",
  "key18": "4a2JEw1Pto2G9iAZEeHRp9ixKBk6sZFzLEATgkCL6Cej2gYdhne2e8AY9VoPUDR2FArYQvhkfx3h2fyht164UdCa",
  "key19": "5JR734uuHDb5KghaigonNSk3DUAzeEMQpZofxQpFjJkFEBsNxgkeYNennqwXrbHbNTt64tuheJ39qv8UurmsyfdL",
  "key20": "2MEZWboNDdqT2euGU63am9TRn8gYxJ2fExdavY17hW4jmJPdz67G7PM5Agkptx5wQeLSporCWETcBCbv3gZHi9mP",
  "key21": "4S8THKQvW59tFwWf73hn4dffjdGczjn88NMhFENU5shpzopwgEeJY52TAxWYaaucRTYMF4EzZHQe9wK3hNuFZWG3",
  "key22": "3i2qTTXv4HN2jNz5J1z73pQCxQ8oGbTTrKrTSKSGPgu6pVcJ9KwxraVoEcCYKMhQh6p2rGroyuDe9fJMuJcTnTCB",
  "key23": "5PUk5H6mDFZGEhmGp71BwaMi4syhaM8gdhxzMw4Vr9oLZbZmZw9TwXXinx5wbr7vje7n4oU86abMFcn8K5FHNAPf",
  "key24": "4PoShTjpnYvndthhPpFV24EFTdFCyYzRnTfk6CUfyA9Q294rpAXCzeHeNrqRe2U1je6WdCadSBLRezh7sYHCYQ7f",
  "key25": "4Do47oXfHtVi9QMsp5BWL8tdmNza7UqNE7FtfzXhygNRGBEAXR16ZPNmcJV6bpMEg55QtzRTEC2QBbuMrL5ZPwPc",
  "key26": "3hgjF3CuYbrJStR6C5hg8uzz8sjCqYjRUexBsd1LtzmPRPikENp1rSmqEwm6i2biZTnMyF5Dy6vFNZExMtTJVoSK",
  "key27": "58KbGhUm8PqfhERdPxtSUThVR6uHFpbEFFz2BWtenqXoHFm7Usvrgt6X6DPWsqqxyFNjTqt2SJSb2Qjt6VRQ4Xec",
  "key28": "3C6xpm6AwVj14rBH4Xn8DVxsTU7wdk3sMDGmBchAiZK7gaA1Cqp9UokwUzzz58XLQYqdckB2Sf5NoDUzKJergYLk",
  "key29": "2rS9cqs7c4g787H6XjogYqTEpZJ6SfuHKsTEEjncoh6YZm6oKMDTiRq7T1GEoUsNjEbJXS5qUoNLCSLvTjdRU5bD",
  "key30": "4UtxcKRUS2hiN4wx46yiPDFJDpQZBcSZVssCUUa8Gxt3ExGy4jExHw2X6APeEEN8QCCBSQcj19r1mZ2AxSZ5jCPg",
  "key31": "TC7v2xQEoCFVhXa4KdbRqmqcWZ3ckAWpN2oV7BFzx5EREyPMM6NivfF4a2uqrk6THA9FDdRsjvFoGWqn1bT9PHC",
  "key32": "2Y2BYmigEo9yHaMR33hvoLgGAaLKF7bqMYY9bsTo3FC7w86Mf8DWX5AxK6oYgMsTxmp9mNwd5q4aMcZLbYns7Q8q",
  "key33": "3nrTXWGtukubxLfp9SnzGJc77g3qNKWzfioQksorxSnRdmXigaQ7GBbPbzraQPnJfk6RH3FS36KuqXSvW8ZBeCWE",
  "key34": "5YuT2pz55HocBFYWyRMgyhHSoPsvGX2EFqvDRrWUVQDcKCrjQnpijmhHbZP6bWMH4ioZCZTFms7VWDmzcQCAE9yT",
  "key35": "33ff3WToMCFqfDgsEh7odU3MvFhk2N8uLVFybWw1xQB7dFz6RTfpuzzQiogDgiZWy9QLTz88RThtkdLNKsFA4NDt",
  "key36": "pnV9wgvVPDQsMnUAAT89Uby3FokZpF7vFLcMdKMghNuxbaGYdW6hB6CXW2kBgJCY7btPVxfethp1Koc3cCUcv8N",
  "key37": "ZvcXS1ZAGjJojPEdkFwo1nMswSLGiSxtV1rAbJcCDgqzGbTuFuNkNTSpsdrRhbwEJDLWAqBkDkSHAZGAuGr9Bjn",
  "key38": "3RF3ESxjXC6nwa9R9cJxFS4sqefuxPUcvXeGrqxvgMwPsvjxC54rKV4pd1ipiWPQwi7Bn5tuQGPux5hvasm61o6F",
  "key39": "4hB3mSPnqCgdz82fvacwk663rEm8jtD6eZ1pP9AwiSUi81cDeNwLBtoRnmdM1qXH8c4NMuHiBCgJevtUejXBUCus",
  "key40": "3KjJFm6v2ExKd3jNbQmmVpwX25sUoPZCEzuDT7dVUhbyeBHVxCvVdxfkFEVuM4nWr1ztHdYBBZ3mE3zHHb2t1rFV"
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
