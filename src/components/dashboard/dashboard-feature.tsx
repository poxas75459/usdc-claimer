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
    "PsT3ZCUgWi7NfmrrPUs3hDr4wiQRxJPTSRiPafY4bFnLBGoXMgEEwbS4wL3TKdksPVT6aYUPhFtHgq6pJCAkuG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M1eb4k1vVdWTbCphLAWhb8BtsLTcSwBHMAv7bpy3AMKYRVJkaTgccE5dJiUqZhv82xkzuC8jKqyZ6EzUsA55MpM",
  "key1": "3SQWrBSdZvZsAuLxFo3ycrAksXvVNUWdVQ34N8mr6GZW6Hvt1BGUg4zn1dX4Ekv1JY892uw3UpYMYtuzbhqPBVwf",
  "key2": "32caNs6fUrbfeKp1MMEMC9VmHFHF9zr1Cq8YfQheAXkfG6VXMvD3EMXqSLvpWEoWVpVR93zcbiLqNpEh8NC3mcRA",
  "key3": "35K4oJmEPSrqgUXVDAj7TrxmUbZixQPHmjUDGQJt1oXhpvGNJQUxvNUzBMcMGKgBqRa8EommkZjMuJyDVpd4tomb",
  "key4": "2WyLK7RNpvCreNh8UHdfBfAuWiUiRmkgqqCLoFdRFgJn7H6PDrKG9wNA3d5jqAUFJ9aZYCppaLgcxYfLm4ypG6yU",
  "key5": "3ryQFsKGYqSjGpc1EuZuiEazAoA364hH1RGBVbDywm9e4J7TGf7rEPNW1aCDMFd9Uovuszx61hQQvgJbkAq3Whg5",
  "key6": "23HfpDzRFRmvi5ZfG8A466F593zKu58QeyTNC71jU4ijcjq7p74R4z8eVA5VPZ5HtTWRgQ3DznYFmFwFLGPuQrmz",
  "key7": "5Jn7Q1U7MHYJEhinDWKkvRWx4EnLeBs164mE2WhUTb1FGW8SYERYPRi5J7jMh8vnSYzCjSiKP4NE2rcdBGuSULjP",
  "key8": "3FAKfoeznSrghKRRgg1wGtdYL21ffkBoqEtuMtxyTzaJ5ZAYk3nkf7UWdGWCRyTaUxhLdEsyCSHQTt9F1gvb1NMX",
  "key9": "3VU6u67eDXbNEbrbsc5fGVKq2eqU4FBWHjahmfxHkDeVBBYT1H16NDQQWYPteQamNsUighW5YxLuTCciSQxkxooB",
  "key10": "2ovpsZP7RhDmyphKYN1J4XERSdxTgzsxVLVE6pMQHqBMMhpzKB7gmDikj96DXht1JNdyUzhuJF4ktPzKVoXnBwMp",
  "key11": "5MeWGDYEi44ztmJ67CjJTkZX6i6ES8LG1ubFHyLWZPnNbyu9QxE2g6shoZ5uuo2C2QGvkfJiroipZPDixkwdgH9c",
  "key12": "8hqPbsaN493zTaL6o7X5sFRdgvdEPxZo4Nc8v7HXpsbybEyxdFfRCs8NukDJbdRMXDKL6YgwoXUYJCY3WyJ7qd5",
  "key13": "2gnBGVwQQNAe3iZw6Wg2nhH73BpTMGTpWbcBZw1qGvntVEgbJsFBe3p6gghMEUTTD3qtTdX2ioKkRFvRPTWvUZ9z",
  "key14": "3uZVXiqR29GZWiMAAYLLCP63AXtaazfQMepGFeAWR1nGogrpwR3YP6Vu7LUg2MBoHs1grudn35uzRmVbVkhtn7Fc",
  "key15": "2pGSMqMdBT98srkyYLT2dLBpPohfQDKpwhpLfDLU95wMv57CKcQdXaf3aEyXP6ARiyPRBYp9JXsSpXYyvLU78Fva",
  "key16": "3b2pi8MBYoGmMyYXASyCqy6EmYVsbf3eUxnLC1Mn2HgHqLE2Zfm3ZDgYD62d5hzHDYcnGqDdJGmqFVtBQmDZ7e59",
  "key17": "kszh221QMV7Lvp3m5DrP49Gw8mSruxmMDUzmDkhptN2Qh3Uwc8hVuJ79hhgy8KWSyiN5LjeURJWk19yZfCdjwWH",
  "key18": "5Q6cVFb7UNieDpchfHCCM7RkZ1HBd5YV9sDFLYmkDjcJdvFbN4TCNBzmYyYt7V969aLS7JBn97biiTF2vGW11iJq",
  "key19": "57myebiTw1Ls3W8SwN847U8Q2MXfkTEM72fmtJzNJtCRpguTd9Mo1J7CMnbLiNbCboL6gvTxW7gKmTqTQCRTogmx",
  "key20": "LNbv37LiWwxdubgGrH1eMEo4FwtzvwdTWTnQCbU5XFHDQoVbKQBtQ58A2aYfNyGE78LcAHv8qq7hJ9SYsx78dP3",
  "key21": "5fH9EbQCaypJeK4oKQL9TuM5T7KhnrppcV3UcFf88EVVSpYs8w2Pt8msEjb4mbFv9f3peYzSddUx2sC7Fv6ARctY",
  "key22": "2iUgFgrhgGrwd3h9unsHA8eiV5aGt9ZZxvoH87ebRJL5pq6K6Hu2y93UpzVZh3FykU77pFKLukiVE3bEL6QS4dMF",
  "key23": "2gbFSm5bhxfXbPFmR6NuJu1CouqkzDWThxPssTL41wktypxXi91mH9AqrbQ4C8sBoxC1vMx7TQRhaPbK5pzfgm2y",
  "key24": "4gSFEWg9vg8G9St2JaaP5XqkVsJqjsPgdGmszN6RWDHdZTroz76ew71YL7prT16kKYqp142AhHysgcGzs6fy6jfe",
  "key25": "37PJcyo77r6nvfH93ZFG8x8X2mtkUaz3fc2qhKxmVXMx1smd57UuYBitUxufvPJuusWr1WhBWpDh6HUjJBovbmGh",
  "key26": "3oMrmdnwYHnzcC5bPXK3BTpEic9ppHBofVWFargHVKpCxdise75wRGjfyg2P18JRxRky78fs7EWudCLNA6ythnqc",
  "key27": "2oL7vPzDqPUjJoHvsDJzhwJ2xGqCEXVA49Bf13d3pZzia2ssBLfe9FuabwAntRi2Nxt56dXA3BtuTecdVE1Lswj3"
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
