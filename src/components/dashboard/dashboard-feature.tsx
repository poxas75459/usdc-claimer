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
    "2aaVMuv1YLRThYD75dbZk8eoAwbbUfX2VBy1hZJr2qerhTDmGsUcqqLdbv5y7u9BwbqfxJF1htJf7t3uLyA1YtZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f1TZoQAY9g7yyK8ohE1yCQvjALA9hBsKu14gJi1xQPMGHp22XNnJMmgHm6R2PjXy4Sc5r9jzQRwdyCc4b82fNK7",
  "key1": "2xqSjrGkwJn8dhFCNCMrErzQ1dWNmvbKmha2hAWJreTeVzCzo7uqiLtqHwatwKH3TjM9HJ1vNtdsVWTpa1uA43DW",
  "key2": "56ceTreCgrgXbSPLNmFoTA7tosB65wUpiYXRNYgQd5Wduaz5u28iNUPnAB44H4QQdrtgv3shrErmJLxUahfd2zog",
  "key3": "4dVe1tZTicykrEAs1wyW6NBUzkwcFvhFZUNxVQEYnMyefbwD8frtVziohPVRaocHUtCNsGzXsr7cotVQC5yS5uv",
  "key4": "28TaEKa7275488Lh8QUYkoZDa47XprLFSyLydaLLtgE6REfrXn9vqX8iEbPZMWuYL6Wdzz8jtU4E2rQNrVrUW4Fx",
  "key5": "61iGk6UfP2k7jYD3wVa9yq452Tw7stVok1HdUpk1WkbauQhz1so5GVkCZJ75GPqhsJJ1y7Hbh3j4tYCikDDFrYGZ",
  "key6": "3W5GwaXABobvit33wGogYg6Xy5avGEdMfsFzTRW4f1txd9ZdB26qk4hTg7PtgPKnsciRP2TseAQ7kvyWXS4seVif",
  "key7": "3oRTEGf3Z5jEkX2EBnTrbT495GWhdhEna9r2RcUjtxzS8A9kicMuVREKFeSQfMnhVdB1VzKeobd5AGmYJmjxPRPy",
  "key8": "5X6Hw5BZanu7oKmQBFJYWDJYuxyLxP9NW9Ut2rhAv3bhfAC4skVGSoocsAk8797r8XLrzG5pKAinM18cF2nXgksT",
  "key9": "125VvtpuqNiZdL4RdEvQE9toTqmPG2ahVV2ySrDpkMTEBgoMQWcwKaeTFL3MsGx7EN714ZNn1TXBCojhymTajHWp",
  "key10": "5pynKD9XW2H6AaKbQB1DwqXLuCaDajJY8w9bLhwCmshiHBSN7S55L8QUQnebCUbiBKxRidSVbikXrqGEZNRn1ZPd",
  "key11": "4PEhhKLrmCPSUHCkxrMekMQar4bwToTHTtKqhxu2QxgiKa2qcqJUnPhjKEMRaP2w8DJnavSodvnxJb26ApFSkMAg",
  "key12": "57kiUKhDVRSVvuTqGB8SiJawXSWjZsoWgrbW9xqvcWaFbBYtDfvegwnSLmqi5GofJgPGNVLYbW6pZGHe7hcSvqdf",
  "key13": "JH2QGcbevVZ45h4kb2pN9phcuEjp1RmQbgrMtm5Xk489ee3SeyXnNNB6rsCvuxSRxfNa4XiXjcHW1PqWbnDbQwt",
  "key14": "4F76q8LVg6EShJQgBrYPA1RPqJd7YBBif6L7d5r6BbMCrwNSfMMvfYJcTxioq1QLvC5HiEvdyTedWrBv6g85Mcyi",
  "key15": "3SNboC3PTw7tRxa1HhaUuYJAKpeY9a7nEYoAqayA5K8JbkRTeMJpQ8pxqbydpR6q11uGvB4yoPisgHkuaV7LQmMQ",
  "key16": "KhDMa16BuiRHvj2k4n2KtwqzNpL2XBzZ8ACyUyZCQfN4wMNPj3JvoZMkEcneuZwN7EVwfp6KwwoePsi6SNrTXT7",
  "key17": "5nB18YWR6NN1PKMXDTqSTXq63WT7ZYmv6nC1bxWgcb2PnELEk7hKVGbJjNaAqHfydUMADnANz2RZvwPL5FKUSrMu",
  "key18": "2zjGBfmjsNMGgYecZYpq5hCGHvX7ZoyUYpioPLwVSkL72pwE8McSKAohHbK22D33MaQktB4HzGGQQjQhEyJYEqZL",
  "key19": "5xS72Hx1BUc7tUjwWMWvCMH1UcCuAME2DQUpwBggonRNVBQmSWWmcuTUPCNthzA4fQinpRN7L6rYpb4rq5ek45tp",
  "key20": "3uvWDhdqAngbX48n5uCPYiusbyjenUEibjvsSoB1aRycpExySr5CCySuBrrNiECpzM7MNPk3k6ArgCQX8DawQQNV",
  "key21": "3RG5NZCDTRLKGwZBBvQMfe1trYvrstLvfGK3zVBg3MmmERkEizssK48jX4Et2jA9mEkhMqc5x5g5QMLcgLNo5iEq",
  "key22": "2yxHRoAHZeL2ZtBW3kV5DuGAnW2JWwjxfLAoGUtEdJZ2ZYz6muYHDZWtsnxzbKtGhsxusJVxeHLsh6U5Eu41cmRK",
  "key23": "2SojWzJ1G5daM4xqjC587yJAb6cjPKcFYbk8zcDhpxuoCSP6x2LMRBERiok2PZuZS8R9cX5Tis58EynSEpvzzJXR",
  "key24": "5BJHb1e1jh1Wc6SmhWd9K9QEvPx2xVzHMHcvoYfGH4VDJ5Rgw7XBVfhAC523Z5T31u6zvwSppzg2esaqNEEHCtgn",
  "key25": "29ow6bTJoJwBgzj71zobrMLSkB18gFqRQEzVjFhhuExFTG7bH9Y6hpL2eQVVs7F31uUcFyGEGtVoe1nyEfgwQuky",
  "key26": "9pVy9g48VXTcwdPhhR46uRFWNCuB5XmpSaGWb1PT9xmTJnFHuc8PqAWK8i5oZThao41PbFFRs3rzKuzcL8W8uMX",
  "key27": "2Qnjr7B2S4LWDocKpmALxLeyFCnTkXYv3QfqzxYCCiAR3dmVqQGYp8NugNQCUMrPgStw3zrgYRH3VBqjSLcAu5hn",
  "key28": "3dBEtv1zyTPxDvMqyc4qek1fxiMC1mBa3cWw88tgRwy3Gj4xqn7mbiWzdnTTPKZYsKbm41Cx3MsuRuvyyvmi6Lxi",
  "key29": "2UZShMo7hucZGHRvVvm8FvL7bYk3EKuoUTrXtLnvnSBpXN1eX84frMySHHqxKWqNqPsp5oVCiY6PTYQM67p4ZeHB",
  "key30": "5oKkjLz2eK1shb8RRZiJXzg9qosppULxfCEHgAM9ERxABBsegdEB2s9QU4bFUQyqH2AsVghakP1KDLZbyLRZS5FL",
  "key31": "4GgG2C5WTR67uiBvGcS878sFpaFYbdqRGmYe9DnErrmh4e2WP1e7HQpJJ51wqNLk3k7jtuSxW4R378rjEN6ZKwud",
  "key32": "2x6bhge9WCT7k2t9FWqCMMzbhPwKKCXRWFCg9mvMTg1ENh3KjRZe6Xo2NTiUGaeoE7TyxRnLB3pG7qnMNyNbtzhj",
  "key33": "23ivqipAVNfUzMbNieTE3FCLCLB8MEhoVwGyYeciib7eCBREnLtxtXe165y4tuo7dD6KQ2Z3at96WmarcBRe3hJ9",
  "key34": "eM126mAV7q2r1b3GfWXsTKMPihkZuKZZ6SBzZiKfVGKDj4kQw1YQ8TsCDNqCEmYnk4Hn6nMvFERPFzr4yNgHdHd",
  "key35": "D2hWKbkwbA66cBxHDDiftve18qyhPeX8pNk1nAyyEdQFt5UGB58NjwWBGcqby74dgPnD6pMmdqLrXVg1XFBtTfP",
  "key36": "3aRtwg7MPXgvr9pRdG97k8L4qt8Q8tKAaMCj2KAh1W2BaEdjtuW8xuenKSEjA4YMcnvd7Qyy9EXncvFqymWLvvt8",
  "key37": "2Fi2QsbSBfR9T7aJNTFjVPNGg1EVqVrSJGdKvFETxTpjy895YLY3SDCp1zhunKGp232demp9o5yUHkEFdZV2JW8j",
  "key38": "2r7ZRsvx2zAy8b54SBzQb5dBYuQS8DUYXZXmSgpH6XqekxtaYjNE8Qwq1UvvYq1m8f6HsuXogTxR71KDzaVKWyEc",
  "key39": "5kt8tGo5Tq37Dsn5yN7AynSQ74bPE9LjSvjaH78mzNNZJYrh1s3YDWN6HH82Gj3VrppXeFNAMT6YgRB26fKkmHiT",
  "key40": "3J5PegcBC9MQ6o9Xrs7ar4UStZWtTbg6XKdTDxFgsQcp7SAUPNKtriF2ifXePexujwpgBYVhHGBsnCe6fa5G9xqM"
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
