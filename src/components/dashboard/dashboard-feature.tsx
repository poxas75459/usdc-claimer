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
    "NkFbDVak6cUzthHZ8cTEnFgZmnRVMmmoFGbqJCVWEBS9rmP9Bd2pc8QtmLMMDJa1c7VG4tACnqVMRRREzfcjDzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MJGZ3r1V7mhc3Yxvc9gXhdN7rTe5rA4ZpJ4R8SbHmsr6zkEdhhBxpNFuhwqH6KUhGVBwyNWqjYmSRFkZiKRi8Q5",
  "key1": "5jmF2doyML8JLZW3asarwAAAhHALcKeJVrGKeKKWkegYMpcJJqVmwvhrVerynitbj5ibBLZjChq3YA91cFwwJeHD",
  "key2": "3KdRrdRwdL6tZ71rLfCUCZjmn33pUgWScc6Ce3w3rkVEoAnCEuebnpcFZMZab7tvcmdovLkG45EF82s3cU3cTRF6",
  "key3": "e7c9dXLhKoY1rnaicrAr85s4GeVAjFXYqexAjA6d8BY23QzyBpTswbrqj2vrfTLyDpN6uyaiGXtzkCo8gm3EXiH",
  "key4": "wLuXSZqAjaE3YYnKUhK2CPKEKJXUscahabkmdA7cj4MT1zhX7J1iyEZm3GWqTW7FkY54JbBgPa4WzMX66DHWjMM",
  "key5": "5ikEuzT8YapP4FaaZ45jRWmh7yP4QZFxb8TfJeWBqpgghMmDfH4dUhw8hnTUb88abArTZxdFKiftEhjixdDj2xTY",
  "key6": "CVuhnfLDmj1Y6SY5niXn7qdYhZxWsCDxKnMPpbYsWXpVnDyWXXAaYpHA5PCBmYJ3GvQ75DQnryxQPF9fpawCmGU",
  "key7": "5851DQhwmSC4PZ4zBmXCiSUHdrkpdf14PJQQGhzBQK587VsRKT3W2DXkFoiMVKDyJDNeCMEQcQaWmFQTPc8WjcLg",
  "key8": "2bEMaH9nXToGBmqvwdutT66rfieK25fQABJYzQgJ9JxKfHmFrfVCbfH3MjgNUCQ1b5nBBXVUchHTjxfQAMTqNNi3",
  "key9": "4ZWYH2KgoPoGv4Z3Je4wtEXiQ8GfothmmcT7rFN59496sjfK76rnFE1cLG9pjjeacigTxL8sSF7P2UypAvEE9jVN",
  "key10": "4AxcwnyjLZxxN1U9YT2tn19MfnhrkvZUSZPFQo1uR2fw51m3jcwKtKNHPPsnSy1CMqDa3TbikirE1djucRNx3mwc",
  "key11": "HRBCYJXr82Moji1gaaJgUguinAGvLSbJ8sbbmyHKZXnzhQukWMLNLFhstyKYmEr5QndeLwMjosSE5hdpJdFQ86H",
  "key12": "2mCPhvwSGoSLiHtNs3ovYvWig7eNVvCwgWxbBxkcbVWrgcbAdW63KaDfNeKcRxwbxBhpDEYBUtNdJebA5BHt2xcj",
  "key13": "4Ye5ff5CsVWsd2Vr2CmP9dUcxQMyeMzEgeoYf7nBB3zR21jK1F7Ne1n1gVo5jF4p4A3xhsvS6fj9HbUSGvo4heFL",
  "key14": "YY6xqrACceBFxGJiHs6ZLHpCvmwmeaBVXk1bSRdNBnEGpnvX1ttofwdSNbgG98cy4dzbKPnqMMYGRLA852Nkans",
  "key15": "3T1Kn8hmUMrMXY5YsNKZgMNJsMKXpvmHTfUDCYNS5i2aT8cPPwKk3ztpySATcjPEj148r88R5junNqSU4EWPVtYD",
  "key16": "3imK1aWhmHS3k2mZhSPZpuJ9JdgYaQKxDBX66Cwb69WPVDzQHG2NHJmyY1dfTBE4jNJk8N8B95RxgA3tk4PUAN7o",
  "key17": "5b5BouYhRXy4Ly1GKYfYQ6Ah8NprEf4xF1ix5cM9T6D3NMbxYgtniSGF8qESr2BiUXTFCo9byLq9YSY143ibDFzB",
  "key18": "QGZ826pydCxESzePrCcefmbB6urUMHMVqqdGosk7NGqLLryXZXJgJniF3f63YYxCfjP1VTiEYNA6GhZpgB9wFgn",
  "key19": "51fuTCYyKkh6JtP5kvLTs7hWfVMAUVtyHqcs2cBShpMeDfHCxuxwdmoC4sPdPEHU2DoVL4DGgtnFd9zZTv8iPVah",
  "key20": "4wFFHUE3NXgEzGyr2DKaxFqkrw4ERFxCzF2sSum1yda5yHqbKPR7VdC9GxQZDbzJvAgKi3LZAYcGGLibchkppvQN",
  "key21": "EuDTeqKzE9ZZU44poL65WNVrMwmT2uUKtgLhKX4snjRnyc5Bc3qZ9ycCt73G2h9iyrYoyFn8ZSqhByQRmkVLe5h",
  "key22": "4BpXE6nqCmidY6QLauFc3krs2DC1nRH17QAjr2n3vXdjaZimuhuFwtmqAPcT2HiiZhGHGy2y6VMA7hH3o9wddu7B",
  "key23": "2nC4BKUJbw1XT17ao1HWDAy6qeWChyp4ExoPwYv1VNFzFTnzQJJ7Ge8YbrRiKw3aHfEATNKkifotCdLFLKkeYT4x",
  "key24": "67mbZCYeZsCsSuvJAhaieGLTvTfmvrEiioEMaf7ax9fzxWit2EG3KpyQQgYcd3AyMa4MFQhSfqVXAHc6KAf2KNBp",
  "key25": "3S16PRpDnSSMSVUQ5moErLkPCgihNKNW8MkzxeKDMkL6vfVDp2BCA1tHSro3nvvwjmCLdhU4xV7V6vctRUehPz8L",
  "key26": "3iYVKszsbetoauaWpTjYdmuM2WcELQCxdBvFHZtWmzZg4WzuupLGmXpttZfAtnXm5Maj4Rd8B3Yujher1UKX5hfB",
  "key27": "5wtaaKwfpBcR3aRYzxj4nfTE27hoRHKwPk3Hkkm8mcVjqLV5p3e6xyo2anTrQzDVJQ422eEaCoN11TRkTHHdXd67",
  "key28": "4biTsecbe7o1JMQRZeeQS44fvgEsd7oLF4XfEtJRsJPN3GzFfvrxArmLzTQZzP3wt6GiK5jvDswrN6HoTNcaH3F",
  "key29": "5pycZj8MkGhtjyVw6rygMb5b6Y8zC4UmRK8vW1XTxWnQKbRJEhC8AMGahy8Jcd9rHFJGW4s7WMGbexAx3cNhmC4z",
  "key30": "2Dtm8yupgBin3C9WJKAzXf3CpHj4UoDaDWKnKrYVLpBeZCmMfaMZ5FGbHmPXtfr5ox4mSt1JCcebGtybEkM2TiMx",
  "key31": "4qzZBUNpCq3T4uGVyZPzSTHGL4MELkCyDUyKgHS46rXWSYeF3G44rpxpfPbzNpam445jKVnXefQrWXWEaF68YZ5B",
  "key32": "3jWXQKC1rMgW2WEEN4BRCpV9tSbaLV2GHMjeZCRkTcnFLLgezHBn5jfw22zepMQ12BbDH26rzB59zgcCyJU89CJG"
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
