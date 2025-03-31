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
    "49GCiRbmgF4GsEkHm1QyUMECTv5sF4AfBKBd9G1ibjdW8tLVo1iZ7fcfzncDvLG6J9Ancv3pHpc98PC5CDTY7SAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zF2XwNfw9tJE6ZZQSan7wb1TVqrqwiMMqgurV8z6nCnAsmErWskpX8MyVJ7jJ8bKHZTmgx3H5vTbqiFHUZAHUis",
  "key1": "MqZgjbUVDSPkLvjRBewe8MERTfAmyyjb9gCaVPzZ3YBtYQa8bt68MvuCpGj17i9BRbkZAkP3sNEY61NAKEbqB4S",
  "key2": "421hfsCq6aG81DFkfGUiGHGCa7EbvxXiNA744NtzZZPJo46BzEGPrnnfUVhzCNeDqJfWKPZ6yCxtELHS5eVJfLij",
  "key3": "4iLb8Bncqxk8aqRh5EfXPAQxvfxGGqTVJ8iaDFqfEbdLcWmW3kBxQRXRzLzHzvpgWMtV2kdqeTuSiquNytdHsuad",
  "key4": "2Qzds44mQYrZSSqr5BrvjnhnjBJJRZ6NFd9tTaD7gsNpqTQqvbS9C63Yy12iARrZ5ZkeQQ2N7ms53zfoVQfAEUXm",
  "key5": "4SrtzLarrvEnpjD9w5DXYf1VtAiVypw3N6o5jzZbqspK3NzbCik63C89xXmhzFYZYvSiH9V2xL6DAU2d4w7wxVW7",
  "key6": "q8XEvEzmyyxamYBFANJ3UeSmiG4fMyFcvakQw4nHeUJm54DrTSmQB53fAmub9SMe8vuHvdktoPe5Yu8tHPqZ5AJ",
  "key7": "3X3kJxiLbSenwCehKYAoDkMrNroawZMc84d1JMRirttscpg6E5UBWYKtgqoimXUWX3dvTUKwoH4di1XJjrzpBBW6",
  "key8": "25QFxNJBKzwZcdeemw88VKHFcRqNhDcbFiGp9seq27h9hDL2c9W83dUy1oqrs3EUNoF4rddmWGsKMak7wU5KiGbK",
  "key9": "oERbpxWd8RYNh4LW74FTj667ELMBAN19aj4znGYvbkmq16roS7xVzYGF6GLguYc1cu5gjMaiEdUi2voj4Aw3oZ5",
  "key10": "2GaHrpFHn8ogFaLyR2URpiBucNSjrSse68Z2et6o1JnXyfbyFu4RdbwyDYK7fCPvgGfS32HFR6CDwiRYAsq5kYCY",
  "key11": "3k6eTsn9aYKqTgo1FGKaYrhQb3g7tVt4Bukf6Xpu5ep2TF3H321ZqH8RsdkzhRLD9zHXUUw4T7ESfjScv5phh4hM",
  "key12": "5w7FvWnAFwL7WEayBHjnWcBbCxiiSJzWNcZzRAZtkgNzgeQBdG8WNbsuKAmSbGia1MwnsPPCBNoKEA8fnTKPfstB",
  "key13": "5SNVFwteFfX1asBjjQmCTMyXS4N7o9B9qtjZJLQrC3UVqpk6MDBGkHsxS5d5fKD3KXESpDzf65KAZqfX4me2f8Bp",
  "key14": "5jUBFWGo4u8rns1NG7CzdGVk9MVi9NBzhLkS2EarNukaCpxRN7mYMwqmswaWzjzXdEvuGydZTYoiXJm1JXJ3G1fZ",
  "key15": "4vBKfonFAPwxi3DvLP9QJHogbt3XdPECYGspQxMKhfrgGtRTE6Zne2qWjNhBhXsVXN3WkpWuZgpMT59rkfqAjQrV",
  "key16": "4aD8bjWwqKGhezwq3PMreBiqVzfEFGS62aVvJKiNhxui3fMkM58QFKsBoYnAcL8fKdjHybguUBFPtFRZKMUibu2D",
  "key17": "brtibUK76JNMqHwAkn6BCwdHmJtMF53ben116LhLL4wzSADUPD6SED7e3cHk2bdpMGhJ7TT4dhZo2FjNux2cEdp",
  "key18": "46JFh2KTib8nnsxqneyZn3J8x5ckAq1Grrc4qQuD5SgmYYGwt9aMw4L5PXC9BkeN66NxdZRS5ZR2dyUAi8rGP8Dv",
  "key19": "e81VEh52VGfzbVGzF582YoeP6QqWo2dqZK43Ts4pkuXyqEGVKoY1oTVA9DrrAWoYK7EAeBYapQpYgAojfe7Zypn",
  "key20": "4aBAoum8JZhfL2jkuRFLP5PoUPq2g7AKbXhm9DzTExpU5uUk1G3pyXoYdS8ySzP5fBnaVq541Xbp1fjPtm3k92BH",
  "key21": "3QyTrBbTiPYVeAvaxHzMgQuhv3sMsfRBcJG4pfTVKa3cceR69TstKQpmGgvRDWnQuz6YDXxgcfBMDEoBDNmvi4dG",
  "key22": "Dapetw4tWgzrU9hN1EqgAK6ocFnmGVZWFzWC9kRccK3h6UX9xAU1z2SJHnmpWeYveaXVvwhxnpDUpfETncdGAde",
  "key23": "2JQWdkKgzCtec23HL4LnjNjrpE5FMUgL5ipkb6xQjAoijCGCdqFKERpDHgoymijYbsNG231vjYpzY2KiQ9zzmmya",
  "key24": "2RpiAJ3yC9DG4SzAhBx2KyFVDGUTpeJTzRHsdqRr3NX6FkuETftLdNQyr9hYEe3du15xxmt1afMHHdna7VLE9f5r",
  "key25": "4zu8RKRPRixjTxh1wfU8mhsp7Jr3kXysp5TTXHViYkVNh8x8LqwL8pZEFBaKjLfFPkd9H1DuvP1oohdwaaqjXJpg",
  "key26": "32v9aaKZfD5aKKcjgsDX5iPvzNMPxjT5Yiyc86pFcLGVvwuZWzUJqQsRCYAWaBbX296Av9U29gKHUNfKpfCymi6c",
  "key27": "nL5EMC7P8ZfAP9AccHkJ5W78YWFcovNRbxi8MEYhngngYKNvu2XVCk8EC6SJB7HgstzbF9byXiQMHkjJJUy3ZLh",
  "key28": "5axUa7DFxDwe6jvM3sGQWhTDWnsJHkZniQeqiYGt88cEJxQ28VLWqcu3bFXpGk53zo9yxyZLectwDSH4Az6gFd7H",
  "key29": "5cyPLf6kZwTcDUm2Qxek1SLy9bZ19oK2nxZVb3KwBM5QTEfcquVQYQ2H8VN7kezandEw87fEYSavduXjjPbUcgLv",
  "key30": "2whKK81YizJ9mQFT9fRxaUBopvVvwJ92WxV45dYiy1bhNFxd5CgqzyaQSbVZNMt15wKWsEYC1RgJgHz8uW3gbg8q",
  "key31": "4Esb1m5V5bXvxQLKPgQQtBsxMV16ZeLjsr2Pfva53SzpudX7FFeNH1ChuSDMadZ1eo5dvuFeHgxCBH1mvujnWU4W",
  "key32": "4Ag7WS1XQedcmVLHfVuuTv2EHrCGwMyZzHN95SkWycyseFkrnytetYkfjgCNzUbY5XNKHF8wM3evmGgdnLZPPy8y",
  "key33": "2bHDqASCukEKiTezjRbceT2ioudaMoRASTf8Aa6iDrA5o4kxqhHGCdAHGA47PEHzzyoypYjYe3Mq8i2qyqY6LwU2",
  "key34": "4txvRYcFkRXtEzqRUryNfnpmtz3mF1dQ6RaLA8Nwr95huMfKD6JpCm7UMKLut4LbVUoM4kJW1ooPPAPxyaVuGhzG",
  "key35": "52xuL424SzLUxgnLSLSDMqgaBjgX1wP4ZEECCazYSvKSiEai9PrWFuVVrbowF1hjs2NSkfrs9675TRSx6KxvexTi",
  "key36": "wRYzkyKXqvmHbhoBTPCHjUpUXwD6NnHs9k6tm6CVJEZnk1DoCZt8pbTgF9fXMbK99T6x4ab7fQMuhXSxt3muDSb",
  "key37": "29o41kwD2yxWiyqBVC9Y71yZBcHj1bDh5VCc6PzTSaqRsv1bmXet7fv9GEuRV5QsKmKRT3ThMfdijVfW7j5gYb6K",
  "key38": "6YBAmn9XcW1Q2Vz1Fkw9LdfTExkM8UihhtiUD1kucGnMWDj48LXJiaQjwhtnoY3HbSSwCk1bz1t5gNF1m2HGWee",
  "key39": "2SVooysbJTWogwwYQUabsbgDYbVk5mTaLTwZo9wRbCa6b1Uhf6vUdmCX1WUriRu5j7iJfiNYXJWiiFNfCqiLxrPa",
  "key40": "3aaEw9TtmaCA65jTAyH4JhaGbSjJ26fCYScg7RbCWgxrLQmtRUCSvAKnrrmDQpdDR3yy9fXxDvFmWrppvn8ELDsS",
  "key41": "C2J6fTReHRv4TMpZJV9aiEQMshen5rqHZs2q7tKMkvEm8qyA2kjvJsfngWXQqi1GEp1jrYco2Jk6LuANfTSzPH1",
  "key42": "5AtsQTRgGhSB1Ff7PQSEXcmaLdyESvjZ4A962NRGaSgiKqurrqaChTJz8qKbwFxR6rZqKnnmSQy9QX2wRrrpPduS",
  "key43": "64F88xjSpXJgbdTw7ve376bwdTAE264UFFks1bU6qTQn7NT8UH1oJwNLyhKs9DM9QKd5vJrf9jS4xKkXt8CVCxPf",
  "key44": "5kXv8xEF3WyU2SDp5JkMt41Y4azq5tePh7nWd8USqerbcxdNQ8FSvs9b54saD2hKp9acfrg2XRkL7nneRgoSPqjc",
  "key45": "3uNjKy395YGPrVkTwgnJqZhhr43CJ4bFF63fSRHkPaoEK5au17m1GDT5kjp75MbcG4Su2gMsy1ebfRCm7wfAwQvQ"
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
