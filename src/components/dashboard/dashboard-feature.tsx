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
    "3RpsTGgVxqztb73DbejST3bTeYCLXfM6aoMboeBqh2QLpwfnhTPYKqLH6Z4ZfMiu7qbs9z8zDVbdQNT4z7ggmw5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67CbUj2YYdWivKAmZ3h9BQ7gFVoC29ojHBJwpN8X1JbFUbkT3fhKQ3WuRQAWEp1UDpwRGSURk1ij9mD1X8x6b1f",
  "key1": "5jUxwbdcMbqTZuE9PUZ5F7PxWyZmzdoDedhKRrWJjnmKP298W5EX4ib6QzFCL7tZVsWRQsnhHpWmAH7YMHdQQNrA",
  "key2": "bWuKDMcQwHExf9BKKiG5Mowu6KgEizWBetCHzsbvnv2Wti3fUemV3SyrjDsyggxbT2ono8mRSDdc37ztvNMctkt",
  "key3": "5pQLqHz5GV6hYuta2ntKMALk35W5yUXLLhWGYvEaKd1fMxyUGEuAp84uYR4eAr3aup1vcFreDjL3EJfgDC76m1TP",
  "key4": "4HAHYopPauKXpNzyxVTCTsxqXWVV2j2V8tTNSC6kQKp8VFuyBZzTkJg7e2sJKiPSr4Weh8o2er1SYNBof8jJQAtd",
  "key5": "3LYZLWs6wNtLf9EZC2tFtg5BkdNL9DU2J8docoq3jvdyzTv9AkqYFvqCxUWwFeLjrSi8Ufu1s7Eadm4ThMhofXEa",
  "key6": "3uia2MoxpgUkV96yqKXzPUdj19q47BXd1JUBxEJFFXRffPQn297nqzuQfCVF2gXJefyGAcJPCg8Se7dc5wYbZyRX",
  "key7": "2u8RSajhCRAALdQDAWGi7zeqdqSaJG4ZDMk2nkcc1sedngWndERbSpZanFymKaaaGMR468jJFBFBhwHHah4oNcZM",
  "key8": "3eZzXK3f9hXdEtrt7QFkSJg7L9fz1zkucz6dJ7Vg2o4Xde3vqtx4gWAPKRy76JTgFHERxc6T5TfG6WSm8QskQXUr",
  "key9": "zHr3Ttuz6DJLe1o2ukt1rRCiBru73NXWiezKbJhaqZnMKbjGijhq4FSKP7YtuRGK6ZFaaQ3RPwHNatpxwAaWCTa",
  "key10": "LkFWnVCvMv21hzPr7Yo5WjDbojznpbRAYVkPWifQwcFajumsQfM1761XbqMFRk2e57VmkqRBYHxmXVK6tfpq75N",
  "key11": "3krqJw3nCv3Zo9Yk8qbf94Xces3D9QcBqFkUG5rfh7b5QdjRBmAfXoS9KAJ1N5TFVggR78krjEroWeQ2G5cNbpsV",
  "key12": "5bkTnqdhJT7h25GJSJDhxNk2HmbcEZBoEcQycsaJjXLZ1MTnMF6w5WQJFn4bnkmUta28oEZiEayxvJmvkiq5SR9H",
  "key13": "4rDh4zrBhUMwo7FVrLXZTUjNuuC2o6g26tohgDTh4uGNdvPPnTAduFo5RwAZf12VU8aHDw9CSWLvRX1FodfYY5aq",
  "key14": "5MrvUPvZNYfHiz24Xyy3RjBAbtSTwtoEZrUUmjqSXtkTsgAnR4W5o8AGLKvaivLdCtWYUww38HEHC2qopAdZLoSp",
  "key15": "37gw7H9WSucSDZeZbFGiKPP7yTtKXLY5f1EPScKCEwwDowmWudGvCB8ck2KSivxjGaBUDhtZ4f4i5pHFyPTShxZ3",
  "key16": "4TCwp29rAkCsT1QbbLq4vfcTkePkc6A8BDANZPdGDNdK2oGpDiAYMGVDLnc2z1YGi1dDD3i4Ja8UBUjsqJqNEp7Z",
  "key17": "4hoBDSKWxqUefF3eDtKAyWVUBuuZvA9MADvdRCHKoXAGnrouqP2PuUNoPoYAEVVMoregR8e3smDcZZsWYsVW9MTH",
  "key18": "5p5UHWWK9ffJczWH43D6ziGfQnQXaFWF4aL3sYE26g39A97hM2GbdjqevHusWxDPLRhC2jcsvkCLB6gBXZJtpCqZ",
  "key19": "5Gn8dHg3MsKbNrUSGXa8n17WKvzv3pfeKSjYmtXikyEeB3KhaW5V7jK3ftgmfWK5B6a9A2k1UULu6XtC8qN5TZRB",
  "key20": "3CY4pKCrry8ujB4KVR1JDiAX1yRYuXUeiEq64nZTa8kBEX7hP4JruA7pNQPLjYVxmpHNKqz8tUYrXAiqphddHUi7",
  "key21": "HzWCPS9r9pihQT3G1jFgnctHKBGwLRcTmWKNE9h5NNZjHCGgE9ketSXR2cRM4pCJN9cSpYfNVXGsXTyEYLeD5VZ",
  "key22": "5B34omKgxteDeCgCEiiFcTbkNHgGZDRZQ5LE5QqTDbtNKNqSE55yxquiXLY8VAL91U9RnNyDjVKGGt3cHBAaoZVw",
  "key23": "2f4hwoajd2CZWmS5o3bgGm18KzaS2E1vKb1PU1dyhaD2JFMxPuhRiSmAzme7VUEsVJHUkVRgmzh9rRMi5mmwrzxd",
  "key24": "2B1vjEPcFqJVRAWbgic1E5MPH3ZuC5UJMCsXorn7pyZ23Zgx6RWFoLnw3uFe8jLz26p2X1c28J3NGDfqosyvsY7i",
  "key25": "5G2rqZFs5GxNgnwx3nTxYZBv7bwBTfrkmxEqqK5XpgyjqXkkW6k6aHyLBDDCiMbFbpv42vQy1NrMYxE29Rnnovzy",
  "key26": "HoBFFgnZy6zEoLxK23AxX6W1V9AGuMFMuedvKqgTGQzxUiFENze1whsxyP65tFgVUqboGeP5ZskDaxZiuNympjW",
  "key27": "2gzJtyAA5FeEWqcTdZXJgho4ZXkEu1e9ijVBxecFrYbYH7faRLaxP2JKwTZ7w66kV5fC8E14fD61LkaE6kJyyMPq",
  "key28": "2srUgScaNciQD19tDWYaKGVzd8sZCSB45vc46bS9YMPQQsiPrxkXfdkVwxCYbB5ayMUZtZpBh7V2u1PDiGk8uBKD",
  "key29": "3KwppveuGbAqQrDTZuqah7VMiaumMx35R9smqGbn7xmk9uMbk9BGEhhkRziccemJgZie7T2h3qgNfueoaUW9JuAp",
  "key30": "CkQPed4YKgvypoJJFzN4tfT1tDFCjgpfsFfuqS2UwYd6aiLdtkZ5hYe4mpqL9bqKQ2MbzsfJ1JWCqNvAEbRBBti",
  "key31": "2T22vojkxsSa4acnhXFWs17drtKaSH4JE5HHfwrEfvxpKJduavHWbaaPgSGL2L49GiF62QxVoiSwKf94GXBQMwJN",
  "key32": "k9dpxTsM9JuNNCfKpsM64NbYSLSxvndC3MzmecBPyhUmaquUwZxYaoRekKFQJKmsv1o9RidhitLWP825MbkV97F"
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
