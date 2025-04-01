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
    "5VQgossARF8tW5DYxL8YCtmdtpzuqSyRLc1ojmBfCZSpUeyYRkTE2KFK1Z91Vj8T2TwDS6d2rQN6P5ajVLwx7UK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Aek2JjWGRKGTHgxZor2j16uCbEt84ckoLsgQqu9u2taHRb4crLifg4sEC5YkhbgGaUQN6sAp7dJ2mfvJkxqfuUu",
  "key1": "nuHs7FDKFhBjP9nSbERHCTk6DLtJm9XnACi2fdUsHfsfBWs3cKdRCc6K9zsFanuHuqck6SX7Ax2b2UMeAwVtoBz",
  "key2": "T8Ye1fGYv4RF8Z5eZSKj2HjmfuuQniWNJoDTnRi9yLgFpQ111wdtkaVP1pM5uv5CihqcQiaVcP6PeMBNiMTdQC8",
  "key3": "2aX8hTVLa4SoYXyc9gfVoPEgXQvJ45EqzH3MdS1qi7AmXZXJ8EpiwHqbkZNzuKL5dVti9xunoXAqWLAL2XQS7Qoa",
  "key4": "gFfVBVGPaWGUeGFxYbmiSpxrqD33oBQ5Y4keyRdA9BydQMw6BpjbM9C5iUYw8W72W64TCq2DFy4SBwVQJYBjYKn",
  "key5": "j8Y2UFaCyJDymYAQgu6ZSmY8ZmyqTGd8g2tqWK4oPCzgP1HRnGYgYrJwaVD4yfbze2NBvqU4gb8UVkFyRU3kJbd",
  "key6": "Hh1RxYoerZ9U1mGoYbJAxNFfHFNpk1hx6Aj4trVXMDmSwhc9wSjaWPn12NTaV6wtiaNGDzrKxNxxkmKNosoH4Ug",
  "key7": "5Wcdp6WYcvHJGZapLHV7Y16ZH8vK9nfjAJGWvq7Hw1tXU6W5GkQ8iX87DBuTLnpyGQZVGXrVZuZcJyixggH3jDtX",
  "key8": "55tN4qkrScfZbpwEEuccbGGyWPwMkfcWkFp2vQ4HsHjcptX9GZa29YvvhE4PZT3VhGRcJEj9GJ7w97Wu9x8uYiXM",
  "key9": "5oecZbHkvEuEStm5t3ZzD9KCXonE85vi56puBkXw1ZHMBXpGfNE1fti1siHKkbUQk5pDraqY5mmAUW4k8hM8jsJQ",
  "key10": "8eMTXJUhS7Tk58ytQf3nHqfreUWWZAkjV7kNUY4zWgca2W375U9KnDzXaf8faewhuJtkk9iRYF2bdYACKvjEdtB",
  "key11": "3GWG5ggn94YiZZHhoTgZNHKv744KbYNojUkDJsStXDYXecTGczsLBkXjrkEQTbr9Gkt4CbfQXRxxrXvyHmfwFw3i",
  "key12": "2csy5aNg1PwgPSBcUT5zwqZawNDCkUgUWQwM6YuxDUaNStdnszyf8dEt3Xmw5d7nFzg22foU9HYGMfBcUV6ZHwP8",
  "key13": "3kktF3HyxsCPmjf7K64LjncGyfh8evzNUr4qYf26cCpBBEW5N7ob9jvyw3ixKUuzsreqhgrcPVwEX8Bh9Ze44BDo",
  "key14": "2ECBJN4s9FqL6J5xzR538xPJzgipRNkmSXuUJX1CnF3TtAuepof8Gc81yfeJKmiF7iY7YrhgyDoPqGb3d9q4TkW3",
  "key15": "4eMeAaAUCY4mG8HQsgBrXAt5gmDGXbWtMSsMHqQWPKd55661uN49DagzuqhsYW9ksVaftgfCxBAf5DJQPKNEyP5S",
  "key16": "nwiMPrpPyRM5qeYVXxcD3V2KXdT1UxqfAzB6thJiPPNJTr3vtdUQoj72rpPherAYnWeS2EnuyLsDp4gs4HmTEb1",
  "key17": "5S8v7VLBCm62rnA2dHLbwdPfErFL1uYpTsP9K8tG3rQt4ky4XW3wa2xRbKLcDh9WpScdDhJGVHagqCjSEUN3ow4e",
  "key18": "V97epxDtwSRRZmVcus9SFxNA2NQZ3n4uCyM8RfuXor65atZhoA54Bn7V3JWRpJMU1ibHEcYuctnkS2MucJ7Eh1H",
  "key19": "633jCd4Fwt64Rs1ag5yrEZYWGSvKAscA2GMBd8S4NFDbr8xCcAifjH8Q3FCXeJHFgzeGc5M8Vu9AZQSzekbr9fV7",
  "key20": "31fRkXiUmnimJtU2LuzjPHJ4mPfuUihNW1BzaT3TSwRdkiaNQ5rEKFzYigCF9NGdVKnUvVc22JekATffJzDHdWZV",
  "key21": "3hZdagZuuys7tMDif282FrQKgYALYA6GDRPjqNUtSvjZiAhb8LrNmWF7tDmN4XtTncs6k6bgFStqnaHpWB15RPAr",
  "key22": "4jbsAZzUsYPBMtqKQic3xzyTym9gPeFAWYzRjJjXEJNbdzFpTUCcTeTgYrzGgucrCeLNZiAj4dxrLGGy1FvtaMYr",
  "key23": "4Gb6r19mbjAZ4AFLhBa2CiZ6sdVaHLdsvPMVTCbAhsfh5vVwi7LxonPhiyvmDJpuEZktUo5KTSb5HqEuJEgcZLCi",
  "key24": "3YeXZTbCJyRM6Cvs6VYk8MHyBGGh1VtRyNxuJWLjWnkf2wXMjWdhWkRnp9q3eLYfoCwoMkC9YKxYc3X299ikPouw",
  "key25": "MfxbibUBF4ZFAziiFpUcvmAxoQYYpzg3BVsTpLyZ9zV56tBt5kgZjFt7U1EQ8CEqWEoBdxtBf5YNichai7an3sZ",
  "key26": "3jirkubgVG45CztQ72C2aa6YbYHPvnNKf3vjWYAhqtqpy488vfVyGz62xY1qJQSufAWsAkyYiK2jVTBWsHGUveip",
  "key27": "3oPMBMxbVtdy6fC2XiWvhNvLZkTMcahJcDpg94km5dKEKrNrUuqmVHriedWqpFYpgRu4kGQ85vBBjdxecnViwmK6",
  "key28": "4GXTPJXAqSnexTNWJvsJ9EoT7GZEzp8fuRzCf8MUKFKjC8upwZP5uRzbYhk2CEAkvPTYnkA3tm1P8Qeckgpiut4E",
  "key29": "4tM9WptHM9ex3XpLbAuztRZStJioLvRAGvzVWHJJBECD5jM7ZsVX1Fqs4CYSEwyoBTcMB73BHhw3vFB7pS5MH6xe",
  "key30": "5eVgkgCQxVaPD6d2NVWAev4SufHkwP9R6tYA2T5Pn4ao2c2bRbCw7qHsfTJqwY63FGpdne3KKrWtEdH5huuYJJtM",
  "key31": "3NAAC2veUsrVnJQM15R92Hh3vMxijLzDvJPeFjs7dkW2riFm8V4EYRurHwst8Bc4f7GPNHuCvJkPRTmSkYSzmoVM",
  "key32": "47JUYVKP54xZ5fHLbqfg1neeEvV5Sa4J4eQVEZPc2HEkvgg6gmQVKsHPALgZk6dtsSg5d2k3nbARMD5XbAffKKuT",
  "key33": "4X4E6HWprMYWvuq41DPJKqZKCKZLeRiMw3SQCMq3SS6qd21Zk5hMPQKW1P838cX8d6vpnfqYbqRphBpAY3gENRuV",
  "key34": "4Zb9aLsiEwMEybJ8aX7e1ATBuDTm6Veq87949D46p9gfs2Z62ZosaPmsdFwxC93x5cxFntatsefSpRBSr6CWvGbq",
  "key35": "5itUtBCchV9nfzvj12xV3M8bNNfSLXefYe6ztrGF7BsLQVVvFdfT1HANwQSZJPgnmLHyzunuRbcE6ja6iCi531rA"
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
