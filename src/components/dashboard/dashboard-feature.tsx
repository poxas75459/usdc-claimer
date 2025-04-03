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
    "4VTKszYn9UD7QRRkGbGEFq5RyqMkHr39Hf2nVoBP5PEVHEFbyB8mkkniUkvv3FB55WBH8radFoCwPuNsHNqe1EMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ypEnRSL1pFyXKkD4DBozcSizgJwG6yqxTwE5oRFge5FqGEPQM4iRqQoewrjWAmNGLbEpxVFjTigPGG8qQcMz4V3",
  "key1": "3NmLoekWhyu3vT9XLgvKBn5Xt7UsfAJTaLy6TB9AZ8a2oyRzysqTf2QuSn4VFKwEFuRrZTZoWsnbRgW32D4vLBSM",
  "key2": "5UAFfth2p7TKPFdVybTDwr5ABEDx5wuH9dV6v1xNnTXRHEeoGfHAM4PCoaD4Cc5nNJryMqtK7EpYhDgYhJZ2Ne9v",
  "key3": "5VDmcrsU5m9ruoHTyE58gvRPkC9XfpUJ5TcxAKXhQDJzzAKP7GHs8rDtHkfbWg6UeSpyjgj9JZGaUUWx2uNGUJmf",
  "key4": "3BxdCNgYkJFbX44xd17PwdBwFz8DffeWbKxgLfCnu3mtfjSBZf6UJ956xn1L845iawagMSDiZLjk4Bm7y9MdJrmK",
  "key5": "42Kbwubyh3E3fUce7feaRN5YLn82ZxPTgZRDUJJSKbsT6CN7mgyGopESz4pChNKeLgSYFnUsnwLu3fxm3kGrsEdv",
  "key6": "5KmQYEQr6QD5eKixL6TgbXbYz6jUoUkz4Lxnufi9QSxeNDTbjxxMDDMzYLfNqko8cxDfrAGwzMRUBn9BeuJDWhQE",
  "key7": "4Hd6B67BZJNDfRyGe7pqGCJF9BE35gYqGUXE6tHH7Heq1V6mPi9FFEbT4SRZ12hczVVVq3FNjschRipUisbwpT6c",
  "key8": "RQfuz8zA8ca4emjMtYMV7p7M1UWgQn6TE8S8BvdsLL2Bi9TJ7Mk6grz1YdLYMiUN8gHk55K2R7srXRb2kpoDtBe",
  "key9": "4R4VZ7m8wNSiRUeM399uhRmoEkNKatFGtaYjVLS4w5xd3fAW49oZm3u2cJy4bPxDpEoHZANzPEuL6RHUZsD9S13J",
  "key10": "3S3wxTJmk6coruJxsb87fULFUoybqTNSAdSQ5UdHxVgLcnycQrKkpr8dZH92LpnTcyMf4aHqkrF2nVbUYAP3xj2Z",
  "key11": "4FhDMBgZCGiZkY222vai4iWZ3DE4A6vz8GuweFnMsDzfn67szGGWHbWSUHhefrgdwNXhhtBr8Soe78EFiQ2VEtHi",
  "key12": "231L64sfyZ4Rc6nTRa6jJyDUhgZ9NLZTowFhEcb5AdfK7s7mZBRLwKjZzcXGheER2wmEtE8abSDYdoALAf7W9yAa",
  "key13": "3BpwZ5UFcBqcPLuHHdQxgFncBfY3n6CpWagcUyVUiDoM3rT1X34AYyBr5rM3h4bYkuRYHL4xseoWu1hfnn3yPY6r",
  "key14": "5Ug7NC2gue9YuPcuzwSm8K7Be59QZQ93Lme2hVo5FQ66w56LanNQv1Kk5QHXJ5eEJ96orfGjaJKj3qgvyRvdJQii",
  "key15": "n8yN2DKnXcSttTKoCbzKMYVAptRymijLBmmDjqiKTxwtmu7DzaX5nrVV1XzfVBnZRFCvBkuTut9rQRWGATh4ucX",
  "key16": "3HRnkYzo2y6Lx8SS5TAJrWCeoXoKhX3M5kTLoNNN3azA45a58EmdHhkJDMevb4cQbBa9VksMFBamG3y8QUQDzS1a",
  "key17": "3iETWQDxtFEHcQuCVKm4XwdEsdZfuFxNGBqmf8BYpUKWE5H9AsR88jj6vYP2vrRWy4DQyN9VbLnebF7t3F3V8MhF",
  "key18": "pgqxXsg3kTVRjouCdHxPFV5huATtkNStUkK5ja75wuc5rerErLhaiRf89SjFfHRiDHHeYP9VS2xaSwDHc7xnWC6",
  "key19": "fFbVA5V4xcvmFXJq2WyCJJSnWM1t6uPAREEYSkwdjyyjJRwFgAamv2sJynZitLzriuEu5LC68u4UdsVkfKJsXpe",
  "key20": "4U9mPor52H7refDd4X4CJFo2NcATKu7wuA5NUFRBhyuotHCmuFZu8XixZ5SD7ZAAqSh5iVsnUw4sSza2hvbY1nzc",
  "key21": "3u3S4zKxkFFmRnxmZQwEPTHj8Ln6xjomHkQBnVUWbx6uiGEcqxQbM8DWcDbJn49WKr1ynmEH2xWbi5U6geMUubCF",
  "key22": "4W1hzRxdoNh3WBTsZ8pxSsMGacu2942zsWTW5kQ8QexmsHWq8CQbc6J1kmihZE8JtfFWUMSw33X8m2GMDdWqwEq8",
  "key23": "5V8j7nonB3jdf8RmhS4kfbUr4n5RHNU4RTVw5qsa83R1JQ6XKXPkA2tXpxr4ZJnBDQvYQNaEd2ixbWpiPz3iSm9i",
  "key24": "3tvESF9AULCArekqPmHNJ5E8MjLMUgAwJ8YgoXYcunp1u5WfykD9d6hW53n9muCtimn8UjxqFPy2ihkw2MfcRVjc",
  "key25": "5NDJ16bXrbpSxtpNpLiGpBdTvUQbyer9EqDMXJ2Z3MHBvFgZRwJ1enasGABgGYQFqzjfr63HZu3dhLN51nTj2hfw",
  "key26": "2yry1Cs5SUYc8rS9vjRFaKnXvEuYhQ6bLmiuk4YvDrHhQ7KtUDZcmkM5yRyJZwjVkim9kND141AGYnmZosSqt7B9",
  "key27": "5SDyhYVCMJhKqywg5kT99MTZXUvSZ1UpCPWZMEfnAW5UgoLzKkp6ZKAkdGLfVAHqU9y1H2S9ieznRaaTadNrouhM",
  "key28": "2GdEA4VUmWBx6iLDQ1gRtdQegMiXEXeA7bVKLJbLjvhzL5pEmgscVXvVnZXU3YW44sJNkZeYjXu9Y4nbUEWkys1g",
  "key29": "48wxbRS8m55sm36BfShT6hLxWTPzq7fhYnyM292mLT3vdDGgutAjL2S7JCHsRzwMmF8p2pBshJbcyBiLSUXXEeCn",
  "key30": "5FfkAPf7DgDnZ3nBdpBAZnTt1C3go1haEZWFwn27vsHAWFfJoPCkFodpx4yLdGiZXKZsTqvgM3fkcR9jDC8DfEDw",
  "key31": "3KJ9ckA9FFGU2ThhHpnhdvt94EXwX9miX5J27YJFSuu64HFDJruZ1cVa5UJeGfJMBWRpeCTWcv6bUR7ZTCoRUPJw",
  "key32": "54K9LzpgPckgiM2KvNKFQTNSbY5SMLK3pLDqf8xCuPuqkNi85WQWztpCZZmy4XVoHif436H5g4M5mKNfzq2cQTN3",
  "key33": "4sTnqur96F2FrUPSEDX3HuKFNAD63uyCreJhhJ3tuMcMyBmwrgJs9qXETJC7DM1LfCkDo9wdPkpQrGT6FGWXvMEj",
  "key34": "5LVAopViZLNoFYN8T739MgC4X7GH4UFDEMMJWmZQeYtAaQkadFJoCP98PBsyXHWeXBg3eoU98hxEknQM38jfgKNX",
  "key35": "5PkHV6Txhu8vK2prs9427m7JtA8CMZaPuKQMEzNxSHVeqidL28VKRz6J6uQyBX1xRfrJswwVC5vbnZWtUT68DrCZ",
  "key36": "4MoVcwGKWEd4N9zudbav8qgWtJ6KsgQf2UVUAbD1n5HT5DMyNxQ6VcvMYoDCNRR7faRTg9asoHHZ1XaD3gvjtx5T",
  "key37": "53kqLejLahAkJZZBQTwSwr6Sx2w4s1jcBjREBXgyZ6WEsY81SyB6Y626Pvuf42cMXUxDTrkoPgHymdUwt1cYQaKT",
  "key38": "3xTz1QRKAVUrdd2xe4JKUf86QYhBg1XrELvKDUHNM9Fji3K4ydf4Mm5gqERiYmWMZ1maCJkZ1v6Wo9Tm6nt1aqEK",
  "key39": "4Lx425e6P7nuscPpzyoECab4beLVitj4QmywicjxQYFZyhTg9f4PhcGe78j9sa2RAfBVR1CAXJuZJHuvVG7sYu1s",
  "key40": "V6iMxgeVDdUD2Zy36kT3CaAUX1JMkMEoYnm1bpPyjNufdvQBQn4QUssVUeg4LoqMtCfh1p9Tyzf53FLUMA1DpRT",
  "key41": "vX2c9pVmobj5QvPZzZKMcikxikhcSJ6E4ZGKPX2gQpuc4nnsSWKmGZCmcGrHR4nZ39ATkEyHNH4aMJNgbUPrSdk",
  "key42": "4WNPTMEQdZaLTtf5AZvt6ytjG2s58DfJVuxcBoou5zAM4znRaGNug94ujKoJTdgigmNwnkTcsHskHvJc9ornvQBR",
  "key43": "3wB8q84HxrHN3MPoLmfwQGG8VSTEoufXHgS5o4GZUD9DB96bJdA3bwhK7fU5NuhaoFC2nmRbeB1MkAmrcTU72tUg",
  "key44": "FU5gKrMtVntwJPgQtFn5doA5aLxVUCXz2dYVZ1jyHMNvLXPgDpG3krufk1q3f571hZyyT5yKgh4UdspchJEakv8",
  "key45": "4GP8DQv53D1bPvQ4mW3wNDWBLqRmJdcC7zQn94MZCvYuGivA9GPoMFE9jsHdNJxNSkBpP58nhU4y3e72XTQG6QrY",
  "key46": "22wB3hVCppWtnVmiRkfqLBWnNCFer2GxyeMmJcuFpDHFBkLZtjjfPNJ1zBGNH3iFGn4DngJskTzQAsYycDfZQKFy",
  "key47": "5WgrpH9aJequqqsgaLN6jz4NgPhGaW5braqVpzawNACxynPy5XAJuu8XnxNXTKeHKczEQzgX9DwYJs3tu3PfPdrZ",
  "key48": "3waWcy2M1vpGxXBFSjuxJGCn3KRBuEbxamhW1JBNjukiiVgF8QjuMzpSHvwb8cPro7iVhPuF7oRY3QpLen4e5J7o",
  "key49": "Nhpf9JtpCKxrapUjNMr9Y7hv5U5sS88sizBjy1Nb6mrBaqUsKNEUzUu6k3VZVS9BfUZ4Y85Fs5SvFFHbKVzAWF8"
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
