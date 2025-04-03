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
    "vo1fANxe9EHvQiQShCVfxWMGq1MN98rDhpCoD3fxWBsoQ1f6osw1Mx6c8LA7QZvfCFeMoEfbzP2muZn4dYKB6bJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ChMC87Dv2WazBJMoG5sjCahT2xm3xX89oRxd3JuYDxEcCS9ehqFCpkj5Wdpv57TzHLJRoPPeKikwnmxVL81Qu65",
  "key1": "65k7hJSrFBwbMStiK7FkUhNf9b97WcBmaQJQjhLYuj957fSgY6fPCuCPRLLjR99qdVzTvTsDyrTv4SMhQeDUyTXe",
  "key2": "5N7zaGzCs6b1fgkBjrmGGdD2c1NJrZCrzNjDuWMkmd7FarEfKjvgn8iGT9Th6HGBgHq2ibCWCWZKzRLnp6XZ3uWD",
  "key3": "5P7WdYqsdbzHXhoecivte8FjCxN37moW8hS8PxujM8Pc5CumJJLFSuKMPzeQCs5rxtT8ehRQznCs4JKHvcvyMuJr",
  "key4": "3Zu9kkrDznVk4twSuDss9Men4QKvKqpvnVtTLRThESc8xtmm8Ctbo77ZE77QRRwELEEkh6R59zajeJ2VMhwq5BN5",
  "key5": "hTroU4byfSTgmD7WqVk6Si44fCseFrP29miKPKYCeBVKfbJEN6gtwJqZbA6AG9zqQV8KLAoLCuvwoD5SuRXvEME",
  "key6": "3yVu7oe3f8Z6DeRvmPAHzwHb5AZD42Yyx8QndEegDkXGjuzLAT4Zok7gyWaZKWu76ijxqegyuQn1B1Jsx4CmjdZb",
  "key7": "5UH8Kf5esKjr2dnSD5iE9n4R4FKmVMnKSAximaVTrvWEnprwnPqmHRdKs2i2Cu7hZQZJ3o8iLiVNip8LxV3BBvky",
  "key8": "5km7YkGJprWzcLuHzpjeJVy1Y9mfcsjX2f24DvvCsRD5tJo9nqKQuBiF6FmeoH61RkAsuq4x84ZSPySDT8rM4mNV",
  "key9": "2cAQFJXYewkAi8BrqMRA78TP8H2Q31oUBuaVpyXAtZK9SKHtBys5saqjt8MEKQJDyQPdoTfLY99ZM7xpTQ1Cmdq9",
  "key10": "37ns6WdD5v5o1FDgusriDhJmTEmubq7psYpopukjfEwQaQVr9ZVtnL1SQxHvzP9awZ5Xg6sEYRBxwPoXSQfcenVL",
  "key11": "4Fq9MfstgpW1TZx9HPkF4ErhjthUsHhS5dwiopK6yhEytiYToMkUcSTeEa5WHN2pCwQpqCBx2eXFA9F9nn5rZ5GZ",
  "key12": "2TMriZ6iGvbRcbnr8qLi1mPvgq3TKg4At7ti4CX9unSm9U2YVnfP6muQAQDU9s2PHN7ARZLhkXrpFMg8PRDpTZrR",
  "key13": "5ciA7kHfQ9pJxBWyZX4iLAEj9FDDRsRznSx7Mghmk9d4yW7ruEbFeTPWL3yFuiqWCTAMroLjzL44Q7xYPoWr1inB",
  "key14": "zubYjgUHhfWuyL8CUyKnQ6KZTMcPwHenTKPMzXR3SyuVkZWCzw6oWFCSLjb72ihHMGFSjrwjPxwcazvkMGAc6nx",
  "key15": "61NFnznN88ZdMaBpbvaLp1PXetM2NURMuxqxKLu5ojjTk7mo1qb4cZSYU9sLuWwCrb6vz5AH8vCJBQdd63JqXyXz",
  "key16": "5VwWbEWxeAvwvqQrU3PSRiyVzpq33gQsYLyJGmiiHiPrhcPZHnn4rJ43QorrcyFWsJrv6XarKi6NLHPytQ89hFLW",
  "key17": "4HwshHVxYBNZEWuo92tNdFXkxmAqnv1b4oN7duWeApb2wvqDAKDpWGK2QkQec7mDjoRUzxBJqzKFi1UkWU3pu1ic",
  "key18": "64NZCYC31NwLZZjZZFVwHrDs8uV4s86mTESHYaWuAz7TFdAYpyVuPpU5tbndwPiYXdL467tHvdnKgEAriQxtvXCq",
  "key19": "5YoZwD4j7JWDeuPfdc4jRHgrvKhUqv7RAEfGw7PmTDhfbZniU5shpKgBjNaReE8jksksn8SUgoXwPBNeWhMjEdUY",
  "key20": "4CtxLbRbQYmQr2dqUxRmJmd7TsyLU1XoQNxy4CfWZLwFptZY3fGbFFHg3DybQGgSLTbHD2WUpKHDa2DkDcpQxk2c",
  "key21": "Fb7MNspYQfCJ8VXWEgR1ZxdPdwxF72rgeEqvibUwqJVdzHJqxvLMSrXcza5ak8LnAkrgzDkzjK3d2eeLJoQUqj3",
  "key22": "3K12V3BQkuTor1dyyaLXtYy35pyBU7CVvSxkC5T7oMk7JrHmjKzmVXb7MvEvJM82Y4ea19KJ7pVK2xjuN6bYTjut",
  "key23": "5EuWXTNrMKwBM5YyrWe2xbhiZVd6gX4g3DhP4wMUf7eBLfg3H67npZpV3TC3d3fVWNyR2iVscUFfVYsQJcnxbJM7",
  "key24": "3ZeRDphuRvUJRC17xNLscvAjoZxq9jR6L2M5g9MhgQBCxPNNhzzpxM9y6SKJTyEqSZkXc8wcJPKDxUEtH6jJaNbN",
  "key25": "5Gu11jj638uw2L5FKyMo4w4srUEs7TMzdaMghtTs4BTNRep1BGTqs2K5pSG5okAsbxrjkcYt4PHgw5SrieUxPtcQ",
  "key26": "2Mh6enA4XJPxAxXif1gNFHrYvzaEph9t1sSVu6qbchHW39MNtHcpftkaQcDFxuPcQhZquNDDKNi5RqSLqkQJPdVz",
  "key27": "2S9WyGPWVLmrtBhvWk1qoHPNvtEY8U9fhYA926pWaTiviAQyztoKBLBSL3Hu8Wm4qYFmrDRnpmmp1eMZPT857RbM",
  "key28": "5EiLN7X6VbwQdfzdzWYX8Q9aEG1zC5JR6yCnCntzVP8TEqNEtJSTSC9ZysBjVJS91tRbhPRc1bPHcoWhTBeAbtTe",
  "key29": "ULg368HnJ8XncPY47KAW3S574KGnQDvfA6dNqfeuuUPhPyb5mCoJ1cQyueeJk8Fuh62j8oEHqS5xjzxa8J3dG4G",
  "key30": "9xCzs1uSQBCcp6D1Tkvr9ETKNbZMDM5EJ61B6jHBiEUsDVS5GnpNtRvRUd3Q4gXJ5hEy95AtNW9bze3hDRXLKY4",
  "key31": "RBmfMNhNxccCu2ff5zAUUX1hzn9Up3SLukrYuwLfi77ZJiQkn7osLCvjH4BbRXW5YhMZcuvSw78s3msNxhJSnhY",
  "key32": "2d59MynBiNsS5Do6S6uKdWHu6ZLvBVV63f8JTj1QzkihAVWmAsNfRKoz5GeHxKxDSaUQ9J5DDBGHFSUupHySBfKv",
  "key33": "52U7Xd5bZRxcpNbeqjiayBx9nKFdAoDkJftrGCYistyje5e48H85CfnG7QqPCnSmwtCYHANdVMUesfhKUjQwLrEp",
  "key34": "5c4bGzxbGS1EhrcQ2vn1Jzifi4wYTKmjwBWVfEWU428XM4YY6ysCdbsbt2vuiGdFeog7b8Yq6zXQTW3sj5phiDqB",
  "key35": "5ws5qKuWAS3ywqbTQdiGxVJE8PHFjmgbxShMaJuSFxoQYmKSPqy9AhiUsUsztyjEwDRRdJmoCcJPnupo7pz9oGnP",
  "key36": "3LbRuspBhKA9TiAD6Ses4JMS9oh8Yntok3dNhs9EjHCb6D6pKcAZTDriHv68fFkZeGf82qcKi8AGZg6r5aeNS1gy",
  "key37": "Kux4rhCdkVbDtvpmoSvRjy8UZpQyW1ykmzoe7TDsetfDaiG5Vs74ttyRorptsKKv9bY5kKkCx2ZLurpQKDT9Bio",
  "key38": "4fjZk31x3fCowXJHfApUDxwrPVi77FGnAZhZQi95ZrCZ7K1Y4RnXCZAwjRQ3tUmE4m2TR99jBifYa8K5NaLGuwqd",
  "key39": "55cXXA7mmVmdw4VVNNe2V4ELFGn351pjpQ4Am1iEnoMEda5vJrAoAJExnipofCMm8tk3xpsmacE9sM7DS1k9cdD5",
  "key40": "3mf35HiuBdbh8BWUDRp7ZpKz8mT8EgLG6zXsv9TPokrKhWWRq1cPrU9jPPZqA7AkDHo2T53JYSkjFjAj2hm39EpE",
  "key41": "3mVf3rAT4129Bi9kB8iAVHvDfJBgDGubCyqFY6bhXdUmxnimZtCY1HYeNetnAvc1mMBgMjtZdVms9pWfBrbV86ii",
  "key42": "5pnAq5vfdaVhWeY5TNtWw3xff2VHzBtPbJC6Judx5gRT11TA1TAKogKthhcYQKbdDhFNrkD5KFDxCpnfhFafACqT",
  "key43": "3w7w2s4wLxPRgpsDypT13MNiJv8f9s1zyssimnDRbCyEvSgJyGG98sDcsr62wSqJ6JVUAQSNVJ9VGHp3th5Yn1v8",
  "key44": "3rdfraPdiXQdWYGmBYtECszaPMSLQwE3MzGDydq8833dvtFMFamKg5JE6VJvZoWBQnM5BqmhRnWgJ2UaZpz8RfEE"
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
