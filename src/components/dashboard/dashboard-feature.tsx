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
    "2VNrNmTUe6m9a9NuYTqn7xffqzaaW343ZUbqjrwhphouhPCtiu3nkXfxPTWe9i35RMHMmWnpNXaWcfUoueHBb6L5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qUR2iGeQVjcBuuVxtaUB8RNnGxVYDZFfXTL6hjXuFKGskU1BP71Xo5sUvJQgd3Fd8AHvbbTz4Gaejsz3BjQ2SXE",
  "key1": "4ahkGZMruzzUBixXAN5R55eifmMtAsjqikKQDYig3c1HgvxQgnc3461Myudw9iBJrhAvsyK3cPDnEKuRWqcQgD7e",
  "key2": "2s2VNNSpQwhvx6XsX9xyZv1tYFSh6LU6xRw8YvAR2x8A5615WE8LyWJXwubJqSiAHTTbJoGaXaGZi7hBMzcwdJcW",
  "key3": "3xJzEq77kJhgQcRWv583k3KsTB7ZxApUhBe9abMpoJznjHEzC8dZLdsf3PKpK4idb2HosemsS96jAif9iimZQPGx",
  "key4": "45uXuhCww3ku1B6ZYLXBmCaNeSKVW4RxxUWqJv8d89hi7K9oy7f5it7DjDaRZsK1WNfwuXrUtGPWyXXy1Knaxpp",
  "key5": "be1fBSeqyWSpx7kTzV1QfySvwXJ1Heje9xpWJdZjtF6NYBxn4EoGDQ3avHYaW8TaoyoJywz2zp8aqBdBwHanFuu",
  "key6": "TXguehhseW39cZ3Xm3buoWMoa4gafdJDc28pVauDSpbMKBSkxN8zT5AdHjK5M3CAF3enWzZ9rN7PQhtaeLPZmjM",
  "key7": "2roHpsvDpndcv53Qp4AsptVfeZuTNkNFgwShjXo1U3mdXrrtzySawXsgo5fUrmT3xPBid351Suy1KjMVDVwBLWCN",
  "key8": "488S1vUvFE3Ub6AF9Fd7PUyhzD2PXei9pYJK2vbipsKJLZdyfs8gPdkEo24cjeiCtURKaBQyCmFvgctTkZyrEpL",
  "key9": "3AVahpMKj8cdWZN1gSNxmXFEXQtskLEMHPTFCc95sVFJaUAdXr5ABmS9gkHH2WRUvJTsxDqGffErwVKjiPjXZkQn",
  "key10": "3ws6YXHG3CiBKmc8VLznFu3PcWUbYttF3JH5jyYq7mGTUXr427gJQYxZagH6yitJmrPg1cG7Vo4MAS3Af8EktEGP",
  "key11": "nJMa4nefbbVS118WxQYPnFjZ6KY91PSBDg9uhMX1b6ChZteMNHw7hRVNwBxdWm1uJFCEcNShchXfhUrUjG5gARW",
  "key12": "AErxf2ZranJd2EowLpnEviCvKJQg72BBJXhYFMeveVwWpGr2STTsy4C9T2tXhknpqtwg7iQrjYodKwGLiNEE5dQ",
  "key13": "36JYNDyxpLyZpu87rYESYZvzgMXhE8zPmpWwWszyyKwbFrwDX6KxFirwunX7hwuvDzgqJPjDJQNRu5QEpkypwTpq",
  "key14": "5teQDi4whYmrip71MbmaQoX5hK5xug869zHF7zA1McxuxQG8FWbi5Hjk6GbhMc8HP8yUZC3E1jmyZRMxpd5wEZF2",
  "key15": "o95TVvpQ2QCTri7xLk29FkdoRyZ1TeZqKctaARkiySHWirz4iJqaiBUmmdKxvLjUc9NUqBjqpu8zuPdFbBVqDAk",
  "key16": "3kCvjQqysAwRkr8UsTsWytRsGWiKKdodqhu3EKPFzsGp3Ld8p1bUY67F9T1dX4BvUEUjhRvRt33L46b5XiCzqeSH",
  "key17": "WubBsPdirmbV2WFNpoej4Gt3NEzhFxU8BvXKHQAEPmJuXuzu1MjG4Tk9myb3yDqAJNkxXPtPS3X4LmdeDQ2s6rc",
  "key18": "qPa4LrQmEGyUKe81JSsp7VWistwKspAiHN6KvuWEsUCGf4xqavzwxgwtkc7ry9k1V8E8ZjmUivesiPgBdQpAa8h",
  "key19": "4L6daV9LnJsFpB73Sk2tmJBbr1wA5SfUP1gDPFYmdQ6VxVpr5QnVgwdBmPDozf6JJEVcbNvwNhENApsyKTr6yFzY",
  "key20": "4yjjCrf7dTZoz9Tuz5i3Sp7JxmV2wjAfCB7kMFp6gX4ZzwyxDxEBmJMcY5niD8upWu7sgJyhfRSVLzkE9CrQKxU1",
  "key21": "4JMbpcxrbykE4Qc8wGQvdr4t1Xa4xLCzFwyjdRhWCFv9taHRA8YNF7JCtNRZQenrrfLu3gWr3zGeuYurefMTBqLD",
  "key22": "4fLYkAGZemHJntd54HrhJSR5nqMYmuVcvg82sdX8xrhgKHs8y4sVirCc48astz182KmpgXq5X5bsf6QZmbzmBhFr",
  "key23": "3p355TstmFy3RuGCd9a72Re9RiZu31X6Bp2nsLpNJ3YtUiJJVa7PSsAdVQFyS452KWA2BUXHeCQAjAvU2MH9EosC",
  "key24": "57pbfjnY5fBztumRwayDNLcE81oCzMnpUdDhpDW7aUrULp9ndeeWp2qCa2kcYSvmZikSSWRsP9TV5zdusm63ARVK",
  "key25": "4Y3ANaUC1hXiMGe5TeSqFuY4VYZd2hxyHrZGUfpxsAtT17Ze5L4fWnFXcJZocoi42nrnFZyZA1osXhwatWapj3hc",
  "key26": "3jVZA5fUbuagnMXtAnWSySYyByg3aUpFWJDGQG55634anfcY1dbbwTmUbcMmBYPSe2YpCBEdRKwjfeoRvXRQSA5Y",
  "key27": "LRViJF7pyrVFcmAjmwGDSULNpvHhvrGq4EvBM2QBJxRB2MQ4pKmEvWkTftgdSiQaHkpZQch6NAAgR2rN4m21xxW",
  "key28": "56D7z4hCW59dtDeBi4dEn9tp4mGN7w2WtVW1bktTED1F3fUPnueEkfwovjYwHYk9i8onDsNJoi6nB7smjVdLEHzk",
  "key29": "2BFkKMvTCvnQrMmNrHzpX81ubkU5NZxpw1sXAvxZNiwYqQLtTkm4TRxnJcX3dPLDEKmLbwxorUndv2Wwfu4fk9do",
  "key30": "4yxiNNkKRqpAXrSW1PZLAhKJAy6Y5zzZQa9a3SDBvMj3aakFTvnaXwvUQbhUHgYzW7UczxSXzYaA1LbJziC8zScU",
  "key31": "5WDgcZYL9dEUXzQSC3zEbaXoc6JyMvMPHhGJKVEaHQQC2GUU6GQfQAKr78NuFkEfABjmcT7g5MH2jNfJP3Rtjq8f",
  "key32": "84YVPYZmcwXZxAKKVVMcHg4Jg5UxuqesEPMz8b9GaxzW7SoLfEVYzzWKU13W4BxshN35fE3Ct4A6cpp5hrjuA3v",
  "key33": "3b7bbJt7GxX7C6zLKgPDjiTKxvz4BGsw97y1HsMztM9hvCGsdizKBQiTrETKPZGXKcXcb7J1Y6UB4HsCNNiBTyw8",
  "key34": "5ikXoQFgQ636tb2MAkv6m3zjVkxrFf4JjZczV8TU61mLduqEkRrqjDMdY6oaGLq4bTuG19fLxZ1M3cf2k1fMcn95",
  "key35": "3epwKFVJfvyTyc2dSVPLnzzoGmQxEzDKFgT2mmaoozoHA8c8DXyrkg9NKcdhMk4KMy2uxNJQdwp18Ufb7zxA69yH",
  "key36": "2BE8Nk6apMjuqhhgkzdBgWoHhctbp17Moc3DoR96RdqeQ3zZ3bxdvoZ1aQwVQTkVt2HEBFpLbDoNxfJDXSjDYkra",
  "key37": "3eLj1PgvQjRoaeNn6w3B5yJaXV5ck9YbrLJG5dmtFf9SMhmfnuGRUjzbygefJkS3zKsRgdLNG8wBubdTPwEbZZwc",
  "key38": "4MP5usX1cJ5aFe4rVzwpFijp387JN6ahawxeNdLKF4fzW5GAVrn7Qb94RWF6MHYC4ALLTZkyH4bU1d7Rk2Af5sey",
  "key39": "GiMzZRB5zzj6oMgFTAyv3HXywPFaLQi9JFkNHHNG2mCtAPDrqh6x8GfkUzFXHtmVbGRqtSNCMSVdW81B1oq2Tky",
  "key40": "26xKbqwwFBifXGE6FiwmfDKNsAFcMB4yNGaX855LRWEgzU8fKSdWVXWB9GqyWquwCBM5LCnMj3QFDcaAtDTJEtE7",
  "key41": "3W2DWhDwqzvjx2QUcZYEhwxqc1xSuJ73DKqHfycTobiePwGKA1ouKrJ2DNiYCzrN4PXeZ3g3nQVi8bmHy33B8WLj",
  "key42": "46UdaYN9DRpwxYotn4qw3cgQHQnPPtXZvL1uNQbiiZCyu4hSoPmxLNgFenE6S8zi6VM24NygcCfpHV3kypGfdC26",
  "key43": "2QdAmMeBbhF1MhW7RkoqgUR3VKhgbox1Kur3YB7w9ySKwauksHHsrweEA6YK8rAUiLQ4Q7HksWzy4BVwQCHFbLLX",
  "key44": "FJKXJw15nL7VxrLGQM2E1vBft8CZz46yRB95LNyzSxwx5v3j2GmeXEeg1SL4aezHuR184mqektaXAQmF8qywAGu",
  "key45": "34XMjSf3f1YVi4MrhD9RrUoEEJy6zDhgkz3LyxHbe8sk41v7WCer3sXSiVoGUntfjvtYFZpmYSvxJ39xSgqeJRxd",
  "key46": "2FarWA4PKF2cxPVhtLXTzAuWFSnxqzxYNvrA4RyxLfTB8t8fRSFWScmksA7sir7CRoVcbxNrJDY6j6SkfKWzYek4",
  "key47": "2ssxbV4ZweK4azNnddyYjq56Smn4DHheLdumH98zM3bMmCmv3viH6TM3eeTkBFR6nWfWYaSwF2hWEs2vLhSpbLnx",
  "key48": "dRXG195RQJKBC97NMggDnLw6KhiMPT6sztitcdbo1MZ2ePd3ur3yS53nvExW6N4dA2CLBFg99xNNnHKYnSVFd3c",
  "key49": "MzmeGrb5tw7BP7gyLY5YK58aSMs7GaNbCeVBD4gZVmGPzQNbNdGch6hifbLysajcSS9Srea7PQLSwFC7EK8QXJJ"
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
