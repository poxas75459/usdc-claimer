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
    "3zchkokeH66fUiUFTSB1zxc5sk14AfvUaxxrQ1jXjDXK9yHggboVeB1J5BgL4vssgKXaWsNXfXDUMGh57astgQnp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yrBeEATHNz71f88bXPJK57uKApkPYB1G3tZEzDnGTfKAaHmcVYWvuqUcCohNz9Jgxi9MXTfEUkrsUwEGGumNqn2",
  "key1": "32fp5zapU4PTQa7Bh7CX7u8KCTw7TJVQVbWDDwDyYzWTyECqoqfDtkooP3itf1xXKfekmtAUj85sfFH8KftruzY2",
  "key2": "4FcNdtGvAvfUiUggEPK1RdjhxMZUd9q7bmE61k7QRps6WB6aroAVWmw2XyzR8Bt8h43mc5GCMFBzZLpA9zAQQtbY",
  "key3": "4bH4kgyQYoNdBwXoJ8KR5WADBb8F11T6eibCuu6Vg4f66GY4vx19hRMX1c6g4o7PPEqECXf1bmZeBvCpnBZstWjy",
  "key4": "3iv9Uc7q4jYEHpm8dg2PbAQoA9jvXE1WLik3ADUX8BKrrHWCk6k8ib2gWQsDjFuNcbbrb4kXBCHPxxZuWvoVn3SU",
  "key5": "3t8BN3xXq7LfY5Ery8ojZx1acihDw4SXv8uqSzfKFe3eH8HEtWD8nR75qMkoXVWoTRxj9s4xr943nVzZuojcFZ35",
  "key6": "3pinBiMWuPfkroi72ZE4ShQPhPJHoHMQH5zUYs2N9A8ThMtMZMnaoZ9UA5PdEp8DStG4XE1zY5g6dhPCiGpqaNcj",
  "key7": "3HCp2eQ5Ym3MisJa8NLvUB5ARMeakKMSq92YkUNKQrpFV7jnRuTTv7X4AXCGgCpjv8WBRC8e8A4KBn54CuhrWqzi",
  "key8": "4gjETLKrRqZgGkXKGvXt3HRy6ModJR2MHXKZPEn4SJEVHD12FNZdszKixQ6DNxPHb9EvNk6jFRQ1V7HcAUx2eiu8",
  "key9": "2jTKyPUtakxaAotZN28FzV4msW9Z9kgA7a2tYECaZehcosj86ZXXimfQ4SN6bV87UuDnZx6Zib5pA9VBCQJZbzv5",
  "key10": "3vwba5ud59eFSBMeDoqAGt79sgY2obpvLyAir4uru49CT4hEBMjXeTzCtLczQUkyjMTqyjfQV7HCL6Qyv3yum2GF",
  "key11": "5c51WXGwEJJA2ZmgJHegLDunBT8ak3HycQWYE6hsnA99yig1PAMsLkX9ZiPmn9BrVnWgtzkHhKGmioVhLYhSUqWX",
  "key12": "5U8wBZEP5N6j8WExB2ZAhUUn3era899uZFzBFCUSaxswXC62j7ACBgtdio6F9aqYB3Z4iGzyspALtbMvS3mAN2Mw",
  "key13": "3cmTY3i8vXZ6DKDvP73iN7ApyrPueTGib9rtxFGjTB4JyxdAEQyrAy5DHkdFQfGkjzBAh8egEvbWhTFJkUfyCGKP",
  "key14": "4yc7oCdEj8abUifAqM1UJ7SkopdDHeTXrs7wBDnXayMpeNHdFKP913msABJxrBYPwNSSonHXdPruznA3jLLtNhRH",
  "key15": "3HpNqaGrx4t1aPEFi7G6r7nYe213qtydKyLTvcxQQog3LeC9ZQfR1n5WL8FPn1tqB8z3QaatjJm98bnLjugifJtV",
  "key16": "51Mb42ekXtMAp1JSfzNxNnVtYk45uzc8zW5TGoHXMFFJhNTT3jB1yWUEyE5sAjWaxNMWq9EfAyJ7fEmmTj2RErH5",
  "key17": "5zQwWtvKMhMVYaP3odBZqFebQxRChViwCBm5hdwwuBLYxBiL4RfAdc9LwwqkLrjghomcnYsd2FoRinuDzcPFih4y",
  "key18": "2u5PBKCzXyAg8SjxBcxiLuXXnQQ6PvHvT1uQ158D31qsh4N4DfH98uth7xJFqRug3SWrakr9yxm93YASTqn61s49",
  "key19": "5Gv3698dVnHRqPa3mxTZ4j4NoBktw3N7peRLqkVDf1s7QjQqURqVGkXNpf6wvBAGAWWQxUkTwj21H9QhuZmgABhH",
  "key20": "3APWWk2ZbaxXm118nto6UvYNAH6pF8MQJ7po5p9QSTuLQ47hBf9FzFSdpiqNWAv6vE8YVs4WuTprwL3y4H3SoNMh",
  "key21": "3g7tqYa9Koh23bpHWgqpZdK3fBwK68FamuV7waNJh8CxYPrB23PHFUh9uvTqC4zf9Kw4ituBFDezZgP7pEtVn2vn",
  "key22": "mwvdtL4SrrGkRgZnEUzxvw2bis45Rvs3Z4fLpqwBwjb9opgjHyziUia4sjSSUoUYYLBKgU7chwyA8Vjqp4snhTS",
  "key23": "3WuE5re9PfY3iXExuBgFrv8JevjezSGsenkeb572FuiaKC9DZ6rZDtrej2Dy4ydyuya3Mn5NxrJYKRs86rhu2HaF",
  "key24": "44PGwJ1rT7R5KSEJb5U8aw3gJqYTZLxCEw8RTHaKp6c6rZDgBfxXZRtgoPKPKsqoizZWPqV7LciGQEqRKnyGUQzR",
  "key25": "5Dn5TGbpyQxpxxzioMwmRWVUPzq5jM7Gp7UVUX5WE6raus77Yv32BM41hb495r3viVmRjiQgUCepUqoBXwzmfKMo",
  "key26": "4kYrvAez4R9k7NGtmtKgTssXDTzuqEQDwHMHgsHyvGGq5fUEJoHzV1uDwLhGqnvo7Qbw9cW9PuGWyAczwdzTxERF",
  "key27": "4eezv7JrtAskXbzGgYKYnCFjw2iAnpNZwa7fJTvogGj148oSiq5zBioawm4Sdjv6qT9h2CxMzXam3R7ez4AQCpiX",
  "key28": "4uXfKAWESwPq6PNTpteGtZkg5f6dbe9NC6BnhJPoiuohvDeKb8cmGR39skUNZzmqmMDAVUUhtKXHaaHgBWGBdHZs",
  "key29": "4KuYX95zYXfqJg2cwdLL5rnpWFUUSE3a74MGk8MjazeTar4matXQ884B7XmhutxYF87TCDtX2uzWyoT3tgjyvd9K",
  "key30": "5MR8MyuvJgWcWu2RzoMAJBq2z2icNTtjFNGBuG5LCWgb2zwZNJowAuoQC8DxWBLeU1op9xAyy7qqXZjnXgYrFHVV",
  "key31": "1298po8kjvPm8kB5kdVUEWGGp58zuBbvYSMCYeCFztCZyFvUrMFMZEKtJ5WUvFNtW5xsx3hLbK2DNV9qPp2A3XxF",
  "key32": "2YjGWx6tGmoPpHVdDMkL2sABUTyLdZg5SGdYDnmDD8AnSRV4StP2zneuMWjYLKwbQ4Kj2rx2qPWZ5j5vB3nHHCqj",
  "key33": "2RpW7qwz4PL9G9Z3kkyWS47rjKp6SuEzM85fndagE5kvWQQHS9bFxX3JLSLnxDKNvsYAyfnM1x7ikgpzQEH3qh5i",
  "key34": "PmP1C4qGx4jWki7aJ3a5dNVN1bNa99R5gJf9qBhEfJNtmmWfvstdN7Kc6aUJ6B5uVJJnDAwZqVAPrvft89faRnn",
  "key35": "2gQHWRLy1KHiVNB36TniSEzHmas73pfjWjjMkKyRNtRYTsZfbK5tmP7HEHnNqxK92nVpRUww7H3cjt7Xpa2wgXBp",
  "key36": "4p91M3bYj7MQHsC5iL9k4X919xrGjQsrqDxd5ozh4E4VSEMoBht3fM2J265N8zD6zBRrC1BfhQr3SDk97zE5u42D"
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
