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
    "3688FtCWQRz2KTc7y91uRzYzq7paXA38SfuqBcj7rMXTAuMDC8CgLuwcDMEp9Hu5wvocMY4bFxQs3VBGWkaZWyuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fVjyfV5RYmQNBbS7ErJvfxfmHwQKvQoMxVAB9pHC3PfWVkVYNsVN45MKzJh8Z4yGSQytWJeER2HAk7edZNdGvw2",
  "key1": "cup2FryRYRrNP862pMgPmpM5ueEWGd7RFoJMwD5Zgpg7EQgKZwk1JGNN477ogyZm87nZgmD7CJ8upMTd6SoHDXd",
  "key2": "DkUW8fhsfdmxDPzT6aVNiW4wNb7jjd9ADictPUHCNSrN3HRjDYHug3LFpyHShJfFtrdtK7KmwL1Yf8DeDqhvKcv",
  "key3": "2Pp8ZEfQ9PXskMeNFgQeHX5FoN9uiSoC5cAGj6w6iRutiPoiQ98H2yt4pdnpfEhLyeL5JVqeAnniXMKvb3n2hx84",
  "key4": "kgNL9fjWRXCRgCW3fFm6pTf8iw6m4vzBLmbUEtvhDwDVdUc6Pe91hKPzqUjVHviqpo8unKSyU8bDWdqvijm7mXC",
  "key5": "5ciSrZkHXZVLQfRjHYs35DeaK3HZ4KWxLERC2T5BPV2AGznaDrtYji5hanPtfzaqg6RWakzAKtxBeXuRtVGfYCJo",
  "key6": "2RSLj8cDVPADfz4WBThv23KRmgiB36KcysxnBqRoiWWFVazJXbnuiapqiezifSw1Qrc5n1NqAM6go56x3stuPkdA",
  "key7": "3jkVDT4Yv5Kuvouq2YqURdxXXywVEMbLwuCz3MjYHLtpe86EaQJsySG7Wc95ozHZ8SEu4ZoDbZJcoXmqWSEYqGSr",
  "key8": "2huHcjexNiveYLMmsTuRLtEsCy4iZL8gwS5N2FrEjr49z7DA2LAWk4zFE28Pq3ggkHjEhyjoxwgdTUzZSP3sDSA3",
  "key9": "3K1XMVmWRYen8Y8ngjzpLj7uxwVVjz7QhiPqUz52PGTTpQ1NeWbTw7MfneHeGZ1pfQKxuvVf1Jwu8s1Du9iq4Ufz",
  "key10": "28ws9LcAgGwCMraykjMBeSCkFXv17h2vV2ciiY9yqCHEwVxcMeYzWedGewjHWP48j68SrampPYvUEu7dVBGn9YPC",
  "key11": "wv9gczafdXED3kG4j5139X2pLbsUqzqPgMd5kTzk7m8vwUbT7kpk8uHjk33ms6fzvrzCPmJnjxQy7ffyMqx5UiG",
  "key12": "AVJELoTx3korPbq982L3rdET5zo4BxLUMgpHPd1MRt4mudavgawWhxLyYyeCfT8gnoRxzhBFrn2Lkg2M4ZhBGTy",
  "key13": "24mDpDirQtpD145d4uLYpqvQKbX6X1SesajFHqpFpRFVVeVDqqyiHwvU9z5uUTfcPVbTrtGrE2tm1Trbt1pbj4iC",
  "key14": "4ZXiSvuCUjCEHbgx8knDaU3gpVLqnHQVpoFEbwcBjeTk5kDTxzxafgdrUX5JPZ7tzrhVczsgXFo2hdQsiCCuHef5",
  "key15": "5KpEbg8iYjEUphW4UhAwakUzz4w8VzwRk2uvypQGVL4f9Brwww1R2cbDknCLkdc43danbjkuDbbcQ2JUx6fphuEn",
  "key16": "2qvvuTUQ4tRPEzCh2ngcRNVx8Ph16qyCjNXZBhkXNcRnJwsGsY3PdAnDhEnM5mHeW9i4epvv4NMzxMSuDnVBJXpU",
  "key17": "2T9HFgwhgCwJwXY8MaRyPENZ9xnjpub6ArunDbhf7DRHBhoi2vfqSXFjt4G8iQVDAz1SXY4gGNPjhoR19e77icDD",
  "key18": "59k4YuPeKmqapAkqaU8f13Hk1Q3oNq8qoc8qwisv84Z8TkT2rT5rs7gohRVdCLXevm4mpwvn3ZHLDjEVkLKGwTys",
  "key19": "vorbjGVpLwY3mnpFSWKBwuC7HK8Pk2eh2xrtT8XLEYShMdj7eGmbdZ1RYTxB1QrWSGa9HfPCMDk2wRTdo4KbHMZ",
  "key20": "5HekNvkC59TZ2qybN5Jn3ioZpw4UMaw25WxDuqJBvefco3nHxa2x2ppWAT1pf27w9ni7UMHR7XQxKoE9FeB8Rnkz",
  "key21": "5wnzfKhjzFXxqYG6o14LPsejYsyRB2BSutpjntitmhZT8N8C2NPwvPw7b5zH6N1rC1NJ2Ev8KEf3uk7BBr9gt91y",
  "key22": "4hGgWejwWPHjaZnWxSSp5DQbWrvvzCTgnSEfMFzm8BKgryZDKD9PiMuSf8rpVjD31zQr7MqGvgUd7RoWkb6nyWY8",
  "key23": "2ci1n4R4mgA41nWce3hJB2kjd7FMnNRDpsFS4W4N2K35q4ySfYLnC8Fwsd9WYNg6Z1GT3emkTDATy82NGLJKuebY",
  "key24": "2WqtyHK9c9Dug8CnyicnBQjSPeS2NPqLb1rnhCG1QC2L5HVJKvFNQ2EVGBYgSUCfB5pytp6Bzo3WxkM3cG5Lecfg",
  "key25": "3cNV39rM8RGXBwLm5cBD3H4pGX2o4V2BYGUpUp9Qizx2D8FhqoD3XrbfTFn8Gi124TZMAQxRNG65S1dvvzDeuFoK",
  "key26": "3adW36VrZs9n27Qcwy2LzW2wm6MeYsKnXzB13Z4xrCPhLbDmLqAU2wKfKC7RnSMNibbYCxceoaQGSLgkUBFVsPjg",
  "key27": "3iDKfCSHBTwduU37xVzJDbGN17xpUxzfHEioVZaQtviGyhdSNuYpkQHVjAYXakwFKKvedZGNc8ydUtBqr47jNndb",
  "key28": "667fJHUBMZjss67dUTGCfpQfT2GWT5LEF1FDGdzedEVXa5PerUmBwsV92K5k9FNdjDPA6qpHAagFnZToVhaUxsh",
  "key29": "2CoondhMq3KReYzDGHtDmiuqABJug22SAGPPVLh8wYEeBo8GuTu2vgrVLLp9FKt8wDcaRcmbJyxv8U3Bd6PKGdpP",
  "key30": "4srFcJo4nEE9vkSKyAnAZU5LKc8LBUkVMxXKKQHJsFmhKboN3CD2QfAi1Y9oJQeKCZV1hQFxrZ1WTRLDVyBqMvGK",
  "key31": "35Td5i7oeKK9SGLt8rm3ZxZeaFHrs66gUd1kMLfgHSXoRVRhFYx5KN2HKLjoA2ahGYuuYYKQ74FyQD9hsBMPhUwp",
  "key32": "5zXS1yi2wEsqmBozh8nXj7B74H67b3uhHjV9RpjRxbdsgrrsY2JWtp8stHkgEZTzsKDYNDtZj7oFLbYrcq9JXDB5",
  "key33": "2Di7UjZFs5atg2rk4kLCVA6FvH1WosR8EsERuHymCwSW8xWDhdLEMwExYHn8KGT4zvkGYoa6UNJdu9BHeCFuBodm",
  "key34": "2ZjwossRG9ryXmsk5ht9WV6mUSBM3dbAZ13C3wffEnGYxSZMwWX4TvR5dzTFRXj93W4vqwSok1TyQEXBofpEeG84",
  "key35": "HVyeXQ8jZEU3ixKWWGHFmbTYAEnAspigpAV3A7wnPAik6qdxa67oGHUf4SJhNpKUcYfdYU3ggJ6xY9mqQL992Rk",
  "key36": "45DAss1ZUB7HSzAiegK6xEaJpJKsec3Da8epmyMQhSR1BQKUQrUNBc1mbUqQ5vSYAqHCux5UTNPZqfRy6DQBUxDD",
  "key37": "5ekDHLqbw9JVHaSrr23LYC8fVAqRE2pg7E6A48zP1oTxTWwGJhkR4qv6kKCgKwjHQQ2RVy92eDqP5fM3TW84ZMWb",
  "key38": "3jALnME2VV34MLzBQwF3ESZxPbtjXChkXAjbU7uLoyZkcwtGSqjDwXcw63g27B9KBinbAb8Y6ZzUeQyTd7VW8cWP",
  "key39": "WuoR8DCPztyFYbVLaK2G4M9FkXcKoXc6H68o8JXeFtGzZNku1p86C6bcW9tUsaJeNiVSyFVHkYyv4XcY5YWVJpY",
  "key40": "1BkoTtg4oshqYb5Q76RQcwakmD1HCe9KP7iHK1Tyj2G3T882YGsKtikQNePZToiyciJm76pH15Ybc94r9n9kY3g",
  "key41": "3yCjV93oVs1k29pk9nbZQLoExeC1PZRtdxhMCtcrNWABFbyNCBCv2YHMEgD5wypdFYPxFr2ieMiVwUaehbApmDmJ",
  "key42": "3dBqgGJPGuwHaD9ym7LfJatUnk5bfZ1zjydcif8R1doEF5cWPyr9XASByzvRMmZY11T5MZPpmZJnUJJnzsXcbt11",
  "key43": "3UeEUVyCF73FcnjogCVfPimdsRAnfPVwgUScmF5EcHiVfA17oMWt8HdyUe5df28ashD6r3Gks7cTU4yQAsrByXuk",
  "key44": "3QbntbEfrTV2Xu5uArDiJtTcNahwwkRW6ePSQeKSyG41Q4C8CxitXUo4tAJqV5yyHSH1jj4cCULzVbpCUZrxCDHV",
  "key45": "tG5Dm3N4ep5FRtgpTDwKDVKd5mE7pd8q7XrCzoey7rNLRQp6xxzHLp7BYbtRrww3CtQgL8BS9x78y4np8N89HfD",
  "key46": "3NDcujTZ9cnbwSWizLpcQ1rWCynSM7KJrRivGbgDer6zaN4NxAvFztPQD9pSrVzZxfEoJptRUze4qXhZVL4yXiXW",
  "key47": "21m4VyCRsNPaUacRzxenxqQ2T1E7YK3RhfPtRSXKrjnS4HtvhNwLuSWuVShZzS4eK7CMXt1sqcpY2emGQbJJGafF",
  "key48": "2BJYTuaJ75rDbQ5QCXrC7EFNEezM6GZKGwPiDpYGRP4Yy1nurXQL2r5fzynp1YwhmJvrhpLvPcNgbgfyZaw8HoHD",
  "key49": "QszYnBPzob1vtetJq86RzApJftwD1rGF7itw64FvFuwWfxZsfi9nEkSCS4pXZR5eHEW7Moh6kxavSMXMWoe8o44"
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
