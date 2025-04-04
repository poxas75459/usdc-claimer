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
    "4cWMV7MX7eFT2ZqBreh68cAMF6oAHNBHSHH35TSv4cLmE6gYWDYmrotW4F3GHK4F577J7Zemwh5wbEekk5mS94Wa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pznxr9hUXW3TVYEQf2KyApmZhnHrAi7o6VntdyQwxD1S66UWUs26a1JJVsw4PaDVDtCFGDBC2965A6syNtoCeVK",
  "key1": "24zvZZXYzxFCWE5AXhCZrrdRbfW24Tnms1WKFiUmRroMJr6Z5hz6xQ4M1DhmNkdw2FotVR86EPEgwii4PFpSwZ7W",
  "key2": "2rVqarcBNrsYzut5PuPPcyaATiqj1U11GKDbgJgKrp3FdZieggMJaKtFSoUPT1pVNN4FCZsvwcQDGmqK1tHTamg5",
  "key3": "3yzDmajpGxvm6XoDo8xUCSBV5fpbSqTAkbX1zmutdMBFfmydum6G9Hiyyumhm9dGWrnPsDKuDC3zf13rM7a9seCZ",
  "key4": "5z4HTUGvWZEjAaUJe3PpUrMTZaPSKFgRgHGKNPK6doLH29NkyVVFVp3CiwZPGNpgEFLRQhQ1uTWfcdp5hFnwNWYR",
  "key5": "cJppQaL5k6oaGRp2Rffny6QhwXxtq3TE1iAWeXEhoFFUJKRaGesqomxihdzuywmyF7fpJYAQtZPgbNPEeziWK5X",
  "key6": "7Pp1YV1eWnngqs6ekiuXHkNZpUSHuBMujUBsgwke6ScEDAvsKvM38Aq53558xqDhrsGLmFxTaAPRpdsCfN3mCcU",
  "key7": "3dcJQc3MTJ9Bfq4jvGR35yPKJ4Lv71iFqnDA5d89n6oZbXbipF5T3FxkLVEYARQMxi9tNWHCt91F9snYrqyLc3oz",
  "key8": "3sGVE7pbGEZyxYrjn378fXHiNd76kZUowrKyUFjGpZfEJP8N41HcSBhKKCN4zhrxufL32P4bnXEEKmfwTSyuYzQs",
  "key9": "2hcUVkVsCDETm9eyHmMPvGEgFgNjEVR9XreqKhjiyPMBQbPt7UwHwwsWQ1RwuKHTW6KYYnbzyzLvoLn1L5ieAbqg",
  "key10": "4YZUMHfuasGN5wsh2yGaQoK4et1qswViwKEWJbtWy5hGY7JsUnETyjxKVCyEzajAG1zyGdtYHQVTVg9RaECFtrw9",
  "key11": "3Rw5AUAj1ZJEHSiAGUbUsKnoVTwHcQCZNMWvmtP2nrFx1dQcENGMgpDFmTsyNXz6ru7csW5LnXQkUPqLwmaT2Chv",
  "key12": "5JMhGWn9n3JWMteH4QAtNc1CaizhJJVPy4WCHxXZEaNE1gVz7iyakXvUWWCmP7duLwrmBoehjBTzw5wbVitgAzVY",
  "key13": "2Zwi87AvPJ6oeMbGJpsLDJh5gYCBRoPcEM78XAkeEZLgaAsa7oEsC7Uv6TzFgc8VvrEWYvrc3F3m53wbSfVqLGs6",
  "key14": "3RPtKUqD1ZjKSkUnEjyMkvbVfV2jjSQ4okDxQrSaRFigAFXXNA8jhrXoUX996bQZmBRmWZt2k2adyq7mZzQ4GeGH",
  "key15": "5CUnH4B7cnrvW7HgqcvBEXaCqofbUAQtxH6NQ1oYmZcxYwM2V2m22mAaDXDUVjidcMYYyhAFvBxz76meCoHE1i6M",
  "key16": "4YJ32tsgH7kmaJpXDQaDs9d7v5uJcC9YkHmeJeVFt4ZZRsGU93veTdJ1TsYhnSxL5ELgPe8d85F3pGKmHPx3d3W4",
  "key17": "4qhRCUVTm5qBWdFPp9JMGFHJGYZAYhzLnGxkBnfuudQufAanU55DN8fscwyVFEpU9Am6Hm7Nx5KmufvhndvtYjq9",
  "key18": "5wQ9FhZi5iNxVYQCiCSuRYVVN8WWFqAejGHkC2oEvz6TaY8S9JmwWkgsKcsJC8hmhMgY7JF6jH6qvAybbHPq3uzP",
  "key19": "5BgBBUnYvVbnMyvSJ1yxico51A4gGVc5VUTzbF9sp1zD8pMZs7uqqAqY1ZK396xHL81eozzewZahpwCb9eASc1zR",
  "key20": "3tWaYxR8vaCerbXpFvKMHxa4YZuC1Are47V97RaNLioLtA9YF2yXU8xVjd27ebJWrFFX2vzwMTwWHU64s6KiUdjZ",
  "key21": "2TTCjW69Lg3XVcNDCiSmE2sSBV8VpRV11Xr8nmXzAx7gupeuKR5HHRo7Fpvv479Zc6gkFmbmGpRWHxVwX7rh1Ef3",
  "key22": "4pewKgXze3iKNeyXEr8UsiiB9zZPRuc7pXW8jztchdh2sAR78GcaPVe69bckvSMYASckCdXYtKqfTWkLHbfs34pH",
  "key23": "5Ae2wr5d6ahGRVKxwHgz14vaUo1L1B48mdwLtXVvPmmwdHNV9Kw72KHv56Gh6q1yGM1fhQryf17SkR1mG5CLezgx",
  "key24": "3xvJw3Rv5xp4VqtqnaViL849Dfh87uS64Tbw91GLGS8dJae6Wu18KZJQkh4rs5aP93z7rswBbJf9BMK27nF5Ro55",
  "key25": "3wPrizSqidEAojYk9y5HnWPqsHsa956GrYbBnn5NexPcXREqt9dkEDbavawywU3ahjxHokzRN8RU4wQ2CYUJLNG7",
  "key26": "2VFGHY47vbvmyiH4byGev1Cp66BMxD63nfjjMkEMfDc5WokTwMWCbYNBbyo27fAn2nkEjuJfmLCxksVjPvSQ1k8C",
  "key27": "zci39zBBTH4xJZFS3wnAYdv864nftnwdxrXPD3aeb5g7QNt7L8LU9MM4Sxu1zBG8dtaL1W65NqXMaL7doKvkLQM",
  "key28": "4WUeiPQshSrAMRgX9i2pJ3JY5eW6Q86MTViZ7yiSQS8G8h7rK5QD1YR1MzN8NfJZgeQs96jDkCZZ9usRYYNU6QqV",
  "key29": "4PidbdtqTc6W53jxruNKjCw24f3fYntGfaP1dUKhBKcWBXBiLN1hNtWCKJ3WXZ5oWh4zWxWnQkv3awkXsE5QVcqt",
  "key30": "36QgeEeV7Y9cvyXmQwyBVM1dLuyoPsCDtbNwJvRK7mxCHLf3xmBt9cMGeHdmpD5o5B6y26bFUA2QmADYWr76pMqV",
  "key31": "4LQKi4XNgcQxYpVmAM3tHCsBmMEc7cLjU97LpZCYhag5SZkY6MsrZhrzbAeFrQMmmjLNZRxzCdc1CGnSHU2iaFaa",
  "key32": "2RWs6eHwq8Zjj7RVmimYh3YXA9gPQt2KXEZq9VMETLtyM78ikVSxjfhnEgf2q6QqRZN2T2gM2Mowwkdn7TQ1KBRZ",
  "key33": "3AzQLww6Gh2jgbhzhQAsCVvph13osXkrH4owDy45kRX4FK2SahPEGHKv7F9dpLZt649sWg5gccWt8RkpkGfRtp6z",
  "key34": "2SqN6HCk2QGJRMbgFNvCr18VMtC1CVUF6SAZ69JdkrT4wWPMfYCTujGV9uVmB6uZtF9jyus2TQ7TdLEg327iihJD",
  "key35": "312Uzr9ErPGDXZr5Xy9i2akhhJyXmuyJ8zeoQkKQug9mdPqNEu3yaGVyqxUVNaztQbTiyGbARBoHUUipHH4u4c49",
  "key36": "5kwxhzpL448vucWibdfyt8QWVV9NhP2mimbTK6aZUkVDKdbN13RUiw9BGoA5WjvinfxsyBQVUQmjpFgwi1UTG4dL",
  "key37": "4KVJpdQMnPaqjEBxRK2ndEqJEn7YhXTQznWVQY6MhXMMsQwW6CxVpwKR5LEAsytBAUio9TnnC7m4awL9ZSRu9UCJ",
  "key38": "53NQF7hh7qwWsq26gbv1qJduk9FzWEfHDwbYQzQzEk59vQF1rFehqQW8eWy7MmyGSzMhyXnFwzVzbeS47x31jF8D",
  "key39": "4o6PNjRh6r8jKCMDQCnJq9qGqKjX7yrkNRnFh7wikqnzRPQxY9cSUdut71JvHpRzRYEMK2U5uzSwSM1ripqpCKuc",
  "key40": "tiAjvEFJ1wDhucaXeNREWcJkRBL1FrXavLZACHC92LTKWuQxoQkEWubLBXV2Q3gAGaH29rZoQVPqUBe4gSdNfqW",
  "key41": "4ApKA6U9q7j5Sc6hm8du9mx6UhmqU1XZHxUrUDed7DGQQeK5DydGMEmjVqJsEnuovfT5bWDDGdzGMxXVo8jHPsV9",
  "key42": "52bG44XP4DbYyALTtMh1aYAfJThXXgnC5agLaTbMcTEhsSq3bq9Bsu7YGMyZRTCnP4uCfXFzS1AMXQNyQkD7rNaM",
  "key43": "r8Ep9V6zkiQPChHk7qhMJc5o3TeExcenLN29BYSH6zyqrTXxLQ8Mpmq8WLM9ijYKbkRa68kzKfS1oxDJj29z5T5"
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
