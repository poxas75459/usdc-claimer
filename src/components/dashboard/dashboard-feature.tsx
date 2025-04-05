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
    "5eo16AmoLjMSGk3opQH81AqwGmrjP3a8S6QASbqruHwE4T4niEm7Dk4jXrk8kdaK2yv4yNj7s6GM9jxnY7e9PQNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GjwmWZfRv8mU4HBpj4HE49WmHNZqkHhVKPECfLVXEd888bUTBnUmcs6GDadydaxdHQaGVNfyUK6YCidR8dMv6Pg",
  "key1": "5hjuWeRwsTr1QWSxyk4wtbpjsy5WXFL8AAdKX8LPZBZ4SSQ558KkW3mtx7Mhab6xs7k59tkVXALsZwQjNPXn9vHM",
  "key2": "3ZsVUDZETZs27rVq9pGsGRVRE2DivuBmmuPsWNrKRJ9XXffP2QQWSeFHAVhQXD6vdJkCDGPEt5Zyu2T9YfxLHMDc",
  "key3": "328M6eU2YLdSAdGd6xTNcLUr4A2GcGWaJDecDpCyh5tGw8dXNvHLA52ckGuqYyGpEAoFrirB9FUs7H1un73pmM7X",
  "key4": "52bwH1LoKNC9tGeHcBSHYbBSJ99cTSUEDTR8kg7P4R3RoGam7VjW4G1nu8HwF8Rn2wr6AW29rWYSTbkgxLQkpNEa",
  "key5": "57soMjgNwx1wJNcxCJoZV7RVNxgMJioiMEgkDfAFw8mggLXH1FCrCwc8f6oK6yBExUeGxWecRe54y5A6W4F7cXKt",
  "key6": "5zKMWo7t1rX6xfGGdRje51TKeZDnhoNtS2gr72kssyZivYFHyLH8o8zH7d3o4PamDzLtmFLAXeJM1Egjz24YNwg6",
  "key7": "3sNGsgpkAv8RScoPHvKwdrSdwte7Ad8wMq4QYgSbzCMYZiGYJdGvsoHoC9WsuEhdEPSyNCn29ZTsFJQzzxxpK667",
  "key8": "5ek1FY6VrxDGwQ5Y5pXTWySnK8hBhy6aYVWZNeCYByMjm72YjFaATy2zXoruCCk69sitwdcTpRyaK1rz2vhTF367",
  "key9": "394E5ZeHhCecAu3gEqCKufpRP2qoHmaAjk9pRTbys1Cg8YKAKp92q4eKYdeZ2nWd1r6GEu5FLefTYuV2URnQRn4q",
  "key10": "4aLpYukfMGR2udurbe81Xd7Gpnj1bqYPdz2Bc7mXWbU7QvcKZJTr8X7VhT5zAKH2zpytiir6sZcSWbCV6Dh9iSra",
  "key11": "3nyYApXqiV6EGmeRCx2pqNrtzwegzwoFyt2T65pnfAqCWt7vTqBAi2mskhE7cGmkVYPpgXeDqeg6x3XzccZ3DmwT",
  "key12": "3PVCy3D3U1jysMgXq8XzRKFYjouMo1HmBycRvagC3tTQCkQpzNEoJbh1SKJkLoFsfhFdSydmK2N6VUEXqY2zKvdd",
  "key13": "5vHFAnUmpbVf9LXzkHEhMFz2q4dGmvR99spSWth1LfFfaMDq1zGJC1b85MmuTVZRFbHjhhEbhRVveupyGSuzonJy",
  "key14": "3iqMLn8m6GtTWmp2XGmBL6mhNEv7EyMyRhQDtRmc5FNPdBZ9qHQi28FsUefLrq4KsUDNzq4RmmsfjqrkutbsdFBL",
  "key15": "38St228ffzV8aSBj7NdbFxzVHiJ8Af998tUBQCdq7PvYNL1be6iyndXjSAGiWXqozd674H1KSNDi6mZ7MNaVNhz2",
  "key16": "39gqw2ac1VftF5Zxo1pWcewxQVoZS1Fj19fa3Bvxf29zXveTESQdyY595qJxFKRvGsf6iyVJ35BhA4RbnEAUZBL7",
  "key17": "55UJvL8kCVUdh1Lvxr38XxPDX2SoceCDb1XPuekbZccN6gCSssLRKJ4PARYLkRNHJatP1yTaaNGM86FYcha6L2CN",
  "key18": "9CkFJgcJV5wpkcmsWbPcdYddrSM2Q1kSQiae15zx69tEVR4eEkEZfWtPCAZyDFAjt9YsdD8GMrP9yqa98FdED5W",
  "key19": "2TQEnKifWDKuUUcMRWTXdjivpQkwVSLcCmGh5c4kKGUAd9USDCpjpJ9rUyd6DJ6mtDa1iQ67ByFF3tgXEeGW2y2i",
  "key20": "2xeu3sarGQoTuq8fEt6YQ653UPjHGsCKS4dPKidJNiZtaL5DW7bgyYfNoCfSsR8kz2bzAcVAYHhLfwBjczwR78RK",
  "key21": "4T4Xhow3LsSkVBhGqngBgqhdaUDCWuDqh1LAKgPGYm5fam2o5njtWUQcxvTrpeDRyGNKSgy2A6kaWeE8UzomX4x2",
  "key22": "5qfsqt6W55myXf1oeWxp1GTX3gicVeSL4KMkh9oXxXdUDr3wuZZQB7crb7McXJrWWA2KfnU8v8vgVXdpZivNWbbj",
  "key23": "2kNBMkCDzZckpirUbDa97LcW2WbRao83o3aHJ2iDfgn46NK2NURSMcCRhQA6KSXfmkkz6kZWgMTS6T3BA2vuXfff",
  "key24": "4w9hg1212jptMjty2zRcvBDFCAbc96J6uHvMu7YsiKfeB22NgmbP4B6dmqKLAiavTBfnBZwZQkJ3RhrJrQ4xizr7",
  "key25": "5f4MfYPazaNGDQrEbKCbfcrC6gG1QzZ2nh3m5uAVi69XZxX9Vx7ETjkQKHGVuY7ji9cAz4nesFRHaozDDwx1rPiP",
  "key26": "2Js8bzGUfvqA8CAvdN5QrE9rZ5UTECD7DommTaaY2MkkLEViNQwYqXdFuKwrSwQvkrqPmCU3kvD2UWN4ALwSaHVX",
  "key27": "32KMXAp9UdWv2cMe715XtCvki645RXnzC5srszh3QKBLZBXBEqrV3EAJ4E8h5k1nhN11mpzSvgTKG1tLCiBsw9zc",
  "key28": "54kCo6WRrx8kdYoGuAuVCvCLj4gxcvguWpf3UwCeuc7BAAWJqT7HPqp1MW1QZUwFzaL3yssuLr9Z93hqfjE86QAd",
  "key29": "3oZdam154cQ1rcQqKq3LpKw6XYNfYt9PhzCrLawsp9T6mNSxet8cF8sjYDs9PWKxC24gdePMM9P4bYHL2rQzxAAo",
  "key30": "2NwGn8AwzknFG2mKAiPe3HE6twiBu1ENtFakrd6wYtmTaJa7a8GcMqJWkzYnqFNfVAEZZVptoYi2Y5Uw2DBqBU2s",
  "key31": "3w1WrLKSuaisHKZEvf5umYHVuUvaziLoMefH1X2tae2yBA4LQdZJ5Et7aBp3mXXdwy1aENtK7oNVVXzK5X6Ys1SS",
  "key32": "5MgvUvdrzxT2DEoC249CzDYUYh2BGeQUqsJ6eoAvHwvNyeqVw6QVuny8e1aFv4EF9cmdcXfLRVgC4kU74gwBtLyY",
  "key33": "3A4KLh2KDDzjEyMjwpmQQkumMShyiFAEhX14kWXGJyMrtU1Sv4aQpEmkUrgRqPHhMkug2ecFTbyGR5TEegPAx6q5",
  "key34": "43UaChpTgr32JQaNeMBdU47K1caQqph1JNDdWvgqXsVQNb8fF542YKPXtEsAueopH2n1QGZ6a8boMooF9fCmeh6z",
  "key35": "65cEEpYBGFMkCXcGgKu5mMr1udofPRkibKuJqXU3qjkFzL7pBDaoueGX2Ce6JLmM34a3vra2qiJMGV76xPpnNTQY",
  "key36": "5kTjE6sFcbVMWMjpB7hncztaMmqNAZpeHqJMWdWyFgF9wZLHvPz8M5yP4aeLveURygmnRnJVQ9wSeBkCtFpKi7wp",
  "key37": "5qAJZZWxe7dBbucwEMw8DZJxoHsCeSMZ6iMGoPeNsH9PdkY4VWVnzYRykc7bKQs55kKTJQEhNGtQJEuKHZ6JCzyc",
  "key38": "2a6xmReobsHT7ueQ9JkyUbPw3jzJ9byua95B4U323J2n9nMSVD2qograCzJTXCwG7NNpRJjGeq3npbfSEE6nD7GJ",
  "key39": "3fUz29SQ2aJ9tgV7uWMwrusQ3pHb7xcsc28L9m3mBLZfpc3bj2oe9ZNgRPUEcEzbyCGb7EfYsrVNxp1hUSJAshNq"
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
