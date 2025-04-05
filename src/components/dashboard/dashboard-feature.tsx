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
    "47LWmB7zs7YpcqK6VXUEd1HH9uH4XzZFNAsbTbphMnjMynCGRyNSMJ7YkEKLEabVxgfHmL8ZcUJfTvRoDNi7bEzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U3AkyoErxUnB94R36Sb3ZU3kdYcqU48aTS4RykYvQ5Phh9nKED9kbUoWLaoZ6eCcJkCFwcWaiXVzKavujGY36cX",
  "key1": "37EfRWuMTcJo3BmSnYSs3DuhDz2ZAXArx9wRUy41oJCqeez4zSDyosBAidHmNjoMQAw6hkqCCH5jSH3u5ftKuQG2",
  "key2": "2eNPyxDLUGsS3cxR3BjfvQWgHRrqRiftcqui2qF615NRquxm3ZCar9feqj9sgJiSMKcEempqXuBFQiKjG1U6xM6i",
  "key3": "3YmexyZ7WxZ66q8F7iBF7M6pvw6uPaQnYsQM3x3rg5tQBocTqgyRgAUQmkpDVsGmHgxVXnsdG6qqqjoyvvWdrYi1",
  "key4": "3Jusm3JDnrGs7pZKeacWZuemzvDTLVBfaTPANmbBPZACG5tEj2yCs26kmW1LfwN8jgE2cAQHDDsEKjjvmjsper13",
  "key5": "LfEbywioMkVVEWZ5opdoCqahm24TYm719rgGEKae4Pm6f9hQwrkpLrSX7iDkGG2HSyF8xfaWgBZUAo4CNyVZ83U",
  "key6": "KrmzHSyGL94dw41t6VwS41C3ueAMM8GmyoMkPY18TwX3oE71ok9WFxuuUershTseYtTZSdx7ntS2FF2Y9pxLGZ8",
  "key7": "KzFYyU5s6aPERveWeNfVSWyH1H343RfX9cU17M6KeQAsDZDGvK2fbJ3NcgPjnxZ6y7RAm5X8LBPbGwVZRnFhC4T",
  "key8": "4HaHSe2RNb6MAGevHm2RmcUwPTqCCX86kVySpsQxYd9GVsyCNDEfL5RCgVgWX1fEe3vcRwatLEhYZHLPm7dFHigW",
  "key9": "2ZJ6Y7HgNTnHkM6Y9UEbG9E4MQPcHNMBdxjokjR29Tavxv5yAtjhfZGq9Kw9tDXX1KhM2gUzJNRzPpsDybBK5ZQq",
  "key10": "4L3trg8z7LNU1F9cE4maG1g1YLafszU1QgQZ4BpgHqVNyPYy9xZpuZogfdQGhzwYyJpVQ6RAf3gWbkYJLFmpFyo9",
  "key11": "4G8CqaoD56oxYU4qzu3Az7Y8EqJniucCfCAoYQwpuyu4cRFAsSfcE7HfLQwZSpesAxxnxJTT8wR8MRDyGjgQQw6t",
  "key12": "4qZET39g1KcmeySiYwybaYGcYvGSGx6o71qYhrg8wZZURCee3z4r6V4JviSespjecztnupPvbiZmpLRJUdViPJ6H",
  "key13": "onCw2CBZNZdV5rQMaHK68mmpkKFe8X9HZoWzVYuXFeBhEUeKtdgiat4r1gN7rZg8U7QZMMKJSo1VK2dFjCMQgwA",
  "key14": "2nQbv9FfuUo8nWiin1DrBySmuQ8ibhb5iHSGHW8DDQnqLJNJ5Awaso4NPZ3wS1vnu3btBU4Vu6cK4igXe6cmcH12",
  "key15": "5xd5DkKPVo2kTqWEXPKgcBxyr262DxMoicHT1gRQZsNFpoB4eBdpCMMPumSrHhn7wKtLJczDN11TgGRVPpen3LYF",
  "key16": "3MRzw8HwL813DSQfacN1wuVYp1baX1K6fK2pWXEp1VbS1VoKDCvjArwL5P8pPjqxoVB4VUGXCvqieX2PCnZzaYfi",
  "key17": "AnDhffsRDbn9SETJBDbgGTyZhKD4J9numS7mnPoUcobjA64vN3LbftFrTWxAtnWus3Zp96RsrgNwGHVPaCYd9At",
  "key18": "5otsKdFqATYgPqTrco59ZoZzbEKBPgPgv81gQDbEtSYppsohsmC7zVKDMWcgk1uEfaZiUU3DLpsUdsVVdr8weXmn",
  "key19": "2oFJhjuF1z2g8ZUJweT5Bacz75fDepubvY2MgLLzgfTHgzQCitXs3Gefh3HT5T7NeRqEPhdgWXuCfPgxU8g6YPCh",
  "key20": "5s1ST8TBZDc3o9EkFvgfG9FTeLFyiVdYHMYVo9LnEyXxgAYz9Mx7PMTAKG1ugfJ3Q4t8SpHnmNgeceCTi39oDyYz",
  "key21": "krQxGEvfHfcE3CLau7zrxNA9vJ2B5c5F7ggD6W3ScVRpe7L2CZASrt6kHhL2AhNBnKv1R4m9fqewtZyo2VAJrNB",
  "key22": "31kL8KYCsDSX4xxEkkQkR6WtfzRwDiccz6XerT3Dis6HnxZa6iorrTTG8LG9WChfR4UWJSJy5BDBKSWXV2vrMdhf",
  "key23": "3RzBm1XwFFDvgTaiprBmGmkHcctFEpG5ZwNVx1UAzFqDLvsrA2vkR5LVfVCLQ5YUPVfs5PVoMmdwTZCfVjcode7L",
  "key24": "pykm1ZUnQ7ck1js7CnUtJsVG44fcB1eDhnhnZ126rERsK9YBRWEFcP4h1RGAgYGfkXasDBnLeJkqf8gHwFnSwGe",
  "key25": "3791UF5suiFnZuEbESCpp4EaVTXkkRsJANyFoqSxWRyBDg4NXxcixEc2ttZqBcCvvpPr5BBZTvkDPuWJZQqf2Ntv",
  "key26": "5v2jwvxi4a1FzxvA44QXZziFmDM9anK8X1vJ7vtJ3aAQuJ3SpZWSrzqCcca3R6teKXH3vLaCSnXBJehF7gkMADaC",
  "key27": "44tfzQ7YorvomGo6Be5CvLbRHciK2dBjQCkguVZxJ27vzPg7ELR4cjXxhVVuV5u3rz5VLFhsi6B7kNeXzK331wj7",
  "key28": "488jSC6Vod6gMdm3MizvmTdST3Cgkhia3Mbh95t4sgn6eioY3AYiXbLbJ7qZxiX4D2hrUmpinLh4xF6E8BKwetiP",
  "key29": "5HYqt5LhTtYu3Vc1yzJrK94QD7wRac4in9KETSwHNtNZBSnQPGmwtZXCzYgQJE8r4uh6nmaQJWBza1Rfx3wrj3m4",
  "key30": "2Y6KhQXeaVFAbwran4jF5q47sec6EGRTwFiE1d1y9txi5Cp2AuecdggqxWpW9v3GjQzMvTDCh5HWx13CTUtJPre5",
  "key31": "2qHhJtYhyevUUPyZsyQ49iuY1ACwy1W689kQPk1ASHpKBP58Q4Wh5q6yDYntq3qSccQzxpP5zYxVqF8p586b9GD5",
  "key32": "31r7qpdhsc4bfRqA5jd7g8FXnzopceehg5WdpbR8UFxYrXd7q8D3wNdRrqeENwf37aAC9M3zUzoWxNFHcroKfzqH",
  "key33": "3WehqHJGpeGZMGHmDKGhQ318nmrwgnDZ1DQo8YZ22VngbGq71iXt2jQTgk6h3b9CT92CzbVbYS7LSj218fVtMNf8",
  "key34": "5cX1hm8ockikEwsJTv3QBdF3o6bJZwf5kQAoJF4LggXzxSaaWgHfK9Z8TGqcHZUqb8ioVWAqCkPNhfzDeq8g6zzH",
  "key35": "2mV6BFFw99XKQmT6UrRfxJ9adDEEV7m5xPT3n5jE9C9PFuwiHf6WCiPCdCmtMCd4Um9SmUfpeU2wyMHBRkodv8Np"
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
