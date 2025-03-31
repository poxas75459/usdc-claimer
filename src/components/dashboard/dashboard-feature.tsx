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
    "FFfvdMuNPjVDWLjpYkyY9UWhaFAz5uHyQ3uczs24j1zCXw4S83J8L1CMBDnjWcwS8miG5EeVXhiSK4Hqz2g7Czt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28YSEKyS9sFkhr1ctXHZtpymoy7swUV5hqPqeWaRVKifN1SkskLgbXqiufJqhJNFbBSr4fPQMddE8coome9oLe8y",
  "key1": "Mg1FE8uHdJmbUUveY4MpvFNdZUHPLpmEm1Vb34K6LxvKYxTXmf1YWKewR4nFtEkbME9gnjvbRTtJQczmqhJ6gFf",
  "key2": "5BLLQxEPjVGYYthW4skUVuN9arjEfKK8wZJWvZYv4YQkgh6kVHUv5d74CRz9uRUWk9QrAqGRsq9BJ9g9xVgorbDU",
  "key3": "4yqx4HDNen6NGogBMFfbtsVoTq5z8kKyxn25xuigpJs83Brz4jSFeiudQjTYfRWSU59cePF8C7PwhrrpBbkELbhh",
  "key4": "4oaK4oCB5GC1WQMPkJUukFxVef3oJYkh9EUokxmKf8e5qmXZ5ZVjLB3fpzcyXZ6NA5UHag6pGTiWRbc7AdsQfPMU",
  "key5": "TZxGUdTWgiyNR3qxHQuic9PuoBnRrxq87QWRXofNyJgKKbN8qH9RqLKT27RacuoUzunnw3rSPgtfxnnGnWEayMi",
  "key6": "4CPSGy6SMQVk8gv64S3aSDaRqNhvd4W4zgmyyU55XNmKuqkMn2gzo8mQvRPTjj1VJVyyUPeaVLrNznjEUsjNuFgx",
  "key7": "Y3zDPTFRpxWiBrCpwyqy4SHEthM6RDjM6H5rZj62ZjEfJNnmCmGyVNPu4QER4Qv2HTfYRwsJXV1WPDmNe66yEay",
  "key8": "3bT8AaKs1wzdTuFWwj1mNAGLtmyxrQyX6qQ35rjSSN4DeFoHTNDxvooDUzccqAU2pM65s7ha9giePJPQ9iuEqMzn",
  "key9": "4BLSYkLBDoXEUv22RextommmxpT2swP1nrG2W4FREX3XuDyDtdwbGbtNFbYpf6fZQRkKWDMgAQEVwSd3LAUT5sim",
  "key10": "4QNgpEvEBsM7rC3Ss6VLMj6RKW6oKxbkbQZSoBa1zyaXxLjVrSBwdqzn1LvX4HMSETMoThiCq1Cb8uCpiiwzM6AR",
  "key11": "2DpE6Eq97PG49kpEDD4jTagbDhEka8SZUYChH6Wya84FYbyUoK2rTEJoTHsdYnkUXwYFLgmvWuuZNRMLMctSJhyx",
  "key12": "9T3DFvio81evxWYNjJ6bbgFJ7D7wYMUDkEXZbU5U9GwDu238Z2BzYh83Mr4ihtkmUR97mE9sPLKYJbaHGYMubHW",
  "key13": "4CTXzeWcHvU7qptMC9VJNkkVi7zkKjpuFDhMc89zw8faFAN9Ru8AkJGrFBbvcT4cECdLtTDeqtSwoVLjkLZPUpuo",
  "key14": "5Jnm7BjZwRWdv7yFmhNqandiNN9q6ZyU8c3Qqbgx2cFgse4aHDkHqHQnANVc6J7GAeHbYQ8CtbJmy5kHB3SXnx6a",
  "key15": "4YYpjEQpqY29YkbA1Pa5HQXN3ij2M6LHVtTDm1KhkVK3XytbGAJ19YckW5jaYhX7k27hLcsxcDo647xJSUKrSfoT",
  "key16": "51HdL57t3VNMTuaDmbEozqcQpzwaq6AVHaSSaFrGujyqrqcLH6B4ytn34E5RFPxeiowHjABDZZh7iXBkqrj4sytb",
  "key17": "xWwUwVaoKgdWHsDyWUH9Gum8RnYAVdf24MgiaEDQ1WPjSuAqvpuXEfFJ9XeUxvq4WzH8ZCNGQ7E5VZ7YTuG91db",
  "key18": "2mAHARGuuqWtcUiynZWsaPN9Fomi3nE9x4dAP4saHbt8rf7Azjcs4bFWi5b3JX8p8PBuyCaekduZ57SEtYhUwPZW",
  "key19": "2cjeemw7s61HzV4u73K2JXz8S83RYX4XSyiRLFANmTPnFktZd266UsUCgoZbQs2RSC4r8bQJjGc658dYf9jT2xFH",
  "key20": "dvmLPJtom9oRGFQHTAZAc3ET5xMAYroV2jUEttQM3Hgkon3dc588y96UCzcU52zJPBP1JNiKqzgzECy1iY7xEbJ",
  "key21": "5sAdEz3ncDqS2sBhpXDzRChQuL9FRyGnkCwTg6qP9fRZBLjKEHNxgS69UGFvCm5Cr7gXUoNs2NsprhmGiszNxFbM",
  "key22": "2z2MaZw9rnVgdfS5Wo45gAP562v7VCDrLPWCKqnaFrACKnga9ngujR14c3K5avwEtWGc6kndtxc1pNYbKDfyeMrB",
  "key23": "3sAed9tXBH5QTGi6cbWC8euxzfhWf2SA3SqjiMd15F6KYHVPMW2gKWayVyiSTyBokXFaJC1qyqU6GCrUJ6qSMEsW",
  "key24": "wT7KdNQ3M8L71mvbYTnymkGZtojKdk6jG5V8CXRzKHLkUcvdC1j5BbCfVkdEz5T68EC8oK9gpF7RC8QUw9WQNTx",
  "key25": "4f719y5ranFDqP3vYWJuGdcWxwScJf51rfSvcoHoLM3gq3PM9iHwK5K6Ym8YFPghwkHcnTad8KSuL1uPqKDPJQHu",
  "key26": "isMSQGQ8STzh8pk7yDhjviN2GrpvCmVN6j318J4PSbDeDbVXezsCtEzuGWrBRcE7KGb6mLLajsEvjkE7sxJ6Q6z",
  "key27": "5gmnX9YyrSPVThodSWypiZ1jQp6aUNpjCjn9Q7TeXNkfxHydDoL2kUH6UjbQ3tgxRgutHE5fEQzcLbogBe1u4dqs",
  "key28": "nbRhTKaQHc5MWXJkdoHx5Rb1j8Jspj9D3UnVLk3zLZj7aXuRSQWcsre6Qxu8hzCVDLkaYnctNQswSMrbfsd2WMG",
  "key29": "2LbQcVjAJ2nsTxsykTGuAQkk8BQNmpQVPCLvYtGngHWrdT5X5fmBJuK8kLUhd89CtrTnQg3WsymRqAoEYVBmJj3v",
  "key30": "oMhpFpXvEXmvj8oyhkYLwRPZde4YkgZu6RhUhMkqqidy67kFM2kRHQanTkp88k6weuzPfizFJZ8ykPBU8y453wA",
  "key31": "nhNSiy8KBGPqhyP6eED9bvQ3XCdNRYbg4z8ncdADYkrQjr24E1mExYnHHUqvPsc7Fpp74rVnRyCW98cPf7jEb5L",
  "key32": "4N4YfuREzLpjrvu2NzjZmoStWysdA89a5M4cSYufQnFgkqQXLBGVTzkPF9bwziQ9DuPrZVFgx9HUuP8K5Q8XnKzN",
  "key33": "5UEupCB89ckZWQfadJ1yXmFKVhJdfPB5AcVNrBZXCpC9uC3VxXsXDe3AsDRaWQ2KHt8an8uFGTNNpibfEfL2K7ZC",
  "key34": "3NXm29sNn2uxaXGK2WCdZWPefuuFGJ7S8uEBpCa6stvivk9SqJkpHwxC2WXmE2iKwhHrkegf1E4jHcw8XXi8iWUt",
  "key35": "5Sv9vVTDB88xNCnkLPK14DPZ2GDguSPEiYg87BKT9i6Dqv7Cr8iFHdmE3qxBYmoz8F8f9rTbnMrthPgopAJYFmtB",
  "key36": "2JKXXjKnefRhNnw8VXpEZxn5YR9EeCQzxDtGLL3SBZj6TwpHabgoSCrwK7h5mNyqgaF3L6q2LcnBpF5AzTX6zVcu",
  "key37": "3YMtwgJRbrcRX3MKpVbghGZJ5JPYZjiVMK5wUXSgtbMH4didt32q7bPubgHr4xiHs81ExixJnUhNuGqVkwjC22Hz",
  "key38": "3A6TQtUiiBD8k4v5taGKZyed8PMZ4Q6NzgFSTPyLEGkxBdZ6kJb4cfx1NLtp6AHu6otLypdXkep3wFmtLhaXNkLh",
  "key39": "DWbHNtwo4vEa22BCZGiwb9HQnt9WS9sjtHn8uJJvXMKGaSDV5FmnV993AWJZQ2X4rsiKpssV7Ge1AzRgLBJgWUn",
  "key40": "4bqatvLU8ARhiCQcZB1SpPVkmEwemRg69YCjQZaRwGBrg9dUmrtvGebSvK4WbEaSjUwko1f7oJpHH7hL81dXnxDB",
  "key41": "M5WqSG8BAFoVXgnJtk176YcbbBCRFe9vdTpQCeADBi4Q1SSBsrujpSr8TMda7hxhpMuEaJbrKXgJqSbsKrerfLV",
  "key42": "5KZjvr7js5bEt6x31M89ocYFsanGYUzT1BMWnrJxh75m1J6PSiPET2d1HRftfx3w7UNRbAsxERSvBcLXh3sTYKmP",
  "key43": "39vuRgT2yfDDe6fZxDQCSCEZU8pUNrURkhkYCUf3GphUU5b32eY9R1kX8iRk8JsEr3PNhUyK5THkstTFrH5dBrfc",
  "key44": "3uQJfP7h7L5YVgb97YE39TrVX6bk5oZ5QMVPNw4bLWrPVGXDg5CHYmtDNRAD2bzaPnAqMk2hRVfmrKUyuxe17Tc6"
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
