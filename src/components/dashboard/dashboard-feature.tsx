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
    "37hqfrj2XDVY8gB9gcXkWB7jUa2sco1EtJaHEPkrAN1cAnfBoMwmkunQmcG8UgSCsPh4b6aNEjGnDydXTNYdLBpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TxB7x5nLNx5Dgf5FE8Mc77q21pFDw6Sb1QLuW9PJunGGiYWCRNqNCXCkfKQiYQTsQB3KhjAaMAmK4JPhN9xu794",
  "key1": "5eSEuhZxrQiA1y1E8gUwrbvsjvnpzMFhbvrNbJ4fKptmQWJPhKERhhwExH849n9iUh61Dcjw8fQQhSb4x7ybwfmr",
  "key2": "2PUUyXyxgkv8y7NeXap4dmnCTFquE92GSTqekXrc2goCN94RKAk7KYzZxxrptPK2hBgQzGW9ZpaqRiZx7DEB74jg",
  "key3": "2rZhuaejomQrBgFYDB1Z2tZaFWfTnSFi5Fug3W1KCN7X6TukYQfRgio18CGg93dWUA68MsTRk4Xuv9iiDWDkLrCo",
  "key4": "CP3KM6UR6VjpwwgfMqpTCyytkQJiS3hMjr7Fr1JeWaR1D6eJ5mDKvFCF6kSj21L5LtKWZCBpPXchkRHsXYxTdQp",
  "key5": "2BnPcdUbttja9jFtCUxY1JrC77qbC3oy8yQ8jseKiBRfLYnYZahMp3uhjEhycnLYmQN994nfQab2uxpJcpxwBg4S",
  "key6": "3dfFjm4GScA8QabWP6iqzHAYpTCEmwXepx7S6kDWMrgPFqsXefMup1wFPE6VLCEKJynx2wFCsoYhV4HyAd6EFLDz",
  "key7": "6bWmjHEdWN4nxezhCy2hWFbsCxgP7hNYUG9zb9qhgZvddc4EFwnAwLQobzzNjs91eJtBrhDAXRNBgbHRGyYhdXj",
  "key8": "4UmxrTmQ1Py15fwF4hX123GdEnBbFUrP51pYvLNyttb1ZzHfMzoPW94jCYQByTrSQrRHxt9VYv3ezd1ygWnEYBYG",
  "key9": "54dvAnRkMHRDFqSZLXJrnUSusb54RWgNHGPofvRSMVMjCgidPzzchQhkZnUCdGf1GsWK5CCtNDbswDxgTEAPnBDQ",
  "key10": "3Dh2DaoDtiSRojA47X7F1JVBn8p51sPJjpFZkNEhQTNbCqAiZYgXQCxhFUM77H5YqPrymtbg4xaPBYB7dnYKPBDz",
  "key11": "2BhHERmFjA4BqUotpTfqkgZZmYSHAAVKJM37NGuMwf6pPTQDkNVFDLxDSHBKPfpnjxky8BzzWm5pWS6qWwv1bv5L",
  "key12": "5wV751N5TVqAB5Mr3UF6UpkzfY9iZynxmLVBNBnAeUBvDYMqFHgu5xLut6eaDKsFkWRvpzc8Xpzo5CgaKMh7a7u",
  "key13": "5xuHVE6LZVjgJD7KwhR7uhYheSsk2kRSwrgEtuudauNKn3DovibApLMiKX4PvBb6q491GvJhJDKqut1joGgaqNcN",
  "key14": "51BZXWQrsrN9co5FQokmZtJLm68f2SpyGrneT2AeRupRaQwLSuqjTvWsTMiLWypfebeJaR5Krayn9a228oEu2Ui6",
  "key15": "5BJxtoEDDYXTUZ6y22Gud37xavV7xi4rgmNpqKeHyczQ9BhtU6zY38uYGkV9Ke7xPYhXAmdu7jCLMXt7xWH4Kudi",
  "key16": "26zKKeiembE62HjCbebvAKFSEjzypxCgzNNLQUwW8WFEL74PbTrpx71mxT2MVwXkbJdvFYiihiKqw5GHfngGPZSH",
  "key17": "2BQjfsrGdGFx8pcAr1FkHV58f9MnFnHkVRL3RMiH7dz84UWcSMDq73YWnQi3csRCq7TAK9EfGDQC6TP37EspfZXM",
  "key18": "5ofZEv6LES7UzKyvRqMLHCL4sq56x52dddHyjqY6cUHRg3cWeTVzKT78AFH2PMEutCvYeK9v7ZJGgyLDnRifRYU7",
  "key19": "4A9JrUEstcpFueTHGMu4GAtkNXL56AYxJKMwNF8xXUdzVB7UmwoRtx9mAoVD4nnVP5R1Tgj14mGpPcicEtJGY4yt",
  "key20": "2aNnpcFRKaY2T4GCBf16rjyYwBmNxvKEh5LR5oeEMQSw8MbCowHZ58meKMiR1QYH9682oginxDwYxijtNdENpRmg",
  "key21": "3LcdVvLbMxG7iHtueTHiibRmxDVN1yTTymE3QNxCRKWHXEiWqR3ZtLzcuCUFCo95KfjtBHdjfEfgzTowDjomgG86",
  "key22": "2ZZYkgUuvZjp9JUm9hdaf9VZZwmyReuWm4tV7csaidacF7HpG4QyK91mHH1Aa9QExDxfU4R8h3cTiDTnErvc421w",
  "key23": "3fjcWDP4b4snxRTNA4tXjdPj7DuMuVRwSz1SwbeiVe3BKrKDmpd354dz3Zx5tSAUdqVWkmFFhSZ46K7S9wpixfav",
  "key24": "44td2PjXeW1Jmf41mD5bisnDFMFerNTgaR3s2AbSnGxyg6NeLiUvLzkekQLjQ9qQ8e1RSg3bA2BV7PoweVg1aiqn",
  "key25": "5JNowWxmhMfh9XNQhYGdNxPFq6wzaq49oJGkqLkkvUQ47FsXGeZoAMgnogpWFpyE3iDwKiwXFtxbxZJzGUKs9R3V",
  "key26": "re6MfNE8N9ErQGMKt1br6MxCWc4PNGaTLyPWXQucHxYWpFuXQ12xdX876swA6pCBeRryvSzzR9GeXHUxWNwmQaE",
  "key27": "4Xm2qnzXfbvkUENEepxwSpTfzC4WHywMDmfKbyQthVbcLby4RVYmVA7fBbcRVfcKfR4XLWpfJkZ7x9VeT1xZMFPH",
  "key28": "5YSmcrztTDcJwuFEnm2znbkyAkW3gfT7r6jRTqzUjh2V5YYorRkh761CHcmA4LRzbRgFbiQsCurU4tsb4hx52KYa",
  "key29": "46uietZuEhvNu5MkuFqchmtboRUGEjw1Ea3aExiVhugjzirumb2reKciDoNyLzYrz7yjRSDkDkTuBbD2aTe6KjjJ",
  "key30": "37Aj83UKe5CrP1Vf2wzDqHszDkgF89pqs9PfCuSLpraRenTxpbb5gByJj2YbXiPJ7e2WRbyP9mFc4pH3zE29Kzh6",
  "key31": "4XG1AjjBoFvt23uB48yJkMeJSmxf1kZEcqoGTmvuiTiBfRaKXptHqa9jcjuUn4bBygjw4bURWt2nPg4JUj1sVDGV",
  "key32": "3dm21d4WiRS2qKAi1xnXr8WJsRwr3LG2mb77SDJpsp8TuuEJxbvBgsQ31ssakdYGPFsyawtDMa7R5516aB8QBGAw",
  "key33": "3eFa7snRStv9RZrer4XVVUo7KoEc8o7AD83yVCJ7j9Yt4a4eWbFdRuG7JvgTfqNdc2Yw1w9Gvr4bz9kaQBRHNaKg",
  "key34": "23MkzjfvFBD5VVKU9uecPPJLMkc4TqE9otBvPvwjTk2dDtjRSGK8cUboaaCLZE2pRV6m2CbpS43CAnwM7meSBWwc",
  "key35": "3FjkG6qviV2wFZBLwXURJtyeX6RNqQunCnXNoeYn81zcc4rJC7DpFdLdcPBTnYQiZtH3jB3Nx57bwP1xf9mE7EKw",
  "key36": "5RJxffykt9Nghd8sA7RUQy9Y6kY7v8wrk7qgw9oKsoVrvdFcaWvy336WhPRMfCEGWnuDjCiHamYdvSR9j6moQTKi",
  "key37": "4prFsZE9UzAakhVxpM1b9Drv4rr4rZoHeSdUsCUaz9gTm3hy3GCd9G1A3tfQcdfWNaW42TPQi71fafcYzPFmLXhv",
  "key38": "5QRRBApTpTTRSYHWZpX8fi1sZSM718TAJpreWyfmqNgpJ1BvhxyCRk7MLSXe7Xq339Q7BPmWa9TJ41YuamhbHiSP"
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
