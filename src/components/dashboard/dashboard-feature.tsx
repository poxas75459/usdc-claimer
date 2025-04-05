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
    "2EWqRShUTfmERTHhM8LNttKgmrEAWRM7MxUhagRzS7pJXEUXxsBaqDoYcsA5W6pNWFxwHXFN6icq8QrKCTPtNfX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65mEakKj3C3YUNc5b6WirSCPEmu7G7ntyDhF6iuSsm2qHCAao4DYyWCVQkUVCKx8AZ6L6Bm4hrBr4txkrjAb5L3J",
  "key1": "3M96mp4JugoKeYkmyJAG6YKDrBcM3w9NUvvum2a7i7MaDQJhkG56GdqV34Dgaz3HFH3XVz33HsGLGnpDpAxYcGGg",
  "key2": "4hfYnd6rtW8Az327PFC7ao2tjSFnXYfcxADkCJ9NWbsMCrHxa2myavLbF2ewUKZBmZqnmi2ZUN6wj1A52iKzMHLd",
  "key3": "3CUP3nwgXerxC5DYEuiP5BWzANs5WLR1vPtxNFap6EeomcSA88UB8syJt34Y8gqqy62idPhXEVBxHUvP6QS9FzUy",
  "key4": "5hh9xjaDNBWrpvKmTaNN7eg6K6Acn8kP8qg1fSo7ZAgWdwfm1VnMBKXq74uZrBFKcHWe9646pZUCWdh69ZPwRcku",
  "key5": "24Zu8DUd17xQdhUTjrcSPEXuxJtEitU9ewiKeNwwKTeywiL8BbtshKDriwyHTZZCPPALWhUQcThX7hEfYPPEetYW",
  "key6": "2wJ2xLDw7jaCe2Aquh5hgGLNTgqSFeceBQzCcuhHkNzjZ8w2BhUjUh14YC77XeQruzDDMhhLv47oPTh3xSRf7VJr",
  "key7": "4bqEN4xiqgTKFita8pLxxTQSJbFY3G2Gf3c1Cb8vQz3Qvue9bms3RAUZezb4SPCPqtJwtdp1R9Zv79FZKCSSFpe2",
  "key8": "3D5tjwxAmYW9ohzHkeBnxhfkGUHvxuvBZMwqnxF3a4GpAUmPseWbPoN6GScVQqwyiAq3gYrfso64xLsM98USmZdU",
  "key9": "2jauqakWpKwBB7Vmsc9sfuFu8NGsG2uFfVKzpFL9q1rftodikgY4TegfPL3tj8XUyW2Z1E6W1HN6UcSotry8Eipx",
  "key10": "4jszGaTJqRhaJzTmfk9DXLVxcodDhxK2QYXyXYWDLejhSR9rLQSFnKme7ymCuJDJbTdAAhL16UcttBMvoJqviqPe",
  "key11": "Y2oKXCZahSx94xcDtoyEr1z9LiicAfhxPVm6KG3kvopR24XNdxPFRHiB4WeAgSgPiuzSyVi2tbdqSLXqJQQqDPe",
  "key12": "djiVQy8AZP6EEXeWbwGTT6kVH3d4GuNh7yqoANrL56Tz69ThhgcDu4tMroUkthAexfvJekQxcV98gE2h2F8TbHQ",
  "key13": "a4c1E9x8pK95CUAcJhbXFpPD2w3yHoDd2aAEy8hQEAgnNthHY3b9B6bC4bTgm5MContw9742ZHySMKpsATcAoAn",
  "key14": "4BhrgpUiYEx9bHTLojv2MRzabRMxNFCcnc7x9iwfTx5z6SPTWapubH96x6vSSqBYFXGS37VLk2wHwsSmGEbdmgX5",
  "key15": "47TMxECsuUBr16KoomTpt2YzjRsemwZnowXDpqhcWreDb4P4HWCojMGZC8yR74oLjYk29XEviFwp2txCeb8pYc83",
  "key16": "2i3C5sd8LhexJihWhb4mYcEniiwFmbtLqpytuLMS796N2kGy6LYh1akxpgYwdpfT1gzmzVoGcpExf4EbswtqYAPo",
  "key17": "oAh2jYLUTNa4CvFBTxP7tpHTwtPe6HpNqpCbhbHqocPzJG4WbQYHTVTFwDZjkzQav2QPJ3mkA8PgnoCNBucgrQM",
  "key18": "3Lc4wxPP9tCeZnPvqE21UXvFF1qBK8RRLNjRhqxwbaJVFbCYHopdADQR2ezH2LEaBYpA8mXyxdQBtjsTKLs4imkq",
  "key19": "4vzzWN92kggNGzkh7rUZvnRfW477AJ6sCoTyupMFC7fygPZCmfvCcVsqmbfJ9Pjsd1DKYHR33LuZXcby1ZSRD7jn",
  "key20": "4ruhN2p4X3nE2J8gwbD5hHZrtnr12i1keAzNrAGsGhJR6zvbkj9c5ig9mUPnBHtHce27wtF1BuB7yH3kfpheLNWN",
  "key21": "3S88N88C5ChXVLZLisEB8t3FAkj7iKfn96zturBxgdiHqnbzeAPM6q5KotbCkDCGeRXA64nWnTc1pYuZSM3QV4ZD",
  "key22": "5iwCa5q9XCNuu5Thp21XfCku99tMc22xeSTqzrbM9vopaEnqWhTMsGBZWKXHsaMrudtmoCZFANMrsHGNrWTJDs4k",
  "key23": "2guZ7JSK6KHisk8Xr5BKn9ceSUqSy2196WAdcvHxPkrHUmj9kkjtgLfk8wBnXdPNsb7kwXxNNNr842fW3BBeoDmE",
  "key24": "QComyEZsL39MxY5HA1kPKwYqZTtbNuxrua6iCmXdhvnizYqcr7NbBaohSYYUQCRRfqagbrB7cX4nDWgipwLxfLy",
  "key25": "NRp5F7Uivxka12QJdoJyqm28okmyudafKsGurtCKzQNm4zo1AA9894ANXzkchYQRvN9LhKRPKAaqy1aE8Q3Ryf8",
  "key26": "5QHFrK7YiqMVXPBKVo2n7MpZbVvGZactRABkJwvXUsSjdp9UvdwyTuSbjcnhfNrS9hmoH5hMqxySzFsJeZW9mmQm",
  "key27": "3M8meJsitqpnViwm4t1g7yWrKocaqBDmvqQ2HxfPPrmN9xpPaRJ2JVa5dJvMzrmWGsrTSc9pxicNkbvG6m16uxUa",
  "key28": "3dqnt7sJ2KTawPZX67s9xa3dr5tUTmKMYEbCUnX88WpPD9S6VYhP2CiCxiApj4DPMd1oSgNpas7e9v6EEXWfwFqj",
  "key29": "4puFf6aYvYg6mPVLr7dYiHKeXFjKuGANPe5Xq6PW9xze7jYR2AGREfdvrmCDKPokiGibTx2BRnznT8zaioEqtL9g",
  "key30": "59do7QCkbAR5bfMuKevoNUVUhdMKLESoNAcQjBdRCfvRwMsNj8PykYkmwDfS9k7vG8G2Cgz6rw3ZEwzVbGAmiJZ1",
  "key31": "wSi9AvF9GtGNzWWLaxA6efYZaDVU6FwXMjjy5r7FhYSAVsfPu887KRtpSDc5pbgBT2qp8P9KDRHkpQFpBWXyRiQ",
  "key32": "4LAokbf11aBHz7RsDHKEULSd5bWGMcyoAWf9ez3xww8SqhyCmh7tk3a39h5eHBL6hsqXwdwjDarDR4D1AwvnqoKd",
  "key33": "4GLcirWhoycsdUPcXL527TSMtrh3etWzbPGsWn23DXrGPWboteW6iTK3NDjpKcbYy7VAFZUnshJhWwzmwe5A1Y9R",
  "key34": "4np6kzXEV8iMvK9jnxYUqzs2JMzk6RbUxGvQWYNA7AFitzE5DLWbhodfg5NWAWHD8rN27msEVmidMhbs4g73jCm3",
  "key35": "3xx2vUsBhcdC7AUFogiPmBnU9iVxCVwccNj8UVEwG65jA9gTQFoJKE9PHNeJKqJqXYLeeS9qKhzoNawghta3Wy9G",
  "key36": "5jjwSWXFGGBw4qUGi6JWLAPhZAvn3gK7WHa2HScXJjXuTWNUpa8cNDdwaF72SeXoQvgjUmRFbiBvAiNXqY1qUgQZ",
  "key37": "vbaYtjGaDnpr9wApJeeMAgDKpypxN2yHnHdDvLonS9XKvyWPKoYzDvPYaZSfe5Jadx7A7kMtiPvfzeko8ayWLkG",
  "key38": "4ssGBfHoAj9ffzwjaLSLFAFtKjiHCwh474tohPWMMHsR6qs8Pz7A3iuB4QtDytZ3EdH7T77diLzaGwXfTbYQhjpg",
  "key39": "5fep7Jo7Arfmido91kvguHK8uZKJkfsJxr3EdB877FcBssxHUtjhAMqFWraP1YX27kJMfgYExsjZ9kn73amULBkW",
  "key40": "2w2WK7pWRGUGuXUkoh3eLjiGSjwjy2Fx6KtVNQLgDirXVo9ifcWmZqToyzAnHGvQpWxZTKjyLWmBK8TMbzEJH1aU",
  "key41": "31WhztSWxDDgXEDKm1SbwT7VY8HzwiUKFp8sXV2PrrVT7eduAML9wHvPidCeJ8MEh1y9fb1AX3CEzAQmDpVG8FTo",
  "key42": "3swyDwxqd2bNgFHiDgEV5oVMUTwqUjreB2gznpyz2VijVrfcL71EPQvGMszuVyxPwJzmCFatSECySL4jadn9Hbva",
  "key43": "4YBRDnZY3RbTDXsG9wMmg9ihnLabDda3YAkjfkWa17DCjKM5JJvxFV6rk42Tarp1cttrjcNPSGsvdATEY7snZpMT",
  "key44": "taaN9v7mgCJpx8HLVtc9DHR63duJq1PuTgh9CEWW3oZYqPiJCg4BA3dE2LXQagva6UgBxMQcDD6CE9Wyq5YPUse",
  "key45": "fTVLc66owXGhb5n85TGJP21cXTjdi8ebVJQEfKnPD9hWvdf2sqcpYXBkDtJKTU9GJf2dKDuuXkjaECpKwQnLP96"
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
