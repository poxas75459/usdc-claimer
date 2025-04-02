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
    "52drBw6LCeWTKNg65ymmyuTs9HtEeWen4mf9vWj4sCSJESwABpHhcxauDFcVwy3wDun5Xyc4Q8reb8pPkgiTWXjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZVVLecKq69vLYVX6GXxjm7M1oV9Xb1gwPTZyLZ4Ft7s3bMfPCUjKJAXBnBcDdEFz4FUMxYEVk2HGtb6bVwfWsnf",
  "key1": "2rpzTmqP9GvAsFtZ7Jrh1A69nY9KKD3XWBAcQf5j4CyDM6nnKgib7Jy4hNkPNZKH8SFr51s3LG51xX6KGGmxZxaf",
  "key2": "T3eoBj3fAE9aiHhxvUZA3E9ca8BfMme6gQMeTpX3oe3G12Tq2t6sPqfanC9rXrZD1cjR1qzAb4XEjcEMKvfnHGD",
  "key3": "2RevTRYuLsz54FyukVvrk1eZgDLGVeXRgLmGro82eBF2MJFcuXm7DjV3Gd1nwPzUTyt9TmaBiof7q7aFgUp5vYDn",
  "key4": "4NW2yow8mGQiECwxiuSaWn5X84P7cYRnz4BSvUNa82XXXBtkLCg2SxkNAkddbFpJhmX1urrJsWk3qnyhd2VHFcrq",
  "key5": "5wKcGkiD9dmCniTXajg4Kig6ufV5aV7eyuQRbHZwc5EywgH2wGjU2vVQ1LTdR4xBUdVWCAyUXU2XD43oM7ofyPH5",
  "key6": "4UybUxXh3ZCZsEvJ1DmD7etiaTpcEAAPUNQYxEWRMoU2rY8AabWAipBytHRwrjxW5YEpu7hE6Vrv29AJ7MM3jTqr",
  "key7": "4KsmhRvAvQEVwf81QuqFV7EGTACFeHn6E2Pfh6BY1xPERdf9pfckjuF3WkYSb4nXcHkVmffeVwyZ5CvZKTxT6QVg",
  "key8": "3kP9RSxSpcJYQ2pMb9n7A9FDYW1rck8hxrBw4eCRRJYdB9ZQWGNJ1kSSN4is9ArBS5Bj12PaSs9XVppLvA7PFGZf",
  "key9": "4zWWCRTtKFdTxZt2mQ7JcGQa29UgUgqp1Ex16w1QkESqyiQR7nGWM4NqLBHPSGbGYJa2qkuZn9TiyX4tz27DsdU4",
  "key10": "5QCnft4ZLXjVPhb8JVRaRY8aF2GiEdpDjjmz6UMoYGvqz6JAuiEhfUuAhZVFNTjr8qCo2CGmjCGDDyipxukMaeu7",
  "key11": "agVTL8hSWQjk5dn7oguiDjw6ACZfQQz7cJZ7FPPU3M6L46fHhhArqqrqVmZBMEHDHWAR1cg4XtCCprTc7kJmQ4f",
  "key12": "2pki37zqYFksZ1mXD2U9hV2edoniZvpwwoymBaHzQpZZ99mVAsHGHvE6hjLQNTSdoTe9UJDxmbJohp4r5R6Newbw",
  "key13": "2D3ppm41i9TgXYCsFJb6kUBDh2PcGMTKbTXKqFaQxJHww77GfGDqF3K1iR77C74r3Nnvqw9KAdmdGpgSSFSE7A8V",
  "key14": "3odbSjL55kxLuRcbdZTrCzqhp6ra6D75t8wuyfdzhZcmBspsHCDWjBGZ9zsMifQknv5AV4uaTKtXsMQoSaR1FKNi",
  "key15": "3Spg1BwVnQdxFNwh9sNzaioaXvkCjNTDfeBP2dEKoC9zMaUiVm78GpQ7TUYCBf1JK7uiJV3stG6cFHi2zkzDRAdD",
  "key16": "2XhVWtL6SK6J2PoX47SEVJonzeJMg5KX9KNFhhmoDFMr5AiHcp7ZnMfyxALq8kGGRvrwQAo2Yp9xvZbDECgAu31z",
  "key17": "2HZN6ojNN67RcSG1WpJKwruyx6sJev1vVYpQ1adNJbQtvbj7FVXsPYq9FdzCsypUcxewXT4EQ5893CEv1dTh35Ki",
  "key18": "2T1t2N5TpkG6cEM6psadqoFUhCudDXJUUFhLJz1MycrphZzeJFhhUFy44z2qHcohwoXSVqucoxw1VEHP2BAteCAA",
  "key19": "2qgfHHRtD3gYVDQ7BcBeQdiejRNmVn5oDccN7bzq5QcXGJgpDMvJ4QYvCNt9DYJVivwSS4c8Ezjn3BtFBNAeSaF3",
  "key20": "4mqbNw6FzPtupHGeA2peeMETdev8AB72X9vuXQneejwnn8VVVNit1dnYyGUiMDWAJVctUtD8mW24EgtKCnSaxMt2",
  "key21": "HoPnCTV7eTGcjpWm6BH6GTfH63yJvE63c4mrKxyGZfc28h9Yfv7pRpBgJ1gP3R5ATtFksMNNGxxqv9m7oyvHWwh",
  "key22": "2DyTcDw35yZUMsXHtq7KF6XZ7wwKYFjVz3yhzz9jhWxbcC43847kdabC3qNP8Fx2rStdJa4YisPRcbgJpmvLmAiE",
  "key23": "595ezn3eCaDCjfMqUvohj25tXVMY1FEZusGXrtGBbMMbStJN2TicHAUgk2aUiffmj3ETY2KNwZn39BxMB5ZtMpUz",
  "key24": "2TxzocnmyZixa4h3ZFRxJFiGooSbESC2nQRsaDcpAWtAx4s2CPmsiNC9XUKTnCA3n5fQDGoygkyHXz6r2gJjkcNh",
  "key25": "mzchGRKCXpvTxhN1cJNUG4qnGTY6ytz5APCU3HLAJ9bXxeazi6usaZsLLVutztDFWSYLLjLjcKPJ5sc2oqAzSjx",
  "key26": "2dsH7FTNNCM45fNNUbvUoMDduNuhTqTjodmctHbWrzEW8caZrBktRJf5D4SjEPxYbAwjVfSgfCXpvhzpqf4bRG34",
  "key27": "4KhQh4yaSNqorRX8BEJHhtNSmDGFFS67fp5r8xocbH8XohhWXAYAbBfn1v7CpcAXRXm3pN1f3Wqfgr6e74VW3XA6",
  "key28": "3fYwecEXseKbtkKQ3tDEXTZFUiWLdwL9GD9wUEEVQYHrJVzptFptF6eGRD6BcHztxZz8QCFWg9FCGJp74XAhN7uC"
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
