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
    "p3nZAKUPufzykJvTmD8n2ouZ74iiMePVeKS53tikAi6AtQtA8RTfuHSeWwhjCNTJMuQXmqu2ChNbWztbgquKNBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GABWZrY1fBdviCpxGjsEcMccjmUSXupdDwywZ1i7qJctzxrem21TJVSUuppmQL1CAUAuGdEjFLCnDrfVHZPaZHT",
  "key1": "43QJVR3Hvz82CSCSQcvdHWrsTqrp1o47HcZxNzzdYSjv1hvKCN1xrVR2sbnbeBbsrbQGdnrN4zTQ2R1KKujZDUYs",
  "key2": "4wmWc6oxM1TVmeDaohBzuxvd6TBbqdUC1eYEdSqbXULtEeB3asE434XRKBgJ4G9ykVBAFAgBS5maenvtDMVkq9V1",
  "key3": "3r5MaUiBMycGrRagbKBuotYhDKeVydKA6ZEhEXZKZheo4HiHvbaTvs9YmQh5NyC4LJnfCY5Z5oseNvi3eAaSbHFD",
  "key4": "6ai44soYPJDnr3iLSsZWKDJSzXozqK97PD9mHgvCG6cT43uqKC8eyWJ1YqnBF6jHfjhozvKAVhGrvZYZz9QxDN1",
  "key5": "53aY4t8pLXvQWG57pwBJWY3R8jp9VScxj1eB8rLuYeiaKB1XMwAcbvT5uFzXBx8ypMiiJty7kJPDmD2ggoDdfNxo",
  "key6": "5xxAQp5yV2APzvTsBtniqHTcjc5xeGSU17dnj8bGHykzh8VcW8F1rdUjGtqZ93eCuuHtaDfxDnqoqT9HZ8enhcWd",
  "key7": "2NWtBBCeWAyFL3VYEkWKHGVmVVCMm5T7rBgnkt4JhBTjqoHvm9TTQEqc2NdLFNg266iDwkJCLLutY5fxNN6bbBCq",
  "key8": "p5xWWf6FJLcaMLUFg5UXVYYiiJZMifFPiZt1yWcyFo4p3YVThBKMB7vqe1tsM2Qn8XxinDZLAYqA8PRUeYXV9DM",
  "key9": "QaSKcovNDgs7WV9iPk5D5sJ1UjbsVQkgv4bqAWWBY2fkFHYCqTktAxnFYqSKJbt44B9h7hj2eUHQ4xq53HVibdz",
  "key10": "3QUeM7BS5bEd798ZeHu8shLDaBF6fY1BYBfpuqax1vxhpVuVFycsjvxyZe7d7G1oBoxhSYS9R2hY1ARh3nspYQTF",
  "key11": "4sMkpgte24mMa4rye135W3qzmDjR7Xqq2LEmjNirZgjaGc7TNU4oWTHqKZPLJuoeX187Jd1UaczPtYwJHyeVE5LT",
  "key12": "5QjNGwVEMw83xGUGzNqKimAgVKZLSjLjGG4yJn36w5crb7BwjoWyt9Bzon7iKg3fhgrbbAUovC6eiQxwtxo6amip",
  "key13": "4u3BfFSU8uHepQo8RGVpbgRSmWeMsFtzNJYEfPKeySzsUNTACT4MG7mirzx5epju88vwfe5oRESEgwLLyKwaR8Ej",
  "key14": "hkYRJPGjn62nQ2jCAAe8ZAZj3XxMkYtWWNK1NDxcYcKMrBWXDLQV1fu2RDoCaPy4AeyVT6d6EH5XJjxJ7w2JKB3",
  "key15": "WZdqt2LV98Xn9aidLPqKdmZ3Tv6RcxpXL6QQTAbJvTaygkRjV7LGA76xsJiEKi2TLoLfMv8q1WFU6vpcsmnCRxj",
  "key16": "36WZBTY6Zvp31WUoXMtYyQXj4NoXKNWYQUWAhonsVwncK2QTDerXepNxsQgdeoMNaGfdfssepkEobMHdZuWXkGRb",
  "key17": "wrPzJMto2xdfFwo5CpXs5xckJcUN5xM79CzRT1juhqN8c6i3rbWxzf5jFvdkidkgvnaAtuyzwZxu72Q6tb77ZN3",
  "key18": "3TG4gDuQRDdfcvQoXK6m5iGN93S5jsujyev1RpHiQAPZJ1eWBuxnzamqoeX6SjSVsebQ57YYyf2a6qXHFrxvpkMA",
  "key19": "D4esATQ2K7nTfmkfgJ8vGRS6LkfSzoaSRqxuyvTttP2y4zHKRjyVnhaRQ4iiAhWyMRzvcMC3sKAgABfpQqr3xgg",
  "key20": "2KE5L6Xa5gaDB39CMYyX7FRaPKHvai3FA8TSFSqAautCjoXpovpUEFQFyhA9Q1JjS1yQvjJHgYPkra9NJ4XLbCgq",
  "key21": "5XUZrxsX8sv5epmx9VufYcw2XT7qZZ4kFvfV57Kq5LvzjDPAwBruhLKTvPqQmhAjYTpDZrpUNxSC9FjzwCLyReYx",
  "key22": "2CgYBnQxHVVbVWB69pXDdUMZTvHEu2jTyo32fnVpkBUE4gXxi4Jr1dZ1fcwjHmpAjbeXHzfH2EYhF3t4ZmzUHFSx",
  "key23": "49LBHLsmSxAiNrdz3M6XKxUvW5sLsGDZDmnLdniLHDMMfHELB3ny8kqhf14V6mwM1P9F3qWGGuJSE2Q1GWHc2j5W",
  "key24": "3E7hvXmWCa8pabZUgwR3nyPJciHdTaHgdqUXFjbgKd2QhwfqY5pB4iKoW1iPG25wSTeNWtxtYgyQBAdR3dcQZVcS",
  "key25": "j5XxdFoiFB25tJE9DVPqRcenEL5pZLLf6RmuAsHtQbwDtHoH7VPcmY8C9mi8Mmdwm5W68uNxcXGFUeNtsXTHz2e",
  "key26": "4rFmyeftu872wKUAUrW2NPcFtku25q8xCEKS6skg9qbyUeGHb4gQoxpzqATxvsCbo49WSYC6TwmSVHSvUk4bbaiL",
  "key27": "2ba4uzVT4nLdegL1iWq3VNkuRyAZKcr3mMAG7JR6C7Nc2pSEW35mCtvrKgxAqBfFdvUMoxcCvxSuABH2yVxwHCwZ",
  "key28": "xLRMu435jCdsv3PEPs3phGAXD4ABssHqERkGNrMjRVh2LFDX7Szdf8DGaH7aGe2YZphnzHCBxx1Be1d4a9LX9Wg",
  "key29": "3eiadYV9xE8pmGGUP8oyUKgSj6JsNFFEnodGQECfho1YZ6cR2JvhzrHHY1puVF4gsRQAm8aS431ZCJCxgzSWcqX2",
  "key30": "3nJNtk5BvAWBjqf6fXeXLVvL5owQ8PoSUFgEyZJAgPiLC3M82jpzUv7dWcmMRP62Xd3yLavR9fsRuAb79wQtSUvu",
  "key31": "3YzNm4fa7icQh4pC7vmQYJSh34EfwEgpU5MdaogFF5oFkEtCu1rXAUmQsvJPTYh2FA3jgLFqUfkYi7hUVGvepFcv",
  "key32": "3B1q2PGejs1sCcpyLNZpT6cRzDhioR3dwAMBKK76vMwov5KBzrBCat3HnZwSGDv1rVYZEyoaCCFNCavPLadKNDak",
  "key33": "2bDQFK4JH4yw8zqGQkShTNDjY2qzzcZWPVdj9SEHefPVdSCzpBqMA7Af7PVy4NMRNgCKDYiuA1kmgonLzjibs6aP",
  "key34": "5ChBP5XdijjMk5XeHXhFr672u77CsoVRFzZaEVvDdUwRU4z4v5DUbh9KEN3SezTQhghZHGzCUWA7MXeNbkWmpWt8",
  "key35": "4F7T53VpggqbmGkRHp7ggc1najDb13Wa5VDyxoDy5ARhsC9tMqWf1NVd1dLg9uCErindMtc9zeBAMqsvERK9QbUs",
  "key36": "5d9izvXbMG5rUvHHajg3LJuR8wCqPrWkMrrqUBsTDupP4JJBVfbJaS115neAJr7u2cFCGpyTNyE4gvacCxq1t7gS",
  "key37": "3ZJUmtPLSmXHhcTVqau3kEVRp67QRx2qXziYU9WiuDUorqALz7LdAGKqRrbPxPqMVXjmLUtzWnPubWgDgwyhbJWH",
  "key38": "b17RNZhUQYHPJtuGDZY5LXc4xn6DwQfFHAWUbqRj9fN46BMr1C48SNVvibkFZDSNFm7VJUbbduP5hK9DQiyZDUZ",
  "key39": "4Ba8MXh2ASPCpRJEdDxgxtuBWNYHcxMf1WZGGC79R4gVHskzfQb7fJzUGRgFAVb2bZ1SHEfCeCLeDcBWAs5rQre7",
  "key40": "2ZSQjFTZNfWadw5AHH4um39vVsQX58EocmruBggxCFcMec4CJZYD9eRmYn5QPoyF6wVjucBcKZYau67QR8wZinep",
  "key41": "4PtMUmURt2qtcAf1ZQZnQdw6A3vSPJNQu2WNDcFo68Bq9bWU8vdeQSysqdB5TXx7YVGXTjC8rmqpcZSXpnfu2zZN",
  "key42": "4zNyRdDEEUXoxgraQaHPh55NfJh3eYTvTn5TCYuoaQ67bzfJqtDKVfN8HsShtoYfFAigD4JGMN6uXWukRrcsazn2"
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
