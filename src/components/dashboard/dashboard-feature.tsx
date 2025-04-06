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
    "4eUvcL6TFTLj5SbUGqbG9cM7yc8Kre9iUHPbgkPCKtveJh6oiTsfmWyLYD7H7ht49e3Rxuf1nARLEsGc38Yy7jNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QRfPkrd6q3bhZ1P8nmwxoT7tfboKhN5TaNAvECfLxCzViRGFjbVc2Ut4t2R8eLufTfEPnZ8zJjZTwiaXcRbw7oc",
  "key1": "zGnuTZueLfXJZjzoXjaF8SipS462xku2D2g2ifmLNT82BmoiJWj9DoV4b3nzEqPLFu47CZv65hiHrESYxMVAtTg",
  "key2": "4PnXv6ncWVnXc7tdeNsT5mtKupC43kKmyYi4RomF6iGDcTcjWBXn6LQAJQJp3CWUeZRHMUVvMAprBTirK22sbGd8",
  "key3": "3DD7723Urwxfa5jZWrtgNX9SJ3SMJJzd49BseoCA2VzCzZbTmeHcbUCy8RXsM55hWJzG6Z8SKVEKeCYu5CZDvS73",
  "key4": "5XYnfvZ8v3xQcHy59Ez4seLNbrS3hwhDfU82Tu5BQnHMDaEaSkrTkSJLJznYT98AbLBBsExiHhrw818dhiiQBx1B",
  "key5": "4j9f282gUxMyTV2EhH8dy2G6Cu9SW4omXavZgBM2CWY3p6pHjmrzSDGV7nxFkN261ESzSxWNvF95aEpZcifBnBSA",
  "key6": "3jXHiBb7N9c32Yvr9FiyrJtUocmyioydoHNr8rNBA9QNn5U1FYyc6cyDizqPbbunxwFuKXpgBeJU6mbgspXh9URv",
  "key7": "KnJ6Qngw3zGRV5szqiQR7qzjBKCF4HXPGiaTQRVFxdcQ33RPscEC5RtUobi2UTFpTn8vr5NiRyPvRyDD9mfwyqu",
  "key8": "3BJzHYKhoqZh2L9ZSNUb8VFBvKDJRgDYwauLznGz8kwhLn6Msna2HcGAMkfynYEzsCQ4GFtggVmmVhw3nxodRkx7",
  "key9": "3XskocDbxQAvxNUdWSiabb7xtTnJ5kZN4pfvbpGEBxoz5ttgNJc6UYyKJcZtUin2DenqqXWfVGUHXkQYwNk4zWnp",
  "key10": "QGKpLWLwhkdc32jaP51y3qrAhjHRLdLDECeGzZZoWWie3Z9nktQNFFEmDn6bof3SA7mWkeZncww2X2XX5zJ5PL6",
  "key11": "2GAU5vUHuLMnZ92ZqFgDhoEsUDPTXni9o6bmx5i7qnDWYEFwTodU57wd8KAzF7UieCFpM8qHyd7Z4E4r5LUyYFeF",
  "key12": "5tNkK9w8RxEB8bQa9QZxvuszb93QTFkUCA5Md3kNkwo8B5iSPwGVRaLazJAFTkPSLgYRo2VQX9UGq4LPgmJeijnG",
  "key13": "29PYyVTKini3hRyEjJ33QAyion9G9bNeY19qetUfAU9RsCcJYwSVgecdaeMWsu8QcH6BNHcke59c8Qt7sfytizgv",
  "key14": "3etLwfWzwGVXNhbzHmD8twt7o55NEwaes76FSve18VP9USxwCqXiBoQgHGfq4sqkZw8CS6ZV1urpWfeQkq9QVwRW",
  "key15": "8RHLsRzYmg4yrKF9DgoQd1BM4pfrnWfCfSGqwyG18ZPHfiHTtrm6cwu62NGUxsA12f7USkiQjoz2PhiQtKooffQ",
  "key16": "2RyoZToEDYbkk93FYWf4Q1YqBwiFXyFczdGjjs7pjeLesggXoQVVTUGn9oLWBDHwzwqJ9zcFQiLVyqfC96TpaTvN",
  "key17": "3sP1pY4UHZ6WpVWyDVUAVk9L93ipK7t8HMC1wtbR6Nw3P4hG3isxughDL3ftmRUApgvpamDWu3RKgy2b8o42NNsw",
  "key18": "4DNqthe1iECncpfLUMmpaWKVywNXm9fZCQLZVrqKGoQ9VCoVRQKWdeDS3E34D3qzDoC8WXWVjXe7LHPSsgdZLSjp",
  "key19": "3fdPDd8L7qdktvkMJ17ayEkYD7d7HDFYCkMb9J4w5UfWewhBikqLoiSTL2QZ2qpuYxuCSUvP9DMfgwDLDHCEQbUm",
  "key20": "22akD11WeTEKbfWxQxDpmn7o3TV3NwfJeHoeorujqVEkL1gdw69bZswe5dRgqBPcrWhYyDKThJSgUkw6kZCZYLk3",
  "key21": "48nRLcxfaEB1jR5rXnuGDP5eQ8LgiwRCo71yCCEPQZaS4eQHJW2xAy2tchjecr6u7VHLwUhMDUa1J2qbt6pi5yTN",
  "key22": "2R5NyEvzRPLidxj43wBKP8NQTnGQEZ9YM2XujkPH3Y6jJSNoVRBbaWhYRSH8dtYmZriR1LvPWgcAq1spyXAeDokh",
  "key23": "5zsjbMee5fXxwYkTb2UJj5coPffWYvm6o9ow8Skud9A5brV6junqR4VQ3kVBH2u8Qy1RLGyyRPodUpaEUKm4hHKA",
  "key24": "33pqrNNH76Dw4FL2Vp3KFqwGDM1BGtignjDAaXQpQiDeHntiaop1y66XBP9cWgoFJnuDUwVwt5xEys3v8vENq8zt",
  "key25": "5ktY7nx16Y9PBtFem3CMkZ1e4ZxosMa3pkpNmeRrkH4wYj3Hqkw3TYrwMk81QPi3Tm21horputjuuCus1SGkqYRR",
  "key26": "5qcWkEvz2vPZ8bNaCAno5P2iRLyVdu7zRQjGaVE6SvxaFmfkjCXcbmzHjiQGCc7WFCEWxkYcgw1F1rKc8wSjwPFQ",
  "key27": "3uKwDVC72y4PmUKkw1TFYbw1bUmtpFPY2V9yv5EW31NKud8BVqSmVfcr8rbUjYrBKgx8j8uQAsan3DDAmiTkwLgR",
  "key28": "44bfKq2CsciKshAdWBkjY12EkfhAfjCavzekbynSzaRsHwuVJjVdbyrdhXSAK2R9BZwRL5UNw49tfgSH1qsG96eq",
  "key29": "3pLtddCYpakq2CLNzVF4EneoaVoGaDHHGRyd19zCtA6gy6StVYdMQ19bag21MBJ4rcQJQLTmJSwHs1z9iyM4Btef",
  "key30": "5uT6Cvi9B3WuB6kJdPwLebWiytWguv49mFeRGdohFpMz4gcxJPHRRAC9yK2BE2egcPx9JfJuKttoVAmTrwSSEWEa",
  "key31": "3pJwAb2x6QpqtTvRGFGUQMfmJRhmAJDpgdBgAuUQYUbbWXvsmZjy5XMZXoHxBXpJasevAWqH9d8kcS3Cb6xK2iTu"
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
