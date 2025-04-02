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
    "29o3GmQWeYse622g4AMyS9rR6HK9Nu8aLZ4BABQF3A1wp54vqjLYJpCjTJwUKzLpgVUvaJDr1UNmu1Pvfwo1X2RP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46nLPgQdxnJbKq3My8GSLdKetGXM1VgRg5bU9RvGKVbTyF5UofP6S9RoUtCbHqzhhLdPG3fzXFWHsh4icx1VYXMB",
  "key1": "4rTcSAzYZ79RnudjyFGLHZmfrmS3X8hkJ9p8HHdC9JHjvwmK6XuwXYFsqmiezYkGx98cX4rfneV7LtahiCBAecTk",
  "key2": "2Cx8n3LS77oJgGt9B6JHB2NHHhALQdiKCzkVd4URQmCXBEfYeQ6dWetDBiKDxuiASjfr4oiPbSU9JiJ65p6iii2E",
  "key3": "3PYFJTrEhRJU8PmkanT2yJGkcz4Bo3V5MqAU4DZv7fqr8oV6nGdGuWkD5j5g5vzWpjCNY2hihVdFTLkMYNE8h1b8",
  "key4": "wc1NwhjNvGggLC9oUZCQ6wrhM84zZ3ipbusNA98sLNvEuxKoC7svGofd4DwayhA6rWUZqEM8Xsr4r6Hm5MX1AGA",
  "key5": "zzZRQirdKBJFtU3s6diBdhP2WdWQfsyZmEfmq6JLdtwz7kK4scDVNCRZEUQP73jmCkVZztF3hEXfa6oCssCuM9c",
  "key6": "2u7163o3iAS5DsNMLMMMVZ8NUQFRPuE7TxrDKN4p3y9erPcjcgh2359amAmh4MNz7pASuJQUZMPWtygJDjgdPA84",
  "key7": "3rZhNVk8yxx9uBWdJSjrJzZfa2fTjfg6u8yN8j1YzxhW73M1fdmww3f84NVhA7JLEgCxqJW23kAPSuaVavxPvuQa",
  "key8": "2HjeYRceH2QxpVQrzUtaHUKqU97Co56wC3NZrDm487U4jAdJFiFi6fZN6i5BNV6GXykyqwkNZy8qbWXQTJrC8NT7",
  "key9": "53tWhRW6rz5xZau7evVhhVSRVWys1JCjd5vE3xTfsmSHEgqKLuriPmccqMvpjLUfhD1U7DAVrr25m7mbqC4dDi45",
  "key10": "5c6mCf8jdZAJ6fPhMufwY4TabnU6vUWytPjK1f2fsRFUBXRp3E1NnRkyYKkGykBVZ4JSBcEZySaoXyBu9o96WuPF",
  "key11": "3m89QjKevWfSSnCvDXhu1x2sHJyBQbhZ6bw9VZCey2yJp9RA96jkpyH3LshYhKSJrBfCLnACd2irRnxJF7bMpsxM",
  "key12": "45fjJMgzuTUTCkHvJVptds16ZoHJzuZbfm9gsWqznAZdNQ39egLXTFMovVjnEipmmoNad6f2fnxgZuY8Sp8AYndx",
  "key13": "4XLsoiHRk9UkFfgrdcL5Tu3vVuaWJiD9YnYmb1XZooF1xT23iwALjjd1iiT2xRkGoJPP3WBUh9VnfsPFNoFa3Gyh",
  "key14": "3gEnfLSVpXghghiYzCyKtaMDQr6AtxM3ctoMftoh1az2nBE5Es9XQpr5dJYPqKeXXQgoTAT86UVbo7ai3drrwJSf",
  "key15": "2aJcDpoX8zkdTdRxnxT3UjQi3DtDyPGacYy5XPmwpukBQ9KPaYiFjaNe7CSfj6N71yoLXX7fuPszZBUxtnQU62mC",
  "key16": "62yXnJauq8w7uVdhG4BTa9yMMPkmzpFn9QoLXyBvy7UkTKxe4VksVmz58Sg6zm2TAkq8Yh5ZzVvz1FaCuYgCbPZL",
  "key17": "3Sgz6FzCYEM7BbZuGwWjM3R5iMETQ6heoBvaRkvizZeNTnEn6b685wYsD6xT9qFpHZ3mbShxpM8vvtcgK2bcSEzC",
  "key18": "3uR9J4YVtmSpgbbexmfVbipt6BJiMrufmnXhtEgxa2Sqoyi6fQps8P3S2S8m5gGfYBA3dk6knCGaMxZZMU3A2PKG",
  "key19": "HWDmaNGaa4SEzwtnjN2fhcQoUsoV55sw16PSg6t9ajySog5u4CyAKJV3CXwv6Ue1R94DL1mEeTmiGKJufrzyaT4",
  "key20": "5rMN8GVv8wJkC6PUEV41pFcDiSGUPW762iWfVeGcyos9dCCaVsYvwhDDvStp7pjPspdiDq1grnJ88pUnMg8DxrSQ",
  "key21": "MZRATc32vF5nNvuSHr9brAeqvLjqR8NkgXbMcb6QdpHcFf5KX3VMoh57JZQGThxLDKxkVjWgQwdri7frerqVZeu",
  "key22": "5mLgnvJC6NkMWXQtcThfzjrdVfQZGSkHe4S8Gqko2knfWPn4YC67dhRuP3ctaCFbBVkuvLwmqPMFuswEvognXScL",
  "key23": "4iPAgaJeR9rdmPfgRTBJj6RzayVa3AYK8ncXx21z8nrs6rqoEMmpBvDnxiAoQsVdWfaCeQdEb2keTdCKUJA18bWd",
  "key24": "2cvyjRzLRa2AudFqE3UvNdXsX9DsLk7bo6YtGdHAao8NxRqa5SCCU5hJ4MDWr9SN5BWvQpURSCNgTjRHcgDwnW8K",
  "key25": "4qZWUpx7TFhd3H8qn9nKerGPomUoNfFi9dTfvPaVVBkH8ymBBaBBnZGKUsqHGYxnHigUzBP51f4Cz65UjkVUBfGZ",
  "key26": "4A8SCnrXT4Q6b2AnidjYNKzN5sTSa5aBV6QyPLecyRun3PYpgBwBTc4tspRKErW9r1R7jcVHsFy287NnVjR7fF2u",
  "key27": "43AxqA7sfVrwJHtCB8efJv5djHdF1j9uuwPSJ2BVzHrp7zYXyMJvQt6hSTXc7cBovCt83QUCJWtTr2gpq4jZx2eM",
  "key28": "EeBW6vZWTS9WkFbMmsnWq343N56MqKCMt4GQeYM5WYVrCxxnpfBoynBRh9Gnmad3tQsf9KHr4rRxPhvnC4SwZQf",
  "key29": "56VN8TVU5sFQS2B7eXujHZjTwQe6xhcSNuxWLEpEe936VK34GBRJ2YdVqu96nYLb3fEXNTD31QVtYXs5TLDEYKxW",
  "key30": "5GYWh4jRss9hR9U8qeYJ1c81CySpUpfEus27RL1b4haazBMWTGL5VWaBLKb6WzgpqiXB2geE8vDxAyAi7NvhLg22",
  "key31": "82Chw2DGSxirZc6n6EMKd6ZAffXaD5PRN6vEt5UF9Hsad2fT8RhVkz48hyBv1Fx44tHmQ6YqPf6XS86shk4jkPX",
  "key32": "4KkVPZDUDE31mPrGv2AcbYYsQJKVFMh3Qe3CqkvwG22AHo4Vi9ed1R6ELmrsgG1p2mnJCe1789sCiyAgt5Qa8rZs",
  "key33": "4Q622GgSXYt7zPQiPCbcUpPRBKFDEYjE8F8n1EAJcAj3GFc3Pzt8u1LUczVpc5XyeRq7xNuZ8JjpLdUCiVpeJKEx",
  "key34": "3tAr4RGybh3VXdrojyHrFF1tvZD5qw3pGtS5ejttba9XJpkc9XnhZJbQoKWKd3q665pWnG5jgVawH7akQ7amkSYd",
  "key35": "2qbEYaVZACdCdZfFDTGzMEaQT7xQ1kXrvJKuyDjPMYCs4Xd6HQ4BbN8wwhNjcQNDYvEVGdtoo2BVM5GDUQ7MGi97",
  "key36": "21qTWUNpz4Ny3DB4tTvgigsCjENZ4mSjGP13Nbk5sYAges8ZdGK4jZumeZVSzf7RJCvTWK1K6TwRW3vHCzdjUY27",
  "key37": "5faUSF6VtdExvdQDrdpf7WT3wvRQzDHB5a16Pbk4BBcK66aWHBVan5AwnfK2j8jQNbfW71wxhrw5v7bj5q4EmrKs",
  "key38": "3wGXGtEsHEAw8gLfoFJnZiRaRX6nsog61cBhAKdDdi2g9bj2mujc3wn4ENiryBtBhboN7rCdfLXN5Lp2vYwWjQDe",
  "key39": "43YtWidESSSYk9hgR9LtuxFwJDSTB9owvxtiTmRu4L874pNeEPTZczNTvYDk7yZBhd73tFHwytHs3GHiE6yL15sW",
  "key40": "BMgHnFvcWuqzPcNpSPsv53hc3pPWTj3472CnAdJrtDbR4ZbdYt4b7o6GyrJobwEsjqTFA6XWFqDqTmov2nsYkbH",
  "key41": "4A12prMH4aNLoiPLAHcf7EvuM3nWf5DBjcgQGXnwk4im8SCqXf5nLsC7hk9hT38VLau8Pu5HUMnA9119HjLMM4M"
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
