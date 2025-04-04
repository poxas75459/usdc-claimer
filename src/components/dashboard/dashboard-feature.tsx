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
    "22mSjYs51vt9KdVeJoAhuhYPKLi5fBQM6qbHM5VP6WQQVjdhQuenJzgmZ5ZbqiPrSfRQyqcEdUdomendUXF7bvJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LfvTzmrk5uZD99W7d5x3GqzxNLhNYQcEu2jZ1CNrg78XtyoDfXAP67Uayccva2vZde99kPdCzeTr1XEaLTPGPcY",
  "key1": "5yesMesSwuV71PzG8nBME6RTKTu9DU7cu99uYqgSaGbYFYJS5rmy6wZNr4iM14EKapowvT6RxykEfDqjytmtfJSY",
  "key2": "2yKjxDJgYm9NcgMn9rypsBBMi3r7ps9k3noKQwYGmQMoSHcZRfLTn2syLas7yY8NnS8Zi2XhQDnQ31hxB7jatDQP",
  "key3": "3znUuQrAsNDDpLW3b4ESM918qXN7roP9NXQqh5xJy4og87AtXUC8aeiR3nzVL56QDTy8YeYXnw5uZ71kMxGdYNdR",
  "key4": "55QhfCtCkUoF1XuDX9q9ugSrRcViypYwcGqrhyYA67PAbYfd9zQMExvHe69c1t6yd1VG5ZgUt8qMUB1H9AA8LGuw",
  "key5": "3d15z6Fw6iVBXZVW7jnvUiJgJzZzDQrUBJPQuhqD4aySWfZkHkJjXKDFkGcvVUH77ZshrshNPAzfYLXRx2M5wvCK",
  "key6": "4NHGiCnBjnwVmcNdeXNad1RnrFjFGxWiGRxo8s52Wu2RXW95kmuBhDMSBnT5YLwTepGsjmJJonRTsE5oZqMhuetD",
  "key7": "5WkXbJJcgnm2WbpELM8T4jfLtUXy9wr3t5SPt92DSGBK8BEpp529n17j3hV2MmdX9yosd5Sgkr4aNrNxQEXKrd3W",
  "key8": "i2tP3MQQ8hndc3oTZsA5oSdy7rAe6RFC6AvmAo7ze15faCqJK5e5oTh4yhZofhJPQZvYXBLpyUbH6wv6MnLdmxh",
  "key9": "5iYiLzwsQVAq6oyEky8K9FCT6ittsQLamp2JBLeP9XoqTSQzL2MkyAPed5RdUeUumeoNxdhsTQkygBaGMYgQNvq3",
  "key10": "673mKk4jVm6HE3s56HhwQBv9LBa3A5KjSZdLWMqUC8XQ5rycde3Hr3Gsh1RvxkMrQcGLg5u5csn5ncaT1eqXYuoK",
  "key11": "51mxYmFEZZaM7TdTjcXQ7KjaSwUz3Wkk99QyjxjvWT7eoj85ymq1YEVxpt4jT1tPGAG9AyA3cgivt5L76q9KZLEn",
  "key12": "dNY4mX3hnmPsf5W64xDeJmVSLGegpywErLNyjqX5c4emtAWkz2F67at6qpSgTweCrfHyzb63pzW15zNz2T8p786",
  "key13": "2odqqonpLnmLRs1YvGzpEnhyiUVtdUi2oWnEeWUaYXHWxGKNtdL3nUrzLk2FAoouACzpm6AdyRrvqB2wDhL4oc4N",
  "key14": "5QUSshSZXqjYuyrkWrbYFQei4RZmQwAH5j3cUmnob9MCcfMc2pCsZsc4JA81TfC5v7M2AM9QRtwybf8uoRQKL9er",
  "key15": "3vJ4XqNWgurgB5rYuGuJuq8mSwzgtU8dUYw25RDhfphUJp4rCwPr348YsppfXmGdoedN6LVYsNDtZLrdCqc9hieN",
  "key16": "2A2h7aWDt6Myf4QuDCjyKHD6r9HLV9ErDFBJEx59bN5a6DVn32qgPN2ZxTrvFgcZ23npAzG51vrD8KJ8W77tLpnL",
  "key17": "xxBaEF3YpjZHBvN8kSsXZudroTeNqw1sxxwRJnDDeUGtf4JB13JxGU6nvb85xEhRduF1asVYokT86cQ2STJXUf7",
  "key18": "Bxqgr8Etas2VUczuZ7rE5mYkNUK7ttVnugDcjZpEP7wgAhzESe3ngdURLcR8zyTKEuscASSkbNJojXfAMYLdU7s",
  "key19": "4zQvgKvbXN2Zzc214NRFxjuUkbe1LqHUYAT8n6PZN6pCK2RJuQXuKbJAjjdDxkUuhTYBZUGpDzwG1Pe11rzRBsRs",
  "key20": "3u8exFvMSghVxmt3vNPtzH9smW8VNm5NfYGrhUBgXcnDgJDqHttsifDkhoqvP755Sp4aYiPs7jrE991Cb3ywjf16",
  "key21": "2YdBr3D9ZjF518xVLcm6HWvqJ7nyNiydqB2rZ3oimckPEH6jaB9ekotGKw7TzfCH6MjPxuXhkG7ymfukqCiYWSQZ",
  "key22": "2WNaXcNMbM44imYexkUwAbycr4LuwRo2kJfCWCBSwAJ9nNeon4LKRCQiRofESarwG8daeXbePbQc2sUFG1Y7SshF",
  "key23": "Gtq6A4Dwr5QbMKvyfHbqb3q5zXe6JUhU9xBdJXqHnKs1Q6WMPpXqms6fzmimcK7QHNGT8dYYMYLekMctnA8CJ4y",
  "key24": "2wFMcANmWtTioRowdoePTwpBQ9dnAUnmy7HSaJVx5CLxuNczyDRkYxs41uTWF5R94fTvQqeaaguvGGbVLEumdekd",
  "key25": "3TgRkW1QbPzy19kw7W7AgB7cNy1e3rSs4cYA5iZb5ecddsem931vi94Szi5T5HVw9MUxHNMdfCeZ5oFFJSj6u3hu",
  "key26": "4xMPg52waNy2qxTudH3DVdJgS9RzUWYMbGJxW4k4oHajGsMDaXQqxJ1HdXpwikV24NMcExfarHzaiALTKWWCDm3R"
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
