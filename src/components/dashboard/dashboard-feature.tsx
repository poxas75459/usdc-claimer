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
    "mF9YgUuF4jPPBfJtjtbJ8c8Yth85a5bg8F4H5rrwwLrWtygKg8jjpzroebvn4ZjGdb4Jfm8i3XPRDdxcfckQCTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24eDuUEYtBid4aiHfY5qXdnxgASkRtFNCj3LzK4CP6TidR21CxRfckveJA6vDegLs1UUfe4PiMWnePUMChRuciti",
  "key1": "4KbqpsPaHMpdXSBewTTyejJRNmJNnssNQwsQ1nbpxJXNDynfAHxXdYUmkvHurqAmS74ysWN8xjxnvktvgLcZW8K4",
  "key2": "2xSKYv682Y3b8mQKU5rYYSFCiTgBLgwSvwXoFQGtVdTB1PYFUz8yjxJZpa8GPEvE2z2vPobNkDrQXZMYk5HKmHKw",
  "key3": "3uia5bq7Y62CQtpvAbEnZUoCcEFbxN6u1UmG426P8pV7r9CWpLEkESniRUjDD64zCDbZ6m5Tz2LE43wrT3St9MnR",
  "key4": "223CiNDEnFpUFmJez1GaMUEwkQ8GjHfEqbcctjMx7grSkUQGNb3r2ynZc7ehhQMMMmN3cZmFgHAws2DsAyk7ACaZ",
  "key5": "af9c4hTpy2y5HraoFbVoccWCTqJh9kDNuU6DrhZhEMqSdBNsbziHrtKmJGVJAZ47DQBGomKJTYMf66kcDvy66xM",
  "key6": "3G19Fkfp73jfTwiZFc6WTiWjBBD94qcAyL3hvKsfAzpagbhafRdLgDGVrnAS4mVuoo9DHSNXLeVqhFZLN9tTjvY3",
  "key7": "5G3RhEpFoKZL8YqrYsk55i7UxNh24yZ2WXbUfpobMBYEyFiMb43wbKxreKWfofhHU2DQ1WyH1MVbLu1ZCbuKitVc",
  "key8": "JYB1FtJRjchC3eswj6pUqDjjwZU4fJ3abgL1DtEiieKEwXrM7sMBhG4k2fSnueo12VSAKt8CvZoRXTQYherSXCR",
  "key9": "55kWMEoYa9UYVFEW8eLkwqaeBtiQKkCBV4DmTcsXyJP2j4unecvE5YNdT5UMNfeWk8n3ARzQxSfYS4JjHF84q1S3",
  "key10": "5vWszXLWm9aghf3yRDxvrf27mqgZeCGyqjevj3tGNVFwHXfwSM8nSi9yqHPNzMnPWsqKTUondgsa6XeSTNBVWZrQ",
  "key11": "4d8BN5wMLiU4MnjAxmN35KXvKDCHFxCYG4y6yrXf4Rcxi4wfCTrBfDATzjXbMGQ26NpCrfXeXn7Unb7dgLyCo6c",
  "key12": "5Axv6w2eX3xewHU2kkf96sj7fQWpzBr9iJFANDztJujKBft23eqYXnbsAG6KwQuKowRW6b11kwHw7ggxRQtPASLG",
  "key13": "5AzHWBALEkXWM4uj9aRRBQgFnicymdvQfFaHEcU9NDhHp7KfzViqngzxANVFGkt7RPqr5vStP9B2QuvD9GuLpUku",
  "key14": "4e4SGxW2jtpAGLKCsMJEN24uNReuJYsLFqy43382zuD2Z7JVkbdoX5uHxtMfYtEwedWj3k8Y5t2V2vaDiSafjGXt",
  "key15": "65QYCAxQdRWiM9QGhbrwt8yKipExQrYsqBNQBJfiCP34MsLTNEN91bsPyRWHy5VjRdwU1V56ggaK2BnL4bciN52G",
  "key16": "jxGSmXSnmxC5sT3KFU3SBMvmYikKewzski5YGF1Aha7W6TzQkC9f5GV3guRXHt8rgdUiCY8DP2eLdcCJY5PuAJR",
  "key17": "tRbHT6PiTkkBR2hRPAVZrFE61XpRdvv531vPqmgZkFdT3A33jN4337rWLurhimAhiGS4YkAgxpheABdoCobS3Jv",
  "key18": "4JVs6PrD2cnfp2NMG9yjfqyrFoBsZsdoiZQtmtQZiZC6WrQpAvj6H3uKFL1FpqMjNGVXair917KsuJRDV8j55UtZ",
  "key19": "74eUFGSA9Wvp89xhySQ3fwvAsow4FtJLjsDWHEvFR1NquaQFETx5h4uVHxaMApindHPJJZPsAnGxru2uAqwLeDe",
  "key20": "X6eg8y3vctnmKuCoGFhbSfEk8XiSpQszG2XJi6hdoUwmVZyojnvXkuqkximayYuoNmBTkdiKNh8bj4H6KSWCwD1",
  "key21": "wUerMwqpGcx3TBWGzNYnjnyQc7EPCbXpoRWGwHvYNAMzmxRkDtqdKaPp3z7V3YWmTZQpXXdVCTZ4ffkhoGPpuU9",
  "key22": "2oDiScMyGGfKfrioAdFLjfXUh7KqX6RNMV2W2YtC5juwxDnbvEkabVQBc4jbN1ubG7UPjLgqqUJecehdmTWq4ZHN",
  "key23": "gKry7HKZJBwbVPAhhHee2GVATwaTWWWvd7Ug2v9iiahjcEL3aegryPNTYB7T2qrtC45rnnK72yhHuDmRFbQ8jLL",
  "key24": "5FcRpeUCs8iEPGMraENZfkhjsvT3Dh4bpnm133nhbErqp7FoXezvQ7MyovV7skpZebux1FB1hfqz4JKA32JxV9B8",
  "key25": "2KFpFB7c9AHCjCZdwdp8RqUfL6VigDfsnhxH4RndoutBWo2L28BWMDKJTX9sB9cs9VJbhy6YnCV7j8MCQc3tZtQx",
  "key26": "4vD6utbs9zLxibnVumvduGYqQjoMFm8nWPUnAVhU6gtw8E1brr7X3KRQDQY37HFD56o8sYL5agHFuiGisNNwhH85"
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
