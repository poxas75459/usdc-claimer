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
    "4iiHGFk1JNnfmvLv3K5FCK3K5BRGqx81QGdFZC8HyStSyg8bZJNQUQJo9wEmfJLvrkHJeeQUtmFGmy1SLa5UGHKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YJMaZTqAd826tYAJH4xLs5ViiEf3QS8Goxx4XgeTCwQTUNpUyrRPxRnGZ4AAzwDgWNqzES7EVb9Wvyn9yd1q2v1",
  "key1": "5ZdXEcuQoxLQHFACPLYEXsT1a4gZjJwgm9Gy87B3gHVuBZsp1E29ZdNw7yQLX7JHbHxgyESJuiy8VyatKRJXVRMw",
  "key2": "3sUHJUexjGeekHvbL6ErHuRgYWnG5qtLAHpqQXdLHWWqSPoUx6RRD6XX9BXiLrCojgwqN9VQDmRagWb2GzVFoKTb",
  "key3": "4wL1m8WC9C8cHsQZmigrTp21iVVtD2RHCTGLQ1K3c5qHVkoKSB1uxzzzP16P4mWX4odbGKhLZmzvSqgMmtUUsgQR",
  "key4": "3GcoAbej5KSKSjH7ZjXGQGiGNKr9yWpP5Zq1z69C8K1akUdPS3FveVBaU9rqCsCSSbD7aboc5rD3wfK1jizzmbCF",
  "key5": "ErYsSUnyLgy78H6Y67HLdne353p6Wwvp4adTGJdUTg3VURUa2rmFiYyToXJAzKGKCKapyJDdeb5eYfLxtFD5XpC",
  "key6": "5GSMz4bPyvVX9heAqMVgou9rK9zjY6QcM2aZkbL3YwT6MEn7F13Z2DXvhunzJJTWugx5qvmykgyxvsmmoP9BJrF4",
  "key7": "iVdQ7PwN3KXfjvRhu4rVpL7adxwwK7xvmzGs44wuGwZtkuv5BAnQMU59Yb46GYUfBh7ErU2eG15uBxSjqV4Z9Hy",
  "key8": "5cfANFZyFjaQFq21Wwzz8aP1f2XmVLGpDLb6f6Q4i4VKXmo5ZtrCEMkHkduY9B7TFwajUu66rPvfYziMhg7B3Ei2",
  "key9": "4eErDTnbFxL6JwoEfgCGXRQvGuorqJZXs56k6JhgiMPZ86vL6KEwSv67Qhs3JdYJ2amF1uSTVuKqXWjvPwbN5ef8",
  "key10": "5Q6mU2RKiayxw8xrSdJMqGdmiF2auBn3yXrpHFv6WLg14RBKxKCX5U1JEASGjcYETdTGAPcVSFZhj8umfnAisanL",
  "key11": "4DbicrfAeBoNrhknQp4kkhkecyamAzi3zfuwKUx3sXdD4C1cuAohCFmph79KQwTv3B7SPDWv9pc8kwCjG2U9t1hG",
  "key12": "4bxwmHX4RqkoHjS9SEdzsBNuZoaze4hD8wati3h2qibiKtjF1wXC3TJ9SLZdBSXjEJpHPVeCTBJ1br49Fp9pkmiB",
  "key13": "2HJeS3nHeekvUkN5MTs4ucb77GCc9uSLB2Us2ysXE8zBUDEde2PSbK6DW49sJ2uzLD2cYgRFDeU9p6h1vGfv1YYZ",
  "key14": "3DBoV1jp3bioLxa4pG12chYZKyUPupUJhabJSmh5DQ2KKkG7D23SzZ5m1jBXcUGFMB6PxqoGivbycT2CKNmaVeQv",
  "key15": "3Tsq45YLY6xAuETYXqvnEhPHKNhi6hHYwbmbxct1M8ioxBSgyb3WHz7WhZ82kVnnyYKo5zsd1wa452qDeK3V8Z8D",
  "key16": "3Gpa7pLEq1EV9ZNfd4fgKFnNGQeEctvitygqFn6jEf6YT3yw8LSW6Ga5YpvD1gnXcyhEvjxeqhVAkGtgXGcatfTD",
  "key17": "4G71jRtyr4NR8RvpKjPk6pMvCDDAn53n2g76cUiQmzBDeqnKai5rgLoSV1QJo19zTuTnYFwHv3hbYnWpf35XxCX8",
  "key18": "5ftepsqhQd8UNqHmwZzx9tUixSEQJZNb8x3GFrXs3YQ8wumDUELjSGECwyLPC5T9PeMZbCwbNn6kiins3RJkakeW",
  "key19": "k4QnTTtcCR7jxZKu9rJDv21RdNDjVtXk9VcQL6reY5kbRfQKyVBuNXfi6LWC36rG6mBbf4XpttiCG4RagVYCTPn",
  "key20": "4wUscrC5wZmnCX2ZGsKeJMyfi9CFetx3xb4sH26X8PSpXZkiZanroiCDaNeG7jdwBKUGWe9ZbZMsEAc7E9qJV45p",
  "key21": "4nhH1gZyMCszLdSFjYAhFhrm1yVtFLqfY8zJ34RkVThetm6Di2LziYYrvbiUGEL1Xw5Hui2kutJfMRKFoeUyV3q8",
  "key22": "52yNZPVAhcDuzt1vUkbPKrTr2H5RwY41QD62mRPcC5Kjpt5XW6twGrCitLLT9C1hJmmwNZYARyMmNnvt8P3y2GY2",
  "key23": "3zgKqpDTHZnk628yfEsRsxqJmAK9GNbtK1MqbCuRyTS1CtdfA6m3ueuGZtJ8giw3WMBcTfHJxHVyTPefUqByKSDq",
  "key24": "skeVfBs4TZEeaYbCygHZx3ZvZdZyVF5dkU5mBfhr7n7w7fEUYUS4eZC2XMabTrdhWjxHuoqP5j4vDsuB4qyXnTm",
  "key25": "3VdSVQfphPUSVedu4JM9L4A4McdjTaYUr1XtRttcSBspEfsng6i2PUF9kEPUVV3CzhNtjtTtTBEHQFssz1aQeity"
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
