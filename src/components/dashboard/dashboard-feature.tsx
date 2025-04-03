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
    "2qcUoTzGT8zZAVxTm9XLg1YtG3fdndf8kio71gjPW6zM6W2AMSVBoGVwEv6pnw6JG7zc6boMiV2K2AMK4YwEdbDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YjAj2MuGSrKDRM4r9FQAnZS5cqNW7qxr9aGAYQ4mCc3pePEGqZbFzG24dzXgYUfcGY5oCcLoX2WKAnLos7mLhRY",
  "key1": "5TSNfR3hfMRVcDPVPrV1Mw73PxKsp5QfJSU5k91USx7UCkTN95VS1SwKaMqodyrRSDxpqwfLW3aUE8odP8XgHCpj",
  "key2": "L4WwRNE7AQqHdg3LVzTfEU8PYTF9Qa3nXXqS64bNM8cYREz6BMeANLjkoa681gmgaFVHj6rhEVG1P5eAnptMpev",
  "key3": "3AMR4NE6SBTfbp9jKRGi7WNwDbjueS2hkkYDT1LDYX3ntiwz4yC7mc83m5MrwGCwwC9oDF7YmopBSQmiEhFuf9wQ",
  "key4": "w4gqbzsTWVmm7LJGHUJzvDnFCmGYVrFzE7yrXJMfoqH9YyngKWvE6rVyrPcGq3qs8HfzZDUucu11HuH1FZ4txdv",
  "key5": "serYbM6becokjqS1EjK6femzj8zDUW6EyAgFkzhVFLsxkyvTzzAKRe6mXRph8dTtXNzsQv6Krz6sMWf8ckprdjv",
  "key6": "4oQ7vrq1VKcxqdCPpu5KcEWdiKuDhu7c5tmMFG8yNe6Mmy8ySywjzJdPY8CzMBZXk3qqS9wBsaE6d9EhE6w8Xv9u",
  "key7": "3spVGHPzqr1wxkB5jE4eCMqJ7TcMNdJRpbyi7M8EJ7nqpkxdrpCRKgXvP8dvKRwzGgCSJDaDp1xZRRmqdr2q5VhD",
  "key8": "5joQYjp3Meipx72BCLQ3riaDGe6EhRrg9tBatmc2crYdVNDqj8eGKQ6HVXoBfdBaP3jL48VtRBrURNUeXx1xNvud",
  "key9": "4bhtQnA9rGiTRPRUgwB2rVxfwUgXxXAhN7ce1Wn65kc8qbF9PVyyY6JUAVdnHnAMnEVZmvnjkufkia9uEKHQzxDG",
  "key10": "2h9evqFXHEnVsqfYBBdLktyCp7VkhDMVr7734RGjevGFFnpKWDhSRdaE9kQDbH8T3Ktuba6uQzRwsoefWwseiYZ9",
  "key11": "4XJKhHpjJ5HVUCaGBp1ySeY1TbHC69fqWf3MTqt6QRKpBrSxMwVjzyopSgXpJyCc3y3ASpp7wYaCmidwSiZd58ix",
  "key12": "2TxTUhHZaEJre9XBbkjnfJnA5QBr73CqQqttm7N2NyrxR5ntxitGzNmouYL8iQnyiTskfMaRuXivwnS9PpcB2YzE",
  "key13": "2FmW3r2qcbU9kvVYa2jS4TPn4sLAakrexu5mBqC4Qzq8qGdWmj7TvTWwS33Kwhyr7G2grD6uMc2qGn63mJoNawJv",
  "key14": "5QfsqzzLy4kqMBZNFhZrG6j1GmedQdbmE1Jnuj61us5mg7JwikxffXFfeY4mqyqm6mQ8NvSM6cFMW35TmjGfLLzt",
  "key15": "5px2TWLzABhCJLnYR3FA6QjKm3JznvRecoctLcML3wKjbFyWr7tAKiL8mhC8bg6D14XPGoMwG84JG6sn3puo4M85",
  "key16": "4hDjbq2wA6pSmdKodwzMo9xTeQhJfgsAdFumMUi77kbNZiu5k59aw9AGK1fkHuCuoYpchpnkHk4h187zeGrGYNro",
  "key17": "5UcF2u5dWZvLDLbkca1bh8kY4S9MKgEYnB9rY1mPSZYdn8pjPk1VS4uYv9ADSFfF4LRMMTvCCXPjH3JGcyVzYaQ9",
  "key18": "616pD2iPehhgR3k3okjRa3UhJYKQgV6e76bMuMBaRoUnk4ZqT8eQtdDyDP5sEgjcQ2JcaC14wra1E7mxP7yE9aFU",
  "key19": "2yWKk56qoNbFKuGX6RLPnCW3FeDuazLtzhyAGRBWet6KaG1sjkkyg2XEfDcNcZ8UC8uGrkoawK6YoNfpKELcMMee",
  "key20": "39PLbh7rakhKdMew7aThyZKT5tLqqZLznscTdeASQfwLcFEFVSc2b2bYxMAQjA6UyCdQaiwDenbQPktTrgz4fqaN",
  "key21": "44W1Wf5gdZBKUCUCukMEMjxkauKUpgvtK55gFyPn9i1EvNdnNsecZscc6mspqxSHdffx6474GR8FZb5iaCCPNxVn",
  "key22": "59NowbdXsjWJCe7Rpf1cXTJrPbMysaCZkXJTGKg8EkqQGHw8PWyhWGkQhn28F1C2faLfUo3jeeesMExfQA9Y98UF",
  "key23": "3YCWSQMJc3FCFwa773VeJzeUJi64DdGZR4NitVNdArLhJKTHR5SDywEKYyUFaWh1E47WgSsTTafUtvYrE3LaUBQW",
  "key24": "sviPJs2WfHP5HHrHBxutaKFj9kqUbBCt6Y1HacNbnty3ob5c3pd2hXkqXAQfVCX78YPUBw12PDeccFnVzw3rpSZ",
  "key25": "4rJ6nLvGmQBkZ12J7LXqjKecMBXk6M9fpptuoCUUFJLsBrm7DV67CGtzHdfQNoYtX9qMME3NdFPeBTLW8mn1camL",
  "key26": "5q9zqFFU8wyRLUdLGHj48fDPPw2tLdtxe22WktDz7V99PUSQCwceBTUEodvJmR9idEuzCK98K4cb26TUhEzZfyn3",
  "key27": "r6uJn3AvCARwzC6HCGmEzHiaJcJ5zagPapb5tvEfMw933CHkv1nJgcRs2jYtAgh7oU5aP96KRKjAwxTFyUrKEvR",
  "key28": "27ByccmeCCRQa4BTQTMKNevXbkUVcXm3ierYQp4kzVo94ji6pFSP9EyJAy6AhVSW5DLtjfh6bCf2QUq3ATw6Ykx7",
  "key29": "3iX9qzWQfKcWS1ZbpZc6kHXmjJ1HLavC3H7bMNT1P5W41TB2nqPZnYMR2M1325jGzB4oJ3DD85rq8k3WAHw7Tv71",
  "key30": "39oHD65qVW3mQ8DYm611awRRMa1w3d2nwDDNsW78u5wMJxbXYdEGtMqMneVr4KGKWgpS1MnGVNrPGFYqrPVRNkZc"
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
