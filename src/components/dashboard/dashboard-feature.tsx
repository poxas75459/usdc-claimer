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
    "5kXmCDUB2BTKU9C2kMHi5uWwRKcmksiVmtQuuzttEXAUcwVuamBW4pfQFirxv3dgGSJSKLeHwSd7X4dR42MzYfwD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49ec7vHUJbFPZA5qsz2WExWX9rWCkwskYu2YMrLdjrrhCoDZh6JpHMSmY4dyL8jstSkRJrp23LbY5ZHRZeS1uCQu",
  "key1": "5zrbQ8gUxhK6cou5rJjt3U9jvQCD62RrLDbcU9wTAM22B3nzCUTfBVXjdRW79uMhRk8GVtFHXaCejfsha3Z6eWc4",
  "key2": "oDttvRh7gxrL4zCoENv1mggwsT8nYMMTJR25hT5Yf6rSUW1DFVn3oqHRnNd7U5JxHFj7vkRGc8Lbi3EodEreYR2",
  "key3": "3PJKiG2hpJMaQFY5Lk38cgNU3xFqZWXsxMAnWzFZqNd5oXvEgJb6xzrAfMEfUJg5xvTyeS94THB7dRz2jPvEc5HV",
  "key4": "37CopwDQje6ZwFMyMYJvB4xeXggsQJB78udRHyJL7pR9vN1rTjb2bD92EaEefws1NXmYfr9xypk9Wd4E7aJeQUEg",
  "key5": "44A8PryivV4kaez5pmdV4ynBuEZyiSZW4LxTZPzer33LmA9XmbuH1jqFpoj69KkgDzMLeWDc3NqQtv6CjGtfdyGM",
  "key6": "27AN6x3nT4Us5TosQrXWnNTbRDgqz6MWzeunAMK34rMSKURpt3xFoxhKTjMLExcZAHTyR6cp98aGj9pswDiGV9W9",
  "key7": "a18eMHVF5qruHNwKiYxdqPjzr6SYBcJyMNuGNKGNB72BYR9S4rBxaBi6D7zgG4wKgJp6N8pYUuQj94nKiuVJixU",
  "key8": "3ycMeLZqV7jutVf7mpb4LFVTeLvRKpTYduLec7oHzpj7iW5unZE3EVaSCLnLjUAudgFMha9Dmme3b985tbRwwbHe",
  "key9": "5NNBeczP6RynRVfNXkfky5bAiUWY4AovLpBVk9muA8MjUE9xeVYJBANdYo7a8M7SMM7J3gnKXUSWoaeYBAq4vXP7",
  "key10": "3PgfkPteBPYCNKy3kfJ3GqWtCF54AKy6b8htnmDL87AHqBKz6n3vet1DPnUptHjWAEHKF8Ua16tysjtjZFbhyJq9",
  "key11": "4c1XRBF2vkLRYjNkKZkFv9w2WmewwuSq4NM99C38cJVAG46MgNaXLAeiKwPe6LNaF5iZE5ddLbMniHguzSxSseAi",
  "key12": "4CeSjrPsWTNGkkrLxX5z83sSyYXPzA2MN3vaacpaxpxcPxQejjXEZufaUkPa3RQ26pXRijctG2f99xikiCUzMJmo",
  "key13": "4biw4EFJqYiSLew98Facb9Eevs8o4XHGvoSwGuBuVQGh5T3aiVKx1n2ggojc1Kdg81igzABPrFhEN7K4QRkL3KcG",
  "key14": "38M38t9QD4Vds5AjzJZCZb3oSQW1PRn8wAg8QEjk45oqdQTRp2h2ZTKPew6bAghg2AvtjjY7dSCcKgXT8miB89KH",
  "key15": "5gsqUAnbVZLVt7vR967KSHtkKWRT5RNu8t8GVmC47FC5Z4QMxPgfjsKyLZxN2c3AUbb5xgWukTbhpgeL9S2iuBWM",
  "key16": "2oPeBV52bKydRi9DvrtxBavGbZx6rutHGCvhpcepSrkn3yXTE4Drgb15PQkqf5JYRHEU4jxeBi254HLQ198DvNXV",
  "key17": "4ZUny1ua2CwcZG9JBa3C6txt6FS75p8niWntxwxz8ug3QFWPuXhbkXRfzs7KFDWYcT15mG3z6d9uNm9kMecjtxBh",
  "key18": "5EWfsuTN8qppfU83VEx2u6QJFtjEAwJYwHoxyaNLTivqEPGtqFXkpXXt3T3NP1fsCiV2FxEfAhvnD1W7YvKyRBRD",
  "key19": "2UrcDnR4JGpc2C1VJNhNBS7CRwqgmxCJAi4RV1qoJFv5BB6DJ796Qukdm75duBgDPMkd2iZC8LJgXF3rRy2nR56N",
  "key20": "3sH3HrUdKQwMWhUYTSa1iTcCdzJuWcoidJNHsQKtZGfJ7w8GkDyJ1bPihx6MbqP12yiQGfpVW4yWfXQu7VXhb8CQ",
  "key21": "3FqXR1RZpUPTqaDpUWUGFpgCgWSNV2ygRVSf8hb13BWuuJ7ofnX3xx3REkcLEvVDHu34hJfJNS1osni3m7qRochF",
  "key22": "3vHCrwjG4ZTwkZN3EtEgxebXyKLzg5XiRaa98ZbMnUgxbFLBw4M921tU64DbX4aFzdDQ4kjzt7hkGXmh9eTgXSHb",
  "key23": "3qxCf8BssUp8KY89Yrjaow18fpfnS4MYijLic7zcRjZbikfdweHLzu27J2FpU9goHbc8EtVosghvTneXchXHaZnw",
  "key24": "2hmyXo3o99gaEEP4bvzYY5XgPExZqeFWncoG1c35XWLyKbt35xCYYFBhFc5cdta1NH7RmCjtRQUiDgGghix2gqmM",
  "key25": "64o7FxujGCgt4M19J9pFsgdf6nHtp6JUrtWnbaVATrNe9KqW3F8Wp9Bdi7Lcfi4JSYJAKu3BD5GgTyJaCgwRR5GJ",
  "key26": "3paoDZTCh9pmWU9zhVRyGe9RyLL9L85m453NRzDMdn4fMbB6qnKAqRd5HL9NDAHU5ctV1LbSCvinMgvmKiQVmE4T",
  "key27": "5pzbM4XWo6QQ8Qz8R8XcbtuKjwFjrxLve8KAiyN9vfffXu2ToTzEoq3rZnSuLXe1iEGrtaysADg2UiUhyGKMuAHk",
  "key28": "xDf6m7GXVahpTj5665qBZBhvC8zkhTWZ7dV2xFEcnNq3VhG2KPQba9MXmVrx8TLAPC8iZpbs2VSK9TzsWjmWUgG",
  "key29": "2u1i1xzPPEEpRtzUDCeBwxfeppeHT36gwvuVxji9pryjwRYU1ujecLAqXQPzDXqSanWE8G5BJ8PhYsV3cuar29f4",
  "key30": "4DbYxRv8Ns7WLUUqQEdAB2mA9EyiRog3FFQWCdRF6ZayGJn5Svgp3xpbPQ8ZKZYnwYANHqUvn5qFUEqhczQSEYvC",
  "key31": "5Pbb82Sy1nawD325N9zv9cBXrxEWPyyCGnmZvToPcK9koGM76qEHfsnZV4nunt5R6EkPTniCa2UhgES2jdE9JL9o",
  "key32": "G7mE6cR7qXLVLLrU7LhfM2eLyUyedsTfXybXdXWkGuiSo5UMpdMqAZzvgtogvtqDwD6Fna7Rf43DuTtg2f2nSkU",
  "key33": "5G2cYPSsgC9ggvKoRaLjMpgBgkHt5XL6Srvd3JBgr2PxUHAWm8hUPvaURFp1yfdEeSat2NPZLx6sLwrAG3zoa7zh",
  "key34": "4wh8ao1v415H5zcEet7wA3sDaDfxpiPBfLp7vN1SE2keLEjxkCHWvdAtbzBuM639MVVJ44rQHjhREk8Nvy5Dcjpw",
  "key35": "4QJSU1ciJMDhqCSFCKS8SS5B4HKxBZ4xg4mdAjnfCDcnnL5tuPuBUCS777QddzKuHveVVmegQXg97jdsn1jE9zFy",
  "key36": "3MaJ6ftymmkmk9rSgxdYCYM4m9hYagLqASv4hQZEsYD6i7WEiYt4KcWgACd8ii44H7hPLwyywUuJr5ALt41W9gE5",
  "key37": "3uN5vLVDbYTPG1JbkcZCn2eEpC4TLCZcMgAaAT1XTwadMpfFp1p66r8ffJZqQKnqJmP1rbRE1pNWzx84KWFrZVoS",
  "key38": "41ggAVE4RuhZC5ckmPCQGWRxNh3k1RUJcRARa3XMRGF3B4ptf9rhDtTq7BpqrFVRuptGEnbZFWxGg1qkp1wTCQML"
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
