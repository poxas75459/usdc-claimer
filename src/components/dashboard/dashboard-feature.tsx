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
    "3ix8bKanZdi2qCwS5Fo1Js8qQDSf7XZb1khySK9oyrwxaSnZHdszEUBq5GxvSf9v8rKhLVYwGyhd7SVt34an6cwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wVzLHvFgVr1YR4ej4KfQxH6WdHNnHfUPEZ7WzzQyqS5mvimebZmWsuFXhoiBSC4bxV73yK7vo2Exs4Amn2frKG2",
  "key1": "FjKVdp47B6njRhGZPUPN549sPmKPvkTHCKgavqyD6RyRxaLSu9tp2N3qmxFu76qdgk1g8MKxHAqhW8MwQDyRint",
  "key2": "5sopxryC4vUcK7jrNepvwFiGSUTZu1E2mcnrwPbTUoxjSrQA4NfYu7QDp4E95eHeen8Zy8Trr6mbk7ZQZZaTeCey",
  "key3": "5roCwDVCFgHQou7mUV4puJ7J67kmHXUGMCEipzJKvsDQY9HMzy7MbZLC1UKaybDXM3tZXA98p8Eu2UyMJNa5zNo1",
  "key4": "4aRC1f4QCWNueuPdxyjvVsfAbLx9fQA6EB69PCsi2zHbfYH5Ffj8P77dCbfKWAX6DoyMtj3s73Vs8rgpiaPuTDZG",
  "key5": "3ppCDoZrefXdDg5kEn93c4gZzRTgWDMyAvAXPhGBct4c5ZEPeEkudSu6aNRJkE7fqz6Jv5fjAfYP4voJyD8CLXG3",
  "key6": "fHsu6qTt1KD1zvg9Qpdj5Conn7CkZc7vw7yx6tK7KiqcKJMTsE1LbkGTPwqrfzZkirmYhr21wydcG4cDagruRDt",
  "key7": "2mJrCMJ1QmHyfuCR6HauitSJorPNJu5A8tu9gCxMK4uV2pQgQM9rjVpkyBFiDnLHwoctycF39SMyCE32EpvSffQW",
  "key8": "4AYUpUti8zfkDyeBsfdy7Svz1QddHdmub292V738jc1tEtRStXg7XXbBWkXpBdfanyjf1G8dpudVVierGzZJdAth",
  "key9": "3EbANECSUzxJP7yN8WMuoTNXwVvu4NaJTZtXBHWHGTP7DLKSFguTm97fzFg1wJ28NAaPZiGBHVcSLdyUXk2TVzhs",
  "key10": "3dDE2UUH5DaEKbCjZRMwSANioGEHceoabJEJZyfbr6NSzD1uTbpfX7i6xFEx4ZjtSWHoHsgFvreLM5uuAop2sCP3",
  "key11": "3KunzMQLEiGENtQ6VVWXmmQnxrr9it543qG5uoQ7JW7VSg2Kk1nheAwCePyMiRV3ebA5eahJQ5uJ2mtNsf4uFJCi",
  "key12": "4tTMT1nymKFaZk1st4xHjncCWMBnCnFJWrkDW24y5jBLMqX3G7m553VdRCAC9kAx1wrD34sDtxTQB8JwfyM8HZDr",
  "key13": "5ZmUmJLjGDibQctdnd9VgixLy2Hm8hATY4mruErJ69QJZPRztoQ5BuKqPtnW2B5gP3SezEfHenS9fnchnNkffZ1E",
  "key14": "4RPyH8uuB883XK2ZXQujsyawsVj9WYhAjPBRTyRzMHHdmQAEuTDKLPmnkXj3q7AXfBAGuSuNWoB2efeDkJVgbAGu",
  "key15": "4du8qTHYgq1yEKMhGsdKNmaJLj6H4FZ3A11tHUbfk3WQaeALKybC2oPdusX3xdHx1FLaGH9qJWSPQ7wxs1vVRUWt",
  "key16": "65HmfAkW1QuNTaDx9ZGxdubrMyE1msH6jX3BfB5NFULpBdn9DUVxCVKHw5NAanE1UKwynCqat5Fu6wZ6ShkXqT5m",
  "key17": "26VPmfUddWUKshk7FavehB9Mg3gakAKPyzmcNgRfSY3yAw788P665B4SjsgbjMQdnW829A8t4kutGqZLHR4M8r2Z",
  "key18": "2ywicST1ngBHfxfofi9ZhYVe6UmUgbgMxTJS1Qbh4qQegERfioMxktxtDrNd2ri45nb4orU4xq9tbTYN2VuwK5gb",
  "key19": "3NgyEUgkF59F7Lp9vSZQMxrdT8HDeQRz71eraaF4xRLrWXeL6fU24Z9ReH11hNZvJjcRTMSg1pdiC9aJUC2teNBr",
  "key20": "62h7xEV8ESukRWQ7CfuUZaw1MQqeqRcoc2aKYyHmMjhp6yf1L1ZpUcRdmfuMuy5KFWciXnUo8deMEmidvqifMkM7",
  "key21": "4BmoxjmzvTPM7XqHmkHsrVUkvjTBRmAmMvWahxtzVrXJfmWzAr2c21socPXE7tS7hJdUoEBDC61zZPs4uQsLXYP7",
  "key22": "4hpJJcAf9ezuPY4bZ1q9StVihPzgBn7yKwn2456VnRtUaE3kdkvZMVhKiC9Jm6AEcfbVz3dStFa4YEnPDvavQBAr",
  "key23": "3BLk8XFePGx51kA5eobzALrxqbHmCZ9yRRqCAACSFdGSYrKGFKaYb27L9ScdaJHthBKEKA2PGZJWKB737ps7CWrA",
  "key24": "6gfp2bLHmkQaK9gZuss2kPUPXHXK73zkPx93CFAT6bEus8jUA9eVKa8Z6821YkreLifxyqMUFetcrXv819QZ5K9",
  "key25": "5oXLEfffUhrekSwGSCVtkwwVYLSkvZJ7qWy9Djka5oYWPntU2nq3nqFnW3PhGWmkS2uX2HPhbo5iYYDPhE9gRmsP",
  "key26": "tnWxmX6Q276c3eCmQ87SoV7SXzzGR6DhMb6ScZrLjt6dMro5zkKKuy8PfC9ZPbuGsRps1FYwXhM6Lvy5FxhKqaL",
  "key27": "3Ubj7tCFbDK1AxS7WpJY2MvxnLCBTpUCPkWiaVSaUCsd5rvgdHhVBbAXtLp8ymDeejh7FjSW6yZkwyKM3JCkGJox",
  "key28": "31CFAYxwbEgmCdUi9nS3FmXJKqZEFmCt7R4YE2T8qWoRxGaZtgFguR6dreU76PC5WwTnx2G8wKTfURqNWay5WUS8",
  "key29": "3rLHZqWwxAfQntbYJabVnEiYfDBoT5VveWLU2BbFRM3X5y1tXbRbCXzGBPVwXjcs9abJAyA2xGu92cHNH8RVACYM",
  "key30": "4nfd4C49Zr6vpHihBLqsFPuNSq53UQ9mcSiPRDawasiGu6oYqio7MYFeLFvptk5dtH2y4d8LFhEW67uSWEewHwcc",
  "key31": "3KMwBSnEfesYa1Tr48AL9XtMSAGN4XL2yxaSFiYsjKbrYGUY8yo5aAZ5qu5ExQftfa4r6iHXHthBPe2Hxytxig7D",
  "key32": "2yicbRrB3pGTcYcLWc5YhwPm9nX8VZ9v4tdzN73zgBJZpWVwtvPaTFB48Pzjwg7iNtnDiiagWgYwMbYVP3SfgMb4",
  "key33": "3sxnDfyB1LHQfwctNTvrjkC4h3YbEu92RN3fPehCyGRC9yugbR5frBjASfWx1vFARpfLSGjwz3pkdGriDEnSWUAs"
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
