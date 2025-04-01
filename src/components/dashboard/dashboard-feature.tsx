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
    "2SvT6YUrgabcYgoKzq7mB4xricuWofBZWFUTiLhqsFdRvaEMhxA3TnFugYpzF6eyqrDtJkpFzafdouPmBWGvLxSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22twTAshgAtaKvK1z2cWcNYZJemtH2gogmxxyn6PZe9i1jBfGu7nKqCjW9MhJ9XPmrBuhkmpauTL6pXrvdzn83BB",
  "key1": "4AzdGHHfwxPg4uReEsnCUe6zofBLLWQBwu88giFsiqATCtvTP56a59nW7m72sv1fbwiRGeqYRXXaaqMfLhMApQ5K",
  "key2": "3Z8pXE1yvBWRyXCiV615w1DoVAUi4UZoBR5WvXjKfzvce4LD65TwPJmvuFk7m4kC45VB1KJ8SDJ1EqYPxqPHNdkD",
  "key3": "3Vb2hmNY4pY1XZJMUSDcUGyi4SyCMJATfYTMxi2mDa9ESboUCVRoAoPwAxzP2XsnfEanxpBqj8XmH6j8kekr5PQu",
  "key4": "3XomQnCRFecf2xYXX4z1YF9dG4LrZCEV8aVMxQAfkxxRtxMFiUJ2UEo8mJ2GqTDmETKpyqKra8psY2EHKsdH5BLM",
  "key5": "v7iJGi6werp7nqcv2i2MUWDcFejgi5Yau3Vm6coLZ7sRTXvswZ1gDpixffj3hdQ9aQn2hcHkBwATqV64QHBEqmh",
  "key6": "3bd8ybDas5EgfJRQ25FJPqgvp1qqoe9DpQ1ewNgvGgKkKVKzHsDv5ez8yZb2Hc6RSAVfLJmu6czDyeTWjEMZ9hRo",
  "key7": "4JtMLqukjuRrXuQ67AfU8HxScgrZjKkQTAUZjwFRQHmhkuFgKwQdE5KZgphjcTYpvSTJFbJCTmgoj1JA5V2zuT25",
  "key8": "23bJvcrdbdQ7vmCcfD8KgAYzvSXkHyftYH4Li8miQAtjrG6kuuyUDKokNGDCqokPSYb74uDLW7MmWAT9ZbigPxjR",
  "key9": "2YC7YzJ6zKyfw9dJ4jmwdwBqFfuMCd2UdmboGRZuLcep94YoVZtjYQ6vdWCNkE1MST9zRuFtFZSqSZ8sbifjjrky",
  "key10": "3hecDpc4fqYaskEN2R19zo4Zh4ziHtKxcT3x3CroWKd1aUBoBxT574pwzM4vXhAG31Y2BquLpCiHmExsG4SKwmrw",
  "key11": "4U7RBWpKAQfpvnSdLichUc49xnENjsRpJcDoghqNDP1ahQG8ocVsELzrXVu4QHTJyFvsdfT3S47UpyCMKPWkdRNU",
  "key12": "4yZ4qe3n2pMYnvCPPS46oekkg7ETLyHk4dzjfV2X1anymQAhzVKtJPoCabAxWcriz8dL1DxjXSraac4v4kFxQhzg",
  "key13": "4zeYuTNmxZu7Xckyx9vbPGp846eGE41Me5qa7u5kLTPZ4h47q53Ae4o6WVs2vi6XzE5FuV5rA1FCETRv6K32yE6S",
  "key14": "jtXHHcPHdXHatbsypi7jNmEqNJTwme156uv4hAEwqRyxbzDzsn5TdPAy6MzywuTEi2Gb9xEZNPps9BeggjQX2Mb",
  "key15": "3ZkZDHKqXJdEgXCH7ZNsL62trz2mM121Nvz6ee3dsrEzTWfNGZjPbwJVG3J7BwWoPPfnC8dAS5HbQKHw9hq5yX9m",
  "key16": "3GtewvVBuynJ1Wr5HcCChJUPcfaxpiSkrtehRicngwZ7PbtQ7uZCR1w1L7kpcbikhskxAcwu4DXmU4JPDaudiicA",
  "key17": "v2C6BsqsjZv6sQshaZ236D719X5kpeHLUVMH4Bxj41Syv7VptBvkYLnYkFU3qMzoPRR5Ctxmb1DfDLuGhyvdLYc",
  "key18": "2o9DDkgQqc3UfFwhzcvukYYmX3rgLnwtqZhETf4MnwrSSww8DcumhUUauAtVqttKkTB8TWrWNGcU8ZvT2UZSWQQe",
  "key19": "4k79UMz58vNF5Nk9XRWmfVyefGT5H44dT2i6vEmLyfHQ5wtkVSBYCzQ5fTQ7MrBMXqsgBHefdQSSUb8PRce88bVi",
  "key20": "5Z4nKtNbSnmvGPvrgQKCwcvD9ZpScdomzcG7pwxU1h9aeJNMscL3E9mXsiQZVSroS1LAJ1Hsv3i9DXYFjHVqumd9",
  "key21": "3CrECjyQofikZpnjR7sNioGF4TqQMW63SCeWA9mwE5uMpNBueTkJaYkfzAGeWxkkdo3xFfprX7xTCfTujiFtJQ3",
  "key22": "2krdTaw9Z6kiYRUPAvHrjt6YYL7PPn8KWJHDVXwHLxN5HaBtx7tvMDd9F17sPzzeWJfLcyN8oZms5qLqo2jpLwtg",
  "key23": "5bL7jxjiLWBRzLwYWn75qwqGs4nKHCmzqSWcV5NesAKi6U7pZQxKDTnUqtQvAB8yuswhmJVWVqtZjvURLznpkv3s",
  "key24": "2fYzScHJtEtYxeTcyzo9HdTU94YvwCnVHdZcpDJraj9J9Cn6ggck5cepq9EqBqiBAWrUjYo8aJQeZoHrydKLYzGQ",
  "key25": "boGHjnNoX2wgqB13EXmitcakVjHhkZSkvCSazeYFEqbtCSe22zjK2YpLFnpfpXp4mZeaaoGWQi2kPGu75dSjwEe",
  "key26": "2wiZW4LGcMitRz7TheCL8hh1jPqh8iim3oFWKGdP9BEMKmmDYzsTHHw7faagGdsKhzN2qnaKvX5PmmFfDkY9ebQX",
  "key27": "4YJkmDrs6RKs5iKim7opA79n2He8Jfr8wev9jgM6vtSy5SumbtQ6pArQ4JigPoDELCEpgviR8mfMWsWyyBRNURSv",
  "key28": "2wGF7FSwXWJxXcwXYawoVhCw1bUcVWMUiepk9FLGymGUAGAi9AFHtYwatdFoxDVfnjveAYQgstF5FQQErY5rKa1H",
  "key29": "49w7sWnQKsc2Yd1rYv4HdcKZYcisBiCiVEAk9ZKVRhe7ngk1tYPSiWjQWSa8srrijb7EJG1tXqsRTX1qBKeEDBVn",
  "key30": "62iRNs2aj3ngjqhawPZSb4yG8na4xZJN52fDafw5piVibtUZZ1TYGARWdJpftvkgmHmwnSK6Gfi7a52R5d299WFc",
  "key31": "24wLBACPAQH1THzQhKNYW5u1QSLXjadxXNiPQ9pHJfaBfTgFVbT9serzJy2vNQSGt9SFNAnJ6rBRtipgCiQ6yLMs",
  "key32": "EWn4iv7rPpoJ2gavYWdNqBj1uTmpHA5PcCvvZMFpsRxxJaCEBoyHFNaUAnQFyNdEvPLW7xrWDoZRUmi8Ezh7A9n",
  "key33": "39UjNfUR1HazrB74xg5oupbgxRVG6dM1VxdHdCMMcnrcwZfhCNtRKx7mRB39XQoGtey1TXo1dbZtnkgpXvFbhTnJ",
  "key34": "5PPYN8UCNG5SfpcUocxEX9yACWYoMARAk9TSC47HVL6bsYAy52iJDUsj1zDNeCwZydKzrxn558vahHHiMkKgWu5j",
  "key35": "RVNwCe3yJXYMehtZMPmHuwgXykRCuxQ2y5oU84SJLqkV7D5KkxiAAKKH6ASFNp45DsYsKGPUNXXbQKNYoiPR2DQ",
  "key36": "3x8dC6nmLkkuQC42aJxhfke8H8GTJvw5KGq6phuU3CGDi4mnGppHLc5vfwAAiFAJyaQXifDTUkZgeFpBs4aZyA7c",
  "key37": "5P9ZNbCLK9LzvhGfCDwuAVfyBQ6DVzxj72QzdsyQaMK7CPQEtRv51MiMt6KWrzQtMNNab1mBCvfvaCZrENFvmhJz",
  "key38": "yDQ4eq7n1VZFpNGJCEfHyuPvAPxZAPXn8sXxUJnkVuruWXUdGkAVW9ZUegD8zaB113zshe6LZpN7T5njHcAoVeM",
  "key39": "41cf6Do6uazcFqVLgLMiXipYANdc7YorYVD9K4v2Vv9oBBfyNb9MC1tJBqib3ENP3L1pRtzXcTPQutbCbnwQXHnH",
  "key40": "2VgXwDi4EQfmUQf5TfUMZniZXnScVjYp9RVf2fFU4wY1GQ9QiSFfAyWk6Gh5gB1wTwfYvSSxQ51PUVvNniSW1xax",
  "key41": "3LprSCRJtQsxHaQzuSs9GLQwRsNXDj2BiCfHQE42RhuZ2eMyJj7GvhcwtUavGCQU15ZMHZZcH73KRaHtFftKmmF2",
  "key42": "3AAZyuPH1QA8bsMmSuPkmAaYitDo8THSSeUpUUnXNfxpXKNrpSsbMJjqxKp44qARGGA2dw7tiowbrv9DpUXyXGMm",
  "key43": "45zjsAVtVY1BmHJmDe2ApJdEddUktyTqv9uZo5usd6p4L35oanggxzv54LYLvJ3tNBBBh9ADAgn547Qr5bdXasYA"
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
