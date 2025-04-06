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
    "4mhHDD5mJ4Pm6xjDg9mYiTTb7ts8Ss9t5vrZLVrf8XRx6esKXvvSGiDtoEDVkHurSLM4qgswiwxdLqGZstDfVZYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25Z4SM8PRA7s5wG7SfhkmjubLjK4PKr2m5ttHYfrXtkjhfWFRJqHoD4oU4WB1pTkBxdNtTz7DVRNvnzLLFpUb6vz",
  "key1": "2gwUCcroWEAdAA34nVcoARrXsWLGZmTR3fqXWo5RgFqk1DaMscWjtoNdpdMkFaDtfnxzB3fqRTdyDxFwcGJXxjFN",
  "key2": "3EHhM1udXNfRr4k3eF8LgdjPCs7XjRQvM5ciduEDJCExnMAfUTkY1pFyBpXiwRyVqaNjyhFPB6muuvTFb9xt5VoQ",
  "key3": "4bbxTq9syHJftNEDiNU3c2a3fUzkoQpBF37c6BP9qxyLV1XDRia1bV4w616n6MofGZkXH4178SprPTCHCCYPMHLt",
  "key4": "dqw3dkti5T5PzHdqTU9y5a5s12N7o71S1BKKGAkZgNKC945ZbzjHKEED1BR9nZqSoPyCnjf6s2P9fXt65EvUtAQ",
  "key5": "56sVupYcnVx36dyoffv9ycyDhvS7p8sVqQjSfZRXPZZU9Skupy8gDCQWuaQ2oMUtfWDzwV5waU1wU2NQ8zHJX6Xd",
  "key6": "4WnPXgxeey4gZGwJDydYbe55myuFxekqY8i68a8AoZwzwEePyM6qAQj4TsTW8gtmLStpijXnYRA5Qk7QR1idEtbF",
  "key7": "2FaVBujdQfTEtAetHJTeAPjC1LkWqNw8rR6CYRXrr752hWTEQr7fUe2XD1chTYYNudVW8z9MNrEP7Z8RNr7btve2",
  "key8": "UJxMc9HKgqASDnfRTMm4mAKNv9DF9XmMqFHGeQZKWyqepfZSZRBkkYi6qX91dbJ6vdXehBaysZ2a9QvRQHmLJ2r",
  "key9": "2JD4oxkiyrznA3RxEDjGaXivGSGDyGr9frB2yJyTT1xtq5DDo3ZJUtnsMq2CJcsoJUuRrLDEpfrPYFmNVUu75spA",
  "key10": "3wPhaDLUBLdg3Ty8229nTdetKV4fF6bqwmr87cjjGpVhXeqoGjENNwp2ePZGdvU2C3NGyFCGNcCLgLfumKYeKvdn",
  "key11": "519stXxL6UNG9xAGevEPnfZe2wFUDSnoYGqLdQLCSTaqgUqmvyRTfFnTRa4GokchYQvsg3WopAATyiQEWr8hyn25",
  "key12": "jMJ7PguMPLoeb4vwSftRYDZ2kAzAqZrZs93H7dAZvu9jkxd5qMVwkWimREBeWZR7NQPWs2gpq4eBkFrqEsKWkSn",
  "key13": "4L8dqMvxY26f4rJhCjyoH1soiqoJn5oLFbtJs26okQSWHcETSEM8dsg4MN4Q3aqkMJfwPgNfHRfDkjxUgLVNmcoG",
  "key14": "5eEE9eKhirx2VB72APCpLNZH7AESZA2b2rWhWioVovPVyFVZhmCbuZYo2gd6Ar8MviCh2QBhqmk2i7rqd3JTRHPU",
  "key15": "3VU4K3DvpCzVEWQhZjWg1NqXrUwidZ1jTCz83mJF364KCpbSrMxAYmnVV5L9NNoqKaeLuZNjgcQ7RnTr9Af6nZdb",
  "key16": "an3YRGCEF2BR5NV1mi71ANFHuSTagURuMhZVVdXoaxj9nD31YMUNhYjLKCMTxaVkhocUkqDDYbLxe1UbAP6fQGX",
  "key17": "3R5VPjnnZX2t7XtoUNrC9nuTVwR5QFNAUgxY1bESpcj4FXLk1PXWHnjJmgatwk5ij6mRBYMp2fp5uqAJfNtq2mfY",
  "key18": "3jisfX5dTosP5SdPhf4hEmnFRvhke1m6sKdpxwtUJk1NFZbtpsGxGjjwYcKvpcdAy6YwEQtkQS6oXHURN6rh3Xd8",
  "key19": "4R8mNNH7BDMsiwHCbjLXkCuxjy3LBMNUNVgdJwgGrDrw1kcX8bEy8zciF8Sn1wfprXRU7bdkR1utt1knnL6K777H",
  "key20": "3vBwXKDvPjKkCpFuUiUDHWx4ctGVPJ56ewAwiPy6kpWzTBRhZ5VGD6TZKoF527NQgYvFvTQzTRqLBkHxJpuwTuzD",
  "key21": "4PF4FaAB2fmUwMehRDkAWYFTdfad2SY42ZkJM7oqit3xoZs7578Z7BuMvxUPLVzB7QjGgYQZWuThXF3oaTrVt4KA",
  "key22": "3qdo3KNu2REjBvS8wYtKbLXX2fZLWEQs2pbvXSssB2DDsvbbrMEXVfTV6ZYVyzYF2H8UANbQyQG7YHNoDjhHCygS",
  "key23": "3gE5yfLpZ2UNwt1neNoYo5dx5SZKVSkDZPPSrN61NsiAkjYCwZi9qGd3qdwLJFBpUCK3SsKnm8z32n3DxA5v3Yn5",
  "key24": "2tn8ekRcyhm2da7xfsSTmsP4zyWKVmNDYmXX86Wchcnyyg722Ueu2o6ouVd6nJo8WcNWddynkmivnPTnFac2nX1K",
  "key25": "3GoSiH5CPdWeJz5oyVZYBnvnKarbeN8kKbwFsxfCCcBCMzgZp5nHzb6xWDmQFX8PRCm2rHFPNNwYgApM29f3v3kr",
  "key26": "5iyefJABQ4c9SMynW9Z7S9gP5MStBQCzHHGkULuctRSihxfj7KUVodJsTi2HzA6NGXBj9fHC2WBAEhxRTXrm3LwX",
  "key27": "2dh8doL5vE9ZmxFXzRb1PCKkM8JX5311we2JsjLqZg4DsaULbnBmvDmMu9jSS6SGD1fB7tQuzknM7uNnuK1nxnq",
  "key28": "46Zu8Ghhy2FAVx9wGwNNqi3pzauwzcsqq9j9VFmhgd24u6XtfuyA7gzuYPWXSip1xgqMuyhbe32bUJ6K6ABfyBjY",
  "key29": "5c4tjfuVy1t2RghvpwkRaY73BLgXtrpRJ5KPDdjt9yVkGWiQkEkpYHT8ioQ4vGKw22ivhkBNUevmXt8R95dR3pHB",
  "key30": "66HFXanBVCcP4iAvogtKaWKcFYaJDKB4i4xP9iaNLmBpSXx7f4ftg3iBBhDqp26kFYd3M1eYTtnBYR1Y1aLqztEu",
  "key31": "2pdttdBPQhSR4xDtoV9VPTxuNuMp6c4rSrA5hBNLnpTT8i8zmZRgQtM26qUDjxLKFD37QZNh4L3g6Gv2jMwTwATs",
  "key32": "2kPZyEJu7MKLfLEek6Vv5y1n5tJJVNSREKqQkgUu1UGU525vJDoVhDdx8hK3DV6SVhBZ4Q6eGWZB5EksiaDsVsdr",
  "key33": "2Y9AqrePkufwD3smaMkdGETQ3AF4vCeDT5SUqvTuDYKQ8Z2Tj1QoR1ARtm5n6RGWFr4ohAL5M5ApNPyjcMGs8PA3",
  "key34": "3zKUqtSUAyP83vf7tyCnvQRLuPEvBYkhE8M9Cwn5NUjUqGrLdvvviUodaxF2iC7cPKrKQRbQHk15jLrE5FDSFadR",
  "key35": "xbF9EMhADRm1Z3GPn3nY83TzVuobpQfVdHPNKz2Ju45CymdUsdqHdUbPKU1519wLzPC6TnLcRiHcK1WmsxUiwpd",
  "key36": "2X2ofahzSwRQDaZhfC1ut2vwGAGBrJEJiJxHDCTkYAJJ1AWc7SZg26RQGfqLqYKBU1in3FyhD7espcYwd66Hgb4m",
  "key37": "pp2niN7AQLFPXiwrghi2WUa3D8Bqq3j94rCKeM3FR2XAdxtFvq2QgbSys8vwgnP5zDY9RV6kF6CkWaGioAwDa3h",
  "key38": "5JVWSKywZ1kJeMhL9N4eXmzscVd6wBHMJK6SXYbBeUoXStzh1Kp91Jj7HUNkgixjXUZDDFtTr4SHsdtTGseQ5gMA",
  "key39": "4t2MJuJsBU32JRkFiJ9KYKzMYh2P7mYKJLZbQTAyUdeqoYLUSCHHBeF4USNXtorhZs4ZrrkZHwiSHhcMxnGwdL3G",
  "key40": "D5ZvUM8xSupL5ETf5WUarP316ZWaw9AVktAt9RJcaYt3CwzRom6sQNgFHF4vp6XGFh2dV7MJzHvpXSUAZwC97Bk",
  "key41": "339ZKK5czVDrDfv5DArCx5QjPQszNkQJpWivmgRBnbdwWvALS2oJGfvijehdZNFVB2TGTMJ8NU3V8zNQdnnb6m8k"
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
