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
    "2PuA9zMG7LjkCtCQgtTYaBhHtC3mtbmGk77UyFziJmFczcFtK6Nkw1UrHGqh7vMvP4DHKaKNHzQaQvHneRXnzevo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y5gKwXhCsH1Tyd2NDD2zjTTxfJEwwgz6Mc6xvMbE7srQP1fh7ZTH3p1q4RmUtjHhFtt9ydtEYZcGhFPBZfzhWAn",
  "key1": "5f3zzJCvfnFtrd6PbE26vFPkYT7fvMnXAvo47FuoqPPXDYKdYQQCZrP64wmgPMWGAXQbBZaWcyWEP2RzJh6nPu54",
  "key2": "5jcUeoMwNTq3XW4ffgd3h6AZkeRnohnxzMJDx1URQWUc377px1tgJ7FZoPLqGXxsCL5AN9pvWNewEwrzhUH1CFcb",
  "key3": "39ygKjmDDXvWgY6gUL9fPV9QG4qN3C97XG4pZjHg7BoymEAmoNvpXidkjgxch4A9BfgCRLjuopvkjtaz2YSdWA4m",
  "key4": "2USnt6zLvEYmLLuYWHZH7kZgtLckrffx84EcTs5uthjT7ncvN4LG7ffHzH7FMfSPnVj8vsvMHXotK6grXF1dxauS",
  "key5": "2VKFJDqRprqMmvKxbNnwpqYNgfaydjRHXH9vKv19RK3SFF1xshtPDD97NXPcAcX9of4azveaNuFXFucstgJ8yVcW",
  "key6": "tHv4CvHA9fTofptk1EjBtWjWB5Gfqj7QLhvhPG8HTtkW2kjWrER7E9KispzshmBZtuct67HjXcwvHRMHzjYiGsQ",
  "key7": "5X1UPe2zvi85tVCWZuHRAxpVMxPgANajPbHsY8zaCQPpQSRBgE8mBHSHNffazVxysdTjRahzfJZzi8mGoYKaBTN5",
  "key8": "4HJSPVzcpex4fBM8hYmRKavwQCZoXgSLFn2Vfc1nS9q2gByXPMGbCViS6ctWzHymbEbPkVYh5LHA3CByKXMbum5V",
  "key9": "34QHxfsba86nR8EFDi4gkeZZun6dz6K1rza77pEeLZ6w6esNxBx6WgA6FdGwcG723ggicU1TvV5eJnVroSeiGx98",
  "key10": "2AcysS4NU11KzS74r4TGUkJjzrWi3pzJQyc2DabHLiNLU5o6Eee1ZeemKCcpujGsM2wGafkENdu5wBbXcGqTMnpq",
  "key11": "2zrawBYyifAAVBujZu2m2pQfw26yzP7p1XxY8Rt2tmCbiQeaEcfwJf3MhVuharRv26sh3aWnicdwtQeRetpLTcbF",
  "key12": "41uuD18PNEm5RdoMDGaj9HZn391W4hr7xEEePiFE5XEcjvb8h4d9WDPY2DDk8WYQFmtvxdtvGTWC5ixngbcKvgRU",
  "key13": "qisTSnkhHF6TLSGgZa8LgVg58HDrbt6us9GTBcFmRYsDh6FHd2ZMbrE6W95BW6Tf7KR32XDSLxUkndixcKnGGBQ",
  "key14": "2ArYcCWYMgwoVXMxwDiTCVBhQKJf4g4nkF974dRwvybkZufRvbeLFjMPuwgDvdxsh7k4cT6uUt4sQi5LQatV1SnP",
  "key15": "2oSThM9j3nYzAkxZqzUdmUeRpRMxPkM754F633X8JHhfBJoZ3GTVG4RE8xctGpDhRBCcw2dC5VmaowcPpWs6mWDD",
  "key16": "4KoN9kM42xCdRHskUXtJNUgzLMGoAS7uohZEKNGBnnY13RdZNzRQ3rLoxoXvuVe38Ro46EkmFt1dwgC5QkREMnYc",
  "key17": "2BJMbCrY2iLNahP3ubUfzdq2sjCPQ83u81iCRPBrJF4jLpCMyiPEru9pdV7B8sLUqUQ8X8YQEUkXfgttLBcUuCd9",
  "key18": "4qhxPsQaNs7svjj7xseBKMthUhJ5aKqJSk41oefkFHtdBGdHWoJ1hRMVZ3f9AeeK6h1acqGfwyZUWQQZzd3VP8Jj",
  "key19": "2FpQnpNjepVf7fWb5G3yJSkeVZN5DKYAnBwWojY2JviVUi4tz7icsZpZgQ41nrN1ERLKeqPr5HHRYNvPdYdLNHZx",
  "key20": "RkPLVsUQFXD1sg7w389u3wsV5JGJpbksmRN6wFqRtgnZUUjk9mB3XrbFDDgrLTHpUypyYozm4vSZU5Bq8BbUUWi",
  "key21": "2aTqcEFPnHpcnbHKkZhYqqd1sJkT8EzufYLLv7jxxeygHTY2EVBagKSnei5ayYc8kWzrSCb3CcPhxcN12vEynzAy",
  "key22": "MteUh6hgcPhcjqzwKULovnoN8sE3MA7NLMS15mXjST9H1iT8jrh4adprejRfWESWooup9GQr1jZUXx2kTFAGwFp",
  "key23": "xVEwSBYu4Md8SNLkeJTAx7rAacVjUfZT7H8nw5hJF91P42sHPGyKuTY1K5wm8KerfN7ZownJWH6oc3jQiJeGVng",
  "key24": "YVyZmTpifkzPHPz9sXoiGjdnG53EQpUEfY27qgZHaDKXvBRHRwEPrGNvygiMNVmo5EpvvKiUo82fkSPYdhjYfKE",
  "key25": "34vTkAsT8GfEANmzfMhJNHrWo15LAohhziCvfRamyw9rXCm7vVifmEFvcVCRBp5bepahTtYvBHeU67CpWoewxtdD",
  "key26": "3xSoWqRqrPePSpSwoxSwNisK6X84JsWaQSn78st55aV8XAgX92cwgTSAGBnc2mi7XzSVrN8KNWLe5zyunEMumCzZ",
  "key27": "3C45VCAX9YeKiCEZrmiDS2XTuZSFvL2Yv8o1s5eX5ig5T5AnvBsEt2ian1fGi9siAHUD1WowPJPvCkWqxx4sts8c",
  "key28": "9UcZdfELQKCqezXkMr9JDUQbft7ec8Dz6P26S2YXADSS79j1GMyPZyw467zg6ndMuoXiVPqmK1ujRvGrAteCbvz",
  "key29": "5vEB7MWATKu2KEJALzgWs49C9tpsLax4D6fFpGBzvz6ZKU3JftEFotnr9jtjMmUE1LYupe2bX6D9VmUH6CodkQZm",
  "key30": "2pVJjJmvSHaiGjSeEpgaANEfiqXWcTYXohsUvxjPD15tChpkseFiBFKGXuTtrw1R1HJchoAC2Ladg4CLivXU866k",
  "key31": "4C3g7B89gArTRBfUDwMgV1btFCcyPSBG1m8g9ShYF5jL6TQQFt3GZ3PkpuSFxp2rGwHDy6VwYy8BPotBpq8AfS79",
  "key32": "T2JwMtxamvBThE8AwGwidcvXaYgvdCbtNL8wCUJxDdGJN5KnNtkocRrSai1MPwK8aXPiadvrjzii2Z2pki3WLyR",
  "key33": "LgfzDHY13LbUQuvjhdvtvwuo3MykyXFjTTuGSrepVs8S8mLxRmvuQQsPbwYFMsz7x7Fz5waBUpuYnTADvEtFEyJ",
  "key34": "2uKuWGRbBgtgPn2kF7H4v97tsSs4dqeKVwqpEDmSoM6AWHAJ15dSz5Uj4N9kTUN2eG5GM3DmvhUj3Pp9wYthpKkF",
  "key35": "3ZBKTRqLxda1aitmdbc7Bb33XtTBx5HqQY5KLxktjRh3HfREr9fqF7rPKutEFahhBhJYqd9y4KYQmBwMXiJo7Dr2",
  "key36": "2mE2q7AzRaMKEFmAJn12jmiQxFyviWAaEGFaNrG4VuyCgHGEd4W8afEbzu4xF4diQZN4sref7LPqgX2jSsvySvpP",
  "key37": "3N9TGi4TFAAd43TeaDf9zd4XXqkw1zMW948aWerNAuzx9fLhyxDJbyMUsci99bNWs8cCsrNYGhE4UnDSTkTTNzV9",
  "key38": "4aFqKmHpbfnBMZ7QiLJ9GLE3DG7UJRFu6Bjeegggz8oUnmmfFSPyVe3u32evUp1wgfhRSKKsjfYxVcLPRb91bwMk",
  "key39": "4TK5nqdnukzgyvxn2vKvfMneBXuiBumMSB7RWegQpeFvf3ftDS4TwSdMLxNfooEFn1yU6ep4u8FqXoqLgCEEnY6e",
  "key40": "3z4YP6hpUm8QixR4vEN5uZLnSe36nJGsu2XTKnWr3PR5MxifXFSzHrUnNtXHvVVtQUAJ3LPHz3qUwqLQJpnLhuy6",
  "key41": "5LqA9FrcsMEvHPS5QQQaxGi9ht7cs6ADpjEoQUWb9abkUsQPHperf9QWH3Uuwt5zspF54AnV99zyooEw7ZoM9GnZ"
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
