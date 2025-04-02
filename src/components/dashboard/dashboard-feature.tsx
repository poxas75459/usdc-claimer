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
    "2DPvcw9DkkLpxACaJgvLptoH77VBLnKCLruNA9fdsTBtem97UdLYYaDJEAiq19VAnEAA5MMam1zTcHura2MfRANN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gZL6FJidgn3eS79agae85Egi5kRc243qBVAiNFYbxnw87nvGYZF4nZRqG9qtsrtCK4hSUwYRCeid4CXxGMwJ4rP",
  "key1": "5xqpkTPYLt3QAPEprZPtjaWwbiBtGn5tSrKsVNGBgpwdvfBZeReFHECjZHMLQ5fNsonLQTRpdBeQNhQbNDnttdY",
  "key2": "33JRDe7n6YYuQbEpCgHGU9XP7F4qif3qaPwpQB6Wr1TxrAaUL8k2dEJFYLUq4zTst9s53JMKgezBkoVbFHydPyeZ",
  "key3": "2sw7BeTEBBFgVkJbvy4Tt13pQRXmz4phg1ExjozeaYapUUzk8HXxrCLJsT9RK9fkzaMskuyjqhj5MaLt744Rukjq",
  "key4": "ZYp7HQCNuE6S55wHbdsJUPyt62mhbA6SJ4RDPu6U222LdgrLWtXmTMKQ8ss4d26NK89C1HVsyNUmtznU51JeZqy",
  "key5": "35E9k92Lm2jTZGweqjn5wVokAQN5w13imCDxFkbZMfxxV56eNVYMJUwpoQ2RKJHRkrWd9aSSzWJFPfiGg6ACU1Up",
  "key6": "67MGPfFhjzuTwVK1K3FYSS3SPhA41JBMLkXRYpw1WNqHm8T2YMPQmzc61UrgzCZtMwecwAMQ8itHCSMiY8XQJHT3",
  "key7": "4bVPbZgAgyHxSGJncARtsYPjyRGr86Eejo7JLP5iniHAvH6yveuTdwkAjyzDoMGEaCcYNKf9yePhG6cqxfsJZUkM",
  "key8": "fqzceSFQUgm2ARDCpvM5nb2EDgaWqvUbymjQRH8xAWqmQPR3AHQYmecfqPHseX3jU4RkD7sK2G8AbzrjPefJwWR",
  "key9": "3ZBmzyeamgrtCvMZ5KK3ev2o7cHRMSsT9D8Sw7adjrA9qMr6oxHqLZGMsYFtM9e71Nyjw7UBFbQMMAS3HerfLMtv",
  "key10": "2rLPH5iwgN4KXYJJKLuWKzFfQWLhCfYsAhQ3eozWQcvhzbrbYwKAqYqThEZ1Cwb6LUnmy9ghgAv3omf2KZiYS1NQ",
  "key11": "2dAd3heV5XfH38c8rzvg18dfeAwauSaKGce6RbGw1yrpfBYQWbbfPXZHfCvhARjFzrwYjaGcw3c7nKPvHVxPmBtQ",
  "key12": "tZX6BRDiBxVzNsedWBSFEE3SYaRyhmK2uCnmEnijXpyeYucCq4T9UxwYUufsk8GPazeg97kCviSnnkck76GKYLh",
  "key13": "iHz7a65kUYkDyBRXCufzKMTyuNoAPjbACNXiGAMrSYRYTX8DfNjHJL33dXGxWyGLEQ9rhGfmoXtuxsB9VsxR87Q",
  "key14": "2GgfxUfSpuyCksnskEcc2wbU1bRYX78mK7e464K5hNmTbu4VUUE2JQzRzycW7jaRhUcnaBgmZondgHoFN6bKkeqe",
  "key15": "3csURQiFLVYFmMca3JueznmaJVj5o6ByQoAhi9GW7zyNAfvuwqbqoP5Wq8LR6mofFGXKf6mRWzt7AAf2BwnWVf7U",
  "key16": "5xMTmdprbZ1kwCTb68XyDUzYVbxRdF2uCxY1L1DcoAN64ovFKmfWz8mpLSkQNC7LS65nuWCosczUs5wwe33pSnts",
  "key17": "4bceWqYoVrZ4Kq9kYNYf2n7YUdC9WdE5WRCH4HY6AqYkrW6HgDFVLY2Wn4aTQh3eZXHkh9Qs1hTLuf7oBnkVJ7BE",
  "key18": "3afC9vQCtYgDnWV3VpPC69iAXuVmwTfqPMVU6wpq1Xzp1UPhy47Vh2BoN58wuMnwMWPeksE2cVpVaxpmoRd9XwWS",
  "key19": "4QRXnrSK6GhiNG1k8ZhZBnifvsKkNdXQsekGBgpY7KJnwxswT3uSu3WcrFHF5vX8UbAsrNGhV5xnkKR2yRtngsJp",
  "key20": "3VLWMAKKMXAsShYRf6ANwrBKBQJXo4y6Gew3ESsFu5PowkLzQdaHz3a4PPgw8Gr9xfN73BRaqVm6yUX7jTCm5whH",
  "key21": "5ruMWQhF5NWU5rDUhkhXMKwaRDbDPUEEA3HY7FxajatZxX7wuR78b97dpjhnXpy1qnWSDGBj9pR2ofzZW6xpte6s",
  "key22": "3rDmVPzC1GojtiWb5JK7hdcQfqPaUtnW2nPDJxF5yBUpimFUxzfeg2Ve5FnDEfF3zRLKipMDzQADb8VqjJcuxfXk",
  "key23": "Kdi2ySBup84AxQjNEmmk4JejochHXJZKGSEroYzCuMqcsm4iR9taBNpzZY7CHQ4pfSRAGtRREwKohSTJRgdvP8F",
  "key24": "5D8SJpeEkKErHGFbpPcrPfjpqfs4Y9MLxdJCS4Xxc3tL2THSZ7R3YnSJfU2nZ4DTiBXT9k2weTenj9ZaWRg8n4Ya",
  "key25": "s1Zb2o7CoxwJcRJm5JDwCv4PAdZ9o9cAcvwcz1MsE8eoTuksSXjESZbpyr5xfzqn9yhURzy6LagnLx1UxpuBarF",
  "key26": "qV7MKMxV2SEH8SLcjCcPKTsCJgfBFS4TDoTHiuDiUzkTwKPcReKLSbJ98ipijqbcao1F2Biepvp2b8qhx3VPsCc",
  "key27": "34xJhqrS8VhN5xePHoAZRZ9gB2BYo58NV33eUfHg49wfdDhiXCd82EP3VVLXakcKJXvF2is8zojC4t8cRru8vKF3",
  "key28": "3cTMK9V4oGx5EJinu72R1Z1sh9FecnsAy63UxE3nzZ6E6m7UUQbLohPKdokApYeDr2CLjk2W7hhranM9esYHWuTt",
  "key29": "4i7whnUPGH9R7QNvfPAhFkSzHgFw3oo44zDmusWigWS9xcP57z65pQwrds1dnEaVaZ1fH3cUJSkvVZnk3ekqgXwx",
  "key30": "2js3dZ1rqdPJmwyxwc9RC5HYCtKz6L1kvuQ2E6gaPbmFmvsTxUmDAkiLY2WZHrXSkQWdNMpcee8R9ekD6jBdUeK9",
  "key31": "7hvY9XkmmY7qHSTk5dPbKnRYbsQogoXnNH1j7hY7XvqekwZiow6RMYNdhQrwsDkgFkxUJxkoCBvsPJ5bXiME1Zg",
  "key32": "21bKc5zXNtsL8agzYMuJ6KFAcBUbbcHWj2n6UfSwZMrH9Hi3xVCGqgTtCYs6od8T8GFt6RKHfze1hLGq9pZi63fn",
  "key33": "3Zz8LDQNyajWE6pC1nUarXQtYsmHQgKRbUwqFgkRtveL4SuR55ZMeyZdw6KLkyWMwfZ2ja4B1Ty1cVWtPa4i6yZA",
  "key34": "iBMq44k32PBaEdHatA7LyLMhHhsgoK9eL3sL1GGpwdcjnSc3fWj919T8qrQhirYt2UXk5tDhiuAZHTm4cnyLX2H",
  "key35": "4MXLdSSJhRjCwikVS1ReHwp4jh6WHyfnhZHUZpLynYT28D2hFCpMdYo262aqSkpaFUGJWitQkhCYVoDnuMJiKVjC",
  "key36": "2BXMfHWqwWA2h7upNPPpKnkWSb4hJ3tv9cVr1nh1nnNTsZY9BhRJoUN4uFJCtkJ4W6USL9pDXqDQhkovLTsDERix",
  "key37": "XPvwUTCAtHTU8fMMZySuPnRsTZqVEYYYkazDp9FL17unp2ywnxdZjWNZ4uF949e4XcLjcBgBZUDwX9hXHTBZqER",
  "key38": "61p4FTi197dQjzYXD2yKDWWpWWhZNPBEv6QfAqjczGFcdj15T6SJEPFV3ZW1KX5McYADPhwZGxZXXyEwzf9DReYL",
  "key39": "BhwzbbtzPhPJpHjUC3SN1rPxQ6HGwSf6Gz3FHWia54Lu3dtV2GqnxDkXK7TA8GLrZxqHgKJQc7Nsik2Z6Y1Ddh1"
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
