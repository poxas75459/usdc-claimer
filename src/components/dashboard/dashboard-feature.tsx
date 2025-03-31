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
    "2wbJYLq5ucuKXbKSUEr2PwPGA5aT6Z9RKBWiuN4ta3hTRcfDdDsJ7jMS5XynzwFykNz4LTDf4DmLKYWBMjsvs9Dg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E1qNhU4K92RHGjMhAB8PvpoqPjj41fH8iJawu6y2JZZ8EUvwwNM6xfKJ9w32kXge5wZvg1y3tpyZeL4upgJ9Rr4",
  "key1": "41zWA2yRpsgHevKwgW8oMUJswGxdtxP1MTo8yBrx7jLeMV39QHWTLB9YSCih7Dq33oZYvERSAxcyZbzp7ygkEYUM",
  "key2": "429bsZoNHieMMBcG8NecnDpMrynYBNXNZM8H5XJhhHG5yy39G8QJk2NSFMgPgeBJ5VfVSAKo18LCxkhQVvoKMT9u",
  "key3": "4XhqcGsJxMEbu9zwo4dU8dMmtgaVZbF5MfNpjBLjxyF8LFrqhBpXM7HGw7pufvJ4Sm2Lp1BroYJz1DxXbTorffkE",
  "key4": "L3yTJkA2WrwkgnMgufqyh7V4K6wBDpzHpx82U2zYgDenan96JZM22utu8yShtY4fnXuJueG5gZSuYTCEGssb1gn",
  "key5": "44Wot4PE2zG7GPcadXqw6FAEUrpb4Xv4Hxdr3tsGmaqVFo8gS5AhsBaXcBxSBXpx6a1nkGMushEJG49EaRVwzn8T",
  "key6": "3UAtsButTKyv11xxHRVq7WnRZjfhKEson3ytkJBeoXSR7UdJ61EHqHhEfBBU9RbnSUEG4sd6hNHVkbPWLGmDKt76",
  "key7": "3Do5zxMMLsbGPNnN8eyKeRyjEUzz1mHoAH7rkcvW44kwT9Mo3xpf9grqYUQzWhak2AZ7PMnNmCth24x3FPDgQdj",
  "key8": "5NLDrWddJzcmDG4yR5RSzhyJXjDTPUUWn33fNNTfWRCEdcR7pHmFTdA1AjvgAjpzLZpyJQHVKzc6NYPXTBmPiTRS",
  "key9": "s1EaHc1pkeGn9fE8ededWU7NySMNJyicTUbZfPb2MVgTJ2WNFZE4XiztLu6VVFzpjV9uQh5rGmQgt3T9P3TkKrM",
  "key10": "3sFhBcbjF1Akudwzs3RZzPsLqzyHkoT9TgC9XNXbFKQvQ1tTEsjjiEKGdsccLLw1XGwEtV4qNiSyEpC2xXYoPd5h",
  "key11": "4ZigWNQPrkSTrEtozz4qwmKCcc3Axe6TSjjdqzdfFShNWq8VaiG8o1BJLfyR2Zo4q5pRyAksKxcvLApkWpM2s7wW",
  "key12": "2CQo225btmBxLnoAoYeB3BEfif8pLqJe3zvZd3wLQxWe9d3dAnsfre2gVXpgZ86ncZ4rxSkZxx1WsXTusf7WLAT",
  "key13": "f1eLawzxmFjD1n6jQGrg4g3KHiSqqroq5cDoNDaJeCsZMoksb9CHqpsP78LGAEa9DtoEru8HQyHLWAjH1P72Wwj",
  "key14": "RfikdTWQ1X2q8WPR1Vyo3Up4uF4EkQbB6WqhuDUCDioK9kQuhi5tdPyDkYP37DmmgmV34iCqGEvxGmbBZrmcGSX",
  "key15": "3SBHZTNsm85JqEppFFhtPQpsVDyPoraAD9kRboNGZ1zqPQR4SCYWpwLxnWZqQQd9LdNW14zS5yYr4Z6kn5qzNz8q",
  "key16": "3xSZF7cYeRv9UT44Ri68HvxNAoBwnZ9ZvFWWcMVngC7z1gwDrWXshiVUX3PncjePbXdsqEjN8ZhSmUxCRn1PrYX9",
  "key17": "5Q9FpV3u6WE6mwqvsU8jHeHjitw3nz3AhJxcbRF4oFzHvVwijJvic5tG4HMGa4cQpKJ3t865kc7cTfHMsWL9xame",
  "key18": "4uTbWbnMLF9H5pANdakrqPBMQcnicZZY3HZ7on5EZek28ETckRHX9DhkJrEGTf5zcehnHnM2ejJ6V7dBPBV441wA",
  "key19": "4NkjLwpwmg1FNXrcomUXRBXFi7bJ2LCaD7uM4susdQwBYGh8XHqKRngidWNHDNyvw9UPoXtcx5bxMsaUi1MH5E7n",
  "key20": "pfjVwh6qhgQnoRr6ecYhihwvU3aiTDpgiiR4YgjadfsAmAaU8batAfJG8pirp5c3a5vBCcMuRCyUXbvHSfYMxmY",
  "key21": "2zqEZfmt6CFWmDEx4d5Z2ofp6F6oQgqDjpPUrwhRjZvttQPAFBpN57MeHrAJZaywSpNGWGAtu9LHXiPX6zJqsZ23",
  "key22": "CBXURWDzahfJUJRd9Q9t1NgsX7gLaeBgj8aJprdk7mdSpwGQp67op1paMCfq1GHTrbZqmHhz82uQHJKdPeRyJYk",
  "key23": "2Lh85mYGQQXNY1SiPWcx5F82pqcmjCsRTmWH2iUzSfMCCs87rVYRr1FPy38uDc912WcpxYN2wDrkykPHFMbUP35X",
  "key24": "5xQfeDmAQFr4aM1thkBQ124hg3tX9vuNgAc79PGwHPFMRPuWXpT4Bz1dsjrKbU68tiWHfmg69qxoexHCiTpxaCbK",
  "key25": "41MJqKnXLoB42jBkkNjJu9XpqzGGrDgiEzkPCLjjnRd2ouVDvR6T4DuW5ipTjZMNYpC7VooMYXBtoRmRHprwLh52",
  "key26": "4i85CAuQeq95wzB82vdQJp2FVS4SVR27WK7263mSrcyCHuk2izJiaqu5epD48xzT29yzff4g3jUsndctnqnZdCKH",
  "key27": "34bQdBQgVyx1nDpsGQAhiW4TMSSjA28oUhEJVEoFpWqf71ehDWt2XE7YHmvoBFYLjiiHH9TNN5SRvdjsfA8mqaHY",
  "key28": "3S1kwe7myaS6Dc41AAdDvMUjhwp9eF2Vg5vsmEPtw1B3hj9j1zGRTakKJUx67Vc9coAJJpumXcTRkkCwDpRvE77d"
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
