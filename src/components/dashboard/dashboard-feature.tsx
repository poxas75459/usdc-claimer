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
    "3m1Txxk9c45eNvChwgcyJKotCUFzvMkz4MQDjyXSrb4mFfKDisutiswsNpSTHJZUaVCXR1kcwMWoQ7QD3sA12jpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iXQRNDcQSnaVqL5M4BQ8Pxa9u7bLARPtGCubkD1bpjXxGBkkZVBGhuxzzsq9XnYPrbLFu6bdpNeCzCyaKEKn6DV",
  "key1": "4HQmEEe4JURWe1R8gAYvTyYp73S4yXWEtimjuYsopGSNDEbM9FzhHDeiWos8mkKH97zutVyUn1V5VWzxkyEn5s6M",
  "key2": "4mi1Mv9BFjn8eaG2KcAHtuQUatZpwhbYpf1ZmU7JnnWkoeJsjw7YzRJCCmuvN6efFDuXAEnBtL7HkGSg3fi147XP",
  "key3": "3TEqvgPvQZUZztzwz6hoBuKpv5j8GxU39532wvFsraoNyyJ7RsST9EfLSbcCvwtHhEm6Xk4k2ggkpc2XAoN4hUYY",
  "key4": "5WX2YCJXuA4EWmBzbxQ3kM52P5vS1ynuLQiQt29wv6GYzszNHStKwktmjQnpdwqtBFoXz5j4sA6ULrEQqEKR73oW",
  "key5": "ruc487FkBjZZ1y5g7V32YZ6mZ9Q11MvLWddKC1UcRSxGMRasETKTcCnH7Ky9XezC4Xej3uSuaoPpkXgd66kifzJ",
  "key6": "2WAft7NASYbJ2RpZ2dQzdvTvy3KBhEBYmF5KsPP6bZSiwgQHXqTWVHxj3VRZwEuED4zYTZqoWVbux9i5KaWSfRnF",
  "key7": "ufhxGRzt8NTBP9h3x2wQrz1iYuqnGLzzPBh2UyaVdnanUWTaAVrGXH7b99Uq5eovk8zrWPTvdTbg8MrPXxSphLa",
  "key8": "5S5psM4q6RbgDcHx4p3onuzuwe9GXFt1Zc6mJvo5nJ3AjHKxMhkRoWQP66JyKamCaN3kuohzPdpC4oxRNtYhtbAe",
  "key9": "5sNnzLsqpYSHC4sJa9HMU3KMNBQsmwTuPYYKuD5jzxEBUtrdxDhqQWKvAzU2f1szm4KDBGMWZUzWy1rPb3SCi2cb",
  "key10": "5ccKfH36UNnDNRrWDN3BkDheGj3ihpbChd2AP2VVA8YUeYYsUeQR4mH4TdAzHGwJxJdS3Wuh7beS8hfnxqioZ8mF",
  "key11": "zwc3fCEyFXAZtNQPbArihQ7J24GG8WDXPtv4qiyeE8LezrFxduGeNa5eJAof5qCaq2bMhhxJcFWCZzZneF5JxCa",
  "key12": "3wsAKWfPmbgC68fGJHUUm7TxhgvyhCQrFYQxyRsPLrA8pRSxMnu7mJw1vsjrGwkxvNjLfxRTfaXqrzpPbExYfbzH",
  "key13": "35hwKgVBAx9hrQPYdLgSxCRwYv5N2tJdHUGYZCarkGn5sjt5uDrFEV964mgytEAKTX38Tvc2SRfBt5Wu8xLoDa1V",
  "key14": "KiNcmduqhusKm2HY2BkWpRWsMEPCBVAPJoQm4DooSvepkrGGriotGbr1N7rbqXdQbBDWQmxVoy6oZdobVhaKQpt",
  "key15": "4Rvm7kHAHXSYa1qEEA1U7bVYgzZPBmQwRF3mzjSBkVkv7aEJEWs7SjGtSM9yWc8zqcRGfstYZ2tjYAYfsKoxRoZu",
  "key16": "5rAWbhzqhMTKvZ1rf1PHEwFJcjYx3si29WTWZEFuBuxmdHRshqkZXT3dbmNeaFuGiNpFrEXKwXDV2ZNPJCbrqzoj",
  "key17": "kaZTD2AwzRsxbJ1Pvv9uwF5c2SAh1ie9VV8bJH4xEpDDtobKzCtwEzRQvc7wJNqh1oNi1TETQJcuBN6RqxP8xDE",
  "key18": "3M464xMksHykwnTLAVyL5fTidBnjamYURQAmrthsjiaYCJEMXNzMMmq5QyLx8nBANqhXWw2Sere44B73cfDyaPNw",
  "key19": "VgLqJgG8Tn1hXwcMh2dWN2ocyy4iWZahxP5Aaqo4wU4vHQ2t3TuQeBgkVy6BvYhbQMoBuU4vx3SEPra4AKpckLr",
  "key20": "4wRhgfL6Tq18k4dSjWquhXEDPnUdfPhX5NPuAewubjnqxJ2HaqnpAwsz1ofE9EGQT9mq4WQH9yiZcdjZB9KdnNAa",
  "key21": "pMS4tK58qT6XxYMNbFZUoArZTP2CztWnbYJHqswXMEPHpqBjcYQTPErNQTa73sDmUDH3WKEbZtTeP22JLBNvNvF",
  "key22": "2jwQEP79GCFKxuAHDj7XYchcyoJj9VZEjHCS83acEpE9ibf4awbdzLdaKQpf2tj6VeFvVW4zF1QgihJqUM9Ujazg",
  "key23": "GKTE9WSFLoB2HQTqbksu4aiUE9DjpAH6sgreMk6RjCypGrTSa4kJJWVHvE3GobF1vCUdYFuxzrPdwfRzqEwufRE",
  "key24": "2hFwSRa4oaMP3Wqu8fZCgGSP6UW3jz1mHkpKRBAtuMMYqNQvf67sE5yA6wuJbxDuXsHfvPr8gti5DpBcBPtvxjTc",
  "key25": "5RiBccp2yJStz8KCK4Wd6mdn2u6LR5LSr5sC7FzoLGCvK4jkfPtCdTtzQCebHsWLjrfKTRr1i9yh4Nwbb8FZ5LUQ",
  "key26": "26arS3FZp1WCMTGLPUFkUScLKUiDLjxhJEjJYgR8WYSUGgxuz3gyxFbHPbCrvTSQAppMMVdJEr8XGDo991Y3A5HJ",
  "key27": "2wK9EGHvrLt3zjvtP2KWi4VgAL4PBprkL76YzHHm3wEjHPUWbJq2dM3U4d53z3LEL9WnaRGrXHAVMYtCrx7Tzow7",
  "key28": "f9L8SguzKP3niCFpctRqM7ssDVE4CaTDu94djtCfAg9TNK3KrpX3QqRppRuwnmkR9jDd5AfCYqSKcACWEpQchoP",
  "key29": "DRzwPKQCiGqwE5VnhwEapXQpjtP2n16kmr81NZwxQnAkUKBsUf12YqzZ4BxKxjWu12te2ANwZkgNB3298FYN4yJ",
  "key30": "3FLcTnmbTRCuGByueLU5jf6HahyxeqDejWixH2edePnwBCrpy1ZE6DCekfmYW1jaeZExuAeoEsoDymHypodSDWcH",
  "key31": "5112sZgB42jZkCfwkpujwjki4JXrjvtZQSX1DueFtBSJff96FSTLohQftNaVu7QA45qyuidKMi297av6MGH7DbDK",
  "key32": "3d1msSurwWk3oQxusUZRvUMchMUNTG1pYjQ62FKkznXKcxHULQejfu2mqwdZLUYYS8qGcZSTtQCmTwyv3FYHNJwP",
  "key33": "5T119B8ET3g9iUv777p8UvA2K4gEMJz38g3vxSrNzSq5ceEw7ZExTsiE4jFTVSd676mTckNHWQZYLnbJk73tMNnM",
  "key34": "3UqFWifeY36vcwgXj3YxhgF7YxU9ZcQwGpf37SRxD8dPV7m7DDUNTEp9uxXJtofp5AXByVGoNXqASYkL1bd1RWTq",
  "key35": "34oMoX6htFGhcdBde6xLpKoCbYCLURh7ePN2tahUTdeTiFbCSmZ4e5GmewmUbU8sEjgnVgnrD4MRCvApZMQgpqsz"
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
