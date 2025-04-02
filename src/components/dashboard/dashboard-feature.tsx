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
    "4mYTM7SBVNkmggMTQUoDhSDSQMcgPeniL3J5hG3281BP6bmjp87Z3qMqCEhKWVpVZb78z3YVDW4jVQvRNfbJmiuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HKRGpKvKHnhRd9s7iAkVHY3BWGVaFyGmrFkWJYyJynd2TNoZXHHbmgoSeDs5f9ukCQs6TfxpCmZufHbnw6QXViQ",
  "key1": "3niUrhRx5m3ChUrbjCbhDdVQX8haPbQ1MpDHunh375UkdYjsJyXwwudHDRUeYTBQ5Qd5kTLt4dZ6aiUZnqvMi6n5",
  "key2": "67W13kPAHxAsHa5qCBckNAg2VAeXDfcXYpXEY6PxkpgNFkPHDWicZYYYNA3jMg3GjAihJbKmTjN2T1sVfTeEUr5V",
  "key3": "5TXwwExacSB6e7srzsPx36BHKC4PwYXM6rzTHNTtEkLwkyG1tUeeLnb4cyVN3WPEzSgfMyiPvLweuMsTUSV4PKCi",
  "key4": "xZayp47w7Vhc4vnk22bUe8w1QLM8o3GVMajZUkDq16Vn5pM1ZRkFuSChhExnUHun9XxvfcQnVdX1Mj4zTNwV2Jh",
  "key5": "3GKQejChG5STR1qi4gP8vH6qBufRckKFdWZqg4JNKDSL5RM6GCPFobUfnZhoetCVFQbeWCQ6ShgSF43WsgV1qz84",
  "key6": "43hrNAkeP4hAQ7KCLruZy9P1ktt6unVUTJsdYe26Krt2VDJpG85xzFtwjrxYpSpfQaCnSYdTcv4QPAWc39z9i56D",
  "key7": "5FkGdy8xc4tunsCp5avL2UustwrANYrm4YiGrLuvM56P5kvFzWnjSFQZBjHZZNk6PcMTdYnXsTDSFsFHiciMAXNN",
  "key8": "4aCaS8PMyxZ2hwqHmFfo53wedLG1aMzrpzo3wZKidikhBhfihnSgY8YMqSCBMdz2wZsd7GCLEb4vLLRysW1Z7yeA",
  "key9": "2psV2qsvYRLdWNZnoy6rEDux7AMh4Re187jaJRG1PwfQLTCYCUNaYXWqMx4gERRQTh8HDS8gEhzAR2E1qW1MBDSo",
  "key10": "28MSrTx53yvsG5Lxujk6crLaE1janQ7DGgQGyxnYVwaCBsHXvyv2y21edGeL9NyXsfWXVRsSj13eMJVEpTw2in57",
  "key11": "2Zk2H73gyZ5kbqv1bAXxU8KfQyvD7FkqiWystBfdXaqUAE3KmpxRFFtpEUZNvAG6pwKN9RdGUNp1GUgXjFHjFDdp",
  "key12": "HgeHAxEquyL7CGX3qgEKHK8LtngKywc19MnsiYV8WH1ejQ9HTttZzrEKMHgrBQeZgesJQy3n1TbeSASzJ3GDJsC",
  "key13": "5eC4kf5qWKMPfA5xFEzzenwTrHSGfpz87Bj58AHihHbjyyEn7rFf5zAGcuC7oLcn3eLDXnvdHknw1DknnfhZxmjD",
  "key14": "3odkTZdEtqZyDnG2DkxaHAbBLTzLqSLUfzAajy84YnJnJrUZ73SGVJLvSvqwQEPwcj21fugZSzzZFrLWN5ZSSZoY",
  "key15": "3P8Z5zZPCJMzpLXjHNukruHZkNsLmPq3vvytLqbAqQLfPGRGozuXoKKnfKLRhMhY65mbmbmfVf8kk4v3oeYo5mr1",
  "key16": "52MfS8KqoeaHoMwqhsttFzkfN97qWHCRUg8P6CDHnYftdBGF6FY7MCPYxw3nU8QsKYjCjtvBvDm7ec9GKNDfwnAF",
  "key17": "3fPn8Fg6KD92uYVJJtsTaGajJ33Aty9Cawa386RGBaUhQukKvqhBRgBCRAAvCJy89iqGHyMHuqvyP2FwCAhCRrLW",
  "key18": "3ZhhuV7aaebHXfvMGk4FCdG23QVVP2SwR92qqZrLDSV9hg7qM6ZyM8ytkzin7peUphhzQzzA7PbiE7mJ4PB8KGZ9",
  "key19": "3jNZd2kEVJ2bdjYdkBPPeYbQp6FqwcG7LCVAkxdqe1uZGjQCtw5c4ggjRUscGkH4qcMrjNbHJYdjTs12j6FLCX1K",
  "key20": "imXtUzGnhvBqskd3kyNezghUg7VKkK79YhY2BgJkdzrmid7VmquLMMeBNtLBcqNiMEYCdnb4fH39q5NtYjDsTK2",
  "key21": "2puz2mfTurYpCvrLdRTMQrnRL45eTuqfDStnBtTYM8u31LiMSiuCKRVEDQXRzqhrZK3waqv7PfsSfzYaVNpWkk6g",
  "key22": "4N8Lra4YXs1Lt46LNkri1A6T7BjjtExNAW4kvp9Q8GZjWZsMF4MdT9TU9JUaobtnwFPh6iwctoC6oTBJUzHHCa2P",
  "key23": "cBUPJ524AHae2PndX4TdDzLU2SUG87UXMNyhu1jH8tYFqgQw4GtyU3WEL6ffTJfghAXZ5JQCAy8kjQWhBLAHHA2",
  "key24": "3DVkDiqAe2NH8XYeExyx3MREJVFZq258w3fZjDZQLeocy2yCgRSjcg9MaZXfoPKgb5hL6PtPfZJT2DS4DiNcXkqL",
  "key25": "TcHM74uDtS7srcTwkF463AQVJJpLritov9fV5muaEukE9VUA7wUhBedDzkaVMsnP76VB4LGxCrbz1KLL84Qq9Dn",
  "key26": "3od61jQupuT1jZHYsS5MQ7xSuw6282ENUmLfnhXMhK5F82vtBPzDXvB2AJi9bZ2dKNsQMQHXPhUTYe9HBx7AakWy",
  "key27": "3ZdQFETTyBpPVwsj1mW9oM2sJ9vknArXw8shjV5BoVYnBL7hCDtwpfRJgtzbaHTwjPkG1wcumenDABhZy2d87kCy",
  "key28": "aNNBoVmmBrLbB3BT9bq2SRQuBLtLpzCu68n5keXZz27DLRKkcctp6Do8MLxHtM2wEoRXi5YaqT72BxfuYns2cGq",
  "key29": "2T7fB2wQsmcZwUEQQo9ZuAQysiEdWpSjFUNVHMLYzK1VTc3kSuEispEKszAtfnZWHoDeo2GSJGMTMy7iZaTLeS89",
  "key30": "4bBZEPZK695GNr7UhXweEH633HRoAdJaqQmAQZmLHELCfPbDFNrL3APjGqpgAVnExyPYu8R6Bf4hsGUPYgVvGjnk",
  "key31": "48Xh7qgtx8cv3TEoZQpKzJf2SZYNGSAKi8MNUVZMgf25jWTc9eGXRNbu6FVBmMae8h4UCmeVaNPUua5LX2z48gsB",
  "key32": "197S9JPiMuAaiZHs7GEP3HyKBwYaGoS7NpahbV4ht9dpNTZwg2Eoa9xgdFiAXqAVSWquaRgHTDQb5HjLVKrAZ8d",
  "key33": "3JojSaKXTPzrGQZwojEd8ZCsiuKTniieu7FLyPAwfDnb4MurV2qoJMSK9ecSjH6oNkruiTMbSdH67YPJX5UG7PaR",
  "key34": "2YXdmjMfd7ULsb5DJXiMeqPJz4q1nsXGaV2aGoqd4oMmYDfZzoGcFSDgMReUwaECGq3BpgsufsjBPBdmKvEob8UC",
  "key35": "5sviyQE1KyeUL9fpLhV7hfgbefLTkDs9Z8zyXWVYu3krpvkd5zTbT2WXmMM777MvkBGPhFazmPoojJTn1AKDMP2C",
  "key36": "5s67zgo6MQ8sWjBXzpxbvdtppWVgC31Aw3mjvraNqEfaVBopz8EE9Boa9wZyvhaDdwgDEVWwjjJeCkXUnsEaJ8JD",
  "key37": "x8HMEtL54SLGN4DoqHFiGY5MZqxqzdngrU5ZqyYKaACPBrvirh4hvy1bn254TocFuHBsTFHbv2oqK6ChTFVXoLH",
  "key38": "nVTaQfDipP2TnYouNvtEudqB9vkkhbU5DXgc9qrhfV65YywNHnHCBfg7ecQatuS8RDv3aBfRRuw91LdVmpKfd8t",
  "key39": "2r6RqYT1H26SRfFvgB1N9hEaTr6eFtAsKr2PZepPtabGnxWQjP45hEa1AutDMZd9AqXmagr4JhvfBMoL5chnwgQS",
  "key40": "61Wf6RkCMByMf2RuHMvR3KQerRrQv5u5CkinNtZBUwhZCEiSJQL5YMJVdrfFS6RPRazv2wmcsJPbHtXdW5CY3Dtg",
  "key41": "3xALAYuV6ynx3Gm95Us9oiPnqQPaZPNHFYZcJ1g9vW5JmLjpkBW2zEyroGxMxKyuNP9Xqd4MwhEgnQBek17MLarG",
  "key42": "4sFQ5pPTvzN9DPPt8mtJ4F6usa4fYC8GhAUZoZVehFwkkYZ5T2VWN6wXj9ELZ79z8eciUPWux8qsQsRTAeVnstaP",
  "key43": "FknbrvdEDZT9QL5SNrJhgx1DoTrEe6kzBi8QxPRGiN9aSUoHvmSq9RDMZYW7WMqp7s8CRB4K85xGXQRgLKzvYck",
  "key44": "63wKPDTrA86qvSDwJQRouWF4WpAZ6571Va5PLGTwTsqWZWQBiD3WXHDouixgXLgEauJZb5932AcCFqQguvGQ3dpE",
  "key45": "3Tovr6vydueFw4yMJT25NizyKEgFjqL8fViXWA13sANufyhWXGqpRsPvgRhv52d5tWenfXMLRNHTNyRZt6iqCoMr",
  "key46": "3cn9qmMNi1vgtKyQvqWkB6KaHDmPs9Mc11ntyEioBivMhUasjMLwQAJvWY3JBABXk2agBFNHgCnhGkaK7qgkgARM"
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
