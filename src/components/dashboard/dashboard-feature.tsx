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
    "DQw3UP6uTYpASCdKNVAD6hQPXbNVw3kDLrYo5ynLkmR89GJQ4AJA3yizs4bfLyKyPqgYyYd5cA3cswXzQboseKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ju7e59qywtudsN2U3y7EG6XKYFc7GSiByuPGTEVqbaZnGVpMPpwJD6FH7fgmvzMLquxsTu12Z3VczDPR5y4Exxo",
  "key1": "2JaSk8piQj4T2rEcDvVKgQeeGiBN5EfMafN8tNur3nVqDqq1LS7FowuFRP37V2o3Cm5VzP4KnHHyvktBteUepBhi",
  "key2": "2FphyKc7tqhRaB4oRbvRqRBv3KzJEXKKQQ6CM2ieBC4mhweM7niW6RcjR46YfBc3gY8wcdJFUHSJWQm4XxezD1KN",
  "key3": "5E1j3wGfU7eZKHuozXjhdfbzC5cNQmCjPQXz7iyxVfkEycWYbup3MiVVY36SWXM2nvm6ifLmeyBd3feo4PjkHjSv",
  "key4": "PpZNbiq1UsbfCUfN6XrtWtjym5G9skBXW5ykYYuNVUptHAWwbhob2jvnpaqqREacXnDzysFW2qX79BqQcbNqX3x",
  "key5": "27DBdkqgeYqWEU9LJcA6JXewSJHFwiA6kBf7Rx3w4g17swQLQgS7S4rgA6yZ6wazP7u8YN4fMvS7L3SSsYL9FdiJ",
  "key6": "4MYNM8fRTpv22dQouHFJU6XCi9AnxggBny6Sa2a6acxoNzcbY9JeWeGE94GAecbn69SYgvU3uY274aXPh9RptaT4",
  "key7": "3exnED3irDMM9SfgbwgG3aSmpKvPgrnVZqM6vp5WdS7PetNKy3imVuqHDasLfCMeMCWj6TWR1NGYdQnQbxAPRLom",
  "key8": "3Shk6dHNMbfzmc6oYdTcyQHYbx614p24nztvSwnjVDmZRpsgNERhcMWqtBDPNv1udyhkRqCrpvKjRgwJ8Kh8KCUZ",
  "key9": "58yt4n9pLgLbyj2DB6DmZdfeKMAtzhhJ3sYm8bH8vV5bkVGBKgkqGUu1SsFoc2M86yfxyM9NHnN7nSVs5qb6am4f",
  "key10": "2Jyx5sB17xCMJFBE6aXgKn9Enm8dgQ53xNbBphaAeQfGtcTHnH6qz9FnppYrUWyFJVbKFeTZcGgLKkAj6EjCVzN3",
  "key11": "4HHjVheBEqRYRLkby7GqLo3mhTFNbfJ6SizKkPStN2z5dXjWJ6nV7UbwFWCC4VB3EYmr5Akf54YFkXR6XZinHc18",
  "key12": "44LNwYhH1PRmRgmx9YGEsr6Q9uB1GWfhJM47ry72mzLuhTyo3xfX6HNdSVQGTqjCCEuqsfJgK2qr5n2SozvCp5r4",
  "key13": "5axe46draiBsjpyMWgATqZd3SmFbB3GqGrb3Xgh4Cx9KHcJrrffQobVPk19aKqvCJzvCN6KYqecCLUxnoyem4bVX",
  "key14": "27kE31swhhGVdZrX8iEA8G1AUKC4DbbGzQaRHLFyyCUPCxssNknedLoHxWcksqCX1YAtteyFG6Gwxx1dpr6Fu1VL",
  "key15": "3KABUw5dHK4DBjFnBC3sfUwamADySDeYeYni6DJgUVKiiR3TUhrgETYfxu47oL4bhfKnRs14RCVo6yQxDyqLxJrS",
  "key16": "3vYcW3yHbpakqGpKHkyuGjY6Ban3nizrbH5bdKFj3paKJv2z6BZ8QPqGn34ERMepEbMNMPNbKHuBVfJzYaWCPSZD",
  "key17": "126R5eLNyuoQ83TgcUPCB8CqMJy3Kc2nHR8nTrRmyrHsXTHFpCd1mHGTFZ3DLfLE2iw74LExHyMfyU5r5VdRjFRU",
  "key18": "P7zNyYcoQd3CAgzYwB8FLseTqE6uMWu6eehbpWkV6KZgEmjWCCjUnQZoqBMXKesCCeeVWUkceLwy433xhEYXRX9",
  "key19": "2MLHAQQ2ha6wHnbRxhhEHFeVgHJWa6XZUKbAhRoHrFYuBhuHB1HG8U1HiqiVbK5PWT3WoLEYdiPcBkhp9fEDRY6x",
  "key20": "4Eu8kRGijfEbLiR19x5JvS143pLPLEhJxtSpFNkXHa7CrFUeyDiF31Uz7BT2fgUgdJ59GNTK5PF9p78cunqstzMC",
  "key21": "2qMEmArzTa2fGi3fEqGs92hXgCjxwnqdQxatr4KuQvb6P5V2pnp7ZxgVLDg417xYpkVwqcUiPeXCuQv3Uj5rPCRC",
  "key22": "4TWcUaLCJzCrLwSZ8ucUpDPpgPQjZgihb9cV6kRJfzRPrgFoekB8RBRxRgiQKfvkH49KYGPH2LGPyWMyRGDGgPWF",
  "key23": "5bGZFmBJdHdZ95tnJ3SqkN2Pxoj9hvxmsGiQSeCTUMj1GDYBuys4F9C8JVpup33FjHU1YKPFTRicbU9pDCP7QJHa",
  "key24": "2uQhmnLo1hCZSfct88UKfQrGcuQJh3D6y8Lx9hNrNdqPnQTa1gPkgyUigxEvZt2YmvDrLeJh9K7YTgg7mrD4335R",
  "key25": "5ooTZcvEHe8amDk9yNZYJLs6Qm2F3nZAFdh7VW8EyRsvKMpJMxPV7HABmup2Ak8CzbBiSjDqHAZBMaEjdisQhgpD",
  "key26": "RxCT9HikPc7BrcaUYpRbZczAmaeCeAJLYpB3MG3EkhkegTAaSFWbxz62y2WnVdkrJzb1AmeTCGrXY8X9VTmRvyW",
  "key27": "3ocUwmFqtycZSVjtk9wRvmmLfLizDNxCaTv4HuK9WvNXtUcBHdwRrBmMK1Ld98PWz9j7DZx9dn94tE4kpoXeWTRg",
  "key28": "2yNN1Wp8fjX1PASiAJXaEscAZpJSFPnibMkupQ6ZjR5JjY4jUnD4qWMmrPz1iwaYiXBydQdwCjkWgRrztjTwerbR",
  "key29": "5mAf8c1ZPmtsa6KXw9UdriN1yHwhs7ZoGwKV9nzWgFAwvdTboGZiZNNtMVGaH9W8pn6zgE69LqpTVZHen9tKdx2U",
  "key30": "62CLR2cQXDxUnnF7U5d4oomVKRcAEkFbpKha11Tcm5H1Urm337KutVs4qLUmNQ34DGhkK1Dk4eU3TbNPjacGd1A7",
  "key31": "YyRkooaNneA5YF9yvvjH1gkWqw4351PFFcB6p6FkjqAhb8gYRgjyS3vMrQo49X1UtVsZt4e4a85JUwZxWknJQBe"
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
