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
    "2sxGZNM1f3GgxNGV5mUbnA329Q2jnL9abUAcdnertCNU7ygNB9Qzgqj3pRuPK5g3Qf2dRhoTa2nmR3duoTWSehk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67eE2p4zBjTHhT4sjUMU5zqw88Jg896CXjosRP417nJEk2qJrGmmSJKTX6G1gMrvDRthE7Nuy18jEio1jZFZAYod",
  "key1": "5n6gKcdpq4N3DrxXrEfxgHDdjyXontZ3EvNayW2hUnfy2L4cVbQV1NkwVXoKKhcpuK7sN8s8HxJTt9hZfFNFF6yv",
  "key2": "5Bd86kGm97nEhghQ8WQJhqJdEZq5JXVYqrqyW3CyFxCzCbHgbU5ZUH1HAJwMwJr8cHYxgHrBaKQr7GSWKjXtSWmS",
  "key3": "vEeo1XnKG7TjAjFpdxXHimdXGajovceRkbQa8bvsHUnbpmA4VvQaxgB7EgPKHwZj89pWNeJTo9xtDdG76fKKBiE",
  "key4": "36ZfEkUnhBM2f2SknBYTBNrvRMRcsEZeTccDLUwMPbg8BLwUxTvfzaU2UeUu9FqGfRoXLJcJhgScge1Az9GK8aQ1",
  "key5": "3P4BEFpVFrDp1xoMwifEr2tmZuYM3NRa2Kf8edFxuJ9z6tmHGZLb4aM2cWKYmvP7PzQdwQuRRTNYXj2M3JHmFhDh",
  "key6": "5ASEyKUUGWVjp3Q5tGvsoSTJJMcZXAAf6H7GobhpZYeWXTvGoRL31ALWxRhqzFmMBsuzwzueTU9xvdDUZgGMwGUT",
  "key7": "2fERhxdQMoGcGtAsJyhKN49Lxqe8i9GWxGaPh1Aur1GCQdTQAZdm9XB8LUqdTvsFmrgN34jtHh2fETGDovMyAWZS",
  "key8": "C6emHVVpXEzra7xKkGefda3TBJsK2BPwJ8o4e8Ycc4tDDsr91ERTyfA6mKdyc5NE2zcbFjEvmbVTHLhcSjtzyNL",
  "key9": "3MfzrJ7NTEXkbYzAr8fwi3bQQt9TR66E9v7eX4cV8XoTAjZwyGamfS2iwN7PioA6hrooeezo7fqLYwELmENzW57j",
  "key10": "dArjRkXt5KEKTA1DepgGB3y3Jfv8p4LqR4YdGpcYmGx199ruzfJ8eVu3AA4CcxQkn9wSqoNK92RrcKBhQii4d1q",
  "key11": "5XmVrgjX9M3QzHUQVdRf1Wa6bra55DzQrykVznwVyVK3GWX7fwZGtxRXVrw1XtfyMrG5QGRuhhhrn3vAQqiPudbF",
  "key12": "4k5mgD7EAuRy5fK2uxqHihnyNucvF3YajJQRJaSRwXi1NS7nzPxEG5nKPupmf4yUoTZYEHLTsNdT2s1JqtndGq5R",
  "key13": "4WSk2nhUwVeuL1CUdjqDaTh65nEXEU2YLA1eRoToTH8U3Qfj2h6RqmRcuT9tG6vLgsHMuyyPSpzBUZjS3zLcnXpt",
  "key14": "34JkZQT5cJ5EZjx3k8GWRj54QjgvgEDuVYVTzzLnW3WLrtLAaN3akD85dB5qxjHHGw52obnWzZ47S8eWDbMbzeYJ",
  "key15": "461ky5d91sza7gptb8aAtWntx6SGgCpZT72XmpXpuJVacN4mJpoGatq7vZWwhMy31hcLiZffCgHePzEdeA83XjGN",
  "key16": "3jDHnRcX2QJVkn4SbyRtZAG2ek1hHF52bdWRFBeius27vtxwCeBaGD6UaVoFEGbC49nbMJWsJqzqKiR1p7z2gdRF",
  "key17": "4aitF8vHQuU9CiczJviaEM188Yr78MStfZkeCTAsqK4G8AYLzR6MTbucg7MWJmnVb13W9Ls7NJf3fmqkgkgrjZb",
  "key18": "5h2hyLm4LRqR57CvGyXHpZtmUxs12fAcXkDg1AEG8xz2xATMUCcmAXhBUNX6o3FEENhg1yaVtqSou7MJPPaVND9p",
  "key19": "4jPXDUFcmMcQeomsFctRD2X8hNPDAxLEdnQdWM75kcu8qCRwFoyJBbRJiX1aUswsnu7DLWhQossJegpQ71pmGq3X",
  "key20": "BhYp47e5uzHnSts72wQF7WvBrdxy42ztVgZC3twCKx3s3xAghjdMQNqHPB9e2LqTHMBsuuLSB2RixFF6VKSoPXM",
  "key21": "5nZYfgYA7M3gCNyjxekX3nHD2A6Y7xSt5d5BEbAovS4Pnamg97tTC2c1esFUiBR24r3mXFeCwPCiAEdqFH6w32eA",
  "key22": "2eaZrRF9YCHKw28ubJyDFMaz3wjyQXFzEWkk8ENNgUsTK92doSGKMPjW7GaKwSsRgpWxzGzYLGaNwVyxdLtnzBZk",
  "key23": "LzeE8QfeWAUHRW9APUxXX2RXBJbuNkYSrBqwyM7mnkZq86PtGBHwazweELfQXitxRif4DPikQCoHvcyAAQump42",
  "key24": "uNjGSne5Hti8y5bqa5NKSEP7QDRDWwxhfkrJzBQJMn4jc1uRr65CVuV37kD4VY4BwnmAq1PCpxgfisc6KuUwqrG",
  "key25": "4fTar3MEXG6ZPWuzKoJvhGuJrDr45JNxVpHpf64GAwdj9vZ963ZgxKGqjMqf4VcAM3aRGMnAX2CJ7y6idJarUyRL",
  "key26": "5VFtvHKoMHe2Y6xE4qstTmqcvw7AyuNZf8jA2EdiRsSgjBcSQkXN2pLyLWRMh5pHHKx3SFBwdwUgQcaw9hTuteim",
  "key27": "54Rq4y79QS53aF5srGh9JctE3363j7FPPT4x5SFj5YEBUAED19H7cQ5ZAHtCroAVitJ9GrVeNVnfB866aWRDesWB",
  "key28": "5aHHgaom7ypeSWXHpKsbqQeUGqPPdKNdDyoRT7xrLUtpwfGaopCbgo4njFp9yQeW1dYZ8oT91J7XuPRb5g2BVCRw",
  "key29": "4nLtKPJWacRh4SmdNKkZnwNHZcvKmqKAHaF3W7ehhMKcVHBEDoRxe9EA3jRNPtATXLrYHEZxbSoA6kiwMv1sjAaR",
  "key30": "2aZy35ZLKxbzoZ8mVQ2wtxCHwJ744pZ4jDDS9EA6DfWxCAFi1X7GVx15noCn2Rato3fHr4wvBoCamaNk51xC9yXF",
  "key31": "3JeZpCHPoFVRjKx1RvzKnDePACy83tqzMRj2immAyHdXRXybxMSPnDGApBGFbwhaAb2oukfTDCNqfKcopYU1VLMy",
  "key32": "5ZnLnf23xMUg3G9QiDEVBQp96WzMvSJy2YxQLC78cBzuzxCqbKmWujwrdb7MdPzK7e4h79oDSHGVnQ67MJfXEadc",
  "key33": "88GhNiMmf6feviuQ9FdAspsi1Pvovnk4PqKqKLzopa9XQ7vsJTr8KNJPCT8FNNbtTh1afvmznufJTNoNsm8tcce",
  "key34": "32FUruminjpBUVTfmPTBuViyomgq1ri2VLWtWcb3injCc4P2UVeAC3TaAy68NJxEbxcLWdyYSHB6Di74TkYKFjLi",
  "key35": "53u5jcA313hDpcThUuKJYb1zfPfShLcKkH371uuaUoybPbjfKqbswczUEHBtgxtjfaM4HV5gWAcrZQCpSXahcvYy"
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
