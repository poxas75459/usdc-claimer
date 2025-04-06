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
    "37b9nv1AaeVu7cQQkpF1uTT9vjDuBCu5qpQAeaubcYvuejMkYHeFPSnKrHuQc3EgWgsUojHW5Y2pk3w1XGvEBMPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38Mij34jBL1ZuduuRxLScCuPCnpCREoVH3NjWGkvwuXk5o8a3oJUe6zC7E3r691xMabc5c4oiXFqQhz8mwv5FJMH",
  "key1": "4bWsZuUsnztBs87uwYLG9PXsiMbUUTavV6E5nq74qyCmBYDmQtwcebL4HEG2pVJZXbXb18aBqA1KZ1tvy4o3NDN2",
  "key2": "42vo7FPcnMYbyQ3A5if4DUvhA46Qx2g94YqBoW4W5juAjuTeKBwGHAcbQUzx7z8V5jyV5PCzbBS94yHzHDpH7rys",
  "key3": "x6GM9j6eAWRHjoqjrhNehEWkgg95kMLh575j9WCNsvq6TUbjKoxXNVNenwgzxnQ2h7XAZAoVSo34XkbrArt8m1S",
  "key4": "2Zs2onBJLmqmwp7S8hTxg5hXECkz5XSHh3UHpNFXMyB1aZrNRdbDoEqCLCZfQVe6yr9nShU5yP4hHTbzg4h8DiVY",
  "key5": "bUyr8vFwkcZM956iLqigT9gyVEC6icUcjagTji9fdykPPYCDCfZSE8g1PvRXQEBYfF8ejemHCuwHPAiuutZ8XNM",
  "key6": "3VaQdHDCKrjGGBhaoCm7kX1B2PLdFGBYw4PugAo7vLj2dv6rFtJZgdHLprFpf7B5eDjPM9BkAPVvHQRCZAR1crU3",
  "key7": "H74acTc65HhF5VWfjU4x3taJhCmrWYT7Pn6jHVELRmGPbR7aaCuNjTGopsbF6YBZPV2FevZCdbkW3RVgpcvtk3W",
  "key8": "2v7DFMekg2iiMvAXKdzhrcQuMXMwGYb32LmoVf6jXDuFsjPjxqEAYG1SzsQ4C7ZEkCjHWYYUS52bkKq7bvoMyfcw",
  "key9": "2bcgse31iGB1qqyqrtBMibgUV2vpdNnD4SXp5wGTTUVGzbWjePHoQVpfmwFybgiKawrCgjdx4NRWjQCSLvtEtWrh",
  "key10": "421KfcSXz6YLmFAiBfWb8UfZ6XbAP9E4cz5Qz8BQ47oh5T2TYgz59dMxaY6qW3r3iZmw2ixnLTMeT3AmzBZAX3yP",
  "key11": "2rwUNDpwFdcHr9iHV58u2MBRpmqhHQZWS2vtT48LcQFQHd3ro66V8fNSETXrhTwEZcCnu2EYZ6XLx2w5hQ1s5qec",
  "key12": "4WtQgNDAT6BEh4aA5hSdJvHmX4QrGcyR1goqBTVfsNJAEutr8iVc8faRPeKAaJVYjWsoP3Jz2fL7Cta1fGbbvBYK",
  "key13": "5yXdP5WZTQVE4LqS1MtUZu2Qgt9Dfqd8NbznLm9TsEJmyHCuGR9j7ZCMbtPvwjqHAcMXEsJndewrrig1cPgasHcC",
  "key14": "3gLxBs7EMfVrRstGf5WPeZiz6AQRq2tAQFk8UbNvKqf8ekA3pV47gB6vKMosSpvWnSWvQE6kFmhUJkUV6DoDoPSZ",
  "key15": "56h4hCbz9p6RFkeuQUPickpzWt2Jjm9ixFY97imzsZp5FupuN4wNAuevwLTCa7tRDaUuLvJCC5DymFrhUcJx9wgu",
  "key16": "4P4d4iPgoLdgmQhpMaAHpd7zcWbBiagm2JTGf9AdEfFKMRrHGorFm5KQCfTynDSzxt6afvrBEysAQNF42sECFaY5",
  "key17": "5Ndz2T3g33VjoBUgZoQgPvsih9jnbwjg7jp3X28LUkKCuwYea3QnTF7VNsrm5xEavrQb7jcv9tDzxgNNm9aAhRkn",
  "key18": "3RyMWdgBfysU4CNieeHxagHqZoKYHEeq5wPKjUHAhVjmRuZX7NmkLf8UUNpDcx9YUBVa16jogpqMsqJNsiDiJPut",
  "key19": "4VrKfm4Ue4ZvTv2jjekt2nGxypTFtjLjic7JaPobBfDHgZ5iGbExBBBVerXVGYmBqH2tPeL5dJxu3KxKQYqzGp76",
  "key20": "4bahi3XN3VAPd4Avz3XzWoCvzFoxdmTWRs8ktTqQNJDtqdixdwTgGEFbimRBu65Td5b7zqZih1VoX4yXszRY3oXg",
  "key21": "4yUAyMdczmzs9fAXsvD9ityYrkbxrYXY6miDViaFKc8Z9DLrMCfaU7jREzudNZWBzEYpvY5CjKgUzK4TwPMcQGQV",
  "key22": "4LLYBYEBSScbBDSj45G3satvpcHkt5na6X17z7jF5Y8QfTsu2xLBvoizvo2MNaLhSS4Seqz97atZeRGgqCecNB6i",
  "key23": "4DFxYwnKKftuT65AveY4TmxbpRMPA4kmskbNQwgxNusoktzZ1cTeSjcjup9trCUfS44fdz9BzvL6He1xcPPsCucH",
  "key24": "4KkFpt3ByfawKhYRJXC9AFW4SrzJxhMunABFxGurkj4vSGdXUDCpMAaKYnJmJ4w7PFcHWoRP6ALL9VypZkcGee9S",
  "key25": "317EdGgSZ5pRnTeQJShGUXZ5g3FFRB6bJRbHddbRwajwVe3D4N5yvomJ4FP6JCED6UXA4wMiUQrs8WnK9N82sxLJ",
  "key26": "2c2ER3ga56PRG32fqKVgaHhz1a5sU1CKDcydiZ4Er6umZtTJaNcf2jxLwiCHqb26VWA8s4uG3z5jvhXuS2NwCa1Q",
  "key27": "5tY6yoJb2aCh8uabrARmsPbhsWjV6BexJkYi8FGh4KLDF1F6pzURuGtQseRUtzZ6wLC45C9VPnZbv3vM3qxCA7zW",
  "key28": "4cCcCVSQRiEgkrk8d7CvbX6pr3feKXZKLmagctt7pdkBGS6qXMBoL1QizZ2giNAuxmvbsR36dSvP6LkHvwR8nmV9",
  "key29": "5nEY1qCrojwZiWT6AVZyDcVNzkf7yfsPf5ugQkCa6ya6uR8GWS49BcikEJpZHyR8nB5WruRkimc2Y1NTSti3r6f7",
  "key30": "4pD1ocNHgSuAELbWFpASMRdvsjrcNZRwXnnZJGcSWaH9jLTizuZrkwgSsH3E4Z4Ek8Su6yoJk7xkq9dLBQ5qXy6u",
  "key31": "4bcfPSHXCKaVp611CVJwjhNsmX3RpJ4wHZ7ytMts59uTCzcAWytGQqwjBANMPvZZDrJcKSYJVYPuDHbVuQyFjuVE",
  "key32": "5ogdGq65NUarxdgpAUxWrmfvenjjCauDbJvYU2NsiEvz5brG4CwRYKn7nSxoj3ecav8CP18XiFg7dHXVanCYUgaZ",
  "key33": "5u1LaNJ3mmCiYpZFca2cs6FSnzSBhkuRyX8v4Ww24RNRLDhDKJjUsa89ofHiRLdFtLrQ91h1CACs2d6gVuDGPcx7",
  "key34": "3mRkNRsBWbXYVpB9Cbocb49CJYUZxQSBwRVUpHRx1M7tziosq6oP7zeq2r94TZcn1fwNBHUnVxBgmi3MkMzhmj7B",
  "key35": "5sdherbEaLCN8cdWeWaKRiSdCuSNJa9iS8gDXWeTdyS7LeZ6mSViG4tJcsVSw5EQnPtQeQjx5WVnfK8xy72kY1yu",
  "key36": "3WQ5fXWnuTYed8iyXY4tVfReDswsUTTbrdBEUgfzQ2bfkhzu2hcirgv1eMxsFQB3qW3BhBiu3do1U3CLVmJfDFsL",
  "key37": "5A81jnvzkxBhVRu9x4XXVDMwkafnjJbyFVSXXtvBQNTuwvY7FGxNXkT8g3Yh4L33KpSGzUhoraf81NiZTDadGphm",
  "key38": "2yhnG3Xen864Ro6dRgszHZZQcp4bM8Ue774Mgw9guH5RQQ8PHiVFUzxFAaDtWk9GkAXuVdnwCSXRJ5kpjtF7Usws",
  "key39": "2E3NkhfBbQoGs3pfrnHErxGepL7E5opXvjdkh1Kv2GtMJKjdjsk2n8fenLKZVvKZuokSL2LHg6jD7CvMW2UqibCA",
  "key40": "5oQw4kciYeff6cXR76WZZvVbsxtvjKK21N8LDCXNF18DmnLTGVqRv1RGHBPKv5xifVh4eR4S7dvPUHpYd2drvbkn",
  "key41": "4x2Ec5rQxbL3Jp7pdnSHcXPEH3bRwPZuXfWALyu1EGrCb8gLiDAPwYQSaPfkgFqS7x1uKqSNiCJhoF62oxy5ns2d",
  "key42": "3cEDiS5RtR6jtzGUKBwzDAPYan7vunA5hTKM9QYKW9LSkH74JnoLHDtNN9TskqjfhejLYfKeMLVkTp8UAmZmyPSW",
  "key43": "4wuqwaaEc4jjGLYW15FXVHTn7rden8a8w8HdGH34e4YYhuRbS4zdX96D4AZEUHf7SifKoJbdq5JQDQgNcmJrBw7Z",
  "key44": "56R4D6wxEsG2xx7Q6EiyTUE4L2RfSLgKvktVrCHqVRjhpXgSQvqaPmTNt6xNo5TNCpyPDpVZ1SoRPF6msDLqWXAF",
  "key45": "5RgQ9EPijKgQjaSvNV93fbkWBfpyw4i5eiT5k3xiFu41GLNXz2wc8Tek47TQSC33u12xLFGzYm7vFZhicLYKEPwW",
  "key46": "MFU76Hd7Ygp7pks6maQxqWZz5Vz4P6sMdUmoCU3RQqDZJ98aJq88B9mifEAPcnPuDR94Y3jrVDioe9GbHTaiqW9"
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
