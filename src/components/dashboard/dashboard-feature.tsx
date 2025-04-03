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
    "5j3jajofkw1p2eWs9LqYWYVCh64aGZfJNXpktHYzpZ2etk35hHPGSsMchJwvM3ybUWKCHsi3cQjCVSk8hZWWv5F8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9chEc4gPsgGmtADU1VhXR9auZtGH4gRjonQAkiPDphusophN3Tt4hJP2LFL4hyncLGPGmwv3bYVdceUcTBwTP9i",
  "key1": "3cGW44fqiBpQFkbsAueJc6AbEXNBe5fFMKcUvVyC1riQQHqyHCFZHsWgP3GTnZGVYh6ygcfnntDDMZv4hfya89Yb",
  "key2": "2fPPuyazGgvmF1QrvJ622RYhoKAtATWvKftJC7vpHjuGwwr7ayZpeDfFqffirpGuo8buNsnv1uzKufTo3deXiwzY",
  "key3": "oBs44ySAosX2oSt5bJbrGJjN4aruyNTThyaprJwQb2hXUhx7YHsCkjbgCXii1YrCx3D9jycZAU3zJsaBRkhPbHM",
  "key4": "3SiVjj3Hohjb4Fzd6e3sbtzvtHUR1Xuc1SQuT7fim5BLYBi7u8pm3BLuV29kYhoDMc6h8kqR17pgJymU1EuX5zYU",
  "key5": "Z2yiRP7CrDRxuTgcNyYRbscQojbUeS8TgxEbsyXEgvQ3CHBLGT7c3Ln13HwNnf8WAkJYQ6UgP9UsMTBxqP5dSaK",
  "key6": "5XmFP772LTAhSLoGVCxJKQ8skgSb1TkyBgAkA8kK7SoHynxpZLL35hWMLmj3jUXFAzAoDUmQD2i25wMHsyqD67FP",
  "key7": "34Bs9HMmPpviARugFmpZYrH5E5opmhTWEdSjXkygxfSuEjk5g3bzxhwG2cYuQqh7hGWca35ZQUpMAVyGfaHTvJua",
  "key8": "5RyBbWwpSz6V9Y8kMzB9Hj4W4c6o7xfSZZ7SrBNdkZb3vQpqYRTgGtM3VDpUxiEaLRj3mU7zajrw3EFsFzPZsGuZ",
  "key9": "667WYGGbRQS3Vrh8vTG7wrDQYehCp6dead2d4h6sbZTDkB4RDh86BG5fGoKsSrNeyaweJ81HYwWcizioFQH7QKeq",
  "key10": "3zREgWAZAopoyRLCv9mdiwxRX5YkkMNXH8bkQKfGV4MP8ctYbm96zPcqkwruriSeeJHDWc26bicZ881Y7h2VBoMe",
  "key11": "EcjHthnqhGcv6BnPRQYJLmbcdkddN12DrXz9LF2gB732MCW99yhG5adWtBFrosZVvwT3yHR9QydkQVPRsUUoWzb",
  "key12": "3YyM2vs6dKpiTXfZzP2N5bZcuiMGisDPfJRYaRw3UU5wKZoemYHe2Pxhb3uUwwXp3EUxqZdGsYGVMe7ta1hwR8oy",
  "key13": "6ERgmpNMjqJc5vu7Z8HwArynbpBYeE87eQctdavVUQ5mnaj2wc1wJiuQMU3yqhGs2L9igZKFEwZVdVYKJUREi1u",
  "key14": "297RTMk4XxsNP665k1zc2Y48xsfP9crhh2xH6Z2SDXrEhXhKe79n45tYTFe11WP8o5eGnoR11vmXcAJw9vL8ruW9",
  "key15": "FWia2dNdDQuf35b1pzs41XsjUu6CH6JSvcaQQ3zJBfE6ZZCo7VBqS4raAugNnzseJjuLzrMVTJV4z63QRcVzwwE",
  "key16": "4RJHiMiCey4aGFnPqri1d2NuhZhJB7SWpYgxUpzf2UYDFs9L9hcPiBQz8kTtwvQD6B5Fsbs5mWkdeKicQ5hqcJGs",
  "key17": "4EqmKjzdwaWoZaPnTUj4hrV1yi7MNyYyTbWosnsDE5h4imHoziqh67pNkeSf9o6aizvvTPLvb4GiKVr2PmfAk8tc",
  "key18": "4ZWZ9qgo6nigMvFyPawekwvJijtdaEETVivX1eVKySR78WZFWJ6tmAZt2ML7D1FouDQdvBVJ6mZSf6ve5kfV2EgU",
  "key19": "1YYQJeRKfFCoBNQvMjDqyk5HKXbKtQC2hBBTh4MsFwnLiXseNUpfkoa3ho2fzGXWvCJKT5jZ8e6n9Xrko4wYSXC",
  "key20": "iqE3ucY9mWLL4vHESZLwKdV5ax7rJQaspzTFcUbZ2nh9bCB34PVo73Kq2EyZy16PGJ6DRKJqFib6WVLpBKGEevX",
  "key21": "37CdcfTF28ytsNPTg5TAF2oV12BdYMsWSgtMvYyYvDCXroG1BsWBn4JrVZaJEMsJjkAULQD9MgRAgwEB9sxbvuqT",
  "key22": "3ayfnrbna6NbZqPRxrMyYZfztnuWhV6fm68WJm3GSLzEnGow8j9KbujAuxSFMKpZTeHRji1wAexVNvvUQRSoNaaD",
  "key23": "3LzZFu3zZNSLDBoUnxkubQtrnLTjiPG6m7kuQ4zrY5tfjy9wYPwxeC8KGGHQbrmpRZx3tzohafZ3tsztVL4PHZ5h",
  "key24": "5Sm81HQ4C9Hh6U6LWhFkYEw4DZJXiUWGzKkmsjRfvdKezmosn21bK5AHVLTN77B1BsUmitqinS2EiZcoV7rbAtgr",
  "key25": "XwUfvNyc67Txd9AYhwyB5XWKG66mzqCLQMR3G5V5pmAdNNbo8NqbRRHa1rKCbbzdm1ti2fXoBubTzkAvzwULeLw",
  "key26": "cjueZojJjtHT55GGwK9NA6L7WDyGY9Gu5aUyE8krLRwFqGjKBHv65KfiRYARYdgpPxUrjQhdh3LugFYb3RMNLM4",
  "key27": "3k1tGieebqXRqWqhL6pKjtmKUTWPPUTJxSrxJfxrBPHDfxZS9fkbCPLDZLK5UezBXYZB5D9FFwdMa8SezK49jjZ4",
  "key28": "3WUx85nfLs7jEDMLYZQSeJJmatcXL9eLHaexhzLYtQvubxjNL6BoyxT2PMU2a3GjzJYAgdr2Ks2ViboGL1Yc3RgL",
  "key29": "3AsDRZhDimqCuMG36dtWYBw6WQdAPAdxHjYWSmvRMqgawLuSan4sPHiEAWyQ2uBs4sV1cMSKP8KsYLEzCaijwD4j",
  "key30": "4yjgj6rQ8hrdPF9J7LtEAQ9WppEoudRvcdNdkwzCBFnWDDdd8vNQ8XDk6aSUujyhu1R93UfQbQ8i3PA8BS5jce1v",
  "key31": "2rkFoYv9SbmoaZmcFN5yFqAgjWu4YWY1kgrPPTYYe245rHTsUEqwmJiKcgpbK6DoLaGAZy4Gbc22oAysWk9Rzyjt",
  "key32": "3CddsF3Xmy9ZBmfymzNBgtJi5gUNLZFS42gLPb3i6fR9adJ1aWEfKdbhLYg3RNwTjDE3h76cgXN6nbidKaAnyZFZ",
  "key33": "2XMtLR6MwoVV3HnTxgfUMqUXUwXXDv5iGi1qxocuB6oQPk773Rda9aDQB59RqiqDqGKEVeWVTvqzSqnJSnkGen6X",
  "key34": "PWHhCt9LJPrnTVEBekZEugAcMbyEwF9abM3869CxxHj1pcHAxzVmwZKgmburc93DVcPAshSeEHe2Ax4MqREoqeu",
  "key35": "2GQvrpA39hUgobL9so2GwJjj3E7dGizA5nRkirxMoKPqPM8AkbvDU5JPZEwWkPL4z4j7HW2ZZbiS4Ufqr9Wn25Em",
  "key36": "5UKid4KcckG1DBUa3yYGN7mYSS32m76BsjF8CHQdHxochSM3BE9pR36E4QaBopyb6bo7bSFdMot2WeZTJ5TAcnBs",
  "key37": "2sSZkcuLu4tEntwgjfrVdPoP6crnH1uFR3WQvrW1jShyY91zViyCzSMyni9FntsiRQZ5MGCTkPndegwo2WATkgdP",
  "key38": "4aMxENCUFERtS8jhvuieGi7XATRF8CUTpRybi8KMJpkdRNQMnu3MADVjyjb3mR7pWgsFUq3T2j5v7MXsTpSsdPWJ",
  "key39": "5zafaknMjNAgxviEwzE8bhuPwq5wVM9vqSuVSwfkaXFjAoX82RVrGhQmtw1vELfHuCcHzEDqnknDsF8uCx8Lpnyo",
  "key40": "4NsoEB1ktkBDgWUGekszJxp8UG5vfbz3nQcj1JfKN2x6Q1QSGhEme1MdR5k8ifEKd7N5LKCK9FD5hH3vkSX3QLRE",
  "key41": "2MG9YrNs5TnaeqLmS8mr3bs3wVzBX5gt76VgVNNssowvHRHLcSEtFEfqZypAmEJhixTL2W6yDRa7XEQ5QpHA2gcF"
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
