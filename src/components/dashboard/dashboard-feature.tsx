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
    "2ySbtjd2BdgGTVmvEFwHKJRWZQA2hPQeNBLapuaBftCg8qtH11XZ1gDj74zYgdhpPzpNxMmm8xCR87FZ4RyaN2Bj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ooKnncitx68Gv3vV5y6J1juvixpD3phjLfnkJeKkUMLFNCky4LM3N27tPxunee496xCj4U5Gu3zcZDX9s9Kd3h6",
  "key1": "5iLfoSR3cnwGELy5Mq2xfA7aEk6d8QHLqyctaTRMWZrBJg8c1d5aMfV69gHLYpjpDHujr99initFkcxMeH7r5WS5",
  "key2": "62mCP8iwzkjxiEfxHq3expGiZ75KenzAEc3r4gMF9AhNNckVLt8myUEhs3qf5RGTmJi1vYa4hum1DuiHydVf9kX2",
  "key3": "JyJBerVMSN9NGrdeWbBAdKo9B5QLYE3BQ2QbrgMAZz5wjYL667PNHzLFffe3Da59bNBdYU8fNhehLUuMtz9hQVf",
  "key4": "isoHm3wVwggUASMseXLUr2aeG3pKmfVo1NMuKYJb1Grb7nm6kSykVqzC6EDwXiNbSD7Y3xPzCgRyuGuQmHtXpQW",
  "key5": "3u7JFtE92JSAoLj6PrLgngzj4udKDGxU3KtDJThUrxp51vnhK4UjyaugxFbquoSYWLEyqFn7jyPMR8MLm5CjDKvk",
  "key6": "5EKXzLVMHcuZrAbCHfVQy6f5DiAK7ewmGey2UR7Jp4RJdout4taXhgE28amyVbHrBhAFoMn2KXo6zQZynaXn2caL",
  "key7": "5q9wHopm5aMJ2wWore2BLobqE6vxJidhR5L6MxQz29n1kmQ9UUaxXAkfQ4YwNvLNFvhy6TPzYE1782XYhQsjay8T",
  "key8": "3Wn4NqHr7yjVTVxJBdcvw6KKYGFRZP6aYYztLVeqqxVDS9dmVrgvhX95Bm9w8HJwQNWz2zui4E2q3yjR7mp2MYmf",
  "key9": "3G2m5GmBxYjpGcju2mcH2eguYzXmG2HJGdzHiyXxB259LvtFuHqHFcGMD9gUqiSPZnBLNzqShjBT9o5SZAqyAov8",
  "key10": "2svTuuRFvtk6iWFtwo12M3iQiLVa3w2gN4caKSuZXJEpq4QHAJSPjPdSHGzUXtD6ngHA7H9ybmUsnfSgR7Lca48T",
  "key11": "5uwfrSaaGA4Xmyfdfbuh9if2TECtYWMueCScVhA5G6EcttCQ99L9NX2BszmhqGYLdenxHLCN8znUGF8rBmiPP8xw",
  "key12": "2V1Cdd9AffNsMT3YEGB78NfbhNgJAHSLK3wyBkqPjkkkgXpsobCS6N8B82TbEuUSHutzLiTjhSuAfjJ5XifHUFZR",
  "key13": "3J3Ui67Hws83sizzK53Km5FpsnL2KfosmpUnXgUAwYKHvEfSSL9fRGsBtcFaWZ3q7RZeJsz54To6E5vbBoXEQUgp",
  "key14": "4kMKeFBzDqokpzcUBeWCWBRhZCeb5XmUqNdgmdp6VA9eE1NyeQS2QETJLQkhods7yCTKLWzLjZvsvDCeHDGbP1fU",
  "key15": "37Hue878V5DEueoLATYFhdEPARZse6oM6Hbbza6rAsvk27kJcE3boEQh4zQswSjWKrmcu8Uq34xxkY3TLY8QXy74",
  "key16": "24L5FhLDQiTc7yopdjhmBp4gUaMvYCbYWXDPXEgqg4d2pyJFkMix4hXkbmmbKCqaQep53o2AU1mveRrm4SsT6fMT",
  "key17": "2RyPPKx5hauGcDThnqJMeWpF74oW75kuDE1wHS4hv2viYuF1Wc87SYUftXhK3rJQ3hgZTLRjKgpXgmNouWdQNRcx",
  "key18": "4vCifKWA8KDPL64NtjoNodM5rzbGnbvskpD8qPV7R1XNaXBgYXkSZNRzJQVqm1fh3hBMZ3LRz66m88ViuiXbvnbM",
  "key19": "2NuNYt2dpFCKJCpvsCqkRWm6FnHiNNqfWQFvNRGXK6gK4dHX6nrdJhyCpKmgg3zuYBvKM6MYr4g7tmE4VtDYw6UH",
  "key20": "2MTYXsZhy4bUfCrTzgE5KLTu7Jm2wEoXDzDQdEejhyjXDVmVvUQ18tqb4QFNykaNm3CxX5wgXaPidNdyUT8A7T9L",
  "key21": "4ZQnvHpS4mzZBC3no9WV27bwdXgCnmCMLoXfmFw8B2E7FadwRdVZHdxfjrjEiPChz9XZKHkhN6Yus5NXHCHMkod7",
  "key22": "25Dz9ShzvJGtkUqXC2zBYvvrEkxnSjhEdwASpzpLszku9YZ29CTKQjYnLNxwZwEa7QAPNpK7MFj4yBbwftAVUapA",
  "key23": "5qx76dJ6GMoUwgf3YfcvXWdtoSkBaMkK7qZGgtpNR3S2kZQyDpy6MCGgYqkL1XK3eUsTcemxUyu5ieSm9R5bfVjT",
  "key24": "cBfiyFbWdoaoThfBnwCzrPauec9kk4ATn1T5nYeAvLnhLKrDQCaaJ2k7tf4rFCT9vvefCPGKseCaDXYQRtKZ8TT",
  "key25": "4HdQBwcNFcJZb9JuYkztmYfqkPS9ZAung8CBcvoPZ1tGwGNtmiUp76ZYDsQ4gMFsctXC2XoxDP6G5afonsQjkw5q",
  "key26": "3tqfjyU9P8bF3s2taXZEpLJgTzFJPr4JkvtcL9rF74P1qdjBu27p1Ugcr7QKWqRZEMLJM3VAwWirC7sfV4ZKs7cK",
  "key27": "2vgX1xt1fLCchEGLfLkp52dJhiy4XptayKtq5fu57pQhg8awXk2VJJwqujbT5HSW4RHjEVSNHFgxSWMHZ2jsViKv",
  "key28": "5A2XGvZNQKTABxU3hB44sLk1u3TqwYuUYkeTBjECMzaSVgKxFxH2wrraC3oQK2spbPTsN3YA2UfR9drNCo6opYZv",
  "key29": "QKmRiuhnSWVcMJEiwe2dAuHczZyPFkubSWiZ6aj6zNs4xsX9RtNxExDwR7BuJoGpTS9Mc4FLwEtUUQG1YGn5ybL",
  "key30": "63jH8w4K5rhfTqBKNnLjL5QMTidgiWx3zcXBgMtuKjvsZyqV7XBZPfEpHwQgf57XNeHxTCdTsM7nScYVm5HK4cR2",
  "key31": "5szHMhfrNufspFT6fBqwssT2adxvJxgU75oFmfR1DSHzAjB133QB59ysiS9kh7BddnmdioTjUZ4m3sZhVEaNsg3Z",
  "key32": "56YxmBBBYeYa7UDFsAk3nDk7HZt4i1NR7JJLbvjNrVGtWsq7VQ8ArXZuHsJAM9SJSmgzbzAwBYbfUFQEpg1JeGJo",
  "key33": "67p6uBLVr6WZgAZbxb2r234dHmxCWWYCKjw39N9ENmaqiQH4taXJLo85VAdd3WCeKWfUCdaK31JbDviF1vwwEVd4",
  "key34": "YVNJwkSpjBVeqeWVebrCNA9kKYGNBYRPLBroh97tEhw2uXm4f5FN81ZyLNf9YLDkFgug7wkGis8dYmX862i1Df1",
  "key35": "2AjCV5SyoegWTs4r8qiikArZTave7HiN7AYAg4cCKMqB2PNsAobrkLssvXAeJXdFv91Zow79HLjVg9CSQNjMTq32",
  "key36": "3SJxUYNCzYaYbnLQxVXB5qKRrLT4MJcbkkMJLPZwGwVu7mDErCbn6A7xqP9odCkaZEGNcZ1hmGjQm9w42bZFgexM",
  "key37": "2YiZrSx8JbEThKdzMSK1nN65pLUKB9oCnBbr44rz8c1Kr1jAZWv7LtQErxRwn5gi2ZNi1KFgf8Pv5XRgbaQWboqn",
  "key38": "V35fptQ22EAQG6LkTRDJZUDpVBUJK5PUkJhwgwj1FPtCzZ9ajT6sXLv933dLeuzWExbV4kmpcn67UjNJWorS1Yz",
  "key39": "4L4eeorWWHfgo4hdomLXJchXYv6hyiVBn2urn54MNtQrvbTovz5Mm1tYrrqfgHEWEqPNgw2JJ7Ht9sd47B2r5aHG",
  "key40": "2AHzASohhEabgic2EYBTc5FHa4VJjPtKET1DgUwCcKy6ArKNnEztH8J5H6aojbYVPgT5G4KJc8dtVZbj33gXbb7N"
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
