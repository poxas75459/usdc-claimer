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
    "2E8cASbYCguVt1Sa9nUKhzZd9fKRM6Ngsdvt7XTGSawSDgxjsWZQWHL1fufDvJWvxmWzDhG2x7pqypzdow3jTFSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cAnNj3Ww79tehzwT4hnvBULnPhdDqn3UUbXTebLR8h1bw9inPP1jdcNrfJhcBQAg1Jj9qBj4Sf3UvHFQWmcEa4v",
  "key1": "5TDhEr4P7cyKeMi1xubJp7okV13rxGTr4kqH7B5fnJa1DyNqy7P3Zke7UvnRLKYNVdSv5ahcRGCjPp4J93R2MiEE",
  "key2": "3aRahArFPKXH1XXx48DNj2JBqc5dtTL3xzQDHaFCHw8Eqp5nM6CYVCWHR9fi1kW8LKNXJ7WkipaQ5Kqcxst2wGgM",
  "key3": "51WTZ4mosgdrorPK7qMcCMqX2LN123tJq9LKeEk9LeDJk7ie46Jx9pttnG13gJJRkGMC6wvH2UZpduqk8YWTGUa2",
  "key4": "2qpBDR7g11oyGsCymJSvQ2h6iTaS5sS8hDxrtfA7oqXpvxA2PzM2mYE8vkYDo2kKr5a4US18hPFvDzka3jNxp2xX",
  "key5": "21vjps4esgbSK4Q1VteGZyHVdQ6tkYJ7iFKriT9VcngLn8H5P1Qi4mBCc4u8kR8g7EAUSVuFKai7dV4oU4aG2hLg",
  "key6": "21YTd11wm2J91ArRQxbzVs48gXYDHNVsoiSdioDopKJENYE4hqKYHBgWKUx9mqMUX2BkwYZosskryNGqsQ1A2u2m",
  "key7": "2gmPwE9RkypgmwPnZ5MvzkQyXJ8dpTATnWVAUAmiocjngigmRHCT5b1e37D4tfWyKL1DQoSiprgfZA96vicmn54X",
  "key8": "5iKiz7pM4qyYzHSLEkVXV5Q2rTr6afvd253hPujauo4zG1TSoZwK9vcwWGUe9gfAoLxaW7r58uHNMShrQ3PsbJ5v",
  "key9": "5pvXtwc5urtB5cp6iZ78bexzuWT7EHkKjmRMrtxKp2opGpQmUNWHK1HpXWwWxcmSePYedJayS3PKojCkNb85hzzB",
  "key10": "3N2LkuwHqrshMUugauP8r5vnQQCiumLmVZ8tmAhQBKxnHQL827K5T9t5erdYiRNvtbBL7zv1r2hx3eVkEUgVzGgA",
  "key11": "bDmPtdH3VmYZ6UZZa6Er4GpzixVSuoYNcQLuwJ4yhpJWmggMY8ntRNwV4LUMKiDUXcMuTnpg5jJzAaK73XZ8bKS",
  "key12": "NKMWko4CxMBht7QywqYtP6cgsWr8ZbvLw88yDA6xL6r3qQzbXaTYeewyYjHTdpZtLP49NDJsSJpbZQEHcBzs53m",
  "key13": "3D2JcRr5jEAtPt6eDoHJwnBodfzY7QhPrZNYuSBkVqnpXF1q5XxKfVzrzBwtFgmeFYAQoSx5Ac6vhmoZDs4tbnEU",
  "key14": "4jqqVZ63Qqp6tqoHuRNMjnfj8qkzJHkNRycVY9Yc1BRS8qwDZQboKot6BezB5qAtPN25y7rBXEk9s5rgrNj4LFp",
  "key15": "2e65UYfa9AyX85RNGKRK5i6nzzQZ123aHpi8tqoFYRo7ApLAi7HNrdyfNP25qVCAvXmxjLJoRRa9np4HrKL3wWhi",
  "key16": "3pnGQMUuP99kXHJC88jFi6qEbVftkZ8ZKC9TbZuVtgDvz5wmqkE31W4fFC2R96wNLEZbFsuAn8vt3NEuohKc2g9X",
  "key17": "5CtbBbKSoz4Todnafb5YjG9LxGAS4fapKXdRBFsLduGpqUsUAyWXxfF69iFMXhmQVGVSrYJgGSFtqjjnQ4xa2BzT",
  "key18": "2vRj81F5qsTeh9MmQvsXZj2tawbMcgRVEpxgaPP2Vbc44FHXJDwir3ZZa3a4TVZ91kP5pKzP4DTCy3HNi8DSj8GB",
  "key19": "cT4EeUmVuLbZHEMgPKHob3GQPsHnhCLb9McqJbagZZt2PosfbsaQCm6WCYAwWbTCPsEuyf1odRuW6dStL8RRwvs",
  "key20": "2sMD7y74PhbuDcjjYc6Pq4CrbDfkKuLeSjipnD95Reu4hm7WWKrqnFBifTtpKMzkmbppKy4QumDqDrvj9NioBYgy",
  "key21": "35m7T2rVstoDWzZgfixJirSiEbA3tekWHm8SWxwAQoc76zqjzwVZ9hA2rpm6mQZQkDFhfXxw75kYsLjCwN4xm7ay",
  "key22": "3aDPSgQHqbaDgnirgtAonAm7fdRLq3Vfdwoy9FRk5RyFFjm8v4umSYiLwthEV7VDY9EVX95jfWEHzDg5tJPMwccq",
  "key23": "67LNvggB3cK4MP9qT2LU3ZT3roBN8NFsgV6Cq6QNCkSkFiCgrSm3mDyrCwHWkDip3VJpacsSjn4Hcf2PAAEcJhC8",
  "key24": "32GgbFCgTU74jKmmVT9dcuRBbsJ9SVgJW37T5Y8iWXaFSZJLLUmeRSVc3xeNmLiv7iF6SrYpx1bW2H4gMYikh1MH",
  "key25": "3Fg3GwtGXQtDL6eZ6PcGKHaCwFPs1BEzbRAq6rG6yRoyKc1CMfGg787xoN93b7jWfLMqUYcYG579MGnVsoqrhZW1",
  "key26": "5WPrRYD235zb2PW542nT2qFmv4JoMQqQa4DCQCSwDUNwezPfe9t8GHLoCneAudJFhtMjom1pGnVZpTnSrSwRva7U",
  "key27": "AdJoA4fAdyMR7HaFfskp77s1tU9FTUwsQHwyENCyfDBRgkHvkYaeySh5Pe3unBkeWYMcbLyZdXL8L9kn8rhJ3DN",
  "key28": "4ZAX25CYxY3qZcdKsDYtBNxe52JQ2vQsSqNyZSVvAX264H25HFuvQZjJCmo9usD1EU99fhPhvrKVRTs4W6M9RVvr",
  "key29": "84iRboixqXy9xNqbBmqHdKxh9mEHtmVc3b5zP95ngcTiKhwg7G9qUCts26sg5SdTKS5bgg8WUjjKMk9zkSWzmk9",
  "key30": "4xfgDVJEjpsXeDDiSQmExAXLKCpPwnEjSuaDb6pbQsLXuEjHHdUzBideyZbtcvaeBN6m1zFgKXf5mShWtbK7asC9",
  "key31": "5BTEHEPHusF8j4WBotk1v6aTrz79oNqzsyWUBQTGxEwDHomns6PLVSicy4s1CgThhqwkxPxxisJzEecWfyTKEVgA",
  "key32": "qx9Ai29gkpU7WPd8TJa6Uh57jWgXJ2Qvst9EERNp874K3sUz3CP6WuqDFtbNNwh7ZouftHknoJDHusdXjSjBUF8",
  "key33": "3PhADbBYLUiw4kTpPw7YTvCHSjRVb58rtKj7jZoh5J7TKCEmKpq3r99GUvK1rR5qbzNU2JKvqyfGfPiZTWnmuere",
  "key34": "rtsm3e6DwwP2Fyat3oSeCx3rgaaMUwaLvqioVnXgkQG9kpwxRTP5jPSafLPQL6ZJ7QkSQht8gXGg7NsFQTzF7ex",
  "key35": "5Hpo652GQ2nUxt5w3gxtfYiK1eu5b3gWX66KbK79PrqJj94R2s6DwMXLsvg39X6Vmgo7PFBQta859ZJ6p7F5b3Nq",
  "key36": "3pHYTKwQ9KefJRcu4NDXLsruytXVBSyPH7uba652tPXWiQWpZ6xpqgdUJwb1eiCP4xMF5wTNWLdxxj4pcoPCR4U"
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
