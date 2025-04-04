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
    "JrnhMusJ9UXSSMeViyQHnUhxWyyoWR4u4GsP9yGiWqUDfev5unrV8G9tz4MN6dMdg58XUbWkQVtiCD7P6f3raeU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fiwxfjFBewMvmvQTt9ndFTnpCnTkzA9e29q8wYQfzNoNbbGrMjeURswaikvqQDEfvTcnQLMmt57KNSE3pEqRqot",
  "key1": "3ahwgDmxH9pXH6Wf8NniAWcdJrjvmA8AaKPYJdZ9YSGd6SCjjbfJWUJxsxVsi5eA5NngtSwAV6XqLBbQPe16nTEA",
  "key2": "2j84wmYGkjzmQ4a2E59cmdWAMrxrUXtty6M8xKMyowVh6rpPKxTukfCJD4WV1Bj7C2dTAwggoVtKcCkAQtZBHL3v",
  "key3": "2c6YRzs4oPHyJJxREEfqVmRwahRYS2EGrGZMyfDdvAANgUC3EwnrJyGmf7CBMvpNo5eV1C2o4y72Ygf4JGFK9y4S",
  "key4": "3iLD5sdAmaazqfWHbCfJ1GHEDcS7LHP5rkvdLRuZYMwJ9jm4o6bQCNACPQdMbCPjGZxnbUkokVNAgW3ZfHZ8cMqZ",
  "key5": "n6dJncfznuwY2SnBHYGymyBKxHiWdMNqpWzBqSvyTZNRdDLYXUW76YPs9BTG1yss3R85oKT3mv2LEsN5L4Jb58F",
  "key6": "pwf9PdJnVUU3fEqdBHWCDQaDjbpeBQBMTMKX6eduFpXCMXRjttnM5PngEm9LFKpDotqqs4skUNLF8XRjyjdH2wi",
  "key7": "QnKpzAU4HDYhGdBAmTk2RYT3VU4kbcbP5EWJB8y1xFVyfjJ3Cf36EQhHGjiGPp2gHegnDUg9no52bDPq7sFRXBt",
  "key8": "2Zg392UGBQYKqVA21HUhutvpF5oSTBNH6j14qaG53H4yQ7LnCjeKsfTQPhgH5iv5bZ4jCWkWsCErvPtnsNtDXkrL",
  "key9": "2K1HkH9VKi8HsGtM8r462kEARYyuwWRqtGHVhZAiY7uEFdZws4e5d21HnSGqjKQyjfeMhNs7JLjWX8vHw56ZgLir",
  "key10": "38geTMVavnQby9Vbwh5Aj7HZtfXK76iQNoaP7nrKhTjNhrQSmt1m5yyNXCCmp3GsNAoYmDqHeSVYsXdJjbDkh77u",
  "key11": "3EecSPMjoKsztsSALqZKZzXKMHhFMtAKnk8oh8qdfE6ZLBPUvLVd9msWpwxzzRxwgAQBCuTLVxHqyxBqQdZLCQVK",
  "key12": "2XdC1WDprhKq466mHFbLFzoh4EpgySjHL5Q91LXdWoW2ZKFYkBRdEf84QaxrAZGdPnbmg5HehG9qh98KF4UBpcsA",
  "key13": "31zaMdGA8h7Y8fcxTKuYXKXaxGM4FUcgAneQMHSFQpvREgHMkT5n9hwcwwEMk2aehcz1yU58GHayjjiZgWVtAPb6",
  "key14": "4DSXbSPGNPcWQB3oLf1ybL3WLkhpMzU3v92bLHG4yxVx5xZFCb6GfH37zYcPEkFxFAAozP4GT1L4jbye1mSXzxgP",
  "key15": "3VwkhNY8HSk3r4VV2rX2rtNReSrrtiWfq1wQefomMwzQaUikELTpudkDnAR9jHs9YffiVCe3oZ5iUWaAUbfLzZz2",
  "key16": "ZGsV8sujwwLkMHbyfbj5jgtcQM4EfoL3e9zGdbVcqNMTq2Wa4biVZArC1e8YLuwcBcVPLVTsk1bpD3SFe59xm91",
  "key17": "5vSKQs2qFAiswmJW177gre5U2Re2G729JTrLoxSfexzH2DCcjgCAQQCY7iRa3LbmBRSrbdL3VC3h5QMUnTBStz2B",
  "key18": "4HMmaWzVjAdi27Sorozm2k2bsSEYqPdHjQbJKVxnHwramAu7WboQaFjHvfZqtFYm6BJmnvCbvnD415fnntG86SYD",
  "key19": "368ArBbh6N1fD4KtqzWAc1f76SPfYrBqvmMcYmGNYsrNkYLfRy2Uq4sDg6QYem9vYEdXUX1Gr7TWaR4D7hPJWwvN",
  "key20": "5dkkens4ps6FPGSCEwq47EuAiDed44rwC8rd8nuQzk9ptguf5tsA1Tnvs2v3d3F8fiTWQozUYv9XJewUpz8KS9vS",
  "key21": "4cNA4g2LEtBn9P6cM96V5G4qYcmzeCgCUgmxG67LmiByLYiaroGbumQu7ycoThwL4n91htSHYCqZdRv23uuiTc7c",
  "key22": "u4h3n1HsPXkfuzNLRFFipdFGTA8c7Zg62AzQbna3zAAonxMQ1aiLmaY15iG2UzqAgU6jhkHro54jcndENL8R3fC",
  "key23": "2ayzHhom76QJPMMXwJsgjcU2KSag5A1XcogVEFyimceHm8e9yMXnfaqeB5qbwCLY17qagP82Hm32ojpxtCeCzd1Q",
  "key24": "2bSYGEipeVpxX6x3KCQDHJ5yVYdc4TZkR4yMk251HqNPJsdJbbvQJxNkdRf7fNLqNSzLWzxbNahND94qUjD9YprQ",
  "key25": "3wpFgrtzQ4a6X614RmjzLBBgXnGV5DpQQagte4yRNkqGda31qwjbJJfDb3owto4u4wCG219SteYyzRJNjsiZeBe",
  "key26": "2QK4L8xjqWrcYWwnTYCn23qSAaGUupQsVvB8e6bsFFmcvDrzMxd5vo1gSE7TMB8BYgqGKrvL5jfeTuterrVcDBUu",
  "key27": "48Sutvhi21TvmDLXeUpbizpBtyNt8fszHD6ajM9fXraXuRqo7azxJVsLJmpUc7d6jEsKUZv6WB5kxTg38czCA1jz",
  "key28": "2q5N9nN5cb4tMMN41s7sU63sJzj3i6iqbX7azA3dg2N5zjeEryKufn5xojEKVqg6vjUXWZSXjwqcjbdHLVnqyyMv",
  "key29": "3BVcynwvNQ72b2adNF3g7DzRryaj5Nj7ZBXm81osZtF1tvv7VD72UvUKAqjidUJrqq3TCiiRgaGSyLtMAseP8Uyj",
  "key30": "351CjDRv5tq4B3811ojiQNUinRL6NFQwFjabQ5p5YAyaFYpzQZpE5LZuEa9BHndiRgiYnivZpppa63grMXHJqM3b",
  "key31": "249wWUFveM54MVhyGgFGJkUjFU37etQKu9jo6ywvk7CZ6icP9Pcp9Ces185enUsqckefQ5pCWwg58PicxqwkrJNj",
  "key32": "2XLdsZq9SWfGZQSSga5sXkezyLVnYrwXyJH3Npnh8KTfrSCAn6Qh2yu9KndbMvrPwYdHdSNa6C5nDqto3QrAcUdP",
  "key33": "3XYNfCnZsZtjbRK3tqmnyqTpBS8k24NY1nhq4G7hfwLnT3pHTttZp145dhsnLKS4zYkCKtpxo23ziE1CdJUkkJBP",
  "key34": "4Kaa8sBu6jd9x422zy3bi4bjnxdg4re7PpibKFsEGR9qfs2B2CHc61CWPhqDT4125GtNKuxdkcDFXSWrkXwmjrPh",
  "key35": "4fTC4VDKYKdAVYa7EQ6qBB2Tj3MZQM11FRNP9MHedgKcZLxEXWE2HhhzdTjgGsi9U2ApCEvrVyg28pxJLPFic3qQ",
  "key36": "JSmtzko1T5E73TfST3k8pM4QtTiSKaifvio8mk6NHMbEYHYv5AB3JyYi4n1j9oxUDkGke6zn2p7XjAhPK5jUYhe",
  "key37": "2RdmuvqtS2NCMQXcw8mfh1LsCWZUD2nRxLSyA6xVjUsSifZUEZWdVfeiyW21T83jmN9nqXP2waiLxCgNswaM8QGM",
  "key38": "MUFRfWGiNVyy7B3uNyYcdwY6gw2mYStvxAB8bFSXa8NqvDEEpG49EBMdaW9sj3XNovvkakX2NeMuEmFN4iSZprH",
  "key39": "4sRQRWc2NcXsym96rybmnevq5dbsVyXtvsH2kT9Hxiq21KvWY7FuHjMkzkh9v9Dhpp4S9hSRJboP4o8fbXveu3BR",
  "key40": "5th38WSXUuRva2xiyFzLt5WMzbSxxw7U5dyXhgHAzpChY17nxvYrED7U5yCTNjRY9dueLF8XGVokE9fjq7dYe5p6",
  "key41": "2NAqR3ieHiTb63VcHbxE8ZBXhFuUK2NSUgmP5sX9ym4J1q5UKVXKNKMBqZJDjhxErvewXsEoiYAgqK5piLEKnb9t",
  "key42": "N3jLgsraq6H6YqwLh3PY8TM4P9kigW8ahG2jwhxHa7G2zbhDFuW9VA4QLRzN6J9V3rsarCGWEpgwC2xTVjTMTqb",
  "key43": "22FTkBm4KBNANEfU8oXHDtSC5iEvkg5c8r2HZPwsLqLRwDiZb9mUG2FVarBNEbeFpcHNfWgVw1ttGUj4vhvhuJFB",
  "key44": "4DZx8WzeZ7Ea7JWFzSq46NeozaqEzLy99Ajwt5SjiVYdSqCP84YxshBVb6wkDao5EEhGBrS95EEApQU1TqfSMbtD",
  "key45": "am3ESKwRPjvsr5Tmd5pHyy4pmRAQxKZ4cQdb9WLMXP4Anf8w3Z6gDKwvfZ4tadBGXWayEVpCHEBQojhBvnGkmmU",
  "key46": "46q51Z5BKr2Nmcx8zW6xf7KYFBnszA95YoGV6XNbkfLFnfXgFJrtgBzDKZXZjZ3L4GaYdAAfiG3572Kx6F7dECyB",
  "key47": "2DfcjsbbsTsJ3QtoYn6BQ7Pdy3fnYeTxXhqFzvmxnqUBavvG3NwGv7oTQSE4g43rqqTwaXSKg77MArHBht98cZbW",
  "key48": "5FCGSKkcRxEwpo1c842v7Jzxt7RY9vAHkP1QbM9GsipX4NWW2AwMHWUiCvk8FY2LJuSwtQBMWN2EJZvJKvEgTxN4",
  "key49": "5871S4PLWujgrpxkUMtchGjYEdqPnrSk3TEe1S2D9Ss7KMi2rfwM78eSTb1ViYZLaD8h6qzN7ZNorHfgum9fezdZ"
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
