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
    "btbBbgfUEB9PdbXGepAsLgfrizxGyfDCXCrTYynpz23VBFBzBMgBfuoyTcCrrur7pd8CDeJu7JRyNuLnno8XXvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SsWjsGePuZoViojK4p2dGcpUrdik8rSouMmF8AmVmfm4PnEJyvn465EpE7P8Ww2VEJJtUc8iJP3xNKc1BYtaj1s",
  "key1": "4S3rXLoNDNhMUwHzKxhTCrPpVj2nLMZLARp52Fj3fQRRagk9AjqK3DkbYh2zXVSt1HAkejbW2VSEpUvfpoS6HMQa",
  "key2": "4fegJFiq3DK6UjeB3ukHsg8sJ5bpaYUnYG257hG3xDiPHep2p2tsBBYRfDvEZGkayCgga2o1nWf2gqTLaSkoqf91",
  "key3": "3UHHb7yu4FzWGgm9ZoDtcq1cMpG2fqEi7Ureuo6AvQsmyxioryGhVJFdb7MU5sKn3FRY381TRG8X9BKeUqcg2Pou",
  "key4": "aGFAnebGiCBL8oDoiRB1bfa4xh9sJBLH8a8bziwkqhNxEiBUMdQUyiH6kp2fctXY7yTUWbGA6Ptsh1PsqNFBSLZ",
  "key5": "5JQ8GytAVAhBPB1RzxQjeeLoyVLSdx1X2SvuyvqxpCy5FqmFPwng3GdwLwDVaQdefVWedZ1FNp97hN4ayhxrvoT9",
  "key6": "Pj7UFw2sB4UCBs7RbfnwWYiuBtoKwJtqj9tHqphxPvogeEz6SGfYBKUhrr1gm9wQvVA1f1gzzDiXK9h4JZWfdH7",
  "key7": "wWd9xsp78YpeV16xSoMU7Qby8B4LgeGUTBfJcc41ku4zAF7hD4rdJ5iQwpTaCnA4u6DWK9JMhJMhbDyrJU2MJPj",
  "key8": "4T72xgm9KgEH1rvAexnZvSbsSL9fkC8iU8TXFD1riR4z6fru7gnYvkso2cJYHtmmoTm1sEfTjbjZZjaiJVPjsz6N",
  "key9": "4cpeYdjGvAriXv6bv6ydzZnD16cVeGCw8oxuDbwoTPd4bxtfNJZmBuRqJvJHz6WFMTvguT6BDKBhLv7fbanBn1us",
  "key10": "2s6CVEbAii9u5bJML4ya4MFmNhgke47Wgsgk7YpuysGFuiamjAWD7238nbdUvXvLBwc9R6y2RZEu9hdLY1WLWpn7",
  "key11": "288dtavf1QiJiEEP68BWvq41Zh24Lw9ZHMr13uR7VaW6BjqFXdchi4mC7QeCZPP9us4NXEnuWGRxFwTczQ77B2Jh",
  "key12": "3TtT7VG8TUDbBs76GyHpEUg3oFJ6shRgp1KikivVe5RtYM1TJQX4vEupK71BqP7f8rBe8HevZnj6E7EtyAFWQu4e",
  "key13": "33SjL8xEq3bK7bUhLbCZK5R8FdBnYSkRPimt8F4YSmYszXAGcDrhVs1evgBoJqm998SkJxLd5prguH5tiT1WoWMw",
  "key14": "3crxQTwT82WYgZ459PiFuiS7sARf5a1wfM1Ma2Sqe3uy33EpJHBNaUXiUu4y5a1Q3RtnQmR6Z7csUr7WchE1NYct",
  "key15": "63jfrmetdpcwQw6baXYU7vPtx9hqnqJEpJYVGvj6ELvuy7EMtXCvJaZedyhPRxZ9NEzRbSqv44JqnfBeSFm61KKT",
  "key16": "3zQUcBhXtDFRpo9hn6svRx7PYPaCggqg2YCFjVSKYwKn6GbTFDgNQHxVmm8vdVtDnsJtb6mgChywaNX6y3H4akR7",
  "key17": "3WjD3GREakSHhUhwGAoZ1qkRPkrwhxSaGkL3qJ9rkxBrpgmUSFK7nu7unXVtisxHdNzHp2srXYBGKmwGJ6NdFP5T",
  "key18": "2zL1YrhFDxYJGdE6xeRjkfbZEgLkM8tSGA3gbiFJk6AxaTFqU75PiduAeqaWodCtjLpaiSmG5y2w4EiioaRcZZH3",
  "key19": "ZW6xLE6M9B2XWsz8vWRto2C9tSQcAMAj73CymtkAXtBpynVqP1C8oYt8xUFp4mB86w9VgeVjJZsNAbnZEV4QXs5",
  "key20": "55CDBXjw6C4tE58UcVaJn6ydStppV6vN3TTxWB6ZiTNGWiRjhc5V8XhdNVE63akc6NBs3bhVtjh6HUnzkPUc6Wqa",
  "key21": "5Tj9dPGxG4RykKyPT7CFqJbQx3VyZZwQJ7PT96s1Z4s9RYvaR69HgXZQKBKkmbDjKvT6XZA7uXwCyYnChS6bLQ9C",
  "key22": "5Df8a6Nqpf8wzYPe6DzMfFrEA5aykD1LHujCvWTAkXUFfMu4SbjKdA45ZY3ekL61x3As84ise72vv332tMRyicH1",
  "key23": "2Kf5pDqbFAPMG8b3YNHbUmBtyJnyK8JYzm94Z864srqiDk9PrYtEmrjTp3dLxd4n9DKrUXxzCJ6yQUzc1hDnSSkh",
  "key24": "4ujXe5jAvY14g6Ng1m8zAjxpGgYgEJGjsZ4HohbR9s3AUC3FtArSp1ASeGWih9EG1HoFRQuyFSrSfmBECGwLMBux",
  "key25": "5qTTMUdAdjRFWZDMpCYrnyPcBpxkrqD1F7UkzzUQ1gNgWtr4x4yT9g82xEnnsfmZtobzetS54Nf5iPbQrPwLmRU5",
  "key26": "2n22GqxMyHvAR2abPUYmzdK8QWqGJpbQjupKtB7jdDdmo4W87CqFMiUJQb4SnK18SabWYtMJisu1mEZfTBGMsTG",
  "key27": "2exZGVtS6nrBvA5S2bEbGMqrHEzoaqjgnH8YtngESU4BSE44N5tFg3xyLHeNgAsQy5rq6pGqzEDZfB3AVGDTfVjd",
  "key28": "3pVNShcs2nA9iLgRABVEynqwpqaroYKk3KU6eeU6kwv4cSVYx6AQAn5r91kz45tiqvZ29Bht5qDh1MZCHc1oQNqx",
  "key29": "Wg3XFH61bAQXyqxfKr1va2mCq3gBnQxHHf9Qu6Gmb6yYwuxiaT8ukxch3EwKLYdhDocTdCcNhuycaAkjzEmeH5u",
  "key30": "3RPDKH9XFG5p7kLinpRnWR1qwTsSq2JHwjTZrr3QdcsJFBk1SZx3KqWmRxAqcM4r3YexoHRCg3k1TdW5DfoXhH2",
  "key31": "24hQ86YUH97mWFMRRmv6jYEEdMCYXq49oC4dMXdwcrWM5XAMf3MhANtsJkRwLXDNvXKYAHTCMCa3At92fSYEkv38",
  "key32": "3TwuG2mFdYgWXcKamzcXXsmPcssU47cqCGKKCNF9G1mSaE9YG6tHFtj65sKYFpLZ9YJ8okUdKJ6VW4hSjTXdM1hg",
  "key33": "4BmiwDSmBFegA3Ac2Y7iXSiaSXvrbxiuGmfskSLVTnUTowW6Fca59tGgf7pXVmpKEXtCAxgNuyy6WnoQZ6yn3xHV",
  "key34": "44sxzEG3pqosUmhbPM8QrJKzVKrgTBs3NCjmndpv1S9cWhM3aBVAv9cyA7z5fc57kujsKAbBi6zH8L1KcSGqpQ3v",
  "key35": "PbPznYSidHAqLaogCyMc2noB9UVqrJAiFujKHqd2P7jvRknbTHftYkm1DCHFf7UEsqbcxTpK4d39v7wRsu18PmH",
  "key36": "3a1zYFDRwMENXfXjoCYjjRAxxmGFm1HJEnPUCxcB6LNnPcDyJ2kKt8rB88ewoc2weifmw7q38JkYK7FsYRSURagy",
  "key37": "5jQmkpUTrvuNLNwNcLLwPTHEs8gVbtYHfh6MwrFZcb9mrBbYyjdDdSpggWhNaPrwVTT1YHCjdQ6kEvsbgNubaHRT",
  "key38": "VYCFmf8gK148Xxqdyut9UVEPBcsMV3PR7kUwqWYfGhvedBUdiibwjwuqinm63mwBZsDK2rJrrpdMdpFHp4MwZ7s",
  "key39": "4JGR6NNSeRh8kK8ERubeXu1SrkFP8zdVUiMBzWrC1fDZb8NP8LXz2xtwatMjk1QaRQWhvTxi25a5rPXNx4ngmsXA",
  "key40": "JW1mfV7fgVbp2ToRWJ6PHjnHsqgxFsMXxWD7Mz1T8Bn1Cr6wKCJ3Pyt7zm8xqgTdZ2pqgQwiNzZ4Bf7qM751zCA",
  "key41": "3ZrrsUGsF3b5mqJ1xYYBUSmUx1VKMstFDoJsLNgF2UQXkxJjmtJq6ZL1HzCAvD3hzhWzoHmeVmTUTWjv18Vga2Q8",
  "key42": "62NcnrpHSJAykRuKjA1UrH7F2LHFevLL9uVDMgYBTYJueyYduPU23gaA3eZcakvEyPPk4MmWQtDEQA1D5PvSw4Mk",
  "key43": "4W88akHbkDdnKrMAUfGpHmfeUHRGNgKp4y2ydjxipE68mWcEFKwpcGYscbmh8FwtmMgzMxZySyGypnU35F4tYAx9",
  "key44": "2mRe8K7bfiHL1dHH61DUbL8tSXeYaCg5juwVTwYa3gnGPfpW9r7dXvnCsCb6ySfQ5kMCz2yfKt9h3UcSVwRxxevk",
  "key45": "3ovHnivb3P29fGN82ZQmx6H1A7daw195tYBz7UhjnSXxx4PeE2NejDLqzZXhbB8exrc1CHzneH6V53K7kbLnc2SB",
  "key46": "YSjywUyHBSjSpV74BWv7VmpddnVmVahhuX51HgVKb6EGS3rSB3EzniHkvGJa3oHmYvqaHVKNukaGHutAGKEgpTG",
  "key47": "3pfpsyitC8NQVkwESXxcp8Hh7nXYJhZUU5UiX6QSgLTzWnpUsaRQy4svGegBh8Y8FepXgxne8uKhFd6jcTV3A65g",
  "key48": "MMsugfig8PLSkeUwCz3kEUwWyNDg8B8xnLJ7mAxr3whDKCc8nm9haESAtJUDSTcuwWA88sfQKADJ8ybpG6KZgDS",
  "key49": "5KVS1wm77CpoVbLcZstgqbVHqQm5qavrffuSz9Wn2Fo9RZ9RUBMPr5pHCxQwuAqjKDkhRWtpjWgqf3x3W1jp1LNN"
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
