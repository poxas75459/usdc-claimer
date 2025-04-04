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
    "3a77goWR6Xj6YwCegeiaZDk9Wnm9LtpGmP395wzMLGzDpstmyjHckmbKeXWR6Acx57TpPiHsyJUpJD9RUfnqrGQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NFnDK4MN4uxsJw3ickAkHMgSfbSr8LaoNKfWU3bgV6SU5Bqda7yTNcFM65eUupGvuwPCmzwJuuQ1zCtaahZBLoa",
  "key1": "2Ur5Pqnby5Xu6gDR8i2qhjyVdYQPDRkF69nPhpZYUJrPNPojJpukrp6mPqpyE6y25ezWawyAtEa7SGzRsa3UK9nm",
  "key2": "2VnDqesrnWvzbXcf7SSZfmvYnm8fuHM4VorKsZa4dWxKFnJsD4z88Xtz1C2frnSb5amz4vXu6gj3FuxD3GNV1FcY",
  "key3": "5Tsr1SNmKu86561bv5FskomLvVjRv7mDMJKp7zMpUtHxDVwXe52NichngRj1irVJ7nKyAhxY6cmYUAvZX91RduPG",
  "key4": "382RB5NqbZZT6zocc6EFgMPZQHJ2A2zbEjVhkNFFKiacaiwda9Jra8wXAqQ8kRL34infsnfLatJ6X1V4agnFhYb9",
  "key5": "4M1c8xa68zrVTHizkkrL1ueu1WTqw82WQEqRyPv7h6pdVVXDcv44JVTBmVSLN5gzMH1fzFr3UnCB21WZtYVeZeaq",
  "key6": "b51FQRx1j9d3LfbPtEu3aETPpF7v1DCqv6ZeLjZVJxcMZ4AmXtpfHTDfzQB3nYnh3Kr4kTFubZEa6btaoPifzX7",
  "key7": "57kgYmCz1e42CiotgksWvUmWU8H6tqgaiRJCJZ1fSx1XqXbUk8gRKRYVeXDCTrJLaHnmEigtkoctg5SMJU8YuuoK",
  "key8": "4BtRkTHvod29VQzbeUcWX4qpH2ycJLN5Z8zhF8VExASnyZNjS8Y7bhoihQwXAiSx4WLAH9HMZRTZoaqhaPGZnVUZ",
  "key9": "PCZfBAiq68ULH5uyJWM2VCifJ97VrqDgASpnKMGSprQvd9wrFbswHrSEEbhsHMhVJp7ykJeaRT9quZ1zctRNWCf",
  "key10": "3PYpZxFhnBdBV78pfH85EUErBB76dD4DR784JHfYVjh7CYDU3JmGomZEsPGYaoAYYY8NRKtd98pwHcwSXThCBmzY",
  "key11": "443zQ5VewTzRGVK31TxWbGXmYsPV3bkf45Bvh2JULujmgHM4cYjTupeiL5HBHXjakEEB9QNN5uG1bmHZkHP6asPq",
  "key12": "2nmAQUtGNuk8f4zvFu4f9a9GQw5S9MzAogCBSiAoDKNwiCNtBDu5tzHypMTGqTFVQ2yNNRf4ZfUXRQ9viXtt469L",
  "key13": "3cTeBfrwwCkDZNHhbSBGDKbwZo1JiyXijkA4m8tTmhL2k9e5gUiAWYTdz3uLH2Nd3VD5u33xUWE245dhz7fiVwAf",
  "key14": "44SiRR6WSMYtMMswzX9VPpJEWm3QUJxXEQM6uTfBW15Mosf8cMNiyMkizdFn37eTqngnRGcMYD27Cb7E8t6FA7Wo",
  "key15": "ronYmJAXve2DMXW32EAzd55Q4RJmG8zVGdnxPbP94C7o9rsQZ42tybPYJwsE6JKPdWHpboPazGWprby9Lg4vHsp",
  "key16": "3PWuuAsntmqK1ZBf5ywVxpUMWVTk7vFKqaopghrHuTwtKhYQp5NVEL3SAVeCjhwstQPad77mS7UjhdWa8ZWcb89i",
  "key17": "4NyBmW1AM4hhi3GQPYAjzGPtzPducWTP2StejvJfcJFGgypKkTVaaZe9jCqGPQLu6UJ1Efc7uaBGPHSaUsG4CEe4",
  "key18": "2x1QTx67pS7qN4ikR8sUWsuH3fqebSJDopb4wNPiKCMZoJavasXSMMnbgYKLnhEKTRZJ9xsHg8ucYwMB9jD3keFp",
  "key19": "43GiJD9KmM8qt5gMvd268Xg3xSSaTQZzpVQ9pkQbj91sEtLPdGd7DUTECe3hgW9pfi5pAeEL32JttAJsDszq3q9u",
  "key20": "65PwQEmNd5RcAeZDkAoYtEfC7Hce8p5USi8RjGc6KwV1LxmbNqN4yBpxUU2yNWq5i3DpHy1j55AA58WeRAvb4ib3",
  "key21": "4rczDhzdGf9xU1EfeMxb1c4fgKfteoPFcXnHhgX9uXKfGZjCkQEVq3y7Lt6pe27cSYVpMtzqHKTJscjXNPDND3Tk",
  "key22": "5K2kcsJP4wazRXLNhZ5xAGEdp2XV5KVcWk1wrm3ebo8JZuSB3M9dqp316Ziz4xTNHzfTx8DndiZe5Ua6WkkGXnWD",
  "key23": "5K9sb1FrSKoAYJwniWJcUhVrtE5un8vkeQPJ7pzy84J6s11eH42uAnQvR27YDErxU9iPngnVcnX5B4EmvKfJT17j",
  "key24": "2m3e3x7a8bnipMEci4fi7aDUXBGHAn1xMJLk2FrRQHCPjnvJKS7gTrQTSNDwnTyPJs9rcW2KEDTu14c3JWG8N44m",
  "key25": "61C7P6SQcxnLuqC55H4MSWkebpfQJP43Zsb3NnkdrnZRQTqZSxdE7YXPHM1PDVWkQ9iXQboX7WEodcj3b6qccFir",
  "key26": "3EXEs9bvR3b8HsBDeQiSBtiWZKoCHjFMghBv7d1FAAhTmbiJgWxweTs17KXbhSNGwAUzhv2L4pua8i38LzzzSy5L"
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
