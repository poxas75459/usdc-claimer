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
    "2wXJjwKtP7FejmXbfaMz1Th5uwyg4t7VqmtDzXcG3tnjd4AeiPHaf7ZUjNuobb1GR7UD4JCazDuZiQTk3JCRWVCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XAh4scwvVAsZdQJevEPuRaLf3DKpM6TPmxp8ZEdgBjdzDFdE9mbjuomTYnQ82E9rfG2VFX9ygVGxKhDuyYe9zCi",
  "key1": "2YymmXUaUFvRiCf7nv2xuRiekK9jn4KzC1G5b5geZZP1WcaPeAA7hzUe6L7oLvtwc51h9zzhDD6EuXPaKQD1d1pD",
  "key2": "2xNNVjN4wB4vKfaqkqPcX5iPiUqp1PvXnVZGV2bX6BGwfKwAQfRLjzHJzoZ4iAUiG9DnqoBsVSpDBrjRcErtrUru",
  "key3": "3AmDG1gnpHZ6kLnyfLfXum8cBNKm17VR19EGusvqgwCggjoPUcxjzy25ezrDxhdgQBK8RhukRcFaC4B6MNvHs95E",
  "key4": "5nowHkpCvgGmcrGoSpa9zW2vLHypNhSBaEjMxxuYjAsZWHKdcUDARsmdPbzG23RM5HcrViJjDiM5W6AUxNNu3qby",
  "key5": "3To9ymiEEd7eWqJX2gJ2pqq8ozmZHT53PJQbCV8gAWrR21gmoJVWHv42u9rcpfASfnpWeupdEHUxTgK2u5bNyoeU",
  "key6": "2MYUEvzFjtEfYHRC5qyLunb4R3MDugBxU3V5kJkgfvhDMtpu7Ed7e9GG4jGpaD8Tr4kUVnFFqNj7fFyjfVJ6YPN",
  "key7": "3xVitEzc8iwScdR6vt1CHadDmz5ipFCT75i5qh7SGN8RaDRHcvo2HJrKFck7Ws4xetL87DREapC6fEWUgXyof953",
  "key8": "tiLmgk4iVWkrVAGYuqq7ienKTyuVahwjyytauMQ9a5YFNjPCynrAB4TEKwtXhb38VfKkjn5uk4w2BWCFXjMTKC2",
  "key9": "4pDDcmAVvcBD2bwaN19irjR2Gn1xzGuuYtZ8mZb7sWh9zJUyjB6S8Mw8iqyodoM3KjjESsrLQoWSzk9snni5oso3",
  "key10": "5KgTGamndN29CEWmF7poKvFvuiHz78DrcZz9j3Dm5W3d8yF4aAwwRb1EvaXDV8ejjBPUvr6JiHo4raPQuobsK9cp",
  "key11": "4MsqCXmZT9S5JYat8wZzpjLuiXoPG6A26xrdnWS1Uc5BRnwy6PshKaJQsJBnz2XPfuKEag3qqnMsDp4Qoess2bSs",
  "key12": "zvfTXbWJ7uCdstpCyWcEKNyuowsUMUtpJdG965ukFEnfrLdmT113nX3wvZ5y29wcMBErgRZw6xGTbRkYEbqucYE",
  "key13": "26uLq6PBsWsYitA84TLe6BeYsPhaPWA2wjMAPcJv3w3Jz9upZLqRaadhrLFNtyxcqRa4SXvv9Jz9mCBrxYNyr9ds",
  "key14": "31yX8MVZ4df4dwWQcNktiQ7xGfRtQUrtgoWXNnGc4TN3LmkmTimdfyGzgZqka7xSaCWoGks7WWaHoDApbxJoA2Y1",
  "key15": "2MF1MFUNu5dkopUPzwRYrdpMUcH5MPZejBFFqTbbweTUU1eAcN5ezjikSV7Y8H7DEvxq8UAzgDfJvve2bE5j9rdd",
  "key16": "22RHiksZUJvVUavpmzurg7qry1QaoHrsvF355aE2iPAiG5331SVmq26h7HAf5B4UXzkU3SjFF9GJymF2EDVpjH6o",
  "key17": "4rdcmhWGyvENBWZjgHsQnF59uHygF1BBpfGW18gimGiwRsyq3r5xVHBWBYEiebSASBnBoLhVeGnroFmd1xxYjbSN",
  "key18": "2KvvY23btroTQ9xFjoy3JW5rdjTCrDcBZXNvfTBLKD2AYKBaPL3zJKWrAzdLvxQSC3ruooMSUrSu6wQWtkTJQMHi",
  "key19": "4viRQFGF5nsbTuUKAqeZec5J51i3cLQWvtPZxW95T9VVsmRLm7UsBUijcPBFmxxVJqFzCXZm5p1vMWqYiNJr6QWg",
  "key20": "4idYuCcy4vsZT4hjdoTC5ds6GR7LXr6JiV1ScPaX3w4QQWGUivjpZKnNJCrARw6M2qEimrytPukEj53LeqLGn1Hc",
  "key21": "siKpQuk9L8ZeW9kJTYB2aWfpYMQAW9CB4MZuD7rRBYjU9oXgSPTktPLorv6py4THpTZunSSocQbM9KfHYHmM2Q3",
  "key22": "q1cETchNAiirj9jatKBdv7ANQ2Fxizb1K5XmEwmgymVkFzLzw4uorTKKZmaGdHmFbd6m5yELSWL9qaWZcsKdyRm",
  "key23": "2Rte8Hztq4kuaFPviMTnygSPHtFkRNDUWUWz9gjUQpHeSNYBUWS4YD3dnQxXu2QZGNYkWzpGf8pHV9Umn317rccF",
  "key24": "2owYSsziRpSi9rcs3N9qiNJFiMBnDRkVXAELKyJyyNRK63Gydn2tLwwpWToDDTAYeADq5Gf2qKSNBWra2pUxwGSe",
  "key25": "54J2pSanbrru1m3i4pNqQp714Qkg1UqdTqEPCDE45AaWhBzmFbERY889Aa2RHZoZU4Yuk21nZ3E2MC82ZxCpjxdo",
  "key26": "3pmTqG1GKjCptR5JRQih2Ugkhv5kufsgaLL2D5XrvjBXCLv123hnSVqtTkc8CfMxxQaSExpcXnS4YTzH4pUHkk6k",
  "key27": "4JCTj6Rg4FdxYzxRHFBSLmLDmmp13oLzaaoCuAPeC9uWkwZf7GRfAwgkzvTWX8bBkMHeAGq7s5DSCNNtPWZZzEd4",
  "key28": "3q9v4z9XPNUvuj5mx67X1wwLwhdSfjRUH1Krm7R4GzWhBvVwHNSod1Qgs1Vs8L6XpGvWALwQBfk3s5RXgMYX5aFQ",
  "key29": "5ftamQVGJ59FdcH7PEaPhhfwnTxiCtHeDYbE8kasqg3VBw9LcdWh6YioXUkkFDYfJQtVNhCBn7WfNrLhyjgD1AsN",
  "key30": "3NL3T4fwiSVgQFLoYm9AUBDABCkUZxc8EzwBSeUPziVZv9TfVcRRdhoaihSfi8ArQHsvY1qcaMoEh4F4S4Uz6PfM",
  "key31": "4yweRRyzH2YJADXytCH6BpZ92bW78BspxPF9VqWnhxRVsBPu9k1mkHJ3sD7PMTz1paFd1kySBqidUtVct3kUV195",
  "key32": "3uggERyjHLajMa3nF4kEHyZ4zcpVGyS9rP5jdRhT6Z1Xk6NoA9YVN47Yixr28Z4oLJpjKs4iHzqgVKrYPgvGaqH3",
  "key33": "5znqpzupYFBJSdrXh3cX9KVZUmAyaBvPjVpvv3qk2wVJR4ciRXq8Dan6wdhaStKcoKz6d59XMH5cW6XUvXf9QMm2",
  "key34": "MqM59B3Bn14YxBoutptMVKFaxdwp1WzUYpJvZ4AbRWMoB7bNpCDLUMHQuTQZ5wr1wxhKwu8MRXPjVnyvfT9RhJ4",
  "key35": "5YZeBvHqaheBbc8Lv6uBMHU2VPCiiLdht8mvtksDTxm4JnZLuVTvkmRmcuCfGeR3URoAHwrK1whqX52zcQ1FUgf4",
  "key36": "3w9PoW8poafzNxvVEEEFB3sr3MUuDkhQL1ep2EiLJ98N73vEYjnpAdeBsxgZw9GX3vZWmhsyjpBskyx8efWWF78c"
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
