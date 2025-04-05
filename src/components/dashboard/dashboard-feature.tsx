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
    "2uYcajYmRjDB8wSWBbFdVfEvVUFUfXx92dGPcASdWmXmGjouLzTQwDREA4zsgmPEGLKV3L8Vk4cN5QnRpfZF4gnw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27zfxNMxFHDXDFnDpRussqFtYoEBMHE3Ko7updMwGhvfPGkocHT3a6mrjcvmiQ9wiXwCCgcB6vAyWe6szWbRy2iC",
  "key1": "3FCa2qALnT64Mw8qV2ppDWr6xzw7qNK294LnG11xM1SJPGs9bDwapkAC5H7zh6aEsSybVt5fGZUFLYqoUEMoqZHe",
  "key2": "53RSW7SkvCXDpoBW8XKJtZjdU6Qitg5dNQ4zsJV3XJwxmwtQD8Zkoz3gUV2cC5BgK4y9xJRcSqNk5P5FEPoAYTnw",
  "key3": "35XJqNw3LhTrx6Szdgham88bfE5xXAxJDxBSimhwMH1paH5UqVJfj3S1NuJR9eQA6cpU7aeAhSXJs89KxWp2JvwR",
  "key4": "63zUSWogB9P1VEsBAzVP3M3afBbFUP9TjiXecoypkjKEH7apsLssfa8y8RAHkR3W7m9PM8XdScmC3hGE4QHT9nbk",
  "key5": "2oLWUmCHDzLtMiYLPQD3AW8pP6iU1smZzYoMrQxhdncyQFtARTsfM3C3pJ9SoMc6j2qkMvN4taMCdoa5jAHSGgeZ",
  "key6": "2Pj1JiYnFot1PxitsoE4FPfxoB5Spv37vJmi9mKgsd7iHmWYypqVz37HKuGrCkej5HwzxMUprzufjeeJKKSt6trb",
  "key7": "5vtRiquwVH6e7n8gLkoqGSCqNHFtYpQhNq85ivsLrRqUhcLPTPcCVLvt4QXT4vzFqWFBeKrEeYzjupxV7AmFhWFf",
  "key8": "idpaghdPB9izj3czavdHQ4bAJFyqfNCoYqycq1ib6EvgrVqez6YR2LkoUeYxRtpYaag1gZk8frwZCm8K8HUzCUx",
  "key9": "3953oHHG8SXs1VCSFLojcD33JceWyxNgNbFSEnJ4YBkL1UDawWXJZUEZxhRF2DRNBStLodvmFPzsGkJ6SS7REz67",
  "key10": "2FerQ9Yq2hz8iJyjLLqFKVok447pzhVP1Tn5HAawYpn8aetwi3TWSQCHUNEixGEsh18XKA2Dkit65LARHG9bJBwK",
  "key11": "4Y5qyzNXDyw6e3JVjZjoBGjZeromEV6uFsqbumHXBVmmst1qGYaw88d6wfThHcKPgiyBAw1kBKFQjrhmLyspUGXk",
  "key12": "cyEFcBxMqkF8GANmyAs3tiwLGEBeiRUZKyhnre4yx2sgNQT9apenwPyVsRfdzj9oyLAq4afgekcoAAT73MjzG24",
  "key13": "3oV5vf1x2HxBytLoUkNbz7Ua4T1DLtjBtXEeG8WYuU1AyjubMzswGUVNXhz231QCnXBFJYveGRfwHRcmKzqjBt9E",
  "key14": "5gCGh6AK7bg7SzwCEfA2v3tnqTCvJhwySgSuHZgQPBq6y1DTWwHrY6Ft6d6rjCeG4CBs2coe2rkNnEM38zf4edhH",
  "key15": "41b7dFdV4BXHtuLTrAkG4dSLVEvJGZShHXMJYucPvFEpYmyvMtUpKGZZSBuVHJTtg3RVz62U1wY71U3Fpjo7vJa9",
  "key16": "3VvdV5d3CqJjbgzC4sxMKjGArwFQDPo7SYs45cKGAZGz8uTZMbsftuKjorisNBmTyaCxyAtD1jmhPTaRtRiZ2cxh",
  "key17": "4svWetbwTwwd1tUs41goLHEMj4w3PjYTuWuEHd93ozWrsfM2UhQWuiaPncuP3bNSTUAHy9iVKeo1HutmUbFr246P",
  "key18": "VgyfMx6uRhqLxd9DfrapNxdmUno5CXRAcewaxRMYos7TPabaRt2U9tThcn1cejukcV48oiDKbUg4is8dE2aqCh9",
  "key19": "2xWHvFEW56h883ekLqSUgwwcNTwdDq3rvYkGZsut1nz6BjpcBupCDGBBfxp9bZMktqPw8aeBVYKuFAm9m45xMQtN",
  "key20": "66zJChaR4sYrz977KmYRYNzqqh4jRpG62arZyaZs9ZkF1uGRvrkk1XMZaSpovpwMGWrmQTJizjgQjuAFhyg3jD5h",
  "key21": "3YpQKZL1BS3PrC7v4D4KpbtHSGsfKwGB86uQ2h496qsMfWs5xSmTycA8f4NGY6WqGnhXsMAiBdumVEUk5rkQpGDw",
  "key22": "4qdFgSi3LvFzFWk7GXRcH794eti4yD7VUReUQui4JtLh4y7qWVrVPp4HXRaq2LULJyfjJtZaJB4spRNgZCHDy28R",
  "key23": "5aeSgNHiz1GiDCDsHfHpCN5AnZRmx9yHRuEWadghqjjReiKAz387dgCauUiBgbGqXBYLWSdgJKFqD6eT913yqPyM",
  "key24": "56YthiwPfwzqeupwxKKgksip7SngcWAq376LxN5M9HZCVjmXLUThJ7TiH7WhiZSos65GGpvX7Ej98bUikuGhA9CD",
  "key25": "BgFxK4ZTKZqnmhSkTt3kdELD9Tcc69YHqtAAu4zF9sMbejm31sFACzPS5eyL3P5ve1Mm6ruopexrv5xPw1B7VKh",
  "key26": "5dRVMgy7U1E5oEWzuSUfJ636WRbd89w1eRagF68rpxFosjmasyHtpJhMDbCVHafvz7nbd6p2k8oVFrYHbGaEVS7D",
  "key27": "51watgUSPqLyhALt1Kx8J12erjuKafzHWpCwnYGB2AwiSvxat4sLScpGKntKqjYUo1CcL7qs1byxz7noCU84Jk3k",
  "key28": "2rmGdsBneTMdSe1UrkwtMkUwd3XeYk78QRpYjtqf555MTp8sM8UfEPhy9X7qwbpxH9svne2dib4f5QNhRMdjqiQk",
  "key29": "5U8VWrXxPv7JhWCsryRnLZhHt3LuYp2rPrhRC6nsZAx5K9kAMXzWxApQZYAwYPc5NamUn2fv4R9JDSTHEpjAiwxG",
  "key30": "2mT9ghqjuAE1BQGtHLMhGYMG5Q255WexhCwhQpUJF3MPVuj6RLygdhWFpJSJUQ2MZErQdwHT3FyFPiAp5aRfETo2",
  "key31": "5JSVAT9wqhRGtbtjNtVC9Yqtwmjv4GF2L2NcnV35Y62e8Z8oQhhV1bVHbG5qQBBcjBQq5sw4AecfRwZPFPJ6R2zw",
  "key32": "2wH2eN469XY1okTrAfZHcSjJE3f3nhfhkFGaBcaZYK7EyVL5v9rcqkErSt1TzYTZ6RFBaAxBW1bjh1K4wTS9Rxiv",
  "key33": "5ZfDvFZ17NbFXAZCdPbAdMiAZsMQgY5VFMXoUUTp1YvDx9NCpwf2ozcv1xLyhdRNbytupCM1CcQdzVBnpTh3qgns"
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
