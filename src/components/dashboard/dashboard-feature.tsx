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
    "64FGS79n6HmoucL8BqED2wrsQYbvA6HVyuYt8e6oGxBAccjLUWC1eiZhPjtbP18Q8DMJn1p6FBQN4fyomDxxUzGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hNZUemMLNsuaCDsiAoFUVYNnZ14Sg7wiVXf55tVJETQhbrELQNsHQzKG5LUWt4ZUKYxKPA4TuJxH7crkuuT7Vhn",
  "key1": "2UuBseLqYEcSVCQJBb5oKXfk9NMkfMBufeJUS1pzJe1tHAX53EHcJXfh23bLcdAiMgjvwXAREuQ1eW9haJi31BP7",
  "key2": "5KsM469Skug1HFrS8aDH2rgyNwSzes5gqyfH6hjS8Z5mceaEjeSb7CkUFk6hYszRzoMpSfE3FA6SReUiSMY97cux",
  "key3": "4DGoXxXf26HZC84UseaweFsP8fuHp2EBi8KrfN4tVqg8nHAfx9KAV4bKsQhvogJT4EyTGXsXgFkTipfHerzbPZHR",
  "key4": "28q9eteiG1CUP3AobJtz4fcuUmCudQuBwP8MhUdB74XpyAC84qhYm5S3XKAYhv5puBB2XC3hwL2e5jjkLMerDVr8",
  "key5": "34ESuC7prnz7Ztper4vCvHBFz3ip5q2mRHrAwvkuAhmDQ47J7eE1YEopDKemLG7Mc9f454qKmxr8jVEP6ZVmEtpZ",
  "key6": "4xJF8pD7tPju9osgfjSdaAusoTWyTepcGCnWeJCan5W8TU7sVS3E4KyT4mJaTS5i9jmvcSQBKX7R9NAtsmtQJCRf",
  "key7": "yHEyGTVy8wGQfuFHxafE7pBEpPMkFTcWC1eRSgqJkPWwYWWZiWSczgN5jCTYwFeQisVmkWENJT6VZkWGMZBeZny",
  "key8": "5MX68yd4chHNRuyB1uc7JpZd28qhQWG3LerAjgKHje6233k6AhiXmDUL1oESN3HKwwtpBZUQWvMjWGfYea8EBVnW",
  "key9": "4z4dyeHPZm5LoedUf1EixA2pYuv1vXeJfDU6TotXabyPBH2BuWMsWAFWHqUtN7aecf5J11KtPwi84Eqz9DJmR559",
  "key10": "224rDhBz1NKFrdYwyCjfVa1FyGgiW21XttcHodqpBtsdC3JgPKdsYhnepEmkNezvExMNWQooE7fwdSW7n1bj4w71",
  "key11": "4MVheDCr9D5eDR5aYZRvdmTZYmZjYjVtuoqkTN519RjjDe15kxMKfx2j5TEAoWyJhee7BkLGgSwenRJrs14pAQy9",
  "key12": "4CC4wpCzYdLoiMiSN7HUNSH6jaiN8swM7yJgnxcHmpoGRzfDAGDyVD8xmiktc8feRpwAPpsN2X1eRM7z7jc5gCpc",
  "key13": "ZAXz8R1T1E7iB5C6VYmjBDwqx7zFCGfWbM23gFHmBB53bRAtK2S38i7eHthuZwQVM6e2gMKazixsqw2GEn24hX6",
  "key14": "43asMwoAEAtnpbkWf2HWyfPRgbxQGhT6sT9Sondm7XacZ7H7zuSsP4ACNCowbwTLM9PzdkQtceXoJKLUQrpf4jdW",
  "key15": "2CjBPUBeSoiCvG2QYhgjbrAbq6iWSdWYPpPG5uoUMKjA1Za2JCZTDMW2UYZqbCwoVJ9igUe49mJkaYvqDAZKBvj7",
  "key16": "3JqKH86s53pKRnYhLS3ij7MNaTbgJgxUHghYBM2TEgjgd2CnQp9pBPLyqZKzSVfApinoJvAevxc3Cs3BNcnDNqtL",
  "key17": "4i6jKKmnXGzEvrtEMuhdaNkRp6hcU6J425dueR6TDTSr36kgmmk2qjYWvqfJsqptk63nFqobZtmz1EEaD6CTXvyn",
  "key18": "4yfwyTfy68C23qFmyW6JCg8HMqeNkRTLjUd1prwCxeas5wYDu7eFqAV4PwH8dgHqpgSYVboa1NegLbaYVHuSE5xq",
  "key19": "4wvd9E8uzNhZDhoA8g5rCtKFWYyg1d4VvNKV5HsZjAxodEKKQPwXeUfqzJp9XbBcRbVajPJN9wwMYbWYjkj2BSB6",
  "key20": "4Lo9DpmqxDVGhN2LQ1KMSC8T9Cm7ZdwCwDJrP6aHukTiFQ9SNxVQ3NiujDZcqXGt7TJABPfRZKpCoE54VnAkUfKo",
  "key21": "3PVGw3isFoRrkbm5NkThGnv52oXk7hoHzv9WHnv8CD2ycjr1suXHdhXtJLZB2YVe8icCgQzt5Gzh71bK5192qaqn",
  "key22": "62TrckYzZ6MzLRSPKDgFWJSS5oJ9DUuEqFK3DAyNAft1XC8EB1C5gfJ8shEnqupUxKMBijEJ3CMuxeZibYC47mQr",
  "key23": "4tZwkMHdjGNLGLx6ezHxCsMVLmmWYptzAzaV817Jt36BJXmTZ52emnaRmw1S2yFDB98K6oAndh3mvz9DxUYUf3HD",
  "key24": "3tt83wd9EvH8LixJgYw6M8mbunpGbdbNiFipCPn7GK5i17xZyKzNWHbYTrvM57prryR8e97VK5qqPhBKZaDfpYrX",
  "key25": "3YEwricYkkuwy11MSnFv4d9MzrfAqDFRRLM7b3JYiWng6Yc2TSZsdys3JYcJamP3k7TxBg8zX1pM8SQc8ZsdNvoe",
  "key26": "36TBhjXhRChzZMd1hdsCER4mdyMV5281NhijqJTdBWugtbeF4tAHJTP3PZydqsPo7BnfST4jYz9UHUCJJhAtaX9S",
  "key27": "5zgAXdsJ1KfjkRzHxRw1qEZbC5m9Rg7RLqmGZbHAbqTJf53CXs434CpVitFhVgtMjaH4y5RC9RMQkpBQLNWknc3z",
  "key28": "4ZTLdu3TQZSr22EFKxSH6pLDZGu8hty3VKHQv8x9M2VwxneQaW7pujAMAS2UMoYe1FRmy8HZAtQ2xvp2MQQcLJ3R"
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
