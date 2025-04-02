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
    "2LkmiHnF6yYhwNHvw586gJ2VHFm3zfPpEstVp4Hyepb8EJzaCb38Knbw9qx8Ka1LdkRK3S6dFnmnwvTLUS3TtNun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QMGann9B3wBtp6uHTaQw1pvRwsnDnddLVkSzX1Gu3TFWuW6YKciL7SgjrMSY6eLGRbPvM3inhhGTYjT17m6HMr8",
  "key1": "5msgtmdzETviByYme6efVboTcRFDVWDHBA1uYKP2TuzTtZNhwA4j1czWeG7Le56T93r9AN9MtspEeQn9xCbtQgkt",
  "key2": "2ZdLvxgMyWe4YDeFEcumWxJCU9wjuvr5iq3BbUXT4fVjuMJ7nRz3R3JxPS3pGV51Vr1aEzJjqoKpwDtWh75M6vT4",
  "key3": "nqXBH8772tbteDsx11N1p9ycSeh5EQfiU3YsTndmnojRVDAMsNUJE6KBzBktjpC8fsCvjKRqQUdAk4ycEkuYzzc",
  "key4": "5jZSkFTXWQDcYgPvqoKE3YhzQGka8mmX1scURCoZ9EqTD8Gfkso9fUiTbumwUrjPx84MaN2qYcbT8rsK6CYwfb7w",
  "key5": "5D49dDkuVE4FMJXL8U4TF2NThnkcb7hqr7C2pqAvThkW7mwwPitMdKJuLCPa5DKm3fhheLP3CbP9o3YiDhgzxZoX",
  "key6": "3tA1nFXHEeki1PHdcdw5wxRksfJL4bdneug5mLchNdRkiTvrRwjzjeg6BnqurJB1J6hur8WancfUJB3yYHhUGvPd",
  "key7": "2oNE1ZpsbL5T7uekZPuDMuVPSMbix9qMwBPBkGmqX3y2qonXE8sS2JxzWCeS9EhLHFyMUg5HsS5YgwG6oscNiJmn",
  "key8": "3Q4shygYB8nond82QMo7dYSNLEZUV7PvWKLhbAjDZFfmNSR1291Vyj9Sz8rJEBMgSaV3rTuzCWH3N2Lsgp1u6KsP",
  "key9": "22C15CPvSNsHwML1EnDE77kiJqYcreBF8LzwuibXM3xE7JLv8YpxdttmWRdjM17LGxFyneDiSR6GQ3f8JGzqRfsB",
  "key10": "3nTSYDrve3JDdMyL2fzaaSRZPS32YeVaxc7bh5ahKw8WvqBaoN9KxoMd479fiL8yMJ3zXxmNntx5ULXi3fCWwx3y",
  "key11": "3Wf42zBRtCMXr3H3J45ptEteMPeLQ8XVNdonpcczDQ4RBYhEv6gLkYqqRLsKBQxoLimGwJh7fjrK1iW7uwr3YQqw",
  "key12": "64UGAUN2PM3tFSSkVNnUBg4Kwwmc6MhjPzuAsGYYW16Toxc4N7jA1edzQJGfwPrTjJHzzXanTBiagvPvtWopKXZu",
  "key13": "2pgE8YMvsY8CnS9taySbKMdgzwtrvimoYT3pxZQX1eCk94XEbVzHebFqDLaCiNdePBHYXeUFtA44TYfcFrgKZU8s",
  "key14": "52PjR4FXreYyW8Ao4CjbTH182A2fWW8kqR4mAkMAJGibSPh5tNz2s6E4qRmSVHxswcv8B6afC25g67rgPh2vog6n",
  "key15": "5MzPm3Ypz4rhoPVznNeBceovVeccS9Vg6y3NfHwUPp83SxZAAyBGBNeDqBjL7FtWNcJKRev8vCk2XqpJi46MR4qK",
  "key16": "3FbSWDMdCWLkRor3fwE8ZHDMLuuiespP2ZmUtU9pufdzR9gfq1PkK8bsCuf8os7aNLSWG6rN5CrwJyUPzFFFjQbL",
  "key17": "66Phqv8zHjDXjPT1siYTcRi45BMaMD64k5zXcf4kMwFQzsggWfCtRtQ5EJq8t4UtJhiHUon6GMLJCLg66hoAukzG",
  "key18": "3Cyq6dbjD6piP24DRQB8g2wYeDEpfL4EJX4Rirr7iEmWsGAuq8kbGMwKrfdjb2TknzSVswp2XAVq3LdvPCe16Mz6",
  "key19": "4zMewAhZxaWpvrp8jMTfqb79nrpGKCbRaUvFqxAM9QY3J7msLiGCGEqHqJctTF8PkpJFXwkMDPpFDDzwKGQycMg1",
  "key20": "29pHn34VY3zAX167u526BKvuFpLr5z9t2NxiB6KV88gETt4VFj1fkyEE9eUkvDLFLawUGoHFAALidmEEu1jK57eo",
  "key21": "29eJsw2nFpFkjr1TZ18BgtHfiihk6BFFoj9wcpoPVGEvNF7SvbgoUs6HKYwsPmi6w91tcfuxab5nxXwRdhoWXw8o",
  "key22": "2aYwk8FFa87wcJmJmv3MV94yX7Adyid4jsHFES2cXoGtH485SFr7Hd6FSbm9pWdtNLWoES8ZtEgszwXTdmwPXeBU",
  "key23": "3PPg32Qg13RxHgYQAUuinHCLQtRz5jVFzFYxkzABPnccZyoohhoo36bBGHMFeWq9eD83y6nUKUeEgopw3L1kJ43f",
  "key24": "2wZeSW8NMWVtuSRBjcNnBD76ddncrsRSYGKawN9sgzAS8xe6ifjFRB2R7xPx95mNSNNUoQWCgxZD2vfxQe8x3EfX",
  "key25": "29C8Q4gs1cHKB8gpWNukkmy7dDNbUgn8vs4SiQZD3zT9UEUoL9hDfmD1ack95f98E9eJdtuHCvB3JhMeJLVbnnAP",
  "key26": "47oacWHywrYuQzxG6g8SdLvHmjTpS9bUktMhzFAtmB8dQwbiDxusFMV7rvczJ7QoV5P86L4si5ssD8qxnK8NCjA6",
  "key27": "31tw4dsTC2ezuq8RQ8KH874Q1Yabp1zBtPVWscDBig8eSGvdRBytKY6Wb4C3UdeWNR6caBv8VJ6ks1nqXm1y4Vdy",
  "key28": "4CvZ6kJDrd2rzxTP6m6CaBdqaFQW6vMeXDLLFLSRRjp4SMvS3TE5zDj43KCmerTmT6BbYXF4oDAJiHZFHx83R18c",
  "key29": "37941CHAoABLAgdcTg6U8mw3Exd6mVhR2jKmhUFhy5LzXRwUFtaNuZAXPs9jUtCVkUwPZupDcUvWM6dXJJsams9A",
  "key30": "4ycnmvt1vDgjKwcyJtSpjdkLDD4yDJy2SQuHpRiHDyfyRGmc89xtLUB7W56SFibkbnjnAHZUrjjTaEj5Fuqb5diz",
  "key31": "3RoEWgV7nCXFhLRzRFaN4tiq8516PwzRPQKEEaqRBxBc6fDXYz55acuttBFpYaFw5vg1EaFkskSvaQHoyHV2RejF",
  "key32": "3mRzU6ffyefXNW86woPH199DqiaDG7V277TynTYrsaCbprZL4g8Wm4mzsq84rnksLSUjJWZBCG3bxXS3Rh3qUkE3",
  "key33": "3DxUs8mQ4uSvweznpFq7xEiQKELLEXDSqGoT7EVW94ggYrAY1vfQwsiNkoHwXdHSSMNdByty5nFHXykayBxJ4JsJ",
  "key34": "3HWuoc9scUSEfxKG5uRT65LqTXaAshX278ZGCqdToZbSCXoykJs3uETWrvZwmBio65H28aLVE8qw9KiM4cMD1M4B",
  "key35": "62upCx2igns3imn4DKZF1pFUE39Y6RCAUBXmktCGaU6aNvw8DjRHPJkJ5TYkncBRytHCa4UhrDGbM9qwY6GBZMRb",
  "key36": "m1T9q66K5U4o8ryofWxQG2bn9Bfbi14ETcRn67beyQjLLKL7bZDxfkTzGmNx93qHBKfwPufNv5PGGxEv5dyrMtn",
  "key37": "2A4FaopJjfiHGpWBTGHy24DWghwEahMbeCw583mLJtraTBQ72662ui9UVDtGdHAFXZy7xRvByc4tcFsaYAwU8TCB",
  "key38": "5hRUtGALXAfnkr2VRg6gzmJqEErMxzXKZyEHsx1QSTYDv2NKzgfX5CPhpQEFNRxeJWxSNRyXcPN44fVnSfMBNVTr",
  "key39": "KTHi4FoiPxZ7vz5rDFoZL2PFLtQDEf9FCwf8fRGCX5Kci3UoWfLisPzw1M9S9M4bb9ffRy7QxY9Fww6rhTnpeM5",
  "key40": "2YhbFXVDp9YHhXCVWE7SAaCsA9ZvnX6tVKn1i5cw8CeiZLaxHSVSbwQb9MAggENVrwgCKiCv1wNyh83eTKUiTxGP",
  "key41": "4aMnvcnEmA9s9LvWzeS3D2kvQiGpunrAY7dkUiaWAuSfqEYjRQNPcPELnekD5dTeSdt2W4F3Lab8EAZf1PtrZs3v",
  "key42": "ua1C8wRuTcnF9gUQpCr1PEjz32kucRNHFQFXAoynPwS3wwk3UDpq74h683QNHMuYTT17U9Hvm4mToKRz3usjTFN",
  "key43": "4DUCjrHS4VZmUV12SoiwZS491pdZGJBVzpHaeWfabaCjnPaRrge7vafx9M9nkxB2yZ8TGNmynHoES9476qmfL1L4",
  "key44": "4LbJ3DLtusjvwijUfB6NgKvWtxZpatEVX6wi7zTdcbSHgGJAFgBncRrqEhePhBvs7i2GFpSWbeNkHxwcU1cKJcBB",
  "key45": "4FHWhTwSA4UggmZEW6Nf1eACiodfvY2gYSCWW9uwpK6sJMFeAzFaTVfQEDgUiVzWVgsAh7wzjPviJaSRPR6okaWs"
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
