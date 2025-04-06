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
    "58tpCdPLrhnexNvrkud5Q8ssuwUYASa2MerpWoRzG6WCyw2dte7ujKJzWvDtcgCRLHpZunR3eGvT25xFW72R8LTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DQzo583JBND9PJgEsmaXALDqzTgN287NtLfUpmpuXKuceaRLG2NN1guQvbJiBxoQHaNhR3ePNNVbqTcY4QoVeKv",
  "key1": "3GEVLR1WZ9T4MZPhHZqbEv5VBAADdEbxrBGAczofvaVgJdqz4va5b8GkBsp1VaTJTLRGxmMYhu9ss4uvHG58ocY4",
  "key2": "4JHnLh28k762MiAk4jtffV5N6JvfW4MvrbfKjLJmwAuMcYqxkqDMMNLzJWhDEzEPtid8AE5GW4xncspju5J1owN7",
  "key3": "28BiTyMgKbNkSxhXqQCyGhE7KDwSbF2wonYHaQQPsBVe811LgvKp3EfJLo64aMvmbUhbTaJp43JAnDKQ1EV6Gi5A",
  "key4": "4uWSZq1YmQjGnruwzgk3ETSLCuKvGCAW1ka1WosSfyEastdXPN2FQxdDtSCJB47HvYhc4BDx6JzLybBb1Z7QMaVT",
  "key5": "4SscNv72wSkSMLRxtqijMDhbbKMb3FpzdP3AS3wwvJWJ65MbybTgHvjBAmpivtWhfFzXyfdCXBDETX85N6NXeMw9",
  "key6": "4pUcQdGMznrdpGHwH9mymkeRHkh2c4jSbGqWXLokr2azE8YdPtFEDtJQKv6xPdfhS9aLELaGJvh2Prx3uY6iNNA4",
  "key7": "5LSD9nqcA1DTMZqp71XQXmS5DkFpmVazUCSaHVRTT7TWz7TEaNRMc1i4wjtDJk1iMX5gzGV3nLD5JjcY3DbVt2ii",
  "key8": "2pXhuUvPTWSXyvMwYEK4qMKFYrMt1NrRUAnSVpZ7anayfaQ4yyTKBFbYsM4NgyZ89niQqMp2UWgzz9kD4Fu7dcrB",
  "key9": "QaNbD5RBuKBkPaYydJ7bqtoxyM2zHtyXdYdFYQgF9Pnf7mHRxxCPFRATEWE5ytEn7tdrqftm9BmQg7AgjtVMwW9",
  "key10": "5hKQUhjbdda1wXhuS8Ktu37AiJtu6dWfxmxx3q87hJzYF4Pwfe6qoeffBvmUzRg5R9hBAcZrvQqMKhGh6Z1t8Lpv",
  "key11": "c3dseWKqTccarzZS6RaNSDzqddUEwVGzU4zKGkLZojYd6QrBAzAYpsNCPgz4xwiw4tK47zzWVgUFTkkhh4dr6DJ",
  "key12": "27Bf6MMBLzPs2ZzL7StVLkuodHsDpNam6pcqo4oAqUn328aWNjFhVDKQWktEXA1LjxPCQSkAJVznmZwLz7yymV2V",
  "key13": "2AGmbo2dGc4Rk3Qa1EYZaQw4vd5RXk6KbuXVs4esXXHU8VjAhd1PgLBSfWBZNgtn1GYGnQLgqGy6BrSu5zpyeiRm",
  "key14": "2gAkaU8KSdiFKARa4SxCWyqzy9VqDU3gc1PMafDBMwZbQJADUsETBoJUookWDaTYkNiseRFpj1EUGqTX8neyqKrT",
  "key15": "2LY8bG8UAyTjzbsVVNpZqdmTqC8P5tgo1x1n83rWCFuwmiNFntzFna85UJCTs1bLEJXbk3QZqvxZhMic3QNmcwDM",
  "key16": "3JraeQa35FTPLkvMkNskfBZniS5Rdnja97zJdC4PwRhbZspCZkkCBnxbkosZ7NL5vuX5tTAcJu9JSyR3Vjd6mMke",
  "key17": "EHoGDfD2NGmWZ4prAgQgbryrJgRVAVyQB3eTyq2fPfwNdVNSozvaLc6y8HzfAfXhDQTQECjCF1jii3xDc4kkzAQ",
  "key18": "5GffPivFou6TAkFe3i4qEwD5bUa5s6ShKvKhkMkdRmj39vKh6G9RE7ZbK5GARo1g4eRRdP6pTn68ziz5GYdEgfYm",
  "key19": "3ygx3vUAvQyE22GQ8FHzT9bk6pjKqhfzypz8xBsUHbrBTTECGRru9mzvP3CYyumqkvVSs2e8a1cHdB3jfCiZzJKa",
  "key20": "61a9M8bddrpgFvdWmF95vcccWDhkNuU93Pap6ok2YexfKiYveckcYgdoEdPiq5JKwd8w4wScBgGdrSWXNz5o4Yi2",
  "key21": "2sKFzdueZ9X8CrnsiWkt63cwEUMofSGBeYAdJCUfYrGTARZTtXrqZMz7vgsJjRkehrttqaj9nnpDGtCjgFuJQPQq",
  "key22": "4h7pZNfFZ2Wfzai8ryj72ioNKppUQ4YbCihnEST7M3V2DeertZbaJZ9w9ad4hxms2xqBqVj7qf8Lx1NpfiF4wCcY",
  "key23": "KE6Yhmqt27H54DpbbWnBbZMJvghMTcMKDPuVosuc9ktF1xiJ4FqpZtPBPga4VDBRnkNfiqJggWd5iLPVZhMDPD4",
  "key24": "6zsR4Azi443V4pej1UrC1WiP7LQwuDV3FWPEJAq8R3qYmQMUM55JowUwQrtqYZbqLWXKhZnKXNe5oqsvYPxoxvQ",
  "key25": "pod6RVsWv7bQiJEJMAXqPs6sVHFL9j8Ddp5hNJkPKUgFjUUyRZ3KgXuQipZrRrazCFZWYSNBxJEuUQXNSADrpgo",
  "key26": "5ZHMJusV4JrpPpmmXuUDESaTrkCT2MSn1PFSn9LF1rknshnu4zGv6cDq4ZBgrgoUBkWGriZHATMXVV1WfY8pH6tz",
  "key27": "3mmVujp5uQdvyzSSqe4nZ6PbiUGWVdcqQYdFCkWHjgTBMVZCmGzYwSGPHm23jUXXRMiCaJkopfsw3KAQdhwJyHhW",
  "key28": "5xd2GeEprXPJxBW9kZ2rUy1CeweKDAeXHi48rj6SwQij5Uu5NhzeyqoLW4PGbGcgDHWpKJkFUKVC7Y4CmNFEEniu",
  "key29": "tDxFAFRfVrDG3mYhbhxZd1k3TRvnDHk1zAZXcEWxTKeneQN3dAoj7sSgLceL2cLtFsnE9bPbSnVNXH3Dpz4cWw5",
  "key30": "3HYetonAy9qW87dzXVv9WsgpytVBgnFixw9Jw4vqhCsaQV1gwBype75KgbKJPfv8PxsV3u7emyDwFNp4GWSe6NAf",
  "key31": "3TNcfQ8vSNTqzmHc5VxukMUCxdQPyBiGem18Dj62oGqAU75zCJJmVSYjy9HSZNPQJXzBiwtxmCeUwdvL8wK4wgA2",
  "key32": "55tTCGvb8YcKmwkEpfHw5scNNCd1fKPXmfL2XthB1jWJPMaf3SCqircXWJoxicgSbUP7RcHA3JA3U6v63Yt5aEZf",
  "key33": "5KTdnNyr8bKA2sLwgmF9AyLqePUmNYZBW6D3Sq1qNYjCK9ymqyqSSjgEJrNqJv8WhVdh1FMNEqh39WKgvztW48QW",
  "key34": "38VS2AtpuD4S2yWMUzWoSiQpkw1WFu3UnA15vEggXSMGcifnX5sAaTsTUtNuepccsaNWDT9DT6udNR3qtzZfLU6T",
  "key35": "2PFQusHsjWZ6bL8vSBgxt6ZZYGQaJMTtAfUSTeBHnykAXGMrPRGqsaBFpBymaqMLz6C7JuJVbH8n12R3jeUSh1Am",
  "key36": "3Zeie6Mz1LWXJ1kAXbwTEAuBxsJVwzDvuX6H5cqAxxfMseNseXZ5xaCF7XMQ5hqtiqF5z2Bz4yqrvDucub8m3Mei",
  "key37": "ZCAedhjT5z7vPb5m7LvMELbZWYFvuQ183mGXqtfSVQcjCSJQN3PUF7TwtKazuAXEnZV9hFw2okvHJh625GuTLt5",
  "key38": "24PetXLZ4n5JKdCT9j1XsHVVvHjztTcuetjCoatVgAJXBiYXmZ8PpfFMRLkX1SUoWKEHPsnLe6UvWiBPCtH3QMgV",
  "key39": "Y2r5XWqbZb5Uio3HvS356LcT6fHJsKpr4yV4DHHK5g1RZqaWxkrkCRurqtVC6Qg5byHogFBJrmF2baNdHskv3rK",
  "key40": "DQDZXPqhdovg8CWpFf3fUxacptKjeLSbepWhPkBnwQufFVpfeRwRfbxTbABFAAGyoZVP96417bHKdciH1GchFrv",
  "key41": "wLCum17VuYGEiiKZJyJprwzZ3KySbJ3q62zwCskpFbgnNHZ2zT4pMHBNmZY8LgW4eFVBtPdsCt4Rd2j6icUVQ1p",
  "key42": "3GonttEtmVpbcstUmU6UuaFVCv23rsnBhXhrcqutDwpHWkGJBmb5AHKdmdo1eDPhoCnqw6qZ6F22R472S2gq36eM",
  "key43": "3LV7L6GgV5Rv7krKPyNfmnsoFTXWUsz9nV7H3gkrec3s29fyx1szbZy74qPbB5U28JbcbKtMqXn1FXSsbngKXSu7",
  "key44": "4P19TfrBjefKqC6DfefT96ryxFB76VnnWZVwqCdH4Jhpi57fkRU9v111mgFvXTtNY8Jui4oKDYRESCwim1rxDsh3",
  "key45": "4VNYuVBqiBtk3eu1kCquAUGVgyQtVpZzssaj75vnDu86W35uHUzRFakej9nFxNdhV4YhgEXnaU7b5CY36mGPUAT3",
  "key46": "5ZQ9fkPmiS5L5gP5BiLLYs7LJuVBXxmqE1nD6T1nYg2r4ZaPSUsjyexcJSTHSPcLGU4rk6xndzVsRj86P75ghkqt",
  "key47": "3Z8LYMTGd3AWA5tpECc4j5buLsKeyZgRirjnnF2y4W9qqCSJx4N1Jxn4iFkKbNQvt4XkZVNj1MFm1q3xRd973MMi",
  "key48": "6Kvxjex2L4bfCWcFFGy8anZL5YbhKC4U2TNzdbXWotmJZTM2rxaErJEQnugCDuTMw1anUaytzmLaB7NekTYfsSU",
  "key49": "2Gs3XBaGnSomSzxVL53QVv6jdndM1ooJ6oLuJR2qmvFWX2JVDzTx73D1Yx7x3fvmMhPF2RnZ2xEPZhDTrfFNWTs1"
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
