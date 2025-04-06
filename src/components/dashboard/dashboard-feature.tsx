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
    "Dvedws9Vi6DWQxQLQv37uSdk4LrGhXkTGa1rVXMVn5vxTw8bNzyddpJqMG7mteyVCgx7ikgf4GboWo9G1R6Baer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61CBXcAeyjL5WHunfLnojDeYd4zWPTEwZhuTtwBrHbDZCurnXa1NVMMgYmQcjeCYC67mRXESM8eoowGM8vQcGWrW",
  "key1": "33tk5RP75XxYKubYmi7Kpw2GeHnedGhQC7EjVTGDhYpAMma9FP364Pbn2VU3M8YjMvi8pX1KHZoRN8h7xiHVYKfT",
  "key2": "SwoKjvxwSFwQtdXoBwVKnk16DiHWpXc4j2F8SstPGZtEDzSyBNHy2tB3b1KB7MtkLAaRqGkQkhWJtugxUKcse2d",
  "key3": "4X3wR4MZ6QFTNxGDXGt3xwgwMunCchRkADEq6uZg3TcAxU6r4Avb4fHTKzqnMSJNrAGxpmqdAzFxLcNkZtcpM1E8",
  "key4": "5azLKa1Z94CjjTRsQAzeFUQx9JFx8GeDkAeSHpM28qvyR2k3JYxBA2orCUmpJ6BcT1Df7DZUgonjm3wJfoSYEJxi",
  "key5": "3ShHXTgwcwESLmuxZCXiUxPg6fsb9rJVt8SS9USDKU9M27myuxrAaESVHftHEBsftjHXEkVDh2jwUkaL63fVin9a",
  "key6": "3QNBet4ZXUZYLCWCYzuKsnedQLXk9ptAiNXUn19p7oKxygawYjQ7HxT7WTuNq5bhA1qnwEsCuTv8he8AAoPcnsjD",
  "key7": "5mq9rMsjHBAAsxs7kfo4tRzwzCyWdAYMRdc5WkoVj6kg5dSs7CoUSdc5CrWAoDXdRXHaobMhiqAGjTd6NWsyito6",
  "key8": "2HnXiYFf35xYPJHv8DUNEP3VZMkeunEpgVk1tMUv6YNaVLfpHjNMTZxvezQauBzSubrQngGQdUVHkDRMgbAJc9Nq",
  "key9": "4YmVoUwJVWVN2PYBTscs94dB3LE26qp4uo1qG2t4Xxoj1Yd4u2SDE7rPsPpfpPFHq9PJZWPjyfnATjqQZPCU6uCR",
  "key10": "4W5naDZGxFCP8M6uaHiuJT7SAqRoPKwzN5MMS8ockpsPtaWA6qSmxgrCo8QgZy7QM9AHdkCVrV6AfbkzWxLsB1Z5",
  "key11": "4L1o4jFJNjyrvAdaEfAytV71mePAGHpvNSbpSxKp3vU1iJ11m4rxJfnbRt1k54zkrDKMLxqRaQ7vJ7iWHzcqmbXQ",
  "key12": "5vnA8cJE2ZYhZbPaswWNN5uvoi6jQEibeKWGEMNGTtSkh4yvAX5V7NQYZvun6x54yUyZq4tAvXZj4L35RdQoFmbd",
  "key13": "5wuGZ9hEfwcYLtmm1tZjLyisHSraoEAn4pxRNU5madX786fZC2ATdAGVUq8Trf8URyvJbtnxFAeLCddruvNKtEvY",
  "key14": "2yD2KXYHZ7dc18ziSC59tD3wTWVh6F3DhChjR5oXr8yG5tEkzanH1othGWqKFwVB3wBxv9nJX47zTB1AGvdzP84b",
  "key15": "3tzk8bsheNtBut7kCFdvznwWAKDGsqCq6W9X47aV15y7K5xxm5CEw3qVF5GZp3kapP3nnYgwYKivzcNnCDu5cQru",
  "key16": "2vW63ZtzeCKB3qg7WigcbnUunnniyrHS2Yzkde8cgkeSk97VXAkTLNswC7aw6dt7qrJ8G8RxEWWLuAN38H1h6BBf",
  "key17": "42m96o1NfDqTtgydsSQzCLhCvs3UJcLtGDUWdPGXsTywh1ys7vBxJD83AwPCRS6QFKynx9MBxYwUv4S33Q6QTby7",
  "key18": "d8aabHHV7VwopWddSrb3FXvwmJuUjr64Z7xobqY7QFwxYr72iGJmNZUWfzfTkbsWE3xa3fyrq4PgYyVBnUeDLXX",
  "key19": "2ocqdNq66XXz1LPA3xx5MgH84ru5Leism9TigKUZBnLMrdJXGFvSjH4fd1SLW4EY4A3zkcVzo9SfKAQU3yW2J2XV",
  "key20": "3h3avvqLMv2xxUMbfsA8XcBWBARin9KieTGn9fk699pqK39B3uKKZ2pWwhe24P9wQBCTEo2KFwLFF4ujmBRPyUnf",
  "key21": "4yqcnomyHLtn5Y83kmooeUZcQArXfQEEDiHma2UMSP34DNpEKZ75DEx58uR1brNkeCd9RrDu8jid78t8Jf4wAKys",
  "key22": "3bBwsHjEzwc9qhuHqSgmzJcA457PHUWPZdEYKsopGKARDSdsngP2msYqnCMB3esKabwrE8NKWr6EK4FiUjCjZbyq",
  "key23": "3joZZYWJv8jKT9S1UtucDnALSn9pafViM7dDk9BCKF3rBg8NDcFgTeyDqWGJfsQria8pZgHohxZY7C5To9Bikwy9",
  "key24": "2kgkL6g8AUbW486dExgBJaCcyvAkmYuqf17HCB6PdYUUzmQiWpDGxv8Xmzj3hzYZrsKHAgxstG37jPEPGiQQmDAt",
  "key25": "5ShFPaJjGCuVpUHSyFUcmr2NWDEtnKQts2RqapYPE4JdVTCJ86gyN47crkrQLvm59MTt3DBGPvWC7AYpUkUV7XbV",
  "key26": "fAFdNYksewsFynoRmELhPT34oDx9L7FkureBC6JtidA3t27Us6T1bTvQtcQrBea3tSKoSLL2M55UjE2UciqGpbr",
  "key27": "3vkb7sdZxDjA44t7FnHS9CCFRKL4PaUo2a6opDHq7wSnTNvFdZ2v5R3vMGjd9hNgdnnaP41m9HUimGqu79cVb6ks",
  "key28": "5Ftp9UNK84WDvos8TBrZktWrzkNxfuJvubWWDGH14Fwyb3YENU14fAgxTe94NHRnJCMZ5HEdS4KFQTn1Ecnun1R8",
  "key29": "4sXY2KwwFe2Ftd7RHfu3FV1GPZPdK2mj3oGvRzpJyN24c22oy8JkHL1ksESu97B7RCbNN98g8WBTn3cTm7UZEibq",
  "key30": "sQSc5kNd9cdhTFMZdMMP1WoWmDgSWiiqML6zT6dvGeBAv8TBErxMKTDJkZ8VyYdVJUXGey5ELfuYAZCasRpKbi3",
  "key31": "hiHaBDjCF99qX44ZVN179ctEr4f58sGzyq8QfCDSB5mu2AzaWpT3AG3GWBd1UREVkMGnxQMuJfHvMJ1diJKLWXL",
  "key32": "4HEQdweDoRLLR67XjHXLQWVj7bADCXhSsMbNBTG5Mpc3JPhDcQfgsAcQfeUL5b8o9SyMTomwxiQowfa6sGkQinJo",
  "key33": "4YQNDzCnq5SQepepzCxJXbev94cM51oJ6K3DXMr6QX1NctRdBi9XKGvJeyCztbVsfwkF7suXBpbyW9Vvw34jmWW2",
  "key34": "676RksKvhoMzuasvKSY6fjad11uecctcBSU1M2Z1B5NoGUnggR4VDDmigDj2CAYkfPLAgWmuasT8FzTMrJxrsA3g",
  "key35": "3NTP9aa52dNi4wjzA7oLC5uBxB4UKGH8jnJgu8DkAcfGQMPsB4NvzryZkDPNgssuvq9Zuc6EsfQPkFAs93mW3s9e",
  "key36": "2mksiFwGr292E8Q9asCv2gVzweC2FZggT91TVdRegDmBt8rGQCt7szusSUxd4UEmH8sEs3yoFTzfznTxh8FBf1D6",
  "key37": "e1V3CTD1QMjviat4iGBfYMzydq2ya956wVPVpWPqV9fgmKeobJcTduPCVP1DmFcQ2B7jiY6KbtMLqqekqV4JWK9",
  "key38": "25aqukwoTkfejc3BoHYwW3CxSFfpjwofJr1Gkjwq3XPhkxXGGMseE48HmC2Dns6XyaZRTP3oCFkeXgUWqsMPRH36",
  "key39": "5fH2CXsEaZGahHQVpGzJKnox8Gdx7rndiXtXH7RUSsLXMSMGfnh96qzU7iWhK5g4oeYs3ULCZoaej5aebtyaVyb3",
  "key40": "n6QKdqEzb5hV3Hf1h6rT9tCnPCQi7Xn6KP4ZnhqLqQTFK3fA56aWCW4BXma56ve981hQRVPEJ2reM3c5fCMU8eV",
  "key41": "2M8Xoqbz6S7MMEq42BT8KfvcbgWHsufbBmcHm1wAxRgH4T5rEQFW8fQVrNkDNF5pt3ZwECmx1BnLrYC7mYccCaqE",
  "key42": "5J4duxghy4XfLdPL9ek2TQRwJgrpmsbphvsvdUNQBytAVwd9XcHPJWKvVpdJmw5LhdKic7KhgM3dAkKq9gntXo2A",
  "key43": "3bQwoQnXMkPYhQR6JDeRSMBDDFxdXUs3wfXp7DePoJp4Tkjnej82TdwaJHkbYsXndmYccoVEUwrbCEGJDzqo3Ct5",
  "key44": "24o3zFXKJUvY4nqo4SM4vHsroySD2iJC3ckNxGe61WeXvv83sC4Er73SKtXZ7rYoWtFik9dPpBrHcNCYSzSUdCrn",
  "key45": "2tUm361bBV6SxxLV11DTzdtfSMvUErn14bWP2iUEKJwiGSDV4zA1p48TNDaRzNPgSgvDHKxPGQGFVjVxVShRHfRj"
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
