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
    "5Yy1i3VEUrgMy9UQnfJvYwgbXabxhDNtsER5BHejYPJxWaTCwC5vqoHFcZk2cFkEP8ZqaMYbpvivrPNrtM1571df"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UsshfUkHVg7h8ixFXHRJwyCQA1TDrZRwLHRpXukYEWU1b22fEnvw3j2SRFpvyhiBNqYHf4GM7jgAoiQa52SZK4f",
  "key1": "3YQz6XnuvDmSfWeHSgEeFcA1JJoYEwFk8MYTYAyGzUNaMrPYyABbT9W83535MXfim7jLbX3h9brD64cYH5XiY3Fu",
  "key2": "5tiF4NyWUjmkHbkRhwPxRQxWhSRyCnRLAgicHdgeyJiVZZFndpZa7mF43XQT8A2anQoiSUXdwobBtyYXPSCRunWV",
  "key3": "3qUa3S2JrJadBHG1JjMig5kT2BuCxcnB5Pe7zFVuhxN6MUh2ANBdDNgTqkxpPTdzSfDTWdAVvbVbqnbhhFkydYFj",
  "key4": "3Y4fWEiSkNdQ7iyGX1vH1mp6bo1NxWXncuJ2ovyF8sk2EdPYApF7PocVkqdYQARhg3LjyQfqVrqTWuaYsnU5dCAD",
  "key5": "2nu6S2h82XiYhZdbKnRqYj8wizn4fv5gC83DjPdeDAyDK9D7vh3WY57uCFHgrxou2qAyMucqF34FN5ftEjJgvms1",
  "key6": "2KsmXW9P8Akn8bH6PVru1u664f6MEZxVMqvVwp7xDdqsYpTbgHP3gx8b7W4N8ECW7A94ebUx33iWaXs5oQmSjp3U",
  "key7": "3tbpHScDtpwwHXJPreVbB38eGRS5exxPqjmG7j6Kki7MBPXTsbDVWqRBk4ZFbnzvwvJw2iixnPTBL66Fruq6bgx5",
  "key8": "2CdyEaTcARYgsyw8wgVygdKv3tYaxbccMKg6UyN2N6NoygFv5QYvhyLpSLwHj4vUgNCn11E5pzjHnm6v1jRktVkp",
  "key9": "33Sde8VYPrf5EDj5b4QxoknhHk7aY5U4weH8nLLNihjJWMeQwMUMYaisegxugnmRSVFZeTywXNNFe3r67vK2y4Bu",
  "key10": "T3jWqwv3ZnAT9h4gCM3dHtidpFnhmSZU36QaYm1ov1BH6HLUHDUaZiwqD1Sy5po2StE7jgyEizmRin2FbysbsGA",
  "key11": "4XYvfGB22rLrmufmyzii5DxwBC5xDgCnnJNW5gtSGfpWkbwU5Ke1AkbqHpSSqvnA1k3Q2UhnURz7nBLiswLusNTV",
  "key12": "4XQ87kG6Bu1tSDaA2SKsmQxLsdcqB4fZHzCDmUfgWaN7Jtf8hLAHxzRXM9XqJaKCw7snFC9GU5iwhs5fhQDFDRG3",
  "key13": "yDYT8wmZAeegwummPk7pWb1FjBkUkggL57vH3NLeEcFxY92MJwC3jXc7zqcHT3bSpXP9xnFARYFwS1tYLHarhRJ",
  "key14": "58rivresaS8yVQHLaD43g4n7gFnxvwRXuBENzL6FAMtqfLL2xpPKA95s2A5Kt8WAMnRP2ZUA6ssbRvtC8Jg42q3M",
  "key15": "4z6C2yLv4DNFXxWkD9GDd4bTXHu8EkFhm9qBgGWMT5NQkatHLp4vqkyAUnS27WhAkcZasNMSCN95sgVhtMXU6riS",
  "key16": "4DvZ8ZMTo8usrphx32JCQCaEHQTbrjvUK9Rir3shB1vxo2ZRaxrtfoX9zGmZGPkPa7utxhnpTaB6tiwQ3L2DvLKF",
  "key17": "5DT1zRwntzwH5q9TPFE4rfKtVem2HDYWVp5hTxCCvotHGCcuBmdAeG7BahxMJVKfuyqJyj8X9vvbGFcGoJHsXn8C",
  "key18": "PbW5SuptSC2YEPsFRu1hv2SDMCZSeG4wgPoWzeJrvibMcnv1vPQ9ikTM3zbpDVt38Q5m1JXJxC7GsSrHYge5bhu",
  "key19": "3DSZJp8kh7rCdSmj3jXkNqXHPrw7uJm7BM5TJiQFiwUxx5zzFhiNv8bkgn1WwMABVYTPWe5tGyDhfqSsTkTafUW9",
  "key20": "2cgBHoKpyMVCZ95uvcABpMJsbzdoF5UHYveFedBZPTX91tDYbMsqP4PcgxbMjEgBRy1QA8JYRW4CqQL3JhmYfXDP",
  "key21": "5BZnKJ5w7Trzm9FE1uQFqrnFYnfsAxrMGkrE4ULecsLdnQVx6rDKU9u8DHiT9i9ktjfUycuQxq1t9y9a2CMjjYVr",
  "key22": "kzKPfTLfNThBx5ZkjdUytcTrRPnXgf8t1kcAFeb1WKa3K4q8scP5KJjkWV7F23Vwke51YKyTUiUcq5ANUva18LL",
  "key23": "4nHavAis17N38uTzdBqhVfmNNwsZRUbpy4TWBhJthzfJBRLWQg8ccCJDKdg6nWLNKGfnu28CDSRdkBt3uU6nahaD",
  "key24": "46dn4mDBSCxjYo2EsFVcAYQQwjUQKAtAh5RCsi3oXSwq27a4Mib32Z1ge4PwMDMmhUTLr53yzXuEqQtTzS7oznhk",
  "key25": "4rjnQT1VTBAK8CrfJM7PaMV2e4EDi3fjdVBXLZbCSu6kH46VDy7VoUB9itFKCmDhF65FMqMCWFj25Qb7zBAjurRD",
  "key26": "65CwJuuipWpzVqhMeDDHNC6jCogPAKb9QtUZc8R9hUHYmt1yEEaaxQCajzZRaW5KmU5g6MnQuRtnvhYpDt9BzGUm",
  "key27": "32HoVpdvjxPowiKgBrppw4VvedLtnqt6gjhuqF8k2yYuYxbEkRLsmFCrPT6aJeoxCJJwzM9Eo5zahgYfF991QvQM",
  "key28": "2zLrj6DVJAxYVkyqsCBi4qWpWkCFt4UqFPNqnB5tBXofu5V3fEnSjTYbpPQtu39p13fVjiNoRc9mGcBkTZSYsbxJ",
  "key29": "4b2Eg1LWSy6Ga2tVn67tkv5QHj9U8DTy6n9fWSvC9MuTLJSrwN8kNWLV7Wdgbrp8FfsJRLgH5BzBgfStGy16d5DT",
  "key30": "5MtQPyS3YPv9516m4jX6sm8vGZPX6eopohMsDcWVZ5E2i62J4hD598wBf6CZNT1H2bt4gY5uMDxyZAM9SnCnQ4Dj",
  "key31": "5yZJ8c6Py6rt9nY3DiG4uGmdroq8T7p55h8eHvh4x5VxU7AXL5ShhqJWQeRJ7UrBzDCpbU6SbqnTa3BYty62aUki",
  "key32": "3mJUTBJccR7Hcm3avPWnWM42RTEEKCZtQZTwgnLfpXrZYcs6Zde5e9ybZvGFX1hGZnYjQdVSDGykL9EjXXtovNT1",
  "key33": "5tGQfjeZ3XYP87vjZqr9ehq4RqnN45Z5uQxruUtV7Xn3qqErP6K7vwfHpyd2UzudmYkCivbHrrLptEYpaGQPrnmm",
  "key34": "2DxTPY52SharWxhaEeFVxJhxBYD4vTfGzb3F11aV96kEZTGYT3EAnoBdN2wEdRkgX7btpjVQDFtFMEpBvNFzwQNW",
  "key35": "YuUKgT4h7RegZaGXBrxDeR3JhP9Y53xwvv76W4T9r1ovdUaqqJSmRPMcYrxsFqxHb7XvFqRbzQpPMbRUouzwV4G",
  "key36": "4PLtvWYEapWqMCCmR7rdaEH8cmcWjtvxpHDa97LokdyybgqbdeziX7xMHeeWHDwwRHadNpFeWwDjdaCgvGad2cWn",
  "key37": "YGSy2DF1h57WpvX26Qre2Bxuz71c1UirCNG52Shmx2EbmwHoy1k9x4pJFdEaUom6pGpX6WgMf2sRwmFH1fN4bFG",
  "key38": "4kYuU3P9acCDUew6qZPxF4nc87zRqRPAXmDrCftxFsc4WqkNHyGmb4eVZ1ibcL2TbRW9dsy5gkPsvCFSqXiTJQ2f",
  "key39": "4E6eeFnk9TmzjHTKLnE9okWhpJSkVCu8Pvvfo657KeChVXJCyWkvF5FLTLTsUffYYYJRsT9VNoD7FG4D99ETqomS"
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
