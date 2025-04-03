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
    "5Kctuy17owtb3x3wju4gGQkwgV3GZR5XXK2KLZuiSVWSqHiVGhAP8gVzpDDHXuxoteeHC7MgmQksnADSWURGXGDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Utgc7bdhx7earQFYkEKixSv3ZKuPWTKZWLwKjESBuC8NKYMCKzMvSaiKduKYDuh9PoPBY195Yj5RmSqdhzLMYDj",
  "key1": "2ANcdf7GjZpzKs4zdtMmhEWeAWUc2Du7d76Kbj5VQ6gWsEuPoqNd3FDypyAkevmuz8yc7P8h54NM4hxxwrjBMH82",
  "key2": "5dy8dE8Dg6Z1AsdqF2fo77Lqmtwj9hgVUatAE1aXtyEjsd26nLPcj2nAm6zuT5edwv3wmmMpw8EuiGqUCVHhDqa7",
  "key3": "5XsKdGmMk8iFJLTWWzqrdF9y86kdmii4bV9hzJRg33aoa2t5A1ky5K31CYcmPSS1MpYxd34UgQwUTV8Yn5pdMzSV",
  "key4": "TUiKR8zDN8HssC6X8j4NMZjcSQHp2QR1P9DBeWTPxnTBnTcYZfQ4pF1jY4CsLAEiEukebKnWoz9hjAH6i6ZYCm7",
  "key5": "3v4GwiAQtp2MA8wTfDnvGjmGUFi4sFVWPQdjqWcJFfViyKJZzZ6exQ8MZBNYXb6D8Gc4yn9yEhSLsLwnMpzuVWHG",
  "key6": "5acHB3JHY8GSBqEvh3iosoX7dPyDCxHVtvpSw2stVGW5n66o9FxA8nfSMMgpoBtfZUiumcFPctCJKbAEkPrUHDed",
  "key7": "28FFovBHmkmj3Ns32B7HTvkGFwmAGLA5uiG856W7qURUbmT224Hbq29JPTzR47KMojfuraedgpmZUjECiN1G5g1c",
  "key8": "3oF2wDE8UBLqasjaWKrVCaNx2orAioLJNsCChD6bEVcxf8nq9JXeqExwkkd5b9cuuvnct3waLaCsrJnEUVw551oU",
  "key9": "5gahUT36QzPYM3WSXhu39VpoeuK5MHC8hgjUKpiGV83QQbq7syQ1V1v9pWNX7YsZ7TVF6YsTjmR79qie1f7HthcH",
  "key10": "3v3DC2dAHUJsJK26Czemtcbjk3kYWLR5NRWMh36QkTtMEAWCqFJV4caCtfHMsXVwFLUPMwYT2VMFz6GwZ25nj8j6",
  "key11": "2nKbnQ9japK9CbPvXgAp2xs4aPd9DBukvrGC6RCY7RUZkL99MCwSjXgfAjZBC8uYCxkRYnGGXNb36yEXcgeWTauW",
  "key12": "3XMfxvsf7GUR4h52L5jjxnQHXTcNuf2xrrtt2vNagr3rdG9N6qUAfcvvn1PwiM3DZPDYQQJz4fY2zvUTMskQzyvB",
  "key13": "4obSrjEwPKq9NbCRMCnrG3fjxdNhpUkhaTA4wtn3u6y3sHejpmWZfA37wWn4NV51d5qCP7ucT9NahcNxssa5AAJN",
  "key14": "meU31GJJJhq818qRsyNUrng86P7jLNbM8j9YKRcbfcsbkHa11C53MBAqN4Dv3mwBSZ1mDptQ5Gf2Gw5yezidMre",
  "key15": "4PPvF6s6Fmvpxobc37246mdmNfsoJCDQyFBs5bbWimgY8jjntu4SQKwU8jjdt62S2nndwZ7HFA7e9Z8fHdJubv7b",
  "key16": "5fXACmN7FXCVvwkhQKZfsywcmXBQcZUV5tSb41SFJrSTGXbAjprLBqtn75GC4UuLeexDhdykPCzYtgw9myvdBVo8",
  "key17": "5BkCbbY6AC5Qu9jpAfBntcCzWtp7bYM7kZZRvs5zKEBa77c2QPbLwMLGdyojz5h6XKURbtFcXncGDsxJJGBUv6zG",
  "key18": "XcFmQaPATbQkusCq63jRMip5QnDf7cxdgyo5Kinx236q4w1QMud2UNivLE9kh6E6E98EowUG2vtcuQV8GRRhHhR",
  "key19": "2oFTVct82s69iYmrdkfTCUXuJy3yrJUCiyhJu8JLcTuLkYNevSpikvsEqwMAHu8uCuZ5Dgkon1jaqSNHymL2LhVt",
  "key20": "Fwn26HN55zPxdL7G5zJkbC5vrNUbuE1NteHW5LmKxYWpGnC7umcKWuWwDz1gpVPNyV6951zFC17xrGo6Bn5SMig",
  "key21": "WRgUFdhAdBmLnkwU56R7yBKbC213hTXX8hEryDSGbJZLzkgtiekiLEi7CwgGG9unwoCWEVWBFdmYEJ7h9r63Yar",
  "key22": "2utN6LFMji62kGNZtYcSkP29EdjuVEd4W6W84Nb88DbWrptL7Z8hf3cMJUEvNqt3SpbP1q2jDQZsAivgH7Y4H7uQ",
  "key23": "491aVREBgpSQPCREqwVxcRZH6TQ81xDbgrPYDCSaW2KU64nQsEZnsbifDYCLwKcWYoQ2qkJQQ3zcnD9tr3nWwMSK",
  "key24": "4uwJVah536onfsfwvMCd2waSFbv2vfLkiRHtYk3n42vGDP1KmogoEcbhrRC7xGEh8iZSJJegpUc2neMa4338JF3h",
  "key25": "2XBxkegAMRMzAnStkMHQVrmSHdKsYVBSKF9KoUXgKAk3rUFEvSRdn7NRhNthooDQigvqo6v5rUwXx9MabjSRP3Xh",
  "key26": "23Pzgm21gEDNgpkWEKCD1eWKFTyhiZhTjqaFN4gzJsK82ELf82i4hSWiPzEQ8RmXKRnjsLf7dDvB8B9qmeHFa9wL",
  "key27": "5avPQhScWfJ3y9dv6HJWrXERBdKETGovZgY6FW8XAPmCpp6eBiwBRsM6fUNe8cQNKF8mThpfpqRKbZrsYmo1x3BW",
  "key28": "4wGojTMQrJFepjnhChahfy5R5QrMfj4dQAvC4Nir8MJPPLo6gqurStB4yKkohTuKHKTxcKnMMDqfpmBMcoTi4gSo",
  "key29": "5JpbTjV3XkZgBsHQfmxFiBucyvidY6QoFqUb72F7iGsC5ijhatJ1C2TgPgJhUQW3VF9SMZAPRU4RpA5pBcDPW3SL",
  "key30": "36jiiRXJDoUQgNpBmVvRAvw7u8ETvK57Kwf87qMEFE398h6YpoLGL3QqGCqiKgZWaDWTtwcZL7jPAN3vZhZdQGRw"
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
