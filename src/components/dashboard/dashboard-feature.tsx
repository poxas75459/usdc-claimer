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
    "3zEtZrqZ6p7W7hVV9W1kRkef3jwp9qHgCo9yJPpJcRJ8YdHDhVASKY5m1veMLJdee6yznzLjdeLxJAKPJya9yYuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gq2HqVDR3hjSZNxKdNiYTFwACTx1cGF9j4kDASiV3XMHwbp9FA7VkVMVPnUsxEzsFp3ZcZMbCnQoCYwgJVDRpqS",
  "key1": "8zKpm4WhLiHLySqAnNghLXDb5hTb8zZEtLg9cmT7TngCdeGfmS9trRgYvhz1zCkX9KvCPzk46Smc67REgwzfgBD",
  "key2": "3PfUHMcDL466LSnsp8igczHKG9ps4p6Xr391ojoM9bAWvGuSFznbKTDa3YjShckQ6SsTCA17fzjf393rNzYNiTVS",
  "key3": "3dY5TTVebmn7UPme8TNdcXMsNx9EQASYxWQ3sbRLXwRMaPrDPL1qRATmhAq5kkAD25h5ntE5uixR8BEgynyMwk8h",
  "key4": "KyckCDX6ih993hkKUBgK8K6PtPeXK1gn6nbHtFmSAGnJN7jj8uZ4t5BfmycHEKKXXgRaKBXFxt4X58Eu3r9g2Yh",
  "key5": "5qpEkUNyqcmAQcADhswo6WHzmJiVRJrApgKaQA2t9N6p2iBGMjSNMwiArJNp55W5iA4MQxgwZ3iYoPGewjDPTUFR",
  "key6": "3VSz7AHTxEPa6XLAUGcEgy3EM2vuJf6KdmfW3UR6FG8FujhWdjYjiFxac32h8hg6q7VdS1tHh8BiCnP9W2Edhnnm",
  "key7": "5k6yAfPbrXYRgdJn2cGFaqiLJgEPPdoVvCajeC9svJFh5LPb864L2NRrpEAFz61bxbVYy9RkVLWD6rXhTbFNe8jj",
  "key8": "5aKyKyvT87YmXrmiV5EyudMT4uaZBaCY9TP26Y5RqKg1H51Wt79NR8zb37gPW4KXQ2feVWrmVTbuSwAY2gk3jFAR",
  "key9": "5Qi5L5yMArBrn6ir7R2UUvkqT1CdSefzoVfa8q9y93GfATTxQ2ww9RdTS4h8csnq1kCHGT8iGfBLBUoUY29UWTGP",
  "key10": "5JVkzKcv22K275eNyzYZikZXsspDaSS968i9ENnCe1MPwscGuY2susvULwTnjiNe4kYfnQhkPXxVQKYQvq5z6Q4G",
  "key11": "4zdH5jU9FhCJdJHrNnypiPkLUEtfWvLqAwQprVEBMi6ewg3DkqCwE4nqj7vVjcfadw4CaeAdvojMh3532qYeiZK3",
  "key12": "5n8XgLi4i8mW4XejbFhN4rN33cxndBb3DAoDGGzAzfKKWmHQkEYqbUmtq5CX1yFMKSnoXP5dNSfWZ5pibqVR9hVf",
  "key13": "q9dYJ18cGW5dsRTAA8uKShf22o35Qrn4jTTEE3NBRvtxQjAxDiMBDkjsngVjJjivVMdkSu97fMvKtsGCje3hixC",
  "key14": "5moixgHKEh1Nnom97ozrEuM1GZPJx6rJRQLRhtSYVbVW8uFiDaDxrKMLbWay94e75rUKxz1dVYiGPaCm4iyDNYfD",
  "key15": "3hqnhY9kHNphjF3VTKVzZ4wibbaKG3dsHSw9uMwBNRpY9xLdRUR2fgXeMFybnhg65tH9NQDoHGEh2knkqYAm8ewL",
  "key16": "5G3ojPgmpE2VUL9d9g2XBRZCSZEmkqBCv3ogPaYWuJbJGUMVfjraY8dPHyfn8syS8mgruhGi8h2Sc7yrmceQhT7N",
  "key17": "5j5xCQWRgiM9mjDHCRBokXXzs4PvmFoUdyLmhzSWmW9fddgQnM76qc5233pg79e9UR8mShqUDdVsgMyf3nUebFRk",
  "key18": "2XaPywmURAy86LWzSWR6QPfLrNNZq65q1zQJjYuyfcQEAU8JpELBwdpVM5cFzq1CZo96VJCvcC2EfCarvRZrocVv",
  "key19": "3bcxM9MssnPw8zKnRAmX7g4iiYsoQ53yN7rXEZjHFepZD4UedZGXUD3bywsxRL8v4Fuf54mY58A3Zyt79Hy9Kr4u",
  "key20": "4UGw49YtfJG3n9pRqYk6uMKZd2ej5P73yyxrvQLNTcYAf4hznpMp5zE3waM7fn8DZbJ9ucUvYrcFtfVx3HKjE5EX",
  "key21": "5adsf7A6cKr6LuaKx2zzVnVG1vParNw5MWm1e8PBAAamUKJAHwfDs5yZ6uRmNtnBtiDgGiQRgkynRTPZoETMk29p",
  "key22": "33ns3jCaojHRhNW2GtLQgNVSkwn5rXYsb4REfdmcskGYS8mcKP8VcdxPNcuq19o7MnGpxhcsbFL5wRSu6g1coWxx",
  "key23": "cNcEPC1SN3yQaWuQH37vvbPLjMKHG4LJgLdxq2Gxej8NRSJmgw8tM7JrFKpum6j2K1WHmdk2DXjCs8CX751PHt3",
  "key24": "aqo794frsCcfeL2ZDLzYqoudhR4aXrTJqiwNkWAgP9qjY2CSJj3RNeSzQKuVUrYWJ2nQDNxLVP1ZsnkzFjZdvVe",
  "key25": "3CjGfcWfxBSd7PsugayUoisySF4UUqh77mPzbv78dkbg4yPLaNqTKwBbBaWHUB4dyy8ZRYtw3SJd3z5FchJoUvE3"
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
