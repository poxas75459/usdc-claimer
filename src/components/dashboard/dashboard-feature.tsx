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
    "4CLwEK4hG3dnRj8XqJMp63wF4GoM5vohLo8K61A5xn1te2aXm1uWjmXsjSziQkisPAhf5Rje4yTw648RQueDfeGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fdvvJduZUrd7CMXEJeFTSo8vEqGZPFXRVsdbHEMjKs347KzmpGvKhgetRtTDTnoz2FCYatHskpfYWAv8Y1XbEdR",
  "key1": "g8f75zjEx11DgxFYiLR5FJ85o3MHDrC9gz94k5AFda4NYhDKmEEpsoPnNBHMZCBhXrm9jKK4aRcbfjhTJ6s2vmj",
  "key2": "525FbNAGJDtHhhyQC4sdTvs3pGY8XMixaaqTRUpa6egVAyKXk1peaQDvNFxuHy6WYcGuBz8tHBbNNpinzhk51Jey",
  "key3": "51Jih6TtAuaqXDgSLR6pgRcpkDM3XbfZvGZqL4g9AeUbvGLrCLjsTURcuTSMdZXXYpFaEU4JrJDuyTFCxoMiAtXA",
  "key4": "4FYgckGP86cDgbXAvbv3v9anTkuWprcx6YLnQetr9eth5Gc1NJg8WpUs8BpYdhTVoEwba7B1uLSzjAd9hCPqVW9P",
  "key5": "3W1Lfw6s1y5xb3XkkESKwK1KpVJiLRNG69asGnmnrw6pCHBdVWzPV6dctxeQiaoTF1zBzeQiRKm1MquHdZamLqCY",
  "key6": "2LG2SxL64C26eKyDhDMpr8v3rJcxEbLdxctL6yFFFwgYLJoffNjGDK4faVURRGiE4Un3bGa6qPRuU61vujkHFyHZ",
  "key7": "611EYPSwVrV31kBUcoXDd7zYgHi9dtRnrfXV3dYxnrD16LyjqK6sk8Xo5yat4x7oi1kNpgABtFfjbYdqYvXygnQr",
  "key8": "2xtZQJZS9LMgUSbF7jmDW4yoCDCe3RcehDmoHTGMYATEWsY1knXJ2X4EKvGdSGn3T7NkHm4khyQnPqfseZAHENCB",
  "key9": "ABkraRVx2bSxWf3gcbKa97vfcTk3ALDsD6M51RJ4qFghRNjkdctJChMc327yx7NjvXvcZb7qmkZWp8X9gmJqCTJ",
  "key10": "3wwrgm8pHYGvsm31XrMytJxYWRgre8aBA9F8YqniavZe6WepXUQpmPRTsxuN1B2WQbUHcowLiStc79vCByZPn4ai",
  "key11": "4hexxcez9fAAnfSf4yUAic52Mift5EiB6JmeSSADQ48jCgWkzJv7ZwAdxf8YwFBT1sPLRg2wtnpDkwKfqQqcjb3L",
  "key12": "2MLZYH3JUHuFahQwFxSXRFo4rwDgNWR5UJ57uLXrWNaN2YskGsApyW5yrbm7TZwPjqoVjVnmDJ8UHYz7u4fcXB4x",
  "key13": "637fuYePSJiVZ8YTEbhbRaJa67W4xTqxgw8xrrJR8n4rG7GanPQqCNiBW8ghwXDrRMWhUZwTCZGgu1675Qxcz4Ns",
  "key14": "3ABqSADh3v1fQRjLEd7mKXCMaK5XB3Qih9u3Uh1zFjWvHCvSXTrYnn6VUij8WR8fMNzCcpoJLckrKFvzs7raL6Hs",
  "key15": "6X1qX8v7v29Q2mTZj7i9tSsg81iGDLiS21fkbCoUx1wVbe4REKkghhWbGK3wwnsV75zeQXeTWJhoQJM8w8JHoj5",
  "key16": "4ncjTkHP8mhAeqBTJLwvMzaoe8EoLUQ2QafwJqCVTMjoRaKhqhRdJrRpDxGo4XZHXtgeusvcKA2s8HKmFbqD3pCi",
  "key17": "62pCYY2MBVnFWGoMpDDjxZCsmEDvjgoxQ8yZ62qoRng3SGi2wqPc2pWm6WFyye15V3wkCEDa6bmSETBEDsHDH9WK",
  "key18": "4yj3bwo34xHMxFumZm1pF1up1inSBPzxnT1pNUWhLk7umzQ3h72KgmQqgK91fsLZtNaeC7Kom5N6W3YymMSjgCAd",
  "key19": "5ZB5SfibJK6u5UPX7Cz8cxQ6jdKnaN5tV3JSKfmHzZWbwd6Hz48nCu5vdrCK8HabYitZz5DS5F14waqvZASkUa8Q",
  "key20": "5q2ZfjcK3t97Y6bjESC8b6DdcmxxEUAgscMxtK7ViGHo9qgTmp9Ay583tMKF77zMVQAfTfDdVNvbFvoMsogpe5HZ",
  "key21": "5BfCbwzk83HJnHXcr34YVbfYmrSvVdCZh6rm9B7CLyaSyvZ8jkaaNguz3gm9X6fbeYdNuPxrudxDdaqrurbtT3KF",
  "key22": "hymCxVR71ZCepdRuy5Et9YScjZChV9TfK1ohKmBcDUe15os8vNBEdJsDnH1gVT9nc9JdS7KfqUMeLEEyd49YRRd",
  "key23": "2awN1QAhGxTGqAJfQgM8KRptGfyMh31dbn58fWP7ZkGcZVdSWg65RzvjrXWNBMUmVmVdAdrj3FP56kcaaF7gCobr",
  "key24": "3pkKtVdv5k9HZuHygEtNwpX6ahpbEXWU3RDExiKdbekMzYEZZ8L7RFt9CJHWbKR3bf478HqcT3rnuYPocYcgvGZX",
  "key25": "3L2uNSoLCzwFdgzMKjBQ7URx21iZ8L4hbsgXdWSi8WcnJy7ghQxZYgGBCWCbx7P4xCMZtQSpwtyfd4SSggJSCdgs",
  "key26": "41tcfN3UVEw4zDnwxjZagbSizLSwiChqVJKrvzXToncxiTyEz3ARSQvq6hqtbjzKgEHNtHdYT8S9W7gpaAXYzQkh",
  "key27": "45dWYJf2szDh9X92YiW4S39bWxkA9i2XWJ3V9kiUnSjvQkpB2t5PHUzEEmQUeBxY9YcVQX1bRVZpRfZ2p8Sugy5p"
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
