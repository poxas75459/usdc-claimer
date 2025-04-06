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
    "yziQgVSn95R73BqmXwBN1RX2NH5tXmehz65jWqkmCCRtNtkpwxkC5q51SAT3hJcUm9oymn2mvZsABwegagQYzmG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21qEeFCXFcDL8mTpcZNLA1KCgJLHAs2LXYSSYs9ySzmV6SWRYU2qmKzagz2ztuECnjBRbB1MCHL9boysCshUvvou",
  "key1": "3iKNjfENtsLBuRWWSiuMhrKjbxY96EbyohQ7WD7Zo2R4YDi8teHcHYKrHuCqQK9FtRAH4zwMSouTY4PXCnbW4Tqg",
  "key2": "2zN5Hh8hYh4sVKGn4kwtq4k9SDchquWk4K755oD8u8mLAamcNNMYaQxw2bSLWX3jhVDAzCpEjZWsg7uMVsuGocLk",
  "key3": "3PgVifVB64pzWLKNY5au6rXZRvKUcZ5QJytmBL6bnkD5p8fyhNYCTbgYX9aKUDyEJoWk3i7gJSDNuZXMXj6wNsas",
  "key4": "g16vX5kELL3eqHesjzn5vZCUqyR2WNWewwuvFAi7kQsDWSVDhVAFJNxFdeBbELLDyehhGx2uJtCMFxm5Bx4FH34",
  "key5": "5rBnLAVsyk7fBmwMhTe2PmDcQD5qiJUyYUrFvHjfvJH8uZP8w5P2KuQ5hYJue8BHKYiLy5upUWDxsZQ18grHsQWF",
  "key6": "3vnGrg6zc5CoGmNkJ8yK5ZctzcLKWq7AkVd6JZN4bfMEwKGCik3MpthLdwfiW7SLRnquLTovTij1TpSJkS7AMwUj",
  "key7": "4xvRJjGW5aozoMpHevDH94RfKPE1SsGdNpLWs8MzWVqUvCSiJK3iUo9EwApX7tH4cTkfMxVdGuEHWbRscdrzYrc8",
  "key8": "67KvBsMUA9Evoa1zSF5DNZ6gyC5yNnw3ro31jwheaSqZQ6ABagDZVV9HhzrQJxLXDp43kMTrfRnbNb3bP25Gvh7B",
  "key9": "3FZ2nTNHxhUVYvUCwTv8pQn5ntbNXZZdkeBR2AniCeJWqpThHbkTvcD2WvFZiGjJL212ywCtZzGgcx2MUg19oCLP",
  "key10": "354zHAMfmgk2DxpKBzmxCHERoZuchvJw5sLqzQXMcZ3Mo6K8DcDumBEyrJqAXbPgReS8UY4CTegQPXwus5HQWNGL",
  "key11": "W4nMyMME6o3rnreFvhZFVozuLNLz1A97RtHxVRHQgBoeZRoMyidBaXEiabEavzSd3DCd6CfX8M84AaxnHAZeE8D",
  "key12": "2PP6bAYkgVsCgfNJfAqSifMDJkegGeffgn711DKh5qPMUawh7X6Loozk4W59BagJN4SRTzo8RePi6TpjaNwzaaRj",
  "key13": "4WukP4ajMWMU6ZGpJtik2R4qR5DaRD84Q3JrPqEXWST6BNXoKL8g1xF2KmoFDWUj78Znh4VtpDrYAoFnCM5VgAP1",
  "key14": "4L34gf1k769XkAn31nRSZu6V1Fe8fd5zXzaLGXj4tAs8DJHbJqKquWrxLhhqLfb3qFRKdZVF9tGWsZUjkFtTfCzG",
  "key15": "2NuGPcMvDERyGbEqouUFt5bqe9UgoskeCgPmXaPcb9nWucgkG2MJUBnhPqsJc3rZT6tkeVpNqfoXXmoukktishpC",
  "key16": "qnMEBafuLwYAHGN7L7kPcnD1By7FuZJitdhJAv1gm49MRAuUevVyHQjESeNXes71kFg9nzWgfiyi5G4DdDjnDvL",
  "key17": "2sfKfN87jvTbtHbNJLNJFScXVJ6aWcLzATCpDBLz82BVhbzufGHY2Q2nNu6c2Qwc933nQtizCXy5i4NUTmrHeik3",
  "key18": "4ZnJbR1hUPnr9QVCLadZSsH5u1uMPBTzNS1p9X1aFZFGtSkRrsWoiPJyejKwnBDdZh2o6aWX33PvvEvDqWahhtUQ",
  "key19": "4RhZEnbmiqUGiz7ddNLADRVwNEZRNbNHLofjehvdiiGCHa8jtNdEtAvLVeJx46quCoMXLHBeZQ8YWs4vgAKiUyLn",
  "key20": "4eP8ZVWGZVbWG45PBH2UcZHF2YmW78BfdzWkxkXdNMr3sghZV7ZRyxMCGtuEUFLzo9n6bHnspSmuot9qVuTmNwyx",
  "key21": "SkHYq9qSmjHT4UiDwtgdwZgQrShdB1xWAy4wjfJT5N1eSSvKUSmeDmL86yvNDGJfuMTPrthJRjKFah9u4iecPfo",
  "key22": "tRLXog8JTC81Gx5qNLLrWsyv56X7cfcLxsg1DhDEzGPQQuQDE3jkFc18vXnrewY9pyxU5QdETKPNBwUYJu7TYSq",
  "key23": "4KSKxNmCehZJzMfum64n7uJsrggDoAXTrX1GSFriVBwrKReUgR75u4hbTzvYA16TGukRcEaEA16EDVQF88pdqHQY",
  "key24": "1ysK8h9tp8trZFBqvUYFHEHfbCUAqQ6mrckYSFReNvFZJPiT3gQECFaSYW7EUJGYNPVdNPoqbcn9DMj4haeYB4L",
  "key25": "dSyNyrn9ioooQUFW6vKQaG4QG9skbPWU8Yi2nu56QQGDpAKVqRy93Z2JJinKpgfjTm35Bsp2A8zjGWXyLiVjgJ3",
  "key26": "2hiBGXq6Vzjvn8oVcagjCkcpBqC288Jyu1gvfJNwk5cCyFJC1weSxYRvdhR3oXRvPVXgWTP1LSGkgQkE1C9bVZeZ",
  "key27": "3xiY2mJMX3eMaw3hBLfWVS1X1LSFCHCLVQpbfZFUhgsyGx26ycuMkVRRFBJMeLFYj47F7Pg5xqwGo5b5HQCUZCy8",
  "key28": "2ZP2afbnXyyjAyc8zmCieYDaJQ3L65ZV5Bw91y1dziNQwmv8m83VnwHA4weHRNZu6PPWtwt31jszXwFoDmfJgXXQ",
  "key29": "ud2dqWdT6JVbeiYa551bbpiV6NdEjdTZByxKP7817cXk6ac7pyxS8kMwJs4Yw89vEXw6cmewGRSmNK7YkCEB1MV",
  "key30": "4CZioBnxYeJXs23StdjneHa9Mnpb7gsUNtgGxEwo5oDkrykGNM7q4MUWXFujDB2xvVXEAkUkcnuZBc363kqEd5Yj",
  "key31": "5coeQrig8PWPnwqbnCcXiicx6tuQbRumZZni7YKLa8GhAbn8eNMVyUzRHBp8Uro7mHCZ6Lmq7FoqVTZFPAUCqm21",
  "key32": "3akJwzxLCQiFLvCRSZu9nLJNMqX1Qj7rroKRqr4uffm9T3EkkzwxFZ33UhQ3BuHPQvebkmkoQR5ge4VTgneLH4Un",
  "key33": "4pUYmyMNE5JgzeDP81iGZE1AMGMsdq1pkxdnXKiEZz4GDvgu3Zh5Y6zEi5HZhrk4qif6JX7NK1Zkqrq4qtdZyPro",
  "key34": "3RaDjD5X94d4ByF5o6oNHLiNCQQBqFJYDwnGqt8WXuZuhQn2fT3Uy94DuK4fe3wASGzp2zUnaLS6EbGP9mCNWGaK",
  "key35": "nKkteMD6qVEgLZSfk125hKfTrBv6fxvUmQcHoWvBNG5vyrY9bmrrCranVQ17UxKvRYyZ88Qqiz9TsfDHVQpWBzS",
  "key36": "2RPahzFmbJKzqUCxhVFjB2qgexuxhDWaBmSEBwBNNUp7HsJFcoVhppYCpKLVSzKjPSAAXuqPHc5WKozt7iMzbTao",
  "key37": "5AC6ajfx8ng7dJzYKNVr7nUiCVQPLtEzCNrz3X5ttU1B6AAQfakuSCtSobWnNirCtKCcWzyE7JrH1VLEaBQF8G6e",
  "key38": "4VZzpeK7MhZGxeyhMg4dZSeuDjhBP5VczW8QsWzkQ3VnibiuU97L8Wm9k93TWtQc7NEXeVLnvn9cfSiVgxsmtwML",
  "key39": "3Abbd8QsQ6V3sNFXGP34Hv3MYXYuWRwhfEDJAxFJVfTTUU6Ksb6dt4kWSJ9v9sPqaCA2SmoNZteAUr7rEAetbaYL",
  "key40": "xhCBog8VUeVUdbfA4ESMuh9uZ24WfPhpRN2UMjQV6FePuyqZhV5mcNTEfL8XApZHheTw2KYAvecWBnMqjS2wc3G",
  "key41": "4KBeiKP7oeoJifKQV9N2tEcV6JFBiK7fEPkuP3mAtDD5L7MNGA1m8X9scqPrAddJLaohMz3di6fkH92BA62ah3jG",
  "key42": "4w1iTuR952YATrHKNRCqEHW8V8jVW312hAQnzEQkLGaEMqLUxEBxJQvVnYVYycxVWBGEEEe3ihx6JdeQeHJo9k4x",
  "key43": "3fSAxG6DEuKdDNZhfPdQSATfcBszxohjRMpKFrcZocJdZ5RmE27aSCommtMws4esaAiS57mMqekfA5R5nSvVYv45",
  "key44": "2sSzMxjmtTD5fUTuo29CfMQE5VqWDhxFJkc9rGT5ursMAn9Gorh95eC94xJPMWd7ZL9vdpUYqxs9dMLPL6Rj4FDp",
  "key45": "oMwodQV8KQkN5fd9g76hWMYfHCTgMS15spY6XzDEuHFjcr9jdkdm93siKBTwm5HnGdDZ4f6xZM68CJ7uWVQiXXL"
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
