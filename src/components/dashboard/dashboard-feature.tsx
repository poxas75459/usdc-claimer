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
    "3xxbb89U8mE24wx1y65fR7YCiNe9nuxx2yFVYybzV1TpnNFHB2Zdos6oEypyNrLtXLYo2XcJwdYuHPtHjnFPoSCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PHUgx7xn9EjiFkX9ScGzCupQaqm6jPVoutpj656BjhFPRDn7HbPNodfeieYU8b3gL5cEWV6qC1sC5aALEfkT56G",
  "key1": "2uxFCdBe1RHTNKxTYY4Y3MQzyCsZB6Uod8N5tw7y1QZq2mgssJRP2VZkZcogRWFjVUQSxbNraYFQYMRX6MNZzoWB",
  "key2": "5QkiHXXg5JZ3KVoDS3WBa7z7ndzVqfdKWZce8sk3Wj3cyLNEot4UiEtd8cRSux3xpT1ezydyaAQJbkyG1DpyjbJb",
  "key3": "67ZVSND9yddNnSuvQ6UdjBZZNqb8YkDy92BduHApzwf1n54AkRzWwdbq2mUzyRavm7h6Nd8r75vnNN5EHuyDL52u",
  "key4": "4KkJFGJhyqoSSxCQW1eUvNpvhUgtwhm5pi8XFkbXkQ8rHhzuQCjj5U5BuxvKhKNPq3zJnEeXyMcMsNeRiP7K2CcA",
  "key5": "2xBKv8HUCmnMASvhqfTRd5bHe2XtmugnZdUDN6QjViHgXzGhibeE3sm6gKqmy2rkbPCH7EkD5iurGTbtKPaBi7XZ",
  "key6": "4urjVzz4PTXYaddX2JjzaS9kNNrGfvPkeJpXYq6EWscyzKk1t7Nqvu8on6VnVxjBr6ooPgY7MaVgDr8snVcr6iT6",
  "key7": "3A7xpYbkv4dwDgopFxRBX2nU5AfXP5PeFLD9iHZBHLcsfVetkC4hkpuWadq7BnZ6J6EzPm3oyNDA5seoYsQYUtEd",
  "key8": "5yBy5GRRFMdeWMjJjuGKUFT4rJZKDNPCJbV18VTy6UmNMTtJKs7mC1GZkGtFRtYgPcJgUC5NW6CQWApxj8295iLo",
  "key9": "5n8QLTqFPYa6M65kRBMLSWWYoMacnkhPFoenZBLWR2pjTeqbLQsx9mgiEEm2fG6jAB1LRWKy9etvhY8nTKeG6fSE",
  "key10": "48fNp3mq4wZft4WGCL8HUAFNDB9oo7Tf6TrKToMYtkxJ6hoJvwCZuLGLyuq5JLRR3XPDEECeQ31HYKXQtuahmfZe",
  "key11": "5pFUyQ9DYUNZVYzSDAfTy1zgpTzQmDSv5EDw6KfFwfN275BrGY3tVqihGZF6phVKjzsqUDCWFuCGDnXn8fTjs6oB",
  "key12": "25s57Wt4pGVXJwM2C66nSqxTmGEfAw3U2rTrABYmVcqw1bRFRUq1FWyvWGZSBgMrnjSd2CtoyMuSYSb8bhFGgQYD",
  "key13": "3SUTGnExMEHvxQxyqMtzLusSgPaoDcGd3c3hCyokGW3LS6R253Ds8QxhjSmr9wdgohpwb6eyL8Lgo1awPNQAu6YT",
  "key14": "4pnpg9LHEHHNHPHgYyxY9Ga4HXMK6K4KzsiVQRrz9PLBez7EdPKSTs2btqX7vonm1GpKcA98gF8fXMPnMA7ZFZD",
  "key15": "2GNyPxBaGr2jbWsJKVF8AmpTyCFMWbTHkLT7tzuoZJfDKKrUD1EDi4mhNsQNowFaAPy8P1fEZqmYGF98b6wpiMuo",
  "key16": "5ShJuRJS9gDpfWDmQf2VZEMESSBNZuS4VZkC4T3185kbXzSAX9Di1LhWDRpA3BGQjQTMDePNPM2r7pzQE1cXQLvN",
  "key17": "4JSLYzjoUXXWKay1n4ArwEXuYbfJoLFxpW1o4K8Ywqeicy96QfVPUTfvMqydVXS4yf98dAyu35wt2KcuL7b7tMSS",
  "key18": "2weABkMsa93Wu8b6smKrCQgbgy55QANe1LBE2QSgvvpbaKzrnF1cxei8fgjB3L9TtjJV2TayGUyhZjGHtGgYbTj8",
  "key19": "6gZ1Bm7PJUsDboTSf5RfTDZ8nehNQkePxmn3NigdwNq7hhkgayiUiqrjR1Cw5P8cs6s3z7v6JapSVgAa28wgTa3",
  "key20": "3qF2qJRRzP7r4jKirVxeyFgcVdtpdGqYtc4VqKLyFtHFhxTUwkfd7Ffo3hs2e9XR3Wirq8SoGfEYeGhR42drUgLL",
  "key21": "22SNZ1PbivHh6XD7TSFjppypeh3BaDH8khNm4iPFPNWBXpvMCbTrf2MnAmnJmLse9s4ow6KrgLm4C5SfUUFPRrk4",
  "key22": "5FM1V44txsxte3eNvJzKXKHVtVdzTpHcx683BoY8dc1xMhQKEbUGzEq7cBf27iPTodPV2fksw7w1nbPwbmj938Fa",
  "key23": "4XBD93zpNKV11cteobNsmuicoXouPx5r8MT7fkNokDKxDCJkPCCrYrEcEpDfMGnoqdEGpJHN7YhvSjhn8tLJFxjW",
  "key24": "3YUsvQ5zWwqgnC5NV3tqXWyofnpi31B3GECUaRAHJF83o6J2qWj99CMnAVVtz2opzsEvgSz7qoPf9q6ty8eAeHfu",
  "key25": "66X3Y9t2Wdq1BxJ9rQ9vRiFUyBDJuSa7RCeSqpvyGHzqA2bWEmQqDc7XxDCgu4zvoSpK7ruSzNiwoVdVuVj2GGUH",
  "key26": "2i4mHbFmUwcDZtzC9EqS1zFGKHmPM1z9Hjr666hozAn2tN8UEEqVN7vXDL3nxpa5m9rDy1SNsTqg8DHgkDxb4sne",
  "key27": "5KchtLv7kUnYKoBJgsybjpFvzE11uXmq1Mqv1dLsbBC4A9s7rS3i3Fs9SNqEAKaDT5WPKHwdUpohuPknRQgCfbbQ",
  "key28": "3MTNDmCmPjV3HKj6LwqZaWWpGxFkNkPvKkZbSvjfLub6sTYzkkcauePBs14aj2BuAHe3EPVL9VTsDXZfVF2PtKvF",
  "key29": "4aac7xZvLxoCgsq9SFyhEEzRYB65FeMPVCyUk8yCH9tcUhrviRov4XhZV58BzF4Dn4WzXYqKfvryyfp6ApLUyaXk",
  "key30": "5cBsbTJrVPVrmXX58hCzsyvcrxBkqcAJcgU1MNQVSXhJCsJ5YVdxXcjayhVXkSqsbcjQPVDrgnp1v7GxH3sazmbi",
  "key31": "5AvxMPTNjWFzuW4YpwZS62mRr7XS42wcZw24TbARdscgktkkEuGCk29xZHbTQ8DS2rAyeJtFGyEXSV42VTB7mTxY",
  "key32": "25TVntSXNCjwgT1dGTqkhzkRET6cptBu4ri9crSYE3EomN8vpX5dBLQeAewCG1z5i5WAPhWaZGRRJs3ojnb1R9d3",
  "key33": "5YH94ucBTj4nnsyAZPRnLtZEkTb61MsocjRVp6yqgpfMZAGiFKxnSdfZjNFdNG6Ux8N1kBh48Mt7NhGgnETND1ZY",
  "key34": "5qJQwcAqDXjVbXs44cu8nNC1NN5W8XcSm4kKhrTtzohzt443CCknUEoRS9GasCVDf2XpjSSDJbmv4i2XpAmSJSZb",
  "key35": "27wFunXpDfrm2BTvrgG8BbpXZmhJsedq6VyGV6HWqmLm1oyifkoooXJJXBhajegku5NJfFmoNfJ9qPhqxdA5geTm",
  "key36": "446A3D6NwZen23qT9iDZ9r75H9EuLp7Wt4XEhKobDN885FkrMHw4g1swWiw5iwSS4JL8nnwSmKL8tk2nUpYpGtub",
  "key37": "65oX2ZUdkYeNjULKVgnH8tozaqsKyKqtcj22ZRLp5FCecVXk7GWRA4kTv7RF831WJy12gGvq8BTvYPbiozb1xtDg",
  "key38": "3xwBxeChJxBX2hXoTHQJs2oPPEumqQhTCNQqR8cP4xQ6kANKPKcctuYFRW5fdJT2DzTA54uxmAwEvD9EfePwS1jY",
  "key39": "2zoUKmp7gbFDTDPdZ1RhzJbkuRhogmmh4aJYiGuJrTrUEWMVJj6y6srwmvzNHdiqqcTxue46qREj6wWJLEoVYeb4",
  "key40": "M9mvasypr2nrTctCUCFYUTTyX9eCLnaUJAUmfNJWDrticfbkWkJypnwYkDqwdFfvCusMpZbcgW9sTL2PK9xucWu",
  "key41": "5SfZMGz6L8zE8hGH4QbYfLxh2af9ufHPrZebUWuXoWLDZBBjfKFyQpp7nEY9Y1tDxBPQzMtgoF5p1q1tqFvH8HNT",
  "key42": "4tRKvk2Xbq7A8FGWDxsBZX13HpzA5rVbiEhSGzujUHyjdNH1kmEAWaMGozgBgt8FZ5oDvUMiwuAPP9167ivYGaBD",
  "key43": "5xLJKXGMv689Zp9u5hMn6FdUvHcQ1TBauDQ58KuwCrBTP9yAVTWC3y1qjv957qTVZ8LJDwxvHn6obTZnpjjrHpLt",
  "key44": "3S9aTeWfdU2wNi1HakDbrUjXHtiRNqJxvKz1MW9xbEvU5Gka9seCJDPoMfYRu5A59G8Qah1zVQwA2axKBLmJK4SQ",
  "key45": "6BRsSNqcx5EbUyGCXf6aARaQQc9YjwExmF2n7i6k3GMxRJKvjk2BQRu3rh6M8snSStWBsn3HxWRD746Y5w8L7UG",
  "key46": "4GHdzD9muW8xCgmV1TvmqknkzzovyDiRSHoZiWGbA9M9hTtorBXa4iKAcSH9S25xGsaANEYceF3sxY8R1eHEjb78",
  "key47": "28hrX4ZEPpqZWUqwJLH899ETpTND2CLrsG6dHwitDiJtRggFDPD5c6Hsk92zBU7AHxZdT4Zr4WzHuMQw8TaxzSmb",
  "key48": "4cLTsr4VRuwzonWDvLWZV3NPi7yNCiyzRgsn51CQ9CtfbzBGFcff9f3K9uhhFRP9K16MYqRMJCJfY3vQ1A413Rpp"
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
