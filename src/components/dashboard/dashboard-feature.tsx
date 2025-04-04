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
    "Z4xXwhFC8rj8oF8FBG8bw2NcjLR8QwwtrKS9Wr4fwDNiXFBTuCHS21R35NdwwZj6U7xWirRZnn8jubhnmd7bTcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22m8XvDiJJdaUQWCrEdATBEodSG4WaPCmvXGwp1mx9HeYtaEMedXojQyPhnLnG4f36Q2jVqPwzxCqJyL2hSPuY65",
  "key1": "4xz3f4YAqseXqYJAPAANc3SyiZpupRKX6A9j2j8pn7k73uDCrYbbfxCBqKNxomvueraBr7J4A4SQzYTVY2d6UL3J",
  "key2": "5Expuz1nfyHUEgWpvgz38hV5GyKA4N1WT1DJyPvPBucpJJsMwwzZh8Deqp2j33pr5T8L4X25rYBfQwmX4bNJdNb6",
  "key3": "5Ym4yJ8Bt6StC2KzszF2QTquKWym318HLrd28AKhdGcELp6XaDvZmpAx486gG7gXbEPZTGujhqQzi2oSFEu7o4HN",
  "key4": "2BxaLmZqetK2QLUJCxEBvhdG67XKhFVAKfMWjyAozuuNidC6EewLw9TvSc3aK2XvbgashZf22dfuvvatPbaDqg3N",
  "key5": "2tFZEPfZ7Gam1f2d7YhstXdT8bFKH3cMJ6cx99ErhxosrrM6PT2n2UqaPKhTXkZnrk3qUhVL246aB77DRKPCTuS6",
  "key6": "3vw1v5QzeHx69ZZkVKdh1xkRUt57BvyEvCMuS6K1wMB1jQ7B8xKTikUV34UdwuLMnn8T9uxQLP3Z8ByXZMdoAfyS",
  "key7": "2fkNCibhPjF6wmB3VXorGtLXFQvddYvmLYB13yTYBzTyeNibQz9e7euxUd92UzN1qKFmf4nKKWeJt28Sk8czGPky",
  "key8": "5he8Xxd2rrxC7Y8Hh59Rm9pYMYgMnuFdD7YdfTrfP7iux6fz2ZxLFxUYFELD1ho9vAn5jyo4ccrcBcKevY1rUAtD",
  "key9": "3AStS9xftwaDkLhuoWZHr9CsQ5uusxf9x6VZwVNZhwALNemT96PNduftvmfgrpx1NtCMDNHdA1syxcKati23MrCN",
  "key10": "57EENMXHRyQUvCinT8x5sWrm3yquSLVnUh7K2jNHViahpzUN7KLkaMnZ4wzY5miGvyBWeojtfPF2VEtpc9drGi9X",
  "key11": "86U9XEazShqwjm57GkoysYkTcmKDMEoFFAqTc5TpKYWpeMXR6cJvpt1Vi7zYzBXRA6NBpAUXgevbEby1RSeDwaf",
  "key12": "EwC3wXJNZSEhicrcnCr8RcFLURFDnp7EujHayCexpuZZ2KmpjftXonZesgedaBSq3zLffsTjqsxzxdYRjo5Kg22",
  "key13": "4DQXzaG5yjxNpZru5bNa5Ua9hKr2yakuMA1keeLuoHEVGeCbgZKvkxnLqH7vfCasyfbMiVYjMLxgDDLGqimU9kfp",
  "key14": "6Pt913oct4k1MuRYKgdoMZoWq14BCmwaX3dpbppLGJwMrr1sKVVrEfkfhbzXrgCyDKZNemM6BicLWt9FVLhkQC2",
  "key15": "2JNBRFzqk4A7HAkDaG7R2Wvo2fuECdN33gYhrXcWtBdP7HZTD8f6YtaLLF9abAjUfz2qQbV1EsHSHhTbUKVBKa5i",
  "key16": "5VHKLcMJTGCDJjknyNdQPdSTk5Y9MLkzApwkffVoNNKzVS31XM7pW4FDLk7njNVWXRQNi6wQCK7eCKZNrGe7VncX",
  "key17": "917jNFAEhJEkw5LXL2XvE9h4FkRxa5maQuhndvU3YSLRePYWE5XKSERPfMJuUKKSowuJh2w65QDW2jrLv8DZqRH",
  "key18": "3z1fYbwUaZ27QswHKzYTZoPp6EwZj6jGLkXRLTpwZkccW2XfVms3Xj9LugsKBM4QJmyUqvPCGZmH7DwWx52qFWQ3",
  "key19": "5y6U6PxxnmqTwDth34Ui6ge8FyFfaC8yuvBHuVWPR6Vh6U1vsYcCoHc9s6Q7xexFvvrjWh2HTXvfrChH2vGCy59L",
  "key20": "2cnFJKGLGrEakwk9iej8ALPUTJEfjQMsF2EcywFsFEfatBJHqviXQjq1Dpy7NaC631bC2JwnEJuYVa2xD6SpSUFB",
  "key21": "2jMHyckEsx4ucqRTBoHzXxsZN1YSHbKyzakcso4XVKorfF5rTxYTgXy9PuFwnSTXprBZgo4imDJhkqyoYyQmkD2L",
  "key22": "ACa4iktS4hQ4ebcBmr5tjTByoRAbBuXy39yEKGT5Wn3sfgCjD5wcxERyGZoevpjqqXJqGRqLLDR6ptegjNTyJMX",
  "key23": "27qXDc2tfHeczKVZZLFpVKJdQZZT381FpnwuM1ditFJmcY5YnbDaVdz2gDW9B4LJtkFS98NjyJPW8s6kjFwe2H4A",
  "key24": "53XWruPJ64aykbsZxjkkpk3DnN2a2KqCjJGzUdFwe6diBvXmCtMaRteE8g13qyEDgFFAZTjF1BTFeWTakdeuWav7",
  "key25": "5eFXUNd4Q5jjdJYC3dz2vaCbsABtYZuNmxK7Amj4TtEVAgJMoPzbeaNXFgjBGffobJ3YG1y4k85WDLsckYKbfBUU",
  "key26": "4abLJN1KGkT4X66P8ktnKMFD2efj2wcPtqcPRVb9YbpMhjS46YNVXvnova56C5jFzkR2rzbb2efTVwmFWKN37k5o",
  "key27": "5NuUXpZW8Wx7ZUfVwERyHLwFQ4PYxMZmm4UHjqWNqxYKHQXJpwVpQNt6eqBXHZXNs5QgSLhRGXbKXqY2p6wwqZN",
  "key28": "2dUPYfwpJat4omKHMxvonPZUPNGGzmX37wJkLVFFTAicdeCr2YXeAcGEB1NF5WFxU4bph5Kzs4DEtRFT9TxigZos",
  "key29": "2mzUf2yBGLCcNHGeBws3BX8mauB2KtjraSqUSGjwkvKaX4sXFDwcEcTqTMog9tEnHLp1PG8K54o5Wddby5Y1mBp",
  "key30": "4sCHCRNvaRBenpEaodHmE8S7AvwEthSua9i4KE57WdJZPVb9iexQJfqG6J7g2PVa1Rx4vLwqW8c5A4WuUVPgWrQt",
  "key31": "2nbFjmKx3HDkUvyVLq38uxRcKCe8KpopusvNKhtw1rTMijoqxGe13JUr2oNgi7QaNtySB2tbNexCpzTc6BqXCmHv",
  "key32": "zFdFScqXgWrtJsZtxeDBWUhWLiiJhFWWCk43PMYamjmpcSnrJCegCoobc4P5Yk5LQqtmYmCiURSmbbponQtrH1x",
  "key33": "LoXVV2caAwJZjN73AAtKQibjae5QU8FBtFW32eGGJv4ZF5qKPpH13wwh79aJCGCKackjTGC9v8sUx1n9auXwbN2",
  "key34": "3M7VkNfHmvU4R2Gk9XjEVbwCsNNLi6i176kxD7wrJhSK2MLL4N9FBrAM1KNSoRea9Lq3TndKN5kmfkTmSXC8bYrD",
  "key35": "4YKEQbzWEoRmeQ9YxaQZ6Bk1qAwnbU4YwVFiVPLSWCPZyb1Sa1QmR4BrmxAS1QLXfNcUtNF3JW4ZaXiFvfXsFor3",
  "key36": "2uC14t2CMFRQc38B3LMA1KzkJZjuSSc3F6vFoCxjhQ2QJQamNbS7Hp5RkJt8nnJmPPoJfoFH8Wg3Kkteu8mTxJb",
  "key37": "2BjeN49HMX8pzmvwGJ1R4WYM6a5cAcvaTonoQkFBPQbS5mFueBk5ZiLfM6JLaXRUvjruEmvZ4qFutnF3hNmzX3Da",
  "key38": "4XWPD1JSvXFXcFEnAPWDRuKTpCx3ZafUuE9WTnz5QhojKa5GPKxaM5Z8H7dRHcXrrwZ4aFJwL76d4gXPp8JGV76L",
  "key39": "3iEnzwjYSjKxhNamSrzSqtsWPRjFPWfqm8PefBiWsWTmjJKjyoroMoopJdSwWZZZbfUozVSc9E9tGUpSvgH8pVHs",
  "key40": "4tze1egut74nPZrFqBGFx4crDRmkYotpMg2Pb1gxAoHvzW9xDFmXbAauSsufC9a4BxCnk8M2biuoyWj8nmS5232x",
  "key41": "36hJR8B6SiB7ihPUsF8vc6W2sFHVDokQFPvF6smCY1AJWzbgZ34TSeP9S2mdzoeZoFuBE4AnMmTqAXwwDvQQTEiD",
  "key42": "5tbmDiwWNv3vy19LJ4t791u3iPaP7Uz3AQ5gDK1nedeUhfphtamkfurxjmHyrzKrubobyML6WaTYfZbTBotPeVA4",
  "key43": "3jffL7nspu8niau52vrKtacqdPgUBpkAfTLLsjTztifiSk4FcnCfduviRGU2Dnn2UXCvrUcEt1ZKmQY24CdWAt4P",
  "key44": "2GCpBApQWpZsDx8MULb2N3onBuiNM7ucD4SArGnR6b7V1WWHJ38ASmNfZ2cxLLP8SPEZWNWqiGAnAuvkjLm2S947"
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
