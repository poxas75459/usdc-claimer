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
    "66wNzT51vijommTvTw9bFaXgobunuTvXjUCKv7HRLB3XQzN9LeXBATwcEn7UKKpTYxqMdhJB2TrNEjXFeAQ2SMhb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XekqjeJn1csK9YuPn1qrNKN5sMSsNEAUEZdCgFxiyvJLD8NdrRR4jh4Qjv8mKjxF7XJ7C28mkeVWZSHt3DEu4Pp",
  "key1": "4FNETFHdSV37uxyh1uj38vhvqWP1vCw9EXtr5BghfuaEj7fG7JrjPm86R7gjLAruXk7fDT1xDimJdxSRzVaSwtRn",
  "key2": "44K7CHXaTmWj58PgXqSHCHgBb5DKg3mE5ztPB1YYeSno43Hmn9SVWTWoJkjEWM9UPjiL1UNzMwQJiUuk1SN7Bx3W",
  "key3": "2sc8Ki7JWDjPNSjYvmYcyXNMNYFvLpNo2pYwDrVTVXg9q81RwnJ55XLRmyNKLQtnbKuLjh5B7ntp5MhzWYP5Tvu9",
  "key4": "XVEkY2PFuVFMNBUMJQMFwoTSaxaHAKxyGUiACDNPAy6G9mWwTaKfXhyJDf2suaYKatDUqkxzS74sbLZnenxR5JU",
  "key5": "5dEmvoShw3NwySyhUQoJqF53P2YRgspCWL7MkoTzE8G8TsTpxqZh8CH9dtGisCXXGAwpqdYcNgz4KjqtZ1okPKU5",
  "key6": "4rcAjdFQuTR9C49Bw45aGYX8aWSPvvrEaMyb2grVEGEbJYVSQncifKHHDX6aZmmUPhoKte5Ee7eAFGfyCpg6nk95",
  "key7": "5HcWnfk4im3Fht2mKaY5Qm6zvqhBLdA9SQzz2v8uQeP5fRcVcLFGZ8gedwpVA79ujHmiTTSFa5BQSJh6ZWc8AYj3",
  "key8": "4y3nV6GZ4CQVZtfy8EzzMpB1KZcMKaTMu1pXWh64DZcKRjnNJ1fCznXcsvbGmF4bs7XtVnzx798epPb2CsFZADy4",
  "key9": "5JTaLjQenq3PoGYuHdg6v4aczz3fwDhsKZQWiE1ZTyNnkjcuFFGUdTQpQ93dCAVALtn9Z6nJ6vsVt9k7rMk8EC9j",
  "key10": "5ibduEtx1zfgr6mE2tXHYoCAAVyDxThQRTP8DNi1wBhuEGarWJQuoBRkBsh5g6jR2mZNjS1AiZsVPjAKD44V58A3",
  "key11": "4gPAjxF6mFeT1Ape1V6bHhLsfjynZEa5Syug1wSGDiguuCTGkNygy8R4GdRZdRMArbGKaBbGRDAuqRrLYVnVMGWK",
  "key12": "4YbXyZdiRpF5adQQoUQ7D5E2xpc1KRR89ohuXvnu5YhJKyc91FsHL1QWs8j7WrwUkoQD5Xq44QQqRUJNU5cyTTam",
  "key13": "4iGDr4zr5qJqv2yeW483dF8nxxvQFxMY514HxFVuYZYRDmXjhbVs4tdyiGw58nUyafi8CWXCoA2NhNZ28SM2Cjx3",
  "key14": "2mP98NdGZKySfxfPtFcDwkZyu4FPesqTm6gZM2vDP5GcYuvqimA2vEhihx42LRa6GrL1NQjyHKpRtksLEiK9Khtk",
  "key15": "3w5JuXQnkZHXZe9jjTAQiCvKZ2ZK2TTswGvDbY93JaFqCj5Wq9hp6whfnZXAgACN84BgDh19EQN4GLYM7HnXGXm5",
  "key16": "CbXFgddMkGeYsogmGEVeofDpR5rBgZmD2ukZj763cbfVe7AUwwPwJSbhad8oMzrCD7WhVr4S1QLnStdvHGUer58",
  "key17": "ez4P2y3B82mAaCqpCsn4NfNWGCdYuS1vZfa9QAnNCpzoQVXVwXa1RNRbkNC43HMpp2Lh7sSh3s6zgXW9gGTafV1",
  "key18": "4CZmWBA8oDUkej3cpuLjZhnTSyceZZGxdCuHr1256Wd2E65g7WcZda4tBeQ6DBG1gPFJgZQgGB5UQUAcZ6BBi3qS",
  "key19": "46GTpBiMQPhndrXDyzpHM1JwG1FkgaDQhW9D6qn5ajrcvvKDu5cLEhLrHXsi7e8TSk97KuvUn8vtfjYYHDw8rowb",
  "key20": "AMtoSDYMNqvaBJ3PpDE2G6QirvG9Ccoeh5CuzyrTEdku5jV4B5pTMw4VgvBUMnzHqMQyDQWdaL8okqLrBQgFLN1",
  "key21": "67MFL1LS53TSo5mKZoB54B7MezTWGi89mGy1E8c6YPKrVjMd1WtNmxkSWLFbbV6SKuYCAzD5Z5atmJa9gEXzUayx",
  "key22": "65S7K3XLrKVBzEPsx5DTGyr1AoajStvyZ6GW4HLM7cyBsKeLG1M2LhQCKyupvMf7XVB7yzW7m1iknRpP22ZaUuNm",
  "key23": "S8xAZoB27zGrrcuRWV8JuHtYahb5gYfB32i3R112dpxS2zRKSXRnTJsn4Te1yAAw7d1MLkPvJQpHN5Eo9Qt2CZ4",
  "key24": "513sP3L9NBosP4yRsQbrktKrxQQWs2CDCABQFQN1TLHT8WEsgSef6Xxy3BMeyKftfnbbwkcRDhK5XGoadcjBRPwB",
  "key25": "4AsSsApynN1XvmACeBnurXp2Sj5DRiomahTWveg1SA2nmcfSotPZceQ5hh2853BYVsQA5ayAK5QAV9UwUB98n5pb",
  "key26": "rkHx52J9UZ1tCMtzT5cZAZyxufjFxZx2uXSvLRpaFmEBQ6BueCzyRbibfvgYREXLwSA9MRPaFobAvsgWf9YvFc8",
  "key27": "sYmfZ2p8tj8tQWFbFK5exsLyN2AGNCgbfZTWwvbRMwzvasrknUFFbvw2qXC7r7YLkN2Ua7V2sDTMwnCJaQZit4H",
  "key28": "3qSg1psenX2gjBsQ5Bv7Deci3Ts47UFyTXYEWjhx3aBkMDRvtYhmNThBiLmFwJ65Zf8U9CFNgGiWT3QVZhFCQaTF",
  "key29": "5JvdHLY6Hmn8ppT26qFgJHQRc3oTkKHJp865ncWZnFio9pz7kf7ZZiSgryasSiSeSHQFcJAuEeN2H9FwRV3uj5Ng",
  "key30": "3iP9Nk9TKJhbnaGxJuPyjnzSkyFYwjepd58tghgyfaKDVibVrPuaUMbGFQDDPsVUMhUBn2b4AfuDPC6n7deKBvG5",
  "key31": "29x9REnDW2zpT5ZRdjJ8wfuzeJ3d6uKxQdyR8oRnoix5jSAhYofd2TodPiGTrDbRvXmFHfFhyMbHTGD2FNwCXkjR",
  "key32": "3JPK1Dwr5r87mnnitNgydnPshzagoxvC5tw67ZMHoMjSXVjaZAGyg8W4KmU1H72qyVwZASpYwobjRQZhmzv2Hdg3",
  "key33": "uX4jC2PSvtLNvWX8wWh4Kx2VAoTzdPwn9wonrGhFjnEc4N3qBB5DuyyY5vWyDsi18cssdASmF23urfQpiq89er2",
  "key34": "q4NPj9Vmc3bvBLyj3KiXL5Qx2Ln5Bv6fzyKpfwB2PFEjLJUAFTA6oHoP4aFNMvS8cNiSnYtmuZHDWrRhAQ1ZMVw",
  "key35": "5YvE4GF98Tvk4YCLKtw1UpwXSLkvMvMcydhZkoV83wcxQfsYRDaMrAGr2wa1mPbHRbgvY43KFD6SWePGNM2zUP7p",
  "key36": "4m3VzFFaSh7Zy2GfpYBZePmQzy1EAjDwuJtwb7Hkak4asf5NTUxzqH3EwkUZpN6EMExirH9yPjrns5JqoGmty7c1",
  "key37": "66xXe1XeH2z4LoeWJHphba9PvPfLA4iEyCUV7gwx1nMrUrJVbZDgGmEJdfMrAYLBaQSX59ngve5Xa2nBqf23RqeC",
  "key38": "2giqBLtBxQe8dhZawfG8PSveQuFr61EVwijRPBKC8mUCmEwzN6MvtXuRWHZtDSUR46Qu4jxrqjgL5EBD5YnAGZ6e",
  "key39": "4n1VRGhPtB6L9BJntfbM2tG5V2bKb3j44rew19Gem5SErD5uE3UMbxw6oJ1ed9zPi3MoLedAPb7uoFPdfn2W9yyh",
  "key40": "5Uq6e5v6VT6zYxNYu32cAVTguKWW35mkRXSwXR4Kf9aeNWySskj61Vj6npooUJh8nvmCmHxZrB91W2sUhQaGiZfh",
  "key41": "2YnqgikPDjesx9U7hzCNEXtAPGpwNnDawYUanPj4618H1e3ur1uMNy4MWKxqa8N6wJZuYQe4e1i3MEDw6wNWnVLq",
  "key42": "4NeUMTLZrLzxiDD5R7M71ba5FF3ShpRFqEYRAjfBZ8pnWeYCtW7VGChBAEJsn5PnAVQKMZ1XZtnFr8Gcmj8Kvyqw",
  "key43": "5BYjHyukh1BaM1RwCWd66t2mHY6AxDNsU5b5WKDxGP9FbLSK5QSLJ7VJDbMFVHDCVFTuPgKoD13eaFxvzHbEVeH9",
  "key44": "2zcn8Zccn6YNrMZTsSiAdZxsAj78cYouGW32ohtutsR4EEcPeaRPLLP4xY5uTfC8YnHhuSGJ1MDXsaZEqoDpLJyj",
  "key45": "2otyG9uVTHzV8BeVudZn4wsyCYKgXWXAxrPHv4girJzQAvVyMYfBrsszs7NepKzz8iS9Fr93k5WwhkJuFtTLDP4j",
  "key46": "5jEJqJtRc9w6R1KfNfntvmhJVap36KZvxB5hKb1MecjvXytGuJWRk74Kn7Z61DBxKmadCC2KvTVTox2QS7fRt66t"
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
