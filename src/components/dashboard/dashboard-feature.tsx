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
    "AeSkE28Mzr4hKSzoAY3x4qQxFtsVkF7LJq95pLFERFR4oXZxmCv3EXwUKq98y8tqWMeAJUJjB79g5w8SR8Q166Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UPQy8gBdr57CwkNrhSJrKa5vdVYz8a5aFiHdDxpJVAuGeeDDq8nPjaTmK7t2Eby1gp9F3wg6SggbEMiEJELaS88",
  "key1": "3hMkXEmym2kvauTjMbunN7Gmh6otTD7s1DgUh2d7f2MtBnyhh5bjdnCaGSW93RYFHYbpnDVc2RsopUsxQMDmEb4i",
  "key2": "4QyP6QkW2daKo6hEufNYt1aRwQkthGHvEoKgQf63GbKphqERwJqsYxWsG8hzrrKX2yia2L1sDoLnQThHwJ5PNCDD",
  "key3": "5qmtniAh7f72xmKYpiGwbaKiBN7e9B2QPGLQZ9RoADiGVeYej2mw9KGkFpN7tS83AsviSUQfZd84fZamNyGgjdPK",
  "key4": "daHM7qS7DdcumrvpSsaUc6cmD19VMdbzPgd8tYKpHXqRGwdrWQtemUwLhvXsVoKpNs3iWMxtsukzsgvJeEbPc7w",
  "key5": "5yMpdRVL3hwoKvZK9vBDGXDEVvYMLba14ZdUyfUKZsPQdiK1jkA8abQbgyKRk8EyaNVpd2UGYJ8PKFifYs5MChAq",
  "key6": "3Be5BKvHjxtr6sRC2Aa4dBq46iAhDY2ZmbMRyQnothAgoDjkRy2z6NCpzQJxGpGEpd2bxak8m3qQuUXurdsMLoNi",
  "key7": "4fknnowQgV9MQZaTULt5u5jJx1PKvQZV9vBtLJ5C2VpfsXFYBCayNeXczm2gL3QBc7yAitM1iTZp8N2PoQmsQoW6",
  "key8": "4yZR2TbPRryeFUjn77VbdDgnNTyupxsieSbR2c7jkSXGSPm2n4eMzR3vd7V4B2qn5ZQ39XWs9JoFA13hFHjeSe3h",
  "key9": "4UjnAXALKNPdXpv9jD6evatdXfSGVfG6U9aRjZ49qse253LuoVpossLYaay6GV9i4DBeRfaoyFVUKwAQLRhGLp1i",
  "key10": "339FBrLiwmMyuQiWzHve9Zsw6xEuAfVqFBuYSw4jJEEHMBp3FHbke9DcmQNhCoFsWdub3dMF37cJ7U4vxeY4aSnZ",
  "key11": "5A57H9RFkSZM28GgYB89sJZNDpjLcbr5FLeeR9JNbUWBeTJFtGYFTcQhCAx3E5rSjH64V2PLsuoMCJiBDKcG73Tn",
  "key12": "3EXZLSQBcxqTjf3nBDqUyv9ymCTK9BE3FRUa2kReke4J1zBMTywgXMj1Vd78Ug3a93DvCLeP1HgyoSsd2qaBvZGs",
  "key13": "48m1RnatugQ5o1onkus7kpvL69UPVGyqgQgqSwM6ZxUkFz6PPbw26VMmmB6xaZVTgSXcDqdY98JMdmWaNtN8wZ68",
  "key14": "2SjD7MEDDYf4MKuwDJMT8GofyZBifH1QYpZqf9Qhgqb2nyuiDupD41Y66RbFnxR51m15fxQHgPruNMXoSr1G7EHk",
  "key15": "3W9ZM4K2YECRWxEkvg3YcnPsvqS346bzjrdQD7EirPxCKYkws5eCSoVQrge7Vn5BimjVCz7LoqoKU4ZLgfuY63Ni",
  "key16": "4z2prUXGbthZRfP9jeAbahvJqE6VbpHvaP5Uwk5sSc5z7PsPVGXBzQbXzZLMrQtRfZySVqXteWko2SRb3VbCwTyr",
  "key17": "2d7zqvxgrYppCHzwHvMEspodUE8GnRzyh2bsdCvykK6QEsFg8cfv5zVaKWzSM1qquTymtJpqwuGowNwKxmmeKDYo",
  "key18": "2o9qaVeKvRGtDAh6SNAxCthFaTTDzcRrKae3TbjFGeuQwCnXRPqfU8W7DoQsDQeDKYAawqtsD79ezWer1F7BFsKg",
  "key19": "X3zcAVZUemimFsLM8DtMm85y6TXWFpaeAVMikm5bJi9Ex1vjuK2HW4ZmkDzq6i2cYik4iqG21bAb5YtQMbDiaVy",
  "key20": "4FBkpted12BDgpQBGUnq4AyhLATHsV5fRzyhTekDDXyiUYW6Q93CJzp6LPg4TFoeEHmEAYLrJEvEfZT4NZbpeS7W",
  "key21": "4gHBizQSb2zGpgsTQWR7qj5r4qPMfuA1WD6vHw2k6XEGQ3DGMZrFCKmVa4PXzDG922A2m4dcFG3GVqPjvDQdCtNe",
  "key22": "3ntiJZZ9KmvGk5oCbcCKoXJTALrATguccYxYwQ7r1Aokd9bG6B2LCCxz7EyrYkvEEYziRcd2joHTxq4GZrPKXzD",
  "key23": "63arFKyg38acbNacQ2VQb5mLFLjhuu81QtJLTHnFrBTfSfreFgNYJvRAmSkYJE7xQb1ygSDNpLEDmhuzXdn1XXhQ",
  "key24": "77KMnZRTZ9qd5MEVnjVAU8UBU1PLrRCeb4J8gvkTSwwa7hHhp9hFazWPWaKDnSjUmRztVbveZZBp8e21bH8kMDy",
  "key25": "rpsfbvbVtvsVKnVr1gJXo6yWhzhHDjn8DxPMH4Pnv9Kg5UgW65U2fgUeSsSDijBHtfWr3HFHq4jXGd53TzhXfjd",
  "key26": "4ES8L6Kf7cZWags5uQEahrQi6gX144CAa734WTumDwt5oB7dHiThmkhepjCact9PG5poiSvjmEapnrKTGxWiiHox",
  "key27": "4VFouViBNizd6XS5szDM28DiWWr6M2dPGRB3umEpkgcJ1N2eU2vRZgNFUvYH4mkKjqDEBFq98L6n1K16VsRrBw2R",
  "key28": "58USx7Gefcet6rzP4qEXutHtRFAdEe4RfTzxR4UHBFAAswpCfhGxc5AFSQ2pfzBqyPebHwBQb3NbWzvvivfdaDE",
  "key29": "5t9RdWAgAx4xbNc54C4TZGK5WxUakCP3GHjEcJGSFX2rjCzZ3Y4F19GvieLg9tFhT426iAkV7iVqH2HMtw91QS2e",
  "key30": "5vrxwzxk9zjcqHMZnSWmZdfyBdWKRmzYiNmTG2v8gH4mfkBpYpE3UHoQRe2NdyKtNW1iqWs7WfW7s7yjRNWow6mS",
  "key31": "3HzBqHkWtu9vnnpvMy5mm6QjM299hpwomVtn6DEwyDyXthAsDy1WAodQ9ueXq93MzSXWdqtUu7yDTJzZ5vGk9Vzs",
  "key32": "22PjfeYnnnP1dNbQRDMAAEy2jqtJHFudc61CZs23syynUygNADqpnRyGGYdEQNkNRxGKcdkDAE1eFkG1zepmwiwe",
  "key33": "wT1aVQLSTbXuJPvWTQCksoAyhKjNMnzqrtjeuYGk99dRGLhoU7tsRudMt9DWy6g5ku5gFQzjXciLwePMN5iqkj3",
  "key34": "3QPdQLB1mRu9AkBAQNUzf1PzDijNPp9pmSMKaQ8Ga4aQxQYBJLRcyvTJRgej3ahDcipf6QN4PE9wh7B7BxMzpR9v",
  "key35": "2TsPNMymadvFD2TQo4hF6roWyzr8kAfwUJzdEMoXvgUPB3abvJK2k9hQ2X1S8f6GrPB7MqqPLAfPk1RBZk7saHYn",
  "key36": "mBLfsMgSDTwr6eAZfULDZjf5Y5dRF9MzQoaknN8cQibftLvwLawRMtANLakGAdkTwRLB8ZeLo8pa9FPm5vVjhsp",
  "key37": "4mCwuGZHR7r5gL4pRQZin28isd2dZ1Yzt4nJPcrivnu6TX6Q3aFrVTKK6piELUXhbV7ndMofPKmL4JGgbZJTpptQ",
  "key38": "4yZxt4fQSMQt7eZNJ68PwTR7bPDmBbH4vSmNSFMutJBfU4EADXCmoNttXx1m8KQJcaEQs1pzNAa3DVqCmzys1oYG",
  "key39": "3ytdW5sSNg92WuLNJ8oWgcDB3ANCdFmQHGM5DdDzj98wknDekZGUTYDXEaTT4tXicdhsnhyde61ToUwJwRRgojVN",
  "key40": "4XhFiLxzjL54JpEUCf57Z6h1Cv6bL1mJsU8dWHivdgkEx13GjjjQ2Y3WRWotxEioy7KdVCx52DDpWv2w18EBfaaY",
  "key41": "K2CzLiwFxs58HUVsLbZxZcNuCsjor7LEkGV1Cs3mTidwXSW14HC5gu4ouRYKHjFmK81zUfjKEtm4owMzz2rk59M",
  "key42": "36AsbzpuUwrdzJsLZnmbxNWxuhMP2ezPa7L9Lcbmp3zZCExZWagHjYsHTLTtNSmyGetUc3naqvr3WayF9XbFnh5f",
  "key43": "4o4vkMgNb8NZsrHu8k1JywRBz9RfEoVPAtRkAoASxXei3Jg2cZezMgwKBfs9UApTRcLBvHNxcUZHAzF5TTeHhfMV",
  "key44": "8JZy2Bfhj4EdjjczuAWb4VYWqhjKKyhx2Rf1FFprfExH7ve9c1WbGkuPTTecJwBDfYcpkAKUMWugtZQYo8Kq5Gf",
  "key45": "5ocyAj46EJX4kKZ34AC4NP5ThXZjDmU5NB6jygUm5KpKqRjBnRoUpCwZ3G1V5KtEM1PdzLisVDRKSkYYgmT7paKG",
  "key46": "4Ln4iULrVXggFRL46F3Do3wb7oucdQS6waC7wCXzyPd2Rpicj9w2LUPvpR2Q2E6GLizj7o7Wtk7BtxjJRvnDsr4t",
  "key47": "4YegiqfX9F8nRVd7jSQoSe4wmTRsTuFLvtXiJBwCSFKpT35ieBrzhPqtwMgpdN7x2YKywqkF4SVRH3wSd2qFoSf3",
  "key48": "Yz6dx6WFkk31wHgTiuVyvgbgrxRTwXtAT6Gzma6jnJfQQM81Xhc169BpVhFmYdSTkK3B9iFFmDJoc9n2n8CfcdR"
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
