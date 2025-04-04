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
    "326g4bhyqZwt8hS2nYTzrvfePEaqKSGjYiaDfc83rnbURcmThxJGE8mXaFnX8PhWxUGVTRiYZmdueN2cUViGz1jn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oPi6nFWJnsCXv3scBwuBgnPVSHHtdPrbGGLcCFVUmdoMzT3c3aRiW9q89u5mo4pqL4n6RY331rNKfKpExXq4rRF",
  "key1": "4qnLnkVoMRXEuUtWDVHNDiwyfqPWxd4zUEg2akzMQedLxG2ghzEqYSLE6uUiNock6nSuLbFe19coHdE5uaAkMENi",
  "key2": "2hAptwYnBJqKGtjCCzYJ547AygxV7j22Ps93vyfymj7Cz1CzvZsotvmVbka4Lya8Dr9q7dJ5KCpwjytNQfEhE9yK",
  "key3": "BWdx12CZD5BwBgzwxXUzeLJaUbKnfxHHjqhmTz1rLZZUzGAknkZLhoZrWMDhxYFVRnJcSgHFFRcPXEfmQt4yHGs",
  "key4": "5ARwG4D5gUbYr4wpLHBDLTLSCbaYXGsuJrwpJ3DHnSTtyULxz4hrf5d8YoERttr5gB5wh8vHtzxwT15djjiifDkj",
  "key5": "3YMubLdWJtMVJQTZPA12AEXmxMjjkcxU5nUYM7tGFLJBEKVDbx3teMnNs64dfWUqHnhtA1DTx5s2q4A88hRw7XN7",
  "key6": "29JwJ1uEaXFwKQv7Jv6JxZgPk6DG2hsV7bFqP8stMKa6qPVuDWnczFKiAfP5sj7V5SeFF3z4utHWNSHUnz4qTEqQ",
  "key7": "2qsgiShD1HtNjjvpuhSAMgJi5KqvZ7KtxFz9WmgpRVSHj1CUW9HGnqSAYVvyW1uVtpsFnAnb1nPWqvwzBeq1x9F1",
  "key8": "2XKstUz85Nv9WAZFCECqj32Tbi4BS69MmfHpXYV2CxexyoSJrGkefbiTeX2LvzBEfZYBGvqCWMMJmkJNj8Fe8o6i",
  "key9": "5UvyDmvuzYwNvgugsiArJDxMbECDP7V41sfokvhRJXVSXNXDwdkgn4oQNEw14et3Jrq5w7R1kX1t5Bgj7a2DKWwK",
  "key10": "twELzCmGzZKYYtZyShBkiECZri8hLi7LuinaTJ4VRPmp7PNFNuJcac8Texbj5t4dcwY974DF3dWgL3mNSGmAzGm",
  "key11": "4syZcEnEaXiMYKXfhuJ6gYSuhP2UHqZQbs4tdTaQAwE7bBv1r872JnHMzi97fjBuewVEtrEdxcuDSrxhq8pqwXN",
  "key12": "2zfWdhrqWxa8G7JbyMWNUkTiH21Ae1p4ZKgf3PRRMA6Lc2sADDLUT7QacBkFXwZz4Qt7NmxDnvQLxQhVjXTT17Vj",
  "key13": "3cs9uhYZ4kohBEg38yq4AVx1sWK8pCZUivJtx1f3E9s6T7ytMW4vDRJrMw8KYZPpFwUDtmF6mC2qJBavtbM2NrD1",
  "key14": "2fmCbmTSBjZhYZt69Aof28rMvFs25WYVU75FNUSPQHtx1fRuK58SaDubNTYNMnSdYVWJU9pwZW9ZVRLavGtNuvke",
  "key15": "o2xCCX8nCREDS5amceQ6XWf87vANTLJDQZVDVKd2yys315GGztkQCXZTeysWG7vzJUtnzCVgiJbKFwq2j7PUYgj",
  "key16": "227MsVCwTCfMv7twFb2zrWj5ZieYw14QsmM9JmVVUHmRkA1LYrkF2Fz1fp5eHqS1cyqsiWTL6fZUhYQyvDWnPTq3",
  "key17": "5iesCiDirRg2fNnXVwFJpzC7tFdKfKeSMyHvVQv27SEsp65rrZPzSqNk6i3kT7i7TFCbqjpTdN5gT7NxVLdGBEs6",
  "key18": "5YVcKGLjFKkd8zuwPaF34MwdUNQJz9SUQbUyHFYZ9ecdUZzAuEZkSFA3246tRmJ8vZcUPC5tb66y5CULKWPMUEvf",
  "key19": "2wuhaxvBX81CzQXZbZh3nKwm4zxH1oaQcX7iKreUiZJ5g8JNx4TUVy2E843ji2owa8Thdj9eD347EXTz1NwqkLW1",
  "key20": "3TKXm4U3ohn99TYn9uqRQxwpcaGhfpcv2vf9fC91do3eWq6ZxP71JVxtD4hrKZFfwCnceC6ounew9PurR4YS1Hb2",
  "key21": "3zCwMzFJxdnZ2qvVR5nDVJ18nw1vkdvdcJR1mom6uT4fLccVKWZsmsiVtDb4MdZsDXt4XxhDr6T7aSMAoTbEQKpo",
  "key22": "4E4kuhK7DLaLtN1y1cdq8LfVpSg3BtVfyUNbGcgJCeTSNidBuEor9WD7EaGGq7ewri2s1W6dpfBnywwQeXCbk1g",
  "key23": "3UUMWucfSprYvnAqKK9PCzwaEgMWcfvMaQcscb9rn4L2Pm8LnzaJpyKyFCqUuNHZXqCkMTYjbDMKjkkPwxScghMB",
  "key24": "q67xYtGo8tLekWfKnV431QpbbRERBc2fbfMw6f9Wx3ZQJvF1PiZRoyd4iaCFAUygMYa4zKGutAfcdRG38zYPkUx",
  "key25": "4z5zbCpDjHbbCxebSQsNAcS2mhZLgEpKBgqfcQ2gWFMRaYPnyGBXJAA5SLhbAJM72uFkoYJohpziVmSoYjNN3Yof",
  "key26": "4auMyf32PQBZnwnhdnHavpFTYnJBZNvy7z4N3hLft1YKYAe8SX5Z4o7gHg5NBZtPMbb3LZQmwUrsZsuybXgkaftM",
  "key27": "3pfr22jjLCTfyjNVYsBW6vN3ifUCJMqxp1eHjCeAth1UHpaDr6TzRDSSh87LotnvAFqtewwsUvmotkqnbiZtgJqp",
  "key28": "98SzFMmuu5ALnGfbVT7XTaKZsmSnqWYU8SFFWnbP7vtJqAMmW1MPDmcAhD3oGhaDXyV6z3hhpqWEjn3StGaLc4d",
  "key29": "qkerHb2Xt864FjFuhdaCGKerUWCmQt6MKbN6ogVewbupWKgTeDYuXG9SCS3Yda7B5SzNZJrCKFHyTGuAPhXiEAS",
  "key30": "3PV6EW3q1X4by5RgxYYHtepA1iXXKcoquc28Tfd2Y46kRoRQFGRban6yvwYQqxV618ZmqJxU1hZ4MWXGzkeqVJrN",
  "key31": "CY4kMTd1DPYUNCtimHcMEKVfvcKcwPCS4k2b3Uhg2xYTeLm5KjkGV42K2Xx9LeTwwA9YYR36irjbmUjWPE5Qtdk",
  "key32": "3ow9oAfUfAQmgESRA2mjxteTje1GiFLVJj2PfZn91hXxqDXYYnMaP1HMS5j8yHn3TJEeej9FT1CkbBzCZaUVusfB",
  "key33": "4oJa3Tgh7vp4CnxN1xqEFF211hTN1pYbogQKf21mNgDzhq2sPvAuQeHGC6yRAzMndcAJmSTzG7eB5mER6M8Y512K",
  "key34": "4HfxNFL8sTFvUfkXQQaDpFhJ3YvTq3WMYgnqofi8uVDdzbosc7BERv9RLngvq3shoTvoEcBFau2NUYjkWzm3jgPC",
  "key35": "5Xtv4KxtrYeYNKwEDD8MkPQLUVniKkqUUyauYcqRs2ss6PuDjZ1HakG6NUUJm39atUEztyZDBnZz5mvXejepdpPF",
  "key36": "3DAWZY3tb9msJ62PqPfzbS1JPAca73fFWFJfFyEQddUrA2KP4D2PF7cBscFcGYRdRYxFnPV9pvX1yBwxHaWUinLz",
  "key37": "QFNJnEMcn1YCPsVeRFE2HrXbiCwUDVHJmgXBGbi6KF7sXzzja6NAgB4ck156xYgRmQxLNkMns7H7GGcqKdgp9gX",
  "key38": "7ou1eaYnqagmyNmGFEVUhGkq3XFUMXKsfmWGCpGLQSgovTjBS6F6n2vgq39Fd32Z3Zh7hnCtMCeVghY7MzGJz8L",
  "key39": "57ZXoMXAetnmkLVKn1H15pnjcEbLkUj3XSUJHPSVtrC9rVsw5vLk7LWXQcb33A99Q73GrPPZCSz9miCpNzdny4Pw",
  "key40": "5acLo2gP1hiU8Zx9FNRetaiAFkY2ncEr8T7Vcs8ptyuxdVmaTEN7L97XZGGGytMgsRUjajjzsh2xb6jV8n5Xp1Un",
  "key41": "53SckxuCa7cE3y56hnvSCm5fGQwqVfFmqgBsynzv9wnnt1pjdJXVBMyCEFuVE82VqbKf3EMSKi9hDhEUXqmgUftA",
  "key42": "3iDV7qDxdFigMLwh4kKGeTcFfsr6Y1ujppK2QRZt5gMSuEbq9FLVQfysKCa6MzPxJezxS791FxxNsQRqkeGFJoRq",
  "key43": "5Wh3jg2x21DGGKRSgUZQkDLM221ZfU33ippt32iCbyGjppeJQ7qnVT6yTy6ksuk8zipCcr58s2i3aaMsNe5S4Luk",
  "key44": "5VysBn9AzpRK7pTv3pVtaP1Q7qEiGJvvkJUkGbtkQ9VXvRCjtf5K7kj4YUuyBwHedFksTC2RMYgRDVvUjkRsStK7",
  "key45": "2gmtQfhbRyqPobPmE2gQn7b18Uxzw4tfq62GxCcHMpK64ZXrwgghDYsWqKkJJ2GvwHJ7Ug7rgRcq1pSFZjZnFbBi",
  "key46": "ighYc46wzm63kCQWx7b1mBEj4JL7F9bEyZ9oBCBh2BuS18TjBX8Dw5LFdxCAbj1Ciwsk9wY2w8XzMqVK5Xfnp7Z"
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
