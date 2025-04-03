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
    "4DFzCb2BRmeuikWwRnpnv4af6bL65BEnSza3pwZsw4gjmR76Zxg68TEn3Drv75wnGcDwxUWF4H6GjujK9GxFoYtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UCcRByqCYz8mxJGohTEQttSc1uLPNfSuJxWkmn8C5TVKyhRyfkvgk72un7iJ67pc6z2B6Gb9uHszDtPxpCdnsgj",
  "key1": "4ZF6PAKs2c6PW3gJAYjdqLvwmehzU88FWXAGYKrAC6Qa78FeT6vc91WHpgpudn9adH8zH3xSE4eknsubC7gt1svk",
  "key2": "47uPs8FaHsRw6L2ZkgjRgjWTjNnqxDT42vJgk8ZhKBTk3Ug52c7K7ED4uLadjfptrrwknMyEdrVnHMaaxd3wtEYc",
  "key3": "Fxaa8m9ogeH7H4EE7jPBppesKqjMsUBfbY7L5Zhgzxd1hyRQSMiF7ffKyqu2yKF4PvY6hwVkyRNM7y69tbZYa2E",
  "key4": "5y644EEWnvUPNLvrsJwTcJSV5jD2NUezSS13Aukmu5TnradQmdxkUXjDQtVPY7wfM5HQgesdX19MNH3aphvnCCb9",
  "key5": "3SFCLMTgWe5qFMEtzQFgS9sPsPJSQEziqCF8Ero7yjSmRTHStFPTpqqjwNYHUyPn87LqYA753YSZkVKF2ZLC7Gaj",
  "key6": "SkiWdsmE8TJAK6LVNgDVMGvtiLvkVrvaP1rX91qS3wPmshGvsBc9uztYPR7ztgAZAFYV9u7oFN9ifWX2iLJznU5",
  "key7": "2QqPCR1i6xiUsnMQHSSp3JFb53CgVKcHUNyFWt7p3xMrGNtF8PczmxSPCMwBtL1sAJDavNfVRQk3FqFV6DzGs2Vj",
  "key8": "4m4jdDjLrdqA6aiubMULQNkT8PWurxb6riuAFJeZScchiojXmPdpThUAxCeH8qbrsqkEeiT4PoSCJ6jRfWVaCUJ1",
  "key9": "2y4CwTtfrB4UE56MN5iNGKHe15RmGRduXsBiuSu1ywDY7ZD9qPzvZEiWhmjnAucH1yupjF7R6XU24QP5QtVNfUa1",
  "key10": "4MZR4ddMt9Q5DGcHatkks6XPTsaNA4sKd5kJ42L5Q2gay7EB6Mvia8htTdkGVUfnBDHzwUcYxhEuvNYZ9ALfPEeb",
  "key11": "5EoA9PojPjdtzqJv7k8fqWidugQTinapk76Xf7Cxxo9p7aztAdLK6epecYzfpyomiq4m3ETKdoGNf7putat1Z7RW",
  "key12": "4mTAyqT9F1gCPXTE2Uwv3NhDRo3aakTiGSdhqxVa5UNjN6EtecguU4Xrz3VKnLD9qc2X98rGJy55nGRgJM7QuNfu",
  "key13": "4tnAYvsVPjGjYPjBEb8AVMdWJ9c8SQEpUr7BHgnfLFHMy9pVzB21Tdt5tzhwFJUYu7YaFdVBcw59ANLhW5zHoEib",
  "key14": "42qy5wsXvik5TxfyKJeoePK3oSEgyBJ9JvJE4iWGeHaUFk76ds8W8NgN2hbpSdWqwvcqHSLhZNTbJXJtftKuK9aL",
  "key15": "SMQyB94ugRNoz2bXEmrxSAkjG6yfVjhS2tSg8G93bww9vTzn6anWrsT9vtAutwxaQyvtfhR46nENnKfFfZjM3tR",
  "key16": "656cqm4j599V7FcevyWLhmFohdjSSWucYpUTdKBjwNNw8DRDTVPqhpkj7guCjkRbv7Mq96ep5fsh3iy8CwmCpV95",
  "key17": "25zHtTq5DsFLdY7Zf3tjBpNq7KFye9QdcsjsgSZTevMV2FQtqze24cDoSYBVQPLX4go3uezANdTTd8u1gKmXFWfb",
  "key18": "52mY7tXXPDfj2qHtdB7QnEMyVMwKJdp3euUD3qEyzhjjK6pzYDfCbejwZNQNm1n9BrsSYGvaznxR8TQhyvjLmHQU",
  "key19": "5xrD8Lwk2XUCN5Wt18jEW3M94ynwSitG42z9KnjNkkhX66DwVCwPttH3WWXQMdsUiafn7uP9oRTzVdPSxHygxcXm",
  "key20": "2SMVPVK4ekWY9YakqpCDcCcnxkRkdkLr5es1dY7FL7f8ULB23qqJeMkTy4qVXBLfM5DHMdxhpqyvi65wCpVKsHR8",
  "key21": "5Eu9AekLhveh6k9JnB5YWTC1XNoMh3zKTSoRi2pSL6zFzvQ5vzh6Yu3Djty99HvjPq3fLd1vPo5ZRSL6rqBpBLZM",
  "key22": "3gXz1hE5F5SnLdvb4AGZNiYqkjs4xLDGxBtD4wkAZMMGtxKm1vVg15TDcmA6jdKjvaeKP445SnFaAmxSYT7DVSxM",
  "key23": "3jGnaRxrg5nSK1sxFQQugwvWcNgdmCJv5d4sVq9Yurqx94twfqSw24tsMbFvY3VSDHAaGQAd2cG6TzC9mHASDqAY",
  "key24": "2ukZmd3yzfGFBVCVYHa6jR3EkJp1xpjd6jidKfw6z5VJEHUgt8zsGc5C3CUYNAXG1G1iuzR9i4e4xYvD4sDDbGie",
  "key25": "2zVKskX1DuBcZ7u7S58BVknJddTcM6vnePmuksCGztwDGpJ3XnRnpg9XAaadbFz1fMpqmFjwpDSJG7zzAXQcEp37",
  "key26": "5TUCDbxM3Cc2hpe4Bbu4koZtCxjFdTVCi7bXJH4wFKYnnsvAVjqFAEtsqCA4PDztt3tY7oqNDzi1vm6HPLyx4dpC",
  "key27": "3ZqYEVSdQfGCRU2wgjCRmKegTUFfHoZM5mnEM7ugTyEAgaEBz2cVXkUubuVRichRH6TxHAQGXz6a5yyxEEUFN37c",
  "key28": "3ijoyvkYp8AU4hvaq41LZa9SQqMZziZw3ZdwazpokfrjL712hYtgTNcA6JP75PFRRVrCoWBr8k95SvjYv3ctKT32",
  "key29": "yFmPpfSWPep7pZdNHHDPxUfD967uX1upTZvWhj9bJMccxdZAVVhmtxyt4hLMNcsiNPPggjUC2xYh1q1FhFPR5mp",
  "key30": "3g1NPcgCoc3TF1rEVSpBcCDJJTAQJfeRiVtYeeLvTvVyv39Zf9z8r4Sqxu7ksxQR84NGeyS4WxkfHzP543nsMjY3",
  "key31": "HkWkPYcdqboirR4nPgfdd9emdWfLAw46VqUpGXN31UKMzzhhjhpJAByDkGEdR2mdTwkthQukEUNcKZzN8DDNrCw",
  "key32": "5Kivg8ZQ7LYD38bNQkxxVQnrgPvj2uyxH1gMdWHVzSpAspG6PveESxEy6Wtoyx2EeywcNoacxxuJDH8GSmvJigPL",
  "key33": "5fvLAxVZAA2eGrTL6wMLiqWBoJadHzVyrCnYVNnRnrKxaw1VYwthgwzbG1zdJzHPP5FCKrhGWdLL7YFFgjnP5EzQ",
  "key34": "3VH4G5YtPNbLeNBEMqqjnWVsQExijvPf9zEJvWACJYzRg2jfheaUkRpe4JgQQ1J6WtDxr9XhTQsD1dGZSwnY1Qj4",
  "key35": "2uq5cGD5rKWdBkMptnX4zRHAMgVj8YN85pDt5KjJz1GBgMVCvRVrhT5E28cpjHU5qg6ofLMsJ9ZwxbXtPeGpaMWQ",
  "key36": "2nhS9gLzo99A6dx4bFVapv5BTh9MiT1Z5KYwypGdijxk9SozWnTrHCsmXpFP6mTXBNSG9sEr2k69NGGJPfSnYbKF",
  "key37": "iz3xuoKtRUbMoy1Az7whEJxsyzRC42RBDiDg4qtUt9aYCVfho2v8g7ZBtyhbpDBqEsBDPg514YAfeqKPfoUo2RX",
  "key38": "2isE48zoiCcqYL6paVciVg6wcezad1GnPBNtTj9BbgM5nRvxKjtspAK6RuKyh3ysRQrEkvKdgS8gV6P9d1PBwgxw",
  "key39": "3j6drVmfVzF4fxi744uS8nXSkrXE2vvv4qWWi2yPf8asUnMThDAKgJcj5UGwXz4j9RMMk877nk3wSfW3S2Yy3kUV",
  "key40": "4iae1bADQ65z6PMyB9NYJ4kaWS67GEer7Z4xZG7nVEiMY7GcFjYrT2pEkpr9r9VSdRN2NP6W5GSUNues9yvCyQmc"
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
