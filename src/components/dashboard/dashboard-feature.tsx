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
    "5x6jaJKVXjvMNDm1okJMVBNLmtTMaMVaNvZ9FcCjxRt8FCvV54oRiehvd73xq3iX75JSRbfUYHcJHAGrh8owgz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NiwkLJc37Q4aonC3iuzKX2QuXUkk4YGicqAS37stErs2kTtrnh3Fyg4uyRvRTSBrPGsSBcWKWhCiXwayEfvw9Cu",
  "key1": "5djZ223M5Gp5EgSQ4d2LCDKYanbz3X26mce87gyFngJp9KHwr5FwguxT3VW1W78xQv87TPq8vALvoYn7iEAghUhH",
  "key2": "4mqGVJkhkd6vUpZLmompLGH4DzCBuKM88yPtTNA593tPQHisedbMKuUxaqZZeYDjVxVQTJkEkT8DntCQTzsSGLBY",
  "key3": "5GhsLMi1YtjxN9YTXPMpuKtSWV5v2foW7o437KzTh9r85n6MgMqcaNi14cqxuF8KPK4hky8cTZ78s3XAqdNpif5G",
  "key4": "22pHzqNbh3sf1w4hS9q5SwCuUpys4Hko5oHjHKwMeixDUfTqJER9dCmT9mPrRDxgiLfnV2sMQXGKyom682LWc6sF",
  "key5": "5q9TsXgBJgcjgrwZ2J6sAB8WEMgRpgV9XfEYv7J1xjeD8FqbBMmUveZwyYZnUnstctTtQjsnGSzcrRtJ8HvyQKQ3",
  "key6": "2fc8HuPRLZci74ctWom6phaDzBPJCVCpBBVMGuy2GjQgPQi8iHCfcj8c5xjxkRGSjsH5J4j6rUUVFUUTMMPXQkd1",
  "key7": "2zuu5woYvjWmLvWHi9i1Y66mB9EM7hxHWS7mJgm6UoPgX3RctoZ3tUp1wUMcWPwUHWRbaVB7pg7nEHPtaAqNdpxz",
  "key8": "5ycw88Rq9cEVx1BuQVJEu2pe8LphtP8mf61TXdQTHhVTXZmrA5aA1ZLNGsRqvfvotygejB69mAKfN4sjXAFqssjG",
  "key9": "2CRPFUWFBDvuFFBvVAeKAraqcmajHz2ex8VPpdwUf7ZdwNDZ1UEGxWnsqJfQ6NPj97zLePfdZBo8A9bUZAmPUacj",
  "key10": "64S2h47kUpszBCS4WrWag7qCVcTbAF285L8Q7Qs9ov7QvZJ6E7kEcJnJDNHKRsqdJbzhtyFWXTC93oj29uQwmVbK",
  "key11": "GTqE6maj4NQ8j4ET3sCGFPpU3PiGTSsqKpmZK6eGtpSSNg56HqMF8pWrYvPErkztakefiSJRau5NtBiNasD2vRH",
  "key12": "66fDQYdtx7cGVPYeuVrEKzxKKLvn2smFPQ5TJEnZU9BSbX6zFWiZ6evokCKLF3dyH7wfXWty5RNQRRf7uDiAdwnY",
  "key13": "4pDQY7ozwBcR21S6uWXrDwL1dwfo8xpdPtCXHsFkohnwUQ87xwh7dU5Jr3Ua5ekAA6SWrNip8LWQrELVtZCtF5as",
  "key14": "3Y4Am2pZLPgvsxDJSLi4ELBFmV8hFEb5akpHuYV2V6pCWEs7W87T6bxZsfhQxydGVZ4kMkuNWR2Lf75JP11CWKjr",
  "key15": "6WngDeWQXDojnapjidmga424FbPhitcztbBzN1E4Tiy9DyzkkBk86P9uKbq98NDaWFwPCNXHEPHcg4TfaSggWxW",
  "key16": "5Q3eEQPw1RZUt2tUthJSs3V2dc5G7PQu63kyucKxTmcfZWPDu5ZwjaAKbvy6rWhjjtJF2XnzSDp3ZMhPnS1YR4He",
  "key17": "2vCDzyMAG9M8Kcatn3buZTyAo9ycr1zUiBWPRU1G4iFM3sY6ZqYMMAYkhRf4XnEorGYRXmZeheXNQQnQYwHPWeqB",
  "key18": "5sjWBppM59Hg1gopa28YjQBvhzvwR1y6DK6SWVc7twznkwPrh1NQDYnAELHVNgYzYRaUY94x6EtF6cXCUocwKkvD",
  "key19": "39nUWMcRowdPpd1NspfcL6NU7pnLWHFE6tXH1VGQMszU9tLvM6sG21ZW8wZAD8LUxtZhFFfBsiHeZ5wadomXMcBK",
  "key20": "ygKArLM9giQ4bTEwKXrmaKFmFMWoLfcvCn1rrV4bEXuraqLARZ3cuyUybX1fvdoNX189cve1VCYxMrDLZNeGCv1",
  "key21": "3ETwLaf7c51cGDkPYPfyQVu2mSdfFxYk3qFWZgVy7de3hc2GCRx34gd6HdfCBRiwR3tgVKhz4WjPwbpjQq5Fsgpu",
  "key22": "5KUauM72X571vCBektKEXwxudVTejwce5Fdbioak2CR4QMegbPqqTU7hTYBN7VrSbGP49Ttm61hrhnnnc5aGCMNC",
  "key23": "4t7WexHuyPmUW7UZYfqWYfk2zG8RXjd4FZdSR1UM2aMWYFNAVmiK4YGtruE2jTr3nQiyy6aeUgNWp2LW7ALsV8Np",
  "key24": "3tA7jrRVSmNgy7RdedJj2fhujkTPTS4DD3ZRFQZhDGvTtLRQ6uZSqQTzhoMRMHDtac7rEG6pbJmMiWPVtVPL3zm3",
  "key25": "544ixDi6eB4LV47sx4ytf4w7pYLNFXDE7owvtdp3etg1MFxAmRmA7NhnyBhMGMRrR3V4xJoAQe48aFiWxoAMd91Y",
  "key26": "4DQZs2S7bBrpB8y7NuH9Pi3mt9c5B4RMrh7SNzrtLEoSLJ5Y2NeAf8D55zEujFKuDV547aZneDAcBGzDL6md1Q9C",
  "key27": "438wEghUXrzz41TBisLJRNvdorvbXmprdS8e8DMKeUpVhMjVyBT3QUsxdmWZd4ZEHajAc2ck6LQm3P62RgEkYLUB",
  "key28": "2JD4pF84pTcM5V6yTraGKQJ3AZYPm7HN5mRrySj3Dux55cW4G2bRcgNmhMSP6mw8z2i8MhAGCPE4Ew5g3CnL3aQ8",
  "key29": "2bD7f37n9MzeWmzSDVFTKPc6zBf5CuGRBJtwXVAb3eiChV6BWGCY5MXqQzjqGMMhHytYuR7buq1pvJqo1vaZM5GB",
  "key30": "54BSZrTVwyKhtUdsnqNUNRiCBQmYDTjEKnEKN36q6mSvPzsjSgaQLVYEW9NwMkj6Vgjn8xpoUsbig4UBnaQRCgVW",
  "key31": "52eUXJKhuvpBANg8Udq5BaXYVezBBkZtMgt8jMsPbhrpgPR6bryj7moX1aGdF5FP9mWfeDhUJ4B8NK43aBSN2WrP"
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
