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
    "36V57uhCQKtsDpJWVoyqC6pimASDoVEuLLCTwuEJyYcpZ9RQMHbmdHqs89SPpjkMSweRVC8drS3gyAXMAMa4pe5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z1CnJ3kX1PVTf9Hb3VguDfwCK8wQfFw6KUGXs4fx2w5tJe7T5HCaDBedYhoUXi1VaUyigvjAahBV1ZXn9nHBCE2",
  "key1": "5riZKLPu5t13uD1joFsHCiDmUQEAsHrwfU68KrfE5tToNQL2T9AyKstL9bUTsebAztiXtH37JQSWY3G1kpa4eJYb",
  "key2": "3z8DHHEyowDSaS5KUP9x4LoAkdYBL3NUqXAXhyievexHVnwwjrhVnJEcx3owGkPgnUjh3d9b9Q4ZS5Y8LHYyJocs",
  "key3": "2uuGvp736SxeQw5tJRtss23Hj1fedyLR5vzhoDQBczgGG9EftneQnBgMYh9nA5sm4rsu2ErF4buf4zAvWhzckZ17",
  "key4": "52oJDr8ZP6VhomD8uhFgV4ZuTTsF9UcDAdLnw3AbimAqSQZTkqYSBM9e5kvxZh1ifPSuQ2wWVjRASAKNLJfeazY3",
  "key5": "3XkB692r9cJxZaJDZq29rLCun5C7Gtpitr9ugUJQZiXjm4BSex5Q7TDB1cyMJnbHmPs7dySgjrVuvUKKrFeFAmas",
  "key6": "2uKyq11gmTxteev8zoJKfd5FKd2yciXECbhsqf5bkPspvwB6q3veg1bc2ojMr9vPHjqwUMw4jgbxQp2Adgj9pLQ6",
  "key7": "SZ9e5R1aZ46g8pF4iiaB7Cic1XrYQevnS6pVzb9NVx4W3T3b6BRXjJhNPF5uNLuaKJ7LuVTLHVSuXKXDMzXj22g",
  "key8": "DZtJvP5TWsXML9EHsUeGkbUX1NHM2DpzvLG6762ETc4HvBzCATfJ8a1h7jPWy4f7k4fT192i3BPx95BJ18HyvU8",
  "key9": "4N2r4gym31GMTjp4neThxdDFB1YvyitpErBP1SUQAtLzH8dy8cSqgE9Rvrvo1jwGyi8mefmauT3pyi7UwpXrWax9",
  "key10": "5js5gBsJiQn98UkzK1qHius1dP2FiAxjYDiMc3Di2cDNwwPaui9TgGCT5TzDe24YfnrFTr9qfuUfpFNBPrVKJXqv",
  "key11": "5tmhXA3EZ62jNd7GLNyFoCtNdmK1qEXMi6Mj9S9noL1J9xQ2skUa6UD9VghT9WCSo48njqrnSEixdVGtzVRJLYLn",
  "key12": "5UouzAtJH6ucevb4DLUkdRdDUfeh3pdPHh9yqszEpzDJWQYMzDUdCzpCdLKKfMewyNqtygbpC5BUXgthQHmWgQ1w",
  "key13": "4cbsEipFiHFNMPfp4mpV5fW619YLmvdfvRTocmGQ8nWjHf6YZRTv9UTPFkBjWwFhYJ29D7PzjsefKURf9CCRhGnU",
  "key14": "JTWaWpaFSAAFhoY8th5faBMaJEacvhYwBPzpRhUpvV88EK3BfPV4nbkLYBkdaBMAUohNiRzXAFWCjvWErfqD9xd",
  "key15": "21skhNXNnpNUBTA1JKhBLthMQQCLdMrs4EZ5c6aMvWeroMg7vZu56mxgwsma83X3ni7ZBCVw1reZCnSqzw4j6Txj",
  "key16": "5rSDTf3SWoMKnxEjJ3MQuFEE4bbahn82basdSX6ioixzHBWKpomvUazNNZEreJCyuqRdVRPNG1ymBZmTtteD5QuC",
  "key17": "54t2HTbt5MLJJQYVwG35BkE6YAjMSV3imtbS8PgPonGzCnXiHPvVf5yZVRGJPfxu5Dk1MZCdpFsEnZb2or5XvCD5",
  "key18": "4rYwFK4qWrRoUtYvQxrLQroT2PapMoUy577QrGB8TRt5Jv9tSDFtJxUcLFt9WLWGbPa2Qz8HhjfEiSeXjHFrGLiE",
  "key19": "2Jrna1724fiVovG1xEnyqcjUCd4pTPuYZL2qKSLVEdnwm1p8m2Sx6zwPyDrTxoHrJoKZX1mZgosqYQ6Xy3BRd1ez",
  "key20": "3t8yHwqzvCPKzRXFNF62fh38eTGpaTps9G3wirHttQbcsJJYyh4CoUFUxURVWmK1pJFQKyk7C7wC52XYjJJo3Wh4",
  "key21": "AYP2freSB4SsAxJX6JwaG3Kt7ii9gSWmJYS5zHmykwuhzTCaNZ5Ai1DNJzPpVHFxfXq7bc3RiZ1o2wH98fx66Qu",
  "key22": "5jWRDRnaScXyE7B1JJtxJGut1E2epADqSEGHpRvDncF5YM3MpavPHs27Eh9Vk9rqfqWBVHmMvUFqGqKAZ46EcAkM",
  "key23": "2o4HgvBUPDF1xSvpvbjbXsP9HJbRvweyvKHHmWCLU2qrAzDbE5Uw4hApbbX1cRAPjsu9g6Yi3Fz4sAejEjm3Kq5M",
  "key24": "2YdtzteYL3N3jH6F6BWNQbP3R6ZXx5edFDfPN8KwXbxphsW8ZUZL2AaNrskLoa5tDtUHd7WxGwLQBwojMCRdshxG",
  "key25": "pvpMvkTCvdNKNG5EigPYvfqniGFmd6fAhjnGQFqT8UTCPdFGEveHwmNTE1QapN8tUNKD4uaGWjwNhdvcruVdQM9",
  "key26": "4UJfmU7u1YdqJHpNNgxv1mEGLuopQ4cadku4vMj2NHbiPgefGJUDmRSnVyNbLCVVwc9zxz5Rww8MMbYhacviEykA",
  "key27": "3rsFonTuPht3xV7afEqEuaL8rUpyQU7iupL7yvGWdg5hfDGqfkaQTuw3cwEUFfoXruW4jCn5CXYY22amerJrsvWz",
  "key28": "5UFUurpRFeTzuvGqrBM7p8f2GfJxtLAy6xHWe2d3fPLCYdyHpK7VsGaFqAiApAuTzvrcrFHviChYpKCw8nhum2Yn",
  "key29": "25vSzjujZ1UHCFmqnHdZuH57GPbmg1jJrNHjRKgQqaqo6pPEWSKCR4gBG8XQoNBrp76qfyyjsoZ4NtdQGUJzcPGs",
  "key30": "4fSQMamqsNaBdGk732rKyeF7inq217Mn9KzSGzmWKZ1EdNpPgvdfBrJTtx74SczAiZdUiYeBH8qrRz8EZecTFf3p"
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
