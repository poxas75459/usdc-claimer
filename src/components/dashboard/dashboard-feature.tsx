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
    "4sGZfG3nmNJHhzpxRcfFwpD9ZzGX95s2RdCfb78vN5TxJ5yJme9G1r5K5HvVFswQe6AQjYxor55qsGaykAtNx6rP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "493WpMbGABr9mZLRc5z7ppkYpmZer2tkMSictPERbcLQugQ9BiWe5PxaRKD4uja8kHLJ8LAm8a3y3PozBsC2Gja9",
  "key1": "21aDjvG7VqbceArVNFKr5zayausf4vURojVc4ppC2xmHwzwYx4ioFDgFJ3sTi4mUwM1ZXn6S6cBaZx6sPbyh32mN",
  "key2": "3q73hFL6jF2r3jXnmiLBCsy1fMjvEQqZm2tVJtNiJbcR8xCzqFCajgwAhKBEFbkUbdV4aBACXj6U4hxCmjuE5tZL",
  "key3": "2VPrUfogYmXdcFJWjECESyiP8zUpzqecmtmCEnAMi4D6Ydj8nkPWRPUvLazZ8MzmHigodr6gd1x5hwzsh6ip3aeQ",
  "key4": "2JkJhpky1gYXFAqTBYUfXek5b4LcMKX71ZroTcCVifx1W8AMfVtKHjVwghXQZ2z3qBqwTxaLdrH4wdAZssZSexC2",
  "key5": "4mcXggqM4rnoaQNz3PNZmD359ovrX9oe6n2Aywn2TS1jj9QbtsSqHpcX82ovr6oyQidjiYzsPPvU12ZbcZ9U1BuN",
  "key6": "3vB77t1F3Nzjds4PK712Q97yHxxDhP9D4whYZasV4BcAPT9P6Q7utuvP8gKcNzNDzZbYZWTD8h1gFdYEToxwdLKs",
  "key7": "36wozAQ3dPn2cW6y4ARyhd4BG9KpNT4eWaQNAfVgVB9Nb6Zzd7pxWrUQQ8fXtogYQrnk8bzrqnRuMmrrHdGx46Ut",
  "key8": "5XdKLxesAo2GjWpcK7r13pNp684qjzz3csF99XmaTp9sAPYcM24wvyH1S7swxh8wqgkQPFD8CJLZTnet6pA8AKUz",
  "key9": "3g9g658nEJSpZ1An6QyLYv8HoC4VmGpnQ1gznESPxRxuLvxPxMu9rDUVfHNYTDcnxKjb7YvjgudedtGm5aG9PS18",
  "key10": "2TtVhztXW98WsQLaT1zsRyTm4awTHf4QsycTBrP3zFna8LJi22rzW955zDP7u5Y5jkq3av9vJCHRDpQea9JdQEhL",
  "key11": "3rvJ1931m8MDm2JdFRzKad19GJsdeu8ch3GALm25Z5sZwWPMBUV81Sh2UuNKdSKgSgisaiKx66Pn67Ng4MrDU4ev",
  "key12": "SDWxfCyTkvCJquQkVj3XqMwVKMmcXwk2KaF1jhbacVtgsa5A6XsNy7ba7PsUoQbWLbJy7JT8t3CC6D9A9xMenVU",
  "key13": "4bga6pKzvcQXunXJXJRNHKAdr7D9Vk8hGkz6z1WP2t65PXwh5CrkWBvrtah8gYBmitbAGnhpJfUirx32hs5GCD39",
  "key14": "nNRzxPrsta35DnVt8ENHCoMw7LiMuCAT3VsEGQSE22eCtwGJH786ZPsVXdtZAvYAF9uck5t9oBK2JZqnoQBy8bo",
  "key15": "66nSZbtX1MLbiTGB9X6uo2jr9Xih6ny9vQUj3XLTav1nuhBJeoXZAcohhoztBCJjQ4aFeqYctDsNG2mi2xkXaqZJ",
  "key16": "67nV4QHhsavMQeR6kPLagmGvmfmg6DCr7SUCmUewD7X2zhKm4v6LpvcFbFyJGJkBwrUWaA5C2D8PKgDKycFYt5dp",
  "key17": "23LoPmxNEh99KA7hkbqATwNtYg1NK5pEz4RmrJQ7QQBVKXe5YyGE3Vp9sk73LJ1MHjST4xcCeiJm4akDsGDdZLD9",
  "key18": "2HaYHtowDVarjFjoEK2Hp18HpJ9sARwCuehYS3y6LKuEbhMeYKKgGNMcWZvmMMGmRs2ajDKBLVeV3eK7FwVnHS9T",
  "key19": "3ghsHw8WEthjBvhYAqKVknT1jvRJ8vDur88CQEYWUKL66ZZbBJuric3XVDvEFTbmdBTgFyhSgUeTn1mtDwsrnYiu",
  "key20": "2ndEhQJAhVD1AJEDtcxgm2xWjt7n5Lmdm5df5gbJM4SSNMsjuDgjUi1sY17tdJU3Yf4rm44LoLSJeneYQp8ebnmo",
  "key21": "3iVPjCzFqsU6Z132E64NWAuyCNJ2Be1DHHPmo7pvSxcsi3DqZXohqkLUsn1fFHgba2gg6JXroMa54NDfJXc1aNDn",
  "key22": "41SH3NGxhWDccCsNqyWNbzKmr6jq6sS9PKWewdaA8aG9Wc5E9bK9YB9MHqUABkzqiTVY75kZQtKVWRj863kXMuXq",
  "key23": "2wKsEzuBbygMony29QxydEdHFsqTDbiWHtdw4jcwmgwXZfVUWyHsuk7g2XuZ8CMGoCHDjXgYxCpCcrjpXVuU3azJ",
  "key24": "4NKbUKY3n63nEsHA5a453AR2pf23uFnxaUb9z3FLJX7eFj22cXMaQLotfgmpgKZ8tN1uRtqyJwdLbv76pEpiW1xg",
  "key25": "1Lrjm2fJJaKgAoTYHq6Xz6SdcZyPfEALJu7chyZjtk35zc2rLiTua3v2tmZyoNeurcNxHNnMq51L8p8tTPgHcjG",
  "key26": "3nFfk8ugV1NSQCwhy5FRFx1dejWfkiyebTQBSArgdgKXkJyKdbCGDQvpxHqQRvX5A2a34jm2b8tpADcLYsbZx17H",
  "key27": "3XfgGvNSTAcmGD51yX34SoMKqZkcvCsfjZcYgZeyVSnw9m49sws1KTpkgF5N6pA7Gypex7GmdHyHq4mLAH6NEwDv",
  "key28": "3vdCh72vvxMASyCqfbcx9GzhpJEWnWVZqAGoxqfE3KKaDNt86AN11uCWgnmzDpPPyGMhUEjeBy4rniABm2o7A4sm",
  "key29": "3NUBpLhffkrbNyy6mMzYXRNAfYxqGqnmFEyrUhfVwjisug9uEY91cYyEN6ARfNEYMKtKtwY3XwWf2LNNDrsjxTzV",
  "key30": "3Ygws57NCm7vbuVTFtD1xoEjnevCXzGGZDB9LTGYDVvukET14VmL7df9QZAvg6UBxT9FhTPkaVK1sWXTQ87Vtmy9"
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
