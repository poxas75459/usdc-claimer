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
    "2muprGFtLn5f5F34K6j5BpfxGvieWapQa4FuBkVQaB9LvdgtJ2JrV9R3nm1ihZyrnEE6qSUYw1bJwxxX3vwmRk6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31CwvHfVbwyxGDgMPn4dBMkb3gRTZnRPDGtguuxAJ19DpmodPEsDpw5EGYgVVYBCB6RTy95KsHdnaTYHNm1XsUCQ",
  "key1": "28axUVx41nWECeRHTJvBdJMB1fFgturEYCBT8beVdMnEwh4KXHFdgjr4ppDLjgrwGm6EDpwKRUGvPUCdZbHLQe7a",
  "key2": "3bbj5CinUzWnVXYBfkRmR1KqsxC19GwPDi3hbZjhZ2nEiULR9PuHkMt3CTs5PJa7EM11hrUkbrxxD3h8gqcPnwPj",
  "key3": "3XhVWm5p1BbmzwRaS6RdbRo99NjfPbweWobpWyXJ1uZ3i7xHdonda6ZJKfo31snMpuNrFiBXHRtVfA22tYPWg6pb",
  "key4": "2qoZXjZrAXV3grvDFVGU1mz3fizDnL5uB159PJESBwYG9DmWGYTpW9PtGfk8AVKB6KbtZutL2eDuAkKD9tB9eB8t",
  "key5": "2vewnwy9g1RZDHeSEZMzhgGE7dqmT5SPVNz6XuhmqMfRhVTABGEEPhy3v1mZEZces8sUVXztdNuYczB62qvCcQoD",
  "key6": "49aWPCLboFiAnUx4EhBGNP56mbSNQoWAWeDc6mzxZXeVKJnufZRR3RmGWxreXupLbYiWXGzqNYforR5CwBkowKXP",
  "key7": "2W23bzf6WAzJ7XWniBg5W3Gc5eE6orFkKSRL7sy9SkXN7ghQx6Cy7AyvgCU7M4Gufbtb1sEHWssx92BLBGBqdSJT",
  "key8": "5TuoYBGYCzQ9VPise4oq8ZZZMqVQfawFHhuHCCUWpoi75kzTbTkB2oc8bttU2jkZUKP7DygNnG2dKVhDZfNdPXqD",
  "key9": "57uBmQdRAsE2YRLoRaqsxEoPNcdjiqut2P8nxEnT1RBtQ19YxztZ5dbeXPbrAVuWu1caJgdEGkfCaC1ps2xhnpvF",
  "key10": "5HFsQNaFSdKKnbcpmpjCwwa8Kqe1zBpfjpvyBPBHMethYXTwSUvWy9jSZSVtSWvmWiZanu9wvoALM87nc5VZrFxZ",
  "key11": "4thejvA6QdQEnZfiUG4KgcYMZMiGXEyCDu1mMCCAbLz4iZqqoYqsVhYpd7X2FG9H5g1RzXtX4TiujYF9LqjaWZN8",
  "key12": "5MshKiijUDea8KgoQiaUZ9aUds8QBqsT5M4ecnpzFDJFjcsb9BiG41qcS9QJKBRiGwWzZJFgnCE6n1TxoszRMJcE",
  "key13": "DNMKfZ4THTSRJKfUWU5FfuHrKwb4nYRwHQP9iCx3fQiWuNNxfhe9ZrptfhxtYu8QBhPLpg16xuGdgzvwSRr4hXu",
  "key14": "3t34PS3jEzFkzAKMMq6mHnji3EwRgwMUtqaJ3hgh6ykXJ739BCgUWTEsbS9EfuQ5naLxjTfUQQaeTYsnyp6A4u2y",
  "key15": "3TCfCopyTtxXq8jG4d1GiYbTUHhroJ9DEkFdGRaUT8uSVcQwHQsWCiiT1JsVDUDxx9hP2qEqzfZaSSNFK7b9TX8V",
  "key16": "2mVB9QYSVnKsvJr5PVGGBiLuKbQrdypVSgFJjF5ZKA8d4kBcBEHFXWrq9SkpHyWTr5CR4UBDY4XQ7kJPrwwbAT1y",
  "key17": "2h84SwqMbB8ZmoDK2k5r7CJNpxA5pgNUbA6LxQLByLmqJnV1WESVnXvLZMfev4ATGR9Z8Jui3SeQVsrTjEt81baW",
  "key18": "41njw37TuHXnPw2SMNBWTuiKSaP5h58Af4GK4WAuVsaJT7sUW64GpmYe23Rxh3uPvfpsuFFv214bSZAvH5SWxmvT",
  "key19": "4aFZYJPfFLoh66QpTynBUj3DKd4KRTuAwryRcjAoj8BBFq2aVaxdHmzxK65jFjeffcEbPuLSzXpsHyQSetZi63dQ",
  "key20": "4SKQEqEa5gs5GGrr3Gke5bMk6Q1nVqEACVkCTaA2osXsDjZsJGGz4zkkTSeGn7haZrxqnoBGGGRxyhLoPojghPdW",
  "key21": "2t7Lz9KsFKBUp7ewQLoL17DsauuyHfystCX6LgAveYd5M9oXjx1CzRicvAZ3GVXzuGdB6dbeDW4JarfvxGSTicoP",
  "key22": "2bodpNB4xQnu8KFZH3jjwitfFbUxSzxYRE6MQ8X1LEfmXSy45vBmtZJur5aint4Kjs8Gmjjd45v1QAPvdW3T6Bvk",
  "key23": "ja6uF8gTMdp6kSeedq2rGaDGux7eiSpt2LA6hHM2UyeCz3CYm2q8JuhK47mLHLZwLpJsJmE5jJ1NEjYPojA5GSZ",
  "key24": "4jMi5w1WUEC5zxQuoYwDXkgoGdFMz1KEVY3iKdazEiV1GSBidB8rqW2DN2Qp6ZfyqvV5PA4NwibxTDuzVNvKAoAw",
  "key25": "2cEYaa44ZsyJrHzCBWHwF1NGshT4hdehLh9wrZpf11d4mX5mhNcf7e2JtvLw87ftLTbsbBRvdJTyLgnvrPz2bxK",
  "key26": "4nkWD9TUpbGEngLZjEwe8bmsrjAqVRdbAnv1wSxcWohzMgPsEzWwxAdQX97XkfGdhewJLvtQV9KxQnkZFz1stbNq",
  "key27": "2JHDsVEHndF4fLLULJvjAzGCcTJ53tGLkCnB46PuFudYfZFAs5jMDG3bsXvpKGz59AYYqdjrxkfm64C7jQE6DJbG",
  "key28": "3UuKt1fD5uUpZ9zJkEwtzWBpcnkR7f2ojaRtnSF1d8zd6VBktafB8LkgJeWNLW7aPHKjS2sj6nFX4e9A2wWxqMo5",
  "key29": "2hjufS7KpEUYx7TWaUssuFKp45aNdDkmyTQ53oHu2fkSEoPPqpKTtTCFcJLW4mN525aHxNv11z8mKyGEFhezWMHN",
  "key30": "4R545iCmYXYJ98NY3XffoniPXeSLR8rqW9oiJb8Ly3nKhanGfh5FitHhzJquUWLD4Nez1bknqwW2bGD7oyeYbo7v",
  "key31": "31DZpLT98zES8ezjskPKvhxUKqT8iBM8FSB1RXNNrdmHV8VhPkprdAEPxq8a9z4JAgmqBz9Tn3PJkZL6jVkkJ7pL",
  "key32": "4DyH7ENi6h2jb8Y4Fsy9RXBAKcQ486mH9ifumSrD4xcwc3UZH8aD6auZSaw5hg34GJQmFc8WiiCFC72PS7p9Pvjy",
  "key33": "Q9FJwNBPggUTFGPYYdSr3yLYuViSBrJvya7ihA5htVbTGUrmcJDHUy4zNnyNNHkxBrHcv4yaA2vYFx5SDTkfoma",
  "key34": "4CUsPGLcwTJ47pfCwFsn48Mn31Jdyy1TzzYQdPuhw1qYyEczKTTmCd6DfjrXaAXbdxWkJkJbCNCxfm4w1HmT3VrL",
  "key35": "4US4ugZqj2JxXuXEnMrrwGonXN9Bjvzi9Jw979qiBBNV6zGwkeSJF9qnC71GPqneDKn5icoq8n9qtZ7fxgkUuvo8",
  "key36": "y7mA2dtpWL2FPzSbVMp8PtUDkW6L2BB9zuZhg5zT3DtU5nTCZEoaWzzeLX8gFDNnwmmepziDEGjiZAvM4RNtKgS",
  "key37": "3jcguaheqJ5esp64FDZPKZjrSENP1FnTAeBbhTPxhDVcPozxTd9KZgkpger2t8sZbWVeoW21KCMt9HuzhwNWqwce",
  "key38": "4US9PLquFajGtkBnzY3EKf9tJ5QwJv9Pg8Nb7gXezSDtHa76Ujp4DTMurfS6eZ46DdWLgpdPWWZAkHzcGirCiU2C",
  "key39": "3VFdLeCG55hDRMKcunBp6o3u6uppLYPwX5aZrrSsARaxsyGp7QfTPLDsFaWwrFKFzRHhbW1bRF4XzuRvdL8Fj8aF",
  "key40": "5wLMFS47Qdri4EVctsHQHsKdCpfsRbR1SsJnDJiVF4c3DuNJsLjkDzZNbWEFamkQ4ak8My3zfNGWT8YE2PC3wipH"
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
