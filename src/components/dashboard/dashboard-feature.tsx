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
    "4yqz4PrqqVtV8pyfsvbzkJfbDwG46QzhvLP6oqfzGGiEPNKtJFZZeT9Qh9P3Km75ykFWQQ6cZiphkgWvpjZvXxvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vc1zb29j4dvyehyfm5R1efdXgWch4XFZsFA6PMFvNZGXNTkbo1jhYFBToGYcd4JaTGwoErAwj9xypM6hQV8pJqq",
  "key1": "4pv6K3Yg3xmAtRLLDoyk4xurYQQtWDHSHdBMTsW8yhZ4CU5FHayjZDrGEpAoZYXPNt14bSgBj1kiGaT6G6aazApC",
  "key2": "2c8dkRp8G8Dtja8S4MxEU4YT2wMg1SmYw77MRTRQt1P68CbLdcgJKCxKBquDM32um42tEeLwjbEXpBTq41oh8qdC",
  "key3": "5z69kS1LHYF7EwZYqrXv3nc7FfpM4yrKKCGSCJJ9GkWKWLFjMWPUZUqj4EDob6c5iGAo9h6U76ZgmsUYQjbhAbWb",
  "key4": "r1N6L6s6qNxuFvY7xkxv4QsbmSVfSFysmg5nyrt5NMxHVNHM2az9MuRKdcbTrPaugeeGKioFooCipjFtKCcrfua",
  "key5": "2kA5msHd4eTKRNKDKqkX3WR3HPVpcu45KpMX792wy9K9X5AmqaxjCVzFRTYX6d6J6C1aHgdQL9nfWGrhwYyuH3Ff",
  "key6": "5pTNaMw77HfKCU88MpmYSEW9vGCgU3KJQKgUXh37PS76V3Hu5Mqvfbv1KaRoUvZVkEPf9LLcLohwi5sC758BoaYd",
  "key7": "2hfSLz8jsTnDsQec4rna2PYtkQoWXiY69BogtKzYLynsXagDLcTeDUBEn8V73tkMwxzLxy2zBWwMeUbSoEEfpSP5",
  "key8": "59ShFx9D1AAELCpsM1DBWnYxiZHXKSrUTQNQkziAPFMbiH4h6anSYDf2fVcPGp6BXD8DkMo6cAQCovYtoS1a54wA",
  "key9": "5jVHtPAtHLG29NRaAr145wcaGZ44195c81ZYs9mT89Rqvpdosjbv6fmguJxGpWpua3zvbnJjY8S3SX2zd6veggRx",
  "key10": "2VPDhXYX48rAR4MRTRhzn4saEMHddHSyWKkiBknHBSECGJDuP2KXH7KDsmrnE6XSsh7Qa1ttu9Ki7d9sGc9KK2vL",
  "key11": "4BG9Fqej7tU3WPxHp2brALHgMZ9Ju4gRjTa8dLoCvwDGq2o91DHDZvdqobhAh9gcDyAtmMNXXJPPdRq9F8GjfJ9g",
  "key12": "5gyugWqf45RJGP8yTHQaKdxaBM3vGwkvJTe6xhsWUaCJLm3i4kT7BNwZAu9QvqxxVQfuut9Xn3rDNijzSRnNxqfL",
  "key13": "GvNZJ8nJrYDjqeM12EWdcvHj5ftnr6MxCoHpbrQ6EY73yfFaCzaTQRAMe5tRGtHkThpApmpq5B56eDZT6DRq2yN",
  "key14": "5rWooqSa6KWnjVjYjKesJPH9HKS7SmUuAaWSsDcGmowQWVTj43hha76tDgxhiw1YWRfSu6dGMk8FZkbZPr3jNCMQ",
  "key15": "4SmYGWucydae5NYmuYcDCmkvocx4uo4qRZg6Vk9vNjx15MzjYPArjDxY6AKCqKswUznbhyEwS4xxhfpwjDTRY9ZG",
  "key16": "5u2RFDfTshYsRZHFViUbVjv9LgFrHJrqfiDNrJY6q5EZp9br4ztwUCot8PWZqPJwdBYjkD4ZiEiBkXeGm1GuUYB",
  "key17": "5uPbHAW7YvggQDW1mdAqPQ9biF5MGkVhwZMUfWuNfkGnCsvpTQmAQPu7Hky5kDgNkmy2ruEZhVupgHoLwSPr4mdy",
  "key18": "297FAN2mz59fgrYYe9JXPXg3vPKECA1UZAzD6LeZxo6Tn7x8eCSGTwso4EWgyCPZqgXoRtk3FdjVEjhu4KSoY37n",
  "key19": "2HLfLNJ3R5TPMMYu8eQ25jPTBq5i6daLJ4mRvzAaKyKiQriU1EuJ8mBx6VyWhLVPyHcfwy5tojtUgBqs1nUfYJTE",
  "key20": "2okZj62wayBDY3NvrprmF8hTKZsZrV8KqFC6D5MtVy49WmEeVQRaiBk57truEkTGpLVR9HYrZUdEdZEoPqJzHjjw",
  "key21": "5FCS3LUNzJ6RHJfw7brz8NA9ML4f9JytpZxTZK1VCYGVE2R4sUfXD9W5JWzu8DjAhrMm7D1jUuiQaZbq4D1rXNzU",
  "key22": "5wce2QxVWBZDGixyts4RvXiUHuSMVZj3PhSZBU1WsBpFEv4v8DdEpn8YJrPrKXEDepnsmvDqM8upH1VaWb5bJ5aF",
  "key23": "3XzjJNQdam8ZNh7QA5wXoBXjCxwULT8KbYqbnD3UMQy83xxXsTRTyk5CpumGzuDtqUz7YaWrTqRxDfbDhF6c2bCh",
  "key24": "fm4yEfKjg3SqsoxM6szN2LhqvtzKvgNZBkivYhzVoGmYXqMnA5b7aXe3QwviM6CJg28FyvY4xHMn23gQWcToscw",
  "key25": "3X5yiescnBdYRtddgE4G9E5gL3gxtPdiEiUEQ8SLb1ty4jwp8YEMabcdDzemmfWQNHVxbuJ3ib2VeHnueK3JxPhY",
  "key26": "3j5NMwwqzAkGeCKzdhzkbzWH337hFbYgmAcEWxHz4vbM5jz5CgDz9nqq4JthhVwYqqcfmxriPoyVihxp48aa3n4V",
  "key27": "5WM1ktNdVLqQnUZjQexAjgd8pHFt9oCX4n8aPojaWQABuo31Ca9YsjpVC7WCheSYc4cYeFTatUd1A4FBs2fHRFoi",
  "key28": "LUbgb3RkPPd16q9NTYhRvzer9veZtUseWw3XRpghSEsNZ5dUhgp7FBEbvcs5pjQWjpL96vLbhv1hswkrQZY9osv",
  "key29": "5su6wi7AhbqAQus1hkhV8fi2Bs4GDnrcTJfZ4ejQW41b2pz326Q5wspEcfbKNf5xUbPn9kg45ZpWNb9kqBQZdxSm",
  "key30": "2RxKN5jHs1fbU9VGenRgSeA7xzVkFTJ8eZkmaGf2XPVR4BAfDfk9mVo1LfqkYzjkdht6dxzcsnYCScUPjvqpRe4a",
  "key31": "cZexeBRCcK6yqto8zfC61QAUzduFtTrVFsKVnYqQPXHZ7Lik8N1sHMgo57v5jgMp3xFxgxENH11nZUMQbTiE6wE",
  "key32": "2CARUiPYad3sgvgSehgfFJKaL3BmNwiAh3xuwWZjNvsZSS5iPEKGQ8DpkGpXf8MqHKEvPLvvAAFkSD9RijX7jJx5",
  "key33": "4SS4cMHSrAdyBpEqQkmYmbRjAXqwhaEWn9rMgkMCyBoZLMip6NmNgXZx46CaHagcTgX6uBxxX8JrLgtMbrG4XALG",
  "key34": "2kMZ56egehsVD8FiXiSMPoNxwSy3hdhEfDvKKWo5kEkCHjEbsESW8QdLdjYBH48KmG4YoCRFRQRaHv3qSp6nj4Nw",
  "key35": "5gXD7hvnuvqpcySpM8RKejGP44ZP1kpsniE6Pu1yYogPKXC4uC3t1TWfB7vXtkrzSJQj2Zqqd9aQY6TZZ5K9XFmi",
  "key36": "3aywzw6oFEauZr11MkKz52BrtvGfNSRvp2MFduuhRDwCXyXmYEE4EypPNbW9suyP1Y81vBsUpw9A5Ujk28Cvic4r"
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
