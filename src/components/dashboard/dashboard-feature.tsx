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
    "5wZifnz9Rp4otuzTQcgE3gpdZqocp9oBf6pXGQLQjoS4VKAfMjzJWn7oWaFH9twkDBGdgAHGWbe6MvWL4DEyKrfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xdAJNPQ4eVSsmRiYK7fz3xrxPdQXvbGFkiaLZRBVJPjBAkRuhmeMuxNtU2GoHrdAKcZpPoiHtN6tdYmb7as2KYP",
  "key1": "UyvE6VdbLZuM3zkWrdQ7qVPpgQMRhot76BaQcYfGysJ9iBEtps9Sttha4er3eqaVLNVP6BoVPqoYZaCQsJ2YtCT",
  "key2": "3fGqs9RQy9GmpGp61A8SdyQDcZKFUrqyoVhhemAiDQ9qbbcPsGeuAUTH7EnFcmiHmHqs7LKHnaJrLv4ZbdW8CQeY",
  "key3": "4LvosFCKvWeaBsHvcF7vj53DEzbygCqM3J4EUUeNPoYHnhwkr8iaRbKno9MpSjr3br2zypYLZwxGRPK7FAZhUH1n",
  "key4": "YUfV7LKc8EUuKubG3a4G5JU9y8zki1hSTn9anpDEfaLGn1A1RAuydjgyrjT97FahJDpVpmrwhEpbR8ansWziyop",
  "key5": "4Kf71KM7q78USokGAKhTPtDZ86vZNEscxH1f3shiQ8PdQ4CYg4AzuU5vqTZjGC5PvFk5HmHQKDR68w2pDQEtfZ2M",
  "key6": "4UrUwXrYWE3wdCxnibQQ5Knsjuy4bfSsCrR3SMfp1dWBR5mVDCMxg1BTHvVhXXrvtDsiWFhGCq1DvpRg8UjL5u1G",
  "key7": "3qXpaJ9RPXrfy5gWwqDcjAQKsey5Q5hQDgrkFtgzTZzitLVBZS1mVXZSGrKiu4vh8UnmF8w5MHgZkyYHg4H1aDBt",
  "key8": "HTyx8EqxP28YEmjyN71PLejKMf1zMjn8o9yYPZDutRKbNaCxXfK7b1yry1PRF5AU41A9sPJY1PjfJzSGgiDDiKB",
  "key9": "35EEiSQKRNR98K7skPfDXrwt3GmPTd2PouwdWXEQi6EsmTH8bmUtsiT45jM11ed2V19DvGm8Np8QpQtQLAtSunH",
  "key10": "5rwDRCtNPzik6k255LtohNjfU8Wnm5oB68mfMJyeRgJ6W6PCvpxMemyi8CyCN838F3thAQGjfdyQtKmsnCRR1qTy",
  "key11": "47nyqiZAkvAo3HwaMvmk3ozAAKkNxUaes2MrmHZDG1QbxXvtVdGVUrzL8XsDUzinijyzrsqRUDgf2RUiJFNcCize",
  "key12": "4v1XZYoeiWSapwrpugqKyqaUUMb42K8JBX2vL7pHL9VUTKE8245mN6Yv48SvN4vNH8XMdkkpnW4hRvD4pbAemuPk",
  "key13": "5Daqeuu4RNh9czqErrNwiL4WDwVF2pu2tcJRSJor5BQ6d66yCyCDWHRkDeBZoKYKcfokCtoBX7Q3Pxj69mV29ez",
  "key14": "Ljj4Kkjbyx5DpLCpcpSwBsooqrDdkq23gw2htyJH2uGYHHjwKATSo45ebYLtL51mWhX9PZktDcN28EnNCok5ZGK",
  "key15": "5gB1ksEuR6WWaASHwy3yRPAxtYj7TtfqC1RP2HKgCBjZPZWSYRUDGyHtm9cf5amEQq5hQ15h5bcYVf7mhKvQnxC4",
  "key16": "3kZq33gkbBd9rR4JYrUvEsgJVR212PFz28BaKEnAif72pPG8mDDEkJk44PQCx1B5q3xtSLuhUpD6Gm6dHBebxSwA",
  "key17": "2dfnz9rMtWwCn6TqsfebsNP7ajkwduYio8EypNKDrhua4nGhyp85gj2YepSpYMi41JbZTxK4wsz5CMUmh3JdFnEv",
  "key18": "32aALdXBVUT5zEK7mtNiCkToz3ypEcrNadiseEY1Cbv31ZT64RDMA64kb76qsKXxZXf75f5XfE6UFYvKovQz854c",
  "key19": "5nyQLw4ELLozgK3FQbMz9SfiW9GbKK2pR7X7zD5SkBTkqYSesyhNmzaj1gzLufiTavvZsMiUD7nCBvWReQyJoHTb",
  "key20": "4nZCgKVS2eRUCaAEnWPeRKRWFUP6f9aFpUEUDrpn9xg4vwPWSFKxjBMcXy3BgmPNBVxp3UYuEaSKf5grrLeib4Mp",
  "key21": "63vKgHoyr32z7P9hTJxkEDZ4TaNXcTd2x2UmEFvyyWXpwg1escRN5ZxbFexAfq2bvE1n2AeUSiuhaP2m731UhKNC",
  "key22": "nj6tbanBdLQYEjpj8xuer7GhBDC5keDuxZ7wHY7HXh7Nr1PnLwPcPK8LKk7mXasF7Zn2MiqwXP3XmPP1CjarU9B",
  "key23": "mw1kmFHmrEhGjPFqt4WELvDbajvh5CwSfuWT5e53emhBnjj2ANkXbPaqeNJDDHSfhwBT6xj3uGDjfpCehzwZH5W",
  "key24": "5P6hH9Sd14ojvvFEkK4vKUHUkybCvPh69LyS1tnQH3SH7bVKLC9nAamKuaWmxdDvWpTCME3cYR9d4FZLLw7dVxsj",
  "key25": "2x6zeeV66bwW3jzQY5FeX675C8ZNoKYC5673bn1waK2rG21kgEzRVzy2Mhchc4hFuf461mE3w4z42SAwvLtgohPV",
  "key26": "4RJ86DzArLX7kc9CoLJoVqPHg2PJZnagWU7Ki9S5RzEAc6Ak2wwp8W9RtFcyYTK1nu2fVEAyaNjAri7zmeJFPAdY",
  "key27": "64BhpJcntRXe6CtM8jLCMGJqjjJLp5tuhKb1uthRxrQ8Zt7fVEio4GWwuPKNtgttJ3KHKneckqFdA3veuhG2hff2",
  "key28": "5JDw68wtYxyq8PBcYQkJTPPePzCMCXsbZFqYfzjtEioKVCjZa1kMaapFLK8so6CQn75XZpyzv5GsUs7VrbB8YAr8",
  "key29": "3Ryx29ApASBKX15vhuBstiHbBmyy5LWEFikt3ycgG9bQVoSjn24A3WPe7tsicGMBL6zxNSwwErPXGCVhc98ahiyo",
  "key30": "LScRFwQPK7rJmJFsK749YA9YbwW7tWyRnWBX19hrctDEf5yqQLSpRWxzv8s6CH8U37hAKZPTac2qfFfJV9xx4HE",
  "key31": "2BS7sniPRkF2Vc3wy6nFvsvK9CiM3DQWUZZanedxQ6rdaAkSLAWYq8Xmm7cBgmibfdWaSXT5yV9CxpWZveW5krsT",
  "key32": "2Ak7gRoRv3SZ5FUzyDYuC2e5JStNVuHf8rE5y2Bei42vFK9jqRYGyREnRSEaBk2ATX1Wcy5rGH3XZa3KgEgRcggM",
  "key33": "3VqjAuSTSvdCAJurpJa65z9SBLr88vvtngGjSJzuzK8MNg1pPxZdQGFN2NbKAGRPWQp188E67VvAVjKQjL1JzWJ9",
  "key34": "4fLXTJbRqdZRx4bzrYFusdrxHNENfZ1k5EQ6SjeEJfZcxfyMgJuwWsh5TDaXBX9N1ApQ3qVSVWj8uDL819A35GwD",
  "key35": "43T9XRdbXwR9qBsopddX4SftkNzkyA3tTbq8eYJ15fXiNAWNUJXzcJrG94QV6MaaqepdgztqJPtbRCQiSydfVgZS",
  "key36": "4xLhSboHxhRXqRwH5DmXWYJgBESRJ5BkBwSDEwjqS9jYeoaBFRqsh2QP3oT7zDSxehUNMhWLCeZS9dNRiPJRv9Ca",
  "key37": "2VcbEHLYVfAaaauVVbpXmM4iAN5zXLrWvAJGM1ugBeXjeqdzNjT6fFJhwxbR4TjkNV8FzFqa9NEXyhWnoNVywZbQ"
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
