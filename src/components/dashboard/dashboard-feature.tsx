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
    "3dLbLb78jsWEG9khZJ8kkJd8PEoNWAVfWiiswvFEnnhDumfkJHSjGy7te3D3E42dA8rXsjyJE6bTKsB49XQkGk8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dTwQsiYUNN1kZvfh14t5AcAmcU4FeVdxXNLj7XcEVCqQRbgLJ3BBNsJVE1Y8apQuBieY6zC5Nd11HHYWv2p5hDZ",
  "key1": "5t6KiJsotQLjT2KDU81uGA4PZ5nweB7UzxJrbZfL1jEYoENKxDQD25iPb4j4BZsK9wquX6k3nhzVw1atRibZMvod",
  "key2": "4Ms5efvX9eKPEWmeKtwJ8tXxfsDqSPtTVXyXqNhn2sZTos29uhUbZ8PfdeaGA17wCycWcY2fPw3xRqCCjb7uRhz7",
  "key3": "3nyBMacQw25QAvn2HpT5jP45os23xkLHED69yPtMpFK5fmstAfJY9pQ3zouzE57YkMa7z29obBSxKPuvWbWFkNyD",
  "key4": "nWx28pA9sp5AWrwkTRhYhnGhAuZpEQkXHTpxzdkeba2gJgHGwmXQ2dSxQK3THqGdVZQYGnaDhgJYHEDM2HUJPkd",
  "key5": "2bFiouZAKa9NoaMzDzx2puXhwiaYhrpxKbTYQ1UgkgMMGJVmWhC8mn164Bzt5c5pG4onw4f45pJv9HnXdA6yd7yt",
  "key6": "4o6chZDaPV4inZXiMQZwVCKkF1WYYxXdB8GSa6gF92FhwWcye2wX9ucbXDkEc8FfgFvVT1zqhzQ1cw847yexMoh8",
  "key7": "34qVv22yXrmxKjRTfvaMHuSaBh4LGx1tFh5gu2aLz3QKaEcVKGYrEVqEuzMysUonC9mabFs195HP9gc7uH2ELppV",
  "key8": "2VAEwUZK4TasZB9xDVFyfUBFdNxJCxZtVKDeUMr5caoupZDDYtcZ5QjmbYhJKbP96XjNtQ7eySQZc4tS2ZXPeqmG",
  "key9": "3zdRpstVaqUqRHrCCTj6oYjU1j2SfPaKwKPNSdgAGWtCzDB8i1fymACwBJe798gLtfKYWh3o7GHC1UYrXM6uTYPa",
  "key10": "58YU7z4eYWmCBucLKfG8RyJJymHH8hNtf2J9WBwyUomtN9Qbp97KcQp1abs2mLu6Xum6r35fr2JmZifsVqEzm6uW",
  "key11": "B77mB4b39MDeHbF9BXNB2GTjhTdupGDdto6eorjM5cuu7KhYRPvVZow4cwZBtPBhiZngXnh5Re9YfyLSAZDJ25j",
  "key12": "2ojDJmeyf8pvWdKKJ8AMWVkSEnm1gy7ydVNEAdPtsdm4Q6U54Qvx4djC7fyGg9Lo6fzL17A8aDhYzQxgJU285r2M",
  "key13": "aV2pLFwbwPaPdxYq5TtVBosbv9SK8iKgXqJVJQ9HmWWT75zvcFqqXsQtXzY7E2rdTro1hczRDaz8QsRS6S4yHhi",
  "key14": "2sFwDgU1GkYbUeBdBWB37C5tBDtgCfDkkjT3gfPQSku9FQ2gXvB1QDi3aFsqNtL8FD9DZnqmwejdeeYVH17fcx1Y",
  "key15": "3u1eyyshzED6NYVf61YmMQfrCzPQz2fGhW5sgqC2iHvF1LbxZoPx4r9nFMbwsuxUfur8zv2ZHWMn5JEQAcehti68",
  "key16": "x8nKE5gUe6TVPKrnY7PifqcMdpZ8exsAdurEX62xrDta4Gemyi7B6zU36Nm4Hoe8NJnQ2gLdcXQVoUBVYWjAEpg",
  "key17": "5sbBbU45j3R2aTJqixwWjoyST9w5Q5VHbuZVrCyAc7HpGESu9FrRB48T4NcpB9WY8FqA8ZheGdJAjmagnGY3ffnX",
  "key18": "4JwfboABgR2VjptrzFbdYNV418NMjmAQFmisgiBTdgo2nGAkr5QCQHy7LUYspBu9xcFNMk6xs7nBNebZZNvxWZ75",
  "key19": "3axcAyqwyD8BGrkKR2DJJ41aNq8cJbrLXGVXrXHsZXAZ1uZQsq95iuF3fSkiyf8y4FrYbTUqen2K2RLhGi29rmWC",
  "key20": "5jAVJSvCoqsFhdxNomWvbzf2bpQf75QR2ktzhJaag8uRhkPvNi7WwKPBYRxQ2Xdtzea7x1aeV5uAzhEkqM3j5dTi",
  "key21": "2JUsXVc688xuZdKhvaUC9wjS5fh14LzE9HCZRbbWZRRPxHJiTsgGWj8umyiKGRtgFvzotFJWDexNz2aUPHHhGUAS",
  "key22": "5kJjKiT8AY5eAXyBSSfrPs9JFo5FUwB6DQp1Q7x43QGS935uR8imtxzWassqgaSU55s98skpgoB8eaGY3WoNpZqa",
  "key23": "4HR9tbVacrGWWSTotafHKAnEeDH2tjwY9nyCaWjxpoPCzLJ5Y6Pq8DpHZD6hyfq7paHuA3UUCsP46qM92AkeqgrQ",
  "key24": "31BF3yiJirUAxJALFiT53Q6b279G45FJVLTMkJCpQqMjQfm3gtDEACog5ms755m5PvL1xK3ErnQiApGDwRKFBAaX",
  "key25": "2QZv9knuZ6bACfv4m8Ksd7mmzyKXPjjGRvncXjC8Mw6sjBSZsExRSN8zDanNZUGTGfix789bkiDJyyFQPG8dFqrT",
  "key26": "3g1ReDrvxS5VrjMPUvX31xhcyqtBGZngzb15Z1m7cy1EnAs1v4f862JFv1pZ7o4jh1m54596DXuTPCjX3Xn6uaqu",
  "key27": "4KRMnCB8n6UAWjCJ2GxuZFutmz3Ywx5GowXC55c4BCAVkSAgNhfztbkvZvoJQhowJVFnHk3NAj95q99WQgbRtAXF",
  "key28": "UmyYiUZe6X364fUAYr1BWJqrwaLCwDganThDSTmj4S2esyBXbkRocs6N1BoEjMnzT6WNSDgp264keR1zGEhrGMU",
  "key29": "2FVkYVzL99vgymGfX52txLPs7KDw4opvjpd2QAZTUUJki2EAkXXuY7EG7H5N5ePGcYQD4sTj9C9WVoN6USXsumPh",
  "key30": "5nT8t3bfdajRyKkHaVSr3rUpDuSJAanv4fiz51vEhBnqXjDAAaontKCdK5mapHZoDhpFXBL5RdkMyViKxDoTbrge",
  "key31": "2oxeEapXvYRzxA7MtzeUXjHGna2SucKw4P3JBAbRn5qiBuFLeS54t95A7kCTgSTmvd4eYMQ2MXFYC9A19DqNtNwu",
  "key32": "2CG2rCEVjHDBXSw9wdDvsRuMdF1qCCiRd1DS8bsGndB8Mf3F1L78eeDB9oNXNAR8gp9p2AcJfGBJkJ4GnpbdRyYM",
  "key33": "4mrFUpsUuiHmutYGjZLZgziRgkviJghY884Hg7cVsZGpwe5M7mXxqDsio8afuuamYrCw9WJxRsaucaPwiwmGksdk",
  "key34": "5CUD7qHTYWwmHwXW67haFNPtMaSQGFkPrTgNDphQUiFVsmD37RZG3Yi4PsY15yj6APGpdi37YcNkW3skETNSmPyd",
  "key35": "4wQv3vh29UfeJcSzuKt4UWuGnqC7UWJ9eSjGuNJf6GNU7KhYcQD2F44SnZ2cesYBHQrAUWAv2MPCWbTijrbAn8oV"
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
