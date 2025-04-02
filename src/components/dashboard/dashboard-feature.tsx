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
    "4GM2LtbU3Wz1xgUehjgV34dpwGnwaJVFu1UYqQ3XtWdgcDZP1hgtdVLjd4vzs9Hvg8aQeNVLtvtoBnospWSPktMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cik2E3p3gfDfGPuCWMQtNa6rp7NqENViwsuJwuw2JWHdK94LwW9WhmtCviYAixMHUxcNPaBrXAyX2P1u5d72NrE",
  "key1": "3bsFef7FKXBV7RNgwSkVEmj6hEkxhKv7CEykSKbUGmVxXheYBTGLYXNQ6QStzDR82meG3AWDk4zZwaFMKw1U59YH",
  "key2": "2YiThTHLZwzgcqq2E8Qo3UoiqudxrV9Z8msifpXFExbdFMNRVtTTt8SYhFpKk7Z8MhqJwNDzgGnC1XpbGNR4qmqw",
  "key3": "4Hpyyf2gsQfySaZ81YEXNDmVedkSF3KGzVtvB338MpCXsxLrTgaREMnepD8eM7MxeeS96YY9XCF8JpXN1EHSBZSL",
  "key4": "45xvgZw6htrM22DHe3hwMA4uXQ7G8vvFeR2ZinN4qfRiasq6Jk4G9EmpyzcuCptiiwXGQXj481YLNuJyV7qRLQuF",
  "key5": "Zv8sD4PQv2UgE4Rc5prL4aNVHygmE48wXtGqhKcd2tWaE8tqnVbyvSmkJuuaCx83BUjiYeEya9koXUix1Eq7TSf",
  "key6": "5UVnDZvxf1bf23uzPCNTMK7gvvk8XbfiP2KrDAQotcsgJfzPFBH3RrhkyDNVLQFWhiEQb1ht2jFFLuGcosGmqjnZ",
  "key7": "31AApXmuyRDu5U8Zb9iZqYy7cYJrPWVX8FBi3m2KDqgJ5mYbcVcBzj9KgM1dguoiQxGH32cJYL1zpyXtDRgUPqBX",
  "key8": "3VyTSphCU8DdMY5fUXGo6GGFbHsRBb9Vx46uheZgpZLW2kTXafTcqap8agHNzE2h5y75oj3taTT5KycY2hmFWUXx",
  "key9": "3GkN2YRA2X5NXRAkYSGG837zAzVCU8FwDoLW5hn8NnLnK8qF4naQ2aFqgNmeGqtHoHLH7VqV9vj3aJszCb6mop32",
  "key10": "5SCe4thfU3JGjEyQc4taTMfNgdjJo6b18ADZvrAir6YW8X6QkHj9uiwdDw3CH45NLN7mwbcFQWeU1HnaZBdCwxGn",
  "key11": "5kz5YTfArWMS6cgjUzjXV9zahXZWJLYbJCtVuGiRizrguMyKnpukPYPoZ6sZgjYy33oU1bUfJsvabEjQzzf82jw8",
  "key12": "tsEVVvC8RYpgMHX86R2AywRAV9V5XYxZDYWpQEPAy7dYMhNVa3zGK1hFesXMSWw5NzYnygAhZajcXCX4r1UAepv",
  "key13": "5ce5BU5iZpJdXFgMdhkjedBDKFqC4igEza13h5ASEwTKacao9mrhP5ocPD4D55XG4VTqtfBPwvyzQ8efuUdhi9bR",
  "key14": "2SBTsKxECVYNBjvvuPj468eWMeWCHLyR5tisoqssZWcQnSvYbA8sK3wt4Jkm2eF34EULaStavoRtz9n6ybKyX96m",
  "key15": "2E7hEn1wxwAf5GQBMjVPT9qud3GggAcjZdsqxsmAyCEGAJ8SvqHQ1GHhMvsX99kTd8ffkstVVxYj78omcZVZUcz",
  "key16": "s5AM2TqV5NhzxEkzcZkXND5BzifrjcmbL4ZKsCQY7DBFpwPiQLM6XJybW9SZFH9jFyart9kQiUQ8DQEqYwzADDv",
  "key17": "5e73yQ9RcGMGQ4SPQfbK5kzLQqLo48k1T8MvwLnSbBQws76qe2izRoZ17WJSUTR2naoPwUyLZi6X3P9fM742nui",
  "key18": "2JmkDqS5iKGx85M6yvfwDn2oSop1Q7Q7TD52zFfh9d6va4dUAWno64hYK6jGX6rZAcgP5xXmFvkK8haafDNRNDuN",
  "key19": "4M9A6MY4mdnDhsCxtWZgiHCHSCTNCFF4utV63JBtYRmPT8bwkz5X6yqjEmfCV8TkbgjL2JHuLHP5rnwtYxC3mVgn",
  "key20": "4DN68YbqsyEaGv1kfsP3WCHduvSK8dLQL9o4dH7JaCiiPPZjdQgAQ8pf3ZPUzm1Xu2MGtor1PSTD4oL96yo9rnk8",
  "key21": "XbJeGesHQPXy6uTZ5bLqiahf4wCatZTUD6oTfZpjSeRxErAqxfrdseB3iTJy2vg6B2am3h1yN1MNP2Qeq3tXcLo",
  "key22": "4ECSG6E5NGyeWxyTLhjupi7sJ9csF2BpgUNSjiap3SzUn1Xp6T88eRg7hrAJG7rL27DFT4ws8wizj7vrYzUp2QSy",
  "key23": "4dBGUsrPxo1NM3jAWbbwQoFrZhsFHQgwFQANgnJTeRsbCgPB8dm7pi7CAyVmx4u4a9Qi24c8yr1sKQ89vQUoqzXz",
  "key24": "2cqaX3srCPa2niJemJz5uoP6sXUUJBrdWY7JEqsuLAyFWoKhop5QBz1wcgsUKKQKRMwBnNgMf5MpPcE9Hh8pCP7j",
  "key25": "5WBzz7vENDwH8o2bsy9EexKZgDjeb6BpvcgkgodbisvbMuSkNmbwaFTUfMRXW9tgAiNWQixAy9GyYpuvkVJ5S1Vp",
  "key26": "3uon8PWwtMcuUXj2r6uKx5qKMhzwoNm3F4vz65V5XuB95QVhLf52t4H8EF1LKf7VKvvC5n8wFin5NYrcxbcas2sm",
  "key27": "5gvxpFhvqi8Vu4NC8pUCtSsudtUxu4VvnCNmrJyTr1rF3XyjASbQSHDoQYSvtBG9QwdFhvVarW16A5kwbp363gdt",
  "key28": "2PvRvSi3bHayuLUQsBiJQfRbtgAiXCpPeLYm4gsVmfmo2jnhvq9x7zAvTXd9MdYo6x53aWQMQE11BDFvu5xjedNe",
  "key29": "3u5XdLWfjB9nttZL2tEAJFZeXaYsrb3Q6cWxB4ogLeP1mMzM2f8jqNGFh5wWKTNDFsHMTJAzmkCuGPYr6XSn9YVV",
  "key30": "2wyesnWGQ8fCChiHT7VzUF7U2etAnD8uP8HEs54v5d7MQ2GmjjZQ3omePmoAaeSLe14JaaHkG9933RQKs7ia1Xvj",
  "key31": "fgHcEDdVvKXpoE8eM7gj81Q4imsqP9AV1SjwhykDafpxkAmdz7G8g3aRHChAcdqoyA8Pn8skuMaCHSVLuDENRh1",
  "key32": "5vdvjLuz89r9prTJy9tsp68XHT6Yds9TeuBr2TsciWPTdECjWyuGvtJXef4UT9jV7mmGvBcY8Nq9y4YuSRc7jMpv",
  "key33": "4e39opgvh7QyTVoAbQKrQ9z1tGH7kN7TFdCuzXjHn6B8BsCxgnL17DScFdACLyz2eSo7hdtVR16SXeCTsKtEmavd",
  "key34": "2Dm8Soc6zweJSXpFzWGWu7KM5APS4H6vj8Rv61eHuxM2TGBobo9bkPZGAdiktukXQQu7rXQ8cAQmKpQE7b6sj2oA",
  "key35": "2QhFfVJDyTAini65xV8HAaEYF9E8NhzyhUCavNGtb5BMXxEeEKGsHU8ZiNi1B3YonB6PewtWMAJZ3VK139vtTHGt",
  "key36": "5q8vgjRivkFMBWF6HpqK2FC9qzyZU1HjoFhwnDEUkRfA8WHosMNiBEkWFQBz5hzzydu7ZPtoVxpaGLUSghoczH3E",
  "key37": "jZXxgbKzQHaNwPLK8dFViatrk4jXnzc9m12NZtAfoXxgvcNkBhwnJq7FLU2pMCud5qsEL8mGDgwMeZquYLK4irr",
  "key38": "5DvgUzLuVD3Z3o1EqTqcYUJZBBJhsn3UeEEMjqLM4GnWiDcQ1ChBtbdL3g3et4Z3NX79sEPKmNoX53jPen6am4qC",
  "key39": "3TCKiZkkGX8vKWQTXtnu8fGfnhnZwb11geeBjmxqA1kqaGWXTAuXGsvLgTxGBheXHpUTZdaeo2ViDybbyVYDwSZz",
  "key40": "65AbVfRPBzbaLE6YpMHRpBy4gJUnVJ9YKebWHcztV9va3LaRYAHcuYboNmEdELqMqdmw5ReQ2J6SW38Ee66gZvwq",
  "key41": "3xQYzHj1ybpGYmnfsQ9KcWhrv8Gr4EcUs48hEMuLFoHN51Xun6S1a67sWkP31EDCHEe8fhbrih3eMWBf2AeXQYcB",
  "key42": "4AFBmr9X69bXy1RPWa9qnr7K9mKpfzZZhrueZXLTcVMYHjWnRCAS4aWSCstuT9VF1cAR8E8jiqThQEUgoiQUYHkb",
  "key43": "4P3Q4hykokZW2F3uMSrHomtTGwDKz3eLyY5Z46LfzznKPdQ3uCe92R8oos7rDuFWRPznHCcPYVz1WswwMSC5fbPL",
  "key44": "4Hx22y9goc7vxwJfP2sVBVoGAFNb8xevKHHGKHgEjcMBRUL5BbENXsGMSJeuzRqMA6pgoCgCbT7gHX1Zxgzqo2gf"
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
