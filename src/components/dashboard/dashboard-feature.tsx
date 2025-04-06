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
    "29D5M1yskEougjKjviiPatcNmdXBiYXV6jUkCHEzTDvQwnh4z1jDWMRr7gsqgrpiL9tP4N4XD5VXRtaTGqWXE2XS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GoV1XJ24HS9UvwPQvkd6i65QBSwbiYEwiYG6Rj59sdGFSHZLyPgn1kpGz9CT5C8fZKcnVaugP4y9JwZQUhwB9Lm",
  "key1": "4rBp9iBw1JRSMy31Que2iaSK1CB3zjBPQPeRnrGRC4gEXNxCcuehQgPxGFwk2GYPog7jQmN7wRiUHC1Ru1xoecfm",
  "key2": "2DFmnGY2JKoqusm2hZbGh8kPofjU2FvHnoMRwAxrznHZGKaShEvQubQqv26hnaNrfLCVA8qpdzKCkK81Yix4XSeA",
  "key3": "61hhKQ49msma6GSZkDVXdaiTsG7VQU7mfcJ4isWHDPvMSk1yaJFcJ1WiFfEDXrGqXFpfCZibQgcEtggs5nYD1dBS",
  "key4": "2Go6fCVmtb7CnAALptNhbKsP2edcY1gqfhuhVqe2fM9Kt3cTb8xG64Q1YgQYqREy1WmLZrKHgE5JeHPhzbiBi9Ex",
  "key5": "2iZodTB4DxubsBFTYFVWWBySxJpJer2uzS6a9Y1Ey4wwrckNZgAf8oQ3AVrqYPo9v56axWQQmLVcim9zTigEbmYd",
  "key6": "uT6BqfqoqZ6HFRFJhc7jbENKxaSTNMCsJeBm3Nr23FaJLEFifn1MX5wmS3KE7o9rna6dj5e6jPqKfx4ao6NArEZ",
  "key7": "3BBFitoqYTv7u3TTJNwRpR94T7GqwwBZnuta7M8wb6XdRDAe21xbEfVjBjuJfsNniAjVe1m5HYnBk3JdUhWcEdyH",
  "key8": "2oiS2J5eGt1M9EiaobJBVddNDqtqLVX3P6biC2LAk2EdfUzWS2JxMPx9S5jTTqPt6YaXqMgvv8isZo42Tq53m5Zc",
  "key9": "23nzBxhF3Xf4PwnKUrWVA2RkoTYR8Mq6vq4fZCrJAYKgQpVx7Dwaa1RAnLMrFM6KgTbkKXwTkHVq5ENr6sb9jYqp",
  "key10": "EwPJQa7fMgXdLDurn73yp9RuXHG8A6kLGp1Ct8ag76Tb26HDYZpRwNWiKRFEHwmuLjqAuVedKCjtRXnthZxdvGs",
  "key11": "5iX6xkBGHPjh62LZPP1CtLJZgHx7wywQaXZNk4BhAo4NLqFWQ6HuFCiSdmnWVoJJv4gHdLHbtQAtFkFpsEGXF5jP",
  "key12": "5q4C8pRermGqhQr5Dk6qX46LrQfLgGCSqqGrG3AuvherkMbCh5CbLQaEH9CyUjRaLgg5WLtLp2cpgrokXKNEyBs3",
  "key13": "3ZsYo6XDQrNgmjpkUwLJ2pqH5qsaqm71fXpiH47sTHnhcx3n6BoVQSS3BjzDHMKy4GNYJ2JyU26BmAoMSXpyAUKD",
  "key14": "4jzHDViQqHaCAevojWUp5YSt4QbxmGNyDiK7h5VHBTciH6wBEi8YkR4P37735NNffUhdpmdSFLhs6vwNiWLwrYyD",
  "key15": "4AnxnfgJ47nWv4GjcvPgQXXa1mX7PbTgxf64wLuTvvGRkPtoCaauvTWJ36afEWWaDJwr7wTb3raW9jWjwpa3Y4RW",
  "key16": "3g1KBkoun6u851AKtn7ctuZh5hSZZn4nCc17rJKvd7HoT7Ysvj8dSFrWv5xJCW3vrD6MHUijYX6MDoqqyFRDzojL",
  "key17": "3e4qwArhEbiCb4DZsAGhBuswuHCNe1oVWN2BnjUWqD22ET6sAapM6Cjfq9SWd64Hr5eD94UhPaJft5JaFM4SyRJv",
  "key18": "2c5ipVqvxgDGB4coGjWxLhLG7QhLgEnfVcU8p9z6v7bZmM9tC47UNpSENwKoLyHgW2LEhSGxg3v4SyTBD1jSfokj",
  "key19": "3sd1R3vw8egLJbReKctbFD7GyH5EPrv9xBArFxHsiZnfJgVfnJ1dQPe4SsB4CkSiAECnEkvpgp21mcG7q1cTjahp",
  "key20": "4evX2QuPCUKvvLBcgt7gTJTjdVQbmXFgTDUQQndXE9Aqzi5QqndK4NrRABAitobx5W3MJojvuwm5PrjjXvjTkiQw",
  "key21": "rruLWkcLsw5mKxd9ontHZ1dC5HA8m4j2sJoXTy8V8wbUyoAfUmgazixHeGCtcg9Re9WkihWFoNtEvg218Z4g99w",
  "key22": "5nTzaHPwMv7QQ4B47phjCXxL2uNBH2FA97yQCZ2feb7GjDxaqFJRWHw6jkLNd5jb47fNAx4eQ2De1XnBuL3Nxsm2",
  "key23": "5uEfgFJwfM1m2BMQKUKNDhgtuGGSSc3a3oLRuyQvoHkxQxQtWJSeC3FFAdX4KAHGgSR4xY3YXZ5KQUEbZuLqCiM9",
  "key24": "6744e4bUtjze9bnTa9eZbcB2LAU1hC5z2RJQRD1XwYuVuDBkkwgcv656idLnwvpXe8G64hwea2JAkzx3gCQueBgD",
  "key25": "tNXpcW7PWXTQcvvSdpqjWWR74bQnKxMEdBaucQJ6BLw1fSYWbBefdofpJpMuaTcAKF11HVsdT6c7qJJBp1dzu4B",
  "key26": "A11i5BpcmoSEJuFMxPDHAkeuKU413VSnma35kEWhZH7nRrBRGyjtLTTEADSfRu33L9qiy3F2kUwJaRGjvzTJRFJ",
  "key27": "4kSWCjtp3MG5913CXrmzNa3qE9EDu98Wr1Hmq2Vi5pEhyuFzU3UTS3UVcGCrRGxrNtdbVkE4JDYesdqJotYdxzmH",
  "key28": "3CqPZTHcjQzhRgvSLKjHuA5QNrtNwCeSPWYE2RqBmRkg1Z6nS1t33iuZDThktjLMDSnC6nEQLDVtrez7jSkcQbbG",
  "key29": "GJobSVSi2NzzohqMChagd4y6PXn5iMP6LDYNZF3WNAD6s2AfBvQXpQDokyRr2UNERvgwQEW2LdhxceCLV31PzXN",
  "key30": "gQ7nvPcoSqeYbZH3Ky9e6P4ETkThLY5JpuSNNgYp9zxEcpA4LBShk5Aii1F9nJEWNqZvhfDbJ8towyiJ8PkZdAx",
  "key31": "42MSvtLpGiYLJ8Vtnr2u93ihPGrhumJjko3JA2Jeed5mqNWeM6HYeT6t7gUENXstEHAw8mBpF94L5YsTngAPwE24",
  "key32": "5ZYNEK5LcxeZzYEdeJmsQLcqa6eiBbMwjjyzbk4jxmqUez5X7dYNUwqxS6LArd73SBayy3TZ3UkJGWwa3V881CfD",
  "key33": "3msQdsCQ5tg1dNw5sxqM8QXA5mN9g6pFawZsSmavMD8ZqCSSVeGFZ8CCUieqzgUqKzLWt8JfHiLtvcmR8Lemump",
  "key34": "62sV4hsGAjgNJbCBJ2M2TweFL6mEF4eJ2SAK7ZD1eQcGShr9KqxoueZcG2nsDiFT61qqK5MTDan4wdMgMa2MCez4",
  "key35": "AjkDK3MBaib1KWHibfkj74TA62ZbsHcem4n4ZD3JT1UZNj4p5NxQ72YNHYSHixVjcVYF4yVMwWwy7UyXoJiAMii",
  "key36": "3Nwa8PrbR9scFjV7SMwbXwc8j7LLQ7B5pG5jKz7KC2Wjp9bCs4ghm8MP2HutvgHEK9pSYyY85kigsZNMvcyrCpeT",
  "key37": "4wT4uHPAVUT3jSy66JuDfMRE8erTbLUJgP3mZYWbsXtmtvD3DtRLcG8pGM8DyQH3h9QroEmqKdrAejVT4trZo9yz",
  "key38": "5zR81qvgkeJXYC8ae6bq9eSP45PmW8B9yAu66sApGMuS9f9yx4WptbGjo4mEmQeeUEQXj9wiZP6FCg5UwTZLw7Jr",
  "key39": "zrcQQ4TSRdhZt1TJTAsSMMRMmCPjtLoiThzgEMET6NAbaiCyQeGGAjNw4CXKvAJBKtQ4tV5h7cG91Jxw1ejYYT8",
  "key40": "4cFLTiETWsuqa84xqt94xwnaKP42bYyXVvwojoR1KVfAfTahfqFrDPvEY3vUFxQ8Etiiw2uPZw8RnGqMJ6yNu3PP",
  "key41": "4iNL7MfW4Zade2TSzvrSk6MLqHmUXhecVTmfSzrjnKpi8hJwAnBtprhQjDb2P1fSY8cHc4eQBUVewK1tN3D3PEsG",
  "key42": "3yRd6kjFY7t8DRWcye3yDQdosKRn7qQsPUy2NkgXJvLHfRrUTMLksZWZ2jGed1dU8UBLZZ5xZDsHTohLnYgyXyip"
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
