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
    "47KNQ3x51VsJ2tVySNMHZtvt3ZQJE4Lvop1vzFi4uWsWPRZE4HFE4WdSgdGLfcH43yJfQaW4J5f4GB5EsA5qLKLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K1efDekWbhfTcNPKHBaSEERMoHekoZZq42p2eUfpDyZWQs9nu5jQL6KvcnXo5bxsmYD6CR5fYP4f9zoeXLL3zkX",
  "key1": "2DUt5jxcA1S4bnv9oK79tn3yZgyY2xHgSM6NPo2sbgcKLMo9gNhTRoip6xJjqYogxUjRkbcGjK5mtFsaJQJnFwk8",
  "key2": "3GdBiWBQdHuXdXoREu6GHXwWbCCWWEjQAzeP8Y1H5RZA7jjdxfQQGqgBDrSQk4bR7cfFzgDafGBKr1dEGPSRcFvx",
  "key3": "5jLLRbHfsfaMvbEy7R8jjrWj5rTZcE9p8DAQfYBWskQmcDgyHkzEasGmbjxg2psbhwfjpMz741rC8kG4TCwyKJFG",
  "key4": "565tWKq5bk6yaaaoBohGvYcK39EyuhVtXHRvujhdCZJumDZJjAic5Pt8Gp44vBfqHG95WgbJzt1b91WfDYmgYKeV",
  "key5": "2akNPCNhngHAEJPawwNkZyPXxHnemsLHhJX9XMtUJBd6u6bjEo9LYmuz4pioJ8D4djHeqUCuFTbzeiN4xJVXUM2B",
  "key6": "3vDQeXHuP9xzHmhdoipaG9ykGA3aMjJHwsDmmaHGMP5gJSMA3ReUAVnXbkzK2HkxRXtB4F9akb9kkqNHxLRGPAXV",
  "key7": "2cR33RmvYJM1c3bQGi9RuzSs5bVH9vaoe1nvW6wkV9Fd6NLQSVFqbh1j6ZGudEMMtTW5g4u2yeSeMD14UKMNG1h4",
  "key8": "2LsJSs94xwrgr7J5dQ6Lg7yg2HQotR9zKS2SzKN6bMeuasXKxCEmaEsJM8fuAA4QBLQ3k6dD3bvVkXPC9Aw5RHfb",
  "key9": "3D5w4Vmi2VA8D8xVm2eUGUfMi9ZsfCtM33S9qPAtpCY97bSuLUCQa8ZpUhMptQPVhJwXAuJRGSqW5GQSPQN8ZYWA",
  "key10": "5MwWRZj2SQbYjV7o8aC4H81j5Tos3365BWu8JSY4nU7RNV8mjbUUHoHHsFFNgJtow9DGtq8kwfcL58wx8f9FJvb",
  "key11": "HmzDXFmfgEbMCN1wyGtj5MbzZzfBmgbGKWVqqxb7Rz6xLPXJEQXKGY9PsMEsovWJy86kSep1mg3rP3BM9Ubau3t",
  "key12": "5hqr5d57pV5XDojUsLrYN36KBZ1JsDbdcbNuPaBX248ix3TCQwFuWdNXn2jHCuEtXBkMbfUnejCvkZfwnMZ6SR2E",
  "key13": "3eBnsBpKs8ge962mE3mUWKHPWemudFTcxwyG7tPzCUWTgEPLb6HBT9TCnbTj72wbaAZQTwqTZoYchCekFScQXMG",
  "key14": "56CmC5iQtXVSDV5jdRZqbnx7x7nsmAmYeH8C4PbsiPm5pRykAAxGSc7EuC5TyFj3ns3g3fKoLzbN6XPwbH6e5bat",
  "key15": "3vjdHMhhqYQmFhZLBG7kpcuSLUHikTC28PZt3M12p3Hf2ZZTiVHgQUN5rJGTdh2gKQ8hb1afsn46JomjRPNrPdge",
  "key16": "33UUVitXoWGkhz5v4VWgRYKXxijoAqob9YFiod9cUyAgy9PiYAuXxyVLvrGudXJCWDH77erWw3ztSx5KRpE2if5J",
  "key17": "4jFEzw8CiGDUGugxbtxKr25rsoMSV3mBZNmppPNMBQqacAxMabqxNPovMgSSAu21f5JKD7RP8VESK4bXNpxM4HqL",
  "key18": "3PSmMR2EvcNpn9yTghcRuurbZZrADvDVdyhLsb81kCBRnWqHA7UAcpRPoHA6Bfch6TkkayDMgf1YgtoSjCa3NHLg",
  "key19": "3WkdNtN9eWTQCeHx1frS9PGE8Vj975uBb9ZGxp6p6uNmVQfHuZXkw8TwQ8wTVAvu33Vemzm6wmx3YAc5RhN2hy5a",
  "key20": "2m9Nkj1M488pQ56qQHgJ9xdgvvM9ojjZdJquX9iWxahALEzpeYqwKe81oHuggRKp4mWb4YfMh7ffQETUcJwxfgZW",
  "key21": "63Q1zU4QX8VTs69UpMs11qotB5uRgHU6Bu2J2mneL4BGzmegYRSCqjh7V3Rk2xijPRw4SHBdt3SAjXeqyTv2pUWD",
  "key22": "43ivRBsTP9vugyw5yWMSXqkcHqamrPyEcFUvFYvvyMENyKdeVohebDTrBnW3AKidPog5QfLnCv1A8mbA1hMxURT2",
  "key23": "56F3ZXyE6tQ3HKeJeivTwFjkjQ5GMfV7rySyPJszxantkD4sESq9kZ2uEByyRghozjgEk7KBfgRzgMAibePpcYjF",
  "key24": "239T6krAVKkBTmbUzZ56bd8TcuiimrLKDxXQKU1vAR43WGxDFdDfupkaX5N2Vbu4d3V9QjSU9JcnGm2njM7sUVvV",
  "key25": "5q6Z73wnrsSCFpUvRV3tYzDWuzuUTMQevNo7sbcwJNkfjNGqfTgcVtur7fb2JTqDcHPjJm18NkP4Z4xBFWjnMmxt",
  "key26": "3Bhpn8ZjX6S2yFEFDYoavvjQ7Zyup1YgNAcZN29cZumUmACru2uqmHQ1JMe6qgNz1bThXQf5YkmyzsdH7qUBAmYA",
  "key27": "8g5Q4M9LxTfqC769eN6zL4Ukrp6NirVJxf8A5HEpqrVdtMzn7dtX51Tq5Sh56a4DqFdKCJ8mhF3HjzacQLiieBE",
  "key28": "2hXSY8WMFbWAoXfJvGhkT7nsFYWfs4QMAvNq3iKbfLpQdBYUsKKrZidZkP2BXY8nwqcLSjCDRKMkPSff3XjjAc76",
  "key29": "4YAc5KiQpkastudJ2Y9umiPZfbj5fAVtcDFWG4sLVGk3cUArT6zRJ5fodNNL92P8QrScptNiYF4urRzPm72nNE3Y",
  "key30": "39QP3Xto8AYUrZPmKraNYWbZUG5FHVu9ikPdCFaApXYtvEoRNkaiUEY14AedrxHXi5XBXdpAnnjB2SgixJQMgWBY",
  "key31": "5753PTaELVE973DKop3nAQ2Q1t6Uy3um7SW32u1EQAn4TN3MMuVfaHDaDV2QMK2FnWNS3gDVnUYBNSRURLxHokss",
  "key32": "4HPbiJr8Ui5GeXTFL7sLXXKuHzNbZVBHP5bX5miVpSTMsMkB1t1z2Q15p1R3smm44Z5dT4J7RWNB3QYMApDv3qw6",
  "key33": "3JCzSMdapGnTWEKQNhFoS4H26aPcM7aaAq6U42vvR2wa6CSVmLJA1yweKQLjMJdMsSKrHcqqaQcfhYPmhKqfLN1z",
  "key34": "2ke8vb5gBqpQEe1yfuLoaTPDH3jgZXaKGZ3gEmapAy7NKVnMMV6jj2Hr59j3jJzwjHGVzRoDdCxXcRZu3qKXouba",
  "key35": "46oN4Z6qYBiVd56nBk25tGs4civVCEiRdXXjRa57sSMSZgmTEW27RcWZzyYcCTM3SokMsYscEgenJFSNWVcY2Ki2",
  "key36": "5H3PuMfZQ1Z2PPJrxayQEX5aNC2DCzcWz7HKvXUJgrCGHhrEhmziYCnSUG4FnBkrQnzJdhpTEcDoP3sohwf3Tchh",
  "key37": "ThnH69vG1rFaHYZTGWVMVx3N9N6BFHRbvdoLirVS5yDuMtGGgeTeqfKuXiZFxvvPHggfye6BotMynA1HJjHMVwr",
  "key38": "5Ch1LqyACvpY7BZ3tRjoVZQtRkZy5ku1JDyW56AkExzahkeXEKZD9JRSRxkL1oyAq5iQmrgTpiUjsfPyfWSHPvQ1",
  "key39": "2vnbZW2YudzNo4Q7KyGy76k1aLksJ5cd76etYRTfP8M2QhiW2H5QRWQV5Jf1kzpqhn4rmWaMjcz7wwd4QFYLiNk4",
  "key40": "2Ar3M8CDE1QpX628NpKDEiEXSJh7Z8wNevcwWQvfRpjqQRALAcD3RMxJpPnR45nVBXUUB3qWJCZ13ytWuhF9LofT",
  "key41": "5AFaT9oUCPM73TjTU6Y7mB4CxYoaaZauY1c2wZjv8XESkb2xCcJYk7oaQwmmwjqRfeVm3zv72iQhUR6TRbTmLPY8",
  "key42": "3UV1F7jwnt5JhiSMbyi9s1fvmgnheZDz7GDv3qgHtWh7SuTiib9FFaosA1F8RDP3bRy1DpyobPLwe4Ho6e7H1FBe",
  "key43": "4kw8nxT38AgLU1ZvW9yPZir1eFXW58EZFAHpeJrK9K2GNcu6D879PwLvddcopuyjy8hwBQu9F9dXcGSx3b7HSByG"
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
