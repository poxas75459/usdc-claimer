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
    "4nSmmo9kLMJ1McpoQehjvqtJfW4FeB2qgqgZ3f4KS2B86nUfuxDDThQ6PS173WunP1km62oR7w9goWshJbEYtFPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rAsKUrBT8raEkVvei9q5cGYaba2fzCqzo54RKkStk4dy7CpxChYpLQxtbWaNvfvUTSryDnAAkQLfvgWH1k3CaFR",
  "key1": "6149vRedYU6izMfvpHZNVdLyboiubjujwF6SvadQJ7vChzzK4UqNZr3qx2otD3hyYJ5Ab1rpwsKcmefQRUGcv2pW",
  "key2": "3r4gAUtMrTTxBPwZGcSeVueBqjjys7b9qnfE8oCP8SBtHroAuNCfY2j1JteyHqvSgHUEYt8qMKp392tDVpSuCgXx",
  "key3": "3kKZUqYJzeSdhqa2xuLt6k5ZonYnorKVLLPEUtbDcYYhxySpxQHY9H1TJCNnZR3h4U4KY64FLi3kzRsRyp34bNjR",
  "key4": "3oYf9efHa3YKsSna8Jq97YMYYb69QKX4keBnWK448GW1vywHy7vci4Sp66wbAPjrC7qL43RZtCjGTzyVVTjkMgLf",
  "key5": "9Z8e5K8CF2LCQ6jG1xrcStnz55LYMhMSZrumYCXcFbuqYzXgGTjf6gv489BZSzmXZJpsy7GXyDpVMKvksT7cfmd",
  "key6": "4V2MWb1qdYCHSZGooFqdmMknHzoATi2ebNNvpFmk78Yv4ivQbf6twevQ3KXy3p33nscLwALkD6cT6ztuLtc61kxM",
  "key7": "5S6Ft29boU7W75prJokN9SFFXXfdofky8CEtm3JHX9NmuSC1sz6GbwSqqzeeU2bEvkKM4TFC4okBJtMc8Hrvqxht",
  "key8": "2BVg51eFd9MzvUh5cbgrheeqfyu9hSUg8heKGxp1d6TsESzgQKZj3neNHvic2muURbrKt2bV7RESeQw23qk1TCAL",
  "key9": "2oDb4HMWm5ygLjZyC6uiWc6KRtQp8XmYeWHFVB8WcFCuBdF5FuwCDwt4RjKfyFK5yc3yLAB1mc1ghbgDQRbegXAa",
  "key10": "4ZqxrT842jaq4BE6BE8YQYiWrJ9258VuTE4QjQ14jTL3K4EHjG22LdVfuWkLLkmsPTpXzBj15mgszEn7jTRvtYLN",
  "key11": "4uXxnhXZin9d9HWE4kF7xyJKtFknYjn1e9hbwD9HCjU39Hk6xvHDaJWx5jVH2HVziEUr1385RgHwpQh5sGAB5eiJ",
  "key12": "4fEBFtv4Qb1RAquAwQaYgjzGuguMr2T7s115Dc9HNvWSd12xondVN6GAZ9kpqV7jc44h4Hf3DhRWtRRk3bPtcJ7N",
  "key13": "5NBWUXM4oe7SaFVNdm5k65oMJWjJqkV5hRxR6uMctnAN84gu9jw1cBYDsBewkKF35Ek8ru41EQG5nCD3AqLgiCjr",
  "key14": "2MNd1ErKUjUkumXm8LaXkT8yav1mXEDfQs3JQppy3CSHcCEgZRMge8fhJWmQszpJxNYssTsB7ivHCyD1gxVnN7ND",
  "key15": "2MUkVdkVkE8yeD5JU7STpq9HVQQkriXsLnPFDEXDGSYhQpVZtiLuf8iKwbJJANvih9j4e73Tvw1gkwrPcHzp4db",
  "key16": "Ai3JsqtzTJ94EjuqFTzXh9tgQQtwSJjPx79vuuGbgXQEr32Xx8sKgMXj3tqJRQvJ5RbKtWcjLNk5iSjvpntyMz1",
  "key17": "3FoHgJdzXPS7mahyNQDLMw83vWXpuqu6nVtysN9iTTQYzhE4EpgtFonPonVCh4vjwooUMu8wiadZYNa6tkY8BjJ6",
  "key18": "2tSRyBEv7d3d4ub1DXJyUGuRXptyh6bhkhJYr9F2WDVJzcyWKgfJfatNdvHtAjZ75GEQMzATUuQGNGVD1doEwdL7",
  "key19": "5U89jgnJ4thne3jfnKbzu8Hotves7XrZXQscK5Qoz1vgaRCxbR3hQeRit8i1seyj2ntmYGQ7RxXNqzD2bhzu657B",
  "key20": "5G49F7KnubT5CTvB3xdStC4UVycLWwq8c1eYEwdsd5fXsi4cECFBtSHDVzVeLugFhQXFS3REFgr5HhQTC8Xcf5Tw",
  "key21": "3TRULXLWA55XEERDq9hnsAn6EtsBds38w2SrtEWc4bSY73shFRbccdGJhBZJX8e4D5DeWti5rM3jYMKy3HNFWPxv",
  "key22": "4Jv4XGb29RUHh72gFZLSwzkCG849h8wH69irfhqTvpeaPqb5scviaFpPVGBw1WA4iM5pvwqBK1R4Y7PCNgEJre3g",
  "key23": "AaHhzmd8FFdzraqNm7fPuXs6QDYvrNwFSYXAYTjuxRtrwZwC8gCGRUWZ4i7nJmvEoZHo6fJKD3bcpFSi9rdEzzU",
  "key24": "47nq37wZLxk7VvTufWjL8V6VBbUNVtbw6G3vwQ6xSki7LHbH2PgXhqGoAXg7w4g5GrJhS3HCrqp16vzRJnZWZYx8",
  "key25": "C1XL5mREmCxRrF4YcpUubnrV3Ypd8NtT5LRZinhE656enfArQTJ1R9KiXFodX8P9hkN7wM6pj6kxkgsSZwyiJyD",
  "key26": "2pWKuDDdXVx2xGRmCw41XJHbKU81oBego2pEpAuvZcrkPrM5RGWEJtA8FzgxCkYSwP2dPXLn4G2uHnzMYJrpXTwW",
  "key27": "ehJuTs8hSrTqF2YcpZhcHUxuXSi6BaGAUCzYhbyMQ9JQAByBh5MRU18e9aMcvFyVBXXCJP8zNgaRoXrY1tLDLg1",
  "key28": "5K27NrbgWsr1L3h5qZ7h8nU7WiDNZQa4m1sGzTTr8Qdd3nz9bp8AVeNVBdVWENU6TAe1cdnvRwCsz1ASjYwHVN2d",
  "key29": "3b5apEsiBYkj1CP8MCoKL1KYhLjn1cmQ49bSahvnCdwg7Chx9BSWHvFY8YssV1VxWhCHnQP9Gua9w8KKNNXAcDXv",
  "key30": "3ATk8oTWxineP87aPJEnSHKgYHwR6EVXpyavoFW19yixNygVH87FbZ2DHS8z7da1y8eVVDajH1prePhyDPmBs6Gu",
  "key31": "zr6VXKMzAJZUnThagQGCsfcXkn4MXzAM6btJZKo5EW3TggEp5mHQve61kc71kMYFB5pCRMvMvY5aK1V3fHvuyCk",
  "key32": "c5gU1ZwtdGBvDnkRkS4m6KVs3oyBDtShhdtfXsXfSsBQzpiYsfu9cVaZNteK2kR6hidgMUmQ9KbymAf3Rh9dnms",
  "key33": "2kSsR6LWmXMY58KAvMMUjpALQvDzViCPtqiJozo6KzTPULvcKTHQtaHuWPPpD9byiw3NX9t1QFKnZ9g9v3Npszsj",
  "key34": "4pBrx7peLMSMLMJNbwBcdX2cn3otentBFZWrXzrcB99UM8Lvk9FwrKPXJo6Y27J7nQxko5oqrGzy2xVfGPdxk9PT",
  "key35": "2nG2jgPur71jm23t4k3AJqMhmXoKK5qgbcJETybErgfNFkpqrdJ79iW6DmMZRsnooKzt4KrBwCmNJanxtqsDCNCJ",
  "key36": "BhREYCrNSDvVyys3vaVjpbY4Sd6VQkWgvLv3HLNimogusRXkGDQ5Kyn7XeFRNZVQURuP3We9MkoKCA4a2Hqifwk"
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
