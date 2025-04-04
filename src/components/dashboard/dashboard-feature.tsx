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
    "3dyiYwGNV9cxyDcjemhMN2WqMKjBgyyacDYSWSdWdFKPbewmmhAGfRrp5RLVVhrFZYVJUJ5oqAtf7Zkw1aB4m8Eb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TmFKMjv4QzLykCmVcBVujDWJFQu6xXYX7No4QqKtV4apwUbHMTyXF8wscnoAo4915VKKbeAZZR7CToHQ5yAkZ3",
  "key1": "3BdZY4zrNeiJqcLuEydk1bP2kc38pVrzMLwkLHmYhHUwSWSJKcdZiziwuqosxdhZJBCb8H63GY3TKDao23NF2Qtj",
  "key2": "343SancPhCHBjJuYCSrgUCR43A6rDx1Yt2eco7tieu4LSkBQxxqkxQRw5Jf16QS2QSLj5kuKpTvUb2EidaWwBirC",
  "key3": "5XYrJWrrKKjTsm4243ijvRoFLNiXCQnwbmpGg7qDxwL84eufmtPMSvxrKP3iQ1C8Bskgq8cbYJjc8rnAMNnXirZJ",
  "key4": "7AYHRYYJHM8YjoDLRpvHQZAop4j9Dy4MiGBigaBXEwvrHv1xTRfLwWNRchKJf7pBSCEaQUmKMbQAXb79v1cYrpn",
  "key5": "5JMU8HKGYTaeqewZhKui7tH3PvA91m1Rcp6i1AgJKmXg2Fgej4akB2d9zzd2MZzmxPPXiaUxVdCMQbvTw5WcjnP3",
  "key6": "2d8q8VfNe77TEaPzh6RwvHQyV6Lpp8TXVQ7Rf569SVeqGyy2kpr7C66yUuEut9FoFADpx77UvQZkURs5ehB9i1EG",
  "key7": "5dHuCb1qk3CrgXmXnkwHVnS1CNd5dfjVQPb4CDdZLVxdKmLEfR5MxXcteJjtvQQzn81onnnHq3EQGvQLDtZVyauz",
  "key8": "5m1XAMZkcuycTbRwLCN4QbTJPSBQYb5dfSiHmWNgX5ZAUNiLGafBJiPo7eQE6bGvAvPLpy35pCUmvLej1zVoE8vu",
  "key9": "5j6PZmV8JjANKMRP3VJJzN59ZtEiP2zqPbVUPTobmfAWqHd6B1iP9e88iGUpAVyBBKx9f7pTf2piWr79TPzEQGJn",
  "key10": "3DLad4ARUEZVM5gabUWFUKVMFs4Y61wktf7Byc8Y5ybJYgJ78WjDpVetNkGffebfDJrD7GUKjJPzHVsv5tm7eB28",
  "key11": "65nDq7HBoE72P2WtpyCcx8NUC68SbBcHwP24nxVvokCq3f4BqqAbvpJTyPTwV4EDnrwu6gT9nJWXvQtCBPPnnz6v",
  "key12": "48o1fFQh3x9L2K9Nd8BUEade1Gy3RfLZb9FpsLXCqvrou4mCQv5WZnS6qHnpurfa8ZXM9zbskv7cZNoT8hX9uTTK",
  "key13": "2PgTQDKZ9KEDDfGnKPxrydmdoSZn4Ue7CwwTYLfNpqJoSHYAoXLeBt3HkBa6UUaDJk6t3shrmPTex8cRfH18ksVf",
  "key14": "2e6eSz53othYcuYJUjtecFqVEsx38d7g1rq7sGT5VooBWPy72N7xCEwix34hbsdHY2Vu5q3ktrnjS9dcSGWgRvam",
  "key15": "5iGTbrbjeLZTYXuBumExrWmRd69TvXAy6tBzMH4qrG8uTZpH23yu1AiJFjPfh5eGCZsPATF1QSkXzSzgxaFyPrfe",
  "key16": "3QATVvQ78FrswVZdxMge2YSUJTP7CJFYdotZkaP1BCbcuPx6f5iTEvG3psMpvxYjrZTNNdBZG3tFPPHwXmnSVNs6",
  "key17": "PB1qNapgjndzQXaTUnW62JD6zrYZ54K9mWLfWUZcK2xSGp9KXRw2WTVP75x1aCvj5jqjGWhJerZBtMtUGAAmYkZ",
  "key18": "3LHJYfwS8YeLFVNTeusZ9BnPp2E5naJXiDjy55k9KzNp79YwUCE8xeT2Zv4Y9G3UTA9WZGbWCZiYVszSUKJTvbVB",
  "key19": "DoPPFLEMBz88qBjt6UrNdzpEzkY3QPqKjqDmhJCBv9GDVNhHLpiRrKcLbevrMEuL16eCQy5RxCiXaJ27pZxr8az",
  "key20": "2KaHEMvfUH1aE7eMjCZ3qjrQTA6LKLg4SP3N16Ctrq6bcawTVCHf833sxN6ei9Hot2ndAxQhs8WnLaKQZ2VXKQpy",
  "key21": "2om5TiktkwqPLgpL6GkM9tizaf2MYB4uju5cdwnA7KNmjoAnnuLBQVzqx9QMh6vwgHXvE2Eva6EDmxAkwn194SjE",
  "key22": "576ys4zys33fyhndjp34vfpR5DhSXHqqs32vJhnwjcosmKSYvNpha85dPhWjNN43dt6MGZreBWXLxyg16zUBSH56",
  "key23": "6QD29jqSLQRpCKouV3jBKhbjouTF6udtnPCPegYJiH38Wy2mLdrmUS2ebFgeiWHU5hevL9xM1jfAJZKTMLjqBVy",
  "key24": "63CgzQQ2qWCDTC7FihS8cCShbDo6cm94A4i46RWRVkUmpV5LsiYUJvfrKfHHwPZuad45tbicVBi2DPh9bNGEUKBy",
  "key25": "2kyDzk87vX6V49HtfZBUw2cc8xxDnmfoG3JNwNVry9yWRe4ogK3W2baHsPjBizpjqQf1amabfn5RwKtNK7RTMu5F",
  "key26": "3gvyZzfZvBA4hgG2TNgakX1UKxoVNyCVoJ1uGu9XPBMRSQeKA8aT55ocagjSQA3xzcUHe7gfRHqmBoPzid6Pr1VV",
  "key27": "5igvdgridrkYStu55t2aYc9GuS5J7GezxCc13eyiLFS1VF1oibdF4RGQA5UV4yBLuz6rPd2mCrAx5gyXTY9Zb6bq",
  "key28": "5Ws5TfoCYjLTPQAB6GZsnnMHSxKKqi8BYypRMHbARzCKpvo2Sco91N6cV6pj98GVch18NDhQq6LLreurW7Y2NiDb",
  "key29": "5aJrK6hmQo864ERk8zETHvnZCW1VDzyWBuNVZsHZerzUAqRbU2Yrd52kCqWdrmFy3nUuwsGY6a6bjWArt72dJ6og",
  "key30": "5QgyGnNrJNPe9jnE2ZYBD8sPQn9tUkFzsBPXWQJoCJxFUDzGAadA6drv7AruxWTCAxgLYgbMrGzkgkqHEWCVfitY",
  "key31": "2M6m5bkUksCdemXgZ1CQP7w8iKEipaa5L3nJX3XDQkBgcCoVToxszFY6iBvJgkoQX1SsC9D4MoAaMKmiFzCWh7LP",
  "key32": "4a3737kW1x3bSxFsGmswMcdd2rLoAPbw9R79CmWnZ6HWdUFCAkPFV1hMcNNXkWPqVtsetSq5WCKzQs9SDaAXWQLN",
  "key33": "24xc56mXm7w1b6VuJCdUUHmE4m2ye1ojANVQvptmZqQ7PVG439WqGydzC2sxfggTTADf5exBwEhipuyVooZjDa8e",
  "key34": "3aozt1SLj8sWjwtdRvAFVQXREq9h9XHVrWEAK99WiW2GiFsKUTRjs171vJy1Aw84pxwoRPzSHvFQLzt4ZG1AD6Bz",
  "key35": "5YNadaFiCLj89yfHPteLmHVxmpfYaWTnVaPR9jojMK3rNMCBxNFcxGm9zipb1HGDpCkxbnZ4Z5a7ZJLCsBRcESdh",
  "key36": "2ykZZuWxxyWG9qvhkeJqUJ7NJ9QbgGacnefFwsTMCFJENBr64ebJb36pv4GNgmwGQP5TieLCMx5x7zdoK6HUpzEz",
  "key37": "41fAPhnA1hqAoNXVN64vxMeWPnPehMjegBu87C8LBxdp41dzSrJwSWTdY4U95xf2LxRmTz5qvMpX8q59sVzdsXYs",
  "key38": "24APcnKRznJiCW4mGqZQW1dSL5g2Nz8otymnj4ZyF1pSdGNRzXF9nXpP9Ly8x42UnbSJ18aWmmpwe8j5LavMugEh",
  "key39": "4iu6enNYez2LCFxDRth3wQYAmka7Zq279C46PvLGfR448nDV1rXJ9sMihBoKJPern7NhoqVZ9NRHvGMuD5ySAgXG",
  "key40": "3jGt12t2DGzAcUSLq5Bu1ZwSL1YSzq8V6tBAgTR4TtPRf8Bia3Db3FoYHvckameBDovAQ7hN5fzCSW7z8vj6j39A",
  "key41": "4GWH1PnxnL4rNC3J7V3CQmGyXchWyWVDJBifn8kLaSXZDMVrVuz9r9goP1NaN9BsDHCGFTX29wV9uSXA4usX9TiB",
  "key42": "3M1CY49Ai1EDEUNehhHutkjL7DetVBTpQ5K1SEx8gM8JyiXLMxAYeagkmiivnVxeEHpUPLYaZ4HbQhCNuYbRR52k",
  "key43": "8G2UAM88opWkh3GptKNDG56pZUtnBgqQGm1aEehXrMXih3K4CVN44FeoBdTeZ5om8yYs23Nw7obQhy7HwHrk6G9",
  "key44": "4Thx72rGrHqU84htm2PQTBR4wwQjYPpsLXbphW32ngGsRYUjTANce7Qph242ApVMG4YPaB8TaALW5HBnStEagPVM"
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
