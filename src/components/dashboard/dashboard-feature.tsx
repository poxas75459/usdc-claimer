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
    "575ezYNN2FUFd1mBmKsN7oUSkDreU45yyLy8WdVYYTKT8TWWWsma5HKobdKDcxPdJbwUvwPjeUVD2kHLWXh246TS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yhd3Yq3Pcb19CyzTNN1xUjXcS93EDaDHRX8cqo8KWrLXyuhkd2BEqv5sU664CJyweB4GQx17xxfjnwys58vLQeF",
  "key1": "4Bwcc7NAUdQYzior3hq4QeGK1jU78Xw5pKRdVMGimcMMijSpAK2vqXNmCNcXrkQ9vNamzprXxugFSNK5UDQDNGxT",
  "key2": "5xfZi612C8P1ebmcK5dmQBszdGdGtoG8ak5jRPC8skgkvD4k7hL3ugUvzYhWx7cbNNJ2TuvQPYXBdmJYJoeFeiQj",
  "key3": "3s7Uq4ZfxDvW9RdYJtQoQ5fKCv5reZ3X33oLeYSiY9HTAoMG3UScq4sJ3en9P3Pu62fPEqRdbw61oGUm2Tz7kHsZ",
  "key4": "QJnH9urAhnTrU8BKmjGYEqJSQdCy1qSobAFuv5e67tbaWMNSATXuuMsHVWrfRSsNVqMCbVPqhy9MGAZSChWeVkM",
  "key5": "2d5By5h4QNpnzNS2YftnQqXvuP2gmF1tcF8JwBCSmHSTUyuBMe1wSMSEbhADEM1jEk8kMz1qKHFKtgfqE1it56yr",
  "key6": "2ZqXmBif4rcJg9xV1CNy5aj5x9QyedE1QWuD34RhY56ouNhnsp3CJii4L44qsAZ9zgZwZveEtDRwbuFwBHw469WJ",
  "key7": "3MET66WH4kkbVzyK6c2Q56942z8QfL3Mi7b2pCX3msw4D3m3bpzW69tLe6CsLJZLd9AexUF9DkRMw1dTwMBnD3pZ",
  "key8": "4FqA1BuBtZ1rcG2smN16khp9EffJRRWvM9P9TKjofbKJDw3AVuBXLgudjKwQcKDxuSyKpi4BXhZyM5K8P4V9VMBz",
  "key9": "3A4EtNzXt36pHFiWwEKet1AeDman3QUtSCv29nS1QP5vZ2ZHtXkgKVQs4rSJ9GGFtqMLKVtbBWngupLutLE9YPh5",
  "key10": "2ZYLLTgjwJdZtesTvwk3ah23ynJqWAhjRrw4T6YTRvQq5qx2Jq3GpWDTnPn9BJyeWAUWyZC8wYRHdYrNqnuR5uc9",
  "key11": "3PFv4cMyNbQFbXDBTvM8f9mKgSN7b47Sf3T4Y6bVFzeyEFjcL4njy9pETGUfd48vWW4BvxXYeQtrHvC3HszA9sE4",
  "key12": "5ykMnUmyFJR56T1a59bvg6sDGT56xPXx9B3XmB3qwPPGpKjaSAhXVDz2V5ejdQ1V8mAXV9PF5SPbwkSGt1LYuYAB",
  "key13": "57A8E9MWyiGLrLBBNJfyB1z6QDCjiiiVbxKgLezQ4VJrmVCrEvBFkZPuXdERHiNewj7ayNCbBvCtG5JiwjRZC3yr",
  "key14": "5XqzmbiQsB3MUvMAbDxEogeMwnMWc1S2mac93yjepSdPr7YQgF8WXLe9m3aXYFUkqnfrN8PGkCyBKsYYcvzAEuAh",
  "key15": "3kjt1a7LUH98R9b7pCXHi4zChLnd686MumYaiPCRvcDY1fb1YV3648WnsQM4VU7NnqzcRqm7sPCHQWA53WBq5Ccy",
  "key16": "3rpxVCozj7ZSTndWGnzwA4i5yCafAqvAuB7Ssdk7QEiyusW2KSsLAzCTkiPiXz6e6DgbaGZsxPS5HBTjut998isC",
  "key17": "4o88S149Dq83Qor7rwpNkwrNEvfXXyq2WHtdEKQBcgmTxPEUQgpYmwxdLVYjgUhvUqhdQejx2vKgnL2qxyo3QzEu",
  "key18": "4bGwgL8qw4QPFZfT61yprrPVzjpaovnK7GenewKuqnNYNY9ovdE87CTppczbfskpkBsHKTqxWNRkQRLV8u9moSkx",
  "key19": "35QFYu5mAJidGrwLdz2EsfmDnU982Jnvziiinx2h33xR6CkFgsBHKe9Wt4cy6MCX99bsMUzs1dXcA8KtjjmeRZ4j",
  "key20": "4qJTt68TbfzgeGQD2YBgq6f8txc5PnQLfebz3wfS9aS23sc6AwutwWiDfvkDVimYaoBgxrXacmP6XVhYFDFrx7Xx",
  "key21": "4CRTvPPHNRYqD7uGzKRujZqrcu2vamYB93jPc5SKDHSgbne7Lq4DFT7LmeapRDmSb5rytwaESaGUmuimMwuMxpdG",
  "key22": "5nMdXWtzCPSjyZKYdDbdwPMi89QFrmLLTjAMonSX1x48FjCb5VEW4sVLsssDUknrejHYHRxEtZ6nw3J3Cnc2n1Ym",
  "key23": "2UjA6vLZiZUtrSFaJNcnW4u2keEQsVBkztqYRSHkypxkuevvdJjKpmFTW55wytxixbEYb2Y374LjwrVUSiXoB8uC",
  "key24": "5jGRkw8BqtrwN5GYvSGY9de6zYLbCLtzrTg1cbd7HG8RXxQunHDZYssi6AAwHvBc8soECUDFYwd56r4hfixL5ANy",
  "key25": "rB8PPTszJgDNKEEu22dwFzzUqsbRtbEKNbxs4auzgzHNCMYVUHbxmkvpEUpXnjKt6iTeYQh1VEv53u4xjpgxMRi",
  "key26": "5afHXu2RNZWiFjqbV5Cj7BE8GcTj1urLWBsXoUEQutiKFJXohioR9TanHLLzx6UAqhazFhQsxDL7FGTodC2gPeQq",
  "key27": "gF5TwG4PMqTcnh397abe897tFui1iqxGAoDLi8ku5XLmyN3zqMD281hxhd6yw7aCWinHjg72JJUYbKaq2L1Aud9",
  "key28": "5D6zFUzZ8GrU7WrYfJaeJjdv2nt3SSuV6z1UBTXQYukMXHEQSWk5WqrHLKajVoHMCrKu8VAh64CskgYgN92jTjD6",
  "key29": "5ZECTeBwuMyjofQBcUHGftkp3yeqAmcUi1stSZwhMmwBpLxZNXwnQKbDiHeavK9XooCis77qXGRTKXZbwDJ97sNK",
  "key30": "5dapwXd5xWAcxgAszy1tSZaWY4UL6xJEuBAYs2i3wqGpntQ4R1C2fQnoHwrBSkj1NXA3WhVZtdHAnXTQm4zZJLHt",
  "key31": "5c9RjpZ3RLKWmV7zJTKGEyTfVCKKnH3YZxjRBduLXytGKST1Hf5ZAjE5wFuxMqUPHsebwnAZhiuJYHYSnJSgB6qa",
  "key32": "3fmLFJQjeNuSzDwg1eduDyvNcJaaQbULZmeJh5efefFkYm2DzPF3AG1rBfdoX7nffCgQtVibr1Q8u5p2JpXJsL2v",
  "key33": "5ooUC9HkQhzFiA3Th4jFQfSH8tYiiQyjcmyL8YF4URUug42YQ4AP5T7dRrE1PyJKBiY387AksmnSyfgTARRUC8uP",
  "key34": "LVF7SfWwdLGd7ceiH42tH3GtR3yr5ukrAffDXST5nMqgRTCRqLQUGonZob2AHmJQdvfZ2A3DvVjwGfkaBt538Ji",
  "key35": "3gtqWMCMGQs3EkcHj4gTdUwsKi7JXkSKJcFiCzzMn3i3M9YAcWbNtbTPieuBNQwGAM87kYecvaorwZzKTFWuLcRZ",
  "key36": "52CKRMCkN8LCUhCT5peMwKL1912S2sAjxGsiByDvmU54Hw9oyjQY2EtUc4GxT2run2eZ9oFqMj2KYGvVEH1JpK3B",
  "key37": "5zxrpzTSs6hQzpZWKfb9XBDxJMNHrAeHcGQYPt7knsn2NDJVeNzVzJyPYoT3nMbBCYuzkhXvWUQSyAcjya3JRo8z",
  "key38": "5wohj6aQK7A2XuWNRpf9agN1YdBmCnKzeo1dgpTgUsFQD1BsM2Zf4XebHokoRiHJ4xtCgWpyBZc4FhWgN7PkxwJQ",
  "key39": "56XXqCD2s4PTNBr8qhJVv3GKD7bhSETVezzXA66DWuFAtKWCq8XdkzAwoVQf8NPBG17U6tks774bdorEQ1irZ31p",
  "key40": "H4fPmtRnFbVCvQ2WP9o8peZFQ2ePQPXF4GxtYtDLMwcAuoq2vTwCMCKTRPwMmtKZz14Z8sihUar3TcyxXMP3zH2",
  "key41": "3tdWFrE1y9MW3hAQ4obHsEyy3Z23rAY7JSMrH23geEjJw9219ZcYbo2Tui5Dfx5mPEwkyvMjWEm2eGNAbRBsZHeQ",
  "key42": "2E1VveCc3XVZEgxye5Pn4VhH6o9nehCKJ66aDUnNjVc7oVpRbVAZdkTHfsSLMKeDgPshwygq5EJkJVu9MukZQSXb",
  "key43": "4o7rsvxNmMbrsrsS1RPgm1JZH4pDZ7DogcCMEUHn8n5efryndhd8tRCUDYCaQcKgoSw8RimcKcHbHdAaRkTmzzkT",
  "key44": "253XWHNEu66gJa2TU6yMt5SDyKVZWE6raje9hsjcAJRVEDr6LGshTko6Dxw3ABSfB5bmqYWgYxbkUtW434RmKHgn",
  "key45": "2kvaYaj9xeF3hfvhQCtsMCVFeiywzvKrRsoKPPMtYqnUQJcyMbtkPGau8WAU29DqBM4J2Ua29XNSpQ4nmm4ovSmP",
  "key46": "UyB3FjAt1uhyNDg4SWGNMiabMKvLQsWvRUGzGrijfhz17e8c74GiY6DMJzWcj2HSe6ogaFqjJ3zf5M1fUUZvApU"
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
