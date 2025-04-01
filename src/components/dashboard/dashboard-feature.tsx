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
    "2rSyXoci5RZ9ib6q31HYScYWP1jLR4mEsAACLNUyNNKxnQGStyMQYgaqRsiphfyRiNFyqgPAt3AjgyRon9JwbbGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d1vxKKQ6JoLSGeC8gSHJKRzu2gdMqzvk95K4asPrkv9nDgxDS5Fkgw9zLV6GNEQ4GDUW7kKMbyHgrdsME3g59v3",
  "key1": "2znQXV9F94pSUPtWMSpYc6qJ3dhvfACDtapr8AdYeADNSgUfkE1Y3TJE7SLjVV2Eo7wMWzJdYrsFbUP5Fj6fC9rE",
  "key2": "48Pr4ZVfQVNVpGvY8jzewSoTTXWqMXGxt1VnwR46bq6WVPCF92YG4rUXPNbjLCRLWw7HSJpkLze9vUCA4A2VVeZA",
  "key3": "28BPh9EETnSfNmtNeyLyLZSxscujBn6LKdGWo75Lc9mWqLURzki6WhNZh9zpzqob8smnLfukfdTScS2VReYLuSZU",
  "key4": "DWFAhYJpktCDwVhT3ysUbkCUqSHAHMm4TK9cY1sG6aHvonsSdHGXGR7i1qK6CzjDX14BF8jKe1Gxm6uxZ723wrv",
  "key5": "3mfDVQQ5eUWxLr7JhcgcZpTHKXfhqwyTsx9aUBAB2YQcd99B4J95DxWStnG5n6F4K7MU7r6qTVUxToprAYpxFd5h",
  "key6": "Rwjt3MNPk2JTb828ypcr5Wk8gzNok9tJtVUJ3FjF3J1wB6ksLYVkpuNHJPMLmQc5CbMfVbPV982RDbsdCYobwPm",
  "key7": "2kU6FLdNawrYdLqtUFkHpRRKP84XuesqwxgssHevb7iMYTQ6L5NNNNGeaXwB4ZFCLHjMziBxFxPd55disxcPxkDA",
  "key8": "Z8nLWm7g7YEKZUXqW1qMeYK6hqrvE4BYShsFPWZDEEGLrk6wMFJXotNuLf7dFz7T1NWcVS78512Brp9zvUFk7EZ",
  "key9": "n4nXWHYofxF6GUPBoUii1w8BH3VLstn3yuof66AUbKSnSMYRXUvYuUZZjhe2WoUTpLQ3UWpKZd7S3kVzb34davT",
  "key10": "41YXtJoJw9ZL5E3Vzwg3vih4Vqz7QXF6iPebreTiYFL3KHcgvPQDP5MhZUD7fkTuYuCMDVoQrEZCy2xY9JvxZEwo",
  "key11": "3tESahB2eKDdPvX3Xa9aNd3ajEy8j3qncJfnAmJVdVbVAtU8SaFRDSX4M3HS763jyd6LDYg9s5mUnqWk4sPr3Hwg",
  "key12": "27SCsha7riQUtQAAEyd5UYqLAEepp7zrrqdMhmWypa9fmMGxApp9mK15UpxoNghGfEPwRiJ9ci4KJzrquTKCedyD",
  "key13": "5x6migmBAcYmD3xt6Z4sUJ1YzF3HrkvpsMLrmyWZJXnJa4Df54kFqi8o2FoDX5NcyEpU7mZhbGipUPy5vUrhdU8o",
  "key14": "C5Z45Esiv2YLnyEXomFckmVHkd1Yfww7G2rN6bE8kuWrZoAJ9nH4Ej9GmU9LvMhWP9NFDsUeePX2NQxJiCWQcpj",
  "key15": "2LGoJW6icaiv41VbtbRtHHNsHP3uYJLcDwE5fHNXJhyBqeYHn3qBXUWCzSYWEG7fCPYcmBofu8ygNfDMnwGGCCAF",
  "key16": "2HVdasydbR6s3u6kbqH4ANM8rMcYqyNd3yq15VrpEumWUupG43Drr7eaCVA9P9uJ5AKCuT33qVKp8gDTZD6YwfMw",
  "key17": "2TJBjfKQP9wgwhFTmEse2KmBaitPd8EK53YVNsMWkY6mQrPXYTwRpmmeCG36uSPGbr7aiMZYHaoBE79z47xN5VqL",
  "key18": "3MuFeMRka2D9rGPLSE497WXwZ5UBe2JqJ7No2wxrVb53uAohjZNzUh7snxFznpFSq33cQcZcA3eY2AkTzoS3wHvM",
  "key19": "3A3MoHeGrdkiY2eNxSkp9iyeLLGjF3s121xGNYcjrcNDZL8HYDerdtPwW7E5kgxECwRpcpo3nYKU5wAeT2kqGmhJ",
  "key20": "5mswJ24Gk3QDQf8DBy7cMwMXHY8PsA8vpo21sTh85tMcpFe9YiaFMhc9V7PV4KUJZJpudD7kaFFpRhibDQatsbLr",
  "key21": "3MyVy6NASHLWcELF7QcjiahAwvgoegpFwqK6gzNGcKCtenm2QzJCoY3AyqpM6mZzuxdrX1GWkXBWHLELU9J47dYb",
  "key22": "2TNiEuaYDx1tApJwJ7pkCqhLkGk1VbwX51XFzG999ZB8HUdKe7N4NX3KEWFbhDm2Nn8H32Wr6y5Yev4WfYNggWc4",
  "key23": "4biA7Tqj7Qgy1SGMw2bcmHFk1ComdM3Fbj4mozcNXAfrL8TiFYcxMaqyez5HkVdqCPBukuBCWJEHRZPMQFf8sDHG",
  "key24": "4tipyhGbWESUuatqvxXqaoDeiYh7Bw7oaSciEgGcyZ6pFmHhzsec1KCV4cEJ6R8wXUVdfrpKGN7CSjMfyDFe2Hcv",
  "key25": "AXghSTK8TdUc6NWdKaCh5khxeUJmquQa6VZTdbcTUcAcZw7BuV14DjmkTtAtyPRQ6z5KvX1EnnX9VJJCtMtJMMf",
  "key26": "bw1Pbj4v4C2s3i9GgUTGDPBebYEtVoqhN2PjS271CmGCP2XnjDQQcmouD6zda2mReWwJQXnaGvMjRZP3j7MHTJY",
  "key27": "2mK17yXfceTLhjJnGbhYaFT5eJT2wwnSk2moXaFFXZEy3G9rwzTJKHrdiuq4wDb5U1uFpdZCUYQQ3vm85D3ijtte",
  "key28": "4sb4hziNyjei7c3YLrw9qeUn4AKaAkUhgPvXrn7BybUv4hGbrhurFjdWuKhPSKQ2QWf4yFEVDUSGRG9M9gF8ZZTc",
  "key29": "3KnTWcCnUjyPm2mYeDhPqNjV6F4JHUoFjyc4ockj5vUCiBYQgihtgHdLjViH6brHsGUsUezMa27Ty8ThPpE9vrF8",
  "key30": "2yDMonZ6rYzoj8go257PE51i2nNrTBPs63cAVcNQmvSYaKvFm8BTv8ZafaLSNbmePKKPMKxVckqFaZ5kCVnjSq1p",
  "key31": "5xJKbS2Fgo6iP5gSSqfhsS1c4z6g51PvDDgC5QRSwF3sXYayrjnnvv8LyoAVkMpjUURJojc1pLt5MA525GR3c2KB",
  "key32": "4YNFMmFgcsfaUXAe3C3oCq1Bari1cYf5HvxVMtPLYz3rRnCZM8yJtJkRiQCz2x4z3Ldd9NpdCr5ETvvYnxxXGWUK",
  "key33": "4m8dPf6cwfRp3N8Q9SN2fL5x56jEe7Wh5AmYaJ4TywsL68XtHAGCb49Ey2ML2PAbWW87A4mPvEnrJ8XrQSNFHdEP",
  "key34": "5tNbBTqFvJzcE55RMonFd3uJxFJNfqVxuZN8NFiUGcGx7EH3SNAup9xUpiKmFyEYugD9b5P9Y7Gbv7UGrJkRSxbq",
  "key35": "pYQ4rUuHqx4HmKzL9uEK4nuXhQRRRTAaw78RybzoWKrjWZSPTR2ynsW6MbkdMtUYArQgSNccSKxJvBS2jkurc4u",
  "key36": "2ghngUJ5LEqv44pcuKqKdPEa6zNVUP9Ja3mF3cF2Um9uVPzMqJyWhHHxJDZgLtoMZaY7FLDKHPQSZT5d4Re4vb9D",
  "key37": "TsxXnhXXKevZkQct89HjQEfU4CsYLLdruPn7gp5oTBGGRm4aokWQMqFwmPvhdg1EHK21LnwyHz8b3f1AoBJuMB4",
  "key38": "4nvEgZufsrguhGEoWYRSTGK6ow4KsBeyuC33EdWaetcUAKpQY9cG5zUef1Rr9djLXH9UMLEctgTS99etf5yq9o9E"
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
