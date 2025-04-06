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
    "4GHN17zox9V5kCpjBW5xxH8qTvoTcAs3mUqiMp7ZUwqL3KNJhrZbHw5hVEvqTTj9BSRJj61vNUsYjbbDbsReKEqE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tnbsiGQkaqsL6q9cnmTS5B8xryqbR6K8tnxGxhEyPtzMYuLtNbTNFcW187KGkEP31ymczRrMKRjjxbN8v1pBHw6",
  "key1": "xJokakQjwbmAvMx2yvCudLWsnR1Yxz5uuniM3y5aGPummDk14RZVDHDzCPFDUAPg7mDqqDMNmpq6RcoVF189b9g",
  "key2": "8NDio1AAbCabsZXbJLcvCTsB1beubeHVg493d2vpHg7Q6iuPC21PaZy9YVNLZYAkHAHhT1K3o2Xf7Wwpum36ygz",
  "key3": "GBCjZDRc2sUxTw9NQF4j31opM4FDKwwoTwTMW33eTkEavAv3e5kX5rqGVcFhtYdKqnBBaojmPsFHhj77U2hSLKA",
  "key4": "3iPF5wANv27c2sTWJxBFKs84NVGZgvicgQkkMzEwPeb6EBUNe9BeLYoUQUNVqEjgFzV5o97Tyarr5hqRhuQiTiN8",
  "key5": "3mM9C6e7LAvKtVmYRtojSaTmv96Y5oun78FzT1cx1Yup14Gr73a86DAzYndgqExJfYMcawoEtLmor674cy6WysNo",
  "key6": "3aTHxgqwRg1ksBHkTrhr2inC8rZfPkLSpzD2NDgmXrzF12bF95cyJ1Ac7XTCZGT325NVSaykvZqSBxgrHZgQ2MiY",
  "key7": "k7m4iFtoPJkn1qCsUy9j93Q1TDyEyjq1bZXuKFDMBHecetFQu5iDyu6nEPPZjjZgJStYFwVXXRkSsT7ZWnw9S68",
  "key8": "5eH67XKWXfNUe1nmKofBzv1PyYgakWdVE38CSKAXawhhufwsyCmCdUi1e3v6E3q9QuTW5Lzdm5tzsGkaR4DdyM7E",
  "key9": "YUsEkQsCGJU83K5aowhuJPibXUq5bfvECTfnvMYhR2sP1qzauBDrzy3ogwXwyQjKgQyEbZAwJtqMkkDNeJhykMh",
  "key10": "37nNu2vTXx1ncCGwzM5DdU14SXyw7RENcdwEziGncjzc7JmjFXEUiPGwfsBBPvutEuKq6RQV59uidJPVqFvHqRoL",
  "key11": "3oii6UuAm27GmSWi6nqmMsPG8o4vXxAxGLmxJ9btLbaLwdXxbdtzaqBMowgHLt9CQ2MZDziBPuxXdgqAzUeeL2ub",
  "key12": "2vRChX4hNjVtowwit9T1AXbaRmSEuKx9gPUyYvmuRGXkxJbDwNs8LKRzNyrNqB8thQSZJ5KBzky4LKYNcTCaAYYe",
  "key13": "4qmgBYjcVPEmKwKEHUBHWjN9uWw5BgTE2uCngwmhAvoAZKWT33R9G85pzbTVjbatDzryc9EZsgWaRcwTpzZxaGhT",
  "key14": "2rJSdytJ5NSjWvHo5BKRLaH3ViASzt93raTseLUV95pyYBQgsY49J3RvVop3tHqvBtjN78b5ZrmWjJ8U6PPhVu1t",
  "key15": "3zjSTHrzBtfYGzWUo9PVc6s9qfA1kdxq6gLU4ezthZbPns6GVpCM8PTcYEhCiMfrKwJAoEMZ9S6ZCbomn6XLhc3",
  "key16": "22PwA9aiucuVe5wwikVNYqnPKp8Wy6BN47mAUvv9Ej8uWnXxu7GyDoydzdBBju2ZgT9Fq1ec5GW7KT754pFTvbxe",
  "key17": "XQfxu8TFALsZPb759MAVDUumbyfdCx4FT1w8ZuYx29dEXUMRcSbTQLkVqnb3KRLtxfTntRNpdUKfNBwZvh3jyu5",
  "key18": "4DJhB65fArm1ZZPUmxCknX5KBDR2qUeCu6HN6RFSex8N4B4Vq3pKjDvw65qo1SFg1qMYK7kkZ2tju7gHZZS3FF21",
  "key19": "5hKVpV5EYFYgC2tcuo42AF2sPgVUyT1Dj5M33SdpAUbTvNrkzwGU4sJFQGGsng7bjrqjpsQup4njU38LBjR2QpXp",
  "key20": "4zn95cU8cGJi9r3azhRxT1DFNJqsJvWE269ED2FDdsqU3ehLcxWaayJMVZNbkvgFhG2AaguMdxCDZvFtGzaZxseV",
  "key21": "2bebMVwknrkByFMpMwnJ6jve4tNQrvM8rCh1mpVP6MKz4cDAEYoQ1JUbND4H3iwiJPND9vcvq3Q9w8FEaanzgfFE",
  "key22": "5zjtP7xbEDP8B9Y78njh6WfYvE3aopj249VaumJ8hNtpG86tj3fvw9EXQYSUygUzEYK37nCVvq3rri79DsxpxmsX",
  "key23": "48UqMPxjcwsXjSUhiex9YyZYkF7vbUs2vA3cKn9duCwWvfu7VrqFq9o2EAXBiAoPmjgevMZProDHTUub1j4CdLAk",
  "key24": "5y6N9ESsdoXX6hZbKQiuqbPq9oRJjxsVkmRBgkUVWZaYmbhMWPWU9UVEvYjUhpHQDEQwGfTXzwy8V4pweFrgVoaM",
  "key25": "fyw8yGZeEseT7YpgyDjoSaxDNPbDwiKkb4aJT3q88XVhwYUYuG3eDkkRbDCBTCARAUYH9Fw96t3vvxUiNBme2SF",
  "key26": "3u4msnUshuyMj3SBch6MT1uwPcbR6ngsniBuqYaTaikfLNMTRkbYn6mYcUHXbvcnN5fb2WfH5ygBsa7EzGWvUwoi",
  "key27": "4bF9FbegAMFUDvmZnvvkqwv8MyDq6o5ojUmNXELvLz6jTFetWLv5ByB558F4hvePd8rwmSGQWF4yUrnW8Rrdopc7",
  "key28": "29wwxbDDcWAftRAve8PayCMyddtUbGGzrJCcDfrCTuacF3McBFdp3RE5TjHZgcdLN3bo6gW9cU9Ygm8KUZ3AkChd",
  "key29": "Dc4Ci5tHRqrG77U7x2RQaLijfdNWWfcV1mQKU8Xw4CkEYaEFcpFKrxzLhttWVAvDkV4eB8Wj57oUziztAsLgGaA",
  "key30": "3sekfxRtAvR6NDyXxrh2fVZGkDBhbTwNJrZ5MsXXtgo4uinZCoyE9uKeMBjpLFqidt3xnetBY6Sm8NLvzZ99iU18",
  "key31": "44znEcEdWT55FctQDzdj7QHdm1d2wnbZX31RzmDf4Z9q1ZfwmZDYnssGR89ugtcYK1g2jE3m62cwLgQU1dPBzrCL",
  "key32": "2QuDRtC2pmwreX8M3poa6aY9Y2zwr38TP4qBP8Hz6L3VRTksdn3uhUyaips9vnnNi9XTdSF8NSZWYoQHvK3PN8di",
  "key33": "2zU2RCcqib9pqBFmhraC43eEMH53dDtTjRWoSTfmn6VzV6ykHkgNpFhaXqkh6dMu4pF8WBwNec8Dvfv11dH5R9Uc",
  "key34": "4QXAikA5CgVSAbfMRb39pnqk9LRg1ivqoZ6U8bdN5r7ea4ZRVvu2HtKiiL9cEMyEnJtTJ2YWZGvAh34fi2xxQjkQ",
  "key35": "5mKQNLFM1Mz5VcxikfaxezrfAWXfsApRsem4G7xDSzavC9pmBer7UrtiK9X4BjJDYwxurzYXTvkPc4GeYgQNZrCg",
  "key36": "13pc6z4zhErVtscuJjWD3erCji1tgVPEbU3mKoHFDi25HP395mL2guRuoSUNECWh7cwGDegJZnuHoLCkTrGEYVy",
  "key37": "5MMBDZqiJcmdVDCpQXT7FEq9HMzeGRNvBEuQztM8hQcCCT4US3y3gyZKxPX2SxiR7yudo4YDpRFjP4SN6ZYeJ2hG"
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
