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
    "vze58gwmMYtmvE1KKzPjP9f8yeGEt7vaoV7ZZYdzXsT9Luyz6cT9f8ArVsdbw6R8Ngufxyj4UXYXvLADSgEf4YA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u2uxcHZTfXjYzYAzxXtcyU7LyjRmnEiRsx5SmzGEcQJfpMUnPx4r3VtV8J2vGfAMrm9X1nzvSfWpTiveexoY5pM",
  "key1": "3CAGVLfWmKNZBC548u54m3nzpEY551eYjwMBGbq3xK3auqMVvBEcBhiwEZLRMAEJ3SWJ6rsz6AWtHYRJ2kmtEoT1",
  "key2": "3eBb4yZifefSobgzZJdkfszzySC1fKtWjhATvWK9QyqgjWEubXYF53GgJGLxsmvTTvAtrYxTkYg5aC37sdwzsfe1",
  "key3": "3n2K9udXnKd3EznnfbS6yewY8KXZQB2rSTNPkzbfJ6y2MND8VUqoAw7nJKRpCwtnwfEF3fF69MPYeKHu58791X3w",
  "key4": "4MJK1eEZuknF8ojXKpdD5Tr5TC9bVSZTY7HYFVUXjQGq8jGSRiJjtfwmGpaQoeDo5yS55wxALEb8nnL89k8gC8Cw",
  "key5": "4q187YASrxo7pXpTuGuYmC2QPEgR5nCxQYbWqnzGoRfHJgTDX4uhURtJH2d41RVQVzFxk58nC6Q53wCNf1BApP87",
  "key6": "SEc5SMWWBvJ77SKaZ1NRWpK1BjW4TDhEixs9VnSai9Ry6U4s8s1yaP6pXaxrQ8TRt5UftK9jA5PGwmAxEF8XwWf",
  "key7": "2D3K3KYxRb3SAPFc2Udorq1dXefiTyBsf7RnmczhzM26uopkRj73AcyaHnpUbd3CkdJfxYfnTZQKnKSdLsnZScp9",
  "key8": "4TTzDv3SnFz4Sx5shCoJoqMfPQsc8gXqFBN2mVcaupEpSRaxTQFkyadnkhem6qjegMcHZFhdyWr485fWaNDc98hn",
  "key9": "5fCpu6ABpZuYSaYN4CbgXjF43rwE6g38JeaWuoVhYgKMXDQ8htZcWC4nnLd1x2Ef6suf2U6VefTRmYBkTM1idtoa",
  "key10": "66udpbycFcKMt9LrUiAoEHjMm7R2DuNWcnFjLPEE4BViqLZGBh5TPCBFZoG8LfVndTtxLZokwUYazSsJcHTkhU5o",
  "key11": "5fXesf6MRyL4UTbKmGLMjhzcf9RSkdXzAiVbsAL9yVZsS3eFdbTQPVjJvTAx1N3M1FqimkUEsyNpiNb1MntYQLuU",
  "key12": "26eEe6c7Pwupy4WfYqsT79jRUNGw7eYYzstXsR6mZKtWaNPRJMCiZnNvzBsJcSJyDDb8dMbyi9oThT1b7sVWjuys",
  "key13": "LYmkN1a7JPHFP5B9eJbCdFhyRae7ip7a9SEfKKBFb7VkUWsUU3NiQwpqc8EQhtjafg2436e3aeCCKxN2gVmJFXL",
  "key14": "66oBVZBDqU8zdHDvqaNdpMKezfkfnaEAbS4djrPp7D6DwwTGMykjJgW4uaAadLUXKsbxbMv6syur7F93zcn7d6LE",
  "key15": "4ip7uvRYq1n4vN6mDV3K6NBcYwdQzQhJfNo5Ppdvrp9456rysG2G3PbW7qpgjNYn85jFQ1BdgKmB8wAUgVUDoCda",
  "key16": "zpzNNrUGFwLxCxwNWEHcfDdtfpET129AiK53yWhfb31YNZuvaef1anoCv9ss39bVcSzrLj53x8kY6SDAsZ8Z34e",
  "key17": "52VQ3AiwbQZSoQY9shTcE6oX1wwiDDW8UksfFAgJueXY926DbLLFbNWpA4pLWU7QtfW5ZEStMX4hSFEN6dRC4zdS",
  "key18": "2HXesHzEtLQFFtgkMSAKC8QYawwztsx5MeRufqDiwtfBegXNL2smQaXmaVLsD314UdZBFkMZuMANQpHQsB2LN2xi",
  "key19": "3dkRsqeXZKFavQ9JmZiiXsHvQuGsExsk3NR5QkHbGhy1h8iUB7dknCPre8rVVUeSmC52miHgw5Dvi6HBo8b6B4p2",
  "key20": "5g9DzwKWSX9nJdzuntzpH1qCztzgciA4JPY3sgJL4WfNVXXJLXg1hibtqmeTu6yTrX2b1RF1WHPPikTHwrtm4bu1",
  "key21": "5vKLfuVmGsjoNWLcvhy8pgctEXe8bJZs9UR6D5rKhhSPLGjN4VtSnXknry1GP5QCcfuhNwQWd35z7YDheUsJ41KZ",
  "key22": "Pi3VBFWvWFggUmqJEtViwedHA2zQkpSPHYcY2gbzrFpHAPcf22vwc9UrxUJdqSv49teRjvGBk1eZ7Kbiob89VnK",
  "key23": "3p5zETYeiJK37r9qF9LJToBYx82MFS3wzMi6c5N4Qw1wjKR1U28KL74cC4hGeYfRHeUUpbKzrDce4wAn3kBiWXJo",
  "key24": "4SGdb4PtNKAr3xYoWQ2zoGzmLYR15cHTdRrwxvfkNHJGK1hzLHrWgrMd66jJZicvTWKpvh7tCAYxpPVnoMwtocGC",
  "key25": "HsSMT6Go3ifzy7qMa2suAbAuKCSM8E6uwSJh6zJqS6xWV45qVJMX2GkDeV6XftpL6KkDpGpiPrm5MbkffMXdTSd",
  "key26": "2BSKuCxPDophQTFD3nQ6LvWTnN3eMyEw1YwRNvPqoaD7Je7VocVw84kzzCFyrPrME2VZ1ng1GFhcfKC7C8Y6RaFZ",
  "key27": "4Wfs74ooLf2DqX7NPojGqJ17KzRNvt9Gvp9Cqzfjae8zzPYvFLZ6s76Cp47S6LxqNyMBpgmYvnihJk79gU5pYaUH",
  "key28": "2nqDKyjKzuHKUpPKkyCGnMrKhkE2woYAPGJvsgbJaCMZT6fxJ17qnCYAcd68otTH7bgx6j15Bgr9MS4TskKcsSsw",
  "key29": "G6udBMcthj455rM4YRyjarshtUHoehCVnQCMezn4G9qREvmwxkPBRTjB1NQhfQixsXrKU4F5HanowytoZ4gQu8U",
  "key30": "57TWXP3FxHyA7pDP7RUUTgKSf1ioL5TNpZtcNf8KanLg9YzCgCUqroX9jumDcAxpf7z5m66uj6ara3h5o5Rahyxi",
  "key31": "4e2G1iJshfLK56VksSuoKDgG3WuUvpekZe6dQJY2xvX7ednEPrN8s4bVJT9CG6W2jUbjQZmA6GRxd7ouU7aCy5mj",
  "key32": "3vVHwn5GNzXuRjcWFyri8Sgnk9aEvquKZfVpDxYo9GqhGGu7wLCCHeNdcDKwudv5EFvrbJzn4YZU4XQ262MhihVX",
  "key33": "4XC1K22BiPFxc3ZnXpyU4vgmxeg71gsgitbe1RrvmyqYuNo7sQPF4MnqCTnCtVpKhEgctQR7tWgWHeEdvAvWeJKs",
  "key34": "5YYDE3rYwuekyMivGaWvtnW8qzqUz9XyFAUN9bsJwyBJCJRLMXDNTrYuVyEHmfnwh51FStbGGgnf2jFDhstjXi2E",
  "key35": "5rLN9RqHVeCeNsSxKBHHFzQpvaLvrn7Wwbbv12sK8WKa6nc9b2hRf5X7yXXE8pj8QXfVETzmrkkf69VRRZ6WfMbU",
  "key36": "a6t3asNFcctZZfvq3F5Hbhhh7m44EXQ1qAYPoGMGuV2KC3iAJwDEsnz92Yy4qRaoEiiUJum9MBzGGPovoxh2RDR",
  "key37": "4DXZgDuSTMDtqfaU5knxAWgMKWK4XYQwki8QfyfAYTaiJi5ZrsZc1p7QnKfogAUgfd7CRxrTsc7YjtG78Xn14mzs",
  "key38": "5atnT4QTuRCxuQTXeRV8f6RqrkFNGHNqZnFRXLbNt4mXvNJhSFRpDXLYJXn9rrRNTTQqQzGuXptXH2j5wtcTMmCT",
  "key39": "5rk8hJNh5t7YTHtpZgSTzL1LNCN6VTH9wYorjkJXcuyi3rsu3eXH2esaP9Bs56qqFMMq4fj5Su81f6ZVcbo579y3",
  "key40": "3Cto3pQEUp43XKsYG1twvon39J7g1EeoH4oFqxPPjtYohBwEHcAsh2MsUEhrHjLx3M97CK8v2EzppbMCTrsex8zn",
  "key41": "3pBWQec4Mt1o2gRypbT9yQCRxoknbto6APfze35hZCvRUTU6vN2rctdDW4JEzRsLJnLdC3Ag8DAcNLNrRoTk4afB",
  "key42": "3EDZqksAHL86N48jGaU5dtjF4pW6SQ9u8TAFu5Yv7UhBpmWZaVEM2acAK68ZGQ8pWP4wck7hBxXxNPuwSQUEuQY3",
  "key43": "CNgXui3DwdRYh9QBAHTedjhDmNwU9bT7vZuvF8eU8aq5jtVWTp8oCqVbtzeDQkqUFrJk1iDxBZeoHFoaGdMVudr",
  "key44": "27L4d16B9e323v2m1vVHsJU1oso2CsgP7PNMjV97J4AGEkFiPPHTB6ARFbnvaTVSbUVHERhsU1UbXi5nVTXoV5Nr",
  "key45": "2x1GF1YEcBjW1n5vF3cZUXhMPYeixPhJgUgDdGEymJT8b5M3wFQU5BuLAx15MXLLfpWurmTZJxLCXH18JacZGD7u",
  "key46": "4j5vZT4TUkHhJM54uHNafGHCDb59RySXGQDN7LeeSvQNC82Bbn9pWDQWxK1ftgHpZFM8G2QLZf838N7db1o1Ngfr",
  "key47": "21cY6Dc2Wm68sRFTdFvVtQqbGzTDx3AADSTfZ6nTS4RxQGHvpvTd7VLJ2jEVpd2evrfgbxRFTeXceRocg58bdqAj",
  "key48": "3hMSpmm66qN3uXi3BYpSx5DfWkbQseaMwwPVt1CD91mA8mMgNB6cdnqxqgCgUyoHjm23uEGDgadZ9DjqYwJEXjwC"
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
