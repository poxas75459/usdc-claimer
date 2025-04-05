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
    "4MH4Fv5t1ZaBKbom9PPqBvKXiZ2raG4xjbDN7bGUw1eejk41DgNvNTEoRuH8e71c3nzm1coGHXWGNQDiraYrC2ER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36GoXJyTNKSDUxbHWvjpipi7tgmVvAL3r4c2Cnrnrm4A11N2Qn9x6D4LuALsWoRTQMBwLVwCjmEfPFKKvRqF2xu",
  "key1": "y4UoSWHRyS3Dp736AVTpYKByUh7j9XcFitZGo8cYfm1m3GKxXBNCd3PmmwHUCc7mkWD9839v8QzNFMPLyEzm83U",
  "key2": "3TYt3ZVZBpx3zZxuQFzhbcLQsqcNujmKxxTEtwMZTKmCEU5aCe17dDxQVh7Uk7evHHLrfXQbbswdJJ6189erTDXG",
  "key3": "hCL1qUK2Arc2P7xtKTcJPumfDgyzUz5B9eie9bjTe6PVKDMnBLJyMvFcQswB9sDStC1QVTkUqFbjHCTKjLJ981p",
  "key4": "2LPTNRhRrZEBzC1LQ3VxifU9YmAGHJCBoPG5o9RjMgNNaPTNRdCfsX4iym1W4XXY5Wm3WyuGYHqFNXMUFJiq8REk",
  "key5": "4geoxbYgPpVZZ6JvHViqwHVwSf22GQa8Xx4npnVgQn5eFok81RDVRAw9RndHeZZuW4H9U853Ew8Zmk9iZD4Q3KdC",
  "key6": "67DuCDi9ecNjDY8NRk2KyEmM6DUjbYa9NBADz9m4EwWM7mXaCpYnczXfLKCtKD8AtBMoNL12TgRNRwA2mKfnP7iA",
  "key7": "4Zq6xyyGNjNGwdvhLyWBx4cRn3eqWXBr6JKBNwpn5NEqCWqZFtXXDjhH5YkwaZxRiW1KEdpmrZtSsjyoAkYTASXi",
  "key8": "2tg2gr46ca7CZJUh1AtM8uvCPKB8d9tcSrk16f2vXQdsj2dFVpRbT9fTyiPpVmfrTWhMQfxsjSfSriQsqjxGgr7V",
  "key9": "5k99WTxYT8NybjXM4i6FssrCkzbhqptw7DpfGeeFSR1F1UKW19hXsV7ggbHzpCQF2U8rGe3VHECQBmeeqooYNvy",
  "key10": "4jqUCHQq1CLbGcqR2kmv6m1s2hSSzKhZZSWDaq5QhBDzXBZj4KzeoyrKAwJFfUEGJqnCB6wne5d8AaG3Jj6rfKp1",
  "key11": "5PpiKcG49HrFMbz9o69DLwFRZb8JW2hCYieAV2E5HCDc8D3Murqdb3JzBZ9yvQBR6dtYq5JjL6Sri2FfNb8y94SH",
  "key12": "2PLG8BfFaKWxv5K63WAjNBzTHmXgLxXGaFCHnHYicWyvjBXMkThutjRDYqHgmW5RREsFwMY1kD3QwMSe4SB74SH5",
  "key13": "Uu9v1yEkWBHUSpvrmzsJsUqHZnYJrMQL3RegV118MXHR9mERHb7rrGKxPhjcgVoiNNALhxHT9xYkkbJdoFCPy4A",
  "key14": "2y76AL8zUMxrvkYAi5JWNT9ESKyXV8ZcthhJARrxQYmwRtwTTExH3Dqm9fYfocQh19HzPKuBjJcqnSTiPr7jvZFU",
  "key15": "51g1tyPSzEiT2ahf8dRiVQ2yTMND5vniXow2ouFQHxRHsWkpVkVh9AZxobf6jMXiMLrUXsmkWhctzrD9jqsA95U",
  "key16": "5SSD6qxi89rgCFsyPfrwJw7McKnEt81Z4iVVBceJzaFaQDkccDdzw54QGHFCXhF4dpUTAX7VSH4Ai5a4eoMR3U8u",
  "key17": "31ynPzbLbuuFY4PS1pk3rDyKYFP2BnZ97EJ6xWT6V6vu283DBPSpexUZgrgR4iWh4qvMZK57wkH4YmhgKYsYktmU",
  "key18": "4E7vBHWaFLpJTd1ssfS2Fdehro68HDJV1tCMZHGmE4hzUJptKSmKd8Y7zgsF5huh5xXygEpaUbfWiX78LLFzw77F",
  "key19": "5mFV7NkJ2auF43bSj9jR9fCGvPVQFWuU8J4ocGfuYbLAMbeqVnhsiSKvMB7dCoBd3sUvZzgmqnJ8FeE7TKjeDq1v",
  "key20": "53AV8nzqqYLbnqf4aNF6fy48xaHzCstdsPuy8RaLKHjpPqgWzCefzovU8ZWZu8HSN9xgY3V8UBrsN5FHkUG1WaQW",
  "key21": "3zXrpoJAFgsFvHWoVyAGTo3XDGcAPs3y1QqTfPDme2q98wcQtv3A7i2HpTRoNvL42VkpPWAA7HaF1YU9vJzRxb7T",
  "key22": "4WmgpDxsHnEsPgea5LgCqoYo7nHKfKL7FXnnb4E7hXtiiVsEZQRx58FTVYa1z1fJaDimrFRT3bs1sSHisBqV6P7V",
  "key23": "2oQvNuyRF4v1rC994K7uugXqtc5f9GbURMHTMyX1Guwwa3CfrcvrXV319PsGiQAKEG7hUGezakU4xQR9aaULwdwv",
  "key24": "9B4komnPp3maHcJShn78ai4Nut8LDvzHqnUoqGdFNA4sdWCocr5ikTRmA354RdqW89trM5cEuMLM68reWo4jRpT"
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
