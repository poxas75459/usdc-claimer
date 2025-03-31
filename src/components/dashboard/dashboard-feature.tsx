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
    "5Upj6cJC6xY2jVi7rFAcNEkh5zu7gSEsc6Aav42XM8N4YFxkakmjna1YQXLRfMmNgyHHmapvMzkgHE5fYob6tNQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28XT8BtqygQ4EUECVnp5VmCH4oYN6R5qD26enQjQrpEkzr2ybyArRf4KUo9u4jLD2cWeRfJFqS6FqzCvvUZH2nn6",
  "key1": "MkBtAHAEqTcvDuiNYPFG8GsvzLu9P5DEnHkg9Nj9caqYC72CNcB3XrzuuVwKM3175yrNoyZgZhEzwQKBqPFu8a6",
  "key2": "3XgrFgaKeenP64Kqc4Kko4ev4bdaHQKAuF4gGEt3svqwVp8k2VyspTjcycTxMvNCjdaJtZHeRXatQ2wpyimXtK4Z",
  "key3": "5uY25JgrLfiZNYaK2eWjYHG3rt2aTUxuuYxWUos4Sxq7JHnSB2oSWL5zDjUkqTxQCtKbEDsHqmn87VY9u5JeQr9a",
  "key4": "3EHMc41g6FzrQoGNQ5ERjax59euJxWrHbtXkxZgURz4PDTebsP9d37NLMuUbW9vFPkDBpBQwoCpHA5dR8skd8PXf",
  "key5": "5dWaEjJvudXgUvQTx5FVYg1oiBQAwRDNwGkzkkq4YLSQTtJAMC4NjKf2S4zVR5yXQY5S1T5LuTT5SQAYjcYz6PTz",
  "key6": "2z9nes6Ffad8USLY94wwHBC91kDjmWPbRWNBtni6eqbTtkoLRTKBufb1r6YisWjJwVenxU2PvQ81HAo2AW4Yu8NQ",
  "key7": "3K9LupFXAQez4hY77CpszAUH5LacKD4ETwCw7CgKmyWpaWS6A4L4P3QE8LDJ8CANt73GXLWk4VWNP29KqcjTzNif",
  "key8": "4jwLLVBdmhVS8NDR2opXKnhZFTidUo7hQXx3J2CdNrjKu5kKZt6HPcURJS3m2WYTd78HA9GFsRgQDH9zDeDmeXrS",
  "key9": "2zGqQn5bKgm8yUjbt4J3GyZ5q9a5TqTw8AY6VgpzEzQk5fJrasHkEZo632Bg66GDFArDHsoGMBjLWSVUL3NC8RtT",
  "key10": "4yCrCvcnS9734LdMusQYdfULsB6mjDjGvunvK3224feBjV6WZ6AAwyrzz53dDgK8wsw5ajq1A2b7xZB33xS79EFP",
  "key11": "4ahNZDsj9gRtsUSHrBUo4bPsPKnCrnPURnnw6xycLbVdESh3CAE2FYJsgHvyRb91d2zVAUyRd7L2CgJBHifRHiHS",
  "key12": "24JyfEqj4C3HkYejnGaaxQMKmPBKRcPjpY55pk6txPurVeXhFrCtXmFM2nrKh3gbWwq2dsMHD3z4pX8KqfjmTJ8G",
  "key13": "3XBDniNmrjiDYG6Zzd54Tj9M2LQPgxwJ8X4DtCXnEzVr1RE97UDGyeicWRm22VpUqNacPpJf4q2MwTo8vVT1nSYp",
  "key14": "2kAYtxA3PwAENtF1t43MPUEs3mzEFfWKK95xRS51WMEtwXxGoG6DPLh8gSAL7hdvfjMZe7VY9Sk7M2oW73bit8Uk",
  "key15": "3V3FL8wFAfho38qydbEdHfAqFDi5erKvsSJeUSpE5dDsN1LVurySe9Ly98uFQc1ReVzW9XBPLdEkmwVGSiHDHjBt",
  "key16": "3T3QE5argRP2aAtL8NpAiLBsZ6pGctxFCFz39Ltz6ABc7u7qCjXtzVJCcVkjXaHbvE3XXzydDvPMHAL2u2wDpvLp",
  "key17": "613mt1aRKyAKMZY7M1AWReyexb6KoVvvHjeo1HZZRyYH5BL4GpUatSivGAD9G2i9RDUawYPAXMasYiXmHsFqdTsU",
  "key18": "5HKuEAm65Dotftn9TqqPxim5B6nAtonn4HfJ8FqGwNiAoyvKoDZXSt3yX2fJ4Na7yrxAPxqqjS9VNQjsUBmJY4Kb",
  "key19": "3HrWmuFDyQKGKGT7TJ67fJhRvG9KdWJejtfbaSYbA2JEaNJKfRFCaupUzX8dyUVHAGovWb5rto38vujuME9QRaET",
  "key20": "PUdnSXh1XtZ1CNtK5w48iXCyLj1U4jdABuRxshbFLwH9vKR4ZTXP4W9oyaLtuaQpcvt5ndeGDPm5R1u7eRAxqFr",
  "key21": "qdwPDYyauAjtbnFBwDetgB4kzKhiVdup6R6MYR5UtXmV1Q6eci6EDHsU3uGS5TEvgiH1Cna7i1Cc4ju4b6A5jKF",
  "key22": "49zb5BR1nUZExmTw8x9M93qWrRqsHS9JH8nxfGcAdT6uhTuF48Fvwdf77PFtowDPT8VCzzxxt2S4cmMnGiyNjKDQ",
  "key23": "57w65ah3zu8jYrKnSou58hX6L671EgNZNAM85pmLHhA4XTFyK7wJxUHaAf9EZZ85qnCBf3b2AW824oWziy26YKAj",
  "key24": "4QRoRgznFWkE1qUjh19VP1xoBMMkgF1pejha9TN2zykcnKmrPNemG76qgteE6ospUVZuk3qJj6maqS9Y58ALJoJM",
  "key25": "4tGJXbxacGsdHnde8J6L36DxLNz89G2PNyHo2WjkedsHgcvHgAKGeLffZGc1uciN7sFjEEBYaSy88REkrzTMXz8n",
  "key26": "3kENzwqmMsxwKbRy8wBcx1jgMrrdDKd9NZC4SvoPiG3hWgWTVyW9gWf6vEsoroxaSaQZsJxMbqM8uV3N2rh8aarc",
  "key27": "5keryoMXdudYEaUowdKUu4bR4VibWohfVaekXR429rQXXnHojpbLxFvfTRV3njuHEC9LoQ8f7bvqFvJ2ouryfea9",
  "key28": "HuQN751Xi5eCEK67V9C5tnJfsrnqJRu5dpakz9Kg8tgwXcH2tKXtAY9L7Wyny9N2fYLHSFno8omMefFJzEojvS5",
  "key29": "BQy4Ad2CG4ZbnMwx2TR5C9QPTyFubmwVzZf6uAxFs9fyN4ujLyot36nq8TYdWf4QLqiwdg3UDNzGWcyChcMLJfX",
  "key30": "5be59GyAn7L1Uf8ePvu8KcBbtcn8dmi8fjohQtTHRrWjPLVYggUjrcTTaHFWxUDioVKJcMzfFnXx84b4ftKR6Gpi",
  "key31": "mtzowrb6B9TEPwRVBo3EWwcQMvERMBdnGviptZzEULCDWmHR8oXf1WgYUwz3fRaCpqUNwfdTsTgMqRM7BGyTSM5",
  "key32": "33tE83ZiHSL3wFVvB6ETPrSmdYKvH91ySKdiGXin3pqBrYaKocivKjDsxEm2NP9xyAX8nvyddt51UxUPqbetXZ1G",
  "key33": "5PCEt5LFyVjBmAQprTguDBF6PQC77nLWUMjnKpVCqoxvyoZ5vfM45PmfkwAyWVua1K2ZUda85dTJ5FyPD9wLqvqD",
  "key34": "2fLKhHQ6XmJgzuWSDgjoSsCk3VygGb2Yqxv6CzUYabzAHLRTjArfKgWFJBqmehyBEriuBSW74rn8h19M8Gz5cZQL",
  "key35": "5v7uCUqsQ2uYVgWUYma2ukguoWbPCWn8APBzR18wAJdtfZ9ieR4trqgbEz3e1YGh93mkNfPzLzz1rvLqugRHxxY9",
  "key36": "5b39x7QUDcpiQQu7nFjYYSCe1EuGE76tLcnrmdTFYZTB6vb7fSQbhT79gYmuJS2iQfHQ7hrisytNz5yRmbW9Ccuk",
  "key37": "469nEGyddyd9KMcEpKxN8dMJa84vKAeeoe7ZPcAr8fSNF2jmg2Ef8ppgattTy1nZeZ82KU2VbqfLTLQbDjrEY9du",
  "key38": "63w9rv7afx7Kc1A5KwbuAXzG6axUyi955cVmmENbecVL5ceiUThfP7Uaxu8YYeX35CZr4MJzntYYZubDTTPsHCNU",
  "key39": "7Lxj56c7XLiLRt19STLERz6iSqzuKD5PiXQT2f6bRR4oX7rJ8T6SV4o8rSz6xSste3RpfNTQW8f9rxgZRXwTCNo",
  "key40": "4nSuqHhBizPUEWeBhMdKAKYWrd8U4wGvQpGx4N1nwzHAsaCSZ21ekjiKFYQPQbgPsqmsG8ZAg5ktkCMghLnkVW2T",
  "key41": "4LGupoodATyhr7mfMqjCPLBSsV7dQYFoUKYYSZ1S1vvnScPXaBXh6Wq2VeXqWzzDSz4P6GPKEKJS7C5DMLhD2sdW",
  "key42": "3iiaUxSDTq14mvehAtWS69B2uGfvdR9RddQxfBXsc35tZXtwwgCGaHz7RmdCdNwma2mpnLHcRtPDPfhiTUwVjncJ",
  "key43": "4ca5eLf82PKSbVMWwn9dkWGKAS6e7S5nYa2cKxW3SynwtgdD8wdi4DvCwRRajqB39UVHvaNm4J648HHHfSrpYQ7d",
  "key44": "4AN3cSz23XCpBxuVnVn6JJrLX2YoZi1LXP3u7SxzAmfWcbmxWBvudtoR6AEE2UGZLpJ9EgxNETFuiPEAMwYBfigg"
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
