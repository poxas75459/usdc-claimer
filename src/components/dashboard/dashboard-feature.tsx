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
    "3TPDLS6jYRKWe71C8AwLKn2YwEziu31o3dCoU2c1uPne4YMrv3zXgQnN4oXydupjvbZYyvQerJozna2LgXEfCjWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "536eP89i96nXBR8jB3TrcsV7xAapcvX99uFqhzuQXiCcKkycF26AS5YqRgwu8M6qG6yBhUiwWRDRctpW5HtkhC98",
  "key1": "3PGZ2uvAv5CEKnivTXp8BMphg9Sxn6XS74ajnnwjTsm2WoemjJjeosT5DHx9NhCff4NrDmGuKArAXYhjQcXupMUB",
  "key2": "ChpXww1EQ1di6o9ANVUmfz2xYX3ZZSj7s3TFRgv6ApjkMgrLNXwNCVyRyMPwsA65PH5bm4cQ6CyVqfk4gVjwoRq",
  "key3": "4x4ciM2aPn89Agqqvp9Nts56ndd6jt6uzpXALBuaGfAcCUQBWvsWTbL7zRgun5zwoxdYysgD9ihA9w8L43AHWoXC",
  "key4": "3UMN1TPjqPuuU2NtkEJWPpxYWo2fK1NjqweiAQ74MrgBA1mWFe4Ta3DyqkoStR7YCRa1XdJv2PwuBnF76ek6xvvf",
  "key5": "2SBbUrK1oZo1DCWYme3EpsM4xu44gxwZJiJdpL2h1PKxHiftDZWUG3fiNpxCv5Kjt27E5DDQKKB2MHdG9cjyvakL",
  "key6": "5ccfc89ihzH8tnKTZ2MG9JLjHcR8Pc4cnCj4AbMh6wn9gVPv9r5WinE4xD1T5ZFwKPxpLgMNTpdzz3TQD2y9Cpkb",
  "key7": "5VSfa8zzD5qXmFZeRk78uEsWVh9nGQTAkYwKkqUQpL8SNci4v4S6U8aU9brS9K3eLvNcZPKMXWdbZgHEKt24j24r",
  "key8": "5F33G5gzzKzM5272fEL4YFQQdNr4bN95QhCY4DnJx3csJikPHQ7H2hUR66TjPdFbE6eiuHNGL1xrAKZLGe5ZYvq6",
  "key9": "5J3EBG9NzAgGkRc7epn3FPk2eL4VZX6dLZfLfbP2DnesfXJZMW2xt3GKUR6oyg5MwHyUPx89jB3hdcFHEy76BoHD",
  "key10": "5y4Y6yT6owEBYcY5jZqb9utDzLpHe2oyzg77GGXjXcK7A4zdbTbs39b9PxBoxRmGPBEc6XnqNf3Nwm3reoEBGEjb",
  "key11": "4eEkuyJE3V1ryfo2L3g88e9U9T8FJexg4tcGgunTCLMLJ9YYyJwE4UFZg2btC5eUkQjhc5cxkmvhX2F4aXssdVKC",
  "key12": "4urjxoKKFMjm611dZNFD5RhYqmgbKJQMVUkdCWeRar3VwiMKT6u36kjByrDxE3QmZbWGmgfoxUtKtCnqGHQJvNir",
  "key13": "PTqhKN1YEe98TZ7AFRsq3oQE5eKcps6HNE9pWujrGqFsdLAs1Av1Y5vDX4FY2Net52esjNmF9hn38B4qH2QQMMu",
  "key14": "Sgr2ZtqbaPdA16cwJfGoH6DGNgTinkesVwJjDVJtwqTcbVRtGyBpCmDP89GPNsmYT9YYofkWCY94Vg93b6R7LeT",
  "key15": "44WexRb4NHpDaJfozvjp6mVVHksodBRhzvVoNgo8mtkG7fL8MXdmYGRhQpcxnc4G9umdhqsREA77jrgBUmm5yLVR",
  "key16": "4PKur9WqwNgHQbZ67ZZfxPqkjFKqK2RJ5Fm7vDASLegWKeE93zr9PrVNVyok9dc5HLiwMHFDQNJkz5wrdRS9o6UK",
  "key17": "2yWk84488FrrNRSDGbR8tuXkV3Rhc172SQxonGGVfALp4QH9871tzktv9kfw1TJfDvEEC3hed6TE9kxWM4115KG6",
  "key18": "jTJJEfRv7gHZCmMH1YauMHZX31RNVQxypQRVWeih2xdULN4zM3UmAPBaL6aWCsPPiqNo43WNApmLJo1KdaqjxSE",
  "key19": "4J2aUVTF9EHhME3hzgEEQ3QHkHawWYB7r9XWpRzL54U7YgG13eKsqZw1d3xBe6yRJjYLtZpQJBXdZZe8DYRXAiPc",
  "key20": "3AGFq47iqQGxs1XdZhNEvZe1oXt9DF7PWSQwHvCaqnpLdR7dGTry4d82ciWPC4RiuFYAUALHoXYcxMVSCwi4on1E",
  "key21": "5V2GnSbkwhEQSrfQQGPxxHLbEJuA5GWjSGFZJSjxif857ojKeGQxf6fzc3bfX3seiqes5NuvYcTiv2Q2SYLXe5q9",
  "key22": "3XqCasKPRvRRfrYNddJpUu5dczLQszyG2zmvRMHwnVXbsrGts9YrcNQWk7itTKF22othX8yXg5MRKLp2TarWrihU",
  "key23": "4yc3rtPtBcXRCb9n9nPg9FDzNBRGTieWGK5iBg4y9CxTAz8VE4YgCwZ7BZ53oaDhPRpEciHcConM7GuPVTdp2QA9",
  "key24": "5QANqSbXyZxLSxuNodWqWbmonqhnTLLnHx3Ngud2P84uEwVGzDZBDvubtbfb9nQuTHRFrCvyhvwDBfCNHLesmjUS",
  "key25": "kK22PvG36SyWVHL6FtWWWNg5Bxi2MW4SEd4v2xbXD3eWtQhPY96rEYJyMoBKXp6Fgeu5ANhaonhGQqTmWHEX1nt",
  "key26": "4LKkR6sFbnm1tW3b839TEx9zGTnktrb44PMQ3X9ntsBapcACocUzhy6i7mgF1HS3LE7tinmLeZ6mgio76pMWhPuP",
  "key27": "4XYhnPYY7QqSJLWQu1kjQuTpU8SXR8aK6qhQAL9ay9w6MKWArBbwjXk5QmEq8CGHsZaePgNKvVuPhAeg87LvpTZV",
  "key28": "4qxSFe59aupCd8JNNxNPHhyW3gV52GuPt9kezydBH3KdKKpAbespe73VuKk86piM9oE1Gmp7HmJWUVBbuGXfUzBQ",
  "key29": "D4FcbC5HNALpcYS9u6YE6XvCF55g1B1M9yt5P5Fo52wuk2r65Q9vwHermT3oUgQPDGbZN6dReTTUTGvvcyvH6eJ",
  "key30": "rRMBu6NHCQN1YZvFJL1LgY2e9e86aoc6XbSTuRefFD9Y3ndj9RZxrxHiMopveQSKvHcLCCVQGRnTjip9jjjMiDd",
  "key31": "ExY8rXQTrvF9p7apXmS5VafTvnHUELJu9na3WBSsT2BYbtkdfEkUJvRSp7oxhYwU7UqXLkSbbBLKpTwafWAV3pf",
  "key32": "39MMYKg5G9D4FqssompqtNLT3m2WGSVzvt25eXbMEecoFG4JN9YFZftV5VwcZTgf87GnPJW6d2B3fEvL9bcQ1RAF",
  "key33": "5doX3L6Bpo3nQXaozPwAa4o5225skLNzFRrHrDchQB7sp3tEDUqTKDPHWGRtYZRxKWXPYLiiXdq5FkqTVkJowGmQ",
  "key34": "3NJ3Km9jWs1PDXxQG4JcrKa9pTSKM7Tq1f3PqBX9eRFaHKaX55x5EugqfKb3XDT79qtYuuLThe56bmBRajHVeqGW",
  "key35": "2nLVwVyDReg6YXBmkYJhe5g4i27F8EEtoXPRybKowz6F2W6tx871vingCaQVr7pgXKuozuKUGX6nLPE8wa8qhujG",
  "key36": "2C1Gpj8LVm3RsCTcCW5dKN6eb8berEahnfxmhqvWDK9JwwY27cVzMDhoaHyKyVESK1aqLDvUW7trXABQEESgQYpd",
  "key37": "49ZPtbeQst8hqq8iZiZh7fB9YTRZ5S9PPYseL6CYDp3PeWzmFEiEDkfzK9jbN7imaZm74saddERGyRwUoWvYWa1N",
  "key38": "2rzTKw4H4SDDpHsSzeXqoRA2t4j42KjhE2oUJ4VgQvJecQTvTUes2HGg4ADLopScyf6apL6oqMaHGf2BqkyNknhh",
  "key39": "Qe2FC9qoLZbYwbNkrAuFKH8Qx31ThzVw88hLyM2ELCqULNWSBnp5H9achjf22SuYvNyu2yMTvSwuRYta4y64Xdu",
  "key40": "3vA6QN6LjPzi9SaYE4MmhRfikfVUxGRcgiLM3JTCWprDGz95zajXTYv5SZQHHrjtxCFXGAqPjVXnTQwubL52EqZA",
  "key41": "4xnEoWu7Si1n4ENHPhJkGANiizGoAn2qrrcB3L3iAzCAkX1TUipPyhb373YnA6GrHnYSoNdza3ip3An4k654ET9s",
  "key42": "4H3i61C55wEi5LwuGQNmsqAirrEZKxc9CudSZq9H7YSchr6mzu8kfnSa7tc2G8SioowU9j2UVpJDgnQzkYCfVHTG"
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
