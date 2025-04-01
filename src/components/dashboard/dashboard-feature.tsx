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
    "3iQ9eeNZZgfKVaK79fq84spk6KqgcVX8L4Uot2eoTgntzjjX7hpp7rPfRe8ydDfs3Pb4xi65qNanNbVNuD1CW2Pz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KcA62ZWDxuVnMXfnDZ3McDfPc2zq84Zh8Wg9cHGjUBfsidqHR2XEHyhUFjhMXT8KW8JshYZfphqUx1yPyKB4CcA",
  "key1": "2wnfHPnyBBxkxaXjVkLjZ1R1nKU33q6vwVQ9SECene4sfnJJY3q4QHBPnsLU67ZJB7RxgMvo9aPZsB8Zfu7mFwEz",
  "key2": "JzkdejQHCTCWnGJYxZ7VA6VyPtG8LxS49v8riibrCV4n8cdNeYtnYWav4taKmjvkneBTL5mpwEBAmBWHc3Byq4E",
  "key3": "4tchhbNP8wgC8HJqiUkAokiRUgavotjLtmR3GKJdRkna4ZVitShkUkpWM4XLoFb8p5GdjHdPnVff1PKF2CbJek2W",
  "key4": "3P9dypRiXw9FrmGR7TmPyD1cQbngoMXU3d15suPdw7CFNuxEdBZp2U8YY6qAHSo3AtvG9PpQZqpUhKNxR661vbWK",
  "key5": "4XACjbZryiNd3jV2MJT53V4eGAfjC3tGHG8FKENYz8BQoSprRX4jdERWtaU9g6fzBVUbGcFcuMPkcZxoUfyiFXrp",
  "key6": "UcAifhoQmxNJQoFPZqB5LUX2WSFxnaMpeTSNVgXgAc2zyCyDup9YfXa5gUkceskPNfpygxGA2TaEQz1SFsVJnsY",
  "key7": "2djFxV1MwVm8qMauNoX5YNNTZD2cRRx49MEDnRKM1yTPrM7RZnbzWPaLF8ooTBQ95udMg3Bni21RaFLu7c1mcxGw",
  "key8": "4vEDMeZJQrrhwzgVX8PGF9T1qNdUKdE7gafUuqReFv82XGH9xhBngGM6enqWBSkfocSSBFXCSyZ1YYGEF6QvG6Nw",
  "key9": "PD7rruWRg7Uyzm1kK7zbJ4sVSvvbfTJZVE2576Sv4875U4grHhcFjbFLPJfxqddbKSie19DnKJ4sFXBpqtT3UHA",
  "key10": "5uNRkiZu4dnPDSWh5QRgY9rNYKFjn38MZ6mvL9TDKKnAaW7QSZfcfEzcEJ8VKL1h8V8htvSpGBJMF5UEoVsKxmWp",
  "key11": "2xab62QwzaXCKXAsWb8z3pp3th63d7Hvf3C8T4q6ZgxUxB8qkHdqrkkqWRUE5EVvQRVoPHboUmpngEnonsuaHuKo",
  "key12": "4xeCfumneYoU6nNswk6hpeTw4K5gzbuuA5SrXwr766AE4NUb4NKiweTM8Mckq6gfw3pvFupMbEyzvNvPYuPqaGHo",
  "key13": "KbZxSQEP6ckRM31HAWfAQCLNLANJ975X8z6CbcUAtFyb38cMyStHgFL3cX2T3fSs3w22ooyJ7ErK93S2pARSRLq",
  "key14": "m8W7RfZP8p62YqfD2wmSitUGcaE1RbXtMpoyqbKHdxs8qfXiUKRenyuMNLU8A3xB22fXbuNmE29NgpRRNkSWmsW",
  "key15": "3ejtEWGZurz2G8a6cL16KYEYxAQsUVND5nYv3XW33GMn7cBSNMCzH6JyznwzUj3eLyZiH6ZG38kxMHe53sLVQufA",
  "key16": "2oPde4DSo1V6ByqhjTEWCPpTQK8C1t49FZVTBYsCzdV9ehX8StRAMeqaewexgyDNemg4HN84Wj7aJ93g9Vcp8cSD",
  "key17": "2zjDRUf2rouxVxSoCcr8wQPSnuNL1RBtWMC2rF3GVDCD3XLj5SzrC9Qk91ormMB9wGptKDeRwFdHkGAQDkHtXCuB",
  "key18": "4aVHCsZ2Xg9pJGMx4EkzfetDo2J1K8JegvMNTw7v67xcxhwwH48yPzjWWigG9gZyqZB5aSo9WKdyNb6DtPKZSFyp",
  "key19": "3iDcGVsZAQ657c4ACBHk9Wz7mEYiQonswLQHC98uHnkWkzSpnFTmJqR2ePTcj9TnZi8NfWEdqKwwZ3ZeoW6wDdiJ",
  "key20": "56a6ggRfZtc8dcZVnwjY99uceVAqUpdy26aXgH9tzTx93fxACApCj7FizBf5WvyeguoxAKRtGCL2SqmGFb8SwKKU",
  "key21": "29cQE61gR4w2trmqkhonCcMacvzWtcamFcLNXoZrdBFK2czygqkFLfswW5tR87GfZpCajX9xgJugJgiRqdNBkFYC",
  "key22": "YTKPGD5zpaThnFoz96wJVToYzcxNWKDTPHuWp5DcNJwWwQ5QmNqT57ocV2hXhSdWoCyEoY24NCtm1MM3B1jN2Wn",
  "key23": "3Mg8beS1HrQM2TETY9F7jmCBbTgrycSZv2BM3MJn7uyhYntWLbbpyrCBauinh6DSvNy2SXu52hksGe14y48PuD7Q",
  "key24": "3eq41YTWfcWogjTQ6Sksv5P5hcUp2NKGE5xsYYLdRmcJ5ohHDZsBRZdYsuwUWNV7gfXqxRj84Dmg676hrXVt8rPH",
  "key25": "5gB7imVWR8PxVXVqwkHyJkB6j32pUyXWvu8ENd9UtqqLhYmyoizJU6mFirc6yCZjXgrAeURnUZccgz21eaBge5ZB",
  "key26": "36U8N5oagroQzBPS779RGMQPPdUuvT39wLM6UHWdrakJjrAdiDgGfSPUnZHH8v2rKyHdAjncWe93q4vRbNrmxwKh",
  "key27": "2kgnKWsZ5bZ9AVKTFWcwsB7yPUENUHqy4wVpoy9dphvVDtmcAjyvM6se8gXys74v2KN8pgeJYJ3SEYQZrqmeoLo2",
  "key28": "5cJYGMussD9zM77Mp64A1uoc2ZQ1tgisqaq6fucnnrAHPA8smjZUfme88Lxa1kNfHnhJtbochucnVW7dZmjD8r7c",
  "key29": "3Ly96HadVZXb7aQd5szvXCJCw38Vsy3e8pfGELoVU3TqQLR7QXUoMUeBxkDiKp9EJ5yufN6Xtir64kq2sLU5mfvX",
  "key30": "5yqdWbJ1c5jS5Upgf1ECbBtUauRquexB35vtU4RnzxLCW7ydDcrfEmc6Q7nm2bQ4QpAjJ57GhbBN1Nk1v3S7W7Uz",
  "key31": "MS92LYLRCjHxtg8SgGPkb38vwyWSWetZsE5aJhPcj5MamuTYeRJcpunoYXtBb8sbdgUBNLYKdvijt8YK3GF6E4F",
  "key32": "45K7xZ5pEmr9DQ2z5e4rouwTdcGCErvVnMiLwLwo6F7X1KcnU8jRKGwDtmZYR7NHDaZfntCaVp9v899hSvg4GpKW",
  "key33": "4HunHdTJSPpmjSB67d7GnaS5mZ3ixA63KKYTAvEmVQ2NQeZSHu3QsnhLhUcUvQTiszxyb6ZzPwDtr5iosdg5rNi4",
  "key34": "TiWE22BWJGWRMLvNaZd4w6i8R2mmXKMBE7ZprS8srCcvhg9p1LoxTKEWipXCY82H9d9w4iQToWkQCa1TBRe7yEB",
  "key35": "5ZjLtfQBhbgEPShJuUfswtY6QgqGtv4j1DvxdKr3ZoyTx9jhhoafzt3NSMmbtLUAZC2dq7KUBCzRH9cq5bfZobtc",
  "key36": "kJGtahbH78uhDiQV8ekEzRBsJFbuD7XPtBhoECpHpF92pAZPt7TPXpFVrD3Unep8ByfwGSEkvY1nLc33N5EPJQ8",
  "key37": "5Z2LcJzSUB4y18uu7ywY391nkgJ5amk2WG6ZFK57Fa6AZ4z5eARmic515i8uhk1LRPKk4Z657RvpzmfnrqqBC2i1",
  "key38": "3hzbizZdFsAxBoY63oVegUnd4krUv6d3xLG7irgXUZSfwt1EbTYM24RkHhhLcy2cgwjQ2jGFwQaf9JpnTyaupBnu",
  "key39": "4qxwr4b1yByMCefyXqhg75PkCotk93RYz6gKLeTZVijvMwN1MpGsnNqrGPfWuKxQh3DVqyXTpucJv9svnVDF877m",
  "key40": "43XyJpwFbCkTKtSfyFXGrQQbAy22UZmq7ELJduXQTfwA38tRrdqCsywYKnmtJqxKiZxorTdcnzpkZ8zbF8kssF8G",
  "key41": "NDPkwmSFUjekNy6b9oYqEvjHPzxcdcHBbRAM9tumcz7zrFbhnnnDTkoXuUZBLvZF4MEaLZK8Qzpym34chmdaPET",
  "key42": "36YTVrHmoL44XxWbf2xM6TeZ456viaDUr9Zw96kdPH2qHT1h8spwHxFV3fqrFCtKSU9Zfg7UWeYtRUDEBtpRpScw",
  "key43": "2M8Usj2UjS2w8uj4fqyvaRRgZqcd4XEmk8WVZ3HPvwveLGMGfbh138wNJhDsoD8upbUnyqf3jEC5fw8PF5P9bDXy",
  "key44": "59YonPxX6TAQzGF9CsxrRWXUpakgzrMUHpizLFw5hn86iLAEw77aPBMZ5oBVBxrwKymH9zi8mqA9NYCNsaZPec91",
  "key45": "3Zus2pigBxujvWhnaLjrRr7wv6bXBcxaGoTkhd1MSURNi1WBrvPmUY3TQgH8u8X8HHanUefYnpfcSrMTSud1iVMX",
  "key46": "4hoQovJwSGhQJei1HbdW9Xu2VUY6tnQaWzs7HJgUcjQxktuQsNaKxDBoTWoXMLifyk5pXHJy7WCPbmf88M6p2TP4",
  "key47": "2sjmx9WUwpUkKRiBu8Tm8UMXiqdjD3VcVm2AqL7eUUZJa6b6qUMYD583ScgPGBZH6BQ2W7upktmCuR3oXtYMz4tf"
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
