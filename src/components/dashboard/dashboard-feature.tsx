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
    "3HqTtnZRuKryZfcngDBzamJArphWQjjZ5SbAsWw5z1QoenKoDE9uo7436upPSkP1s8JcKLNBCqyu5W5g1xmcaFmG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oyGiu3JBrpnimN4EZrfseL1jxnUycaWfwhrkVN8sMHd8oGHLmRCo8RzjBSRJpz9MbSUqMhKDGjG7vPZ3xXsnc93",
  "key1": "5v3foAWba5tRwTfgx93cAdADMRJ61ySrN7AACf4f1f4UEuAZBWzLKsBhMtwW8deyFmweSmF8gKYTcggTnWbnrTGU",
  "key2": "3Cy9FSByovpWBz3d18WX2SSooRY8BrXw6KDmxkraMmgQZHwP4oiQzXsmAn1osVjyt5mCNJZwCo27U2mWvErotWAX",
  "key3": "xnugx4YX38vwkRP5thDn9rRJyPHHcAX71HuaAnmHCwRWTfKyU9PCqnucB7JRfug5jQnxb8D5qTwoa9yCUCqT78X",
  "key4": "YAev2ANj4baLtisb2CKwVNg7aGUNzhhhwp7RQo7HRM1Qs8xTtunbMh9Mw6oSYVtVvvvxX3A9KTVLivfkQcUxnD4",
  "key5": "4cn6pQfQ4JxUxSyomnK6JaC5YMWKSwMQGQHYAE9z25ppX2Yx6U8GbZo7mkmuiAjFm8UDfvKsZ7Xjm2PKY66JX8BY",
  "key6": "2fTSEoC5N5THycPEtNZK7eniWoWxNf1uT9Zf8YchT8fsCWLVfBDxkZ9ZvyGUV8ZYANNx82VZaifemruKKcDo9nY6",
  "key7": "Yd7HpdhiTN4BdJ2DdBpGD9iKehr4sGqEcBmMGkLt7SpTLtJGMC5gYg8ZiP5nVVfaeLQ4627Dk9vRwEQAyctJo5d",
  "key8": "XRZwFtuUNjkUyLRj1cuvL5Fqm1fkAvRYySdpBAyyuBhbzStMwZ4H2p9eTxcEKQuSWGG1Pq8KwVpdJWnuA84EMuA",
  "key9": "5Byyy2fo6Aojgrd3QMpeGwyYPL3yJCXK9N9CuL8YsU6rHpxSeNPU8X7Pk7UcydJwpqxXwgLQGWeQVAu55UcvvkUL",
  "key10": "opmx3d8bkezDgTG3kUKhvv2D8jTqa6Z93nwT9ZonxgWdMENbcDwaw9QQkDdWbxHPLR7aX6UUSDYRQ4HXH3Z5ePY",
  "key11": "3LqbWf6hNQKpoteSaNJYocjX839QU6uSyehu9nbaMnn2ZKfSfH4XjThQE3yNpkZTQQViSgnsEXv91rVVHfZM4iyz",
  "key12": "28Ls7ELvkuLPZCGyjm641oVaGsQPgryTzrDWG4roppXjMspCDHkMSqwEorFeu237XB74q74UZ823E3UDYfayjVcE",
  "key13": "4gaGSsNrctyh5zRr3jhGjVwTUK9KthbsNgQgv6wmvs417n479YrL7iWTgRUfRBSwT7QqyFYa9zsUZahHEUf4F7b7",
  "key14": "4mVt5UQQCcnSny7v6R5dCBa8Cw1edypvd1MieQa68DzAie5aqYApj7TdyUvwaw5YGd6nbzr44zUShLQT1Pq73q5y",
  "key15": "dJEgaoQR7iHPfohGdCJeNSe3VakLnNvvf7JdFs6PgySZdcrJwNJbppkmZA16b7tTp1jXmnBScJ5vntiMgDGzjiy",
  "key16": "Zu8MLqGUXBuGoM7D5rPCC5r8GZWrL4k16QCQEPXxue3zLqHspuPzLNY3uTsWijwQ7JhVSWsqZD2AJG6PS3j5qs5",
  "key17": "2pp4rQF3GrffbzxuVatNw7AoUdZEhjqgRthgqrLpxKcPBMjBs6ADw6DR5sooainExLRfPEswN6hbr7pYPjnJSTLc",
  "key18": "3UksJTdho7GhMbghZuS7iUZDK2gJDgSm2AvexLNTPEBMmbaaxWENHtmSGD2kZFBqy2gJZZMk1A9sxPD65yJWC2zS",
  "key19": "351qJ3nbfnoK2M6LGYHg6nUdVYvPzth7iJAjBoCX71qt1bYELjDyVAmZuvLUgQedpe7q5yecx5j92GGqxDDpnCEG",
  "key20": "3U3gUP8ouJduvMcDtZQuZFtrefXqRChg1TonCoTHzk1qR1vyAgzAtJWxh9P5N1vJt8isGpjKhS8Ke9eZTh3jskQv",
  "key21": "u3oERu65kMmzNrirzDVwcjX81k85wDmxJxHBYNwXYGq2R5i9FEHCBkybiKqAv8bFr7eMqm6TQBDmmYMCmbA2EUq",
  "key22": "zopQcpMB6Tw9TxUB1pShKr4afpkBJGpha6kvcp59d3EELhRBAfxgRWJUrEnyKQc2CodNt9YhSkYafZDnZrGDkK6",
  "key23": "2YbfEGggtSX28RfQCNQZheDC4Ne8eNoNJNG5Ltt562CqKXRuyYGb73AaNj1FLAefcENNMfLBCmkxVte6biCvmnUX",
  "key24": "f6PitXmRZkCWWtr7ngPiNtWyCugconoNMgCLJiExy1ckig6qyC7hdnPZ7MUp2yPuvYRDnbv78DpvyhTcX1FYFJo",
  "key25": "3zyNXgE3fRTXWRVzAF1AJbsKvhQKfUG64ioP1git34o6PvLTNxZXuk4ADbkQ2qcWcJfvETfEfsyDhLWtpxCign55",
  "key26": "3oRawrV7n9WwvUbJGpJSm9uugRRu7TYF7JiHfSkqWj9uHMbXQQBteuU4tbHosdRsj63bVMg57TQhwLoB62ywDXn8",
  "key27": "4J9MyDhhHLfNS86bH6yjjGHmPRyf7repCt9kgATprP4rR5dKmmdNZBfegWyu8YNsjpj6d1t89qKxmqyfyd8FAZ4q",
  "key28": "23ehpJrSdnSCP7krufhFWt97aUAkeQA3TBxjkZHLhRfPkE5yfPRETf7GNzWrfWPoBXRZiNaAnhDodGMWYDEKjYAF",
  "key29": "5XBdq8wWhLdH5osz2MX9y5FNNdAP8cLgrf4kb6LeVnhfnzsEeTeWiVSh6TQ3Cvgv9ifGw8f1T5KGNySYPaE7Gjwn",
  "key30": "3bGmu54yUrrr4eXSaBfPyLiZWMZ4rXFHdtWWSpZDWY1UESYaY6rkxVWtQvmHBehzu7YfYyT2B64STLLRxxxpVXQS",
  "key31": "5DCrMdNhrqfe8XEDEdx5TZgQazCTVuiUzVLhkqK8TLg38xSuRR5Ym1xQsysB6AaxQEGSHkFUJPy1AfBQmVU8T2R7",
  "key32": "51DBNRVj87tawti5LkTCqTRrULiMaco1Zs2UU6cXEQvVyGM9fzAdc3r7Y4ALgmqBWhy9w4e9A4ZzGs8sH8Zatcjw",
  "key33": "476XeVP95W969Z1MrJufpoamVsQP5SmdNyuQAJ9CGDDvTCRESwwwWcGVRhRxwaeWEVhbMiMhA4RsegtopXC7GZPQ",
  "key34": "5LWmfbHtqz8dFc9os2aQoNw9Yx4jN5YfDhsNi6M9BqBar1eqjMycvS5MaDTEDW8cwCHa3u3WqkeZhPKZfAxPDoz4",
  "key35": "aTaanU8UPMtvLdqdFaJGZGM64bMY4WXkfmrL8VQUuiB655HNX3s8XpMu7j4Tif6UHMnbeKc8zxM9SrJjZLHYKy9",
  "key36": "3c9XzvDbczYctodYA9bhBWucdkXbUXMMam7995o7JM2coMco7oaCgf8Gdj4HpmFM9dzMhroVVdrgDfjQaMRpPvJX",
  "key37": "7G1nByTHib16J2xcnaAR9SXKox1tVN4cfqeYPY2FDmpq9j8X9cbVfwWWAywyvuzJ4cysVNGJKTWAKuiLE9QWjUX",
  "key38": "5PP7QM3k9ZSKDzyYFw6nN7ywScYZiZ81RFSYZXaxdDDe3JcjqHDzihNQ1hZpYxe5VKqo2R1xeaBdrNTxMdoCvQe4",
  "key39": "5qrnrTLhRN1Ht8zdfhSU6CtJkMB3T2E6k1kchtmbDM1Zyo4gNQv2XBEYuVsu7GBdiy6YHA5P4cVkY7vwhFL6nkhk",
  "key40": "39ozq75ByiozXYBaF1wPduxoeke6b1sxoikLme5FFPfSpa523T8TrFZmbhHoVAF1ZeKvSC7P8q2pNU8enoTD7fWD"
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
