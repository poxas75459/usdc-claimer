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
    "3uFMmu2vCwEf3QvMCyUpkVb2z3gX5wDgySgNmWhqbnaQwKyjSfcYhtAFznZRtfGatSeYrXQ5GRg1hoSDfMqgo6Nz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HPvtuXBs1wXzEgzD5Do4ex2GWZV5UAibRCYUMCNsf1s4ZAVL48H2jmTSAMp8iyhRcgDXJsbhaSq3xTQ8c3CiZVE",
  "key1": "Btkv1PfECkndwSwkRgaBrUfs8cz4jvbrokkkvFJ5Tmj4FfoodXiB3npf4i1zW4PEM8BqkSUrN39bGNhaDiw3WAf",
  "key2": "3subpRujmeCzMy7nifAQkYJ2s3xKFH7eY5V6BNEuGpdnKoww7F9X2rXjTFA9JEEzW5FGW6aP7SJJwQZjhvbJtBdB",
  "key3": "e4Qkxiway8Y5Q1LMqJV4kBnB6fczjjCGjYA1LZF4kvxNU5aidU9M4A5xwLfigMMHUCCj7T1UeeTKGuSyFzhqZq6",
  "key4": "2kSmRAYYQMmmUdFnGttRxckiLzTX6c54J2qzVmGa9NQRf9vo9ZEPd7FiAUkhNyUuDX4idLrw2EgeRoydfNWjANCg",
  "key5": "iBM91tiyQGQxojS4x7Ld1rUmJx2ta3U3GweYwo7zzytkKcfEF6uEaGyj2eubcq1JeKkXPms6CZMcQRw3Np5PuTR",
  "key6": "2jXQGBxni9YfZ4X8gRdhKnwpGH5UACCkFwYhyhVZ1HsNUQmQfGTaNBPU34KHLge5F98jbaPGfxPFrsmrnxM9ySHg",
  "key7": "3v5z3a5bE3wqFpCHP5TJDuaJfSSXJY6ZBrU7Zo6Q8ihpZbGSddF7VexB51ms6cYbCmBVeWwTCLjGc7ZuYjX7EvVG",
  "key8": "NPYeRczoERDPNTEdLDpucwjui9iUyBYPBDb3LuU24sNfugcNYSSjXVV94bD2Kh3aaNjyQSF6V64L2TN9AiQPSFF",
  "key9": "2kK1yUqxzEpWosBjqu2E9JT9yH3xvtBmUhz1U4qu22MFeDZodYQXEyPeQpodhkmQWpaGmR5NuX6edFSja9bS1mF6",
  "key10": "2jhH2Z2rDjubE8z4s3mYep6h9hQ3ysvUudmZsATWeWXbd3TeA2CTU4bCLtQecGh5aViaA3yWHxvzQDTqwfHWqLCV",
  "key11": "5iqqBjUbpmtVvYk3qUp1YGw1aAUoe6eA6twWfnN53CvpK1SUkePoANp8nz6M1wBcjm8tMacUcg7854aEkVNQofMG",
  "key12": "2JbBqy87ePb8k3ka2ZtckhSnpyGn15qEJjq37e3MCZCqyUE7o4xw9PKM43x5xcUqqUronhUCLacQD5Lkg1n8nW8K",
  "key13": "2JBX7sjNgdkh4pLx97RuNLQSWhc5ERtgnwhxE9usWm2Bxeji3mKRVa92wtJjYwwGEhMcXgZ7UnTXiB9QKaapTyyd",
  "key14": "2eDqBTkTeSjnY5xENVmwRpcsRaYEkBXUgNpeCmg2hDAsNiiqV6bMD3qJTf5tXC62i98sS9bciuuZerJXWDeXoqXB",
  "key15": "2wBCYpejZ8Jz1AB5TDMQBfX3wyFccpPhweo7SDqftyhQMq9FXfQKF6ZUeUfZGjWJrhResykjMr6KfNRMGB6bAzwF",
  "key16": "SnKRK8esox8dm8zUMq1JmmDNrLGdzaNHipDE37WVboBzinAzCzpHvXT6xqYNQ7MFFigGKWyQtEazBNCfe8JTpiv",
  "key17": "2DBkh1xFjVTV2QGB4pMGcUX65EUptu4SPBDguNmVN1qCq2CeoCEJjYd7DCXYKY7TzVifJdWaHsAw8JjRKHS8MsmK",
  "key18": "2ojRTP5ptQiuVbSwYC8G9ftfPn9HY561ushRFttGDkq6bYkA5JfmDghPMv3qbCEjT7HPsMaYpLuDy2fES3283YPN",
  "key19": "H5Fh1FN5sTtuY8Z5L3iYm9pviSEyGnTByi98oVQkNgGc5k6oTQUKU4oWDa9weXntNb6gxcaxyFB4RHoDJTo9Co6",
  "key20": "3M81pXo5w9htPcXrSScYQdTPeMSohBBDZdYHV8HsNnGSmF8FUXjLz8nq8LcG9s6Edvup3911h7ak1oZjNhSWhTeP",
  "key21": "4gEBLuAjBKrddkDD5D2ZGBmb9R4s12YwQNaShGsN11ABv53Jw86EK6RtJNfkWFuwy4A1E2DXWHfSMUp4KBukYkxr",
  "key22": "4JaGbGsq9wMnQp3e89fQQNwtXzcW6er9TpS8bpdY6uFf7gzVXz73EATwkzSis3kdYBRaaEEEAZoYXbAWkRxaiFaT",
  "key23": "2Nqe5aAexTB45NadQvqwTKC2gKEc6QZXNYuyn4oaPgydokH5GnhDRBgdKzABmufokrySvSHkHaqcHVBpBmFTf6sS",
  "key24": "nnwdgpAamCJPNChfeakBTgcc4LCH1W3G1ScKinETCaTHbSrYJnLU8iYC6Mo4X34BPvozpwEsf7yjjztrQEwCtdV",
  "key25": "3B6vsYfL74TeCvba2n4g9H4MXpdf1449NXUvHwdX67qNwwmAoaJv9W284ZrLaCxVwh61x2PrFBcRGGe8AZWbwARb",
  "key26": "4zAhDf9vhE1n9FYtfSwhbMovwyufSKyKjr7QacWGhsgDrcGYcgDUxsUP9v9cztZxSM5fRBzqZvnfof4ExbW8GzY4",
  "key27": "2KE4rLPfn4spEx5QXVjoFyALU9TaReE8Z8BMgvMh2DaBuSYJcPzMbNkdzUKk6xpRZaQz48w2rAJaRqoZMZKBwheC",
  "key28": "5nShk2eFLxZY8hDo2HpLk6diUZiwvJRzxajW3rwAoCEg1zTQ2UfggL8QpB2XrtCW4dr6RwTqBeNf4eXe2CNtM1JB",
  "key29": "r9JwA7SpeMHcnrKLvfEo3PPbTYtkcvDia3gGqvRtkiYbyweXN4zgyRnPepDrW8rcduP9Np5kyq5T436wH8PmMby",
  "key30": "SHCSKjRVTvqxQRm51DASSXyCqYt52iPD7wjB2QcmUyM3jLg7HRVyYQd9ETGuCNSvLpDrZTUbSNddJ1W7zkVWw16",
  "key31": "3R6bwigR97tjy8GccknCNuXH13ktjPayW5d3Wyr7RSUx6fUcwJsZGme2FF8LRD5GkFa7fnkKKtNLhaqCed2htGga",
  "key32": "kUPGjdJSoH7JLdtRayrGRNGqLCywnkdfDGGx4M4QaJaoRtmZVzmQFnAckTYV8utgiWS3DZowYcBfhBVMkJTmtRD",
  "key33": "2ydRnRqx531PS54ZQXDvmwD356e7p5aoqeTRhoDf9SCXHh9sU2i2LkCKrTUbar8WqC18g2UUq8WcG9iEsYvv1VSm",
  "key34": "3QmjMwx52ZGbFiRfznzoQF6NBZSLZ6zV5wS47pzHW9X9kSaKDgdq4qSGpa3WV1bge67zTn8S6GUdcAZEnn6RrUcS",
  "key35": "2Ln86A3QiSX9UqoUiM1P5BCXVCr5De518c4BLtHvrJahY7jLCQ1yYhKHhnvkEBSvh9MXeRXh4Upt7FfTSbbwoBL6",
  "key36": "4NdfXLVgopfBN5PH2nsBUCzz4LpuWvTTL9hfJ4kNiCrPVNVURYwcnP1Su2xDhvJQ8TfQhwsHjJZrenoCChFks885",
  "key37": "4ZMGnMZaNzGwczfdpSuMfDzeR81e4bDLuNTTHnpPJKJMZdXM6XdqaZRGCEeXuSZz3fmdhYrJvbTDTkox52jaH5dw",
  "key38": "2zXeRmhXfeyRAK19yWoETzkxvS7cEeLMQfgYXmCYw42QRAvn8i6KJvofhDknKf3DVnUqjeyd6rBEsiGysWq3kJsr",
  "key39": "2zTC6LAoNA89riUJjnoypmGQmU5v6QNy1MNoSUmSAhc6tEYtsjT9nY76VvHC3fBa6cYMwxttfmJCHp3bwfK5DoRW",
  "key40": "r8HmgdouFWBaPWqf3hgEBYtWSaAy8QQ9zUEgH31Jr4uu1AWNvQgBvfGdHcgDr7GLpXg6i3pHgvmwzE4Kjc16VPw"
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
