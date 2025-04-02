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
    "3k9ZjoL3ZZ5qdqWyLv7YggRNb3w4c2k4og2aAA7jTcZ44Pne423XWtpPm4bhqZkPtSWmuZQQRRccGB7M1JfyHiLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V76u4HfD5T5jeTJFBxDAqxxbdHUMBwcCaC5oAe8NFV9MEDMTtcwgKRPPx1TfMfAt5d7yE5KNHNfEwbmBmrZeCi2",
  "key1": "r5E6jc2z2jpbP9u3RXrUKRMrVNyQRb9HvXkdxrzE1y9JPbEsJ7RrWfEiZuF66AwBBgtP5JRVdtfmwHwSXUkyhEQ",
  "key2": "37GS65tBP36RK1chTFgnxuo8GBrSHSiPMhKtemT7ph6MF1XWqTKU79hMfxNmh2mnTe5UXRFyFUP2HfwkcDvMtFaY",
  "key3": "2JuJCUCaqXF4dTiS5tQ4YVDcUHv3J6Vx8zz1wttKKuVBa1SUSTEmYzhzaU43Hsi7HsNZxMPWydduFToDgX5q9tH9",
  "key4": "1dvK528YRtfK92dXsH16A796vbXUoc2GVZZqM42d1ukmNLFA631V2uesEMKcD71d6aFcuwBdtU6MTAcFqm1U9Ua",
  "key5": "3Fmp8YCb3g83ByQmXjngLpoUjj3fwNBtcv2WHMDbMk1eFhqf92JCb4KTiRurTnFRVjHgYXTHyqr5UgL1m89qau9U",
  "key6": "3kp2K943rJt7ZaY5i4kMsv7PmKvLRSDvzyQCdHBzyzk8NnuGg4vTutu3poNUd8dQ5C9nE5TRmKyiFRZfQxAwccMk",
  "key7": "4QdukioRmXffTq3Sg2ncAEZoYH4TCcwqA6ugqgKARXyvVqYdYi6CoWDYsYkRgWSrmSTVbGtD3mtNkp9u54ZgZnxs",
  "key8": "xHmU33oTBhSMLfvtN4MP3ByxnHBFDvUXGxNqYBha5wxAwStRGfpcZq6jDBkJeNMKPrQzBwkNUFbshpenv44MN9B",
  "key9": "2DcVL3n9yJgKyb87A4ur26r31o5NceGP7UZshHBT2qA5Wa8zbvzokZ6AC74kaKQWh5qFpjA44FehuQ4DSKJf77MD",
  "key10": "Wm6yZz3iWUyoSPWdfaFBBvhJiao77MN9eNymQTXXvYLwQdQAPfeM9aWRtMYCzMQ9oVoTtSovnJvAZvoeXJ9Pxv6",
  "key11": "2wgyPKDSzaBSmPPP8JdtG162UNFFZZroTyhuVVZTr9C8o4xSzqnhUkWvzL4m21Fh7MZoiW7aEfKNCH8FZGK5kPbV",
  "key12": "2VJrTchzNB2kte9w1zgoQK3XqeSt6fSTwdxLQNZVu4KLos49TMY5ukk87EeoqCeWhp4u1GUjpTMmm5w22Kz99dzp",
  "key13": "2h7TGT1CHXLtGrTmyJ2jrHm1vPTGp7RJ4EMDYKpAUBDAQyXgwXssDWT8w4Es5gnC3G9WTKaBHnJNLELGkzccwRXf",
  "key14": "24sPzWw2RaoPWCigprkxU6seLozKTpDjVJvWix45kosZCoy8UcjmyWysbVomxNjU7y7CDETnX67kVzcM8YN57eyz",
  "key15": "5wujBLSawpPwPDntnmyBMhDKjUYvh77xJNQb28rEmbQc1ymmJXiNFhKU7NN5fHu2qpvw5z8FsUCz7QMn2931Ysjt",
  "key16": "5wyVQVqBtG1evcu3J9zzfywR6kNRtAq74yVJTGEj9DxFVApYpky7QUwSiVU3xf95n6ZoZkifyJdM1pLsaS79MTMV",
  "key17": "pdfJh8TZLAaxxeovHDfhVv4PErzaoEaM1x6cPjf2UHy6ttsqSW6Jg5wrJnoKGrNVxZ5xnuPACZqNBmzwaY65wu4",
  "key18": "4wf92jBPeh195mjYoXg6TcbhQfGv2RwchizDMndkZWx4Ks58KkDw6RgEoh1swkvbRWrrih4PfYLr8z5QiHatEe3B",
  "key19": "ay2viyqwVB8JXydDFQNjSCTGwtaDmCfFEfFYEx5hMRjRA8KLn6xt9tPZujDbcjhrUubgEKEKAcc7kYa7R2QaXsW",
  "key20": "2EyasWffkaivNK8QSPxUZeHZPDa3D51PgKYAf1uJfqM11PxmcT45Pmi58mhPX59oaDeBfpNPhVK6mLuZS3L18ejM",
  "key21": "35skDtvaT5jBWEg6n7tg41CjkHq5UUEgsgZP4rsXbUg6xbYGHiy3BtvyMmocghsnJMTEwbbAUV6nfexEnUYzi5se",
  "key22": "58ZhDrQSexJydqDgEFjzZa7ah4PkJpuoq4YqgdUavybZWZiGe2ruwPwSkhMVuTtcac8FjUL3X3MBbYhQ4MFg4Frs",
  "key23": "5stdTnMiRi4cFEUZ2bWBwSCX4CXAbN1SUUP8YLwsJFuQ3g3WHbDTW2c7SBMPVDwEVT9Ac1tZZgXBBp8U9prXfZ6g",
  "key24": "1YT6tg2PNyUSEQSZ7mCYwCwUCcxyCr5ujG2XH25ydVBuuRhFjBeAA9LdBwjDfonfaMMsJob6gkQKsjmZpSuF34A",
  "key25": "2A9hGZ3N37jkHpJhMxixDYTK86uiftqXpt63YWxgdPmGRwEYtpbDDDg2HKgnCnTEEZXn4MACZ1GKdpfDjY9YZ2WY",
  "key26": "4erJ9tYzsDfJYSxgmuL5ofKrMxrhqcJH2oRzPbQGu3LQmdgRsAGrhYpR6vXXEpGAx9fiW1ffVASSFouW77B1DMJF"
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
