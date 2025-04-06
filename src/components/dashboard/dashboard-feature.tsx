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
    "2Kke6nA2x6mGbEUCHhwyahjxErJkpFcgfWAeHQ4jFSr76EAf6R9oxXihUbzC8PbHV5PPsPjzhpiTcHi67AS1vww1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R5NGYcP51eQsRJLf1nsxqhjURp9EX69vwfJSXVkv2oboaPfwiSQDD8M8qSSxcHwxVQJ26LCmpWzfk4ZXmPg4QEZ",
  "key1": "FrtViEH6vCqj8EjyTU4G2zsTg3bjju1y9Si4XJ6ti2suVj8k3G3zAY6x4QWK5xFkiruf78FcjHtZxSwBJeXmvGj",
  "key2": "59zjBraqXpF8j6M7RUxEftBpTWdea4RyzZr7B8hUsZU3nkspRzJaX2hMKZuSrw5J2Ytya9XL1yvMD4p5XYAVZkx",
  "key3": "PfZvNJkYZ6wN3eLbt4ogMC4wfjP9g5JqUPR6Tr8u93ATup6BTiScCiLK5BfQG7gpPvTHKPrWUGmy7smTjyQXK3s",
  "key4": "35r3ZW6LKdgLEY1JY6NwxoHGeX7T7qBYpSXwoT7oKCSKBUfdX1ZvL6cJNQjb1kZFdgySJM5fc5crCkiirwCvDdnK",
  "key5": "3GBUKnESe5j9hwqb6j5hDvqHTM1bsXbBzuYDUjhJaWC8czbMMX1wtqqsvgs9HcFoCL8WskpzmZ3qiyDtFBZPyV33",
  "key6": "3UfMoP9cp9BAuXEGC9tn6unV31PgRKoGdrrBoK5SFshSMmjdXrZ4r4ubNhUL3wSukNfQ6zUgKRUvE6a59hTn1cxc",
  "key7": "ZFMwN9ojWDEyfUd2S2jQE3Uy4fY31Ru3fKT8CZjAQbTZRMHvx9grrSDDNmQKNhcGWg52tCV7H2J3PycimqXvtQ1",
  "key8": "3dhmTRUvzRUHucDP1fwiwr1iSRKNNinCFcm9nA2D5NciSBLyq3h9URB5W9Jfb5U9MBh4QR4SZgA9Hv1mjq8ppBg",
  "key9": "Tmp87Xmby6VnJvXp1Ay3oGYKfhuatvdvs1UKonwhmhC52HF7AGaxNUFGAzrq8QxHXwdk7EZZHn91YctMpMR8Jcz",
  "key10": "3g7XvGG4EK1Y39FoZSnad7pYoKmiEX77BtHyrYdxvtU74z7xB65EAmKuB87ZGppMyZQ4P9aeivQhdafWfHVrwwMy",
  "key11": "fReJTxMUgaJY4RvwiyNiQvtb5srAdBLwW5Bc45LVkTTqRui3XZfR5Ko3FDQPSxA8ikPNWnAaMD6SyhucSDEtSB4",
  "key12": "4tfUURpbp7duueCg1MChG6PvHd2mAQ2tS2goSEtPuQ1E5uB2AoGNkgqKYGLe6wF7JhrvnMwQYgg9vDnzDaAheMbL",
  "key13": "63kidBGsqxps5Gn49ARqxpcKUnNnKTtAT1eFAojEXZKacEMDdfhM1bQRt5GbTwe9wSFWEjMMdAXMrwaDMYbAQXjC",
  "key14": "4ptbuhvpqTmKoBTPZy6ne9fUYRrZpt1K7yTF4Zm3ybZbr69waQYqZUGRYGPHVVXjftop11xWa2CXfszXrRc7AaAv",
  "key15": "5jm94JpBY6wBMBgyqeyrPZ9Mbn4cQnfjNwkxAc8uPDMTboHDP7a2Ya95WcxdyAZMhfPDZesPJGVGFcHHuS5tGA8F",
  "key16": "4KwZ8xwKcqZn2PrHFXXWWn5qHiEjGRYuK5rm272zgTCoApZ325xK2Cf41C8iAn4W4cgF21xVwLiwCYoCDNm9GEfY",
  "key17": "2HyT9VNAGccFm9zv9oiM2jZUrUSrrYGZsVRirr7WMG4B5znfUawQGkZGjPbgZ8nnzYGDSpaopwvsFP1aBcm9NgVc",
  "key18": "66suDPQSvAtH9qDJ3qjcKg6QY8HK5LTSjwL9ebcTLVqzVoTs4PqpMaxDwshMqmbt6gMu1KjZoepaC97N6UqaoC6e",
  "key19": "4qU6eBT6GQDwCsZv8i7Df5HKe4RtVVf9tNGtQqUcfU1e9YCZAdBMNezzULFARnyTgbtSCdUPwLykfXDr4r5j71eR",
  "key20": "3WuPCck5sU5DMfb651SBfJhuYhm9nzjsGq4YQ778DDrCBdwqhnquMS1JK8MKXSfZFKeN9qMeXVsUocoBxZ6NZySY",
  "key21": "358b4vgZjPeLoW2j18sYX1AtPvfwamivTcMubQgqVSwthhwamBi9db9TB1Xf6tuXfUpLGCrL3vhK54Ax5xpmDEgV",
  "key22": "4sUqFSxguXdCQstiBdGk1mbHwtGBB3y2CLrXRvfeVuM7cxojzaQkTtTp6rexDQLm7Eba7G6xQfkhDEmAsgZJHZ12",
  "key23": "5raoavxBCC5UiGFTkeeUPDpU2pJEjarKSGYkD6MNg1XURKh6VmMVEbyFbRvGSv68UaTbhMjnvNZjKYcNvKZhwDXj",
  "key24": "yVrgRdVEa8ZxefJci1dQPiQrtsJXkVKx5Eq1omZ6zQCZukoUAU9P9pxgBKpiQDYNjnue4abSxAvD47PZsfTE4Er",
  "key25": "swvd5LaEh8Kk6jL93Jnk1scpx5cpKeS1WYLyzM1J4wYaCYah4BkbgrrXAQfN6B2Z7B8NxwoQZJuwHFnwykrscFX",
  "key26": "5yZhoaU7ZVgBptUoeG7GFJMMC2nQ3yyF3ALiqyndCFyWTgpuQvxdAmeFX5HgveQf1uXkhHbx4Noy9zUbbboWnX7Q",
  "key27": "4q15Af82bTPgkT2KWqbBcAn7woSC9VUULsJXyo5gxWcNk5CZYgA8Hk7z1pJ1Lij4fRqftC9nJiMNPciVBZtCoBKp",
  "key28": "62XP6v5Eb1FyVJoBrULmEsD7cDZnFno8kr75bTmk8Cfq4xrSdiCQNwy1NhXGrDwMmdzaBqLXGj71ZNP3JcYQ86w2",
  "key29": "4gGnCbQZiPnByDN9uQCo9GErrASfm5bpuQ55pkJnJdpu3Y4Nnxqs6iRAiDsRsrCeK12kzpu86dVpuj6CJCRxpw21",
  "key30": "3ABewsZnnbFxipprn27L912RY7L5Zppwx1RnN6PTiGxU45d79kktundwe6YytmxedRaA64dpzhZH2C4MaawSihiZ"
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
