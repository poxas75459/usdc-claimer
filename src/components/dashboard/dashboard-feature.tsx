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
    "67jVNiidcpJRQfKSZYMAsCHaBcaESzxxudszNC3tBBbkubJgdAy9s3VDHSocVHRzfzCGtYKDC5VDpdUbk3KD3Dv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jjjvTtdKd6WCR3Nok9E4QadNbu1XxnWeU2RzV3m6DMTPoiCx4Q46Hg3UX1vEc9xxVqTMExp5Pu4e2LfhrzmhxVb",
  "key1": "2pZACE1Y7KP9eGqQCVAaFyqkUiLM5XamwU7zKH7ssc7MfHqWWs7okX2wDoDUmdLnEZV6YdB1euzeSThV6qaADst",
  "key2": "6116LwPR7Hc3ZfnZEN8ZjhHAadHpfsiW8c2r3emA63K3TUZEYJn2Fd6gvahRGrH5h3TuiHrfqGKWYmPXwVZUbmXe",
  "key3": "3jdXXK4ASV6SPzLQ2wd33myXe9cbGGXSo7rJQ4FXq7hXJ3SE5BQikMapxdCGavNBqqorXHapNQmp6wcik1YMNnTN",
  "key4": "63oSE7rRYP88jhBgdhK2gyicgyYCNdjuGT8ragWhSN6MqmxbhvoGwSAvA8cwxna36pd1778z4BMW4N3JB2UJJkc9",
  "key5": "hsrYjZxU3xQcWyZgazwntwKXNfijuneEEimKoqSwgsDU49jx1eBtoGF4bsN1WAUidxdZLyZeXZ4F9hn8DqAwS9t",
  "key6": "5ibbfGMVyVqPLaGx7nPTTLcyavZePPX6YiEHgcaTQhYWzk46Xr8LeVL9Fe6mWpSghEa5qLnuXh8sKQyGHS7Gc9Hh",
  "key7": "51C6CuT4QcaS8kwJNj7LdWC2oLovX4AKPePUQ7q8i9W4ZKSE5xVHjbH2XrnP8KeVNzSYBSNRD4sSsizyQR2NMTRo",
  "key8": "3hrX1GoaTbLamEjvHW6aLRTCEghz1azyrh94LchjgRHB8cQrwGevKUHHLoQZuDdxaLwhXDhxwv2D3YcFtnXnGUvq",
  "key9": "2h5N71trAGdvzgvWja9K8mHuT6EhFeYAFrwABgjGwfBKRyzJytBRK2wDyKyDU1G5b1MPsVGqbNg8PM9jrBZwJHMs",
  "key10": "2V1JESbB1moQYafk6GHw8kqJ9BZ134uSFfbS667KCLoZccAnrjYxBteB3jSzYV77vKdLU76Leouj1PcMpaKAsFAM",
  "key11": "3iiwkvdo9eiieLQz155jTx6ux6Cf6kVvt6LcG67hg6L9Fau5Fq3UYRgLRncgsFFYGCBG76D2KduRL8giChzC6aqV",
  "key12": "42YvpPashqWGokVNfmbWRRBRB2ZHmB5f8xjvuBjCmaGm34TJASAifgr6TwkS31bwD5PjaKoAyzasN5P2KSSE9SAe",
  "key13": "5dhTDhUEsvQaaKRhSWnWTKtryfWeNSYhZbuEBRuYKBKV3fGiDPLsXaY9dr8mm3Crph3MEt8RvcJDbwTCGKqyTWiD",
  "key14": "65jAAtHfAEWF6qfFq9R9xZZeeqEzts162JotPMHdaWQuB84S7a2VXS8qKaWo7hsAADfUvrkG2AerQj2RNqNJjwdt",
  "key15": "3dfYF9QYxvLVSWNP1tMSCt9ZWDBkpp45JZc9BR1gEQZ52SSckNA8ohZCxjRcMAPshWCDZW376psdXA96gqjmsBgk",
  "key16": "55qCvPji22Lh2orMht1udjEqYYbSLZiUyRPGnwzmVJ5inGLNZQfPnUbC98bCHrMwgzKwwJ2eCXC2kXgmGsA2qkLp",
  "key17": "2KedAoe2qoqjSdCbk9eXi5R7a3vsmqyBpxoZiZ6XEDjZLcW774wWv5VNQz6vRLLkFWdb3m9JFQRZuNKiw7Aaj3A1",
  "key18": "43EvyPEmHPLYP1imTemtzwDpwbTqeZ3qV8uSgjdHgqxKqTncp5DdC9APrQSnVCAmpZSXvrcdJjG2rdw2qGiyCorE",
  "key19": "5zb12EMNUsY84T3yZkH7vuEjQT8HM6Le85Jsjr9FwL6VaPvnXQAYKCPkxubXuueaPTsodpgB9pyb3nx9CS3qboA5",
  "key20": "4KWR42V6tbrzYDx9UkwgNTkMChz1KgeJrcoj5jc1a5NsZNjD6omvCnh6Xo7KW7SGo7NtbCSemjWg61LbN83uYCRr",
  "key21": "3pQfedYT7oNVj2SCmEhR1dE5GitTGw9eNT6hxEVoxkHwzPD72Guxy62MU6PVNJ1c2MVxdLaYE4Kq8cfTiGjJUC79",
  "key22": "3wtVF3cyB4E9dwDmaaY9V7dFn5Zi1GamhAJPTzGDz68s8146ocV7Wmd6JfjTX9PQvGbiL1WdQXnJYa14VDQGZjTi",
  "key23": "2rUrZcdgKD9W949kSz86VheFARzV2WWaLW6GkW1jdFFQGzS7tm2fVcGYFgtB8n6sBFRiohHFuxLsQC8JGyrYxeqJ",
  "key24": "mpMCrX3tY8Zb7513F5r6EtFhxeZQEnqgefY1cMXhtGoV9trCkf6Y6d9hb9iFWRa87b3iEDHVJ38DVoGj5BWncta",
  "key25": "55mkgouAS6zwrG2EM7eBvempL6X4hTxT4vs1id2VSywHB7Hws9Pd8bmejH3essBRiRU2oo8281otrX7kFjkj1CYJ",
  "key26": "4R93jg9s7762JTEEqqv3ibhmDjKcs1ksJcfq2mEr7Hfa1RY8qYX3qGDBD9xRBsRgf6fS1wS6hgBVWwctjZERv9kv",
  "key27": "2LzaiVEz55vohqBkFXdC6rYSnb3WQqA1bjs5vbgmm8LfYMPre9Gy6Z4UuS1x7KK8aZujCTXD3ej7vApaRAMGaEr4",
  "key28": "2rHVvZgMVxMrEujh2THduCvXMgBGdm65yTSCnUL6Q4UdCnnd8TtzKNMPsTwGE6RKSDQofDBeEmHAzAqERJhbrDtz",
  "key29": "3dGCP67iHMfDsWord5PFxaKK4yUYhknQuwq3ZYeWcX33TAH9C1X5KM69r92DUPzNXLUwu72nFwQTCh8c23uZbBPW",
  "key30": "3hJWvkyPePBQfu6hJzi99ZWFzgf8MqmHebi832JTNMFernvkkTEs8mH1Ej88xvXNSZ7g4M845xQbAggEfvB22xRv",
  "key31": "2voViWPfnwSJvwYNhv8CC3DZcRL3NuE9ioqxif22AD23SwRfLx454Hg9CqTrdedHoDMZHzby1WF3HMrCH9hGL9UH",
  "key32": "4LigpNSgYy6Q3beFLdkfH5Ja3EyoezWyTxwHQ2reA2VhpG6uEY6f2nnRinbyRedALcqbBgt1RpTHFj1gXi9TLDuS",
  "key33": "3mByAyAdjpKsmvwhGRPZtcT2DGebdtQQJ6NKHmFXHuxio1auDjLWzEUiLA9876NDTqrnrqPm1oWgG715o3u4rG4T",
  "key34": "5VKUJbDPCFs97AZceRRPQqWRQBf1fLrfsvwLXBvtTxH9k9taM2D9Wrb7tFb7sxsvuHwzKhzPMkHAMysSCvAaSqQv",
  "key35": "2EMqVYJ7w1Ucj5EuqMjgqdhvJq2mehFcyXtKz2QEcD8wZnTVwFALkgBnSMnhAfuotptvW6ZfLfJiU2rTLBwWwRUd",
  "key36": "wxVwJCCCGMkdGDRoay8W3snBnhZfuZpiNoUChU9rWrsyXnFkx1PfDLfkczhgissug66CdrQEVkQRGgv4gZG3CMX",
  "key37": "aNoF8CrdfYquHd9Y8bg7CZJwgHorV9Bf2CrKNUtiE6RwEsXXdhrxfQpvhiizh4aACFUmWgTyuZ21TS8Rj4PVgnr",
  "key38": "2doM2Wj1Kxn8ZvqgM3DxuG4mDmboGZ2Nyh6Aw8hTwSuWMbYx1HK9vA7UP4hpuH9t5YX5VjJTUgBeKSG8Ez8CUmjd",
  "key39": "39jb5PjDkFjiEMvHjWEEi2vWAjSZXz1sPcSfmbitTxjyZmDkCMjcc9Nkc13SbVdfA1qcYqDywXkiMrtxDhdTeSDn"
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
