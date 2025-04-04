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
    "y6pra3dit7FxNVXTa4vDU7Aia3762FcYh1SoDx5PauFULMVnD5m8wpAEYKxieGtPRXqB2iQHhqku5eYCEd5HxGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YmjZGeBHSzFq9thaonef5ALHxqawu6c8VXtpnyHpw8SAiAHVPoQeYqooqfnLVo92ichfRaLReRD6ita9Fns2i8h",
  "key1": "4dDZxGCd3mRpu2CPBXzP4EoKaVLLjy1AEqpYq5vPzgNpduekR2YuU7BjSS5F5PJ3gDmQ6jRs8hiv8LfNkJLMbeFx",
  "key2": "3Zbh2TzK7gGszNyQV9s91yLZjq1KmECM7SDCNsExeX786CgDGm6tWB3MC768BYGvkeS7Jk2KzKMJBmrJPLS3L3dE",
  "key3": "5MzHtUuSWqC7wsqc5YaSha8dcneHA1HZStTrw9pcEpmxg9bkehpNacfXJWnLsYjTFiqS8mzuT5CoJbCALjob4Vr2",
  "key4": "4WBuATfyTAWNaxtSaGYRPvjDgpiwBCeZY6XrPiV1XXM8EX9FdAnnJjHfE7x4GjXu5Y6ijaoTT955XrQZn2PYEn7q",
  "key5": "3UjZhKsabPSRsNDqrm9681aZomRkCZ4BZvYc3HgaQ3cUp1izFNxayB4ZXZvVJZnyq9D1HRDM9njGLvQtqby2jiEJ",
  "key6": "JMpgbVpyUvAZzA4NfbQ28T5VYE5Qxia43D4EJ25G6cuXgwXZiHwJZ5GhWMCeG8ucx3FnkGnTZPCUFFN19fsdpc4",
  "key7": "4dSo3ZEYT55sqAwBDTz6f1Sandw6G2SU4j5aX5RoBg6bJYqpy8mkvQzsbEbVDTcv1XAbPxDTofvxuXwkzZfpV1ri",
  "key8": "4x16Zn9jt3YeeuqVEhCSo1seqSyCqC3iq3wd5dNn5rVAxfoEvjmALwBpWwSkgcwsqzq7X4QhNAXmnuYtEePeicjJ",
  "key9": "4REnJ1S6eseqC27sVVzfr9gB4CyEFK8EzY5MLPGkWFmGRjtiJr7CumgrK6ZfzrWE74qsFyNtEnZaQwHLjUiFR8z8",
  "key10": "5g6HqG4DJ2Dju5veKfug4RZqcwtRhKUv6pPLrRpSKWnwmbgi4A2zY1y7E9gGpqstDULnr9zfHodVrK4oRMWJZgry",
  "key11": "1ZTGcriBmGCsT96t2iLdfYwxmwGAhAdW85QuyTFghApqfNCFXHkfzco81acHVsXSDSUUwFxttv3NiRBQDCWysG8",
  "key12": "5GvukGeMJVPUYRxFVeTdAC4d7aJJGV87QbQZzHo4AomWkL6WGRfWeUAuiREyvcNLcYW14Ksou272bgtL3bVj97Y7",
  "key13": "26EaND1PQEF972REvLE7YT6sQFBDNCn22CH5DkKey6pf4kDxh2iwvgzBgM1sGaG79FjB6wAcwhY2pBUy5huAyDZD",
  "key14": "5YUaYrpeKZnxeJk2hUspnMY3e2j7LG3WgfdsJEjEgwEbqAuwvzEjKwUGXPWFiBXtamecosrte4EVkpjS3mo5wFfb",
  "key15": "iKazsLxxN6TJNrQMDbHcTjVg1bS88kVsdYte2T8nMvaBNxVRxBeCPdzoBuVTZDjbk3REH2ELyHgjvQGBDyqPPtu",
  "key16": "2RPXWK3EhuzjwbXjvw6iT1wY88WAZgLHETa3dgHZUVRnDf4AYErxsSfhZMM9zgpATNvmf5NCtVcsTj37q5vQk6vQ",
  "key17": "46kiL2C61HVHAR4gvzJQFa5ZAokahVBsCycWkdKegUn4STeDEBQJbmvpJJzZngzvsRqCHZSM2tfBAm4oKRcyctsD",
  "key18": "z6egjprNBjy6JoLMhoS1dWLGwSPty2U23gWB5idZagftAdYptdXuTqTYYfcPT7QaV3VvK3hE4CThr8BfnkLfGJS",
  "key19": "5Yv1bYwit261EREMiou2SvpRdeqoRCQVQBMjQP38B5RvRj6mdxqQ51tnHCcb2dGiCF5zQGKf4G9XDYboNQRT4i3t",
  "key20": "5joF5MAjGyKAidRHVSdryeV7E1VaqsnWu8ZiHFkD3zbP5CENNUnKyptCdZ6VJVgaKLeGCrH2y337McnASfmvpzLz",
  "key21": "4x58bqK3DGS42RHBPT7wGzhLy48RwoKvuddUuLWSG7J7pJPqWD1GpqXsxQkKswdWKmJmKpdaWnWVqVk4UtXyinwK",
  "key22": "6nCX6B6T3AJh8WLf4222niUQAauFyBnF8qgMLHsm8Ey2iGGWn52RNo2iVSVqgYzB3CbfN15DbgKPUUeS7bN8JKF",
  "key23": "RYtQ3a4m7pTaPJDB6K6G2VKXtUfWtM7EX9qbbA93uGtX9VzH2vVJvkbftzyUgmfvAZMY5tMwQxPAkWBAiHYx2tU",
  "key24": "3zvJVx4EwsxXG2ed6hLHx68hVuWmyB8VYk6hFvBQ4itwZ87wHytXz4zErCtJC2cvLjHwRmQ7NdWwQMffJePhFABi",
  "key25": "5qbA3SJk7JHkxsRoLT5unjw51dZKvEaU3H6XwqG8GFQwc6PfDVDcLBW2kPJxMdxjsiS9ad2239zy94wrNJ5eN4zJ",
  "key26": "2f2HZYMncgrF7sSCMs1Zo3VYx5sq49LjQQ8DcBqsE8k8mJpYAfju6NG8mnTEU2fbsk2TCVjMRkE81WG1tZ4W3uj4",
  "key27": "2P4jEL5mEZMvvdsWqriz5XK7e7mVUqyxZPV24CXkwRC5Ap6dt6MtxHTBJ7ErDoiPFzhwkDRjLLZdYEn9iijBpCo6",
  "key28": "4Yxzn6sNk9TULJ7aQSqzntXV2Hw5eRzQcfe72QWL6ULU7NZb7AHQJ7ZKjiDSkwEGdM2NWbPNpysNJmbeazoExaAQ",
  "key29": "5W4NDuVmexDUiTYfzArHMUWAmmDiypGsDMPZQDebkuPTT24uKFCgkj54BpegyFcvhxxkot4oqsJoWssc9RdmiHsK",
  "key30": "4452XJPGSKCAb3TN8HcXmDaEFbC9ZvGJgDkMqHBYsf7ZVHizNaxsE3xREFX7ndLraEGFXr33NUBjTfsetjBoSN3J",
  "key31": "66NzvptziM5HX1x8VeFTRXp9Y3LuBV1GRp4Yqv2E7shPHJQH9ZGVN8ewCp7LZu9kDW3LscU85Xvorc3w6qKedwaj",
  "key32": "cWB7BuMfjkZNF3LTBpbBCNrz5AitQz6SFM12uPLcuxuEGRL73WbsKW5MQdYXLWtYZv4QK5mvFrZ2FDe2GzaZSrT",
  "key33": "4PJvQnMbSnNSHhQcEQsQR922iCoqyCvSiczDyLj9KUwJK1Vgb27vuL2sj4Zqnod8mBq7dL2BbtsFTufnaMejigDK",
  "key34": "4YTujyf7n7LctBcaZzLjzfULEtuyx4tSua1vh8MgVZVryK8CF4JFh3GezdQ52jw8Ea4Zw4po2RZ4aDEpbTWMbo25",
  "key35": "2nmKKRXZi4VQ8q1eZcZE2X1EXUtLp3vxX4Jbp4kf4MDd7uGTTk96DsVDrQ8vhjVuNcC7DbRicWDH3RF1K2nNj95a",
  "key36": "3ahgKBrdYgp9jy2otGc6TbZ7kZq9cALP9d6szjCYyNuj6s5ehpY6YDQHmkM2ZhRpWrwY6qxmhJdNx71TbuoBR2dD",
  "key37": "4ZEjoaKzj7JSMKz2Fwyhk1QX4BhfBukGj8bpupNxdVhC6FwfkrQ4jjqFHw8sTZYWwxLELrCjCj8k4chhAqMqnJ6d",
  "key38": "63e2panaws1iVacs4Sf2bT4wQcSWCZacuLj6bM8ZQQ352hbf2ySp74YfR2NhjBo1p8ChbUwzT6gbVJ44njwbEPJ9",
  "key39": "2uPaWCwfAh697FUP4mYDrBNmi1g8vWfVauKAR8TAkzmFCnTbE86YyUyrM8M3ooZoRNdCm4hn5G87wZZimkjWHckH",
  "key40": "YTBuenv9RkY1qu6jz3kZEP3x51uvS2yVSV7yMMwCP3z4PEkMHaRKZHuwVsi1d23UGVidi4EyrNqBjdH13mgndKd",
  "key41": "9Ba9BH7wXwVTkJy65m48i7vEVLjVzjckXf4JxcgX38HFCHkJtH7m9XnsRzkBLCcgeMQ9PjecToaPgEdyigDiNd6",
  "key42": "5dWdeLAWwib1wDkc3Wn3CCdR7oS5CocXgThPo2Dkh9FX7MkZrX8d2Fgw6Tzk8BGFY4P9tGPwxJCip6nBDekWqee4",
  "key43": "5pmAirgxaaP6EHGqB59kWjWFRjJZLVfCedKbKWtU5xEB34v3Lq9UEScqknsEhzGzihBE3KAbeZU48RukfF7sNU81"
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
