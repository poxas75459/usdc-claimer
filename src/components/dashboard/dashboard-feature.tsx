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
    "2Gw27L1VXKpdUkActoa5QUzrCzk6Ky8ZQprtVXQBongwC9RjsBprmuapseDu2eZT9Y3yNR5GNrUE7peu5TUBTj2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cfh2mNETx2trqyCFGx1xzS2Cv1P26Mu5ffbMq2xiSgnjU8frghj9W2cDaErJQd7jUbx5ELaZg4HhExsnUBZjWMz",
  "key1": "3ozreRpkH5eTxfEfWyNVGz38rBJDWjvh4VXnwbMLUiGNneUnJJiTYWz6y4UejgrGSrGsqvi6rfA3HHDkPW2CHC64",
  "key2": "5QUaLwGZ8TTCey9utX7c3tjxEdy8cMUrbMtwQCcWB9FgsaY63kujZgc51aeQTrn8a5pSyv7i6SNChy9U7SvNCX7A",
  "key3": "4sb1rWxV511PLnXR3q786UQSvKEZ6WoLh3dpGVuxzyVtdeLmhARPVzW8mjRTtM8hnez7uqLFerWEzT7wSNBSpFhz",
  "key4": "47vQKbycFXVi8GAu2XQwTAMH4ybyeiuNUNLG5JtgktgJeamLaXmvG2dKoTfsnPWQcT3my2Q6KVexp2YxRq1PMExb",
  "key5": "27qHzP1hmgLYRYhefFVE87Zg3JLLMHvfyk6kCksZub2NyebAcdRHTkeP85NB45mdrjtPmxqqyKn94pADAdNSG1bp",
  "key6": "5VWzZ4xR98PxnygN7uGy3admkPXfPHjgqZE6XiSzXqGZzv2HJjZgjztxV1huNaBa5GPLoZpC51DMQkjZP6LuGeMP",
  "key7": "SP2CzaR6uekfnt8N4JorjTiFbs24B3UCwcnVqchNJUSvZa928FYw81iLkigNkotKDvHF8pDDN7TCptAwdLbttiL",
  "key8": "RmxoLgjoig8213wJKWLCUSSx9DTqYi23ydioqTkjcZQ5asPVs9GPBkG8ut1C82P4oRRrr4eTAVbTE2uWgEVBnBQ",
  "key9": "5CFTzkCtDztmbEjLwEwPrHvPKbw4Fqsaiet4nys63qJ24QHZG93pQgwX2n7agDojNMpBjVGGA95C68BoGM7VBLro",
  "key10": "kdfCmEPFuG1VLNE6SfTK1TmF1LvEgrnQD6Uu4BsJEkrymoJwKHpEZjHCwzpYmVTEnh6JSCWBW92fQDDE7kWcbBa",
  "key11": "YWA2afvhheK5JzNmUrSSVB4vegURefi57DGz2FbP8eM6vKh6qzSdTnxxXsMHwxoJPjskY48kuhUwRDH6ukhPt6r",
  "key12": "67MvJrzXNhLyp1i39zdhFqahifgN9zUpUJjNLse6VNXUGG9FcAfKQkxzSjSVxk3YTdjBwbcPixiuDNFcbsXuz6nV",
  "key13": "Tyh7ra46zyNHKGNnw1mtqGiHRQm27eMf4arrJ1eWyAP5Hi3LvbaBQi5FL4iWH1M8Pr9u4ta3kEqik3u58v7hA7R",
  "key14": "H5jArJY8iWtjGEP8WAjTrfEG198GdjfYsZANchvVrncy4JS7oWYCVWUiLsD4TG77EMzTx9h5zZnrdEM68kzb1Fs",
  "key15": "3LSfa8KFoGFvFS4d1Q4dYjetCjfXf63debFT9qm6Mb4U8BufiH3KZMhJ88x1Aysy1s74mmqe4rpD1aZJd72YmrdY",
  "key16": "2HQBLQLyUUCA5x3DVDEdq7jHX7h7qfrot6Si6JxwHU4g8Rjz3ZLXDcHwXhzBjCwQa6pwagY7CP12wy5RM8TUj9sr",
  "key17": "2YDcVDbeUMg9Wnqjn2ms4GrBtAVLCiofyu8vYBTafarHqDEwzwURAuVvBneiCsxdNQKEBso3Ls41FSFuCnxitGQN",
  "key18": "3GKXFey7YZsSj2pGC4yy2465w3r3AggPwoP9oZ4HnS3jJMcxDekCMVgLkygpyKWCNfabygr8h8Ds8hMK8Z9gseSm",
  "key19": "4tHkHG4DiJRMFTaXCDPZYffWu6ad8aD4vUc4fawNKcto9Yq3hvwgPMQ4fHpFp595q1gTX23aVeJD9z5yUY8eESMG",
  "key20": "PAEfBKHWucGWXXi2RPgSh5aGYgW8sk1aRzjdbcoD9LCaZ92oG5Kk2BnKiRzBKTW3vuRjKEkCwp171giCYvkVRX5",
  "key21": "4cKrodh7JtiJdxRC8yiHt8mxwJrBYfEsgFvaUP8D5Asu2tBfrPDTXKchrDpLGWoamyeJaYJz6MMGDW192ZNzX7Ks",
  "key22": "2UhXyPzC8jSAwgEkn3NjWURXswtwzJgTKSPDENgbNANRPHaQtY2NFBf9EcKTSpY5zsiPYXoF1u2g1JeZ3pEPN9QS",
  "key23": "4NXjuYzi9t6EwnpYHAXoHr2Xbnif8wgM9HmsdPhd3QSC7f5pnt1hWdEFyWcjkahVm4SxyTDCuzNsc2N6soQEpmYb",
  "key24": "2GFmYb7yJrGZtx8bFgNhbQM3LetJ1R8Tu1XQiqZD2RTD8HTiE7BKk9P2xwAz19EqnBW5fojRjmEMRjMyR3LYGQ41",
  "key25": "dm4gYi9ix1jc857192JtFHD6Cw2Qv9EmTYaXVLwYmCvV5vyRVGoQdEYbSFjwp8QHCspWiUrU6ha9ohbPimwLW4e",
  "key26": "43wY7f5eyMyPTUrEMLnqFLUVMXdF2Q26DUyek5CZUhxexyj3wwmnbGqHBdrhCFgaGSCdGZM2rpM1T36Z5WLQnKry",
  "key27": "4WrPwnUBqNrriDm5W8ejDEhLzvhSXsdUpQfPmvMRsoc8jELsqirLvC7T6hArutqbjEMn6k6fHM6WQmr5px8MTC7f",
  "key28": "2iAfGkhZdaWqtUHKLRftshjn16unmnr9ChQNYpmGZD42YgbJvVP9sn8PTFWEcY7S3azZKh4bMej6cihbHc3QHV5E",
  "key29": "3dciXfm2c9N6PRAYe9kDEV6qkkcoNEhSuSBmWEgTZjfUyWjSifqupTzSWz2UvhtKdqAHWMY8mBffi47ZuQcBjkw8",
  "key30": "7zYb4vGapsq1ZwhVycTCqVXdrvEQjTkt6bm9oGpPMW3imXxmiWDDjqRq2SmEq2dQzvmkoZW2EMwk5bUrroGX7e6",
  "key31": "4wqukrYmHJYmU7SXkUx79Cf9kLoCGdXxMfoabFJquZWUREZbUUAmEcrH6G9suU111RSfWZS54gPfwmzBP24PRUpj",
  "key32": "47kBFcWmgL6pUE6wAaTWNKvAZ9Gx6Eh3grS5rHbDh1ETtQagwhCdSvPfRwqkCjoT77wpF9LuuF43DPMSn52k6rbN",
  "key33": "5t9ckRWNGFEYzDJUZxBaFqfaSgT2c5XVEWy1aKbvVMvZMH2KxEg8eorS7csZPiaoQTP95Q8S5XA6m1y6LaT87c8c",
  "key34": "jh6DPmCnLKgpR8zKBQaMKvq2V5KfuYGERnUnbTa2crTxJMqQHZR2QQ37dzBUqk3ap7quVBnk6kQZyPpKam9XQPV",
  "key35": "126TEpZRU519pzPCuPBssKsQubAtNzX8ANJKiMUZESDfvJbqjvXMrneCxSXSY1tGMQQ54k9QiK2h6DKUzpPqMP3p",
  "key36": "4JpikiWRVc7dgtaFD6v5yjk8oG9FiRb4Em5wAtSyVwUNXzS4h9hUcT426hMhyhxTyC1dBvmNdMA62B444uMoZMX3",
  "key37": "5dxuLehUjTAZB4w9cpNhwWcameteyZFKuN5BzJ4deqNx8Ykth6Zi57mAgrKpW2nF1nEJ4YGX4kJKuKM6SxwDxvzB",
  "key38": "62UQ5LaVv5P2Sba6Pcm4sHHZqhei7eWFpbuQ6FmXJuxCzyY2mdgB1ixTim3rzkenvj6mWuUUXSiF8tRZJkhwHnzM",
  "key39": "5SywFiidy6stL7gaoEN1wTu6QGgcCVDwCWRFHxxfj9RmcW5e4XEpbAH6K9cGFnjFodYB8PY3QxvsQf4a9gKkpwhi",
  "key40": "47yTRWQkW8R2apJt92VfMsY3LBejDCGN3BpqzZskx2dGY7WB3yxv7QQToFGVjRHA27JBeEczqZsLt52x3RduwN24",
  "key41": "3P7U5CjUxE1TxWtEjt44vCTx3Es7soZmC13ULMWcguG5x7qxUCCyLnRbH72yWthb8X1TWs7qDw8TeZEbgbcusGPp",
  "key42": "3hJSg8KKCmwPbQU8Xa5u516Jc3WMQr4KU5B8YXRLu6QxzsJL8FtUomsdZJVfWKS8aLiqoLy5Koe74ioTS7MqhhmG",
  "key43": "uMhWWA3cWwQvw4cNyi7CmbqqCYe8mH9KB975TZ8gTyUtdmv4qU4HfFcje5hqfyw8GDEan2hcYyExFAR4euP3cN6",
  "key44": "4JyXDUa8Qhwd9xhDBvqrFV6eRqtLtRYZ6efpyCgzEtW28vbo6LicRmtB8HDDwddF8Qtw9k8zfmgCpvS3voxemx73",
  "key45": "vdwvmtiPQwPTYqVzWv7GZ5y2ktUqumuG3JiLpD7RA8esneL4TQdmLnZxkwxH8J7aFDxiVwxfKrPjY1yJFZdQoGs"
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
