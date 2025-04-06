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
    "67qcNN8HDyE3wZRBxRrn4trWQPGj7wUeYbYvs19hBygNqYA9Zg84eUxhGZTHPAwXYHwPyn6iVXWM3hdhuVeyiSnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XEwbHwiUVnkQmZaYQXEJSNBiifhHnSSmazCxegG4FBzk9aJHc8NXUeHRa62sYrFmBKGPdz658zeTfpAeHnEcYmG",
  "key1": "5bSYaAJyWsjqRAN2RrPdjdn1rcnrhXzszcJFwaxuCBgEoJgtJrTNkkBnodc5ZH6aT6giucykpbpQuZAyqkGzrMAv",
  "key2": "2YS9dQvgF6TWmMdMT77x9ttw8BHsnVS9j5SRDCukxNMfHAt2ZBdk8Ysn9ue43usJksytny1RsaGuTPD37cTEbHZf",
  "key3": "4QqFuk51qAF1HTiF5nWgLnvfBfJF4KzLhf1NvxVRp1Lgafvt4LjJ7gy2QkLhgBFYJxgwJsCcAnXCgTPZuVb2eZ4t",
  "key4": "3ZRqgQXUbuWqc3Tdkzs75a5mF3boDjATz2pRdfDk4xZdYXHowDky3bcxobwRbtnUAkQCWcNuErzE17jjJQC2YaFU",
  "key5": "4Cw1Fst8CsZEM6bFzzuhh3gpdaVZQCAaw82AaWndUd82DStR6scSH2T6WDf2BPf4Z3juuBwwFqcoSXPAuekgJjyB",
  "key6": "nJ2HQw3WQtcYwLhq1UP5YkyhfNs4DyKDzBJGW8CQrtE8w96ZHSKAcvSsNnM9D6Vxqj71727UKcg7hieoNdmhpJe",
  "key7": "2D2kGn3Pui5XKRj6Zg4DQ7PmaBpwTv8kBc1yBAWmcN8FpTJuJAaNbL34AJybYHsP34vWFuDK2mp19JGKxq4ujWNq",
  "key8": "3acNyeYX7xhhLqzVhtf3Eh32SAHXj9jsDwKqq9JmGeAGE4k7p9Bhv9dwSfxz8nhXe9QtD2wzUkAHDVnGkXbE8udS",
  "key9": "2RsBq57n21a5Rsy6MurCavwLxxeVneLkKQhCMTr3PojRwirLXkJ74otnTZpzRFc2poT5N1EVDjtryBeoHkmw78ZK",
  "key10": "5vtnVHqp5UH8aqFWnSkQHYYVcodrwxcRXC4GT5heA3wYeLu5BTDCsJsYLjfmMZkGu5iHYrVaLRCg8Ft76k1aunGH",
  "key11": "34oYDi4f7j8m3GPdLbgWDPcv3pot89z5XTyxtqH9cfihqpZeuUCfqd5zZMFSp2NphTquawpR6gNiJF8Uhhjy8jAk",
  "key12": "3uqXPTCrZyCuCf7NQcd8VzqL1oR9aYSguUmFKF4t2vDDBqdbXKJmASwGfkmgLPEfySavoz2qWpDK2sZEx4vY3tZb",
  "key13": "3a7sanMxH6QxjsAngCjweF4Jc2SUWkfsQpGQ8ZehcMCfw3AFsvS988zuBip2L4vcQryD3xgneq7YMAczaRuxAwBb",
  "key14": "4gGSGnaS1M5SvbpeaH6vFN9Gt7DXKvbAUhToZcM57wsgw3xCMKcrJ9m7npZv5Ht6tNF4FaeE7SsVTbo6AeSSSQC6",
  "key15": "uv9kughfvd4zr44QaXNfgyJziBH3XJi1y8vaJuhtRoDsXdsewpoYYVXDpZYoEFkxVJZa8iHVHYZ1gZ3jaqK9Ek4",
  "key16": "5ApxtRtQGiYcUpuBRqixn16PbzccrnWvejq6wVGU93isyaRDSYBYBhYm2wqZLEBZa6dZTpXWfDVVuXkAUcZgBWRs",
  "key17": "3wJ2ZZpsrr492Q4gmCz7fZrobaCzzfmKvUooGz55WQhDRmFSFeqD3xZni9oNFuSXQbs6t1VJWtTH5HbvdoLVw951",
  "key18": "2ZcW7jXj7ACALq1Eb6qBpgHgbVAs9PiDvmzxHxmtPqQGVPen4CbAsqVbQAE7AswykEN8fHKRPtvk2iy3dCSPhWQK",
  "key19": "2dYmrXLLYF4r8cnAZVkHy2nyAB9EJkdWQNb1p5GPTcrMnx2Q2vkJgbXg9xYnp1ZBTMczaP5FxVSnpJs847QU3qk2",
  "key20": "4SsPCETbjNvze8wKJmNgNncBuEe4KqDZqp8inhU7uEtfDAmpxsyH4Ktn4HxXCYin6oosq77yKjceTyMBCAfjWuWE",
  "key21": "54SuBQYTPUbWUBDFzNKUco2uZbtmovbLa5jCfAyNvtHXpm1znbbR1bVZB4EkRUgVVYDYJwaADXtC2cWAWsVJdzBP",
  "key22": "2mis9McniU3knxtDfFHCEEW6Fr7QxKK7Uo75cFESEXtuumoE3VhXNNMpmFrp12EzEkoFpFTi2fMVZ2Q6n4g3deJM",
  "key23": "4ZNVqjK1YfJSFsAGV4JCC7gzcUkL6rEjH2eTNX9v2LZBvkPNNpKzhzioFUeWf7waTT9capCh63aQm81p27JEMkAa",
  "key24": "4rAgkM2MLcoV1VWsT1uVTJjwBR2y7ppPRL3LTGpgJdw6zPcZV26yvj1R8kkF5QGADT3BVeYyscfgXmAajhHT4J45",
  "key25": "3yM9RSaafJfqVeUnMQjjZxZDBecJd4gfS6X6BspS2wUpJUjqnvsxb23uPg1rNdy3bf8YJFKGfhzSAVeFWdjfwNet",
  "key26": "3SfgYkqU46MGrPdjZ3ZNwbKuW8hmUbV97QwM9XBfv4DrEutZ18JKytkDbHD5z1cH97SUHtrgq5t7Sm6x3jF3zJL7",
  "key27": "9eAUmzr7bpBfxumEy5RGuLGF8M8z5Sbwq2nA4oBLmVkejK69v1Ddk8EixKR1WswdvJ8Kapdebr7vUzVcR9ytWi4",
  "key28": "5h6u4KR4BDHHiuLx1njWXPhLoiauC7wLHaYxnfuYAz4LSdBbP4QJoiPbTQ26Rt6Sv3tN4bSDX4sWGA9a7ETC4dk6",
  "key29": "27qwGp6nKq5X66kd3FgLyAaGtoyfxKwXiXBLHBgMoDTVhJXZnTKmchvDJv5rF48cHzSFn1GH5LRrkhcYh3E7Mnmy",
  "key30": "42qPssy5JSrcBnAgn9Uw6kmCwAvyi7iupBqKveigz8E7Z6AdstziWVh3KKWxt7R34488U6aem1UJeDskvRKAVdLv",
  "key31": "5KRsX4TbHYCzmwdaNcBDfV9emvmMNuiskj9ihxR83v1ZgFCCitXPFfgQTvMBJhcCZrTjk9CxoWGvzpMhsfm7ztk4",
  "key32": "2imAWHZgzWdHWjACweqGCcFCeQG5rZ9kTYb2A3ZDZtbaSHpAmaC6xaqzkb4SzZUU33vdGs1xt4a7wpeDS6YABEcU",
  "key33": "5iYXf6StmmsJCAwQWE1q2Eb1BHXXiNn5SK9WhwvztvAhSBeTzjZ1XWGV2gkyGVoS8kNDiSKbVi1cXeUm4ysX7iQd",
  "key34": "4bqmzzYKpCyusUm3JCXtm8Q9Z3PukvtzsJZZmZx7nYiXWQV7rvvAuzpQjfiqZmNbnkMsv4XfWCYXNyzyQsBuhFdM",
  "key35": "3j1xtFqKFCtJoDLSXi3hWraZd6VVPhKcF9Egp99KmpHi7Zx88eLMyBzxuobprQpfURnsFFwvrcJefqMDQxBEkR9G",
  "key36": "5Ag2KYgsdy1cdX1nUjr5b4Xvo8rZkFq34CJudZMjLEwSHGnyT36YJ5mFLmFAxoTzcXscqoy6mvGMRivFrHAGanJN",
  "key37": "5NygQHtU8Hjpgc39kE1mYaraBVfikkzMUizPUUYcQN4QNMbervME25Qw5HAhWhJzLXsv5nM1p1wrZ9cmr5W2TCjP",
  "key38": "3rU1V6zv6LkFRfPDn6UcSaaWk2qT7Mm7qjwmgxxTGsLQWzTgsoCor697Goo8h8jUCF8G6JvAWeF8cYBUeSQ96KCV",
  "key39": "5MxkH5MG41xGPgLzbQzWrMuWwhS87WyJg6gaSHGjG9pTdyDQTpfvnV5p94uBsBjpFwkHAAq98cSLcuwNQU8xk8SU"
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
