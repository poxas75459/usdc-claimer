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
    "28Sg9kLTZY6cEg68tuT4uitcNj6a4wg4XtGxdkqoG3YKpjQFb4aez4mu7aAfv3XMsrDAqB2TNPM6GeZBAkVaniyG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fwExfoRg7aZw9eqgfVBbGSnYAxYPGgDZUuwgzpzJTPVNfmcKbDx3niY4CAtXeZqqKkQdSrq95Ni3oEnhwwyfnEm",
  "key1": "36DUGf8W4N8Kw6TaFeupTVrnDMPfLFZp1oLXrEra8XGE5fV7hXV9fuWrxFHw62zeyLtuSnkEqgQfTkCdYDkN8SXe",
  "key2": "27nfo4vBFhk26kH8iNiskMet2qNFLF8GDMVEpVYUhya8eDy6tEtBrqcTig71NDJGt7918CG3JGeU2SeAPnboz6pR",
  "key3": "2kFmHQD9M7MZhxqFd8t7bGAEBpXY7spkxUsDS8E4P1NCb5amQjzBWzPb4qNWcaPzcNZnMPPuW4JQyrwUwBUvh6MQ",
  "key4": "5Ju1Ef9G4GA8nEGVPj3AjUiH17H82QXNcJ13jBXRGxEkkvQgEWYxGGcGVDH3DGekasXFhTr8CVwm9QmHkbBjApEz",
  "key5": "5STLhrocVebtYn7ZqyASWzpVHhB1ny4AhqPQwbE2anXFo79AmvWJ8pVi3A4N3rej5Q7MbdK7DYpCXw6qLSCuNbiP",
  "key6": "2tz9o34YYWVVcSzDbZsvAwwFb7Xt5BKW9F3i1923Hg6Ep8oLiBDyx447bwxjkCDBqiTTJsoWqJiu5WkdpKR7NVLD",
  "key7": "4LJaZkQJV6kqz9SUuaKugGVpobPD8tGuzhPiW4gM1YCtzPxhhMwnRjSeGn8qMuE7JL8HN3B4Mf4f2NDsjbSRP7pW",
  "key8": "2LPxwmDuZyE3ZBRzjs67MQEucW2mq1UwTXwdbmZRosRgLjnQ2bSjc5gKf9Gu1aztEYwdMVhUan2P2MSdMbRFwdW2",
  "key9": "214rcdAfXovpZXM4PzSLD18EUdbNzkYemx6wrwADudA3aASEBmv331AfLqTk13PSp6xBKrNUX6GGXYfWfUdXtNLd",
  "key10": "4z36H288JfSGy8AeRQszc7gS9tWy7E1imS8K9u17oTUC1ufnXiHMLCW61pqYgnDM9Ks61hFU4oxFuNCBacR3Qt3b",
  "key11": "44Fq571t5CfJugbZ5rwURXNE8dtcpvDkW6mNJFXCDna7THs1Z6mgXqZu999HWrcAHHf5L8KqHp7doZcPzjJxS8ps",
  "key12": "4RsKCgxyrUYABAXujwhEAVsvMuLR46zqvEeYgMeJz4kakUzPF6jrVN1aMPcKh3ZsaAAxL4kqFGb9gi9yHnGZBisM",
  "key13": "23v2XXrUGY6HXFquvKLbxHMNM3rWMwavhWFGLx7VRriqXsahtnK1mVafVWYynFVJG7ETgRSURAjJwsCRfwA3BkXW",
  "key14": "2xVmLrcVmty8k3rMHkxXba5fxvNvmZiTuUz1CDVsJtXnGVfWzVT1isCew3Y1EG1a6Afnz4C48FDcXdFQgnKMupZm",
  "key15": "4348WUeUvBNZ3ZTBxi1d6PExEzRNgyr6T3ZvBExAvP4Bg2WjudeTdu57sHnDK8kPGYPpVcTTm7MQuhaCEFXWKfLo",
  "key16": "3QjtUtzTwvLYDJc7n4VwuEU8oxiJbtvZNoArYY7Jgmfp4ys5AvVvazMz3ppGabJ8rvkse3TXj8YJXGVxr73EACrZ",
  "key17": "3U18caVPederAVS8mVenTEsj6pASbCjKSEBMZtVf4UnitxM68tHF9Qvjf1kCneXLCL4FDW7iAErH1tCmLPzDioGx",
  "key18": "5v7jqhcXH47FVGnqBxELn22rjaQ1BqZHmGZKCvJJQQcRpJw1xEZGS4SUWZDV2AcX7KHCCYQw5ZGY4tQkfXxmWXva",
  "key19": "5SWmzXFqPqdamWJfr6vdGkqSZCJhjWhc3m4om5Nc9goS6s5V9qS9vTfD1ppHv95bRAEJbJ4vBZK6nemzuy8ELpYB",
  "key20": "hPnzb9uQG9B39yMfMTEDaYFRpTHe6jneFzFEMVYeNv8frxXVAxGP9yohCReZGh47Wd4ss2NTyu7m6y9213ipNbp",
  "key21": "5WoPmk3pgBwP7tNkbw9Mp9NjDX1DW3tkZJwmyNfTZ91pUtaxG2idyZN169BgwovC9a7vWxsDBpCjJ9Pkn9X38S3J",
  "key22": "3voQWZembULHQMjFWWxqrWX7fFc9hXZJy9QkDBoQ8UgnQe1WbTxyunNMs7mP6MSPYJK2vFmmDyECd2kE3AbqFqcU",
  "key23": "3unKUme3rE2CSUnjbAxtDUnCkDFJ3mY8HDoPSQSdMvhJ5DPZ29pbiQqPNfMhwXtJ9jf6ucYj62mADivge2oBsugz",
  "key24": "35JFBnn3nV9VJYKqWG8qFMw7zDkFgTJbBoQSu8u4CATiGgpHn4qBevg9MbocQrsmBaQ1LzqFwWTU7Au1Gb3x7KQq",
  "key25": "4Ry2ox33SYov6cVHbAoetFqgaVqVxuJnXSoV7yAnGhQJNujjTdj2xPhyTFayDgMhLXpCxUDARUzGxBnnvKH7zXrc",
  "key26": "3D3ggZRK5SPg6NCYGkTCX21E68Bdrdx6xeeq3cgZwgAJcApxfQQoR2aMQhvRLtSoYjVFR7SSuZx6rAEWDogJc5qW",
  "key27": "3ViUWu9HPKyZB3azKTDs7aG52PDavLSbbqBftuWhVbBcexjRvQa3wEFSjE4Y7E5eKp3aEYEXZ3WPtJaCCBHd54PX",
  "key28": "4XtbWwFP2mEW3KoY4m2yUyGQW2jumzytAbvSoPTjwkP82F1t3jNvoFeavNqVD8MbZC1tiaFpyPhyvECp5SCruH9A",
  "key29": "2qhunYQTjVGpmLP5jpRUncJuV6QYfSs2NqVsJGxrJDfPyBh3dbhTrsMyxdajio8k23ZiLYtwjLiszg7RhNs3iUY7",
  "key30": "29YEw3rXG9PE31tWKWs1QYwjyeHCjV5uky6EEZJVp47e3rKrQCbp84hhEcXCvwsQKfTtYVsSE21HiiyVtUgdzryU",
  "key31": "5LZzw352S5X3mnxaZh6Cpc9QjmTF8JhxGLGrLUgdeRh2DSL3HmWQH6pFRYfUphj1bYpsDkWuvtqwDGGy7JakiZNg"
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
