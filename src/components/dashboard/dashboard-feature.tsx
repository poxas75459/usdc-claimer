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
    "2eZwbMKVHtNFqkLXXEgga856iKxYVfvGD4ew9vPCvYPhxswC2ACt32Wb3TQKMPobpgbmr4sxJPLFsvRyoZiEdWG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iZ7JvofrmtFw6V8m1D5qJgmftX1kDYC8ytA7PcGaDoWhZtM6WE4Fc2dg5fnX9Poe3P62TTh5eLuT3MsEBkvEQGD",
  "key1": "2uVufVW6ni1YpMuQvEfFfAbtsttYS9TRELCwLgRu3i7xgz5LpWfY7R1cjroZfayL72CfwPvRgX35CjDoCooRuhZm",
  "key2": "jCiLDs6TnRdoq7PhsiF3Eeo2Ug5r2B7xmQF8y7VT5YQR83N9RK4ufZADrp8vnBH3xF36vU2gzLnHiWwMGufuoj4",
  "key3": "2EyJHTRq5RiZGh6YrxDUHAxn5ARMYmG9pTHzrHL54RkSVEVZrKnu5qrYeRab8q4YPxRzzREhmcRXkfT1MMUFofY7",
  "key4": "3XFJgAowfVwcx5Gxa1f6zzYZqJfgC4nYnzQv9b1YKSJpBuUPwDYx8nW8iidrYvWGncJDpjk8qfBNdatyj1zkL63R",
  "key5": "5gidkopmRdUXgk6E62QZJBRMuRJWM4EFSUiVsw8LzRLNGK82tS8zXim5QJBmrWv8vKrkpKNhrm7jL63dqu7YcXWC",
  "key6": "46p56NaECrpwyWZ7XtEoGbZUCGnTcuKALdtsdz2wrmS4Z6AU4LvVd7vbnTeU6o263YJKEHfvyg9wC8KojZxGz9xu",
  "key7": "5DqeA7S741ScjsKdJdvqa79YoULzdtx9qxZKdAEB52F9VnScZjmaJbR8uwxfC6kszxFdrvZjiWS7sshy614UyAaN",
  "key8": "4TueZqb88naH3LCFzwEEfAm2FGiEP3ds8aycjQGtF8NVmbyqi9JVxE7dB7BgGLbzxt9kKgxQy3D7m2F1s2QmwspV",
  "key9": "2uZftNCbukmCBfWb81beYFzXQL9syCL7zfLAK5Se62Jodhyj7db69mCPUq1yvcYJc1YXKZ8rd9ncoUCeMmKcxDAz",
  "key10": "44mkaMixZeeHRnAQkEH8gv9LocBpR3wETQxd6bS8jrqgRtBvZj3wJswnNAGJLhdfQWGYGCenDuBJLCeM9C5RtV1t",
  "key11": "43kUFYaPXxAvdFkDcQAvA1X6Tfwx9T8VbQfrL9o9S9xRk17g4LVHK4wMpWPWchMVx2hq6LAM9Q9htguxBbf7y6BZ",
  "key12": "4TYVpZ3guQuxWKt8RM64FwGvrpZfAG932Ws3yUwieq6sc4eENLjD8mZ21yBcHhURYD6aBXvaZGD18UYFjafJwz1F",
  "key13": "4EPpDKz2bZMs3iNaLDNSPhQCuVSdnNWXH2HWvYT9M33MbR29ZNuWkJq7nzAnbckpEPATFuocLG5c4YM6gBsN5ShL",
  "key14": "5BP29Ztr37baGe2cLEkPJQewQbChfzpSZ78UyjdtngRAoTVrQY2jemRyApaY6e2uqMik6DSYBJ3nWWFkbcFHJcHp",
  "key15": "2RcS2HwTpVzkwfisaZhxR5VsEd5KvuTbQ9n1mvGSz9xy6gz2UfgLkVeZvVMWxNrQ2B7NjxeB8L5HYJ6wAP26FnRH",
  "key16": "2qMLdoWoHbYx64UjxxmKCMKJHqWGUcUrYLd9iUy6eDYPAXTCLeSWyeuP36ihAW5pej2gwwYvvHQejVoxSGM1itSb",
  "key17": "3ZFeEuJ5PSDwrQRRC5fxh6YBsFKNdAZJ63wfjLFuLJPQTetDk1c8hjrGzBpEx3ekapCQKkGJWsjCtR5iJFt5iALc",
  "key18": "24zrm3arM967BPBNfkMQyxD7EuKGPUWKFNVUYdxBYVFy274Kur3P3xpGEaLuuAAPShXrBafzPxjXCdmCFgphG344",
  "key19": "3xJSVRQjBXuA5VSYP6i9oenizFzKVzkjBDHdzdxGPpxCB8bd3kY9gPUuRBk4EjdeoDD84J3RxzSrcvYAgCL9SBWy",
  "key20": "2YQU6ZwYkxcr5GnUj8NmuMSbU1x8Bac1ph8MSEYd6wVA51vnybnQoQovBRkhYnnWkqUSRhbLBJE2DSunKAwvXaYP",
  "key21": "EpMJ392yeuGg469wNBxZJWCc3QnWM1PeEGddPZaKK4XmKWSstN2WfZweebsvoQ3ehBa1CtGdvWybXouKc4kWWgA",
  "key22": "4SzjVJoZcmSLy2HuKFPyGxQQmitX3bV6ZWtVYeg9qZNQzfsu8KLfJFYP9KZXYRYuZcKeaGinXrDhRjnKqqsxob7V",
  "key23": "3oQnXv1WjAahVa9PEq25QFAxsEogK418sFXEei9QwBVzV5Zgo9WsjAGEj5kTGPVer8DqvBaZG7hsDH7VVX5W5B9F",
  "key24": "39LDAYqTmhxiaCgP4z8QXqEGd5AGtYJH8eX8UpQW7WEasbavi3FSk8cwTAQGqaXPjhMvmPfyHRCSdK96ZQnbc8hP",
  "key25": "dGeLj17WBUKgDqWonEcdy2ASd9UDVxPwkLR9JvvgKHHZBiYif27HfWwK2tRxFiDgFRZkC25RsS3QrQcGhSZjHKR",
  "key26": "32yNJcytVpLZSLCU8pr5VpbJTSbjzyRCjijMZiB5HD2JjHp4FgDTi95d6bU9KoSt2McLSoNDPA7SiJSQGjMwvhWy",
  "key27": "dR4hBm4QoE9ZXPWhvzCe5D2vnBZvsx7Xp14Yz3wkkvj8AjgJTcn2yoFArepaSuXkr1W56fonUKBWsCDoiMgoGtg",
  "key28": "4ocaDw5mTRKrBewyu4kw9NfdV4V6jEP4AAcyGEKQ5Yh1YRC18PJ3VvCHusndT7jPVegWYMc1zL7CETHBCgBafm2s",
  "key29": "2pDqy8FL3wkiU7TNZw8i1k6ywuhbqzxUztcwxNj23it69b5gLtVAtGmoHbkugNqtMaTxcRpgZnPYNNgpmBQreuht",
  "key30": "5qSchfL2qcqMNr5EKKYANp3gjE8MEgvqbmVgCkHZC419SCizhrAHvSNzBPgLNsZEF1zLbHf6m2K1go6wKKwghsGT",
  "key31": "2tuLhknP5j2BLjMUx5ad4FrhNHg1FUZrGX5K8JSHTSNWBoKK2ge9RbfWuqGwQfQxU1UsJkszSvGY2pg9YcT8M1i2",
  "key32": "2gCzD3jDBjfhvu9uZ7FbSDeFeHXvFfFMfKK4bG9yJ3SsnY35DGKWDqajXKCE1RrTz3bqUFiR83xkwFLyFFV16BA4",
  "key33": "45D1HNNNkPppUpuv2QRtY5GY8e6GGQKpRb34F832cbJCqzbEmAW3G3jHf1Q1NYw8eryYzHRpfSDtE1DxN3eAcy3h",
  "key34": "5nH55swk6DdUC7t1qfdGBEpPaiiaMmrR2oqQUeBnY7K5TJZq8RVytPU2v3H3Pek9cp1tv9kuk4yBorrby58rZs7z",
  "key35": "35pD6UmmtNybcbH9oxGbAPRH2hVD4vEM2NKpyi4tZw3yts9b9M56wZVrWnWQ72Du9gx6hHUQtGX4Gbnujyr6xyjR",
  "key36": "4yoHfekeN457W7yoSdUgy4Rmp53rn7iERjbemxTVtN81mKmPZgnaDVUAJsVFBzvDnGWiX6xtos2ZgW53wYEjqvAC",
  "key37": "3LTbGuugP388B9PGNBJbeExYJ6P7eNxYN9gj1fp2LfJDz1aMk4m9fiKnVVPDur5JH3P9GjWT5vKChW6tBURrSu1D",
  "key38": "5ukmGhyd1Ve44Bmp9EYno9SWnh4QsuHQJy98QstJS7soUCDXHAksYkNprxirM2KA96GR8zXr6q6E3xw8uhyFWS9J",
  "key39": "2NkyeM4s2CB2HWoqUS8PZXMtcc4FqNALagJjfjmDCTU39ggpCMcNKBHAuvMMNGDsMQF2Rc6NaQ2iTaiPdE1yvKzA",
  "key40": "4RBeQP8svcCx1pE2ifAUon1jpZkmUnywmyiRKBRmq9L9hLAsURKswQ5n5pRq4Q82tztUK17XAoEPzymA42EvGRmH",
  "key41": "kCgNkLL6bNEEQeNNUhF3qrHmJKzi9tH5iX1Lp7vToqx8DHMBjj3rLi9Vtve8aL64C9pZ77bK6Sb1arx6bCPDcct",
  "key42": "3thvVLsgf2dfm58NcLU4hqGaTWqqbmCLzhoaXhqYHeAF6ZsrFVaYNeVAMynrrxa2NsQgc18vzDCff3zjgfNy4ZYH",
  "key43": "3mpmSnStsZQ3Fcq5wrkoQySv81EXSx4ftibroVDXza4YUEQTjcc6iMYJWvAWt4JwwTYsYtcwoEkjdt996YCpVx3f"
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
