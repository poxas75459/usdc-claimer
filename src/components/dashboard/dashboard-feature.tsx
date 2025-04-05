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
    "tiy9qmTA18YjUvqA5wpamwsAX8uu9GQAais3ikGzGUourrdi8oVXVxFmsj5zAurYb6fZN4L8FBAzT2XuFAZKpKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GUW1zWFcgT1goHZ5719QG5DEbEaRXyEnLw43EGfR9L2nbsSjpwwJZhPg4UUYkJ2u6AgAM1WQPZwWqLfWJ9KADP7",
  "key1": "QEQ1BJJCaqaXm7gwe781HRe4quXWqeUD1K6ucpFKy5GVPW5DALdpvz82mvMqDHHojHtxvA57o2LKptvqnEMecJt",
  "key2": "2PsZ7jA1n7Eceo6itmmon4R9he2VjsAJpz5fiKMyAp5JPf32eSA4dRPr79m9pPPyALg71zc8BGH7JwLT7KrJYze8",
  "key3": "oi9rCipN1tVAWgRJPAVQvypnfPQMQKvF7A8cYCuX5h3b92DqBu2f7JSFhhxoJkGyCBGrpGWRvoAHX6TWBkCn197",
  "key4": "5nqHkFWVSvpcCijETnb2ErPqNZvQUZEkknYRjawi3mNMh4yBUub7Xryd5oUtE51DDmShLeY5cKm27ygwosqfjx9o",
  "key5": "5WGTqrQACj3YoVd8mFLUuv69fjeXBY4i7w6NDyjthhxxjetBobTbhaoybZxL8ryGPt1aJ8GuFECUiCATFVZQxKPt",
  "key6": "4qdVp4S4jnTRkz4CofvHVJV5dxvLkhJ5XNWwuQRXYB8MT64wGEz1FnyJp5C77paQPJvnUmwrKNmtvuPbNM13WyXP",
  "key7": "5CgV1okRfXQ3gXyfWm6RnEqZZhq13BiGBoALhrqTqFs6qsXp2hBzuTBThK7USiTgMxJfqpFnDu7jMwZc3xjgDSyU",
  "key8": "3LGTqunUfL5GUhKGv3DdUcgqXJFrzzanBTWnwWojdh5Rk8e8GuVyR1mdQ5DDayLcSBULkwcHWHi3ZL5MeJbpcD7M",
  "key9": "3JEJdqbSXcpUqj5tcPCj7qFdToBmeQDvWW85eLsooV5CpGWh6NJTyZqwQ93LiStsG9ZCkuJbgbcmafQPAZesLaPv",
  "key10": "49tzz24xvPvaUkQeo69ZLC6k9hh9uazNCEo7ir9kLPhyJKePhwKmQNSSf77d4ZpynhQu2aGicZMPsY3M68rxAUtQ",
  "key11": "316Uh83ZkdKYh4te25hx5pErdiRGXe72Y7FxjrZgVYM4JkTjz7iMrXa59HmGt8nLxpgFqx7s3Bsk1G1c8rR2e74C",
  "key12": "43JEULFL3ZSXNzQPTA18pYkVBNQg2Fr3G5NeXRceNnZhDCQGpq53ZJ19koGcCQtQBKTB1vSB5a8KK8w8wDuUrjD5",
  "key13": "vmS37TywLNifqRVtBMjndjq9m8KTR74eurkeJB5Yp9YK5nMKMrbnBAu5SwT97jgZXeTq8ULJZD5VbugRQAzV2ko",
  "key14": "49KSSLMwnmuPDRRkQNbqmYVwk7KG3y3X1LmoARyqJbdA3Ttpfdrg6ZTKXxVYtnbaJdrF2ZwJiNV7SkbrAENgyN4i",
  "key15": "3QhWNndYtQMRvbvCYvxBQPa9ke9ZKz6kEq2FTNBSoEQCoTYvpA8km6xchmtCjPh3xid7akfZcsgBzsvxHwiP68X6",
  "key16": "3va7wokiQUQ52MJDBf7bsjf3JGg6JSajHV5WbvE9RW3orr8pHmFMkycRhmSyCfiANgxmXhRryEfmNUWpDyaVP1WG",
  "key17": "2g13zycK8AF2fkDsFkiApCbnVisQNEDG1hZXxTnEnGciD4YMELwdWx7bRSuysMdnGASx4qX1CyANBqUVjSaVb6rC",
  "key18": "2dhKhAZzYiaw3z9h3hcrtHpUn9qeTVyywZfBz9xFPhPebYvdogJauxdMmEMb4ZqgH1u9Sh7jDa73Ko9Jx5H1xHvK",
  "key19": "2TZcVAawhy7E4jmEubuQL9ZE1xsdURsWywtRhqe8yPuc96dPrtfLQppTuPydc9WMg4EbBeAkNcV2KMFqfPKYMxRe",
  "key20": "3u6WfsntdGVfWRrnEL3HrcbeWTVXT9V576Mzdo8gdh8Dob2xdDmKDVEUgCTCxeJNuYAw3UxZzdEjeZgmfvYwH4TP",
  "key21": "2S3hC4EHms9oqPx2i9JbUCCi99vJoJbrwEBvWFmuWzguqfjCstNiXV2qvQD4rSgGyJiSb6mXCWexpTtJq6aPqvr5",
  "key22": "2DWHw3qSLJoW3abwGeancJ2s3tTPNahqmmR3rzLszPWrsFEFwP3t1xAW7rxxrZSDGQC7wGsECtRE2fNMehhqn6Up",
  "key23": "5EsJhGN64pJB5SjgJutNEBeFKvmUbyewb5Z1sXJFZwQoBB6jiUCbzG3PXpqXEGJdc9NVyCCQddjBCo9aWwsPrEnn",
  "key24": "58ANqkUUpCHJJQ3KPECdCDvDmF6b9EFV91yWGWSBum8qr9aJTaKKGLaXZGhSR9D7haQERvKWJ1dVHrFwGQDnR545",
  "key25": "3wFYVshV7K2XusX9E8zW5uZPTRMRCYyxv4CYFbPVK9VfXocGH63RsL37743bsfy5gtij4xwdjqEaTVT5T3sjHoob",
  "key26": "TrN9Kxxo14WutJiPNz2cwrxw6ZNCMGVgNnLkgMU3mTtJCrR1pb1TVajLNm2cxBfmunSba6ckvALLPzXbmnu4UsN",
  "key27": "3FxhrKj38toQgbWM6EYnt7eLMgjNv1gXCtqZKwkxaru41h1n94vzez5NFiw8eatQ2wNk2Yq4PJ8h5sibzgFPzmEk",
  "key28": "4NTtraHaziSt8TX6PThqU5YhxBqBGBtF1Uwi9SS8k4WMtPrkGx6dPp24eCDc5tz6FQVmRia57gaEbFcDoZ8jTPTR",
  "key29": "yspx2c4JEZET7g8yCAYToCUDboYXjFUWmXtr6LUAym8Leim5n7MvQXo8kZDLfgGNe5qHxhtMoGGtZR5PieQFqfq",
  "key30": "5k9cEBXa74MMLKsTbLCVvMjX3VbS159Ro5pqaaXeQvw3xrqq1PNfercu73487G78RD9kkPRFFcqH6nGjS4DTWAHe",
  "key31": "58pNhjzVABKmsgfRKSy1XvmJF77kG2hLW4NzKVFd6gMggiK7hVo9XhvvqcXeg5GsvAprzM9Q2KZdaRpqmFGhykY9",
  "key32": "5TpQEBHuZRKsHGCj83xqZteZRNLV1reVV7yVcwdsG8zzHVGtqBVohZTzqmuyqooKxwVvLkCqid59hXL2xveg5Ltj",
  "key33": "2udDJrJKvkTfo19PaJgUG3xfZ2PCYw39M8J4hrgttNWktjymMk3J6D1t4ofPSk6L1kHStsy7B91zvSbbGfRZSstr",
  "key34": "5J9dP4JahLrdy4AEo5rSrfopnC1k7YCoAizwGAMcGcuHARYnLwNjMyfKDN2woa4Mkcs3TnPqaXZ95BjT3EHMd9gU",
  "key35": "36xvW8dCRRXx9PCTicp4chw8DFP7SAKqbkgQJge2M63ZxFRuZyxXhVg7X8bxyZXJjMc7yJEPnzpX7sHKB5gfkio8"
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
