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
    "4xacyv8vbusHoooo5u5GnQGXpAbLtvzBdds8pzu2fNKwACvvLm1Gp3F45pmbJLLZcKrVx3zVWJ1RXJYX4yreRkGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eKj3ap7C6V9jVwHK7ad3VTsMoAgBzJnwHxVML6avtww6swyLFXkqZY5LTuedtdhgwbxexk3gS91jzU2b8fhtc9C",
  "key1": "3ewo5QYAkAd3QeU2p9iEhA6K1kuprnMhRBpDFWkd9hVVzmDzKzh8gx1dEvFmKXDkorYZ7Jr9MMo7yfHxNN7vaHwa",
  "key2": "5VjQzBSmAdkmwnBK9skYs2f33WisgLw4zKhf6ew6WtxJ7ZBxYZJvh79ApjsZere8bjyWJHCDFa4k6C6UN8jB4QA6",
  "key3": "4UZqTzA9DrkBRBXb9PMgjXexnT4atRJHfin2VMomh7tvjfDJKiH4eacHKCS3Yn9oKpGCCkmrLoUkHiPNfXMqFbye",
  "key4": "27gGaGbUDwHXYyZp4H72FfTh2FBVCEE2bX6K59Pf6YsXVrQyNm76ePfvs9Lafz6YeJ88a8Hp9ECBGkFtrSTNHyYK",
  "key5": "25P4rS1umJR3Ez4WYUd52XL8MNdPPQDyqJfWhUTpkKkFDpSCFZh5nyqRkHY3Sx1DzMxAhEJDR8nsrGUkpA8CoEZV",
  "key6": "544h6MNLCgNyHVZTDaKcGwGDAemMae4HAZ1LgjmXUAmTo8Q78FVhvPLnC8z5ktTBM41Gzc8FqWM4oM97yyCr7UrL",
  "key7": "2iFK4WpR9HtdoQwHanDqSo4PCC8gsbHpdi7xjxjRNms47wfBLaz1f4oFzAxSvLtMhHsTmgpoUGPRhXAgMVhFrmp2",
  "key8": "mPNRmf5a4DXcMgf1awKSJYJC7qNTboxW6nf874Q7b1fyPSrgVNVR3bFj9kwH5gGWuor21w2TuQpCaW7EVGkjsUs",
  "key9": "3kFnyAfcmVPfe2bE9nxbJQjxJHjeoKj4TnvqL73jVinut589feqqZdqTU1cyh4JM68nmVpSyMxEQ7kMx7E8D1vNp",
  "key10": "3QTuQ88kuYSo5Qu2yZB2E5AYPaJwsPtVBPuwPR6YDnSBbRj8ycwvxrJko18kE2Gi4K5ni3TkTGcYu4jzmVTRESFV",
  "key11": "4nKV9h7kpyKkNU7RWQ9bn2CVsy2CLuyDmfmyXnHqqCU9qMxBgiyfnQ36FaH7HnS23XL59MHhSqVqnFMSoijMqZR",
  "key12": "3m5339Aa747jjGfH2dL416FvVXuFkU57KBp8461GmYH4JxNkzq6v4A1SqigLN68QrWhZwPHrUUMjgwge34vhmQNH",
  "key13": "39vw69xQbEjtMjmbLzzKZwpTQRkpt5kvNVyq4Mk7rWgQXjsKbbPR9gYQKptZbYe5fSLDaA74DJwMPhpKmiUuVcwx",
  "key14": "4urFnVZakGi9dP24oXzYvSu2uwqqdjnaXmboLxtqEnxZX32JHhDCkxprYhi6DVxCjvWxDnCNrRgnY51rz681p9zd",
  "key15": "4S7oKZdY6KU1zbj6ApGdW7ZW8tvaWPZhu33p8h7TfZGxUQkvc5GZzxGmkgLZc1cPDCj3p3to2J6bh8hfcnLE3XAb",
  "key16": "4Q8Yonk5bDJWnxSJgdCd1Lo99bTYEwjuUCaLYfcKeK1wb6T6E3jGi8eH6pa3VuYcLyGpav2rLkNrFbZk79QudjSg",
  "key17": "4nMDGfSj552V2mZTErYBaDVkhFc2emEqRve9pF4nWykTQneHuaQ6f76RvtTWJv9jYooW3AmoyfLNY7pVwaCsgJ8a",
  "key18": "3zdHPcEx7f8JMKhL6WpxV26uP6KrESbb34GSfaMWN71kwBCqaopcgiCPbRSywCdULGLdNep2Snp2Rxu28kqSftw9",
  "key19": "28KzarJxdUqaKceX9E7gXKFu9aRuhqwYAzMcrVNn3adxb1toEShctpVLtuADZqwPxuX79HJvqPU5UucXBbxYMhiJ",
  "key20": "3VS8TFrS2rA96B6LpKJHPQJLsaGB1KZtN7rUFDXiMQzNLoFLifeA3P1vW6vGJhheEuvX8y6tkktdS4UaniTpxSkq",
  "key21": "2cvPb3gXYqshoUtbL6uuyXwCR3wPcrCMjNDemz8jvDXAnLf8NQwSLx3PEbCXkQ3tRfGc8czZscuK8KQ1Bm2P9jwi",
  "key22": "55eRTq1h7N5QQMHRMqhqGKg8QyKx4vGpeU23bcjkHYsLny8enmMy58EHDpWEC17VijnoucAufYdVWGk72aLEpGt5",
  "key23": "3N1LBLCPQd3VzWzDNY5f7idEvFrmJS8pDPbBi72oBzxTEpbUg4i65vcubUeKDwYMXCV2dG734yDtT4qQ1srAf8of",
  "key24": "31cTJ8wzd9oUVHGGMEkTY8TAscdNox4UwWfoYT65nYf5oTgQBL2X15oo9ikzhLsBVt2ZYZVQAY1CaxYzERDasJxb",
  "key25": "2sJPFs2LRSzUiS9ZybHyk7sZmvj1SSB4p5iEiCkCmB7tWFkH1CF26MmtqisDu67uoraKYSawduqg477WwvLTAsjR",
  "key26": "2RFP983U6xo3MJavdiAGNTFHoCPiduFmNekF12ntK1BgYybmLqns6v8yTjN3Gxh6BkdF28Eh1grdtV5RZdmrxb6z",
  "key27": "5CfHHSb6ZU8nMcXY5YdXkAq9W9TAc4sEoyfRfgQPVu5CrgrtgzAhXBZLSeK66ARrBBurjut7mubboLooR7ub9Dsk",
  "key28": "5Sy1EFEbrZ2n7JenbuFLB19iKra3JrCZJtNA89NVmR938EpbLc25fFweVkEtAxqAq77HmwcUR5qVUzJRmgkBMKST",
  "key29": "485EgQeaQ3zjzzDdeUSouMFvCcneg4RxKzJAJiaCY9yrD9eH44mdWjpKGCDGZx6JbVXFJnrFUsdG6cMwyJUG5MJf",
  "key30": "GFUceDAWYutBvvsMXggGpeK5pqzsMzJgLD33xjTBEGBwypZAwLt1oaJ7tJPGXzD5fdnQPBGmDsr7dhTwDiM7WyY",
  "key31": "5PPjDBJvDjH3sxKFLG2sCid3vKps2FiQfTLdaAJwXh1HXFA51NUb7Z2hF8U3ift474g7JvGNaG7r2tadDwVpEmTY",
  "key32": "3Wz6BBtCuPLnNfbB62ws2QwZppEqpjZgGGs9GZskDsxP72LJwkp6JnCRDKWHr7ghN2zfHTvseBnyXRLYsFxEZ1jX",
  "key33": "2MqyGWHzkLqj6BDvzPDaYrvoifZgwd6rPD2UKg5TMSShV2gQxBzimKGFJnajQKWyPax8pfoaQeUKBiapAUNMEwAu",
  "key34": "4Bj6EwP1uGL1v6XoN17AAwdsRUmBNH7uSn6C7aY1BKJikkGXBnCjMcFFLytQ8oNQMyXeh2EMyKaTK51CE58pirDn",
  "key35": "3ExNMmTqXyiyBWxGC4n9qciccaPSmkJMW3V4zAMHyyaKjhuYJH1r1qjdFvdWisDKg1KU4LRofZZXZeBvhbMqT8AK",
  "key36": "247nzYB3WZ69AS1PxasY3yiYyHbY3vCn9dCVhgcmqcfVvXXP4RAH1J4GVwWssn9kfWoBTf1zVbmZUyseUfx2Z9xD",
  "key37": "4DDUkBwGEkSkkwUXM1nBvfg9P3n4s3kjpXCynde9WL44uyYBMtezNXUCEwU3oTvZQdjQ2ezod9Ej11yUqAY7Z83D",
  "key38": "cADiMxQsBN6RwE5wkiGNrj2SGeneYnu8CaMZC8vgLK9gujdduPxz4TKENRHwfZ9ASuBnTWCERfL7CDHqtyqB5YY",
  "key39": "4t15YmQHRjjY9ZpdWn4gNY7KCFUHhbUVVFet3W7rMjMRdYV9JwzvqFiiYfs62oqYTGUBzig3QK3F6t9VtqZmmYtH",
  "key40": "2yZ5XFj8nu6ZLHLnoU8sKZUmXoXZCvfVe4BHgZ8gnnB31Qf1EJMHZD2PMj3erbKCCVqqHgkiZMej4ZP9uNfeexQQ"
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
