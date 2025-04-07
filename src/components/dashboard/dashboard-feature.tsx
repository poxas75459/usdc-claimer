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
    "2QqU8Y4aeDuK3PPyNA9SQ4knPor58V4fqmVi8e4xmvyhVCyGh7aS6TP3B4Hbg7qyQz7LMeAeyv969ozPwF222yy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LRbmNLYwZpzsjnYMpwiTv8MyrNr3aHaKxKNeMqX1fnm6pH8UbBnDRhowiA1AdZJG6HG2G5uEEtjAc8vpkWnd6H2",
  "key1": "39nadcZjJWXMxZFpHFq2GBCB396WwNjYxQM66KwKr71GpPA7Q3uPG6PwbJi7iCT5MK4zraYGBsN1N3pAr6UfMHw6",
  "key2": "QRCz5kyJGwHtWWA7pPa7TGKosiq4y9gykiCtZJgxvrYDxAceTVnDexcTpwfxW9dg3dTHmNViXwBKtUUXys3XMdi",
  "key3": "3WSLeTULEe6hH77LLhCnUY7uAYJ76orfCo6HSPQFsqoQdMjztQPVBVvPTS2fUnH3AqyPiGJtZgpXExS5h3rcfYRB",
  "key4": "2ADqHy4X2wVXQsWKEjVRwT3cRRabHyyNqepVMZrS4FMivfq7tjifQvtZi7ueuyVpdVzd5CcmNw9tsbo1GyXLQv22",
  "key5": "3Lpd5mXC1fbKXVCqtaeyJBXmRjqawxXJEft9egCAc1fvnxCL9yH6mbx1Z51uZVx2Utjk98VKGAiyxXQpbG9vtHUo",
  "key6": "5vZwhX1v2jUydwurfWmDwQ42vWqhDyELtAi9kYqvmdUMiBvucjBXNL1fupNSQ3KgTu58NtumYFPfiYq4FVfnHAA3",
  "key7": "19oygHJ9QRdovv1d7M8H1usU6bNPtW3fXV7pXxoHpvsACQghSBUHtDiDzzMKbpAcAFimAwTDYmkCFLvAdkicChB",
  "key8": "2DYKtacKGbTCsPtXwUA3D74M1ArubDojGnKoNPgrTH9Ln4RaYm7VTRHfjKfDUeaz2CrBxnNPyw8KcU69YGR9ZGYF",
  "key9": "3dPf31CCDroMQ3ubi1f8R2T8oUCnz2NkmTjZQu5oJytHGdrLykCxvN1DkzrC6Uj5kCVLeLNYSwtjzpQtq37Tc55h",
  "key10": "48RzcipyABJmMcaVob25bv2qmpfcRACuwqZUu3NzDNeLThXyqjuFc4qoc7BpDrY329bByeDnVbr5C54txBBeaXWv",
  "key11": "3d3ryKok6R43kXPSSmFfaVswyv1dVvEAKECcEJdkmDbDG3o1t1jZFxwgVNoQ8mQDYWfDZN4PopyZxY8r5A2HBMSu",
  "key12": "3rzVzxeXFBi7DVHZFUCPNrotPswS6jF2XN4CV9ZPgk89cNvp7vrMyFGMycEf7bhgkaAqQSw7e5DvkqGLTMa2iuY",
  "key13": "3yWnnPpcrLQ7EHoWpc5K2qz9aRAhoypSSfHgKA9WRXSZSVBwFRyWQK6arJ7BdWhEH3KEJAqFEcS2Z6WN7HW3ZVRe",
  "key14": "4PTDJtX3EaHQTCFy9G1SpPMAQSZdS3tMex9eUQGuw1yJPNcT9komfpew3u1oiikS9AnD6jp7ke8XGhv3NZbvPcp6",
  "key15": "gZTAo7v1eTGyUnnjxipkzg6HSaPJnsqgn6gTKr8vGraABTQc9nqHeiEsCXVLchLBJH4vDoMtd1VPYH6GJsqi1oG",
  "key16": "37Rx3GV6tvtgSea9AfgxQHUYr9qbnwXEoHbDXPsEgyKDo1DumYqHzqiWpCasmqjYW8vCTfWUWP5Mw6H9MJNDf9Ab",
  "key17": "4MsLJgbASRDSWPazFXLShZ22QvzxXtUBJnTP7iyHxo3gZo8H84BZgXwp56Nwd6hcwnnobRgmwmEpASKT5MNJYhPE",
  "key18": "jh7yLk1qywvR7uJGMgU5imicotVzUcH8kDmXZ1TVxbNt982nBVPKEX6btpiPe7uAUg2czSbdcSioewuFBmGJeqG",
  "key19": "4jiJf86dWNkeynksauSYuZaGhibLo7rv4y2QKuhN6ZTYBbstHC5azuBG4BM3vcuA2mMFGpCBC658eyda78bQWwfM",
  "key20": "3rGaAgh47MxgkZurKfkSChzrZ4eUnG6ETtTQbVmRo95MeAHjZb2EdxjsYWE24Wt1p5Xgbqm7ZAJap5dYE5VVhmAB",
  "key21": "3TGwWfypLZESCFQn1WXmn3pH1nLVffMV4cHgCpQmRqLxcmGBTdDiZZ17DtmQqqEb3rvqETrc6eNHJZJaFCgBqLGH",
  "key22": "5yy2BPMXuwC5Mpcfce1MKC6gyHNQWKCnisBrw8prfbQVhwZgrFeAHGXvvTeG3W2Bu6fGqotLZH2Lo3xPHbqK4FW6",
  "key23": "3YsriFmDmknLR5RfA9P5KW7cR7tH6nJ24zwz1XPq8FoGBfxtjeQ2o7HZwuuRxTcbvNnWoahXnSnTiS7isBM1WB16",
  "key24": "57AcqHn71qbv1MnxF3jDBSqSLAeJVGJuAmJf7FCmc6RUi3t2vvB1iotNoDMbMRJ5JbtobwcFA63VSFcVycDLTTBB",
  "key25": "JDybpechkkJJQuHugEr5h23dLAjNpHWFidJK7b2eUXkPuQxTKiif8b1S4SeuUkBnBHZ4bUeaJUd4tRhY28MYwJT",
  "key26": "3T5Ba8DuU3hpJmnXGt7KHcbXaKu4PFdJEDmaYdxXEZJ4fqJdfWW1UVkE3AKBDfarExKd4aMvkcAtUXSj1HEJXptc",
  "key27": "F5VLQK4ttbaC9i6WtBenvXe4LkpUvaQGKY3BTdRaCRpzgptdzZT7u8nD7csdsL5wW1WzxNpogCL7M8SfqZ5soUZ",
  "key28": "2CqfK87RSo5rvbMoroiCmwYxCMTmtj9xcjC2MJF1X14s5dcy6caEaCZ9MnHHJk1g5nxJhfdk3MCeKQFbr1EWWN1i",
  "key29": "5rfNx4bk3dUc1Rab2NzUQHj6kACD7mhVegPCTegpeVB3PDUKMoMbDTGG7y4xMnLSYuj6Su3PPA1p2REZb9wY1pvG",
  "key30": "38qNVgrWWwRgEM1m3zBwhhxFH6H2cqmo2qxpd9dwev1Sd6E8MkiumXEL7nB3sYTfqnGropMzuS9sXn7ngyFZwwJq",
  "key31": "4WQ4gwLWu3p8uCT5M7sYUBpdCLszyTyoCik6FAaE6gdnSJVed2HV7W9Yvp8mdwusWqwPs6pQR1NmxYumgjkt5LhS",
  "key32": "5p3YkfdRD5WQP3wn7u2fCmyXoVLdjvu9cV51TYjx9WNL8BjcDQ8k4Y1arpNzGyJQGC28esgV7uLThuRfhAXSrfSc",
  "key33": "9db4TTXtuuRpihpxs2zcVokgotLb8dvcDHjHAqeYVToUSGrsucr9vQK9zUbxY5PeoddU4VpeJifzytYQZFapQjb",
  "key34": "676GSnSwXpixmxDhj9vj4QeW4XjZrN1LNH8SMifJQudz2457fFQhwJP9SS43zPKMnZHe4KRDr2RV7ziWAQaTYBE3",
  "key35": "4WQb9F9ZGBmszHx4mAXskgDJJ2dcBUEC4Fv85pVwsTwMkGs3r1pr1LZLRAntxM55TGLNWJaoiVQkRXQzkmiWRxLi",
  "key36": "5b4WSZvXzW3p7LvRUdsudESfqRvvUGp5P32ZYKJtLeonBR9pg6VmiD6KmaBMtWRHztNkqCQTYUhkdJcjap5uDTZw",
  "key37": "2mCZwpb2zEyAciCvmG9YxYW11hvxxLCos8nTEoA37bVkxnSMDbB3tR8Ey12xHtkhYqHUBwcewjwiaA7QDEWUxQWY",
  "key38": "5kgiRgL62hGepKBLAaLycHoAiLoEdXgohEjmhnJfWoLzEhAEyYBGaCS1qDiJBkmuc22JJUVkTEobKdjq7SVPpBUz",
  "key39": "kjqvF2XRAa8zWVo5KdjqpSPEGfEUGkGsfZbY1YNMGfU2HSErT9ztpCzdzPmfdXTCGJkGgcnYvfcTFs9Br9cAYNH"
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
