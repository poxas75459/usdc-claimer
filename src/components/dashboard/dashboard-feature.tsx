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
    "5pF8ZvAKj3afaMp7zRYjVuTx9XxepYs9pkCh38ozUm5c76D3ooAy2DyPpyeF3EoYTRyDZJ7gFddsaKxP2qZr3DoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r32F8vSTvJGVwFZepgSBaDWCL61g65T49bSGaEqePFKNshTgRgozrHV4jmg214UDKisaXXA4gn3Tmi5isxWnJT1",
  "key1": "3CitBvd2d5zJoAD7DHKW2x1L8AZZkksHQE3LBMra83ckSFyKLMyf6EcYUpKUwfGN5rFdsJSubgkozd7443yMMmvx",
  "key2": "EqjRCXwHGcA98GJZhfwPEoDHmE5HUX8V4UaiWVd8pz5CRaMHso9CS8q2TRtBQVcc54LbkU2EJFEWPZ62pBGxzEW",
  "key3": "5fRzyxKL6ZWBLPw8J9DJ6SCK1AiEqabSAtGa3sGrxRVsuiPMJq8KpgopMZ1mPqzBGPMMZgcT6tGMFCPXcWgYUEqp",
  "key4": "qxEtbbtNxYp6jGeMhNgWyRXVnLPx7tKdXKj7HxWym15TKBBNzx7KjUkwXKuQazezmzqAVcD7p2MMysGUw94Gyse",
  "key5": "5bgrz2W7wjoVbVU7Wf4kqvEFXtjJYYxYd3puk5xnc5P9rzUjgeTqLpR7m2TBCDF6gRDXfoVdhyS5sCxt9e3LrG4G",
  "key6": "4XbqNZ2StvJ4BT8JDZui6PTn7hsuCnWYkx2f2tGofU53cAd7VbuNtVjz8oS4oxs5wJutFV9tNNUebpHzMVP7LBTg",
  "key7": "2eSsuxBkZcPw7ivf51bfug7ZVohHTJWnyB3iZENK2Mp3Nofk6UNvQF57ZiYTb1h4DM6NKArrSmnBw2guqRAcHJ3p",
  "key8": "5vyn7oaPESBuy3bsQeAkMmn2FP84TyPxVvSXTUwkpfPE3u5qJyvEypitxwKfdWbsETN3hLMAnHjZFzx3ok9XuMyv",
  "key9": "3qBKy3JfYmzJi7Dpcim9Ch4Ayy66esbwyZBYuKXhJoKhy4Rwx2T5ePwxGwdzibEQMamM4KhZd3j1djRUnoWbUiS2",
  "key10": "2yShyKiU8EYANCAYdcKsUXQfQMGS3MJpd7P3qLj83ubejd4WSJvn55TVw751GErGX4mPYm3tDDwAztXya4osbHnR",
  "key11": "YYQNXSfaA4WhRYRVFUieDpCyPkmWF8FdinQTrfBmdqV8HoejjcQbQyLNFX7MnzkM2AEmePGJsPtq2yptcWC3dG3",
  "key12": "5g5vzz4mK5aSFh1rDbraBE4b7RTHwva8VkrQ8tRdGwyQHoouqh6yTRzu957SqwEBoiBaDnDVEkqYVi3zfifpLoZy",
  "key13": "4iwm4tCh3VJm3rgpB1oeyc7mJez9XNd3f9zx4UwSoa7c4DkJ7DE6KHXFCP7qr8m1m7Bmt6372m91aMYYzmKxELWW",
  "key14": "54wZ9XTTHrsVEhi7vZHSTFTW35Ue7h475buhfUdSUGujmMqvbCqnSzy3ipRuEzxanFiKZBeiJ3ZQbtmKYEUkhawA",
  "key15": "5cEKCRHX9rTNfWHqJbyE1T7nW74tonGepwib93ehy5fCE4r4KbC2g2gWn57Ra5XszmzpRboEQcqcGv7UCjSoRm16",
  "key16": "YLxnGgtUx2kdwssMT2aG3SLPLhLgRj3qMBT5AwE4vrUekNxinwVTqrUF8Mhw6LWrw9vdQ7nmWWnUrBTqpEpgXmq",
  "key17": "2Sw9eVhfxMUJ35jwLDgbUxLVPnZxW9bTWaJsLxNZ73ffNgkBSajHG47gcTVTZmrUs5db8RAwk3RtDTKQ3LFoEBu2",
  "key18": "2XGALtNbD5HvLmCfBqyic2prMBjQbLi9fX6cYeVdW3JuA7DC1pmYbq3ZXF9YR3HKQn1HqpRdqpGfwZhBXsS3doEu",
  "key19": "agJY4EAzEUesYxg4fsWhzNvB8jLtBQnPUUJiurwvuxqRmYWafdmLsTsyBSpUZrmT7Gz8suDwfGyYJhtVt6RqDN8",
  "key20": "oPgE9Gr7hWaZoak99Ke2pmhBbfwoRz2MRM9b7ZTVg6ixfFjxBtf1gnkgfWiEudG9pHfE4wsa21PwEU8FNwQiE3o",
  "key21": "2DSroLG9XrNL4NApR77z9HDsJ8rSZoTy9v62eATXXRRoaiJV2Cz5BphUa61DQ33WDAT4b3RQYYqvBxxENfcFr8cc",
  "key22": "3ZtRxihwvKf7sqNidwfg9n8KsPaHB713HLKgCFLyNuar11DLxTEhG7JgAKb1emzzLhZfmA6QrLKdzKbWWcfd5dAD",
  "key23": "DXwfSWmDbYPixeGigpy7mDf3Xqg8M4o3wD8Jj34bhSw9G6NJoUm3s6FBSj5jtVHmrTxinF6gYfNhsJJBuZdsfxi",
  "key24": "z9XAaq5Tvjryvcbjnr3qvf533UKScXJibCTrVFR7m9QSSCCemmb8mhago7e95fczH2Twz9xyGy4dVe8uZPUrxNY",
  "key25": "4KCV1G8EquJBLC1aVmX26T97951UpPdhXAe5bQP54KJTrbbTtvk7Mo6JUVtrrEkwYVzYhgUsMoxodKL1Py2MacM2",
  "key26": "5pQR4iFB9sLn6VfSZn2mNZahwfQWV3V7dzFwnsKyrzcMa2xhBZNGeqzrbB9e6jv3bMEQ9sq1uvMGeJPgsEP2boNC",
  "key27": "5PQuGnNGCKGBoXf6cXhCahwvfRiCVRACqF8GszhVSFpavJL5JRQDfFRRc6Wzc1VMcBx4v8wZ4GZ1jKV9aFk8gEF5",
  "key28": "4ZUj4c3FpHHNXfUaHiw3aCSnycHZW3CyGfMnFssy5EidEdN3QZ4YoBZoaCrAdqiuTHkkr2hUQHYHkNYHtATG48Rx",
  "key29": "351vXG6tz3qxExeJsWsHUjvAj2rgUUuACTQfzPQD44DcQBgPVXYN8xyrymRxLtABxMoYDXNAzDJbfHq1iegNxKo5",
  "key30": "3B6QfwC3mGJfKFzRuczd8PhCoaQoM7YB9fjpiy76iqzszy8JM3e845rgoq2Rar6sDnJAAiTVPofvF4v6VoMJJHXw",
  "key31": "2pQNHysJyTgjSRSZvh9E9ttAH9WXy3KT7amqHsdTucCt4oX7Vu2HcwNYF5M8oKcrAQUuZCJiEXbY9XyqQzy7s2Nv",
  "key32": "yybmCeUDYmZ818vj8wn5josq7EsRE2amXm8ujrCKNDPDLZyAjKwmpKcP26FrW798bTCtQAqPEahk4vpQfVKFELU",
  "key33": "297aHnfStXMoHNQEJ83fv8D8SNv8GHFnMXbyHqmuuhtM1hC2wduHwNRQ9wZ7XDXfwVX7KxjPLP3XvYrEyHgGq4H1",
  "key34": "3kqAcQi7DHk6NrWEntAypGZoDt7s5F5x1NsVph9jMdBTc36Cq17eXh2JY5xKfvuaQrPv8bYNd2HQydmyaiij9G47",
  "key35": "tixTiS8zH937njF7wZaEEtcN3bf2AyCnnFZjnJ2XYyw3PzxfG8VUNt6t88bbBMkFtf1agZjHVQvR5AV931MJSEr",
  "key36": "3HjPEAxcptR9bVhPSerKAQgzkd1YvVYP7X6s8wyd38PQe8tiqhsrNGxv5NGUtEf2P6Y96oQRHyvdt8tSqZgvK4JN",
  "key37": "5jcM8B5rkxpTeGHFUN8V2PHKVNfdTkLQtNbLEKRf9GFWa59euNhaN1PAKo49anqRgmpoNaC8Yo2UPtcgCfK7kTG7",
  "key38": "3tyhdSN7y8o27ufMdgRYo8f2V2qQiAGNbH9bdn1wzZbo3BiFTB3gnbHvqNqyfMpsyhYW5zdjguQcazJiFsBt37ru",
  "key39": "3kaekH5R5DGtyTDt7uTrCCP32rNDunvAwX888XUGmj8NG8o1tctpVTV8ezmVG696rf7Z6Mu4fQDJ9qW1sYCxyQN8",
  "key40": "4z4rFRnujSgWtFwjzVmMAQ3DF3CE7jLroBrUdHG1d7T8e3vREXtFte2j9mDE9CgPRvo4rztoMXKiSDFEaqW3GTJj"
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
