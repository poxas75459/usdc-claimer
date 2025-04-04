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
    "5PaYzLXbG6hsSzsytYkf5Np8inbaAPPSuYcj4E6inwuVjtXBfxMK1amx9ervfrLZbnA5iUt5pgjyTvJxUA7uL1Nj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pCPgra2CKp27W2fUevdDR3a2i3HX9v8vEwswoMN4pBo7sjypvuwLwhqmgWJuP3cCU8d6pr2XoWn6Yexy1B12zxX",
  "key1": "3veRAQgFcpr8PHCfemaQ3m7ZU3nSjG8wMdEQLqphFsueDmd6f6JzKkfcbgQXhyHUwKcKvXunAn6Ux6TmA8LHJNgA",
  "key2": "f3nbNfJpppvdjD9usmBoikV76FDzRq6cp2umHAG3uB6UFStNKuFTEX4gQ9PNLP1VA9asHyxauoivLQ1kgrADgBy",
  "key3": "4FgWZQ7GDtMHda6METLQghicGRJhfs7ip2HYQMmbYTocFkBE8q7sH69gPZDu2JkAzctfcVXLxpGMptBFPsnp2MD9",
  "key4": "3d5BBHKApnbPpiG14W4i26rstxxV1D1c9nqurccBgt2fFafuv5fjGDkh6eGPbpqftMsfeGPpiMpAV2dFfwt7NmB5",
  "key5": "5KVYn4583dj6bxJdhxN4wBvzCkZ6GmfWJLLyqmUNPuhkNuhikUYTppn3a1gHuZw6N4wkeUi75PPpvxYj2AeR6WxS",
  "key6": "2K2vXKbLzbahoMPWs4Ut9f9cidT7pHbttwHtrmf3zHufY7bgwUVotdk7BhMv6HVWjKZT8MFCsKfkGiiuPVm2vP9A",
  "key7": "3TFXxmNELC5DZJq4bA3SzaCx5KmGBc8nQyjC8dyhEChpBHxHut2EzseVRiE4jYZejJxLLC9xB35etUuxzet21BNk",
  "key8": "5Y3Fh4frYegREwUj37JtsXyKEinJPjuJybPmFvYaiYa47WcruVnpEBguxgez1SZtTBcN1uWKEzvFWgtUzZpqAJhx",
  "key9": "vZE8bZuv8waftKwActqh6JkM1QaswrXHU1xFJHrZjEqgAcTkhLxBu5ppgV6urkX7WHy2cVihm8nsAVSLcg4fpNJ",
  "key10": "2a5zr6e892e4ovETe3GnGve13C5FzYcKu4mybcrKHF45FCr7kjGxonzFboDNyJToQXRmNturMqLn45XsmkZFvhs5",
  "key11": "4bLyz239Rh8zkGfGzHJaBHcxAX3qXuuDfZ8vixwpNDbtyK335BQ23XQtnaQJdVa7sUkqyDmX3okfCWj7YNMTqGg6",
  "key12": "2CNThSLpCofTK8i1QpfeCjxWXZKVZYj8LwV9MWVGRM2tgzK7PqwVcUqqRwzcLSESuCZpuzG8gHqciJ2NHdu2SFu6",
  "key13": "4QpsfnaiFMW94SFTqkCW8V9BHh1t1ssDjRbUX51sL5PSQThz58B5qsRV8wsddwpVwef2yrY3NNCdx4qcqFX3AkL2",
  "key14": "Ytc6N19joXe4jEfQkZf6Z9E2J32HGtfrdzRxVmXzK2t2BhXxJivXwh7oieZqZoLx5Yf9hx1HozoAuFEaCjNj41k",
  "key15": "4SpdKyrWswaQFVkqPF6xpLHwDiyD3dEyBUEzgHpuQaeijGwpkVkbPESgJ9PG89C5GEYA6bfqBGoxv2E61JWg1Sjx",
  "key16": "5mfXWzoN7BobNX59JNKbfjjmj9LZ7tKsvH8FzghnkemZFEivp8vWJNJHEksesG8eTTZVUPx6AxPCNYNpMSGXjhAP",
  "key17": "27CvDKDntXsZrX898XJYpBUoRZKUTDTXUjvgoLhxX5FtBfjszDZU6vvBAuKYWMMogAjiuUtMXaxRet3tHdprdhPg",
  "key18": "5yFNj7vpbgrduuzgEDGKEGeE2teEhH4q8WoYKNeWbxwKrN3JfboF3gtoUpzNFoRGSFQfYXcR6zcgHcpY37zFEXNq",
  "key19": "3n6grDfnqTzft54WyNnU6bWZ9tx8AYUzvzX7vqFkj7dzo7yZ17y3knjxb6qoWSRzGoW58geoRGJaLnduU8RcYZCW",
  "key20": "2fNxuNvfS4MyDA4tgyuw461rGPgqAur5YHcmLAozSU3xzgzD72xLcLkerA4sx1VnivutnmYGNUJqqXJK3WWU8jrf",
  "key21": "5KRiZNMck2NqxpKRPpPsw9MKRXkEzrNDdNz7p9e5m9DjzGfF6ku2JZDG1kYyrBURbE6f498wKyicJvZe3z15CCRa",
  "key22": "5ekCcjNdBhqBDjid2pBaNatkBBYXbSTrrf815a8wctDtKSieJDBtHJm427mQn1dk18JPrwqocvRdC4V1AzyKUFBv",
  "key23": "4cnnqTqZqsM5AAteP493NKj4t4vNLkHH6NwPbuyj6Xs33WQb3AWM46gUqjbMKTNpZ4cat1nTBY7ByDLJixXgwiHE",
  "key24": "GjfGyAuiQtxKzBmwXU3m2E7zn8GdrFb9ABvcG8n6gfmTZGJDejqGMYzXYx5XiV4nxawKCqSdjkYW3GtwGvozKvc",
  "key25": "63Resr1cNmruLrmtgaW4VitTktRejk9xaF7D3Qhio6uVnoZsWZFRbGaeMCTrgiZevXRH94vN679PKqWyxm325U6i",
  "key26": "3Yvcv8Y7U5Eu3Qqphc7Tyv3p6Nbgsvv873qnspJWscFrzxcXJJPbhxUy6AYjHQg3TVoc4mkxenqEyXqbNZgANEyR",
  "key27": "2BSVis6jydZJspLXiLL4rMP9wT4rPnc9NGr2CqphW7f5ERvL8YmbbWgzBCWhj3cTTaANV663KbXQZrCBv3gWVUug",
  "key28": "63KoMwuJgo1jDNHusXzeFmgMjgvmiXppWRXQ4HcYp1oA741w61gFr5thxNA8w9v8AZt5zFdT9DmR5kwBGGdVMQZd",
  "key29": "2Ho4qvy72sCMAKLWeqA5cRDojeza265h1UVZd8DzpKf5kYnQcAKdxZy9NcfXEzxR2LyM5AzY7xVt3oni662yCT9k",
  "key30": "2UL1BJ6czpT3fvR2bpVLaprs99UE2TratSo21wExr2JbrDNE5jSDPhVgtGueRX5Hcb9j3mbMKEnUSMMhZ3MN8zw",
  "key31": "1Amwvgq1rRYhUoDCfBQPctXosu9tzaW4RNESdtT7cVHS9WuvgEAYzw74TYGqneynjWZf3xuRrd1mSGZ6ruyS9f7",
  "key32": "4nB9t4HWYMUqMWJGi9rHFmqcB6uPW7o12mcxHa2rVfcyfm3v7ki1AE8aZagXGDWpNZBxCiogrUaAgG46Y5DEHze6",
  "key33": "3Cp8t6E3zVwwH8hP1NRmJw7NRgQofMcbzv6cao6VmnpWcvnbjxiHKxuApus66BYLWtTHQ1H3MMcSQUB7cvVk3sAp",
  "key34": "5rp5mqT3exZLYGbyUpHVAxs3hdwnsx1ja3SieuBtgLYuZkrbhLCqBdqexaWv9WjdoEFFNksPLb5GWn9VnSDpMqg9"
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
