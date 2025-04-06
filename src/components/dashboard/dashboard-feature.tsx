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
    "5ToNrbdjBZ9L1rzpyTk6LCxiasmwiXWvuLUwj6tS1m51DRdVXqauWkbQFr6rZKcKMoR6MyGLGUBS5BQ3BHB6EVRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6g1pGKg4ubvNyww8aLdeFAvpe4EwVwq81AXSmU97AgqBWjybdg44pweqmMvSTXzTJtGXCVmSjcyzRwXG1E8xniw",
  "key1": "5XnoFhe9mmZkVXZFkBx5z1QVx6J9mW2MuF7ibDKxY2HUMxdJHZFwnZTT7qd88qCqLswc5YTjYWdj4Hbe8AWpTzsT",
  "key2": "3Df8TbMqyaG1LaqYoa53mrw5HJd4wAK6sYHVhV96gww6ZpUKKfXBtdo6UiLkSMwL7LDvBMfDaSHxkVJTu44xUsWp",
  "key3": "2mwQQ53i99bpqKvFW8kFpYtWjx9UdXNsyazVwNWd6TE4wRwy2hi6Pw6YvQN3thVgMRKGrKxWxex7fgbEU4AxCNJx",
  "key4": "1WenUsZkBb5fa57WqMXnVqh5fMZ5YZEv2WbegKpMJMoHMVccM8sY9c1aBxgJ6ddCTt6wZNyxYpAbMfZxexK7GmC",
  "key5": "3v3dzeVpDWo41rgV4J6xuraeWHVsdTMvf8JGWpogRG5J9fLyavHBbJz7kRqZ4QeeFKiz7XSgACxHyekUn8DP6x63",
  "key6": "4WinGxY8Pt7MkXrC4PfE4vgU76Q9SkoUjsPNXb9ZXTHZRaReMftqBEQQErunfhkiUgQyie3m8hgsUa1R5U8D2VRV",
  "key7": "531jwuJGQZmrP8tJUwCrZT3bU3dBpQX9Hdmvqqfmw4LXPrWFw8GTkUz2JNkoa6xvnuv3E7VfdBz3mDb3U1xZ4Zph",
  "key8": "3Fy1Xc5fNie2j4KQUJwzuKKjrqSTXi9mS2SNnMgBZEKybE3TcVRVkSdxLWSmFCs92poUSHM9i6QSYdp2fHEDN5Zv",
  "key9": "59EdJncqz2vFbYLpPCssMvcV7MYwavTZweLYHiUTXaraPsrewH6v3GXCuqNduRMMFQ8Zsk6MbCKT6YZujUHdtb18",
  "key10": "5jNzBFb4jmGowRp8SvPMsoDawxg91ndLbhx33ffBhJjNKidz2fAxai1NboonCsh17L5FoaXcrAx6QLyyPBThDYkC",
  "key11": "4w8YKAnqYZ6Gmst4JCtyBJpZocEAJsGwkmBsKEqV6qDLYXPNVYfZGosa6KcUmVdWKscgvhnoyq1Wg9bicxBULvjN",
  "key12": "5dwwzvTWWxRSuMmwuHRrJuTKWMmTuW6sVJrwyRsbmNCp25nvobQW6xWP7djbsJo2cbKbmPRCov6LgLi2DLrpsRQY",
  "key13": "5eJ9wPY4Wn6ecQ6Dd6trVCFFnr27dGSPUHZU9MvVr13u2nmzKdjs7PhttFWLRUctmbPfz2X2KhLZP2Kj5tUCMsRH",
  "key14": "5g9pC5pvt8o4YfojZWWvJHgM9LFGSMpFJtD32S7v5eR5sePYMKtTxuayUz5jgpUWrvg5jKjhmJKNfCUnvPoJxV2A",
  "key15": "5EjyirUf6iaByx8iYpqPXYGeaLkDMMeL7QQTvStGPefR3DJMSvWg37oNLgjndfgq2HXZvPhZQHideAVVM8XJW6vy",
  "key16": "3NU6Ry7XYUU9J2JpnYHD1ZkCkVGYvuJLzALAb3PEWnWgDffR3geB73dx73t1fVJtoATMprqGHoXvptZCZRcnhpHa",
  "key17": "HBAutXr6VGMmT5eNRCG6R13HKh4skwfZsVQ1QpdAWrXDRRXvpCrGan2Wv9yDtgteCzoHGugExZgnfSMqRrGo3KP",
  "key18": "5nL9DdSHHCGJGzH6FWRrALTXcFKxThswUnBc65QzfEqvPGJ51zoMD7cZWd2E9yfF7H6z97gSU7GrdEvvFpTFhtoe",
  "key19": "48f8MWcybEkThy7i4eKsqqqJwBehMfhWD6xpUEnHokosDttPSCdhGBP7pDuts81Tov83h55Tt3jwKjhALTiqcywv",
  "key20": "4ykcw7ATrZ3M5zigyGHkgVcwGhJLm3tPCGQNB9ZNAYFaKiY7rraYacX6ja1XMU5tJRk1xmWuB1Wahn6JR3prFoCC",
  "key21": "4zNBZjE6HAYgKwxPLRuWB2oJeorwqYjQ4jXgHdikQyZ4FtWTZfKjxAL9FB4sANgrYnE9qJek9UoWjDibeBQ526Am",
  "key22": "2okFNYx64qn6bQtLd86SoQLUtWm7g14inPz8e7hKjMnr9tL3CosUCYsMnehyeBoN1cPRScT2veYC9WVigLNzjmpS",
  "key23": "omMmuD8rBBwpC67GqYYKUUM5hWZhykqkaMnCxFEQhQhGVm6cnrYpA5kbK1UBW1xwzaXUztYS9BqKfSRirn3wPrs",
  "key24": "2c5YcXXL5bCvgHLk8fUAgWUPchqdYsYkPiwiVNidnFKn9D1DdkERrhdRczpkdkMiFLFpNtr1EmiKVLRiVpBvRCPT",
  "key25": "tppVx3zPRm95uyxrqG9gYfLPebzUSkNqmsCwrYCrKb7yWPiGwx9ENa4g3huYKg6UodLgoY9nz1qSoLo3p61AdCh",
  "key26": "22tx4M1Nqqb5Zn75hxJbM6tSWGh26UmdsdnYZ9GXhv3EBW3va45HiP6QfuNHN7qUZuGtiTvUn9XMRWAcrm39BGSU",
  "key27": "2ybUyV2Rfjmz5V5Fin7AMqfLHsHzzj9ZLHHWUdvtPDZqoqgiLW482p7qqg9bYWF6WLWFtGZzPNeCiVnwTW5gtsWY",
  "key28": "F4hcHvyVydCwUBz7kvS9X3jFc3c4ikHHYek2DfcjS6EpiduNMoo8gQigUpA5uEc7hSSV11FN1M4exKQdY34jzVy",
  "key29": "4UHuCT64V7Dfwavsk4sziYHoRa8UggXu4THj3coXncLNY3WFWHDJ9aubxzzQSBReZCnDztHZVZzvzhApnJZiHPTR",
  "key30": "4WCkEYTZQ65SCm3jY1HNJos1z75mwgv2ZFv4MiFzzMzzqBCbs4haDyLEZXzwmvqC4ZyETKK2tm2LhigTAaJ5Qrsz",
  "key31": "5BcXRxocmTMEGSMyV3zz44hDWf9YnjTaD3Hc13PbCo8VjTvaGqv5yLFsVSUBNGNKVcUhkGDjaxRDtmfWHdFP16pk",
  "key32": "2qNv2mMqBEubDdC1dWSTYmKe3VssQqHtU2TNL5h8yRE97ciiEvBQx5oTSytwFzeJ6StTZJqY7znbBVEDNe67d2gg",
  "key33": "5HMTDsuomgDPjaak5KprYozmjf2WhKx9KjMHKottC5as4MoeGYEhnJrD7Vt3TwYPbzXi5r2jixf7qgn5XUeYnSNg",
  "key34": "22fc1qUZJrRM1p5VyfKD4wjM4nfjmv854LwfuGmd1f5qaS4vUAWJpY7UiDJaknHFMA3eRXpMGuAUz1BWG7rAP3RF",
  "key35": "WdVfqnGJ4KUyceCnkKnT3Ldd86MTDQd73T1LC8huZuj5kapbjvWz8E5SXqaPN47ZcWv1EPMjBoePwYbaYgshGPe",
  "key36": "knsuoPWhnwpxaWb4RwUX1V8xgQH9ygrrzVhMMoNZkTU2V8F1eYrCTYNi5ZqSSpE159RBFR3L2x3mpdpGgiyT35m",
  "key37": "32DTrhMWNXbRcMrRjeed3XMsXHGyLF4qNVWKdEL4khu5CDB926imLyW9SoVE7gSPWnwjqyLBoXNtggKFFMEnMGkE"
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
