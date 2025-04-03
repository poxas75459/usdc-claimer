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
    "2p6MPKmtu7DMCDbsQ3f3JNub9T5RFgqog4Ea9UPhAwKqUhJx9jFM2oKHtwRjKxkQs6sAVXyTfKnNXi2MwLrgdcaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "akVDk5GxPTnnujjLjMYCpVDwWoSKQsu1kGb4tWGmdJ5EF1wQoxiWMQYCSKuhk27CJf9SjcPz1x8kCFeLMCJQy4T",
  "key1": "Yn7muEYN7o7QFA8v1JTDK3TnJtvEqrk2cFgsZihZFszprRiiqkvKgoaMRufALwjXA3SkQtTU2dhVeYPHhotCYWe",
  "key2": "3ccYX414ieRsuTpug2PHMG2QYdv1f2TwGeeVuFaS6qCWqoUarnk6JsJBcSCXXtFmLZo3EtMfr61mqUXEB9vi6yoL",
  "key3": "4zriwBuousnzKqCeWtEyWrf939E9z9msG2DL4Hv6jNBDCZodhLrq7JQ5SGbNYGFMep2MvtR5dCFnUraYsX9DBWSF",
  "key4": "3N3xFeCprGkbdeZPLFE2GSzwA9ka7o38jgNwZewGkeHWZ1E9DyhCFFvAvPjLAxwbMohqgrR2X7SATznqbH9N3Kmm",
  "key5": "5JNKCjSxy5nEX52BYdVvRmNgXnAQwbsUVncjQ59eYLoUEtzGAZT1tkZaHYYmHNbiGCszHjyN6gw6jDubWjy2bttM",
  "key6": "3aM6J2qRjgYZPiXqqwuR4QEXSfRh7GWpzyqsT2CEEUvemxR3nwGPVX5kYr2ff1Kk5RuMWmqrKuXP39WeWEWaGneL",
  "key7": "kDF9dVkDkpgY9vXnNwmzdxnQTmAQe7MNodEhER9pUFodwsyPFCWSLw3Z6A7pfHQrn5hyACYaF5PoPNij8zahUoQ",
  "key8": "2DRcQA5iWT236H7GHKazd47CzA4J7FPEViUxGBeGXrUgHXnM7uABQoouEujcxNBAiPDaoZM6gE7sWH6t8LqHamT8",
  "key9": "5jic7pfv7BXSWsCfGUtWrHjvYPj4XRydV8baVcnpZ8ZTvsUqWsZvm7NJJZY2gh6QjLA4g4fBoDJb18DjGQnusBk8",
  "key10": "2i2tH2tCiPpqycci4KRzcTUcN57KkWCv35yxGSBVzMMq5ReSdd3Zzc2tFfC77z6JKTjnCVv1CdeYoPTAVePn1Zdy",
  "key11": "u9JtJGqiM52gq6Q9ySSQdqDQFdxDfB2T3dmiAKZLGkXFYhXZ7oiTR88khnrYBCnaXSfyf6xYw4Mi2bSFmuyrLoc",
  "key12": "3pnAEBbzf8XMZk3PAvMswSNdrYPo4BsgP9KVLa1RnhmbtrKMHZfKrL9jhVuf1Rvx9w43yWhxT5L3N3fCcsHVnGpf",
  "key13": "2LMMDMxa5x5nHHx82CmVcWDDbwPN3y42AiUBXBDvEnCpotGzzjNxxXKHJ4T6QXPCDic8RkzTzDNfvcVi2eJrn5af",
  "key14": "LDJTqUoEoNJjg1T3cwsVBkUqVsToH9gNPPs6aBgbovhBwJDVDYyHUbPyQZgQ2Guo6rLWQm7JrUNdvBhcRmAEJeb",
  "key15": "Bv5eWdpA63nLvt1H97PfUaUCt2hh5GcSVH5a9hs7rYJExJmFKCKrN4U9MS5zWRADxC2C2GZ38Gx8FW62bGjzGpV",
  "key16": "5eHsunYAKuUsuouwcVdsr8d8DKd4pr165KYEhLvbHHbh8GRA8P5hkfuQEK5zqAEBwwV8n8oVayE6RLTA3LCYUYc5",
  "key17": "2CnRHQGDdGCm4nyuJajWNngibvza4f6a8AJbqENEWFzUYa7MKfhUUcJvvzQPbGKesieUxEGt3wxTHjT9M9qRTAmK",
  "key18": "HMZmrhR8DQbEbk1xGQDHUhnuGSn19777LP1u5KwcTQ7dJhYgwEUTAY5SuNGERVoGzcBJAqMAfMNgqPqJMAFdMWT",
  "key19": "4DCiDBVbR25GXRstiav2zCxqhRr2CRKUscQEvGqiQzKZGFrNjioKSEZScf3kmWdZYzZ3qiQc3ndmfYMqAX1JGV7Q",
  "key20": "VmeCyAFt2Nj4XFuLTHMMB4YjvpW21v1CTJe3D9cbbwVkgPq2Zvfeu5jV5AaCnu7PJFrSfmDvz4AHwKun12256qR",
  "key21": "2GJSsiVuSs9KyqyM781wgsxojdB7w9pSHpVrn3NQcU9XZ4GzVYy2eT35jQLG4zTQ8h96taMj3BGia7xSLPndZFHT",
  "key22": "44mAKebZHWHBwCpg7PsGfWiJb4BNdcUfPgHhFAoE9LTbh8yCsj7ZFwPJ357LtUJtFNpGCQRMjLBiq7x2yWs1QZUa",
  "key23": "5ZdtwWrjqK9kyUApNENFJQJcZXYob1KzeH6ht4qn3xNXeCsD5ZvFKUoaQR3kVCyv3vKuYvJnvbTwJeKfKbsZPMi2",
  "key24": "4HqccH9EYX6WXF11VfTVQdsdo3teSTfa6SYXb9iEKw4QyJ8rUpWcXCe3Yj5f3QphTSSstsvX7vsw4aGwzGwqYp5o",
  "key25": "2nCqhvyCNo8nHTAwQQQQbp4hTgyctLPLMC44MCMsermiY9UisHixmARwaNXXb9i5KXiSnoncYwKKmz4J4mZYuzp",
  "key26": "3UJtydG2hKAvZMPvekRMzXG64AvZpjBnECznHGHg51bjDSkAPrBjDVSBjZi97ZoHXq4oT2UAECym7j9jJzJGuWG5",
  "key27": "tpkxUNUoN7hFsQUeRZGrFgCMMP5kzdookxVQGTJUaGhR7TKZM4u4cVBhrZpHfhVCA1XuT4UvUPfTii4kRphLfke",
  "key28": "3Ci78oUcmejVPjWMrV5UrsuFrsrHhhJnzBj28PZa7DYTAAdDEiw4Xmxs2gZRo33ierbzDAXiAepEzG3azzV5Dai",
  "key29": "26TRFXdDkffXWSnGx8d7SBDBc2v919yMXorBcHDp9kLzdofBBr5r6KEJL5ou2K64fGepQ5aTK7bMpfaeU53yhTMD",
  "key30": "2fwoGkagBvdc71htRrj2hzvGWPouJvRQzWSXWzKZvpZCUTT1Thz3GhUyGSSJsP9adbbrSKKQ1xh2dCsGQqdrfqpB",
  "key31": "5eXeCyu4FsL14ugDbLqKERMkua7WtTc19b1bv9W9KZPcUseMLicDFNkmfUHrSKczKRRSTV16KnXaqSdyEnqgRG1r",
  "key32": "rHnNh76eoE2XzyC3MtmvCL39JGkSREfLk7pGBXu3yf3TLjswX3RFdoZh3TxMiHRStQVGB8mqY5xukXUyaQhMy9p",
  "key33": "5vAz3qnK2P9SurJ6UA73YnLojzpgcUNZWuDft5TJQPjRFm9mjX8uSbfzXQNUDgenFmuSoZ1w4Wt9H1hJMDgQj7cm",
  "key34": "TmqxHLL97s1gXz24SVzf4bqvH9i4jkm82a3VddaETdMbCc8wAEbaVRQkRhJzhxF1GGpFuuejZUU9BDPkqPxmnZ4",
  "key35": "4PSG9EBdUvPVWzyPEFK5bza2KyouqFBFsccJRFxSay7F9d6WsvJCkb1LiJgAz81Xs58yk1qXRSwNexinbditm2i4",
  "key36": "5BJcqd7hgtb51mZXAyYc1gBtGkkHfqcxSk19wdvUh1URsoVohGKbRATyZozSzspz2N95kFFYssJqGK9Lw6ibo2Mc",
  "key37": "42YXUebtYPLDNtAhRdaNEHF8dJfaQAakayRBHknxhD2cGdNBy7odh7A1xLrNYdfMe8UuZVB1gpxqavFxUSDNFUAU",
  "key38": "4wJiikX2HsLuQ932zW3Z9YasEA1yvo9W2j91pp9zR3U43KxmCy4R65U5UBndE6tFZtNUpFXNp4TBferPygENHHD",
  "key39": "292w5ypPyzcYvYwspiF1myX5MeBtjekTYm5ux8niwV6HsSmKTgHZzTZdHqHGGJPKvEWSkz9kjDTfjw35RvaVChco"
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
