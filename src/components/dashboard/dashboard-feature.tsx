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
    "2x6rQ39YhvALtYL24jHPcD8dsFoJ5ueZtPbFUtAX4qu5DG6NvsTjT7kKmqxTutAayoyrgc1x49B9HANzG7PudTWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mvNAZxuEs3BBp8FYDiBnGxjfyzGHyH5vyLmxpc1z5ADjDiQTdEtXHTaBPDsJ3WtfAQW9CFMxMKUXKmpoyWV8ZP4",
  "key1": "2pVS5LEv2WupN8JzRM15LaUipGcvhn1SiMXYBW3bTpDrpVBjtpL7XMUp2WSAGEnk1pK4qgJ7XG4BTQzAnLAdHc1q",
  "key2": "47McWb2CixqDTKPzUppCAAaNxCWGSo1TUFRERP7rbeofz2XHAxBXErKTMHokbnueKkSGhk1HkxJdRtorqNb7AeAw",
  "key3": "2gP2JjWetKnrwN354apNzS1uBpzFsAPJSy2LkkGPyAFPVLaGbhv471mcfyvN3vSgLApTfd554ZNimbEAmgXWYdzX",
  "key4": "34GWP99TuKiPn3ktJipLywMwZuwyhia6b1TDk21j76oXjUrVEs4GvsHEYDprGVW2b46tk5uCaSSvBo5Xxc1JkNXe",
  "key5": "3PGQBCB5Wf3bL3t85fCjuZ5mMg3FLj7vhFWXf3AHbKbNKuoJ3rK9CQGfUbdNN7MoyoGs1998EAKtgNUd8qGKmo51",
  "key6": "4vxo3iNGBceMx9scChNUmQJN5tEj3qoHwJDA4qRq7RzYJzio6rCSvgxd3ccuU7zDYrs2UYjWTiXtEwH4bkFXc7j7",
  "key7": "2TMNS87QDQtKqx71vikT7J6QTQ4umkwpEk2zRu7dL1wg4KzfQoBxMvpi9ae843NRikwADM64H4b3AjpMH4KdL2Ut",
  "key8": "4XNVp13RHSRYHsPvHyZHytGcXoEH4CwVS6rRspJRsh9DK3xCbA5cHEBYYKMjxuVLUuJTBrPbRmMFXmGJXWpjs5Gw",
  "key9": "47YEzpG8D7L91tfLmdmjDxP8raHXZPzf7nuoBpat7s3XeCzYwkAvSW5kqUdJECPyUPqyavGvdHRgYgnZk1ygCYD3",
  "key10": "5JVAf4Fy56XM95T8E88oGHD7DVYtaFhEsjVSDn9ysdu2okSksgrQ2JXZHheSX2DduhJ6qgj1hL1hYN4ShQGVT4gV",
  "key11": "ypeTD7V4jbaLE8Pa9e1QghG6FikyC6Sct4SFt6sHx4hBwJU3nMe3CzHJCQb72SQBUQWqacBBacR5r4TrRY2Y5ic",
  "key12": "5nf99thSy8894euny3oz42pMmHQTey7gzmzBq4ZE6uw49ymFJEnDM2bnA6X6She7YpLSwnxjoX3wmWU5UFDhPLrh",
  "key13": "42NHPno7uPVbGAPJnmeH46HPcnLUucyGBWnvN8TSS21Zakc9CQPCH4daXbrrjxfqmoxT9Tig6GdBRVZsZpUBFkAj",
  "key14": "3oVi5KsXDPeq18Zvi7wJcLWHYyQLyjnUadNZY2yWDGVgbpBsjsbV6Tbfeeaza7bxuDXvMjsZtgaYNWh9i8VEVdG6",
  "key15": "2xRMHspmvUcDUiK96zYedH2PDVA5pkAnv6LNa47NzaP3dAcQh4KW5XjdvNdAXC59qFteqUahfmku42okG6mrqsnn",
  "key16": "rshT3RYxk86YKMj51X1yKCeseTqZbpePDEz7bRWPnN2uRZuJp6YwYaya8fU8M99Jt7DRCL2pSuqcu2dHGqiNrhq",
  "key17": "2eUnh6oVNLWj7KT6uGV6cD2zW9TaBFQVwePpkQhzcCtr9L4cfSi3AYuzxKHDQYqsRHxev5WKaZbzjDum5s1wiuDZ",
  "key18": "4QifRhKmJH1Ric4sUKjAwkTN6VGRtQ6vShkEZqsRot13pxyrq1hKwXqgGcLYiPFH59y51p4ToWkJbVD5jLvbDiio",
  "key19": "5aMqrAn9HzC9u487Se6Qk2yaMCpTCcgiRALfhpoLLkqRGWPhUzLBwkaaPc9sZGmGvpUGagho9Xx3UrxrJzjJK7Sf",
  "key20": "35v4UGiTrP7oszj8RNuwbxrQp5Ta4Zj4MhUNXMK6S64vg8bHQj3Nr82yduSWRwkRSSnLPJdKFCmWFdQDwmjfNXYe",
  "key21": "3JJ6Hx4vCqHon5kviqGsaLNoCu33DXucgxq5iGTPEN5qpWCK9Gq8wiAHpzYaPZqYiP5B58nmSbGEBCAoeMYcEg8i",
  "key22": "2JMzVR57CMbJdFboEPSnM9d6ppLcC1Nc5nPZnFq5B4pKzPaZ832V1wMSbgcH8FsnvCJfpxSHF8v9tym3QMXCEh1U",
  "key23": "3atGw7m74ypWn6pZkPK7KvuB4CUegiU2ppTwqjy98LtPzqZp6XE7cGRABgU99nBZQYn2horN6zWBug1WS2esFQkE",
  "key24": "5V22yVCHjVmCJQ5GotVz4u4gxuTGkyxH3dW2t8Ahpvz1TkYttwUDff6NS2h72hLuRLwdfWYhkPRp13PcTaHtRWQh",
  "key25": "5ZdDcsrwYvPLM2ryGhirpJvb5P3xBcxBwqZYJJtp5MiWNbYjE5D5JiEtRFsRRR9uLB45RURhy3Bm1xwQtDm2Uw52",
  "key26": "tvvheAEHZ8UgGvcLtfzuv64VrSsTuBtkecnLE9Zej8dH8zjUTcSCgBNdxtN64KtBKraJM7F6zfoscfkMaNzM4Pw",
  "key27": "4M1roUXvgM9Uv6f3tmLb4U2Dojb5e3WtJHEbZGVxWguw3tUmLHkEHDc2Ur3xFqsYFu9Cqq2A1d7PEtzDDKenyKBj",
  "key28": "S3bs8gbiakEtGE4CZqqVKguZiapMscTVZ92zCEfjmnL1Ji8vz9tTGcB6XCsHtGucugYDmaMfDVDjvvqhW79Rh5r",
  "key29": "HsMpSPbd5dzqDJSzqhPhgJ6Ce37Xj661qKSCT8w8WmToYLH5an45bhcgr2AoG3CywuRJS9c61kRN7C38itZ6mmf",
  "key30": "SHwfoWUvM2htbFtDhKxAy9Qvek3zcjqdKLNR8oyX3gXDSHy9jcs4wwBmq4AFVNgvNmEZPghuQz5vTnABWeLeumz",
  "key31": "2DUNkUmNsEYJDLYzTY34k4fgUL5DXjPhpCmQHVPagjQhCJVBe9Pcb3cDyXP8TqKTGuQsA4QmZGwK6FcdhjtFPAP7",
  "key32": "3QKfG9sYVQKbDjc2mAJG5faEbKSKKuwSDjWifTDnJVGrzoNnFRZPudVnxDLpMbkZ5LmjZ6smJtGEbiFc3uvkqeoK",
  "key33": "5t4xrf9bxSkmHkYL5P3XrWxT3h74SMA4CsvpwG2ns2TWaYcNmsgFUgqmqFEotQPkrWPoe3TyHshN1Ke2Sb97N3ou",
  "key34": "2YVYLSAJ2TB7ojEJR3qNRdBNn2bGaRWivgVKUTfmvh5gBJzSikj89URy4W3meipkftR1wnqCo73t4JYAgGLciAEt",
  "key35": "3Hwv4L8USEytg3hidnjNS2k1tpy2GXAhUgKkCkvXeXDqV6dzRREJ67Fre6XT59UrSLhsfHSMBXQG7bLWRrzgyGmu",
  "key36": "5PnGEL62UCzhVJ64Zjn8gYn1tTZcsge683pzwY3doU6RGV3KZD7ReEj59uRqh92NZ6K58GAH54qnNTXqLzBwQ4mB",
  "key37": "z3gd5gDDFxV7tair1QroD2A9GmZsZg5bghrVe9pML535jtaEwx2QfRt9s3eGTXhhR6DnpjuemubWjA71VfoAinr",
  "key38": "4JgbL8kWGpizXFm5kDSqMAFxTM3qd9AjjkQ1DEqpenRmwFrGCZSBefTJjhHsdBdtTr3CpnyfK52yXjDMraBYbUJZ",
  "key39": "H4FJq7vkynYdA4K56odtquYS5ZHJHGnfnSpBdzxh7wqKZDLn45q2w2ZrHpqzcLJ2SXWWtHZVn7NipnUP5qtuEaA",
  "key40": "3q3BKCyPS18Bt9WDDaM32YHSGy1khLBu3yGDZM2NFQHfYk1Czjr8RUrzDSgU3VkMU4WzBPm5jry3Q2xjSosjWeVe"
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
