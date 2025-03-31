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
    "Mmd8zmvKp271yuHxHSQTwGyjPk1PCj9pz6eX7fjBNAQkf21xEkEZAHu1ktrFYVeTZCuDaJufAeU5fyruHVSykjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KyYEF8sdD92hBU7BhKYynThjZGE2BnFhofd7J6jLmjA9QCyQ3cVhsCMRqkZyD9Q93hdN1iFZ4hRL5ZSCgr1aSfx",
  "key1": "5ziQoZMyqxtiXNwR1yfVYg9pjPcvyHcaTXg9Dk4KWBEVodDnrRRM1APugrAXHnJpM8txQeRN5pumkzUgv1sHtCcD",
  "key2": "2btPcPsrh87z8fBGx928e3EFwVE2v1Qg3SdhVZ2t54rmd1kr1gx7iwLumFqgpFcj5nYqr9qhPyejvdwFth5hQFcp",
  "key3": "55ydSvbn5fvtm1UP4Z96sbZ6keP7qdKSSz4yhc98wZPWuN7NKjrLXJCsZ83fGpg93VCK8XF3DzRoHtQxEmVSXFgY",
  "key4": "4GLqbPzHzjwTqF1rtd1Kkxf2A1WCR2hwCEh7C56ERvPSqRzvfibJfmz5iuraJjCJF4vLejCBZ5XeygLpmcuEpP6A",
  "key5": "2ifruk53JohJhiahwSpn1YJzc2pTtgJF4ggQeipiL9ar9xzjoe4YUpNzSjBQct2rJzMCXsYFHXsYrRU52FAEDZXz",
  "key6": "32ym7Shf3WFDGViWwbPtTQhnSveNyF5xxRRye6DVueDkMNtCJmyZEftaiFaGZ4yem78tFRsPTP9qTcfyTDF2kuDT",
  "key7": "45FSa8jbAPdtJ9W1sSh2p4hVMfv1HsNAa9s6vPiQiWr7odeqNhoXJsFS6p2AH2SvKmazygtMCpWK6rsxBrwjj9fe",
  "key8": "4zUCPGQSMwzHJq7cvE9ArvSBCwbuFb8ZeGmrjRwuhKqbxzk4vNiNhafrqBJSjwdAXhHrznUXrkduNqo9qJMMPVWL",
  "key9": "5t71f4WQ59Hz7mjbsdgVrsCREjG5p6xvENU5WxBidYnKYXH3JJESp1jn9gvVNAB1XJqnLwrjtyoTWXmquTVKBQdy",
  "key10": "3fHWisq2p9gADuPyHKGNgPPZ7Bg445xmZKPqufaP2FjVMVUigdkFZdtM4Wo1JMNzZAYUMqgXmwFwZr1me1xp7TRa",
  "key11": "3pgUdJK6XJqHkc7oWTQrR1EqQg5d1rDrUi6haUwYfjwv8U9VqiqxGPiUdrRDT1d5PnwGZDbvDxXuhrcrXustyFcm",
  "key12": "5Bvp73gVXTwyczUf7AWviDhdUb3komzua9v7etMRf3LnFHNjjDq9235E7SjZRdbmrmT1EMu4TFpwdJrDS6RP95kw",
  "key13": "KxFe5jVPWdNEbsnxhJg8ZL5pL53n1Qgk2GpBH88fZzXaEnqdz7qMc6DgUBNSVgezYNYPPkLAME7Rkaz4tP8Rfwm",
  "key14": "2BtQbfKhwkqF3n5fvGqK7bFfc6TSVngW2PiJzgN5Yrc9YrUAcCn8rFYLQt1ST9HKi7Aoiz2AfioYXxweJ72YPyf8",
  "key15": "5pdnTraGKMCzyi8f9pHBknnFF5pf9m4EPwkw1nLEHE6c1K2rC5hvaCwV4Dz3zFrHW51cUXEdxt3SdBsrQ6TQLMmy",
  "key16": "oeYuHZR8gyGwTQF2QCbJ2XWAXHTEoggRamqph3dbjbLw7tpFt6y9KbwxChbkzT7mLDxByvdgVHYDW7k1qarusRX",
  "key17": "3QgRy2BZwVuSbCMmzxSwyQRtMEXKQSYMwdmzCMKQGY3oKCzr7nSZhetmQmxRMLurJKM8AwDJzYQ8aDxntHxuC71r",
  "key18": "3QXNunQksGfWcVEmpgkdZAdJgiCTMrhZ25bBQA7FuGfK8qSaij2Lw8sTBTNdKR23eej9M51M8RygLadFmmmwoXcT",
  "key19": "5y6chGMZ3bFbA6aWKVD3FJXbZ8iZ42xcT2p9z3aoPGLK37TiumqRf7dYvxZaRuqRWWLTE3xxUDa59oeueqgZFCh4",
  "key20": "3xWsgkNwRUzFLjToMzN8pMhQLDZqZHnUkCva1pFiw4phEDVXtumz36aaeR8e8M5Q1qWwjR5gipfF6KTUGTJ87RQA",
  "key21": "62YrDAVhPLP4nMARDup2K65U7t2wknQCauSXxPzSt9VdDSpG55F34nrkWqunuhF8YpG64PXR6R6XkRMFfZJt33q7",
  "key22": "26SguKpdbVCZ1pZqW2MoU2an7Yp9NBXVP4rW1HGtY22cECsj9rmDxEiYch7457aJ2NvEPyfDoZKdYdnq6597zzxY",
  "key23": "5M22FGtTn7PgL7TnZ4TaJ1AQ6sPnE365r6HQwnJyV9cs7QVy7uEeo7HtZmdYk7xVrCbpCsthWgJvPNVe3dJLkdEo",
  "key24": "53jRnJsxFTiu91rBXcCBrjtxuVwDxDzHccSxznFxEA3kSnPshUegymxLLeCXD4Np2YebyCPHsBmPj4w7VCGDsXxr",
  "key25": "3EqJCJMaqhkd3kgFuk66V56ziNWhT9aGi6kbcjqQPjMgtRcn6vjhavj8pQjpEDTPW5NzCZaMcC8GL7Vr6ovc1P3y",
  "key26": "2f3CosE7dQPzgKUpFDVtS9NQGqoWdavdTwMVzGxVMLMHbjqNSeSt6iTQeQNJaJjgDNUwSNUEumgtDe8MjbAgQSTC",
  "key27": "4aUfALvGqc3PaqMiVAPdZftbPCMF2WFsVNgwSVA3x1uL25FqeBkQynvYdn5vhTSTGqrZzs8fp1mtpUPsNSGGAqHJ",
  "key28": "5PwhafdYWTL2mer3r33pJkV8opGbSLzEJVK3AbyiWYiQiBNcJRLBeZaXvnwvH64PyYbk6rpvTRhrHAXb79eaQLtW",
  "key29": "2KohB189sUaf2LBauTtWqkFC2gEPd3wVxu14bcAFemzZU6TV9yb7mHWofGhb7RFcmkMGPf1qP5RQhF7yVi8zVmzE",
  "key30": "3MVpbfeASLVgFiizmpzPcnoAN67VN7zEyC3NyanKJpJZ7e6rtPxhhtm3Fes52QqgqCzUpfthYVhBA4iabAFjgGq6",
  "key31": "5dmpfcGSF4vkbLK9qQ8AakdvByoANxptkz5gNjJ3ifm1ZHpb7ZaYozJquUpwFAV4cGxHk7s53CbvJSLYUDrS7U4Y",
  "key32": "4o27CM22QZC22L2fFDn1Pb3ukZZnrtfze8CqfE8yvPX3xJ9EHhiLhQYPTGyrTcSrZNvVBLVwNc9Sqnpkhy37e3wF",
  "key33": "27cqBEZjYsdirjvK25AyU14qcMJzdHPf7f26jymCgLqMdVQHVKy5e8JxMYmZirGPjWdi5j3s11ufzV6mhMC6eb1m",
  "key34": "4goSX4fLvquQyr9zbLzGANsG4S6iq2utGACSchzGKwF5fsdzpunajDAgnLAm4PUirN3Mxs92623EmoaPSWHSRB5G",
  "key35": "5GxUhpJVvGLcr5yU7ZvLA9wC2svYAYx5moYHMpP86isFLSd9m544gDB1CG8wmkC2FJbVRjybaHyXPqiJFrQ1oz7J",
  "key36": "3bSsxhDMfFr7DXFeunJ41oDWs9SsWtBEidyebJQ3soTyHFj8KPWwKYEfvU7ZaBMYVrUau7ZU3XMSBRoSy7BkA8wc",
  "key37": "5Nw7c5ek5sF5M1K5nGro5FNK19Wk4AwVBemov36bFCCi92EkVT4aMWPYy1LYFzuJTxh4FJHJaBbFPrZfV6myXGoc",
  "key38": "bk6RxA4avHtZwxqdqG3uRt16EZjJJyNUUgxFqd7byoDC3B54Mx5yfCVoUQg4xPbGMPgyuoaiPm7N9rWeHoV4y7z",
  "key39": "3HAh49VBjhCdjWpz1BDRWKPMdSCdmioKsRJLyC1MQaRMczubvCeznc18xBVmBU34vYs7i2c4YH8KhSfYu789Dpkp",
  "key40": "2necXomAyZMDepzrwiUXNh6sLWeqvh5KCbSR2vZcXc8qyPALvEf2J4TZoAEFJtdkDrW6prNFwa9U4QYo9bBB71kH",
  "key41": "Xd7z5icu1s2BUWuBhc6QfZqmH4h6N5dKWWo5SM9eEnytzttFWem5AAx1dpB75sJt1ev22ZZpMV2kJ7Lt2EyU8QL",
  "key42": "DbafEQYXG2WRKtfLViZmLEKGgFEfxQ1AckmXVYBKD93TQ83EnUWh7xHobtttwo1PmBF7zdBU3PmAfXF6ZNBhEtK"
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
