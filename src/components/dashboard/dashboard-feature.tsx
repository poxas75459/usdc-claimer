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
    "2u2tqFTEFHHTYuzph1Txte3mhhHj4KUcHmBbuLBvvkdqcGMFhUJFy2PCPBXUy7ii848hjoR6BeRkLMwiQgz6SffX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TkQxJbnZdKwxr4ZzYo3rDyEpUcU3NAW9Samf57qrZNhYejY8d1SdByZMskPp9YAN4qofuEKnG2yrA2Wf3mN6NXb",
  "key1": "2ZZqq8DbnoLqn41k6yR4mwx2AxFp6F6UdZEZ7oRuUsc111r4bgiZrggNVBN1E8zpzNueJkvd61fvHcQkuXjXTRkw",
  "key2": "4wEzMMwmKKnxy392GczW1j8atAMFqxpQ3UzPLdvFMxKQBJx65GDGNB3CAAdqzvLRGJqp9JkwwgHTo13m6aBZDPEf",
  "key3": "eXxTVV38oFWHrfLXijY7GMyd2jasWMe1nf3xfhRAfQ6y3ojke6THUSSJi2RggmxLq47EK7PFCfcffyyNJJPB1K5",
  "key4": "4FbGwpYp69ZdjCZTipfbR9KaGqFiA6mGTB5yRUQVLaiLu1DcoAcPJWBUfCsKH15zH8x5CUHo3zqjs5ydc5qB4zpp",
  "key5": "4B5pEEJTmsCtErkxRugsPGbGxpPMM2hmtwNWaJHdcjt2KRYjfdRBjVVq1hA1ZX9VWqLBJi23AGjiCDmmkrKXpQMD",
  "key6": "49ZTnWvhw6BbqkXJ3SaEujKwSirKxC3EGoiGHSGi9KUrHWLzxRLLwf8qS56hmzgXFGez7ZEbEczY1HhJU9aUvijM",
  "key7": "5j3W54pedtnTMDo4hXRF5mks16YxmfYpJHYFgWZY2t5pg1eazSe6KstmL3wa19vDxaxgvUdNzfNMXm3ZdJEYKtwr",
  "key8": "4QacmqHzr1NnEozxg8JTRTP2aRQVGxDNoHWmkNWTuVTbmo7ZyYQyCL4bTtBiHgNYiMdRVdMvFcWjXYDaD4bvRrsp",
  "key9": "4pe5yB8Kk6z1t5Lnz4VVQvtnfeE2LgRMmvN4q5NYRUxv8PKAUZmFdovWPnfL6wBDfCWeXWPmw25JqGoRjNYQALhq",
  "key10": "3EMRZsYVS3qsSxcVVY14Hb5gqbzFpMB9mnUMk83mNVvVn8Ls9begZfXQhGAS4Bwx3ncwCgJAdZwoLJ7vW28yk4uR",
  "key11": "FZu5MES8JWRGBBwYTrsR2Xbkww4CvspWQKSGPKxoRDpQyM7XHbH8gZfqZKcc36gDNuyaTdmbqjApUDWXsEJXCGK",
  "key12": "3QHzSAuaWSrup65aBq8LsHKdTgnd7TuJXEifrNZ8RNBtQrkHTwVK8pCxh5PMqNsucb6js2Vmi6Es2JMpWQe144Sy",
  "key13": "3n51useMPsbZh5yvv8TzACj7NwnSNZwr85XmEKJdUJBB33SuHYcpjGdKUuhaVV8KM64BHEBsHeYQ3FC9bJj8WK1U",
  "key14": "5PM7M5m8YE554AnHeKjWzdDhbT3NPZLNxYtdgtrP7qDN9LMRf4LJeKMCxUv7Qv5jZKkTdMUrPayUFzcHMc787Vj6",
  "key15": "5xsYgu3vzA3vyW6CFBsKm5bG7NuAU4mXkwmjqWfcB6gs1NysL2xcdW5R2euLpWNQ2R33yUQ3jLD6CdLWzHuhD7U5",
  "key16": "2kwR1ezGiyUncpPQzfVXTn58DzrNYp28sNutfwFAKR5fGaVWdnzAUTgXyHutkZ79HX8QgCWTecZkExB5e6NRwJQn",
  "key17": "4LieRh18zos5uxwe8uZNeX4rtYF9bGtt4bFdJYNBwNvizSZbnxdEe9zSz9K3bT758XN87jp9hJs9zy7x4EoHTog3",
  "key18": "3Toguwc8JTHArvwCzgoxqs4RCg2KfZF8kUucMvody7w8b4f3jimb23K3UoVTrin2tBmWSXKWbSh3tU9LW9GNdZ45",
  "key19": "3QUvzt7ZuAY4nKjWD1GXyxgwR12nmJm95NuMitroE5KTwuHHqx87pyTE5utPyRUfxYUt5v9BSbBPpzNrmSruiTE3",
  "key20": "3zuLxGNPZK6dyGE2BGjpNFS8E7xVKUHrQruEegauf4Sv29rqvSeydZt7oREBWN2RZYGTSgRPYSmqNvKzg2pGWfAb",
  "key21": "fdXrbE5jGHGuCJ3KRmwiPywMkxBD2EBXkPvNMu5BPnGm6Nu7iwYqGu1jKJe4QQTR1vGftZJkQDho62xR8BppHuN",
  "key22": "5F7hnjsK6WqRgANX5JDvpMNLecJF7YHr3bmXSdSbZrv6Pt4DKZVBg8LetTHqWCw3jbgDFnC7B3o8m96ukDEhAKvq",
  "key23": "47kJG7Qs5snQUcknehFZMFZ6bhnrbcZcNb872MhKSwrkFZsJzBzp2f5GvhRvCMp54n18wRvHWdw2awQ8oknXxHpT",
  "key24": "24tccqCePs7qH3PdzK6ucUSsNfRkwgP5Kj4SHJSouaKnxUciUcznnmw835m6u7qNXiMzZzcdQLecrGE55YrTmRrP",
  "key25": "5YFJJALo1YHVozueZA6emLdXoFkjbxyz4n8wx6AoDM3oCGgJ7rcYazX8yrndodLXNSLLLzp5DPu2mNpgMu1XRFye",
  "key26": "4iCoy4EdUigq53w4Q3rJGV2ZYtzVPFaqqZKiwyENVy7VNijrewugTzYzi5yPB6A8xYwMmivAM47V29HnMFnBTqDf",
  "key27": "3bV5GY3DRWHc8QCzZBLYwZpUGDBGhBsVCa8YRFsQHtNbjoYoQCaeuhbrMHP6V5f1AvugB6LGajyo2LQ28K3HeJwc",
  "key28": "QUXf1TipfoB6rZLjr1D6CB71x4XnVcCXNi3HvRANHDwH2LPGr3vHiAkq4RBdshQTPeUMBZnyRUwwVrPovhUt7y9",
  "key29": "4wPfNPt99irFxoHHDWMW4ijQjydTvmbpuC1VGHw3U7ezMG7ujnXc1TVNeR9c5P9EDs9GvqhznJ3hrKX6K43e7tV9",
  "key30": "58JajrMoNunHLFqywQru1S4MLTfBWcac8sKXiMHbXsf6strs7eaRELwjSkbNembJYgoMhLHyMen6z9daeRmXw72o",
  "key31": "462vbEgpDETh4VbJt96rC9ottmY2ghr8LUHNEAHGzaxdUtmoKmsLTrGZg6QpLihCNCokngP1A1Ho2FzqtrtEDnBy",
  "key32": "3rEvg7ATboKt9TYjZiE3mUipedhRmBAhj7J5RD5qhhxBSJKVcKh9bxB4rvhzUBtci7FjuKJCxDB39yTdbYW27oSZ",
  "key33": "WnkJRWWAp4btvacNCHdH6soC5UBSAVnr4d26vzEg3nfjxA4rq9MgR8Hs9jzxHBWgpp9ma2uPS2o8HyfUfH1oYQW",
  "key34": "3SYk3b6yMnKFWGrGBpC86hNtp4nXebLo3f94BJQJdRukpp7FjwpPWW4tqqKPdmLGTt5xXj2ZALUh3p2p8FTPCY8H",
  "key35": "BrvD38YQCNWELsd6py5xB2znudkfa8zypCxB8BS4sY1ygxLCBimdd8mGQaSRwjqcgGGFaSab4rn3EWpEMQXoCSP",
  "key36": "23px8QWtVgohXc4XQKMdjPSoxWDUez7b8jeVuBKpNmEsG3qwrLRdZXUB8yXDsgu1ptw5stiyuojeV8CeJXW4AHc5"
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
