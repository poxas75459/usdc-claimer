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
    "2bvsh45aSFy3Ww3UrQGHhcGFCsgLRi8GGeBVQwSCkRTDAPs6Rmfcee6WTos4yHdxmnRwQjKD5NjBL8sepPkfX6Pi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63t5GDErDU5S4znGF57cztLTE7osAofEuCcNH1poHZh3nSQ5ngh2zmYpHZZ62jCCp9aUJbHqwnkpssgamjiGHPzN",
  "key1": "56Ph8WFaksTz8BfvhWZrSfuN8Btq55vt1VrpPvUtrw9Xnrx9qFvUJYjgHcy5A4gYQrpKE2ue5DU57VbQWRU7WNoQ",
  "key2": "58yCtCicPRykkfE3dRYSCHLyZVfDutFihgp7wdqaZVpBwc5JMKv5EmQLNs3kQ89A5avUEvURJbWme3rfGLfbbiLA",
  "key3": "3zWFhaJxxrtidpXCcVpn3iMzBpKBrAcVx4devuoZcSJrJLLaBw19VpbDSNaBLVVTi9iaYFLPzkFc6WJ8HMJqf7DJ",
  "key4": "2kvSfDJdwSXmR6qQrcWh5yTVeWmrz2vvc9K41XDNNCeJjRu5dgNvfUw9ThvyJNTrKynLr4dnxTrz8QD9jMnat5RP",
  "key5": "2oS42fjARWiPSjkgFufUavUxBAKPimBFQVZudpjZ8KM7JqiAJoQ4DqSPiJiBtE2Pj22p7yqhtvUvHaRrmQ5sea1V",
  "key6": "3G2QMCxv8d3fhfW4CAnZPNtNWceZyr9An1tytMdU8aypAqf6HM7YAxggYF3NEXjg6AgPaeCb5SczCpe2MfRaJQbC",
  "key7": "2pPcUhgQCCwmyRjZc5Ap5rbA4pLTd6yAZTFfsBPSnDy92jtkxfGaeWDGmxLPhWckSKVjLTRGxmD5QkXU3xZDZoTx",
  "key8": "2N6rJepddJcHoAXjYcggFcB3yybX2xFaFGPdvKzELcCXCMkRExFmBh9VYwoyAy7G9xB7weG1t7Xza1UP6eYQz3WT",
  "key9": "57BZkLovn6qbY7NFnyVHD5PFMAAfEo1g99yytoP6XfXwKhrufVaQWfmm8ARHNuVwjViq7Q2eXmdRQV9uavdxQvJZ",
  "key10": "3wNzmUoE2db6xw4H7N8sb9EtpYGsuaXuWrujBkR7uH4PEjARjMNoC8ATYtpaEoKB6djX51d3GYdFkFkWSumbTbQj",
  "key11": "5RjVNjhsrwRYmWSCMp5z8jaZ7V1ZAhZqWVv6usQoNQ5yEmrkWoR6sBETBh11BBb1H5yAmS94E7nq6eh8j49TaXbJ",
  "key12": "2GPeapupdzgHygYom2WHrzZAVQkaQzJhEKVbnACwh9nV2968cBSnX1UMbwVicTSmrn1hV4pjdQ3gMLQZRxANzRLD",
  "key13": "5gK8KeuHDSQZNudRacyN5DWsMLCYQgb29JTjGxjxDaM7exVW62EQB6mHtjJhuTLqHU2gtFZ8R8gVocpoaYkWSMyu",
  "key14": "3FsdTiuXJXykoUA8xiGWFUpGeV8pG8mNunqsVbwEDHpjJvRnQkuBapPJhF8Ed17SjgdLxUSe2yG6QUZbATausUWC",
  "key15": "2qbWNrrtrrL2X6zbFykit3LvW9nQS7z7W9TPsA4zZJba9DxJMWAeXNaQEXTwFjpcEwVttD7eB4Jak2jyFFx5RHaj",
  "key16": "3y3f74nKAnH4hMjdEFBcZ9bj4EKkvNgnn4pa3ZAotMrcBUhb1enycdSXCMv1qNe9UoWY1yUguoVhv3Ux6NwT79eG",
  "key17": "2YtenpWk9tsSisYTSdBujSNAHy2p3GzPoxzqx7v8jvgRJbEq57tk9LUy9AEMcY77Z9WDyKsR3GmP9Qadk4SCfryi",
  "key18": "4w1ZHZY1y2Ag1Axh7gGAoCPiMjW3bEUakiextkets7gvujduaqekHcm6qCdj8iKjcVLv6WHhMbRmKwcmLqAHnws3",
  "key19": "AzcLnEp3Yi9PL2F2jtYm1d5e9qPesQ8QsvaxGKmRsJKZ6Cc1x6pP5D3YSRXVee2LsVzB4ouyRZeHJvSC5xGZnuh",
  "key20": "3Sf2Uo7fyrdZ2xxskSrB3w78AjfmncikeKcnqisKwWk7RNDURU94eKYreWgq4PmmVkFocMNHqDm19YbdUs2JaUyT",
  "key21": "43j1NWwCNwf3iAJQdUWsqfySRGMXP5hJu4xkN4og3QjDfQ5P417Zgioc3ZcD9PYZsixpU8JCQarAHAzmJvgQFXXu",
  "key22": "22hb52YgvsNjh3AocMJGX4BMDcCKokrVj7pFbF81YoXNYrJnXiszdPh4yezMS2FwyWyzEweqG2rMfTwGXA4TpRZF",
  "key23": "2GEaL29m9nMPy14BJiQBvkYMKKLSkSUFi9rbMRYstXh7TGeJWV4jQMw5DqekrTSqJ54zXASDNT8nasz42DdNFQS4",
  "key24": "2pvhYRiL18rN53FMazXm8FHAtFHwd56sf9XmQeroeWFj2fT2pC2BnBFzDBEbDxVLMqxKLT4doMnckAdb2WaKgLEc",
  "key25": "MnHvU52DK77FFZPzFgng4mfry3gfDQXA22TsRPP7XyPHFbP9eAN4LAnWuizXh8KaUgcPB9yZkUzu5VqwS13YA14",
  "key26": "3QoH6DKd7EMdWg5YFNfxHgBiAzVjcFxh8a14tcQZURPye9a38N6svmQLeCN3tvDTJRZRPq2gAobK3omvi1Cn2Hpj",
  "key27": "3mPC3jJi5mCj9HKPQTgAwfc5HMB3XS9ux4YMowPwW2DHSZFQ5MLzvssbtsF8qcQ5zpLNh76nnv8kXDrTRCBcTgce",
  "key28": "2byNxVR74RrnAp9ASpGys4LAVnN58PGEw6m2LuXzjkrCwGjNN8PG9x6gwa1faDSpEifxMcmssnQoXUmUpKXHqZ9S",
  "key29": "5jpTSo7kD8amnc59mADo4XecUbMMd3zjAW9wZnxZufgPzC2iYxVLp4EoUgMnCzM3cUNo3BaK6gEJWEXDpbtivCsw",
  "key30": "2jkhKGyH9uP1jZZQdY7JMxM5PwgV68zpK6FhXjtjfciyqyQViL4D6GDxMPcPqtu4F5rXzUuZZq9vybMhbZgQE1t9",
  "key31": "53AXUQchmHWZLD1RvgjSrpmSYAYnEaagJHEfqKwdTUjWkEwcTba7RrFJ7qAoo1aw46TvcjZ75GnpNCoG8jeYc4Gc",
  "key32": "545nSesE9QjFaa94ookf6kQjN1G8q5xi15KNaMBXKVb6zK9hGcjCCu75cxhtVkMb46jwaDvJ29TdkoSZGJPJFgGu",
  "key33": "3eo3YYpupYUFhEeRNom3ADXx3BzJpxigvP1nM79v5CvJQGHS23D3HGw8N1aXGuD3sXuN8GizrLJ3fwRXKqusiX8z",
  "key34": "UbEUXWUDWKw9wkCbEfJeMVdKGXvS79mUa5nX2TAkmn9BtAaqjS7axxASnHyz1iCjyP8MFw9da3K6d7iqCkH16Ye",
  "key35": "DhbE92tZZGc9XctwBVssYcuawpVjMxeJEzBu4LPwKADqNcbkcF6jvX9C2QBu6ssj3SW1ziCbbsw7pqkzywif94i",
  "key36": "2bk4YNnqohZqk1S2g973xcBACdHUwj5qsFj7Bz1so6AAAuNWMRkxYr3JYZTNcCuSYpAd7KiN6HhUEn4AKxzrHMbj",
  "key37": "3WNWNpsfx7d1EVKBZu5NPE9mav7raG3HqYLA6mEEenDJVoLCG3pL3SdsZ99EKHK6uVQ3PmACq2R17aYrJkmnUKRR",
  "key38": "53kMBnjiJsiBaNrdwLzpPtbpHninr46byTo14NECER9PwZP7uxCEGttnzAwyK6e1mUH1vHyi2nkVDoFtCSnLoMca",
  "key39": "4KwZ8HibdJXvJ7mTnjArWmrbHvLa4ifWzGZLEvbbbJQvDxfuwfgFwSvb5tzyimv2ccWcZm5xM1WmNSoHFRh3JcTj",
  "key40": "5yg6PfUPFxCLmqE7ypjQ9qqhgXDCV7WsDg9dEnasegdetpWp7DJ61ZPAEejCXRecptTizdqTHdpp2uDfiP3R2W9b",
  "key41": "2D1Ga2RLgY5CuK6QsBAmKra7oVXevhdytcgBBYtZ4h4WnTPitjy4aJfTRgiWVH4d8HSbYKKJE41rSzDbp5odXe99",
  "key42": "42pXXgJC4WiJFUkTwu1sqJn3wiiHxDs4YcdRUJBDc7nBmsxukPLaS29TWeT8fibyk8CvUbDGmbepcAQaNoxLote2",
  "key43": "h58FysQJSPjgk6KLQSHWiaZJuhW2c4eMeNZAsnBL7qEFwaRmNcuSXRpP5to2mvKHmEbDa8F8ESdscNw9tDYbBYq"
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
