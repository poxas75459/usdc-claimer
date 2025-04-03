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
    "3Nsu8TkFTgd9itER51NH3DC6EWK12oc9jqFBgvVXfAnKaZdbrpfp8cjuVXu37b1oq3SbGtMFXA5CxN8kfChTpLBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65DoyWiu5Q2zs6sPbgX1VL7LEnhhzq1v8r55MGdpPmCuNakJS2EZBwHdzutX5zREH1tVuejwvvC413iEWkoX3Z4R",
  "key1": "34gA2w5wrm38M2L8ksZtWVztmKVYPtxZpuEYdqMP3DVYZvJZPyEYLMxDKuB9VwmjPeZPwjMN5XRxct7jkcbt2ZxL",
  "key2": "5XmK78LdVDvsN6sDuVYmC874Lf2gP3gupoQzbdcxc3NvqZwUkb5LouqiYnfAPGU1u9jtGNitTcVokN59nj1vnERA",
  "key3": "58QJUuc8r4w4r9Uief5Mg5ydty76wCWpx3zunaVhcs8BprtRgPaims6yRTcntcGRnNVZeKKyqLznZU8sxku8SXYi",
  "key4": "4Qhng8ae3Dqk3LgTWqHshu7SToLesTkqEcBUdjexQZnF2utwAL74opRpo3S7trUthn7v3yneZvQPWuJfWHV9qL2s",
  "key5": "5Zq1dERVzVAbDmdZQMM7itKr6Noidc4jGPM8dizPsT8EqXMjmf1iF7sN616mubxowtTgGaxzdN7Ztc4SfkoPpm4c",
  "key6": "4qoYWgUTYaL9KBMi3osqfwttZigZjD3v2TLimC8vecNAQMa6kScV6o6PxkX8bD7MX1kRTdYaqoGYkBsveXj41gen",
  "key7": "4mjU82YGvVhiC6rvFiLUA2TGQ9A2ntysd42BzSTwTK591CiT9HK2m6cXCMkCmQmQa86YRZRXbkZiFiR6943LMRd1",
  "key8": "4dfkvqc2ci7d4k2ag5FLaiEbMxJWdrZAw8QYjVWKnkNkpWs3EDsLfH7eNq9oNd2oX5f8hTkxLJGvVYJLtpffscSt",
  "key9": "4KoTF1zU7fgc2D4xpkZAD16s4DGsXv3JEwK9MaoKP9M5w5TJy9df3zxYQxdyLkueLKAWWfgoYogT7bQmihGbozde",
  "key10": "sfXjceRVHShGw5sRpmkzxEh5AYmnaVCCLoqqWgfrRkYihjcmR99csYA64L78BPcZn2Hh26CR3YkMRofsXkvHx2e",
  "key11": "4pZMY88hs4RhT3Jwo4X3oypeBvLHmnRMV7qss1tg8ZNSTKqCjqXrcWmtzqgnNNJZwbab61J2jkPELxgRGUmLSPDf",
  "key12": "3MyFDeLU7SGgfMwUSmoEnrNUPSnEgUCQ5k9wzpf5CdsBFbuNqv1tnesBAGNRZKA9xYVLguagrp5oij9LuNSfpoGP",
  "key13": "4ExUREgQyJWTr7LkR5WuoRwG5LtxdrSheH2PWsnGYCF7XDZidBakX54KXk3wkvYx1xBWCN7HBtnpEEJvHKvxgeLr",
  "key14": "3nAZ5FWkuaUZcr23Ta3XQYSVYPWf7b3GPjoKgtiHhnDaHjDnCAaqFuLs29o3CsyajMQ6VyaXLhM49KXqgfoUfvDQ",
  "key15": "3qq8Fv9uUpTPNjP14eTYVPrHXPSA1y85sU5Y6i8NRTtk84J3akDpzJ5v5J9HxZHs3j485xGXknYgRyeN193nZRd1",
  "key16": "4zbuRawiKbuqjk3L7zkDHaQnFJ3sQuxJxr5Gc2M76ffYAzQvYBVzYKDhY6DwiCSCnHYPFjjBwbydyxNDFbNw9n86",
  "key17": "u3cpiXxZSyy3oCMBVvw8A574jSyVVce8M1G8V1GtPzyFkDdr7NGnedx9KvxQffeK65CuZzawHUF39dzwSrR687c",
  "key18": "2Daprsn5ovtjeZf65epY3SrmVFBYHUBpvoHGep6A4VNGWNh9rvPjDdA3YrHZqsifNyH5sfpb52GauVyHoTWuDvTb",
  "key19": "3u7Yq11vwVQHJeC5VtE3CUCiSZKHQkrpzGBixHi6uVXeKKk2TRgqrhwQwsyYa25afYWzu2GnEKj6dq9Wdfd1gYLU",
  "key20": "5QncBSjUFNGcGLoRdN2CQsXuT6eK4GUwXZeQ2P7DnMH6zUs9bG16sSzCASDnDsa3PcRpS425xdCZj8HtTQoe5TwW",
  "key21": "SwyueG9ztkYimMUdSez9oko119QE87H9qsWxwcmg6qirM4BpRij6BCq1HRTRo2Vrbib9CiNhjrzSExc2dABzUwM",
  "key22": "2UzB4Fpr9ULUsGG6gJn9P11cwF1NkEyFhYL8SLe2hSThZ21AcciwQgfFGJVEKcU4tb9rX8yHFsb4FsSURtq8ivyq",
  "key23": "5LTRu2LFE7efzA2vPaBqAbMakafGbKntBVUpRPtM5xVbqnLDmvqGWhwkiwKgZvLAu3C4aNnCWxZvNoBdfKt73hB",
  "key24": "57yWoh55UWtnCeoGL5P6npx3B3TyUZZS2YKJBgmC2yC5K5w3eDktE64FmcMbmKWb2GwSQo5teerQowvomQcfSwzj",
  "key25": "5ZeqxAX3R6LH5ysGj3WuDfodbjqri3VKJimUcjYuQRoaeP6h1DL3nSqE4TfyA9fze7Y1nXaBD1LcpcTdVvgddBcJ",
  "key26": "3BgMBcgJEuHfbEtJPhqdYDV4Lmwoa8SPiVFvJFGLe4sSQyB1Pt4YNwBwA1VnnRTJbcY4MQcfhDRWsyWUB1xeVAXU",
  "key27": "5ig5nTLZSibt61rNmX1TJcnAibCqfodUi1cmLrgFHTACJJ2NqT5fhE7JJkYzd7tuDG8GNeUuxSbqYKRb2ukd9eLm",
  "key28": "JFpR7yEx7V9UuuSF7kmUSsenW2wiKcLLoHn8C2uZcgba6HGcXC3A1jyDjtBVzkNAVgyG8KrgEMYMhPQpaAZ1C6A",
  "key29": "3aV5a8xCv51jh31bXxN8EHSuoCSTVwZhE2cTnTLU2L116xrVJRR343Q3pKiHqPoFMCjgV9NaHnhLZsA7VnxcA54f",
  "key30": "3b21NLnz7XPrL4YyzUUpfQva1SJXXeQwgEML51z7ffFXtV4TmK6MC3GttcUMPuCSbgxC2KjYRFuK7gF1t4fxAZT5",
  "key31": "2PAKTRsxM33eCy54uY65XrhTb3dHCh1hZ5Ajr6HWZEtQF1h4586b1fwDwn25PSXQ7Jryb73e5srJumJHxXJiNLp2",
  "key32": "5EZuNurVwTK24fVkaxKER3GuSR97qb5Emqo3D2sZ5vAkSxns5y6J7kyZms7WgVNnSeJHAfZudEiPBctAUcqhXoUw",
  "key33": "5xNUKNXXHJZcZCn5bseffsmoz21yUQrLiBpsJH3g675DUpL869Z1MqaPMPZKZuUGsWvkqNudWQ4nN121pwKNi6NQ",
  "key34": "4RqPK55henDKFQF8EW7eFzm88JeJ9TXAHzJGeYybxSNScnPDqBw5XfcfYRP4SPBxiH82hds8Z944ZqPFybpdXPzh",
  "key35": "4HF4XVoFe7eiyuwrFToYXeLGgsALJH1ejsxkK5UrdHRfg2rCGBBr8ES35JjXqtEEFmoB6tEfjkuM4xWSELjQP4VG",
  "key36": "4SmecFmSh684ZKpNhviGuac77oPTggXJwhDS1y51EdhMRfs4RWAPsbEt5gNdoU24dpXGmSYXLfE7tUWq4tgzT6Kt",
  "key37": "5buVtp2Z2WT3oTXdJ9imzhTzeW3rPcCiRXXZumAMVsMFLtXGr685D5zpowzgBP5aTLJsEgDWDXKxzSKRYYwLbzLy",
  "key38": "5jSTc9zymLKfgiSJ8W17TgaJdjxbnEC4TeyhGyEqtjCVJwYa1rYBnbHAfgyzjiBaLYgp5n78jCq69er3CmFbVqes",
  "key39": "2JrTX4RJ7H9fWWh1Qmx43vxna4FJCXcNgUoM5sB7mY1EFbki1VdsUgeUNmzvsYsrXSP1cLjxiSJu72ijsmnY2sJR",
  "key40": "4jBoDxjXeTp1tGnLPAm8uQkgJsc6NHEA5Zx6fkJwS6rG7ZjuLNQW9ihV2mDDsQYyytYUuHvhfx9XjhP3GBMMSoU",
  "key41": "4iNR9ZumPvdFPFmg4QVVGt7FGQVyPp362YqCNWMqnzZe43N6UxJiR2mxujeYfTsXCLuNZ4EpYJ29zS6BP8Am6cQP",
  "key42": "5j2jdRfxZsdyd2RKHqRyqGgTSTC85tq9oxehXgeUv4ZewnDqF8WiiWUhme1GKbkW6Mm1i4rP9n6sjh5svKyZpkzE",
  "key43": "5AGMNc9oLiTdFisb1dAfqKLfCvdN5tQUBiUD8dq5MraNaVt86j9NjctMJdA8SPQ1SunBtVphXiboYmBYnWQvZifW",
  "key44": "4qoxqHFLTUYio5geKHb9RmyavJsUrLc11McBqV2NEGx3BjUUVguYuc7jUsi2oYirYSfUdA2bgg4ujfQiUip12zZD",
  "key45": "6wdDFvT81fMFNqLjfFCfaptBhGh6kLQW1Jzzxp8aPnccX6Wd8RFU2qfFr1d3bZjuasg4Hv5fUih9N8aAtCQtvBR",
  "key46": "239A1ETGEo1HVQsFTUiPj9Gd89NEE979HN6BdcdUQ1qUNybeMKsPpiZypgbQZY6FsoCtTTwFaSRwDpPtb4FNA2Ki"
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
