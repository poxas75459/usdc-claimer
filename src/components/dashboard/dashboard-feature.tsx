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
    "DysfM1ec59WeSKPatF22UqAEWbUWe4h6RcqJewxwDGsXTCwtwF4x3sMorPRiKfqGAjU6ywmZMrm61da4jqtNDrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RUf4VK4y7QJYEU7nXvqn6avChQdoRfzfYBeqQD4LWfC1b2Giq6G1tJwwGBkCCWXEBDepu5m7bERiPrRWbsrA8TW",
  "key1": "2A5SQrUXGW3CpMpsgGxxsmpLfqPUbBZZdCgctAYSpduzergwgqUb5t65AfFa6sDZ4JAcMRJmE9ZFzAExwPipXGnw",
  "key2": "5p5YR4DYKMo86wfKLsNEEK8x2dNgyabHy1yp59JR5mdjt35FY5HfyuFLJ25WbDnCXrX9ksVkbyJ1jBV6hZgno37u",
  "key3": "66rxvJeAfn21WdWe7Co4du1k9q88Fe5gsXop3AeVaC1Y41Lv7qkFUJzm8Gk6QypBaTkNR7hSUk7QFidAbeN8Vv4Z",
  "key4": "5xMPiTbpLm6TGXeMfcsNupMQsRj6weSVVcvS8QWkD9g8qkC3ucRQ6WCM843wW9Hgq6eLd1LuVe6cyBKsHNi1EvPT",
  "key5": "4abGRna7YrdXyEbfyrWaj6JUsZNVnrSa2u2c2pVkKiDwUQkpV9mCWdXSkf69hc2dAtrxxMpFVrXcVsqFBjzzRSeA",
  "key6": "3YQiuPBBD4sq7rhZjjXXA11AghMCq8iVucUzpxHapXXCmVgqYU59W4eFcU3ye25LKebxknD4EiFFDRVmMMZh3wsD",
  "key7": "Fb8eaTbG8EcPd7c95v8RDg4MShvy34xXtV4MbwHpbdTUbMVye5B2DXc4WwudnsxdLdi5ZLCHdY7maHQhPjq7DtY",
  "key8": "47EpUmUM3C1p6aupWfZPrbXLbCQFp1jwQupft4GBYhgZ5fFtzbJDcnuZa29FzKg7ffv8xsqMkLAKnymGD5r24Enn",
  "key9": "3L5d76uujDuqncr2CPEnQf7nZtM9U3b2Av9gEXpbAvcDuGw97hh5cNmiqcVCJohQxZreA3wW7FnbM4PVt4yiy3St",
  "key10": "4QRWy28rZMZh2Dzsg9kmpBrddNzU36GP9bbbuHtxK194NA4oN3wdkWBFxG7M28VHHmVQEYUrNBYkjxnpVhM2igwA",
  "key11": "4C4KNnrHAuFZPgxtJD7zj4MwdnWwtaDNX5BXHY3HAasGcLypAdZBxWzfmjPJk26bzQS9Vg4wK4Xrqho9CyMqeBa1",
  "key12": "4qTUfaZXn23uNTHkQxYzCXkead6Y6TfWX4xFbCznHfZJ4mDTDteSLmmV7dYyA1FfKVZRDojB5bhXZvsEYY4dBNUe",
  "key13": "W2CaGVDRymCFRgFfesp9vw4oPTBs27wXxDRFgoU8xnd1BTovz6vCXUpRN6RvqBP3jj8McfVNKSLKvrzwSAaiGCy",
  "key14": "5HvBc6xSDP2Jn3D9tNQBXxhie56btNUtjb9EstfZNqdVhvEhu4mJgEeTBaqTYUq49RUULQhJJckBe1xbG9Vwv27k",
  "key15": "2ECWb4KNR9mXUUTv4Nq6V5NWTCM2ppM5GtVi1PTnfJC7U2skU86BRcKuNAdDKj3c9GgBc9tc7iTuTXrFo1FDGFtM",
  "key16": "My3ahKyLS79cUPgx8Za4437vVCAgszzHzz4kDT9ABHVVsCK4mquvthHKdyyDG86XGxYPAhXqccKsm8joZgEyvRR",
  "key17": "qBdWutzopKZJhVjf9XL9Y4dteqMrpwGtiCQoGjpXoQ4WAFC4hmdkssUzpYVbYEmcKpKN2ZAKpHpjzsrnremJza3",
  "key18": "3riTrbpKFjnWYRPSUAKzNyH3zUKBd7W4DHhpMqQiR6bXii14M6mDx2W3BvJELsH2NhdBgVS7NzUuxPYLbcL8jvPh",
  "key19": "SC9ZxQfzbFjXHHDyj832MhJah1hcmz7GBLnixKkJQ1RPuRqFLSAetvRESBDfi3nmn9SXH8x5cDYzfUYuqQzKFKJ",
  "key20": "5zE9Ebjb6UehXdkZECDUt9Pi2GHdhczc3Mp4ZxCkkfXcUTFBpzMdKjbqpi3ukLyKscRjcEw76Fsn8kwF3NGEugMh",
  "key21": "3L5yPvkbxLDgNr5fJLUJjZ7HcEF93TYhizWZsCdbVgzqJUoLoAxoM866rc9rApZ4aSmNbuHcmrZdcBaK5E47vXy3",
  "key22": "4b47bqQj1a9gmSFUZWZ72zVvat2LLKw2R4eeuU4h3npHEuNPnvbAQ7ddKDc1D5YJJVJWf8PKYJnY5SEdoWCUqbbM",
  "key23": "2WEHqS676Ued8cB8z5KAMsYewXdsva3NVFeghma5RQLvyaGsrjqT2tqwqta3sbVQs5eP82gQoTZTHBYTMUMGCtug",
  "key24": "447UVW3tktWnvqaB1FpDqbZrJNqhwze4i9Vxv8iypPzZLhLfjaZxTQnhnt2Co1wYfvjLD4uDh8yxcK5pRjdvVFh6",
  "key25": "5eCQhdC7DHv16K2oKw1LqA2ESgu5tTwr8h23a2QKByomimMQSHEVKRMyNF3mzHabYfuHxwjratTd6sJFw6KHeHRk",
  "key26": "ZRZ6HhkeNn1JYfUEtqbMZdN6J2x5qL2tTHeiiKakrsC6kUVQKAJWiCb7GTwT9tJg7asvSu5CioNdM5W3b9r25Zr",
  "key27": "35aZ3ypG76bmoAAdgVhbZgFKrpJhWuk96RWV1CsYXKufS4dTDeGgY47dXBmCV9vVMK6sD1jnSttHfLj6uJmwPHoe",
  "key28": "2XPeBnhzSduKvFhykNeohbvHSj5xL8Gm8deuNkUYptVUyk7HpD3ujV29ijpFNEFFwHEV16xSSPUi7X4ddd4ExAC4",
  "key29": "2JM1uHgLSB78fezzvRtYwJiRNAtbBZcvbesmwn23jdMGEYiyNgcmH59R4KruHJbAkSciY9y4cwVTY2RsiXEGgsxu",
  "key30": "TrVU3GCdkYfp36vtKWT9ohDMm6ohYmQb7qmHgCgUYmsgdbRNHRXpGmrSUhvbjn2Te7ZRkaUBbXcayqiw3wzGddh",
  "key31": "4a9aCmgFpeX7c5QeBZT7bYYz68xKMGB3h2k8jC3qkynmw1LrfvvkPdGAtmmhkUcDzSH4MxqDM4PockFKiPzn2FB2",
  "key32": "Gv2XoB4FfGzJdaAXrPuLin7aqk57dP6yQ1G1PpemrVVmZQ7RUYNugCw2yb8vNewMcvBqHoaYtePEMjp2L73CMA5",
  "key33": "5pfiavMczHroyPFsRK3g7RZ6tG4FhsY5M98DSAtbQ1DmUgmCagPbdxvpUBiarHSWXT1QwNmM1hALNReuJH4rDbwe",
  "key34": "67jwRXFpdUxBByqXDX4KiGx51wikGKWWLKoNQjJwTpbYioxJWnPisYUdsovRRQVTuJ2gKxG8a9XzwUKCrhVT38G1",
  "key35": "2PrfKdCgiT7FMqCHVkjJZabyKAdTEfrGGLkQDMZNbbbPrcc7cZF4YSUgkEfjBG8nUy4kfN5xuF2iLYNYczpAw2co",
  "key36": "2P3aA59fANvYDn3udzF5EtqZj7J5gLgoMDiBB3GfYVb5rKPNj8s5NpFxYMs2ZtREQ1xVPXBxSKqiYnptpUkf7j4s",
  "key37": "43GenxomjmdpDgnZRwHnFd3n3jkjM5L8D47EeG3pV5kHGkoueWi3J6rgx4BeJGBNF2J4XL8AVPuwjijT2G2oR8VA",
  "key38": "3bRvxrNgGxic1qsEhdY7cwRjLavBcDK5pffyJnnTTuDR4VD3Mphh4FyQoyNiFCUo6YNpFoupj13WCra9btEPZKpn",
  "key39": "5MaSns4XfVJ8usQzE3dy7fPThE4mTwWjgyNXXMf3Rp1aTy2s6j7mJkdmgXuUs7cgmcLYpmjksUHY6kcY7YBznZym",
  "key40": "5D3JNnWXyNJPdZRQ3Q97tCjUjRKLRveGQjpZx7ca8zDQCnWFFmD52VVUkG5Zg2o1joi3Tm9CcgvKWii36EpRhAk2",
  "key41": "5b7jXigUKjE8xU6B7NTmGZUJsMrhQuyZoUPBbwkGahSLWqyrYZtP5UsPwRQmUEPRzgsPfVTKYgaYQMPLk1yTMy7q",
  "key42": "4Q55MAK5eU3qPDTxmiW8GJS7e4CB5qXbmTVxH8P9UevgH8syBfCwqVs458xkxEeg6V2XXJs5jGgLwmbysPhjinR1",
  "key43": "3rKP29brn8NU2vaBgqGVnpNAqgdJ85TNCa493yfGemc3Rm54H8jFD8e6VcHFuQg8Hx6K77pgRTTFMXtdnx9ZwFSB",
  "key44": "44X5CemUNaty38jekBLCeFVr3LEAnkKaVL272x6v3kDgr8eDGcs6PGJKTc4HKgFQNf9RUiJdDcSf95L8WHmjeXmW",
  "key45": "56yyC4UaMGz36z52A6mZGm8LVKvAN4yZWPNHZDdBRmfX2n9LnRWHSDFUWVDFH8NnFcgFNxdhj2Yh1s5Lu2vESZCU",
  "key46": "2YV1SdJc9M9cDaq5GVemWKubWv2U9BCKm9RV6a4CnEh9FHfqWiwx9Eree4rbACk3bZu5bHD6aHYsdgqtp2o28pgP",
  "key47": "zmjrVJjLgRNSaGWfrtMxF2L9c7XB79W11ohvS7hoqr9mopvpMar6oLhFeHsjyunKvEuKcLdj3yrKZ5iAoFT3uZc",
  "key48": "5n5NfuL4KKV6dEQcW3FCwb6dohwx6SKznYVEWVmvGG7ZpHDy7zADxVg3ouAKRXW3sAniqVpPJ5FALbUXRFQUeWrH",
  "key49": "Fx46bXFmx4YTauyn51eMwMNuyypCatB3Wt17Yfik13ntGBD6oMvGQoWjHC8EHaTCoUhorooB6niYpPEzBayTiKG"
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
