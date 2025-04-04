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
    "3edMVkvAsqk25MC8Wo5Btz8XhV9jPoo5kLZDBKRQJWRu2qgNXyvdBb5iwZH4AhSfGqv6JvpjiKKYTtfPCyY7aLHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XhWP75ya9pzD61jdLqvJg9Sec89VuybqKvHCZNrQoQjGfRJsdHHU5nNsEuKz5Zno6P8J4J7yQfrhHsmpy8jytib",
  "key1": "q3VbDiozAw6q72am1RjfAYGdHhKuoRQqmKmZcJ3Qgj9HjqiFodPi1RsipBnmsAn4gMKokdqVV33JZJxcGkvqBUv",
  "key2": "2fVp3BJgA6851sMEY1ZW6HxthAJUqeaNKer8LSoXEQ4YACtoVu947omJDKFLdR34oXN1mjpj6LE43XqtnREaK2pm",
  "key3": "2ZXHvVnJR49WhhZc6XiTPQuDwUdWWaRAQvisggT8VHMxf5zrCEFvZw86bBcnojPLyadJ7yRHPBFgZn1casXtmH19",
  "key4": "3XAvSkubhg9BhRu6WJJPGjSHUjHuWzxDGH8nZyGSrzXxQstNKimXNXqVcuAyjFWi1TbYtMJPJPCfeh4U1AJe51yk",
  "key5": "3GSZnKyBn2mQ6HZTb6558v5rVQjeAcFtez5HbZ4NbuYJmXAvrUetgnXtghkR5k65WEbmbGCcGpRDy1X6y1xRjFcW",
  "key6": "5T8PTBf3SQMJhbaY6V8GyPeMsH2rnXHnwnNg3ZR8d5NAgagTNYYZK5qXsDRDvianc9YtGsZGzqgvanpMZ57EFF5D",
  "key7": "4ppD4mvfYpvnybrjkeRaVcLFMfcqKK3xntBXKy9hdjdNqcHB1EfuxfspfA2yBYnPcPs4RoVL6W3BgkFu6VDcrcdK",
  "key8": "weNPN7Vvh6eMJhHnQbLFAtubcGSKKkJdTy6ZmgawBMT5GpJ1Za781a4tgk7bX2NaM3v6Vy4WCz52gDmzgSZMpoH",
  "key9": "26sRrbkr8JhE1MURd1C3Pk7shT3JB1Tyq5VtFPcfuqcvuZ6StMSLZzx9DT69Nrx4C2eAGDgbKnDUzxuTGZNQxie9",
  "key10": "jJaq1uLjWH591zZVEGVnHgJb5yJxzRzhog8CA6kd3hhwXvJrkMzMiP65VTZmxoHTPpSMQdHeYjLfh4AJkDnxWwa",
  "key11": "3sUCTQF8F1SdjkUhf1Nbs4XqteeRNRbBxhYgCtr7AQf9AMfWqBpwRAUM1oEc3TApupTUZixhZXdcQCtavz7TicPT",
  "key12": "3BY9zyrJj9uijfEfx1SshbtdaBf8kDwiLsGZyQtMkckHYTQHYZ48j6tBw7uKno6xtA9j4H1vYVaYAPmavMfXzXK1",
  "key13": "mnRv5WNiTKQFxnQZcfofkaLFjz8HbtnXGZMwGb9fBSU25QZotrWEGjVvZwvkd8MHmwo2ru1Kj9TemvdxEeDMByw",
  "key14": "rSVftNSYTpB2nU1aGJJdBQVHdNzSLb8Mzsi2RXH99CnuAcUif6WT2cQLkBcqhN4yv8cEai2iRRaD65bodQci7ia",
  "key15": "2kKBBrdvdWNkVkdpb3XafH5fkCG9CiFK6oVYucJ5hM4QwLyCDko2mFAqTiJ15UZRAdPNBxRVkq7BuDPny6Tkdxkf",
  "key16": "3ZoiXodXHMpAHXhVyTJsCHQyTsnMDRazscKRRjEdRE1gWHnsvePR95SFo8SVKAvo6YxfskhM4j9EX9d9XkuDFFYs",
  "key17": "uDaBH7pNSr1KMBXYPBDtrVQHvkQy6ZWbTeDcue12MQzwRGbFKQP8NFHc4Thy69WhSjW1d7VzvMdA2mer7VqxtFk",
  "key18": "5UCXAxkZAEJMqbGLdsY1q5E3S41PmYuWsMvXAhaZzqnDfgeHALLB6Ag26JHdpKw7TXD55EiFxQ16ZNiPPFmeGW8j",
  "key19": "4MTZwbX2isNbkPj7rpqRcFsq4pWpCMTXETpLJbke2vxQ31z3mxyoqZsDGZn7XLZY2Dj3vYT5SV2w7UrQTBSAouGR",
  "key20": "4KfKdtLfXd7Q6bdRaicRVaMygJ4erracoHC2DD3SfQxZgHWbHT68cDbqUM7N1yxqLJKhqbPzUV8WojENC93vyt78",
  "key21": "3QWNhdYs4qeTuKAoQe2XSM4xjn4rznqWJLEuPHA6rB9ojdtRu3Sb3S8ZKDL2YJmuEdAXNP6YZx9UAyMLezZBufdZ",
  "key22": "3P8DrJNDqVzRFTe1URAJANpnKUxZ15dyDehh8jHFUJsTWT64R954gU6MfXWwStWSSw1bqmhMRELTLpMqgWyN6mde",
  "key23": "4KrD1rd9UBraya2kSXa9Jw3ZWx1fvYdjRgRwYydx1c7M5cDbW7P45pQfprNAVwGLVuDRcpTpuJw9D4o8UWzGCvcd",
  "key24": "kz4kb6B9ERwXAySuoig4eQ4XYBnCsihu58REXc5Vuv4vzZ7kpVbyG27XeazeSYp7zSAwD1xadJdBiTJg1rHovcG",
  "key25": "epQWhU5N3ySVQpCsibxP64Zozj6pJA186XWXqHAMQXfuEMkrap6dY5ve7miZpnAnMqQfUvHMcMrunxJZ3UhK7FA",
  "key26": "44FsudwgjwsUjPCYkzNGiU9oREUvLpy96F4yCZ9bSGXeqCvFGoWY4oKAbEAdFZcfBhtKoK2KkUSVgbLVCv1eyKP9",
  "key27": "5wmjvPaA1jCrqvibDZfUyfuQUhXHayLNBH1S3SXFAosivpXxDaAa17CFcgGm6kw3s5h7NsB2Mi34s39NEVFC6bNh",
  "key28": "54znduHdmhGHuQhLMEfBd9zNdgvzvyeicTRsX8nRSx4yWoM71CQJvWsLQPakpcUpuj3rXxYkUndZaLx6ZbjwrxEt",
  "key29": "4J2aTAzpxjFKcvBX6AwUPwBoW1AWdJuS7btMYC1aSGHZtYs228yd2MWB8PEnDyF5BWuyZtX4kxGUTSJ6RwuLc6ta",
  "key30": "5z6RYYdmib87UMD6fLQLAU8yVqjddZ3N5h65hZ5DtmSAkVaf3nVG55sn5vRTsET1wfR3mae4GWwG1LtkAj8jpp1w",
  "key31": "3Xqp5x6GPxLoRXNsvjM42dXUdBo5VWFMRkikauH7amLFTeVEXfzS6U5H9tQKTXbqN4eysZPSKmcapMMHzKj6jhZ1",
  "key32": "3U8n2zdHRxF5X9suVQuanXje813n2McwJ4Nhb3eX9uLdUpt83fJJcYwehhQXo4DmwKz7FM4G5kCVo3nqFWak2o4w"
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
