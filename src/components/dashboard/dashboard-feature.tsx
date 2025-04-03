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
    "59tHnkuujwyAYpaiZcfw2xinFcRcEpEJLGiRdJZw7sQ2Jf5VxJp44CY6Ekt6YogHwCYPVhYkFmqADJxvp4sGfQCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61XyUnFg8WDXcrr5cFxHhRtnp3Ef8NJbWtGP3CE9ckhwCK67oRy3c6otvPZLtdCtkQFjk8hgK8fdtzzxVM3RcQDg",
  "key1": "4ZT6wq6d18n4p8pVgKJkfytryzi5E2v4SATtQ7Vgb7yaSFkF6jGEU4Xp4WzsPA4R1SG8QJqrNh6NHPfcRcLdA1ap",
  "key2": "34Xr8pLSH9kg6JUoceXY8kz476gasH8xXbeHGWDj1aGE7F5Pi8ekhRPiLYh5n1AtYUATaVfuXyULuixnYM6GKso8",
  "key3": "Dg1Vb9Tg8iwRbz1ig79RcomSrvY83dP3GmPyU2AWg63H8RGkV43QJZAfTu5XLV8U9q4BYzj7RyekmS5idKKFxEZ",
  "key4": "4Eo2TazafrVQaJH6gPNiK2sMJjBC86swVEMJ3YhwbNdYWqQLNBQBysutJkuddeBrLCuC5vwprmReirLmzFRcGqzv",
  "key5": "5KdzxTgVa3GEuzrK2iDvQwi3gwvBLtVcWXTMumrx9Eq7bMJNf9hWVeUYeg4Zx5wcjP3BiC21sS93LDtqrCpaGLKj",
  "key6": "3apT6W1qMFt2iQQeERks5mvAJpBTMjVxNmQztcSfHtC1GvQsk4YQrEuyP81Mg7dHFWeJegisyeXRCsuEjcM4RgWN",
  "key7": "5n6uA97Ggjocg567aSZhqib314hL5VNxUimuBsfv9Rz7kimZx9s7Wop7CVKUzpjJXDaVrUNPtsU7LtFHmD61M2aT",
  "key8": "2hh8YXD2c5wXxhdpYnvwjAuaZkmZyKvdNbEtXkFiTCjAgD93XZeRkJnf8xx1vQeBt2LqypQV8dM1eVSf8HyxQcGA",
  "key9": "4Dvb8hq19LuBbTkzsxkPyTVdrHR1cESEz7oz34AM5mDEqubE6KooDneno4EAeXREE8cve4UNvgFFmZC31YyqLjSw",
  "key10": "5wAmJdVZoQqHRKkMGk93AqKjNaTmwqQwiU9YSkSo8h5yhkueA9d4Qd9M9ZZiYh73L5Bsib4AWKHrMBxdB1i1LV6P",
  "key11": "3YUVSvhKxpLreiPgqDKnzsh9jJshMMzpdD4HhivkfKFLMWYGHn98ScjHQJsUoX1kJkH2QJjTArb9JDNTrkq7QXUM",
  "key12": "4gzVCx7ds27BpatQcUA1872if38BH8y3EHoDStrEj9NfxvPDpDVueNbCHiheUaDy5SY7aNXsiNheSvYfBdcbLMnk",
  "key13": "2wU7DHfqMPxmLdVCZMazte8VsAYoCmvirz5JTew5yPtHDWxGqPX6SGFMMVribpZM1Dvcp2zu6Xn2Xp2QRAeaVFMF",
  "key14": "65DjCdse62HdTv9Etx2wKNNh6CqeeXctdNLcCMwT6cgqRiiFLhLKFU8jfdQ6MyaFopqmnMcFFGcGTi8MWXgrZupQ",
  "key15": "ba9XUm6hqELAQAH6LUde29rdVCrisdV2rtAFJ5rJ1yiTAgqg6FNzZRm4rdyhyv6Ps9QscBRPHrRWZE8pF9qSiqu",
  "key16": "4UY3c1y8Pp25o1ThHgJeyBnYBge8bk4C8yroBZzBcDsM1znsysV7CPC1EjM4MNLVzGG7SckkzcYk5Kn3Pe5TqwNN",
  "key17": "5JQWK6WkBKRLP9pvP7qDSYXKJZWdKp4V9s7krJF2pXiWp6qq5WJxQBWwXpEr3oteGv2Eo3XYRkWUHzXbNPLKvNCp",
  "key18": "ZziLbDxVkjsdGGbGP9LN6gY8xdzPopJ2X3wr83ZUAnJK2x5xir1GJr9MWZ7tKEusLwJqTi71zGmqg68X8abp1Lx",
  "key19": "31XVUj6nUtXKH7Hx87j5PCBNsNZqLi1K7MPv1CUgosuYJUoJEL2wUT8muQudatZRGRgCWNCLMCEgPFQScTrbJHKz",
  "key20": "66bDfN2EYp9FLiKvAc9zwX45pWiC4L47Amz8vf5QcSd5BZp8egeXiRso9ytBNYnJRKcYTa78BqaKSKrPotnxdYuL",
  "key21": "64QG9kTaQCrN6qwEUAXcfsNup44aXjQUnubHdwQMWF4t2q19aYSZ3H4AibS5MaK5JzAzNYCLsY1tPEtXpnJ3WXXQ",
  "key22": "4pXZNjCLEh55chWkSn5jHRLVbCzY2RHtRaKtwoGpXJ2S43sAzpn6rgitHeqP45XectUfgQMAnEKW5zUsrxeKVr3X",
  "key23": "22cpz1CRuLRiVCqb9maL3BiNzoQzd2QA5ca5qxibXnEqyJv1aQuW7BVBT6HShdmbbJhYTvyoijsADfcntkjDmn7m",
  "key24": "66rZDYHcqZTw8g7yXwqcVD2eNjXQQuMZLbC9QEsGMsAZHXcVJ8fBdomsXU8awSXyDMvGRHNtWmp3NnpbvhoWUnKb",
  "key25": "3PNpmM72w4fhx5Fbh9hkHDfGkGGu4QRMQkmFcbSaxVKDNkEfvBnC7YrcEKhiz4AnSbZy5hhnZ4NpGDujvbc1Nezo",
  "key26": "3eZ3nSM8j6i7du4TQfkCupULJLKeqF1yqHs3p8wgVoLjq3gQHuELdRnafYttcqEqsNci7XiQ6ZiFzvvrteTwnvYy",
  "key27": "3J58VDdcBQnTNtuEb2gk8CBQzr9bby4JaNiESx7KUXpTfUHCoxYigjuJ731dYJmRBP69Qxhwt6it5GaE3ZM8nR3p",
  "key28": "3QurV2SkpU4ij3SPvegAR959SW5U1QBGuJiTudTbZ6w57JqoJ3Hck1XMMRPjEzMMjMdWa7JnF7Cgyc45ZQfC8q5E",
  "key29": "2eRH99YMd5YeYkCEm6G5mUw4CtPwAJREpGetQkBVRiNLTENqpqQxDrhCxYSsPoZ7Q34HYw3u4rsZBvAwVqDgYv8V",
  "key30": "3DfxCXV15SnfkEbj4WsqviZS3iCrpPF1s3kxGdMth89BpHpxCbobg5vyvUPL3e2nhiRRnauVpvREL64FwZUWfC9j",
  "key31": "LzosYEFJtW7quWK9cEuYj6ENGDftC2w3vwTeuqYZdoBVxu7YnJo31bQ53Z1N92BS8e7CdsHGWXjzFqGzaUGcjWK",
  "key32": "5fmh6q7mrAb261pJEiKaJVfJWtfb1BXa7RoLTsVu3bESaWTzm8SHEE5FSZJrMw8aaajG6Dd1Yn7W2odhKxDji6gB",
  "key33": "5qwnvPWMuJARnx1Do7L2LAVoVzFNCJzurufkVUJbzxV6RmUyRe2pehw1gdTGqv6ELZ5mb7wWEFaKfHpSoJcLnu1c",
  "key34": "3Kj2tFnmRY54oXBiyFCsDXGhriCMokZUbS9u4cUjoz9htbPPLqhsmqBefGG9uqgCXvz6fqzesgneuNZbRCBenfnp",
  "key35": "2vsBvwArwXFLcMdiyWBAt8nPqGxXTcVomMuYz2r7zchuHRBFrkvnSWiYKwfgXy8obahSExAFXpNfVXpDuRNx3Xs7",
  "key36": "4et5xr1zxpXQEQ92LpbMyysJTMGWXR24vE3raKPm9T7ir9WbfUZGXVP7PbSoALMrimMb3pM7iNGvKH6A5hR675u7",
  "key37": "2i1y1eRV5Lt9zBx2KcPnNKS13bV1SWw2ssuLgneJLZeC793THMdUmZNkbA9iNZwq6fCRrryLjT6BMi9sDEQnAT2V",
  "key38": "5zstrjJKUbo4KSubFEMRSUKRBonofrz8XvSSwXx5mSn8V1Z8P4HT3q4wu544ga6dfJZ5zP5kWNLufcB3FkxHSiDh",
  "key39": "LLrx5xmmNQ6MrsenxW2Hafb7Ci4RsoEwcUWd9qngdWAvfAXgJQagjrSyam4Fr9FAQSr6MZJzTUonVo96sm4SSBV",
  "key40": "4n6sau2vznJEHrPL9ZN5n1HxiynjWhQ9d15eYBYSAbj6udfnx9nXUy1jUafHAsM1qWb75BxSS2tjFAHnHviQHbQK",
  "key41": "5e9Yr1QQuriGDeUydr54PsnGKuqqgfV8tvmaFcrh7jcDZfZRsyNrVNwBbqpgUBRi36qQrYvdEKhvwEEBaYP4s8wW",
  "key42": "24QAkTNndcVw5nT4HVNkFuhqUFDouLgRpfak3L3W8JABgNvhM9rH3qyYzXHUVVFkLW8vuepmT2M1QyXJvxcaQcP8",
  "key43": "5tszXfFk9W6BX5qfz25tLrsbQfKWzQLCu7Dyc5H6Lz67ofsJWZiySQ4xX3kix2xczYMHre8VhfKmcA5edoZzdrbQ",
  "key44": "3LUr4MaMmwQZEAZqCLKLtq6jsvrhD5m4M3Mb7BoVbi4A144VVs2zd7Wk7opVcrmUA8BZKQo8mXZ54kfe3Q3GkZcb",
  "key45": "3mYv9bNn7hueiC3JqhTk87jbLEUPXW4LgYTQgRMQ45otsYg8N3PD17HjxrpM4768iuediFM9Fy6LrytJ6jGdTq45",
  "key46": "2rP6Y5kErhs7w1xE6tKRegcH9K7yxkkGNmPZ5oQUqW4CoLqe2vU321g7ToxKTGABeEUST7HG8x1CgRZ7teaX84HK",
  "key47": "2C7k9KYdJVVZ4FEtvGtT8xJc7egSpbGGLTzxNvWuKqjLEZK4vooYrm95zeCqaxknJtQqXGeHQ1mjAwnSUsYXzRWQ"
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
