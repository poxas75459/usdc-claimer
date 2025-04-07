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
    "3DD2shaDUEneqefdME93LppeJEnP89YUYR3cbNAmkbeEpt2BcGtdqLxMJHE5YuY4GnGoDxrUjmzBGtsoboqmmyWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BWP7yh3MsgKcRvwS8eCnkkwe47xJUQDCM4kKgn6YH56eT3xbNcbcLjeji852pGgefztfwbbPvi9gfUtTcBv9t9x",
  "key1": "62jv7bMdY1qeNbBEVCHLbDTQ3T1ZE4DLG92uTq4RAau5CTQJ9qaSPT7Fjfr7BFFycXyQSoaEk6si3Pgkk7zGitkh",
  "key2": "F9Y74qCa5jGtKK161bhcrrSuwp2wKRpgStmgCCevUWN24bmTrB2eEFm1CAANHDujgXpKHswp8rw6tenCki5JHRg",
  "key3": "5uupYdQHchc6T715DPmnNiWmpfyfqqKiE3Rk6VbDeTyLeuey7NkBmaYgLHpqrYWGazEkMNjMz4yX25by14k4EkrZ",
  "key4": "5AQVx7TDp57bgz5187KsqBiorDh8eQuY39LXZR11M1rNx3HyLDFXzXLhGrwoM5vrw3V49v1Km21vQyAa7KriAWhy",
  "key5": "5Gq55Eg5JKCvFdVnufEWdPGNZKr8NLQTfApEqasHuqm6QTYtcyEgkSCtfA6WYUum6uTRVoScpPwzqprJxxozh3Ro",
  "key6": "5YqfKEjAVhgU8Q5ybPz3G4bAkqqxSmfkhH2gpYjEVKLxkKW13ExP8RAy2hesTg7QkqTyqa3mm3YmdbXrJYmQxMpC",
  "key7": "2YaEGSxbd17YxSU2gH93pkuKtLhHpXXHppMoSzXcFXD9HEuruvYVMWdGXaZwkHL8GYMAQ9AULGs7tuGKJvkegebA",
  "key8": "5nJkwWQq9A5QESQQBwoYEdbdg1WVZdXya8NhWqbkatheqgPU2gaV6Z5yR3HboBs14TMp7fExCNyRgjS7MQAc5Fnh",
  "key9": "35MQfWqhQQRNjuSys339feoxb2872g736F4saNteTQnq6VyhBDJ8WpFJeppGgvRPVtbmh5bmJ9c6rKcWxi152iXb",
  "key10": "PisDqCxTHKjSRuzooHccpDM6AqFPagwBqkypNWW3GTFUx5MZgF2unDmdFL2RTLLEEczkfSuVnniWkkYY6ssnBWq",
  "key11": "2MmeWuRM2aYwEVuJaZVG2LuzP8SdiR8ms5wdVS9u3Jh3pcvuHUdhnqzaZkLj77y2HNq2d6XcpQ6WWjQTNWm1veyR",
  "key12": "3Hhrdp5gAQAFiCeUdG4qJrSZwPapovd9fvEt9yqhhcDL98xfAvj1M8pzxZT38hTTWTxXwsZuN4KXMEVn82jHN3LU",
  "key13": "di7zQqx1HHEe6yPxJxkwr9MQfr9DXw8wS3tgkpZPznTHQDg73LagrSGXJjvZoxyeC2M5D4HWqAVASi85H9Q7yWT",
  "key14": "2THBAEVphaTjyfzJCFzFG6jd4AeUuk4zFLx1wLxCoeNChrfLN8CSU86TeGPnsiKwPchsp49ECZia4BcSrKjvvbuZ",
  "key15": "3BehMahUb9QVVDu7MfpNy79NNKF9sJwVw3KyV4z68X9j2Awsex12xasBzuqiKdyVW5zBNQNdWi7dSpBqKYu16LyF",
  "key16": "4oQz5Nfa2cpT5Ac9PEjNQtFfVLM43XznzfnymLbRJVPLTXPSRQhpMvU52yQwPnrq7Xf1L5MN1kU4aXhJgdF1jHJu",
  "key17": "TYuK3z9w4sxojvaGSiucbkhSUWv6AT7gH7PtroP1AtMNgC9Tbj27pNnjnwnUsjVGf7A2BGaZVyhBewmTp74di77",
  "key18": "3g4tTJCLo2oZWFeneKjeK2syuL6hSLHSh7TXUMc4z2PzfmmRdruMY3zxfmk1i28da9tXoPfS4NPpHRsA9PmjAMu6",
  "key19": "r1Azp4qfxBeaMitmZR1uz7eDX2a4xGZ1FjJsAaTVChKC6y1QhC2TPsrxvrU7DpnBDY1zw4exZY3CEvZbPAsk7HV",
  "key20": "4RRDwEbAbafAfyBz2Wx1RnQSZggaXChLdNEzMPMVH7Pb6qxcfJQj5sPFzx3VBUaKutQNvQPq3QZ6MHjuUroLrm87",
  "key21": "64AkUnsH1VYrQdhDcSQYcmfNXX72jFG2vxkcHvbA6VE1fhaacpmZVxnVFk3J4guNcV4FkZVXrm8AYdGifyyUzreM",
  "key22": "2RqHkCfGaeeascTKWwGnPek84sZBS9cLzT5LSYZPeFXF6ra7dHqUWamiqmT7f8DrH6vtVrWHf31sujWzwvQP9a5s",
  "key23": "3zBz2z97HDoMq2aQXQgwQPnMwKaWX7GCY91GQc4BZL1Qy7AGKW3S9KzmGiB9NDevGMFpYVkjnFCNuK4PmY4JgqCg",
  "key24": "4aBbGViQpv1DFHTJ5Kf3ePQmsRsNW26NKtQuTYAgjQFnXMysEjrZ5XTPk1zuQYRFcgX4vzFTFtusqGVKfqZVhFRu",
  "key25": "732w1qRWrApbMbLvBT1ksdKVupQT4YhcjnJpzXxTADL6RGNYrpp5BrT9zGmvQzbJhSRDFiEHJHZV4H7xZ52QRJQ",
  "key26": "3rKJQJdwhvYoQ6FMDqAdM71MLjuN9yVxM7TwgV3MURbA3GktBuPG7XiAmPBmp9Ns2AEF4pmV2cD2SKqQLg3rGavE",
  "key27": "5kYTbehJKuG9eUFFzV9GVEapPqQaV5G2kriSMx2NAViVB7vBnaXGcqcu3Y2pXSugVkxPWz8uo34jM5882KkQ5pn1",
  "key28": "3k3sns4Xf8H56a8gEQGi3RvfFLfipoKZmjPLyGW6NgDndzMycpcB6D5n9sQLq8Dhi2HwmY2bczgbNojzKb8SCZKN",
  "key29": "63BVrxKSYBWPLcmHePTWKGyc6khHy3raXV1pBonjWmzt3gdS3nejuhSBpLHi98XErNwHqFexDk76WWhE6hQT5LtT",
  "key30": "4W6Kd5qPkn3QN2ByZGL7yLC4fcG1RKsmt475QJZsSFQk5rMMuFKH1zzb9ktmjgFX93ZysYcBA7CE3zf4KH26fBDc",
  "key31": "4fmj7SQgyMJfag33pFYLrcMNBK5qs2bF8pTmTT4qt4mXwUu75n5ku6rgGeja6SDVA9VYqDtFCBymjHpY8wb8ABjM",
  "key32": "3tNZ9mRBj8XahpcABnirtzAMsPy5rAHHqZECBhe5mj2aRofPd411B62bXEg4NvA5nSgr9GYhKBBJNpitSMMj64LJ",
  "key33": "3WNXSjffNyiyXVFSfEoPRYaRu8bK2ikFL2YwKsugwc6ufWohKt8mS3E1bWszAP3HAutd1viQGdJFrDBRgpaHgX5G",
  "key34": "2P65n3jXGwMP2J7sTVW7RthP5EiKJTKK14AKqp1o1Z4Q2Z6MFRS7dSDcWH6hhBtuADe2d3wuSR5YS4oNAcrUsk7X",
  "key35": "DzhDTqrepGK9oo4atatg33Bxawn2y1ewKQRnpXn4vbSmhFKGFfiBM2upLUbY55mybuMVZufWvmW8xauCdN4c9Ey",
  "key36": "2zscYwTaPpRfzDDcqtbSFPF9XfkHajpfs4gdqGxVi6ner3VJwXX9tbMUzntgy24SBGBX9iTEwHAYo4e8yaPnCJjy",
  "key37": "2Z5L6v8t2rC49KARx5BbM9Wk5qReS5PBvCd1Mjvx1aXHdqt1sMLBtdgmzoYzjJxwrF7Jg8PvFNpQu8vyEbaD4odV",
  "key38": "3j5BDtdaya9gJUNUwK7u3VZzB2FShpjGjsbXtWb5B7J2kWqDTzt9goG6EZcZzpVKHb42KErLRWKzeRKD1Y5WDVRS",
  "key39": "5R3RVdmoUVPyqJoPmBSghrZwDe7hqmJ27B3A8gA5tC4m6XkwvkTHzcc2Dh9fMAUSzw1BzcjYxCRjjtuU83hkVNf8",
  "key40": "26zaFFyGq82BoXsg1oGaDt28hN4trMWAimdrg4tkkev4dbS2RSE7jisF86p6TqC19wqaw6i1JZM6u84idzRcAyrz",
  "key41": "CTPU5CK1rNKPfu9LbMxGs6WkSDjhDnXzci8dZTQhEayGVKPuXpuEwo5t8gRcd6DCcHiyHuUipFPJZuE7uJNsf4X",
  "key42": "2kdwgWpWn67jbdr4j1gCeFTAFDNa6Em1QBGb8h5NKimd8TUmMNQXqN3XHmCiEzUeqvS1F1YB5xVBwKwFBQBL8Ui8",
  "key43": "3DimUsFdvQmzh8YspFoqM1Gtf1VcUj5TvFvrpwxiGbThrXKtqWqRvdBeUdpv3Hmg8o5HkjV7Nqqdht4Wk7FA1xP1"
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
