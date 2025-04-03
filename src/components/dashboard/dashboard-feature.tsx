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
    "4ru4ZcP5s46oyc9XKUT4fmg3afa44aSfPmMqpKX9c9JMXfgugKFHJ8bZQSJiHRp9bdwzosC85udtrVViYtsDs8oD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yPuhgFmn2rSqp4waftyQEX4EYNLSeywdenT5GbA3BR57dENo4wpDM6kasZRdfszKsg8YGHVLKJek3igvQiXCGzo",
  "key1": "5rsAwz8NQjiwKVNyTxV3zqY8A8fYNYWfoxFVCdW2pWbTc8p3AYPqjyEJPrybwfxfeNGqNUg5ppomwdfowbN3M9d4",
  "key2": "RsUgu8v7WFFRqrRfm3jzEo5VF6oocmHdzaWhGLWxqbyi87yN45Hps7S6hyKXUfuuTC9BGqqxYmW3g77DshchkRM",
  "key3": "4jnWDv93YvhJcmjp48QX5r6hhpvMnUwd9UoJ6Scbkk9s8bSGo2eEK8sUtdvGjTEVyaunsE48HTA2UthMQdML4VvH",
  "key4": "3REhJ52zthdzEm8KDV324W4THTXDyuEAdWEowgpXHUemuf1EePWhhiNFhgY1QE5Uyo4A3QyotAvW9bwMSztVcVTF",
  "key5": "3X1Skf3RVLQHYBB78ip3E7PUopVaedpCcqcSduZY2n7EsnbfKNcAx6szeSiTzpPU8iGSmPBmDx7zQ2ww9ExHUpmF",
  "key6": "2crLy73iNKgUoR8qTcJ9NKcZn3rLLEmcD3LxLbqweQ3gewEcsjXQrnkPiz4cY2mFyQStoozRZUryM2KXiMMrWTFD",
  "key7": "4vweqwC3L5uERvxAkqCL5M6YVPQ3MzZAaE3TrkvgoNXAvvZTuZw6fcHNNEQprhLX5d5f3uty5woabSwqVFQkALYX",
  "key8": "4JX6JpCQ4dZTtPEzMQTDU9wN6fVf4HU7T4KMnG7uiozxQR2UzztS4qdYQzkNf4fxaWyYn6LFNxL5qN2BuEJyH52D",
  "key9": "64FTa8mXSSyNbneEPc3G4E91p1UefutzFaanwzbXHExbork8UCs8urUz5pN3LDcLek6EBSx6p6AoWfRY5dKJ8PQG",
  "key10": "4E8v82uanETeoUwwF6rTwL1psGApfbyib5PS4EnyCg5kDiPVaJU6JgGT6xiHcmCURzH83nxYSSMpBHCrfoZTeR1p",
  "key11": "4PSZR5hjgngpa5BS9NbfSUWQEMFZ7oys6yxZBDAxnedJTQNPqLFQwzqFNDe2X3WCVsSfteBcK1hDZbvR1jm9KEFy",
  "key12": "5cMp2XKsjshZJ7LoRMozzxHCH4peEUGNEDLrEVfu8XQ33jukwjAF7yJEGn7Zq4GGey694kbrZdRHmohCWuM8L8Mn",
  "key13": "3NMsmmj2H2xtixLWZr67nUBs3YgmSzLTqjxATaAi5qNnn2JaSfYC5Cv3UJ5ufitG7ZYv7N67HT3t7Ld6Njp9g3Tp",
  "key14": "3czre7mFeonbdjFP1H9c3crQNZiqeSi5Gm4hvvPVQmJ1G3JeVd7FHcX4osrUvFRHhw5LBCY9JhUMN95RbfeGDFiJ",
  "key15": "3y3bHXes87Q3vco4CuTMfDA53tJ24mQXHQtj7AB7Vwwug6K7PXiJLurNu1Qfc6rEwk6ahrjWf3odjW7WXhHBULnH",
  "key16": "5baQcPGcqQeiABzrHvFMqmR4hZBWU4u9gXS2GRCJMf4JoGguA7FW5BGHQfSAZGo6ByuNavzVNSbbNMeYgt5riJe6",
  "key17": "x3FGfM9LWeeKQ6KR231W4owwRLdisXi35Bng9pNRfqmFsmT7dYxqP58E9XtV7ws72VbRbYhKyDtApjGuAKfjJuP",
  "key18": "5mkCNGnXeDRYxEy5BXDb16Xi9whd9vBufrE981cGZvWw6A9maK8tmXuRurikjeeNwnz8QSmkas75Rx7CdvwdFxX1",
  "key19": "2EH6sPWY5VQ65a9Btmv7qnULhoDBdGEPRPCAY61U1PwU8aa7s2gTCgRsE6o96LQZaNShkF5M5wxVQNnDX99Mw7MB",
  "key20": "bFYjNWdDY1b1dRkwY69rGxdp2Z8AXfiMrqQGVfogAu9bJzrx1Lo9zJoy37nYW7LPZ6PSbFNvbQSE8C4MBvRf98C",
  "key21": "4JqEj8ZhEKcEnUqJcRgAYdMNGjQW1aDJz2bEwvNPGZHDRnigQF8uob81roTVkMWHuxugkPQQAdUfR55P3RcEqs59",
  "key22": "5vTez6Bb61iHseyHmVrS8Wnp8SwWkuVS2MVh2aKQageXJkMuoPRXP3JXpq3treNYmzxnGh4DBagX4SBQSRvoSrSW",
  "key23": "4cLHVnr1JsUuKKEHzWPqxhAe1xEq7ucZK4d4jRqdRsfUUeQjXKSnqZj7jNvk6gfYDfsQciLcrJerbmB9ukm2YeQi",
  "key24": "3jf92iHTgu9qfYqeCs11NTsXpwdhwdesJPL8wL8cLKG8cTbB9tSjxhT27SrQdUitByfcVVyn1cde91TbpnABkpG2",
  "key25": "5oEy2D5tyEhfedW9HpvMYCjMndmTLxZRSVuKfQ9GmCER1y5ACe2eunAcfX6uanSXH3KYoT2f6rQAHjiU73eAR9xG",
  "key26": "qrfwVpEdDfznLE7aBHucXMZg2BQmCi4chCApGpGLc4VCqwPsqfTKpov2kXKTqoL8nFUmCPprBpXjpHHvYgN6nzP",
  "key27": "9SBgxgEd2F7beTXtSnbaKZSrZn7ryc17hLu16J73TCdqcW9EppLj9sgzNss7GQzSifM2JbgESrLjD6Ke28izwPB",
  "key28": "3kE6RyjyGCtAE7DxkgmiUeRSat5L9zi2tC3p9QJfm98qpoNSUKFcEziZHKX3QGVpZSVzgqLkdGuq3PP3aTDvPEy5",
  "key29": "2yGvFXMgPTTZpiH4TpwTbou2jvaeQGZ5D85gt5GpvNQhr9yNk2FSjhKuS8oxvxhSPMJr721PGPJvV6UM8PKCXwMS",
  "key30": "7sX5ADDvngXYrYDQ4bYAE8PwfX5ynkwZqyxe2hM5Xnbf3fMWsE7ZvbYV24GH9FxoWamqdDb8imyoBU74SVw8pSQ",
  "key31": "5grD8LFXUJWHrfWe6sHZ3MUDSaDv4FooN3SbK42sQqJDDPGnubRGor1763niY9RyGTJfmNHpJoJWVDFXKgbXNLR2",
  "key32": "3stZGgT3poa7HDaaN87yoiHgp9Vcxug3JobNiTryQH8XQgDfMksUWG439ks8rZJLG1W2JQmmZnK4JyBRzL1ZZrbD",
  "key33": "S4X9hNJdQArr3za2Rt4Egg4sf2wD79osrgoKj3vDB6FvBTvwvBTKuQEfYBoUHPgNmgzzZ7Zs7P5nMnvV6CpQdoV",
  "key34": "5qcoFpdnmXghtVuQy4esW1Cictrwr1ERaft8QSMiHchDgpapUCtJM9dFE6FGnvCPrXqKo5CeyfK5fbn4cyuE7iUB"
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
