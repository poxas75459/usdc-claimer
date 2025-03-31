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
    "2ExiVoc9Qzv2y5VodJX9X9NFsgN3c5SMrg8C6TF9nahNiNjhUrjJw2Pyy1Md5cEhfyKuScBwh7NSBhoMJqQ6cky6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Js5k1V4zJ5HAUo8pv2yRG78eMFN82Aafk9HTADAQH6dybkoTR1ymeL8h6GAN2hKJYtLh6NSe7Mj8GuR2yGsCDSP",
  "key1": "25UNbwcLMgfpFS9DPHSVMFK2mRtKfTStAmvetHA1aokkAFJZq75wgRPcet8VDarcoL2kE2gwVfDCvCZ6YV5ZNCUG",
  "key2": "44ZMmVwbfoqMj4woqbqtWTo68pC4LCsxxtn6j4gRQgYrZWXqRwjxwFnVvgBPRyacq5y48UuzrZhK4rhLChfYB9M2",
  "key3": "3KuY2aU7U5JAF1kBXv5LMsHGL4CWHKkXodX7sXzrdHv3FjwExCYN7TXPc1NCozskpegmetZ8XwR679X7BsC5RFyP",
  "key4": "2EBcaXY6tVbbpnt3uQrEzcc8MBS3TV9ZzjJhDjo2fL5kZRpkxSk8STmDBsBdW8ATjqYkFXHVDvCvmwWqg8nMs6fS",
  "key5": "62KCKJN6USdFms817b1uKHKVMmvg4Nk9FQ1AA8RS7whtXZiFPgDLnkyKUnBSnWHUQN7bTg7VT7xFqYQeU7qUPDfE",
  "key6": "2iam9qhVAndRrokUmejkhD6hUE4FgzHkNZii4QLv5J7D2UmANxkjTaHUxdEzMggVHBXfM1A2qmgmFVmTuofie6Bm",
  "key7": "cnpnGJkLiEs9M8kohcesDAMiGQ5SBw7qQ36MoQL2yDfQWaMNMxtbCbGrvinZo7W1qewSDJqRnsYzKmW2ZsXGkMh",
  "key8": "4yXE2j2MdutbEQJaTdn9n3jqh7WoAiHAByRVRWnuZW8a3uamJ1cDxoFd7sewFVLEq7Siw1wZ3zDRa6PNmf4z5u9Y",
  "key9": "36LWotTK25xTcciZuzDoRc1ABnuqSwXecmBHb1kWUfUGgFm9P7UXZLQD6sZVvRz1Hqey4T3ov6hPshpsJJVwk3fK",
  "key10": "pSVDWYmmpEy5sMom1FRdDgv62ap9XDWYsKhxYGcZi4sjn6WJaJviPqzHsfekZTF8K8gbW9vWVNca74yKNdC9MfL",
  "key11": "541kePdNaQ8BSBAYRvdvJtDHDBiiD4BpGDXxTne1noRJmN9EABXbysSjUqS6oW3xmbmB6KRxoHD8shMnNPbJ9c6G",
  "key12": "YSd9PMguLNnZZrKfEKuLHpo8jeJXhmA9wQ882rEhzzv8ZbEdMcecSDXekmDA8PA5zhuq6T6XUbSRe4weXzUVgTV",
  "key13": "3jDmv7eV5xTAcUwE69v8Y8gkfqSr3aVixvhFjWBNep1sh2HyMVX6CSGXZQkPT6NSC62sffRdz4E29JBS14oiYMy7",
  "key14": "123vUGXBzBTEZE9MFuBfPJG1pYedwnPaPRcJdroBP13At3Sd7baBHtyVUu1bVxWj7yioB2Zat6n6TqcNxvsj8q6h",
  "key15": "Jqa9eX9b9Yud9RRAemvjRzZuHVQpU6Avt1aDmdcGuWgz2m91UnJstqQq7ydkQxMLubtxwtedeC291iVoE2NXXWg",
  "key16": "2wDGiuNZDTrxDkxRL1F4Dq9beY5KXAsML6Zey2iuSmLMpQPJp8kWChTiUhDpDC8soct9szbzmrUZckhzTG76xKaG",
  "key17": "3g3H9wHD9zJfAQwhd2T3BGrL4yBxNpbURkq6Vby7yWRtPe43cZEzzfyiLTycc49hs4eVSHkGfcSJySUm1LEL95gd",
  "key18": "mK6y3xSgum6SoL3g8Ndf4wUQrW1Doc7He4KB46UA2XxyzpFL511Z5T4yt6MzCrC9vz7D7tQcMVH2zVutBmbZt6W",
  "key19": "4FD87Qt4s7nFV6TsVKqojm1GwQdLtJahoBQ9vZFm9DogkaAXjzhAABAT5tEw9GGGtYk8YeD7XQuP9Cbx7qRgZ3Fj",
  "key20": "4ZE8jSmq6go3swJsQwwXzygUs8QCbbfdsvdSciZJFDq3cFaiAP9fJcjzJMJ14geFab58XyJ9UR2sTSLS33kttqpB",
  "key21": "2VMttyhwYhKXZxrkwptSzUesP299ihiunbkJX7DnQB2aVd7FMxnYK6eMkak7HQeUkkucpsWkqVeMfiF8qorZWYC5",
  "key22": "3sJbNodY3rWFQPddXgqHzt3qrNuZ4f9ZrHpKhF61WxeEUQfUvvPJxD9PdnHKJrBfh7HjeNUUppR8y9Mp8wLjv6eM",
  "key23": "dNk5UNrcCNE8kdD4jhGC8qCLMHcPkPtGpx6HiB3g4EDvLia8UtavABup439YC9EWjNXfzBLFVxP7ypHpG1FhZqo",
  "key24": "2v17VL7Ki4221HwUEc81uU2pE7oKeiLcjLZxhLEujUaSh8wbK1ehomToFRoPYY7MUj1jBioa1sewVdeYcUgT7yKo",
  "key25": "2RkDchSS66Nhd2cAbgG7R31dySBHpkfaqeGtLnSDwsUifSCbNV7D5WgU4Z58xkJhHXYAAWRkqCJ9e92U8pfY3wH",
  "key26": "FJEphdHe5b3Hn5BS2sMNccCujMmzLYBJzp4LeqzJz28jByfhbkrjiS3buS8wrz1bNX1Nr7MaHbCuvEsHioNq2Cr",
  "key27": "JfVodrmCpAmrb9E2SrW289skZJqabnQEXXZx4ymNkAAa4UqBCmKqYCb9p3agTNVgEDMF6Zw8rQZQDRFx9xEJ9tc",
  "key28": "3jFPBGE3k4xpnErKevP6smtY4Nr7XTDucnVwXuqwjGqaarorFezKjR4bj9PEnh1d3n2xGTvd25AWdZx8XeW4QgwM",
  "key29": "3BC9rGZ7PhU2VkvD151qtkSBA5AULcGDggZtTcTa6oSe8UPzatNdsv43ajCDpsjpw8ANz43PsXMYgMwA5uv1mtHp",
  "key30": "EeUG4LkEtR5TUFXuP1PRskSpJksKNckNLyjyfrCcpTYZ5pnhXkhDEa6jwXHV1oy9ifLBKftcAud1V3R722bZeQX",
  "key31": "567rKiCC7TZXpGLhWqHsmhwrVzXLH4uRHV4L1PR65mWTCiyQPYrUBC8ydk8QWZRMAw8dCCV5RZXvKv5TzUvcxifj",
  "key32": "5YsUQxUiXAbiNBkWveURiUSh8PyAzcGxSf94gCpNhdCDCE9oH7NdZSLarD9ryutNNhwNGqmFNJMzfKpfzCkG2h4d",
  "key33": "WcmpfytBQKUGuQxkUysJTAjJaTRCd7Ld46eAFARRpaXrLWF8ZCQtZGk5Weq3fqBvcduEM2UdNkwdLJ1595nwH7m",
  "key34": "4Zx56hFDzvUbp8gehVUgrbdRnes5mHgWdWjzByFAtywoF9q21C8Y8W79YaFAZCLyv7pqWn3x163iDjtr2tLbLkdZ",
  "key35": "5cki76H39riGfZt2PDCftYLs6XVrsqvANJvh4XCZp1BuraFBT1iijQg1xYATHTQrGi7Pni9tm3tgUaKQrogQW5LD",
  "key36": "5En13h2zntDLRkARHjma8LhKDvTzvqqhHoeNvgj3i2zLqz1oG32aP59riH3Qnq14xAGyJFUdRzR4e3NJkRk9qubN",
  "key37": "4YUPrXusq9jT1goBPPKGRU67N9x6bzSdsgpZMjDwzpv5fJ7pJtZiDCDLo73yB5vuQ7WSA2BSkyG8CHdSBkHwvHxs",
  "key38": "4mAuV5KBBpADxYgyp1gPeKGYiyqpaJZyRiJ4pUgwkwkdddXBXKaZ9xgjij5LVnx6sge5DUMF5AyPKQ4uqFH3HEVX",
  "key39": "4df6ADPbrofGaNoeuKG8E5Cck9gzF2FoGyAPhcLRjwYrgvwcXJ1EE7iSoacveSXBxAzZCbSQzfZZDZaS5fhrPA73",
  "key40": "2FBZUWZK3tPK5GxwvJZSEB5RAwMK4pFDmY6diq77A6gFYvUgA7s7DCKDYqcoCRbSwNUFMfzZYtnNF4ZkXE1cyAp5",
  "key41": "5jJV5CvX27MAVRH4X8koWwCpgX4r9hYVWv72bWoyfVpSW6CFnWnMngDhVYZHTr6GunPED6MAyfhZjVWVLcEh3Yep",
  "key42": "2eT2RpCBdLax5FSbuZSqksa9NLa9mPgihTfvxEyA762ai9YZsvxPcoZuC2d7vp5Wy37TeAiBpc6z1t37xivL2QpD",
  "key43": "xwTvGVRyHRjAkvyaUiG92bGi2XpJVL7bDtUWywqYHaijCFjZZHxXUMvWXoKVz6QrWUuquPhdD3RtNA7FQCsrYvn",
  "key44": "36hY8YtkwGZV8An79E2qfX5HSRZUrxDZJxuztYPiFQ7szq8aj2Sof8Huu97SLHqhFR6bS9TvGsSbeZDTcTsP7xR",
  "key45": "3M95iYmzK1VwzYSLnXA5TQDGF8NXRwUzi7BSnrM3pqcrbjGgZAxRCP7Q4sUrZyT8J4iLKwjb26sAE6mQS1H4GLfm",
  "key46": "5MeJqfLfGzA8gPKzMPVLsqqaA2sJrLZHdvyzRPKqsxfnseuyN6FJWD2YeRfhunwyvrnTNXx4EpQVWY8oGPVdfY9J",
  "key47": "474Gyt5DrMuN7ezywiZoVBkoRMiXbdV2SgYNfbDzqncd8uMmNnH8vJpcjvSLP3fo48MfzTasrxc8U4dtArBpfGiF"
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
