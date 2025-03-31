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
    "2Ay2UJMTM7iduBb17ApCcx9YGQ8RnKe5SpeBsqPkbCbrdVUDNWw5v3wJsqQGJjW7pfqfCtozxmLFPfufL8NH7QAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dn3VyVusf3iPCNvVq66r6GXfxbdLJM9GcFYtgVgYEVheq6bsA6UVNb9mTz6DmMvEdC6aC4ZqxiGVDYpjZDmYg4E",
  "key1": "b3EA4Dgrs8TGd9igsPcFaonin1u12129xXYmNFjfp73dfqS5zP7y8v9hhqUpMYvL6UaLqzNsP4yw1wzeSXx6TrV",
  "key2": "3uRXqiaktYr95yZa2dYLj9utPy6VWKcXMoPMdfYCUMLQc2fUPvtc9zpLM6Sr3WmgwCNqkJJPy3JRez8rrRN7PsY3",
  "key3": "WtU5Pbn5DqwaSFCYgb4gnNYVdJa7dQrRiTmSbxjBtdyv8TCoahwvao8HZNX16JXXoXGgSvCPjb3Fzt5YYtB4V6i",
  "key4": "5kJnLawWuWZMAkyTbCFun4MGk1R1sm5VsMT85Zb4hX24kBN21nF6cPu7YUDDr49GYUi1N3MngfYjsBBdHq1XoPGU",
  "key5": "58diAit9DB3CTGs87V4B59VYmXRHaMhx4G2btoVMDLcR6bikvdGDxCTGAmNL6yvicNudDeNND8Hcop2qBMGNKT5U",
  "key6": "tR1Qrn8S4qQ5Ciy4RCU6GeXAMX9t1p6BEcQtubynNHefHXrwLgazC34f3JHKg6rWEskPrQs2foM4n75Kd6mfPQ6",
  "key7": "5h5EkkUibB5Ss9x6YBzjzv6cccTafg6k7QZLt8YeDnd9j4fN3WT3Y9S1bZkr8Cozjo61knABc9d1tWqcE55HnJgX",
  "key8": "3D4g8QDaUPTrYNiKwLMVFfJNK9ekL6pUhpgccXTdC3CfeCdBfhnZk4i7c8U3r9G3k2Zy7s2QsrY9iNsFXZmysMnS",
  "key9": "3W5YEZb57WFJxgaigneShR3VndVMQJQjLjjY47G6X8gFcaFrDTAnr2JkDvYQak8YnPYbgCXpeJ2BH9pbnUsHJPG6",
  "key10": "PRxUqKVttAnRgbLbX9UY1cMPL1eba1XPfQB3f3oNJ52RfdMZPUSdLwasC3b4KeggF8NVFHZwTmJTeQTadigoepm",
  "key11": "nJJY9wTc2HEngVWFWMb4NXWECqnwnAQ3EnZM6BJ633m2LVQvqFGm28oMpJbQD9BdJsRnNYsURvFXHtPgb1xr7ps",
  "key12": "Tdg26rGexBzmy94a3mTemEBYSK8pjcSXwFd9TXMUswkbXDYXdqq6i4ZerEduDApC6DRcqCRS5h2quFowr3Mj1cZ",
  "key13": "5vwEZiki3HXnLUCeztMRz4RTYpTTaMPYjDp7EBsCsktCFXfW3kri3WdZakT85t2UoytKsZ1VycA3NKWVBTULoDav",
  "key14": "iAeE9woG8UavZsVmTw1hHip6y6iPpszKSAJd8oxqaTXfY6rpGMLM3dxU8Rova9YhbWnUn2sMbwrhtw47drbQLp1",
  "key15": "obhRfKxGUxH8UK7ukSsBvb5zmJw4uHFbmCbY4ZMaNCM7TGbFiw6C4meXUA8Dqnuza8gzDmWBCfUXKAYxwCaxG6b",
  "key16": "5AA6GCHRGdVSBWWe6b3hXjyLJGAUDvT7WJQDBSkvcRdH2cpKb3YEkobLKJMUD3ndkSkZ4dTdWvcVqkXgiEZVaBNd",
  "key17": "61UFbpAfUwuxu7wHW8knd8Yn2VkPkrAG87Ame5dyHvU7ECJXQf2xgyJFZK8FkK1Gbktfbq7sX47aLQLauAptegbM",
  "key18": "4gc1buo2Q6AXp4dZjiETFrVxuBMjua1bXtkEe3okp76G6jEAa88iodmFjEUniweKZ9AsoQYBYPV2bWQ8g8oT8fPW",
  "key19": "MdeNapfEB4mV6iuoY2qMw2wPzQZDeaaTE3Cgr5qjkUZV7EqA8q9LsAzokbtSDDAZHYuZswiMZmeEhhWVpcH7PoE",
  "key20": "4JqSa6eLZbttoKFMNvnvMwrL6WXRp52NwuVi91rs1B6PbDvir2Cyn7T4TDmo7nPEMgcyafsx75n1jQrn2jhzB6LQ",
  "key21": "4E6px3hWDE5EAvu74XAxRhYBygdTGPi59g3JGLaT5ivW1LmhLyeZVCJZfZHnGaZk7Hzu7u9ra1mqGSExmADMLDVZ",
  "key22": "2u4E4iDxJd9SjiiFnmokDSiMpSxmZkC5Arb6Pikt8dQ1cKVUztC9jBURTy4rNJyu7rneWxknhZrrepQ5Vf5Ja7gh",
  "key23": "3KZ2izTCMNCTY8q7EVcVQpQtNn7YH3dUUGj1ZMBF6jr7yAPbHgPD3SJbZFbJA6vjRWeEsnM9ha1KDjYVT6hhtxuS",
  "key24": "8iakNMSVgV4iE96veVjwu8oTGptjkt74pTvSqJCWsZsA2hNGxG5w3WVwwHBMWoyFwmFZcEuMn5MuaNpA4QyhRGK",
  "key25": "4gjCMKDHJtrHFM1ed2ZCNok5eMjtkcnA7X8suyPpwJ841s3T5wYVy4xnUTvnhuLsPVbHRpd2XgLP8GC8fsqrtki6",
  "key26": "62RJEyVXZy3NUapwixrCd3huUooV1At53DPMLsNaTQwjMy1wQDDgZiiPA1vyFUuWp3cau3fFc9LshoqHGcjw9W11",
  "key27": "4bLwdEAkZ4s82kK1Wb7R41xmJX6xnFF2A3cLaxP8FjCJWpF8WdkkBqcZhNNLRimNDi137f4PjLtYCvfdDZ7wf1aK",
  "key28": "2p7PTzDpL3gm55vqeVEhNBVAYTrXxbdKtoe3GzafUk3QkfdAPo4G36eQq2ZzpaGxoJBxouo59GxW1kd3WK8JQK3Y",
  "key29": "aio2Js3wztJHEwNwDZ8DD4y1HqGPGg8YympPJT5ra9FtgqiTw6PEc2iktTEBaPCyEYaXLzCp3wutb5HXEB18BM3",
  "key30": "47jgbaojCaKwsJsV4tMzoEJfhcSrxiqrTiZtSi8g6RCNiTPeQn6H95N85cXKMH3TByyJWFegBE85iqqHqztpChVB",
  "key31": "37EuidLM1xxMw2fNF16yw4SD4ecQ25iNS5LFKQvfsuXVZFikTNHLUX4AgwnA4AJBosiXEKvkYDpJWZ7tHjJXZdXB",
  "key32": "4wf9mekfS41zgrnztaXA2KDshj2XhE3TPmvZoksayk94jKziemEsgZdWSahyoQRTRBSnviFoEHKSRGznzBzF1Lud",
  "key33": "F5Qj777fCUf4ZPGvRdN6qB8DmVAa7QQT3ChaZnsvZafiMKTFf1CfDAQMLGp1hFg9ybRMHJX6jWEUhyHynGmiSyw",
  "key34": "t4kNwvPyM4cT6NkJGmAq58DVYqMBB1fSNFFx4joBnpF1oTjhWF9qEt76jjvEpdvTTUqxQcPWBprapPTLk3qirJ8",
  "key35": "2TuKVfzxguH1d14fdS4rbL7DyHmJFifoCShm8diVBZqNMJq99gtREqTcuoED5KzXJwuTZGc2k8P75KnAUdNT5FiE",
  "key36": "TAxpmA4mDrbuHkiN6fyuPyRwTK8ztsVXFg6vNyTjZkHte4Ysv6FAEtELQGeE6BJ9RvY94aLKM4LWSy2C2wQ1CHA",
  "key37": "euRypbTEMEwBa8GiFG4XuKYRbZq1Bj1myPGFLE1DPqv7t9zM4NoPPXGWyYkjMSnSS3CfhFbiNYYUnnXkcLZfWGu",
  "key38": "1CZq5YcwdawjDdTsC4iRtNWS8PKDoepncS1PScjRxixAhuYkRZWuE2Q3sPjPL3XfQ5CSh8j4g93aNo9XZodE1yv",
  "key39": "2z58xmJxkCiJfqqtNLrv98X8TPtUg9av74ULWUDZ39fP34Qg5qkTN3Lku9EzBHTQG7CZ6ALpD6BcXjeQ3UWrQsGx",
  "key40": "5kicbEwAByqJNkX26SoCb6xi7qTsrfyza1rxSLQtwkpXk5mDSmRBNuMbdyMvBZogvMvmnmkxzb8QBZosg31iWNtM",
  "key41": "2xxfM4szcDDHqQHX3d72ZKeDGtgEuPL1kBBtXpavJPUBXKHSGjyPSDCcWM81VbYZkSrL5CMapLfH6PXKZa69Dfud",
  "key42": "2Tn48p4WJmQ9JFTxtRkHVbgbwywmSuDnihPRmSbftnJpih5yq8LBP1hsFmPNgVM4BVK8PK4438dQwuToVf1aAB5n",
  "key43": "2v5SF9VEgAser9eT7E5rrfCqrcAgeKHecaiUYjKNK3osLtMRrQrqFRQmZQFG8Djjagh4352FT3JhaWo9KWau1rqj",
  "key44": "2TSTqKZFTfLLDjMjKoqbXz6vRKQ7KLertjyFkZzMhFsCGmhC3cwonZEjKtA5b57eKUpBAG1fmGdeqVDqRCnLYcmu",
  "key45": "5cM62c4uNDpM1DWVn5GbkBpaJGotmLwvZ6kXRFN4fLXJyzN13PkJYBpCVkCCKL6C7DPyAUfEB3xPeJpuq2f7Qfvp",
  "key46": "qnot7dMkBhsqDjVF5sqgEMjmZktd256jizDwrT8NQExQ66u4npdMWLdkpustPi3RLzZvtDfgRzNx85vs8LduWTC"
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
