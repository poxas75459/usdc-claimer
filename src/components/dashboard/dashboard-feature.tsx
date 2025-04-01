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
    "34TZY4KvBQ9QXe9VivwTEtgeKfCy45LpBXcAE8BkqifzKQRrHZp9idYoYrvzQTWvp7zbmn3s9X1UaURtN5iDJx6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eKMThCGMfRJS7Yzk3fXFt7L7JiKoD6T2y2CS51YY2JqpestbAzhEQ19e5etK59Rqh8Tkat7CbYzj1w3hku3sEsS",
  "key1": "2kEV65XEt5RcmQTiS5PJPvjUShaurFhccW79wSVcq4b17mJ2pBWSdZBc6y2Bhk8zUbTuKyS1qDaf8kmnq9FCoYNs",
  "key2": "4QW14pyqKJXJcKD4dwHVjTP4WXSQeoprGUir7zRUFfiXHLMJbVJQwt5EWEorWvx9HkBNYPr4dzhLcBuoNtZpF1Av",
  "key3": "3BdNTx2usAacxiUxHHAQpmAwZK6G39TiRSuXfNuPYmwwcdaLLS6jVjz4j5myomfkxDBRr7ep9GmX4UQFn6tUkeBY",
  "key4": "3C4RhQBKnrCdmpanJvzd3XB3XJYUvUcSnHrteVepErVu1zuerXWNhe9jXWKHoLep71mHEgXuUjBqDvbgK7Vnehyt",
  "key5": "3NodvtW3eNvHuu1Sfw7zjmGo5iraE1QSW8fug7HVKLvNUw4pgXnWC2NERwBj8zFqnfjEMzX1zpTbaFKBJZRB8jV2",
  "key6": "2nogrdZPdBnbC7qPXaHPBaYYjFTf1DJxFZ3mi56SxXV6aAEeZf3kmFas9o8TNvK9HAd612PY6td48r7C2a62MTkR",
  "key7": "5AXTgNrEQQcvF2CAP7yY3eCnkGrDsjEa1abVvhoBaEdPoUFcd8Uintgz2KPx5ZTxj2te84oLSDaVLJPfZubZoU4U",
  "key8": "4BNLqSBpvQ3gNhUgryMvTHFDfAKPcimRubGcPiysFXtxcVnzVirN4KJiVSjPNYCi68N7ezdHAVd4EPAWBLd6rhhZ",
  "key9": "23K1RREXLy7msYecJAc7GMEmDWydyTGqi4CPBhT4QYDpi2L1NJqcyS9an9bs42iuM2RMJh7zTvPMcHhtGaP1Z9aW",
  "key10": "5CqkuTocm8B7G3fu1EKJ7k6zy9ekdW6MLkpJeJ6zsrNRi5a64PRuYX1tqKDsaGKoyrDkq3xNmWPUxBaGKguC5fkH",
  "key11": "4wRZebtbuxQskfEqADiGyWyYj95FvhqxAUvP2WLrEGx7AYY9QvJ5bfkodDDJA1k78k5irBFB7WaEudP2kPfBxvyn",
  "key12": "4Vy1LXPjsiQKwFZbEJyuAGDmWT2qnC8q5mVvYdz6ePpSpawnzygbUm2K9ndDEdYE9GZZs39horDTdhi5Y7WLYsxC",
  "key13": "aLszM3jinoHeECryRHFio5s8u7hQ9RCVWZ9DQ8HbdMJ4QPxfsfsxdt5duv9fTmbfec8NDKNFCiCuGow3Xia1JJx",
  "key14": "54DAupWnai8A8esLLuzvWYknkFs7SHw9UexWKF5auJxYhpLABtNjJycYXNCrAMBR8HKuPqiq4GeFxmRzUeULAgfG",
  "key15": "2tUGChCLdoA3HQCxJi9gh7fN8cxT1auDvSrSPLRnBwDtk3HRM4zf9efkgf17HtLUFUs3NH2VwjGVNMu4As6Uz5Vy",
  "key16": "3VnHUqe1TeuHHa7GEZRzZ39idDM1UccVDntKmzdt7oKSY1hEnB6VYygKhocKuwGBqN7Ft5sh4rzJBQHW3rqYLE6N",
  "key17": "gYFdVoT1uD34MHGuPYFuuryfRCbrmJj6N6ZTscPeQUP6s5YTpiB2YozaHFNwdXKcGWvNwh969hksrB2KLAVmbg3",
  "key18": "4crZDaVWVBbLVUUSauTFDTqUKcmbfThe7MsVz2Lj39NSaSBzZCwwTCJzxHqaE6ynVbY8ojHqo7z7P9K9nnwT7PoG",
  "key19": "57WiHwYrTooxUQXfas4Q9sppThvTQ4AY4aoDJVef3sApYmpWFL7LdYzr7t12oCccAuYvEbAbdJQtcBWuGkiMjnr5",
  "key20": "1PMUEYCR1HiaqhXFwc5bBB3As3Ew7HDh6HPHMmTGc7NiDf3oA4DbWVT9vPj65sBnNFTw3fRRUdQMAPHmhck4Ryn",
  "key21": "4ggH2QhNW6aNt6j9qxejmQXSocXc6NwucZZUC24J2fmfu1uX2QRcm9zDcch1jtsu4kLhzEmvuG7mq1ZCvdHB1EY9",
  "key22": "42LfNJxQqxCwrSXS4ffiyNEUn8EaTfknLt3NjBHJp55mDbygzQa6om941rWupQKPBVyC4KyMP5jMurpWeVfzD8E4",
  "key23": "f6FdJyx8eqz4mXFesZ6jAKPT1ka9CepEQv572xWko3Ey8oswVpqALLZsMFQ2e5mRVsvpRgZifXAG9HhF87wET6B",
  "key24": "2RHhEsCSMjRcSkprCKixdTtp88SCyEK2igssRQg8LsLQbbL7rei9CBgyZEt84iMhg3ZLTDNm8CpkHk5PBLo9qePc",
  "key25": "5GNS9nt4SRxyg56A2TzTbmFPaaLWRmUbyJyjXqGokAn26Q16wvLh2JxUDqm3YgayGQ3djBf1iJC6qNA3DePiErer",
  "key26": "3nkTW6ibKeRdkCQKthzN4k2KFGZ75K971xZgcX3KQrq21h6vML8PEY5FA6UkDcAWhPkixFEGjMy4M3ubm4GYGgy6",
  "key27": "4aZTAigsaqEaSEw5YXhyUu9NXi44vFrvw9MvcFwDDGSotjXYKCeXXuNFasSVDEPFqhVJmxsUJRMdyREa8CPqeEWE",
  "key28": "2anmkQHHwy6HWTGZVRGfzMmgha1vTRYahfQZgEY9pkV3Fnt8AW19bHKgxExeXBAmmjLLvDSc8VeueSSpEWaZ7wxe"
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
