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
    "66VPeCBhj73Cx41Sh74wuWn9et9yPRtuVTodRey2aU3jLnjiS12VkzmQCDwbncP7qa2mdcp4RpktmQLC1fm5hWez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VCa89kBLTLNPb5WN6bkzvxPr17Ak8Sg5vywhMLUUv279f99Yo8Fd1SE9ovUY5QX3hJGE6d9gm9tddcYVgTsmpTL",
  "key1": "5nnLBrVHotkRyFv2R66PdsxCzbmJugP2xerW6PtsmFnJsbujLQWNPZ8Q8PaQ1mtd3QHzPnWcWCy59Cataphy4ht3",
  "key2": "4CTzDMjpru18f8E554rkjvdC9DeQgCwbsq4D37JJJdFfWxPAc8bsNZeYJTnqjcHN7DSqPLZVxtffsB4Wh4iJFtko",
  "key3": "3tLrXjDLCG2s31QuzhRcHtvjjG218nEfMzdSXP8fsL6t4GHsGXyKawxUGDNXNoMs64cz1msgvrPbU21QmEB9NyLg",
  "key4": "5gRUNUm9T2QcYFY7DtDUHvZjtVD8LyPVdE5NibrqApZQ6dutRvGYA7ZiUoyPZ1YBSArchTVrXBMQrzcK2c3a46s",
  "key5": "8toScfucXyhZaXxLfdTq3DAtFLv2aUYistjf8FRXynGFg2GDvZsdCT1DiYXw7tLjVBBa5HnC8DUvYY8qKa4rVUh",
  "key6": "3y3FxNahtuFWECZUwwnTERfPAqWB8JgAzniLFKhupQqXdbWWT9UAwjZExieZ5v1jvw7dyuAdr3vvLmcsVs6R4qfz",
  "key7": "57LEKmrjRAwt5SphmjgXmJgmVUzLE3NfJo9kVDZWVK8YS7jmMACJp91fyq4fR9YZwt8sUEVvtBxR6udMLGncaeaL",
  "key8": "zHDPASXhnS4yzCdeScsah9c3TtVPWLfvXqcyhvJfNVSi2Ym7pwZ36PyYKGFfxt6C56Y51jURps4EMyqAnnWpiwk",
  "key9": "3CX135D86NZpHgwEKkX8FqgfqKWvx8e1qXW6CuWCe87aTPn9EicA4xcV3aXUvebLXNeEvPm4L4n76VXX2rM7AjqB",
  "key10": "5xzM8CBZRZzJzHoX8CunzJssCqADrDuAS9tmyYxE1rxjJAwNGmeufKUzfTgSHokAghEwRXWiHyRE2KmdqAyftqPV",
  "key11": "Pts8UDXgGopHRYXkFf9rN88oS9BkSd9FgeJFBomeL6HCEChMrgbapcRF4B3HkRuaeaGRFTauwsKnMnChQU7YWdR",
  "key12": "4GUW74PcgJmhuZ3MyJhLQhX51FEib9Pe2WeSDtoHR69rr5643pEC5N4cXGFGG3jQXBZNu5pAmCdSunc4oCc3ouhH",
  "key13": "53JJiRgaN48DcWzAwasMwRZJumzRxosarpcsrVPfsRVo82ag3VK7fPiA2N94PbmTofmnDsjT1u51KiGrSc2T9wkR",
  "key14": "3nauZsGfqjvDkHHtCidU5ya27HtjwcDGo4UAR8euwzvTfTmf4pmBd8UgwqHa8owTfFb1sAFAbwCHNqLYTLTgvv2Y",
  "key15": "2uDotUMQKwszPxkfC8B7BcoUBv2NifjdwAXF4BJZz3t55SieeFCYZGhNgEoVi6hJsBb2sWDpBsSiTjuBqkP9QM91",
  "key16": "2CrzrJBcFLNygDHAdpUP7UKZXCjazZ9Py3CNvrPnsCGHHKiMgEfoop4JukzpAUFCFTHD4XKPQxyGdHzr4P2gbPdB",
  "key17": "hnmLZpXHuJJ9QKFFK58hEuLTWRzLaAEx49ve75yTk76GmPrwwav13N1J7Fa4vhY2RPpjGhaSe1r9QfKar6mfZHy",
  "key18": "3PcHZDm5f7SrSabP3ZimciprMETBWvsJu6XFh4B7yLBJGhRYyvBcZKCWHmLoiUkA7ZSQZocsvWN4ABHJtG2x4idC",
  "key19": "3Dy97EDApDsZLbenwsgxcY1eTaM3HrB8rdM859MEia8mJvxN2qPU7C3FrLHMpuvMHBmDseFM2T1xk7TwaQqntvJP",
  "key20": "3ZJHj1QFC5s6q1q2okKRj5kc6wZu8nSEJSqMDnb8RYQq7ioMEy8n78FVfC51iqic5FzcUMVHw15rF6dAphjhK5L6",
  "key21": "2rQNe7Gdr8LhBbqmWbwB6PCXND6pW7eemUwTDZsnbA4MS2THsYjsUGcS8JG6NJLRDwDVCoo63TygkPFHaCRMGoQT",
  "key22": "47cfGLnDcenPGph7758Q8wyEyBbjiBa27tHJfztS5KkD8MMzrojR4LyFs8MjmtfspqbUenPHY7LsgArqxMFuW1qS",
  "key23": "w5RDdwEFg8KYav5ktfdqQoW63KvV7tzubYDdqy9YBSUkHxNRSYLCVfLQSX9NUy7AUUyRe8yM36KoqYjamwQExJU",
  "key24": "2xr2tSCx989U8cLwYDhPoXvfwp1cKJoqj1Pe8g8NEFE4rUQ7JdbAsiS8m43BUUQBXPYAFdc9nK2L5HFrxZ7nQZiA",
  "key25": "2jzyRBojk6BgdViPJaUzPQLY1CpLAcS63qy8Ma7JDqBSynoGJNkLABHxKgpppdc6bfnGx3jXBfafhKCKM5JR5Yaa",
  "key26": "1MtfWPj4N5PxJJHLc9TooCLaePzfuMndBWqHzzCZwgqr4UvRm22iRJ1LdoksptbX2irZaGyQxni9nNHNDZQpetY",
  "key27": "5J53A8mPqnJ2NPGZDGK8cKKAu25LRJfnZ13ukU4TNmQRc7FNSFVrAJCECv8sqAyDiT25GL5fhzun37wdPzJ1qP8k",
  "key28": "3ArBSiSKMuP7KLYmkeTz8T7iLB5Zv9zTa8HajrE6uLL3ShKFmYBu5nzVdPAHShM6EqikTSyk9dXKHdadacZCsjBY",
  "key29": "5kGsYVET6Z46WmPLnDuDyq4mEsStD3EFDd2eweC2y3bj6M9DMk5tb7wrNSeFf3QUEHA5y2Eab9b5ZTg2VJgKUhJZ",
  "key30": "DR9YMvrXNxEPHWfomCmh1coiDm5C5rV5v2ZTHNcY6dQEMyVho1gs3vVzfpKQfmQSBvVHfNMKGHKM1dGviiYukmF",
  "key31": "T6QSo5GnCFPJomJYEx9M7UoyNo3RgtS9xSmk7r58FzEEVYrDvbdo5ZXx9eSSQPPLRnGZT77GyYTYM9YkznaEQnS",
  "key32": "55q5Cz4SYuzrmPKwM3nMj6e972LYFmT2VfxSWgTaeUeXzvtRfDmtXBqYCqNqWxzDB2kwitKwVW29xx1CzbohfWL9",
  "key33": "3XEYce8kan5ajiaRPy1WmhWcq4zQGwUANKB7WLVhVxjSLwGXCWy6gAjw2vk8oZDaDQZqtggwbvi4H8GtgdqEJiN"
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
