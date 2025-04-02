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
    "3sB64jrasJcVBmH2oyaf9mW3hUvAd6FwimFPnbH1vLBKY3MEis94M3RLN5dgmhsm3rTC5iXkH2VJowYQRq2pYJq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JNDA8DfZHMwpDtckHAWwc2LKhbVmKf6sXacShW8CuPdCTDRptHfWiHbfhRznU6xe9xLe2jC8w5m7Jop9jACFrgv",
  "key1": "3M3ieX66P4jrxP91eJp34AZaHKSCnvUeP8Bz6zjBuExDdZVT561KcruJmxjbv1Rp9S22VtyUhiSSduVsryc8GzBH",
  "key2": "2X7459jMkPHkvxf6pDW1itMKNT2mHKFsZiD29ZHYK9hXNzJtYygwRCeu4QAptnwoNyGaMAGhvAxRnYEQY4BNFeYq",
  "key3": "3oBKZZScWrwJYEGooTFBbLCg9QdADhw1yUEntaoWaEnv8WNSjp8XVwBR9GNEnvVwSL6CxhasSX6VVVh7MLgRGicp",
  "key4": "4QZEpoV27bPREzriqtY9GMFMZqPqkno2Ai31W9b63S5UTjF55CBKaHucfWRbUiwiKqxQ8qZfd58Hj48FQCyMxa5S",
  "key5": "Khap6GpLZKc6eWiaZVbgYrc9FS1gDrwg3wAnMeWwf9PAo8HpqpCQvK4p7y6bkcSj5DVEjNAZeoQf6NjuMHotucY",
  "key6": "4H3KrWMe1W9dF9qc7QHwBPaRTTuKktT65ThhMJ1r8ZFyvVWjXNESVHNNcXvNENdjahDRnqChFiLDADDcK8hQZYc5",
  "key7": "4YyA62TPnY73zsZgD2xHRNMww8ZoWqCPLnfmVgguwVDLkU8b9cud9ReRuysz4nv2QEGEzpE9Pk6zgEJDiptYBzPM",
  "key8": "65PHFQJMssJikAfhX7kaRcDavuYiWHdNEsQTLY93MHmZaqN9UmX9mtm6kw46t8Mqg6jdT2NN6RGVkMCuKPLYbB4w",
  "key9": "58mz5cawgkF4Z7whRiGqAaU34suaD9YKy4133VAhJDNPg5Z6ikva1zHxh6FgnniZx6qKzR1Hm14zByLzXQRkrR4j",
  "key10": "qoFdJdfPRmqveZZGJPMqUZdLKkHYXSn9hmGiZvN3R8Cfb6zFh1yCiR7hWp6G69yaooTpEXGQ83fBh1RZUf1CJUk",
  "key11": "42Z8rJgtM6krbAoyfYzmzp93vwP2hkrwXKwf9GCHDdf47J6FgwbNHaBjBimzp4G9qENzKLgyRTvWyBXqRyuCUhbg",
  "key12": "2qpwVenZtaVPzxbKX7YB1dc88MZrX8GcJjYEZpFFLDvjgTBmpuwMGXhARz87kpNk9sSpHDSrA6Unx68SWGUZVYgv",
  "key13": "49QkmpEu5CsSMWRCiU1ekdChYvb8dsH3jdofnLiGMiD1N2v1pqsa7L2kdjXAw7D4Vyr1VuGfTm7ZER6kmwF9jJ8t",
  "key14": "4fXztrPTusp8CSvGCxEhAt5x8fmpobVtUiCNvaDxXnuRgtSTeaPUFvPampEPJqYTpb3KRSx6z5maNbDasiqw7ot1",
  "key15": "XbKEfWAvay74RDS9Mjka2XQtoaTyXweSAwHWE9cEWVDVHvV8HNxA9DEry6r3ndU1yPyEh3TZMMYuihCdtjVNjzk",
  "key16": "5cjTr4Qsdwz9Afpjt1JCnz3xPyqyQMX8eVuQqRSrXQjiYU7Eg4e3R6k4E1mYXZ2A2HkkCxZUF2rdrFsexhLaS3qK",
  "key17": "3YDpuEBXaR39Zf1sPcsSZNpiVi5BaAeo844UccZYN95yK8ru6zfmUqAMeaicSiANrxTE2svHKpGTxM1HtyrjeLXc",
  "key18": "4DJXuJNwAJjuqboE953uB5ZXxazcmPaqHshs8FnBsHaNCWhTkXe7X5Z6YoGtgrzjFGUVQLbhvqDjB9rJTHrzxPNB",
  "key19": "4Rzq1XPZ6QDzfusktaZnLFibKm2k7FD7q2SS9VshRJ5D5ZgQLfS3hX5TFmzeT9a3yHmfJ4apcs6Rhf2rRzGFsKwf",
  "key20": "3MgZHuwaNHnWKEBWeCs6Sy17SwsVnKciqhHUzkEVKePkjvsuum86RGQEXQ2ZWrDajhnn1hBar1jPXs5SDxesC8ft",
  "key21": "hLAq8AMCvgDWBB84HU85mcSgM1ToEyWoEAkSS76M6Uo5giUbCidNQd4ink3pGp7TTXGNZySv6WCNHkM9vo2Nk12",
  "key22": "5HAemLh6tKSxKSEuP16W9BGcsU9HwZ4A53BJuKrrNaNHf1jo9G4GDU8JFZcjHSb2S2APVTFCZk3ofmgkLWYnx7vH",
  "key23": "4x7atNmE8CWtZ8JR8MfYx7Ec3M4FFSWBvcHuvKaCkHZEvN5fupKVEcbyQa1kWWtkXx3hpNpHyGVdc8dqATbv2ew2",
  "key24": "31BqYvV9QE8EgBJixntbBQgFtKKZayCGgHHgUPp6FhXV5qw8sk6mn1WthkLarqGdiBE8ivEUtRui7qEE4xq4Fsmo",
  "key25": "2yQASsGi8yzxWQVgwZKwLhkd1ynnLuPmCWRB1FpwvbyCiG6q5YkFaNEdxZzB8szgPrjPmoVjFHUULh1BW7fuxw4R",
  "key26": "hwQSJmQjXUzLuvDpNb3bx1wVw6kXfdh2g8BU5g9vBBVdjxxwsbCNJ41qfZrypunbURKXvKaYHenVBaFR8PVbY6v",
  "key27": "2hVr7uE6N61RQJN7e9nPcARJxVT8V9kSXvXJ7JrCA7tGdHnjq7oyrcE7NQnWgNF2TTrF2bqxffbyFpiFpnUbgNMF",
  "key28": "4zcY5GkNRpBivGSdzxARs2BaAvvakN8ynihZd86bp82VoshEZFPvdyQUqvwev32Bzxosd3iY6wuXuMZqm2hGsiVT",
  "key29": "3boLzWEifaZC47KGRJwmnszb3hvgJiqFFGcV2jQyYteqBkuZGcN5M54bbB15HCC68PJGa6kUNeAijEf5NrkQXZD1",
  "key30": "4trkDNecC3FsKWtgi5wmwbpgSzueqCz8Ev1K5SMHHMt2GWiFwMM9cqh86qkWbM44rh7irHKrFDm1euaz3ZDJHoZw",
  "key31": "3GCiS2Qvd5vM7BH2BHd2zNbhngLvGkBmoR49vGko2EccTMzjfb7xSBX8f7S5zzyKRqvD2Kxu2mCDcPFXuWXC2Ldd",
  "key32": "TWCDRHtp7X3Wu4fpVLogzZw7Mzo1UC1UwNP6K1k3aGqvEqFeyXbBWEAvkBozXZ5oZp1F8kZVYPn5RZdQ6odci8S",
  "key33": "3aUevRKgDHVATEfkqn27jEfry9Arhiisp254KTQxF86vgECiBiyHsAXhiVG5yKXxEH6xyZHKPovDbQUPnNNSTaSn",
  "key34": "5EH9RsWL8YJ7enAAFxSEkEkRL1fgdCcMMtkqeEtxi9yuB1mUKz1QXuw2hVLv8UQZWQMoDX3qacwXixRTaNNYZ1nh",
  "key35": "2odUMUVDnPHnG7AnqeyVsVYCLDn4aA2CvUp7NRUJiEhnX9d9yeb8fDfnnZQNLoYiKhSSesG4CKWxY7MTZcdVX33x",
  "key36": "5xceiq1MtEEQWybVStgF6Pk2YZV37TpYjz8PMrc1WoHj6KT81jfC6AjG8r8HUF9hnyMPUkdzU1S4kf5bFKq7tEub",
  "key37": "71uL4XrAEsz2TyGAhE1VuDSGdK25BqUXfjrf9kVQLfT1ph5ajQ24WFcoqqrbCj6op21iJUNxfGmAqVNhXscKyCH",
  "key38": "4NpSvKYec2JMiHT2NxqkffZ2J9DWDMDjB9fq1RWvgn8AkJ63uaqrXNvZ2n8iJHbkenrjsKxeNrdVLCA7tp83npAy"
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
