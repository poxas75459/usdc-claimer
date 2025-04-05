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
    "5FE4GFmqSmJht1G8m9ELhyyuZwyD1iQh7ZQhbgjAKfjbrhLnRsezjE97BuFnvHmtCJiXiSHw3uSF47K4kDcYuK3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aMG8iCEQoKQrky32UV5tFrUFZ4T7pQuWQptoC7ST4oVn52nB9TJB22WuWfuRXj3y61hiJmTiP6ahLHAhFWQuA6p",
  "key1": "DjREg9JE2mY4vHRRztSwsJf2LCSFhs8jr7R7uwDSvWHCtSDTomLcqzno2RXUPM3EVBdVT96VnWprKypf7vGmJyH",
  "key2": "5Zc1PB3xUEW575Wnyn3aEJ4FxWskP9KQg4pvUFLzw4udZ6uQgdEWyVuJhMcVbycjHgZjggvBDJkkiTL827V91bni",
  "key3": "5VH2bqtAhBvey5kQVWe3r1ZoNcuVRifBTR9JZbHsvGQVLREwRtbUGhy7Czppz3BQ5QfWJpbnahwYibPazgsBbjww",
  "key4": "34KsDuKrjfHUqq4NnNt2QQquQMc5hYtNB36TDfgDtNsJcyAsp2uMeA3bdbawFJKgLeqgPAhWqa2UvmS2ZV38umfZ",
  "key5": "4UGFg1SjdVtGZMKXFrHDhTXx3TzydgNN3mSZAC6Win23UeKqtjgPBbXJsHGRgRQ1iGMRhrkaCM4LrNDfKzfwHMj",
  "key6": "4RSS8PchaRvCLdATKEbM2D7jpzdt5MZAaxzCxryaAUssQUiH2ZqSUKoawWjzVerfDVsE4SCK9UiX2qDyhHsFqZiH",
  "key7": "564BfNYqppj2reNpn8b1svn868dMPStJ7o4ChobktyHb1VbXiABmZ5A5gD3izmPUpmc41WdPp4SmqCJomLsoQe6r",
  "key8": "2DcAFYHqLWH4T7weGMQeNqTkfAyAdXHGyji8cYDvfrMmckeoGhvUD9SkoK7Fr2ch8ygt9ACPMyYSSpen7xjmd2wU",
  "key9": "fb72RKMSgBsdXij2uFgZGgCswbqtfGLMTLEM7rYmBmDthPoDPGKbVvz6QzEyuUY9b1BJa6o2PLG1f45ewBH3BXR",
  "key10": "2uQyEFvmxbYy7V2JijE4XfEp3Fa84vPZ8Aj81d8DGSajCTC1YoSTf3Dpta4xxcTiP7TS9drSdFXgzJDEDk3ee6KR",
  "key11": "21xSk3EAGwuyfs6WyUvpecgBYQbGkZpAb2WQ6tgEpiTEUXYf1JxsCnSCn8VW3ifbaRMzNh5CGqHVws4ZmRYDD45z",
  "key12": "2WsWDib588vmZffxiRBE2D7ceLH9hgdNVJAEw4Mp4u8f4PAbkjL6avNK1czP69o166bowft6L1ycDjirDpyMuVfW",
  "key13": "44Bf4bFv2W9uvPBzbpnhxQ6u9jCsGMDtYppGsSo7mZTq1eBrRo6wan2fowvLqSv3e5VWHmNRjvmPNd5eZVsFLBQ2",
  "key14": "4oa9VRpjvVQFXTFwkgpxebpzQvGgeXgEogG1deKr9Wpd43isfuoN5wwUpRtuS1WpYjBW6NWECMo7vPM8pD3Jj2RN",
  "key15": "393CpUjj39KSieR1shM9iJzf6BwWNKhjRmbMggFRi1fQzvyKDn7tPjGF4PdH9cH7GxWJUVFDyFiT2XpLFGdQWwQF",
  "key16": "395fJL4LbKTfJAnkAnYjEhgUYpVibcte7vypUSpQSGhYEaCgMRL9KT1gkjsq7dqmwBos9aQNLXk1bFqU1eiFFNJW",
  "key17": "5tHFkGCVcLREHY8MsLRtUDJFXWMd6gKhaCd82o96Txie9LqbsmTSs5uzs4xCr7QkJ7iJ9HQc52CSHHN8da2mWr54",
  "key18": "3Bu7uttALrxmDhtXzQMnjM9DEMAKmaGgGAbCo8NmNkCXramPEmVAwMGFPbeuJWwz5oQnsBh8Ax3mP8HtT5KMsKjM",
  "key19": "2FQWSwMtupAc8ib1Ez4rFpG4TiKT3PAkAXRSHWoN9ziedLaS1kv8cawEuewLUUY8kqWsYHMsiK7LQVDZHmuFsoRM",
  "key20": "3hGPLGPVmBMuNYpgrRb7HLccxTCa4p2WJYL6JdSU1HADQYU8TYnaeJZd1qg5qhEDppu27jWdpZs3YdkRqWxoD7mR",
  "key21": "2Ls61aJL97AiodDWhRF6941cADEb1CeBFktSeRJYwdxtCYG3UFN4gnx32kmYuTJDzLksWYjspQZbcezbfJ4K7Z4q",
  "key22": "qA16HiKG8t98JQywqVkLagVvXUWb8x3iQWX6KfQGPChSCCDJurkreCqF6EUCgy2xbvCzjQHRD4cK6nyW94VkajC",
  "key23": "4Jbq9dRsfQEFiCW5J1gyNwE2NLEt9Gio2adF5YWrah6h9WPJ2mo3WmCqBuUGCxj9po7pvHU3N85jpBzPMeYfM9Ho",
  "key24": "Ct7bbYXXsXPeY8EHi4ex22gbta2DwC3Jo5dxdCqfbwN2eqYhuT4io7pNNoGULdXjBPbhJs26JUjbjSUYy91sP7N",
  "key25": "42nxxANNYQhvq6sqvBqyBCxUgT23FFy5om46cUm2FKa69RHGaoencNQZYTbL57p4TMDp95b1C4mwGFXked36Btqt",
  "key26": "3woXpoAKo7D6nRkD1iXzXdohzvDxyt4YbEVzZMUB6VjnANgzXgkUhpuabH2ASs3rXsaS4aE7oQBg2hwWF4sZWPbu",
  "key27": "3SXGPZFfqoecX5CaFgVvmQpUWL8HwwFRZHu2wXBjgJAgJfrkTvmJftSqx4heaV7dpWoTsFaTw28JQk5TJidRh21i",
  "key28": "5znThFJBVk24snA99mMovkmEPcZ26FeWSWjByP7MEA9cZcEMKgnhGzJLhSuUVbeJjrK2udo8M4EC6Soeo9ipKdJG",
  "key29": "29fD5Y94qsN6RMYVjkNrx6QxnRF5X7gdiyTy3aT9ZkGGRAAkk7gqaYa4tGYU6njt6Ut1f3daDAssgTA6WEX1UjaC",
  "key30": "3ndA2gayzjod1VZzXnCc3JSXRYHLh2k1q92687FxTvNxhxh3N2tVCs6LMgcs5JpJyQxkoEjTXUVJkF4nim2y6M2a",
  "key31": "337o81sA3VGG9cXaHDWmYVsyHwcDZxmmtkeBunHyUvzKM6CEAN9B3YZAz4RbaQDeFM3465RQFXHVsYZUaDguGG5G",
  "key32": "5QW2xwRJ9yRdf2PisizqT9amfZMp7H4Y2Xop8Ye5SXF1E6q9tZZFFK9AmPDDK2sZj9E4nrcE5XjYbcyZsWL4Nt3R",
  "key33": "2mAYA5SVuJqayFriuMDZWnhLtseiACUeKF6ZpCb2FcWvkuF2Y3xpLs3wh3PxGJ4A26N7aHvrD9SM9WmDu9z8wmxM",
  "key34": "4nbWT6JrYF64hVaN1sK14K8SgCLwwEUUPEf9CDzmyCRGg6ipQUcsRKqiZ2rihbywYcDNvtPxhY2GDTsXdkD9bKQj",
  "key35": "3oQ1p13Mx4sQS8f4JZnDg8zooRPvzbgZatu7HpDCYqri2tF4sv34h7SbMk6CVtFYTyGHWsqW2PwDCPeJdSAXxBki",
  "key36": "29Nju4oS5BmsigjVSkkX4c9rmnvKLVyq2D8yDm9zUx3L1PNQT6hhFFtjLMvRCo5vEot6XFzrngFZ5h4P1nRBbRbJ",
  "key37": "4LL8BWHjda1SMKZC7KjmebHDvaoywBiZrQhfPobrjPyiU151FETAwq7FUQirEPgCj2LBfT9KGMSWZ46Ev3Q63qtL",
  "key38": "2zmw9hRrkUzUPf6b7DYSh7Mbs1WoLRht7LqFhSwuriyutXjiXWxXmnB9jb1uFrZL8eUv4SPLP4PvduG5mUDPJNJM",
  "key39": "MctbtN5HN9eXeRVnJ3ce3oBmftpUEykjRgNGyk881Y2ZWwNHNQRHrY96DQqsbXRsKjKcb555V31MZq7TFmmJZQk",
  "key40": "F4PgH7n66aPWEvfyATymY24oeydEYY7pDrUKHutnHcM1HZnht7x9oKjKobTU7FgzDZ5hsvwn3vCgcYr7fnkgjwN",
  "key41": "2RWEZzNGbneWkU9k39vikWHLDDTT11rmCDizKL28KCiwvJQxupxE5fZKNN5xKLnwxkg6pSRmAsA8UrEEjsGmxqSS"
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
