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
    "5pbaJfB3BVy936XRV87hfrufsCiXofpRnAEVnnK4bgrSVWaLchFWtbc18dFmykZh9AAxf2bUdjPBrsjgV1D7dcZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nSCnL6GuPMreiKkimJsg6thc4FYtxceqMwQw8RR9VoC56uA3LTfom2B3P3sXfHefACMCy4h9eryFMXJUVLSkg5t",
  "key1": "4nve5UdvKSX7ynK9gwn2oQdq45wT9FFtrRa1iNf71aoS4DMNqcLFbC4nv4UNBw9sLgPUYnv3pjqaw9BQd9gZFHYe",
  "key2": "5Mfs5W59jbqssyDxkyLSGrPvFmgDkXQyzS6xRkENJVmhRCAU8RMMUfnaa9oMBBPjmBgTJ1RASJ5kP9GCnP8tKoXx",
  "key3": "4CeubuzPb79T7rgihSgtgoUXYD5dRBzQH8WvkmbD3BFvLjh4mqHyA6jFzHNQaFmrcWekNL8jPq2rUjEzUvV1b8Qg",
  "key4": "5rakiiEQzLztMkgFEXPuc6ifqy41rjf35HAAFfyY52EZ6s7sW6PtsD4RDnnKNjrKoaBfkpSCWVwQbd6qgZRqsasS",
  "key5": "3fA6Np7sajeqNmd1N9pE2EiJXTFCdYDH2hnTiNwMm27WMeugHch8WoygCnjSR96X633hNSyCEt1nEoCfkyFLEUm",
  "key6": "EUcvjbKSRWDitsMvXa6nzTn8wXh8fVHK5yqAXWPza8ULz6KkkqkdY3XorS1HKKjb8Zfew4NEwJoaMhVqK1vccyd",
  "key7": "3NPhaEM2LnjxytU5K5zigNPVLHwPhJLrCW9WT7BGXJGR4zAUhQEVugCUDXeCP4neMsdn12C6PP4FsaoH1oqVts83",
  "key8": "5awXfWC41D2JhB1n3DBJR4EcU7Jr15dE7EduheNeEGKaL5nx6oS6poYnbYejNVWcsTxkZAP1PUre9QxQdmcvkJVf",
  "key9": "ivtb4kEbuD5yJnWzkWRquF6W1zrhRM1wT6HTciqsGWXFerssLRMTgrC7G9GZ7bZUkgSrqmDLDxT96Sf4JXRqZ5w",
  "key10": "2Je9N9o8z2ranYkcPhz7LLyNSHDDDZQa3YPSrqJnNjUrUyq9kvY7YVhvDtqSTbn5RozGdfpcbgZjfw57orc2Nqww",
  "key11": "3X7fBvWUJUgXFxiBweFhJRK6116G6iJR4Y7MW9fGpKJsonujvP4ffbrNP1L68AmZtYzq5PR4mFvvXFKqRkfexAkd",
  "key12": "54zKs6EemRe8b7zgobfwZtk4dArF1MCQyvSKNjfut738sz8j6eMpocUtbmHZ12jArc6keaz3BiJ7tfpkyPgzVavR",
  "key13": "3qTPNVkYjfg5hPuoe1KXhgthQh7zWaWiwEJfXRzZuXhovBrquMxvn2RXVBA5kZ6YSZUNyi3uQGAh4qgUMzd7thdE",
  "key14": "3egEkRMAyQrRG2vj8qgta3mqPyhDYwMc1XwrjvAYoKUZE3gQJBcnML6bwGhUe7hVemGyabH74RifLWdbeTvUrZUc",
  "key15": "2Xfja3ahBKwnV2KtTpX1yW9ZzXa8PxyPCymRgERRDdgYRx8V6sqeAaGUH1nG7r3uZP8PouWBU5yYygJ7SsJfnKQF",
  "key16": "2TG2dC8EPTSqJH1tgpG8psasUiAkVn8sdqoQf4EHbW58ebM7thZqoUAjP4noPpvsP7XVjRKjwRGmTX1YM9arjt6N",
  "key17": "CLeqs5XDt7jhfc4Amv79SzFRJbCDumSLaDHbh2VbAVLZsNBEwPnrzPN76Fq4Kdeidj34x8GLMrhpHtpSaeoiD9M",
  "key18": "6QVmdccnhBr73QbMTK9dP6ZoTCyuXEhRXrYp3YkuN71E3WXps7VTmScdZmUHHFNBH4NzQzZGPcqqMnzvEyYMhTR",
  "key19": "44NN34LH3pJTbh51Zvuc6veaZwMGdAr3FfbPgv6ESXvN1zdbWfEvM5qvKorza1TTqkPt8xWx39P6rzmeXkoe49tv",
  "key20": "KuR9oa6jbfThDEzTwjY5gEtnxa3ezBqzb3UKdhyNriDBPGTTfFc1bPZ4c7AY3TiQBgo5au19HwwFganM4wKACBh",
  "key21": "493xbXYW7VzfeuNRZuZSomNeEntfHcXraS3EpaFqwFeDFaQdyo2MvW4QqeDczyNPE9MH93WzoWApcXXLMkZHNz2c",
  "key22": "4UdJd1t9rHNe9nzzM6XSae4V1qpmzcbK4ZShwUvcGkZas3P2bJ5Knr3RWESgSkb6kL1qqyjyBfNWUk3oTXBN8FbN",
  "key23": "Ja7Kje8PYfKiDyVx1gaZYaPk2Y8gjiK1mCrjH1vDiFs9FoqZk56SVww9p9tPSM7AkAgvC28oHXVMmCU1Up3joxV",
  "key24": "4t8vVfg2KKSE4KEaZYAVSBAvBvi1yzar39ygguUJgSkPdJzkTPtvit6XmYogm3t3pb16RAybEZLJSvv13gnhr27x",
  "key25": "4tEwLJYg8DSfeaTvvexc7EtPYNeuWn2LEHUacvDaM69NvPXuEYxVeDqb2Xas4VF6n81JVCSmizwCdEftjfTHe4x",
  "key26": "4m3v1qm828wUjY2Xnz7Jf5snfhEpTZJvRa8rXF2WEi14f3C53Gs65BB3g6p4dF61BQKbygguq5ac6AkiVuAqd96z",
  "key27": "3CUVDmxHDRseAxydrEPxQUn9M2j3dpkNCyJHvi9KVPCgr6TZGZnetv6t8pkGCbefsKSwRNR2sjDjho3gogdKPLJL",
  "key28": "2Qeu2TecNvEDrXoT2g36ZoPMZS44Rt7eykihb8Fys6BhpZuMeMC6p8DzC3qRc25XfJrCCChz3redVK1YUQ5y3Jgv",
  "key29": "3pxTXyYcYXCMCtvntmyWE3c2wR6tSgri7MPrbVdbgGvPTdBPtUHgWJQRtSPrzeLtKy3uxUYVTdgz4DWdrjCAGoZr",
  "key30": "VQ3pa7kaqcPYM7GTziw9BwezYXjxuPWETqzhScteaXMhXcFdRhUrxshd8epbR1Sxa5FaJj4GgGkPQfz6QzsP5Ep",
  "key31": "4LJ1EFm6NXPWhpCWEeXZirTDbVnU19EbJY1MsiApDrstXDVQB17VKRMDmJ7unSVtinn2AhxNboHXshicnJHFM9Pj",
  "key32": "64TurTYJDbt8dsEdckFs7R82koKbh6vY5dV42dTZNL3mLCMHXNrecARubFSUG1xP9PipaELjL9m1hS4zX3vW8Vt2",
  "key33": "DF7cjHXRb1UkVJqFk2XSRUokuXJwfkM3tfEmm3NDQgyTytvKQfz2h3BscoabUb4gbxAG6DAthtpuPzjRsdQoYwy",
  "key34": "66awh924pKWDgRZQf89ApP95Q5a6huKezz89gAF2JYWbUYfjC9ZbCoC4DQLixS1eg6QxZREij3UTZcJnwumLZQzD",
  "key35": "4z2LS7tHG4enTt8FJo1kHJ9hpE999uxujEMcfGXyYDSaboSUZ92be8zZofVaucTG2JtDDRtuB676P3TAykdp6uHD",
  "key36": "5uvmkSuc76hpe4uv8pieUkt1PVsi1bWbtkQKCZoMXQAEF7ABHdkxonGA6dnhiE34Aa3ezFKZHE69XLpnJeyvVRxc",
  "key37": "nXRZX1zFNr3qit9vwaWQqZGYfUYHpvfgyQT48y2MyoH7EQiEjZJW23DrTdD8NsHJoCqX1sb4iFEomJsnSUMjWj3",
  "key38": "5SEgPJXg8E8AZMLKLKPsNZ3TgaX2cNXkVRbLsvr8YDoNdm2YWP59kx4guesVcHPGj22EU38SHJBW4C15n5q7yrZW",
  "key39": "4ts51XNq18kSo38qxo99KRFfnV4HzScYy74pHgaHSndNxYMYxWVcwdeydsQ2UDGrFWRxau66rjJDavnTvipFmBre",
  "key40": "67Ma4iSpB6g5UuGFALbcE4VoHi8UdTfVJkLSXHzsuebm3FfvXcih2Lu5vPC4XANhavn6McaEQUX8cVUEStBtfhCQ",
  "key41": "GLeUn59QLRWRLFpcHD4qgnVxXZPEXk67j6SUTCUdNJdydMJ8i7RNAnPv7Wm7HP1q4CCpos5cRP5svNXzKTesYiH",
  "key42": "488PYBSeuxhQrZH4igKmzGUJAkM9vNEDYaYo6MTGEF7KGKVhYMDzDsPBkMvx2BH3cRNUp2MbFSM2VUJii647zUWK",
  "key43": "4yP8mJAU8H1qz6VEFLmYbDx9DYSYt6TWmeymgZ7MJQe4wJ8eL87nQh6iPZP249y7Jdt9CBaK6rWf542FDB8RqVK5",
  "key44": "eUU7PamVvc1tvc2QMXwYzhtjgorDnApk7nsoZ9pF9VdfXdLTvSuU5YbQ2FHz53udxnDWeuDqm2GwexzbbKpdAPB",
  "key45": "5dttCzCaLi5h2tBFAPGjcnTH5YFxrbKmjXUGciHMdE5Dx8h9VVa5QjsnuaDzniBRz1GBcj6S24gdX7wZNKcSoxDV"
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
