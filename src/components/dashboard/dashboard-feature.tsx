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
    "4qieRvJoAtJq6AvXuHxqEjRfTu2qjVM4xHjUgYt34pq38mGsq95A889r7yaD46Cjnq2izMoeoqQLQD5oSdqVo2Ey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "437F4CKBSeNzdxHpP4vQnm2MAvPQVebk7jVCApyBmjDsqKpordVzPYSNSxddX4qpy1r1nwyUwdAUHjs42diw3VRe",
  "key1": "2rt7Ba1WrwnZERUv79LG9bshJDLKM2SNFVR9Bo3rU6wjLAooGPg6XRXNHpashxtZWK3fWzbYbCLRCWyCrWVCaub4",
  "key2": "5qf9q9YFpdtkqK7UeyxeX7mdV79oThqHcyBc12D61PhkCDNywb9Fyack2jeDtJew3BzK24gbdTk6UJ2DEiYMgnFP",
  "key3": "3vqPkem34KuxZKfYB22mybCKnR7rT3Mb6mmy2CfSZVBckREKKQc1xEhCvnWaZS9SfhJtCoUkHD2hNhoH4DsYzomC",
  "key4": "nW6Y5KRsykHEQEhbZLbrz5B3gAsYw9fNctwjgDeocNkGmZ92SnGytBTxUJx5YK45zJLzE9Z6eLGzuVKg4WQzK5Q",
  "key5": "5SBNKAzrhHZnQzhVE8tFqFKqpJ9L9oiaSTcz71z94V2UYWE2ktddc416uEGAaPAYGkH89SHzxqwyYKfKg2VghFwF",
  "key6": "5VsiScPC7S9mH7j3Lz3aCuuuX8zFNCvV6eXYrg83u6UmCB73Nr1zQ6MaGzansR58yR3LjgGRhS2v4KKaMmWPgPp1",
  "key7": "3ExBVwCbFy8mYscLpnMzLzpbTfUjXRTVXAaGtHFPrwrUMiWbGa4B36NUP63uxJ9WVth12nKzVdoGXBgdKQ6MRJ86",
  "key8": "2sD5D7Wmq8hxQBkvKxoqha6e44FMTadT9hTbgfNka19RrWEieatia12wooJ4W2jziaiMgaHqHx76HwYm4yHAiycN",
  "key9": "HM2opmHzd7yevkXUThJZSD8z6WY7zRHjn3zKjEBbZGJsaGAcPUx1tKoP4fnqiNBnMrNrLANMe9KmTpypBwfWu7P",
  "key10": "5mn791jAUH3Hx7FzvZUMrQLE4ZSzbZhZt5EsGcGmnSJbhMpZuJhxS9i17gy2vL8SZwupBsc9DwPKu1sWPcoyVwAk",
  "key11": "4QJ5KBvZAe9A3HYRUc2juL7f6Ep3hpGyhe11ZwPQnr8YnF8TrXGdEwJKUpEskUrogHLeUouwPhwpWFouwmS5cQzy",
  "key12": "5aXHrcE91Ts3heF4G7XYxeWGw7JUkHt2MeddEzVMUMnaUrNEq4fTevn64voFwyuYDCb8ktfGySKx2ypgBXxE7s9F",
  "key13": "4TQBL3P3bae2Updmh54Pm8sSvcNQaVNNtWyk4HPozAbNzDfhH1NqNAH7J8dJ9KGUdCbAgVnuNwMaP8TyLY28hiBA",
  "key14": "3NmHj7bHMc5PUnvtgFyeBHEr2tLxun9QaXDwcAqN5haUQx5Nw8fCwL1osDwA1hNaEzw3pGGHpMtqW5tL5kFPEZmq",
  "key15": "57Gsmkj672s8CSdX5K4ZhJH61bwnhnxiXnQx4DLMxhHWuKK55dd1Fafyjew3yan3F83ovMp6V7zaEQGynzWqkc5T",
  "key16": "54dXxfdTb298H22FhZkzFuba6gGdxrJfch9ZNMAjfZ8nPXAqxzzgP5mM5c4a8fqF8CoVssZPXvtBMM2wmfBuYuzm",
  "key17": "5Bup316QnmLjbks3mPvPTAWADfw8ES6ruVUVWAbjCpgoK8WTmyViCfNQLmWfESiNTweccqQPgxehWQvkrV6QBsNa",
  "key18": "4ow6RMV8qfRZJxPjux2pUL92KS5jEXPiphbTybFMzF68QWR1NVDEsfP5NcGPirc5Wd2hBSnVSgLzUG7cJWbx9Vtx",
  "key19": "1PVYkMc3e9yvZH4YZZAAafYi72W7nktCzRppaXBk3KU1mfFQhMWA1KsQXE4qMurSubdEgARGw45mxh6qsXWDBdn",
  "key20": "5LSj8citEfGQsrU3gWWp7AuJQ13L16cYZHWndwETj3MqQ5G96upCcpWaNFySzz7cSKurBHsfH6wsKvcBDAhg9gna",
  "key21": "5Tyj5yCydwGoe2omvMLfdNYRRcr6ZPDqhDa8jajXf98xKDLaFqK2uZCZzhA1Akd2NJQ3ojyoni3jmqjE7kXDSUwA",
  "key22": "2AM2rPKsRabQpa753MKNWhvEUpzCyhAWPKytHX5ACxkRFSs4G77WBRKzbD8SS4CUAftnj3RC11TfCMyPFjScYWep",
  "key23": "39GECFG3pH6udvU9uhyigh9VjfTTwG6sMbXX8YTS2YCErgcLrtMmnhVdGK7Rz5o4CXEsVgNna3VQbJ7QAKhT7jSE",
  "key24": "51UYdFSLEyQJ5UP9ogSgRCsEbdsDDzYG7RBwvY2wXqzH6QR6YMqPdxmQnm3Pd2myTfpbMiycf481cLM6p5JQfFoE",
  "key25": "3P7HKKrDRbJT4cJCEAZn73Pm25BAFa1TPEQJx2nBDdwGk9kjANdMTc7AvopKhpyRYsJqFXZg48diSq4Tbg1oYAf9",
  "key26": "hjeRFqakQ5dK1e9ftMWAiEP8ggbrsNgncFLMoWkzZBp8Kr8ZsQi2fwPVWVBwx54CCd6R4oEH9oFpyFPHrCZFs4h",
  "key27": "2JVNMCokDqXRa8d7EELW5DvMxbBkhtoueeV9LApPxeTNDaSz6XYJWzK2onAfAx4gcHomgA2neJ9bc5Ktn4VtDXB"
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
