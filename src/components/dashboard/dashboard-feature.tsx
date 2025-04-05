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
    "53uDvQk15MmgztmM9Ehy7AQb2zq2FwPLRaoRy3qg1mhBeQLfAcek6doUgRHKVeq5KfsHQBziq6UxkQYFnFZsg1eZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sMoNEReiu9NZEskbusokgBsDEFXnu6Qwp4XMZ2U18rpRfaV7uuUz9bTLUiQWxxLAAvvYfzEzVkzSTygcHweNAdh",
  "key1": "2qMc9hkdYY5Mh9hsoGeAsLh2iqzpJZpRX2afZyKhk3BDD29m8DAP6FPvhAc47mVvKHFDeAZYnRsr26o6GtCV6zy1",
  "key2": "5jYYFGxrKCZHDPXVwq3Remz6xdWSR2NLa4nYN6uKC9C2nSps8joiXYHRRNJCxGWRRhJvD9v5cttQnmTRJqEyckAm",
  "key3": "5d8NVgVWsnUb41AqSHWHvR8c56RXX275gBLEGeqNz6gnZVzzSUpY8FCzTyHzSLEWdYsLeLwHe7y29mmYzwJ6Py8T",
  "key4": "5MjzuRpGw2FTu5vtKY6EPWhRY4HfNf4edt9TyuuRtjkTNppeXt6ib2mhpEWPCTkbGRRsmVjmbKHhho4A9G6y2f6U",
  "key5": "5uxtkAPLXcs6inpCNcLi8zdU1nBdCrufibW6dWb9UKBMFx3T7fZK8GXwUE54Jk87cVtxRtmpBZiztomdPB696HQH",
  "key6": "5MuGPSxo4Bv5YeLZpC8LsanZsqU86sgFYGgASbaAuR85Pw6ckuG3E8U86XHKVGVrTvHKEFiUzA5YkbAX7kx12cdG",
  "key7": "2yyMfVL4rKjkEP9DMkeZB7CmR79oEXYHiZNcnpkE4mSMQenXvWgm6NTUzRFa1HgnfozMfp37oKJn6MLEcsnwgv1q",
  "key8": "3gVuWaRqRctZ5vxrGN1rGRmCpoQzrSrrCyn3hFEwb3pDkTVVjexLZuLJYgK1y32Kni5ZQ8gzTQ6BsU3PwPoAdWHz",
  "key9": "5jEGUVUq2sy8fV1P5wcQzQnGZLbfFtg5Ue7NT6cahCPxTWB6vttsBAmynJ19LiaJhJ2UdaDf941PzXzp47XHT9M8",
  "key10": "3Lnk4KtoTxG8Bn2o4MKuKzM6AKuLMRsQHpHsJnSXb4vQoUft9t34iy3goz8AeFDGR6aFxyntVdRXtLsbv6LXxBx4",
  "key11": "5zjsxbcKPyDH1YqGgqr7e3PxwgpRZ1ScBCsirh3sUHuLXtGtDe6JxtT2J685YUf6q1DC4xeUoSbjgq7kRdWZ81K9",
  "key12": "5Jxrj4fA1g3Fi6G4mw6yS75bUCRHsxksoSxX6gJN4pGJQHU8YVDCq47ntyzq4s3vPswBgm2HsawbyW1AUvCjh7j5",
  "key13": "3htyHVpXZGg3mgHUgWHCZrEXNxhAQqL7oLQjf8W1c2avXNnhnwMSRm5qUguAHeTzhKgWUvfWvPVBtKcXsiDztWKb",
  "key14": "5QkUbJCAfUXif3kq9RTMUAKZkkCWmUJqKShn4zkgvxJ3tna3RgZbZz6nEzhC72WmwhesKddvdqZ2WQrZgRT1aDKw",
  "key15": "5X75yebZdUZBjSVRsKcdSo5JRPNzHFpBARo2LkpCQF9q4kCQrG1oJ8hYoeQKXnGF3FHPkZpcjwv4hmnVg1qKodDh",
  "key16": "48tmJM98qt48kcHhiUQ1kGAL8mcRMvrqmU2jnH5f1xfkxWKYwTMGNmnqP5KyDyeKp54wSid2tr6bYKMvmggJ9CZP",
  "key17": "4TdnG9YXxwCitGMB9hRASBm6m3BJh6kDHp8JuMs88egstA8iD3r7bEuDod1SNGyZG9BMypa5rjvU3NN8MP7o7S41",
  "key18": "5aA17sTtwYAtnuqFDcnwi8nUrgnoHf29zC15tHRCwgKLQHSjB9yNL2P5uegVWEmJHJdCjqFCQ9f9Rv8Nrt8g1T7e",
  "key19": "57Awr4WP4GL2Vz9M6yPAHuBonK9dTAUn6TkT1oQRK6bqAbyhqo8kGjrE4phpaHW1eU7UMht1S8pDyWrj8LhaCFF6",
  "key20": "PWLCVxzB8o8DXFcuM4he1qghhVjjD9shDSVEcex5yS3CqmYwvZUngzXtwhyAU6tXu8vG5EykrwoYwLWw3XVUYjU",
  "key21": "65DU8tYrHXFAkcygyzJgDJXbm6d7xHDhJhhErjD2sBGENFNaL2iVrkt7yoqi1NaxVJ1mACPz286gr9qESiXPfYsV",
  "key22": "2rmwBwNGrPQtN4NYybggmUVK3apxf3gABT7nrwwCHxvA5ywEcoRpbTB9Czfb3nCJtEmcqLTFGQhxyrz1ArgPoDgw",
  "key23": "2obtKCe1nA5LL3kYRnTgXKYmo4W4HGdm2iXs8H2V12f6fELJprSGVBAGxaMrxJavUxcRCHSt4CZK1oHXeubeui15",
  "key24": "33f7GdWQQPvehjbuDkenBTwJGpp7kDdEBfY3hrgtQWkBQmbrTKvU7igW7oQ7LXZ22Cwk841V8m9fMmmxFDubsHEW",
  "key25": "251R8qKcgXcRzHfRERu4VFfJEsCQHxsjDT1J5TUPrWJPYrxaSRHQqmHCoWDqixT49QbXL875Jt1etJf1akPm5Sfr",
  "key26": "vuAAQjqmvQm1maSaF3DqD6kXamnD2cBjYksWCPGDWqNhbmd3fBJPFs2xxkTEooUKZh2JM6TiXXF4hQ3jd6ZUn1C",
  "key27": "BV6eajMKbJ56emWWQr4LtUa4DkwpNyzJ87VZdT5BmAKa3P9wQJZLucELsmoyZofYvbTbu5oKPk2H8DNdfNoB9q9",
  "key28": "4iHrDt15nVSfMR8EqDqUwRMfGt1CHw4bDckpPPRnXSKv5YfGZfwK5JAnjAsmmPJv4nPWVxbYgZ68XZPdpFjwSC4t",
  "key29": "3vidKrjvF9VfZuJx1dcTxT6fR3wvZEx3SEnjUkqj9ZfL22o1EUYHqesePZZMKBAfE1FE2xrZMyLBxqRBbYX96K6L",
  "key30": "4fpKrxhu19HLRMzhYyhnj4Yj2ZkRb5dRHcmuuj1RkLHQNh8MHAhR3WwLaYKm3kXoYAaP7c3A66NdqU5EZG8EY259",
  "key31": "2bdPkTkAXx8T8fdjBCq1wmGFP44z5DVdnVcMTips9T2kymNYgzNK9UN13DzvtFFVLzVvD2s6dwKmw1Ahq5sRRMTb",
  "key32": "ANfsmbTU6oxuQEYUZX7HMJo5KPxUGhzaiEUKeTkqsp4ShexMGoQfh5twL8qt1gb2MpBGwyuxgFVtk3LtRrBrX9k",
  "key33": "4fRhZsew381oFMejUBcVcXBKBzxkcLGi6CJwyfKrKGY8oo4oNwN1knNjMETSEd8ab2EpyXenzKgeiDcLsbditVCr",
  "key34": "54M4rVFDYtH1zyBna2VNnTdrmckec32J7nV9Eab5Amc2hy9AMAYbz5Fhe3QHRYkYERx8CmChfFspFbLRKdSoxGzA",
  "key35": "5kwV7wYe1gcFjQeseMbRJRjF3frw3nmc5UM1hvofhrjMp9dWphzkUSqGKUKpX8vJ9i1e1LwwePmtk5akZUAaKMde",
  "key36": "3oTYg27JQzLGkuXGF2iVytDQfb5ZAAQPUrNCcfjZaQy7jv2x5Y3C2pK2xoSCAfWpzwsSBwh29rXT2eCqL5VSAovq",
  "key37": "4RiKvYEN4F3AVLJStvx6gayg32ZGSB7MozuXnUPeYTykTbWVL7Toiq2oyfHJz5Bu2WdqQpYHdVnv9gvmArbWrrG6",
  "key38": "2WTHSi9tXizNKWxJapaCq94NWpL9aNENRKQLMaedd23MJJ4UwJFGJvYwVcz4QGcDCeGreWKnunsR3vekmWdCNj5L",
  "key39": "5qhcXiQcEA2Uk4QocyWC5MKwPsBBH223AcqRGDgpcCs9JebyuwnQcr6GEcPjvYYBRhJUKRcMU1YwkTD5kGoXiEnR",
  "key40": "3kxSum22U7UvGzspbn8Ejh8PRvifACZwpS4dgDm8hsG6wvDybzTXMnvZ6dwaQEj5MK9WLztH9rSxdzH7ydue6gZf",
  "key41": "3vU1dRo3c72iWrP2zZPg3N8dzFpZW56ro2429Xzzf1JR1Lr9hXYyqgDQ9eZiRQDy6x28rWvj2YX1Jg7zKAjG1Ume",
  "key42": "28unvt4upU2S4aLqjURVW1SxdiSRT6UP7UrNhnrwGFTYmthGzccdj1JuwmCJep1PCwfVxSDtmttaMoSarZN5iSwk",
  "key43": "3stdnSwphPa3h6MugZiUtCJWeLMTZVZKCPKoXdjpUgxmf8as4K3FqzUzePazDvzu9ixUk595qXcMU8YYDown94Kk",
  "key44": "3CStejmyzR4scpWmXitFcdzd1no6rHaXbGWaUutzDAqjXYLCSjTPDsSpWGARuLFp7SQmWFi3B6Zrzeucyytw4JfC",
  "key45": "jAxMVoFQFhphKUHpq4b51zHB8Axf6DyPdCn6m8xbyvS1MpyFkPWiCX58ehTNzTHJWJE4WoivZDV5vjiNraqSyWv",
  "key46": "4VT1evTFgroNa7oNggj6YtxpnWqzpDeSgt9AgCwbajb5f1UhspAG72U46ygYt8Ps7iPVXSWrgtgeff5wWMsPfihK",
  "key47": "4J1FsuveiSyuHqzRcyFiWGvh3GAVojqH5A5TsCbf637mfN87dyZX8jKmqQUAm5LSfUapRw3aYKUBPumBZT4J7uNA",
  "key48": "2aZct3Jm1ZdLDo1H52AZ6LdQ6hwMVNQj1ijgAQe4VGgLQ1ybiYrm6WpL3tdvHZkq3qJhUarYNdzFKL7bufvKtXoK",
  "key49": "3nRctKMMAqMpetKD7ADnfRY5fNQBD3XtLiW6cNs7tW2rphWgDtdrHpk5BhcNTinNJuF3z9HY6E2zWqDBwC5xH5K4"
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
