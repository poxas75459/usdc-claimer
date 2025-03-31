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
    "4SbzQHVb42jyQ9KVVRNiQEARKpU8ynfAmTyptbYhH4XJnL7RFdE71f9GGH2VJJ5i7AsH67dZzY2NVREeYY8E1PfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3abkAfNB3nmFDbvfL4hMaasPSWRDZcKcmAJqS6maV5sNvM63EZk4BdxqS7k6kRPqJptKczQgbHqohtGKmdKjHmhh",
  "key1": "UvkRY886Gb6kdAFWawHeXzpvDCvyojyV6qdkWGa6msy1D6DF1yq3wUGSp4wC1nqycPAqmyhHcp2GnPE54niVEpZ",
  "key2": "3CaaPJoJUu6FLrVu3FLPJYHhQMXTZvHHZZa8VGBvm86iuRanyLCFAu2AUD7YkM7qM3zT8eBExjqyPtXjtDxUXyty",
  "key3": "5soXVomo5UsV4zfQvTzsbDFFq3mmKo5nMYqurjhsjKGK4heoUMBbWSRHNPNDE7knjJ6MNy9PMYMjU9SCEzS9HeDf",
  "key4": "3JnVsdMWeQ5qPtx2yVeKnZEXDXHLizhHFwweX7jtnCHrazLWaFRDSuJPDG8VisASWHm3huKJaiAZvYHKYcD3yovq",
  "key5": "5F1JGvhYm6Vcy8DV3UfFG9GDhUUaXZfTDMyTntVRwFKsUcHcXmHcN3KyqTxAg5ZVnLR438Dji7EAER1FuUEgPY4C",
  "key6": "XPD8MPWr5ToYCEKFZRK7Zq7Gxpoomc6hqzH4KoKZPg2pxohD9WLVELn6ggMHoA4iNXAVrf5bMxHRXmdgEEeq7Zg",
  "key7": "49DK8GBmPSMHr6YyAttuUdGoKjfvgNNQA2hivWUohEhab3fY55WPNKBYTMxmDunw9RJVJffLNGYHqD8Hh1HNi7R4",
  "key8": "5wZfzt5ybNL56m1w1ynxpnrpPhy2JtMQJfiBu1EaS9HWUeijTUbZKQVCv4PeZhPduNyJE8Mfqoxu4PoiWtQR9dm",
  "key9": "3jL1kaq6n131mhTB4X1HH2bQHAJV3S1pEdxmtHcDvJLwGy8Ne2mgp6N4FkY8xxUMUEijd3Vyrpq8nyEzwJJ8J7iR",
  "key10": "46ptjvwtXsb3qzEFn4iB2yH2thhahyC44P3HhE23NFfnycKkuaKwV7fXSj5cxqAQ9VEX8AqkxuYC3bDjpb69yQPx",
  "key11": "2gFdp38jLAKhyRH6BuFUApDuy8iWibFxvJFtMAUSfwAVcugfhCrf2NVizKM6frx34hP5H7EGM3g6HCpauaVwj4y9",
  "key12": "xZMtdHogd7eskiGM9XEQauRCG66RBkzJFgk9TkYLWf38BQyWp5xET3ypFGnnMpaeGBDk32gbJu3TGekkzEeGJQp",
  "key13": "34APi6SFS8aAaed6rLoXcWcJPFaVBpmQPmGwJi4D3dyHjSNQa3GhLNz7GFo9cx2T31stwZbtxcE7pn2P2jdviWNS",
  "key14": "3QpYxhXHp6TSXhJngQjpyE3xJa9ZVfMUUTVVtLURBU8X4Qz9QxNDiRJJLPmkkUwaP6PmnVQD6uzaoCAigqh9cGBu",
  "key15": "7bNt8g1eATCFiJFqsFR22NHENXUwp52FDLzWnXgd5g5f9v4aYB62QaLDo6rbDbJYbDZutGyQXvNWQfDAe9BnqdH",
  "key16": "3PxtkYh3vRmjxDEP4MiyB9Xeny68Ukjc5RjPMb4sdJCw2HwL38MzfjQ8WRMp3gQX867xFeCsKghcbN1hr1qquyhH",
  "key17": "4fHfuo48TeeFVJ6WScUVXaWnpaLgQeVK7mJzVLrnxzgA6d3pSW1bsEnGeNdmr78WHWD5FkYCDgukhwQrRgYHcJtC",
  "key18": "aWfaQkMKTn8n78wWMZ1Cw6WznNYQGkC8jis8WnaGTPUJhVqw7ftdP58FB6GHajSq9YsYXTJaPsoSEy8sc8neUnV",
  "key19": "5kY8hZfwv4h3Xb7oH4zDqmCQuRtgsLbenXcZS8CadToFKquLcNVrKUKYzN16w7SWAxvu83ugseXWUFyDwBDypYYb",
  "key20": "3RxFdZ1L8chb4B5zJU2pA1pmJRTTQUti5QFkYTMpos6ak4waDbELaFGDQR9kM9prUTECkPdwjxoLddpK6Ltuijn",
  "key21": "2tgVc49ACAZsGsLd3fF1AiUKJ7DWDZKsaQ8gu4ejEVKnCBTqr9eEveBtGPbTjuf8p1s2VwRot5maQL4eB5kFhMEe",
  "key22": "fQRgDLeKu6wQ1ncbw7FbTNxtL4jwMi3r4LqJVbSEFsv2YAz9yMqJrb6ZMensLAL49R6d8WyyVjCJ5T4aT5JACND",
  "key23": "2xXt11DRLLz9FZQ5jcqv61Q4EWYpSke2uNdQWRGzEdrtmFrDJmo1psiKK7mJMAh8FNVgmwShNgeNx2gZq1fsnnnc",
  "key24": "XEqLi8hrkXDbcgCYrs6cRmSFoRNbofEaZGDA7YLeXzxobTdPAUEz9ru7ouyGwBtQUwAgssfbVjoengbggR7A4ku",
  "key25": "4YFqzH4KHkwzh3MAkmSLcueFJRJX3rGSmXWBp1BJX6wSj4Fo9ZtFDn7ZPhNZKfbjM1fkeEfAn5nyABoMkXfCsN7r",
  "key26": "5W7j2e9gFmvC8QRqATeGZhbC3CCuh3UWzYQAKXMKiNaKph5zADUCF7d1iYUvq5dvk72JU2pXNyKgBVa3FidS1J6S",
  "key27": "2H9aAW5oMDfSYypzXFP5AZ74VoaGcf83MA7QrE5Cahg4fpFkmAYt3s6GMWnUWchih1Ds5L1pgTBjF7ycZa5VkSui",
  "key28": "5EM8LiWAJETyhVEd3DNqAq5apQmShMnKZtNSyyP1y6U8q75REY5Fzb7Wjd1dqefTXdE9CKvgGsNQijUKR896ntTD",
  "key29": "3Dxddvwg4P1njYMA9vtbqZuMjPR9eZBX6U33vJqe4BEYWVUgUnFHPTvTTGPL4C47qqCzHbN4cXo4LyD648EDPPUi",
  "key30": "3GA69FSZPdmeWydE791V6B6DhS9E9tzKQymTBQGhwHHgPtgSMCoEg38Tga4NnDvqpoYKC5BWr7F61duRRE9soJC4",
  "key31": "2TCWpAS749e4Q4NmdYXVZ62nva2RKrNtQj1DASz9sYfT7U8nSrMScRrQiKXLgc3i4nPtbprr8nxXp5KnFzyPkwSN",
  "key32": "2YwA8eXeU5BHNa8HACL6p97bUBkwjLDqeN3kSJ19TyA6StuCGXMmXzMaRDLhCWn5UamCFqh376ov6vgdkPbrprva",
  "key33": "Q1XtUFjXMxmwh3pDXaKHkHMi5p2WxWCsYAZUde4ZGatf3JV1P9oMBA8dYdxujbt7oYjAcn3TTtTXT7wEv5Dowtn",
  "key34": "3jVmwrmv9nVeNHZSczbNq22LWisGYskKSgCduopuLAJQuTu1c3UEwsyKduN79ZJGgqfC32kAqCpfBy41z7DLvVAj",
  "key35": "CgLKAR835JC7YTfHqBf7X8Kx66Lj6yXmpzSu6nn6BwswPcBcYFY9KQDZv99GJ9kyNqXfwabAF3F71fjRZfDFma7",
  "key36": "jtQgw5ev4v5WUqLeFyc3fYyLYotirGkEqkUMjT5QZLt9PDeMKZGi5ZgEd482G5j2KyHbekUz4zaP1NvMjQ9oAEn",
  "key37": "2avaDZzrLFdTqyXp6aMwkxt4JPiFLAh5ggrj4YdMzsXeSWZZyewJWpT18HBoeKuQXyrTVNyK5n56rWjGYfUMtczq"
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
