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
    "27Yv9scGEUpaMzfqMe37dMgwqTCbUodQtUxUzjS1vy2ZQiQw1c5LLq3n2LUbP4k1428iB5TGsNNSdVFudKipgMML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CH4q3PwFH9RBVAPLruRjfEWtsyA7AVnkEtKWvg4Hsp9yj6g9Vh58ui1cLMKANjDPDeLMjyAtM5u8LZP9kARyg7f",
  "key1": "4fiZVJUMpMu48M9aYMfE5cUm6oiRVqXSuHxZKp46azEAV7jjHQoxNMy2T4UkA3AdYX81aKqyYKHhnntpbe9KpPdw",
  "key2": "2hpdi2789XMr3ZbuLmLZ4dKpvri56cThpzHA4WSnfXUvW38teSUGh4sWb3zrR6hAQXGpT4XeMbsUtUc5QjVG81nt",
  "key3": "cK5Rasn3PztZR18tXJa1LovPiR1Ws43NGUrfmV2R6GDPStUFd4xLX5ruCBy9BQg1sLh2rn3ud6pQQPWPqe7vbuq",
  "key4": "PzMvxLvNVDsKVuBrMhGf1LVtBgWzTxE6xsvNGe2WucaEfYgPYuge2Rq8KTEscNRc8jN4KQLQz2CrUEEazVp2Mig",
  "key5": "3dgFeH4tPtQ6oB3b5czGNE2hdcuXdiizZgT65wruhJzxTu76PPBCejyyNEmoxZYsnuEys8ZrnDayAPVpdEMqZsQi",
  "key6": "3z9fQrVonBn46y3BpNUgAuD91eTV7rnP34nSFDDytk5JRyztKvWkPzBvYLtcZ6ay3AdBmmjZ6K3XMg6hXE3U6EtV",
  "key7": "2MG6Vkjt6JwojHcQgWLVAvKU7wihD2ow4VjYRrFyqTzAg9Yxg2iLSFpZhH5AiQAQhrUSBwZXapHaTuHMrTLLSQWK",
  "key8": "5YqCH2hqP8GGtoMDZfQJxUxxemomYdqiwio3LySzVtfxY6iqiiytfsPKNLKtix1fe8JTSo88FQM4CrtZx3Y1YomN",
  "key9": "3VWvAMKP7NtFX5GaxMGPWDXgkJjv3X1DFTvnifkQMbjDGh86ESYf6ZU4r9fkB6mqHfz8CxerW1Szct4JJy4etAzQ",
  "key10": "2DoVfs4zj8pDg5Yy4NVsu3SPgwpCdxQhwqfYd3wLBXPmqafPhYwMXJDM4gmKWsCXW17hKJXkMpxQ5gEm5rskWKYi",
  "key11": "63wF7V1GpVFTJ8YYRdY7u5dpbxGNzmDU4USxuKq9Bm9Jv6s4TXxBoKJP1oVe8A1VPCrZqPieavGLUoXPTYcwbpQe",
  "key12": "4LYMvztxz4pAaAryEouZKvF7jcDDQe3pCBcTeoZJwD4Fa8AqEvsvro3KTtH33BdqxsumrrQE2sPdJnrLkGK6Brcn",
  "key13": "3ZcsfEsfiPGd5DzwKnJ8NSELDiWj6rGcubaZ7tAtACqqfg4YDxpquxxYvbcR7NzV3LB1MfV5gXV8FkTqDzyMtUnR",
  "key14": "2KgVpQ61VdVyZWhNKzoeNr6EtQRp6A8Jm83vq7qwoS7AsqzzaGDMB419Cws937L6R8Cj2c1THFLNSRGZvXnhjbeZ",
  "key15": "26ZoyXbzuRTCPqjguvi9Qde54UPZRzMh4RNqUmpF5S4Eb1k32kZwJ5bLsMaWxg82GBMPvEi9JLsKPyC5ginzQ17Z",
  "key16": "4UVzGmfRmfRgFwuhzsKR7eUH2eqYvSXmPt8vLpDzGEiNtncV77cADa781CLP5kwvGS6sKsMSBqWNGoowbrftKPHQ",
  "key17": "4Uusj91tdBj5H5LUK4ifFFyHJNajJCESQaxgmEM45TZuHe4SoigTSzgEyoGvMYK2axRDdR8dNQKN1YgYtdGQ3vqi",
  "key18": "2RN8wVVf5bSFagMEQrzeQRbE7wCq2fNW2qwDHEKpNrA2vWoDA5cSZnJ6C4sHrSd9feLjWYJDcDJ1RtoKw1jSt9mj",
  "key19": "3tWUpRZwtwnXxXwgnUQ751wkMi3SmqT4EaS2L5ffYoSUaQXt2THQSfZupDG7LsFMdHawY3M55oJv1eYBqyAjKxu9",
  "key20": "4rZi6HaV8T7SC6wroUNhoK2JFDYafJnM18FkdqakDTfeEwDVMZ94tRQi9ymU8qFuTSXVsrBHoLxDEkP9G52BQaQk",
  "key21": "em3uLXyLjizXvYpnd9G42JYuRB6ydgM5RsuKEvRZq5fpTAKp5RayPYK4G6gN8Du3FZPiPUwxTVPuZ16vZuFiX13",
  "key22": "2ij353UTuQdyBkTUbHFawrMgqyFG3FqteKkXNSuHjcWZEuU36EfGMkEYXPPJapuCiJ1mUuyE25PuThQpvHZfV1g5",
  "key23": "4JB1ToKyWReTXwkuLJMncyuLn7FUV686k272WjvPhqfNm7ZU7bF6eqC5XeiThTT1gYq2ppbpwEufAyLLNg2Wj6Uf",
  "key24": "fs4qWX1jyD58WGX4awnuTqmCUU7KHgvg2db164wkVCmANgtjnkmCnioTqmudx3bCrQHPR7SUJPykHNdRWY4Wez5",
  "key25": "2u8zEB934ow3PidPCArYMaW5KwQXQAK6h2wQ9ZU1EJh6iCxNTVosdbZSq8T48TtiE4nn5q5avKs85SyNCvD2sda5",
  "key26": "ski9oPP9a6BVJ5xTVdxm6HtkBiVXihkQfpxraTbAAz4VXM7vWpUux1yJTAesiXf9boyQj8mSE3qEvgb4YbvzgjQ",
  "key27": "4Kk9f7q9weFeomBT2vRFKSqjYqh2FARUurD1WFegG5k3c2CutKKiEKZmexuuA8tERCTq5aMDC3NoFus4r2faPeFi",
  "key28": "39UfAoU6vTXdDRp3uZxY5uGD72dq9cPctGxXzzY5METXvDiKHwFfbsdfprXgWwCcWwRacLguPrHrPyCUmGKLn1SU",
  "key29": "HugdG1YzQ3N2SyG1eET6A4m7Yam3ZfKVBFwinhGVQzGR7CYuj5hdAFPxPibyXyHWkVNH4i7oWyMUmJXJ2SSVHQA",
  "key30": "4NY8pJVo9zT7yGcY4nmqXHBagdq5PbSBTm3swpVrULScFVir18QEcoyxxo99djYigUv6HuKFj2j1K5GXUh3UHwwt",
  "key31": "5h69oTJF3ZKALcFpW9C9AdrdreS28AHbkWBvJVkZJ3abPAiKchVWwcf8ZqBLGGqLeDd7mNdysxFfcNwuXUQJusCs",
  "key32": "5RvYrziHuWaVxtgCPuqkW2xVH7EYkzsvHAmXTjcTu9ewQCbKWWZcQx7Et3i7PvF8uHA4CC7ExwxGhtUYPAWpff3Y",
  "key33": "jgVsfdGRwuTiMvvab8eC5SPDeTDgFuLNJ6ahcnRaqU5UNcSRb8cS5fDBT75dYNeeJkYCrrMggfY4TwDy2kd1gzm"
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
