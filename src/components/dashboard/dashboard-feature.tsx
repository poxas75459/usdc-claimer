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
    "4pjobcKo17CU7JAYjPQcstHTKy7W6JeFLeNVE244ZvMVE2ixDR8Atb5a8Jv5bH149rpptZRURzJLbey7EjPrsw6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gF7Jufv4z4QNbDrfcgDJ3EQep2xpKUyCULwKwG7Ypns25Msxdx5hyxcojJF3aVxKekP5BqDDBgAxCt2mUs36ULG",
  "key1": "4hDeqeyxNvTn32ZYQnXTeTv9DXt7hBbivWd8hhnj7vvKmU6VRykMdGFNKouCK2FJCwW3Jpqqn9gzwwvcrJgG5wiv",
  "key2": "4KogrSce6ej2JdpBAYHnDGGm5z3Ep23j9fxHWrSnHdH9oGAnP32Gg4xFoAyd2qb6wr42Mvb7JcvpfTdHzcrZEVV6",
  "key3": "5gJEKC8CBihBVcELd7J837Ecm7DXbQJeG3StHKnCJ3QfJbtCuih9nVNqdDLU6XapKq8Jp3dNTkMxM5Uhg1nHYKwv",
  "key4": "ZZwX4CXjaBwfgCmjqfguskhfL419fizSQSfCsZ2xfDZu4AnDUNkicYQu5EAQMPxsryABcKAq5X3wEkCiRassVnx",
  "key5": "5G3JkJaTfHtQqGazgn2VHBFFoGY8543F71NXhNpBKFvxmg9PLvCCA8r8C5MUwzdQhqHR8YELFrHuZwsrAxySLgBt",
  "key6": "3gy9wJdjjte5xyNQKXMGAsGvNA6zWfwTaZJJ58fQa1p11scgtBHVya18WQAPn2kqcUjZGb56V3DZdSZVzTkKxeSX",
  "key7": "gLq53Tz3iF1tzMuUNZ25zUGCMZ7RWwQqgpFQxz1a4espVNJWjvTEtnbT2ywWGmcMWX7aAqwgH3CSh6xpYXrsrx1",
  "key8": "LkbdsBzVFbZ4ZwM7JpGPjVrwsHUv8rHtrYWkACkcvtMfgkAvoG7sWSH1LWoTgxmjVeXU3rvVohys2EtymFLyGaV",
  "key9": "2VnFYcrCHGK9ewk8xxJek4TcYmwRhNhAR6ycMAaZRLKkmd5fMRZMfHfpJ8WKGAaWVSrEBcTBTusPPpZ3ifS1f6NA",
  "key10": "4wGNx9pEuSpzyz4BZGDFspoW3y8wMpufBz6HkoaRetLXMqtfvaPbgYH44KwuXWnSWGo6kWkbxpnpkhoxq76cGXNR",
  "key11": "fNY7VWN1H8U444np76C5f4TqTLKiCzhuxav3Z2rPypGVoE6jkzX2hBgPhn2DtrZ27hRVgVPrqW6E5W7Phi3GSm7",
  "key12": "21NWqVMGZJTQqrwD4oNWGTKiriz5MwYF6uN8KnCGW6eNzRwUNLddhxKXgVLxCQ1ZsFfH8WdcgDhGK7L741x4uHBR",
  "key13": "4fsvQoHcUD7LY7QaahTC13xgeAQbVJVmUX7MRzViB2PTxL6SpBiZ1w3mjGpgRvq9ip5CpqCqzDDZzCbVawf8i3wN",
  "key14": "4esvbZVG3DW55eVHh4vXVMSFhuoyhmtrWWDzRSy9AqtS4fZdxoYyn2XB74Hpxue5bWcnEqoPzGYH4rjLT7Lm6fv7",
  "key15": "5LrCz88eg1EidZ8DEXUzSE2scpyzJBJB24QZveQXzY3rCfkZPr5KRkXwSHjayN8qbyPx4GxbNqvNegrBRbeNkmAJ",
  "key16": "16qvd1Zu1bcDZd9iwDr5D38o4RkrTRcLMHGz9tWoUgmvCKXbw5MWisdUek8ted5JiSVdEpJyowbKyr2UkknTogs",
  "key17": "4wa66tUy9PnGPKMjR91sfVyyyPivRgEihhPx36S6oNcNEP7kaQknmxAbpzk4Q5dNsafCkREPvYVUEcWFy3m7nNqE",
  "key18": "5oU15BMV3seMfA2Ki5zXmwZRRQA5o3tMy5DFqd1aga78R3eGAMDDwtLMZNin12pseqSa2weVZLzSD1sqkyjMadTD",
  "key19": "3EedAD68DXrwJCbAs7h8aYQhVQNY9Tc9QuihYhpCkEgjXTULjxXzMZfo5DdMPhoaQ7ep1WNLH5mVgZXwgBYfyDzm",
  "key20": "59qpt73wRZNP4wq5VqP5SbLbnx1UzzBrt5Uda9hhBz1cogc61tTFb2oxajZbdHyQ5WNDjUkPqLzfiREppGNgBLiF",
  "key21": "3pgyR2GnJJjK8pCZSfaMZvTcbLyL9YKyQe48ziW9FkVcNqFKsyv5kHsTuQh1G41kxvGhCoVrDQ24fbVbTQ4ghLjK",
  "key22": "Rs8AQCzYn8njC71DugSBagEYPj38B1ohxKLNa4w1r8YN7r3Pw6yDWERmR1uzFxe9ayNZpUNR16KMvHkRcXYmmp1",
  "key23": "2HcVHxvSvD9SjzCjzk4HJcw6X2Lscn22wDifNTVJPT5Y2VWAcGoFC8TsvZAdqQSF1iq9isG6MZ93uj9mjynMN575",
  "key24": "5eMQRhEA5EQUih5oR71YBpbQGkksSviKHZUeoF4EnjZD8aDbtV4cHjKSKSKhXEgYj7sBe4bh4uok4wNTpVYaCqY",
  "key25": "3ToqfhuwqvPFnw8iEeUYWQsmUYjzzvjdKR44fQ9sauhnh1jfoBvQj9Vo7WYXdspdYAfATzzgzPGbVUhgDGU5AZE2",
  "key26": "3kWVzCo2C11wNBayJXnJ4dvB6yfeYq3KQ8EUQNskZtaGSbPF5p7CFESiMHZ9DLdvUCsDQCkVbaV1Ur8uwEymAFKg",
  "key27": "2N43AWZF7PdZUMx5AHHuSm1gsTg7kB444pGxEakbcw8ne1YMtmPWG3SN2mZqL6xce2LKL1BcZy6WUSwwzMXfGSqv",
  "key28": "3qssrPFPFWSHyxwbaP2SeH7SMiXz5wWvBf4e8e6mdNwmE4EjhKDAjRK57mn2as8DofUEG1vtmH5pfMxNfRyTwme8",
  "key29": "3LJtpweBsqT4fECXzC8qQHQ1wHoaTcSGtaKKPPu62DMYvhVEZWNU9PtrEvvqhcuKKTbAd6cyKpYRtftr6PoXKm8S",
  "key30": "2KnzAsKxxGhLNX5ij6WDB69ueFYjg8BXw9qksVrLUE41JdNEWgtgcUmQsYLSAV4e6W2A22KKJwo27UXYEZYQs7Q7",
  "key31": "3KDgqjk25BatDkgKAdnAsZ1RuBpyaguNAoqA76bSNtkdUNUf34gypoXVMHU2iJ5HL6CWVNp6X5PQcYGqoafcoRiw"
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
