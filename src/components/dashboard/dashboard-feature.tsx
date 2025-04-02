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
    "4ZHgkcLcU3YPy95zhL5Ln7W5M6MaUp86rGiXf2gSfVrdh13ESaoutFNcGhBkyFmGvSRLaGWR5Tqm6TiMC9dxuu9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zUznwxwNHKWE1brf5E9QwtBnwxf1mJPB6G1ztuntqqU856HyMYAZTLY3xZSCC3GFuW9h16B8jBsk6TjMsebRZM4",
  "key1": "2waKDnqxjfKsDG5yJ4DaV9X6Jiof3543efMwVD5nrkXMQacpg6ETMx19XSTcYUUxgS5CqdwhbnijGoEQfzXoYre5",
  "key2": "gTWSriTkH5UKiDYeTCTXMT2e9mqsJJgyHAXtWLFoUi6rLyduiR89SudgfC8Z9YtDQDXcnbsJ4UyWugNmHJXepzB",
  "key3": "5j38RiUBjJMhmzJGxQnGX3hR6uJsHcvbno71sewaWFeGDyzFxkHzJ7ByDaP24xzbhu7op9MSGQXa1iSr7F1YGrYp",
  "key4": "5qJzEM3NhhQSKr9AuYr6CVq5nxxwbdXH428sPHRWVB935ZrZquhc3iwbpa6DodNXT93w5oKCdnT4f4jsuxGwBJk1",
  "key5": "2EnJDj4k1TS3DkXowonHmsiVwKPJfm2DpPbPefscAgRjFfYu6KuGK4FkZA52zUfKmpYmrtuKY3fbABCAETpEbhEF",
  "key6": "eMq8YzKWccecPjhXz8xU2Kvrfx9FM5CJUyHKJ162MtXen4wY1rRJNUHYAVHFfa9H4xkEQ8d2gAXeiXPLuLFyRyM",
  "key7": "4ALKNHTVXrtMNbiL56FXehcF2BroJ8wFgNbkqBDaadCjvABQ2aeBEGqSe1V4vFvmiQtTXxxmB6tGNWM3W1z5H24T",
  "key8": "282HM55Kn4fKmeZbusuTge3yY1TfzddfQucGHQoDSXUkHPLa7L3p9oURdXuNpN24KjAiPfVo5paYHddN9i1hCxrk",
  "key9": "7EvTra3XT2qAMbxkNhfp6Lt6sdJzygRsSb9BX1dzg2DwyVv4jwj2huF77244EqtwrNJ6tUJp89mPbUgHXsxTmuM",
  "key10": "36LCZ4zmdJuHksrtnjpZR7V4edbNrcyWTGU9LN8K2G8bgKm6gNMS4ywZzEhSi4Pki63dwoE9T9CqdsvDHu2pLdEv",
  "key11": "3T1VDMeq9it7iM6hyFQPnEiZw6ogkzrTom52ccWgbtwjY7weN5NEQSZXnJ1EQtSyNHBi8dMAAwhehNjhzvwVcbVr",
  "key12": "5fJiZshzF8a6kFBkQzUkmjENmrfXDAp9Wt56FbDn3L7vANxHUV9nxfmN8GjCZx8BRncHVAsSykrJSMYG9VTCbdVx",
  "key13": "3vaH1TUzM6B3gUR5ZLDjzdqdpd9hV8Pw1oB1mbAkPUbzdt99bdwdiNXEpuFzVffVUsjDKF1qJ3Da3Pctj6YmRJGU",
  "key14": "5RXotBef5yfJVMVYR9NSYboXptVeVXcBEk87jyTmkuro5PCvk2xxdgFTsHQ4hM7wMuW1mxij94rcF9asPxwXt9c9",
  "key15": "5bPqL9ZoR7NeP1cjoDigB9JFS28Et6TYaKCzEtq9BWcBKP8ii4AE9onAnUEsC21ufU316u8RBMWpWCssEU2kCfsp",
  "key16": "3KNqv15e9C34hVLGNKXa3aPvNjheZVaRVPnEcDtPzSz36qkQkZnLW6uYTMpdn1vAca8xiw7hGHqn5H1g1BKa3X2e",
  "key17": "2LcKupocF3AFPYzjFnq36BhuApwV1LPjHMkg5r7b3rDysW3iCHfAYe13mw44WJQj98m1hPcmpS5F396YhEvY91wd",
  "key18": "3ryT8durvs9CEkw6GFnvhW87NVtLdnvv8Uypkokp1dnGWhAbdNg2gJFQM5rjUw4PdzDfk45iLbgrBo1sfXEREwiR",
  "key19": "44LNL1RCNGvYSambtwsG5q9pZ5khASHNW8GBDevhe6Jz9gifrCYWV4WFrE5oph9bnZqCXnCFEjN5wHhErCNGS9Xx",
  "key20": "4gC3A4kHYenZP8TxNLbsRowQyBzFM5JsGvTFXB6MmKryhQBENDL8URUnqyxVGSmk1HzyWxVWx6yCrCAASzmMRmMs",
  "key21": "5tzbBqNZYyrJVEqHTVNkKJib34vQtPTrL3kYaK9ziPzA1Dei8q7RLoNVRRk4mJTiS8p5E4AigrE5DvhBGHC1cpVz",
  "key22": "652AQAPwYGWGqRTLd42XiHwFkkiStjqt2gbBqzU7gwUeJWWUKpnwJ1SWxZ7n5Y2na73Ls4YqTeTd1PoSiuF1cnDm",
  "key23": "5zRRTUE8TBFCebs7NrKysfxdip51uo5ifNwoLaZB9P7iXdwhRxWuoBdwAXhLvt5mvYvRZgW9UkNEG2gbDdH6Ct2A",
  "key24": "3HVxsiwF4E4H7Kd3J5n7QC79KvusVjdUhAW5XfEWRemeXWSQzTeGrZwTuYHBUv8SyJMzDqiJvTxnnKoQn5BWtKfC",
  "key25": "3k8WHjFmDHxRwGT6MbLy1Uf5tVyvRpV5KzdaNtsZ9UySKjtxSbdL2P7hA1dYMkXh298MZ3kxiQCvLCR6P6bqKXxe",
  "key26": "47jirdX1ofiaMrN1Ti2dRvBAFWvQ96YgZ6wDGn1Q8Xv1jQhHoYrwK1HGtMdn8hoa7cyWnGNHyzVb2cSg5oVvqZM4",
  "key27": "yGYR1Vhv6TrHCM9h9tHwiGefXmoZjd3YRUjRN6hAxbVHr2kpEfkt4ReqN9XhtEmh88gZRWwDgJkdhLjXojwJhyh",
  "key28": "5ED9RMV2UEoHy4B2g8coVNssg6eafYheXT3gFPanKpZMyPwjFcQQaV3gmoYj91vdA4ZsfeNNPzR6WMfVsnPidR2e",
  "key29": "BbPRMayzYKe81W9YP2vDZCWkhE8AthpjJPyAX5xo27XrtnqsnntquSuZGET64V55VkmtVgVgz9U3EJ5KeQ3eGjv",
  "key30": "54GxZ4e3oFXswFoSg6ADrnPKe9QDqwfa5Pfjoz1PLJa1JsGmRA2yg1bwhy1xwZidRHHJmJASm3VFEP1d8BRmnTii",
  "key31": "3hpEE61F2Nq8LBRQW8QvEKL43D4VyghnDW6gFxZBvZ4mnRMbwy8WjeX1sfWsDR4KsSCrSFJxsj9A5Foi2xuRYp2a",
  "key32": "5Upw1C78SWpsg5o8h5oeYyx7yDK3yotsCC15o9bGwAMbjGc6UdN44dFSt8ndPBTwA9R8z5bk8T7RY1wk4YjHFEFz",
  "key33": "3MDHwyWCYDnxCCRe2o3xndqAAnZmyB6jRnmeYKyDr3kavgoHbG5vchTayjYWZMccjSVKjDWA2RL7B1htCRUXfCKa",
  "key34": "5oDeKBB9xDAj4GHBWdbgHqzDXCni54cztMvyQJbi9Aj2o4ppzVAAcHyynHadZWcHJ5HiwFQYkSHurWPwiQzy9feG",
  "key35": "2b4P658TtzwWZnG7b9vFzWAuwSzNtqdGabrp2YWppRgHJ9qxDwQiXDBXLWesXGyvBkEebYA3BCNYreffkHo62MeY",
  "key36": "5Q6LXdTZx7owWaBuhUgCpszA7GsCn9jgyaboFAL8xU9uTb6S7mkizi48UQfdZvDcLwL31nTVQWzXUuf67P1j5DvD"
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
